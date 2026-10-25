// Ordering and grouping for the Characters, Lore and Codex index pages
// (Dermot's choices of 2026-10-25: characters grouped by kind, lore
// categories ground up, every group A-Z by title).
//
// Display only. The collections themselves keep their order, since other
// templates read them; these helpers are applied on the index pages alone.
// Nothing here ranks a character: kind is the record's own classification,
// read from the page's `species` line, and the groups say nothing about
// importance.

const LEADING_ARTICLE = /^(the|a|an)\s+/i;

// Sort key for a title: a leading The/A/An is ignored, as a shelf would.
function titleSortKey(title) {
  return String(title || "").trim().replace(LEADING_ARTICLE, "");
}

function compareTitles(a, b) {
  return titleSortKey(a).localeCompare(titleSortKey(b), "en", { sensitivity: "base" });
}

// A new array of collection items in A-Z order of `data.title`.
function byTitle(items) {
  return [...(items || [])].sort((a, b) => compareTitles(a.data.title, b.data.title));
}

// The character kinds, in page order. `id` is the anchor on the page.
const CHARACTER_KINDS = [
  { id: "humans", name: "Humans" },
  { id: "other-peoples", name: "Other peoples", blurb: "Peoples other than humanity, each under its own name." },
  { id: "made-minds", name: "Made minds", blurb: "Artificial minds and the robots they are carried by." },
  { id: "smart-pets-and-animals", name: "Smart Pets and animals" },
  { id: "beings-and-entities", name: "Beings and entities", blurb: "The Levrils, and what the record files from beyond the boundary." },
  { id: "kind-not-recorded", name: "Kind not recorded", blurb: "Pages where the record has not stated, or has not established, what kind of person this is." }
];

// The rule table from a `species` line to a kind, first match wins. It reads
// only the head of the line, so a qualification in brackets stays free text.
// A people not listed falls to "other-peoples", which is the right default:
// a new people should not need an edit here to be shelved.
const KIND_RULES = [
  [/^\s*$/, "kind-not-recorded"],
  [/^person, kind not established/i, "kind-not-recorded"],
  [/^human\b/i, "humans"],
  [/^(ai|robot)\b/i, "made-minds"],
  [/^(cyber-enhanced cat|cat|rabbit|raven|bumblebee|vessik)\b/i, "smart-pets-and-animals"],
  [/^(levril|meta-dimensional)\b/i, "beings-and-entities"]
];

function characterKind(species) {
  const s = String(species || "");
  for (const [pattern, kind] of KIND_RULES) {
    if (pattern.test(s)) return kind;
  }
  return "other-peoples";
}

// Characters as [{...kind, items}], kinds in page order, empty kinds dropped,
// each kind A-Z.
function groupCharacters(items) {
  return CHARACTER_KINDS
    .map((kind) => ({
      ...kind,
      items: byTitle((items || []).filter((item) => characterKind(item.data.species) === kind.id))
    }))
    .filter((group) => group.items.length);
}

// Lore categories ground up: the shape of the universe first, then what
// lives in it, then its past, then the institutions and what they make,
// and the paperwork and reference last. A category not listed here follows, A-Z.
const LORE_CATEGORY_ORDER = [
  "Cosmology",
  "Universes",
  "Physics",
  "Entities",
  "Species",
  "Locations",
  "Flora",
  "History",
  "Timeline Notes",
  "Factions",
  "Institutions",
  "Economics",
  "Culture",
  "Medicine",
  "Technology",
  "Records",
  "Reference"
];

function slug(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Lore as [{id, name, items}], categories in LORE_CATEGORY_ORDER then any
// others A-Z, each category A-Z. An entry without a category is "General".
function groupLore(items) {
  const byCategory = new Map();
  for (const item of items || []) {
    const cat = item.data.category || "General";
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat).push(item);
  }
  const known = LORE_CATEGORY_ORDER.filter((cat) => byCategory.has(cat));
  const others = [...byCategory.keys()]
    .filter((cat) => !LORE_CATEGORY_ORDER.includes(cat))
    .sort(compareTitles);
  return [...known, ...others].map((cat) => ({
    id: `lore-cat-${slug(cat)}`,
    name: cat,
    items: byTitle(byCategory.get(cat))
  }));
}

module.exports = {
  titleSortKey,
  compareTitles,
  byTitle,
  CHARACTER_KINDS,
  characterKind,
  groupCharacters,
  LORE_CATEGORY_ORDER,
  groupLore
};
