"use strict";

// src/js/key-nav.js is a browser script with no exports, so it is run here in
// a vm context against a stub document: enough to pin which key presses it
// takes and which it leaves alone.

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const SOURCE = fs.readFileSync(path.join(__dirname, "..", "src", "js", "key-nav.js"), "utf8");

function load() {
  const prev = { href: "/previous/" };
  const next = { href: "/next/" };
  const nav = {
    querySelector: (selector) => (selector.includes("__prev") ? prev : selector.includes("__next") ? next : null),
  };
  let handler = null;
  const window = { location: { href: "/here/" } };
  const document = {
    querySelector: (selector) => (selector === "nav[data-key-nav]" ? nav : null),
    addEventListener: (type, fn) => {
      if (type === "keydown") handler = fn;
    },
  };
  vm.runInNewContext(SOURCE, { window, document });
  assert.ok(handler, "the script listens for keydown");
  // Presses a key on a target and returns where the page went, or null.
  return function press(key, target, extra) {
    window.location.href = "/here/";
    let prevented = false;
    handler(
      Object.assign(
        {
          key,
          target: target || { tagName: "BODY" },
          defaultPrevented: false,
          altKey: false,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          preventDefault: () => {
            prevented = true;
          },
        },
        extra || {}
      )
    );
    const went = window.location.href === "/here/" ? null : window.location.href;
    assert.equal(prevented, went !== null, "the key is taken exactly when the page moves");
    return went;
  };
}

test("Left and Right follow Previous and Next", () => {
  const press = load();
  assert.equal(press("ArrowRight"), "/next/");
  assert.equal(press("ArrowLeft"), "/previous/");
  assert.equal(press("ArrowDown"), null);
});

test("the keys stand aside in a field and with a modifier held", () => {
  const press = load();
  for (const tagName of ["INPUT", "TEXTAREA", "SELECT"]) assert.equal(press("ArrowRight", { tagName }), null, tagName);
  assert.equal(press("ArrowRight", { tagName: "DIV", isContentEditable: true }), null);
  for (const mod of ["altKey", "ctrlKey", "metaKey", "shiftKey"]) assert.equal(press("ArrowLeft", null, { [mod]: true }), null, mod);
  assert.equal(press("ArrowRight", null, { defaultPrevented: true }), null);
});

test("a focused video or audio player keeps Left and Right for seeking", () => {
  const press = load();
  for (const tagName of ["VIDEO", "AUDIO"]) {
    assert.equal(press("ArrowRight", { tagName }), null, tagName);
    assert.equal(press("ArrowLeft", { tagName }), null, tagName);
  }
});
