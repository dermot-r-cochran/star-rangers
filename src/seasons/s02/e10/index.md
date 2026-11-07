---
layout: base.njk
title: "Episode 10"
eleventyComputed:
  description: "Chapters in Season 2, Episode 10 of {{ site.name }}."
permalink: /seasons/s02/e10/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s02/">Season 2</a></li>
    <li aria-current="page">Episode 10</li>
  </ol>
</nav>

<h1 class="page-title">Season 2 · Episode 10</h1>
<p class="page-intro">
  Muffin, the small warm creature that came back from Drithane in <a href="/star-rangers/seasons/s02/e03/">Episode 3</a>,
  gets bored of the Deck 7 galley door and sits down on the walkway, and the whole deck stops to give it
  things. The bureau is asked to do something about it, and nobody can write the word. Then Lev, the boy
  whose cat Bubochka found in <a href="/star-rangers/seasons/s02/e07/">Episode 7</a>, comes to tell the rabbit
  his cat is fine, finds Knopka instead, and does the one thing the agency's file says works. It takes him
  four seconds, and he does not notice it was hard.
</p>

{% set seasonNumber = "2" %}
{% set episodeNumber = "10" %}
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
<p>No chapters have been added to this episode yet.</p>
{% endif %}
