// Changelog fragments: one small file per change in changelog.d/, gathered
// into CHANGELOG.md when a release is cut.
//
// WHY THIS EXISTS: CHANGELOG.md's [Unreleased] section was an append-at-top
// list, and on a day when several sessions merged into this repository every
// few minutes, every pull request conflicted on it and had to be rebased
// before its checks would even run (24 November 2026: three sessions, five
// rebases). Two changes never touch the same file now, so they never conflict.
// Dermot's "Yes, do that", 24 November 2026.
//
// A fragment is `changelog.d/YYYY-MM-DD-<slug>.md`: the entry exactly as it
// would have stood under [Unreleased], one top-level `- ` bullet (or a few,
// for one piece of work), optionally preceded by a category line `### Added`,
// `### Changed`, `### Fixed`, `### Removed` or `### Security`. Nothing else:
// no release heading, no front matter.
//
// Order is by file name, newest first, the same order the entries had in
// CHANGELOG.md: the date leads the name, so a later change sorts above an
// earlier one.

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const FRAGMENT_DIR = path.join(ROOT, "changelog.d");
const NAME = /^(\d{4})-(\d{2})-(\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;
const CATEGORIES = ["Added", "Changed", "Fixed", "Removed", "Security"];

// Every fragment file, newest first. README.md and anything not named
// YYYY-MM-DD-slug.md is not a fragment (checkFragments reports strays).
function fragmentFiles(dir = FRAGMENT_DIR) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((n) => NAME.test(n))
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
    .map((n) => path.join(dir, n));
}

// { category, body, problems } for one fragment's text.
function parseFragment(text) {
  const problems = [];
  let lines = text.replace(/\r\n/g, "\n").split("\n");
  while (lines.length && !lines[0].trim()) lines.shift();
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
  let category = null;
  if (lines.length && /^### /.test(lines[0])) {
    const name = lines[0].slice(4).trim();
    if (CATEGORIES.includes(name)) category = name;
    else problems.push(`category line "### ${name}" is not one of ${CATEGORIES.join(", ")}`);
    lines = lines.slice(1);
    while (lines.length && !lines[0].trim()) lines.shift();
  }
  if (!lines.length) problems.push("no entry: the file is empty");
  else if (!/^- /.test(lines[0])) problems.push('the entry must start with a top-level "- " bullet');
  for (const l of lines) {
    if (/^#{1,6} /.test(l)) problems.push(`a heading inside the entry ("${l.slice(0, 40)}"): one category line at the top is the only heading allowed`);
  }
  return { category, body: lines.join("\n"), problems };
}

function readFragments(dir = FRAGMENT_DIR) {
  return fragmentFiles(dir).map((file) => ({ file, name: path.basename(file), ...parseFragment(fs.readFileSync(file, "utf8")) }));
}

// Problems with the fragment folder: badly named files and malformed entries.
function checkFragments(dir = FRAGMENT_DIR) {
  const problems = [];
  if (!fs.existsSync(dir)) return problems;
  for (const n of fs.readdirSync(dir)) {
    if (n === "README.md") continue;
    if (!NAME.test(n)) problems.push(`changelog.d/${n}: not named YYYY-MM-DD-some-slug.md (lower case, hyphens)`);
  }
  for (const f of readFragments(dir)) {
    for (const p of f.problems) problems.push(`changelog.d/${f.name}: ${p}`);
  }
  return problems;
}

// The [Unreleased] section's lines (without its heading), or null.
function unreleasedLines(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  const start = lines.findIndex((l) => /^## \[Unreleased\]/.test(l));
  if (start === -1) return null;
  let end = lines.findIndex((l, i) => i > start && /^## /.test(l));
  if (end === -1) end = lines.length;
  return lines.slice(start + 1, end);
}

// Entries written straight into CHANGELOG.md's [Unreleased] instead of a
// fragment: the thing that collides. Returns their opening words.
function unreleasedEntries(text) {
  const lines = unreleasedLines(text) || [];
  return lines.filter((l) => /^- /.test(l)).map((l) => l.slice(2, 70));
}

function sectionText(frags) {
  const parts = [];
  const plain = frags.filter((f) => !f.category);
  if (plain.length) parts.push(plain.map((f) => f.body).join("\n\n"));
  for (const c of CATEGORIES) {
    const these = frags.filter((f) => f.category === c);
    if (these.length) parts.push(`### ${c}\n\n` + these.map((f) => f.body).join("\n\n"));
  }
  return parts.join("\n\n");
}

// CHANGELOG.md's text with `frags` (newest first) gathered into the section
// for `version`. The section is opened just below [Unreleased] if it does not
// exist; if it does (a gather run twice, or a fragment merged mid-release),
// the new entries go at the top of it. [Unreleased] itself is left as it is.
function gather(text, frags, version, date) {
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  if (!frags.length) return text;
  const body = sectionText(frags).split("\n");
  const esc = version.replace(/\./g, "\\.");
  const existing = lines.findIndex((l) => new RegExp(`^## \\[${esc}\\]`).test(l));
  let out;
  if (existing !== -1) {
    let at = existing + 1;
    // Keep the summary paragraph, if one has been written, above the entries.
    while (at < lines.length && !/^(- |### |## )/.test(lines[at])) at++;
    out = [...lines.slice(0, at), ...body, "", ...lines.slice(at)];
  } else {
    const un = lines.findIndex((l) => /^## \[Unreleased\]/.test(l));
    if (un === -1) throw new Error("CHANGELOG.md has no ## [Unreleased] heading to gather under");
    let next = lines.findIndex((l, i) => i > un && /^## /.test(l));
    if (next === -1) next = lines.length;
    out = [...lines.slice(0, next), `## [${version}] — ${date}`, "", ...body, "", ...lines.slice(next)];
  }
  // No whole-file tidying: released sections below are immutable, byte for byte.
  return out.join("\n").replace(/\n/g, eol);
}

module.exports = {
  FRAGMENT_DIR, CATEGORIES, fragmentFiles, parseFragment, readFragments, checkFragments,
  unreleasedLines, unreleasedEntries, gather
};
