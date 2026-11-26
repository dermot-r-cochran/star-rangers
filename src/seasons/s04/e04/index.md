---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 4, Episode 4 of {{ site.name }}."
permalink: /seasons/s04/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s04/">Season 4</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 4 · Episode 4</h1>
<p class="page-intro">
  Halcyon has begun measuring what it used to take on trust, and thirty-eight reels of glass fibre from Antariksha have each come up short
  by the same proportion. Commander Larsen sends the letter he sends everywhere and the raven he sends everywhere. On Antariksha every public
  notice is posted in every language the habitat has, so the letter goes up at the foot of every lift under a word he did not write, and for
  six days the Field Observer is not forgotten at all. On the third, somebody takes the wall at its word.
</p>

{% set seasonNumber = "4" %}
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
