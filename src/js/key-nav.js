/**
 * Fian Ilchruinne — the Left and Right arrow keys follow Previous and Next.
 *
 * Dermot, 2026-11-26, item 5 of the reading improvements: *"Now do item 5, the
 * arrow keys"*. On a page with a navigation block marked `data-key-nav` (a
 * chapter's Previous/Next, an episode's neighbours, a scene page's
 * follow-the-character links), Left goes to the previous link and Right to the
 * next. Nothing else changes, and with JS off the links work as before.
 *
 * It stands aside whenever the keys mean something else: in a text field, a
 * select or anything editable; on a focused video or audio player, where Left
 * and Right seek (the critic read of #2132 to #2146, 2026-11-26: Right on the
 * focused clip of S01E01C03 left the chapter); with Alt, Ctrl, Meta or Shift
 * held (Alt+Left is the browser's own Back); and when another handler has
 * already taken the key.
 */
(function () {
  "use strict";

  var nav = document.querySelector("nav[data-key-nav]");
  if (!nav) return;
  var prev = nav.querySelector("a.chapter-pagination__prev");
  var next = nav.querySelector("a.chapter-pagination__next");
  if (!prev && !next) return;

  function typing(target) {
    if (!target || !target.tagName) return false;
    var tag = target.tagName.toLowerCase();
    if (tag === "video" || tag === "audio") return true;
    return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
  }

  document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (typing(event.target)) return;
    var link = event.key === "ArrowLeft" ? prev : event.key === "ArrowRight" ? next : null;
    if (!link) return;
    event.preventDefault();
    window.location.href = link.href;
  });
})();
