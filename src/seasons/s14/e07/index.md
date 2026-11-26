---
layout: base.njk
title: "Episode 7"
eleventyComputed:
  description: "Chapters in Season 14, Episode 7 of {{ site.name }}."
permalink: /seasons/s14/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s14/">Season 14</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 14 · Episode 7</h1>
<p class="page-intro">
  The season's close, and for now the thread's. Nothing new happens at the line. Late in the survey's fourth year, a long time after a telling was given and heard, each side goes back to the oldest thing it has about the other, which turns out to be the same eleven minutes: the shift in the second year when a youngest stood in the open at the edge of the party's light, and nobody looked up. Above, the party lays an old thermal profile beside its own old log and finds out what it was saying. Below, the small ones cannot make their game play the up-person who stayed, and ask the warm who has ever stood for a thing without knowing a word of it. The first telling of the thread is told again, and not a word of it has moved.
</p>
<p class="page-intro">
  Two chapters, one from each side of the line, as the thread has always been told; a reader who starts here has a whole short story, and a reader who began with <a href="/star-rangers/seasons/s11/e01/s11e01c01/">Nobody Looked Up</a> may want to read that one again afterwards.
</p>

{% set seasonNumber = "14" %}
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

{% include "episode-nav.njk" %}
