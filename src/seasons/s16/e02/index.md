---
layout: base.njk
title: "Episode 2"
eleventyComputed:
  description: "Chapters in Season 16, Episode 2 of {{ site.name }}."
permalink: /seasons/s16/e02/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s16/">Season 16</a></li>
    <li aria-current="page">Episode 2</li>
  </ol>
</nav>

<h1 class="page-title">Season 16 · Episode 2</h1>
<p class="page-intro">
  The survey side, in its fifth year on the ground, on the day of the supply run and the four mornings after it. Egede has a list of everything the station is waiting to hear, and the run brings all three lines of it in one bag. The instrument desk asks what the event is. The boundary side has read the third line of Ferrant's statement, and agrees. And the survey lead, who wrote to the Corps for one more person, is sent a page that asks about the whole station, in the words that were once put to Ferrant: state a continuing need at grade.
</p>
<p class="page-intro">
  Then Nakagawa sleeps on it four times. Egede writes the case for staying, failure modes first. Ferrant grades it. Aravena is asked. Two chapters, and a whole short story, with a knock on the line every morning of it, each one the same as the last.
</p>

{% set seasonNumber = "16" %}
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
