---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 9, Episode 4 of {{ site.name }}."
permalink: /seasons/s09/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s09/">Season 9</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 9 · Episode 4</h1>
<p class="page-intro">
  Summer, and for one shift the officer is away. A relieving Field Officer shakes hands, shuts the hatch to the seal, sits down and tells the Deputy kindly what everything means. It is the same watch and a different room, and a chair turns out to be a step too far from the desk. In the corridor, somebody who has looked at the hatch once in his life finds that he knows how it sits at the hour, and that today it does not.
</p>

{% set seasonNumber = "9" %}
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
  <p class="page-intro">This edition carries no chapters of this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
