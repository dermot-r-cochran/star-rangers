"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const { imageObject, videoObject, jsonLd } = require("../lib/media-structured-data");
const { mp4DurationSeconds, isoDuration } = require("../lib/mp4-info");
const { VIDEOS } = require("../lib/videos");

const SITE = "https://fianilchruinne.com/";

test("imageObject credits and licenses the author's picture", () => {
  const obj = imageObject({ src: "/images/lore/quern.jpg", alt: "Stone houses in sideways rain", pageUrl: "/lore/planets/quern/", siteUrl: SITE, workName: "Fian Ilchruinne" });
  assert.equal(obj["@type"], "ImageObject");
  assert.equal(obj.contentUrl, "https://fianilchruinne.com/images/lore/quern.jpg");
  assert.equal(obj.url, "https://fianilchruinne.com/lore/planets/quern/");
  assert.equal(obj.description, "Stone houses in sideways rain");
  assert.equal(obj.creator.name, "Dermot R. Cochran");
  assert.equal(obj.license, "https://creativecommons.org/licenses/by-nc-nd/4.0/");
  assert.equal(obj.acquireLicensePage, "https://fianilchruinne.com/licence/");
});

test("a third-party image keeps its own credit and claims nothing", () => {
  const obj = imageObject({ src: "/images/lore/noogenic-seeding-system.jpg", alt: "x", pageUrl: "/lore/noogenic-seeding-system/", siteUrl: SITE, workName: "Fian Ilchruinne" });
  assert.match(obj.creditText, /NASA, ESA, CSA and STScI/);
  assert.equal(obj.creator, undefined);
  assert.equal(obj.license, undefined);
  assert.equal(obj.copyrightNotice, undefined);
});

test("videoObject carries what video results require", () => {
  const obj = videoObject({ name: "Quern", description: "Ten seconds", id: "quern", uploadDate: "2026-10-08", duration: "PT10S", watchUrl: "/watch/quern/", hostUrl: "/lore/planets/quern/", siteUrl: SITE, workName: "Fian Ilchruinne" });
  for (const key of ["name", "description", "thumbnailUrl", "uploadDate", "contentUrl"]) assert.ok(obj[key], key);
  assert.equal(obj.thumbnailUrl, "https://fianilchruinne.com/video/quern-poster.jpg");
  assert.equal(obj.contentUrl, "https://fianilchruinne.com/video/quern.mp4");
});

test("videoObject names the page a film is an impression of, and only then", () => {
  const base = { name: "Nothing Taken", description: "x", id: "nothing-taken", uploadDate: "2026-11-17", watchUrl: "/watch/nothing-taken/", hostUrl: "/journal/nothing-taken/", siteUrl: SITE, workName: "Fian Ilchruinne" };
  assert.equal(videoObject({ ...base, aboutUrl: "/seasons/s01/e00/s01e00c11/" }).about.url, "https://fianilchruinne.com/seasons/s01/e00/s01e00c11/");
  assert.equal(videoObject(base).about, undefined);
});

test("every impressionOf names a chapter or lore page that exists", () => {
  const src = path.join(__dirname, "..", "src");
  for (const v of VIDEOS.filter((x) => x.impressionOf)) {
    assert.match(v.impressionOf, /^\/(seasons|lore|codex)\/.+\/$/, v.id);
    assert.ok(fs.existsSync(path.join(src, `${v.impressionOf.slice(1, -1)}.md`)), `${v.id} -> ${v.impressionOf}`);
  }
});

test("jsonLd cannot close its script element", () => {
  assert.ok(!jsonLd({ a: "</script>" }).includes("</"));
});

test("isoDuration formats minutes and seconds", () => {
  assert.equal(isoDuration(10.02), "PT10S");
  assert.equal(isoDuration(272.4), "PT4M32S");
  assert.equal(isoDuration(undefined), undefined);
});

test("every registered video has its file, a poster and a readable duration", () => {
  const dir = path.join(__dirname, "..", "src", "video");
  const ids = new Set();
  for (const v of VIDEOS) {
    assert.ok(!ids.has(v.id), `duplicate ${v.id}`);
    ids.add(v.id);
    assert.match(v.uploadDate, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(fs.existsSync(path.join(dir, `${v.id}-poster.jpg`)), `${v.id} poster`);
    const seconds = mp4DurationSeconds(path.join(dir, `${v.id}.mp4`));
    assert.ok(seconds > 0, `${v.id} duration`);
  }
});
