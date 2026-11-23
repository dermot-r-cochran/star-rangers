---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in Season 7, Episode 6 of {{ site.name }}."
permalink: /seasons/s07/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s07/">Season 7</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<h1 class="page-title">Season 7 · Episode 6</h1>
<p class="page-intro">
  The Oversight Council holds a funeral for an officer whose commander has not said she is dead. The afternoon watch begins at 1400 whatever is being said in the hall, and it is the Cadet's turn on the Dock Seven line.
</p>
<p class="page-intro">
  The address itself is in the Codex and is not repeated here. This episode is the same afternoon from the back of the hall and from the boundary desk, and it reads on its own.
</p>

{% set seasonNumber = "7" %}
{% set episodeNumber = "6" %}
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
