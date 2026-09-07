#!/usr/bin/env node
//
// LOCAL AUTHORING TOOL - not part of the build, `npm test`, or CI.
//
// Links glossary entries to each other. For every entry under src/glossary/,
// finds the first mention of each *other* entry's title that the body does
// not already link to, and reports it (default) or rewrites the file with
// that mention wrapped in a link to the entry (`--write`).
//
// Why a tool rather than a one-off edit: the glossary is the one section
// whose pages name each other constantly - a tier names the tiers above and
// below it, an index names the quantity it is derived from - and a new entry
// arrives with its mentions unlinked, in both directions. Run this after
// adding or retitling an entry; the report is the review and `--write` is
// the edit. The rules (case-sensitive whole-word match on the title and a
// few mechanical variants, longest term first, nothing inside an existing
// link/heading/code/HTML tag, one link per target at its earliest mention)
// live in lib/glossary-crosslinks.js and are pinned by
// test/glossary-crosslinks.test.js.
//
// The links it writes are ordinary markdown links, so they are checked by
// scripts/check-internal-links.js like any hand-written one. It never
// touches src/lore/ - the lore/glossary title overlap is resolved by hand,
// per the canonical glossary.
//
// Usage:
//   node scripts/link-glossary-terms.js           # report, change nothing
//   node scripts/link-glossary-terms.js --write   # rewrite the files
//
// Exit status is 0 either way; unlinked mentions are a chore, not a fault.

const fs = require("fs");
const path = require("path");
const {
  splitFrontMatter,
  titleFromFrontMatter,
  planCrossLinks,
  applyLinks,
} = require("../lib/glossary-crosslinks");

const ROOT = path.resolve(__dirname, "..");
const GLOSSARY_DIR = path.join(ROOT, "src", "glossary");
const SKIP = new Set(["index.md", "README.md"]);

const write = process.argv.includes("--write");

const entries = [];
for (const file of fs.readdirSync(GLOSSARY_DIR).sort()) {
  if (!file.endsWith(".md") || SKIP.has(file)) continue;
  const raw = fs.readFileSync(path.join(GLOSSARY_DIR, file), "utf8");
  const split = splitFrontMatter(raw);
  if (!split) continue;
  const title = titleFromFrontMatter(split.frontMatter);
  if (!title) continue;
  entries.push({ file, slug: file.replace(/\.md$/, ""), title, ...split });
}

const planned = planCrossLinks(entries);
let total = 0;
let filesTouched = 0;
for (const entry of planned) {
  if (entry.links.length === 0) continue;
  filesTouched += 1;
  total += entry.links.length;
  console.log(`${path.relative(ROOT, path.join(GLOSSARY_DIR, entry.file))}`);
  for (const link of entry.links) {
    const line = entry.body.slice(0, link.index).split("\n").length;
    console.log(`  line ${line}: "${link.text}" -> ${link.slug}`);
  }
  if (write) {
    const body = applyLinks(entry.body, entry.links);
    fs.writeFileSync(path.join(GLOSSARY_DIR, entry.file), `---\n${entry.frontMatter}\n---\n${body}`);
  }
}

if (total === 0) {
  console.log("link-glossary-terms: every cross-mention between glossary entries is already linked.");
} else {
  console.log(
    `link-glossary-terms: ${total} unlinked mention(s) in ${filesTouched} entr${filesTouched === 1 ? "y" : "ies"}` +
      (write ? " - written." : " - run with --write to link them.")
  );
}
