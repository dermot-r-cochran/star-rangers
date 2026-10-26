// Pins lib/index-grouping.js: the A-Z order the three index pages use
// (leading articles ignored), the species-line rule table that shelves a
// character by kind, and the ground-up order of the lore categories.
const test = require("node:test");
const assert = require("node:assert/strict");
const {
  byTitle,
  characterKind,
  groupCharacters,
  groupPluralSystems,
  pluralSystemProblems,
  groupLore,
  LORE_CATEGORY_ORDER,
  groupTimeline,
  TIMELINE_ERA_HEADINGS
} = require("../lib/index-grouping");
const { TIMELINE_ERAS } = require("../lib/content-schema");

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

test("a plural system is shelved once, members beside it, never by the body's kind", () => {
  const groups = groupCharacters([
    item({ id: "tissadelle", title: "Tissadelle Shepherd", species: "Human", plural_system: true }),
    item({ id: "tobble", title: "Tobble", species: "Cat (a nonhuman member of a human plural system)", system: "tissadelle" }),
    item({ id: "eden-warden", title: "The Eden Warden", species: "AI (Kernel-Compliant, Plural System)", plural_system: "The Eden Warden" }),
    item({ id: "zhulik", title: "Zhulik", species: "Cat (unaugmented)" }),
    item({ id: "adaeze", title: "Adaeze Okafor", species: "Human" })
  ]);
  assert.deepEqual(groups.map((g) => g.id), ["humans", "plural-systems", "smart-pets-and-animals"]);
  assert.deepEqual(titles(groups[0].items), ["Adaeze Okafor"]);
  assert.deepEqual(titles(groups[2].items), ["Zhulik"]);
  const systems = groups[1].systems;
  assert.deepEqual(systems.map((s) => s.heading), ["The Eden Warden", "Tissadelle Shepherd's system"]);
  assert.deepEqual(titles(systems[1].members), ["Tobble"]);
  assert.equal(systems[1].page.data.title, "Tissadelle Shepherd");
});

test("a member whose system page is not on the build still shows, under its own title", () => {
  const [system] = groupPluralSystems([item({ id: "tobble", title: "Tobble", system: "tissadelle" })]);
  assert.equal(system.page, null);
  assert.equal(system.heading, "Tobble");
  assert.deepEqual(titles(system.members), ["Tobble"]);
});

test("the validator's plural-system checks", () => {
  const page = (data, relativePath) => ({ data, relativePath });
  const problems = pluralSystemProblems([
    page({ id: "a", plural_system: true }, "a.md"),
    page({ id: "b", system: "a" }, "b.md"),
    page({ id: "c", system: "nobody" }, "c.md"),
    page({ id: "d", system: "b" }, "d.md"),
    page({ id: "e", plural_system: "" }, "e.md"),
    page({ id: "f", plural_system: true, system: "a" }, "f.md")
  ]);
  assert.deepEqual(problems.map((p) => p.relativePath), ["c.md", "d.md", "e.md", "f.md"]);
});

test("timeline entries group under their date spans, in order, keeping their own order and dropping empty spans", () => {
  const groups = groupTimeline([
    item({ title: "Charter", era: "2543-2799" }),
    item({ title: "Life", era: "before-2543" }),
    item({ title: "Hearing", era: "2543-2799" }),
    item({ title: "Arrival", era: "2826-onward" })
  ]);
  assert.deepEqual(groups.map((g) => g.id), ["era-before-2543", "era-2543-2799", "era-2826-onward"]);
  assert.deepEqual(titles(groups[1].items), ["Charter", "Hearing"]);
});

test("every era the schema allows has a heading, and no heading is unknown to the schema", () => {
  assert.deepEqual(TIMELINE_ERA_HEADINGS.map((h) => h.key), TIMELINE_ERAS);
});
