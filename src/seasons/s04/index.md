---
layout: base.njk
title: "Season 4"
eleventyComputed:
  description: "Episodes and chapters in Season 4 of {{ site.name }}."
permalink: /seasons/s04/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 4</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/orbital-five-o.jpg" style="object-position: center 35%" alt="A raven glides along a vast pale dock hall under curving ribs, above rounded grey tug hulls in their clamps; below, dock workers in grey-blue tunics carry on with their work, some glancing up at her, and residents at the gallery rail look up openly." />
<h1 class="page-title">Season 4</h1>
<p class="page-intro">
  The Compact's five habitats each police themselves competently — and any offence organised to cross a habitat line is an offence none of them can finish. Season 4 follows Commander Kai Larsen's Orbital Five-O: the Governor's task force that works the seams between five perfect ledgers, in the open, raven included.
</p>
<p class="page-intro">
  A procedural season that stands alone: notifications filed in advance, jurisdiction enforced from the inside, and cases that live in the gaps between honest records. No prior season required — though readers of the main line will recognise the habitats, and readers of Season 2 may recognise a working method from the other end of the telescope.
</p>
<p class="page-intro">
  Episode 0 is a prologue set a year before the season, in the late autumn of 2826, when Tissadelle Shepherd was a Deputy on Eden's fold-approach watch; by the season's own year she holds higher rank elsewhere, and nothing in Episode 1 onward depends on the prologue.
</p>
<p class="page-intro">
  Episode 2 takes the unit's own limit from the other side. A bureau sends up the one crossing it cannot finish, five remainders resolve into the quarter's four words, and the sixth is a reading nobody can account for — which the structure above Five-O would happily take off its hands, if only the sentence that handed it over were true.
</p>
<p class="page-intro">
  Episode 3 is what the blank cost: in the late winter of 2828 the reading nobody could account for turns up at the head of a sheet on two crew boards, with a different cause written over it on each. Episodes 4 to 6 run through 2828: at Antariksha the task force's letter is posted under a word the Commander did not write, and somebody takes it at its word; the Field Observer finds a seam in the task force's own year and files on it herself; and a year on, the reading turns up again in two small ledgers that had been carrying it all along.
</p>
<p class="page-intro">
  Episode 7 closes the season in the autumn of 2828, on the task force's oldest open file. A form that left Eden's bureau in the Commander's hand in the late autumn of 2826, with four stamps and a gap where the fifth belonged, has been in his bottom drawer ever since. A referral from Antariksha sends him back to it, and he writes one letter for both.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (4 | threadForSeason).id }}/">{{ (4 | threadForSeason).name }}</a></p>

{% set seasonNumber = "4" %}
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
          <a href="/star-rangers/seasons/s04/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
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
  <p class="page-intro">This edition carries no chapters of this season.</p>
{% endif %}

{% include "season-nav.njk" %}
