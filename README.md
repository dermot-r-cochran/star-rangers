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

## Creative tooling

- Repository-aligned master prompt: [`prompts/star-rangers-universe-engine.md`](./prompts/star-rangers-universe-engine.md)
