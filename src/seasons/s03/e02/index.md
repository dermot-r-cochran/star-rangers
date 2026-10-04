---
layout: base.njk
title: "Episode 2"
description: "Chapters in Season 3, Episode 2 — Shepherd back on general operations at Threshold, a transit window stated as a band, and the Chief Pilot in a room the room did not require."
permalink: /seasons/s03/e02/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s03/">Season 3</a></li>
    <li aria-current="page">Episode 2</li>
  </ol>
</nav>

<h1 class="page-title">Season 3 · Episode 2</h1>
<p class="page-intro">
  Back from the Survey track and holding Section Lead at Threshold, Shepherd is asked for a transit window through the oscillation the station has logged for thirteen years, and states the band the readings support where the room wants the point the traffic plan was built on. Chief Pilot Wender is at the end of the table, which no briefing required, and says the one sentence a Chief Pilot has unarguable standing to say. Afterwards, each of them counts the rooms, and neither says so.
</p>

{% set seasonNumber = "3" %}
{% set episodeNumber = "2" %}
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
