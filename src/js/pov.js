/**
 * Star Rangers — POV Toggle & Canon Facts
 * Progressive enhancement: the page is fully readable without JS.
 * JS adds interactive POV filtering and collapsible canon facts.
 */

(function () {
  "use strict";

  // ── POV Toggles ──────────────────────────────────────────────

  /**
   * Parse :::pov <id> ... ::: blocks in the rendered HTML.
   * Eleventy does not natively transform these; we handle them here
   * by post-processing the DOM after render.
   *
   * The Markdown source uses fenced custom containers:
   *   :::pov galahad
   *   Text…
   *   :::
   *
   * These pass through as literal text wrapped in <p> tags in standard
   * Markdown.  We identify them via data attributes injected by the
   * Nunjucks layout (pov-block class) OR via the text pattern if the
   * static render leaves raw markers.
   */
  function initPovToggles() {
    const chapter = document.querySelector(".chapter");
    if (!chapter) return;

    const controls = chapter.querySelector(".pov-controls");
    if (!controls) return;

    const buttons = Array.from(controls.querySelectorAll(".pov-btn"));
    const povBlocks = Array.from(chapter.querySelectorAll(".pov-block[data-pov]"));

    if (!povBlocks.length) return;

    // Build a map of pov id → label from button data
    const povLabels = {};
    buttons.forEach((btn) => {
      const id = btn.dataset.pov;
      if (id && id !== "all") povLabels[id] = btn.textContent.trim();
    });

    // Inject human-readable labels into POV block headers
    povBlocks.forEach((block) => {
      const id = block.dataset.pov;
      const nameEl = block.querySelector(".pov-header__name");
      if (nameEl && povLabels[id]) {
        nameEl.textContent = povLabels[id];
        // Also update the aria-label on the section
        block.setAttribute("aria-label", `POV: ${povLabels[id]}`);
      }
    });

    function showPov(selectedId) {
      povBlocks.forEach((block) => {
        const id = block.dataset.pov;
        const hide = selectedId !== "all" && id !== selectedId;
        block.setAttribute("data-pov-hidden", hide ? "true" : "false");
        block.setAttribute("aria-hidden", hide ? "true" : "false");
      });

      buttons.forEach((btn) => {
        const active = btn.dataset.pov === selectedId;
        btn.setAttribute("aria-pressed", active ? "true" : "false");
        btn.classList.toggle("pov-btn--active", active);
      });
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        showPov(this.dataset.pov);
      });
      btn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showPov(this.dataset.pov);
        }
      });
    });

    // Default: show all
    showPov("all");
  }

  // ── Canon Facts Accordion ─────────────────────────────────────

  function initCanonFacts() {
    const canonFacts = document.querySelectorAll(".canon-facts");
    canonFacts.forEach((section) => {
      const toggle = section.querySelector(".canon-facts__toggle");
      const list = section.querySelector(".canon-facts__list");
      if (!toggle || !list) return;

      // Remove 'hidden' attribute so JS can manage visibility via aria
      list.removeAttribute("hidden");
      list.style.display = "none";

      toggle.addEventListener("click", function () {
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded ? "true" : "false");
        list.style.display = expanded ? "none" : "block";
        // Rotate the arrow indicator
        const arrow = this.querySelector("[aria-hidden='true']");
        if (arrow) arrow.textContent = expanded ? "▸" : "▾";
      });
    });
  }

  // ── Navigation: Highlight current season/episode ─────────────

  function initNavHighlight() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".site-nav__list a");
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href !== "/" && currentPath.startsWith(href)) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  // ── Init ──────────────────────────────────────────────────────

  function init() {
    initPovToggles();
    initCanonFacts();
    initNavHighlight();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
