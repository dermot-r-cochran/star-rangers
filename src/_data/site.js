module.exports = function () {
  // SITE_DOMAIN is exported by scripts/cpanel-deploy.sh from deploy.conf's
  // DOMAIN key (see that script) so robots.txt and sitemap.xml carry the
  // right absolute host per cPanel clone. Left unset for local dev and the
  // GitHub Pages workflow, which both want the GH Pages URL itself.
  const domain = String(process.env.SITE_DOMAIN || "dermot-r-cochran.github.io/star-rangers").replace(/\/+$/, "");

  // SITE_NAME and SITE_TITLE are likewise exported by scripts/cpanel-deploy.sh
  // from deploy.conf's own SITE_NAME/SITE_TITLE keys, letting a clone brand
  // itself independently of the shared repo default. SITE_NAME is the short
  // brand shown in the header logo and footer; SITE_TITLE is the browser
  // <title> tag's own suffix (see src/_includes/base.njk) - kept separate so
  // a clone can put a longer/different string in the tab title than in its
  // on-page branding without needing two unrelated overrides.
  const name = process.env.SITE_NAME || "Star Rangers";
  const title = process.env.SITE_TITLE || "Star Rangers";

  return {
    name,
    title,
    description: "The stars call us forward with hope; to protect what is good and to see what is true. An interactive science-fantasy novel grounded in speculative cosmology — one canonical history across the Five Layers, multiple Concordants, and multiple points of view.",
    url: `https://${domain}/`,
    author: "Star Rangers",
    language: "en"
  };
};
