### Added

- **Continue reading, where-am-I and reading time; tags under the text** (`src/js/continue-reading.js`, `lib/reading-time.js`, `src/_includes/chapter.njk`, `src/_includes/base.njk`, `src/index.md`, `src/start/index.md`, the episode, season and thread chapter lists, `src/css/main.css`, 2026-11-26, Opus, at Dermot's *"1 to 3 as recommended"*). The home and Start pages show *Continue reading* with the last chapter the reader opened on that domain, kept only in their browser. A chapter's header now says *Season 4 · Episode 2 · Chapter 2 of 2 · about 10 min*, linking the episode, and each chapter list shows its reading time (tier-gated blocks not counted; `test/reading-time.test.js`). The tag list moved from above the text to under it, beside the canon facts.

### Fixed

- **Stray bullet dots in "Read scene-by-scene"** (`src/css/main.css`, 2026-11-26, Opus, at Dermot's *"Yes, fix the bullet dots too"*). The scene list's markers drew dots beside the viewpoint buttons; they are gone, and the doubled rule under the new after-text chapter links is now a single one.
