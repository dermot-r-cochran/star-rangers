---
layout: base.njk
title: "Episode 4"
description: "Chapters in Season 3, Episode 4 — a side-light on the winter before the fold: fourteen names from a list rehearse a ten-day carry, and a Principal writes down four minutes that no audit could have found."
permalink: /seasons/s03/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s03/">Season 3</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 3 · Episode 4</h1>
<p class="page-intro">
  A side-light, and one chapter. It is the late winter of 2829, some weeks before the fold to Counterpane in Episode 2 and well before the autumn of Episode 3: the fourteen names Shepherd put on a roster in a warm room are rehearsing custody of a practice bench, ten days under continuous watch, for a Survey Chief at a far door who has received five such carries from five departments.
</p>
<p class="page-intro">
  On the ninth night a Principal on a watch stood alone loses four minutes, finds every seal intact, and writes the four minutes in the log. The episode is what three people do with a line that nothing else would ever have shown: the man who wrote it, the Survey Chief asked to receive the carry anyway, and the Chief Ranger, who reads the log standing and then writes an entry about her own bill.
</p>

{% set seasonNumber = "3" %}
{% set episodeNumber = "4" %}
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
