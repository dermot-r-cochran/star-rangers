---
layout: base.njk
title: "Episode 5"
eleventyComputed:
  description: "Chapters in Season 13, Episode 5 of {{ site.name }}."
permalink: /seasons/s13/e05/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s13/">Season 13</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 13 · Episode 5</h1>
<p class="page-intro">
  No Hour. The court's strand, in two places at once. In the middle of the season a storm takes four lengths of the watch's outer works and the oil store with them, and the keeper rules that what oil is left is for the wall and the hours. The one that stands past the ninth door has no hour. The keeper's son, alone at the door while the wall is mended, says a name aloud in the long hall, once, and then goes down the right side in the dark, by the wall, and stands at an open door with nothing to lift. On Vellamar, with the weather shut behind her, Pellam's girl gives her line to nine reciters of the court, who each stop late and each ask her who stands in it, and she leans all week on the thought of a boy in that doorway every evening with the lamp up. When the oil comes he goes down with a light and catches himself not wondering whether the door will be shut.
</p>

{% set seasonNumber = "13" %}
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

{% include "episode-nav.njk" %}
