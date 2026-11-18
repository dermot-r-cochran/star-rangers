// Where a lore page's `image:` lives below src/images/.
//
// A lore page's picture is normally its own file in src/images/lore/, so the
// front-matter value is the path below that folder ("mars.jpg",
// "planets/corryn.jpg"). Since 2026-11-18 (every page carries an image; a
// borrowed picture is one file with two references, never a copy) a lore page
// may instead borrow the picture of a chapter, a character or a glossary
// entry on the same subject by naming that folder first:
// "chapters/s03e01c01.jpg", "characters/sixth-course.jpg". No folder of that
// name exists inside src/images/lore/, so the two forms cannot collide.
const BORROW_DIRS = ["chapters", "characters", "codex", "glossary", "hero", "journal"];

function loreImageRel(value) {
  const v = String(value || "").replace(/^\/+/, "");
  if (!v) return "";
  const first = v.split("/")[0];
  return v.includes("/") && BORROW_DIRS.includes(first) ? v : `lore/${v}`;
}

module.exports = { loreImageRel, BORROW_DIRS };
