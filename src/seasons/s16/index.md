---
layout: base.njk
title: "Season 16"
eleventyComputed:
  description: "Episodes and chapters in Season 16 of {{ site.name }}."
permalink: /seasons/s16/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 16</li>
  </ol>
</nav>

<h1 class="page-title">Season 16</h1>
<p class="page-intro">
  Below the roof, another year on. Season 16 is the fourth season of the Below the Roof thread: the Told of <a href="/star-rangers/lore/planets/fliade/">Fliade</a> in the warm deep, in the survey's fifth year on the ground, with a newest one in the middle of the warm who was born after everything the earlier seasons tell. Written for the child reader.
</p>
<p class="page-intro">
  A season that stands alone, though a reader of <a href="/star-rangers/seasons/s11/">Season 11</a>, <a href="/star-rangers/seasons/s12/">Season 12</a> and <a href="/star-rangers/seasons/s14/">Season 14</a> will know the line, the stones on it, the light that once came out of the near wall, and what the people mean by a telling with its edges and no middle.
</p>
<p class="page-intro">
  Episode 1 is the deep side, in two chapters. A telling that was kept for the ones not born yet is told to one who has been born. Then Went-Round goes round a thing said long ago about the up-people's stone, and finds somebody lying on the far side of it.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (16 | threadForSeason).id }}/">{{ (16 | threadForSeason).name }}</a></p>

{% set seasonNumber = "16" %}
{% include "season-portraits.njk" %}
{% set hasSeasonChapters = false %}
{% set currentEpisode = "" %}
{% for chapter in collections.chapters %}
  {%- if (chapter.data.season ~ "") == seasonNumber -%}
    {%- if not hasSeasonChapters %}{% set hasSeasonChapters = true %}{% endif -%}
    {%- set episodeValue = chapter.data.episode ~ "" -%}
    {%- if episodeValue != currentEpisode -%}
      {%- if currentEpisode %}</ul></div>{% endif -%}
      {%- set currentEpisode = episodeValue -%}
      <div class="season-block">
        <h2 class="season-block__title">
          <a href="/star-rangers/seasons/s16/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
        </h2>
        <ul class="chapter-list" role="list">
    {%- endif -%}
          <li class="chapter-list__item">
            <a href="/star-rangers{{ chapter.url }}">
              <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
              <span class="chapter-list__title">{{ chapter.data.title }}</span>{%- set mins = chapter | readingMinutes -%}{% if mins %}<span class="chapter-list__time">about {{ mins }} min</span>{% endif %}
              {%- if chapter.data.location -%}
              <span class="chapter-list__loc">{{ chapter.data.location }}</span>
              {%- endif -%}
            </a>
          </li>
  {%- endif -%}
{% endfor %}
{% if hasSeasonChapters %}
  </ul></div>
{% else %}
  <p class="page-intro">This edition carries no chapters of this season.</p>
{% endif %}

{% include "season-nav.njk" %}
