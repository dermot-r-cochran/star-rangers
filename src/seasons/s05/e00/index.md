---
layout: base.njk
title: "Episode 0"
description: "The prologue to Season 5 — the years between Seasons 3 and 5, in which Shepherd crosses into command and the Corps assigns her the one officer who knows what the crossing costs."
permalink: /seasons/s05/e00/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s05/">Season 5</a></li>
    <li aria-current="page">Episode 0</li>
  </ol>
</nav>

<h1 class="page-title">Season 5 · Episode 0</h1>
<p class="page-intro">
  What came between Season 3 and Season 5. Three years separate the Principal who left the Survey Corps' review chamber from the Line Captain who opens Season 5, and in them Shepherd crosses the hinge rank into command, where nothing can be examined and the Corps assigns a mentor instead. The officer it assigns her is the one who came to command from the other side, and who had been reading her silences for years before anyone made it a duty. In the spring of 2831 that officer is made High Captain, given a command ship built not to arrive first, and goes in person to ask one Chief across.
</p>
<p class="page-intro">
  The episode is a prologue and its side-lights, and each chapter introduces some of the season's people: Wender, as a mentor and then as a High Captain, and in the third chapter Galen Kane of the Frontier Corps, the adviser Shepherd kept for herself. It steps back to 2830, to the end of one of his passages, where the question she sent him in her first weeks of command is answered from the back of a hall, and to the post, where the answer arrives.
</p>

{% set seasonNumber = "5" %}
{% set episodeNumber = "0" %}
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

{% include "episode-nav.njk" %}
