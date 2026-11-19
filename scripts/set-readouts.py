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

Running readouts on a clip (19 November 2026, for the Lúnasa film):
  python scripts/set-readouts.py video TAKE.mp4 OUT.mp4 \\
      --box X,Y,W,H --start 03:59:52 --box X,Y,W,H --start 03:59:12 --track
  python scripts/set-readouts.py video STILL.png OUT.mp4 --hold 10 --box ... --start ...

Each panel reads its --start at the first frame plus the whole seconds of
running time, counted from the frame index, so two panels set forty seconds
apart stay so on every frame. --track measures the camera against the first
frame (a whole-frame affine fit) and fails the take (exit 1) if a panel
drifts more than --max-drift pixels. Grok's "fixed camera" pushes in about
3% over ten seconds even with the mount named (four takes, 19 November
2026), so --stabilise warps every frame back onto the first, and
--crop X,Y trims the black edges that leaves (about 20,11 at 720p).
Needs OpenCV (cv2) and numpy. The output is silent; the take's own sound is
laid back in the cut.
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

    for box, text in zip(a.box, a.text):
        ink, lum, sigma = set_panel(im, box, text, a.contrast, a.grain)
        print(f"Set {text} in {','.join(map(str, box))} (panel tone {lum:.0f}, ink {ink}, grain {sigma:.1f})")

    im.save(a.output, quality=95) if a.output.lower().endswith((".jpg", ".jpeg")) else im.save(a.output)
    print(f"Wrote {a.output}")
    return 0


def set_panel(im, box, text, contrast=0.22, grain=None, ink=None, sigma=None, rng=None):
    """Set `text` on the panel `box` of the RGB image `im`, in place.

    The ink colour and grain are measured from the panel unless given, so a
    video can measure them once on its first frame and hold them steady."""
    import numpy as np

    x, y, w, h = box
    panel = im.crop((x, y, x + w, y + h))
    stat = ImageStat.Stat(panel)
    mean = list(stat.mean)
    lum = sum(mean) / 3
    if ink is None:
        # Matte, unlit: a step lighter on a dark panel, a step darker on a pale one.
        direction = 1 if lum < 128 else -1
        ink = tuple(int(max(0, min(255, c + direction * contrast * (255 if direction > 0 else c)))) for c in mean)
    if sigma is None:
        sigma = grain if grain is not None else max(1.5, min(12.0, sum(stat.stddev) / 3 * 0.6))

    mask = draw_text((w, h), text).filter(ImageFilter.GaussianBlur(0.6))
    panel.paste(Image.new("RGB", (w, h), ink), (0, 0), mask)
    # Grain over the whole panel, so digits and panel share one texture.
    rng = rng or np.random.default_rng()
    arr = np.asarray(panel, dtype=np.int16)
    noise = np.floor(rng.normal(0, sigma, (h, w)) / 3).astype(np.int16)[..., None]
    panel = Image.fromarray(np.clip(arr + noise, 0, 255).astype(np.uint8))
    im.paste(panel, (x, y))
    return ink, lum, sigma


def parse_clock(s):
    h, m, sec = (int(v) for v in s.split(":"))
    return h * 3600 + m * 60 + sec


def fmt_clock(n):
    n %= 86400
    return f"{n // 3600:02d}:{n // 60 % 60:02d}:{n % 60:02d}"


def video_main(argv):
    """Set running readouts on every frame of a clip (or of a still held).

    Each --box gets a --start reading: the time the panel shows at the clip's
    first frame. At running time t seconds a panel reads start + floor(t), so
    two panels set 40 seconds apart stay exactly 40 seconds apart on every
    frame. --track follows each panel from frame to frame by template match
    and reports the largest drift, the judging line for a take whose mount
    must hold."""
    import cv2
    import numpy as np

    ap = argparse.ArgumentParser(prog="set-readouts.py video", description=video_main.__doc__)
    ap.add_argument("input", help="a clip, or a still with --hold")
    ap.add_argument("output", help="an .mp4")
    ap.add_argument("--box", action="append", type=parse_box, default=[])
    ap.add_argument("--start", action="append", default=[], help="HH:MM:SS shown by the --box before it at t=0")
    ap.add_argument("--hold", type=float, help="seconds to hold a still input for")
    ap.add_argument("--fps", type=int, default=24, help="frame rate when holding a still (default 24)")
    ap.add_argument("--width", type=int, help="scale a held still to this width first (boxes are in the scaled frame)")
    ap.add_argument("--contrast", type=float, default=0.22)
    ap.add_argument("--track", action="store_true", help="measure the camera's movement against the first frame; report each panel's drift")
    ap.add_argument("--max-drift", type=int, default=4, help="pixels of drift that fail the take (default 4)")
    ap.add_argument("--stabilise", action="store_true",
                    help="warp every frame back onto the first, so a camera that crept holds still; implies --track")
    ap.add_argument("--crop", help="X,Y: trim this many pixels from each side and top/bottom after setting, "
                                   "and scale back to the frame size (for the black edges --stabilise leaves)")
    a = ap.parse_args(argv)
    if a.stabilise:
        a.track = True
    crop = tuple(int(v) for v in a.crop.split(",")) if a.crop else None
    if len(a.box) != len(a.start) or not a.box:
        ap.error("give one --start per --box")
    starts = [parse_clock(s) for s in a.start]

    def frames():
        if a.hold:
            im = Image.open(a.input).convert("RGB")
            if a.width:
                im = im.resize((a.width, round(im.height * a.width / im.width / 2) * 2), Image.LANCZOS)
            for i in range(round(a.hold * a.fps)):
                yield i / a.fps, im.copy(), a.fps
        else:
            c = cv2.VideoCapture(a.input)
            rate = c.get(cv2.CAP_PROP_FPS)
            if not c.isOpened() or not rate:
                ap.error(f"cannot read {a.input}")
            i = 0
            while True:
                ok, f = c.read()
                if not ok:
                    break
                # Time from the frame index, so the count is exact even if
                # the container's timestamps are not.
                yield i / rate, Image.fromarray(cv2.cvtColor(f, cv2.COLOR_BGR2RGB)), rate
                i += 1

    out = None
    inks, sigmas, tmpl, drift = {}, {}, {}, [0] * len(a.box)
    rng = np.random.default_rng(7)
    t_first = None
    shown = [[] for _ in a.box]
    for t, im, rate in frames():
        if t_first is None:
            t_first = t
        t -= t_first
        if out is None:
            out = cv2.VideoWriter(a.output, cv2.VideoWriter_fourcc(*"mp4v"), float(rate), (im.width, im.height))
            if not out.isOpened():
                ap.error(f"cannot write {a.output}")
        if a.track:
            # Whole-frame affine against the first frame (ECC, at half size,
            # with a 30px border ignored), not a template match on the panel:
            # a blank panel matches itself almost anywhere, which read a
            # still wall as 8px of drift (19 Nov 2026).
            g = cv2.GaussianBlur(np.asarray(im.convert("L").resize((im.width // 2, im.height // 2)), np.float32) / 255, (5, 5), 0)
            if "ref" not in tmpl:
                tmpl["ref"], tmpl["warp"] = g, np.eye(2, 3, dtype=np.float32)
                tmpl["mask"] = np.zeros(g.shape, np.uint8)
                tmpl["mask"][30:-30, 30:-30] = 255
            else:
                try:
                    _, tmpl["warp"] = cv2.findTransformECC(
                        tmpl["ref"], g, tmpl["warp"], cv2.MOTION_AFFINE,
                        (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 100, 1e-6), tmpl["mask"], 5)
                except cv2.error:
                    pass
            wm = tmpl["warp"].astype(np.float32).copy()
            wm[:, 2] *= 2  # back to full-size pixels
            if a.stabilise:
                im = Image.fromarray(cv2.warpAffine(np.asarray(im), wm, (im.width, im.height),
                                                    flags=cv2.INTER_LANCZOS4 + cv2.WARP_INVERSE_MAP))
        for k, (box, s0) in enumerate(zip(a.box, starts)):
            x, y, w, h = box
            if a.track:
                pts = np.array([[x, y, 1], [x + w, y, 1], [x, y + h, 1], [x + w, y + h, 1]], float).T
                moved = wm.astype(float) @ pts
                drift[k] = max(drift[k], int(np.ceil(np.abs(moved - pts[:2]).max())))
                if not a.stabilise:
                    cx, cy = moved.mean(axis=1) - pts[:2].mean(axis=1)
                    box = (x + int(round(cx)), y + int(round(cy)), w, h)
            text = fmt_clock(s0 + int(t + 1e-6))
            if not shown[k] or shown[k][-1][1] != text:
                shown[k].append((round(t, 3), text))
            inks[k], _, sigmas[k] = set_panel(im, box, text, a.contrast, ink=inks.get(k), sigma=sigmas.get(k), rng=rng)
        frame = np.asarray(im)
        if crop:
            cx, cy = crop
            frame = cv2.resize(frame[cy:im.height - cy, cx:im.width - cx], (im.width, im.height),
                               interpolation=cv2.INTER_LANCZOS4)
        out.write(cv2.cvtColor(frame, cv2.COLOR_RGB2BGR))
    out.release()

    for k, seq in enumerate(shown):
        turns = [f"{t:.3f}s {txt}" for t, txt in seq if txt.endswith(":00")]
        print(f"panel {k + 1}: {seq[0][1]} to {seq[-1][1]}, {len(seq)} readings; on the minute: {', '.join(turns) or 'none'}")
    if a.track:
        for k, d in enumerate(drift):
            if a.stabilise:
                print(f"panel {k + 1}: the camera moved it up to {d}px; stabilised, so it holds")
            else:
                print(f"panel {k + 1}: largest drift {d}px ({'FAIL' if d > a.max_drift else 'holds'})")
    print(f"Wrote {a.output}")
    return 1 if a.track and not a.stabilise and max(drift) > a.max_drift else 0


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "video":
        sys.exit(video_main(sys.argv[2:]))
    sys.exit(main())
