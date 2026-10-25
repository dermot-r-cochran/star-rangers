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
  { id: "plural-systems", name: "Plural systems", blurb: "More than one person sharing one body or one system. Each system is shelved once, under its collective name where the record gives one, with the pages of its members beside it." },
  { id: "smart-pets-and-animals", name: "Smart Pets and animals" },
  { id: "beings-and-entities", name: "Beings and entities", blurb: "The Levrils, and what the record files from beyond the boundary." },
  { id: "kind-not-recorded", name: "Kind not recorded", blurb: "Most of these people are known to the Archive only through a document they wrote, and none of those documents says what kind of person wrote it. The Archive holds the paper, not the author's file, and it does not assume. The others are people whose kind the record has not established." }
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

// Plural systems (Dermot's choices, 2026-10-25). The page that carries a
// system sets `plural_system`: true, or the system's collective name where
// the record gives one (`"The Eden Warden"`). A member with a page of their
// own names that page's id in `system`. A system and its members are shelved
// together under "Plural systems", never by the body's kind: a member whose
// identity is another species is a person, not an animal (Plural Minds).
// Nesting is display only; every page keeps its own URL.
function isSystemPage(data) {
  return data.plural_system === true || (typeof data.plural_system === "string" && data.plural_system.trim() !== "");
}

function systemHeading(data) {
  return typeof data.plural_system === "string" && data.plural_system.trim()
    ? data.plural_system.trim()
    : `${data.title}'s system`;
}

// [{id, heading, page, members}], A-Z by heading, members A-Z. A member whose
// system page is not on this build still shows, under its own title, so a
// narrowed edition never drops a member into a kind group.
function groupPluralSystems(items) {
  const list = items || [];
  const pagesById = new Map(list.map((item) => [String(item.data.id), item]));
  const systems = new Map();
  for (const item of list) {
    if (isSystemPage(item.data)) {
      systems.set(String(item.data.id), { id: String(item.data.id), heading: systemHeading(item.data), page: item, members: [] });
    }
  }
  for (const item of list) {
    if (!item.data.system) continue;
    const key = String(item.data.system);
    if (!systems.has(key)) {
      const owner = pagesById.get(key);
      systems.set(key, owner
        ? { id: key, heading: systemHeading({ ...owner.data, plural_system: owner.data.plural_system || true }), page: owner, members: [] }
        : { id: key, heading: item.data.title, page: null, members: [] });
    }
    systems.get(key).members.push(item);
  }
  return [...systems.values()]
    .map((system) => ({ ...system, members: byTitle(system.members) }))
    .sort((a, b) => compareTitles(a.heading, b.heading));
}

function inPluralSystem(data) {
  return isSystemPage(data) || Boolean(data.system);
}

// Characters as [{...kind, items}] (or, for plural systems, {...kind,
// systems}), kinds in page order, empty kinds dropped, each kind A-Z.
function groupCharacters(items) {
  const list = items || [];
  const systems = groupPluralSystems(list);
  // A page another page names as its system is shelved with that system.
  const shelvedAsSystem = new Set(systems.filter((s) => s.page).map((s) => String(s.page.data.id)));
  return CHARACTER_KINDS
    .map((kind) => {
      if (kind.id === "plural-systems") return { ...kind, systems, items: systems };
      return {
        ...kind,
        items: byTitle(list.filter((item) =>
          !inPluralSystem(item.data) &&
          !shelvedAsSystem.has(String(item.data.id)) &&
          characterKind(item.data.species) === kind.id))
      };
    })
    .filter((group) => group.items.length);
}

// What validate-content.js reports about the two fields: `plural_system`
// is true or a non-empty name, `system` names a character page that carries
// a system, and no page is both a system and a member of another.
function pluralSystemProblems(pages) {
  const byId = new Map(pages.map(({ data }) => [String(data.id), data]));
  const out = [];
  for (const { data, relativePath } of pages) {
    const problems = [];
    if (data.plural_system !== undefined && !isSystemPage(data)) {
      problems.push(`plural_system must be true or the system's collective name`);
    }
    if (data.system !== undefined) {
      const target = byId.get(String(data.system));
      if (typeof data.system !== "string" || !data.system.trim()) {
        problems.push(`system must be the id of the character page that carries the plural system`);
      } else if (!target) {
        problems.push(`system "${data.system}" doesn't match any character id`);
      } else if (!isSystemPage(target)) {
        problems.push(`system "${data.system}" names a page without plural_system - mark the page that carries the system`);
      }
      if (isSystemPage(data)) {
        problems.push(`a page carries a plural system or is a member of one, not both`);
      }
    }
    if (problems.length) out.push({ relativePath, problems });
  }
  return out;
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
  groupPluralSystems,
  pluralSystemProblems,
  LORE_CATEGORY_ORDER,
  groupLore
};
