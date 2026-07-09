module.exports = function () {
  // SITE_DOMAIN is exported by scripts/cpanel-deploy.sh from deploy.conf's
  // DOMAIN key (see that script) so robots.txt and sitemap.xml carry the
  // right absolute host per cPanel clone. Left unset for local dev and the
  // GitHub Pages workflow, which both want the GH Pages URL itself.
  const domain = String(process.env.SITE_DOMAIN || "dermot-r-cochran.github.io/star-rangers").replace(/\/+$/, "");

  return {
    title: "Star Rangers",
    description: "The stars call us forward with hope; to protect what is good and to see what is true. An interactive science-fantasy novel grounded in speculative cosmology — one canonical history across the Five Layers, multiple Concordants, and multiple points of view.",
    url: `https://${domain}/`,
    author: "Star Rangers",
    language: "en"
  };
};
