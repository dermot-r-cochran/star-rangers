---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in Season 11, Episode 6 of {{ site.name }}."
permalink: /seasons/s11/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s11/">Season 11</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<h1 class="page-title">Season 11 · Episode 6</h1>
<p class="page-intro">
  Above, the twelfth shift of the knock. Egede has counted the good stones at the junction, and the ones that are
  gone, and asks where the twelve are. They are on the line, side by side. The rule for this world is that nothing is
  left behind, and the party has left a row. Egede proposes taking them back, one a shift. Nakagawa asks the only one
  of the three who has seen them what has happened to the stones since they were set. The answer is nothing, and the
  nothing goes in the file.
</p>

{% set seasonNumber = "11" %}
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
  <p class="page-intro">This edition carries no chapters of this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
