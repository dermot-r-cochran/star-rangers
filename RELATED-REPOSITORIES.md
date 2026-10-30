# Related repositories

The map of Dermot Cochran's public repositories and what crosses between
them, kept in one place. Every repository's `CLAUDE.md` carries a short
*Related repositories* section naming only its own neighbours, which is the
part a session there needs and the part that changes when that repository
changes; this file is the whole picture, and the sections point here. It
lives in `star-rangers` because this is the most connected repository in
the account and the one whose About page already describes the family in
public (*The engineering behind the record*).

Added 29 September 2026 at Dermot's direction, after a session working in
the photography repository had to discover a second game that copies its
frames by listing his repositories, because nothing in either repository
named the other. Private repositories are deliberately not listed.

Two rules for reading it. **Related** means something crosses: files,
data, a licence, a rule inherited whole, or a public description one
repository makes of another. A resemblance of subject is listed only where
it is a stated lineage, and is labelled as such. And **a relationship is
stated from the evidence in the repositories**, not from their names: each
line below can be checked against a file it names.

## The record and its boards

- **`dermot-r-cochran/star-rangers`** — *Fian Ilchruinne*, the multi-viewpoint
  novel and its Eleventy engine, deployed to several domains from one branch.
- **`Star-Rangers/sciencefiction-site-comments`** — the GitHub Discussions
  that giscus maps every general-tier page's comment thread to. It is the
  `default` profile in `src/_data/giscus.js`, the shared pool for every
  domain's build since 2026-09-04. Its repository id and four category ids
  are hardcoded there, so the four mapped categories (Characters, Lore &
  Worldbuilding, Episodes Discussion, Journal) are never renamed or
  recreated: doing so would orphan every discussion. No code; the copy of
  `fetch-giscus-ids.js` in its `scripts/` cannot run there and is not
  authoritative.
- **`Star-Rangers/churchspace-site-comments`** — the Communion's board: the
  `church-space` profile, reached through the thread of that name in
  `lib/storyline-threads.js` on any domain that renders it. Same rules, same
  ids, same stray script.

## The photographs and their readers

- **`dermot-r-cochran/dermot-cochran-photography`** — the portfolio at
  dermotcochran.com. Four repositories read from it and none writes to it.
- **`star-rangers`** shares four byte-identical deploy scripts with it
  (`deploy-lib.sh`, `mail-lib.sh`, `ensure-node.sh`, `cpanel-autopull.sh`;
  CI in both repositories diffs them against the other's `main`), and
  `scripts/build-photo-catalogue.js` builds `story-bible/own-photography.json`
  from a sibling checkout so the image pipeline offers Dermot's own frames
  before generating one. The About page links dermotcochran.com and says
  nothing made for this site goes there.
- **`dermot-r-cochran/photo-safari-tutorial-game`** — *Photo Safari*. Its
  `images/` holds this portfolio's frames at site size (26 at the time of
  writing) under the portfolio's CC BY-NC-ND terms, shown after a stop's
  verdict as the frame the lesson was learned on. Its camera model's
  thresholds are restated from the portfolio's `FIELD-NOTES.md`, `STYLE.md`
  and `CLAUDE.md`, and change only when a field note changes.
- **`dermot-r-cochran/photo-safari-range`** — *Photo Safari Range*, the
  tutorial's sibling arcade. Same arrangement: 57 frames at the time of
  writing, shown beside the player's plate as a comparison, thresholds from
  the same field notes.
- **`dermot-r-cochran/applied-statistics-for-AI-engineers`** — its two real
  datasets come from the portfolio. Reference Set 2 is real frames with real
  EXIF and a real kept-or-not ground truth; Reference Set 3 is the
  photographer's subject tags on 179 photographs crossed with two crude rules
  over the alt text, rebuilt by `tools/build-reference-set-3.js` from a
  sibling checkout. The alt text itself never ships, because the pages are
  CC BY-NC-ND and that repository is CC BY 4.0. Building it is how three
  photo pages carrying a UTF-8 byte order mark were found, which is now a
  validator failure in the portfolio.

A frame copied into a game or a dataset stays as it was until someone copies
it again: the portfolio's pull requests say so when a frame another
repository carries is unlisted or re-edited.

## One file in a browser

Four repositories are single `index.html` pages with the same prime
directive: everything a reader can meet lives in data structures at the top
of the script, and the engine below never needs editing to add content. No
dependencies, no build, no network, no framework; one reviewable file; never
rewritten programmatically; a `tools/check.js` or `tools/validate.py` that
CI runs and installs nothing; a `pages.yml` that serves the file from
`main`; engine MIT and content CC BY 4.0.

- **`dermot-r-cochran/four-islands-quest`** — where the rules were written,
  as the quest engine's *prime directive*, with the reasons. The other three
  say they inherit them whole.
- **`photo-safari-tutorial-game`**, **`photo-safari-range`** and
  **`applied-statistics-for-AI-engineers`** — inheritors. The range's README
  names the tutorial and the quest as the author's other one-file
  repositories.
- **`four-islands-quest` and `star-rangers` are separate worlds and never
  cross** (Dermot's ruling, 2026-09-06, restated in `story-bible/intake-2026-09-19.md`):
  the Kingdom of the Four Sounds is not the Kingdom of the Four Islands, the
  quest's mainland is unnamed, and the licences differ (CC BY 4.0 against
  CC BY-NC-ND 4.0), so a join would put one record's facts under the other's
  terms. What the quest did take is a word: its register is the young-adult
  rung of this record's reading-tier ladder (his placement, 2026-09-22), and
  its `CLAUDE.md` says why the phrasing changed.

## The engineering behind the record

Three engineering repositories are named on this site's About page as
lineage: they ask in code the questions the story asks in fiction, and the
codex entry *Three Disciplines of the Record* mirrors them in-world
(deliberately, and invisibly to the reader).

- **`dermot-r-cochran/swarm`** — EPISTEME, an epistemic architecture where
  beliefs are explicit objects with confidence and lifecycle state, evidence
  is validated before it may influence them, and every revision is kept.
  Mirrored by the record's canon statuses, the Codex of sourced accounts and
  the Survey Archive.
- **`dermot-r-cochran/Voting`** — a deterministic, invariant-preserving
  allocation engine in Rust: exact arithmetic, conservation asserted at every
  phase boundary, a loud stop preferred to a silent error. Mirrored by this
  repository's validators, which run on the same creed.
- **`dermot-r-cochran/architecture-definition-model`** — the ADM, a layered
  framework for keeping the architecture of generative-AI systems explicit
  and human-owned. This repository's `CLAUDE.md` is its worked case study
  (`docs/case-studies/star-rangers.md`), and its `TestingStrategy.md` cites
  this repository's `check-internal-links.js` as the in-account precedent
  for a link checker.

A rename, a change of purpose or a retirement in any of the three breaks a
public description on this site's About page and in that case study.

## Where the family is described in public

Two more repositories describe the others to readers, so a rename, a change
of purpose or a retirement elsewhere can make them false (added 30 October
2026). Neither shares code or data with anything it describes.

- **`dermot-r-cochran/dermot-r-cochran`** — the GitHub profile README. It
  names `Voting`, the ADM and `swarm` (as EPISTEME) as where the thesis's
  line continues, and links this site's About page (*The engineering behind
  the record*) and dermotcochran.com. It describes the same three
  repositories the About page does, so a change that breaks one description
  breaks both.
- **`dermot-r-cochran/engineering-intelligence`** — the knowledge-system
  hub, published on GitHub Pages from `docs/`. Its `docs/evidence.md`
  (*Where this is practised*) maps each topic page to the repository that
  practises it, and links nine of the repositories in this map:
  `applied-statistics-for-AI-engineers`, `careful-memory`, `world-model`,
  `shadow-architect`, the ADM, `virtual-anthropology`, `foundation-model`,
  `swarm` and `visual-llm`. Its engineering-intelligence page carries the
  first case note, on the README-proof convention those repositories share.
  Its link checker resolves only relative links, so a renamed repository
  breaks that page silently: a rename is a follow-up there.

## Siblings by convention

The remaining public engineering repositories share no code or data with
each other or with anything above. What they share is the house way of
working, which is why a session in one of them will find the others the
reference for how a thing is done here:

- **`dermot-r-cochran/careful-memory`**, **`dermot-r-cochran/world-model`**,
  **`dermot-r-cochran/foundation-model`**, **`dermot-r-cochran/shadow-architect`**,
  **`dermot-r-cochran/visual-llm`**, with `swarm`, `Voting` and the ADM
  above.
- **`dermot-r-cochran/virtual-anthropology`** — *The Archipelago*, a
  deterministic, event-sourced virtual civilisation of simulated digital
  persons across four law-governed islands, with a research pipeline that
  publishes only what traces to the event log and a GitHub Pages site over
  the published datasets (added 2026-10-01, the day it was attached to a
  session and found nothing naming it). Its committed `exports/` and
  `reports/` are a golden output CI regenerates and diffs, the same idea as
  `Voting`'s `tests/golden/`; its `CLAUDE.md` names `world-model`, `swarm`
  and `careful-memory` as resemblances of discipline and says so.
- **`dermot-r-cochran/hybrid-agent`** — a deliberately small engineering
  agent: a deterministic controller routes the workflow, computes the
  numbers and verifies the result, an LLM is called only for semantic work,
  and nothing is executed without a human (added 30 October 2026, two days
  after it was created). It has no dependencies and no `CLAUDE.md` or
  `TestingStrategy.md` yet, so it does not yet share the conventions below;
  nothing crosses between it and anything above.
- Every one of the others, and `star-rangers` and the portfolio, carries a
  **`TestingStrategy.md`**: what each layer of the suite protects, what
  fails against what warns, and how to extend it, kept apart from the
  repository's editorial rules.
- Six run CI coverage as a **ratchet at the measured baseline**, raised only
  in the change that adds the tests that earn it and never lowered: `swarm`,
  `careful-memory`, `world-model`, `foundation-model`, `shadow-architect`,
  `visual-llm`.
- Five keep **architecture decision records**: `swarm`, `careful-memory`,
  `world-model`, `shadow-architect`, the ADM. `swarm` guards all five of its own
  with a named test, so a breached decision fails CI rather than
  drifting; `shadow-architect` guards four of its five (ADR 003 has no
  guard yet); `world-model`'s tests exercise ADRs 001–004 without naming a
  guard; the ADM's records are the specification's own and no test guards
  them; and `careful-memory` names its guards in its README's safety table.

This section is the one place these lists and counts live. Each
repository's own *Siblings by convention* paragraph points here instead of
restating them (since 30 October 2026, after `careful-memory`, `world-model`,
`foundation-model`, `visual-llm` and the ADM each still said `swarm` guarded
"three of its four" five days after its fifth guard landed). So a change to a
convention, or to how far a repository's tests reach its decisions, is
recorded here, in the same piece of work.

One test cites across two of them (added 30 October 2026):
`careful-memory`'s `tests/test_bayesian_properties.py` and `swarm`'s
`tests/test_properties.py` pin the same two properties of a Beta-mean
confidence (one record's swing is bounded and the result stays in [0, 1];
an update never runs against its evidence). `careful-memory`'s file cites
`swarm`'s ADR-0005 at a fixed commit, and that ADR names `careful-memory`'s
ADR-0001 as the model it followed. No code is shared and neither imports
the other; the licences differ (MIT and EPL-2.0), which is one more reason
the citation stays a citation.

One document crosses between two of them (added 6 October 2026):
`Voting`'s `docs/lot-then-vote.md` and `virtual-anthropology`'s
`the-archipelago/docs/lot-then-vote.md` are the same design note, a chamber
whose candidates are drawn by lot and then elected as normal, written for
the real world in the first and read against the Archipelago's governance in
the second. Neither implements it. A decision changed in one copy is changed
in the other, and each repository's `CLAUDE.md` says so.

And data crosses one way between two others (same day): `swarm`'s
`examples/archipelago_first_fork.py` reads a published export from a
`virtual-anthropology` checkout (`dataset.json`, `governance_events.json`)
and synthesises the simulated citizens' positions with `episteme/population.py`,
the module that implements the design note's AI-mediation section (ADR-0004
there: cited structure, OPINION claims, no beliefs, no generated
interpretation). A test in `swarm` pins the export's shape; nothing is
written back and no code is shared.

Three resemblances that are not relationships: `foundation-model`'s
expertise-weighted voting and the `Voting` crate share a word and nothing
else; `visual-llm` is built for very large photo sets but reads nothing
from the portfolio; and `virtual-anthropology`'s simulated citizens, forks
and continuity claims never cross into this record's digital persons or
plural minds, nor the record into its scenarios — different licences, and
a canon here that changes only by extension.

## Keeping this true

A repository's own section is edited in the same pull request as the change
that alters a relationship, in that repository; this file is updated when the
map itself changes, which is rarer. Counts in it (frames copied, repositories
sharing a convention) are marked *at the time of writing* and are read as
such.
