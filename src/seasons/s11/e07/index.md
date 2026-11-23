---
layout: base.njk
title: "Episode 7"
eleventyComputed:
  description: "Chapters in Season 11, Episode 7 of {{ site.name }}."
permalink: /seasons/s11/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s11/">Season 11</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 11 · Episode 7</h1>
<p class="page-intro">
  The season's last episode, late in the survey's second year, and nothing new happens in it. Below the roof the
  small ones ask for the first telling, the one from before the stones, and a small one who was never there for
  anything stands up and tells it, and begins it in a different place: the youngest went up and moved no stone.
  Carried-It-Sleeping hears their own first telling come back shorter, with a hole in it the shape of a stone.
  Went-Round goes round it, Stone-First-Who-Waited asks only whether it is shorter, and the knock comes and is answered,
  as it is every working time now.
</p>
<p class="page-intro">
  Above, the party knocks before every shift, and Aravena no longer stops at the bottom of the passage. At the station
  Nakagawa lays the whole file out from its first month: every arrival of the party, with a shift of rock ahead of it
  that nobody turned round for, and one arrival the other way with nothing ahead of it at all. Two observations are
  filed and no reading. Each side reads its own beginning again, and neither knows the other has.
</p>

{% set seasonNumber = "11" %}
{% set episodeNumber = "7" %}
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
