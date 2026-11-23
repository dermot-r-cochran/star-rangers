---
layout: base.njk
title: "Episode 7"
eleventyComputed:
  description: "Chapters in Season 9, Episode 7 of {{ site.name }}."
permalink: /seasons/s09/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s09/">Season 9</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 9 · Episode 7</h1>
<p class="page-intro">
  The season's last evening. Late autumn, the Deputy still on the watch, and a stranger in the corridor asks the way and is told it by the hatch nobody looks at. After the shift, without the tab, Varn knocks at a door, which is right this time, and asks to see the rest of the ring. Two people take the light way and stay on it, to the far side, where home is straight overhead; there is a story that cannot be handed on yet, and somebody who can wait. They come in at ring's night from the side nobody arrives from, and the watch turns out to have been in plain sight the whole time.
</p>

{% set seasonNumber = "9" %}
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
