#!/usr/bin/env node
/**
 * Gathers the changelog fragments in changelog.d/ into CHANGELOG.md as the
 * section for a release, newest first, and deletes the fragments it gathered.
 * Step 2 of "Cutting a release" in TECHNICAL-README.md.
 *
 *   node scripts/gather-changelog.js 1.79.0                 # dated today
 *   node scripts/gather-changelog.js 1.79.0 --date 2026-11-25
 *   node scripts/gather-changelog.js 1.79.0 --dry-run       # print, change nothing
 *
 * Idempotent: run again with no fragments left, it changes nothing; run again
 * after a fragment has been merged mid-release, it adds that entry to the top
 * of the same section. A malformed fragment stops it before anything is
 * written (scripts/check-changelog.js names the problem). It never touches a
 * released section below the new one. The summary paragraph under the new
 * heading is still written by hand.
 */

const fs = require("fs");
const { MAIN } = require("../lib/changelog-files");
const { readFragments, checkFragments, gather } = require("../lib/changelog-fragments");

const args = process.argv.slice(2);
const version = args.find((a) => /^\d+\.\d+\.\d+$/.test(a));
const dateArg = args.includes("--date") ? args[args.indexOf("--date") + 1] : null;
const dry = args.includes("--dry-run");

if (!version) {
  console.error("Usage: node scripts/gather-changelog.js X.Y.Z [--date YYYY-MM-DD] [--dry-run]");
  process.exit(2);
}
const date = dateArg || new Date().toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error(`--date must be YYYY-MM-DD, not "${date}"`);
  process.exit(2);
}

const problems = checkFragments();
if (problems.length) {
  console.error("Not gathered: fix these fragments first.\n");
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

const frags = readFragments();
if (!frags.length) {
  console.log("No fragments in changelog.d/ - nothing to gather.");
  process.exit(0);
}

const before = fs.readFileSync(MAIN, "utf8");
const after = gather(before, frags, version, date);

if (dry) {
  console.log(after.slice(0, after.indexOf(`## [${version}]`) + 4000));
  process.exit(0);
}

fs.writeFileSync(MAIN, after);
for (const f of frags) fs.unlinkSync(f.file);
console.log(`Gathered ${frags.length} fragment(s) into ## [${version}] — ${date} and removed them.`);
console.log("Now write the release's short summary paragraph under its heading.");
