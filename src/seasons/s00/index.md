---
layout: base.njk
title: "Founding Era"
eleventyComputed:
  description: "The prequel Founding Era of {{ site.name }} — the events that led to the founding of the Star Rangers, told from the perspectives of those who built it and those who resisted."
permalink: /seasons/s00/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Founding Era</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/season-00-foundation.jpg" alt="An empty hearing chamber with tiers of pale upholstered seats facing a long pale table that holds a shut bound book, a glass and a carafe of water, a long thick window onto red Martian ground under a dusty sky, and a pale rectangle with bolt holes on the wall where something has been taken down" />
<h1 class="page-title">Founding Era</h1>
<p class="page-intro">
  Here is the fracture before the oath. The Founding Era follows the years that made the Star Rangers both necessary and possible, from 2712 to 2723 UCSD under the last stretch of Military Space Command rule.
</p>
<p class="page-intro">
  These chapters are the record's own prehistory: the arguments, failures and stubborn people out of which the Charter was written. Read them first for how the Rangers became necessary — or after Season 1, for why Threshold Station's habits run as deep as they do. Each chapter offers several characters' viewpoints on the same scenes; no prior reading is assumed.
</p>
<p class="page-intro">
  Episodes 4 to 7 follow the Charter into its first working weeks, in the last months of 2723: Halyard Station fills its seat on the Oversight Council by a count in the room; on Mars a cadet reads the section of a paper nobody examines, beside its author, without knowing it; at Eden the Safety Corps' first board certifies the corridor and declines to pass the founding flight as flown; and the season closes on a file handed over the day it is asked for, and a letter to six families that answers nothing and is the first reply they have had.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (0 | threadForSeason).id }}/">{{ (0 | threadForSeason).name }}</a></p>

{% set seasonNumber = "0" %}
{% include "season-portraits.njk" %}
{% set hasSeasonChapters = false %}
<ul class="chapter-list" role="list">
{% for chapter in collections.chapters %}
  {%- if (chapter.data.season ~ "") == seasonNumber -%}
    {%- if not hasSeasonChapters %}{% set hasSeasonChapters = true %}{% endif -%}
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
</ul>
{% if not hasSeasonChapters %}
  <p class="page-intro">No chapters published yet for this season.</p>
{% endif %}

{% include "season-nav.njk" %}
