// Canonical registry of storyline threads and the season numbers each one
// covers - see story-bible/story-bible-summary.md's "Narrative Structure -
// Multiple Independent Storylines" section for the concept this formalizes.
// Single source of truth, consumed both by the site's season/thread
// grouping (src/_data/storylineThreads.js re-exports STORYLINE_THREADS,
// .eleventy.js exposes threadForSeason as a template filter) and by
// deploy.conf's THREADS filter (lib/content-filter.js).
//
// `private: true` (optional, defaults falsy) marks a thread as opt-in only:
// lib/content-filter.js's isThreadIncluded hides every page belonging to it
// - its chapters (by season), any character/lore/codex/glossary/timeline
// entry tagged with its id, and its own /threads/<id>/ landing page - on
// EVERY build, including the unfiltered "full site" one, unless that
// build's own deploy.conf CHARACTERS/TOPICS/THREADS explicitly names the
// thread's id. This is the opposite of what an ordinary (non-private)
// thread's id does when named there: for those, THREADS just narrows an
// otherwise-full site down to a subset. Use `private: true` for a thread
// meant for exactly one domain (or a small set of them) rather than every
// production clone - e.g. church-space.site/.online's own storyline, kept
// out of sciencefiction.site, GitHub Pages, and every other clone by
// default.
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
  },
  {
    id: "orbital-five-o",
    name: "Orbital Five-O",
    description:
      "The Governor's Investigative Task Force - Commander Kai Larsen closing the jurisdictional gap none of the five self-governing Compact habitats could close alone, answering to Governor Petra Voss directly and bypassing the Compact's slower consultative councils.",
    // No seasons assigned yet - add the season number(s) here once this
    // thread's first chapter exists (see isSeasonInIncludedThread /
    // threadForSeason below for how a chapter's `season` front matter
    // resolves to a thread).
    seasons: []
  },
  {
    id: "church-space",
    name: "Church Space",
    description:
      "A parallel storyline with its own cast, written for the church-space.site/.online deployment and carrying explicit Christian and evangelical themes that aren't part of the main published canon. Hidden everywhere else - see this file's own `private` field comment above.",
    // No seasons assigned yet - add the season number(s) here once this
    // thread's first chapter exists (see isSeasonInIncludedThread /
    // threadForSeason below for how a chapter's `season` front matter
    // resolves to a thread).
    seasons: [],
    private: true
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
