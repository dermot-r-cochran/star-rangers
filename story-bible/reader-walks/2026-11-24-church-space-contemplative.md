# Reader walk — church-space.site, a contemplative reader (24 November 2026)

The first walk under the `reader-walk` skill (Dermot, 24 November 2026: *"We
need either a project or skill to simulate the reader experience as they walk
through the site"*, then *"Yes, build it"*). Opus, built-in browser, the live
site.

**The reader.** A contemplative reader, given the address by a friend, who
has never read the main story. From `edition-reader-profiles.md`, *church-space*:
**Wants** the overlay read as an overlay, a declared reading of the same events.
**Loses them** in either direction: too neutral, and the reading has no register
of its own; too devout, and it asserts a cosmology the story does not.

**Door:** `https://church-space.site/`. **Pages walked:** 6. **Ended:** the
reader found their own thread and settled; they did not stop.

## The path

1. `/` — Home
2. `/lore/communion-of-the-called/` — the opening paragraph's one link
3. `/lore/saint-aoife/` — from *See also*
4. `/seasons/s07/e01/s07e01c02/` — *Shown, Not Healed*, named on page 3
5. `/start/` — back to the home page's *Begin Reading*, to find the beginning
6. `/seasons/s08/e01/s08e01c01/` — *The Night Office*, the Church Space thread's first chapter

## Page notes

**1. Home.**
- **Now knows:** a station, two clocks forty seconds apart and both right; a chapel where a High Captain and a Cadet sit on the same footing.
- **Met unexplained:** the clocks; *Fian Ilchruinne*; the closing fragment *"Fian Ilchruinne read on a Ranger's own time."*
- **Pull:** *Communion*, the only link in the paragraph.
- **Profile check:** the secondary button reads *Newest: Rank and the Chain of Command*, and the Lore tile's text is that page's opening, a paragraph on why ranks sound naval. That is the first thing this edition offers besides the paragraph, and it is off-register for this reader ("too neutral").

**2. The Communion of the Called (lore).**
- **Now knows:** a network of Christian congregations Rangers belong to off duty, with no rank inside it; the Corps leaves it alone because Neutrality binds the Corps, not the person; judgment as the light showing what each has become; forgiveness as release, not erasure.
- **Met unexplained:** the Corps, the Neutrality clause, the Celtic Union, the Cascade, the Fellowship, the Triumvirate, the Monasteries of Mars, the Provost track, the Starwarden, Kieme, the Doctrinal Division, Arilon. The *In short* box carries the reader past them.
- **Pull:** *Judgment, Debt and Forgiveness* lands. *Saint Aoife* in *See also*.
- **Also:** the tag row shows raw slugs (`devotional-traditions`, `communion-of-the-called`), and the category *Institutions* appears twice.

**3. Saint Aoife.**
- **Now knows:** a thirteenth-century Irish holy woman, a vision at a thorn well, *shown* held apart from *healed*, and two readings the Union has not chosen between.
- **Met unexplained:** Levrils (glossed in passing), "constraint literacy" and "Champion selection" (not glossed). The fallow-deer paragraph under *Her Century* is a digression this reader would skim.
- **Pull:** *Shown, Not Healed (S07E01C02)*, the chapter where the discipline "gets used".

**4. Shown, Not Healed.**
- **Now knows:** the discipline in action: *"I was shown this. I have not been healed."* The reader is moved, and page 3 prepared them for it.
- **Met unexplained:** Tissadelle, the recursion, the Hollow, Wender, the levril at the edge, "the made Órla". It is Season 7, deep in the spine.
- **Would stop?** No, but they want the beginning.
- **Pull:** back to the home page's *Begin Reading*.

**5. The Reading Plan.**
- **Now knows:** Sen's note, and how the record is arranged.
- **Profile check (the walk's main finding):** on the devotional edition, the plan sends this reader first to the main spine, *Arrival at the Threshold Station*. The edition's own thread, *Church Space*, is listed seventh of eight storylines, near the bottom.
- **Defect:** the Church Space blurb ended with a developer note in the reader's copy: *"see this file's own `tier` field comment above."* Fixed with this log.

**6. The Night Office.**
- **Now knows:** a keeper who hears a hive the way a congregation is one voice; *to attend before acting*. It explains itself without anything before it.
- **Pull:** *Next: Asteria's Night*. The reader is settled. This is the door the edition should open on.

## Verdicts (Benevolent Critic)

1. **Flaw, high: the edition's front door does not lead its reader to its own thread.** *Begin Reading* goes to the Reading Plan, which puts the spine first and Church Space seventh. A contemplative reader who follows the edition's own button reads a station-arrival chapter before any devotional page. **Cheapest additive repair:** on contemplative editions, the Reading Plan names the edition's own thread first ("On this edition, start here: *The Night Office*") above Sen's spine recommendation, which stays as written. That is an engine and copy change, so it is his call.
2. **Flaw, mechanical: a developer note in reader copy.** Fixed: the Church Space thread description in `lib/storyline-threads.js` now ends *"Absent on every edition below that tier."*
3. **Flaw, medium: *Newest* and the Lore tile are off-register here.** Both show the newest lore page across the whole record, today a page on rank and chain of command. **Cheapest repair:** on an edition with its own topics, *Newest* picks the newest page inside them, or the Lore tile keeps its fixed blurb. Passed to the edition-openings review running in parallel, which owns the front page.
4. **Unsupported, low: raw tag slugs on lore and chapter pages.** Site-wide; noted, not acted on.
5. **Features, must not move:** the Communion page's *In short*; *Saint Aoife*'s *shown, not healed*; *Shown, Not Healed* as the discipline's payoff; *The Night Office*'s opening, which needs nothing before it.

The opening paragraph's closing fragment is with the edition-openings review, not repeated here.
