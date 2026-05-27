---
layout: base.njk
title: "Glossary"
description: "Definitions of every term, name, and concept used in Star Rangers."
---
<h1 class="page-title">Glossary</h1>
<p class="page-intro">
  Definitions of terms, names, and concepts as they are understood within the story's universe.
  Where a term has multiple in-universe interpretations, the confirmed canonical meaning is given first.
</p>

{% set terms = collections.glossary %}
{% if terms.length %}
<nav class="glossary-alpha" aria-label="Alphabetical index">
  {% set letters = [] %}
  {% for term in terms %}
    {% set firstLetter = term.data.title[0] | upper %}
    {% if firstLetter not in letters %}
      {% set letters = letters.concat([firstLetter]) %}
      <a href="#letter-{{ firstLetter }}">{{ firstLetter }}</a>
    {% endif %}
  {% endfor %}
</nav>

<dl class="glossary-list">
  {% set currentLetter = "" %}
  {% for term in terms %}
    {% set firstLetter = term.data.title[0] | upper %}
    {% if firstLetter != currentLetter %}
      {% set currentLetter = firstLetter %}
      <div class="glossary-letter-anchor" id="letter-{{ currentLetter }}">
        <h2 class="glossary-letter">{{ currentLetter }}</h2>
      </div>
    {% endif %}
    <div class="glossary-list__item">
      <dt class="glossary-list__term">
        <a href="{{ term.url }}">{{ term.data.title }}</a>
        {% if term.data.category %}
        <span class="character-badge" style="margin-left:0.5rem">{{ term.data.category }}</span>
        {% endif %}
      </dt>
      {% if term.data.short %}
      <dd class="glossary-list__def">{{ term.data.short }}</dd>
      {% endif %}
    </div>
  {% endfor %}
</dl>
{% else %}
<p class="page-intro">No glossary entries published yet.</p>
{% endif %}
