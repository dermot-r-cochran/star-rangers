# Narrative Gaps Checklist

What's actually written versus what the story bible and site copy have committed to. **Re-derived from `src/seasons/` on 2026-10-03**, per this file's own standing instruction not to trust it once stale (the previous derivation, 2026-08-10, said 44 chapters; disk said 69). Open questions this raises are indexed in `open-questions.md`.

**69 chapter files exist across twelve seasons (0 to 11) and seven storyline threads.**

---

## What the re-derivation changed

Against the 2026-08-10 list:

| It said | Disk says |
|---|---|
| 44 chapters, nine seasons, five threads | **73 chapters, thirteen seasons, seven threads** |
| **Orbital Five-O** — "a thread on one chapter" | **Three chapters** across Seasons 4 and 10 (*Docked Twice*; *Sent for the Log*, *Sound, as Certified*) |
| **Church Space** — "a thread on one chapter" | **Two** (*The Night Office*; *Asteria's Night*, the corpus's first `tier=contemplative` block) |
| *(Young Star Rangers not listed)* | **Exists** — Season 9, four chapters, its own edition on young.fianilchruinne.com |
| **Below the Roof** — three chapters | **Twelve**, across two seasons |
| **Season 3** — two chapters | **Three** (*What Meridian Asked* added) |

**The lesson stands from last time: count threads, not seasons**, and re-derive before trusting any count here.

---

## By thread

Per `lib/storyline-threads.js`. Each is a self-contained narrative with its own cast.

| Thread | Seasons | Chapters | State |
|---|---|---|---|
| **Founding Era** | 0 | 6 | **Complete** — 2712 departure through the 2723 signing |
| **Tissadelle Shepherd's Arc** | 1, 3, 5, 6, 7 | 31 | The spine. Ends written; middle thin (S3 three chapters, S5 no E00) |
| **Undercover Pets** | 2 | 15 | Substantial; eleven episodes |
| **Orbital Five-O** | 4, 10 | 8 | Season 4 one chapter; Season 10 complete at seven (the Deputy's strand five, the crew's two), closed 3 October 2026 |
| **Church Space** | 8 | 2 | The overlay's own thread; tier-gated to the contemplative editions |
| **Young Star Rangers** | 9 | 4 | One episode, complete in itself |
| **Below the Roof** | 11, 12 | 12 | Season 11 two episodes, complete; Season 12 begun 3 October (`below-the-roof-second-season-treatment.md`) |

---

## The actual gaps, in order of how much they cost

### 1. Two threads are still thin

**Orbital Five-O** carries two seasons on three chapters, and **Church Space** carries a deployment (church-space.site and .online, their own comments board) on two. Both are advertised as threads in their own right. Five-O's second season (`five-o-second-season-treatment.md`) and the Chthonari strand are treated and unwritten; the Five-O case mechanism and the three-rung ladder (bureau, Five-O, Rangers) were ruled 8 September and have one chapter pair to show for them.

### 2. Season 3 is three chapters for a whole rank-era

*Filed Under Noise*, *Independent Verification* and *What Meridian Asked* stand in for Principal → Section Lead → Chief Ranger.

- [ ] The Sentinel–Meridian connection: Sohrel has declined to raise it without stating a reason on the record. Either a declination that finally costs her something, or the raising.

### 3. Season 5 opens at E01

- [x] E01C01 — *Refusal to Certify*.
- [x] E02C01–C03 — *What the Hill Keeps*, *A Fraction of a Second*, *What Came Off the Ship* (the Last Stand).
- [ ] **E00** — still absent. The only season that opens without one.

### 4. Standing waypoints, still unpaid

From `story-bible-summary.md`'s "Established future-canon waypoints" — hooks that exist in character entries and have never landed in prose:

- [ ] **Karla Wender: Chief Pilot → High Captain.** Asserted on her page, dramatised nowhere.
- [ ] **The Tissadelle/Wender relationship**, developing "across early seasons" per her character entry; the early seasons are written and it isn't in them.
- [ ] **Founding-era open questions:** fold terminus contact, other fold routes, whether Threshold's drift is Eden-class phenomena.

### 5. Continuity slips, found and fixed 2026-10-03

A cross-check of every chapter's canon facts against the chapter bodies and character pages (`intake-2026-10-03.md`, *Continuity*) found eleven statements that could not both be true. Nine were arithmetic, chronology or naming slips and were fixed as clarifications in the same change; two (the S07E01C01 timestamp against its own day-count, Asteria's age in Season 8) and one reading (Galahad's *three years ago* at the causeway) are put as choices in the intake, with fourteen near-misses beside them, chiefly **where the UCSD year turns**, which no page settles and which decides several of the others.

---

## Strands and arcs

Added 2026-10-03 at Dermot's direction, after an inventory of unfinished
arcs, storylines, threads and strands. The table above counts threads; this
section counts the smaller units the registry has no row for, so the next
re-derivation checks them too. Re-derive against `story-bible/` and
`src/seasons/` before trusting it.

### Convergences fixed and not yet on the page

- [x] **Below the Roof, first season** — written 8 September 2026 as a
  pair, *Theirs to Move* (S11E01C05, the deep side) and *Something Happened*
  (S11E02C03, from above), PR #751: an up-person sets a stone down first at
  the line, Stone-First answers by moving one, neither record carries what
  was said. The 2026-10-03 inventory listed it as unwritten in error;
  corrected the same day.
- [x] **Orbital Five-O, second season** — the convergence drafted 3 October
  2026 as S10E01C03 *What It Hangs From*: the Deputy lays the task force's
  reconciliation beside the crew's log and the certification and names the
  member all three are about, approach mount three, which the instruments
  hang from. What the re-baselined instrument says, and what the Compact
  does with Larsen's letter, are the season's next chapters.

### Treated, drafting begun

- [ ] **Below the Roof, second season** — Season 12, *not murders, just
  shadows*, near the boundary feature
  (`below-the-roof-second-season-treatment.md`). S12E01C01 *No Warmth in
  It*, S12E01C02 *Someone Is Coming*, S12E01C03 *Where Someone Always
  Stands* and S12E01C04 *Out of the Wall* drafted 3 October 2026: Strand
  A's four tellings, the bright one last. Candidate 5 is optional; Strand
  B from the imager fault and the convergence pair remain.

### Treated, nothing drafted

- [ ] **The Five Islands** — *The Infinite Castle and The Timeless Library*: the
  court's oral chronicle against the Abbey's Long Accounting, the survey's
  instrument log off both (`five-islands-treatment.md`). Approved in shape;
  not registered in `lib/storyline-threads.js` (its treatment's Season 12
  went to Below the Roof's second season on 3 October; it takes the next
  free number), no chapter.

### Drafted, approved, unslotted

Finished prose in the story-bible waiting for a slot; each stays out of
`src/` until one is chosen.

- [ ] **The terminus farewell** (`scene-draft-terminus-farewell.md`) — after
  `s07e01c03` by an interval deliberately unfixed. Slotting it unlocks the
  next.
- [ ] ***You're Up Early*** (`scene-draft-youre-up-early.md`) — the shadow at
  the edge of Tobble's universe; sits after the terminus, so waits on it.
- [ ] **Elvira's dream** (`scene-draft-elviras-dream.md`) — at the causeway,
  after Aldera's arrival; slot unfixed, five readings flagged.
- [ ] ***One Warmth in the Room*** (`scene-draft-one-warmth-in-the-room.md`) —
  Suvra Kel and Sen; after Suvra Kel's entry into service.
- [ ] **The Tír na nÓg expulsion parting**
  (`scene-draft-expulsion-parting.md`) — timing deliberately unfixed.

### Character arcs with promised beats

- [ ] **Karla Wender, Chief Pilot → High Captain** — on her page, dramatised
  nowhere (also under *Standing waypoints* above).
- [ ] **Wender's mentorship of Shepherd** — placed between Seasons 3 and 5
  since 2026-10-03; no chapter.
- [ ] **Tissadelle at the terminus; Tobble's downgraded inner codex** — the
  register ruled 27 August (fond farewell, almost no grief), the mechanism
  deliberately unwritten until its chapters (`tissadelle-arc-s6-7.md`).
- [ ] **The saga's last four beats** — silent gradual recovery,
  transformation, sacrifice at the terminus, the founding — all after the
  published end (`story-bible-summary.md`, *The shape of the saga*).
- [ ] **Lev Saunders joins the Rangers when older** — ruled 27 September;
  waits on a thread reaching about 2837.
- [ ] **The younger Shepherd as a Five-O guest** (2826) and **Wender** in a
  pre-2810 chapter — licensed 3 September, neither used.
- [ ] **Zoe Smith declining to speak** — three Season 9 chapters running end
  on it; the fifth chapter has to pay it. Season 9 has no mystery of its own
  yet; Tikket and the ringing mount are the candidate, held since
  14 September.
- [ ] **Sohrel and the Sentinel–Meridian connection** — declined without a
  stated reason; either a declination that costs her something, or the
  raising (also under *Season 3* above).

### Worlds from the July intake

- [x] Fliade, Umbral Moon — written.
- [ ] **Kalypsis Dawn** — still live, and known to contradict canon as
  drafted (#472).

---

## Complete, and deliberately so

Recorded here so a later pass doesn't reopen them.

- **Founding Era** — fully dramatised, 2712 to 2723. Nothing outstanding.
- **The Last Stand** — written as `s05e02c03`, in Season 5 rather than at the S5/S6 seam. Seen from five viewpoints, **none of which can name what they saw**; the record still fails to close, and nothing here should close it.
- **Seasons 6–7** — ratified canon as of 2026-07-25. Strand A in `s06e01c02`, Strand B in `s06e01c01`/`c03`, the strands meeting in `s07e01c03` — later than the treatment outlined, noted rather than corrected.
- **"Who gets to name the truth" stays live**, not settled: `s07e01c03` holds the Council's citation, the Codex's account and what Wender privately knows permanently unreconciled — true for the reader, true in-world.
- **The arc's cosmological endgame** — the protouniverse's "Saint Aoife" is a Telearch avatar. In `tissadelle-arc-s6-7.md`, spoiler-safe, deliberately not in public lore.
- **The marked absences** — the *Patience First* terminus, the 2732 recovery, the Krenyi origin, what Aoife met, the shadow at the edge, Threshold's report-numbering base. Gaps in the record by the record's own doctrine; never gaps in the work.

---

*Cross-reference: `story-bible-summary.md` (Narrative Structure, per-season breakdowns), `tissadelle-arc-s6-7.md` (full S6–7 treatment), and `lib/storyline-threads.js` (the thread definitions this list is derived from).*
