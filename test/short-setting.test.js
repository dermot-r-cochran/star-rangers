"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { shortLocation, shortTimestamp, shortSetting } = require("../lib/short-setting");

test("keeps the first place named", () => {
  assert.equal(
    shortLocation("Eden Space Habitat, bonded hall and Detective Bureau; Halcyon Space Habitat, bonded freight hall; Compact Administration"),
    "Eden Space Habitat"
  );
  assert.equal(shortLocation("Compact Administration; Office of the Governor of Orbital Space Habitats"), "Compact Administration");
  assert.equal(shortLocation("Eden Space Habitat — Chief Scientist's Office and Docking Ring"), "Eden Space Habitat");
  assert.equal(shortLocation("Dún Rí, Terrace Garden"), "Dún Rí");
  assert.equal(shortLocation("Carraig Bán"), "Carraig Bán");
});

test("keeps a parenthesis whole", () => {
  assert.equal(shortLocation("Drithane (Bríd System), Gleann na gCaorach valley chain"), "Drithane (Bríd System)");
});

test("a dated timestamp keeps its year", () => {
  assert.equal(shortTimestamp("2828 UCSD, Late Winter — the seventh and eighth weeks of the quarter"), "2828 UCSD");
  assert.equal(shortTimestamp("2828 UCSD"), "2828 UCSD");
});

test("an undated timestamp keeps its first clause", () => {
  assert.equal(
    shortTimestamp("The survey's third year on Vellamar, by the Archive's reckoning; the week the court's line came to the Abbey"),
    "The survey's third year on Vellamar"
  );
});

test("joins place and year, and copes with either missing", () => {
  assert.equal(
    shortSetting("Eden Space Habitat, bonded hall", "2828 UCSD, Late Winter"),
    "Eden Space Habitat · 2828 UCSD"
  );
  assert.equal(shortSetting("Dún Rí, Record Room", undefined), "Dún Rí");
  assert.equal(shortSetting(undefined, undefined), "");
});
