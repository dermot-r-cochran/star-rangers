const test = require("node:test");
const assert = require("node:assert");
const { isBorrowedCharacterImage, characterImageRel, ownPortrait } = require("../lib/character-image");

test("a bare file name is the character's own portrait in characters/", () => {
  assert.strictEqual(isBorrowedCharacterImage("sen.jpg"), false);
  assert.strictEqual(characterImageRel("sen.jpg"), "characters/sen.jpg");
  assert.strictEqual(ownPortrait("sen.jpg"), "sen.jpg");
});

test("a value that names its folder is a borrowed picture, not a portrait", () => {
  for (const value of ["chapters/s01e00c10.jpg", "lore/quern.jpg", "codex/incident-report-001.jpg", "characters/sen.jpg"]) {
    assert.strictEqual(isBorrowedCharacterImage(value), true);
    assert.strictEqual(characterImageRel(value), value);
    assert.strictEqual(ownPortrait(value), null);
  }
});

test("a leading slash is ignored and a blank value is no image", () => {
  assert.strictEqual(characterImageRel("/lore/quern.jpg"), "lore/quern.jpg");
  for (const blank of [undefined, null, "", "  "]) {
    assert.strictEqual(characterImageRel(blank), null);
    assert.strictEqual(ownPortrait(blank), null);
    assert.strictEqual(isBorrowedCharacterImage(blank), false);
  }
});
