#!/usr/bin/env node
//
// Locked-pages gate (Dermot's ruling, 2026-11-10; rules in lib/locked-pages.js).
//
//     node scripts/check-locked-pages.js --validate   # registry shape only (in `npm test`)
//     node scripts/check-locked-pages.js              # CI: fail a PR that changes a locked page
//                                                     #     without a Locked-Page trailer
//
// A locked page's assertions are frozen. The only edits allowed are a typo, a
// link, image bookkeeping, or a plain error of arithmetic, chronology or
// terminology, each named in a commit trailer:
//
//     Locked-Page: src/lore/example.md (typo): "teh" -> "the" in the second paragraph
//
// The default mode diffs HEAD against the base branch (GITHUB_BASE_REF, else
// main) and reads the commit messages in between, so it needs full history,
// which CI's checkout has (fetch-depth: 0). With an empty registry it passes
// without touching git.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const lib = require("../lib/locked-pages");

const REPO = path.join(__dirname, "..");
const registry = JSON.parse(fs.readFileSync(path.join(REPO, "lib", "locked-pages.json"), "utf8"));

const errors = lib.validateRegistry(registry, (p) => fs.existsSync(path.join(REPO, p)));
if (errors.length) {
  console.error("Locked-pages registry is invalid (lib/locked-pages.json):");
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

if (process.argv.includes("--validate")) {
  console.log(`Locked-pages registry: ${registry.pages.length} locked page(s), valid.`);
  process.exit(0);
}

if (registry.pages.length === 0) {
  console.log("Locked pages: none locked yet, nothing to check.");
  process.exit(0);
}

const base = `origin/${process.env.GITHUB_BASE_REF || "main"}`;
function git(...args) {
  return execFileSync("git", args, { cwd: REPO, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

let changed;
let messages;
try {
  changed = lib.parseNameStatus(git("diff", "--name-status", `${base}...HEAD`));
  messages = git("log", "--format=%B%x00", `${base}..HEAD`).split("\0");
} catch (err) {
  console.error(`Locked pages: could not diff against ${base} (${err.message.split("\n")[0]}).`);
  console.error("The check needs full history; fetch the base branch first.");
  process.exit(1);
}

const { valid, malformed } = lib.parseLockTrailers(messages);
const bad = lib.violations(changed, registry, valid);

if (bad.length === 0) {
  console.log(`Locked pages: ${registry.pages.length} locked, ${changed.length} file(s) changed against ${base}, no violations.`);
  process.exit(0);
}

console.error(`Locked pages: this change touches ${bad.length} locked page(s) without a trailer naming it:`);
for (const p of bad) {
  const entry = registry.pages.find((e) => e.path === p);
  console.error(`  ${p}  (locked ${entry.since}, ${entry.signal}: ${entry.ref})`);
}
console.error(`\nA locked page's assertions are frozen. Allowed edits: ${lib.LOCK_REASONS.join(", ")}.`);
console.error("Name each in a commit message trailer, and state it in the changelog:");
console.error("  Locked-Page: <path> (<reason>): <what was wrong>");
for (const m of malformed) console.error(`\nMalformed trailer ignored: ${m.line}\n  ${m.why}`);
process.exit(1);
