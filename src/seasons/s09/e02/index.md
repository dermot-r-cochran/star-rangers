---
layout: base.njk
title: "Episode 2"
eleventyComputed:
  description: "Chapters in Season 9, Episode 2 of {{ site.name }}."
permalink: /seasons/s09/e02/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s09/">Season 9</a></li>
    <li aria-current="page">Episode 2</li>
  </ol>
</nav>

<h1 class="page-title">Season 9 · Episode 2</h1>
<p class="page-intro">
  Late spring, and the first evening that is not a corridor. A resident asks the Deputy whether the Deputy has seen the terraces, and gets a kit list for an answer: service dress, two sets, and the Corps does not come uncalled. So a shirt comes out of a cupboard, and without the tab there is the question of which name a person has. Three stops out, on a path one person wide, the step has nowhere to go. The next day's log has a few grams of soil in it.
</p>

{% set seasonNumber = "9" %}
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

{% include "episode-nav.njk" %}
