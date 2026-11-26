---
layout: base.njk
title: "Episode 12"
eleventyComputed:
  description: "Chapters in Season 2, Episode 12 of {{ site.name }}."
permalink: /seasons/s02/e12/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s02/">Season 2</a></li>
    <li aria-current="page">Episode 12</li>
  </ol>
</nav>

<h1 class="page-title">Season 2 · Episode 12</h1>
<p class="page-intro">
  A row of nine doors on Deck 7 keeps going dark, at hours nobody can find a rule for, and Eden has a
  form about it. The form does not want to know why. It wants to know when, and the one person who
  could say is waiting on a calendar that cannot be posted. A rabbit has had a copy under her blanket
  since the spring. A boy gave it to her, in case Eden wanted one.
</p>

{% set seasonNumber = "2" %}
{% set episodeNumber = "12" %}
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
<p>No chapters have been added to this episode yet.</p>
{% endif %}

{% include "episode-nav.njk" %}
