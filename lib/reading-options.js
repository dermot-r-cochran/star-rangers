"use strict";

// lib/reading-options.js — the other ways on from the end of an episode.
//
// The chapter layout's "Other ways on" aside (src/_includes/chapter.njk, since
// 2026-11-05) sets up to two options beside the Next link on an episode's last
// chapter: an episode of another thread that opens at the same moment, and one
// Archive entry. Dermot's direction (story-bible/intake-2026-11-05.md, first
// section): *"As reading navigation options"*, *"Linear within each episode
// is fine"* and *"Each episode should also read as a self-contained short
// story or set of chapters"*, which is why an option is always an episode's
// opening and never its middle. They are navigation only. The story does not
// branch, and a reader who follows one is still reading the one record.
//
// Nothing here is authored and no ordering metadata is added. The moment is
// read from a chapter's free-text `timestamp`, and a timestamp this module
// cannot read as a UCSD year and a season simply offers nothing, because a
// chapter that declines to date itself (*"Indeterminate. She has stopped
// trusting the count."*) is not to be dated by a parser. The candidates are
// the build's own collection, so a narrowed edition or a tier gate never
// offers a chapter the build excludes.

const UCSD_YEAR = /\b(\d{4}) UCSD\b/;
const YEAR_SEASON = /\b(?:(Early|Mid|Late|Deep)[\s-]+)?(Spring|Summer|Autumn|Winter)\b/;

// timestamp: the front-matter string. Returns "2826-Autumn", or null. *Early*
// and *Late* are ignored, so a chapter's moment is a season of a year; where a
// timestamp runs across seasons, the first one named is where it starts.
function momentOf(timestamp) {
  if (typeof timestamp !== "string") return null;
  const year = timestamp.match(UCSD_YEAR);
  const season = timestamp.match(YEAR_SEASON);
  return year && season ? `${year[1]}-${season[2]}` : null;
}

// The part of the season a timestamp names before it ("Late" in "Late
// Autumn", "Deep" in "Deep Winter"), or "" where it names none. It does not
// divide the moment; it only breaks a tie between openings at the same one.
function partOf(timestamp) {
  const season = typeof timestamp === "string" ? timestamp.match(YEAR_SEASON) : null;
  return season && season[1] ? season[1] : "";
}

const sameEpisode = (a, b) =>
  Number(a.data.season) === Number(b.data.season) && Number(a.data.episode) === Number(b.data.episode);

// chapters: the build's chapters collection, in story order.
// threadOf: season number -> { id, name }.
// Returns { chapter, threadName } for the first episode opening, in story
// order, in another thread at this chapter's moment. Null unless this chapter
// ends its episode: within an episode, reading is linear. The opening itself
// must be at the moment, because an episode can span years (Season 1's
// Episode 0 opens in 2822 and reaches 2826). Where the moment holds more than
// one such opening, the one that names the same part of the season as this
// chapter comes first (Late Autumn to Late Autumn before Early Autumn), so
// *Meanwhile* means what it says as nearly as the timestamps allow; the
// earliest in story order is the fallback.
function findMeanwhile(chapters, id, threadOf) {
  const list = chapters || [];
  const index = list.findIndex((c) => c.data.id === id);
  if (index < 0) return null;
  const current = list[index];
  const next = list[index + 1];
  if (next && sameEpisode(current, next)) return null;
  const moment = momentOf(current.data.timestamp);
  if (!moment) return null;
  const part = partOf(current.data.timestamp);
  const thread = threadOf(current.data.season);
  let first = null;
  for (const [i, chapter] of list.entries()) {
    if (momentOf(chapter.data.timestamp) !== moment) continue;
    if (i > 0 && sameEpisode(list[i - 1], chapter)) continue;
    if (chapter === next) continue;
    const other = threadOf(chapter.data.season);
    if (other.id === thread.id) continue;
    const found = { chapter, threadName: other.name };
    if (partOf(chapter.data.timestamp) === part) return found;
    if (!first) first = found;
  }
  return first;
}

// companions: findArchiveCompanions' result. Returns the one entry to offer: a
// lore page before a Codex page before a glossary line, since the longest read
// is the one worth a way on, and first revealed here before merely named.
function pickArchiveOption(companions) {
  const rank = { lore: 0, codex: 1, glossary: 2 };
  const score = (entry) => rank[entry.section] * 2 + (entry.relation === "revealed" ? 0 : 1);
  return (companions || []).reduce(
    (best, entry) => (best === null || score(entry) < score(best) ? entry : best),
    null
  );
}

module.exports = { momentOf, findMeanwhile, pickArchiveOption };
