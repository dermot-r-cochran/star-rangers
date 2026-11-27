---
layout: base.njk
title: "Episode 7"
eleventyComputed:
  description: "Chapters in Season 4, Episode 7 of {{ site.name }}."
permalink: /seasons/s04/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s04/">Season 4</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 4 · Episode 7</h1>
<p class="page-intro">
  The first weeks of the autumn quarter of 2828. Antariksha's bureau sends up a transfer form with three stamps and nothing where the
  fourth belongs, and asks for it back. Commander Larsen has had a form like it in the task force's bottom drawer since the late autumn
  of 2826: eleven crates of ration, signed out of Eden's stores and never signed in anywhere Eden could read. He writes one letter for both.
  This episode reads on its own. A reader of <a href="/star-rangers/seasons/s02/e01/">Season 2, Episode 1</a> will know the older form,
  and the cat who read it first.
</p>

{% set seasonNumber = "4" %}
{% set episodeNumber = "7" %}
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
