// Computed once per build (module load), so every page in a single build
// shares the same value.
const BUILD_TIME = Date.now();

module.exports = function () {
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  return {
    year: currentYear,
    copyrightYears: currentYear > startYear ? `${startYear}\u2013${currentYear}` : `${startYear}`,
    // Cache-busting token appended to same-origin CSS/JS URLs (see base.njk).
    // Changes on every build, so a rebuilt/redeployed site never serves a
    // stale main.css or JS from a browser/CDN cache - which matters here
    // because scripts/cpanel-deploy.sh rewrites _site/css/main.css (theme
    // swap + optional CUSTOM_CSS_FILE) AFTER Eleventy runs, so a build-time
    // content hash of the source file wouldn't reflect what's actually
    // served. A per-build token busts cache uniformly regardless of theme.
    assetVersion: BUILD_TIME.toString(36),
  };
};
