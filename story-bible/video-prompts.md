# Video prompts — generation and provenance

The prompt-of-record for moving images, and the house motion signature they
share. Third of the family: `images.md` and `image-prompts.md` cover stills,
[`music-prompts.md`](music-prompts.md) covers audio, this covers video. Kept in
`story-bible/`, never published.

**Why this file exists.** `src/video/` held two files (one since 18 September
2026, below) and neither has a prompt
recorded anywhere — the same gap the audio check found on 20 August 2026, in the
one remaining medium. It is worse here in two specific ways:

- **`grok-video-2026-05-10.mp4` is referenced by nothing.** Not by a page, not by
  a template, not by a script. 30 s, 448×672, 4.5 MB, sitting in the repo. An
  unreferenced image fails `npm test`; an unreferenced video is invisible to
  every gate the project has. **Identified 18 September 2026:** Dermot re-sent
  the same file (byte-identical by checksum, generator filename dated 11 May)
  with the direction in `intake-2026-09-18.md`. It is the earliest Grok-era
  Tissadelle — red hair long and loose, a fitted navy-and-silver costume
  uniform with a spiral badge, heels, at a starship viewport over a nebula,
  speaking or singing to camera — in the costume uniform the 5 September
  portrait regeneration replaced. Three shapes put in that intake's *Left
  open*, C, and ruled the same day (*Recommendations accepted*): it stays
  where it is, identified, until this file's own question is ruled. **Ruled
  and removed the same day**, Dermot's instruction verbatim *Remove the
  orphan video from src/video*: the file is deleted from `src/video/`, not
  parked, on the same footing as the 5 September source clip — he holds the
  original, and nothing in the repository referenced it.
- **`baby-universe.mp4` is not really a video.** 4:02 at **1 fps** — one still
  image held over the audio, letterboxed to 854×480 with a third-party
  watermark. It works, and it is 19 MB to show one picture.

**Rule going forward:** no generated video enters the repo without an entry here.

---

## The reference file, read 20 August 2026

`InnerSpaceBloom_3.mp4`, supplied as the current state of the art for this kind
of piece. 854×480, 3:25, **one still frame for the entire runtime**, AAC audio
with a hard shelf at ~16 kHz (so the audio was already lossy before it was
muxed). Same production pattern as `baby-universe.mp4`.

Four things to fix in the next one, in the order they cost:

1. **The lettering is garbled.** The card reads *"Healng. Sleeep."* and
   *"Live Concert oororing"*. This is the failure `images.md` already names —
   a generator cannot spell, which is why every codex title card is built by
   `scripts/make-codex-cover.ps1` instead. **Title text is composited in the
   edit, never generated in the frame.** The generator makes the picture; the
   words go on afterwards, in a typeface, spelled correctly.
2. **480p.** The site's own still images are ~1600 px on the long edge. A video
   at 854×480 is below the standard the pictures beside it already meet. Deliver
   1920×1080.
3. **A still held for three and a half minutes is not a video.** If the piece is
   genuinely one image, ship it as **an image plus an audio player** — exactly
   what `src/codex/ballad-of-the-stars.md` already does, at a quarter of the
   bytes and with the picture at full resolution. Reach for video when something
   moves.
4. **"Live Concert Recording" claims a provenance the file does not have.** Worth
   a decision rather than a fix, and it is Dermot's: this is a site whose whole
   temper is *who says so*, whose codex entries state exactly what each recording
   is and how it reached the archive, and whose fan-work rule turns on the
   difference between referencing and endorsing. A generated track captioned as a
   live recording is the one kind of label the rest of the project is built to
   avoid. Say what it is; the piece loses nothing.

None of that is a judgement on the track, which is not what was asked about and
is not mine to judge. It is a judgement on the container.

**A second file, `RotationalHum_1.mp4`, arrived the same day** — 4:02, same
854×480, same 1 fps still-over-audio pattern, so defects 2 and 3 apply to it
unchanged. Defect 1 does not: **its card is the best of the supplied stills.** A
ribbed black rotor-like form narrowing to a waist, standing on a pale floor with
its own reflection under it, no lettering in the picture at all and the title
composited cleanly by the tool. It is enigmatic without straining, it is a matte
object in real light, and it is exactly what a still should be if a piece is
going to be one. It became scene 11 below.

### The one supplied Grok clip, read the same way

`grok_video_20260605000549.mp4` — 30 s, 448×672, 24 fps with audio: three
dancers in neon bodysuits shuffling on a club stage under moving lights, an LED
wall behind them reading *SHUFFLE TRANSCENDENCE* (and, in two frames, not quite
reading it). It is competent and it moves well, which is the case for keeping
Grok in the pipeline.

**Three notes, one of which is a canon flag:**

- **Low-gravity shuffle dance is not canon.** It comes from the 26 July intake,
  and that intake's own check column marks it — with the cross-species
  translation methodology — as *"Neither exists in canon"*. Establishing it is a
  lore or glossary decision, not something a video settles.
- **If it does get established, the low gravity is the entire point.** The intake
  describes microgravity drift, magnetic-sole footwork and tether-assisted spins
  — *"movement vocabulary impossible in full gravity"*. This clip is a full-gravity
  club floor, which is the one version that says nothing the reader could not see
  on Earth tonight. The shot to want is a dancer who **lands too late**, which is
  also the house signature.
- **Text in frame, again**, and garbled in two frames out of eight. Third file
  in a row. The rule is not a preference.

And the same register drift as the band cards: an arena, a crowd, matched
costumes, moving lights. Slipwave played dock common rooms. Whatever this clip
is for, it is not them.

### The format already has an in-universe reading

Before treating the still-over-audio wrapper as merely a limitation: the record
has already absorbed it. `src/codex/paper-galaxies-audit-dialogue.md` audits a
recovered fragment consisting of *"a single held frame, a singer before a
painted, swirling field of light standing in for a galaxy. Audio: one
performance, repeating"* — which is this production pattern, described from
inside the world, before anyone here called it a defect.

And Sen's verdict on the backdrop is a sharper version of everything above:
*"paper, not physics. It is built to read as cosmos from the audience's seat and
nowhere else. Step around it and there is nothing behind the light."*

That is the house instruction working as intended — a limit of the medium
answered from inside the story rather than shrugged at. **It does not excuse the
fixable things.** A garbled word and a 480p master are errors, and the standing
rule is that a genuine mistake gets fixed rather than diegetically excused. What
the audit earns is the *format*: a held frame over a repeating performance is a
real kind of artifact in this setting, not a shortfall, provided the frame is
worth holding.

**Disclosure about this reading:** I did not hear the audio. Everything above and
in the timed plan below comes from the file's structure, a waveform render and a
log-scale spectrogram — a machine reading, good for where sections start and stop
and useless for whether any of it is any good. Check the plan against your own
ears before cutting to it.

---

## What governs

### The target, and the new word

The standing target (`images.md`, 12 August 2026) is *enigmatic and haunting,
with beauty, mystery, hope and serenity woven through*. Dermot's direction of
**20 August 2026** adds one: **beautiful, enigmatic, haunting, dramatic.**

*Dramatic* is not in the earlier line and does not contradict it — it scopes it.
See `music-prompts.md`'s note on the same direction: **a footer loop and a film
are different jobs.** The loop plays under someone reading and must not compete
with the prose. A video is a thing someone chose to watch, gave three minutes to,
and is looking directly at. Drama is what that attention is for, and withholding
it there is not restraint, it is just quiet.

The horror line does not move. Dramatic means *stakes and structure* — a shape
that arrives somewhere — not shock. Nothing lunges at the camera, and the dark
fact is still hinted rather than depicted.

### What a generator may make

**The camera rule extends to video** (Dermot, 11 October 2026). The 3
September exemption in `images.md` governs moving images exactly as it
governs stills: a generator may make only what no camera can — a non-human
body, a habitat, an artificial mind, an artefact, a person who does not
exist, a fictional character whatever their species — and anything a camera
can film comes from Dermot's own footage or does not go in. Every clip the
pipeline touches has its prompt kept in this file and stays in this
repository. The site's modesty bar and the tone rule apply to every frame.

**A generated clip is footage recorded inside the world** (Dermot, 11 October
2026, verbatim: *"a generated image or video should look like it was taken from
a contemporary video graphic or photographic device, for example 29th
century"*). It is what a 29th-century recording device, held or mounted by
someone in the record, would have captured — the motion counterpart of the 29
September rule for stills in `images.md`. It reads as real footage in every
physical respect, with no overlays, readouts or date stamps. A scene set before
cameras existed (a Currach-era ark, a 1216 AD event) is still shot as if by a
29th-century device, as a reconstruction or archive record made at the story's
present (his choice the same day), never in a period film look.

### The camera is a witness

The strongest rule here, and it comes straight out of how the prose works:
**there is no omniscient narrator anywhere in this project**, only named
viewpoints, each withholding what the others supply. The camera inherits that.

- **No impossible camera.** No drone flight through a sealed hull, no move
  through solid matter, no orbital pull-back that no instrument was in a position
  to take. If no person and no mounted instrument could have been where the lens
  is, the shot is narrating rather than witnessing.
- **The frame knows less than the scene.** Something is usually out of shot, and
  it is usually the thing being reacted to.
- **Instrument footage is a legitimate viewpoint** — a fixed dock camera, a hull
  mount, a survey rig — and often the better one. It is the form the record
  itself would hold.

### Light is diegetic

From `src/lore/narrative-works-and-their-adaptation.md`, which already settles
what audiovisual work looks like in this setting: imagery on matte unlit surfaces
read by ambient light, *"nothing glowing, nothing projected"* — closer to a
scored and illustrated record than to a film. So: **no holographic displays, no
glowing interfaces, no projected UI**, all three of which the 26 July intake
listed among refused tropes, and which every generator reaches for the moment it
hears "spaceship". Light comes from lamps, windows, work lights, stars and fires.

### No text in frame

Not a stylistic preference — see defect 1. No signage, no readouts, no name
tapes, no console lettering, no subtitles baked in. Carry it in every negative
prompt, and composite anything the piece genuinely needs.

---

## The house motion signature

The audio has three anchors and the video shares them, because they are facts
about the setting rather than facts about a medium:

1. **The hum** — everything is on something that is running. A frame is never
   perfectly still: there is always the faintest structural vibration, the kind a
   camera resting on a bulkhead picks up.
2. **The drift** — the *slipwave* signature. Movement is slow, continuous and
   never corrects: a push that does not arrive, a drift that does not settle. No
   locked-off tripod, no snap zoom, no whip pan.
3. **The forty seconds** — where two things ought to be in step, one is very
   slightly behind, and stays behind.

Plus two of pace: **long takes, few cuts**, and **cut on the music's structure,
never on its beat.** A cut on every fourth bar is a promo; this is not one.

### Shared preamble

> Slow continuous camera drift, never locked off and never settling. Long
> unbroken take. Diegetic light only — work lamps, window light, starlight,
> fire; nothing glows that would not glow. Matte surfaces, real materials, dust
> and wear. Deep shadow with detail retained in it. Restrained, patient,
> unhurried, no event arriving suddenly. Cinematic, filmic grain, shallow depth
> of field. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps.

### Shared negative

> No on-screen text, letters, numbers, signage, subtitles or watermarks. No
> holograms, holographic displays, projected interfaces, glowing UI or floating
> icons. No lens flares, no light streaks, no volumetric god rays as decoration.
> No drone flythrough, no crash zoom, no whip pan, no camera passing through
> solid objects. No jump scares, no sudden movement toward camera, no gore, no
> horror imagery. No time-lapse clouds, no slow-motion explosion, no
> hyperspace star streaks. Not a music-video montage, not a trailer.

### Tools

**Current tool: Grok Imagine, and it is genuinely well suited to two of the four
jobs here.** It is fast, cheap, generates native audio, and its clip length —
6–15 s, extendable to about 30 s by chaining — is the right size for the scene
library below, where nearly every entry is one held shot rather than a sequence.
The 30 s portrait clip already in `src/video/` is exactly its output shape.

**How it is reached** (Dermot, 11 October 2026): Grok Imagine is driven through
the Claude in Chrome extension, in Dermot's own signed-in browser. A cloud
session cannot reach it unless it is linked to his computer, so generation is a
desktop step (`CLAUDE.md`, *Work that needs the desktop*); writing the prompt
into this file is not. The session that drives it runs on Opus, because
generating submits from his account (`CLAUDE.md`, *Which model does which
work*). Download each kept clip with its prompt, and record both here before it
is filed.

**Where it stops, measured against this file's own specs:**

- **720p is the ceiling** (480p on the entry tier), against a site whose still
  images are ~1600 px on the long edge. A Grok clip cannot be finished at 1080p,
  only upscaled, and upscaled footage next to native footage reads instantly.
- **Portrait by default.** Fine for a social cut, wrong for anything that sits
  in a page beside 16:9 stills.
- **Camera control is its weak axis**, and the house motion signature is almost
  entirely camera: a slow push that does not arrive, a drift that never settles,
  no cut. That is the one thing to buy elsewhere.

**So: keep Grok for what it is good at.** Look development, testing a framing
before spending on it, and any shot where the subject moves and the camera
merely watches. Roughs are worth more than they look — half the scenes below
will turn out wrong in ways only a moving version reveals.

**For finishing, keyed to the shot rather than ranked:**

| Shot | Tool | Why |
|---|---|---|
| Camera-led — scenes 1, 2, 3, 12 | **Runway Gen-4.5** | The strongest at taking camera direction and holding it, plus generative editing for fixing one element without re-rolling. The whole house signature lives on this axis. |
| Material and naturalistic — 7, 8, 11 | **Veo 3.1** | Closest to high-end stock footage, best on natural surfaces, fabric, dust and hair, native audio, 1080p. |
| Anything with people moving — 3 | **Kling 3.0** | Human motion is its axis. |

Two notes with dates on them, because this moves fast: **Sora 2 was deprecated
in April 2026** with its API shutting down that September, so do not build a
pipeline on it; and **Seedance 2.0 and HappyHorse-1.0** took the top leaderboard
slots in early 2026 without me having tested either against this brief. Check
before committing to a subscription — this table will go stale faster than
anything else in the file.

**The one thing no generator does:** the title text. Composite it afterwards, in
a real typeface, spelled correctly. That is not a tool recommendation, it is the
same rule as everywhere else here.

### Delivery

- **1920×1080, 24 fps** as the default. Vertical 1080×1920 only for a social cut,
  generated as its own frame rather than cropped out of the wide one.
- **If a piece is Grok-sourced end to end, hold the whole thing at 720p 16:9**
  rather than mixing tiers. Consistency reads better than a resolution number,
  and a uniformly 720p piece looks made; a 480p shot inside a 1080p one looks
  broken.
- **Generate 5–10 s clips and assemble.** No current tool holds a coherent
  three-minute take, and pretending otherwise is what produces the drifting-face
  problem. A 3½-minute piece is 20–30 generations, most of them discarded.
- **Cut, do not dissolve, unless the music dissolves.** The house dissolve is a
  slow one across a held tone.
- **Never upscale-stretch a 480p source to sit beside 1080p footage.** It reads
  instantly and it reads as carelessness.
- Keep the surviving clips and their prompts. An assembled piece whose sources
  are gone cannot be re-cut, which is this file's whole subject.

---

## Scene library

Each is a single generated clip, canon-grounded, framed from a viewpoint someone
could have occupied. Paste the shared preamble ahead and the shared negative
behind. **All are proposals** — a video attached to a codex entry is
publication-adjacent, and the scenes touching narrative ground are draft-and-stop.

### 1. The forty seconds

> Two mechanical instrument dials side by side on a worn bulkhead panel in a
> dim station corridor, lit by one amber work lamp. Both sweep hands move
> steadily; one is a fraction behind the other and never catches up. Slow push
> in over eight seconds. Nobody present. Dust in the lamp light.

The premise of the entire work in one shot, and it needs no text to say so.

### 2. Half-light causeway

> A long enclosed dock causeway at half-light, empty, viewed from one end. Wet
> metal floor, handrails, a row of failing lamps down one side, one lamp near
> the far end burning a different colour to all the others. Slow drift forward,
> never reaching the end. Cold blue ambient, one warm source.

Straight out of the anthem's own lines — *every dock has a light it can't
explain*.

### 3. The muster

> A crowd of young people in dark service dress standing close together in a
> large hard-walled hall, singing. Camera at head height **inside** the group,
> not in front of it, drifting slowly past shoulders and faces in profile. No
> stage, no conductor, no audience. Overhead industrial light, faces half in
> shadow.

Pairs with `music-prompts.md`'s Take B. The camera being inside the group rather
than facing it is the shot.

### 4. The empty berth

> A vacant docking berth seen through a scratched observation window at night.
> Mooring clamps open, guide lights still cycling for a ship that is not there,
> a barrier line across the walkway. Static frame with a faint structural
> vibration. One figure out of focus in the foreground reflection, still.

The Ballad's register — hint at the dark fact, never depict it.

### 5. Inner space bloom

> Total darkness. One small point of warm light appears off-centre and begins,
> very slowly, to acquire structure — filaments, a faint spiral, a
> shell — as if something is organising rather than exploding. Extremely slow
> outward drift. No debris, no shockwave, no sound-implied impact. Vast scale
> implied by how slowly it changes.

The uploaded track's own title, and the one scene where the music can be
dramatic without anything being violent. **Note the canon caution:** if this is
ever attached to *Baby Universe*, that codex entry deliberately declines to
resolve whether the song's reading is true, and a picture that shows it happening
resolves it. Keep it abstract enough to remain a song's image rather than the
record's finding.

### 6. The Undersong

> A dark stone chamber cut by hand, dry dust on a level floor. The dust shifts
> and settles into clean geometric standing-wave patterns, then reorganises into
> another. Nothing visible causes it. Slow overhead drift. Faint amber light
> from a single opening.

Shows resonance without putting a Chthonari on screen and without inventing one.

### 7. The Garden Core

> A cultivated terrace inside a rotating habitat, humid air, working lamps
> among green growth, the curve of the floor rising away in the far distance. A
> single leaf falls far too slowly and lands without sound. Handheld drift at
> walking height.

Variable gravity carried by one falling leaf instead of by exposition.

### 8. Prismere

> A silicate-carbon biosphere: living tissue built of glass and crystal,
> bioluminescent throughout, the world producing its own light. Translucent
> forms, soft shifting colour washes, dense particulate haze. Slow drift between
> two crystal masses. No figures.

Deliberately reuses the shared preamble already recorded in `image-prompts.md`
for the Prismere cluster, so the moving version and the stills read as one place.

### 9. Both ends of a fold

> Two shots of the same short length, cut together with nothing between them: a
> ship's running lights receding from a quiet transit marker, then the same
> class of lights approaching a different marker under a different sky. Static
> frames, long holds. Nothing dramatic happens in either.

*Nothing has ever been lost inside a fold, only at the two ends of one.* The
absence of a transit shot is the point, and a generator will supply star streaks
unless the negative forbids them.

### 10. Off the roster

> Close on a hand in service dress at a wall-mounted crew board in a corridor,
> lifting one name plate out of a slot and closing the empty space with a
> finger. No face in frame. One overhead light. Held four seconds after the hand
> leaves.

No lettering: the plate is out of focus or turned away. What it says is not the
information.

---

### 11. The rotor

> A large ribbed metal rotor assembly in a maintenance space, seen side-on from
> a catwalk. Stacked discs narrowing to a waist at the centre, matte black,
> worked and worn. It is turning slowly enough that only the surface texture
> shows it. One caged work lamp, deep shadow behind. Camera drifts a few
> degrees; nothing else happens.

The hum with a body. Shape borrowed from the card art supplied with
*Rotational Hum*, which is the best of the supplied stills and the one that
needs no fixing.

### 12. Listening to the structure

> An engineer in coveralls presses a long metal rod against a bulkhead and rests
> an ear on the other end, eyes closed, entirely still. Corridor lit by one
> failing overhead. Held for eight seconds with no cut and no reaction. Faint
> vibration visible in dust on a nearby ledge.

Diagnosis by ear, which is how a structure is read by the people who live inside
one — and the human counterpart to scene 6.

---

## Card art for a recording

Where a piece really is one held image, that image is doing all the work, and
three of the five supplied cards get Slipwave wrong in the same direction — they
put a small unglamorous band on a big stage. The canon detail is in
[`music-prompts.md`](music-prompts.md); this is the brief that answers it:

> A three-piece band playing in a dock-adjacent common room aboard a space
> habitat. A red-haired woman in her twenties singing into a single shared
> microphone, a man behind her on hand percussion, a second man seated with a
> stringed instrument. Working clothes, not stage clothes. Fluorescent overhead
> light and one work lamp — no stage lighting, no coloured wash, no haze. A dozen
> people sitting on crates and mismatched chairs, close enough to touch the
> players. Scuffed deck plating, cable runs, a bulkhead door standing open.
> Warm, unpolished, small. Nobody in the room thinks this is going anywhere.

Negative: no stage, no crowd barrier, no arena, no spotlights, no smoke, no
matching outfits, no leather stage costume, no electric guitars, no drum kit, no
video wall, **no text or lettering of any kind**.

A file-by-file verdict on every supplied card — which to keep, which to redo and
why — is in [`music-prompts.md`](music-prompts.md#regeneration-worklist), kept
there so the audio and card decisions sit side by side.

**And the prior question:** the four Slipwave-adjacent codex entries already
share a designed cover set — gold serif on a dark starfield with a trailing star,
built by `scripts/make-codex-cover.ps1` precisely because a generator cannot
spell. Photographic band art would change that whole set and invalidate four
`image_alt` lines. Worth deciding as a set rather than one cover at a time.

---

## A timed plan for `InnerSpaceBloom_3`

The track's structure as measured from its own waveform and spectrogram —
verify by ear before cutting:

| Time | What the audio does | Scene |
|---|---|---|
| 0:00–0:25 | thin, low, few events | **5. Inner space bloom**, first light only |
| 0:25–0:55 | first fill, harmonics arrive | **8. Prismere** drift |
| 0:55–1:20 | sustained, stable | **6. The Undersong** |
| 1:20–1:35 | thins out | **4. The empty berth**, static, long hold |
| 1:35–2:00 | rebuilds | **7. The Garden Core** |
| 2:00–2:30 | fullest, brightest | **2. Half-light causeway** |
| 2:30–2:50 | peak | **5** again, structure now forming |
| 2:50–3:10 | falling away | **9. Both ends of a fold** |
| 3:10–3:25 | tail, low sweep, fade | **1. The forty seconds**, then black |

Nine clips, two of them the same scene at different stages, which is what gives
a three-minute piece a shape instead of a sequence. Title card composited at the
head over the first hold — set, not generated.

---

## A timed plan for `RotationalHum_1`

4:02, and the more sectioned of the two — a pulse arrives partway through a piece
that starts without one, which gives an edit real hinges to cut on. Same
disclosure: measured, not heard.

| Time | What the audio does | Scene |
|---|---|---|
| 0:00–0:16 | thin, low, almost nothing | **11. The rotor**, dark, barely turning |
| 0:16–0:48 | bed builds, still beatless | **12. Listening to the structure** |
| 0:48–1:18 | **pulse enters** | **1. The forty seconds** — the two dials |
| 1:18–1:36 | fuller | **6. The Undersong**, dust reorganising |
| 1:36–2:08 | sustained, two internal edges | **3. The muster**, one long take |
| 2:08–2:24 | thins out | **4. The empty berth**, static |
| 2:24–2:32 | bright break | cut to black, hold |
| 2:32–3:52 | fullest and longest passage | **5. Inner space bloom**, the whole arc |
| 3:52–4:02 | tail | **11** again, still turning, lights out |

The two hinges are the ones to protect: **the pulse at 0:48**, which should land
on the dials so the mechanism and the beat arrive together, and **the break at
2:24**, which is the one place in either track where cutting to nothing is
better than cutting to a picture.

---

## Entry format

    ### <filename>
    - **Type:** generation | assembly
    - **Tool:** name and version
    - **Date:**
    - **Used by:** page path, or "unreferenced"
    - **Prompt:** verbatim, per clip
    - **Negative:**
    - **Notes:** seed, clip count and lengths, cut points, source clips kept where

### `odonata-raise-your-banners.mp4`
- **Type:** supplied, 7 October 2026 (Dermot: *Two codex music videos from Slipwave band*)
- **Tool:** unrecorded — do not reconstruct
- **Date:** filed 2026-10-07
- **Used by:** `src/codex/odonata-raise-your-banners.md`
- **Prompt:** unrecorded
- **Negative:** unrecorded
- **Notes:** 3:32, 1280×720, 24 fps, H.264 + AAC 48 kHz stereo, 27 MB. Genuinely moving footage (slow camera moves and animated water, wings, lanterns), not a held still. Nine lyric lines composited as captions at the foot of the frame, one per section, in a clean serif, correctly spelled; title card composited at the head. Poster frame `odonata-raise-your-banners-poster.jpg` taken at 0:01.

### `borrow-the-angle.mp4`
- **Type:** supplied, same day
- **Tool:** unrecorded — do not reconstruct
- **Date:** filed 2026-10-07
- **Used by:** `src/codex/borrow-the-angle.md`
- **Prompt:** unrecorded
- **Negative:** unrecorded
- **Notes:** 3:52, 1280×720, 24 fps, H.264 + AAC 48 kHz stereo, 23 MB. Moving footage as above. Ten captioned lines, same treatment; the last twenty seconds carry no caption. Poster frame `borrow-the-angle-poster.jpg` taken at 0:01.

### `the-long-white-trail.mp4`
- **Type:** supplied assembly, 29 October 2026 (Dermot, of a Grok Imagine post: *"This trailer video is either codex, narrative prose or a new category"*; filed as a Journal impression by his *"Option A"* the same day)
- **Tool:** Grok Imagine, Director (beta); the project is titled *The Long White Trail*
- **Date:** filed 2026-10-29
- **Used by:** `src/journal/the-long-white-trail.md`
- **Prompt:** two, as Dermot gave them on 29 October 2026. First the site's address, *"Fianilchruinne.com"*, with the intent *"to write a trailer for"* the site. Then, after that first cut got the ranks wrong, a request to reread the site; the file filed first that morning was the second cut, whose ranks (Deputy, Chief, Starwarden) match `src/lore/star-rangers-command-hierarchy.md`. It was replaced the same day by the seventh version, supplied as *Fian Ilchruinne — v7.mp4* and described by Dermot as *"New trailer video for Survey Corps and Star Rangers"*, at his *"Replace the 2:33 cut"*, and that afternoon by the tenth, at his *"Yes, file v10"*; how versions three to ten were prompted is not recorded. The first cut is not filed. The generator wrote the narration and every particular in it (Maeve, Ciarán Doyle, *Lúnasa*, *Brightwater*, the ring, the fifty years). No other prompt was given (Dermot, the same day): the Director planned and generated every shot, so there are no per-shot prompts to record. Do not reconstruct any from the frames
- **Negative:** none
- **Notes:** v10, 4:32, 854×480, 24 fps, 35 MB (filed before it: the second cut, 2:33 and 26 MB, then v7, 4:24). The notes below were written for v7 and hold for v10 except where the version table says otherwise. 480p, below this file's Delivery rule (720p for a Grok-sourced piece); not upscaled. Narration composited as captions, correctly spelled and read in full from frames every two seconds; the audio was not heard, so a line spoken but not captioned (one gap near 3:42) is not known. Poster frame `the-long-white-trail-poster.jpg` taken at 4:19, no caption in frame. New in v7 against the second cut: the launch prologue (Carrigbawn, the rail, *Brightwater*, the climb, the ring), the date (spring 2841, *ten years after the Last Stand*, which matches S05E02C03's 2831), the narrator's age (seventy-seven, fifty-three years on, so 2894) and the wristband's two times. A 4:12 cut with a launch-and-docking prologue and no captions was also supplied that morning and is not filed. Not canon and not Codex: it departs from the record on Threshold's dates (a fifty-year career, 2841 to 2894), its place (an orbital *Lúnasa*), its wording (*layers* for membranes), new particulars (Ciarán Doyle, *Brightwater*, a ring) and diegetic light (violet clocks). The Journal entry lists each.
- **Versions** (read from frames with `F:\CLAUDE\_tools\read-video.py`; the audio was never heard):

  | Version | Length | Supplied | What changed from the last | Filed |
  | --- | --- | --- | --- | --- |
  | v1 | not supplied | 29 Oct, before 08:00 | first cut from the address; ranks wrong | no |
  | v2 | 2:33 | 29 Oct 08:36 | reread: ranks right (Deputy, Chief, Starwarden) | 29 Oct, replaced the same day |
  | 4:12 cut | 4:12 | 29 Oct morning | launch-and-docking prologue, no captions | no |
  | v6 | not read | 29 Oct 08:38 | not read | no |
  | v7 | 4:24 | 29 Oct 11:46 | captions; Carrigbawn prologue; dated *spring 2841, ten years after the Last Stand*; narrator seventy-seven; wristband's two times | 29 Oct, replaced the same day |
  | v10 | 4:32 | 29 Oct 13:01 | adds *fifty years of other work … on more stations than I can name* and the returns to the docking spine, so the fifty years are a career, not one watch; one caption gap near 3:46 | **29 Oct, current** |

The first file in `src/video/`, `baby-universe.mp4`, predates this file and has no
recorded prompt; do not reconstruct one and file it as though it were the
original. The two above are recorded as absences for the same reason.

## The two Slipwave videocasts, read 7 October 2026

Supplied as *two codex music videos from Slipwave band* and filed the same day
as codex entries, each carrying its file. What the files are, measured and
looked at (not heard — the standing disclosure applies):

- **The caption rule is met, for the first time.** Every earlier supplied piece
  broke on lettering in the frame. These composite a title card and one lyric
  line per section in a real typeface, spelled correctly, held for the
  section's length. That is exactly what *Title text is composited in the
  edit, never generated in the frame* asked for.
- **They move.** 24 fps, slow pushes and drifts, animated water and wings,
  cut on the song's sections. The still-over-audio question (open item 2
  below) does not arise for them.
- **720p, held throughout** — the *Delivery* rule's second case, a uniformly
  720p piece rather than a mixed one. Below the stills' 1600 px, as every
  generated video so far has been.
- **The register is off-house and the record already has the answer.** Bronze
  gates, towers, a harbour under dragon wings, light with no source, sparkle
  and bloom: the house signature (diegetic light, matte surfaces, the camera
  as witness) is not what these are doing. `performers-and-generated-work.md`
  calls a recording with pictures a *videocast* and files generated pictures
  as the maker's; both entries therefore say the pictures were laid over the
  recording after the fact, are uncredited, and witness nothing. The imagery
  is the maker's painted world, as *Paper Galaxies*' backdrop was, and the
  Archive reads it as that.
- **The captions are the only confirmed text.** Nine and ten lines, one to a
  section, and no lyric sheet. Both entries print the captions in order as
  confirmed and transcribe nothing else — the 20 August rule that a lyric
  cannot be derived from a spectrogram holds, and a full sheet from Dermot
  closes the gap when he has one.
- **Nobody in frame is a named character.** The woman at the water in *Borrow
  the Angle* is dark-haired and unnamed; the entry says so.

Three things stay his, put in `intake-2026-10-07.md`: which session the
recordings belong to (dock-era with Shepherd, later with Ashgrove and
Calloway alone, or left unfixed as filed), the full lyric sheets, and the
codex covers (the Slipwave set shares a designed card; two more are owed via
`make-codex-cover.ps1`, filed as a `needs-desktop` issue).

---

## Open questions

Mirrored into [`open-questions.md`](open-questions.md).

1. **`grok-video-2026-05-10.mp4` is an orphan.** Referenced nowhere, 448×672,
   30 s, and the only genuinely moving footage in the repo. Find it a home or
   remove it — but removal of anything published-adjacent is Dermot's call.
   **Content identified 18 September 2026** (see the top of this file): the
   earliest Tissadelle clip, in the retired costume uniform. **Removed the
   same day at Dermot's instruction** (*Remove the orphan video from
   src/video*); this item is closed.
2. **Should the still-over-audio pieces become image + audio player?**
   `baby-universe.mp4` is 19 MB of one picture. The pattern already exists in
   `ballad-of-the-stars.md`. This changes a live page, so it is a proposal.
3. **Should `validate-content.js` cover `src/video/` and `src/audio/`?** Same
   question the audio file raises, and the orphan above is the evidence for it.
4. **Does *Inner Worlds / Inner Space Bloom* belong to this site at all?** It
   carries no Fian Ilchruinne branding and reads as a separate ambient project.
   If it is a site piece it needs a codex home and a named author like every
   other recording; if it is a separate release it needs no canon check at all,
   and these scene prompts should be treated as a loose library rather than as
   anything the record commits to. Nobody has said which, and the answer changes
   what this section is for.

---

## Three clips offered 8 October 2026, written before anything is generated

Dermot's offer, verbatim: *"let me know if short generated video clips would
also be useful"*, then *"Would you trust Grok to create these videos? I have a
fixed price subscription and I could open it in Chrome."* The answer given:
yes for the two landscapes, with eyes open for the ark, since generators turn
a spine with its drum. Each is one held shot in the house motion signature,
derived from its page (and, for the ark, from `starship-design.md`'s sheet A),
run on Grok Imagine from his Chrome, two takes each, his pick, anything
lettered or physically wrong dropped rather than healed. Kept clips go into
`src/video/` with a poster frame and an entry here, by one pull request.

### A. The drithle run over Drithane (The Honest Dark; the Guest Ring)

> Slow continuous camera drift, never locked off and never settling. Long unbroken take. Diegetic light only: starlight, moonlight, lightning; nothing glows that would not glow. Matte surfaces, real materials, dust and wear. Deep shadow with detail retained in it. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain, shallow depth of field. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. A fixed camera on a hillside above a snowbound valley at night: a cluster of low dark buildings with not one window lit, a single low bright moon over mountains, and across a sky crowded with sharp stars a scatter of fine silent white streaks all travelling the same way, one after another, unhurried, for the whole take. The snow blue-grey in moonlight. Nothing on the ground moves. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, projected interfaces, glowing UI or floating icons. No lens flares, no light streaks, no volumetric god rays as decoration. No drone flythrough, no crash zoom, no whip pan, no camera passing through solid objects. No jump scares, no sudden movement toward camera, no gore, no horror imagery. No time-lapse clouds, no slow-motion explosion, no hyperspace star streaks. No people, no figures, no vehicles. Not a music-video montage, not a trailer.

### B. The standing storm at Quern (Quern)

> Slow continuous camera drift, never locked off and never settling. Long unbroken take. Diegetic light only: starlight, moonlight, lightning; nothing glows that would not glow. Matte surfaces, real materials, dust and wear. Deep shadow with detail retained in it. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain, shallow depth of field. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. A fixed camera on a plain of wet black grit looking along the line of a permanent sideways rain: a row of low rounded windowless stone houses that do not move, rain streaking across the frame horizontally for the whole take, and on the right horizon a towering wall of storm cloud lit from within by continuous slow lightning, red-amber at its base, while the sky to the left is a clear starless black. The storm wall breathes but never advances. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, projected interfaces, glowing UI or floating icons. No lens flares, no light streaks, no volumetric god rays as decoration. No drone flythrough, no crash zoom, no whip pan, no camera passing through solid objects. No jump scares, no sudden movement toward camera, no gore, no horror imagery. No time-lapse clouds, no slow-motion explosion, no hyperspace star streaks. No people, no figures, no vehicles. Not a music-video montage, not a trailer.

### C. The ark's drum turning (The Generation-Ark Era; sheet A of starship-design.md)

> Slow continuous camera drift, never locked off and never settling. Long unbroken take. Diegetic light only: starlight, moonlight, lightning; nothing glows that would not glow. Matte surfaces, real materials, dust and wear. Deep shadow with detail retained in it. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain, shallow depth of field. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. A hull-mounted camera on the still spine of a Currach-era generation ark in deep space, looking aft along the spine: the wide patched drum amidships turns slowly and steadily about the ship's long axis, about one turn in twenty seconds, while the spine, the flat radiator panels and the stars behind stay still. Dull grey hull patched in many greys, no window band, no markings, nothing lit, one far sun lighting it from the side. The drum's turn is the only motion. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, projected interfaces, glowing UI or floating icons. No lens flares, no light streaks, no volumetric god rays as decoration. No drone flythrough, no crash zoom, no whip pan, no camera passing through solid objects. No jump scares, no sudden movement toward camera, no gore, no horror imagery. No time-lapse clouds, no slow-motion explosion, no hyperspace star streaks. No people, no figures, no vehicles. Not a music-video montage, not a trailer. No engine glow, no glazed cabin, no fins, no lit flank, and the spine must not rotate.

**Run and judged, 8 October 2026.** Grok Imagine from Dermot's Chrome, 720p
(the plan's ceiling; 1080p refused), 10 s, 16:9, two takes each, frames pulled
at 0, 3, 6 and 9 s with ffmpeg and read against the lines below. Kept and filed
in `src/video/` with poster frames, embedded on their pages after the opening
paragraph:

- **A, take 1** (`the-honest-dark.mp4`): a slow drift that never settles, the
  streaks one way for the whole take, the moon steady, not a window lit. Take 2
  passed too and is the alternate, in `image-out/video/`.
- **B, take 1** (`quern.mp4`): the wall on the right lit from within and
  breathing, the dark to the left, the row of houses still. Take 2 passed with
  the wall more central; alternate kept.
- **C, take 1** (`the-generation-ark-era.mp4`): the drum turns about the
  spine, ports coming round into view across the take, the spine's truss
  still; the camera drifts a little, which the preamble allows. Take 2 failed
  the sheet, a bare cylinder with no spine or radiators and the camera
  orbiting it; dropped.

Lettering: none in any take. Lesson for the next clips: Grok respects a
negative stated as objects ("no lit windows") and a motion stated as the one
thing that moves; it does not respect "camera fixed" unless the mount is named.

**Judging a take:** A fails if a window lights or the streaks change direction;
B fails if the houses move or the storm advances; C fails if the spine turns
with the drum, the drum's ends morph, or anything on the hull glows.

---

## Director briefs, written 29 October 2026, before anything is generated

Dermot's request, verbatim: *"ask Fable to prepare some video prompts for
selected characters and scenes."* Director is Grok Imagine's multi-shot film
maker: given an instruction it plans its own shots, writes its own narration
and invents every particular the instruction leaves open. On 29 October it was
given the site's address and made *The Long White Trail*
(`src/journal/the-long-white-trail.md`): the register right, the facts
invented, an orbital *Lúnasa* for a coastal station, *layers* for membranes,
a fifty-year watch dated 2841 to 2894, a Ciarán Doyle, a *Brightwater*, a
ring, violet clocks. Nothing told it the facts. These briefs are the fix: each
gives Director the place, the date in UCSD, the people with the titles the
record gives them, what happens, and what it may not add, so that what it
invents is only what the record leaves open. Dermot runs Director from his
Chrome; nothing here has been generated.

**Rules shared by every brief below.** Paste the instruction whole, then the
shot list and the negatives if Director takes more; ask for 16:9 landscape.
The shared preamble and shared negative above apply to every shot, and the
house motion signature (the hum, the drift, the forty seconds) holds. Director
composites its narration as captions in a real typeface, correctly spelled,
and the two Slipwave videocasts and the trail were filed with theirs, so a
caption stands; what fails is lettering generated inside the scene: a sign, a
clock's numerals, a readable sheet, a name tape. Narration is given per brief
or is *no narration*; a brief with dialogue lists every line Director may use,
and it may add none. No narrator has an identity the record does not give. No
name, place, rank, date or vessel enters a film unless the brief names it;
where the brief says the record is silent, Director invents nothing there and
the film goes without. A film is an impression (`where-the-record-lives.md`):
whatever comes back is judged by its brief's line, filed in the Journal at most,
never linked from a chapter or a lore page, and never adjusts the record. On
this plan Director cuts at 854×480; it is filed as it comes, not upscaled.

### The five subjects, and why

**The forty seconds, Dock Seven, 2815.** The premise of the whole work is two
second hands two-thirds of a turn apart that stay apart, and a still can show
the gap but not that it holds, clears under a hand and comes back. It is the
true version of what the trail got wrong, and the safest film on the list: the
record fixes the dock, the two clocks, every date and every title from Day 44
to Day 52 in three Codex documents, and leaves open only the faces, which the
film does not show. This is scene 1 of the library as a Director sequence, and
says so.

**Nothing Taken (S01E00C11).** A skirt of straw standing up in still air, three
goats going to a wall for no dog, a door opening the wrong way and holding:
every one of the chapter's facts is a motion, and none of them can be
photographed. Safe because the chapter gives the whole day in order, the two
people and their titles, the four questions, and says exactly what was not
seen, which is everything.

**Left Blank (S01E00C12).** Two hands writing one word on a sheet, a season and
a universe apart, the second with one mark more than the first; a line looked
at and not filled; a receipt read for longer than a line needs. The subject is
the pause before a pen, which only time can show. Safe because the record
gives the three places, the dates, the three ranks and every line of
dialogue, and the one thing a generator would wreck, the writing itself, is
kept out of focus by rule.

**Before the Close (S01E00C13).** A light that rises with a note and dies with
the moon's edge, and a tall figure at a tree line that stands for the span and
is gone: the chapter is a duration. Safe because the record fixes the ground,
the gate, the two moons by name, the sequence, and the custom that no one goes
up; the one non-human person in these five is a figure at a distance, never
approached, never faced, which is both the chapter's rule and the generator's
limit.

**The Character of the Light (S01E01C03).** Two flashes, then dark, then two
flashes, fifteen seconds group to group, in a gale, over a shore that has kept
its own time for two centuries: a lighthouse's character is a rhythm, and a
still cannot carry one. Safe because the chapter gives the spit, the tower,
the tide, the wind, the room, the three volumes and the attendant's own lines;
the two non-human members of the party are kept to figures from behind, since
the record's one portrait of Rook-7 is a still the generator will not hold
across a sequence.

**Not briefed, and why.** Dock Seven in 2831 (S05E02C03): the outer gallery's
nine witnesses are fixed only by their count and one word, and the record fixes
nothing of what the viewport showed them, so a film of the gallery would be
invention from its first shot and would draw the dragons the record keeps
off-camera. The *Steerage Way* in Deadwater (S01E00C09): the chapter's event is
a figure falling on a board, which is a readout, and nothing a hull camera
could see changes.

### D1. The forty seconds

**Title and length.** *Incident Report 001.* 90 seconds; accept 75 to 110.

**Instruction to paste.**

> Make a film of about 90 seconds, 16:9, set entirely in Dock Seven of
> Threshold Station, a Survey Corps shore station on a coast of Earth, in 2815
> UCSD, Late Summer, from Day 44 to Day 52. Dock Seven is an enclosed dock with
> a pressure seal at one end and an inner hatch at the other, a wall chronometer
> above each: two plain matte faces with a seconds hand, numerals never legible.
> Both were calibrated to within half a second on Day 12. On Day 44 they were
> found forty seconds apart. On Day 47 Sub-officer Pren Halvard of the Survey
> Corps detachment recalibrated both and filed Incident Report 001, and the gap
> cleared. On Day 49 at 03:10 station time, on the night rotation, Technician
> N. Isern of the Maintenance Division found them forty seconds apart again,
> re-ran the calibration, isolated both units, re-seated the bus coupling, and
> watched the gap return after every pass. On Day 52 Station Manager Cors
> Delveyne closed the report as a calibration issue. On Day 52's 00:00 to
> 04:00 watch, Watch Officer Mera Soln of the Operations Desk reset both clocks
> at shift start, at 01:22 logged them forty seconds apart again, filed an
> addendum after the closure note, and kept the dual-clock verbal callouts for
> every docking. That is the whole film.
> Nobody is named who is not named here, nobody is given any title beyond the
> one written here, and no other place, year or vessel appears. The narration
> is only the sentences supplied, read as the documents themselves in their own
> present tense, with no narrator, no framing and no added sentence. No face is
> ever shown: hands, gloved where the work allows, backs, and a figure in a
> doorway, since the record describes none of these four people. Nothing in the
> dock glows, projects or displays; the only light is caged work lamps, one of
> them failing. The camera is a fixed dock camera or a hand-held recorder
> someone on the station could have carried. Slow, quiet, patient, no music
> under the documents.

**Shot list.**

1. Fixed dock camera, high in a corner, looking along the dock from the
   pressure seal to the inner hatch with both clocks in frame; the one motion
   is the two seconds hands, one two-thirds of a turn behind the other and
   staying there; two caged work lamps. Hold ten seconds.
2. Hand-held recorder at waist height, Day 47: a hand opens the panel below
   one clock and sets it; the two hands resume together; one work lamp.
3. Desk-level camera, Day 47: a hand writes on a paper form, the page beyond
   focus; a desk lamp.
4. The fixed dock camera, Day 49, 03:10: the dock empty, one lamp out; the
   two hands are apart again. Hold.
5. Hand-held at the open panel, Day 49: a technician's hands cable a portable
   module to the unit, re-seat a coupling, run the pass; each time the hands
   come away the gap is back; the lamp light and the module's dull indicator
   only.
6. The fixed dock camera, Day 52, 01:22: the hatch open, a figure's back in
   the doorway calling two times aloud to a vessel that is not in frame; the
   two hands apart.
7. Close on the two faces side by side, the hands moving, nobody present, dust
   in the lamp light. Hold eight seconds and end.

**Narration.** Only these, in this order, each read flat as the document it
comes from. From Incident Report 001 (Day 47): *Two wall-mounted chronometers
in Dock Seven are no longer agreeing on the hour.* *Both units were
recalibrated to station-standard time. The discrepancy cleared at the time of
filing.* *No further action required. Recommend monitoring for recurrence.*
From the Day 49 maintenance log: *The clocks split again before the shift was
half over.* *The discrepancy returned immediately after every recalibration
pass. No hardware fault was identified in either unit.* From the Day 52
closure: *Calibration issue. Report closed.* From the Day 52 night-watch
addendum: *At 01:22 station time, C-7A and C-7B again diverged by forty
seconds after a clean reset at shift start.* *Classification is no longer
operationally useful.* *Keep dual-clock verbal callouts active for all
night-watch docking transactions.* Nothing from 2826, and nothing from anyone
remembering.

**Negatives as objects.** The shared negative, plus: no glowing clocks, no
digital readouts, no legible numerals, no violet or coloured light, no screen,
no orbital station, no ring, no spaceplane, no rail, no sea or window on the
sea, no view of the station from outside, no face, no legible tab or insignia,
no uniform colour named, no narrator saying *I*, no name not in the
instruction, no *layers*, no year but 2815, no music under the documents.

**Judging line.** The film fails if a clock face shows numerals or glows; if
any face is shown; if any name, title or year is spoken or captioned that is
not in the instruction; if the film leaves the dock; if the two clocks agree on
screen at any moment other than directly after a hand has set them; or if the
gap is anything but forty seconds, widening or narrowing on its own.

**Grounding.** `src/codex/incident-report-001.md`;
`src/codex/maintenance-log-day-49-dock-seven.md`;
`src/codex/dock-seven-night-watch-addendum-day-52.md`;
`src/lore/threshold-station.md` (the two clocks, the seal and the hatch, a
coast of Earth, built about 2813); `src/seasons/s01/e01/s01e01c01.md` (the
clocks above the pressure seal and the inner hatch); `src/characters/pren-
halvard.md` and `src/characters/mera-soln.md` (no species, no appearance, no
rank beyond the document's). The titles *Sub-officer*, *Technician*, *Station
Manager* and *Watch Officer* are the documents' own and are not on the rank
ladder in `src/lore/star-rangers-command-hierarchy.md`; the brief uses them
as written and gives nobody a ladder rank.
**Ruled by Dermot, 29 October 2026:** *"Sub-officer, Technician, Station
Manager, Watch Officer are roles or postings but not ranks or job titles".*
So nothing is missing from the ladder; the brief already uses them that way.

### D2. Nothing Taken

**Title and length.** *Nothing Taken.* 90 seconds; accept 75 to 110.

**Instruction to paste.**

> Make a film of about 90 seconds, 16:9, on a Celtic Union charter world the
> record does not name, in the late autumn of 2826 UCSD, on one still afternoon
> and the morning after. A smallholding below a hill: a stone house, a byre, a
> yard wall, a gable with straw by it, a top field with three goats, a dog, a
> lane. Up the hill, not shown close, is a Survey Corps boundary post of two
> Rangers with a mast on the ridge. The keeper is Donncha Ó Laoire. Some time
> after the middle of the afternoon the three goats go to the far wall all
> together, as for a dog, and the dog is at his heel. A skirt of straw the
> height of a man gets up off the ground by the gable in air that has not moved
> all day, goes along the yard wall and over it, and lies down along the wall
> and stays. He goes in to see about the milk. Going out with a bowl, he puts
> his hand to the back door and it opens outward, on hinges hung on the inside,
> and holds there in the still air with no mark on the wood. He does not force
> it and does not go through it; he goes round by the front and sets the bowl
> on the stone by the back step. Before the light goes, Senior Éilis Ní Mhurchú
> of the Survey Corps walks down the lane with a hand-instrument case, in a
> dark olive field uniform with one small plain tab at the collar and nothing
> else on it, tries the door herself, writes on a paper form, steps over the
> bowl without looking down, and says words at the door quietly, not to him,
> which are not heard. Night: the door open the wrong way, the bowl out, the
> dog across the front step. Morning: a skin on the bowl, the dog drinks it, he
> sweeps, and the door comes in to him on its hinges and he goes through it
> without stopping. No narration. Spoken lines are only the ones supplied.
> Nothing is seen in the straw or the lane, and nothing explains the door.
> Faces are turned away or in shadow; the record describes neither person.

**Shot list.**

1. Fixed camera on the byre wall looking across the yard to the top field;
   the goats cross to the far wall together; flat overcast afternoon light.
2. The same mount: the straw gets up by the gable, turns at the height of a
   man, goes along the wall and over it, and lies down; nothing else in frame
   moves, the dog included.
3. Hand-held at the keeper's shoulder inside the back door: his hand to the
   latch, the door swinging out and holding; yard light through the opening.
4. Fixed camera at the gable corner, the lane beyond: a Ranger walking down
   with a case; dusk.
5. Hand-held outside the back door: her hand tries it, it swings out; her
   other hand writes on a form held beyond focus; last light.
6. Fixed camera low at the back step: her boots step over the bowl; her
   figure in the doorway with its back to the lens, saying something the
   recorder does not pick up.
7. The byre-wall mount at morning: the door comes in; he goes through; low
   sun, long shadows.

**Narration.** No narration. Dialogue, all of it, hers then his: *Is anything
missing.* *No.* Her four questions may be heard as four short questions, the
time, the wind, the animals, what was changed, in those words and no others;
his answers are a few words each. *You'll want the door, a Mhaoir,* is his
one other line, said as written.

**Negatives as objects.** The shared negative, plus: no wind in trees, grass
or hair, only in the straw; no dust devil, funnel or whirlwind drawn beyond
the straw itself; no figure, shape, face or light in or behind the straw; no
glow at the door; no damage to the door or its frame; no hinges on the
outside; no instrument with a glowing display; no mast lit; no vehicle; no
weapon; no second Ranger; no fairy, no small figures, no hat, cloak or
costume; no legible form; no dates spoken; no name for the world or the
valley; no narration.

**Judging line.** The film fails if anything but the straw moves in the still
air; if anything is seen in, behind or after the straw; if the door shows
damage or outward hinges; if a face resolves; if the Ranger carries anything
but a case or wears anything but the olive shell and one plain tab; if a
vehicle, a second Ranger or a stranger appears in the lane; or if a line is
spoken that the brief does not give.

**Grounding.** `src/seasons/s01/e00/s01e00c11.md` (every event, the four
questions, the lines); `src/characters/donncha-o-laoire.md` and
`src/characters/eilis-ni-mhurchu.md` (no appearance on record, the world and
the valley unnamed on purpose); `src/lore/universes/si-gaoithe.md` (the straw
is the only consistent tell, gone before anyone arrives);
`src/lore/star-rangers-command-hierarchy.md` (Senior, five bars) and
`src/lore/rank-insignia-and-uniform.md` (Survey Corps deep olive, one tab,
nothing on the shell glows).

### D3. Left Blank

**Title and length.** *Left Blank.* 120 seconds; accept 100 to 150.

**Instruction to paste.**

> Make a film of about 120 seconds, 16:9, in three places in 2826 UCSD, with
> no narration. First, early spring: a Survey Corps platform in deep space in
> Deadwater, a universe where nothing travels faster than light, a small
> station of seven people at the quiet point of one system, lit inside by work
> lamps, with a window on a starfield and nothing else in it. Section Lead
> Agnete Solvang of the Planetology Branch, in a dark olive field uniform with
> one small plain tab at the collar, writes one word at the head of a paper
> return sheet, reads a two-page circular standing up because the hull's bag
> closes at the sixth hour, looks at a new line under the first for a short
> time, and does not fill it. She turns the sheet and writes a remark on the
> back, initials it, and puts the sheet and a relief list into a bag. On the
> table is a chart she does not look at. Second, the Survey Archive on
> Threshold Station, Earth, a room of desks and paper under lamps: Field
> Officer Benedek Rónai of the Archive Branch, same uniform, reads twenty-one
> sheets as a run, reads the remark on the back of the last twice, sits with
> the line for most of an hour, writes one short word with one mark after it,
> carries that sheet and a second stack to the Principal's desk, where a woman
> reads it, initials under his initials and hands both back, and returns to
> draw the second stack toward him and read its blank head. Third, early
> summer, a staging site on the home side with a chart on its table: Solvang
> reads a half-sheet receipt, her own word in her hand and the same word with a
> mark in another, with two sets of initials under it, for longer than a line
> needs, and files it. No word on any sheet is ever legible; sheets are beyond
> focus or edge-on and writing is a hand moving. Nothing glows, projects or
> displays. No exterior of the platform, any hull or the station is shown; the
> record has none. Faces are turned from the camera or in shadow. The only
> spoken lines are the ones supplied, at the Principal's desk.

**Shot list.**

1. Fixed camera on a bulkhead of the platform's common room: the window with
   stars only, the table, the chart, the sheet; a hand writes one word; two
   work lamps.
2. Hand-held at shoulder height: she stands reading two clipped pages; the
   lamp light; the one motion a page turning.
3. Desk-level camera: the pen held above an empty line and not lowered; then
   the sheet turned over and the hand writing on the back.
4. The bulkhead mount: the bag closed and lifted off the table; the chart left
   where it was.
5. Fixed camera above an Archive desk on Threshold: twenty-one sheets dealt
   out in order; a hand turns the last one over; a desk lamp.
6. Desk-level: the hand writes one short word and one mark, and stops.
7. Hand-held, walking: a sheet and a stack carried to a second desk; a woman's
   hand initials under initials; neither face.
8. Fixed camera on a different table with a chart, summer: a hand holds a
   half-sheet for longer than a line needs, and puts it in a file.

**Narration.** No narration. Dialogue, at the Principal's desk only, in this
order: *That isn't a name.* *No.* *The circular asks for the zone.* *That is
the zone.* *A blank would say they were here.* *When they meet a second one,
they can tell us what to call it.* *Yes, Principal.*

**Negatives as objects.** The shared negative, plus: no exterior shot of
anything, no spacecraft, no hull, no fold, no star streaks, no nebula, no
planet or moon in the window, no legible lettering on any sheet, bag, chart or
wall, no screen or tablet (the record's sheets are paper), no glowing
indicator, no face, no legible tab, no uniform but dark olive, no narration,
no spoken date, no name for the platform, the hull, the staging site or the
Principal, no mark drawn large enough to read.

**Judging line.** The film fails if any letter or figure on any sheet is
legible; if an exterior, a ship or a fold appears; if the window shows
anything but stars; if a face is shown; if a spoken line is added or
reordered; or if her pen touches the empty line at the platform.

**Grounding.** `src/seasons/s01/e00/s01e00c12.md` (every action and line);
`src/characters/agnete-solvang.md` and `src/characters/benedek-ronai.md`
(their ranks and branches, no appearance on record, the platform, hull,
staging site and Principal unnamed); `src/lore/universes/deadwater.md` (the
one staged system, a starfield with nothing in it);
`src/lore/threshold-station.md` (the Survey Archive is on the station);
`src/lore/star-rangers-command-hierarchy.md` (Section Lead, Field Officer,
Principal); `src/lore/rank-insignia-and-uniform.md` (deep olive, one tab).
`story-bible/starship-design.md` has no sheet for the platform or the relief
hull, which is why no exterior is allowed.

### D4. Before the Close

**Title and length.** *Before the Close.* 100 seconds; accept 80 to 120.

**Instruction to paste.**

> Make a film of about 100 seconds, 16:9, on Tír na nÓg in the Celtic Union,
> in the autumn of 2826 UCSD, on a night that is not dated and is never given a
> date. This is a reconstruction of a night nobody recorded, so the camera
> stands only where the two witnesses stood: at a farmyard gate at a woman's
> eye height, and on the pillow of a child's bed looking up. A stone holding
> below a top field that rises to a line of bare trees; a gate where the yard
> becomes the field; ewes brought down in the afternoon; a lamp put out before
> dark; a shutter on the child's room left open a hand's width. Mairéad Ní
> Dhálaigh sends her daughter Úna to bed, goes out to the gate and keeps her
> hand on its top bar. The large moon, Donn, is up over the trees, full and
> ordinary. Its edge softens on one side, as if breathed on; no second moon is
> drawn. Low between the bare trunks a light comes up, level, a lamp's worth and
> no more, from nothing visible. A long held low note, like a person humming
> with the mouth shut, rises, and the light rises with it. At the tree line one
> tall figure stands, in its own light, still, never nearer, never in focus,
> never faced. Nothing comes down the field; nothing is set down or lifted.
> Then it is among the trees, then there is only the light, then less; the
> moon's edge comes back; the trees are bare trees. Inside, the child sees the
> moon's white bar across the ceiling, then the whole ceiling come up warmer
> and move slowly, like river light under a bridge, breathing with the note,
> and stays where she is. Morning: the ewes go back up, the woman walks the top
> wall counting, and does not go into the trees; nothing is on the ground. No
> narration, no score, only the note. Four spoken lines at the table, supplied.
> No date, no minutes, no place name, no instrument, no Ranger.

**Shot list.**

1. Camera fixed at the gate, eye height, looking up the field to the trees
   and the moon; the one motion is the moon's edge softening on one side;
   moonlight.
2. The same mount: the light coming up low between the trunks and lying
   level; moonlight and the light.
3. The same mount, held long: one tall figure at the tree line, a small part
   of the frame, within its own light, still; nothing else moves.
4. Close at the same place: a hand on the top bar of the gate, the grain of
   the wood; moonlight; nothing moves.
5. Camera on the pillow looking up: the moon's white bar across the ceiling,
   then the ceiling coming up warm and moving slowly, breathing; the light
   from the window gap.
6. The gate mount: the light going down between the trunks; the moon's edge
   returning; the trees bare.
7. Morning, camera at the top wall, low sun: ewes going up the field, a woman
   walking the wall counting, the trees behind her not entered.

**Narration.** No narration. Four lines at the table in the morning, the
child's then the mother's: *Were they there?* *The moon was.* *I saw the
ceiling.* *So did I, once.*

**Negatives as objects.** The shared negative, plus: no face, features, eyes,
ears or hands on the figure; no pointed ears, wings, robes, crown or staff;
no second figure, no procession; no doorway, arch, portal, tunnel or ring of
light; no beam; no light from above or behind the trees; no second moon in
frame, no eclipse disc, no red moon; no aurora, sparkles, fairy lights or
drifting motes; no mist machine; no figure moving toward the house; no child
at the window; no object on the ground at the tree line; no instrument, no
Ranger, no vehicle; no wind; no score; no spoken or captioned date, minutes or
place.

**Judging line.** The film fails if the figure's face or any feature
resolves; if it moves toward the house or more than one is shown; if the light
is brighter than a lamp's worth or comes from above the trees; if a second
moon or an eclipse is drawn; if the child goes to the window; if music plays
under the window; or if a date, a count of minutes or a place name is spoken
or captioned.

**Grounding.** `src/seasons/s01/e00/s01e00c13.md` (every event and line);
`src/characters/mairead-ni-dhalaigh.md` and
`src/characters/una-ni-dhalaigh.md` (no appearance, the district unnamed on
purpose, the child's age unstated); `src/lore/planets/tir-na-nog.md` (Donn and
Cliona, the Conjunction, bare treelines, four seasons);
`src/lore/universes/tir-tairngire.md` and
`src/glossary/luminescent-ethereal-beings.md` (tall, unhurried, correct in a way
that is the problem; a lamp's worth by every account; the Union's practice:
don't follow, don't detain, don't publish the timing);
`src/glossary/caomhari.md` (one people, three names, never *elves* in the
record's voice). The record gives the figure no face and no features, which is
why the film gives it none.

### D5. The Character of the Light

**Title and length.** *The Character of the Light.* 120 seconds; accept 100 to
150.

**Instruction to paste.**

> Make a film of about 120 seconds, 16:9, on the shore below Threshold
> Station, Earth, in 2826 UCSD, Early Autumn, late afternoon, on a falling tide
> in a southwest gale. A shingle shore; a stone spit running the better part of
> a kilometre out to a whitewashed stone lighthouse, the Sceir Light, taller
> below the gallery than a photograph suggests, its door facing landward; sea
> on both sides. Three walk the spit leaning into the wind and correcting
> between gusts: Sir Galahad Thorne of the Survey Corps, a bearded man in a
> dark green-grey field coat with one small plain tab at the collar, and two
> colleagues the film shows only as figures from behind and at a distance. The
> attendant, Nuala Beirne, a woman somewhere past sixty dressed for the gallery
> and not for visitors, has the door open before they reach it. Inside, in a
> whitewashed room at the foot of the stair with the noise shut out, she brings
> down three bound volumes of the Lights Board's register and they are laid
> open on a table in the order they were written: old pages, hands that change,
> one column that does not, and no entry ever legible. Her clock, the one that
> times the light, is on the wall, plain, and never glows. On the gallery in
> the gale the light shows its character: two flashes, then dark, then two
> flashes, fifteen seconds from group to group, correct and no tighter than
> that, again and again. On the stair in the dark the lantern glass carries the
> gale as one low note. The tide falls on the shingle. The station is never in
> frame: no building, no dock, only shore, spit, tower and sea. Light is the
> day going, the lantern and one lamp in the room. No narration. Spoken lines
> are only the ones supplied, his and hers.

**Shot list.**

1. Fixed camera on the shingle at the shore end of the spit: three figures
   walking out, leaning, seen from behind; grey late light; the wind in
   everything.
2. Hand-held at walking height on the spit behind them, shaken by the wind:
   the tower growing, the door on the landward side.
3. Fixed camera inside the whitewashed room: the door shuts and the noise
   drops; the attendant at the sill with her arms folded, looking at the
   water; one lamp.
4. Desk-level camera: three volumes laid open, a finger running down a column;
   the pages beyond focus; lamp light.
5. Fixed camera on the gallery rail, seaward, in the gale: the lantern's
   character, two flashes, dark, two flashes, held for thirty seconds and
   counted; dusk and the lantern only.
6. Hand-held on the stair in the dark: the attendant's back going down, the
   one low note in the glass; no face.
7. Fixed camera on the gallery looking down the spit to the shore: the tide
   falling, the spit lengthening; nothing of the station at the shore end.

**Narration.** No narration. Dialogue, in this order. His, in the room: *Your
clock. The one that times the character. I want to know how often it needs
correcting, and I want to know whether anyone has ever written that down.*
Hers: *Everyone writes that down. It's a maintenance record. That's the whole
job.* Then: *Nobody's ever asked for it.* Hers, on the stair, to someone out of
frame: *Because it's lit. That's the whole of it. A light you only put on when
you know someone's out there isn't a light. It's a favour.*

**Negatives as objects.** The shared negative, plus: no view of Threshold
Station, its docks or any building but the tower; no spacecraft; no robot in
frame; no non-human face; no legible page, entry or initial; no digital clock,
no glowing clock; no continuous sweeping beam drawn as a cone, the character
is the lantern lighting and going dark; no sun, no calm sea, no lightning, no
waves over the spit; no weapon; no legible tab or insignia; no vehicle on the
spit; no narration; no spoken year.

**Judging line.** The film fails if the station or any building but the tower
appears; if the lantern's character is anything other than two flashes and a
dark at a steady interval; if the sea is calm or the wind drops; if a page is
legible; if either of the two colleagues is shown closer than a figure from
behind, or given a face; if the clock glows; or if a line is added to the
four given.

**Grounding.** `src/seasons/s01/e01/s01e01c03.md` (the spit, the tide, the
wind, the tower, the room, the three volumes, the character, every line);
`src/characters/nuala-beirne.md` (past sixty, dressed for the gallery, nothing
else of her appearance on record); `src/characters/galahad-thorne.md` (the
filed portrait: bearded, grey-green field dress, one small collar tab);
`src/characters/syra.md` and `src/characters/rook-7.md` (present in the
chapter, kept to figures from behind here); `src/lore/threshold-station.md`
(the Sceir Light below the station; what the station looks like from the water
is not on file); `story-bible/starship-design.md` sheet E (a Threshold-class
station's shape is open, awaiting his choice, which is the second reason the
station stays out of frame).

### D6. The Up-People's First Stone (S11E01C05)

**Status, 29 October 2026: run once, held for the weekly limit.** Version 1,
published 13:28, came back at 7:15 and 37 scenes against the 3 to 4 minutes
asked, and Director stopped on a question, *What does a Pandoid look like?*,
offering A (panda-like, round flat face; its own pick), B (bear-like, grey,
round ears) and C (panda-sloth, long claws). The account's Grok quota was
spent the same day and resets on **5 November 2026**; nothing has been answered
or filed. Chosen as the first of three subjects (Stone-First's knock, Donncha's
door, Órla Shepherd's walk home) screened that day from all 183 character
pages for one filmable image that carries a whole arc; Donncha's is already D2.

**The answer owed on 5 November, in one round.** Pick **A** and add, on one
line, with no line break (Enter sends in that box):

> A, with these corrections: grey all over, never black and white; no external
> ears; no claws; a big round head on a round body with almost no neck, a short
> flat face with a very short muzzle, a small closed mouth, large dark round
> eyes set wide; dense real grey fur, uneven and a little damp, paler at the
> crown on this older adult; upright on two short hind legs, about the size of
> a person in a cold suit; gentle-looking, like a very large teddy bear
> photographed as a real wild animal, never a cartoon, costume, ape or sloth.
> Also tighten the cut to about four minutes, keeping the long held shots and
> the narration unchanged; it stays in the cave, never a forest.

Grounding for the answer: Dermot's ruling of 7 October 2026 (*"Pandoids look
more like cute giant teddy bears than like sloths"*) and the Stone-First prompt
of record in `images.md`; the Ewok rule and Teddy's four rounds in
`image-prompts.md` (a positive build moves the generator, a negated name does
not); the cold-suit scale in `species-design.md`. **The instruction as sent was
wrong on the body:** it said *not a teddy bear, not a toy*, the reverse of the
ruling, which is the likeliest reason Director asked. The instruction below is
recorded as sent; any re-run replaces clause (3) with the answer above.

**Title and length.** *The Up-People's First Stone.* 3 to 4 minutes asked; 7:15
returned.

**Instruction as sent** (29 October 2026, pasted as one line with the script
appended after *SCRIPT (narrate exactly as written; each [pause] is a silence
and is not spoken):*).

> Make a quiet narrated short film, three to four minutes, from the script exactly as written, with no words added, changed or spoken on screen; the narration is the only voice, calm, slow and unhurried, with real silences at each [pause], and the [pause] marks are not spoken. (1) Point of view: everything is seen from where the one person present could have stood, at their eye-line, mostly low and looking slightly down, as a reconstruction of what they saw; no other viewpoint exists, so the frame knows less than the scene and the thing being reacted to is often partly out of shot. (2) Setting: a deep natural cavern, pale silt floor, broken wet rock, a narrow crack in the rock wall that a person must squeeze through sideways; the only light is one low hand lamp held near the ground and the faint steady amber and blue-green glow of fungus coating the walls; very dark, with detail kept in the shadow; nothing else glows. (3) The being on the far side: large, powerfully built, upright, thick fur that reads grey against stone, with a face of its own, completely still; a real living being of its own kind, not a cartoon, not a teddy bear, not a toy, not a costume, not a person in a suit; show it first as feet standing on silt, then the lamp rises slowly up the body to the face and holds there, mostly in shadow, for a long time. (4) The human is never seen as a face or a whole body: only hands, forearms in a grey-green field coverall sleeve, the lamp, and a rough stone the size of two hands carried against the chest. (5) The action, in order and nothing more: the squeeze through the crack with the lamp low; the feet; the slow look upward; the long stillness; kneeling and setting the stone on the pale silt a hand's width from the being's feet; one step back; the human's voice heard only as an indistinct low murmur that rises at the end, with no intelligible words; the wait; the being bending, placing one hand on a large rock at the edge of the silt and moving it a little; the deep grinding sound through the floor; stillness; the slow return through the crack with the lamp low; then the two stones alone on the silt in the fungus light. (6) Camera: long unbroken takes, very few cuts, slow continuous drift that never locks off and never settles, a faint tremor as if held by a breathing person; no drone shots, no impossible camera, no passing through rock, no crash zoom, no whip pan, no time-lapse, no slow motion, not a trailer, not a montage. (7) Strictly no on-screen text, titles, captions, subtitles, readouts, holograms, interfaces, lens flares or light streaks; no horror, no jump scares, no sudden movement toward camera. (8) Sound: deep quiet, slow dripping water, the low hum of the place, footsteps and scraping on silt and rock, the stone set down, the rock moved; music almost absent, a few sparse low tones at most, never cut on a beat. Peaceable, patient, unsettling at most, never frightening.

**Narration.** Drafted by Fable from S11E01C05, mostly the chapter's own
sentences, in the chapters' third person of the teller; reviewed by Opus
against S11E01C05, S11E02C03 and S14E01C04. Aravena is never named or quoted,
and the telling Stone-First gives on the line in S14E01C04 is not retold, since
that chapter declines to set it down.

> This is told the way things are told below the roof, by the one who was there, because for the whole of it there was only one.
>
> Stone-First was on the line.
>
> The count had a number, and the number was not small any more. On the line, in the open, with the shapes of the up-people's feet in the silt, on all the times when nothing happens.
>
> [pause]
>
> The up-people came down, up above, the way they did. The loud came down the long passage the way water comes down a passage, all at once and then steadily, and settled at the junction, and became the working.
>
> Then it did not.
>
> The loud had come down the passage and had not settled. It had come on. Down the third passage, toward the crack, which it had never done at the start of a working time in all the tellings since the humming stone was lifted.
>
> The light came into the squeeze.
>
> One light. Low. Close to the ground, moving the way a person moves who is trying not to throw anything, and the sound in the crack was one person's, scraping.
>
> One of them was coming through.
>
> Stone-First did the thing Stone-First does, which is nothing, with the whole body still, so that nothing done while a thing is happening becomes part of the telling by mistake.
>
> And the light came out of the crack onto the silt, held low, and behind it the smallest of the up-people. And the light lifted a little, and found Stone-First's feet, and went up, slowly, the way a person looks.
>
> It stopped at Stone-First's face, and stayed there.
>
> Stone-First did not move. The up-person did not go back.
>
> [pause]
>
> Here is what the up-person did, in order, because it is worth getting right.
>
> They were carrying a stone. A stone of the upper levels, the runners' ground, the size of two hands, held in two. They stood on the silt with the light low and the stone held, and looked at Stone-First for as long as a short telling takes, and Stone-First could see them wanting to go back through the crack with every part of the body that was not the eyes.
>
> They did not go.
>
> Then they knelt.
>
> They set the stone down on the line. On the silt, a hand from Stone-First's feet. It made the sound a stone makes when it is put down on ground, small and plain and complete, and the ground took it, and told Stone-First what the ground tells you: that someone was here.
>
> Late. That was the first thing. The manners say you move it before you are seen. The up-person had stood in the open and been seen, and then moved the stone. A stone moved late is still a stone moved.
>
> Theirs. That was the second thing. It was not the people's stone, moved for them. It was a stone they had chosen and carried and set down themselves. The Told had waited a whole life for somebody else to move a stone, and had not known what it would look like, and this was what it looked like: late, and clumsy, and done kneeling, and theirs.
>
> [pause]
>
> The up-person stood, and took one step back, toward the crack. Away from the stone. Leaving the place.
>
> And then said a thing.
>
> It went up at the end. It was said to Stone-First, not to the dark. Stone-First heard it and did not know what it was, and this telling does not say, because the one who was there does not know, and a telling that says more than the one who was there knew is not a telling.
>
> The up-person waited. With the whole body still. The way you wait for a hand to be filled.
>
> There is only one thing the Told do when a stone has been moved for them, and it is not to speak, because a stone is not answered with a word.
>
> Stone-First bent, and put a hand on a rock at the edge of the silt, a good one, and moved it.
>
> The ground spoke. The up-person heard it. The whole body went still in a new way, the way a small one goes still when a sound they did not know turns out to mean something. They stood like that for as long as it takes to say a name.
>
> Then they went back through the crack, slowly, with the light held low, not scraping more than they had to, and up.
>
> [pause]
>
> Stone-First stood on the line with two stones on it, one on each side of the place where the feet had stopped, and did not go after them, and did not go down, and stayed, for a while, in the light that never changes, so that the telling would have an end.
>
> That is the whole of it. Nothing is left out, because there was nothing in it that was a reason.
>
> [pause]
>
> The two stones are where they were left. A stone that has been moved for you is not yours to move again. You do not tidy a beginning away.
>
> It is not a telling yet. A stone is not a telling. It is only the beginning of one.
>
> But every telling begins with one, and this one had two.

**Negatives as objects.** The shared negative, plus: no legible lettering
anywhere; no visible survey instrument (the imager was in its case that shift,
S11E02C03), so the camera is a person's eye-line, not a worn device; no human
face; no intelligible human words; no second being on the line; no forest; no
glow but the fungi and the hand lamp.

**Judging line.** The film fails if the being has ears, claws, a snout, black
and white colouring, or reads as an ape, a sloth, an Ewok or a costume; if the
human's face is shown or their words are intelligible; if anything glows but the
fungi and the lamp; if there is a forest, a third stone before the end, or text
in frame; or if a line of narration is added or changed.

**Grounding.** `src/seasons/s11/e01/s11e01c05.md` (the whole sequence and most
of the narration); `src/seasons/s11/e02/s11e02c03.md` (the survey's side: the
stone held to the chest through the squeeze, the imager still in its case);
`src/characters/stone-first.md`; `src/glossary/the-told.md` (translation
register, no phonetic forms); `src/lore/planets/fliade.md` (*Below the Roof*,
the amber and blue-green fungi, the Pandoid body). Three particulars are not on
record and are low-risk: dripping water, the grey-green coverall (from the
survey portraits), and the line itself being fungus-lit.
