---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in the Founding Era, Episode 6 of {{ site.name }}."
permalink: /seasons/s00/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s00/">Founding Era</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/season-00-foundation.jpg" alt="An empty hearing chamber with tiers of pale upholstered seats facing a long pale table that holds a shut bound book, a glass and a carafe of water, a long thick window onto red Martian ground under a dusty sky, and a pale rectangle with bolt holes on the wall where something has been taken down" />
<h1 class="page-title">Founding Era · Episode 6</h1>
<p class="page-intro">
  Eden Space Habitat, three months after the signing, 2723 UCSD. The old Safety Standards Authority is a corps of the Star Rangers now, with the old heading struck through on its certificates, and its first board at Eden has to certify a transit only one of its candidates has ever flown. The method begins by asking what failure would look like. Nobody ever wrote that down.
</p>

{% set seasonNumber = "0" %}
{% set episodeNumber = "6" %}
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
