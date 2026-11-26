---
layout: base.njk
title: "Episode 5"
eleventyComputed:
  description: "Chapters in Season 11, Episode 5 of {{ site.name }}."
permalink: /seasons/s11/e05/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s11/">Season 11</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 11 · Episode 5</h1>
<p class="page-intro">
  Below the roof, some tellings on. The ground says someone before the up-person is out of the squeeze: the first
  stone of theirs that ever came on time, and it came on time because it was dropped. The up-person picks it up and
  does it again, late, kneeling, the way they do it. Stone-First-Who-Waited stands on the line and does not answer,
  for longer than the warm has ever had to listen to, and Carried-It-Sleeping keeps everyone where they are. What
  Stone-First was thinking about turns out to be something every one of the Told already knew.
</p>

{% set seasonNumber = "11" %}
{% set episodeNumber = "5" %}
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
