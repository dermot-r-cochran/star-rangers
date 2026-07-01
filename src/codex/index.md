---
layout: base.njk
title: "Codex"
description: "In-universe documents, edicts, logs, and annotated records from Star Rangers."
---
<h1 class="page-title">Codex</h1>
<p class="page-intro">
  In-universe documents: field logs, formal edicts, intercepted transmissions, annotated maps, and
  observer records. These are primary sources — they may be incomplete, biased, or intentionally
  misleading.
</p>

{% set codexEntries = collections.codex %}
{% if codexEntries.length %}
<div class="codex-grid">
  {% for entry in codexEntries %}
  <a class="codex-card" href="/star-rangers{{ entry.url }}">
    {% if entry.data.category %}
    <p class="codex-card__category">{{ entry.data.category }}</p>
    {% endif %}
    <h2 class="codex-card__title">{{ entry.data.title }}</h2>
  </a>
  {% endfor %}
</div>
{% else %}
<p class="page-intro">No codex entries published yet.</p>
{% endif %}
