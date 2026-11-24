"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { pickNewest } = require("../lib/newest-lore");
const { DEFAULT_EDITION, editionFor } = require("../lib/editions");

const entry = (title, day, tags) => ({
  title,
  updated: new Date(`2026-11-${String(day).padStart(2, "0")}T12:00:00Z`),
  data: { title, tags }
});

const ranks = entry("Rank and the Chain of Command", 24, ["star-rangers", "corps"]);
const communion = entry("The Communion of the Called", 20, ["communion-of-the-called", "church-space"]);
const cnoc = entry("Cnoc na mBeach", 22, ["cnoc-na-mbeach", "church-space"]);

test("no topics: the newest entry the build carries", () => {
  assert.equal(pickNewest([communion, ranks, cnoc], null).title, ranks.title);
  assert.equal(pickNewest([communion, ranks, cnoc], []).title, ranks.title);
});

test("topics: the newest entry tagged with one of them, not the newest overall", () => {
  assert.equal(pickNewest([communion, ranks, cnoc], ["communion-of-the-called", "cnoc-na-mbeach"]).title, cnoc.title);
  assert.equal(pickNewest([communion, ranks], ["Communion-of-the-Called"]).title, communion.title);
});

test("topics with no tagged entry fall back to the newest overall", () => {
  assert.equal(pickNewest([communion, ranks], ["arilon"]).title, ranks.title);
});

test("an entry without tags is never an own-topic match", () => {
  const bare = { title: "Bare", updated: new Date("2026-11-30T00:00:00Z"), data: { title: "Bare" } };
  assert.equal(pickNewest([bare, communion], ["church-space"]).title, communion.title);
});

test("no entries: null", () => {
  assert.equal(pickNewest([], ["church-space"]), null);
});

test("the contemplative editions name their own topics; the default names none", () => {
  assert.equal(DEFAULT_EDITION.newestTopics, null);
  for (const id of ["church-space", "fellowship"]) {
    const topics = editionFor(id).newestTopics;
    assert.ok(Array.isArray(topics) && topics.length > 0, `${id} names newestTopics`);
  }
});
