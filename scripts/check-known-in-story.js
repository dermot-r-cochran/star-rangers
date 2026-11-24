#!/usr/bin/env node
//
// Checks the "In the story" line on lore pages: a `known:` value must be one
// of the keys in lib/known-in-story.js, an `era:` one of its eras, and `known_note:` needs `known:`.
// Pages without the line pass; it is filled page by page, not a gate.
// Also prints how many lore pages carry it.
//
// In `npm test`.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { knownProblems } = require("../lib/known-in-story");

const REPO = path.join(__dirname, "..");
const LORE = path.join(REPO, "src", "lore");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    return e.name.endsWith(".md") ? [full] : [];
  });
}

let pages = 0;
let carrying = 0;
let dated = 0;
const errors = [];
for (const file of walk(LORE)) {
  const { data } = matter(fs.readFileSync(file, "utf8"));
  if (data.layout !== "lore-entry.njk") continue;
  pages++;
  if (data.known) carrying++;
  if (data.era) dated++;
  for (const p of knownProblems(data)) {
    errors.push(`${path.relative(REPO, file).split(path.sep).join("/")}: ${p}`);
  }
}

if (errors.length) {
  console.error("check-known-in-story: " + errors.length + " problem(s)\n  " + errors.join("\n  "));
  process.exit(1);
}
console.log(`check-known-in-story: ok, ${carrying} of ${pages} lore pages say how widely they are known in the story, ${dated} say when.`);
