---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 15, Episode 4 of {{ site.name }}."
permalink: /seasons/s15/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s15/">Season 15</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 15 · Episode 4</h1>
<p class="page-intro">
  Below the hill that was kept for her there is another floor, and Tobble keeps a watch on it. The ship's records still stand there in their ranges. The last line stops at 0551, and past it is a place that has never closed. Things come to it one at a time and call, and he writes down what each one asked and what it was given.
</p>
<p class="page-intro">
  One night of that watch and the morning after, in a later autumn by her reckoning. Another member of the system comes down to sit the end of it with him. It reads on its own, and it settles nothing the earlier seasons left open.
</p>

{% set seasonNumber = "15" %}
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
