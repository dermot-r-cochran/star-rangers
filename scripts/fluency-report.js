#!/usr/bin/env node
// Ranks every lore and glossary page by how hard it is to read straight
// through, so a fluency pass can start where the strain is worst.
//
// Why this exists: Dermot's direction of 12 November 2026 (verbatim: "Review
// lore and glossary pages for fluency when reading, whereas narrative prose
// style may vary according to whose point of view is being explained" —
// story-bible/intake-2026-11-12.md). The Archive's voice is one voice, so its
// pages are held to reading fluently; a chapter's prose follows whose head it
// is in and is not measured here. Like list-canon-facts.js, the worklist is
// derived on every run rather than kept as a ledger that goes stale.
//
// The signals are crude on purpose and only rank: sentences over 45 words,
// mean sentence length, and parentheses, semicolons and em dashes per 1,000
// words. A high score is a prompt to read the page, never a verdict, and a
// low one says nothing about whether a sentence is clear or true. Whether a
// rewrite reads better is judged by reading it.
//
// Usage:
//   node scripts/fluency-report.js          # the 40 hardest pages
//   node scripts/fluency-report.js 100      # the 100 hardest
//   node scripts/fluency-report.js --json   # every page, as JSON
//
// Informational, never a gate: always exits 0 when the scan succeeds.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ROOT = path.join(__dirname, "..");
const DIRS = ["src/lore", "src/glossary"].map((d) => path.join(ROOT, d));

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return e.name.endsWith(".md") && e.name !== "index.md" && e.name !== "README.md" ? [p] : [];
  });
}

// Reduce a page body to running text: no tags, link targets, headings, tables,
// containers or emphasis marks.
function runningText(body) {
  return body
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^\s*(#|\||<\?|:::|---).*$/gm, "")
    .replace(/[*_`]/g, "");
}

function sentences(text) {
  return text
    .split(/\n\s*\n/)
    .flatMap((p) => p.replace(/\s+/g, " ").trim().split(/(?<=[.!?]["”’)]?)\s+(?=["“(]?[A-Z])/))
    .filter((s) => s.split(" ").length > 2);
}

function measure(file) {
  const { content } = matter(fs.readFileSync(file, "utf8"));
  const text = runningText(content);
  const words = text.split(/\s+/).filter(Boolean).length;
  if (!words) return null;
  const lens = sentences(text).map((s) => s.split(" ").length);
  const per1000 = (re) => ((text.match(re) || []).length * 1000) / words;
  const long = lens.filter((l) => l > 45).length;
  const mean = lens.reduce((a, b) => a + b, 0) / Math.max(1, lens.length);
  const paren = per1000(/\(/g);
  const semi = per1000(/;/g);
  const dash = per1000(/—/g);
  const score = ((long * 1000) / words) * 3 + mean + paren + semi + dash;
  return {
    file: path.relative(ROOT, file),
    words,
    score: +score.toFixed(1),
    meanSentence: +mean.toFixed(1),
    longSentences: long,
    longest: lens.length ? Math.max(...lens) : 0,
    paren: +paren.toFixed(1),
    semi: +semi.toFixed(1),
    dash: +dash.toFixed(1),
  };
}

const rows = DIRS.flatMap(walk).map(measure).filter(Boolean).sort((a, b) => b.score - a.score);

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(rows, null, 1));
} else {
  const n = Number(process.argv[2]) || 40;
  console.log("score\twords\tmean\t>45\tlongest\t(/1k\t;/1k\t—/1k\tpage");
  for (const r of rows.slice(0, n)) {
    console.log([r.score, r.words, r.meanSentence, r.longSentences, r.longest, r.paren, r.semi, r.dash, r.file].join("\t"));
  }
}
