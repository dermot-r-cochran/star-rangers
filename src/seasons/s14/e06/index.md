---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in Season 14, Episode 6 of {{ site.name }}."
permalink: /seasons/s14/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s14/">Season 14</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<h1 class="page-title">Season 14 · Episode 6</h1>
<p class="page-intro">
  The survey side, shift 262, the day of the supply run. It brings two things nobody on the roof asked for. The Corps' instrument desk, reading the junction unit's channels from a long way off, has found the sound channel dropping out at the start of every shift, once for forty-four minutes, and has kindly sent a new part. And the boundary side has sent its officer a page: past a year in attendance, state a continuing need at grade or come home with the run. Egede has to class a gap that is not a fault on a form with no box for it. Ferrant has to write one true line before the wind gets up, and the truest one she has is a reason to recall her.
</p>
<p class="page-intro">
  One chapter, and a whole short story: what an owned gap looks like to a careful person who was not there.
</p>

{% set seasonNumber = "14" %}
{% set episodeNumber = "6" %}
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

{% include "episode-nav.njk" %}
