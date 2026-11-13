"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { povButtonName } = require("../lib/pov-button-name");

test("drops the trailing bracket", () => {
  assert.equal(
    povButtonName("Elvira (Person, kind not established, Warden-Heir of Dún Rí)"),
    "Elvira"
  );
  assert.equal(povButtonName("Aldera (Cat, unaugmented, before the Causeway)"), "Aldera");
});

test("keeps the rank before the name", () => {
  assert.equal(
    povButtonName("Lieutenant Rutger Voss (Human, Military Space Command Casualty Correspondence Office)"),
    "Lieutenant Rutger Voss"
  );
  assert.equal(povButtonName("Dr. Ysolde Maren Pitch (Human, Eden Space Habitat Chief Scientist)"), "Dr. Ysolde Maren Pitch");
});

test("a label with no bracket is unchanged", () => {
  assert.equal(povButtonName("Elvira"), "Elvira");
  assert.equal(povButtonName("  Tobble  "), "Tobble");
});

test("a label that is only a bracket falls back to itself", () => {
  assert.equal(povButtonName("(Unclassified)"), "(Unclassified)");
  assert.equal(povButtonName(undefined), "");
});
