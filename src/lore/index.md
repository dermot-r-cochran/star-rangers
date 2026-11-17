---
layout: base.njk
title: "Lore"
eleventyComputed:
  description: "World-building articles about the Five Layers, the Cosmic Cascade, factions, and the rules of {{ site.name }}."
comments: true
commentsCategory: lore
---
<img class="page-hero-image" src="/star-rangers/images/hero/lore-above-the-cloud.jpg" alt="From high on a mountain, a sea of white cloud stretches to the horizon under a deep blue sky, with two distant islands standing above it and a dark wooded ridge running down into the cloud at the lower left." />
<h1 class="page-title">Lore</h1>
<p class="page-intro">
  Start with the ground under the story: the laws, factions, civic systems, and cosmological pressures that make each choice matter. These articles step outside the narrative. Because of that, they may confirm truths the characters have not yet proved.
</p>

{% set loreEntries = collections.lore %}
{% if loreEntries.length %}
  {#- Categories ground up, A-Z within each (lib/index-grouping.js). -#}
  {%- set categories = loreEntries | groupLore -%}
  <nav class="section-jump" aria-label="Categories on this page">
    {%- for cat in categories %}
    <a href="#{{ cat.id }}">{{ cat.name }}</a>
    {%- endfor %}
  </nav>

  {% for cat in categories %}
  <section class="lore-category-section" aria-labelledby="{{ cat.id }}">
    <h2 class="season-block__title" id="{{ cat.id }}">{{ cat.name }}</h2>
    <div class="codex-grid">
      {%- for entry in cat.items -%}
        <a class="codex-card" href="/star-rangers{{ entry.url }}">
          {%- if entry.data.image -%}
          <img class="codex-card__thumb" src="/star-rangers/images/lore/{{ entry.data.image }}" alt="{{ entry.data.image_alt | default(entry.data.title) }}" />
          {%- endif -%}
          <p class="codex-card__category">{{ entry.data.category | default("General") }}</p>
          <h3 class="codex-card__title">{{ entry.data.title }}</h3>
        </a>
      {%- endfor -%}
    </div>
  </section>
  {%- endfor -%}
{% else %}
<p class="page-intro">No lore articles published yet.</p>
{% endif %}
