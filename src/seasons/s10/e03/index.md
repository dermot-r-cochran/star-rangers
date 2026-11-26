---
layout: base.njk
title: "Episode 3"
eleventyComputed:
  description: "Chapters in Season 10, Episode 3 of {{ site.name }}."
permalink: /seasons/s10/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s10/">Season 10</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 10 · Episode 3</h1>
<p class="page-intro">
  The crew's way home. Between one ship and the next there is a soft sleeve with nothing in it to stand on, and for the length of it four people who have never been out of contact with a structure are carried through foam, one at a time, by handlers who are kind. One of the four has memorised the crossing. One has only what was heard on Eden, with nothing under it.
</p>

{% set seasonNumber = "10" %}
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
  <p class="page-intro">This edition carries no chapters of this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
