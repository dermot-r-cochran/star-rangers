---
layout: base.njk
title: "Characters"
eleventyComputed:
  description: "Profiles of every named character, being, and entity in {{ site.name }}."
---
{#- An edition may name its own hero for this page (lib/editions.js
    `sectionHeroes.characters`); the site-wide default is Dermot's own photograph
    *Watching the Sunrise* (Great South Wall, Dublin, March 2026), cropped to a banner. -#}
{% set sectionHero = edition.sectionHeroes.characters if edition.sectionHeroes else null %}
{% if sectionHero %}
<img class="page-hero-image" src="/star-rangers/images/hero/{{ sectionHero.image }}" alt="{{ sectionHero.alt }}" />
{% else %}
<img class="page-hero-image" src="/star-rangers/images/hero/characters-poolbeg-watchers.jpg" alt="Three people in dark silhouette walking along a sea wall towards a low orange sunrise, the sun a bright disc above the horizon on the right and Poolbeg lighthouse standing dark against the sky behind them, calm sea and two small buoys to the left" />
{% endif %}
<h1 class="page-title">Characters</h1>
<p class="page-intro">
  These are the named lives inside the record: officers, civilians, constructs, beings, and entities whose choices keep the frontier functioning or force it to change. Labels of kind reflect canonical classification—not how characters name themselves or one another.
</p>

{%- macro characterCard(char, level) -%}
    <a class="codex-card" href="/star-rangers{{ char.url }}">
      {%- if char.data.image -%}
      <img class="codex-card__thumb" src="/star-rangers/images/characters/{{ char.data.image }}" alt="{{ char.data.image_alt | default(char.data.title) }}" />
      {%- endif -%}
      <p class="codex-card__category">{{ char.data.species | default("Kind not recorded") }}{% if char.data.role %} · {{ char.data.role }}{% endif %}</p>
      <h{{ level }} class="codex-card__title">{{ char.data.title }}</h{{ level }}>
      {%- if char.data.aliases and char.data.aliases.length -%}
      <p style="font-size:0.8rem;color:var(--color-text-muted);margin-top:0.25rem;font-family:var(--font-ui)">
        aka {{ char.data.aliases | join(", ") }}
      </p>
      {%- endif -%}
    </a>
{%- endmacro -%}

{% set chars = collections.characters %}
{% if chars.length %}
{#- Grouped by kind, A-Z within each kind (lib/index-grouping.js). Kind is the
    record's classification from each page's `species` line; the groups rank
    nobody. A plural system is shelved once, with its members' pages beside it,
    never by the body's kind. -#}
{% set kinds = chars | groupCharacters %}
<nav class="section-jump" aria-label="Kinds on this page">
  {%- for kind in kinds %}
  <a href="#kind-{{ kind.id }}">{{ kind.name }}</a>
  {%- endfor %}
</nav>
{% for kind in kinds %}
<section class="lore-category-section" aria-labelledby="kind-{{ kind.id }}">
  <h2 class="season-block__title" id="kind-{{ kind.id }}">{{ kind.name }}</h2>
  {%- if kind.blurb %}
  <p class="page-intro">{{ kind.blurb }}</p>
  {%- endif %}
  {%- if kind.systems %}
  {%- for system in kind.systems %}
  <h3 class="codex-card__category plural-system__heading" id="system-{{ system.id }}">{{ system.heading }}</h3>
  <div class="codex-grid">
    {%- if system.page %}{{ characterCard(system.page, 4) }}{% endif -%}
    {%- for char in system.members %}{{ characterCard(char, 4) }}{% endfor -%}
  </div>
  {%- endfor %}
  {%- else %}
  <div class="codex-grid">
    {%- for char in kind.items %}{{ characterCard(char, 3) }}{% endfor -%}
  </div>
  {%- endif %}
</section>
{% endfor %}
{% else %}
<p class="page-intro">No character profiles published yet.</p>
{% endif %}
