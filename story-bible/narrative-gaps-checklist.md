# Narrative Gaps Checklist

What's actually written versus what the story bible and site copy have committed to. **Re-derived from `src/seasons/` on 2026-10-03**, per this file's own standing instruction not to trust it once stale (the previous derivation, 2026-08-10, said 44 chapters; disk said 69). Open questions this raises are indexed in `open-questions.md`.

**69 chapter files exist across twelve seasons (0 to 11) and seven storyline threads.**

---

## What the re-derivation changed

Against the 2026-08-10 list:

| It said | Disk says |
|---|---|
| 44 chapters, nine seasons, five threads | **69 chapters, twelve seasons, seven threads** |
| **Orbital Five-O** — "a thread on one chapter" | **Three chapters** across Seasons 4 and 10 (*Docked Twice*; *Sent for the Log*, *Sound, as Certified*) |
| **Church Space** — "a thread on one chapter" | **Two** (*The Night Office*; *Asteria's Night*, the corpus's first `tier=contemplative` block) |
| *(Young Star Rangers not listed)* | **Exists** — Season 9, four chapters, its own edition on young.fianilchruinne.com |
| **Below the Roof** — three chapters | **Eight**, across two episodes |
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
| **Orbital Five-O** | 4, 10 | 3 | Two seasons, three chapters; Season 10's cast is the Young Star Rangers' (see `open-questions.md`) |
| **Church Space** | 8 | 2 | The overlay's own thread; tier-gated to the contemplative editions |
| **Young Star Rangers** | 9 | 4 | One episode, complete in itself |
| **Below the Roof** | 11 | 8 | Two episodes; the second season treated (`below-the-roof-second-season-treatment.md`) |

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
