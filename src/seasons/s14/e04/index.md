---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 14, Episode 4 of {{ site.name }}."
permalink: /seasons/s14/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s14/">Season 14</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 14 · Episode 4</h1>
<p class="page-intro">
  The survey side, the four mornings after the entry that said who heard it. The order of the knock is seventeen words long, and on one shift the one who knocked did not do what the last two of them say. The survey lead said it would not be rewritten standing up; if it needed rewriting it would look the same in the morning. Egede brings three drafts to the station table, failure modes first. Ferrant grades them the only way she knows how to grade anything. Aravena knocks, and is answered at once, and stands out the rest of the interval on purpose. Then Nakagawa goes back through the first two years of the file to find out who set the interval, and it was nobody on the roof.
</p>
<p class="page-intro">
  One chapter, and a whole short story, about an order that turns out to have somebody else's measurement in the middle of it.
</p>

{% set seasonNumber = "14" %}
{% set episodeNumber = "4" %}
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
