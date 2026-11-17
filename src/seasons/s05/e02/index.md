---
layout: base.njk
title: "Episode 2"
eleventyComputed:
  description: "Chapters in Season 5, Episode 2 of {{ site.name }}."
permalink: /seasons/s05/e02/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s05/">Season 5</a></li>
    <li aria-current="page">Episode 2</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/s05e02-hill-holding.jpg" alt="A steep upland hillside of dark pines and rust-brown larches under a pale sky, a line of wind-shaped pines along the open ridge above, and below it a low longhouse of weathered pale grey fieldstone with a seamless dark roof at the edge of a green pasture: two deep windows with rounded corners in its long wall, a dark conduit under the eave turning down the corner, an open door in the gable above a flat stone step, a small dark capsule resting in an arched recess high in the same gable, and a low dry-stone yard wall running back from its left end, with slim grey pale-capped posts along the field and rushes in the foreground" />
<h1 class="page-title">Season 5 · Episode 2</h1>
<p class="page-intro">
  Line Captain Tissadelle Shepherd carries a data exchange to Tír na nÓg under the Celtic Union's standing agreement with the Survey Corps, then stays on for personal leave. The uniform comes off at the council house door. What she notices on her mother's hillside afterward does not. The survey she files on her return sends a hull to the Threshold approaches ten days later, and the episode ends where every chapter of the two seasons after it begins: at Dock Seven, looking back.
</p>

{% set seasonNumber = "5" %}
{% set episodeNumber = "2" %}
{% set hasEpisodeChapters = false %}
<ul class="chapter-list" role="list">
{% for chapter in collections.chapters %}
  {%- if (chapter.data.season ~ "") == seasonNumber and (chapter.data.episode ~ "") == episodeNumber -%}
    {%- if not hasEpisodeChapters %}{% set hasEpisodeChapters = true %}{% endif -%}
    <li class="chapter-list__item">
      <a href="/star-rangers{{ chapter.url }}">
        <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
        <span class="chapter-list__title">{{ chapter.data.title }}</span>
        {%- if chapter.data.location -%}
        <span class="chapter-list__loc">{{ chapter.data.location }}</span>
        {%- endif -%}
        {%- if chapter.data.description -%}
        <span class="chapter-list__desc">{{ chapter.data.description }}</span>
        {%- endif -%}
      </a>
    </li>
  {%- endif -%}
{% endfor %}
</ul>
{% if not hasEpisodeChapters %}
  <p class="page-intro">No chapters published yet for this episode.</p>
{% endif %}
