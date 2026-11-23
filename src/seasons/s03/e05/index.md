---
layout: base.njk
title: "Episode 5"
description: "Chapters in Season 3, Episode 5 — a side-light on the summer of 2829, with Shepherd in neither room: the Principal who took the Halyx queue has heard nothing in two thousand streams, and the Survey's library asks her for a statement of use."
permalink: /seasons/s03/e05/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s03/">Season 3</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 3 · Episode 5</h1>
<p class="page-intro">
  A side-light, and one chapter. The summer of 2829, after the bench came home in Episode 2 and before the autumn of Episode 3, and the officer the season has followed is in neither of its rooms. At Halyx the Principal who took the backlog queue from her has given every unmatched stream a minute in a headset for fourteen months, by a method four paragraphs long, and has a slate with two thousand two hundred and fourteen strokes on it and nothing else.
</p>
<p class="page-intro">
  The Survey's library will not file the method without a statement of use, and hers is the only one. A second paper goes to a Survey Chief who does not listen to streams. What comes back down the relay is a card, and one word on it that the Principal had not known she was waiting for.
</p>

{% set seasonNumber = "3" %}
{% set episodeNumber = "5" %}
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
