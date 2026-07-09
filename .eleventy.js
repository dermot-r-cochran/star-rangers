const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { createMarkdownRenderer } = require("./lib/markdown-containers");
const {
  getContentFilter,
  isCharacterIncluded,
  isChapterIncluded,
  isTopicPageIncluded
} = require("./lib/content-filter");

// Drives the eleventyComputed override below: decides whether a
// standalone content-leaf page renders its real content or a placeholder.
// Anything outside the 6 filterable content types (nav/index/structural
// pages) always passes through.
function isContentIncluded(data, filter) {
  if (!filter.active) return true;
  const layout = data.layout;
  if (layout === "character.njk") return isCharacterIncluded(data, filter);
  if (layout === "chapter.njk") return isChapterIncluded(data, filter);
  if (layout === "codex.njk" || layout === "lore-entry.njk" || layout === "glossary-entry.njk") {
    return isTopicPageIncluded(data, filter);
  }
  const inputPath = data.page && data.page.inputPath;
  if (inputPath && inputPath.includes("/timeline/") && !inputPath.endsWith("/index.md")) {
    return isTopicPageIncluded(data, filter);
  }
  return true;
}

module.exports = function(eleventyConfig) {
  const contentFilter = getContentFilter();

  // Mirrors the CHARACTERS/TOPICS pattern above: deploy.conf's THEME value
  // (see scripts/cpanel-deploy.sh) is exported to this Node process so
  // templates can vary copy per deployment target, not just swap CSS.
  // Falls back to "default" for any build that never sets THEME (local
  // dev, CI, GitHub Pages).
  eleventyConfig.addGlobalData("theme", String(process.env.THEME || "default").trim().toLowerCase());

  // Wires up the :::pov / :::::scene custom containers used in chapter
  // content (see lib/markdown-containers.js) - without this, markdown-it
  // has no idea what those fences mean and renders them as literal text.
  eleventyConfig.setLibrary("md", createMarkdownRenderer());

  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/audio": "audio" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/static/.htaccess": ".htaccess" });
  // robots.txt is no longer a static passthrough file - src/robots.njk
  // renders it so its Sitemap line can carry the right absolute domain
  // per deploy target (see src/_data/site.js and scripts/cpanel-deploy.sh).
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

  eleventyConfig.addFilter("glossaryUrl", function(term, glossaryCollection, loreCollection) {
    const match =
      (glossaryCollection || []).find((item) => item.data.title === term) ||
      (loreCollection || []).find((item) => item.data.title === term);
    return `/star-rangers${match ? match.url : "/glossary/"}`;
  });

  // Groups the flat scenePovPages global data (src/_data/scenePovPages.js)
  // back into per-scene lists of characters for one chapter, so chapter.njk
  // can link out to each scene's individual per-character pages.
  eleventyConfig.addFilter("scenesForChapter", (pages, chapterId) => {
    const byScene = new Map();
    for (const p of pages || []) {
      if (p.chapterId !== chapterId) continue;
      if (!byScene.has(p.sceneNumber)) byScene.set(p.sceneNumber, []);
      byScene.get(p.sceneNumber).push(p);
    }
    return Array.from(byScene.entries())
      .sort((a, b) => Number(a[0]) - Number(b[0]) || a[0].localeCompare(b[0]))
      .map(([number, characters]) => ({ number, characters }));
  });

  eleventyConfig.addCollection("characters", (collectionApi) =>
    collectionApi.getAll()
      .filter((item) => item.data.layout === "character.njk")
      .filter((item) => isCharacterIncluded(item.data, contentFilter))
  );

  eleventyConfig.addCollection("codex", (collectionApi) =>
    collectionApi.getAll()
      .filter((item) => item.data.layout === "codex.njk")
      .filter((item) => isTopicPageIncluded(item.data, contentFilter))
  );

  eleventyConfig.addCollection("lore", (collectionApi) =>
    collectionApi.getAll()
      .filter((item) => item.data.layout === "lore-entry.njk")
      .filter((item) => isTopicPageIncluded(item.data, contentFilter))
  );

  eleventyConfig.addCollection("chapters", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.data.layout === "chapter.njk")
      .filter((item) => isChapterIncluded(item.data, contentFilter))
      .sort((a, b) =>
        Number(a.data.season) - Number(b.data.season) ||
        Number(a.data.episode) - Number(b.data.episode) ||
        Number(a.data.chapter) - Number(b.data.chapter)
      )
  );

  eleventyConfig.addCollection("glossary", (collectionApi) =>
    collectionApi.getAll()
      .filter((item) => item.data.layout === "glossary-entry.njk")
      .filter((item) => isTopicPageIncluded(item.data, contentFilter))
  );

  eleventyConfig.addCollection("timelineEvents", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.inputPath.includes("/timeline/") && !item.inputPath.endsWith("/index.md"))
      .filter((item) => isTopicPageIncluded(item.data, contentFilter))
      .sort((a, b) => Number(a.data.sort_order) - Number(b.data.sort_order))
  );

  // Excluded content-leaf pages still build at their normal URL (so links
  // to them never 404) but render a placeholder instead of their real
  // content: swap the layout to one that doesn't emit `content`, and
  // replace the title so it doesn't leak into <title>/meta. Self-referencing
  // computed data (data.layout/data.title resolve to the original
  // frontmatter value here) is Eleventy's standard "draft" pattern; this is
  // a no-op whenever contentFilter.active is false.
  eleventyConfig.addGlobalData("eleventyComputed", {
    layout: (data) => (isContentIncluded(data, contentFilter) ? data.layout : "excluded.njk"),
    title: (data) => (isContentIncluded(data, contentFilter) ? data.title : "Not included in this edition")
  });

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
