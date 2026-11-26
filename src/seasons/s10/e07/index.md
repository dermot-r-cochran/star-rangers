---
layout: base.njk
title: "Episode 7"
eleventyComputed:
  description: "Chapters in Season 10, Episode 7 of {{ site.name }}."
permalink: /seasons/s10/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s10/">Season 10</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 10 · Episode 7</h1>
<p class="page-intro">
  The season's last episode, some months after the inspection. On Eden the mended mount is certified, and the form that started everything comes up the ring again, this time with both documents in it. In the Undersong Belt a final certification reaches the crew that wrote the first line, saying in the old words that the mount is sound. Two strands still, and no shared room: on each side, somebody who cannot stand on a structure decides how far to believe what is written about it.
</p>

{% set seasonNumber = "10" %}
{% set episodeNumber = "7" %}
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
