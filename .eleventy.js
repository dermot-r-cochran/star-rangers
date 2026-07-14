const { DateTime } = require("luxon");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { createMarkdownRenderer } = require("./lib/markdown-containers");
const {
  getContentFilter,
  isCharacterIncluded,
  isChapterIncluded,
  isTopicPageIncluded,
  getRelatedContentUrls
} = require("./lib/content-filter");
const { threadForSeason } = require("./lib/storyline-threads");

// Whether a lore/timeline/glossary page earns inclusion either the normal
// way (tag/category match) or because some included character's own bio
// links to it directly - see getRelatedContentUrls's own comment for why
// that second path exists: a character page is already the record of what
// background matters for understanding them.
function isRelatedTopicPageIncluded(data, filter, url) {
  return isTopicPageIncluded(data, filter) || filter.relatedUrls.has(url);
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
  const url = data.page && data.page.url;
  if (layout === "lore-entry.njk" || layout === "glossary-entry.njk") {
    return isRelatedTopicPageIncluded(data, filter, url);
  }
  if (layout === "codex.njk") {
    return isTopicPageIncluded(data, filter);
  }
  const inputPath = data.page && data.page.inputPath;
  if (inputPath && inputPath.includes("/timeline/") && !inputPath.endsWith("/index.md")) {
    return isRelatedTopicPageIncluded(data, filter, url);
  }
  return true;
}

// Drives the eleventyComputed "ogImage" override below: maps a content
// type's own `image` front-matter field (already used by that layout's own
// <img> tag - see e.g. character.njk) to the same images/<dir>/ folder, so
// Open Graph/Twitter Card previews use the same picture as the page itself
// instead of requiring a second, separately-maintained field.
const OG_IMAGE_DIRS = {
  "character.njk": "characters",
  "lore-entry.njk": "lore",
  "codex.njk": "codex",
  "glossary-entry.njk": "glossary"
};

// Site-wide fallback for any page with no page-specific image (chapters,
// listing pages, etc.) - returned outright rather than left for the
// template to fall back on, since Nunjucks' `default` filter only
// substitutes for `undefined`, not `null`, and would otherwise silently
// pass a null image straight through to the absoluteUrl filter.
const DEFAULT_OG_IMAGE = "/images/hero/home-launch.jpg";

function computeOgImage(data) {
  const dir = OG_IMAGE_DIRS[data.layout];
  return dir && data.image ? `/images/${dir}/${data.image}` : DEFAULT_OG_IMAGE;
}

// Drives the eleventyComputed "ogType" override below: "article" for an
// actual content leaf, "website" for everything else (the homepage, and
// every listing/index page).
const ARTICLE_LAYOUTS = new Set(["character.njk", "lore-entry.njk", "codex.njk", "glossary-entry.njk", "chapter.njk"]);

function computeOgType(data) {
  return ARTICLE_LAYOUTS.has(data.layout) ? "article" : "website";
}

module.exports = function(eleventyConfig) {
  const contentFilter = getContentFilter();
  // See getRelatedContentUrls's own comment: pulls in whatever lore,
  // timeline, and glossary pages the included characters' own bios link to,
  // on top of the existing tag/category matching below.
  contentFilter.relatedUrls = getRelatedContentUrls(contentFilter);

  // Mirrors the CHARACTERS/TOPICS pattern above: deploy.conf's THEME value
  // (see scripts/cpanel-deploy.sh) is exported to this Node process so
  // templates can vary copy per deployment target, not just swap CSS.
  // Falls back to "default" for any build that never sets THEME (local
  // dev, CI, GitHub Pages).
  eleventyConfig.addGlobalData("theme", String(process.env.THEME || "default").trim().toLowerCase());

  // Same pattern as THEME above, but a plain on/off switch: lets a build
  // suppress the giscus comment widget entirely (see src/_includes/base.njk)
  // without touching the per-page comments/commentsCategory front matter
  // that decides which page *types* would otherwise carry it. Defaults on;
  // the GitHub Pages workflow sets COMMENTS_ENABLED=false because its
  // /star-rangers/-prefixed URLs would otherwise create a second, redundant
  // set of pathname-mapped discussions alongside the cPanel domains'.
  eleventyConfig.addGlobalData("commentsEnabled", String(process.env.COMMENTS_ENABLED || "true").trim().toLowerCase() !== "false");

  // Forker-facing override for the ~200 layout/content files that hardcode
  // "/star-rangers/" in absolute links (this project's own GitHub Pages
  // URL - see the NOTE in .cpanel.yml for why: Eleventy's own pathPrefix
  // stays "/" throughout this config, so every absolute href needs that
  // segment written out by hand for GitHub Pages' /star-rangers/
  // project-site subpath to resolve at all). Forking this repo under a
  // different name/host means setting SITE_PATH_PREFIX once instead of
  // hand-editing every file it appears in. Unset (this project's own
  // local/CI/GitHub Pages builds never set it) leaves output byte-for-byte
  // unchanged, and cPanel builds don't need it either -
  // scripts/cpanel-deploy.sh already strips this same prefix with its own
  // post-build sed step, independently of this.
  const sitePathPrefix = process.env.SITE_PATH_PREFIX;
  if (sitePathPrefix && sitePathPrefix !== "/star-rangers/") {
    eleventyConfig.addTransform("rewriteSitePathPrefix", function (content, outputPath) {
      if (outputPath && /\.(html|css|js|xml|txt)$/.test(outputPath)) {
        return content.split("/star-rangers/").join(sitePathPrefix);
      }
      return content;
    });
  }

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

  // Nunjucks' own built-in `slice` filter splits an array into N groups
  // (Jinja2's "columnize" behavior) rather than taking the first N items,
  // so the Atom feed (src/feed.njk) needs its own "first N" filter instead.
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

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

  // Groups a chapter/season under its storyline thread - see
  // lib/storyline-threads.js. Always returns a thread object (falling back
  // to the shared "Unsorted" placeholder), never null, so templates never
  // need their own default-handling for an unassigned season.
  eleventyConfig.addFilter("threadForSeason", (seasonNumber) => threadForSeason(seasonNumber));

  eleventyConfig.addFilter("glossaryUrl", function(term, glossaryCollection, loreCollection) {
    const match =
      (glossaryCollection || []).find((item) => item.data.title === term) ||
      (loreCollection || []).find((item) => item.data.title === term);
    return `/star-rangers${match ? match.url : "/glossary/"}`;
  });

  // For the Atom feed (src/feed.njk) - formats a chapter's real-world
  // `date` (see lib/content-schema.js) as an RFC 3339 timestamp.
  eleventyConfig.addFilter("dateToRfc3339", (dateObj) => DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO());

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

  // Drives chapter.njk's previousChapter/nextChapter pagination links - the
  // immediate neighbor in the already-sorted "chapters" collection (see
  // that collection's own definition below), which reads as one continuous
  // publication order across episode and season boundaries alike, the same
  // way a season/episode index's own chapter list already reads. Returns
  // null past either end, and naturally skips anything CHARACTERS/TOPICS/
  // THREADS filtering has excluded, since the collection itself already
  // omits those chapters - no dead links to hidden content.
  eleventyConfig.addFilter("previousChapterIn", (chapters, id) => {
    const index = (chapters || []).findIndex((c) => c.data.id === id);
    return index > 0 ? chapters[index - 1] : null;
  });
  eleventyConfig.addFilter("nextChapterIn", (chapters, id) => {
    const index = (chapters || []).findIndex((c) => c.data.id === id);
    return index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null;
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
      .filter((item) => isRelatedTopicPageIncluded(item.data, contentFilter, item.url))
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

  // Same "chapters" set, newest real-world `date` first rather than story
  // order - what the Atom feed (src/feed.njk) actually wants to announce.
  eleventyConfig.addCollection("recentChapters", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.data.layout === "chapter.njk")
      .filter((item) => isChapterIncluded(item.data, contentFilter))
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addCollection("glossary", (collectionApi) =>
    collectionApi.getAll()
      .filter((item) => item.data.layout === "glossary-entry.njk")
      .filter((item) => isRelatedTopicPageIncluded(item.data, contentFilter, item.url))
  );

  eleventyConfig.addCollection("timelineEvents", (collectionApi) =>
    collectionApi
      .getAll()
      .filter((item) => item.inputPath.includes("/timeline/") && !item.inputPath.endsWith("/index.md"))
      .filter((item) => isRelatedTopicPageIncluded(item.data, contentFilter, item.url))
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
    title: (data) => (isContentIncluded(data, contentFilter) ? data.title : "Not included in this edition"),
    ogImage: (data) => computeOgImage(data),
    ogType: (data) => computeOgType(data)
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
