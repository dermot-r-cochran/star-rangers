"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { episodesInOrder, episodeNeighbours, seasonNeighbours } = require("../lib/episode-nav");

const ch = (season, episode, chapter) => ({
  url: `/seasons/s${String(season).padStart(2, "0")}/e${String(episode).padStart(2, "0")}/c${chapter}/`,
  data: { season, episode, chapter, title: `S${season}E${episode}C${chapter}` }
});

const chapters = [ch(0, 1, 1), ch(0, 1, 2), ch(0, 2, 1), ch(1, 0, 0), ch(1, 0, 1), ch(1, 1, 1)];

test("episodes come out once each, in story order, with their first chapter", () => {
  const episodes = episodesInOrder(chapters);
  assert.deepEqual(episodes.map((e) => `${e.season}-${e.episode}`), ["0-1", "0-2", "1-0", "1-1"]);
  assert.equal(episodes[0].url, "/seasons/s00/e01/");
  assert.equal(episodes[2].firstChapter.data.title, "S1E0C0");
});

test("an episode's neighbours cross season boundaries, and the ends have none", () => {
  const mid = episodeNeighbours(chapters, "0", "2");
  assert.equal(mid.first.data.title, "S0E2C1");
  assert.equal(mid.previous.url, "/seasons/s00/e01/");
  assert.equal(mid.next.url, "/seasons/s01/e00/");
  assert.equal(episodeNeighbours(chapters, 0, 1).previous, null);
  assert.equal(episodeNeighbours(chapters, 1, 1).next, null);
});

test("an episode the build does not carry has no neighbours to offer", () => {
  assert.deepEqual(episodeNeighbours(chapters, 9, 9), { first: null, previous: null, next: null });
  assert.deepEqual(episodeNeighbours([], 0, 1), { first: null, previous: null, next: null });
});

test("a season's way in is its first chapter, and its neighbours are whole seasons", () => {
  const s0 = seasonNeighbours(chapters, "0");
  assert.equal(s0.first.data.title, "S0E1C1");
  assert.equal(s0.previous, null);
  assert.equal(s0.next.url, "/seasons/s01/");
  assert.equal(seasonNeighbours(chapters, 1).previous.url, "/seasons/s00/");
  assert.deepEqual(seasonNeighbours(chapters, 7), { first: null, previous: null, next: null });
});
