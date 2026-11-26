---
layout: base.njk
title: "Episode 7"
eleventyComputed:
  description: "Chapters in Season 12, Episode 7 of {{ site.name }}."
permalink: /seasons/s12/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s12/">Season 12</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 12 · Episode 7</h1>
<p class="page-intro">
  The season's last episode, from both sides of the line, late in the year. Nothing has come for a long time. Below,
  the warm is not sleeping well, because the ground never said the shapes had come and so cannot say they have stopped,
  and the smallest asks to go back to the seep with Went-Round, so that this time two are there. The seep is the seep.
  The smallest wants to stay and sleep there until it comes, and Went-Round says what every small one is told, that you
  do not sleep on a beginning, and is asked why, and finds there has never been a reason, only the telling. On the line,
  Stone-First-Who-Waited stops keeping a place nobody asked Stone-First to keep. Above, the knock is a knock again, and
  Aravena's light still goes an arm's length to the side every shift and finds silt. Egede wants to know what the
  number in the survey lead's column is a count of. Ferrant has a page that says that stretch of silt is like any
  other, and would not set a stone on it either. Nakagawa writes the plainest entry in the log, and for the first time
  it says how many were there to answer. Nothing is explained, and nobody tells anybody anything.
</p>

{% set seasonNumber = "12" %}
{% set episodeNumber = "7" %}
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

{% include "episode-nav.njk" %}
