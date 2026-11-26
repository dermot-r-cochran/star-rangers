---
layout: base.njk
title: "Episode 0"
eleventyComputed:
  description: "Chapters in Season 6, Episode 0 of {{ site.name }}."
permalink: /seasons/s06/e00/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s06/">Season 6</a></li>
    <li aria-current="page">Episode 0</li>
  </ol>
</nav>

<h1 class="page-title">Season 6 · Episode 0</h1>
<p class="page-intro">
  A side-light before the season, and the six days after Dock Seven, seen from two desks a long way from it. The line's notice reaches the
  fold-approach post that was Shepherd's first command, and its Chief Ranger sends it on, as it stands,
  to the one officer no line would think to tell: the Frontier Corps Chief she kept as an adviser, whom
  she once asked when leaving is the correct order.
</p>
<p class="page-intro">
  Nobody in this episode was there, and nobody in it knows more than a notice and an open log can
  carry. It follows what two officers do with a record that gives a place and a moment and stops.
</p>

{% set seasonNumber = "6" %}
{% set episodeNumber = "0" %}
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
