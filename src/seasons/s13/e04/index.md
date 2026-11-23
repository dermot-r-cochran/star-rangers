---
layout: base.njk
title: "Episode 4"
eleventyComputed:
  description: "Chapters in Season 13, Episode 4 of {{ site.name }}."
permalink: /seasons/s13/e04/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s13/">Season 13</a></li>
    <li aria-current="page">Episode 4</li>
  </ol>
</nav>

<h1 class="page-title">Season 13 · Episode 4</h1>
<p class="page-intro">
  Who Counted. The Abbey's strand. A reeve's daughter knows that a count is made by somebody walking the thing counted, and the page the novice copies every evening is a count of doors on an island she has never seen. She asks leave to look for the sister who walked it, and is let read what is loose on the Castle's shelf, with her hands behind her. On the boat over, the Ranger re-derives what she wrote the night before about the delegation's log from Krilzat, which has grown to twenty-six returns, and makes her file say less. The novice looks for six days. No sister crossed, that the Accounting says; and then she sees that no line she has ever copied says who wrote it. On the steps she asks the Ranger whether she writes down who told her a thing. The Ranger does, always, and writes the question down as a novice's, having not been told her name. The novice thinks about it, and does not give it.
</p>

{% set seasonNumber = "13" %}
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
