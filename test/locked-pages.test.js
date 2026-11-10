const test = require("node:test");
const assert = require("node:assert/strict");
const lib = require("../lib/locked-pages");

const exists = () => true;
const good = { path: "src/lore/a.md", since: "2026-11-10", signal: "comment", ref: "https://example.test/d/1" };

test("registry: valid and empty", () => {
  assert.deepEqual(lib.validateRegistry({ pages: [] }, exists), []);
  assert.deepEqual(lib.validateRegistry({ pages: [good, { ...good, path: "src/lore/b.md", signal: "views" }] }, exists), []);
});

test("registry: each bad case is reported", () => {
  const bad = (entry, fe = exists) => lib.validateRegistry({ pages: [entry] }, fe);
  assert.match(lib.validateRegistry(null, exists)[0], /pages/);
  assert.match(lib.validateRegistry({}, exists)[0], /pages/);
  assert.match(bad({ ...good, signal: "likes" })[0], /signal/);
  assert.match(bad({ ...good, since: "10/11/2026" })[0], /since/);
  assert.match(bad({ ...good, since: "2026-13-45" })[0], /since/);
  assert.match(bad({ ...good, ref: " " })[0], /ref/);
  assert.match(bad({ ...good, path: "lore/a.md" })[0], /path/);
  assert.match(bad(good, () => false)[0], /does not exist/);
  assert.match(lib.validateRegistry({ pages: [good, good] }, exists).join("\n"), /duplicate path/);
});

const index = lib.buildIndex([
  { path: "src/seasons/s00/e01/s00e01c01.md", data: { comment_id: "supplementary-material" } },
  { path: "src/seasons/s00/e01/s00e01c02.md", data: { comment_id: "supplementary" } },
  { path: "src/lore/year-zero.md", data: {} },
  { path: "src/about/index.md", data: { permalink: "/about/" } },
  { path: "src/threads/church-space.md", data: { permalink: "/threads/church-space/" } },
  { path: "src/lore/planets/index.md", data: {} },
  { path: "src/index.md", data: {} },
  { path: "src/robots.njk", data: {} },
  { path: "src/_includes/x.md", data: { comment_id: "nope" } },
  { path: "src/lore/templated.md", data: { permalink: "/x/{{ a }}/" } },
]);

test("term mapping: comment_id, scene-POV, alias, pathname, index, unmapped", () => {
  assert.equal(lib.termToSource("supplementary-material", index), "src/seasons/s00/e01/s00e01c01.md");
  assert.equal(lib.termToSource("supplementary-material-scene-2-ysolde", index), "src/seasons/s00/e01/s00e01c01.md");
  // "supplementary" is a prefix of the other id but must not steal the match.
  assert.equal(lib.termToSource("supplementary-scene-1-x", index), "src/seasons/s00/e01/s00e01c02.md");
  assert.equal(lib.termToSource("c/supplementary-material/", index), "src/seasons/s00/e01/s00e01c01.md");
  assert.equal(lib.termToSource("lore/year-zero/", index), "src/lore/year-zero.md");
  assert.equal(lib.termToSource("star-rangers/lore/year-zero/", index), "src/lore/year-zero.md");
  assert.equal(lib.termToSource("about/", index), "src/about/index.md");
  assert.equal(lib.termToSource("threads/church-space/", index), "src/threads/church-space.md");
  assert.equal(lib.termToSource("lore/planets/", index), "src/lore/planets/index.md");
  assert.equal(lib.termToSource("index", index), "src/index.md");
  assert.equal(lib.termToSource("Welcome to the discussions", index), null);
  assert.equal(lib.termToSource("nope", index), null);
  assert.equal(lib.termToSource("x/{{ a }}/", index), null);
});

test("pathnameTerm follows giscus: strip leading slash and extension, root is index", () => {
  assert.equal(lib.pathnameTerm("/"), "index");
  assert.equal(lib.pathnameTerm("/a/b/"), "a/b/");
  assert.equal(lib.pathnameTerm("/a/b.html"), "a/b");
});

test("trailers: valid, bad reason, malformed, empty note", () => {
  const msg = [
    "Fix a thing\n\nLocked-Page: src/lore/a.md (typo): teh -> the\nCo-Authored-By: x",
    "Locked-Page: src/lore/b.md (rewrite): nicer",
    "Locked-Page: src/lore/c.md typo: missing parens",
    "Locked-Page: src/lore/d.md (link):",
  ];
  const { valid, malformed } = lib.parseLockTrailers(msg);
  assert.deepEqual(valid, [{ path: "src/lore/a.md", reason: "typo", note: "teh -> the" }]);
  assert.equal(malformed.length, 3);
  assert.match(malformed[0].why, /not one of/);
});

test("violations: locked changed with and without trailer, unlocked, rename", () => {
  const reg = { pages: [good] };
  const trailer = [{ path: "src/lore/a.md", reason: "typo", note: "n" }];
  assert.deepEqual(lib.violations([{ status: "M", path: "src/lore/a.md" }], reg, []), ["src/lore/a.md"]);
  assert.deepEqual(lib.violations([{ status: "M", path: "src/lore/a.md" }], reg, trailer), []);
  assert.deepEqual(lib.violations([{ status: "M", path: "src/lore/other.md" }], reg, []), []);
  assert.deepEqual(lib.violations([{ status: "R100", oldPath: "src/lore/a.md", path: "src/lore/z.md" }], reg, []), ["src/lore/a.md"]);
  assert.deepEqual(lib.violations([{ status: "D", path: "src/lore/a.md" }], reg, []), ["src/lore/a.md"]);
  // A trailer for a different page does not cover this one.
  assert.deepEqual(lib.violations([{ status: "M", path: "src/lore/a.md" }], reg, [{ path: "src/lore/b.md" }]), ["src/lore/a.md"]);
});

test("parseNameStatus reads modifies and renames", () => {
  assert.deepEqual(lib.parseNameStatus("M\tsrc/a.md\nR087\tsrc/b.md\tsrc/c.md\n"), [
    { status: "M", path: "src/a.md" },
    { status: "R087", oldPath: "src/b.md", path: "src/c.md" },
  ]);
});

test("firstReaderActivity ignores Dermot and bots, returns the earliest reader", () => {
  const items = [
    { login: "dermot-r-cochran", at: "2026-01-01" },
    { login: "giscus[bot]", at: "2026-01-02" },
    { login: "reader2", at: "2026-03-05" },
    { login: "reader1", at: "2026-02-04" },
    { login: null, at: "2026-01-01" },
  ];
  assert.equal(lib.firstReaderActivity(items).login, "reader1");
  assert.equal(lib.firstReaderActivity(items.slice(0, 2)), null);
});
