---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in Season 12, Episode 6 of {{ site.name }}."
permalink: /seasons/s12/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s12/">Season 12</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<h1 class="page-title">Season 12 · Episode 6</h1>
<p class="page-intro">
  The roof and the junction, some shifts before the year's summaries. Tidying the rack, Egede finds the first imager in
  its case on the bottom shelf, with a word tied to its handle that nobody thought to strike. Its investigation sheet is
  honest in every line, and under every result is a reason not to believe it. Egede closes the sheet, and gets the
  closing wrong, and strikes that too. Then Egede carries the case down the long passage in both arms, for no technical
  ground, and sets the instrument back where it stood when it was the only one of the party there. Aravena, who kneels
  to the unit every shift, is asked why for the first time.
</p>

{% set seasonNumber = "12" %}
{% set episodeNumber = "6" %}
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
