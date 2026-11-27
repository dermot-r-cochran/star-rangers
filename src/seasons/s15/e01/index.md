---
layout: base.njk
title: "Episode 1"
eleventyComputed:
  description: "Chapters in Season 15, Episode 1 of {{ site.name }}."
permalink: /seasons/s15/e01/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s15/">Season 15</a></li>
    <li aria-current="page">Episode 1</li>
  </ol>
</nav>

<h1 class="page-title">Season 15 · Episode 1</h1>
<p class="page-intro">
  A man from Dock Seven comes up to the boundary desk for a copy of one line of the sheet, and for the first time he has brought no question with him. At ten the Analyst relieves the watch, takes the reading that is hers to take, and opens the drift log at the oldest entry in it.
</p>
<p class="page-intro">
  One afternoon watch and the change after it, in a later summer. It reads on its own, and it settles nothing the earlier seasons left open.
</p>

{% set seasonNumber = "15" %}
{% set episodeNumber = "1" %}
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
