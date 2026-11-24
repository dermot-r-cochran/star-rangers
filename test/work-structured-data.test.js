"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { chapterObject, seriesObject } = require("../lib/work-structured-data");

const SITE = "https://fianilchruinne.com/";

test("chapterObject nests the chapter in its episode, season and series", () => {
  const obj = chapterObject({
    title: "Arrival at the Threshold Station", description: "Three arrivals.",
    season: 1, episode: 1, chapter: 1, date: "2026-07-04",
    pageUrl: "/seasons/s01/e01/s01e01c01/", siteUrl: SITE, workName: "Fian Ilchruinne"
  });
  assert.equal(obj["@type"], "Chapter");
  assert.equal(obj.name, "Arrival at the Threshold Station");
  assert.equal(obj.position, 1);
  assert.equal(obj.url, "https://fianilchruinne.com/seasons/s01/e01/s01e01c01/");
  assert.equal(obj.datePublished, "2026-07-04");
  assert.equal(obj.author.name, "Dermot R. Cochran");
  assert.equal(obj.license, "https://creativecommons.org/licenses/by-nc-nd/4.0/");
  assert.equal(obj.isPartOf["@type"], "Episode");
  assert.equal(obj.isPartOf.url, "https://fianilchruinne.com/seasons/s01/e01/");
  assert.equal(obj.isPartOf.partOfSeason.url, "https://fianilchruinne.com/seasons/s01/");
  assert.equal(obj.isPartOf.partOfSeries.name, "Fian Ilchruinne");
});

test("Season 0 is the Founding Era", () => {
  const obj = chapterObject({ title: "x", season: 0, episode: 1, chapter: 2, pageUrl: "/seasons/s00/e01/s00e01c02/", siteUrl: SITE, workName: "W" });
  assert.equal(obj.isPartOf.partOfSeason.name, "Founding Era");
  assert.equal(obj.isPartOf.partOfSeason.seasonNumber, 0);
  assert.equal(obj.datePublished, undefined);
});

test("a page without chapter numbers gets no chapter object", () => {
  assert.equal(chapterObject({ title: "x", pageUrl: "/", siteUrl: SITE, workName: "W" }), null);
});

test("seriesObject names the work, author and licence", () => {
  const obj = seriesObject({ siteUrl: SITE, workName: "Fian Ilchruinne", description: "d" });
  assert.equal(obj["@type"], "CreativeWorkSeries");
  assert.equal(obj.url, SITE);
  assert.equal(obj.author.name, "Dermot R. Cochran");
  assert.equal(obj.inLanguage, "en");
});
