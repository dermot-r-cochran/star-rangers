# Testing Strategy

How this repository is tested, what each layer exists to catch, and how to
extend it. Mechanics live here; the authority rules they serve live in
`CLAUDE.md` ("Authority and review boundary").

## The governing principle

**The gates prove structure, not judgement.** Everything below can show that a
page is well-formed, uniquely identified, fully resolved, and that the engine's
logic behaves as pinned. Nothing in the toolchain can show that a sentence is
*true in this world*, in the house voice, or safe to be bound by later — that
review is Dermot's and is deliberately not automated. The test suite's job is
to make the mechanical failures impossible so the human review is spent only on
the judgement calls.

Two corollaries shape what gets tested first:

- **The tier gate is the highest-stakes logic in the repo.** A regression in
  `lib/content-filter.js` doesn't break a build — it ships a contemplative
  thread's pages (church-space) on every general-tier domain, the canonical
  site included, or silently empties a production edition. That module gets
  the densest regression coverage.
- **Every documented real bug becomes a test.** The layout-vs-inputPath hazard
  and the journal fallthrough were both real incidents; both are now pinned in
  `test/classify-content.test.js` so they cannot recur unnoticed.

## Layer 1 — unit tests (`test/`, `node:test`, no dependencies)

Run all: `node --test test/*.test.js` · one suite: `node --test test/content-filter.test.js`

- **`test/content-filter.test.js`** pins the narrowing/tier-gate truth
  tables as executable statements of the two rules: *ordinary content is
  included unless a filter narrows it out; a tier-gated thread is excluded on
  every build below its tier whatever the filter says, and is ordinary content
  at or above it.* It covers the no-filter build at each tier (selected through
  the real `EDITION` resolution), narrowed builds that do and don't name
  church-space, the proof that naming it no longer opens the gate below its
  tier, season-membership exclusion, the signature-tag tripwire, and the
  `relatedUrls` bio-link walk (run against the real `src/characters` corpus).
- **`test/classify-content.test.js`** pins `classifyContentPath`,
  `isRelatedTopicPageIncluded` and `isContentIncluded`
  (`lib/classify-content.js`, extracted verbatim from `.eleventy.js` on
  2026-08-24 precisely so they could be tested without booting Eleventy),
  including the two regression tests above and the proof that `relatedUrls` is
  not a backdoor around the tier gate.

- **`test/markdown-containers.test.js`** (added 2026-08-27) pins the
  scene/POV rendering, above all the **fence-length rule**: a 5-colon
  `::::: scene` wrapper must not be closed early by a nested 3-colon
  `::: pov` block's closing fence. That behaviour lives in
  markdown-it-container, not in this repo's code, so a dependency bump that
  changed it would silently corrupt scene splitting for every chapter —
  `src/_data/scenePovPages.js` parses the same token stream. Also pinned:
  the emitted `data-scene`/`data-pov`/`aria-label` attributes,
  HTML-escaping of the info strings, standalone pov blocks (the implicit
  single scene), and that an invalid info string renders as plain text.
- **`test/storyline-threads.test.js`** (added 2026-08-27) pins
  `threadForSeason` (every registered season to its thread, the
  `UNSORTED_THREAD` fallback for unclaimed seasons, numeric matching for
  string input) and the registry invariants the tier gate assumes:
  no season claimed by two threads, unique thread ids, no thread carrying the
  retired `private` flag, and every tier-gated thread naming a tier on the
  ladder and a `homeDomain` distinct from the default reference domain.
- **`test/image-size.test.js`** (added 2026-08-27) pins the JPEG/PNG header
  parser's "null rather than guess" contract with hand-built buffers:
  dimensions read from a PNG IHDR and from a JPEG SOF behind a skipped
  APP0 segment, and null for truncated files, malformed segment lengths,
  missing SOF markers, zero dimensions, non-images, unreadable paths —
  plus the by-path memoisation.
- **`test/archive-backlinks.test.js`** (added 2026-10-02) pins `lib/archive-backlinks.js`, the derivation behind the chapter layout's "In the Archive" block: a page is listed for exactly three reasons (a link to the chapter's URL, a link to its `/c/` alias, or a `revealed_by` / `revised_by` naming it), matching ignores the site prefix because the source is scanned rather than the output, and the order is section then title so the block is stable across builds. A regression here would silently drop the record's own commentary from under a chapter, which nothing structural would notice.
- **`test/archive-companions.test.js`** (added 2026-10-05) pins `lib/archive-companions.js`, the derivation behind the chapter layout's "From the Archive" aside: an entry accompanies a chapter for exactly two reasons (its `revealed_by` names the chapter, or the chapter's `related:` names its title), a title resolves glossary-first against the pages this build carries and drops silently when none does, the text shown is the entry's own `short` or `description` with the `plain:` line taking over on the children's tier, and the order is section then title. A regression here would either show a placeholder's entry on a narrowed edition or quietly empty the aside, and neither is a structural failure anything else would catch.
- **`test/related-terms.test.js`** (added 2026-10-04) pins `lib/related-terms.js`,
  the resolver behind the glossary layout's Related Terms list: a `related:`
  term resolves by exact title against the collections this build carries,
  glossary first, then lore, and a miss is **null, never the glossary index**.
  The regression it guards: on a narrowed edition the collections are already
  filtered, so an excluded page's term used to fall back to `/glossary/`, and
  undercover-pets.com's one glossary entry (Smart Pet) linked all five of its
  related terms to an index none of them was on. The layout now renders only
  the terms that resolve and omits the aside when none do.
- **`test/status-key.test.js`** (added 2026-09-06) pins `lib/status-key.js`,
  the class-name key for a character's status badge: the head clause before
  an em dash, colon, semicolon, comma or parenthesis, slugified. It holds the
  invariant that the single-word statuses key exactly as the old lowercase
  did (so no badge rule silently unmatches), that "At large" hyphenates, and
  that a qualified status such as Ilse Korvain's keys as `contained`.
- **`test/character-status.test.js`** (added 2026-09-11) pins `CHARACTER_STATUSES`
  and `characterStatusProblem` in `lib/content-schema.js`: the character
  `status` vocabulary is exactly the five the corpus uses, each label keys to
  its own entry under `statusKey`, a qualified value is accepted on its head
  clause, absence is accepted (the field is optional), and anything outside
  the five is refused with a message naming them. `validate-content.js`
  applies the check to every character page; this pins the rule itself.

The filter tests deliberately use the **real** `lib/storyline-threads.js`
registry, not fixtures: church-space being the only tier-gated thread is itself a
documented decision, and a registry change that breaks these expectations
should be noticed, not absorbed (the registry-invariant suite above makes the
same point structurally).

## Layer 2 — structural gates (`npm test`)

In order after the unit suite:

| Gate | Catches |
| --- | --- |
| `scripts/check-changelog.js` | released sections missing/rewritten (two release records were destroyed this way once), read across `CHANGELOG.md` and its archive in `changelog/` through `lib/changelog-files.js` |
| `scripts/check-changelog-coverage.js` | **warns only, never fails** — content pages the changelog never mentions by path, slug or title. The mirror image of the gate above: that one catches history being destroyed, this one catches history never being written. Deliberately not a gate — see below |
| `scripts/check-changelog-length.js` | **warns only, never fails** — `[Unreleased]` entries longer than about 120 words, each with its opening words and count. Released sections are immutable, so they are never read. See below |
| `scripts/validate-content.js` | front-matter schema violations, id/filename mismatches, duplicate `comment_id`s, the image bookkeeping (missing targets, unreferenced files, byte-identical duplicates, layout-emitted URLs), each edition's hero cast |
| `scripts/check-internal-links.js` | a cross-link to a page renamed or never written — schema and dry run both pass on those; since 2026-10-09 also a `#fragment` that lands on no heading id or literal `id="…"` of the target page, resolved through the build's own markdown renderer |
| `scripts/check-related-terms.js` | a `related:` term that silently falls back to `/glossary/`; warns (without failing) on duplicated page titles |
| `scripts/check-children-glossary.js` | a page a children's-tier edition carries, or that edition's own copy in `lib/editions.js`, linking a glossary entry the edition renders as a placeholder, or one with no `plain:` line; an entry the tier carries without one. Warns on an entry the tier carries that nothing on it links. A carried entry's own onward links are not enforced (one hop from the story, never the closure); their count is printed (since 2026-10-05; the rule is in CLAUDE.md) |
| `scripts/sync-version.js --check` | README/package.json version drift |
| `scripts/sync-story-so-far.js --check` | README's story-so-far table not regenerated at the current version (its stamp names the version it was last written at; counts themselves are refreshed per release, not per chapter, by the `version` hook) |
| `eleventy --dryrun` | template and build errors, without writing `_site/` |

The gates don't subdivide — `validate-content.js` always scans everything. To
iterate on one content file, use `npm run start` and visit the page.

### Why changelog coverage warns instead of failing

Added 2026-09-01, after an audit of all 674 first-parent commits on `main`
found **24 content pages that had shipped without ever being mentioned in the
changelog** — eight glossary entries, eight timeline entries, four codex, three
lore, one journal. `scripts/`, `lib/` and `test/` were fully covered, which
says something about the shape of the failure: engine work is usually the point
of its PR, while a supporting glossary or timeline entry rides along with
whatever the PR was really about, and it is the passenger that gets forgotten.

It could have been a gate, and deliberately isn't. **Whether a change deserves
a changelog line is a judgement**, and the authority boundary in `CLAUDE.md`
keeps judgement out of what a gate may decide — the toolchain can prove a page
is well-formed, not that it is worth a reader's attention. And the obvious gate
— *a PR touching `src/` must touch `CHANGELOG.md`* — is **satisfiable by a junk
line**, which would manufacture the appearance of coverage without the
substance. That is the same failure this project already names in
`check-changelog.js`'s own header: a check that passes for the wrong reason is
worse than no check.

**The condition for keeping it: the count normally reads zero.** The backlog was
filed as a changelog entry *before* the script was wired into `npm test`,
because a warning that never reaches zero is noise people learn to skip past. If
it is ever allowed to sit at a permanent nonzero number, retire it rather than
tolerating it — the same rule `sync-version.js` states about its own anchor.

### Why entry length warns, and only on `[Unreleased]`

Added 2026-10-15. `CLAUDE.md` rules that changelog entries are plain and
complete, not 200-word essays (2026-08-16, amended 2026-08-31), and nothing
measured it: on the day this landed the changelog held 1,162 entries with a
median of 121 words, a 90th percentile of 242 and a longest of 601, and
`CHANGELOG.md` had passed 1 MB. The same day, released sections older than the
newest five moved verbatim into `changelog/` (one file per ten minor versions,
newest first), which fixed the size; this warning is for the cause.

It warns rather than fails for the coverage check's reasons: length is a
judgement, the rule allows a sentence of why, and a word limit as a gate would
be met by cutting words that mattered or splitting one change into two. It
reads only `[Unreleased]`, because released sections are immutable and a
warning about an entry nobody may shorten is noise. The threshold of about 120
words sits near the measured median, so a normal entry passes and the essays
show.

## Layer 3 — CI-only gates (`.github/workflows/ci.yml`)

- **Theme sync and contrast**: `generate-themes` → `git diff --exit-code
  src/css` (a hand-edited `theme-*.css` fails; `main.css` is the source of
  truth) → `check-contrast.js` (WCAG 2.2 AA on the pairs `main.css` actually
  composes; `solarized` exempt, stated in the script). This lives in CI rather
  than `npm test` because it is only correct *after* regeneration, and CI can
  guarantee that ordering where a local convention can't.
- **Shared-scripts identity**: diffs `deploy-lib.sh`, `mail-lib.sh`,
  `ensure-node.sh` and `cpanel-autopull.sh` against
  `dermot-cochran-photography`'s `main`. Pre-existing drift fails; a PR that is
  itself changing a shared script warns only, since the identical edit lands in
  the sibling as its own PR and one of the two has to merge first. (Its first
  run caught real drift: the 15 August gap-alert default had never reached the
  sibling.)
- **ShellCheck** (`--severity=warning`) over all five deploy scripts.

## Deliberately not automated

- Anything requiring judgement about the world: canon consistency, house
  voice, tone. `scripts/list-canon-facts.js` exists as an *informational* aid
  for the spoiler test — never a gate.
- The Windows-only `.ps1` image tools.

## Extending

- **New content-bearing field or page type** → check whether it must
  participate in the `isXIncluded` predicates (`lib/content-filter.js`) and
  `classifyContentPath` (`lib/classify-content.js`), *and add the truth-table
  rows to `test/content-filter.test.js` in the same change* — otherwise it
  silently always/never ships under a narrowed deploy.
- **New checker script** → decide its home by ordering dependencies: no
  prerequisites → `npm test`; depends on another script having run →
  CI, sequenced in one step, per the contrast precedent.
- **A bug found in production or review** → its regression test lands in the
  same PR as the fix.

### README files inside `src/`

Every subdirectory carries a `README.md` for people (added 2026-09-06). They
are not content and not pages: `.eleventyignore` excludes `src/**/README.md`
from rendering, the five passthrough copies in `.eleventy.js` filter the file
out so no domain serves `/css/README.md`, and each walker that treats `.md` as
content (`validate-content.js`, `check-changelog-coverage.js`,
`check-related-terms.js`, `list-canon-facts.js`, `src/_data/latestLore.js`)
skips the name. A new walker over `src/` should do the same, or a README in
`src/characters/` will fail schema validation as a character with no `id`.

## Known open items

- "Commissioned Standing" is a duplicated page title (`src/glossary/` and
  `src/lore/`); `check-related-terms.js` warns on it every run until one page
  is retitled — a content decision, not a tooling one.

## Checker and tool notes moved from CLAUDE.md

Moved verbatim from `CLAUDE.md`'s *Commands* section on 2026-10-20, when that file was slimmed below Claude Code's size limit; `CLAUDE.md` keeps a compact form of each. Dates and counts are as they stood on that day.

The six `.ps1` tools are Windows-only (System.Drawing/GDI+), matching the author's environment; all the `.js` tools run anywhere. The three image-pipeline `.js` tools and the three newer `.ps1` tools arrived together on 2026-08-21, each header marked LOCAL AUTHORING TOOL — none is part of the build, `npm test`, or CI. `make-lore-cards.ps1` carries its own card table inline (nine lore entries lacking an image) and skips files that already exist unless `-Force`, so a re-run can't clobber a card replaced by hand. `make-codex-cover.ps1` also takes **`-Underlay <path>`** (added 2026-08-20), which puts a photograph behind the lettering — centre-cropped to the square, scrimmed heaviest where the type sits — so it composites picture-led cards as well as designed ones. That exists because a generator cannot spell: generate the picture wordless, set the words here. Note the split of card generators: `make-codex-cover.ps1` emits a square 1600×1600 card in one fixed blue palette with no emblem — codex-style — while the landscape 1600×900 ringed-emblem lore cards, whose original recipe is unrecorded, now have their own generator in **`make-emblem-card.ps1`** (added 2026-08-21 as the landscape/emblem mode that `make-lore-cards.ps1`'s header left open). Its device vocabulary is deliberately geometric — rings, spheres, arcs, chevrons, dot fields — because GDI+ primitives can draw those exactly where an image model cannot, and its epithet/qualifier lines are **authored, not derived**: pass them in, don't invent them. (Two non-tools also live in `scripts/`: `alias-notice/`, the templated redirect page `cpanel-deploy.sh` installs on decommissioned alias domains, and `giscus-welcome-posts.md`, authored copy for the comment boards.) Each checker catches a failure mode `npm test` structurally cannot:

- `check-internal-links.js` — front-matter validation and the Eleventy dry run both pass while a cross-link points at a page that was renamed or never written. Scans **`src/` and `lib/`** (`.md`/`.njk`/`.html`/`.js`), because authored copy with links in it is not confined to `src/` — `lib/editions.js` holds the per-domain homepage taglines. Scanning by root rather than by a hand-list of exceptions is deliberate: a list of exceptions goes stale, and the next authored file outside `src/` would silently leave coverage. One consequence: an illustrative URL written in attribute form (`href="…"`) inside a code comment gets checked like a real link, so describe a fake path in prose rather than quoting it. **Fragments are checked too** (since 2026-10-09): every heading gets an id from `markdown-it-anchor` on the shared renderer in `lib/markdown-containers.js` — lowercase, punctuation dropped, whitespace to one hyphen, so *In the Corps: Rare, and Valued* is `#in-the-corps-rare-and-valued` and a repeated heading gets `-1` — and the checker resolves a link's `#fragment`, cross-page or same-page, against the ids the target page exposes through that same renderer plus any literal `id="…"` in its source. Headings carried no id at all before that date, so every fragment link on the site was dead while the check passed.

- `check-contrast.js` — a palette is chosen against the page background, and every colour in it then also lands on `--color-surface-2`, two steps darker, where badges and chapter labels sit. Nothing in the toolchain can see the result and neither can a screenshot, because low-contrast text is perfectly legible to the person who already knows what it says. It took the measurement to find that **undercover-pets.com, the children's domain, had the worst contrast on the site** (accent at 2.32:1 against a 4.5 floor) and that the fellowship palette's hover made a link *harder* to read than it was at rest. Deliberately outside `npm test`: it reads the generated `theme-*.css` files, so it is only correct after `npm run generate-themes`, and a check that fails because you have not run another script is a check people learn to ignore — which is why CI (not `npm test`) runs it, in a step that runs `generate-themes` first and also fails if regeneration changes any `theme-*.css` (the hand-edit drift check). One exemption, stated in the script: `solarized`.

- `check-related-terms.js` — a `related:` term is resolved against page **titles** (`lib/related-terms.js`, behind the `resolvedRelatedTerms` and `glossaryUrl` filters in `.eleventy.js`), and a miss resolves to nothing: since 2026-10-04 the glossary layout renders only the terms that resolve on the build in hand and drops the aside when none do, where before it fell back to `/glossary/` and a stale term rendered a valid link to the wrong place (on undercover-pets.com, whose glossary is the one Smart Pet entry, all five of its related terms linked to an index none of them was on). The resolution runs against the build's own narrowed collections, which is what makes an excluded page's term drop out on a narrowed edition; on the full build a miss means a retitled page, and the stale term now silently disappears from every `related:` list naming it, which schema validation (related terms are free text), the build and the link checker all pass. Matching is exact — case, punctuation and leading articles included — so the script prints near-miss suggestions. It also warns (without failing) on duplicated page titles, where only the first is reachable.

`npm test` opens with a **unit-test suite** (`node --test test/*.test.js`, built-in `node:test`, no new dependencies — added 2026-08-24; extended 2026-08-27 with `test/markdown-containers.test.js` pinning the scene/POV fence-length rule a markdown-it-container bump could silently break, `test/storyline-threads.test.js` pinning `threadForSeason` and the registry invariants the privacy machinery assumes, and `test/image-size.test.js` pinning the header parser's null-rather-than-guess contract): `test/content-filter.test.js` pins `lib/content-filter.js`'s narrowing/private-thread truth tables (the one module where a regression ships content to the wrong readership — church-space, gated to the contemplative tier, appearing on a general-tier domain), and `test/classify-content.test.js` pins `lib/classify-content.js` — `classifyContentPath`, `isRelatedTopicPageIncluded` and `isContentIncluded`, extracted verbatim from `.eleventy.js` on the same date so they could be tested without booting Eleventy — including regression tests for the two documented real bugs (the layout-vs-inputPath hazard and the journal fallthrough). After that come the structural gates (there is no other linter beyond them): `scripts/check-changelog.js`, then **`scripts/check-changelog-coverage.js`** (added 2026-09-01 — the only step in `npm test` that **warns without failing**: it lists content pages whose path, slug or title appears nowhere in `CHANGELOG.md`, after an audit of all 674 first-parent commits found 24 pages that had shipped without ever being written down. It is deliberately not a gate, because whether a change deserves an entry is a judgement rather than a structural fact, and the obvious gate — a PR touching `src/` must touch `CHANGELOG.md` — is satisfiable by a junk line and would manufacture the appearance of coverage. It is useful only while the count normally reads zero, which is why the backlog was filed before it was wired in; if it is ever allowed to sit at a permanent nonzero number, retire it rather than learning to skip past it), then **`scripts/check-changelog-length.js`** (added 2026-10-15, the second step that warns without failing: it lists each `[Unreleased]` entry longer than about 120 words with its opening words and count, the measure behind the plain-and-complete rule under *Content authoring conventions*; released sections are immutable and never read. Both changelog checkers, and the coverage step, read `CHANGELOG.md` and its archive in `changelog/` together through `lib/changelog-files.js`), then `scripts/validate-content.js` (front-matter schema validation across all Markdown content, **plus the image bookkeeping** — a missing `image:` target, an unreferenced file under `src/images/`, a stale `story-bible/images.md` slug, since 2026-08-15 **byte-identical duplicate images**, which fail rather than warn because sharing one picture between two pages takes one file and two references, never two files, and since 2026-08-21 **the URL the layout actually emits**, which is a different question from whether the file exists somewhere: each layout hardcodes its own `/images/<category>/` and appends the front-matter value, so a file one directory out passes the existence check by basename and still 404s on the page — as `drithane.jpg` did for four days; **plus each edition's hero cast**, which is the one check that crosses from content into `lib/editions.js`: a `heroCharacterIds` entry that names no page, names a page with no `image:`, or names a character that edition's own filter excludes silently shrinks or empties the slideshow, and four editions were listing casts they could render none of), then (since 2026-08-24) `scripts/check-internal-links.js` and `scripts/check-related-terms.js` (see their own bullets above), `scripts/sync-version.js --check` (fails if README's "Current version" line disagrees with `package.json`), and an Eleventy dry-run (catches template/build errors without writing `_site/`). CI (`.github/workflows/ci.yml`) runs `npm test` plus, on every PR: the theme-sync-and-contrast step (see check-contrast above), `shellcheck --severity=warning` over all five deploy scripts — `cpanel-deploy.sh`, `deploy-lib.sh`, `mail-lib.sh`, `ensure-node.sh` and `cpanel-autopull.sh` (this line named only two of them until 2026-08-13; the list had grown three times without it) — and a **shared-scripts job** that diffs the four shared deploy scripts against `dermot-cochran-photography`'s `main`: pre-existing drift fails, while a PR that is itself changing a shared script only warns, since the identical edit lands in the sibling as its own PR and one of the two has to merge first. The whole stack — layers, what each gate exists to catch, where each runs (npm test vs CI) and why, and the rules for extending it — is written up in **`TestingStrategy.md`** (added 2026-08-24): mechanics live there; the authority rules the gates serve stay in this file.
