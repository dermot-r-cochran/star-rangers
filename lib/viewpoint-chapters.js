// A character page's "Viewpoint chapters" list (src/_includes/character.njk).
// Dermot, 2026-11-24, asked "Should each character page list their episodes
// and chapters?" and answered the recommendation, "Yes, as recommended": the
// chapters told partly from the character's point of view, derived from each
// chapter's `povs:` (never maintained by hand), grouped by season, in reading
// order. Mentions are left out: nothing in the record marks them reliably.
//
// `chapters` is the build's chapters collection, already narrowed to the
// edition, so a page lists only chapters its edition carries. `ids` are the
// values a chapter's `povs:` may use for this character: its `id` and its
// filename slug. `visible(pov)` drops a POV the edition's tier hides.

function viewpointChapters(chapters, ids, visible = () => true) {
  const wanted = new Set((ids || []).filter(Boolean).map((id) => String(id).toLowerCase()));
  const seasons = new Map();
  for (const chapter of chapters || []) {
    const data = chapter.data || {};
    const mine = (data.povs || []).some(
      (p) => p && wanted.has(String(p.id).toLowerCase()) && visible(p)
    );
    if (!mine) continue;
    if (!seasons.has(data.season)) seasons.set(data.season, { season: data.season, chapters: [] });
    seasons.get(data.season).chapters.push({
      code: String(data.id || "").toUpperCase(),
      title: data.title,
      url: chapter.url,
      episode: data.episode,
    });
  }
  return Array.from(seasons.values());
}

module.exports = { viewpointChapters };
