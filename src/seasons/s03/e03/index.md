---
layout: base.njk
title: "Episode 3"
description: "Chapters in Season 3, Episode 3 — the autumn after the door: a fold-approach post falls open at the far end of a line, a word is asked of the last Chief she answered to, a Line Captain reads the name on her line and the nothing under it, and the officer the season has followed is in none of the rooms."
permalink: /seasons/s03/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s03/">Season 3</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 3 · Episode 3</h1>
<p class="page-intro">
  The autumn after the door. A fold-approach post on the outward frontier falls open, and the Corps' lists carry a Chief Ranger who has held the rank with no department since the spring. A word is asked where no board sits, of the last Chief she answered to, and Arashobal gives the material part and one fact she has kept a year against exactly this use, and renews a mark of her own in the same reply. Nine hours from the post, the Line Captain whose line it is reads the name and the nothing under it, is not asked, adds nothing, and does not go out.
</p>
<p class="page-intro">
  One chapter, and Shepherd is in none of its rooms. What the record keeps of who vouched for her first command is the posting list, which says who, and never who said so.
</p>

{% set seasonNumber = "3" %}
{% set episodeNumber = "3" %}
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
