# Whole-story read for loose ends — 26 November 2026

**His words, 26 November 2026:** *"Any loose ends in the story that would distract or confuse a reader?"*, then *"or loose ends that need to be followed up in later episodes?"*, then *"Yes, apply them"*.

Five Fable readers read every chapter on `origin/main` at `a995ba47` (Seasons 0–1, 2–5, 6–10, 11–12, 13–14), including the 79 chapters added on 23 November. They looked for two kinds of loose end:

- **distracting now**: dropped setups, names used before they are introduced, viewpoint characters who vanish, and seams between the new middle episodes and the older ones;
- **owed**: deliberate setups the story has not yet paid.

Kept mysteries and the number arithmetic of the 20 November read were left alone. Opus checked eight findings against the text, and all eight held. Five Fable editors applied the repairs, and Opus reviewed the diff. Paths below are under `src/seasons/`.

## Applied

31 repairs across 41 files. Most are a single clause. Each one is listed with its old and new wording in the PR.

- **S00–S01:**
  - *Maren Krast* by full name.
  - Aldera: Elvira notices she has never asked this cat where it came from (no connection is made). The causeway line reads *listening*.
  - The Section G breach is cross-referenced to Reports 7 and 22, and added as open item 7.
  - The Season 1 index leads with the survey team. The Episode 2 and 3 intros are rewritten.
  - *the Passage* and *the Compact* are glossed.
  - The forty seconds: *with nothing like it* in Thorne's six prior reports.
- **S02–S05:**
  - Tobble glossed at first appearance (S02E02C01, S03E01C05).
  - Lucene-9000 as *the bureau's other intelligence*.
  - Class III glossed, and Barsik's unsigned sheet lodged.
  - Muffin's application still in the queue (S02E11C01).
  - Kate's fourth, unnamed cat.
  - *the people packing* at the crate.
  - *the name she carried*.
  - The twenty-pace guard and the sergeant on the Hollow climb.
  - Wender at Threshold because the *Fel Trohen* is in for the inspection review.
  - *Catherine Galen* by full name at her first block in E05 and E06.
- **S06–S10:**
  - The S09 and S09E01 indexes say days 9–26 are told in S10E01.
  - The exchanger tag still stands in S07E04.
  - Arashobal holds the papers in S07E02.
  - The approach is still shut in S07E07C02.
  - The keeper wedges the bar in S10E07C02 (prose and one canon_fact).
  - *having said it once the day before* (S10E02).
  - *the shore itself still a night off* (S09E01C05).
  - *was to be shored* (S10E01C07).
- **S11–S12:**
  - *Not murders, just shadows* cut from the S12 index.
  - The junction's stones row, with the second passage not yet started (S12E07C02).
  - *at that range* (S12E02C01).
  - The unkept *when you fit* (S12E01C05).
  - *Aravena, you look* (S11E06C01).
  - *It was in my head when I closed the imager's sheet* (S12E07C02).
  - *the season's tellings* (S12E01C06).
  - The Anstolik glossed (S11E02C01).
- **S13–S14:**
  - Bram's habit grew (S13E05C01).
  - Strozzi's and de Courtney's roles given, and the instruments' look at the air glossed (S13E02C01).
  - *the small one the log calls Four* (S14E02C01).
  - *some tellings ago*, twice (S14E01).

## Open decisions

**The stones on the line (S11–S12).** S11E06C01 has each stone placed *"next to the last, about a hand off"*. S12E01C06 has the newest *"a hand from Stone-First's feet"*, and the older ones in a row. This is the same choice left open on 20 November (`critic-read-2026-11-20-whole-story.md`, *Needs his choice* 1 and 2). **RULED 27 November 2026** (his *"(a) The one moves along"*). The one on the line moves one stone along at every working time and stands at the row's end, so each stone lands beside the last and also a hand from the feet. *"a stone set for you is not yours to move, so it is you that moves"* is added at `s12e01c02.md:42`, and Aravena's *"It stands at the end now"* at `s11e06c01.md:115`. Nothing else changes.

**New facts the repairs introduced.** **RULED 27 November 2026** (his *"Yes, as recommended"*): all eight stand. The only change is to 6, which now reads *"The panel's still tagged against Hale's order, and the call still comes to nights."* Hale's tag (S06E04C01) reads *"Do not service against this order"*, his open order, so the crews' changes under new calls do not break it.

1. **S05E06C02:** the *Fel Trohen* is at Threshold for the inspection review that week.
2. **S07E07C02:** the approach is still shut in Deep Winter 2832, with the Chief Pilot's certification not given.
3. **S10E07C02:** the keeper wedges the bar, carried by a new canon_fact line.
4. **S12E07C02:** the second passage is not yet started late in year three.
5. **S13E02C01:** the instruments found the air *kept*. The fact is from Emma la Chapelle's page; the alternative is to cut the clause.
6. **S07E04C01:** the tag still stands, yet nights go on changing the exchanger, as the chapter's canon_fact requires. That reads as the crews servicing against Hale's tag.
7. **S02E03C03:** the codex working paper is not lodged in early spring 2827, because it postdates that. Only Barsik's one-sheet position is lodged.
8. **S01E03C02:** *with nothing like it* asserts that Thorne's six earlier stations show no such offset.

**Left as kept or unsure, for his call:**

- Smith's first station: five withheld mentions across S09–S10.
- Why the team is on Pelagos Minor, inside Galahad's six-hour viewpoint.
- The Membrane Shadow, named in S12 front matter but withheld in the prose.
- Wender's mentor Asteria sharing a name with a member of Shepherd's system.
- S14E05C01:129 *a season ago*.

## Owed to later episodes

These are signalled in the text and need no repair now; each is for the next episode of its thread to pay.

- **S01:** Rook-7's open items, Syra's *ask who decided which*, the predecessor keeper's books, Galahad's two events, the arrays, Dún Rí.
- **S02–S05:** the Threnody trip's end, the fifteenth door, Sohrel's *Not yet*, Antariksha's referral.
- **S06–S10:**
  - Kane's sheet.
  - What the Council did with Wender's *my position has got worse*.
  - Shepherd's answer, which is the unslotted terminus farewell.
  - Rook-7's unchecked prediction.
  - Church Space's spring letter.
  - Varn's reposting.
  - The Starwarden's *noted*.
- **Below the Roof:** Aravena's question for Four, Ferrant's four pending answers, the smallest's name, the bright one kept for the ones not born yet, the silent hour.
- **Five Islands:** Wren at a crowning, the delegation reading *the placing*, la Chapelle's write-up.
