const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const { loreImageRel, BORROW_DIRS } = require("../lib/lore-image");

test("a lore page's own picture is below images/lore/", () => {
  assert.equal(loreImageRel("mars.jpg"), "lore/mars.jpg");
  assert.equal(loreImageRel("planets/corryn.jpg"), "lore/planets/corryn.jpg");
  assert.equal(loreImageRel("/mars.jpg"), "lore/mars.jpg");
});

test("a borrowed picture names its own folder", () => {
  assert.equal(loreImageRel("chapters/s03e01c01.jpg"), "chapters/s03e01c01.jpg");
  assert.equal(loreImageRel("characters/sixth-course.jpg"), "characters/sixth-course.jpg");
  assert.equal(loreImageRel("glossary/kieme.jpg"), "glossary/kieme.jpg");
});

test("no folder inside images/lore/ shares a borrow folder's name", () => {
  const loreDir = path.join(__dirname, "..", "src", "images", "lore");
  for (const dir of BORROW_DIRS) assert.equal(fs.existsSync(path.join(loreDir, dir)), false, dir);
});

test("blank stays blank", () => {
  assert.equal(loreImageRel(""), "");
  assert.equal(loreImageRel(undefined), "");
});
