// Pins the Reading Plan's episode list (lib/plan-episodes.js, shown by
// src/_includes/start-episodes.njk). Dermot, 2026-11-24, verbatim: "At least
// 12 episodes in the reading plan for each edition."
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const { planEpisodes, PLAN_EPISODES } = require("../lib/plan-episodes");
const { threadForSeason } = require("../lib/storyline-threads");
const { allEditions } = require("../lib/editions");

const ch = (season, episode, chapter) => ({
  url: `/seasons/s${season}/e${episode}/c${chapter}/`,
  data: { season, episode, id: `s${season}e${episode}c${chapter}`, title: `T${season}.${episode}.${chapter}` },
});
const threads = { 0: "founding-era", 1: "tissadelle-arc", 8: "church-space", 2: "undercover-pets" };
const threadOf = (s) => ({ id: threads[s] });

test("the plan's own thread comes first, then the spine, then the rest", () => {
  const chapters = [ch(0, 1, 1), ch(1, 0, 1), ch(1, 1, 1), ch(1, 1, 2), ch(1, 2, 1), ch(2, 1, 1), ch(8, 1, 1), ch(8, 2, 1)];
  const codes = planEpisodes(chapters, "church-space", threadOf).map((e) => e.code);
  assert.deepEqual(codes, ["S08E01", "S08E02", "S01E01", "S01E02", "S00E01", "S02E01", "S01E00"]);
});

test("an episode counts its chapters and links its first", () => {
  const [first] = planEpisodes([ch(1, 1, 1), ch(1, 1, 2)], "tissadelle-arc", threadOf);
  assert.equal(first.chapters, 2);
  assert.equal(first.first.data.id, "s1e1c1");
});

test("the list stops at the minimum", () => {
  const chapters = Array.from({ length: 20 }, (_, i) => ch(1, i + 1, 1));
  assert.equal(planEpisodes(chapters, "tissadelle-arc", threadOf).length, PLAN_EPISODES);
});

// The live record: every edition's threads must hold at least twelve
// episodes, or its Reading Plan would fall short.
test("every edition carries at least twelve episodes", () => {
  const dir = path.join(__dirname, "..", "src", "seasons");
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".md") ? [path.join(d, e.name)] : []);
  const byThread = new Map();
  for (const file of walk(dir)) {
    const { data } = matter(fs.readFileSync(file, "utf8"));
    if (data.layout !== "chapter.njk") continue;
    const id = threadForSeason(data.season).id;
    if (!byThread.has(id)) byThread.set(id, new Set());
    byThread.get(id).add(`${data.season}-${data.episode}`);
  }
  for (const edition of allEditions()) {
    const ids = edition.threads && edition.threads.length ? edition.threads : [...byThread.keys()];
    const total = ids.reduce((n, id) => n + (byThread.get(id) || new Set()).size, 0);
    assert.ok(total >= PLAN_EPISODES, `${edition.id}: ${total} episodes, fewer than ${PLAN_EPISODES}`);
  }
});
