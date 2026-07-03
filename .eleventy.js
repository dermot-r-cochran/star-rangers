const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/static/.htaccess": ".htaccess" });
  eleventyConfig.addPassthroughCopy({ "src/static/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/static/.well-known": ".well-known" });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate();
  });

  eleventyConfig.addFilter("absoluteUrl", function(path, base = "https://dermot-r-cochran.github.io/star-rangers/") {
    if (!path) return base;
    if (/^https?:\/\//i.test(path)) return path;
    return new URL(path.replace(/^\/+/, ""), base).toString();
  });

  eleventyConfig.addFilter("zeroPad", (num) => String(num).padStart(2, "0"));

  eleventyConfig.addFilter("glossaryUrl", function(term, glossaryCollection) {
    const match = (glossaryCollection || []).find((item) => item.data.title === term);
    return match ? match.url : "/glossary/";
  });

  eleventyConfig.addCollection("characters", (collectionApi) =>
    collectionApi.getAll().filter((item) => item.data.layout === "character.njk")
  );

  eleventyConfig.addCollection("codex", (collectionApi) =>
    collectionApi.getAll().filter((item) => item.data.layout === "codex.njk")
  );

  eleventyConfig.addCollection("lore", (collectionApi) =>
    collectionApi.getAll().filter((item) => item.data.layout === "lore-entry.njk")
  );

  eleventyConfig.addCollection("chapters", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.data.layout === "chapter.njk")
      .sort((a, b) =>
        Number(a.data.season) - Number(b.data.season) ||
        Number(a.data.episode) - Number(b.data.episode) ||
        Number(a.data.chapter) - Number(b.data.chapter)
      )
  );

  eleventyConfig.addCollection("glossary", (collectionApi) =>
    collectionApi.getAll().filter((item) => item.data.layout === "glossary-entry.njk")
  );

  eleventyConfig.addCollection("timelineEvents", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.inputPath.includes("/timeline/") && !item.inputPath.endsWith("/index.md"))
      .sort((a, b) => Number(a.data.sort_order) - Number(b.data.sort_order))
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
