// How widely a lore page's subject is known among the people of the story,
// as the page stands: by the latest events it records. There is no
// single present year (Dermot, 2026-11-24: the present depends on the season
// or episode, and seasons can span decades and overlap), so there is no
// "recent" value; a note gives the year where knowledge changed over time.
// Dermot, 2026-11-24: "Yes those two optional offers please", accepting a short "known in-world?" line on each
// lore page. The Archive is open and holds only what the record's own
// institutions know (CLAUDE.md, the 2026-09-20 ruling), so there is no
// "nobody knows" value: every lore page is on the open record, and the line
// says how far beyond the record a fact has travelled.
//
// A page sets `known:` to one of these keys and may add `known_note:`, one
// short sentence for a page whose parts differ, or to say where or when
// ("Common knowledge on Eden, where most residents ride it every day.").
// The rules for choosing are in story-bible/known-in-story.md.

const KNOWN_IN_STORY = {
  common: "Common knowledge. Most people in the story could tell you this.",
  learned: "Known to anyone who has read or been taught about it: in schools, popular accounts and the news, though not everyone carries it.",
  specialist: "In the open Archive, but in practice known to specialists: the Corps, the Institute, the survey or the people it concerns.",
};

// When the subject entered the record, beside how widely it is known
// (Dermot, 2026-11-24, verbatim: "Recent would mean contemporary with the
// story, within the 29th century or later. Historical would mean early 28th
// century or before"; asked about the years between, "Counts as recent").
// Optional: a subject with no date of its own (a coastline, the weather)
// carries none.
const ERAS = {
  recent: "Entered the record about 2750 UCSD or later.",
  historical: "Entered the record before about 2750 UCSD.",
};

const KNOWN_KEYS = Object.keys(KNOWN_IN_STORY);
const ERA_KEYS = Object.keys(ERAS);
const NOTE_MAX = 240;

// Problems with one page's front matter, as strings; empty when it is fine.
function knownProblems(data) {
  const problems = [];
  const has = (k) => data[k] !== undefined && data[k] !== null && String(data[k]).trim() !== "";
  if (has("known") && !KNOWN_KEYS.includes(String(data.known).trim())) {
    problems.push(`known: "${data.known}" is not one of ${KNOWN_KEYS.join(", ")}`);
  }
  if (has("era") && !ERA_KEYS.includes(String(data.era).trim())) {
    problems.push(`era: "${data.era}" is not one of ${ERA_KEYS.join(", ")}`);
  }
  if (has("known_note") && !has("known")) {
    problems.push("known_note: is set without known:");
  }
  if (has("known_note") && String(data.known_note).length > NOTE_MAX) {
    problems.push(`known_note: is longer than ${NOTE_MAX} characters; it is one short sentence`);
  }
  return problems;
}

module.exports = { KNOWN_IN_STORY, KNOWN_KEYS, ERAS, ERA_KEYS, NOTE_MAX, knownProblems };
