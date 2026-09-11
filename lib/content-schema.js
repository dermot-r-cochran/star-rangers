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

const { statusKey } = require("./status-key");

const CHAPTER_ID_PATTERN = /^s(\d{2})e(\d{2})c(\d{2})$/;

// The vocabulary of a character's `status` (defined 2026-09-11 at Dermot's
// ask, after the word "Active" on a pet's page raised the question of what
// the badge meant; until then the field was free text and its meaning was
// only what the corpus happened to use). Keyed the way character.njk keys
// the badge's class - lib/status-key.js: the head clause before an em dash,
// colon, semicolon, comma or parenthesis, slugified - so a qualified value
// such as "Contained — Survey Corps custody, jurisdiction formally disputed"
// is Contained, and the qualification stays free text the badge prints in
// full. The five are the ones the corpus uses; a sixth is a vocabulary
// decision, added here (and styled in src/css/main.css) rather than typed
// into a page. The field stays optional: a page without it shows no badge.
const CHARACTER_STATUSES = {
  active: {
    label: "Active",
    meaning: "alive and present in the story's present, 2826 UCSD, and available to appear in chapters"
  },
  historical: {
    label: "Historical",
    meaning: "a figure of the record's past - dead, or of an earlier era - whose part is already told"
  },
  retired: {
    label: "Retired",
    meaning: "living, out of service"
  },
  "at-large": {
    label: "At large",
    meaning: "known to the record but not where anyone last put it"
  },
  contained: {
    label: "Contained",
    meaning: "in custody, whoever holds it"
  }
};

// null when the status is absent or one of CHARACTER_STATUSES (by head
// clause); otherwise a problem string naming the five, for the validator.
function characterStatusProblem(status) {
  if (status === undefined || status === null || String(status).trim() === "") return null;
  const key = statusKey(status);
  if (Object.prototype.hasOwnProperty.call(CHARACTER_STATUSES, key)) return null;
  const allowed = Object.values(CHARACTER_STATUSES).map((s) => `"${s.label}"`).join(", ");
  return `status "${status}" is not one of the five character statuses (${allowed}) - ` +
    `see CHARACTER_STATUSES in lib/content-schema.js; a qualification may follow the status after an em dash`;
}

const CONTENT_TYPES = {
  character: {
    layout: "character.njk",
    label: "Character",
    dir: "src/characters",
    required: ["title", "id"],
    // Prompted by scripts/new-content.js; none required beyond the two above.
    // `known_codex` is an array of codex-entry filename slugs (e.g.
    // "star-rangers-anthem") this character is aware of in-universe -
    // rendered as links on character.njk and cross-checked by
    // validate-content.js against actual src/codex/ files.
    // `status` takes one of the five CHARACTER_STATUSES above (by head
    // clause), checked by validate-content.js.
    optionalFields: ["species", "role", "status", "aliases", "tags", "description", "image", "image_alt", "gallery", "known_codex"]
  },
  lore: {
    layout: "lore-entry.njk",
    label: "Lore entry",
    dir: "src/lore",
    required: ["title"],
    // `plain` is an optional plain-language summary, rendered as an
    // "In short" block at the top of the entry page when present. It is
    // Archive voice at a simpler register - same facts, shorter sentences -
    // not a children's rewrite; the in-universe children's register lives in
    // the Codex (Bramble Storybooks) and is valid-for-its-author, whereas a
    // summary a reader relies on has to be flatly true, which is lore's job.
    optionalFields: ["category", "tags", "description", "image", "image_alt", "plain"]
  },
  codex: {
    layout: "codex.njk",
    label: "Codex entry",
    dir: "src/codex",
    // `author` is required here for a narrative reason rather than a
    // rendering one: a codex entry is not canon, it is one in-universe
    // source's account, and it is held to being *valid from that source's
    // point of view* - their era, their access, their bias. An entry with
    // nobody behind it has no point of view to be valid from, and quietly
    // becomes the Archive stating fact, which is what src/lore/ is for.
    // "Unattributed; transmitted through <channel>" is a perfectly good
    // value - it records provenance, which is itself a stance.
    required: ["title", "author"],
    // `location` is the precise in-universe shelf-mark (free text);
    // `library` is the coarse holding-collection name src/codex/index.md
    // groups the listing by. Entries without one fall into the index's
    // "circulating and scattered holdings" group - correct for documents
    // with no single archival master, so leaving it unset is a statement,
    // not an omission.
    optionalFields: ["category", "library", "institution", "location", "tags", "image", "image_alt"]
  },
  glossary: {
    layout: "glossary-entry.njk",
    label: "Glossary entry",
    dir: "src/glossary",
    required: ["title"],
    // `id` has an automatic title-slug fallback in glossary-entry.njk, so
    // it's optional here even though it's required for character/chapter.
    // `short` renders only on the glossary index listing; `plain` renders
    // on the entry page itself (see the lore type's comment above).
    optionalFields: ["id", "category", "short", "related", "plain"]
  },
  chapter: {
    layout: "chapter.njk",
    label: "Chapter",
    dir: "src/seasons",
    // `date` (real-world YYYY-MM-DD, distinct from the in-universe
    // `timestamp` string) is required so every chapter has a genuine
    // publish date for the Atom feed (src/feed.njk) to sort and stamp
    // entries by - scripts/new-content.js sets it to today automatically.
    //
    // `comment_id` is the giscus discussion's permanent identity (see
    // "specific" mapping in src/_includes/base.njk) - deliberately separate
    // from `id`, which is derived from season/episode/chapter and changes
    // whenever a chapter is renumbered (e.g. to keep episodes in
    // chronological order - see CHANGELOG's "renumbered" entries). Once
    // set, never regenerate it from the current title/position: if a
    // chapter's slot is renumbered, its `comment_id` must move with it so
    // any existing discussion thread stays attached to the same content,
    // and whatever new content takes over the vacated slot gets its own
    // fresh `comment_id` rather than inheriting the old one.
    required: ["title", "season", "episode", "chapter", "id", "date", "comment_id"],
    numeric: ["season", "episode", "chapter"],
    // `image`/`image_alt` were added 2026-07-30 for a social-sharing reason
    // rather than a design one. Chapters had no image field at all, so every
    // chapter and every scene-POV page fell back to the site hero in its
    // Open Graph tags - 147 pages sharing one preview image, on exactly the
    // pages most likely to be shared. Files live in src/images/chapters/
    // (see OG_IMAGE_DIRS in .eleventy.js); optional, and the hero fallback
    // stays for any chapter without one.
    optionalFields: ["timestamp", "location", "description", "tags", "canon_facts", "povs", "image", "image_alt"]
  },
  journal: {
    layout: "journal-entry.njk",
    label: "Journal entry",
    dir: "src/journal",
    // Out-of-character, real-world author's notes - not in-universe
    // content like every other type above. `date` (real-world YYYY-MM-DD)
    // is required since entries are ordered and listed by it, the same way
    // a chapter's `date` drives the Atom feed rather than story order.
    required: ["title", "date"],
    optionalFields: ["tags", "description"]
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

module.exports = { CONTENT_TYPES, TIMELINE_TYPE, CHAPTER_ID_PATTERN, CHARACTER_STATUSES, characterStatusProblem, isTimelineEntry, zeroPad, chapterIdFor };
