---
layout: base.njk
title: "Season 8"
threadId: church-space
eleventyComputed:
  description: "Episodes and chapters in Season 8 of {{ site.name }}."
permalink: /seasons/s08/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 8</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/church-space.jpg" style="object-position: center 60%" alt="A small roofless church of grey stone with two tall gable ends, lichened orange at the tops, stands on a green headland over a grey sea; low rock islets lie offshore and a faint far shore runs along the horizon under a heavy grey sky." />
<h1 class="page-title">Season 8</h1>
<p class="page-intro">
  The same record, kept at a different hour. Season 8 is the Church Space storyline — the watchers the wider record files under other headings: keepers, vigils, and the discipline of attending to a small steady wrongness without requiring it to explain itself. The events are the events every other season shares; this is the reading kept beside them.
</p>
<p class="page-intro">
  Episode 1 keeps one night's watch beside a hive gone a half-tone wrong, and the morning after, when the first frost reaches the stand before the Keeper does. Episodes 3 to 7 follow the Keeper of Cnoc na mBeach through a year: the uniting of a failed hive, a swarm on the day a cadet walks up the hill, the other house answering for a kind sentence that went down the hill without its weight, rendering week and the one thing the bees were never told, and a carrier who asks whether there is anything to go, when this time there is.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (8 | threadForSeason).id }}/">{{ (8 | threadForSeason).name }}</a></p>

{% set seasonNumber = "8" %}
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
          <a href="/star-rangers/seasons/s08/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
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
