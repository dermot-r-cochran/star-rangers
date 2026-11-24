"use strict";

// Which lore entry the homepage fronts as "Newest" (the second hero button and
// the Lore card's text), chosen from the entries this build carries.
//
// WHY (2026-11-24, Dermot's "Yes, build it"). The first reader walk
// (story-bible/reader-walks/2026-11-24-church-space-contemplative.md) found
// church-space.site offering "Newest: Rank and the Chain of Command", with a
// paragraph on naval ranks on its Lore card. The pick was the newest entry the
// build carries, and a contemplative build carries every tier below it, so the
// newest page of the whole record reached a reader who came for the
// Communion. An edition may now name `newestTopics` in lib/editions.js: the
// pick is the newest entry tagged with one of them, and the newest entry
// overall only when none is tagged. Null (the default) keeps the old rule.
//
// Pure so test/newest-lore.test.js can pin it without git or the file system.

/**
 * @param {Array<{updated: Date, data: object}>} entries lore entries this build carries
 * @param {string[]|null} topics the edition's newestTopics, or null
 * @returns {object|null} the chosen entry, or null when there are none
 */
function pickNewest(entries, topics) {
  const newest = (list) =>
    list.reduce((best, e) => (!best || e.updated > best.updated ? e : best), null);

  if (Array.isArray(topics) && topics.length > 0) {
    const wanted = new Set(topics.map((t) => String(t).toLowerCase()));
    const own = entries.filter((e) =>
      (Array.isArray(e.data && e.data.tags) ? e.data.tags : [])
        .some((t) => wanted.has(String(t).toLowerCase()))
    );
    if (own.length > 0) return newest(own);
  }
  return newest(entries);
}

module.exports = { pickNewest };
