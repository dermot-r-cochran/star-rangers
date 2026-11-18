// A character page's `image`: its own portrait, or a borrowed picture.
//
// A bare file name ("sen.jpg") is the character's own portrait, filed in
// src/images/characters/, as it always was. Since 2026-11-18 the value may
// instead carry a folder ("chapters/s01e00c10.jpg", "lore/quern.jpg",
// "codex/incident-report-001.jpg", "characters/sen.jpg"): the path BELOW
// src/images/ of a picture borrowed from a page on the same subject, the way
// a glossary or timeline entry borrows one (lib/content-schema.js). Dermot,
// 15 November 2026: "every page would benefit from an image or video"; where
// the portrait rulings leave a character without a picture of their own, the
// page takes a borrowed one (story-bible/images.md, section 82).
//
// One file with two references, never a copy: validate-content.js fails a
// byte-identical duplicate. A borrowed picture is NOT a portrait, so every
// consumer that means "this character's face or body" (the POV strip, the
// season portraits, the home slideshow, the peoples and wardrobe boards)
// asks ownPortrait() and gets null for it; only the page's own header, its
// share card and the image sitemap show it.

function clean(image) {
  if (image === undefined || image === null) return "";
  return String(image).trim().replace(/^\/+/, "");
}

// true when the value names a folder, i.e. the picture is borrowed.
function isBorrowedCharacterImage(image) {
  return clean(image).includes("/");
}

// The path below src/images/ of whatever the page shows, or null.
function characterImageRel(image) {
  const value = clean(image);
  if (!value) return null;
  return value.includes("/") ? value : `characters/${value}`;
}

// The bare file name of the character's own portrait, or null when the page
// has no image or shows a borrowed one.
function ownPortrait(image) {
  const value = clean(image);
  if (!value || value.includes("/")) return null;
  return value;
}

module.exports = { isBorrowedCharacterImage, characterImageRel, ownPortrait };
