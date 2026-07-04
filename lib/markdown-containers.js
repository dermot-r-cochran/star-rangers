// Shared markdown-it setup for the :::pov and ::::: scene custom containers
// used in chapter content. Used both by .eleventy.js (for the normal
// chapter-page render) and src/_data/scenePovPages.js (which needs the raw
// token stream to split a chapter's body into individual scene/POV pages).
//
// Chapter authors must write a scene wrapper with *more* colons than any
// :::pov block nested inside it (5 is the convention here; any count above
// 3 works) - NOT via markdown-it-container's `marker` option, which sets
// the repeating marker *character/string unit* rather than how many colons
// are required (`marker: ":".repeat(5)` was tried here first and actually
// required 15 colons - 3 reps of a 5-char unit - not 5). The real
// mechanism: each container instance's required closing-fence length is
// however many colons its own opening line actually used (at least 3), so
// a plain "::::: scene 1" / ":::::" pair (still the ':' marker both rules
// share) naturally can't be closed early by a nested "::: pov ... :::"
// block, since 3 < 5. Existing chapters with no scene wrapper at all are
// treated as one implicit scene - see extractScenes() in scenePovPages.js.
const markdownIt = require("markdown-it");
const container = require("markdown-it-container");

function parseInfo(pattern, info) {
  const match = info.trim().match(pattern);
  return match ? match[1] : "";
}

function createMarkdownRenderer() {
  const md = markdownIt({ html: true });

  md.use(container, "scene", {
    validate: (params) => /^scene\s+(\S.*)$/.test(params.trim()),
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const num = md.utils.escapeHtml(parseInfo(/^scene\s+(\S.*)$/, tokens[idx].info));
        return `<section class="scene" data-scene="${num}">\n`;
      }
      return "</section>\n";
    }
  });

  md.use(container, "pov", {
    validate: (params) => /^pov\s+(\S+)/.test(params.trim()),
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const id = md.utils.escapeHtml(parseInfo(/^pov\s+(\S+)/, tokens[idx].info));
        return (
          `<section class="pov-block" data-pov="${id}" aria-label="POV: ${id}">\n` +
          `<header class="pov-header"><span class="pov-header__name">${id}</span></header>\n`
        );
      }
      return "</section>\n";
    }
  });

  return md;
}

module.exports = { createMarkdownRenderer };
