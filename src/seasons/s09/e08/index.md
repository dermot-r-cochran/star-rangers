---
layout: base.njk
title: "Episode 8"
eleventyComputed:
  description: "Chapters in Season 9, Episode 8 of {{ site.name }}."
permalink: /seasons/s09/e08/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s09/">Season 9</a></li>
    <li aria-current="page">Episode 8</li>
  </ol>
</nav>

<h1 class="page-title">Season 9 · Episode 8</h1>
<p class="page-intro">
  A coda to the season, set after its last evening. In the early winter of 2828 an order is on the desk when the Deputy comes through the hatch: one printed leaf, like the one that brought a Deputy onto the ring in the spring, and no more forthcoming. The shift is the shift. At the hour there is a promise to keep, made on a wall on the far side of the ring, and it had a day in it. Then a last entry in the log, a question about what to put on a letter, and a name said to the wrong collar. Some days later somebody with a kit bag stands in the corridor reading the doors.
</p>
<p class="page-intro">
  This episode reads on its own. A reader of the season will know the hatch, the plant and the step, and what was promised in <a href="/star-rangers/seasons/s09/e07/">Episode 7</a>.
</p>

{% set seasonNumber = "9" %}
{% set episodeNumber = "8" %}
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
