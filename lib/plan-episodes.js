// The Reading Plan's episode list (src/start/index.md). Dermot, 2026-11-24,
// verbatim: "At least 12 episodes in the reading plan for each edition."
//
// Given the build's chapters in reading order (the `chapters` collection,
// already narrowed to the edition) and the thread the plan starts with, it
// returns at least PLAN_EPISODES episodes in the order a reader meets them:
// the first thread's episodes first, then the spine's (the record's main
// line, which an edition's own thread runs beside), then the rest of the
// edition's episodes in the collection's own order. A thread's Episode 0 (prequels) is left out
// when that thread has numbered episodes, as "Begin here" leaves it out, and
// used only if the edition would otherwise fall short. Each episode carries
// its first chapter, so the list links where a reader would start it.

const PLAN_EPISODES = 12;
const SPINE = "tissadelle-arc";

function episodesOf(chapters, threadOf) {
  const byKey = new Map();
  for (const chapter of chapters || []) {
    const { season, episode } = chapter.data || {};
    if (season === undefined || episode === undefined) continue;
    const key = `${season}-${episode}`;
    if (!byKey.has(key)) {
      const pad = (n) => String(n).padStart(2, "0");
      byKey.set(key, { season, episode, code: `S${pad(season)}E${pad(episode)}`, threadId: threadOf(season).id, first: chapter, chapters: 0 });
    }
    byKey.get(key).chapters++;
  }
  return Array.from(byKey.values());
}

function planEpisodes(chapters, firstThreadId, threadOf, min = PLAN_EPISODES) {
  const all = episodesOf(chapters, threadOf);
  const numbered = new Set(all.filter((e) => e.episode > 0).map((e) => e.threadId));
  const isPrequel = (e) => e.episode === 0 && numbered.has(e.threadId);
  const ordered = [
    ...all.filter((e) => e.threadId === firstThreadId && !isPrequel(e)),
    ...all.filter((e) => e.threadId === SPINE && e.threadId !== firstThreadId && !isPrequel(e)),
    ...all.filter((e) => e.threadId !== firstThreadId && e.threadId !== SPINE && !isPrequel(e)),
    ...all.filter(isPrequel),
  ];
  return ordered.slice(0, Math.max(min, 0));
}

module.exports = { PLAN_EPISODES, planEpisodes, episodesOf };
