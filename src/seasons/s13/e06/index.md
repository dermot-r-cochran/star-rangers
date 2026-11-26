---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in Season 13, Episode 6 of {{ site.name }}."
permalink: /seasons/s13/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s13/">Season 13</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<h1 class="page-title">Season 13 · Episode 6</h1>
<p class="page-intro">
  The Second Thing. The survey's side, at the compound on Vellamar, and the season's one episode with no Kingdom viewpoint in it. A request comes down from the Science Corps on the strength of the Krilzat log: ask the court to let a second instrument be set beside the first, of the one kind that would tell two of the junior linguist's three readings apart, and raise the band on the second reading meanwhile. The senior linguist is asked to concur in the raising on the evidence of a word he chose himself, two years before there was a log, and declines to be his own corroboration. The Chief Ranger is asked to forward the instrument. It is a good request, and she would like it granted, and the linguist whose readings it would sort asks her not to send it. She spends an evening working out what the first thing was, and writes that the delegation has not yet understood what it was given.
</p>

{% set seasonNumber = "13" %}
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
  <p class="page-intro">No chapters published yet for this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
