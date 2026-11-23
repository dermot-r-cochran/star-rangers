---
layout: base.njk
title: "Episode 5"
eleventyComputed:
  description: "Chapters in Season 6, Episode 5 of {{ site.name }}."
permalink: /seasons/s06/e05/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s06/">Season 6</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 6 · Episode 5</h1>
<p class="page-intro">
  Got It Twice. An interior episode, and a quiet one. Shepherd sets out to take a reading she never took, of what it is like when somebody is there and saying nothing, and finds that every test she can build returns what she put in. Somewhere in the same morning a wall is counted from the gatepost to the corner and back, and the count does not come out.
</p>

{% set seasonNumber = "6" %}
{% set episodeNumber = "5" %}
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
