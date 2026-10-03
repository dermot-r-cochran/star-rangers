---
layout: base.njk
title: "Episode 1"
eleventyComputed:
  description: "Chapters in Season 12, Episode 1 of {{ site.name }}."
permalink: /seasons/s12/e01/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s12/">Season 12</a></li>
    <li aria-current="page">Episode 1</li>
  </ol>
</nav>

<h1 class="page-title">Season 12 · Episode 1</h1>
<p class="page-intro">
  The deep side. A year after the two stones, the smallest of the Told, born since, goes to the place where every
  telling begins and finds a shape standing in it that has no warmth. It moves no stone coming and none going, and it
  does not answer a stone moved for it, and when the telling the smallest is counting ends it is not there. By the
  people's own rules it is not a stranger and not a person, and the manners have no third case. Went-Round has a word
  for it, and says the word once. Stone-First-Who-Waited asks who was there, and keeps the rest open, because nobody was
  there for the part that would settle it, and nobody can be. Then, in the middle of an ordinary working time, a stone
  moves at the edge of the silt while Stone-First is on the line, moved well, and the ground says someone is coming, and
  nobody comes. The manners have been done, properly, by nobody. The line has three stones on it now, and the third is
  nobody's, and below, Carried-It-Sleeping keeps the small ones from going up to look and works out what the up-people
  felt for a whole season, from the inside.
</p>

{% set seasonNumber = "12" %}
{% set episodeNumber = "1" %}
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
