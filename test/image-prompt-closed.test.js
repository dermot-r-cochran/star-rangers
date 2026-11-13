// Pins the closed status scripts/image-prompts.js gives an entry the record
// has closed without a file (removed, superseded, or no visualization on
// record), so the queue stops counting finished pages as pending work.
const test = require("node:test");
const assert = require("node:assert/strict");

const { parseEntries } = require("../scripts/image-prompts");

const md = [
  "### 5. Missing lore illustrations",
  "",
  "- **`removed.jpg`** — filed, then removed.",
  "  > A cold upland. Landscape orientation.",
  "  - **Filed 1 November 2026** (Opus).",
  "  - **Removed 10 November 2026** at Dermot's word.",
  "",
  "- **`superseded.jpg`** — replaced by a later entry.",
  "  > A bare plain. Landscape orientation.",
  "  *(**Superseded the same evening** by `other.jpg`.)*",
  "",
  "- **`novis.jpg`** — no picture on record.",
  "  > A dusk shore. Landscape orientation.",
  "  - **No visualization on record, 27 October 2026** (Dermot).",
  "",
  "- **`failed.jpg`** — two rounds failed, still open.",
  "  > A tidal flat. Landscape orientation.",
  "  - **Not filed.** Two rounds, all failed.",
  "",
  "- **`fresh.jpg`** — never generated.",
  "  > A ridge. Landscape orientation.",
].join("\n");

const byFile = Object.fromEntries(parseEntries(md).map((e) => [e.file, e]));

test("Removed, Superseded and No visualization on record close an entry", () => {
  assert.equal(byFile["removed.jpg"].closedBy, "Removed");
  assert.equal(byFile["superseded.jpg"].closedBy, "Superseded");
  assert.equal(byFile["novis.jpg"].closedBy, "No visualization on record");
});

test("a failed round and an ungenerated entry stay open", () => {
  assert.equal(byFile["failed.jpg"].closedBy, null);
  assert.equal(byFile["fresh.jpg"].closedBy, null);
});

test("a closing line does not leak into the next entry", () => {
  assert.equal(Object.keys(byFile).length, 5);
});
