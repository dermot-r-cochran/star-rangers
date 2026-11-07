#!/usr/bin/env node
//
// Checks that every lore page opens with a plain summary.
//
// Dermot, 2026-11-07: "Always start lore pages with a simplified explanation
// or quick summary before adding more details and context." The lore layout
// (src/_includes/lore-entry.njk) renders a page's `plain:` front-matter line
// as the "In short" box above the body, so the rule is met by that line.
//
// A ratchet, not a gate on the past. Pages written before the rule are listed
// in scripts/lore-plain-backlog.txt, one path per line, and may lack the line
// until they get one. The check fails when:
//   - a lore page has no `plain:` line and is not on the backlog (a new page);
//   - a page on the backlog now has one (take it off, so the list only shrinks);
//   - the backlog names a file that is no longer a lore page.
//
// Run directly:
//     node scripts/check-lore-plain.js
// or, after adding summaries, rewrite the backlog to what is still missing:
//     node scripts/check-lore-plain.js --update-backlog
//
// In `npm test`.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const REPO = path.join(__dirname, "..");
const LORE = path.join(REPO, "src", "lore");
const BACKLOG = path.join(__dirname, "lore-plain-backlog.txt");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith(".md") ? [full] : [];
  });
}

const rel = (file) => path.relative(REPO, file).split(path.sep).join("/");

const lorePages = walk(LORE).filter(
  (file) => matter(fs.readFileSync(file, "utf8")).data.layout === "lore-entry.njk"
);
const missing = lorePages
  .filter((file) => !String(matter(fs.readFileSync(file, "utf8")).data.plain || "").trim())
  .map(rel)
  .sort();

if (process.argv.includes("--update-backlog")) {
  fs.writeFileSync(BACKLOG, missing.map((p) => p + "\n").join(""));
  console.log(`Backlog rewritten: ${missing.length} lore page(s) still without a plain: line.`);
  process.exit(0);
}

const backlog = fs.existsSync(BACKLOG)
  ? fs.readFileSync(BACKLOG, "utf8").split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  : [];
const pages = new Set(lorePages.map(rel));
const missingSet = new Set(missing);
const backlogSet = new Set(backlog);

const errors = [];
for (const p of missing) {
  if (!backlogSet.has(p)) errors.push(`${p}: no plain: line. A new lore page opens with one (the "In short" box).`);
}
for (const p of backlog) {
  if (!pages.has(p)) errors.push(`${p}: on the backlog but not a lore page; take it off.`);
  else if (!missingSet.has(p)) errors.push(`${p}: has a plain: line now; take it off the backlog.`);
}

if (errors.length) {
  console.error(`check-lore-plain: ${errors.length} problem(s)\n  ` + errors.join("\n  "));
  console.error("Fix the page, or run `node scripts/check-lore-plain.js --update-backlog` after adding summaries.");
  process.exit(1);
}
console.log(`check-lore-plain: ${lorePages.length - missing.length}/${lorePages.length} lore pages open with a plain summary; ${backlog.length} on the backlog.`);
