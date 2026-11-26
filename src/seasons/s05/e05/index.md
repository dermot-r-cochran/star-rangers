---
layout: base.njk
title: "Episode 5"
eleventyComputed:
  description: "Chapters in Season 5, Episode 5 of {{ site.name }}."
permalink: /seasons/s05/e05/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s05/">Season 5</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 5 · Episode 5</h1>
<p class="page-intro">
  The three days before the data exchange, on Tír na nÓg. Union protocol gives a Star Ranger on leave an honour escort from the moment she is met, and somebody has to go up the hill first and decide where four of the Guard will stand. The liaison at the gate files the order and may not amend a line of it. The flockholder has a rule of the house and no reason to give for it. The sergeant between them has to read an order written at a desk on ground the desk has never seen.
</p>

{% set seasonNumber = "5" %}
{% set episodeNumber = "5" %}
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
