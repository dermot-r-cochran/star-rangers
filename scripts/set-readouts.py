#!/usr/bin/env python3
"""Set exact digits on the blank readout panels of a generated frame.

LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
touched by CI. Same standing as scripts/photo-finish.py.

Why this exists. Image generators cannot be trusted with numerals: a still that
needs a time on a readout comes back with garbled digits, which is why the
lettering ban in story-bible/images.md covers every still. Some frames need the
digits anyway. The Season 1 hero is two chronometers forty seconds apart, and a
pair of blank faces cannot say *forty seconds*. So the frame is generated with
the readout panels blank, and this script sets the digits afterwards, the way
make-codex-cover.ps1 sets the words on a card over a wordless underlay. The
digits are drawn from a small stroke font defined below, so the result is the
same on every machine and needs no installed font.

The readouts in this record are matte and unlit (what-the-record-refuses.md),
so the digits are drawn flat in a colour taken from the panel itself, a step
lighter or darker than it, with no glow. Grain matching the frame is added over
them so they sit in the photograph rather than on it. Run it on the generated
frame before import-image.ps1, whose photo finish then treats frame and digits
alike.

Usage:
  python scripts/set-readouts.py IN.png OUT.png \\
      --box X,Y,W,H --text 03:10:01 \\
      --box X,Y,W,H --text 03:10:41
  python scripts/set-readouts.py IN.png OUT.png --box ... --text ... --preview

Each --box is a readout panel in pixels of the input (left, top, width,
height), measured by eye from the generated frame; each --text is the reading
for the --box before it. Characters allowed: digits and the colon.
--preview draws the boxes in red instead of setting anything, for checking
the measurements first.
"""

import argparse
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageStat

# A stroke font on a unit cell: x 0..1, y 0..1 (top to bottom). Each glyph is a
# list of polylines. Plain, even-weight figures, the kind a well-made 29th-century
# instrument would carry: no serifs, no segments.
_ARC = 10  # points per quarter arc


def _arc(cx, cy, rx, ry, a0, a1):
    import math

    pts = []
    n = max(2, int(abs(a1 - a0) / 90 * _ARC))
    for i in range(n + 1):
        a = math.radians(a0 + (a1 - a0) * i / n)
        pts.append((cx + rx * math.cos(a), cy + ry * math.sin(a)))
    return pts


GLYPHS = {
    "0": [_arc(0.5, 0.5, 0.42, 0.48, 0, 360)],
    "1": [[(0.28, 0.2), (0.55, 0.02), (0.55, 0.98)]],
    "2": [_arc(0.5, 0.28, 0.4, 0.26, 180, 360) + _arc(0.5, 0.28, 0.4, 0.26, 0, 40) + [(0.08, 0.98), (0.92, 0.98)]],
    "3": [_arc(0.5, 0.27, 0.38, 0.25, 200, 450), _arc(0.5, 0.73, 0.42, 0.25, 270, 520)],
    "4": [[(0.72, 0.98), (0.72, 0.02), (0.06, 0.7), (0.94, 0.7)]],
    "5": [[(0.86, 0.02), (0.18, 0.02), (0.13, 0.44)] + _arc(0.5, 0.68, 0.42, 0.3, 225, 505)],
    "6": [_arc(0.5, 0.7, 0.4, 0.28, 0, 360), [(0.1, 0.66), (0.22, 0.32), (0.62, 0.02)]],
    "7": [[(0.08, 0.02), (0.92, 0.02), (0.4, 0.98)]],
    "8": [_arc(0.5, 0.26, 0.34, 0.24, 0, 360), _arc(0.5, 0.74, 0.42, 0.24, 0, 360)],
    "9": [_arc(0.5, 0.3, 0.4, 0.28, 0, 360), [(0.9, 0.34), (0.78, 0.68), (0.38, 0.98)]],
}
COLON = [(0.5, 0.3), (0.5, 0.72)]  # dots, drawn as discs

DIGIT_ADVANCE = 0.72  # glyph width plus spacing, in cell heights
COLON_ADVANCE = 0.34
GLYPH_WIDTH = 0.56


def text_width(text):
    return sum(COLON_ADVANCE if ch == ":" else DIGIT_ADVANCE for ch in text) - (DIGIT_ADVANCE - GLYPH_WIDTH)


def draw_text(size, text, stroke_frac=0.11, scale=4):
    """Return an L-mode mask (W,H) with the text filling the box height."""
    w, h = size
    W, H = w * scale, h * scale
    cell = min(H * 0.62, W / text_width(text) * 0.92)
    stroke = max(1, int(cell * stroke_frac))
    total = text_width(text) * cell
    x = (W - total) / 2
    y0 = (H - cell) / 2
    mask = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(mask)
    for ch in text:
        if ch == ":":
            for cx, cy in COLON:
                px, py = x + 0.12 * cell, y0 + cy * cell
                r = stroke * 0.7
                d.ellipse([px - r, py - r, px + r, py + r], fill=255)
            x += COLON_ADVANCE * cell
            continue
        for line in GLYPHS[ch]:
            pts = [(x + px * GLYPH_WIDTH * cell, y0 + py * cell) for px, py in line]
            d.line(pts, fill=255, width=stroke, joint="curve")
            r = stroke / 2
            for px, py in (pts[0], pts[-1]):
                d.ellipse([px - r, py - r, px + r, py + r], fill=255)
        x += DIGIT_ADVANCE * cell
    return mask.resize((w, h), Image.LANCZOS)


def parse_box(s):
    try:
        x, y, w, h = (int(v) for v in s.split(","))
    except ValueError:
        raise argparse.ArgumentTypeError(f"--box wants X,Y,W,H in pixels, got {s!r}")
    if w <= 0 or h <= 0:
        raise argparse.ArgumentTypeError(f"--box width and height must be positive, got {s!r}")
    return x, y, w, h


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("input")
    ap.add_argument("output")
    ap.add_argument("--box", action="append", type=parse_box, default=[], help="X,Y,W,H of a readout panel")
    ap.add_argument("--text", action="append", default=[], help="the reading for the --box before it, e.g. 03:10:01")
    ap.add_argument("--contrast", type=float, default=0.22, help="how far the digits sit from the panel's tone, 0..1 (default 0.22)")
    ap.add_argument("--grain", type=float, default=None, help="grain sigma in levels; default measured from the panel")
    ap.add_argument("--preview", action="store_true", help="outline the boxes in red instead of setting digits")
    a = ap.parse_args(argv)

    if len(a.box) != len(a.text):
        ap.error(f"{len(a.box)} --box but {len(a.text)} --text: give one reading per panel")
    for t in a.text:
        bad = sorted(set(t) - set("0123456789:"))
        if not t or bad:
            ap.error(f"--text {t!r}: only digits and ':' are set, found {bad or 'nothing'}")

    im = Image.open(a.input).convert("RGB")
    for x, y, w, h in a.box:
        if x < 0 or y < 0 or x + w > im.width or y + h > im.height:
            ap.error(f"box {x},{y},{w},{h} runs outside the {im.width}x{im.height} frame")

    if a.preview:
        d = ImageDraw.Draw(im)
        for x, y, w, h in a.box:
            d.rectangle([x, y, x + w - 1, y + h - 1], outline=(255, 0, 0), width=max(1, im.width // 800))
        im.save(a.output)
        print(f"Preview with {len(a.box)} box(es) written to {a.output}")
        return 0

    for (x, y, w, h), text in zip(a.box, a.text):
        panel = im.crop((x, y, x + w, y + h))
        stat = ImageStat.Stat(panel)
        mean = [m for m in stat.mean]
        lum = sum(mean) / 3
        # Matte, unlit: a step lighter on a dark panel, a step darker on a pale one.
        direction = 1 if lum < 128 else -1
        ink = tuple(int(max(0, min(255, c + direction * a.contrast * (255 if direction > 0 else c)))) for c in mean)
        sigma = a.grain if a.grain is not None else max(1.5, min(12.0, sum(stat.stddev) / 3 * 0.6))

        mask = draw_text((w, h), text).filter(ImageFilter.GaussianBlur(0.6))
        ink_layer = Image.new("RGB", (w, h), ink)
        panel.paste(ink_layer, (0, 0), mask)
        # Grain over the whole panel, so digits and panel share one texture.
        noise = Image.effect_noise((w, h), sigma).convert("L")
        px = panel.load()
        npx = noise.load()
        for j in range(h):
            for i in range(w):
                n = npx[i, j] - 128
                r, g, b = px[i, j]
                px[i, j] = (max(0, min(255, r + n // 3)), max(0, min(255, g + n // 3)), max(0, min(255, b + n // 3)))
        im.paste(panel, (x, y))
        print(f"Set {text} in {x},{y},{w},{h} (panel tone {lum:.0f}, ink {ink}, grain {sigma:.1f})")

    im.save(a.output, quality=95) if a.output.lower().endswith((".jpg", ".jpeg")) else im.save(a.output)
    print(f"Wrote {a.output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
