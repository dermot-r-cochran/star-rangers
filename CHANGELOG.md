# Changelog

All notable changes to this project are documented in this file.

The format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and version numbers follow [Semantic Versioning](https://semver.org/) — `MAJOR.MINOR.PATCH`, where `MINOR` covers backward-compatible additions (a new lore entry, a new deploy.conf key, a new theme) and `PATCH` covers fixes with no new surface area. Nothing in this project's history so far has required a `MAJOR` bump: every `deploy.conf` key, theme, and build output added has been additive, and every default has stayed backward compatible.

## [Unreleased]

### Added

- `SITE_NAME` and `SITE_TITLE` `deploy.conf` keys, letting a cPanel clone customize the brand name shown in the header/footer and the browser `<title>` tag independently of the shared repo default (`Star Rangers` for both). Wired through `scripts/cpanel-deploy.sh` into `src/_data/site.js`, consumed by `src/_includes/base.njk`.
- **Mnemari** (`src/lore/mnemari.md`), a sapient Federation species native to Ilenne with no natural upper bound on lifespan and no natural decay of episodic memory — balanced by an actuarial profile driven entirely by accident and violence rather than age, a deliberately low birthrate, and **the Setting-Down**, the voluntary retirement custom that gives a species with no natural mortality curve a working substitute for institutional turnover. Mnemari mediators and treaty-witnesses are noted as disproportionately valued in Federation assembly sessions revisiting old, contested compacts, for the same reason the Star Rangers themselves keep running into elsewhere in the setting: what happens to the truth of an event once everyone who could contradict a convenient retelling is gone. Cross-linked into `federation-of-sentient-beings.md`'s member-world roster and reciprocally into `krenyi.md`, `chthonari.md`, and `prismeri.md`.
- **Virtual Reality** (`src/glossary/virtual-reality.md`): mass-market VR entertainment declined well before 2826 UCSD because it reads as low-novelty recombination to the same Creative Entropy Index culture that audits pop-culture artifacts like "Paper Galaxies" — while fold-scaffold visualization remains a valued, unremarkable exception, since it renders a real, otherwise-imperceptible higher-dimensional structure rather than manufacturing one. Cross-linked into `creative-entropy-index-cei.md`'s example and related-terms list.
- **"AI: Present, Never Intrusive"** section added to `src/lore/environmental-technology-design.md`: names 2826 UCSD's ambient AI texture explicitly — Kernel-compliant systems running everywhere, announcing almost none of it — as the lived, day-to-day expression of the AI Safety Kernel's "obedience narrow, protection wide" doctrine.
- **"Bramble and the Backwards Key"** (`src/codex/bramble-and-the-backwards-key.md`): a codex excerpt from the Bramble Storybooks, the Concordant's best-loved Smart Pet children's-book franchise, plus a "Public Reputation" section added to `src/glossary/smart-pet.md` covering the cute/cool/clever cultural image the series cemented — dramatic irony fully intact, since the author has no idea any of it resembles real agency work.
- **Chthonari** (`src/lore/chthonari.md`) and their home, **the Undersong Belt** (`src/lore/undersong-belt.md`): a low-gravity, asteroid-burrowing insectoid Federation species whose vibration-based senses unify their engineering aptitude, abstract mathematics, and music into one structural trait, and who are disproportionately represented in the Star Rangers' Engineering Corps fold-scaffold specialization. Adds "Engineering" to the named specialist corps in `star-rangers-command-hierarchy.md` and cross-links the Undersong Belt into `federation-of-sentient-beings.md`'s member-world roster alongside Aspenar and Prismere.
- `CHARACTERS`-filtered deploys now automatically include any lore, timeline, or glossary entry that an included character's own bio links to directly, on top of the existing tag/category matching (`lib/content-filter.js`'s new `getRelatedContentUrls`). A character's bio is already the record of what background matters for understanding them, so that background no longer needs separate hand-tagging to survive a narrowed deploy.

- **Saltmere** (`src/lore/planets/saltmere.md`), a newly first-contacted planet in the Annwyn System with no landmass at all — a single global ocean settled entirely on engineered floating city-platforms tethered to the seafloor by mooring towers, built to give under storm load rather than hold rigid. Its **aquabots** — Kernel-compliant autonomous underwater maintenance vehicles — are noted as a convergent, not descended, echo of Earth's classified Subsea Cable Warden Programme, with a reciprocal cross-link added to that page.
- **Prismere** (`src/lore/planets/prismere.md`) and its native people, the **Prismeri** (`src/lore/prismeri.md`): a new Federation of Sentient Beings charter world with a bioluminescent silicate-carbon biosphere and a naked-eye fold-corridor phenomenon, the Lattice, tying into existing Lagrange Fold Points and Quantum Space Harmonics canon.
- **Bubochka**, a trainee rabbit in the Undercover Pets Detective Agency, mentored by Agent Barsik at Eden Space Habitat (`src/characters/bubochka.md`).
- **The Orbital Habitats Compact** (`src/lore/orbital-habitats-compact.md`): the civil governance chain for Eden and the other four self-governing orbital habitats around Earth, running parallel to — and never overlapping — the Star Rangers' charter-limited authority. Introduces Superintendent Rasa Oyelaran, Space Commissioner Zara Wayland, Mayor Imogen Petrakis, and Chief Commissioner Dorian Calloway, and gives Governor Petra Voss (previously only referenced from Commander Kai Larsen's page) her own character profile.
- **The Eden Warden** (`src/characters/eden-warden.md`): a per-habitat AI collective, plural in the same sense the [Plural Minds](/star-rangers/glossary/plural-minds/) glossary entry already describes for organic minds — two Kernel-compliant personas, Ward and Custos, sharing one system, reporting jointly to the Mayor and Commissioner, and holding standards authority over mobile AI humanoids (Reeves, Lucene-9000) and welfare responsibility for cyber-enhanced animals, alongside — not through — the Detective Superintendent's operational chain.
- **Smart Pet** (`src/glossary/smart-pet.md`): the formal classification for an animal carrying a certified AI cognitive subsystem — distinct from, and broader than, "cyber-enhanced" — with its own independent, heavily regulated animal-welfare certification track separate from Kernel compliance. Retroactively clarifies that Barsik and Bubochka hold Smart Pet status without being cyber-enhanced, unlike Aldera, who holds both.
- **"Obedience Is Narrow. Protection Is Not."** section added to `src/lore/ai-safety-kernel.md`: names the Kernel's core asymmetry between invariant 3 (obedience limited to lawful, legitimate authority) and invariant 1 (protection owed universally, without the protected party needing standing to claim it) — the doctrinal basis for the Habitat AI Collectives' welfare authority over parties, human or not, with no seat at the table that assigns their own protection.
- **Frontier Transformation Protocols** (`src/lore/frontier-transformation-protocols.md`): the safety doctrine governing when a frontier world may be terraformed at all — guarding against undetected native sapience, boundary-proximate instability (the Eden precedent), and irreversibility — plus the AI Safety Kernel's own structural backstop against a Kernel-compliant system being ordered past it. Documents each major polity's own version (SSDC centralised review, Federation per-world autonomy, Celtic Union's never-yet-met unanimous-consent bar, Cerebraun Hegemony central authorisation), explaining why Kernowek Reach's reclamation, Mars's incomplete terraforming, and Aspenar's domes-over-conversion choice all read the way they already did.
- **"First Breath: A Founding Thanksgiving"** and **"Survey Note: On the Origins of Tír na nÓg's Compatibility"** (`src/codex/`): two codex documents on Tír na nÓg's mysterious origins — the founding cooperative's own devotional thanksgiving text crediting Manannán mac Lir, and a Survey Corps xenobiology review of six competing theories (convergent evolution, precursor engineering, an undetected Concordant mechanism, Levrilic influence/divine providence, a wild fringe theory of an ancient lost inter-planetary fold gate predating Lagrange-point staging, and a more physically grounded theory involving transient natural fold apertures during rare conjunctions of Tír na nÓg's two moons, Donn and Cliona). Levrilic influence/divine providence is the most popular opinion among the public, but explicitly *not* the least credible of the six — that distinction belongs to the fold-gate theory, since it contradicts confirmed fold-shear physics, while the lunar-conjunction theory is consistent with it (per Eden's own confirmed natural fold route) and is the survey note's recommended candidate for future funding. Cross-linked into `tir-na-nog.md`'s anomaly section, `lagrange-fold-points.md`, and `eden-space-habitat.md`.

### Changed

- **Tír na nÓg** (`src/lore/planets/tir-na-nog.md`) is reframed as a standing, unexplained scientific anomaly rather than a comfortable "convergent evolution" story, to establish as firm setting canon that no world or species is ever naturally compatible with Earthlike gravity/atmosphere without engineering — Tír na nÓg remains the sole confirmed exception, now explicitly flagged as one nobody has closed the file on. Cross-linked update in `celtic-union-of-planets.md`. `kingdom-of-the-four-islands.md` gets a small clarifying addition (centuries-old, since-forgotten atmospheric engineering by the lost colony's founders) so it doesn't read as a second, unflagged exception to the same rule.
- `ADMIN_EMAIL` deploy.conf key now defaults to `admin@<DOMAIN>` instead of staying unset, so every cPanel clone gets deploy-log notifications out of the box without needing its own `deploy.conf` entry for it.

## [1.5.0] - 2026-07-09

### Added

- `scripts/generate-themes.js` (`npm run generate-themes`): generates every `src/css/theme-<name>.css` from `main.css` plus a small per-theme palette registry, so a theme can only ever differ from `main.css` in its `:root` custom properties, its five `.pov-block--<character>` colors, and `.character-badge--status-active` — everything else is guaranteed structurally identical to `main.css`.
- Four new standard, non-domain-specific themes: `light` (day mode), `high-contrast` (low-vision accessibility), `sepia` (e-reader tone), `solarized` (Solarized Dark).
- Theme catalog documented in `sample-deploy.conf` and `README.md`.

### Fixed

- The `pets` theme (undercover-pets.com) had drifted significantly out of sync with `main.css`: it was missing link-color styling across nearly every content body (`.chapter-body a`, `.codex-entry__body a`, `.character-body a`, `.glossary-entry__body a`, `.lore-entry__body a`, and `.character-portrait`), meaning most internal links on that production domain rendered in the browser's default blue instead of the theme's own accent color. The `fellowship` and `starquest` themes had smaller drift (missing the 1.2.0 link-color fallback and two newer component rules). All three are now regenerated in sync with `main.css` by `scripts/generate-themes.js`; their palettes are unchanged.

## [1.4.0] - 2026-07-09

### Added

- `CUSTOM_LORE_FILE` deploy.conf key: a clone-local, untracked markdown file with valid lore-entry front matter, copied into `src/lore/custom/` before the build (builds at `/lore/custom/<name>/`) and removed again afterward, so one cPanel clone can carry a domain-exclusive lore page without touching the shared repo.
- `CUSTOM_CSS_FILE` deploy.conf key: a clone-local, untracked CSS file appended after the theme stylesheet, so one clone can override a handful of rules without a whole new `theme-<name>.css`.
- Both fail the deploy loudly if set to a path that doesn't exist.

## [1.3.0] - 2026-07-09

### Added

- `DOMAIN` deploy.conf key, exported as `SITE_DOMAIN` for the Eleventy build.
- `src/_data/site.js`, `src/robots.njk`, `src/sitemap.njk`: `robots.txt` and a real `sitemap.xml` are now rendered at build time from the clone's own domain, instead of `robots.txt` being a static file hardcoded to one production domain.

### Fixed

- `robots.txt`'s `Sitemap:` line pointed at `https://sciencefiction.site/sitemap.xml` on every deploy target, including the other four production domains this repo serves — and no `sitemap.xml` was ever actually generated by any build, so the directive 404'd everywhere, including on sciencefiction.site itself.

## [1.2.0] - 2026-07-09

### Changed

- cPanel deploy (`scripts/cpanel-deploy.sh`) now fails the deployment — and triggers the existing `ADMIN_EMAIL` failure notification — if `.htaccess` or `.well-known/security.txt` are missing from the deployed destination, instead of only checking for `index.html`. cPanel is the only deploy target that reads `.htaccess` at all (GitHub Pages ignores it), so a silent regression there would previously have shipped with none of its security headers and still reported success.

### Notes

- Audited both deploy targets for security posture: cPanel's `.htaccess` already set CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`; `.well-known/security.txt` was present and current. GitHub Pages has no supported mechanism for custom response headers at all, so it ships with none of these — a platform limitation, not a config gap.

## [1.1.0] - 2026-07-09

### Added

- Lore entry: "The Grand Ensemble Multiverse" (`src/lore/ensemble-multiverse.md`) — names the infinite collection of Worldwright-authored universes, documents our home universe's 3 visible-physical + 7 invisible-Etheric + 1 time = 11-dimensional structure, and explains why other universes in the Cascade can use a different dimensional split with different fundamental particles and forces. Cross-linked from `post-eleven-dimensional-manifold.md`.
- Default-theme homepage hero paragraph rewritten to link into the new lore entry instead of just the Concordant glossary term.

### Fixed

- Several inline links (the homepage hero paragraph, the Atlas page intro) sat outside any styled component class and had no color rule, so they rendered in the browser's default blue instead of the site's accent color. Added a sitewide fallback `a` rule in `main.css`.

## [1.0.0] - 2026-07-09

Baseline release, consolidating prior undated project history (this is the first version this changelog covers retroactively).

### Added

- Lore entries defining teleportation constraints and the story pressures those limits create.
- Expanded fold-space material around Lagrange fold-points, linked across related FTL articles.
- Canon for the Subsea Cable Warden Programme.
- Lore for the Star Rangers Safety Corps and its historical lineage.
- Timeline events from before the United Stellar Concord.

### Changed

- Revised timeline event titles and updated charter references for the Safety Corps and the SSSA.
- Renamed references to "UL Standards International" as "United Space Industry Standards" across lore and timeline content.

### Removed

- Direct mentions of UL Solutions by name from lore and timeline entries.
