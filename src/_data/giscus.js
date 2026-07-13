// Config for the giscus comment widget (see src/_includes/base.njk), which
// stores every page's comment thread as a GitHub Discussion on this repo.
// giscus needs the numeric repo/category IDs (not just names) - get them by
// installing the giscus app on the repo and running its config wizard at
// https://giscus.app, then paste the generated data-repo-id/data-category-id
// pairs in below. See README.md's "Discussion forum" section for the full
// category setup this maps onto.
module.exports = {
  repo: "dermot-r-cochran/star-rangers",
  repoId: "REPLACE_WITH_REPO_ID",
  categories: {
    characters: { name: "Characters", id: "REPLACE_WITH_CATEGORY_ID" },
    lore: { name: "Lore & Worldbuilding", id: "REPLACE_WITH_CATEGORY_ID" },
    episodes: { name: "Episode Discussion", id: "REPLACE_WITH_CATEGORY_ID" }
  }
};
