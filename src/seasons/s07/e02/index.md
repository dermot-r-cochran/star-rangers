---
layout: base.njk
title: "Episode 2"
eleventyComputed:
  description: "Chapters in Season 7, Episode 2 of {{ site.name }}."
permalink: /seasons/s07/e02/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s07/">Season 7</a></li>
    <li aria-current="page">Episode 2</li>
  </ol>
</nav>

<h1 class="page-title">Season 7 · Episode 2</h1>
<p class="page-intro">
  The Oversight Council answers the account. Wender has spent nine days getting ready to be told she is wrong, and what comes back is a receipt, one question about an instrument, and a room that has said exactly as much as it can stand behind.
</p>
<p class="page-intro">
  A short episode, and it reads on its own: one working day in the High Captain's office, in the deep winter after the account was sent.
</p>

{% set seasonNumber = "7" %}
{% set episodeNumber = "2" %}
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
