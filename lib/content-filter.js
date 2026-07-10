// Shared CHARACTERS/TOPICS content filtering (see .cpanel.yml for the full
// deploy.conf-driven explanation). Used by .eleventy.js for the existing
// whole-page inclusion checks, and by src/_data/scenePovPages.js for the
// finer-grained per-scene, per-character POV page inclusion.
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function parseFilterList(envValue) {
  return String(envValue || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

function getContentFilter() {
  const characters = parseFilterList(process.env.CHARACTERS);
  const topics = parseFilterList(process.env.TOPICS);
  return {
    characters,
    // Tags conventionally embed character slugs too (e.g. a timeline entry
    // tagged "aldera"), so CHARACTERS also participates in tag matching.
    tagMatches: new Set([...characters, ...topics]),
    active: characters.length > 0 || topics.length > 0
  };
}

function hasMatchingTag(data, filter) {
  if (!filter.tagMatches.size) return false;
  const tags = Array.isArray(data.tags) ? data.tags.map((t) => String(t).toLowerCase()) : [];
  const category = data.category ? String(data.category).toLowerCase() : null;
  return tags.some((t) => filter.tagMatches.has(t)) || (category !== null && filter.tagMatches.has(category));
}

function hasMatchingPov(data, filter) {
  if (!filter.characters.length) return false;
  const povs = Array.isArray(data.povs) ? data.povs : [];
  return povs.some((p) => filter.characters.includes(String((p && p.id) || "").toLowerCase()));
}

function isCharacterIncluded(data, filter) {
  if (!filter.active) return true;
  return filter.characters.includes(String(data.id || "").toLowerCase()) || hasMatchingTag(data, filter);
}

function isChapterIncluded(data, filter) {
  if (!filter.active) return true;
  return hasMatchingPov(data, filter) || hasMatchingTag(data, filter);
}

function isTopicPageIncluded(data, filter) {
  if (!filter.active) return true;
  return hasMatchingTag(data, filter);
}

// Per-character granularity for the individual scene/POV pages: unlike
// isChapterIncluded (any matching POV pulls in the whole chapter, tags
// included), a single character's own POV page is only real content when
// that specific character is in the CHARACTERS list. TOPICS matching stays
// a chapter/tag-level concern - it doesn't identify a specific character,
// so it can't grant one character's POV page real content on its own.
function isCharacterPovIncluded(characterId, filter) {
  if (!filter.active) return true;
  return filter.characters.includes(String(characterId || "").toLowerCase());
}

const CHARACTERS_DIR = path.join(__dirname, "..", "src", "characters");
// Matches an in-repo link target like /star-rangers/lore/planets/aspenar/
// or /star-rangers/glossary/plural-minds/ anywhere in a character's raw
// markdown body - deliberately not anchored to `[text](...)` syntax alone,
// since a stray `href="..."` would carry the same meaning.
const RELATED_LINK_PATTERN = /\/star-rangers\/(lore|timeline|glossary)\/[a-z0-9-/]+/gi;

// A character's own bio is already the site's best record of which lore,
// timeline, and glossary entries matter for understanding them - every
// character page in this repo cross-links its relevant background rather
// than restating it. So when a CHARACTERS-filtered deploy narrows the site
// to a handful of characters, this walks each included character's raw
// markdown for exactly those links and returns the set of lore/timeline/
// glossary page URLs (site-relative, no /star-rangers prefix, matching
// Eleventy's own `item.url`) that deploy should carry along even though
// nothing tagged them for that character explicitly.
function getRelatedContentUrls(filter) {
  const urls = new Set();
  if (!filter.active || !filter.characters.length) return urls;

  let files;
  try {
    files = fs.readdirSync(CHARACTERS_DIR).filter((f) => f.endsWith(".md"));
  } catch {
    return urls;
  }

  for (const file of files) {
    const raw = fs.readFileSync(path.join(CHARACTERS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    if (!isCharacterIncluded(data, filter)) continue;

    for (const match of content.matchAll(RELATED_LINK_PATTERN)) {
      urls.add(match[0].replace(/^\/star-rangers/, ""));
    }
  }

  return urls;
}

module.exports = {
  parseFilterList,
  getContentFilter,
  hasMatchingTag,
  hasMatchingPov,
  isCharacterIncluded,
  isChapterIncluded,
  isTopicPageIncluded,
  isCharacterPovIncluded,
  getRelatedContentUrls
};
