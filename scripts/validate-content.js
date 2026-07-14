#!/usr/bin/env node
//
// Checks every content file's front matter against lib/content-schema.js
// and fails loudly, file-by-file, instead of letting a missing/malformed
// field surface later as a blank page, a broken sort order, or a cryptic
// Nunjucks error mid-build. Run via `npm test` (before the Eleventy dry
// run) so CI catches it on every pull request.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { CONTENT_TYPES, TIMELINE_TYPE, CHAPTER_ID_PATTERN, isTimelineEntry, chapterIdFor } = require("../lib/content-schema");

const SRC_DIR = path.join(__dirname, "..", "src");

const TYPES_BY_LAYOUT = new Map(Object.values(CONTENT_TYPES).map((type) => [type.layout, type]));

function findMarkdownFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

function isBlank(value) {
  if (value === undefined || value === null) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

// Returns a list of human-readable problem strings for one file - empty
// if it's clean. Takes the already-parsed front matter data plus which
// schema (a CONTENT_TYPES entry, or the standalone TIMELINE_TYPE) applies.
function checkAgainstSchema(data, schema) {
  const problems = [];

  for (const field of schema.required) {
    if (isBlank(data[field])) {
      problems.push(`missing required field "${field}"`);
    }
  }

  for (const field of schema.numeric || []) {
    if (!isBlank(data[field]) && !Number.isFinite(Number(data[field]))) {
      problems.push(`field "${field}" must be a number, got ${JSON.stringify(data[field])}`);
    }
  }

  return problems;
}

function checkChapterConsistency(inputPath, data) {
  const problems = [];
  if (isBlank(data.season) || isBlank(data.episode) || isBlank(data.chapter)) return problems;

  const expectedId = chapterIdFor(data.season, data.episode, data.chapter);
  if (!isBlank(data.id) && data.id !== expectedId) {
    problems.push(`"id" is "${data.id}" but season/episode/chapter (${data.season}/${data.episode}/${data.chapter}) imply "${expectedId}"`);
  }

  const filenameMatch = path.basename(inputPath, ".md").match(CHAPTER_ID_PATTERN);
  if (filenameMatch && expectedId !== path.basename(inputPath, ".md")) {
    problems.push(`filename implies "${path.basename(inputPath, ".md")}" but front matter season/episode/chapter imply "${expectedId}" - one of them is wrong`);
  }

  if (Array.isArray(data.povs)) {
    data.povs.forEach((pov, index) => {
      if (!pov || isBlank(pov.id) || isBlank(pov.label)) {
        problems.push(`povs[${index}] needs both an "id" and a "label"`);
      }
    });
  }

  return problems;
}

function main() {
  const files = findMarkdownFiles(SRC_DIR);
  const fileProblems = [];

  for (const filePath of files) {
    const relativePath = path.relative(process.cwd(), filePath);
    const { data } = matter(fs.readFileSync(filePath, "utf8"));

    let schema = TYPES_BY_LAYOUT.get(data.layout);
    let isChapter = schema === CONTENT_TYPES.chapter;

    if (!schema && isTimelineEntry(filePath)) {
      schema = TIMELINE_TYPE;
    }

    if (!schema) continue; // Not a recognized content-leaf type - nothing to check.

    const problems = checkAgainstSchema(data, schema);
    if (isChapter) problems.push(...checkChapterConsistency(filePath, data));

    if (problems.length) {
      fileProblems.push({ relativePath, label: schema.label, problems });
    }
  }

  if (fileProblems.length === 0) {
    console.log(`Content validation passed (${files.length} files checked).`);
    return;
  }

  console.error(`Content validation failed in ${fileProblems.length} file(s):\n`);
  for (const { relativePath, label, problems } of fileProblems) {
    console.error(`${relativePath} (${label}):`);
    for (const problem of problems) {
      console.error(`  - ${problem}`);
    }
  }
  process.exitCode = 1;
}

main();
