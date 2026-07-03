const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");

// --- CHARACTERS / TOPICS content filtering (cPanel deploy.conf) ---------
// Optional, comma-separated, case-insensitive env vars set by .cpanel.yml
// from an untracked deploy.conf. Both empty/unset (always true for the
// GitHub Pages build, which never sets these) means no filtering.
function parseFilterList(envValue) {
  return String(envValue || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

function getContentFilter() {
  const characters = parseFilterList(process.env.CHARACTERS);
  const topics = parseFilterList(process.env.TOPICS);
  return {
    characters,
    // Tags conventionally embed character slugs too (e.g. a timeline entry
    // tagged "aldera"), so CHARACTERS also participates in tag matching.
    tagMatches: new Set([...characters, ...topics]),
    active: characters.length > 0 || topics.length > 0
  };
}

function hasMatchingTag(data, filter) {
  if (!filter.tagMatches.size) return false;
  const tags = Array.isArray(data.tags) ? data.tags.map((t) => String(t).toLowerCase()) : [];
  const category = data.category ? String(data.category).toLowerCase() : null;
  return tags.some((t) => filter.tagMatches.has(t)) || (category !== null && filter.tagMatches.has(category));
}

function hasMatchingPov(data, filter) {
  if (!filter.characters.length) return false;
  const povs = Array.isArray(data.povs) ? data.povs : [];
  return povs.some((p) => filter.characters.includes(String((p && p.id) || "").toLowerCase()));
}

function isCharacterIncluded(data, filter) {
  if (!filter.active) return true;
  return filter.characters.includes(String(data.id || "").toLowerCase()) || hasMatchingTag(data, filter);
}

function isChapterIncluded(data, filter) {
  if (!filter.active) return true;
  return hasMatchingPov(data, filter) || hasMatchingTag(data, filter);
}

function isTopicPageIncluded(data, filter) {
  if (!filter.active) return true;
  return hasMatchingTag(data, filter);
}

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
