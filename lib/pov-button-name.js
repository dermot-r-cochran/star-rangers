"use strict";

// The "View from" buttons show the rank and name from a POV label, without
// the bracket (Dermot, 2026-11-13: "Buttons: name only"). The label's shape is
// `<rank> <name> (<frame>[, <one qualifier>])` (intake 2026-10-07), so the
// name is everything before the trailing parenthesis. The full label stays on
// the POV block header, the scene-POV pages and the button's tooltip.
function povButtonName(label) {
  const text = String(label == null ? "" : label).trim();
  const name = text.replace(/\s*\([^()]*\)\s*$/, "").trim();
  return name || text;
}

module.exports = { povButtonName };
