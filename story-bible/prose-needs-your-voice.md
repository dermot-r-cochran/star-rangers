# Pages needing your own prose

> **Voice and style approved 2026-07-25 (Dermot's decision):** no longer a
> voice-review queue. After reading the narrative scenes — particularly the
> multi-POV scene structure, which he singled out for the mystery it
> creates — Dermot approved the **voice and style** of all existing prose
> in the repository, including everything listed below. Nothing here is
> waiting on a tone pass or a rewrite for register.
>
> Three things that approval is *not*:
>
> - ~~**Not a canon ruling.**~~ **Superseded the same day:** Dermot's
>   follow-up — "no reason why all seasons would not now be taken as
>   canon" — ratifies the content too. Every published chapter in every
>   season, including the six Season 6–7 files below, is canon. Nothing in
>   `src/seasons/` is provisional any more.
> - **Not, in itself, the drafting permission.** That came separately and
>   later the same day: Dermot granted **standing permission to write new
>   scenes** without being asked, retiring the old "Dermot writes every
>   narrative first draft" rule. `CLAUDE.md`'s prose-authorship bullet
>   carries the operative version and its constraints (write to the gaps,
>   leave deliberate mysteries and reserved seasons alone, match the
>   scene/POV structure, report what was written). This list stays
>   accurate under that permission — it just stops being a reproach and
>   becomes a map of where his own hand is absent.
> - **Not the end of this list.** It is kept as a **provenance record**: it
>   still answers "which pages has Dermot never personally written a word
>   of," which matters for attribution and for knowing where his own voice
>   is and isn't the base layer.
>
> What it *does* establish: the prose in this repository is the reference
> for the house voice. Draft new work to match it rather than to some
> other register.

Planning note (not built into the site — lives in `story-bible/` like the
other authorial notes). Built 2026-07-23 from git history: every content
file under `src/{seasons,lore,characters,codex,glossary,timeline}/` whose
**entire authorship history has no commit from Dermot Cochran** — i.e.
every word currently on the page was written by an AI tool
(the original Copilot bootstrap, or a later Claude Code session), and you
have never personally written or revised it.

This is the front-to-back list. A shorter, separate list —
`prose-needs-review.md` — covers pages you *did* write, that AI has since
edited and which may need a tone check.

## Resolved: the Season 6–7 chapters

`src/seasons/s06/` and `src/seasons/s07/` contain drafted chapters
(`s06e01c01/c02/c03.md`, `s07e01c01/c02/c03.md`, dated 2026-07-21) — entirely
AI-authored, and written *after* `story-bible/narrative-gaps-checklist.md`
last claimed "zero chapters exist anywhere in `src/seasons/`" for
Season 6–7 (that checklist was corrected on 2026-07-24 and now lists all
six files by name). This flag originally
asked for a direct look, since Season 6–7 is the climax ("The Last Stand")
and these chapters had appeared without one.

**Status 2026-07-25 — closed.** Voice and style approved, and then the
content ratified with every other season: these six chapters are canon.
Their `canon_facts` bind, and the arc they describe — Dock Seven, the
stalled noöseed, the levril at the warm edge, the contested public
record — is the story's, not a proposal.

Ratification made one arithmetic error load-bearing, so it was fixed the
same day: `s06e01c02` twice called Threshold's chronometer discrepancy
"eleven years" old, which is its age in 2826 (S1), not 2831 (S6). Now
sixteen. Expect more of this — five seasons of drafts written while the
back half was provisional will have absorbed other numbers that only
matter once they bind.

## Details that came from the tools, not from you

Some particulars of the canon were chosen by the AI tool that first wrote them
down. You ratified them with everything else on 2026-07-25, so they bind. They
are listed here so that nobody, you included, credits you with choosing them.
Your remark on finding the first one (2026-11-10), verbatim: *"The seems to be
the risk from using either Copilot or Sudowrite initially"*. The Sudowrite half
of that risk is in the journal entry *Two Copies, Forty Seconds Apart*. Those
drafts drifted from the committed files until the repository was made the one
copy that counts. What reached the repository from Sudowrite is recorded only
as far as that entry says. Add a line here when another such detail is found.

- **The forty seconds** (found 2026-11-10). Threshold Station's Dock Seven
  chronometers disagree by *forty seconds*, stable for eleven years and
  returning within *forty-eight hours* of recalibration. The figures first
  appear in commit `a0ca09a4` of 2026-05-27, by the Copilot coding agent, in
  the bootstrap that answered your opening brief (PR #1). They appear there at
  once in `src/glossary/instrument-drift.md`, S01E01C01, S01E01C02 *The
  Forty-Second Discrepancy* and the first drift report in `src/timeline/`. The
  visible part of your brief asks for the cosmology to be revealed through
  "inconsistent constants" and "boundary anomalies" and names no clock and no
  figure. GitHub truncates the brief, so the rest of it cannot be checked.
  **The idea of a small, stable wrongness that survives correction is your
  brief's; the number is most likely the tool's.** You did not remember
  choosing it. Since then it has carried a chapter title, Brother Fintan's
  forty-second vigil (`src/codex/the-office-of-the-fortieth-second.md`), the
  boundary-zones lore, two journal entries and the trailer theme's late note.
  It stands as canon.

### The 27 May bootstrap, sorted (2026-11-10)

At your *"Yes, sort the bootstrap details"*. The bootstrap is commit
`a0ca09a4` (2026-05-27, Copilot coding agent, PR #1). It wrote 31 content
files: 5 characters, 3 chapters, 8 glossary entries, 7 lore pages, 3 codex
entries and 4 timeline events, about 10,000 words. Each particular below was
checked against your brief as PR #1 preserves it. GitHub truncates that copy
partway into its Part 4, the technical brief, so three grades are used. They
record origin only. Everything listed was ratified on 2026-07-25 and stands as
canon, and much of it has since been revised or built on.

**1. In your brief, as far as it is visible.** The Five Layers and their
order. The Cascade's order and its names, Hyperomnium to Levrils. The rule that
foundational layers never speak or act. The no-magic rule, with its four
lawful explanations, *Telerarch-level enforcement misinterpreted as divinity*
among them. Slow revelation through failed rituals, broken tech, inconsistent
constants, prophecy errors and boundary anomalies. Every Krenyi trait the
bootstrap gives them: long life, beauty, the high female birthrate, no
interbreeding, the fear and anger caps, polyamorous and loyal, honest, no small
talk, briefly gullible, pattern drift and withdrawn relevance, resisting
glamour and mythification, unenslavable, and the words *Krenyi*, *Nai* and
*Quiet-Built*. Court-Fae and their food and residue, Gilded Saints, the cute
predators (*tickle bugs*, *lamb-masks*), Egregores and Tulpas, the elven kinds,
naiads, dryads and oreads. Levrils as bounded dragons, meta-dragons and their
coherence costs, and dragons mentoring in *constraint literacy*. The robots and
cyber-enhanced animals of a *"smart pets" detective agency* as anti-beautiful-
monster sensors. One canonical timeline, with misclassification held only as
belief.

**2. Probably in your brief, in the truncated part.** PR #1's summary, written
by the tool, gives a *"Chapter schema (per spec)"* whose example names **Sir
Galahad Thorne (Human)**, **Syra (Krenyi)**, **Threshold Station, Orbital Dock
Seven**, the title *Arrival at the Threshold Station* and *Year 0, Early
Autumn, Dawn*. If *per spec* means what it says, those came from you. It cannot
be checked, because the spec's text is cut.

**3. Not in the visible brief, so most likely the tool's.**

- *People.* Rook-7 by name; Elvira; Aldera, a cyber-enhanced cat; Sub-officer
  Pren Halvard; Station Manager Cors Delveyne. The brief has a robot and smart
  pets but names none of them.
- *Their particulars.* Galahad's twelve years, six prior postings and the
  territorial honour behind *Sir*. Syra's age, about 150. Rook-7's older
  civilian chassis and its unexplained sensor arrays. Elvira at the Marsh
  Causeway outpost for three years, her predecessor gone unexplained, the
  locals' *Enchantress*, no deep fear, and her kind unclassified. Aldera's logs.
- *Places.* The Marsh Causeway and its ruins; Section G of Threshold Station;
  panel 7-C; Station Kelvar.
- *Figures.* The forty seconds, the forty-eight hours and the eleven years
  (above). The crew of forty-seven, ozone 0.3% above standard, chronometers
  C-7A and C-7B, Reports 7, 14 and 22, the 3:7 frequency ratio, the eighteen
  months before a second report, Kelvar's three-minute discrepancy, the
  protocol's version 2.3, and the 500 survey-units.
- *Plot.* Elvira's three failed rituals; a Court-Fae entity feeding on them;
  Aldera holding the answer unasked; the administration's possible suppression
  of data; and the line *"The coincidence of these arrivals is not
  coincidental."*
- *Readings of your cosmology.* A Concordant as a bounded region with its own
  physics, a boundary zone as two Concordants meeting, and instrument drift as
  time running differently on each side. Your brief names *boundary
  interference between Concordants* but not these mechanics. Also the roles
  given to Metawrights, Formwrights, Archewrights and Frenar, which the brief
  names only in order, and *Quiet-Built* read as *self-construction through
  patience and clarity*.

**Two larger ideas from Copilot's runs of 27 and 28 May** (found 2026-11-10, in the review's second batch). Neither is in the visible brief:

- **Faster-than-light travel's mechanics.** Commit `96a43c55` (27 May, *Add core lore expansions for hierarchy and FTL mechanics*) brought the harmonic transit that became the Quantum Space Harmonic Wave and fold transit.
- **Teleportation.** Commit `11eca653` (28 May, *Add teleportation lore, chapters, and character*) brought teleportation, its constraints page and Dr. Iona Vale, whose page rests on it.

Both have since been priced in *What the Record Refuses* (*kept, but priced*) and filed as consequences of the cosmology, under Dermot's 2026-09-10 label *hard science fiction with one licensed deviation*. Neither clashes with the rest of the record, so neither is a dilemma under the earlier-approval rule. They are recorded so that their origin is known.

Not sorted here: Copilot's later runs from 28 May onwards, each with its own
prompt, and PR #2's fifteen-rank hierarchy, whose prompt PR #2 does not
preserve. Dermot ruled the hierarchy valid on 2026-11-10, and the bootstrap's
characters valid, with the two changes recorded in `intake-2026-11-10.md`.

## Season chapters (actual narrative prose — highest priority)

- Season 0 (Founding Era): all of `s00/e01`, `s00/e02`, `s00/e03` (indexes + 6 chapters)
- Season 1: `s01/e00` (4 chapters, Elvira/Aldera prequel), `s01/e01` (2 ch),
  `s01/e02` (5 ch), `s01/e03/s01e03c01.md`
- Season 2: `s02/e01` (index + 3 chapters) — per the gaps checklist this
  season is "deliberately open," so confirm this drafted content is meant
  to exist at all
- Season 3: `s03/e01` (index + 2 chapters)
- Season 5: `s05/e02` (index + 2 chapters)
- Season 6: `s06/e01` (index + 3 chapters) — see flag above
- Season 7: `s07/e01` (index + 3 chapters) — see flag above
- Section indexes: `src/seasons/index.md`, and the `s00`/`s01` season indexes

## Characters (34 files + index)

`agent-barsik`, `bertram-ashcombe`, `brother-daire`, `brother-fintan`,
`bubochka`, `cormac-dubhghlas`, `dagny-voss`, `demelza-trevithick`,
`dorian-calloway`, `fergus-aonghas`, `idris-bryneth`, `ilsabet-marrowtide`,
`ilse-korvain`, `imogen-petrakis`, `isren-farrowkin`, `jeeves`, `kai-larsen`,
`lorien-the-wanderer`, `maren-solveig-krast`, `mira-of-brine`, `nessa`,
`niamh-o-ceallaigh`, `orla-shepherd`, `petra-voss`, `qiren-tal`,
`rhian-gwynne`, `rhiannon-ceridwen`, `rook-7`, `saint-aoife`, `sen`, `sohrel`,
`wendell-albercombe`, `zara-wayland`, plus `characters/index.md`.

Note the overlap with the image audit: `ilse-korvain`, `orla-shepherd`,
`maren-solveig-krast` also had wrong-content portraits flagged there — these
three characters have never had either their prose or their image
touched/chosen by you.

## Lore (36 files + index)

`arilon`, `boundary-zones`, `cerebraun`, `chthonari`, `cnoc-na-mbeach`,
`concordant-membranes`, `dryadic-trees`, `eden-ring-rail`,
`ensemble-multiverse`, `federation-of-sentient-beings`, `five-layers`,
`formation-of-star-rangers`, `frontier-transformation-protocols`,
`galactic-stardate`, `membrane-shadows`, `military-space-command`,
`mnemari`, `monasteries-of-mars`, `planetary-liaisons-and-recruiters`,
`planets/prismere`, `planets/saltmere`, `planets/sentinel`,
`planets/verdance`, `post-eleven-dimensional-manifold`,
`post-teleport-ascension-stress-disorder`, `prismeri`,
`quantum-space-harmonics`, `saint-aoife`, `solar-time-and-local-calendars`,
`star-rangers-command-hierarchy`, `star-rangers-science-corps`,
`teleportation-limitations`, `universal-cosmic-stardate`,
`universes/tir-tairngire`, `year-zero`, plus `lore/index.md`.

Three of these (`five-layers`, `formation-of-star-rangers`,
`frontier-transformation-protocols`) are also the three lore pages with the
scrambled image/alt-text bug from the image audit — worth tackling image and
prose together on those three.

## Glossary (21 terms + index)

`boundary-zone`, `concordant`, `constraint-literacy`, `cyborg`, `frenar`,
`higher-dimensional-folding`, `hyperomnium`, `instrument-drift`,
`intermembrane-bleed`, `krenyi`, `membrane-shadow`, `metafold`,
`noogenic-protouniverse`, `overfold`, `plural-minds`,
`quantum-space-harmonic-wave`, `slipwave`, `smart-pet`, `universe-overlap`,
`virtual-reality`, plus `glossary/index.md`.

## Codex (4 files + index)

`baby-universe-ballad`, `cosmic-limitation-on-evil` (also the stray/broken
image from the audit), `telling-the-bees-at-cnoc-na-mbeach`,
`the-warm-edge-correlation`, plus `codex/index.md`.

## Timeline (7 files + index)

`2712-eden-fold-route`, `2714-patience-first-departs`,
`2719-outer-stations-consolidation-hearing`,
`year-0-causeway-convergence`, `year-minus-2-aethelrock-rotation-dispute`,
`year-minus-3-aldera-reaches-causeway`, plus `timeline/index.md`.
