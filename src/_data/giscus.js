// Config for the giscus comment widget (see src/_includes/base.njk), which
// stores every page's comment thread as a GitHub Discussion. Deliberately
// points at a separate, public comments-only repo rather than this source
// repo, so reader/fan discussion never mixes with dev-facing Discussions
// here and stays stable across any rename/fork/transfer of this repo.
// giscus needs the numeric repo/category IDs (not just names) - get them by
// installing the giscus app on that repo and running its config wizard at
// https://giscus.app, then paste the generated data-repo-id/data-category-id
// pairs in below. See README.md's "Discussion forum" section for the full
// category setup this maps onto.
//
// GISCUS_REPO/GISCUS_REPO_ID/GISCUS_CATEGORY_{CHARACTERS,LORE,EPISODES,JOURNAL}_ID
// let one cPanel clone point at its own, separate comments repo instead of
// the shared default below - scripts/cpanel-deploy.sh exports these from
// deploy.conf the same way it does THEME/SITE_NAME/etc (see that script and
// sample-deploy.conf). This is for a domain whose readers shouldn't share a
// Discussions board with the main site's - e.g. church-space.site/.online
// using Star-Rangers/churchspace-site-comments - not for routine per-domain
// customization, since every clone sharing one comments repo (the default,
// unset case) is what keeps community discussion in one place.
module.exports = function () {
  return {
    repo: process.env.GISCUS_REPO || "Star-Rangers/sciencefiction-site-comments",
    repoId: process.env.GISCUS_REPO_ID || "R_kgDOTXRNGg",
    categories: {
      characters: { name: "Characters", id: process.env.GISCUS_CATEGORY_CHARACTERS_ID || "DIC_kwDOTXRNGs4DBHee" },
      lore: { name: "Lore & Worldbuilding", id: process.env.GISCUS_CATEGORY_LORE_ID || "REPLACE_WITH_CATEGORY_ID" },
      episodes: { name: "Episodes Discussion", id: process.env.GISCUS_CATEGORY_EPISODES_ID || "DIC_kwDOTXRNGs4DBIw2" },
      journal: { name: "Journal", id: process.env.GISCUS_CATEGORY_JOURNAL_ID || "REPLACE_WITH_CATEGORY_ID" }
    }
  };
};
