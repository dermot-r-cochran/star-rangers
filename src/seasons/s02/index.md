---
layout: base.njk
title: "Season 2"
eleventyComputed:
  description: "Episodes and chapters in Season 2 of {{ site.name }}."
permalink: /seasons/s02/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 2</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/undercover-pets.jpg" style="object-position: center 40%" alt="A sleek black cat with amber eyes and a plain round tag on a dark collar lies along the top of a tall cream cabinet in a small rounded office, looking down at a desk where one thin grey leaf lies; through the wide window, farm terraces and small pale houses curve up into haze." />
<h1 class="page-title">Season 2</h1>
<p class="page-intro">
  Eden Space Habitat runs on paperwork, and the Undercover Pets Detective Agency reads it first. Season 2 opens on the office that reads that paperwork, then follows Agent Barsik, a cat, and Bubochka, a trainee rabbit, from the service tunnels of Eden to a crossing night on Drithane. There, a whole valley turns its lights down to watch the sky. Along the way they meet small warm creatures that nobody has a name for yet.
</p>
<p class="page-intro">
  This season stands on its own. You do not need to read anything else first. It is funny on the surface and careful underneath, and there is nothing in it a young reader should not meet. The shortest parts of each chapter are written for exactly that reader: the same events, told simply. Grown-ups reading along should know that the cat has already read their file.
</p>
<p class="page-intro">
  Episode 12 is set in the winter: a row of nine doors on Deck 7 starts going dark for a sky it cannot see, and the rabbit finds out what the boy's calendar was for.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (2 | threadForSeason).id }}/">{{ (2 | threadForSeason).name }}</a></p>

{% set seasonNumber = "2" %}
{% include "season-portraits.njk" %}
{% set hasSeasonChapters = false %}
{% set currentEpisode = "" %}
{% for chapter in collections.chapters %}
  {%- if (chapter.data.season ~ "") == seasonNumber -%}
    {%- if not hasSeasonChapters %}{% set hasSeasonChapters = true %}{% endif -%}
    {%- set episodeValue = chapter.data.episode ~ "" -%}
    {%- if episodeValue != currentEpisode -%}
      {%- if currentEpisode %}</ul></div>{% endif -%}
      {%- set currentEpisode = episodeValue -%}
      <div class="season-block">
        <h2 class="season-block__title">
          <a href="/star-rangers/seasons/s02/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
        </h2>
        <ul class="chapter-list" role="list">
    {%- endif -%}
          <li class="chapter-list__item">
            <a href="/star-rangers{{ chapter.url }}">
              <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
              <span class="chapter-list__title">{{ chapter.data.title }}</span>{%- set mins = chapter | readingMinutes -%}{% if mins %}<span class="chapter-list__time">about {{ mins }} min</span>{% endif %}
              {%- if chapter.data.location -%}
              <span class="chapter-list__loc">{{ chapter.data.location }}</span>
              {%- endif -%}
            </a>
          </li>
  {%- endif -%}
{% endfor %}
{% if hasSeasonChapters %}
  </ul></div>
{% else %}
  <p class="page-intro">No chapters published yet for this season.</p>
{% endif %}
