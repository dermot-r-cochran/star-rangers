---
layout: base.njk
title: "Season 0"
description: "Prequel season of Star Rangers — the events that led to the founding of the Star Rangers, told from the perspectives of those who built it and those who resisted."
permalink: /seasons/s00/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 0</li>
  </ol>
</nav>

<h1 class="page-title">Season 0 · Foundation</h1>
<p class="page-intro">
  The events that made the Star Rangers necessary — and possible. Set between 2712 and 2723 UCSD, in the final years of Military Space Command authority over the Solar System.
</p>

{% set seasonNumber = "0" %}
{% set hasSeasonChapters = false %}
<ul class="chapter-list" role="list">
{% for chapter in collections.chapters %}
  {% if (chapter.data.season ~ "") == seasonNumber %}
    {% if not hasSeasonChapters %}{% set hasSeasonChapters = true %}{% endif %}
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
</ul>
{% if not hasSeasonChapters %}
  <p class="page-intro">No chapters published yet for this season.</p>
{% endif %}
