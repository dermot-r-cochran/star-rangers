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
- **Season 3**
  - Episode 1
    - `S03E01C01` — *Filed Under Noise*
- **Season 5**
  - Episode 2
    - `S05E02C01` — *What the Hill Keeps*

## Release notes

Current version: **1.5.0**. See [`CHANGELOG.md`](./CHANGELOG.md) for the full version history — lore/canon changes, deployment features, and fixes are all tracked there under [Semantic Versioning](https://semver.org/).

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

The cPanel deployment recipe (`.cpanel.yml`, via `scripts/cpanel-deploy.sh`) can read optional per-clone settings from an untracked `deploy.conf` file in the repo root. This repo deploys to several production domains from separate cPanel Git Version Control clones (one clone per domain, all pulling the same branch) — `deploy.conf` is how one clone tells the shared build/deploy script which domain, theme, and content scope it's responsible for.

### Setup

1. In your local clone, copy the tracked template into place: `cp sample-deploy.conf deploy.conf` (the copy is untracked/gitignored, since it's specific to one clone/domain — never commit a real `deploy.conf`).
2. Edit `deploy.conf` with values for that clone. Every key is optional; a commented-out or missing key falls back to its default. Example, showing every key at once:

```bash
CPANEL_USER=sciencef
THEME=default
DOMAIN=sciencefiction.site
CHARACTERS=aldera,elvira
TOPICS=boundary,detective-agency
ADMIN_EMAIL=admin@example.com
CUSTOM_LORE_FILE=/home/sciencef/custom-lore/exclusive-entry.md
CUSTOM_CSS_FILE=/home/sciencef/custom-lore/tweaks.css
```

3. Push to that clone's branch as normal (or trigger cPanel's deploy) — `scripts/cpanel-deploy.sh` sources `deploy.conf` on every run, so no separate reload step is needed.

### Keys

| Key | Default | Purpose |
|---|---|---|
| `CPANEL_USER` | `sciencef` | Deployment destination: `/home/<CPANEL_USER>/public_html/`. |
| `THEME` | `default` | CSS theme — see "Available themes" below. |
| `DOMAIN` | `sciencefiction.site` | Bare domain this clone serves (no scheme, no path, no trailing slash — e.g. `undercover-pets.com`). |
| `CHARACTERS` | *(unset — full site)* | Comma-separated character `id`s that narrow the deployed content. |
| `TOPICS` | *(unset — full site)* | Comma-separated tag/category values that narrow the deployed content. |
| `ADMIN_EMAIL` | `admin@<DOMAIN>` | Address notified after every deploy attempt, success or failure. |
| `CUSTOM_LORE_FILE` | *(unset — no extra page)* | Path to a clone-exclusive lore markdown file. |
| `CUSTOM_CSS_FILE` | *(unset — no extra CSS)* | Path to a clone-exclusive CSS file, appended after the theme. |

If `deploy.conf` is missing entirely, every key falls back to its default above — that's `CPANEL_USER=sciencef`, `THEME=default`, `DOMAIN=sciencefiction.site`, the full unfiltered site, a deploy-log email to `admin@sciencefiction.site`, and no custom lore/CSS.

#### `THEME` and available themes

`THEME=default` keeps `src/css/main.css` as-is. Any other value uses `src/css/theme-<THEME>.css` when that file exists in the repo; otherwise deployment falls back to `src/css/main.css`. Every theme file is generated from `main.css` by `scripts/generate-themes.js` (`npm run generate-themes`), which swaps in only that theme's palette (`:root` custom properties, the five `.pov-block--<character>` colors, and `.character-badge--status-active`) and keeps everything else byte-for-byte in sync with `main.css` — run it after any structural change to `main.css` to re-propagate that change to every theme, and edit that script's `THEMES` registry to add a new theme or adjust an existing palette.

| Theme | Kind | Description |
|---|---|---|
| `fellowship` | domain re-skin | Warm, luminous gold/parchment palette (fellowshipoflight.org). |
| `pets` | domain re-skin | Warm, friendly orange/cream palette (undercover-pets.com). |
| `starquest` | domain re-skin | Deep-space navy with neon teal accents (starquest.site/.online). |
| `light` | standard | Light/day mode — the site's only non-dark option. |
| `high-contrast` | standard | Maximal-contrast black/white/yellow, for low-vision accessibility. |
| `sepia` | standard | Warm parchment/e-reader tone for long reading sessions. |
| `solarized` | standard | Ethan Schoonover's Solarized Dark palette. |

#### `CHARACTERS` and `TOPICS`

Comma-separated, case-insensitive lists that narrow the deployed site to content related to the listed characters and/or topics:

- `CHARACTERS` matches character page `id`s and chapter POV character `id`s.
- `TOPICS` matches page `tags` (and `category`, where present), across every content type including character pages.
- `CHARACTERS` also participates in tag matching, since tags conventionally embed character slugs (e.g. a timeline entry tagged `aldera`).
- `CHARACTERS` also pulls in any lore, timeline, or glossary entry that an included character's own bio links to directly, even if nothing tags it for that character — a character's bio is already the site's record of which background matters for understanding them, so a `CHARACTERS`-filtered deploy carries that background along automatically instead of requiring every relevant entry to be tagged by hand.
- Excluded pages still build at their normal URL as a minimal "not included in this edition" placeholder, instead of being omitted, so links to them never 404.
- Section index/listing pages (Characters, Lore, Codex, Glossary, Timeline, Seasons/Episodes) always build, just with fewer items listed.
- Leaving both unset/empty deploys the full, unfiltered site (the default).

#### `DOMAIN`

The bare domain this clone actually serves. It's exported as `SITE_DOMAIN` for the Eleventy build and consumed by `src/_data/site.js`, which `src/robots.njk` and `src/sitemap.njk` use to render `robots.txt`'s `Sitemap:` line and every `<loc>` in `sitemap.xml` with that clone's own domain — both files are generated at build time rather than copied statically, specifically so each of this repo's several production domains gets a correct, working sitemap reference instead of all of them sharing one hardcoded host. The GitHub Pages build never sets `SITE_DOMAIN`, so it falls back to the GH Pages URL itself.

#### `ADMIN_EMAIL`

An email is sent to it after **every** deployment attempt — success or failure — with a `SUCCESS`/`FAILURE` subject (including the cPanel account and a timestamp) and the full build+deploy log as the body, so failures are visible without having to check cPanel's own UI. Sent via local `mail`(1), falling back to `/usr/sbin/sendmail` if `mail` isn't installed. If not set explicitly, it defaults to `admin@<DOMAIN>` (e.g. `admin@sciencefiction.site`) rather than hardcoding a real address in this public repo. This is best-effort only: if no mail command is available, or sending itself fails, the deployment's own outcome is unaffected.

#### `CUSTOM_LORE_FILE` and `CUSTOM_CSS_FILE`

Let one clone carry a small amount of domain-exclusive content without touching the shared repo:

- `CUSTOM_LORE_FILE` is a path to a clone-local, untracked markdown file with valid lore-entry front matter (`layout: lore-entry.njk`, `title`, `category`, etc. — see any file under `src/lore/` for the shape). If set, `scripts/cpanel-deploy.sh` copies it into `src/lore/custom/` before the build, so it becomes one extra lore page unique to this clone (builds at `/lore/custom/<filename-without-extension>/`), then removes it again once the build has read it — the clone's working tree never carries leftover untracked content between deploys, and nothing is ever committed to the shared repo.
- `CUSTOM_CSS_FILE` is a path to a clone-local, untracked CSS file. If set, its contents are appended to the deployed `css/main.css` after the `THEME` stylesheet, so a clone can tweak a handful of things — a color, a font — without needing a whole new `theme-<name>.css` in the shared repo. Because it loads last, its rules can override the theme's.
- Both fail the deploy loudly (not silently) if set to a path that doesn't exist, so a typo can't ship a build silently missing the content the clone owner expected.

## Creative tooling

- Repository-aligned master prompt: [`prompts/star-rangers-universe-engine.md`](./prompts/star-rangers-universe-engine.md)
