---
layout: base.njk
title: "Episode 7"
description: "Chapters in Season 3, Episode 7 — the season's last episode: midwinter at the post, a Deputy's remark on a clean close, and a line the Starwarden has read before."
permalink: /seasons/s03/e07/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s03/">Season 3</a></li>
    <li aria-current="page">Episode 7</li>
  </ol>
</nav>

<h1 class="page-title">Season 3 · Episode 7</h1>
<p class="page-intro">
  The season's last episode, and one chapter. Midwinter of 2830: the post has had its Starwarden nine weeks, and a Deputy on her own middle watch writes on the remarks line of a clean close. She has heard something in one instrument's raw stream, by a method four paragraphs long that she found in the Survey's library. The Senior will not initial it. The Starwarden could settle it with a headset in a minute.
</p>
<p class="page-intro">
  She does not put it on. What she writes instead is a line she has read before, from the other end of a channel, and what comes back up the relay three days later is small and true. The season opened on a signal filed as noise by a note nobody had checked. It closes on the same four words, checked.
</p>

{% set seasonNumber = "3" %}
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
