"use strict";

// lib/short-setting.js — the short form of a chapter's setting, for the cue
// under a Next link.
//
// Dermot, 2026-11-26, after the live-site check of #2142 found the cue running
// to four lines ("Eden Space Habitat, bonded hall and Detective Bureau; Halcyon
// Space Habitat, …"): "Yes, shorten it". The cue keeps the first place named
// and the year, e.g. "Eden Space Habitat · 2828 UCSD". The chapter's own
// header still carries the full location and timestamp, and the cue's title
// attribute carries them too, so nothing is lost; the short form only cuts,
// it never rewords.

// The first clause: text before the first ";", " — " or ",". A parenthesis
// is kept whole, so "Drithane (Bríd System), …" keeps "(Bríd System)".
function firstClause(text) {
  if (typeof text !== "string") return "";
  const trimmed = text.trim();
  let depth = 0;
  for (let i = 0; i < trimmed.length; i++) {
    const c = trimmed[i];
    if (c === "(") depth++;
    else if (c === ")") depth = Math.max(0, depth - 1);
    else if (depth === 0) {
      if (c === ";" || c === ",") return trimmed.slice(0, i).trim();
      if (c === "—" || c === "–") return trimmed.slice(0, i).trim();
    }
  }
  return trimmed;
}

function shortLocation(location) {
  return firstClause(location);
}

// A dated timestamp keeps its year ("2828 UCSD, Late Winter — …" → "2828
// UCSD"); an undated one keeps its first clause.
function shortTimestamp(timestamp) {
  if (typeof timestamp !== "string") return "";
  const year = timestamp.trim().match(/^(\d{3,5} UCSD)\b/);
  return year ? year[1] : firstClause(timestamp);
}

function shortSetting(location, timestamp) {
  const place = shortLocation(location);
  const when = shortTimestamp(timestamp);
  return [place, when].filter(Boolean).join(" · ");
}

module.exports = { firstClause, shortLocation, shortTimestamp, shortSetting };
