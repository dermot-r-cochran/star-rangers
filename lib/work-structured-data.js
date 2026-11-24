"use strict";

// schema.org JSON-LD for the story's own structure, beside the image and
// video objects in lib/media-structured-data.js. It lets a search engine or a
// language model read a chapter's place in the work - chapter, episode,
// season, series - without inferring it from breadcrumbs.
//
// Only what the front matter states is emitted: title, description, the
// season / episode / chapter numbers and the `date` set by the author. No
// characters, places or canon facts are lifted out: a chapter's `povs` labels
// are reading aids, and canon status is explained in /llms.txt, which a flat
// list of facts here would undercut.
//
// A chapter hidden by this build never reaches this code: the layout swap to
// excluded.njk happens before base.njk renders, and the call sits behind a
// test on the chapter layout.

const { absolute } = require("./media-structured-data");

const AUTHOR = { "@type": "Person", name: "Dermot R. Cochran" };
const LICENSE = "https://creativecommons.org/licenses/by-nc-nd/4.0/";
const GENRE = "Science fiction";

const pad = (n) => String(n).padStart(2, "0");

function seasonName(season) {
  return Number(season) === 0 ? "Founding Era" : `Season ${season}`;
}

function series({ siteUrl, workName }) {
  return { "@type": "CreativeWorkSeries", name: workName, url: siteUrl };
}

// The whole work, for the home page.
function seriesObject({ siteUrl, workName, description }) {
  return {
    "@context": "https://schema.org",
    ...series({ siteUrl, workName }),
    ...(description ? { description } : {}),
    author: AUTHOR,
    copyrightHolder: AUTHOR,
    license: LICENSE,
    genre: GENRE,
    inLanguage: "en"
  };
}

// One chapter, nested in its episode, season and the series. `pageUrl` is the
// chapter's Eleventy URL; season and episode pages follow the permalinks in
// src/seasons/sNN/index.md and sNN/eNN/index.md.
function chapterObject({ title, description, season, episode, chapter, date, pageUrl, siteUrl, workName }) {
  if (season === undefined || episode === undefined || chapter === undefined) return null;
  const seasonPath = `/seasons/s${pad(season)}/`;
  return {
    "@context": "https://schema.org",
    "@type": "Chapter",
    name: title,
    ...(description ? { abstract: description } : {}),
    position: Number(chapter),
    url: absolute(pageUrl, siteUrl),
    ...(date ? { datePublished: String(date).slice(0, 10) } : {}),
    author: AUTHOR,
    copyrightHolder: AUTHOR,
    license: LICENSE,
    genre: GENRE,
    inLanguage: "en",
    isPartOf: {
      "@type": "Episode",
      name: `Episode ${episode}`,
      episodeNumber: Number(episode),
      url: absolute(`${seasonPath}e${pad(episode)}/`, siteUrl),
      partOfSeason: {
        "@type": "CreativeWorkSeason",
        name: seasonName(season),
        seasonNumber: Number(season),
        url: absolute(seasonPath, siteUrl)
      },
      partOfSeries: series({ siteUrl, workName })
    }
  };
}

module.exports = { chapterObject, seriesObject, seasonName };
