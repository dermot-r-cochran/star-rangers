---
layout: base.njk
title: "Episode 3"
eleventyComputed:
  description: "Chapters in Season 13, Episode 3 of {{ site.name }}."
permalink: /seasons/s13/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s13/">Season 13</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 13 · Episode 3</h1>
<p class="page-intro">
  Said Back. The court's strand, on Ostrel. The girl who carried the line comes home with it, and an old reciter of the court comes up to her father's creaking hall to take it from her, which is done standing and by saying it back until he can say it alone. The line stops where a name would go, and after fifty-one years of lines that close he has to learn to stop there too. Kalenjar is polite about a Knight's youngest and her open door. Then the reciter climbs the Abbey's steps at the next calm and comes home with what the book answered, and the harbour has it before his boat is made fast: the room is in the book, and was always there. She takes the harbour's new face for belief in her. Then he tells her the rest in her father's hall, that the book has a name and he did not ask for it, and that night she says the same words at the same pace with the same stop, and finds it is no longer the same line.
</p>

{% set seasonNumber = "13" %}
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
  <p class="page-intro">No chapters published yet for this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
