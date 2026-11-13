#!/usr/bin/env node
// Flags the mechanical breakages a fluency edit tends to leave behind, by
// comparing each changed paragraph against an earlier version of the page.
//
// Why this exists: the fluency pass of 12-13 November 2026 split long
// sentences on about 217 lore and glossary pages, and three critic reads
// (#1823, #1824, #1825) then restored some seventy lines the splitting had
// broken or bent. Roughly half the breakages were mechanical and can be
// caught by pattern; the other half (a pronoun now pointing at a different
// noun, a gloss reattached, an attributed view come loose) cannot, and still
// need a critic read of every changed sentence before and after. This tool
// does the mechanical half so the reader can spend attention on the rest.
//
// What it flags, in changed paragraphs only:
//   - a capital after a comma: ", That is why", ", It is scoped"
//   - a sentence starting in lower case after a full stop
//   - a paragraph whose count of spaced em dashes is odd. A single trailing
//     dash is legitimate, so this one is a prompt to look, not a verdict:
//     check whether an aside lost one half of its pair.
//
// Usage:
//   node scripts/fluency-lint.js                       # changed lore/glossary pages vs HEAD
//   node scripts/fluency-lint.js --base origin/main    # ... vs another ref
//   node scripts/fluency-lint.js src/lore/x.md ...     # named files vs the base
//
// LOCAL AUTHORING TOOL: informational, never a gate, not run by npm test.
// Always exits 0 when the scan succeeds.

const fs = require("fs");
const { execFileSync } = require("child_process");

const args = process.argv.slice(2);
let base = "HEAD";
const files = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--base") base = args[++i];
  else files.push(args[i]);
}

function git(...a) {
  return execFileSync("git", a, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
}

if (!files.length) {
  const changed = git("diff", "--name-only", base, "--", "src/lore", "src/glossary")
    .split("\n")
    .filter((f) => f.endsWith(".md") && fs.existsSync(f));
  files.push(...changed);
}

function body(s) {
  if (!s.startsWith("---")) return s;
  const end = s.indexOf("\n---", 3);
  return end < 0 ? s : s.slice(end + 4);
}

function paragraphs(s) {
  return s
    .split(/\n\s*\n/)
    .filter((p) => p.trim() && !/^\s*(#|\||<|```)/.test(p));
}

const unlink = (p) => p.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
const ABBREV = /\b(e\.g|i\.e|cf|vs|etc|Dr|St)\.\s/;

let flagged = 0;
for (const f of files) {
  let before = "";
  try {
    before = body(git("show", `${base}:${f}`));
  } catch {
    // New file at this base: every paragraph counts as changed.
  }
  const old = new Set(paragraphs(before));
  const issues = [];
  for (const p of paragraphs(body(fs.readFileSync(f, "utf8")))) {
    if (old.has(p)) continue;
    const q = unlink(p);
    for (const m of q.matchAll(/, (That|It|This|They|The|A|An|Its|There|What|Where|When|Some|One) /g)) {
      issues.push(`capital after comma: …${q.slice(Math.max(0, m.index - 40), m.index + 30)}…`);
    }
    for (const m of q.matchAll(/[.!?] [a-z]/g)) {
      const ctx = q.slice(Math.max(0, m.index - 30), m.index + 25);
      if (!ABBREV.test(ctx)) issues.push(`lower-case sentence start: …${ctx}…`);
    }
    const isList = /^\s*([-*]|\d+\.)\s/.test(q);
    if (!isList && (q.match(/ — /g) || []).length % 2 === 1) {
      issues.push(`odd dash count (check for half a pair): ${q.slice(0, 110)}…`);
    }
  }
  if (issues.length) {
    flagged++;
    console.log(`== ${f}`);
    for (const i of issues) console.log(`   ${i}`);
  }
}
console.log(`fluency-lint: ${files.length} file(s) checked against ${base}, ${flagged} with something to look at.`);
