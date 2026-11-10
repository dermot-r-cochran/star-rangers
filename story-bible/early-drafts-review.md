# The early drafts: critical review and reevaluation

Dermot's direction, 10 November 2026, verbatim: *"Every in those early drafts
should be subjected to a critical review and reevaluation"*, and *"Add a desktop
or Fable task as needed"*. It followed the finding that Threshold's forty
seconds, and much else in the 27 May bootstrap, were chosen by the Copilot
coding agent rather than by him (`prose-needs-your-voice.md`, *Details that came
from the tools, not from you*).

## Scope

Every content page first written between 27 May and 2 July 2026, the period
before Claude Code's first commit (3 July). That is 100 pages:

- **61 first written by the Copilot coding agent.** 43 come from the 27 May
  bootstrap and its follow-ups and 18 from 28 May. Two have since been removed.
- **39 first committed by Dermot.** In this period those may be his own words,
  M365 Copilot's or Sudowrite's. The journal entry *Two Copies, Forty Seconds
  Apart* names all three tools, and git cannot tell them apart. Which is which
  is a desktop question (#1748).

Copilot also edited pages in this period that it did not write. The *Copilot
commits* column counts every Copilot commit to a page, so a page committed by
Dermot can still carry Copilot's hand.

## What the review may change

The review reads; it does not license rewriting. Everything here was ratified
as canon on 2026-07-25, and **existing canon changes only by extension,
clarification or genuine dilemma** (`CLAUDE.md`). That ratification is no
shield: Dermot, 10 November 2026, verbatim, *"Even if I did approve an idea
earlier on, it is subject to review if it clashes with everything else"*. A page
that clashes with the rest of the record is a dilemma for him, however it was
approved. **This is development, and it stops page by page as readers arrive:**
a page whose thread draws a reader is locked (`lib/locked-pages.json`, `CLAUDE.md`),
and its row here can then only record *stands* or one of locking's named
fixes. So each page ends with one of these outcomes, recorded in its row:

- **Stands.** It holds against the current record and the house rules, and
  nothing needs doing.
- **Clarify.** A genuine error of arithmetic, chronology or terminology, or a
  line that says less well what is already true. Fixed in place, and said so.
- **Extend.** Something it leaves thin that the record now supports.
- **Dilemma, for Dermot.** It commits the story to something that conflicts
  with a later commitment or with his intent, and both cannot stand. It is put
  to him as choices, never settled here.
- **Prose pass, for Fable.** The facts hold but the writing is below the house
  voice. This is not a rewrite of canon, and every revision is a proposal.

Taking a page off the site is never an outcome of this review. Only Dermot can
decide that.

## What each page is read against

1. **Origin.** The sorting in `prose-needs-your-voice.md`: was this his, or the
   tool's?
2. **The record now.** Does it contradict a later chapter, lore page or ruling?
   Six months of rulings came after these pages.
3. **The standing rules.** Among them: hard science fiction and the one licensed
   deviation; no true villain but the Unfounded, and nobody evil by kind;
   mysteries shadow-shaped, with no repeatable answer; the peaceable present;
   the tone rule and the bar on mockery; the usage rule for *alien*; absolute
   dates in UCSD; no word *religion* in the record's voice; and the canonical
   glossary's terminology.
4. **Load.** How much later work rests on it. A page many others build on is
   read first and changed last.
5. **Quality.** Is it in the house voice, and would a reader trust it?

## Who does what

- **Opus:** characters, lore, glossary, the timeline and every non-narrative
  Codex entry (`CLAUDE.md`, *Which model does which work*). Opus also does the
  canon check and the dilemma framing for every page, the chapters included.
- **Fable:** the narrative prose: the Season 1 chapters below, and any Codex
  entry whose mode is narrative. Fable reads for voice and craft and proposes a
  prose pass where one is earned. Batch the chapters into one request.
- **Dermot:** every dilemma, and the provenance question.
- **Desktop:** recovering the full 27 May brief, and naming which of his 39
  pages were drafted in M365 Copilot or Sudowrite.

## Issues

- #1746, the review itself and the Opus lane.
- #1747, Fable's read of the eight chapters.
- #1748 (`needs-desktop`), the full 27 May brief and the tool behind each of Dermot's 39 pages.

## Order

The bootstrap first, because the most rests on it: the three chapters of
Season 1, Episodes 1 and 2, then Galahad, Syra, Rook-7, Elvira and Aldera, then
the bootstrap's lore and glossary. After that, the rest by load. Record each
outcome in its row as it lands, with the PR that landed it.

## Worklist

### Seasons

| Page | First written | By | Copilot commits | Lane | Status |
|---|---|---|---|---|---|
| `src/seasons/s01/e01/s01e01c01.md` | 2026-05-27 | Copilot | 6 | Fable | pending |
| `src/seasons/s01/e01/s01e01c02.md` | 2026-05-27 | Copilot | 5 | Fable | pending |
| `src/seasons/s01/e02/s01e02c01.md` | 2026-05-27 | Copilot | 4 | Fable | pending |
| `src/seasons/s01/e02/s01e02c02.md` | 2026-05-28 | Copilot | 2 | Fable | pending |
| `src/seasons/s01/e02/s01e02c03.md` | 2026-05-28 | Copilot | 2 | Fable | pending |
| `src/seasons/s01/e02/s01e02c04.md` | 2026-05-28 | Copilot | 3 | Fable | pending |
| `src/seasons/s01/e02/s01e02c05.md` | 2026-05-28 | Copilot | 3 | Fable | pending |
| `src/seasons/s01/e03/s01e03c01.md` | 2026-07-01 | committed by Dermot | 1 | Fable | pending |

### Characters

| Page | First written | By | Copilot commits | Lane | Status |
|---|---|---|---|---|---|
| `src/characters/aldera.md` | 2026-05-27 | Copilot | 2 | Opus | stands (Dermot, 10 Nov: *"The characters are valid"*) |
| `src/characters/dr-iona-vale.md` | 2026-05-28 | Copilot | 2 | Opus | stands (10 Nov): teleportation, her whole premise, is Copilot's (see provenance) but filed and priced in lore |
| `src/characters/elvira.md` | 2026-05-27 | Copilot | 2 | Opus | stands, with the record no longer naming her *the Enchantress* (`intake-2026-11-10.md`, #1750) |
| `src/characters/galahad-thorne.md` | 2026-05-27 | Copilot | 6 | Opus | stands, with *Sir* made part of his name (`intake-2026-11-10.md`, #1750) |
| `src/characters/karla-wender.md` | 2026-05-27 | committed by Dermot | 2 | Opus | pending |
| `src/characters/mira-of-brine.md` | 2026-05-27 | Copilot | 2 | Opus | stands (10 Nov) |
| `src/characters/qiren-tal.md` | 2026-05-27 | Copilot | 2 | Opus | stands (10 Nov) |
| `src/characters/rook-7.md` | 2026-05-27 | Copilot | 2 | Opus | stands (Dermot, 10 Nov: *"The characters are valid"*) |
| `src/characters/sethka-ru.md` | 2026-05-27 | Copilot | 2 | Opus | stands (10 Nov) |
| `src/characters/syra.md` | 2026-05-27 | Copilot | 4 | Opus | stands (Dermot, 10 Nov: *"The characters are valid"*) |
| `src/characters/tissadelle-shepherd.md` | 2026-05-27 | committed by Dermot | 1 | Opus | pending |

### Lore

| Page | First written | By | Copilot commits | Lane | Status |
|---|---|---|---|---|---|
| `src/lore/ai-safety-kernel.md` | 2026-05-28 | committed by Dermot | 1 | Opus | pending |
| `src/lore/ai-usage-credits.md` | 2026-06-30 | committed by Dermot | 1 | Opus | pending |
| `src/lore/boundary-zones.md` | 2026-05-27 | Copilot | 5 | Opus | stands (#1746 review, 10 Nov): the bootstrap's two Concordants meeting became an inter-membrane flexure, and Threshold a shore station, before this review |
| `src/lore/civilisation-comparison.md` | 2026-06-26 | committed by Dermot | 1 | Opus | pending |
| `src/lore/cosmic-cascade.md` | 2026-05-27 | Copilot | 5 | Opus | stands (10 Nov): the bootstrap's denials in the record's voice (contact with the Hyperomnium, *divine punishment* in religions) no longer stand on the page |
| `src/lore/creative-entropy-framework.md` | 2026-06-30 | committed by Dermot | 1 | Opus | pending |
| `src/lore/dryadic-trees.md` | 2026-05-28 | Copilot | 3 | Opus | pending |
| `src/lore/eden-space-habitat.md` | 2026-05-28 | Copilot | 2 | Opus | pending |
| `src/lore/five-layers.md` | 2026-05-27 | Copilot | 4 | Opus | stands (10 Nov): *nothing to contact* and *not a god* no longer stand on the page |
| `src/lore/formation-of-star-rangers.md` | 2026-05-28 | Copilot | 3 | Opus | pending |
| `src/lore/ftl-mechanics.md` | 2026-05-27 | Copilot | 3 | Opus | pending |
| `src/lore/galactic-stardate.md` | 2026-05-28 | Copilot | 3 | Opus | pending |
| `src/lore/glossary/canonical-glossary-and-migration-guide.md` | 2026-06-30 | committed by Dermot | 1 | Opus | pending |
| `src/lore/krenyi.md` | 2026-05-27 | Copilot | 2 | Opus | stands, with a clarify: image alt no longer says *not a grey alien* (usage rule) |
| `src/lore/lagrange-fold-points.md` | 2026-05-29 | committed by Dermot | 1 | Opus | pending |
| `src/lore/levrils.md` | 2026-05-27 | Copilot | 4 | Opus | stands (10 Nov) |
| `src/lore/meta-dimensional-beings.md` | 2026-05-27 | committed by Dermot | 2 | Opus | pending |
| `src/lore/military-space-command.md` | 2026-05-28 | Copilot | 4 | Opus | pending |
| `src/lore/noogenic-seeding-system.md` | 2026-06-30 | committed by Dermot | 1 | Opus | pending |
| `src/lore/physics-comparison.md` | 2026-05-27 | committed by Dermot | 3 | Opus | pending |
| `src/lore/post-eleven-dimensional-manifold.md` | 2026-05-28 | Copilot | 3 | Opus | pending |
| `src/lore/predatory-entities.md` | 2026-05-27 | Copilot | 2 | Opus | stands, with a clarify: *sapient* marked as observed capability, not a someone (the Unfounded rule) |
| `src/lore/quantum-space-harmonics.md` | 2026-05-28 | Copilot | 2 | Opus | pending |
| `src/lore/seed-mind-lifecycle.md` | 2026-06-30 | committed by Dermot | 1 | Opus | pending |
| `src/lore/star-rangers-safety-corps.md` | 2026-05-29 | committed by Dermot | 2 | Opus | pending |
| `src/lore/subsea-cable-drones.md` | 2026-05-29 | committed by Dermot | 1 | Opus | pending |
| `src/lore/teleportation-limitations.md` | 2026-05-28 | Copilot | 3 | Opus | pending |
| `src/lore/the-imperium.md` | 2026-05-28 | Copilot | 2 | Opus | pending |
| `src/lore/united-space-consortium.md` | 2026-05-28 | Copilot | 2 | Opus | pending |
| `src/lore/universal-cosmic-stardate.md` | 2026-05-28 | Copilot | 3 | Opus | pending |
| `src/lore/universe-overlap-and-folding.md` | 2026-05-27 | Copilot | 3 | Opus | pending |
| `src/lore/universes/threnos-omega.md` | 2026-06-30 | committed by Dermot | 1 | Opus | pending |
| `src/lore/worldwrights/competing-designs.md` | 2026-06-30 | committed by Dermot | 1 | Opus | pending |
| `src/lore/year-zero.md` | 2026-05-27 | Copilot | 5 | Opus | settled by Dermot (10 Nov): the bootstrap's *not coincidental* becomes *the record has not established* whether the arrivals are more than coincidence |

### Glossary

| Page | First written | By | Copilot commits | Lane | Status |
|---|---|---|---|---|---|
| `src/glossary/ai-usage-credits-auc.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/boundary-zone.md` | 2026-05-27 | Copilot | 6 | Opus | stands (10 Nov) |
| `src/glossary/celestials.md` | 2026-05-27 | Copilot | 5 | Opus | pending |
| `src/glossary/champions-heroes.md` | 2026-05-27 | Copilot | 5 | Opus | pending |
| `src/glossary/concordant.md` | 2026-05-27 | Copilot | 5 | Opus | stands (10 Nov): governance sense already migrated to Universal Authority |
| `src/glossary/conseleme.md` | 2026-05-27 | committed by Dermot | 4 | Opus | pending |
| `src/glossary/constraint-literacy.md` | 2026-05-27 | Copilot | 5 | Opus | stands (10 Nov) |
| `src/glossary/cosmic-cascade.md` | 2026-05-27 | committed by Dermot | 4 | Opus | pending |
| `src/glossary/court-fae.md` (removed since) | 2026-05-27 | Copilot | 4 | Opus | removed; no review |
| `src/glossary/creative-entropy-index-cei.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/entropy-horizon.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/etheric.md` | 2026-05-27 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/frenar.md` | 2026-05-27 | Copilot | 4 | Opus | pending |
| `src/glossary/ftl-mechanics.md` | 2026-05-27 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/gilded-saints.md` | 2026-05-27 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/high-celestials.md` | 2026-05-27 | Copilot | 4 | Opus | pending |
| `src/glossary/higher-dimensional-folding.md` | 2026-05-27 | Copilot | 4 | Opus | pending |
| `src/glossary/hyperomnium.md` | 2026-05-27 | Copilot | 4 | Opus | pending |
| `src/glossary/inner-world-depth-iwd.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/instrument-drift.md` | 2026-05-27 | Copilot | 4 | Opus | stands (10 Nov) |
| `src/glossary/kieme.md` | 2026-05-27 | committed by Dermot | 4 | Opus | pending |
| `src/glossary/krenyi.md` | 2026-05-27 | Copilot | 4 | Opus | stands (10 Nov) |
| `src/glossary/levril.md` | 2026-05-27 | Copilot | 6 | Opus | stands (10 Nov) |
| `src/glossary/naiad.md` | 2026-05-27 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/noogenic-seed-potential-nsp.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/noogenic-seeding-law.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/nooseed.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/predictive-closure.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/quantum-space-harmonic-wave.md` | 2026-05-27 | Copilot | 5 | Opus | pending |
| `src/glossary/telerarch.md` (removed since) | 2026-05-27 | Copilot | 6 | Opus | removed; no review |
| `src/glossary/universe-fertility-index-ufi.md` | 2026-06-30 | committed by Dermot | 3 | Opus | pending |
| `src/glossary/universe-overlap.md` | 2026-05-27 | Copilot | 5 | Opus | pending |
| `src/glossary/worldwright.md` | 2026-05-27 | committed by Dermot | 4 | Opus | pending |

### Codex

| Page | First written | By | Copilot commits | Lane | Status |
|---|---|---|---|---|---|
| `src/codex/incident-report-001.md` | 2026-05-27 | Copilot | 6 | Opus | stands (10 Nov) |
| `src/codex/maintenance-log-day-49-dock-seven.md` | 2026-07-01 | committed by Dermot | 3 | Opus | pending |
| `src/codex/rook-7-first-week-log.md` | 2026-05-27 | Copilot | 6 | Opus | stands (10 Nov): Rook-7's two-way suspicion is valid for its author |
| `src/codex/survey-corps-protocol.md` | 2026-05-27 | Copilot | 8 | Opus | stands (10 Nov): its *Concordant boundary* is the protocol's own era usage, which `glossary/concordant.md` settles plainly (Threshold is not that case) |

### Timeline

| Page | First written | By | Copilot commits | Lane | Status |
|---|---|---|---|---|---|
| `src/timeline/2340-usc-sssa-established.md` | 2026-05-29 | committed by Dermot | 4 | Opus | pending |
| `src/timeline/2712-eden-fold-route.md` | 2026-05-28 | Copilot | 4 | Opus | stands (10 Nov) |
| `src/timeline/2723-star-rangers-charter.md` | 2026-05-28 | Copilot | 6 | Opus | stands (10 Nov): consistent with *What the Rangers Are Not* |
| `src/timeline/pre-usc-cable-warden-programme.md` | 2026-05-29 | committed by Dermot | 3 | Opus | pending |
| `src/timeline/pre-usc-civilisation-comparison-codified.md` | 2026-06-26 | committed by Dermot | 3 | Opus | pending |
| `src/timeline/pre-usc-ul-standards-international.md` | 2026-05-29 | committed by Dermot | 3 | Opus | pending |
| `src/timeline/year-0-causeway-convergence.md` | 2026-05-27 | Copilot | 6 | Opus | stands (10 Nov) |
| `src/timeline/year-0-survey-team-arrives.md` | 2026-05-27 | Copilot | 6 | Opus | stands (10 Nov): the suppression line is Rook-7's attributed hypothesis, a shadow the record keeps |
| `src/timeline/year-minus-11-first-drift-report.md` | 2026-05-27 | Copilot | 4 | Opus | stands (10 Nov) |
| `src/timeline/year-minus-3-elvira-arrives.md` | 2026-05-27 | Copilot | 4 | Opus | stands (10 Nov) |
