---
layout: base.njk
title: "Episode 5"
eleventyComputed:
  description: "Chapters in Season 12, Episode 5 of {{ site.name }}."
permalink: /seasons/s12/e05/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s12/">Season 12</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 12 · Episode 5</h1>
<p class="page-intro">
  The deep side, many tellings after nobody's stone. A small one comes up the shelving with a stone moved first, and is
  answered before the ground has finished, and that is the thing they have come about. On the working time of nobody's
  stone, Stone-First-Who-Waited stood still and waited to be told who, and did not answer; and Went-Round has said that a
  thing is known for someone by its doing what they do. So was it Stone-First on the line? In the warm the small ones
  try to grow a name, and it will not go round. Stone-First comes down and answers standing up, and will not answer
  the stone late, and says a thing missed stays missed.
</p>

{% set seasonNumber = "12" %}
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
