// Canonical registry of storyline threads and the season numbers each one
// covers - see story-bible/story-bible-summary.md's "Narrative Structure -
// Multiple Independent Storylines" section for the concept this formalizes.
// Single source of truth, consumed both by the site's season/thread
// grouping (src/_data/storylineThreads.js re-exports STORYLINE_THREADS,
// .eleventy.js exposes threadForSeason as a template filter) and by
// deploy.conf's THREADS filter (lib/content-filter.js).
const STORYLINE_THREADS = [
  {
    id: "founding-era",
    name: "Founding Era",
    description:
      "The years that made the Star Rangers both necessary and possible, under the last stretch of Military Space Command rule - before the Charter, and before Threshold Station's drift had a name.",
    seasons: [0]
  },
  {
    id: "tissadelle-arc",
    name: "Tissadelle Shepherd's Arc",
    description:
      "The chronological spine of the published series - Cadet to Principal to Line Captain to the Last Stand - carried across Seasons 1, 3, 5, and beyond. Seasons 2 and 4 are deliberately left open for storylines that don't run through her.",
    seasons: [1, 3, 5]
  }
];

// A season whose number isn't claimed by any registered thread yet (e.g. a
// freshly published Season 2/4 before someone assigns it) falls back to
// this rather than disappearing from groupings or crashing template code.
const UNSORTED_THREAD = {
  id: "unsorted",
  name: "Unsorted",
  description: "Seasons published before being assigned to a storyline thread."
};

function threadForSeason(seasonNumber) {
  const n = Number(seasonNumber);
  return STORYLINE_THREADS.find((thread) => thread.seasons.includes(n)) || UNSORTED_THREAD;
}

module.exports = { STORYLINE_THREADS, UNSORTED_THREAD, threadForSeason };
