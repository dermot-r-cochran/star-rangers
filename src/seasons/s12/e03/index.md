---
layout: base.njk
title: "Episode 3"
eleventyComputed:
  description: "Chapters in Season 12, Episode 3 of {{ site.name }}."
permalink: /seasons/s12/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s12/">Season 12</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 12 · Episode 3</h1>
<p class="page-intro">
  The deep side, some tellings after the light went round it. Two small ones cannot agree which way the bright one was
  looking, and both of them were there, so the people's one way of settling an argument comes back with two answers. The
  smallest means to be the one who tells it to the ones not born yet, on the ground of being here longest, and stands up
  to try, and is corrected from every side, because nobody who was there can hold still for a telling. Then
  Stone-First-Who-Waited comes down from the line and asks what wall. Everyone was there, and not one of them for all of
  it. So it is told the old way after all, a piece at a time, each piece from the one who was there for it; and Stone-First
  has a piece about the people that the people did not have. It has its edges now. It still has no middle.
</p>

{% set seasonNumber = "12" %}
{% set episodeNumber = "3" %}
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
