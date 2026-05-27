---
layout: base.njk
title: "Characters"
description: "Profiles of every named character, being, and entity in Star Rangers."
---
<h1 class="page-title">Characters</h1>
<p class="page-intro">
  Every named person, being, construct, or entity that appears in the story. Species labels reflect
  canonical classification — not how characters describe themselves or each other.
</p>

{% set chars = collections.characters %}
{% if chars.length %}
<div class="codex-grid">
  {% for char in chars %}
  <a class="codex-card" href="{{ char.url }}">
    <p class="codex-card__category">{{ char.data.species | default("Unknown") }}{% if char.data.role %} · {{ char.data.role }}{% endif %}</p>
    <h2 class="codex-card__title">{{ char.data.title }}</h2>
    {% if char.data.aliases and char.data.aliases.length %}
    <p style="font-size:0.8rem;color:var(--color-text-muted);margin-top:0.25rem;font-family:var(--font-ui)">
      aka {{ char.data.aliases | join(", ") }}
    </p>
    {% endif %}
  </a>
  {% endfor %}
</div>
{% else %}
<p class="page-intro">No character profiles published yet.</p>
{% endif %}
