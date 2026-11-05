"use strict";

// Pins lib/reading-options.js: the derivation behind the chapter layout's
// "Other ways on" aside. The contract worth guarding is that options appear
// only at the end of an episode, that a chapter's moment comes only from a
// timestamp naming a UCSD year and a season, that a chapter which does not
// date itself offers nothing, that the meanwhile link leaves the reader's own
// thread, lands on an episode opening at that moment and stays inside the
// collection the build carries,
// and that the Archive option is stable.

const test = require("node:test");
const assert = require("node:assert/strict");
const { momentOf, findMeanwhile, pickArchiveOption } = require("../lib/reading-options");

const threadOf = (season) =>
  season === 2
    ? { id: "pets", name: "Undercover Pets" }
    : season === 4
      ? { id: "five-o", name: "Orbital Five-O" }
      : { id: "spine", name: "Spine" };

const chapter = (id, season, episode, timestamp) => ({ data: { id, season, episode, timestamp } });

const chapters = [
  chapter("s01e02c00", 1, 2, "2826 UCSD, Late Autumn, Dusk"),
  chapter("s01e02c01", 1, 2, "2826 UCSD, Late Autumn, Evening"),
  chapter("s01e03c01", 1, 3, "Indeterminate. She has stopped trusting the count."),
  chapter("s02e01c01", 2, 1, "2826 UCSD, Early Autumn, Morning"),
  chapter("s02e01c02", 2, 1, "2826 UCSD, Late Autumn, Morning"),
  chapter("s04e01c01", 4, 1, "2826 UCSD, Autumn"),
];

test("a moment is a UCSD year and a season, and Early or Late do not divide it", () => {
  assert.equal(momentOf("2826 UCSD, Late Autumn, Dusk"), "2826-Autumn");
  assert.equal(momentOf("2826 UCSD, Autumn — a night the record does not date"), "2826-Autumn");
});

test("a timestamp across seasons starts at the first one it names", () => {
  assert.equal(momentOf("2826 UCSD, Early Spring to Early Summer — the return"), "2826-Spring");
});

test("a timestamp without both a year and a season has no moment", () => {
  assert.equal(momentOf("Indeterminate. She has stopped trusting the count."), null);
  assert.equal(momentOf("Winter, she thinks. The edge is warm and that is the clock now."), null);
  assert.equal(momentOf("2832 UCSD"), null);
  assert.equal(momentOf(undefined), null);
});

test("within an episode there are no options: reading is linear", () => {
  assert.equal(findMeanwhile(chapters, "s01e02c00", threadOf), null);
});

test("an episode's last chapter offers an episode of another thread opening at that moment", () => {
  const found = findMeanwhile(chapters, "s01e02c01", threadOf);
  assert.equal(found.chapter.data.id, "s02e01c01");
  assert.equal(found.threadName, "Undercover Pets");
});

test("an episode that only reaches the moment later is not offered", () => {
  const spansYears = [
    chapter("s01e00c00", 1, 0, "2822 UCSD, Early Autumn"),
    chapter("s01e00c13", 1, 0, "2826 UCSD, Autumn"),
    chapter("s02e01c03", 2, 1, "2826 UCSD, Late Autumn"),
  ];
  assert.equal(findMeanwhile(spansYears, "s02e01c03", threadOf), null);
});

test("the last chapter of the build counts as the end of its episode", () => {
  const found = findMeanwhile(chapters, "s04e01c01", threadOf);
  assert.equal(found.chapter.data.id, "s01e02c00");
});

test("it never repeats the Next link", () => {
  const adjoining = [
    chapter("s01e02c00", 1, 2, "2826 UCSD, Late Autumn"),
    chapter("s02e01c01", 2, 1, "2826 UCSD, Late Autumn"),
  ];
  assert.equal(findMeanwhile(adjoining, "s01e02c00", threadOf), null);
});

test("it never offers the reader's own thread", () => {
  assert.equal(findMeanwhile(chapters.slice(0, 2), "s01e02c01", threadOf), null);
});

test("a chapter that does not date itself offers nothing", () => {
  assert.equal(findMeanwhile(chapters, "s01e03c01", threadOf), null);
});

test("a chapter the build does not carry offers nothing and is never offered", () => {
  assert.equal(findMeanwhile(chapters, "s09e01c01", threadOf), null);
  const narrowed = chapters.filter((c) => c.data.season === 1);
  assert.equal(findMeanwhile(narrowed, "s01e02c01", threadOf), null);
});

test("the Archive option prefers lore, then Codex, then glossary, and revealed before named", () => {
  const glossary = { title: "g", section: "glossary", relation: "revealed" };
  const codex = { title: "c", section: "codex", relation: "named" };
  const named = { title: "n", section: "lore", relation: "named" };
  const revealed = { title: "r", section: "lore", relation: "revealed" };
  assert.equal(pickArchiveOption([glossary, codex, named, revealed]), revealed);
  assert.equal(pickArchiveOption([glossary, codex]), codex);
  assert.equal(pickArchiveOption([]), null);
  assert.equal(pickArchiveOption(undefined), null);
});
