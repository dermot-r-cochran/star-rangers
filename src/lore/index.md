---
layout: base.njk
title: "Lore"
description: "World-building articles about the Five Layers, the Cosmic Cascade, factions, and the rules of the Star Rangers universe."
---
<h1 class="page-title">Lore</h1>
<p class="page-intro">
  Deep-dive articles on the structure of reality, factions, cosmological laws, and the forces that
  shape the world of Star Rangers. Lore entries are written from an out-of-story perspective and
  may contain information not yet confirmed by in-story events.
</p>

{% set loreEntries = collections.lore %}
{% if loreEntries.length %}
  {% set categories = [] %}
  {% for entry in loreEntries %}
    {% set cat = entry.data.category | default("General") %}
    {% if cat not in categories %}
      {% set categories = categories.concat([cat]) %}
    {% endif %}
  {% endfor %}

  {% for cat in categories %}
  <section class="lore-category-section" aria-labelledby="lore-cat-{{ cat | lower | replace(' ', '-') }}">
    <h2 class="season-block__title" id="lore-cat-{{ cat | lower | replace(' ', '-') }}">{{ cat }}</h2>
    <div class="codex-grid">
      {% for entry in loreEntries %}
        {% if (entry.data.category | default("General")) == cat %}
        <a class="codex-card" href="{{ entry.url }}">
          <p class="codex-card__category">{{ entry.data.category | default("General") }}</p>
          <h3 class="codex-card__title">{{ entry.data.title }}</h3>
        </a>
        {% endif %}
      {% endfor %}
    </div>
  </section>
  {% endfor %}
{% else %}
<p class="page-intro">No lore articles published yet.</p>
{% endif %}
