---
layout: base.njk
title: "Timeline"
eleventyComputed:
  description: "The canonical sequence of events in {{ site.name }} — one fixed history."
# Major events in other peoples' histories that the record holds but sets no
# year to (Dermot, 2026-10-26). Each line restates the record (the people's
# lore page, or the filing note of its Codex history) and adds nothing; a
# year enters only when the record gains one.
undated:
  - people: "Federation of Sentient Beings"
    event: "The founding compact"
    note: "Its member worlds date it by their own calendars and their own peoples' records, and the Federation has never insisted on reconciling them."
    url: "/lore/federation-of-sentient-beings/"
  - people: "Federation of Sentient Beings"
    event: "First contact with the Star Rangers"
    note: "Through the Survey Corps' fold-route mapping, decades after the Rangers' 2723 UCSD charter; the year itself is not fixed."
    url: "/lore/federation-of-sentient-beings/"
  - people: "Cerebraun Hegemony"
    event: "Meridian becomes a Hegemony subject world"
    note: "Two Hegemony survey missions took the Meridian sapients' reef-cities for geological formations before their sapience was confirmed."
    url: "/lore/planets/meridian/"
  - people: "Cerebraun Hegemony"
    event: "A seat on the Oversight Council declined"
    note: "Offered a non-voting seat, the Hegemony declined, and has declined each renewed offer since."
    url: "/lore/cerebraun-hegemony/"
  - people: "Chthonari"
    event: "The Undersong Belt becomes a Federation member territory"
    note: "A documented member territory for generations."
    url: "/lore/undersong-belt/"
  - people: "Ilveth"
    event: "The survey's first landing on Sardain"
    note: "The landing and the contact that followed from it are undated in the record and stay so."
    url: "/lore/ilveth/"
  - people: "Ollune"
    event: "Cirrane admitted to the Federation"
    note: "A member world for generations; Ollune agreement-drafting practice was adopted into Federation compact procedure generations ago."
    url: "/lore/ollune/"
  - people: "Ovruhn"
    event: "Thavren becomes a Federation member world"
    note: "Taken by the chorus's own deliberation, in the chorus's own time; the record fixes the interval no closer than unhurried."
    url: "/lore/ovruhn/"
  - people: "Prismeri"
    event: "The Federation's contact survey of Prismere"
    note: "Two preliminary species reports, a local year apart, turned out to describe one person at two points in one life. Prismere's charter membership is undated too."
    url: "/lore/prismeri/"
  - people: "Serephine Dunekin"
    event: "The Corps' first meeting with the Serephine Dunekin"
    note: "Undated and unplaced in the record."
    url: "/lore/serephine-dunekin/"
  - people: "Verdani"
    event: "Verdance joins the Federation"
    note: "Full membership, represented through the Fourfold Accord on the Federation's rotating assembly."
    url: "/lore/verdani/"
  - people: "Veyr Basaltborn"
    event: "The Corps' first meeting with the Veyr Basaltborn"
    note: "Undated in the record."
    url: "/lore/veyr-basaltborn/"
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

{%- if undated and undated.length %}
<section class="timeline-era" aria-labelledby="era-undated">
  <h2 class="timeline-era__title" id="era-undated">Undated in the record</h2>
  <p class="timeline-era__blurb">Major events in other peoples' histories that the record holds but sets no year to. Many peoples keep their own reckoning, and the Archive converts no reckoning it does not hold, so these stay out of the sequence above rather than being given a guessed place in it.</p>
  <ul class="timeline-undated">
    {%- for item in undated %}
    <li class="timeline-undated__item">
      <span class="timeline-undated__people">{{ item.people }}</span>
      <a class="timeline-event__line" href="/star-rangers{{ item.url }}">{{ item.event }}</a>
      <p class="timeline-event__desc">{{ item.note }}</p>
    </li>
    {%- endfor %}
  </ul>
</section>
{%- endif %}
