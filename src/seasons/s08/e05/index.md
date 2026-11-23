---
layout: base.njk
title: "Episode 5"
eleventyComputed:
  description: "Chapters in Season 8, Episode 5 of {{ site.name }}."
permalink: /seasons/s08/e05/
# Season 8 is the tier-gated church-space thread; index pages have no season front
# matter of their own, so they carry the thread id explicitly (see e01).
threadId: church-space
---
<nav class="chapter-breadcrumb" aria-label="Episode location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li><a href="/star-rangers/seasons/s08/">Season 8</a></li>
    <li aria-current="page">Episode 5</li>
  </ol>
</nav>

<h1 class="page-title">Season 8 · Episode 5</h1>
<p class="page-intro">
  The other house, and the cost of a kind sentence. A young man walks onto the drowned ground because he has heard what the chapter house thinks about the night the children came home. He is pulled out by a ladder, and Orlagh Dunne drives up the hill to ask whose sentence it was. This episode keeps the day the house said in public what it did that night, which was nothing, and the evening a novice was left to keep the door.
</p>

{% set seasonNumber = "8" %}
{% set episodeNumber = "5" %}
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
