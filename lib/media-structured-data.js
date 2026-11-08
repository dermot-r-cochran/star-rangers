"use strict";

// schema.org ImageObject and VideoObject JSON-LD for image and video search,
// the same shape the photography site's lib/structured-data.js uses, with
// the terms this repository's CONTENT-LICENSE.md states: the pictures and
// clips are part of the work, CC BY-NC-ND 4.0, to the extent the author
// holds rights in them. A third-party image keeps its own terms
// (CONTENT-LICENSE.md names the one), so it carries its credit and nothing
// that would claim it.
//
// No per-image claim about how a picture was made: the About page says most
// are generated and some are the author's photographs, and nothing in the
// front matter records which is which, so a blanket label would be wrong
// for some of them.

const AUTHOR = { "@type": "Person", name: "Dermot R. Cochran" };
const LICENSE = "https://creativecommons.org/licenses/by-nc-nd/4.0/";

const THIRD_PARTY = {
  "/images/lore/noogenic-seeding-system.jpg": {
    creditText: "NASA, ESA, CSA and STScI (the Cosmic Cliffs in the Carina Nebula, James Webb Space Telescope), with a motif added"
  }
};

function rights(src, siteUrl, workName) {
  const third = THIRD_PARTY[src];
  if (third) return { creditText: third.creditText };
  return {
    creator: AUTHOR,
    copyrightHolder: AUTHOR,
    creditText: `Dermot R. Cochran, ${workName}`,
    copyrightNotice: "© Dermot R. Cochran",
    license: LICENSE,
    acquireLicensePage: new URL("licence/", siteUrl).toString()
  };
}

function absolute(pathname, siteUrl) {
  return new URL(String(pathname).replace(/^\/+/, ""), siteUrl).toString();
}

// `src` is a site path without the /star-rangers prefix (as computeOgImage
// returns it), `pageUrl` the page's Eleventy URL.
function imageObject({ src, alt, pageUrl, siteUrl, workName }) {
  if (!src) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: absolute(src, siteUrl),
    url: absolute(pageUrl, siteUrl),
    ...(alt ? { description: alt, caption: alt } : {}),
    ...rights(src, siteUrl, workName),
    isPartOf: { "@type": "CreativeWork", name: workName, url: siteUrl }
  };
}

function videoObject({ name, description, id, uploadDate, duration, watchUrl, hostUrl, siteUrl, workName }) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: absolute(`/video/${id}-poster.jpg`, siteUrl),
    contentUrl: absolute(`/video/${id}.mp4`, siteUrl),
    uploadDate,
    ...(duration ? { duration } : {}),
    url: absolute(watchUrl, siteUrl),
    ...rights(`/video/${id}.mp4`, siteUrl, workName),
    isPartOf: { "@type": "CreativeWork", name: workName, url: siteUrl },
    subjectOf: { "@type": "WebPage", url: absolute(hostUrl, siteUrl) }
  };
}

// JSON for a <script type="application/ld+json"> block. `<` is escaped so a
// caption can never close the script element.
function jsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

module.exports = { imageObject, videoObject, jsonLd, THIRD_PARTY };
