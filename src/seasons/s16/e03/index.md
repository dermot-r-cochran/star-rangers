---
layout: base.njk
title: "Episode 3"
eleventyComputed:
  description: "Chapters in Season 16, Episode 3 of {{ site.name }}."
permalink: /seasons/s16/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s16/">Season 16</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 16 · Episode 3</h1>
<p class="page-intro">
  The deep side, in the survey's fifth year on the ground. The small ones are short of someone to play the up-person in their game, and ask Carried-It-Sleeping, who once went up the squeeze and stood at the edge of the up-people's light and was not seen. Carried-It-Sleeping kneels, and a small one says that is not how they kneel. And it turns out that the one who carried the humming stone down has never once been on the line when the up-people's stone is set. It has always been a told thing.
</p>
<p class="page-intro">
  So Carried-It-Sleeping goes up the shelving, with a stone moved first, and asks Stone-First-Who-Waited to stand on the line for one. Then the loud comes down, and the light comes through the crack, low, and finds Stone-First's feet, and goes to the side. One chapter, and a whole short story, with one knock in it and two of the people there to hear it.
</p>

{% set seasonNumber = "16" %}
{% set episodeNumber = "3" %}
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
