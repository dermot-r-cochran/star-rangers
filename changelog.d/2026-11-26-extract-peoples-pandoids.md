### Fixed

- **The Peoples and Bodies extractor reads the new Pandoids page** (`scripts/extract-peoples.js`, 2026-11-26, Opus). Cutting 1.81.0 stopped the extractor because `src/lore/pandoids.md` was a Species page with no row in its table. The Told's existing row now names that lore page in place of the glossary entry; nothing else in the row changed.
