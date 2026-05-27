---
layout: base.njk
title: "Season 1 — Episode 2"
description: "Chapters in Season 1, Episode 2 of Star Rangers."
permalink: /star-rangers/seasons/s01/e02/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s01/">Season 1</a></li>
    <li aria-current="page">Episode 2</li>
  </ol>
</nav>

<h1 class="page-title">Season 1 · Episode 2</h1>
<p class="page-intro">
  Read every chapter currently published for this episode.
</p>

{% set seasonNumber = "1" %}
{% set episodeNumber = "2" %}
{% set hasEpisodeChapters = false %}
<ul class="chapter-list" role="list">
{% for chapter in collections.chapters %}
  {% if (chapter.data.season ~ "") == seasonNumber and (chapter.data.episode ~ "") == episodeNumber %}
    {% if not hasEpisodeChapters %}{% set hasEpisodeChapters = true %}{% endif %}
    <li class="chapter-list__item">
      <a href="{{ chapter.url }}">
        <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
        <span class="chapter-list__title">{{ chapter.data.title }}</span>
        {% if chapter.data.location %}
        <span class="chapter-list__loc">{{ chapter.data.location }}</span>
        {% endif %}
      </a>
    </li>
  {% endif %}
{% endfor %}
</ul>
{% if not hasEpisodeChapters %}
  <p class="page-intro">No chapters published yet for this episode.</p>
{% endif %}
