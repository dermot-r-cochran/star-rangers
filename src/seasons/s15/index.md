---
layout: base.njk
title: "Season 15"
eleventyComputed:
  description: "Episodes and chapters in Season 15 of {{ site.name }}."
permalink: /seasons/s15/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 15</li>
  </ol>
</nav>

<h1 class="page-title">Season 15</h1>
<p class="page-intro">
  Threshold Station, in the years after <a href="/star-rangers/seasons/s07/">Season 7</a>. The Dock Seven file is still open and the reading is still taken at each change of shift. The people who take it have forty other lines on the sheet, and the season begins among those.
</p>
<p class="page-intro">
  Season 15 returns to Tissadelle Shepherd's arc, and it keeps no year. Each chapter gives a season of the year and no more. Read <a href="/star-rangers/seasons/s05/">Seasons 5</a>, <a href="/star-rangers/seasons/s06/">6</a> and 7 first; this page says nothing about where the season goes.
</p>
<p class="page-intro">
  Episode 1 is one afternoon watch on the boundary desk and the change of shift after it. Episode 2 is one working day in the High Captain's office, in a deep winter. Episode 3 is one morning at a kitchen table, on the hill that was kept for her. Episode 4 is one night watch on the floor below that hill, and the morning after. Each of the four reads on its own. Episode 5 is one morning, on that hill and on the station, and it is read after them.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (15 | threadForSeason).id }}/">{{ (15 | threadForSeason).name }}</a></p>

{% set seasonNumber = "15" %}
{% include "season-portraits.njk" %}
{% set hasSeasonChapters = false %}
{% set currentEpisode = "" %}
{% for chapter in collections.chapters %}
  {%- if (chapter.data.season ~ "") == seasonNumber -%}
    {%- if not hasSeasonChapters %}{% set hasSeasonChapters = true %}{% endif -%}
    {%- set episodeValue = chapter.data.episode ~ "" -%}
    {%- if episodeValue != currentEpisode -%}
      {%- if currentEpisode %}</ul></div>{% endif -%}
      {%- set currentEpisode = episodeValue -%}
      <div class="season-block">
        <h2 class="season-block__title">
          <a href="/star-rangers/seasons/s15/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
        </h2>
        <ul class="chapter-list" role="list">
    {%- endif -%}
          <li class="chapter-list__item">
            <a href="/star-rangers{{ chapter.url }}">
              <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
              <span class="chapter-list__title">{{ chapter.data.title }}</span>{%- set mins = chapter | readingMinutes -%}{% if mins %}<span class="chapter-list__time">about {{ mins }} min</span>{% endif %}
              {%- if chapter.data.location -%}
              <span class="chapter-list__loc">{{ chapter.data.location }}</span>
              {%- endif -%}
            </a>
          </li>
  {%- endif -%}
{% endfor %}
{% if hasSeasonChapters %}
  </ul></div>
{% else %}
  <p class="page-intro">This edition carries no chapters of this season.</p>
{% endif %}

{% include "season-nav.njk" %}
