---
layout: base.njk
title: "Timeline"
description: "The canonical sequence of events in Star Rangers — one fixed history."
---
<h1 class="page-title">Timeline</h1>
<p class="page-intro">
  One canonical timeline. Events are presented in the order they occurred, independent of the order
  they are revealed to the reader. POV blocks within chapters may interpret events differently, but
  this record reflects confirmed facts.
</p>

{% set events = collections.timelineEvents %}
{% if events.length %}
<div class="timeline" role="list" aria-label="Canonical timeline">
  {% for event in events %}
  <div class="timeline-event" role="listitem">
    <span class="timeline-event__time">{{ event.data.timestamp | default("Unknown") }}</span>
    <div class="timeline-event__content">
      <h2 class="timeline-event__title">
        <a href="{{ event.url }}" style="color:inherit;text-decoration:none;">{{ event.data.title }}</a>
      </h2>
      {% if event.data.summary %}
      <p class="timeline-event__desc">{{ event.data.summary }}</p>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% else %}
<p class="page-intro">No timeline events recorded yet.</p>
{% endif %}
