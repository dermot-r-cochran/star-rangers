# Forking this repository

This repo is built to be forked two different ways. Pick one before you start replacing content — it changes what you keep.

## The two licences (read this part first)

- **Engine** (`.eleventy.js`, `lib/`, `src/_includes/`, `src/css/`, `src/js/`, `scripts/`): **MIT** — see [`LICENSE`](./LICENSE). Reuse it for anything, including a wholly original story with no connection to Star Rangers.
- **Story content** (`src/seasons/`, `src/threads/`, `src/characters/`, `src/timeline/`, `src/lore/`, `src/glossary/`, `src/codex/`, `story-bible/`, `prompts/`): **CC BY-NC-ND 4.0**, with an explicit **Fan Works Policy** exception for non-commercial fan fiction, fan art, and fan fiction clones of this site — see [`CONTENT-LICENSE.md`](./CONTENT-LICENSE.md) for the exact conditions.

That means:

- **Path A — an original site, different story entirely.** Keep the engine, delete/replace the content. No connection to Star Rangers is implied or required.
- **Path B — a Star Rangers fan fiction clone.** Keep the engine *and* some or all of the existing content, and add your own stories in the same universe. Must stay non-commercial and clearly labeled as unofficial fan work — see `CONTENT-LICENSE.md`'s Fan Works Policy for the full conditions.

Both paths start the same way below; they only diverge at "replace or extend the content."

## What's engine vs. content

| Keep (engine) | Replace (Path A) or extend (Path B) |
|---|---|
| `.eleventy.js`, `lib/`, `scripts/` | `src/seasons/`, `src/threads/` |
| `src/_includes/` (layouts) | `src/characters/`, `src/timeline/` |
| `src/css/`, `src/js/`, `src/images/`, `src/audio/` (swap assets, keep the mechanism) | `src/lore/`, `src/glossary/`, `src/codex/` |
| `src/_data/` (mechanism; `giscus.js`'s *values* need updating — see below) | `story-bible/`, `prompts/` |

## Step by step

1. **Fork the repo**, then locally: `npm install && npm start` to confirm it builds before changing anything.
2. **Decide Path A or B**, then either delete the content directories above and write your own (Path A), or keep what you want and add to it (Path B — check `CONTENT-LICENSE.md`'s conditions as you go). Either way, use `npm run new` to scaffold each new character/lore/codex/glossary entry or chapter — it prompts for the right fields instead of you having to copy an example file and guess which parts matter (see README's "Adding content" section). `npm test` validates front matter against the same schema, so a typo'd field fails with a clear message instead of a silent bad build.
3. **Rebrand.** `SITE_NAME`/`SITE_TITLE` (env vars, or `deploy.conf` keys — see README's cPanel section) already cover the header logo, footer, and browser `<title>`, no code changes needed. Beyond that, search this repo for `dermot-r-cochran` and `sciencefiction.site` and replace them with your own identity — they're hardcoded in `README.md`, `src/about/index.md`, `src/index.md`, and `package.json`'s `repository`/`bugs`/`homepage` fields, since nothing about *who you are* can be inferred automatically.
4. **Fix the path prefix, if you need to.** This project hardcodes `/star-rangers/` in absolute links throughout layouts *and* content (~200 files) because Eleventy's own `pathPrefix` stays `/` here — see the comment above `SITE_PATH_PREFIX` in `.eleventy.js` for why. Set `SITE_PATH_PREFIX` (e.g. `/my-fork/` for a differently-named GitHub Pages repo, or `/` for local preview at root or a custom domain) and every occurrence gets rewritten at build time — no manual find/replace needed. You don't need this for cPanel deploys; see step 6.
5. **Set up your own comments repo**, if you want giscus comments at all (see README's "Discussion forum (giscus)" section for the full walkthrough):
   - Create your own public `<you>/<your-comments-repo>`, enable Discussions, create the same category structure (or your own).
   - Update `src/_data/giscus.js`'s `repo` field to point at it **before** running the fetch script.
   - Run `GITHUB_TOKEN=ghp_xxx npm run fetch-giscus-ids -- --write` to pull in the real repo/category IDs (see `scripts/fetch-giscus-ids.js`).
6. **Deploy.**
   - **GitHub Pages**: `.github/workflows/deploy.yml` works unmodified — if you needed `SITE_PATH_PREFIX` in step 4, set it as a repository variable (Settings → Secrets and variables → Actions → Variables) rather than editing the workflow file.
   - **cPanel**: copy `sample-deploy.conf` to `deploy.conf` and fill in your own values (see README's cPanel section for the full key reference). You don't need `SITE_PATH_PREFIX` here at all — `scripts/cpanel-deploy.sh` already rewrites the hardcoded `/star-rangers/` prefix to `/` as part of every cPanel deploy, regardless of fork, so cPanel targets just work unmodified.
