---
layout: base.njk
title: "Episode 1"
eleventyComputed:
  description: "Chapters in Season 16, Episode 1 of {{ site.name }}."
permalink: /seasons/s16/e01/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s16/">Season 16</a></li>
    <li aria-current="page">Episode 1</li>
  </ol>
</nav>

<h1 class="page-title">Season 16 · Episode 1</h1>
<p class="page-intro">
  The deep side, in the survey's fifth year on the ground. The newest one is awake for longer now. The telling of the light that came out of the near wall was kept for the ones not born yet, and one of them has been born for some time and nobody has got up. Keeps-A-Hand-On-It, who once meant to be the one to tell it, asks why not, and tells it whole to somebody who does not know a word, while everyone who was there lies still behind and hears their own piece go past.
</p>
<p class="page-intro">
  Then the small ones try to give the newest one a name by saying a thing three times, and cannot, because everything it has, it has always had. Went-Round hears that word and goes round it, one person at a time, to the middle of the middle. Two chapters, and a whole short story, with nothing in it but the warm and one knock on the line.
</p>

{% set seasonNumber = "16" %}
{% set episodeNumber = "1" %}
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
