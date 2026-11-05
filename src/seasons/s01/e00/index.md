---
layout: base.njk
title: "Episode 0"
description: "Prequels and side-lights to Season 1: chapters at different distances from Episode 1, from a long-voyage ship in 2788 UCSD to the autumn of the station itself."
permalink: /seasons/s01/e00/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s01/">Season 1</a></li>
    <li aria-current="page">Episode 0</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/s01e00-cat.jpg" alt="A black cat with amber eyes walking along a fallen branch towards the camera, rim-lit against a dark background" />
<h1 class="page-title">Season 1 · Episode 0</h1>
<p class="page-intro">
  What came before Episode 1, and beside it, at different distances. These chapters run from a long-voyage ship in 2788 UCSD to the autumn of the station itself, some of them years back and some in the same year. They are listed in their numbered order, not the order they happened, so each line carries its date. They read best after the station, when you know what they were before.
</p>

{% set seasonNumber = "1" %}
{% set episodeNumber = "0" %}
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
        {%- set when = chapter.data.timestamp.split(" — ")[0].split(", ") %}
        <span class="chapter-list__when">{{ when[0] }}{% if when[1] %}, {{ when[1] }}{% endif %}</span>
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
