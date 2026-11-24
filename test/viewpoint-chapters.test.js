// Pins a character page's Viewpoint chapters (lib/viewpoint-chapters.js).
const test = require("node:test");
const assert = require("node:assert/strict");
const { viewpointChapters } = require("../lib/viewpoint-chapters");

const ch = (id, season, povs, tier) => ({
  url: `/c/${id}/`,
  data: { id, season, episode: 1, title: id, povs: povs.map((p) => ({ id: p, tier })) },
});

test("chapters are matched by the page's id or its slug, grouped by season in order", () => {
  const chapters = [ch("s01e01c01", 1, ["rook-7", "syra"]), ch("s01e01c02", 1, ["syra"]), ch("s03e01c01", 3, ["rook"])];
  const seasons = viewpointChapters(chapters, ["rook", "rook-7"]);
  assert.deepEqual(seasons.map((s) => [s.season, s.chapters.map((c) => c.code)]), [
    [1, ["S01E01C01"]],
    [3, ["S03E01C01"]],
  ]);
});

test("a POV the edition's tier hides does not list the chapter", () => {
  const chapters = [ch("s06e01c01", 6, ["karla-wender"], "general")];
  assert.equal(viewpointChapters(chapters, ["karla-wender"], (p) => p.tier !== "general").length, 0);
});

test("a character with no viewpoints gets an empty list", () => {
  assert.deepEqual(viewpointChapters([ch("s01e01c01", 1, ["syra"])], ["galahad-thorne", undefined]), []);
});
