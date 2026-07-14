---
layout: base.njk
title: "Church Space"
description: "The Church Space storyline thread — a parallel narrative written for the church-space.site/.online deployment, carrying explicit Christian and evangelical themes not part of the main published canon."
permalink: /threads/church-space/
threadId: church-space
---
<nav class="chapter-breadcrumb" aria-label="Thread location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/threads/">Threads</a></li>
    <li aria-current="page">Church Space</li>
  </ol>
</nav>

<h1 class="page-title">Church Space</h1>
<p class="page-intro">
  A parallel storyline with its own cast, written for the church-space.site and church-space.online deployment and carrying explicit Christian and evangelical themes that aren't part of the main published canon. This thread is private — see README.md's cPanel deployment section for how a clone opts into it.
</p>

{% set threadId = "church-space" %}
{% set allChapters = collections.chapters %}
{% set hasThreadChapters = false %}
{% set currentSeason = -1 %}
{% for chapter in allChapters %}
  {% if (chapter.data.season | threadForSeason).id == threadId %}
    {% if not hasThreadChapters %}{% set hasThreadChapters = true %}{% endif %}
    {% if chapter.data.season != currentSeason %}
      {% if currentSeason != -1 %}</ul></div>{% endif %}
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
  {% endif %}
{% endfor %}
{% if hasThreadChapters %}
  </ul></div>
{% else %}
  <p class="page-intro">No chapters published yet for this thread.</p>
{% endif %}
