---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 8, Episode 4 of {{ site.name }}."
permalink: /seasons/s08/e04/
# Season 8 is the tier-gated church-space thread; index pages have no season front
# matter of their own, so they carry the thread id explicitly (see e01).
threadId: church-space
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s08/">Season 8</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 8 · Episode 4</h1>
<p class="page-intro">
  Late spring on Cnoc na mBeach. The hive that was mended in the spring has done well enough to divide, and it leaves at noon on the day a cadet walks up the lane with a posting she has not answered. This episode keeps one afternoon with a swarm on a thorn, a box held underneath it, and a keeper who can give the reading and nothing more.
</p>

{% set seasonNumber = "8" %}
{% set episodeNumber = "4" %}
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
