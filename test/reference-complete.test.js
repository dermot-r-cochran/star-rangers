// REFERENCE PAGES ON THE UPPER TIERS (lib/content-filter.js; Dermot,
// 25 November 2026: "Yes, carry them all"). A named reading edition at the
// general or contemplative tier carries every lore, glossary and codex page its
// tier allows; codex sites, the default edition and the two lower tiers still
// narrow by tag.
const test = require("node:test");
const assert = require("node:assert/strict");

const { editionFor } = require("../lib/editions");
const {
  editionCarriesAllReference,
  isReferencePage,
  getContentFilter,
  isTopicPageIncluded
} = require("../lib/content-filter");

const VARS = ["CHARACTERS", "TOPICS", "THREADS", "EDITION"];

// The filter a build of this edition sees, through the real env path.
function filterForEdition(id) {
  const saved = VARS.map((k) => [k, process.env[k]]);
  try {
    const ed = editionFor(id);
    process.env.EDITION = id;
    process.env.CHARACTERS = (ed.characters || []).join(",");
    process.env.TOPICS = (ed.topics || []).join(",");
    process.env.THREADS = (ed.threads || []).join(",");
    return getContentFilter();
  } finally {
    for (const [k, v] of saved) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  }
}

// A page no edition's tags match, so only the rule can carry it.
const untagged = (dir) => ({ title: "x", tags: ["no-edition-uses-this-tag"], page: { inputPath: `./src/${dir}/x.md`, url: `/${dir}/x/` } });

test("which editions carry every reference page", () => {
  const expected = {
    fellowship: true,
    "church-space": true,
    sciencefiction: true,
    "fellowship-archive": false, // a codex site: narrow on purpose
    starquest: false, // young adult
    "young-star-rangers": false, // young adult
    pets: false, // children
    "the-told": false // children
  };
  for (const [id, want] of Object.entries(expected)) {
    assert.equal(editionCarriesAllReference(editionFor(id)), want, id);
  }
  assert.equal(editionCarriesAllReference({ id: "default", tier: "general" }), false);
});

test("isReferencePage reads where the page lives", () => {
  for (const dir of ["lore", "lore/planets", "glossary", "codex", "timeline"]) assert.ok(isReferencePage(untagged(dir)), dir);
  for (const dir of ["seasons/s01/e01", "journal", "characters"]) assert.ok(!isReferencePage(untagged(dir)), dir);
  assert.ok(isReferencePage({ page: { inputPath: ".\\src\\lore\\x.md" } }), "Windows separators");
  assert.ok(!isReferencePage({ title: "bare front matter" }));
});

test("the fellowship edition carries an untagged lore, glossary, codex and timeline page", () => {
  const f = filterForEdition("fellowship");
  for (const dir of ["lore", "glossary", "codex", "timeline"]) assert.ok(isTopicPageIncluded(untagged(dir), f), dir);
});

test("journal and bare front matter still narrow by tag", () => {
  const f = filterForEdition("fellowship");
  assert.ok(!isTopicPageIncluded(untagged("journal"), f));
  assert.ok(!isTopicPageIncluded({ title: "newest-list entry", tags: ["no-edition-uses-this-tag"] }, f));
});

test("the codex site and the lower tiers do not carry an untagged lore page", () => {
  for (const id of ["fellowship-archive", "starquest", "pets"]) {
    assert.ok(!isTopicPageIncluded(untagged("lore"), filterForEdition(id)), id);
  }
});

test("the tier gate still holds over the rule", () => {
  const gated = { ...untagged("lore"), tags: ["church-space"] };
  assert.ok(!isTopicPageIncluded(gated, filterForEdition("sciencefiction")), "general tier must not see church-space");
  assert.ok(isTopicPageIncluded(gated, filterForEdition("fellowship")), "contemplative tier sees it");
});

// Characters joined the rule the same day ("Yes, characters too").
const { isCharacterIncluded, isCharacterPovIncluded } = require("../lib/content-filter");
const stranger = { id: "no-edition-names-this-one", tags: ["no-edition-uses-this-tag"] };

test("upper-tier editions carry an untagged character page", () => {
  for (const id of ["fellowship", "church-space", "sciencefiction"]) {
    assert.ok(isCharacterIncluded(stranger, filterForEdition(id)), id);
  }
});

test("the codex site and the lower tiers do not carry an untagged character page", () => {
  for (const id of ["fellowship-archive", "starquest", "pets"]) {
    assert.ok(!isCharacterIncluded(stranger, filterForEdition(id)), id);
  }
});

test("the tier gate still holds over characters", () => {
  const gated = { ...stranger, tags: ["church-space"] };
  assert.ok(!isCharacterIncluded(gated, filterForEdition("sciencefiction")));
  assert.ok(isCharacterIncluded(gated, filterForEdition("fellowship")));
});

test("a character's POV page still needs its chapter on the build", () => {
  const f = filterForEdition("fellowship");
  const offBuild = { season: 999, episode: 1, chapter: 1, tags: ["no-edition-uses-this-tag"], povs: [] };
  assert.ok(!isCharacterPovIncluded(stranger.id, f, offBuild, stranger));
});
