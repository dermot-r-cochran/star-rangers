---
layout: base.njk
title: "Seasons"
description: "All seasons and episodes of Star Rangers."
permalink: /seasons/
---
<h1 class="page-title">Seasons &amp; Episodes</h1>
<p class="page-intro">
  Begin with the record: one history, many witnesses. Read a chapter in any available character's point of view, then switch inside the chapter to see how duty, fear, and memory reshape the same event.
</p>
<p class="page-intro">
  The published story opens in 2826 UCSD. Threshold Station has carried an unresolved instrument discrepancy for eleven years, while the Marsh Causeway has endured three years of independent boundary monitoring.
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
