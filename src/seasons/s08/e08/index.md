---
layout: base.njk
title: "Episode 8"
eleventyComputed:
  description: "Chapters in Season 8, Episode 8 of {{ site.name }}."
permalink: /seasons/s08/e08/
# Season 8 is the tier-gated church-space thread; index pages have no season front
# matter of their own, so they carry the thread id explicitly (see e01).
threadId: church-space
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s08/">Season 8</a></li>
    <li aria-current="page">Episode 8</li>
  </ol>
</nav>

<h1 class="page-title">Season 8 · Episode 8</h1>
<p class="page-intro">
  A coda to the season, set after its last Thursday. In the late autumn of 2828 a letter went down the hill, and the carrier said the Keeper would be the spring getting anything back, if there was anything. This is the early spring of 2829: the first warm day, and the hive that went into the frost on a slab of boiled sugar is opened. Two days later the carrier comes up the lane with something inside her coat, and says before he sees it that it is not a letter.
</p>
<p class="page-intro">
  This episode reads on its own. A reader of the season will know the hives, the two columns and the forty seconds, and what was sent in <a href="/star-rangers/seasons/s08/e07/">Episode 7</a>.
</p>

{% set seasonNumber = "8" %}
{% set episodeNumber = "8" %}
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
