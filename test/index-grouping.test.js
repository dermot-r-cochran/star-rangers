// Pins lib/index-grouping.js: the A-Z order the three index pages use
// (leading articles ignored), the species-line rule table that shelves a
// character by kind, and the ground-up order of the lore categories.
const test = require("node:test");
const assert = require("node:assert/strict");
const {
  byTitle,
  characterKind,
  groupCharacters,
  groupLore,
  LORE_CATEGORY_ORDER
} = require("../lib/index-grouping");

const item = (data) => ({ data });
const titles = (items) => items.map((i) => i.data.title);

test("titles sort A-Z ignoring a leading The, A or An, and case", () => {
  const sorted = byTitle([
    item({ title: "The Turquoise Dove" }),
    item({ title: "an Archive Note" }),
    item({ title: "Akkit" }),
    item({ title: "A Ledger" })
  ]);
  assert.deepEqual(titles(sorted), ["Akkit", "an Archive Note", "A Ledger", "The Turquoise Dove"]);
});

test("byTitle does not reorder the collection it is given", () => {
  const input = [item({ title: "B" }), item({ title: "A" })];
  byTitle(input);
  assert.deepEqual(titles(input), ["B", "A"]);
});

test("the species shapes the corpus uses land in the right kind", () => {
  const cases = [
    ["Human", "humans"],
    ["Human (cyber-revenant)", "humans"],
    ["AI (Kernel-Compliant Investigative Intelligence)", "made-minds"],
    ["Robot (Investigative/Analytical chassis)", "made-minds"],
    ["Cyber-Enhanced Cat (Smart Pet, Detective Agency)", "smart-pets-and-animals"],
    ["Rabbit (unaugmented; failed Smart Pet candidate)", "smart-pets-and-animals"],
    ["Vessik (Undersong burrow commensal, unaugmented)", "smart-pets-and-animals"],
    ["Levril (Dragon)", "beings-and-entities"],
    ["Meta-dimensional predator, cute-predator feeding pattern", "beings-and-entities"],
    ["Person, kind not established", "kind-not-recorded"],
    [undefined, "kind-not-recorded"],
    ["", "kind-not-recorded"],
    ["Chthonari", "other-peoples"],
    ["Krenyi (Quiet-Built)", "other-peoples"]
  ];
  for (const [species, kind] of cases) {
    assert.equal(characterKind(species), kind, String(species));
  }
});

test("a word that merely starts like a rule does not match it", () => {
  // "Humanoid" is an off-worlder's yardstick, never a kind; "Caterpillar" is not a cat.
  assert.equal(characterKind("Humanoid sapient"), "other-peoples");
  assert.equal(characterKind("Caterpillar-kin"), "other-peoples");
});

test("characters group in page order, A-Z within, empty kinds dropped", () => {
  const groups = groupCharacters([
    item({ title: "Xenon", species: "AI (Maintenance Robot)" }),
    item({ title: "Syra", species: "Krenyi (Quiet-Built)" }),
    item({ title: "Tissadelle Shepherd", species: "Human" }),
    item({ title: "Akkit", species: "Chthonari" })
  ]);
  assert.deepEqual(groups.map((g) => g.id), ["humans", "other-peoples", "made-minds"]);
  assert.deepEqual(titles(groups[1].items), ["Akkit", "Syra"]);
});

test("lore categories follow the ground-up order, unknown ones after A-Z", () => {
  const groups = groupLore([
    item({ title: "Zed", category: "Records" }),
    item({ title: "Rank", category: "Institutions" }),
    item({ title: "Five Layers", category: "Cosmology" }),
    item({ title: "Odd", category: "Zoology" }),
    item({ title: "Loose" }),
    item({ title: "Archive", category: "Institutions" })
  ]);
  assert.deepEqual(groups.map((g) => g.name), ["Cosmology", "Institutions", "Records", "General", "Zoology"]);
  assert.deepEqual(titles(groups[1].items), ["Archive", "Rank"]);
  assert.equal(groups[1].id, "lore-cat-institutions");
});

test("every lore category in the order is distinct", () => {
  assert.equal(new Set(LORE_CATEGORY_ORDER).size, LORE_CATEGORY_ORDER.length);
});
