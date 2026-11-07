// Unit tests for lib/plates.js - resolving an edition's plates against the
// pages a build carries. A plate that silently vanishes, or links outside the
// /star-rangers prefix, would show on no other test.
const test = require("node:test");
const assert = require("node:assert/strict");

const { platesFor, resolvePlates } = require("../lib/plates.js");

const lore = [{ url: "/lore/planets/cirrane/", data: { title: "Cirrane", image: "planets/cirrane.jpg", image_alt: "Inside a gas giant" } }];
const characters = [
  { url: "/characters/a/", data: { title: "A", image: "a.jpg", image_alt: "A at work" } },
  { url: "/characters/b/", data: { title: "B", image: "b.jpg" } }
];

test("a plate takes its image and alt from its page", () => {
  const [p] = resolvePlates([{ page: "/lore/planets/cirrane/" }], { lore, characters, codex: [] });
  assert.deepEqual(p, {
    title: "Cirrane",
    url: "/star-rangers/lore/planets/cirrane/",
    src: "/star-rangers/images/lore/planets/cirrane.jpg",
    alt: "Inside a gas giant"
  });
});

test("a page this build does not carry, or a placeholder portrait, drops out", () => {
  const out = resolvePlates(
    [{ page: "/lore/missing/" }, { page: "/characters/a/" }, { page: "/characters/b/" }],
    { lore, characters, codex: [] },
    (rel) => rel === "characters/b.jpg"
  );
  assert.deepEqual(out.map((p) => p.title), ["A"]);
});

test("a plate may name a body image with its own alt", () => {
  const [p] = resolvePlates([{ page: "/characters/a/", image: "lore/x.jpg", alt: "X" }], { lore, characters, codex: [] });
  assert.equal(p.src, "/star-rangers/images/lore/x.jpg");
  assert.equal(p.alt, "X");
});

test("an edition with no selection has none, and there is no fallback", () => {
  assert.deepEqual(platesFor("no-such-edition"), []);
});
