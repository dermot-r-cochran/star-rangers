---
layout: base.njk
title: "Episode 3"
eleventyComputed:
  description: "Chapters in Season 11, Episode 3 of {{ site.name }}."
permalink: /seasons/s11/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s11/">Season 11</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 11 · Episode 3</h1>
<p class="page-intro">
  The working time after the two stones, from below. The up-people moved a stone, once, and the warm has a question
  it has never had to ask: was that a thing that happened, or a thing that is done? Stone-First-Who-Waited goes up to
  the line without knowing. The light comes through the squeeze again, with a second stone, and the first is left
  where it lies. The small ones say that makes it every time. Went-Round says twice is only again, and goes round to
  find out how many every time is. And Carried-It-Sleeping, waiting in the warm for the third, notices the question
  nobody below the roof has thought to ask.
</p>

{% set seasonNumber = "11" %}
{% set episodeNumber = "3" %}
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
