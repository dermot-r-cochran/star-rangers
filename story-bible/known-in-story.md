# Known in the story

Every lore page may say how widely its subject is known among the people of
the story. Dermot accepted the line on 24 November 2026 (*"Yes those two
optional offers please"*), after the question of which lore is public
knowledge within the story had no answer on any page.

## What the line says

Lore pages state what is true as the record stands and hold
only what the record's own institutions could know (CLAUDE.md, the
2026-09-20 ruling: the Archive is open). So the question is never *whether*
anyone in the story knows a fact, but **how far beyond the Archive it has
travelled**, judged as the page stands, by the latest events it records.
There is no single present year to judge against. Dermot, the same day,
verbatim: *"The story is mostly 29th Century but the 'present' year would
depend on the season or episode"* and *"A season could span several years
or decades and seasons can have overlapping timelines."* So the line has no
"recent" value; where knowledge of a subject changed over time, the note
gives the year ("the survey's account of them, gathered from 2831 UCSD, is held
by the Survey Corps"). A page sets `known:` to one of three values, defined with their
reader-facing labels in `lib/known-in-story.js`:

| `known:` | Meaning |
|---|---|
| `common` | Most people in the story could tell you this: a place everyone has heard of, a law everyone lives under, a festival, a famous event. |
| `learned` | Taught in schools, carried by popular accounts or the news; anyone who has read up knows it, not everyone does. |
| `specialist` | On the open record, but in practice held by the Corps, the Institute, the survey, a faith or the people it concerns. |

`known_note:` is optional: one short sentence, for a page whose parts
differ, or to name who holds a specialist fact ("Common knowledge on Eden, where most residents ride it every day."). It is
written in the plain register of the page's `plain:` line.

## When: the era

Beside how widely a subject is known, a page may say when it entered the
record. Dermot, the same day, verbatim: *"Recent would mean contemporary
with the story, within the 29th century or later. Historical would mean
early 28th century or before"*; asked where the late 28th century falls,
*"Counts as recent"*. So `era:` is one of:

| `era:` | Meaning |
|---|---|
| `recent` | The subject entered the record about 2750 or later: contemporary with the story. |
| `historical` | It entered the record before about 2750. |

The date is when the subject begins in the human story:

- a world humans settled: its settlement (the Currach Fleet's worlds are
  historical, though the Solar System lost touch with them);
- a world, people or polity humans found: first contact (the Federation's
  peoples are recent, met decades after the 2723 charter, however old
  their own histories);
- an institution, law or office: its founding; a polity formed by charter
  takes the charter (the Celtic Union is recent, its worlds historical);
- an event: its date; a theory or category: when the record established it.

A subject with no date of its own (a coastline, the weather, an everyday
custom, a general principle), or one whose date the record says it does
not hold, carries no era. A bound is enough ("decades after 2723"); a
guess is not. It renders before the breadth
label, and the label says what is dated (Dermot, 25 November 2026, the
recommended option: the front-matter values stay his two words, and the
reader sees *Entered the record about 2750 UCSD or later.* or *Entered the
record before about 2750 UCSD.*): **In the story:** *Entered the record
about 2750 UCSD or later.* Known to specialists...

## How a value is chosen

- **Evidence first.** A Timeline entry, a Codex document or a chapter that
  puts the fact in ordinary people's hands (a crowd that knows it, a
  newspaper, a school, a festival, a public notice) argues for `common` or
  `learned`. A fact that appears only in Corps, Institute or survey papers,
  or only in the mouths of specialists, is `specialist`.
- **Now, not the page's subject date.** A thing that happened in
  2340 and is taught in every school is `common` or `learned` now.
- **Change over time goes in the note.** A fact that was specialist and
  later spread, or the reverse, takes the value of the latest events the
  page records, and the note says when it changed.
- **A value local to one place says so.** Where a fact is everyday in one
  habitat or world and little known elsewhere, the value is for settled
  space as a whole and the note names the place.
- **Not a ranking of truth.** The line says how widely a fact is known, not
  how certain it is: grade and confidence stay in the page's own prose.
- **Peoples know their own world.** A non-human people's own customs and
  history are `common` among them; the note says so where the human record
  holds them only as `specialist`.
- **When the record is silent**, choose the narrowest value the evidence
  supports and leave a note only if it adds something. Never invent a
  scene of knowing.

## Where it shows

The line renders inside the page's *In short* box, under the plain summary,
as **In the story:** followed by the label and any note. Pages without it
show nothing extra. `scripts/check-known-in-story.js` (in `npm test`)
refuses an unknown value or a note without a value, and prints how many
lore pages carry the line.
