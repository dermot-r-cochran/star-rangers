"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { wordCount, readingMinutes, chapterPosition } = require("../lib/reading-time");

test("container fences, markup and front matter are not words", () => {
  const src = "---\ntitle: x\n---\n::::: scene 1\n\n:::pov alala\n\nThe raven *landed* one short.\n\n:::\n\n:::::\n";
  assert.equal(wordCount(src), 5);
});

test("a tier-gated block is left out of the count", () => {
  const src = ":::pov a\n\none two three\n\n:::\n\n:::pov b tier=contemplative\n\nfour five six seven\n\n:::\n";
  assert.equal(wordCount(src), 3);
});

test("minutes round to the nearest whole minute and never fall below one", () => {
  assert.equal(readingMinutes("word ".repeat(10)), 1);
  assert.equal(readingMinutes("word ".repeat(230 * 12)), 12);
  assert.equal(readingMinutes(""), 0);
});

test("a chapter's position counts its own episode only", () => {
  const ch = (s, e, id) => ({ data: { season: s, episode: e, id } });
  const chapters = [ch(1, 0, "a"), ch(1, 0, "b"), ch(1, 1, "c"), ch(1, 1, "d"), ch(1, 1, "e")];
  assert.deepEqual(chapterPosition(chapters, "d"), { position: 2, total: 3 });
  assert.deepEqual(chapterPosition(chapters, "a"), { position: 1, total: 2 });
  assert.equal(chapterPosition(chapters, "zz"), null);
});
