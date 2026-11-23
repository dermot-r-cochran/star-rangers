---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 11, Episode 4 of {{ site.name }}."
permalink: /seasons/s11/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s11/">Season 11</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 11 · Episode 4</h1>
<p class="page-intro">
  The same shifts from above. Egede picks a stone up off the plain, thirty paces from the station door, and carries it
  in a pocket for three shifts. It is the planet's own, so the rule holds, and it is wind-worn, and nothing below the
  roof is. Egede wants it carried to the line, once, so that the knock says where the party is from. Nakagawa asks
  what the party was given, and with what added. One line goes in the file under the refusal, and in the morning the
  stone goes back where it lay.
</p>

{% set seasonNumber = "11" %}
{% set episodeNumber = "4" %}
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
