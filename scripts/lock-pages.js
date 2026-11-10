#!/usr/bin/env node
//
// Finds pages that have readers and adds them to lib/locked-pages.json.
//
// Dermot's ruling (2026-11-10): once readers appear, pages get locked. A page
// locks when someone other than him comments on, replies in or reacts to its
// giscus discussion; he can also lock one by hand (from Search Console views).
// Rules and the pure functions are in lib/locked-pages.js.
//
// Reads both comment boards, Star-Rangers/sciencefiction-site-comments and
// Star-Rangers/churchspace-site-comments, through GitHub's public API.
// GITHUB_TOKEN is used when set and the script works without one, but then
// reactions can only be counted, not attributed (see "Reactions" below).
//
//     node scripts/lock-pages.js                    # dry run: print what would lock
//     node scripts/lock-pages.js --write            # append the new entries
//     node scripts/lock-pages.js --add src/lore/x.md --signal views --ref "Search Console, 2026-12-01"
//
// Entries are only ever added, never removed. Not part of `npm test`: it needs
// the network, and the offline suite stays offline.
//
// Reactions. The REST API lists comments and replies with their authors, but
// only gives a reaction *count*, not who reacted. With a token the script asks
// GraphQL, which names the reactors. Without one, a discussion whose only sign
// of life is a reaction is reported as "unverified" and is NOT locked, since
// the reaction may be Dermot's own.

const fs = require("fs");
const path = require("path");
const https = require("https");
const matter = require("gray-matter");
const lib = require("../lib/locked-pages");

const REPO = path.join(__dirname, "..");
const SRC = path.join(REPO, "src");
const REGISTRY = path.join(REPO, "lib", "locked-pages.json");
const BOARDS = [
  "Star-Rangers/sciencefiction-site-comments",
  "Star-Rangers/churchspace-site-comments",
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (full.endsWith(".md")) out.push(full);
  }
  return out;
}

function loadIndex() {
  const files = [];
  for (const full of walk(SRC)) {
    const rel = path.relative(REPO, full).replace(/\\/g, "/");
    try {
      files.push({ path: rel, data: matter.read(full).data || {} });
    } catch (err) {
      console.warn(`Could not parse front matter: ${rel} (${err.message})`);
    }
  }
  return lib.buildIndex(files);
}

function request(method, url, body) {
  const headers = { "User-Agent": "lock-pages", Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  if (body) headers["Content-Type"] = "application/json";
  return new Promise((resolve, reject) => {
    const req = https.request(url, { method, headers }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try { resolve({ json: JSON.parse(data || "null"), headers: res.headers }); }
          catch (err) { reject(new Error(`bad JSON from ${url}`)); }
        } else {
          reject(new Error(`${method} ${url} -> HTTP ${res.statusCode}: ${data.slice(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function restPages(urlPath) {
  const out = [];
  for (let page = 1; ; page++) {
    const sep = urlPath.includes("?") ? "&" : "?";
    const { json } = await request("GET", `https://api.github.com${urlPath}${sep}per_page=100&page=${page}`);
    if (!Array.isArray(json) || json.length === 0) break;
    out.push(...json);
    if (json.length < 100) break;
  }
  return out;
}

const REACTORS = "reactions(first: 100) { nodes { createdAt user { login } } }";
const GQL = `query($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name) { discussion(number: $number) {
    ${REACTORS}
    comments(first: 100) { nodes { createdAt author { login } ${REACTORS}
      replies(first: 100) { nodes { createdAt author { login } ${REACTORS} } } } }
  } }
}`;

// Everything anyone did in one discussion, as [{ login, at }].
async function activity(board, d, notes) {
  const items = [{ login: d.user && d.user.login, at: d.created_at }];
  const [owner, name] = board.split("/");

  if (process.env.GITHUB_TOKEN) {
    const { json } = await request("POST", "https://api.github.com/graphql", {
      query: GQL, variables: { owner, name, number: d.number },
    });
    const disc = json && json.data && json.data.repository && json.data.repository.discussion;
    if (!disc) throw new Error(`GraphQL returned no discussion for ${board}#${d.number}`);
    const react = (r) => (r.nodes || []).forEach((n) => items.push({ login: n.user && n.user.login, at: n.createdAt }));
    react(disc.reactions);
    for (const c of disc.comments.nodes) {
      items.push({ login: c.author && c.author.login, at: c.createdAt });
      react(c.reactions);
      for (const r of c.replies.nodes) {
        items.push({ login: r.author && r.author.login, at: r.createdAt });
        react(r.reactions);
      }
    }
    return items;
  }

  // Unauthenticated: comments and replies by author; reactions by count only.
  const comments = await restPages(`/repos/${board}/discussions/${d.number}/comments`);
  let reactions = (d.reactions && d.reactions.total_count) || 0;
  for (const c of comments) {
    items.push({ login: c.user && c.user.login, at: c.created_at });
    reactions += (c.reactions && c.reactions.total_count) || 0;
    if (c.child_comment_count > 0) {
      try {
        // Unverified path: the replies route and its id parameter are from the
        // API docs, not exercised against a real reply.
        const replies = await restPages(`/repos/${board}/discussions/${d.number}/comments/${c.id}/replies`);
        for (const r of replies) {
          items.push({ login: r.user && r.user.login, at: r.created_at });
          reactions += (r.reactions && r.reactions.total_count) || 0;
        }
      } catch (err) {
        notes.push(`replies of ${board}#${d.number} comment ${c.id} not readable (${err.message.split(":")[0]})`);
      }
    }
  }
  if (reactions > 0) items.reactionsUnverified = reactions;
  return items;
}

function readRegistry() {
  return JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
}

function writeRegistry(reg) {
  fs.writeFileSync(REGISTRY, JSON.stringify(reg, null, 2) + "\n");
}

function arg(name) {
  const i = process.argv.indexOf(name);
  return i === -1 ? null : process.argv[i + 1];
}

async function main() {
  const write = process.argv.includes("--write");
  const registry = readRegistry();
  const have = new Set(registry.pages.map((e) => e.path));

  const addPath = arg("--add");
  if (addPath) {
    const signal = arg("--signal") || "views";
    const ref = arg("--ref");
    const entry = { path: addPath, since: new Date().toISOString().slice(0, 10), signal, ref };
    const errors = lib.validateRegistry({ pages: [entry] }, (p) => fs.existsSync(path.join(REPO, p)));
    if (have.has(addPath)) errors.push(`${addPath} is already locked`);
    if (errors.length) {
      console.error("Cannot add:\n  " + errors.join("\n  "));
      process.exit(1);
    }
    registry.pages.push(entry);
    writeRegistry(registry);
    console.log(`Locked ${addPath} (${signal}: ${ref})`);
    return;
  }

  const index = loadIndex();
  const toLock = new Map(); // path -> entry
  const unmapped = [];
  const unverified = [];
  const notes = [];
  let seen = 0;

  for (const board of BOARDS) {
    const discussions = await restPages(`/repos/${board}/discussions`);
    for (const d of discussions) {
      seen++;
      const items = await activity(board, d, notes);
      const first = lib.firstReaderActivity(items);
      if (!first) {
        if (items.reactionsUnverified) unverified.push(`${d.title} (${board}#${d.number}, ${items.reactionsUnverified} reaction(s))`);
        continue;
      }
      const source = lib.termToSource(d.title, index);
      if (!source) {
        unmapped.push(`${d.title} (${d.html_url})`);
        continue;
      }
      if (have.has(source) || toLock.has(source)) continue;
      toLock.set(source, {
        path: source,
        since: String(first.at).slice(0, 10),
        signal: "comment",
        ref: d.html_url,
      });
    }
  }

  console.log(`Read ${seen} discussion(s) across ${BOARDS.length} boards${process.env.GITHUB_TOKEN ? " (with token)" : " (no token)"}.`);
  if (unmapped.length) console.log(`\nReader activity on titles that map to no page (ignored):\n  ${unmapped.join("\n  ")}`);
  if (unverified.length) console.log(`\nReactions of unknown authorship (not locked; set GITHUB_TOKEN to attribute them):\n  ${unverified.join("\n  ")}`);
  for (const n of notes) console.warn(`note: ${n}`);

  if (toLock.size === 0) {
    console.log("\nNothing to lock.");
    return;
  }
  console.log(`\n${write ? "Locking" : "Would lock"} ${toLock.size} page(s):`);
  for (const e of toLock.values()) console.log(`  ${e.path}  since ${e.since}  ${e.ref}`);
  if (write) {
    registry.pages.push(...toLock.values());
    writeRegistry(registry);
  } else {
    console.log("\nDry run. Re-run with --write to add them.");
  }
}

main().catch((err) => {
  console.error(`lock-pages failed: ${err.message}`);
  process.exit(1);
});
