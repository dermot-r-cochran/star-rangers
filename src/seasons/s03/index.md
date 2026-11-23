---
layout: base.njk
title: "Season 3"
eleventyComputed:
  description: "Episodes and chapters in Season 3 of {{ site.name }}."
permalink: /seasons/s03/
---
<nav class="chapter-breadcrumb" aria-label="Season location">
  <ol class="breadcrumb" role="list">
    <li><a href="/star-rangers/seasons/">Seasons</a></li>
    <li aria-current="page">Season 3</li>
  </ol>
</nav>

<img class="page-hero-image" src="/star-rangers/images/hero/season-03-datacentre.jpg" alt="A long, quiet, vaulted reading hall in pale stone-grey, a row of oak tables down its middle with a few thin blank slates on them and one reader bent over a sheet at the far end. On the right a wall of closed flush pale panels; on the left a long window onto a calm grey sea, where a long curved pale hull lies low on the water and a thin trail climbs steeply into the sky." />
<h1 class="page-title">Season 3</h1>
<p class="page-intro">
  Two years into her service, Shepherd is a Principal working through an archive backlog nobody else wanted — routine review, unglamorous by design. Season 3 follows what she finds in it, and what it costs to be believed about it.
</p>
<p class="page-intro">
  A quiet season on purpose: archives, verification, and the long discipline of being right slowly. The stakes are the records themselves — what gets filed, what gets read, and who decides the difference. New readers can begin at Season 1; returning ones will recognise every habit Threshold taught her being put to work.
</p>
<p class="page-intro">
  Episode 1 closes with the rotation's end and her return to Threshold as a Section Lead. Episode 2 finds her there on general operations, where a transit window is hers to state and the Chief Pilot is in the room more often than the rooms require, and then, a Chief Ranger, through the fold to Counterpane, where every instrument asked one question answers as it does at home and the one difference is a thing no ear can hear; and home again, to a door on Earth where the department ends on somebody else's signature and the finding is made by people who never left.
</p>
<p class="page-intro">
  Episode 3 is the autumn after the door: a post falls open at the far end of a line, a word is asked of the last Chief she answered to, and the officer the season has followed is in none of its rooms. What comes out of it is a posting list with her name on it and nothing under the name, which is what the record keeps of who vouched. Its second chapter is the day the list is made good, at the post, where she assumes her first command in one line of a log and leaves a Chief's statement standing as his own.
</p>
<p class="page-intro">
  Episodes 4 to 6 are side-lights on the same years: fourteen names rehearse a ten-day carry before the fold, and a Principal writes down four minutes nothing else would have shown; in the summer of 2829, with Shepherd in neither room, her successor at Halyx has two thousand silences and the Survey's library asks what they are worth; and in the autumn the Starwarden who held the post before her has his last days. Episode 7 closes the season in the midwinter of 2830, at the post, where a Deputy writes on the remarks line of a clean close and the line the Starwarden writes instead is one she has read before, from the other end of a channel.
</p>
<p class="thread-badge">Part of <a href="/star-rangers/threads/{{ (3 | threadForSeason).id }}/">{{ (3 | threadForSeason).name }}</a></p>

{% set seasonNumber = "3" %}
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
          <a href="/star-rangers/seasons/s03/e{{ chapter.data.episode | zeroPad }}/">Episode {{ chapter.data.episode }}</a>
        </h2>
        <ul class="chapter-list" role="list">
    {%- endif -%}
          <li class="chapter-list__item">
            <a href="/star-rangers{{ chapter.url }}">
              <span class="chapter-list__code">{{ chapter.data.id | upper }}</span>
              <span class="chapter-list__title">{{ chapter.data.title }}</span>
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
