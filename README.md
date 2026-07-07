# Star Rangers

The stars call us forward with hope: protect what is good, and learn what is true.

*Star Rangers* is an Eleventy-powered interactive science-fantasy novel. It begins with a station clock that has held a false reading for eleven years. From there, the project opens into a contested history of memory, duty, institutions, and the fragile civic lights that survive at the edge of the known world.

## Synopsis

Threshold Station keeps logging the same impossible discrepancy, and the people sent to investigate it do not agree on what the record means. *Star Rangers* follows navigators, wardens, witnesses, analysts, and guardians as they try to keep public order intact while old archives, folded space, and living memory refuse to align.

The story moves across stations, causeways, archives, and boundary zones in the long afterlight of empire. As viewpoints converge, the question sharpens: who gets to name the truth when history itself has started to slip?

## Site sections

- **Seasons & Episodes** (`/seasons/`) — Read the canon in story order, then shift POV within chapters to watch one event survive conflicting witnesses.
- **Characters** (`/characters/`) — Track the people, beings, constructs, and entities carrying the story forward.
- **Timeline** (`/timeline/`) — Follow the confirmed order of events apart from when the narrative chooses to reveal them.
- **Lore** (`/lore/`) — Step outside the story for the cosmology, institutions, and systems that shape the setting.
- **Glossary** (`/glossary/`) — Fix the meaning of in-universe terms, titles, and concepts when language itself is contested.
- **Codex** (`/codex/`) — Read the primary sources: logs, reports, directives, and records that may clarify the truth or bury it.

## Current story content

- **Season 1**
  - Episode 1
    - `S01E01C01` — *Arrival at the Threshold Station*
    - `S01E01C02` — *The Forty-Second Discrepancy*
  - Episode 2
    - `S01E02C01` — *The Broken Causeway*
- **Season 5**
  - Episode 2
    - `S05E02C01` — *What the Hill Keeps*

## Recent updates

### Release notes

The latest pass strengthens the setting where the public record matters most. Canon now speaks more clearly about teleportation limits, Lagrange fold-points, the Subsea Cable Warden Programme, and the lineage of the Star Rangers Safety Corps. The timeline reaches further back, institutional references are more coherent, and older real-world naming has been replaced with in-universe language that better fits the archive.

### Changelog

#### Lore

- Added lore entries that define teleportation constraints and the story pressures those limits create.
- Expanded fold-space material around Lagrange fold-points and linked it across related FTL articles.
- Added canon for the Subsea Cable Warden Programme.
- Added lore for the Star Rangers Safety Corps and its historical lineage.

#### Timeline

- Extended the timeline with events from before the United Stellar Concord.
- Revised event titles and updated charter references for the Safety Corps and the SSSA.

#### Terminology and continuity

- Renamed references to "UL Standards International" as "United Space Industry Standards" across lore and timeline content.
- Removed direct mentions of UL Solutions by name from lore and timeline entries.

#### Integration

- Merged recent pull-request content updates, including transit-safety and teleportation-limit canon.

## Local development

```bash
npm install
npm run start
```

## Build and validation

```bash
npm run build
npm run test
```

## cPanel deployment config for local clones

The cPanel deployment recipe (`.cpanel.yml`, via `scripts/cpanel-deploy.sh`) can read optional per-clone settings from an untracked `deploy.conf` file in the repo root.

1. In your local clone, copy the tracked template into place: `cp sample-deploy.conf deploy.conf` (the copy is untracked/gitignored, since it's specific to one clone/domain).
2. Edit `deploy.conf` with values for the target cPanel account, optional theme, optional content filtering, and optional deploy-log email:

```bash
CPANEL_USER=sciencef
THEME=default
CHARACTERS=aldera,elvira
TOPICS=boundary,detective-agency
ADMIN_EMAIL=admin@example.com
```

- `CPANEL_USER` controls deployment destination: `/home/<CPANEL_USER>/public_html/`.
- `THEME=default` keeps `src/css/main.css`.
- Any other `THEME` value uses `src/css/theme-<THEME>.css` when that file exists; otherwise deployment falls back to `src/css/main.css`.
- `CHARACTERS` and `TOPICS` are optional, comma-separated, case-insensitive lists that narrow the deployed site to content related to the listed characters and/or topics:
  - `CHARACTERS` matches character page `id`s and chapter POV character `id`s.
  - `TOPICS` matches page `tags` (and `category`, where present), across every content type including character pages.
  - `CHARACTERS` also participates in tag matching, since tags conventionally embed character slugs (e.g. a timeline entry tagged `aldera`).
  - Excluded pages still build at their normal URL as a minimal "not included in this edition" placeholder, instead of being omitted, so links to them never 404.
  - Section index/listing pages (Characters, Lore, Codex, Glossary, Timeline, Seasons/Episodes) always build, just with fewer items listed.
  - Leaving both unset/empty deploys the full, unfiltered site (the default).
- `ADMIN_EMAIL` is optional. If set, an email is sent to it after **every** deployment attempt — success or failure — with a `SUCCESS`/`FAILURE` subject (including the cPanel account and a timestamp) and the full build+deploy log as the body, so failures are visible without having to check cPanel's own UI. Sent via local `mail`(1), falling back to `/usr/sbin/sendmail` if `mail` isn't installed. No default is set in the repo (deliberately, so no real address is hardcoded in this public repo) — each clone that wants notifications sets its own `ADMIN_EMAIL` in its own untracked `deploy.conf`. This is best-effort only: if `ADMIN_EMAIL` is unset, or no mail command is available, or sending itself fails, the deployment's own outcome is unaffected.
- If `deploy.conf` is missing, deployment defaults to `CPANEL_USER=sciencef`, `THEME=default`, no content filtering, and no deploy-log email.

## Creative tooling

- Repository-aligned master prompt: [`prompts/star-rangers-universe-engine.md`](./prompts/star-rangers-universe-engine.md)
