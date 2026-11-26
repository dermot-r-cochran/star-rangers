---
layout: base.njk
title: "Episode 5"
eleventyComputed:
  description: "Chapters in Season 14, Episode 5 of {{ site.name }}."
permalink: /seasons/s14/e05/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s14/">Season 14</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 14 · Episode 5</h1>
<p class="page-intro">
  The deep side, many tellings on. There is a newest one in the middle of the warm, and the word <em>the smallest</em> has moved across to it without asking the one whose word it was. Keeps-A-Hand-On-It, born after the two stones, has only ever been told the up-people. The newest will be told all of that, and then the game, and the name, and <em>they stayed</em>, as things as old as the first warm seep. A telling everyone was there for can only be told to someone not born yet, and now one has been born. So a small one who knows more about waiting than anyone below the roof has to wait for somebody else to wake up, and then stand up in the middle of the warm and tell a thing whole to somebody who does not know a word.
</p>
<p class="page-intro">
  One chapter, and a whole short story, with nothing in it but the warm.
</p>

{% set seasonNumber = "14" %}
{% set episodeNumber = "5" %}
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
  <p class="page-intro">No chapters published yet for this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
