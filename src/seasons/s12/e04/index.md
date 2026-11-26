---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 12, Episode 4 of {{ site.name }}."
permalink: /seasons/s12/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s12/">Season 12</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 12 · Episode 4</h1>
<p class="page-intro">
  The roof, on the first supply run after there were two on the line. Egede's sheet has a question mark on it for the
  first time in three years. Ferrant's reading is filed and has not changed, there is one on the line every shift, and
  her pack is strapped by the door. She sits down at the third shelf to write the gravimeter back to nominal, as she said
  she would on her first evening, and cannot find a form for making a read log unread. She asks herself whether she is
  staying to see the shape again, and would put herself on the run if she were. Then she asks the survey lead, properly,
  for the spare berth. The run goes up without her, and a word turns out to have had two meanings all along and a keeper
  for only one of them.
</p>

{% set seasonNumber = "12" %}
{% set episodeNumber = "4" %}
{% set hasEpisodeChapters = false %}
<ul class="chapter-list" role="list">
{% for chapter in collections.chapters %}
  {%- if (chapter.data.season ~ "") == seasonNumber and (chapter.data.episode ~ "") == episodeNumber -%}
    {%- if not hasEpisodeChapters %}{% set hasEpisodeChapters = true %}{% endif -%}
    <li class="chapter-list__item">
      <a href="/star-rangers{{ chapter.url }}">
        <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
        <span class="chapter-list__title">{{ chapter.data.title }}</span>{%- set mins = chapter | readingMinutes -%}{% if mins %}<span class="chapter-list__time">about {{ mins }} min</span>{% endif %}
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

{% include "episode-nav.njk" %}
