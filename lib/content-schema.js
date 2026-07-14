// Single source of truth for each content type's front-matter shape, used
// by both scripts/validate-content.js (catches a malformed file with a
// clear error instead of a silent bad build) and scripts/new-content.js
// (scaffolds a new file with the right shape). Keeping one registry means
// the two can never drift out of sync with each other.
//
// Only fields whose absence breaks something structurally (a blank page,
// a broken sort, broken cross-file linking) are `required` - anything the
// layout templates already handle gracefully via their own `{% if %}`
// guards (category, tags, image, ...) is left optional here too, even
// though most real entries set it by convention.

const CHAPTER_ID_PATTERN = /^s(\d{2})e(\d{2})c(\d{2})$/;

const CONTENT_TYPES = {
  character: {
    layout: "character.njk",
    label: "Character",
    dir: "src/characters",
    required: ["title", "id"],
    // Prompted by scripts/new-content.js; none required beyond the two above.
    optionalFields: ["species", "role", "status", "aliases", "tags", "description", "image", "image_alt"]
  },
  lore: {
    layout: "lore-entry.njk",
    label: "Lore entry",
    dir: "src/lore",
    required: ["title"],
    optionalFields: ["category", "tags", "description", "image", "image_alt"]
  },
  codex: {
    layout: "codex.njk",
    label: "Codex entry",
    dir: "src/codex",
    required: ["title"],
    optionalFields: ["category", "author", "institution", "location", "tags", "image", "image_alt"]
  },
  glossary: {
    layout: "glossary-entry.njk",
    label: "Glossary entry",
    dir: "src/glossary",
    required: ["title"],
    // `id` has an automatic title-slug fallback in glossary-entry.njk, so
    // it's optional here even though it's required for character/chapter.
    optionalFields: ["id", "category", "short", "related"]
  },
  chapter: {
    layout: "chapter.njk",
    label: "Chapter",
    dir: "src/seasons",
    required: ["title", "season", "episode", "chapter", "id"],
    numeric: ["season", "episode", "chapter"],
    optionalFields: ["timestamp", "location", "description", "tags", "canon_facts", "povs"]
  }
};

// Timeline entries (src/timeline/*.md, excluding index.md) use layout:
// base.njk directly with hand-written HTML in the markdown body, unlike
// every other type above - not layout-driven, so no scripts/new-content.js
// scaffold exists for them (see FORKING.md), but they still get validated.
const TIMELINE_TYPE = {
  label: "Timeline entry",
  dir: "src/timeline",
  required: ["title", "sort_order"],
  numeric: ["sort_order"]
};

function isTimelineEntry(inputPath) {
  // Matches .eleventy.js's own existing check for the same thing.
  return inputPath.includes("/timeline/") && !inputPath.endsWith("/index.md");
}

function zeroPad(num) {
  return String(num).padStart(2, "0");
}

function chapterIdFor(season, episode, chapter) {
  return `s${zeroPad(season)}e${zeroPad(episode)}c${zeroPad(chapter)}`;
}

module.exports = { CONTENT_TYPES, TIMELINE_TYPE, CHAPTER_ID_PATTERN, isTimelineEntry, zeroPad, chapterIdFor };
