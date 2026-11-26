"use strict";

// lib/follow-character.js — follow one character's viewpoint from scene to scene.
//
// A scene-POV page (src/scene-pov.njk) used to link only back to its chapter,
// so reading a chapter as one character meant returning to the chapter's scene
// list after every scene. Dermot, 2026-11-26, choosing the recommended reading
// improvement *"Follow one character"*: each scene-POV page now links to the
// same character's previous and next viewpoint, within the chapter and on into
// the next chapter where that character next has one. Navigation only and
// derived from the build's own scene-POV entries: a page the build leaves out
// (`included: false`) is never linked, and nothing is authored.

function sortKey(entry) {
  return `${entry.chapterId}|${String(entry.sceneNumber).padStart(4, "0")}`;
}

// pages: the scenePovPages entries; item: the current entry. Returns
// { previous, next }, each an entry of the same character or null.
function followNeighbours(pages, item) {
  if (!item || !item.character) return { previous: null, next: null };
  const who = String(item.character.id).toLowerCase();
  const mine = (pages || [])
    .filter((p) => p && p.included && p.character && String(p.character.id).toLowerCase() === who)
    .sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0));
  const index = mine.findIndex((p) => p.url === item.url);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: index > 0 ? mine[index - 1] : null,
    next: index < mine.length - 1 ? mine[index + 1] : null
  };
}

module.exports = { followNeighbours };
