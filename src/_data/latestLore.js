// Powers the homepage Lore card's teaser paragraph: at build time, finds
// whichever src/lore/**/*.md entry was most recently touched and surfaces
// its opening line, so the homepage always fronts the newest lore without
// anyone having to edit src/index.md by hand.
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const matter = require("gray-matter");
const { getContentFilter, isTopicPageIncluded } = require("../../lib/content-filter");

const REPO_ROOT = path.join(__dirname, "..", "..");
const LORE_DIR = path.join(__dirname, "..", "lore");

function findMarkdownFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
      results.push(fullPath);
    }
  }
  return results;
}

// Git's last-commit time for the file, when it has one. A working-tree edit
// that hasn't been committed yet has no such entry - the caller falls back
// to filesystem mtime for that case, which is always at least as recent.
function lastCommitDate(filePath) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", filePath], {
      cwd: REPO_ROOT,
      encoding: "utf8"
    }).trim();
    return out ? new Date(out) : null;
  } catch {
    return null;
  }
}

function firstParagraph(body) {
  const blocks = body.split(/\r?\n\s*\r?\n/).map((b) => b.trim()).filter(Boolean);
  for (const block of blocks) {
    if (/^#{1,6}\s/.test(block)) continue;
    if (/^!\[/.test(block)) continue;
    if (/^\[.+\]:\s/.test(block)) continue;
    return block.replace(/\s+/g, " ");
  }
  return "";
}

module.exports = function () {
  const filter = getContentFilter();
  let latest = null;

  for (const filePath of findMarkdownFiles(LORE_DIR)) {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    if (!data.title || !isTopicPageIncluded(data, filter)) continue;

    const commitDate = lastCommitDate(filePath);
    const mtime = fs.statSync(filePath).mtime;
    const updated = commitDate && commitDate > mtime ? commitDate : mtime;

    if (latest && updated <= latest.updated) continue;

    const relUrl = "/" + path.relative(path.join(REPO_ROOT, "src"), filePath).replace(/\.md$/, "") + "/";
    latest = {
      updated,
      title: data.title,
      excerpt: firstParagraph(content),
      url: relUrl
    };
  }

  return latest;
};
