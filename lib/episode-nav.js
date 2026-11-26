"use strict";

// lib/episode-nav.js — where an episode index page leads.
//
// An episode index (src/seasons/sNN/eNN/index.md) lists its chapters and, until
// 2026-11-26, nothing else: no way into the episode before or after it without
// going back up to the season. Dermot, that day: *"The link to the next episode
// or next chapter is not always easy to find."* This works the neighbours out
// from the build's own `chapters` collection (story order, already narrowed by
// the edition and the tier gate), so an edition never links an episode it
// excludes, and nothing is authored.

function zeroPad(n) {
  return String(n).padStart(2, "0");
}

function episodeKey(data) {
  return `${Number(data.season)}-${Number(data.episode)}`;
}

// chapters: the `chapters` collection in story order. Returns the episodes in
// the order their first chapter appears, each { season, episode, url,
// firstChapter }.
function episodesInOrder(chapters) {
  const seen = new Map();
  for (const chapter of chapters || []) {
    const data = chapter && chapter.data;
    if (!data || data.season === undefined || data.episode === undefined) continue;
    const key = episodeKey(data);
    if (seen.has(key)) continue;
    seen.set(key, {
      season: Number(data.season),
      episode: Number(data.episode),
      url: `/seasons/s${zeroPad(data.season)}/e${zeroPad(data.episode)}/`,
      firstChapter: chapter
    });
  }
  return [...seen.values()];
}

// Returns { first, previous, next } for the episode named by season and
// episode (numbers or numeric strings): `first` is the episode's own first
// chapter, `previous` and `next` the neighbouring episodes (or null).
function episodeNeighbours(chapters, season, episode) {
  const episodes = episodesInOrder(chapters);
  const key = `${Number(season)}-${Number(episode)}`;
  const index = episodes.findIndex((e) => `${e.season}-${e.episode}` === key);
  if (index < 0) return { first: null, previous: null, next: null };
  return {
    first: episodes[index].firstChapter,
    previous: index > 0 ? episodes[index - 1] : null,
    next: index < episodes.length - 1 ? episodes[index + 1] : null
  };
}

// The same for a season page (src/_includes/season-nav.njk, 2026-11-26): the
// season's first chapter and the seasons either side, each { season, url,
// firstChapter }, in the order their first chapters appear.
function seasonNeighbours(chapters, season) {
  const seasons = [];
  for (const e of episodesInOrder(chapters)) {
    if (!seasons.some((s) => s.season === e.season)) {
      seasons.push({ season: e.season, url: `/seasons/s${zeroPad(e.season)}/`, firstChapter: e.firstChapter });
    }
  }
  const index = seasons.findIndex((s) => s.season === Number(season));
  if (index < 0) return { first: null, previous: null, next: null };
  return {
    first: seasons[index].firstChapter,
    previous: index > 0 ? seasons[index - 1] : null,
    next: index < seasons.length - 1 ? seasons[index + 1] : null
  };
}

module.exports = { episodesInOrder, episodeNeighbours, seasonNeighbours };
