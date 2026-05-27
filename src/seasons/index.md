---
layout: base.njk
title: "Seasons"
description: "All seasons and episodes of Star Rangers."
permalink: /seasons/
---
<h1 class="page-title">Seasons &amp; Episodes</h1>
<p class="page-intro">
  Star Rangers has one canonical timeline. Each chapter can be read through any available character's point of view — use the POV selector within a chapter to switch perspective.
</p>
<p class="page-intro">
  The current story opens in 2826 CE after eleven years of unresolved instrument drift at Threshold Station and three years of independent boundary monitoring at the Marsh Causeway.
</p>

{% set allChapters = collections.chapters %}
{% if allChapters.length %}
  {% set currentSeason = 0 %}
  {% for chapter in allChapters %}
    {% if chapter.data.season != currentSeason %}
      {% if currentSeason > 0 %}</ul></div>{% endif %}
      {% set currentSeason = chapter.data.season %}
      <div class="season-block">
        <h2 class="season-block__title">
          <a href="/star-rangers/seasons/s{{ currentSeason | zeroPad }}/">Season {{ currentSeason }}</a>
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
  {% endfor %}
  </ul></div>
{% else %}
  <p class="page-intro">No chapters published yet.</p>
{% endif %}
