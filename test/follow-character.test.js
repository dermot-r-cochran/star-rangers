"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { followNeighbours } = require("../lib/follow-character");

const page = (chapterId, scene, who, included = true) => ({
  chapterId, sceneNumber: String(scene), included,
  character: { id: who }, url: `/${chapterId}/scene-${scene}/${who}/`
});

const pages = [
  page("s04e02c02", 1, "zara"), page("s04e02c01", 2, "zara"), page("s04e02c02", 2, "rasa"),
  page("s04e02c01", 10, "zara"), page("s04e03c01", 1, "zara", false), page("s04e04c01", 1, "zara")
];

test("a character's viewpoints run in story order, across chapters", () => {
  const { previous, next } = followNeighbours(pages, pages[3]); // s04e02c01 scene 10
  assert.equal(previous.url, "/s04e02c01/scene-2/zara/");
  assert.equal(next.url, "/s04e02c02/scene-1/zara/");
});

test("a page the build leaves out is never linked", () => {
  const { next } = followNeighbours(pages, pages[0]); // s04e02c02 scene 1
  assert.equal(next.url, "/s04e04c01/scene-1/zara/");
});

test("other characters and the ends of the run give nothing", () => {
  assert.deepEqual(followNeighbours(pages, pages[2]), { previous: null, next: null });
  assert.equal(followNeighbours(pages, pages[1]).previous, null);
  assert.deepEqual(followNeighbours(pages, null), { previous: null, next: null });
});
