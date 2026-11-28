# Intake: the pages after S13E08 — 28 November 2026

**The direction.** Choice 12 of `intake-2026-11-27-s13e08.md`, which he ruled on 28 November 2026 with all twelve, in his words *"Yes, as recommended"*: one later pull request for the gaps checklist line, a revision of the Kingdom's page, the pages of Wren, Osbern Kell, Oriel Fenwick, Emma la Chapelle and Anne de Courtney, the three chapter images and `open-questions.md`. This is that pull request. S13E08 merged the same day as #2185.

**What was read in the record.** S13E08C01 *As Long as a Name*, S13E08C02 *The Day's Line* and S13E08C03 *As Heard* in full, with their `canon_facts`, and the episode's index. `intake-2026-11-27-s13e08.md` in full, with its list of assertions and *What no assertion says*. Section 7 of `thread-completion-2026-11-27.md`. `intake-2026-11-27-s09e08-pages.md`, as the model for the pass and for this note. `CLAUDE.md` on canon by extension, on what an Archive page may hold and on `revealed_by` / `revised_by`. `lib/content-schema.js` for the two fields and for `CHARACTER_STATUSES`. The Kingdom's lore page and the pages of Wren, Osbern Kell, Oriel Fenwick, Emma la Chapelle, Anne de Courtney and Ernesto Strozzi. `lib/locked-pages.json`: none of the seven is locked.

**The rule the edits follow.** Every sentence added is drawn from a chapter of S13E08 and cites it by link, in the form the page already uses. Almost every new sentence restates a `canon_facts` line; the few that go further are listed under *The four tests*. Three phrases on the Kingdom's page are revised because the crowning made them untrue, and nothing else that stood is altered. No status is changed, no image is added and no page is created. The new prose uses no dashes, in the manner of Season 13's later chapters. Averil is given no pronoun, sex, age or relation in any new sentence.

**What kind of edit each is.** Under the rule of 25 August 2026: the three revised phrases on the Kingdom's page are **clarifications** (each fixes a count or a reference that the record's own chronology has moved), and every other change is an **extension**.

## What changed, page by page

Each line gives the change and the chapter line it rests on.

**The Kingdom of the Five Islands** (`src/lore/planets/kingdom-of-the-five-islands.md`).

- `revised_by: [s13e08c01, s13e08c02, s13e08c03]` is added. The page had neither field.
- *The Count in the Name* gains one paragraph after its first: both counts set down on one day; the chronicle's line, *Averil, who stands under the Grove, of the Four Islands* (S13E08C01, scene 4, and its fourth `canon_facts` line: *"The chronicle counts four."*); the Accounting's line, quoted, *entered after the evening office as any day's is* (S13E08C02, scene 5, and the Abbess in scene 1: *"It is entered after the evening office, Fenwick, like any day's."*); that it names no reciter and no line of the chronicle, and does not say who wrote it (S13E08C02, second `canon_facts` line). Choice 1.
- *The Crown Reigns; the Council Rules*: *Three reigns back* becomes *Three reigns before the one that ended in the survey's third year on Vellamar*, and *has vetoed exactly one in the current reign* becomes *vetoed exactly one in the reign that ended in the survey's third year on Vellamar*. Both rest on S13E08C01's first `canon_facts` line: *"The monarch of the Kingdom of the Five Islands died at the end of the storm season of the survey's third year on Vellamar."* Neither says anything of the new reign. Choice 2.
- *Vellamar and the Royal Gardens*: *three coronations* becomes *four* (S13E08C01: *"the fourth held under it"*), and *the current monarch's own installation address* becomes *the installation address of the monarch crowned at the third*. The quotation stands word for word.
- The same section gains one paragraph after the Grove's:
  - The death, *of age by the harbour's telling* (S13E08C01, scene 1: *"of nothing but age, by the harbour's telling"*), and the fourth coronation in the survey's fourth year.
  - *The monarch crowned at it is Averil, whom a clerk of the court had named to the delegation in its first season as the heir* (S13E08C03, scene 5: *"A clerk had given it to Strozzi in their first season, as the heir's."*).
  - How the chronicle is said at a crowning, the cross-check, the tiers, the stewards and the walks (S13E08C01, scene 1, and its second `canon_facts` line).
  - *A line new since the last crowning is said under the Grove first, alone, by the house in whose time it was given* (S13E08C01, third `canon_facts` line).
  - The court gave the delegation the day and did not ask it to come; the delegation did not ask; no officer under the Grove (S13E08C03, first `canon_facts` line).
  - Links to the three chapters.
- `plain`, `description`, `tags`, the images and every other section are unchanged. *"What the fifth one means, or what it is, the record has not established"* stands, and so do the three readings, *"at least twice in living memory"* and *"The delegation has not seen it."*

**Wren, of Knight Pellam** (`src/characters/wren-pellam.md`). Two paragraphs at the end of *What the Record Holds*.

- Called from Krilzat by the court's letter; the ways for *rather more than half the names*, with the chapter's own gloss of a way (S13E08C01, scenes 1 and 3). The rim, and the chronicle said with the court's reciters and every house's. Every mouth stopping after the ninth door; her line, quoted; no name; the stop *for as long as a name is* (scene 3: *"She let it be as long as a name is."*). The reciters coming in together; her saying the next line at the pace of a line and finishing after them (scene 4). *She did not have the Long Accounting's name for the one standing in the room, and the chronicle has none* (third `canon_facts` line, word for word).
- What she saw of the rim: each house's reciter was once its youngest and was sent to the Castle (second `canon_facts` line). That she meant to ask whether the boat for Casimor had room, unsent (scene 5: *"Nobody had sent her, this time."*).
- `role`, `status`, `description`, `tags`, the image and the other sections are unchanged.

**Osbern Kell** (`src/characters/osbern-kell.md`). Two paragraphs at the end of *What the Record Holds*, and one sentence in *What the Record Does Not Carry*.

- The climb ten days before the crowning, why a crowning's line goes up, that he asked what the court sent him to ask and was answered, and the old monarch's close in another reciter's mouth (S13E08C01, scenes 2 and 4, and the fifth `canon_facts` line).
- His second crowning; the stop, in which none of the nine from the long room made a sound (scene 4: *"There was not a sound from any of them."*); the reciters coming in together with nobody beating time; the one voice at the rim; that he did not go out to the rim afterwards (scene 4).
- *Does Not Carry* gains: *What the court sent him to ask in the survey's fourth year, and what he was answered.* The chapter says neither.
- `role`, `status`, `description` and `tags` are unchanged.

**Oriel Fenwick** (`src/characters/oriel-fenwick.md`). One paragraph at the end of *What the Record Holds*, kept at the page's own distance. Choice 3.

- La Chapelle's note for the day, *a novice at the practice desk* (S13E08C02, scene 2). The two questions on the terrace steps, the hour the day's line is entered, and what the boats said (scene 4). *La Chapelle wrote it down as heard, from a novice. The novice did not give her name* (fourth `canon_facts` line).
- *Whether she will be let near the Accounting, and when* stands in *What the Record Does Not Carry*, untouched.
- `role`, `status`, `description`, `tags` and the image are unchanged.

**Emma la Chapelle** (`src/characters/emma-la-chapelle.md`). Two items at the end of *Known History*.

- The oldest shelf on the day of the crowning, the evening boat before the day's line was entered, and what she had from a novice, written down as heard (S13E08C02, fourth `canon_facts` line).
- The note filed that night: asked for in the third year, on the first line of the log of the delegation's one instrument outside its own walls (S13E08C02, scene 2); written seven times without one handed in, and about half a page (the same scene); no band and no reading; what the instrument had; the four things the delegation has not been told; *the placing could be read only by being told* (S13E08C03, fourth `canon_facts` line).
- `role`, `status`, `description`, `tags`, the image and *Character Notes* are unchanged.

**Anne de Courtney** (`src/characters/anne-de-courtney.md`). Two items at the end of *Known History*.

- Given the day by a clerk a fortnight before and not asked; did not ask; ruled an ordinary day; no officer under the Grove and no instrument pointed at it (S13E08C03, first `canon_facts` line).
- Heard the saying with her back to the window and did not count (scene 1; scene 3: *"Put that I did not count."*). Read the note and did not send it back; the covering line, quoted (scene 5).
- *"has not been inside the Elder Grove"* stands. `role`, `status`, `description`, `tags`, the image and *Character Notes* are unchanged.

**`story-bible/narrative-gaps-checklist.md`.** The Five Islands line under *Thread completion* is ticked, in the shape of the Church Space entry below it, citing the three chapters and #2185.

**`story-bible/open-questions.md`. Not changed.** Choice 12 of the S13E08 intake asked for *the three owed items of section 7* to be marked paid there. They are not lines of that file: they stand in `thread-completion-2026-11-27.md`, section 7, and the checklist tick above pays them in the place the Church Space and Young Star Rangers codas were paid. The one line of `open-questions.md` that is about Season 13 is item 4 of the 23 November list, *"the name Wren climbs for stays unheard; the door stays open, and the instrument stays off both records"*. The episode answers none of the three, so the line is not struck. No heading for this note was added to the index, on the brief for this pass; the S09E08 pass added one, and it is one line if he wants it.

**Images. None made.** Three chapter images are owed, one to each chapter of S13E08, from his own frames or the pipeline (choice 12 of the S13E08 intake). No prompt was written in this pass.

**Checked, not changed:** Ernesto Strozzi (choice 4), Abbess Ilsabet Marrowtide, Bram Tollick, *The Seat*, the thread page, the *Photographic Beings* entry and *What Prayer Is For*.

## What was left out, and why

- *Which record is right.* The page sets the two lines down and says of neither that it is the truer.
- *The fifth island, and the fifth name.* Nothing is added to what the page says of either.
- *The name the Accounting holds for the one in the room.* It is on no page, as it is in no chapter of the coda. Wren's page says only that she did not have it. Oriel's page does not say that she has it.
- *Who stands in the room, and what is in it without a lamp.* The instrument's line for the day is on no page. La Chapelle's item says the note states *what the instrument had* and does not quote it.
- *Who the keeper is, who placed the instrument, who brings the lamp, why that room.* They appear once, on la Chapelle's page, as the list of what the delegation has not been told.
- *The six evenings without a lamp, and the count of two hundred and fourteen.* Left in the chapter. Wren's page does not say what Bram told her.
- *What the Abbey answered Kell.* His page says that he was answered, and lists the answer under what the record does not carry. No third disagreement on succession is asserted or denied, and *"at least twice in living memory"* stands on the Kingdom's page.
- *Anything of Dún Rí.*
- *Anything of the new reign.* No act, word or veto of Averil's is on the page. What the new Crown said from under the trunk was not heard at the rim and is not on any page.
- *The old monarch's name, sex and age.* The chapters give none.
- *The old Crown's close in the chronicle.* The chapter says it was said and does not give it.
- *Whether the delegation's absence was noticed.* De Courtney's evening of not knowing what the clerk's visit meant is hers, and is left in the chapter.
- *Strozzi's break, his five things it might have been, and the two forms of thanks.* Choice 4.
- *The Abbess not crossing.* It is a `canon_facts` line of S13E08C02. Her page was not among the five the ruling named, and the Kingdom's page says only that the Accounting's line was entered as any day's is.
- *Wren's "So that was what a house was kept for"*, Kell's *"he did not suppose he would be able to stop hearing it"* and la Chapelle's *"a good deal of what the write-up had to say"*. Each is one person's reading in her or his own block.
- *The gardener's boy, the old reciter's "Fourth door", Bram at the gate, Oriel's father in his other coat.* Left in the chapters.
- *Oriel's copy of the day's line.* Choice 3.
- *Any age.* Choice 5.

## The four tests

Six sentences go a step past restating a chapter's fact. Each was held to the four tests: derived, adds without moving, closes no shadow and gives no remedy, recognisable as already true.

1. The Kingdom's page says the installation address was that of *the monarch crowned at the third* coronation under the Grove. Derived: the page had three coronations and a current monarch whose installation was one of them; S13E08C01 makes Averil's the fourth, and Kell had said the chronicle there *"once before, at the last crowning"*.
2. The Kingdom's page says *Both counts were set down on one day*. It is the intake's own reading of choice 5, ruled: *"the two counts set down on one day with nobody pressing either"*. The page does not say that nobody pressed, which no chapter states of the day.
3. The Kingdom's page says *whom a clerk of the court had named to the delegation in its first season as the heir*. The chapter has the clerk give the name to Strozzi; *to the delegation* is the same fact at the page's distance.
4. Wren's page glosses a way as *the watch's account of which way each of the Castle's people goes in the long hall, and at what hour*. It is S13E08C01, scene 3, nearly word for word, and the page already has the keeper's son with *its way*.
5. Kell's page says *none of the nine from the court's long room made a sound in it*. The chapter's sentence is his own listening, and the page gives it as what the record holds of the stop.
6. Oriel's page says *The novice did not give her name* on a page that carries her name. The page already holds both: its alias is *the new novice at the practice desk (delegation notes)*.

## Choices for him

Seven. Each has a recommendation and its basis. Where a choice is already placed, the other option is a small change.

1. **The two lines for the day, on the Kingdom's page.**
   - (a) As placed: both quoted in *The Count in the Name*, the chronicle's and the Accounting's, with what the Accounting's line leaves out. **Recommended.** Basis: the thread was ruled complete when the records were *"left side by side"*, the page already sets the two counts side by side, and both lines are `canon_facts`. The page says of neither that it is right.
   - (b) The counts without the lines: *the chronicle's new line counts four and the Accounting's line for the day counts five*.
   - (c) Neither. The page gains the crowning and the name, and the two lines stay in their chapters. Basis for it: in S13E08C03 the delegation holds neither line, and the page is in the Archive's voice.
2. **The three phrases the crowning made untrue.**
   - (a) As placed: each is dated to the reign it describes. *Three reigns before the one that ended in the survey's third year on Vellamar*; *vetoed exactly one in the reign that ended in the survey's third year on Vellamar*; *the installation address of the monarch crowned at the third*. **Recommended.** Basis: it is the wording choice 12 of the S13E08 intake asked for (*"dated to the reign it describes"*), it stays true through any later reign, and it says nothing of the new one.
   - (b) Recount from the new reign: *Four reigns back*, *in the last reign*, *the last monarch's*. Shorter, and out of date again at the next crowning.
   - (c) Leave *Three reigns back* as it stands, and change only the two that name a current monarch or reign.
3. **Oriel's page, and the line she copied that night.**
   - (a) As placed: the page gains only what la Chapelle saw and was told. **Recommended.** Basis: the page's first paragraph says *"Everything else here is what a delegation linguist working three days a week on the Abbeylands could observe of a novice at the next desk, and the Archive keeps it at that distance on purpose."* La Chapelle had left by the evening boat before the line was entered.
   - (b) Add two sentences past that distance: that she was given the day's line to copy that night, the first she had been handed on the day it was made, and that her copy could still be told from the page (S13E08C02, third `canon_facts` line). It would need the page's opening sentence about distance to be loosened. Her open question stays open either way.
4. **Strozzi's page.**
   - (a) Not touched. **Recommended, and left.** Basis: the ruling on choice 12 named five pages, and his was not among them.
   - (b) One item at the end of his *Known History*: *Heard the saying of the chronicle from the working room on the day of the crowning in the survey's fourth year, with no instrument. He heard one break in it, something over twenty beats by his own pulse, and filed it as heard and not read. He read la Chapelle's note that night and found it correct, with nothing in it to put a band on ([*As Heard*, S13E08C03](/star-rangers/seasons/s13/e08/s13e08c03/)).* Basis for it: he is a viewpoint of the chapter, and its second `canon_facts` line is his.
5. **The ages on the pages.** Wren's page says she *is fifteen*, Oriel's that she *is sixteen*, Kell's that he *is seventy-three* and has said the chronicle *for fifty-one years*. Each was given in the survey's third year, and the pages now run into the fourth.
   - (a) Leave all four. **Recommended, and left.** Basis: the S13E08 intake records that nobody's age is stated in the coda, and Kell's *"more than fifty years"* was written to avoid a recount. A new figure would be a fact no chapter gives.
   - (b) Date each to its year: *fifteen when she was sent*, *sixteen when she entered*, *seventy-three in the survey's third year*.
6. **A page for Averil.**
   - (a) None. **Recommended, and none made.** Basis: the record holds a name and one line of the chronicle. The S13E08 ruling gave the monarch no sex, age or relation, and a page would have nothing else to say.
   - (b) A short page, when a later chapter gives the reign something to hold.
7. **The seasons between.** Wren's page stopped at S13E01, Oriel's at S13E02C01 and Kell's at S13E03C01, and the delegation's three pages hold nothing of Season 13 before this pass. Each now runs from where it stopped to the crowning.
   - (a) Leave the gap. **Recommended.** Basis: the ruling asked for *what the chapters carry* of S13E08, and each new paragraph reads without the seasons between: the ways and the instrument are each glossed where they first appear.
   - (b) A later pass over the six pages for S13E03 to E07: the stop taught and the nine who stop late, the six evenings, the three readings, Wren's day beside the Accounting. It would be a larger piece than this one.

No status change is proposed. All five remain *Active*; no chapter requires otherwise. The old monarch has no page.

## `revealed_by` and `revised_by`

The Kingdom's page gains `revised_by: [s13e08c01, s13e08c02, s13e08c03]`, since each chapter carries something the page now holds. It has no `revealed_by` and none is added: which chapter first establishes the Kingdom for the reader is a question for the revelation ledger's own worklist, and was not in this pass. The character schema has neither field (`lib/content-schema.js`), so none is declared on the five pages.

## Noted, not changed

- `narrative-gaps-checklist.md` still carries an unticked line for *The Five Islands* under *Treated, nothing drafted*, and a row in its thread table that gives Season 13 four chapters. Both were stale before the coda and are outside the brief for this pass.
- De Courtney's page says she *"has forwarded no request for expanded access to the court"*, and la Chapelle's note says *"The delegation asked that its instrument be set where the keeper decided, and it was."* Season 13 has carried both since S13E02C02; the new items do not touch either sentence.

## Checks

- `npm test`, run in the worktree against the main clone's `node_modules` through a temporary junction, and the Eleventy build.

Results are in the pull request body.

---

*Cross-reference: `intake-2026-11-27-s13e08.md` (choice 12), `thread-completion-2026-11-27.md` (section 7), `intake-2026-11-27-s09e08-pages.md` (the model).*
