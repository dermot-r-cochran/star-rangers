const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
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

  // Collection: all chapters ordered by season/episode/chapter
  eleventyConfig.addCollection("chapters", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/seasons/**/*.md")
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
