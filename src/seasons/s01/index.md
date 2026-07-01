---
layout: base.njk
title: "Season 1"
description: "Episodes and chapters in Season 1 of Star Rangers."
permalink: /seasons/s01/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 1</li>
  </ol>
</nav>

<h1 class="page-title">Season 1</h1>
<p class="page-intro">
  Browse all available episodes in Season 1.
</p>

{% set seasonNumber = "1" %}
{% set hasSeasonChapters = false %}
{% set currentEpisode = "" %}
{% for chapter in collections.chapters %}
  {% if (chapter.data.season ~ "") == seasonNumber %}
    {% if not hasSeasonChapters %}{% set hasSeasonChapters = true %}{% endif %}
    {% set episodeValue = chapter.data.episode ~ "" %}
    {% if episodeValue != currentEpisode %}
      {% if currentEpisode %}</ul></div>{% endif %}
      {% set currentEpisode = episodeValue %}
      <div class="season-block">
        <h2 class="season-block__title">
          <a href="/star-rangers/seasons/s01/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
        </h2>
        <ul class="chapter-list" role="list">
    {% endif %}
          <li class="chapter-list__item">
            <a href="/star-rangers{{ chapter.url }}">
              <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
              <span class="chapter-list__title">{{ chapter.data.title }}</span>
              {% if chapter.data.location %}
              <span class="chapter-list__loc">{{ chapter.data.location }}</span>
              {% endif %}
            </a>
          </li>
  {% endif %}
{% endfor %}
{% if hasSeasonChapters %}
  </ul></div>
{% else %}
  <p class="page-intro">No chapters published yet for this season.</p>
{% endif %}
