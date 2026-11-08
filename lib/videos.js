"use strict";

// The clips and films that get a watch page of their own (/watch/<id>/), so
// that video search can index them. Google indexes a video only where it is
// the main content of its page; embedded half-way down a lore entry it is
// "not on a watch page" and is skipped, which is why none of these appeared
// in a video search (Dermot, 7 November 2026). The host page stays the
// video's home: the watch page shows the player, the caption the host page
// already carries, and a link back.
//
// `page` is the host page's URL as Eleventy gives it; a watch page builds
// only where the edition carries that page (the watchVideos collection in
// .eleventy.js). `caption` is the italic line under the player on the host
// page, copied as it stands; where the host page has none, the host page's
// own `description` is used. `uploadDate` is the day the file was added to
// the repository. Duration is read from the file itself (lib/mp4-info.js).
//
// baby-universe.mp4 is left out: it has no poster frame, and a VideoObject
// without a thumbnail is not eligible for video results. It gets a watch
// page when a poster is cut for it.
const VIDEOS = [
  { id: "the-honest-dark", page: "/lore/the-honest-dark/", uploadDate: "2026-10-08",
    caption: "A hillside instrument's ten seconds of a drithle run over a Drithane valley, the settlement below it unlit." },
  { id: "quern", page: "/lore/planets/quern/", uploadDate: "2026-10-08",
    caption: "Ten seconds from a fixed camera at the Millrace, looking along the rain toward the storm wall." },
  { id: "the-generation-ark-era", page: "/lore/the-generation-ark-era/", uploadDate: "2026-10-08",
    caption: "Ten seconds from a hull mount on a Currach-era ark's spine, looking aft, the drum turning." },
  { id: "cirrane", page: "/lore/planets/cirrane/", uploadDate: "2026-11-04",
    caption: "Ten seconds from a Federation survey probe's camera, carried in the temperate shell and looking along the shear between two bands." },
  { id: "prismere", page: "/lore/planets/prismere/", uploadDate: "2026-11-04",
    caption: "Ten seconds from a survey camera at the edge of a lumenspire grove at dusk, looking up as driftjellies ride a thermal." },
  { id: "saltmere", page: "/lore/planets/saltmere/", uploadDate: "2026-11-04",
    caption: "Ten seconds from a fixed camera on a mooring tower's upper rail, looking across open water at a platform hull riding its cables." },
  { id: "fliade", page: "/lore/planets/fliade/", uploadDate: "2026-11-04",
    caption: "Ten seconds from a survey camera in a cavern, where water drips into a pool under the fungi's steady light." },
  { id: "winterbourne", page: "/lore/planets/winterbourne/", uploadDate: "2026-11-04",
    caption: "Ten seconds from a camera at the scarp foot in late summer, as an ascent javelin climbs from beyond the down." },
  { id: "sentinel", page: "/lore/planets/sentinel/", uploadDate: "2026-11-04",
    caption: "Ten seconds walking toward a survey receiver on the plain, the neighbouring world low on the horizon." },
  { id: "verdance", page: "/lore/planets/verdance/", uploadDate: "2026-11-04",
    caption: "Ten seconds from a survey camera at a terrace edge, looking down on forest, fen and grassland, and the flood-gate across the fen." },
  { id: "odonata-raise-your-banners", page: "/codex/odonata-raise-your-banners/", uploadDate: "2026-10-07" },
  { id: "borrow-the-angle", page: "/codex/borrow-the-angle/", uploadDate: "2026-10-07" },
  { id: "the-long-white-trail", page: "/journal/the-long-white-trail/", uploadDate: "2026-10-29",
    caption: "Made as a trailer in Grok Imagine's Director from this site's address, then remade after it was asked to reread the site. The generator wrote the narration and everything in it. An impression, not the record." },
  { id: "the-up-peoples-first-stone", page: "/journal/the-up-peoples-first-stone/", uploadDate: "2026-11-06",
    caption: "Made in Grok Imagine's Director from a written brief. The narration comes mostly from the chapter's own words. An impression, not the record." }
];

module.exports = { VIDEOS };
