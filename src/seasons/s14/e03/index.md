---
layout: base.njk
title: "Episode 3"
eleventyComputed:
  description: "Chapters in Season 14, Episode 3 of {{ site.name }}."
permalink: /seasons/s14/e03/
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s14/">Season 14</a></li>
    <li aria-current="page">Episode 3</li>
  </ol>
</nav>

<h1 class="page-title">Season 14 · Episode 3</h1>
<p class="page-intro">
  The deep side, a few tellings after the up-people stayed. Went-Round is still bothered by the one time the going round did not work, and goes to ask the old one at the edge of the amber how the far side was found. The old one is not at the edge. The old one is sitting at the foot of the shelving, beside the small ones' first line of stones, where nobody goes quiet when they breathe in and the knock can be heard as two sounds with a gap between them. What the old one says about finding it is short. What the old one has been carrying since is longer: a thing said in an ordinary voice, that nobody knew, and that a whole people put a hand on a rock for.
</p>
<p class="page-intro">
  One chapter, and a whole short story: two old ones on the margin on a working time when nothing happens, a name the telling keeps back because it was asked to, and a game that is not much good with two.
</p>

{% set seasonNumber = "14" %}
{% set episodeNumber = "3" %}
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
