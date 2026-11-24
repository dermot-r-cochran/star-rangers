// Pins lib/changelog-fragments.js: unreleased entries live one per file in
// changelog.d/ (since 2026-11-24) and are gathered into CHANGELOG.md at a
// release. What a regression would break silently: the order entries are
// gathered in, a released section being touched by a gather, a second run
// duplicating entries, and an entry written straight under [Unreleased]
// slipping past the check.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const {
  fragmentFiles, parseFragment, readFragments, checkFragments, unreleasedEntries, gather,
} = require("../lib/changelog-fragments");

function dirWith(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "changelog-d-"));
  for (const [name, text] of Object.entries(files)) fs.writeFileSync(path.join(dir, name), text);
  return dir;
}

const BASE = [
  "# Changelog",
  "",
  "## [Unreleased]",
  "",
  "Entries for the next release are in changelog.d/.",
  "",
  "## [1.2.0] — 2026-11-01",
  "",
  "Summary.",
  "",
  "- **Old entry**",
  "",
].join("\n");

test("fragments sort newest first by name and skip README and strays", () => {
  const dir = dirWith({
    "2026-11-20-older.md": "- **Older**\n",
    "2026-11-24-newer.md": "- **Newer**\n",
    "README.md": "about",
    "notes.txt": "x",
  });
  assert.deepEqual(fragmentFiles(dir).map((f) => path.basename(f)), ["2026-11-24-newer.md", "2026-11-20-older.md"]);
  assert.deepEqual(checkFragments(dir), ["changelog.d/notes.txt: not named YYYY-MM-DD-some-slug.md (lower case, hyphens)"]);
});

test("a fragment is one or more bullets, with an optional category line", () => {
  assert.deepEqual(parseFragment("### Fixed\n\n- **A fix**\n  more\n"), { category: "Fixed", body: "- **A fix**\n  more", problems: [] });
  assert.equal(parseFragment("- **Plain**\r\n").category, null);
  assert.match(parseFragment("").problems[0], /empty/);
  assert.match(parseFragment("Just prose\n").problems[0], /bullet/);
  assert.match(parseFragment("### Tweaked\n- x\n").problems[0], /not one of/);
  assert.match(parseFragment("- x\n## [9.9.9]\n").problems[0], /heading inside/);
});

test("an entry written under [Unreleased] is found; the pointer line is not", () => {
  assert.deepEqual(unreleasedEntries(BASE), []);
  const stray = BASE.replace("Entries for the next release are in changelog.d/.", "- **Written here by mistake**");
  assert.equal(unreleasedEntries(stray).length, 1);
});

test("gather opens the release section below [Unreleased], newest first, categories after plain entries", () => {
  const dir = dirWith({
    "2026-11-20-a.md": "- **A**\n",
    "2026-11-22-b.md": "### Fixed\n\n- **B**\n",
    "2026-11-24-c.md": "- **C**\n",
  });
  const out = gather(BASE, readFragments(dir), "1.3.0", "2026-11-25");
  const sec = out.slice(out.indexOf("## [1.3.0]"), out.indexOf("## [1.2.0]"));
  assert.match(sec, /^## \[1\.3\.0\] — 2026-11-25\n\n- \*\*C\*\*\n\n- \*\*A\*\*\n\n### Fixed\n\n- \*\*B\*\*\n\n$/);
  assert.ok(out.indexOf("## [Unreleased]") < out.indexOf("## [1.3.0]"));
  assert.ok(out.endsWith(BASE.slice(BASE.indexOf("## [1.2.0]"))), "the released section is untouched");
});

test("gather is idempotent and adds a late fragment to the same section", () => {
  const first = gather(BASE, readFragments(dirWith({ "2026-11-20-a.md": "- **A**\n" })), "1.3.0", "2026-11-25");
  assert.equal(gather(first, [], "1.3.0", "2026-11-25"), first);
  const late = gather(first, readFragments(dirWith({ "2026-11-25-late.md": "- **Late**\n" })), "1.3.0", "2026-11-25");
  assert.equal((late.match(/^## \[1\.3\.0\]/gm) || []).length, 1);
  assert.ok(late.indexOf("**Late**") < late.indexOf("**A**"));
});

test("gather keeps CRLF files CRLF", () => {
  const crlf = BASE.replace(/\n/g, "\r\n");
  const out = gather(crlf, readFragments(dirWith({ "2026-11-20-a.md": "- **A**\n" })), "1.3.0", "2026-11-25");
  assert.ok(!/[^\r]\n/.test(out));
});

test("the repository's own fragments are all well formed", () => {
  assert.deepEqual(checkFragments(), []);
});
