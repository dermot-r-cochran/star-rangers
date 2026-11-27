# Intake: the character pages after Season 15 — 27 November 2026

**The direction.** The follow-up that the E05, E06 and E07 intakes each left open: the character pages, brought up to date once the season had told the founding from outside and the finale had landed. His ruling on Shepherd's status came the same day, in two messages, verbatim: *"Status: Active under a certain date then elsewhere"*, corrected to *"Active until a certain date then elsewhere"*.

**What was read in the record.** The eight chapters of Season 15 in full (S15E01C01 to S15E07C01) and their seven intakes, the E07 intake's page list above all. `CLAUDE.md` on the Archive's voice, on what an Archive page may hold (*only what the record's own institutions could know*), on plural systems, and on `revealed_by` / `revised_by`. `intake-2026-10-14.md` for the member-page rule. `lib/content-schema.js` and `lib/status-key.js` for the status vocabulary. The fourteen pages named in the work list. For the facts Season 15 leans on and the pages did not yet hold: the `canon_facts` of S06E00C01, S07E02C01, S07E04C01, S07E07C01 and S07E07C02.

**The rule the edits follow.** Every sentence added is drawn from a chapter and cites it by link, in the form the pages already use. Nothing is asserted that the chapters leave open. Interior chapters are reported as what the chapters tell, briefly, and the pages point to them and do not retell them. Where a chapter says a thing is in no record (what Wender recognised under the phrasing, what she said to the signals room, how the levril left), the pages leave it out, since the Archive holds only what the record holds. No new image. No lore, glossary or codex page is changed.

## Shepherd's status, as set

`status: "Active — until the Dock Seven file was closed complete, at her own order; elsewhere since"`

- It uses the existing vocabulary. `lib/status-key.js` keys the badge on the head clause before the first em dash, so the key is `active`, the validator accepts it (`npm test`, below), and the badge keeps the Active style and prints the whole string.
- His two words, *until* and *elsewhere*, are kept.
- The record numbers no year for the terminus (choice 2 of the completion plan), so the "certain date" is the closure itself, in Wender's own words for it: *at her own order, file closed complete* (S15E05C01).
- *Elsewhere* is his word. The page says under it only what the notice says: an order, a classification and a cause, and no condition and no position (S15E06C01).
- No engine change.

## What changed, page by page

Each line gives the change and its source chapter.

**Tissadelle Shepherd** (`src/characters/tissadelle-shepherd.md`)

- `status`, as above. Tag `season-15` added.
- New section *The File Closed*: the standing order's third clause (S07E07C02); the final phrasing, its three parts, the founding profile and Wender's closing sentence (S15E05C01); the notice, which gives no condition and no position, and why the status reads as it does (S15E06C01).
- New subsection *The mornings before it*: the edge of the clearing, the greeting and the morning's entry under a blank heading (S15E03C01); neither able to tell whether the other had the greeting (S15E04C01); the book read, and the smoothed leaves never asked about (S15E03C01, S15E05C01); the arithmetic found finished, the completion chosen, the leave-takings marked and not transcribed, the house passed to Tobble, the last words marked and not quoted (S15E05C01); Tobble's account of her by what she declined, with the hair tied back (S15E07C01).
- *The inner world*: one paragraph. That world did not come across with the hill (S15E03C01); the titles ran the other way and *Empress* was the first rung; the top office's name is declined; she gave no reason (S15E07C01).
- The Kane paragraph: she asked once and not again; his reading came after the closure, on a sheet signed and not sent (S15E06C01).

**Tobble** (`src/characters/tobble.md`)

- `role` and `description` extended (choice 4). Tag `season-15` added. `system: tissadelle` left (choice 3). `status: Active` left (choice 5).
- Opening paragraph: the house passed to him (S15E05C01).
- New section *The book*: what it is, its heading, *reason not held*, the smoothed leaves and who smoothed them, the answer he had ready, that she never asked (S15E03C01, S15E05C01).
- New section *The watch below the hill*: the stores, the break, the log and its form, giving nothing, the greeting in her voice, nothing sent up and his grounds, Asteria's dissent entered (S15E04C01); the first night after the founding, the look, the answer, *declined*, the four nights, the log still hers (S15E06C02).
- New section *The house, and the founding*: asked, considered declining, decided by the house; the hand and the head; good morning said in full; the day entered in one line and glossed (S15E05C01); the morning's entry taken over, *Seated: none* (S15E06C02); founder without a Council, the edge walked, roles before law, the resemblance filed under structure; the morning at the edge by what he did, the title answered in the world's own grammar, the want named, the day entered unglossed (S15E07C01).
- *What the record does not hold*: one sentence. What the things at the break are, what stood at the edge, and whether it ever leaves.

**Karla Wender** (`src/characters/karla-wender.md`)

- `role` brought up to High Captain (choice 6).
- New section *The Dock Seven File*: the standing order (S07E07C02); the date left blank at each review, the Council's letter, *none is held*, the statement that stands, the citation unsigned (S15E02C01); the watch never handed off, the final phrasing, the cadence as Rook-7 logged it, the file closed by her in four minutes and its last sentence (S15E05C01); the third clause met, the citation neither signed nor withdrawn (S15E06C01); the second signal, the note initialled, the order (S15E07C01).

**Galen Kane** (`src/characters/galen-kane.md`)

- *Shepherd*: two paragraphs. The first notice, the Triumvirate log read from its dissents, the entry without a number, the sheet begun (S06E00C01); the second notice set beside the first, the standing order sent for and read from the end, the three things, a leaving that was both, *It had the three. I looked.*, signed and unsent, no number (S15E06C01). Nothing from S15E07C01.

**Asteria (headmate)** (`src/characters/asteria-headmate.md`)

- *On the watch*: her ground for not carrying it up (S15E04C01); the third night, her judgement of the thing at the end of the range, the leave-taking not asked about, somebody past the wall whom she told nobody of, *the record does not say who was there* (S15E06C02). Nothing from S15E07C01, whose *others* are unnamed.

**Rook-7** (`src/characters/rook-7.md`)

- New section *The Dock Seven Line*: the prediction (S07E02C01) and its result, the weight lowered, the direction entered (S15E02C01); the arrays' column at each change (S15E01C01); the cadence logged under the final phrasing (S15E05C01); the column after the closure, given in full (S15E06C01); the note, quoted whole as the chapter's own `canon_facts` quote it, and brought in person (S15E07C01).

**Sen Lovax** (`src/characters/sen.md`)

- New section *The Dock Seven Binder*: the offer declined (S15E05C01); the signals room at four, the note's three records, *no discrepancy*, the citation marked, no name, *complete* in the index (S15E06C01).

**Cael** (`src/characters/cael.md`): one paragraph under *The verifier*. What Cael verified and did not, the plate, the leg that is not the arrays, the figure not given (S15E06C01).

**Wyn** (`src/characters/wyn.md`): two paragraphs. The cost on the file and the cost on none (S15E06C01); the one time Wyn did not ask for a name (S15E06C01).

**Syra** (`src/characters/syra.md`): new section *The Dock Seven Line*. The line put on the sheet (S07E07C01); the drift-log entry for herself (S07E04C01); *Carried* at each quarter (S15E01C01); on the desk at four and the line not taken, the three grounds ended, wrong about *first*, the line kept by the standing order, the preference left for the quarter (S15E06C01).

**Toval** (`src/characters/toval.md`): new section *The Dock Seven Line*. Turn about (S07E04C01); *use: none shown* (S07E07C01); the night hand, the desk column only, the last instance found by reading back, *none put* (S15E01C01); the entry at 0600, the third record, the use shown once by her test (S15E06C01).

**Emeka Lindahl** (`src/characters/emeka-lindahl.md`): two lines in *Known History*. The first notice sent on (S06E00C01); the closure sent on in the same way, *received as sent* (S15E06C01).

**Órla Shepherd** (`src/characters/orla-shepherd.md`): the page carries the made figure under *As Remembered*, so one paragraph is added there. The table laid round the book (S15E03C01); at the kettle, and memory goes with the house (S15E05C01); the table still laid (S15E06C02); the door that did not open (S15E07C01).

**Asteria Wessex** (`src/characters/asteria-the-sage.md`): checked, not changed. Finding under choice 8.

**No page** for the visitor of S15E06C02 or for what stands at the edge, as E06's choice 10 and the E07 intake rule.

## What was left out, and why

- *Which members crossed with the house, which did not, and how many.* S15E05C01 gives neither names nor number. Shepherd's page already names members on the system's account; nothing here says which of them is on either side.
- *Every count of years.* *Thirty-eight years*, *six years*, the autumns Kane counted and the nights Tobble has the number of are the characters' own or are withheld by the prose. The pages say *a later year, which the record does not number*.
- *The mechanism.* The pages use *founding*, *founder* and *proto*, which the chapters use. Nothing says how.
- *What the things at the break are, what stood at the edge, and whether the signal at the founding site is the same thing.* No chapter joins them. Rook-7's note is given as a presumption, in the words of the chapter's own fact.
- *The dress.* The record declines to describe it.
- *The visitor.* Nothing from the contemplative block. Asteria's page has what the general tier has: somebody seen once, and *the record does not say who was there*. What she says at first light stays hers.
- *What Aoife met.* Untouched.
- *Ballad of the Stars.* Not named as hers. The pages carry Rook-7's log line, *structured, non-informational*, and that no record Wender kept carries a line of it. What Wender recognised is in no record, so it is on no page (choice 9).
- *"Goodnight, Captain"*, the levril's going, Wender's private grounds for keeping the watch, and the one sheet in her drawer. Each is entered in no record or given to nobody.
- *Shepherd's last words.* Her page and Tobble's mark them and send the reader to the chapter.
- *The name of the top office, and Tobble's suspicion of why the titles ran backwards.* The record declines the first and he declined to file the second.
- *What is under the smoothed leaves.* Not in his record.
- *What Asteria said to Shepherd at her leave-taking.* She kept it.
- *Toval's rank in the later year.* The S15 labels give none. His page's *Cadet* is left as it stands.
- *The made Wender* of S15E05C01. Her page does not carry the figure of memory, and one clause does not make a section.
- *Whether the Dock Seven line is ever struck.* Unshown.

## Choices for him

Twelve. Each has a recommendation and its basis. Where a choice is already placed, the other option is a one-line revert.

1. **The wording of Shepherd's status.**
   - (a) *Active — until the Dock Seven file was closed complete, at her own order; elsewhere since*. **Recommended, and placed.** Basis: his two words are kept; the date is the closure, since no year is numbered; the rest is Wender's closing sentence.
   - (b) Shorter: *Active — until the Dock Seven file was closed; elsewhere since*.
2. **Shepherd's `role` and `description`**, which stop at Season 5.
   - (a) Leave both. **Recommended, and left.** Basis: `role` is her rank line and her rank did not change after Line Captain; the status and the new section carry the closure.
   - (b) Add the closure to the description in one clause.
3. **Tobble's `system: tissadelle`.**
   - (a) Leave it. **Recommended, and left.** Basis: the field shelves his page beside the system's on the characters index. No chapter says the system ended or that he left it; S15E05C01 has members who crossed with the house and are in it still; and *Tissadelle* is the name of the whole system, on her page's own account.
   - (b) Remove it, so that he is shelved by kind. This would also move Asteria's page, on the same ground.
4. **Tobble's `role` and `description`.**
   - (a) As placed: the role gains *since the founding, founder of a universe still called proto, with no council seated*, and the description gains one sentence. **Recommended.** Basis: *founder*, *proto* and *Seated: none* are the chapters' words (S15E06C02, S15E07C01).
   - (b) Leave the front matter and let the body carry it.
5. **The status of Tobble and of the member Asteria.** Both are `Active`, and both are in the new universe. The schema glosses *Active* as present in the story's present and available to appear in chapters.
   - (a) Leave both. **Recommended, and left.** Basis: no chapter requires a change, and his ruling was given for her page.
   - (b) Qualify both in the same form, for example *Active — in the universe founded from Dock Seven*.
6. **Wender's `role` line**, which stopped at Season 1.
   - (a) *Chief Pilot, Pilot Department (Season 1) → High Captain (Season 5)*, in the form of Shepherd's. **Recommended, and placed.** Basis: her own page dates High Captain to late spring 2831 (S05E00C02).
   - (b) Revert.
7. **Rook-7's note quoted whole on its page.**
   - (a) As placed, with the sentence that the note states a presumption and the record does not say what the signal is. **Recommended.** Basis: E07's choice 7 was ruled (a) for the `canon_facts`, and the page follows the fact word for word.
   - (b) Say only that a note was initialled with no action within station scope.
8. **Asteria Wessex and the member Asteria.** The check found the disambiguation one-way. The member's page says she is not Asteria Wessex and links her. The page of Asteria Wessex does not mention the member, and its aliases include the bare *Asteria*, which is now also the label of a point of view in two Season 15 chapters.
   - (a) Add one line to the page of Asteria Wessex, in the form Galen Kane's page uses for Catherine Galen. **Recommended, not done.** Proposed: *Distinct from [Asteria](/star-rangers/characters/asteria-headmate/), a member of Tissadelle Shepherd's plural system, who has this woman's face as a younger woman, from Karla Wender's telling. The two never met, and the member has never answered to this surname ([None Admitted (S15E04C01)](/star-rangers/seasons/s15/e04/s15e04c01/)).* Basis: a reader arriving at either page should be able to reach the other.
   - (b) Leave her page alone.
9. **What the pages say of the cadence.**
   - (a) As placed: Rook-7's log line, and that no record Wender kept carries a line of it. **Recommended.** Basis: `CLAUDE.md` holds an Archive page to what the record's institutions could know, and the chapter says she put it in none.
   - (b) Add the `canon_facts` wording to Wender's page: *the slow companion piece to the song the cohorts sing at muster, neither confirmed nor denied as Shepherd's in public*. Shepherd's page links *Ballad of the Stars* under nearly the same words, so this would name it in all but title.
10. **The `season-15` tag.** Added to Shepherd's and Tobble's pages, as the E07 intake lists. The member Asteria's already had it.
    - (a) Leave the others. **Recommended.** Basis: season tags on these pages have never tracked every season a character appears in, and nothing in `lib/` reads this one.
    - (b) Tag Wender, Rook-7, Sen, Syra, Toval and Kane as well.
11. **A seam the pages step round.** S07E07C01's `canon_facts` have Toval ask Rook-7 where its arrays came from, *the first time Rook-7 had been asked*. S15E02C01 has, of who made the arrays, *Count of times it has been put to this analyst by anyone: zero*.
    - (a) Leave both, read as two questions: where they came from, and who made them. **Recommended.** Rook-7's page says only that the Council did not ask and Wender did not put the question, and gives no count.
    - (b) He rules which holds, and one chapter's fact is amended.
12. **The seasons between.** Before this pass the pages of Wender, Syra, Toval, Rook-7, Kane and Lindahl held nothing later than S07E01 (Lindahl's and Kane's, nothing later than Season 5). This pass adds only the five earlier facts Season 15 stands on, each cited (S06E00C01, S07E02C01, S07E04C01, S07E07C01, S07E07C02). Seasons 8 to 14 were not surveyed for it.
    - (a) A separate catch-up pass for those pages, season by season. **Recommended.**
    - (b) Leave them until a chapter needs them.

## `revealed_by` and `revised_by`

The character schema has neither field, so none is declared. No lore, glossary or codex page was revised here, so there is nothing to propose for them either.

## Checks

- `npm test`, run in the worktree against the main clone's `node_modules` through a temporary junction.
- `scripts/extract-characters.js`, the extractor the release runs for the characters-and-relationships artefact.

Results are in the pull request's description.
