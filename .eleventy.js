const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItContainer = require("markdown-it-container");

function normalizeCrossReference(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

function resolveGlossaryUrl(term, glossaryEntries = []) {
  const normalizedTerm = normalizeCrossReference(term);
  if (!normalizedTerm) return "/star-rangers/glossary/";

  const match = glossaryEntries.find((entry) => {
    const candidates = [entry?.data?.id, entry?.data?.title, entry?.fileSlug, entry?.page?.fileSlug];
    return candidates.some((candidate) => normalizeCrossReference(candidate) === normalizedTerm);
  });

  return match?.url ? `/star-rangers${match.url}` : `/star-rangers/glossary/${normalizedTerm}/`;
}

/**
 * Build a markdown-it instance that converts :::pov <id> blocks into
 * accessible <section class="pov-block"> elements.  The POV character
 * label is looked up from the page's `povs` frontmatter array when
 * available, and falls back to the raw id.
 */
function buildMarkdownLib() {
  const md = markdownIt({ html: true, breaks: false, linkify: true });

  // :::pov <id>  …  :::
  md.use(markdownItContainer, "pov", {
    validate(params) {
      return /^pov\s+\S+/.test(params.trim());
    },
    render(tokens, idx) {
      const token = tokens[idx];
      if (token.nesting === 1) {
        const id = token.info.trim().replace(/^pov\s+/, "").trim();
        // The label will be resolved by client-side JS from the button text;
        // we bake the id into data-pov so JS can match it.
        return (
          `<section class="pov-block pov-block--${id}" data-pov="${id}" aria-label="POV: ${id}">\n` +
          `<header class="pov-header">` +
          `<span class="pov-header__name">${id}</span>` +
          `</header>\n`
        );
      }
      return "</section>\n";
    },
  });

  return md;
}

module.exports = function (eleventyConfig) {
  // Configure markdown-it with custom POV container support
  eleventyConfig.setLibrary("md", buildMarkdownLib());

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Custom filter: format timestamp
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
  });

  // Custom filter: slugify for IDs
  eleventyConfig.addFilter("slugify", (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  });

  eleventyConfig.addFilter("glossaryUrl", (term, glossaryEntries) => resolveGlossaryUrl(term, glossaryEntries));

  // Custom filter: zero-pad a number to 2 digits
  eleventyConfig.addFilter("zeroPad", (n) => String(n ?? "").padStart(2, "0"));

  // Collection: all chapters ordered by season/episode/chapter
  eleventyConfig.addCollection("chapters", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/seasons/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => {
        const aId = a.data.id || "";
        const bId = b.data.id || "";
        return aId.localeCompare(bId);
      });
  });

  // Collection: chapters grouped by season
  eleventyConfig.addCollection("seasons", function (collectionApi) {
    const chapters = collectionApi
      .getFilteredByGlob("src/seasons/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => (a.data.id || "").localeCompare(b.data.id || ""));

    const seasons = {};
    for (const chapter of chapters) {
      const s = chapter.data.season;
      if (!seasons[s]) seasons[s] = [];
      seasons[s].push(chapter);
    }
    return seasons;
  });

  // Collection: codex entries
  eleventyConfig.addCollection("codex", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/codex/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""));
  });

  // Collection: character profiles
  eleventyConfig.addCollection("characters", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/characters/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""));
  });

  // Collection: timeline events ordered by sort_order then title
  eleventyConfig.addCollection("timelineEvents", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/timeline/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => {
        const aOrd = a.data.sort_order != null ? a.data.sort_order : 9999;
        const bOrd = b.data.sort_order != null ? b.data.sort_order : 9999;
        return aOrd - bOrd || (a.data.timestamp || "").localeCompare(b.data.timestamp || "");
      });
  });

  // Collection: glossary entries ordered alphabetically
  eleventyConfig.addCollection("glossary", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/glossary/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""));
  });

  // Collection: lore entries
  eleventyConfig.addCollection("lore", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/lore/**/*.md")
      .filter((item) => !item.inputPath.endsWith("index.md"))
      .sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""));
  });

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
