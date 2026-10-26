---
layout: base.njk
title: "Timeline"
eleventyComputed:
  description: "The canonical sequence of events in {{ site.name }} — one fixed history."
---
<img class="page-hero-image" src="/star-rangers/images/hero/timeline-clock.jpg" alt="Close-up of an old clock face printed on cracked, weathered sepia plaster, its heavy black hands across the numerals nine to two" />
<h1 class="page-title">Timeline</h1>
{#- On a children's-tier build the index speaks in the tier's register: a
    plain intro, and each entry's `plain:` line in place of its `summary`
    (the same shape src/glossary/index.md took on 2026-10-05). Keyed off the
    edition's tier, not the presentation mode, because the register is the
    tier's and a reader can switch the posture. The `summary` fallback below
    is for an entry on the tier without a `plain:` line; the Season 2 entries
    all carry one. -#}
{%- if edition.tier == "children" %}
<p class="page-intro">
  Here is what happened in the story, in order. Only things that are written down somewhere on the record are on this list. The biggest ones have a few words about them. Press one to read more.
</p>
{%- else %}
<p class="page-intro">
  This is the official sequence: what happened, when it happened, and where the record still holds. Chapters may dispute motive, memory, or meaning. This timeline keeps to confirmed fact first. Major public events are given in full; the rest of the dated record is listed by title.
</p>
{%- endif %}

{% set events = collections.timelineEvents %}
{% if events.length %}
{#- Major public events (`major: true`) show in full; every other entry is
    one line, its date and its title, so the chain of events stays whole
    without a charter and a cat sharing one weight (Dermot, 2026-10-26).
    The spans come from each entry's `era` (lib/index-grouping.js). -#}
{%- for group in events | groupTimeline %}
<section class="timeline-era" aria-labelledby="{{ group.id }}">
  <h2 class="timeline-era__title" id="{{ group.id }}">{{ group.name }}</h2>
  {%- if group.blurb %}<p class="timeline-era__blurb">{{ group.blurb }}</p>{% endif %}
  <div class="timeline" role="list" aria-label="{{ group.name }}">
    {%- for event in group.items -%}
    {%- if event.data.major %}
    <div class="timeline-event timeline-event--major" role="listitem">
      <span class="timeline-event__time">{{ event.data.timestamp | default("Unknown") }}</span>
      <div class="timeline-event__content">
        <h3 class="timeline-event__title">
          <a href="/star-rangers{{ event.url }}" style="color:inherit;text-decoration:none;">{{ event.data.title }}</a>
        </h3>
        {%- if edition.tier == "children" and event.data.plain -%}
        <p class="timeline-event__desc">{{ event.data.plain }}</p>
        {%- elif event.data.summary -%}
        <p class="timeline-event__desc">{{ event.data.summary }}</p>
        {%- endif -%}
      </div>
    </div>
    {%- else %}
    <div class="timeline-event timeline-event--minor" role="listitem">
      <span class="timeline-event__time">{{ event.data.timestamp | default("Unknown") }}</span>
      <a class="timeline-event__line" href="/star-rangers{{ event.url }}">{{ event.data.title }}</a>
    </div>
    {%- endif -%}
    {%- endfor -%}
  </div>
</section>
{%- endfor %}
{% else %}
<p class="page-intro">No timeline events recorded yet.</p>
{% endif %}
