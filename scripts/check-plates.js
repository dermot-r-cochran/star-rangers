#!/usr/bin/env node
//
// THE PLATES RULES (lib/plates.js; Dermot's "Yes, build it", 2026-11-07).
//
// Per edition with a selection, every plate must:
//   - name a lore, character or codex page that exists;
//   - show a real image: the page's own `image`, or the plate's `image`
//     override, present under src/images/ and not a placeholder;
//   - be a page that edition carries, by the same inclusion test a deploy of
//     the edition applies, so no plate opens on the "Not included in this
//     edition" placeholder;
// and a selection may not name a page twice, run past MAX_PLATES, or be keyed
// by an edition id that does not exist.
//
// The template drops a plate whose page the build does not carry, so without
// this check a bad entry would vanish from a live edition silently.
//
// Part of `npm test` since 2026-11-07. No arguments.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const { allEditions, DEFAULT_EDITION } = require("../lib/editions");
const { isContentIncluded } = require("../lib/classify-content");
const { getRelatedContentUrls } = require("../lib/content-filter");
const { isPlaceholderImage } = require("../lib/placeholder-marker");
const { MAX_PLATES, PLATES } = require("../lib/plates");

const REPO = path.join(__dirname, "..");
const SRC = path.join(REPO, "src");
const KINDS = { characters: "characters", lore: "lore", codex: "codex" };

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".md") && entry.name !== "README.md" && entry.name !== "index.md") out.push(full);
  }
  return out;
}

const rel = (file) => path.relative(REPO, file).split(path.sep).join("/");

// As scripts/check-children-glossary.js computes it.
function urlFor(file, data) {
  if (data.permalink) {
    const p = String(data.permalink);
    return p.startsWith("/") ? p : `/${p}`;
  }
  let url = "/" + path.relative(SRC, file).split(path.sep).join("/");
  url = url.replace(/\.md$/, "");
  if (!url.endsWith("/")) url += "/";
  return url;
}

// The same shape as filterFor in scripts/check-children-glossary.js and
// scripts/validate-content.js: what a deploy of the edition sees.
function filterFor(edition) {
  const lower = (list) => (Array.isArray(list) ? list : []).map((s) => String(s).trim().toLowerCase()).filter(Boolean);
  const characters = lower(edition.characters);
  const topics = lower(edition.topics);
  const threads = lower(edition.threads);
  const filter = {
    characters,
    topics,
    threads,
    tagMatches: new Set([...characters, ...topics, ...threads]),
    active: characters.length > 0 || topics.length > 0 || threads.length > 0,
    tier: edition.tier
  };
  filter.relatedUrls = getRelatedContentUrls(filter);
  return filter;
}

function main() {
  const failures = [];
  const editions = new Map(
    [DEFAULT_EDITION, ...allEditions()].map((e) => [e.id, { ...DEFAULT_EDITION, ...e }])
  );

  const pages = new Map();
  for (const [dir, kind] of Object.entries(KINDS)) {
    for (const file of walk(path.join(SRC, dir))) {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      pages.set(urlFor(file, data), { file, data, kind });
    }
  }

  const ids = Object.keys(PLATES);
  for (const id of ids) {
    const edition = editions.get(id);
    const list = PLATES[id] || [];
    if (!edition) {
      failures.push(`lib/plates.js: "${id}" is not an edition id in lib/editions.js.`);
      continue;
    }
    if (list.length > MAX_PLATES) failures.push(`${id}: ${list.length} plates; a selection holds at most ${MAX_PLATES}.`);
    const filter = filterFor(edition);
    const seen = new Set();
    for (const plate of list) {
      const where = `${id}: ${plate.page}`;
      if (seen.has(plate.page)) failures.push(`${where}: named twice.`);
      seen.add(plate.page);
      const page = pages.get(plate.page);
      if (!page) {
        failures.push(`${where}: no lore, character or codex page has this URL.`);
        continue;
      }
      const image = plate.image || (page.data.image ? `${page.kind}/${page.data.image}` : null);
      if (!image) failures.push(`${where}: the page has no image and the plate names none.`);
      else {
        const abs = path.join(SRC, "images", image);
        if (!fs.existsSync(abs)) failures.push(`${where}: image src/images/${image} does not exist.`);
        else if (isPlaceholderImage(abs)) failures.push(`${where}: src/images/${image} is a placeholder.`);
      }
      if (plate.image && !plate.alt) failures.push(`${where}: a plate that names its own image needs its own alt.`);
      const data = { ...page.data, page: { inputPath: "./" + rel(page.file), url: plate.page } };
      if (filter.active || filter.tier) {
        if (!isContentIncluded(data, filter)) failures.push(`${where}: the ${id} edition does not carry this page.`);
      }
    }
    console.log(`check-plates: ${id}: ${list.length} plate(s).`);
  }

  if (failures.length) {
    console.error(`check-plates: ${failures.length} problem(s)\n  ` + failures.join("\n  "));
    process.exit(1);
  }
  if (!ids.length) console.log("check-plates: no edition has a selection yet; nothing to check.");
}

main();
