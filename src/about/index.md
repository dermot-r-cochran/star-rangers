---
layout: base.njk
title: "About the Author"
description: "About Dermot R. Cochran, creator of Star Rangers."
---
<img class="page-hero-image" src="/star-rangers/images/hero/about-writer.jpg" alt="A writer working at a desk at night" />
<h1 class="page-title">About the Author</h1>
<p class="page-intro">
  Dermot R. Cochran is a Senior Machine Learning Engineer based in Dublin, Ireland.
</p>

<h2>How this site is built</h2>
<p>
  Star Rangers is a static site built with <a href="https://www.11ty.dev/">Eleventy</a>.
  Content lives as Markdown and Nunjucks templates in this repository's <code>src/</code>
  directory; <code>npm run build</code> runs Eleventy to compile it into the static
  <code>_site/</code> output, <code>npm run start</code> serves it locally with live
  reload, and <code>npm test</code> runs an Eleventy dry-run build in CI on every pull
  request, alongside a ShellCheck pass over the deployment scripts.
</p>

<h2>How this site is deployed</h2>
<p>
  Two deployments run from this repository. A GitHub Actions workflow builds the site
  with Eleventy on every push to <code>main</code> and publishes the result to
  <a href="https://dermot-r-cochran.github.io/star-rangers/">GitHub Pages</a>. Separately,
  cPanel-hosted clones of the site pull updates via cPanel's Git Version Control feature,
  driven by <code>.cpanel.yml</code> and <code>scripts/cpanel-deploy.sh</code>, which build
  the site with Eleventy and copy it into <code>public_html</code>. Each cPanel clone reads
  its own untracked <code>deploy.conf</code> to choose a CSS theme and, optionally, narrow
  the deployed content to a subset of characters or topics.
</p>
