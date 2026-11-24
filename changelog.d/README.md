# changelog.d

Unreleased changelog entries, one file per change. When a release is cut,
`node scripts/gather-changelog.js X.Y.Z` moves them into `CHANGELOG.md` as that
release's section, newest first, and deletes them.

**Why.** `CHANGELOG.md`'s `[Unreleased]` section was an append-at-top list. On
a day when several sessions merged into this repository every few minutes,
every pull request conflicted on it and had to be rebased before its checks
would run. Two changes never write the same file now, so they never conflict.
This was Dermot's *"Yes, do that"*, 24 November 2026.

**One file per change:** `changelog.d/YYYY-MM-DD-some-slug.md`. The name has
the date of the change, then a few lower-case words joined by hyphens. Its
content is the entry exactly as it would have stood under `[Unreleased]`: a
top-level `- ` bullet, or a few for one piece of work. The same rules apply as
always (CLAUDE.md): plain and complete, not an essay, with the files and date
and whose word it was. A fragment may optionally open with one category line,
`### Added`, `### Changed`, `### Fixed`, `### Removed` or `### Security`.

```markdown
### Fixed

- **A broken link on the Atlas page** (`src/atlas/index.njk`, 2026-11-25, Opus). ...
```

**Nothing is written under `[Unreleased]` in `CHANGELOG.md`.** `npm test`
fails on an entry there and on a malformed fragment (`scripts/check-changelog.js`).
The coverage and length warnings read the fragments as they read the changelog.

A fragment can be edited or removed freely until its release is gathered. After
that it is part of a released section, which is immutable.
