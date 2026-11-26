---
layout: base.njk
title: "Season 12"
eleventyComputed:
  description: "Episodes and chapters in Season 12 of {{ site.name }}."
permalink: /seasons/s12/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 12</li>
  </ol>
</nav>

<h1 class="page-title">Season 12</h1>
<p class="page-intro">
  Below the roof, a year on. Season 12 is the second season of the Below the Roof thread: the Told of <a href="/star-rangers/lore/planets/fliade/">Fliade</a> in the warm deep, in the survey's third year on the ground, meeting shapes that have no warmth and move no stone. Written for the child reader.
</p>
<p class="page-intro">
  A season that stands alone, though a reader of <a href="/star-rangers/seasons/s11/">Season 11</a> will know the line, the two stones on it, and the rule that a telling is settled by who was there.
</p>
<p class="page-intro">
  Episodes 3 to 6 alternate the sides after the light went round: the bright one is told down a piece at a time; the supply run goes up without the boundary officer; Stone-First answers standing up for a stone never answered; and the first imager is put back where it stood. The season ends late in the year with nothing coming, on both sides of the line.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (12 | threadForSeason).id }}/">{{ (12 | threadForSeason).name }}</a></p>

{% set seasonNumber = "12" %}
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
          <a href="/star-rangers/seasons/s12/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
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
