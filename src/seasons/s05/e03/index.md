---
layout: base.njk
title: "Episode 3"
eleventyComputed:
  description: "Chapters in Season 5, Episode 3 of {{ site.name }}."
permalink: /seasons/s05/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s05/">Season 5</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 5 · Episode 3</h1>
<p class="page-intro">
  Three weeks after Halyx, on the inspection circuit, a fold approach is shut because its inner marker has stopped answering, close in to an active star. The order that sends a scout to look at it is the first Line Captain Shepherd signs for work she will not be standing beside. Sethka Ru reads the star before he believes the brief. She sits on a hull at the outer marker with four lines out where she cannot reach them, and finds out what the waiting is made of.
</p>

{% set seasonNumber = "5" %}
{% set episodeNumber = "3" %}
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
  <p class="page-intro">No chapters published yet for this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
