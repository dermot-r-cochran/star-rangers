---
layout: base.njk
title: "Episode 6"
eleventyComputed:
  description: "Chapters in Season 4, Episode 6 of {{ site.name }}."
permalink: /seasons/s04/e06/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s04/">Season 4</a></li>
    <li aria-current="page">Episode 6</li>
  </ol>
</nav>

<h1 class="page-title">Season 4 · Episode 6</h1>
<p class="page-intro">
  A year, near enough, after <em>Docked Twice</em>. A sum the size of a supper has crossed between Eden and Halcyon four times and been
  sent back four times: a fabricator will not hold feedstock he has not paid for, and a mill will not be paid for mass it did not send.
  Each is standing behind the instrument on its own floor, and both write to the one name under the reading nobody can account for.
  He has nothing to tell them. What they do instead takes one of the Chief Commissioner's four words, and the line two below it still takes none.
</p>

{% set seasonNumber = "4" %}
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
