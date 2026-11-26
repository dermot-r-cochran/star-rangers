"use strict";

// lib/reading-time.js — about how long a chapter takes to read, and where it
// sits in its episode.
//
// Dermot, 2026-11-26, choosing the recommended reading improvements: a
// chapter's header says where the reader is (season, episode, chapter n of m)
// and about how long it takes, and the episode and season lists say the same
// time beside each chapter. Derived at build time from the chapter's own
// source, so nothing is authored and nothing new is asserted.
//
// The count is of the reading every tier is given: a `::: pov … tier=…` block
// is left out (CLAUDE.md: every tier's reading of a chapter is complete
// without the blocks the tier above adds), so the contemplative edition's
// fuller chapters read a little long against the figure, never short.

const WORDS_PER_MINUTE = 230;

// source: a chapter's raw Markdown body (front matter, if present, is
// skipped). Returns the number of words a reader meets.
function wordCount(source) {
  if (typeof source !== "string" || !source.trim()) return 0;
  let text = source.replace(/^---\n[\s\S]*?\n---\n/, "");
  // Drop tier-gated viewpoint blocks, fence line to closing fence.
  text = text.replace(/^:{3,4}\s*pov\s+\S+\s+tier=\S+[^\n]*\n[\s\S]*?^:{3,4}\s*$/gm, "");
  text = text
    .split("\n")
    .filter((line) => !/^\s*:{3,}/.test(line))
    .join("\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[%{#][\s\S]*?[%}#]\}/g, " ")
    .replace(/[*_`>#|\[\]()]/g, " ");
  const words = text.match(/[\p{L}\p{N}][\p{L}\p{N}'’\-]*/gu);
  return words ? words.length : 0;
}

// Whole minutes, never less than one for a chapter with any words.
function readingMinutes(source) {
  const words = wordCount(source);
  return words ? Math.max(1, Math.round(words / WORDS_PER_MINUTE)) : 0;
}

// chapters: the `chapters` collection in story order; id: a chapter id.
// Returns { position, total } within the chapter's own episode, or null.
function chapterPosition(chapters, id) {
  const list = chapters || [];
  const me = list.find((c) => c && c.data && c.data.id === id);
  if (!me) return null;
  const same = list.filter(
    (c) => Number(c.data.season) === Number(me.data.season) && Number(c.data.episode) === Number(me.data.episode)
  );
  return { position: same.indexOf(me) + 1, total: same.length };
}

module.exports = { WORDS_PER_MINUTE, wordCount, readingMinutes, chapterPosition };
