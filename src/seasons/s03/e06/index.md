---
layout: base.njk
title: "Episode 6"
description: "Chapters in Season 3, Episode 6 — a side-light on the autumn of 2829, before the list of Episode 3: the last four days of the Starwarden who held the fold-approach post before Shepherd, and the Line Captain who hears how he left it."
permalink: /seasons/s03/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s03/">Season 3</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<h1 class="page-title">Season 3 · Episode 6</h1>
<p class="page-intro">
  A side-light, and one chapter. The autumn of 2829, in the days before the post of Episode 3 fell open. The Starwarden who has held it two years and seven months is ordered up to a ship, and finds that there is very little a departing officer can properly leave: he resets the chair and sets it back, leaves his charts where they hang, offers the Chief a statement there is no form for, and asks once who will stand his watch.
</p>
<p class="page-intro">
  He signed for the post on the sill the day he came. The Chief takes it back with one line in the log. Nine hours up the relay, the Line Captain hears his account of it, thinks him careless for about an hour, and then reads the evening's summaries with a pen already in her hand.
</p>

{% set seasonNumber = "3" %}
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
