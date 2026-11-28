---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 16, Episode 4 of {{ site.name }}."
permalink: /seasons/s16/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s16/">Season 16</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 16 · Episode 4</h1>
<p class="page-intro">
  The survey side, in its fifth year on the ground, on one shift and the shift after it. At every knock since the third year Aravena's light has gone an arm's length to the side along the line, and found silt, and come back. On shift 347 it finds feet. Somebody is standing there, upright and still, and the light goes onto them as it would onto anybody. Then the stone goes down where the stone always goes, and one answers.
</p>
<p class="page-intro">
  At the junction the handheld has two upright shapes and two thermal returns. Ferrant's instrument has nothing at that minute, and she says so before she is asked. Egede puts the second return on the table beside a profile from the second year, and knows there is no way to lay one against the other. One chapter, and a whole short story, with one knock in it and an entry that says how many were there.
</p>

{% set seasonNumber = "16" %}
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
  <p class="page-intro">This edition carries no chapters of this episode.</p>
{% endif %}

{% include "episode-nav.njk" %}
