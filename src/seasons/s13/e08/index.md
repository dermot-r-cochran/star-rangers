---
layout: base.njk
title: "Episode 8"
eleventyComputed:
  description: "Chapters in Season 13, Episode 8 of {{ site.name }}."
permalink: /seasons/s13/e08/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s13/">Season 13</a></li>
    <li aria-current="page">Episode 8</li>
  </ol>
</nav>

<h1 class="page-title">Season 13 · Episode 8</h1>
<p class="page-intro">
  Entered Three Ways. A coda to the season, set after its last boat. The old Crown dies at the end of the storm season, and in the survey's fourth year a crowning is held under the Elder Grove. This episode is that one day, three times, a chapter to each record. Under the fig the chronicle is said through by the court's reciters and every house's together, and a Knight's youngest says her line alone and stops where a name goes. On Aduine the Abbey keeps its ordinary day, and the Long Accounting takes the crowning after the evening office, in one line, in the hand. At the compound the delegation, which was told the day and not asked to it, files what its instrument had and what it overheard, and a list of what it has not been told.
</p>
<p class="page-intro">
  This episode reads on its own. A reader of the season will know the door past the ninth, the name the Abbey does not offer, and the grey case on the floor of the room, and will find that nobody in these three chapters holds more than one of the three records.
</p>

{% set seasonNumber = "13" %}
{% set episodeNumber = "8" %}
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
