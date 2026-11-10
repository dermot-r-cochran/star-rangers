// Locked pages: the pure rules behind scripts/lock-pages.js and
// scripts/check-locked-pages.js (Dermot's ruling, 2026-11-10; CLAUDE.md,
// "Existing canon changes only by extension, clarification, or genuine
// dilemma").
//
// A page locks when someone other than Dermot comments on, replies in or
// reacts to its giscus discussion, or when he locks it by hand. A locked
// page's assertions are frozen: only the edits in LOCK_REASONS are allowed,
// each named in a `Locked-Page:` commit trailer. Nothing here touches the
// network or the disk, so test/locked-pages.test.js can pin every rule.

const OWNER_LOGIN = "dermot-r-cochran";

// The only edits a locked page may take, each a plain error or bookkeeping.
const LOCK_REASONS = ["typo", "link", "image", "arithmetic", "chronology", "terminology"];
const LOCK_SIGNALS = ["comment", "views"];

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Registry shape: { pages: [{ path, since, signal, ref }] }. `fileExists` is a
// callable so the check can run against the disk or a fake.
function validateRegistry(obj, fileExists) {
  const errors = [];
  if (!obj || typeof obj !== "object" || !Array.isArray(obj.pages)) {
    return ['registry must be an object with a "pages" array'];
  }
  const seen = new Set();
  obj.pages.forEach((entry, i) => {
    const where = `pages[${i}]`;
    if (!entry || typeof entry !== "object") {
      errors.push(`${where}: not an object`);
      return;
    }
    const { path: p, since, signal, ref } = entry;
    if (typeof p !== "string" || !p.startsWith("src/") || !p.endsWith(".md")) {
      errors.push(`${where}: path must be a "src/....md" string (got ${JSON.stringify(p)})`);
    } else {
      if (seen.has(p)) errors.push(`${where}: duplicate path ${p}`);
      seen.add(p);
      if (!fileExists(p)) errors.push(`${where}: ${p} does not exist on disk`);
    }
    if (typeof since !== "string" || !DATE_RE.test(since) || Number.isNaN(Date.parse(since))) {
      errors.push(`${where}: since must be a YYYY-MM-DD date (got ${JSON.stringify(since)})`);
    }
    if (!LOCK_SIGNALS.includes(signal)) {
      errors.push(`${where}: signal must be one of ${LOCK_SIGNALS.join(", ")} (got ${JSON.stringify(signal)})`);
    }
    if (typeof ref !== "string" || !ref.trim()) {
      errors.push(`${where}: ref must be a non-empty string (a discussion URL or a short note)`);
    }
  });
  return errors;
}

// How giscus forms a discussion's term, quoted from its client script
// (giscus/giscus, client.ts, the `case 'pathname'` branch, lines 72-77):
//   location.pathname.length < 2
//     ? 'index'
//     : location.pathname.substring(1).replace(/\.\w+$/, '')
// So a leading "/" is dropped, a trailing file extension is dropped, and the
// root is "index". A directory URL keeps its trailing slash: "/lore/x/" is the
// term "lore/x/". With data-strict="1" the discussion is then found by a SHA-1
// of that term in its body (services/github/getDiscussion.ts, lines 145-153),
// and the discussion is titled with the term itself, so the title is the term.
function pathnameTerm(pathname) {
  return pathname.length < 2 ? "index" : pathname.substring(1).replace(/\.\w+$/, "");
}

// Eleventy's default URL for a source file, or null for one we cannot know.
// `permalink` wins when it is a plain string; a templated one (`{{`) is skipped
// rather than guessed.
function urlForSource(sourcePath, data) {
  const permalink = data && data.permalink;
  if (typeof permalink === "string") {
    if (permalink.includes("{{") || permalink.includes("{%")) return null;
    return permalink.startsWith("/") ? permalink : `/${permalink}`;
  }
  if (permalink !== undefined) return null; // false or an object
  const rel = sourcePath.replace(/^src\//, "").replace(/\.md$/, "");
  if (rel === "index") return "/";
  if (rel.endsWith("/index")) return `/${rel.slice(0, -"index".length)}`;
  return `/${rel}/`;
}

// files: [{ path: "src/....md", data: <front matter> }]
// -> { byCommentId: Map(comment_id -> path), byTerm: Map(pathname term -> path) }
function buildIndex(files) {
  const byCommentId = new Map();
  const byTerm = new Map();
  for (const { path: p, data } of files) {
    if (/^src\/(_includes|_data)\//.test(p)) continue;
    if (p.endsWith("/README.md") || p === "src/README.md") continue;
    const d = data || {};
    if (typeof d.comment_id === "string" && d.comment_id) {
      if (!byCommentId.has(d.comment_id)) byCommentId.set(d.comment_id, p);
      // src/chapter-aliases.njk gives every chapter a permanent /c/<comment_id>/.
      const alias = pathnameTerm(`/c/${d.comment_id}/`);
      if (!byTerm.has(alias)) byTerm.set(alias, p);
    }
    const url = urlForSource(p, d);
    if (url) {
      const term = pathnameTerm(url);
      if (!byTerm.has(term)) byTerm.set(term, p);
    }
  }
  return { byCommentId, byTerm };
}

// A discussion title (giscus's term) -> the source file it belongs to, or null.
// Pages with a comment_id map "specific" (term = comment_id). Scene-POV pages
// use "<chapter comment_id>-scene-<N>-<character id>" (src/scene-pov.njk) and
// lock their chapter. Everything else maps by pathname.
function termToSource(term, index) {
  if (typeof term !== "string" || !term) return null;
  if (index.byCommentId.has(term)) return index.byCommentId.get(term);

  // Longest chapter comment_id that prefixes a scene-POV term wins, so an id
  // that is itself a prefix of another cannot steal the match.
  let best = null;
  for (const id of index.byCommentId.keys()) {
    if (new RegExp(`^${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-scene-\\d+-.+$`).test(term)) {
      if (best === null || id.length > best.length) best = id;
    }
  }
  if (best !== null) return index.byCommentId.get(best);

  // Pathname terms. The Pages build serves under /star-rangers/ but has
  // comments off, so no prefix is expected; strip it defensively.
  const stripped = term.replace(/^star-rangers\//, "");
  if (index.byTerm.has(stripped)) return index.byTerm.get(stripped);
  return null;
}

// messages: array of commit-message strings.
// -> { valid: [{path, reason, note}], malformed: [{line, why}] }
const TRAILER_RE = /^Locked-Page:\s*(\S+)\s*\(([^)]*)\):\s*(.*?)\s*$/;
function parseLockTrailers(messages) {
  const valid = [];
  const malformed = [];
  for (const message of messages) {
    for (const raw of String(message).split(/\r?\n/)) {
      const line = raw.trim();
      if (!line.startsWith("Locked-Page:")) continue;
      const m = TRAILER_RE.exec(line);
      if (!m) {
        malformed.push({ line, why: "expected `Locked-Page: <path> (<reason>): <note>`" });
        continue;
      }
      const [, p, reason, note] = m;
      if (!LOCK_REASONS.includes(reason)) {
        malformed.push({ line, why: `reason "${reason}" is not one of ${LOCK_REASONS.join(", ")}` });
      } else if (!note) {
        malformed.push({ line, why: "the note is empty; say what was wrong" });
      } else {
        valid.push({ path: p, reason, note });
      }
    }
  }
  return { valid, malformed };
}

// changedFiles: [{ status, path, oldPath? }] (a rename lists both paths).
// -> locked paths changed without a valid trailer naming that path.
function violations(changedFiles, registry, trailers) {
  const locked = new Set(((registry && registry.pages) || []).map((e) => e.path));
  const named = new Set((trailers || []).map((t) => t.path));
  const hit = new Set();
  for (const f of changedFiles) {
    for (const p of [f.path, f.oldPath]) {
      if (p && locked.has(p) && !named.has(p)) hit.add(p);
    }
  }
  return [...hit].sort();
}

// Entries are only ever added. -> paths locked on the base branch that the
// changed registry no longer lists.
function removedLocks(baseRegistry, headRegistry) {
  const head = new Set(((headRegistry && headRegistry.pages) || []).map((e) => e.path));
  return ((baseRegistry && baseRegistry.pages) || []).map((e) => e.path).filter((p) => !head.has(p)).sort();
}

// Parse `git diff --name-status` output into changedFiles.
function parseNameStatus(text) {
  const out = [];
  for (const line of text.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const parts = line.split("\t");
    const status = parts[0];
    if (/^[RC]/.test(status) && parts.length >= 3) out.push({ status, oldPath: parts[1], path: parts[2] });
    else if (parts.length >= 2) out.push({ status, path: parts[1] });
  }
  return out;
}

// items: [{ login, at }] gathered from a discussion's comments, replies and
// reactors. -> { login, at } of the earliest reader (not the owner, not a
// `[bot]` account), or null.
function firstReaderActivity(items, owner = OWNER_LOGIN) {
  let first = null;
  for (const it of items) {
    if (!it || !it.login) continue;
    if (it.login === owner || it.login.endsWith("[bot]")) continue;
    if (first === null || String(it.at) < String(first.at)) first = it;
  }
  return first;
}

module.exports = {
  OWNER_LOGIN,
  LOCK_REASONS,
  LOCK_SIGNALS,
  validateRegistry,
  pathnameTerm,
  urlForSource,
  buildIndex,
  termToSource,
  parseLockTrailers,
  violations,
  removedLocks,
  parseNameStatus,
  firstReaderActivity,
};
