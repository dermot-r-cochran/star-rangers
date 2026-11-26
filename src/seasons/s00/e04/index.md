---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in the Founding Era, Episode 4 of {{ site.name }}."
permalink: /seasons/s00/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s00/">Founding Era</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/season-00-foundation.jpg" alt="An empty hearing chamber with tiers of pale upholstered seats facing a long pale table that holds a shut bound book, a glass and a carafe of water, a long thick window onto red Martian ground under a dusty sky, and a pale rectangle with bolt holes on the wall where something has been taken down" />
<h1 class="page-title">Founding Era · Episode 4</h1>
<p class="page-intro">
  Halyard Station, six weeks after the signing, 2723 UCSD. The charter has given the outer stations a seat on the one body the new corps answers to, and Halyard's council has settled who will fill it the way it settles everything: on a sheet, before the session. The delegate who wrote the limits comes home and will not take the seat. A council of people coming off shift has to decide something in the room, and count.
</p>

{% set seasonNumber = "0" %}
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
