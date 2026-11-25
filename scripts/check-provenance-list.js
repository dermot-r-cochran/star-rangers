#!/usr/bin/env node
//
// THE PROVENANCE LIST (src/_data/provenance.json; Dermot, 21 November 2026:
// "Add the list too", beside "If metadata allows then all altered or
// generated images may be tagged as such, from now on" and "Likewise for
// videos"). Why and how: story-bible/images.md, Conventions, "The provenance
// list".
//
// Fails when:
//   - an image or clip under src/images/ or src/video/ (jpg, jpeg, png, webp,
//     svg, mp4) has no entry: a file filed from now on is listed by
//     scripts/tag-provenance.js, or by import-image.ps1 for his own frames;
//   - an entry names a file that does not exist, or is listed twice;
//   - an entry's source is not one the list knows, or its iptc code is not
//     the one that source maps to;
//   - an entry says tagged: true and the file's XMP does not carry that code;
//   - an entry is "unrecorded" and was not one of the eighteen the list was
//     built with on 21 November 2026 (a new file is classified when filed).
// Warns, and does not fail, for those eighteen while they stay unrecorded.
//
// In `npm test`. No arguments.

const fs = require("fs");
const path = require("path");
const tp = require("./tag-provenance");

const REPO = path.join(__dirname, "..");

// The files the record could not settle when the list was built. Shrinks
// only: classify one by editing its entry, never by adding a path here.
const UNRECORDED_ON_LISTING = new Set([
  "src/images/characters/aldera/field-photo-01.jpg",
  "src/images/characters/aldera/field-photo-02.jpg",
  "src/images/lore/autumn-canopy.jpg",
  "src/images/lore/boirinn-uplands-mist.jpg",
  "src/images/lore/coastal-sunset.jpg",
  "src/images/lore/crimson-blossom-macro.jpg",
  "src/images/lore/elder-fig-grove.jpg",
  "src/images/lore/five-layers.jpg",
  "src/images/lore/highland-cloud-sea.jpg",
  "src/images/lore/highland-scrub-road.jpg",
  "src/images/lore/scarlet-thread-bloom.jpg",
  "src/images/lore/star-rangers-academy.jpg",
  "src/images/lore/violet-spike-inflorescence.jpg",
  "src/images/lore/wading-heron.jpg",
  "src/images/lore/wetland-treeline-reflection.jpg",
  "src/images/lore/white-flower-macro.jpg",
  "src/video/baby-universe.mp4",
]);

function walk(repo, dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(repo, full, out);
    else if (tp.LISTED_EXT.test(entry.name)) out.push(path.relative(repo, full).split(path.sep).join("/"));
  }
  return out;
}

function check(repo = REPO, listPath = path.join(repo, "src", "_data", "provenance.json")) {
  const errors = [];
  const warnings = [];
  const list = tp.readList(listPath);
  const files = [...walk(repo, path.join(repo, "src", "images")), ...walk(repo, path.join(repo, "src", "video"))];
  const byPath = new Map();
  for (const e of list.entries) {
    if (byPath.has(e.path)) errors.push(`${e.path}: listed twice`);
    byPath.set(e.path, e);
    if (!fs.existsSync(path.join(repo, e.path))) { errors.push(`${e.path}: listed, but no such file`); continue; }
    if (!(e.source in tp.LIST_SOURCES)) { errors.push(`${e.path}: unknown source "${e.source}"`); continue; }
    if (e.iptc !== tp.LIST_SOURCES[e.source]) errors.push(`${e.path}: iptc "${e.iptc}" does not match source ${e.source} (${tp.LIST_SOURCES[e.source]})`);
    if (e.tagged) {
      const x = tp.readXmp(fs.readFileSync(path.join(repo, e.path)));
      const dst = x && tp.summarise(x).DigitalSourceType;
      if (dst !== tp.CODE_BASE + e.iptc) errors.push(`${e.path}: tagged: true, but the file carries ${dst || "no XMP DigitalSourceType"}`);
    }
    if (e.source === "unrecorded") {
      if (UNRECORDED_ON_LISTING.has(e.path)) warnings.push(e.path);
      else errors.push(`${e.path}: "unrecorded" is only for files the record could not settle on 21 November 2026; classify it when filing`);
    }
  }
  for (const f of files) {
    if (!byPath.has(f)) errors.push(`${f}: no entry in src/_data/provenance.json (tag it with scripts/tag-provenance.js, or --source photograph for his own frame)`);
  }
  return { errors, warnings, files: files.length, entries: list.entries.length };
}

if (require.main === module) {
  const { errors, warnings, files, entries } = check();
  if (warnings.length) {
    console.warn(`check-provenance-list: ${warnings.length} entr${warnings.length === 1 ? "y" : "ies"} still unrecorded (warning only):`);
    for (const w of warnings) console.warn(`  ${w}`);
  }
  if (errors.length) {
    console.error(`check-provenance-list: ${errors.length} problem(s):`);
    for (const e of errors) console.error(`  ${e}`);
    process.exitCode = 1;
  } else {
    console.log(`check-provenance-list: ${files} files, ${entries} entries, all listed.`);
  }
}

module.exports = { check, UNRECORDED_ON_LISTING };
