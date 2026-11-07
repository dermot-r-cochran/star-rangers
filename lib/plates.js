// THE PLATES - a gallery of selected images, one selection per edition.
//
// Dermot, 2026-11-07, after the image-search work: "whether the star rangers
// sites need a gallery of selected images similar to the plates in Tissadelle
// Shepherd photography", and then "selected images could be different for
// each edition depending on the theme"; built at his "Yes, build it".
//
// WHY A SEPARATE REGISTRY AND NOT A FIELD ON THE EDITION. An edition record
// is merged over DEFAULT_EDITION (lib/editions.js, editionFor), so a `plates`
// list on the default would be inherited by every edition that set none, and
// the canonical site's general selection would turn up on the children's
// domain. Keyed by edition id here, with no fallback, an edition with no list
// simply has no Plates page and no nav link.
//
// WHAT A PLATE IS. The URL of a page this site already publishes (a lore,
// character or codex page, written as Eleventy's page.url, without the
// /star-rangers prefix). The image and its alt text come from that page's own
// front matter (`image`, `image_alt`), never a second copy here, so a
// re-filed portrait or a corrected alt reaches the Plates page by itself. A
// plate may name an `image` (a path under src/images/) and `alt` of its own
// only for a picture that sits in a page's body rather than its header.
//
// THE RULES (scripts/check-plates.js, in npm test, per edition):
//   - every plate's page exists and has an image, and the edition carries it
//     (the same inclusion test a deploy of that edition applies), so no plate
//     links a reader to a "Not included in this edition" placeholder;
//   - no page twice, and at most MAX_PLATES, because a selection is a choice;
//   - a list is keyed by a real edition id.
// At build time the template also drops any plate whose page this build does
// not carry, so a narrowed local build degrades quietly rather than breaking.
//
// Choosing is taste and is Dermot's: Fable proposes a selection per edition
// against its theme, he approves it from a contact sheet, and only then does a
// list land here. Best in group and distinctive over conventional (his gallery
// rule); a ship's picture follows its starship-design sheet.

const MAX_PLATES = 24;

// Keyed by edition id (lib/editions.js). Empty until a selection is approved.
const PLATES = {};

function platesFor(editionId) {
  return PLATES[String(editionId || "").trim().toLowerCase()] || [];
}

const IMAGE_DIRS = { characters: "characters", lore: "lore", codex: "codex" };

/**
 * Resolve an edition's plates against the pages this build carries.
 *
 * @param {Array<{page: string, image?: string, alt?: string}>} plates
 * @param {Object<string, Array>} collections - { lore, characters, codex }, each
 *   an Eleventy collection (already narrowed to the edition on a narrowed build)
 * @param {(relPath: string) => boolean} [isPlaceholder] - true for a placeholder portrait
 * @returns {Array<{title: string, url: string, src: string, alt: string}>}
 */
function resolvePlates(plates, collections, isPlaceholder = () => false) {
  const byUrl = new Map();
  for (const [kind, items] of Object.entries(collections || {})) {
    for (const item of items || []) byUrl.set(item.url, { kind, item });
  }
  const out = [];
  for (const plate of plates || []) {
    const hit = byUrl.get(plate.page);
    if (!hit) continue;
    const data = hit.item.data || {};
    const rel = plate.image || (data.image ? `${IMAGE_DIRS[hit.kind]}/${data.image}` : null);
    if (!rel || isPlaceholder(rel)) continue;
    out.push({
      title: data.title,
      url: `/star-rangers${plate.page}`,
      src: `/star-rangers/images/${rel}`,
      alt: plate.alt || data.image_alt || data.title
    });
  }
  return out;
}

module.exports = { MAX_PLATES, PLATES, platesFor, resolvePlates };
