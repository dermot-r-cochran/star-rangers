---
layout: base.njk
title: "Episode 7"
eleventyComputed:
  description: "Chapters in Season 13, Episode 7 of {{ site.name }}."
permalink: /seasons/s13/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s13/">Season 13</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 13 · Episode 7</h1>
<p class="page-intro">
  What Was Not Asked. The season's finale, and both strands in one episode. In the last week of the storm season the girl who carried the court's line comes up the Abbey's steps on her own account, knowing that the Long Accounting has a name for the one who stands in the room past the ninth door and that the Abbey does not offer it. The Abbess tells her that the Abbey does not offer and does answer: ask, and the novice will read it to her. She sits a day beside a page she cannot read, with the name on it, tells the novice what a lamp shows in that room, works out on the steps what the old reciter climbed them for, and goes down at the evening office without having asked. Then the season's last boat puts her on Krilzat, where the door is still open and the one in it still stands, and at the hour she says the Castle's part of the chronicle through from the first name with nobody prompting, as far as her own line, which stops where a name would go, and the line every reciter says fastest, which she does not say fast. Two records and a count of notches, each ending where it ends, with the delegation's instrument still on the floor of the room, kept off both.
</p>

{% set seasonNumber = "13" %}
{% set episodeNumber = "7" %}
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
