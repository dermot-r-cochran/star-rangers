// Shared CHARACTERS/TOPICS content filtering (see .cpanel.yml for the full
// deploy.conf-driven explanation). Used by .eleventy.js for the existing
// whole-page inclusion checks, and by src/_data/scenePovPages.js for the
// finer-grained per-scene, per-character POV page inclusion.
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

module.exports = {
  parseFilterList,
  getContentFilter,
  hasMatchingTag,
  hasMatchingPov,
  isCharacterIncluded,
  isChapterIncluded,
  isTopicPageIncluded,
  isCharacterPovIncluded
};
