---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in Season 5, Episode 6 of {{ site.name }}."
permalink: /seasons/s05/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s05/">Season 5</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/s05e02-hill-holding.jpg" style="object-position: center 70%" alt="Open upland pasture in September sun, divided by dry-stone walls and banks, with a gorse knoll and a flock of sheep scattered across the high fields; below it a band of broadleaf wood just turning gold, and at its foot a mown hill pasture where a low longhouse of weathered pale grey fieldstone stands on the rough grass: a seamless dark roof, an open door in the left-hand gable above a flat stone step, a small dark capsule in a recess high in the same gable, two deep windows in the long wall, a dark conduit under the eave, a low dry-stone yard wall at the far end, and a line of slim grey pale-capped posts along the edge of the pasture, with a conifer at the right" />
<h1 class="page-title">Season 5 · Episode 6</h1>
<p class="page-intro">
  Line Captain Tissadelle Shepherd carries a data exchange to Tír na nÓg under the Celtic Union's standing agreement with the Survey Corps, then stays on for personal leave. The uniform comes off at the council house door. What she notices on her mother's hillside afterward does not. The survey she files on her return sends a hull to the Threshold approaches ten days later, and the episode ends where every chapter of the two seasons after it begins: at Dock Seven, looking back.
</p>

{% set seasonNumber = "5" %}
{% set episodeNumber = "6" %}
{% set hasEpisodeChapters = false %}
<ul class="chapter-list" role="list">
{% for chapter in collections.chapters %}
  {%- if (chapter.data.season ~ "") == seasonNumber and (chapter.data.episode ~ "") == episodeNumber -%}
    {%- if not hasEpisodeChapters %}{% set hasEpisodeChapters = true %}{% endif -%}
    <li class="chapter-list__item">
      <a href="/star-rangers{{ chapter.url }}">
        <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
        <span class="chapter-list__title">{{ chapter.data.title }}</span>{%- set mins = chapter | readingMinutes -%}{% if mins %}<span class="chapter-list__time">about {{ mins }} min</span>{% endif %}
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
  <p class="page-intro">This edition carries no chapters of this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
