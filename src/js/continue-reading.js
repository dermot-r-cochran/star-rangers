/**
 * Fian Ilchruinne — "Continue reading": the last chapter this reader opened.
 *
 * Dermot, 2026-11-26, choosing the recommended reading improvements. A chapter
 * page (src/_includes/chapter.njk) carries data-continue-title and
 * data-continue-code on its <article>; opening it stores the page's own path,
 * title and code under one localStorage key. The home and Start pages carry an
 * empty, hidden `[data-continue-reading]` paragraph, which this fills and
 * unhides when something is stored.
 *
 * The same rules as presentation.js (CLAUDE.md, "The site stays static"):
 * client-local and per-origin, so a place kept on one domain never reaches
 * another, a device or the server; every storage access is wrapped; and with
 * JS off or storage blocked the paragraph simply stays hidden.
 */
(function () {
  "use strict";

  var KEY = "fi:continue-reading";

  function read() {
    try {
      var raw = window.localStorage.getItem(KEY);
      if (!raw) return null;
      var value = JSON.parse(raw);
      return value && typeof value.path === "string" && typeof value.title === "string" ? value : null;
    } catch (_) {
      return null;
    }
  }

  function write(value) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(value));
    } catch (_) {
      /* storage blocked: nothing is kept, and nothing is shown later */
    }
  }

  var chapter = document.querySelector("article[data-continue-title]");
  if (chapter) {
    write({
      path: window.location.pathname,
      title: chapter.getAttribute("data-continue-title"),
      code: chapter.getAttribute("data-continue-code") || ""
    });
    return;
  }

  var slots = document.querySelectorAll("[data-continue-reading]");
  if (!slots.length) return;
  var last = read();
  if (!last || last.path === window.location.pathname) return;

  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    slot.textContent = "";
    slot.appendChild(document.createTextNode("Continue reading: "));
    var link = document.createElement("a");
    link.href = last.path;
    link.textContent = last.title;
    slot.appendChild(link);
    if (last.code) {
      var code = document.createElement("span");
      code.className = "continue-reading__code";
      code.textContent = " " + last.code;
      slot.appendChild(code);
    }
    slot.hidden = false;
  }
})();
