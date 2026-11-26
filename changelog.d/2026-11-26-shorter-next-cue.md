### Changed

- **Shorter setting under a Next link** (`src/_includes/chapter-pagination.njk`, `lib/short-setting.js`, `.eleventy.js`, 2026-11-26, Opus, at Dermot's *"Yes, shorten it"* after the live-site check of #2142). When the next chapter moves to a new episode or place, the cue under its Next link now gives the first place named and the year, e.g. *Eden Space Habitat · 2828 UCSD*, where it had run to four lines. It only cuts, never rewords, and the full setting stays in the link's tooltip and in the chapter's own header (`test/short-setting.test.js`).
