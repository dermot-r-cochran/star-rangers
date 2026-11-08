#!/usr/bin/env node
//
// Checks that every lore page and every glossary entry opens with a plain
// summary.
//
// Dermot, 2026-11-07: "Always start lore pages with a simplified explanation
// or quick summary before adding more details and context." Extended to the
// glossary on 2026-11-08 ("Yes, extend it"). Both layouts
// (src/_includes/lore-entry.njk, glossary-entry.njk) render a page's `plain:`
// front-matter line as the "In short" box above the body, so the rule is met
// by that line. A glossary `short` does not meet it: only the index shows it.
//
// A ratchet, not a gate on the past. Pages written before the rule are listed
// in a backlog per section (scripts/lore-plain-backlog.txt,
// scripts/glossary-plain-backlog.txt), one path per line, and may lack the
// line until they get one. The check fails when:
//   - a page has no `plain:` line and is not on its backlog (a new page);
//   - a page on a backlog now has one (take it off, so the list only shrinks);
//   - a backlog names a file that is no longer a page of its section.
//
// Run directly:
//     node scripts/check-lore-plain.js
// or, after adding summaries, rewrite the backlogs to what is still missing:
//     node scripts/check-lore-plain.js --update-backlog
//
// In `npm test`.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const REPO = path.join(__dirname, "..");

const SECTIONS = [
  {
    name: "lore",
    noun: "lore page",
    dir: path.join(REPO, "src", "lore"),
    layout: "lore-entry.njk",
    backlog: path.join(__dirname, "lore-plain-backlog.txt"),
  },
  {
    name: "glossary",
    noun: "glossary entry",
    dir: path.join(REPO, "src", "glossary"),
    layout: "glossary-entry.njk",
    backlog: path.join(__dirname, "glossary-plain-backlog.txt"),
  },
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith(".md") ? [full] : [];
  });
}

const rel = (file) => path.relative(REPO, file).split(path.sep).join("/");
const readBacklog = (file) =>
  fs.existsSync(file)
    ? fs.readFileSync(file, "utf8").split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
    : [];

const updating = process.argv.includes("--update-backlog");
const errors = [];
const summary = [];

for (const section of SECTIONS) {
  const pages = walk(section.dir).filter(
    (file) => matter(fs.readFileSync(file, "utf8")).data.layout === section.layout
  );
  const missing = pages
    .filter((file) => !String(matter(fs.readFileSync(file, "utf8")).data.plain || "").trim())
    .map(rel)
    .sort();

  if (updating) {
    fs.writeFileSync(section.backlog, missing.map((p) => p + "\n").join(""));
    console.log(`Backlog rewritten: ${missing.length} ${section.noun}(s) still without a plain: line.`);
    continue;
  }

  const backlog = readBacklog(section.backlog);
  const pageSet = new Set(pages.map(rel));
  const missingSet = new Set(missing);
  const backlogSet = new Set(backlog);

  for (const p of missing) {
    if (!backlogSet.has(p)) errors.push(`${p}: no plain: line. A new ${section.noun} opens with one (the "In short" box).`);
  }
  for (const p of backlog) {
    if (!pageSet.has(p)) errors.push(`${p}: on the ${section.name} backlog but not a ${section.noun}; take it off.`);
    else if (!missingSet.has(p)) errors.push(`${p}: has a plain: line now; take it off the ${section.name} backlog.`);
  }
  summary.push(`${pages.length - missing.length}/${pages.length} ${section.name} pages open with a plain summary; ${backlog.length} on the backlog`);
}

if (updating) process.exit(0);

if (errors.length) {
  console.error(`check-lore-plain: ${errors.length} problem(s)\n  ` + errors.join("\n  "));
  console.error("Fix the page, or run `node scripts/check-lore-plain.js --update-backlog` after adding summaries.");
  process.exit(1);
}
console.log(`check-lore-plain: ${summary.join("; ")}.`);
