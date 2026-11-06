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

### The century's look, in film as in stills

**Places are well kept, and the imperfection is the camera's.** The 11 October 2026
ruling in `images.md` reached this file late: the shared preamble kept *dust and wear*
until Dermot's *"I also like the cleaner 29th century look to the retro grunge"*
(6 November 2026). Grain and a soft corner belong to the camera. A habitat, a ship, a
station or a Ranger's kit is clean and maintained unless its page says otherwise, and
*What the Record Refuses* sets its displays and its light. A frame set in the past is
exempt.

### Shared preamble

> Slow continuous camera drift, never locked off and never settling. Long
> unbroken take. Diegetic light only: light from no visible fitting indoors,
> daylight, window light, starlight, fire, and any lamp the brief itself names;
> nothing glows that would not glow. Matte surfaces, real materials, clean
> and well kept. Deep shadow with detail retained in it. Restrained, patient,
> unhurried, no event arriving suddenly. Cinematic, filmic grain, shallow depth
> of field. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps.

### Shared negative

> No on-screen text, letters, numbers, signage, subtitles or watermarks. No
> holograms, holographic displays, projected interfaces, glowing UI or floating
> icons. No lens flares, no light streaks, no volumetric god rays as decoration.
> No drone flythrough, no crash zoom, no whip pan, no camera passing through
> solid objects. No jump scares, no sudden movement toward camera, no gore, no
> horror imagery. No time-lapse clouds, no slow-motion explosion, no
> hyperspace star streaks. No rust, grime, dirt, peeling paint or debris, and no
> dials, bulbs or caged lamps in the record's present. Not a music-video montage,
> not a trailer.

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

**Connection details are not kept here** (Dermot, 1 November 2026, verbatim:
*"Some connection details should only be kept locally on the desktop or
privately within Claude but never in the public GitHub repos"*). Which browser
profile or account runs which tool, the plan, its limits and when they reset
are kept on the desktop, not in this file (`CLAUDE.md`, *Connection details
stay off GitHub*).

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

> Two clean sealed atomic clocks side by side on a pale matte wall in a quiet
> station corridor, soft light from no visible source. In each narrow sight port a
> thin column of atoms holds a faint violet light, and a brighter band climbs it;
> one band is behind the other and never catches up. Slow push in over eight
> seconds. Nobody present.

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
> players. Clean matte deck, flush panels, a sealed door standing open.
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
- **Notes:** v10, 4:32, 854×480, 24 fps, 35 MB (filed before it: the second cut, 2:33 and 26 MB, then v7, 4:24). The notes below were written for v7 and hold for v10 except where the version table says otherwise. 480p, below this file's Delivery rule (720p for a Grok-sourced piece); not upscaled. Narration composited as captions, correctly spelled and read in full from frames every two seconds; the audio was not heard, so a line spoken but not captioned (one gap near 3:42) is not known. Poster frame `the-long-white-trail-poster.jpg` taken at 4:28 for v10 (v7's was at 4:19), no caption in frame. New in v7 against the second cut: the launch prologue (Carrigbawn, the rail, *Brightwater*, the climb, the ring), the date (spring 2841, *ten years after the Last Stand*, which matches S05E02C03's 2831), the narrator's age (seventy-seven, fifty-three years on, so 2894) and the wristband's two times. A 4:12 cut with a launch-and-docking prologue and no captions was also supplied that morning and is not filed. Not canon and not Codex: it departs from the record on Threshold's dates (a fifty-year career, 2841 to 2894), its place (an orbital *Lúnasa*), its wording (*layers* for membranes), new particulars (Ciarán Doyle, *Brightwater*, a ring) and diegetic light (violet clocks). The Journal entry lists each.
- **Versions** (read from frames with `F:\CLAUDE\_tools\read-video.py`; the audio was never heard):

  | Version | Length | Supplied | What changed from the last | Filed |
  | --- | --- | --- | --- | --- |
  | v1 | not supplied | 29 Oct, before 08:00 | first cut from the address; ranks wrong | no |
  | v2 | 2:33 | 29 Oct 08:36 | reread: ranks right (Deputy, Chief, Starwarden) | 29 Oct, replaced the same day |
  | 4:12 cut | 4:12 | 29 Oct morning | launch-and-docking prologue, no captions | no |
  | v6 | not read | 29 Oct 08:38 | not read | no |
  | v7 | 4:24 | 29 Oct 11:46 | captions; Carrigbawn prologue; dated *spring 2841, ten years after the Last Stand*; narrator seventy-seven; wristband's two times | 29 Oct, replaced the same day |
  | v10 | 4:32 | 29 Oct 13:01 | adds *fifty years of other work … on more stations than I can name* and the returns to the docking spine, so the fifty years are a career, not one watch; one caption gap near 3:46 | **29 Oct, current** |

### `the-up-peoples-first-stone.mp4`
- **Type:** assembly, from Director brief D6
- **Tool:** Grok Imagine, Director (beta)
- **Date:** filed 2026-11-06
- **Used by:** `src/journal/the-up-peoples-first-stone.md`
- **Prompt:** brief D6, above, with the notes given in its version readings
- **Negative:** as the brief
- **Notes:** v6, 6:31, 854×480, 24 fps, 35 MB; not upscaled. No captions, and the audio is not heard here, so the narration is Director's claim. Poster frame `the-up-peoples-first-stone-poster.jpg` at 6:20. Versions and readings under D6.

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
also be useful"*, then *"Would you trust Grok to create these videos? […] I could open it in
Chrome."* The answer given:
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
(the highest offered; 1080p refused), 10 s, 16:9, two takes each, frames pulled
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
shot list, the narration or dialogue, and the negatives if Director takes more; ask for 16:9 landscape.
The shared preamble and shared negative above apply to every shot, and the
house motion signature (the hum, the drift, the forty seconds) holds. In a
rural, outdoor or old place the shared negative's line on rust, grime, dirt,
debris, dials and lamps binds the century's made rooms only; earth, weather,
lichen, whitewash and the record's own old objects stay. Director
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
never linked from a chapter or a lore page, and never adjusts the record, save
that an idea from one of Dermot's own films may enter canon at his word, per
film and per idea, through a page under the usual checks, the film itself
staying an impression and never a source (his ruling of 6 November 2026;
`CLAUDE.md`, *Four canon statuses*).
Director has cut at 854×480; it is filed as it comes, not upscaled.

**The ring, if a film shows it** (Dermot, 30 October 2026, `intake-2026-10-30.md`).
A brief that shows *The Long White Trail*'s orbital ring gives Director its
settled look. It is a chain of thousands of separate habitat stations at
geostationary height circling Earth. From an Irish bay at dawn it is a beaded arc
of pinpoints about 29° up in the south, lit before the ground and never moving,
and its beads run into a fine line toward the horizon. From the docking approach
it is a necklace of distinct stations curving away round the planet. It has no
continuous band and no tether. Lúnasa is one bead of the ring and never has the
forty seconds. The ring's look is fixed for films only and is not canon.

### The five subjects, and why

**The forty seconds, Dock Seven, 2815.** The premise of the whole work is two
atomic clocks forty seconds apart that stay apart, and a still can show
the gap but not that it holds, clears and comes back. It is the
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
the pause before a stylus, which only time can show. Safe because the record
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

**Revised 6 November 2026, after version 1.** Dermot, on the worn dials: *"Why do the
clocks look so dirty? I preferred the high tech atomic clocks from the Long White
Trail"*, *"I also like the cleaner 29th century look to the retro grunge"* and *"Why
would the even be using analogue clocks?"*, then *"Yes"* to atom columns with one
set of digits. He was right on the record. C-7A and C-7B are networked instruments
with readouts to the second (the Day 49 log gives *03:10:41* and *03:10:01*), and
nothing in the chapters or the Codex gives them hands. The dials and the wear were
this file's, against the 11 October rule below and against *What the Record Refuses*,
which calls a wall of dials a period object and sets out the century's displays and
light. The brief as first written is in the git history of this file. Version 1's
reading is at the end of this entry.

**Instruction to paste.**

> Make a film of about 90 seconds, 16:9, set entirely in Dock Seven of
> Threshold Station, a Survey Corps shore station on a coast of Earth, in 2815
> UCSD, Late Summer, from Day 44 to Day 52. Dock Seven is a clean, well-kept
> enclosed dock of the far future: pale matte composite walls and deck meeting in
> rounded coves, no pipes, no rivets, and along one long wall, well apart, a large
> pressure seal on the left and a smaller inner hatch on the right, each a plain sealed door. Above each door is a chronometer, an
> atomic clock: a clean sealed housing of pale matte composite with a narrow sight
> port, in which a thin column of trapped atoms holds a faint violet light, and
> beneath it a matte, unlit readout showing the time in digits, hours, minutes and
> seconds. A slightly brighter band climbs each column steadily, taking a full minute from foot to head, then starts again at the foot. Both clocks were calibrated to within half a second on Day 12. On
> Day 44 they were found forty seconds apart. On Day 47 Sub-officer Pren Halvard of
> the Survey Corps detachment recalibrated both and filed Incident Report 001, and
> the gap cleared. On Day 49 at 03:10 station time, on the night rotation, Technician
> N. Isern of the Maintenance Division found them forty seconds apart again, re-ran
> the calibration, isolated both units, re-seated the bus coupling, and watched the
> gap return after every pass. On Day 52 Station Manager Cors Delveyne closed the
> report as a calibration issue. On Day 52's 00:00 to 04:00 watch, both clocks were
> reset at shift start; at 01:22 Watch Officer Mera Soln of the Operations Desk logged them
> forty seconds apart again, filed an addendum after the closure note, and kept the
> dual-clock verbal callouts for every docking. That is the whole film.
> Nobody is named who is not named here, nobody is given any title beyond the
> one written here, and no other place, year or vessel appears. The narration
> is only the sentences supplied, read as the documents themselves in their own
> present tense, with no narrator, no framing and no added sentence. No face is
> ever shown, not a chin or a cheek: hands, gloved where the work allows, backs, and
> a figure seen from behind, head level, since the record describes
> none of these four people. Light is recessed and diffuse, from no visible fitting,
> soft across the dock, with no lamp, bulb or cage anywhere; the only other light is
> the faint column in each sight port. The camera is a fixed dock camera or a
> hand-held recorder someone on the station could have carried. Slow, quiet, patient,
> no music under the documents.

**Shot list.**

1. Fixed dock camera, high on the opposite wall, looking straight across at the
   long wall, seal left, hatch right, both clocks in frame; the one motion
   is the bright band climbing each column, one a steady distance behind the
   other and staying there. Hold ten seconds.
2. Hand-held recorder at waist height, Day 47: a gloved hand opens a flush panel
   below one clock and sets it; the two bands climb level.
3. Desk-level camera, Day 47: a hand writes on a thin matte sheet with a plain
   stylus, the sheet beyond focus; soft light from no visible source.
4. The fixed dock camera, Day 49, 03:10: the dock empty, the light at its low night
   setting; the bands are apart again. The readout above the seal shows *03:10:01*
   and the one above the hatch *03:10:41*, both counting on together. Hold.
5. Hand-held at the open flush panel, Day 49: a technician's hands link a small
   sealed module to the unit, re-seat a coupling, run the pass, the movement
   continuous; each time the hands come away the gap is back. The module has no
   label and no lit indicator.
6. The fixed dock camera, Day 52, 01:22: a figure stands between the two doors,
   back to the lens, facing the wall, the head level, a low indistinct voice calling
   two times aloud to a vessel not in frame; the readout above the seal shows
   *01:22:05*, the one above the hatch *01:22:45*, both counting on; the bands apart.
7. The fixed dock camera, the dock empty, both clocks in frame, the columns and
   bands moving. Hold eight seconds and end.

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

**Negatives as objects.** The shared negative, except that the two readouts carry digits, plus: no dial, no clock face, no
clock hands, no analogue instrument, no rust, grime, dirt, scratches, stains, peeling
paint or exposed pipes, no rivets, no caged lamp, no bulb, no desk lamp, no paper, no
pen, no glowing screen, no hologram, no readout that lights a face or a wall, no
lettering but the digits on the two readouts, no label on anything, no orbital station, no ring, no
spaceplane, no rail, no sea or window on the sea, no view of the station from outside,
no face, no legible tab or insignia, no uniform colour named, no narrator saying *I*,
no name not in the instruction, no *layers*, no year but 2815, no music under the
documents.

**Judging line.** The film fails if anything but the sight ports glows; if a dial,
hand or period object appears; if any face is shown; if a digit on a readout is
garbled, or the readouts differ by anything but forty seconds except directly after a
hand has set them; if any other lettering appears; if any name,
title or year is spoken or captioned that is not in the instruction; if the film
leaves the dock; if the two bands are level at any moment other than directly after
a hand has set them; or if the distance between the bands widens or narrows on its own.

**Digits, and why they are in the scene.** Dermot, 6 November 2026: *"Grok Director got
the digits right even of Gemini does not"* and *"Grok seems to do much better with
lettering than Gemini does"*. The rule above, that lettering generated inside a scene
fails, came from image generators. For Director it is now a thing to test and read, and
every digit is read from frames before a film stands. Stills stay as they were.

**A choice to know about.** A display in this record is matte, still and unlit
(`what-the-record-refuses.md`), and the brief keeps that for the readouts. The sight
port is a window on the instrument's working part, not a display, and atoms held in a
clock do give off light, so it stands under *nothing glows that would not glow*. The
climbing band is the film's device for showing forty seconds in sixty, and nothing in
the record says the instruments do it. A film is an impression, so neither is a fact
about Threshold.

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

**Version 1, read, 6 November 2026.** Run from Dermot's Chrome on Opus at his *"D1 when
ready"*, from the brief as first written, in project `35120d9b`. 1:31, 854×480, 7 scenes,
kept at `F:\CLAUDE\Director films\`, not filed. Director now asks six setup questions, then
shows a draft of stills and narration to approve, then asks to start production.

The narration matched the brief in the draft, every sentence in order. Read from frames
every three seconds; the audio is not heard here. The film held the seven shots, the
forty-second gap as hands apart, no legible numerals and no glowing clocks. It fails on the
look, as above: worn dials, caged lamps, a pen and paper. By Director's own report and the
frames: the clocks each grow an extra hand at 1:22 to the end; a small red label shows on
the module at 1:01 to 1:06, which sits still for three seconds; and the figure's chin shows
for a moment in the doorway, which the frames every three seconds did not catch.

| Version | Length | Date | Changed from the last | Filed |
| --- | --- | --- | --- | --- |
| 1 | 1:31 | 6 Nov 2026 | First run; worn dials and caged lamps | No |

### D2. Nothing Taken

**Title and length.** *Nothing Taken.* 90 seconds; accept 75 to 110.

**Instruction to paste.**

> Make a film of about 90 seconds, 16:9, on a Celtic Union charter world the
> record does not name, in the late autumn of 2826 UCSD, on one still afternoon
> and the morning after. A smallholding below a hill, kept, in 2826: a long low
> house of sealed pale stone panels under a dark plain roof, grey heating
> conduits under the eave, a folded field drone in a cradle on the gable, a byre
> of the same stone, a smooth pale yard wall, straw by the gable, a
> composite-handled brush standing against the wall, a small grey yard robot at
> rest, unlit, no face, a top field with slim sensor posts and no wire, three
> goats, a dog, a lane. Up the hill, not shown close, is a Survey Corps boundary
> post of two Rangers with a slim pale composite mast on the ridge, in frame in
> shot 1. The keeper is Donncha Ó Laoire, a lean man with short dark hair
> greying at the temples, in a dark brown-green field jacket. Some time
> after the middle of the afternoon the three goats go to the far wall all
> together, as for a dog, and the dog is at his heel. A skirt of straw the
> height of a man gets up off the ground by the gable in air that has not moved
> all day, goes along the yard wall and over it, and lies down along the wall
> and stays. He goes in to see about the milk. Going out with a bowl, he puts
> his hand to the back door and it opens outward, on hinges hung on the inside,
> and holds there in the still air with no mark on the wood. He does not force
> it and does not go through it; he goes round by the front and sets the bowl
> on the stone by the back step. Before the light goes, Senior Éilis Ní Mhurchú
> of the Survey Corps, a compact, square-shouldered woman, black braids bound at
> the nape, bareheaded, walks down the lane with a small plain case of dull
> composite, no latches or clasps, in the Survey Corps' matte deep olive
> high-collared field shell, one small barred tab at the collar, nothing else
> on it, tries the door herself, writes on a thin pale form, goes in by the
> front, comes out by the back door, steps over the bowl without looking down,
> and says words at the door quietly, going out, not to him, which are not heard. Night: the door open the wrong way, the bowl out, the
> dog across the front step. Morning: a skin on the bowl, the dog drinks it, he
> sweeps, and the door comes in to him on its hinges and he goes through it
> without stopping. No narration. Spoken lines are only the ones supplied.
> Nothing is seen in the straw or the lane, and nothing explains the door.
> Faces are turned away or in shadow.

**Shot list.**

1. Fixed camera on the byre wall looking across the yard to the top field, the
   slim pale mast on the ridge beyond; the goats cross to the far wall together; flat overcast afternoon light.
2. The same mount: the straw gets up by the gable, turns at the height of a
   man, goes along the wall and over it, and lies down; nothing else in frame
   moves, the dog included.
3. Fixed camera low in the yard, some paces back and left of the back door: from
   inside, his hand and the bowl; the door swings out and comes to rest laid flat
   against the outside wall on its hinge side, and holds; he stands on the
   threshold, head down, turned from the lens.
4. Fixed camera at the gable corner, the lane beyond: a Ranger walking down
   with a case; dusk.
5. Hand-held outside the back door: her hand tries it, it swings out; her
   other hand writes on a thin pale form held beyond focus; last light.
6. Fixed camera low inside the back door, looking out: her back in the doorway,
   saying something the recorder does not pick up; her boots step over the bowl
   on the stone.
7. The byre-wall mount at morning: the door comes in; he goes through; low
   sun, long shadows.

**Narration.** No narration. Dialogue, all of it, in this order. Hers, the four
questions, the time, the wind, the animals, what was changed, in those words
and no others; his answers are too low to catch and no word of them is heard.
His: *You'll want the door, a Mhaoir.* After she has tried the door, hers: *Is
anything missing.* His: *No.*

**Negatives as objects.** The shared negative, plus: no wind in trees, grass
or hair, only in the straw; no dust devil, funnel or whirlwind drawn beyond
the straw itself; no figure, shape, face or light in or behind the straw; no
glow at the door; no damage to the door or its frame; no instrument with a glowing display; no mast lit; no vehicle; no
weapon; no second Ranger; no fairy, no small figures, no hat, cloak or
costume; no legible form; no dates spoken; no name for the world or the
valley; no narration; no thatch, half door, small-paned window, lever handle,
wooden broom, wire fence, lattice mast, cap or Aran jumper; no latched or
hard-shell case, clipboard, pen, tablet, phone, belt, holster or radio, and no
coat over the shell.

**Judging line.** The film fails if anything but the straw moves in the still
air; if anything is seen in, behind or after the straw; if the door swings
into the room, stands at an angle to the wall or shows damage; if a face resolves; if the Ranger carries anything
but a case, or a latched or hard-shell case, or wears anything but the olive shell and one barred tab; if a
vehicle, a second Ranger or a stranger appears in the lane; or if a line is
spoken that the brief does not give.

**Grounding.** `src/seasons/s01/e00/s01e00c11.md` (every event, the four
questions, the lines); `src/characters/donncha-o-laoire.md` and
`src/characters/eilis-ni-mhurchu.md` (no appearance on record, the world and
the valley unnamed on purpose); `src/lore/universes/si-gaoithe.md` (the straw
is the only consistent tell, gone before anyone arrives);
`src/lore/star-rangers-command-hierarchy.md` (Senior, five bars) and
`src/lore/rank-insignia-and-uniform.md` (Survey Corps deep olive, one tab,
nothing on the shell glows). The holding's look and both figures' build and hair
come from the filed frames `donncha-o-laoire.jpg` and `eilis-ni-mhurchu.jpg`
(`images.md`, 1 November 2026: *"Still looks like 20th century Ireland rather than
29th century"* and *"The are allowed to have robots instead of wooden brooms and
farm tools"*), not from canon; the pages still leave their appearance unrecorded.
The door's staging in shot 3 is the one that held there, after eight variations
drawn from inside swung the leaf into the room. If the draft stills return a stock
case, drop the case at that stage, as the still did.

### D3. Left Blank

**Title and length.** *Left Blank.* 120 seconds; accept 100 to 150.

**Instruction to paste.**

> Make a film of about 120 seconds, 16:9, in three places in 2826 UCSD, with
> no narration. First, early spring: a Survey Corps platform in deep space in
> Deadwater, a universe where nothing travels faster than light, a small
> station of seven people at the quiet point of one system, a small pale coved
> room with light from no visible fitting, and a window on a starfield with
> nothing else in it. Section Lead Agnete Solvang of the Planetology Branch, a
> tall rangy woman with straight dark hair cut at the jaw, in a matte deep olive
> high-collared field shell with one small plain tab at the collar, writes one
> word at the head of a thin pale return sheet with a plain stylus, reads a two-page circular standing up because the hull's bag
> closes at the sixth hour, looks at a new line under the first for a short
> time, and does not fill it. She turns the sheet and writes a remark on the
> back, initials it, and puts the sheet and a relief list into a plain flat sealed bag. On the
> table is a chart she does not look at. Second, the Survey Archive on
> Threshold Station, Earth, a small warm-panelled room, a plain pale desk,
> concealed light, no window: Field Officer Benedek Rónai of the Archive Branch,
> a heavy-set man with close-cropped dark hair greying at the sides, same
> shell, reads twenty-one
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
   stars only, the table, the chart, the sheet; a hand writes one word; soft
   light from no visible source.
2. Hand-held at shoulder height: she stands reading two clipped pages; soft
   light; the one motion a page turning.
3. Desk-level camera: the stylus held above an empty line and not lowered; then
   the sheet turned over and the hand writing on the back.
4. The bulkhead mount: the bag closed and lifted off the table; the chart left
   where it was.
5. Fixed camera above an Archive desk on Threshold: twenty-one sheets dealt
   out in order; a hand turns the last one over.
6. Desk-level: the hand writes one short word and one mark, and stops.
7. Hand-held, walking: a sheet and a stack carried to a second desk; a woman's
   hand initials under initials; neither face; the camera stops at the desk and
   holds there for all seven lines.
8. Fixed camera on a different table with a chart, summer: a hand holds a
   half-sheet for longer than a line needs, and puts it in a file.

**Narration.** No narration. Dialogue, at the Principal's desk only, in this
order. Principal: *That isn't a name.* Rónai: *No.* Principal: *The circular
asks for the zone.* Rónai: *That is the zone. A blank would say they were here.*
Principal: *When they meet a second one, they can tell us what to call it.*
Rónai: *Yes, Principal.*

**Negatives as objects.** The shared negative, plus: no exterior shot of
anything, no spacecraft, no hull, no fold, no star streaks, no nebula, no
planet or moon in the window, no legible lettering on any sheet, bag, chart or
wall, no screen or tablet, no paper, pen, clipboard or lamp (a sheet here is
thin, pale, matte and unlit, written by hand), no glowing indicator, no face, no legible tab, no uniform but dark olive, no narration,
no spoken date, no name for the platform, the hull, the staging site or the
Principal, no mark drawn large enough to read, no belt, no pockets, no canvas
sack.

**Judging line.** The film fails if any letter or figure on any sheet is
legible; if an exterior, a ship or a fold appears; if the window shows
anything but stars; if a face is shown; if a spoken line is added or
reordered; or if her stylus touches the empty line at the platform.

**Grounding.** `src/seasons/s01/e00/s01e00c12.md` (every action and line);
`src/characters/agnete-solvang.md` and `src/characters/benedek-ronai.md`
(their ranks and branches, no appearance on record, the platform, hull,
staging site and Principal unnamed); `src/lore/universes/deadwater.md` (the
one staged system, a starfield with nothing in it);
`src/lore/threshold-station.md` (the Survey Archive is on the station);
`src/lore/star-rangers-command-hierarchy.md` (Section Lead, Field Officer,
Principal); `src/lore/rank-insignia-and-uniform.md` (deep olive, one tab).
`story-bible/starship-design.md` has no sheet for the platform or the relief
hull, which is why no exterior is allowed. The window is the film's and not the record's.
The rooms, the shell and both figures' build and hair come from the filed frames
`agnete-solvang.jpg` and `benedek-ronai.jpg`, not from canon. The chapter says
sheet, hand and clipped, never paper or pen, and both frames fail a pen, as D1 does.

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
> Dhálaigh, a tall rangy woman with one black plait down her back, sends her
> daughter Úna to bed, goes out to the gate and keeps her
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
place; no cloak, shawl, headscarf, long dress or tartan; no thatch, standing
stone, hawthorn or lantern; no wire fence, steel gate, tractor or lamp post.

**Judging line.** The film fails if the figure's face or any feature
resolves; if it moves toward the house or more than one is shown; if the light
is brighter than a lamp's worth or comes from above the trees; if a second
moon or an eclipse is drawn; if the child goes to the window; if any music
plays; if a human face is shown; or if a date, a count of minutes or a place name is spoken
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
> attendant, Nuala Beirne, a small grey-haired woman somewhere past sixty, a dark
> green coat with the hood down, arms folded, dressed for the gallery
> and not for visitors, has the door open before they reach it. Inside, in a
> whitewashed room at the foot of the stair with the noise shut out, she brings
> down three bound volumes of the Lights Board's register and they are laid
> open on a table in the order they were written: old pages, hands that change,
> one column that does not, and no entry ever legible. Her clock, the one that
> times the light, is a plain old mechanical wall clock with a dial and hands,
> kept and going, and it never glows. On the gallery in
> the gale the light shows its character: two flashes, then dark, then two
> flashes, fifteen seconds from group to group, correct and no tighter than
> that, again and again. On the stair in the dark the lantern glass carries the
> gale as one low note. The tide falls on the shingle. The only sign of the
> station is far off on the water, a low dark line with three small working
> lights, never nearer and never resolved; no building, only shore, spit, tower
> and sea. Light is the day going, the lantern and one lamp in the room. Faces
> stay turned, shadowed or beyond focus. No narration. Spoken lines
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
5. Fixed camera at the seaward rail, looking back at the lantern glass, in the gale: the lantern's
   character, two flashes, dark, two flashes, held for thirty seconds and
   counted; dusk and the lantern only.
6. Hand-held on the stair in the dark: the attendant's back going down, the
   one low note in the glass; no face.
7. Fixed camera on the gallery looking down the spit to the shore: the tide
   falling, the spit lengthening; far off on the water, a low dark line with three
   small working lights, never nearer and never resolved.

**Narration.** No narration. Dialogue, in this order. His, in the room: *Your
clock. The one that times the character. I want to know how often it needs
correcting, and I want to know whether anyone has ever written that down.*
Hers: *Everyone writes that down. It's a maintenance record. That's the whole
job.* Then: *Nobody's ever asked for it.* Hers, on the stair, to someone out of
frame: *Because it's lit. That's the whole of it. A light you only put on when
you know someone's out there isn't a light. It's a favour.*

**Negatives as objects.** The shared negative, except for this one clock, plus:
no view of Threshold Station closer than that low line, and no building but the
tower; no spacecraft; no robot closer than a distant figure from behind, no
detail of its body resolved; no non-human face; no legible page, entry or initial; no digital clock,
no glowing clock; no continuous sweeping beam drawn as a cone, the character
is the lantern lighting and going dark; no sun, no calm sea, no lightning, no
waves over the spit; no weapon; no legible tab or insignia; no vehicle on the
spit; no narration; no spoken year; no banded tower, no cap or jumper, no gull,
no boat.

**Judging line.** The film fails if anything of the station appears but that low
line, or any building but the tower; if the lantern's character is anything other than two flashes and a
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
station stays a far silhouette, as `threshold-station.jpg` keeps it). The clock has
hands because the chapter makes it mechanical (*"a mechanical clock in a damp stone
tower"*, four replacements of the movement); it is the Board's, not the station's.
Her build and coat come from the filed frame `nuala-beirne.jpg`, not from canon.

### D6. The Up-People's First Stone (S11E01C05)

**Status, 6 November 2026: filed. Version 6 stands, at Dermot's word, as `src/video/the-up-peoples-first-stone.mp4`, shown in the Journal as an impression.** See *Version 4, read*, *Version 5, read* and *Version 6, read* at the end of this entry.

**Status, 5 November 2026: version 3 published and read, and it clears the judging
line as far as frames can show; not filed.** The version table and the readings
are under *Version 2, read* and *Version 3, read* at the end of this entry. What
follows is the state as it stood on 29 October.

**Status, 29 October 2026: run once, held until Director can be run again.** Version 1,
published 13:28, came back at 7:15 and 37 scenes against the 3 to 4 minutes
asked, and Director stopped on a question, *What does a Pandoid look like?*,
offering A (panda-like, round flat face; its own pick), B (bear-like, grey,
round ears) and C (panda-sloth, long claws). Nothing has been answered or filed. Chosen as the first of three subjects (Stone-First's knock, Donncha's
door, Órla Shepherd's walk home) screened that day from all 183 character
pages for one filmable image that carries a whole arc; Donncha's is already D2.

**The answer owed at the next run, in one round.** Pick **A** and add, on one
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

**Version 2, read, 5 November 2026.** Run from Dermot's Chrome on Opus at his
*"Grok Director should be able to run or continue the next video prompt"*. The
answer owed above went in the same round, with two additions: *no dark eye
patches* and *no high round ears*, because Director's notes had kept both. A
first design was turned back for small close-set eyes and a bear's snout, and
the second was approved: no ears, large wide-set eyes, a very short muzzle, a
small closed mouth, real fur.

| Version | Length | Date | Changed from the last | Filed |
| --- | --- | --- | --- | --- |
| 1 | 7:15 | 29 Oct 2026 | First run; the being read as an ape | No |
| 2 | 6:31 | 5 Nov 2026 | The Pandoid remade to the answer above; repeated picture cut | No |
| 3 | 6:31 | 5 Nov 2026 | One repair round on the faults read in version 2 | No |
| 4 | 6:31 | 5 Nov 2026 | Closing shot only: the second stone remade to match the one set down | No |
| 5 | 6:31 | 6 Nov 2026 | The stone shot only (2:46 to 3:23): the left hand remade; three hands near 2:48 | No |
| 6 | 6:31 | 6 Nov 2026 | The start of the stone shot (2:46 to 2:55) re-drawn: two hands throughout; more of the kneeling figure shown | **6 Nov, current** |

**The length.** Four minutes cannot be had. By Director's report the script
alone runs just over six minutes spoken, so it kept every word and cut
repeated picture. The brief's three to four minutes was wrong for this script.

**Read from frames and sheets.** The audio is not heard, and the film carries
no captions, so the narration is unverified: *word for word* is Director's
claim. Against the judging line:

- **Passes:** no ears, no claws, grey all over, no cartoon or costume, no
  forest, no text in frame. The bending shot at 5:05, the hand on the rock, is
  the best thing in the film.
- **Fails: a human face.** At 1:44 to 1:53 a cheek and chin sit at the top right
  of the frame, with a pale shirt collar at the lower right.
- **Fails: something glows.** The fungi read as flames at 0:12, 0:36 and 6:08,
  and at 1:48 a whole wall is lit amber.
- **Fails the camera rule:** about 98 seconds of the film are effectively a still
  (2:12 to 2:45, 4:13 to 4:56, 5:51 to 6:03 among them), mostly one full-face
  portrait looking into the lens with a pasted-on edge. The brief asks for a
  drift that never settles, and for the face mostly in shadow.
- **Continuity:** the green lamp becomes an old hurricane lamp at 2:50 to 3:02.
  The stone set down is rust-orange. The closing shot shows a dark blue-grey
  stone seen nowhere earlier in the frames read, with the orange one almost out
  of frame and the rock Stone-First moved behind them, so the two stones the
  ending turns on do not read as two.

**Version 3, read, 5 November 2026.** One repair round at his *"Yes, one round"*,
naming the faults above and nothing else. Read from frames at twenty-second
intervals plus the doubtful points, with a one-second motion measure over the
whole film. The audio is not heard and there are no captions, so the narration
stays unverified.

- **Fixed:** no human face in any frame read. Static picture falls from about 98
  seconds to 6. The frozen portrait is gone: Stone-First now stands at a distance,
  breathing, in a slow drift, the face lower and mostly unlit. The green lamp
  holds throughout, and the blue-grey stone is gone, so the ending reads as two.
- **The judging line:** cleared on every point frames can show.
- **Weakest:** the rust-orange stone of the closing shot (6:07 on) has become a
  smooth, over-saturated, loaf-like shape, unlike the rough stone set down at 2:50.
  The replacement at 1:46 to 1:53, the six static seconds, shows a dark passage
  with two small lights at its far end and blue on a wet floor, which nothing in
  the brief asks for. The fungi at 0:30 and behind the held shots are brighter
  than *faint*. At 2:50 a coverall knee is in frame, beyond the brief's hands and
  forearms.

**Version 4, read, 6 November 2026.** Made on 5 November at his *"Fix the last stone"*;
Director published it at 20:41, and it is kept at `F:\CLAUDE\Director films\`, outside the
repository. Director's report: *nothing else in the film is changed*. Measured against
version 3 from frames every two seconds, that holds: the picture differs only from about
6:06 to the end, and the sound's level matches throughout (half-second level, no point more
than 1.5 dB apart). That is a measure of level, not a hearing, and there are no captions, so
the narration stays unverified.

- **Fixed:** the stone in the closing shot is now the rough, broken, duller rust-orange block
  set down at 3:03, not the smooth loaf, so the ending's two stones read as the two the film
  has shown.
- **Also changed, unasked:** the fungi behind that shot fall from bright to faint, which is
  nearer the brief.
- **Unchanged from version 3:** the dark passage with two small lights at 1:46 to 1:53, the
  brighter fungi at 0:30 and behind the held shots, and the coverall knee at about 3:03 (read
  at 2:50 in version 3).
- **The judging line:** cleared on every point frames can show, as version 3. At a glance on
  the contact sheet the being reads as a bear cub. The line names an ape, a sloth, an Ewok and a
  costume, not a bear, so this is passed and named rather than failed.

**The voice** (6 November 2026, after Dermot heard it and asked: *"Is that meant to the voice of a Pandoid or just a translation voiced by a human?"*). A translation. The brief names no voice, and Director's sounds human to him, which is right: the record holds no form of the Told's speech (`src/glossary/the-told.md`), so a voice made to sound like a Pandoid would invent what the record declines to, the line `music-prompts.md` draws under *Where a track may not be generated at all*. A later version keeps a plain human voice reading the translation, with no accent or effect to suggest a speaker of the Told.

**Version 5, read, 6 November 2026.** Dermot heard version 4 and caught a fault the reading
above missed: from about 2:54 the left hand, the lower of the two in frame, had short thick
bunched fingers and no clear thumb, and read as a foot. One note at his *"Fix left hand only"*,
run from his Chrome on Opus; Director published it at 12:03, and it is kept at
`F:\CLAUDE\Director films\`, outside the repository. Compared with version 4 from frames each
second, the picture differs only from 2:46 to 3:23, the one shot. The sound's level matches
apart from one half-second at 2:47; that is a measure, not a hearing, and the narration stays
unverified.

- **Fixed:** a bare left hand at rest on the silt, four slim fingers and the thumb where it
  belongs, through to the end of the shot.
- **New fault:** for about a second near 2:48 three hands show, because a fist comes out of the
  lower sleeve while the left hand is still on the stone, and the hand on the stone then goes.
  The fist that remains stays curled, and reads a little like the old foot, until it opens
  at about 2:51. Director reported only that the fingers stay curled for a moment.
- **The whole shot was re-rendered**, so the right hand, the lamp and the stone are new renders
  of the same things, and they hold.
- **Gloves.** The record does not say whether Aravena wore them, and the hands stay bare at his
  choice: a repair for gloves would have touched every shot with a hand in it.

**Version 6, read, 6 November 2026.** Dermot confirmed the three hands show at speed, and one
note went to Director; it published at 16:34. Read from a sheet of the stone shot every half
second, 2:45 to 2:57, and compared with version 5 from frames each second. The sound's level
matches throughout (no half-second more than 1.5 dB apart), which is a measure, not a hearing,
and the narration stays unverified.

- **Fixed:** two arms and two hands in every frame read. The left hand lifts off the stone on its
  own sleeve, opens as it goes and rests on the silt by 2:50, and the fist is gone.
- **Changed to get there:** from 2:46 to about 2:50 more of the person shows, a bent knee, a thigh
  and the coverall to about the waist, beyond the brief's hands and forearms. No face shows, so
  the judging line holds. It reads as someone kneeling, and is passed and named.
- **Changed and not reported:** Director said the rest was unchanged, but the picture also differs
  from version 5 at 3:56 to 4:08, 4:41 to 4:53 and 5:10 to 5:29. The content is the same, with a
  slightly cooler, darker tone, dimmer fungi and a small shift of framing; at 5:29 the lamp sits
  lower and is partly at the frame's edge. A closer look at the fungi favours version 6, if
  anything, since the brief asks for *faint*.

**The pillar at 4:02, kept** (6 November 2026, Dermot: *"Slightly surreal effect when the camera pans around to show the same cave to the righthand side at 4:02"*, then *"Keep it"*). From about 3:57 to 4:07 a rock pillar crosses the frame and the same view of Stone-First returns on its far side, a transition hiding the join between two held shots, with a similar pass near 4:46. It dates from version 3. It sits awkwardly with one still eye-line, and it stands as his choice: a later round leaves it alone.

**Version 6 stands** (Dermot, 6 November 2026, *"Version 6"*). Filed in the Journal as `src/journal/the-up-peoples-first-stone.md`; poster taken at 6:20, no caption in frame. The entry names the chapter without linking it, because a Journal link to a chapter would put the film in that chapter's *In the Archive* list.

### D7. Lúnasa

**Status, 30 October 2026: drafted, not run.** Dermot's request, verbatim:
*"Draft a Director brief for the Lúnasa remake"*, the same morning he settled
the ring's look for films (`intake-2026-10-30.md`: films only, circling
Earth, Lúnasa without the forty seconds). Drafted on Opus, because what the film
shows is mostly physics and geometry: a launch, a climb, an orbit, a view from
the ring (the 16 October line in `CLAUDE.md`). It is not canon and asserts
nothing in the record. It is filed in the Journal at most, beside *The Long
White Trail*, which stays as it is.

**What the remake keeps and what it drops.** It keeps the trailer's three
images: the terrace above a bay at first light, the long white trail climbing
off the water, and the ring with Lúnasa as one bead of it. It drops everything
the Journal lists as a departure. There is no narrator and no voice, so nobody
the record has never met speaks. There is no clock and no forty seconds, by the
ruling. There are no layers, nothing glows violet, and no Carrigbawn, Ciarán
Doyle or *Brightwater* is named. The date is 2826 UCSD, the record's present,
not 2894. The spaceplane becomes what the record flies, an
[ascent javelin](../src/lore/ascent-javelins.md), and it keeps the trailer's rail
across the bay (Dermot's *"option 1 for the rail"*, 30 October 2026, which
put rail sites into the javelin lore). Without a
voice the film is a duration, like D4: the time it takes to go from the
terrace to the ring.

**Title and length.** *Lúnasa.* 2½ to 3 minutes; accept 2 to 3½.

**Instruction to paste** (as one line, since Enter sends in that box):

> Make a quiet wordless film of about two and a half minutes, 16:9, with no narration, no voice, no dialogue, no captions and no title card. It is set in 2826 on Earth and in high orbit above it, and it shows only what is described here, in this order, with nothing added. (1) Before dawn, late summer: a stone terrace on a hill above a wide bay on the west coast of Ireland, the sea dark and calm, the sky deep blue going pale in the north-east, low green hills across the water. Low across the southern sky, about a third of the way up from the horizon, is a fine arc of separate points of white light, already lit by a sun that has not reached the ground. It has a regular rhythm: brighter points, like pearls, evenly spaced about two moon-widths apart, and between each pair of pearls about nine much fainter points, evenly spaced. It does not move at all, and toward the east and west horizons the points crowd together into a faint fine thread. As the sky slowly brightens, the faint points between the pearls fade out one by one until only the bright pearls are left, a clear string of evenly spaced lights low in the south. It is a ring of thousands of separate habitat stations very far away in orbit: never a solid band, never a structure joined to the ground, never close. (2) Across the bay, on the far shore, a launch site: a long straight level rail running beside a runway and out along a low causeway into the bay, a few small low steady lights along it, and a single slender pale winged craft, short swept wings, a blunt nose, one body with nothing riding on it, plain unmarked skin with honest seams, a few small ports, sitting on a sled at its landward end. The sled carries the craft along the rail, faster and faster, and at the end of the causeway the craft lifts off it on its wings, already climbing over the open water, while the empty sled slows on the track. Then its own engines take it up in a steepening climb, leaning slowly east, toward the dawn; no flame shows from the terrace, only a moving point and the trail behind it. Minutes later, as it climbs above the earth's shadow the high part of its exhaust trail catches the sun before the ground does and shines white and gold against the blue sky, a long white trail standing over the bay while the water is still dark. The low roar arrives at the terrace about a minute after the launch, because the launch site is far away. The trail never reaches or touches the arc of lights, which is hundreds of times farther away. (3) Seen through a small round window of the craft as it climbs: the curve of the earth's horizon, the sky going black, cloud over the sea, sunlight striking in. The flight is smooth; no shaking, no fire outside the window. (4) Hours later, in high orbit, seen through the window of the small craft that has carried passengers on from low orbit: the whole earth large in the frame, partly sunlit, blue ocean and white cloud, about a third of the width of the window. Running away from the camera in both directions is the ring, a long gently curved line of separate stations in a regular rhythm: a large rotating habitat, then about nine much smaller stations of different shapes (some with broad flat radiator wings turned edge-on to the sun), then another large habitat, and so on. The nearest are small separate shapes, too far off for their form to resolve, the farther ones points, crowding closer and closer together until they run into the curve of the earth's edge on both sides and pass behind it, like a necklace laid around the planet. Because the earth and the stations are bright, no stars are visible in the black sky. (5) One station ahead slowly grows from a point into a dark shape seen against the lit earth, its form never fully resolved, with a few small low steady lights around one opening. The camera drifts toward that opening and the film ends before the craft arrives. (6) People: nobody's face is ever shown. On the terrace, at most one person's hands resting on the stone wall in the foreground, out of focus. In the craft, at most a sleeve and a hand near the window. (7) Camera: everything is seen from where a person or a mounted camera could actually be: from the terrace, from a fixed camera on a mast at the end of the causeway, from inside the craft looking out of its window. No drone shots, no shot from outside the craft in space, no impossible camera, no passing through solid objects, no crash zoom, no whip pan, no time-lapse, no slow motion. Long unbroken takes, very few cuts, slow drift that never settles. (8) Light: the dawn, the sun, the earth, those small steady lights, and nothing else; nothing glows that would not glow. Strictly no text, lettering, numbers, signs, interfaces, holograms, readouts, lens flares or light streaks anywhere in frame. (9) Sound: wind on the terrace, the sea, birds starting, the late low roar of the launch, then inside the craft only its own quiet hum; no sound in space outside. Music almost absent: a few sparse low tones at most, never cut on a beat. Peaceable, patient, beautiful and quiet, never a trailer, never a montage.

**Shot list.**

1. The terrace, nautical twilight, about 25 seconds: the camera held by
   someone standing at the terrace wall, drifting slowly across the bay toward
   the south. The arc of the ring is low over the far hills and does not move:
   bright pearls about two moon-widths apart with fainter beads between them.
   Over the take the sky pales and the faint beads go out, leaving the pearls.
   Hands on the wall, out of focus, may be in the near corner.
2. A fixed camera on a mast at the end of the causeway, about 10 seconds,
   looking back along the rail: the javelin on its sled at the far end, small
   low steady lights along the track, the bay grey on both sides. The run: the craft grows
   down the rail toward the lens, lifts off its sled on its wings and passes
   up and out of frame; the empty sled slows on the track below.
3. The terrace, two takes and one cut. First, about 50 seconds: the point rising
   off the far shore, low over the water, leaning east, and the roar arriving near
   the end. Then, minutes later, about 20 seconds: the trail standing, its upper half
   white and gold while the bay is still dark.
4. Through the javelin's window, about 15 seconds: the horizon curving, the
   sky going black, sunlight crossing the frame. No faces.
5. A cut to high orbit, about 35 seconds, one slow take through a port of the
   craft that carried the passengers on: the earth large and partly lit, the
   ring running away to both sides and into the earth's edge. No stars.
6. About 25 seconds: one bead ahead grows into a dark unresolved shape against
   the earth, with small low steady lights at one opening. The drift toward the opening
   continues as the film ends.

**Narration.** None. A remake with a narrator would need a person the record
gives; the record gives nobody at Lúnasa. If Director adds a voice or captions,
that take fails.

**Negatives as objects.** The shared negative, plus: no clock, chronometer or
timepiece anywhere, no wristband, no two times; no voice, no narrator, no
caption, no title card; no name, place or year spoken or shown; no ramp, no
elevated or sloping track, no rail up a hillside, no launch tube, no rail
reaching into the sky, no craft leaving the rail pointing upward like a rocket; no space
elevator, tower, tether or cable to the ground; no ring drawn as a continuous
band, hoop, halo or wheel, and no rings like Saturn's; no ring moving across the
sky; no glowing violet or coloured light; no starfield behind the sunlit earth;
no shot of the craft from outside in space; no person's face; no uniform,
insignia or tab; no *layers*; no space shuttle, external tank, boosters, gantry or
painted name; no wheel-shaped station.

**Judging line.** The take fails if anyone speaks or a word is on screen; if a
clock or two times appear; if the ring is a solid band, has no rhythm of bright and faint points, moves across the sky,
reaches the ground, or sits close enough to touch the trail; if the rail is
not level and on the ground, if the craft leaves it nose-up like a rocket rather
than lifting off on its wings, if the craft is a vertical rocket on a pad, or if it reads as a Space Shuttle or a present-day aircraft;
if stars show behind the sunlit earth; if the camera is anywhere a person or a
mounted camera could not be; if Lúnasa's form is shown sharply in full; or if
anything glows that would not glow.

**Grounding, and the physics.** `intake-2026-10-30.md` (the ring's look and the
three rulings) and the paragraph *The ring, if a film shows it* above;
`src/lore/ascent-javelins.md` (*The Rail*: a level track two or three
kilometres long beside the landing runway, out over the water, leaving the
sled at a little under the speed of sound, then the aerodynamic climb and rocket
insertion, a long pale flattened
winged body, a job that ends at a parking orbit, so the high-orbit shots are
from a second craft); `src/journal/the-long-white-trail.md` (the departures this
brief removes); the no-towers ruling of 10 October 2026. The figures, worked
for an Earth-sized world from 52–54° N:

- **The ring from the terrace.** At geostationary height its arc peaks 28–30°
  above the south horizon, about 38,600 km away, so *a third of the way up*.
  Stations 50–130 km apart sit 5–12 arcminutes apart, above the eye's 1
  arcminute, so they read as beads, and they crowd into a thread toward the
  horizons. They are sunlit through the summer night (eclipses come only near
  the equinoxes), so they show before dawn.
- **The ring's rhythm** (Dermot's *"Yes, add it to D7"*, 30 October 2026, to the
  layout recorded in `intake-2026-10-30.md`). There is one major habitat per
  degree of the ring, 360 in all, each 1.5–2 km across and spinning for 1 g at
  about 1 rpm. Nine smaller stations of 100–300 m fill the 0.1° slots between
  each pair, a few short of 3,240 in all, 3,600 slots in total, a few left empty. The
  smaller stations are transfer hubs, compute complexes (radiator wings turned
  edge-on to the sun), depots and yards, and station-keeping posts. A degree of
  the ring is 736 km, about 1.1° of sky from the terrace, so roughly two
  moon-widths between pearls. At dawn, with the sun side-on, a 2 km habitat is
  about magnitude −1 and a 200 m station about +4. The faint beads drop below
  the brightening sky first, and that is the take's one event.
- **The trail at dawn.** Exhaust at 80–120 km stays in sunlight until the sun is
  about 10° below the horizon, so the high trail shines while the ground is in
  twilight. It is the real effect behind the trailer's title. A prograde launch
  leans east.
- **The roar.** Sound covers about 20 km in about a minute, so the brief says
  *about a minute*. No other number is given, so Director cannot reach for
  forty seconds.
- **The ring from inside it.** From a craft a little out of the ring's plane,
  the ring is a very thin ellipse seen almost edge-on: a line of beads running
  away both ways, near ones distinct and far ones crowding, meeting Earth's limb
  on each side. At 42,000 km Earth is about 17° across. Bright Earth and sunlit
  stations put the stars below the exposure. A launch from Ireland reaches an
  orbit inclined about 52°, and the plane change is made high up, so the
  approach comes from out of the plane. That is why the ring reads as a curve,
  not a straight line.
- **Lúnasa stays unresolved.** No design for it is on file, and a vessel or
  station gets a sheet in `starship-design.md` before it gets a picture. So the
  film ends before its shape is clear.

**Not on record, low-risk:** the west-coast bay, the green hills, birds, the
rail's lights and causeway mast, a rail site on this coast, the craft that carries passengers on from low orbit (the
record names no class, so the brief names none).

---

## A clip for *Four Seconds*, offered 3 November 2026, written before anything is generated

Dermot's request, verbatim: *"The scene where Lev catches Muffin."* That is
S02E10C01 *Four Seconds* (`src/seasons/s02/e10/s02e10c01.md`), scene 2, Lev's
viewpoint, on the Deck 7 walkway of Eden Space Habitat in late summer 2827 UCSD.
One clip, up to 30 seconds, run on Grok Imagine from his Chrome by the loop the
8 October section set; nothing has been generated at the time of writing.

**Why it earns a clip.** The chapter's title is a duration: the act takes
*about four seconds*, and a still cannot be four seconds long. And the
chapter's last motion, the walkway starting to move again *as if it had never
stopped*, is a motion a still cannot show at all, where `lev.jpg` could only
imply it with blurred adults behind the boy. Those two things are the clip.
Everything else in it is what the record gives, in the record's order: the
crowd stopped and bent towards one point; a boy of about eight coming through
under elbows to the front; a detective with a long plait standing very still;
a box at her feet; the box opened; a crouch, and a lift from behind with his
back to the lens; one word; the box shut; a cook's single laugh; the box picked
up; the walkway moving.

**What is never in frame.** Muffin is not depicted. `lev.jpg`'s entry rules it
(*Muffin is never depicted, and the shut carrier is the point*), and
`muffin.jpg`'s entry records why: two rounds with the entity as a defocused
shape in frame resolved into a recognisable cat all four times. So no animal
may be visible as Muffin in any frame, not blurred, not partly, not in
silhouette. This is solved by staging, not by a negative. Grok respects an
object negative (the 8 October lesson), but a positive mention of a creature
draws one, so the prompt below does not describe the creature at all, and
nothing in it says what is at the warm patch. The one mention of the thing
Lev lifts is *whatever is on the floor in front of him*, and the staging puts
his back and the carrier between it and the lens for the whole take.

**The mount, and why.** The camera is Barsik's own position in scene 3: a
small recording device resting on the rim of the bin at the end of the
walkway, about knee height, looking straight down the walkway's length. Three
reasons. It is in the record, so the footage is something the record itself
would hold (*Instrument footage is a legitimate viewpoint*). It is low, so a
stopped crowd standing either side of the walking line is a wall of legs and
backs with one narrow lane down the middle, and the floor at the warm patch
midway down is hidden behind bodies from a lens at that height, where a
bulkhead mount higher up would see over the crowd straight onto it. And it is
behind the boy: he comes to the walkway from behind the lens and goes away
down the lane, so the lens has his back from the first second to the last, his
face is never nearer than a half-profile at distance, and when he crouches at
the carrier his own body is what hides the floor in front of him. That keeps
him modest and ordinary without saying so. The tension with the house
signature is real: the preamble says *never locked off and never settling*,
and the 8 October lesson says Grok does not hold a fixed camera unless the
mount is named. The clip takes the mount, names it, and gives the drift to the
first anchor instead, the hum: the frame is alive only with the faint
vibration of a running deck, which is what a device set down on a bin would
pick up. The ark clip of 8 October drifted a little on a named mount and
passed, so a little drift here would pass too; a camera that leaves the bin,
walks down the lane or rises above the crowd fails.

**The register.** The shared preamble's *Enigmatic, haunting, beautiful,
quietly dramatic* is written for the landscapes and the ark. This is an
Undercover Pets chapter, and `lev.jpg` already sets its register: *lit warm and
ordinary, not haunted*. So the preamble's tone line is replaced in this prompt
by *warm, ordinary, a little funny and quietly dramatic, a habitat's
afternoon, not haunted*. *Quietly dramatic* stays, because a whole deck
holding still for a child is drama in the runbook's sense, a shape that
arrives somewhere; *haunting* goes, because the page's whole point is that the
room is pleasant. The rest of the preamble, diegetic light, matte surfaces,
grain, patience, no event arriving suddenly, is kept word for word.

**The century.** A habitat's walkway and not a present-day corridor (Dermot's
11 October note on `muffin.jpg`, *also looks anachronistic*) and not a boiler
room: smooth seamless pale composite wall and floor meeting in a rounded cove,
a matte resilient deck surface worn faintly smooth along the walking line, a
rounded galley doorway with warm light spilling from it, no fittings and no
signage, with the present-day building negated as objects (louvres, rivets,
screws, stainless steel, a restaurant corridor). The carrier is the century's
one from `lev.jpg`: a smooth rounded capsule of pale matte composite with no
handle and nothing to carry it by, one end a flush panel of fine woven
lattice, so he has to hug it. The lattice end faces away from the lens
throughout, which both keeps the opening out of sight and keeps the generator
from drawing anything behind the mesh. Lev is as `lev.jpg` carries him: plain
children's clothes of no recognisable period, no look to camera, heritage not
in the record and not in the prompt. Detective Achebe's page describes her
(a young Black woman, locs tied back, a plain blue-grey band-collared work
jacket); the chapter says *a detective with a long plait*. The prompt keeps her
to what the chapter gives, a figure in that jacket with a long dark plait down
her back, three-quarters turned away and small with distance, and nothing
about her face, so that nothing in the clip asserts more about her than the
chapter does.

**The rabbit.** Knopka is an ordinary brown rabbit and could be shown; this
clip does not show her. The record has her hop out and go *straight past
everyone's feet towards the galley, where the warm was*, which is a real
animal going to the warm patch, exactly the thing a viewer would read as
Muffin, and a generator asked for one small animal leaving a box and then a
boy lifting something from the floor would put the animal in his hands. So the
carrier's door faces away from the lens, the boy opens it on the far side, and
whatever leaves it leaves out of the lens's sight. The frame knows less than
the scene, which is the runbook's rule for the witness; Achebe going to get
her rabbit happens in the chapter after the clip ends. The shared negative
against *any small animal* therefore stands unqualified, and a rabbit in
frame fails the take like anything else would.

**Dialogue.** The child says one word, *No*, and the prompt says plainly that
it is the only word spoken and that there is no caption. Recommendation: run
take 1 with the word, because the word is the scene and the staging (his back
to the lens, eight metres off) leaves nothing to lip-sync. If the take
letters a caption, adds any other speech or gives the word to the wrong
figure, take 2 runs the fallback, which is part 2 with the sentence
*He says one word ... with no caption* replaced by *He says nothing; nobody
speaks*, and *apart from that one word* struck from the sound sentence. In the
fallback the word is carried by what the chapter puts around it, the
stillness, then the single laugh, then the walkway moving. Either version is
filed with its prompts as run.

**Three parts.** Revised the same day, before anything was generated, from one
30-second prompt to three parts of 10 seconds, each extended from the last
frame of the one before. The eight beats fall into three, and each part is one
large motion, which is what the 8 October clips showed Grok holds. Part 1 is
the walk: the stopped crowd and the boy going down the lane to the carrier.
Part 2 is the four seconds: he crouches, says the word and shuts the panel, and
the action itself is asked to take about four seconds of the ten, which is the
chapter's title and the reason for the clip. Part 3 is the release: the laugh,
the lifted carrier and the walkway moving.

Both joins fall where nothing moves and no creature can appear. The first is
the boy standing still with his back to the lens beside the carrier, before
anything has happened. The second is the boy crouched with both hands on the
shut carrier, so the box is shut on both sides of the seam and a small mismatch
in the crowd will not read. Part 2 is the part most likely to fail the first
judging line, because it is the part where he lifts something. Run it twice if
the first take shows a creature, and judge it before going on to part 3.

**Prompts to paste, each as one line.** Enter sends in that box, so each part
goes in as one paragraph. Part 1 carries the whole staging. Parts 2 and 3 are
extensions, and they repeat the mount, the staging and the negatives, since an
extension is not known to carry them over.

**Part 1, the walk (10 seconds).**

> Footage from a small fixed recording device resting on the rim of a low waste bin at the far end of a walkway aboard a large space habitat, about knee height, looking straight down the length of the walkway, never moved and never lifted for the whole take, the frame alive only with the faint continuous vibration of a deck that is running. Long unbroken take, one shot, no cuts. Diegetic light only: warm light spilling from a rounded galley doorway midway down the right-hand wall and soft even habitat daylight, nothing glowing that would not glow. Matte surfaces, real materials, wear along the walking line. Deep shadow with detail retained in it. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain, shallow depth of field, the near legs sharp and the far end soft. Warm, ordinary, a little funny and quietly dramatic, a habitat's afternoon, not haunted. 24 fps, 16:9 landscape, 10 seconds. The walkway is unmistakably a habitat's: wall and floor of smooth seamless pale composite meeting in a softly rounded cove, the floor a matte resilient deck surface worn faintly smooth along the walking line, no fittings and no signage. It is full of people at shift change in plain work clothes of quiet natural colours and not one of them is moving: they stand on both sides of the walking line leaving a narrow lane down the middle, backs and shoulders to the lens, every figure leaning a little towards one place on the floor midway down near the lit doorway, which the standing bodies hide completely from the lens for the whole take, so that the lens sees only legs, backs and the lane. At the far end of the lane, small with distance and softened, a young woman with a long dark plait down her back in a plain blue-grey band-collared work jacket stands very still, three-quarters turned away, and at her feet sits a small pet carrier of the century: a smooth rounded capsule of pale matte composite with no handle and nothing to carry it by, one end a flush panel of fine woven lattice, that end turned away from the lens. A boy of about eight in a plain soft jumper, plain trousers and scuffed shoes enters from behind the lens, passes close by it and goes away down the lane with his back to the camera, ducking under elbows, never turning to the camera, and comes out at the front and stops beside the capsule, standing still with his back to the lens. Nobody else moves. Ambient sound only: the low hum of a running deck, the boy's shoes on the deck surface, cloth; no music, no narration, no speech. No on-screen text, letters, numbers, signage, subtitles, captions or watermarks. No holograms, projected interfaces, glowing UI, screens or floating icons. No lens flares, no light streaks, no volumetric god rays. No camera drift down the walkway, no crash zoom, no whip pan, no rise above the crowd, no camera passing through anyone. No jump scares, no gore, no horror imagery, no menace. No cat, no dog, no kitten, no puppy, no lamb, no small animal of any kind, no fur, no ears, no tail, no face or eyes on the floor, at the doorway, in any hand, not blurred, not partly, not in silhouette. No plastic pet carrier, no wire door, no carry handle, no box shape, no airline crate, nothing visible through the lattice. No uniform, no badge, no weapon, no futuristic gadget. No louvred grille, no riveted steel, no exposed screws, no stainless-steel kitchen, no restaurant corridor, no boiler room, no present-day building. Not a music-video montage, not a trailer.

**Part 2, the four seconds (extend by 10 seconds).**

> Continue the same unbroken shot with no cut, from the same small fixed device on the rim of the bin at knee height, never moved, the same light, the same habitat walkway. The standing crowd stays perfectly still on both sides of the lane, backs to the lens, and the bodies still hide the floor near the lit doorway completely. The boy stands a moment beside the pale capsule with his back to the lens. Then, in one plain unhurried action of about four seconds, he crouches, reaches to the far side of the capsule, then leans forward low with his back squarely to the lens, so that his body and the capsule hide whatever is on the floor in front of him, and nothing but his back is seen. He says one word, No, in an ordinary clear child's voice, the only word spoken in the whole clip, with no caption. He closes the lattice panel on the far side of the capsule. Then he stays crouched and still with both hands on the shut capsule, and nothing else moves. Ambient sound only apart from that one word: the low hum of a running deck, cloth; no music, no narration, no other speech. No on-screen text, letters, numbers, subtitles or captions. No camera movement, no cut, no closer view, no rise above the crowd. No cat, no dog, no kitten, no puppy, no lamb, no small animal of any kind, no fur, no ears, no tail, no face or eyes on the floor, in any hand or in the boy's arms, not blurred, not partly, not in silhouette; his hands stay out of sight or empty. No wire door, no carry handle, nothing visible through the lattice. The boy never turns to the camera.

**Part 3, the walkway moves (extend by 10 seconds).**

> Continue the same unbroken shot with no cut, from the same small fixed device on the rim of the bin at knee height, never moved, the same light, the same habitat walkway. Nobody moves for a moment. Then one figure in a plain apron at the lit doorway laughs once, shoulders only. The boy stands and lifts the pale capsule, hugged in both arms against his chest as if it had some weight, the lattice end against him, and half turns his head towards the young woman with the long plait, in profile only, never to the lens. Then the whole walkway starts to move again as if it had never stopped: the standing figures turn, the lane closes, and legs walk past the lens on both sides, unhurried, towards and away, blurring the near frame, while the boy and the woman go off down the walkway among them. Ambient sound only: the low hum of a running deck, the one laugh, shoes on the deck surface, cloth; no music, no narration, no speech. No on-screen text, letters, numbers, subtitles or captions. No camera movement, no cut, no rise above the crowd, no camera passing through anyone. No cat, no dog, no kitten, no puppy, no lamb, no small animal of any kind, no fur, no ears, no tail, no face or eyes on the floor, at the doorway or in any hand, not blurred, not partly, not in silhouette, and nothing visible through the lattice. No wire door, no carry handle. Warm, ordinary, a little funny, not haunted; not a music-video montage, not a trailer.

**Negatives, as objects** (they travel inside the prompts above; listed here for
the judging): text, letters, numbers, signage, subtitles, captions,
watermarks; holograms, projected interfaces, glowing UI, screens, floating
icons; lens flares, light streaks, god rays; camera drift down the walkway,
crash zoom, whip pan, rise above the crowd, camera through anyone; jump scare,
gore, horror imagery, menace; cat, dog, kitten, puppy, lamb, small animal of
any kind, fur, ears, tail, face, eyes, on the floor, at the doorway, in any
hand or in the boy's arms; plastic pet carrier, wire door, carry handle, box
shape, airline crate, anything visible through the lattice; uniform, badge,
weapon, futuristic gadget; louvred grille, riveted steel, exposed screws,
stainless-steel kitchen, restaurant corridor, boiler room, present-day
building; music-video montage, trailer.

**Judging a take.** It fails, first of all, if any creature is visible at the
warm patch, on the floor, at the doorway, in any hand or in the boy's arms,
blurred, partial or in silhouette, with no exception for a rabbit. It fails if
the boy's face turns to the lens or is seen nearer than a half-profile at
distance; if the carrier shows a handle, a wire door, a box shape or anything
behind the lattice; if any lettering or caption appears; if any word but the
one is spoken, or the word comes from anyone but the boy; if the camera leaves
the bin, drifts down the lane or rises above the crowd; if the walkway reads as
a present-day building; if anything glows that would not glow; and if the
walkway does not move at the end, since that motion is half of why the clip
exists. Frames at 0, 5 and 9 s of each part, by the 8 October method; a
part that passes the frames is then watched once for the sound, and the joins
are watched for a jump in the crowd or the carrier.

**Open at the time of writing.** Whether an extension holds the mount and the
crowd from the last frame; whether it will carry a child's one word without
captioning it; and whether part 1 goes in whole at its length. If it does not,
the sentences to cut first are the century's object negatives (louvres, rivets,
screws), which the positive description of the composite walkway already
carries, and never the staging sentences or the creature negatives.

---

## Three setting clips offered 4 November 2026, written before anything is generated

Dermot's request, verbatim: *"short video clips for star-rangers site"*, then,
offered choices, *"Add clips to the site"* and *"Setting / ambience"*. The
answer follows the 8 October loop exactly: three worlds whose pages already
carry a filed still, each extended into one held shot of ten seconds in the
house motion signature, where a still can only imply the one motion the page
is about. Grok Imagine from his Chrome, 720p 16:9 (the 8 October ceiling),
two takes each, his pick, anything lettered or physically wrong dropped
rather than healed. Kept clips go into `src/video/` with a poster frame and an
entry here, embedded on their pages, by one pull request.

All three are places with no person in them, so they sit inside the camera
rule (a habitat, a world no camera has been to) and are Opus's to write under
the 16 October line in `CLAUDE.md` (a world, a station or a view from orbit).
Each prompt is derived from its page and from the filed still's own prompt in
`images.md`, so the moving version and the still read as one place. The 8
October lessons are applied in all three: the mount is named, the one thing
that moves is stated as the one thing that moves, and the negatives are given
as objects.

### E. The shear on Cirrane (Cirrane; `planets/cirrane.jpg`)

**Why it earns a clip.** The page's political geography is motion: bands each
moving at their own speed, and the shear between them, which no still can show
as moving. The still (re-made 19 October from inside the haze) is the frame;
the clip makes the billows roll and the haze fall. The Long Eye is left out
for the still's reason, since any oval storm draws the Jupiter reading. No
Ollune: their body is settled in `species-design.md`, and a generator asked
for none will draw none, where one asked for a creature draws a jellyfish.

> Footage from the camera of a Federation survey probe floating in the temperate shell of a gas giant, carried along by its own layer of air, level and looking out sideways along that layer, never down at the planet, the frame alive only with the faint slow sway of a buoyant instrument. Long unbroken take, one shot, no cuts. Diegetic light only: diffuse sunlight through haze; nothing glows that would not glow. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain, soft haze contrast. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. The air all round is a warm luminous haze of fine organic particles drifting slowly downward through the light in thin veils for the whole take. High above, a vast pale cloud deck closes off the sky like a ceiling; far below, a darker amber deck fades into depth. Across the middle distance two enormous horizontal bands of cloud slide past each other in opposite directions, and along the boundary between them a long row of wave-like billows curls over, rolls and tears into sideways streamers, continuously and slowly. That rolling shear and the falling haze are the only motion. Muted cream, ochre and tawny gold in the light, deep amber and brown in the depths. No ground, no horizon line, no surface, no planet disc, no oval storm, no red spot, no top-down or orbital view, no rings, no moon, no stars. No creatures, no jellyfish, no balloons, no figures, no vehicles, no probe in frame. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, projected interfaces or glowing UI. No lens flares, no light streaks, no volumetric god rays. No drone flythrough, no crash zoom, no whip pan. No jump scares, no lightning strike toward camera, no horror imagery. No time-lapse clouds. Not a music-video montage, not a trailer.

**Judging a take.** It fails if a planet disc, an oval storm or a horizon
appears; if anything solid or alive is in frame; if the bands do not move
relative to each other, or the clouds race as in a time-lapse; and if any
lettering appears.

### F. The tower that never stops working (Saltmere)

**Why it earns a clip.** The page's description is a motion: a mooring tower
*that never stops working*, a platform hull that rides the swell and drifts on
its tether, and a design whose whole point is that it gives. The filed stills
are Dermot's own frames of a present-day jetty, which the 2026 audit counts as
built-thing photographs that pass; this clip does not replace them, and shows
what they could not, a tower in open ocean with a city segment on its cable.
A habitat, so inside the camera rule. Day, in a running swell, because the
page's register is practical and the storm is the failure the design
prevents.

> Footage from a fixed weatherproof camera mounted high on the upper platform of a tall open-truss mooring tower standing in open ocean on a world with no land anywhere, looking down along the tower's long truss causeway to the edge of a large floating city platform beyond, the frame alive only with the faint vibration of a structure that is always working. Long unbroken take, one shot, no cuts. Diegetic light only: overcast daylight on the sea; nothing glows that would not glow. Matte surfaces, real materials, salt-stain, weathering and wear. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain. Enigmatic, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. Grey-green open water in a long heavy swell under a low grey sky, the sea running to the horizon on every side with no coast, island or rock anywhere. The tower's legs go straight down into the water and do not move. Thick mooring cables run from the tower's foot down into the sea at a slant and out to the platform. The platform is a broad low hull carrying plain weathered low buildings of pale composite, and it rides the swell slowly, rising and settling and easing a little sideways on its cables, while the cables slacken and draw taut again with it. The platform's slow riding and the cables' slow give are the only motion apart from the sea. No people, no figures, no boats, no ships, no aircraft, no birds. No land, no beach, no cliff, no skyscrapers, no glass towers, no domes, no futuristic city skyline, no oil rig flare, no wind turbines. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, projected interfaces, glowing UI or warning lights. No lens flares, no light streaks, no volumetric god rays. No drone flythrough, no crash zoom, no whip pan, no camera passing through solid objects. No storm, no lightning, no breaking wave over the platform, no disaster. Not a music-video montage, not a trailer.

**Judging a take.** It fails if the platform is rigid or the tower moves; if
land of any kind appears; if the platform reads as a present-day oil rig, a
cruise ship or a sci-fi skyline; if anything glows; if anyone is in frame; and
if any lettering appears.

### G. Driftjellies over the lumenspires (Prismere; `prismere-driftjellies.jpg`)

**Why it earns a clip.** The page calls Prismere *a genuinely aerial
ecosystem*, and driftjellies the animals that ride thermals off the lumenspire
groves in loose drifting colonies. Drifting is the thing a still cannot do.
Dusk, so the lumenspires' internal light (biological, so it may glow: the
house *nothing glows that would not glow* allows it) sits under the
driftjellies' backlit bladders, which joins the page's two most photographed
sights in one frame. Driftjellies are harmless and the page says so; the
umbral ray is not in this clip, since a predator closing in silence is the
one event the preamble refuses.

> Footage from a fixed survey camera on a low tripod at the edge of a grove on a low-gravity world whose living things are built of glass and crystal, looking up and across at a thick hazy dusk sky, the frame alive only with the faint stir of the haze. Long unbroken take, one shot, no cuts. Diegetic light only: the last golden light of a low sun through haze, and below it the soft amber inner glow of living crystal towers; nothing else glows. Matte surfaces, real glass and mineral textures, dust and fine fractures. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain, a long lens, shallow depth of field. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. Along the bottom of the frame a loose colony of tapering frosted-glass towers rises among dark crystalline trunks, each tower faintly amber from within, brightest at its base. Above them in the thick golden haze several translucent bell-shaped gas-bladder animals drift slowly upward and across on a rising thermal, each lit from behind at its rim, its thin veined skin showing the light through it, each trailing a long fine curtain of feeding tendrils that sways a little as it goes, the farthest pale in the haze. High in the sky the faint pale arc of a planetary ring. The animals' slow drift on the thermal is the only motion. No people, no figures, no vehicles, no other animals, no large flying shape, no wings, no bird. No jellyfish in water, no hot-air balloon, no paper lantern, no glowing tendrils, no neon, no sparkles, no magic particles, no fairy lights, no rainbow sheen. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, projected interfaces or glowing UI. No lens flares, no light streaks, no volumetric god rays. No drone flythrough, no crash zoom, no whip pan. No jump scares, no sudden movement toward camera, no horror imagery. Not a fantasy illustration, not a 3D render, not a music-video montage, not a trailer.

**Judging a take.** It fails if a winged shape or any creature but the
driftjellies appears; if the driftjellies read as sea jellyfish, balloons or
lanterns; if the tendrils or anything else glows neon or sparkles; if the
render goes painterly or CGI, the 12 October ruling's failure; and if any
lettering appears.

**Where each goes.** On its page after the opening paragraph, by the 8
October markup (`<video controls preload="none" poster=…>`), except Prismere,
where the clip sits in *Native Fauna* after the driftjelly paragraph and
replaces nothing.

**Run and judged, 4 November 2026.** Grok Imagine from Dermot's Chrome, 720p
(1080p is now offered in the menu but refused at submission), 10 s, 16:9,
frames read at 0, 5 and 9.6 s in the browser. Six generations, two per world.

- **E, take 1:** the shear rolls along its line, no disc, no horizon; by the
  last second the billows tear into fibres that read as combed wool rather
  than cloud. **Take 2** keeps them as cloud, true Kelvin–Helmholtz billows
  under a pale deck over an amber depth, but moves less, a slow roll rather
  than a tear. Both pass the judging lines; **take 2 recommended**, take 1
  the alternate.
- **F, take 1: failed.** A rigid truss pier ran from the tower straight onto
  the platform, so nothing rode the swell, the platform read as a derelict
  sea fort, and the shot was from the air rather than from the tower. The
  prompt was revised before take 2, and the revision is the one of record:
  the camera bolted to the tower's upper-deck rail, open water all the way to
  a platform two hundred metres off, *nothing solid joins the tower to the
  platform* with no pier, bridge, walkway or causeway named in the negative,
  the cables lifting out of the water and sagging back, and *maintained and
  in use, nothing derelict*. **Take 2 passes:** the tower's truss and rail
  in the right of frame, three cables across the water, and the platform
  swinging on them through the take with a small bow wave. Its hull reads a
  little like a barge, which the page allows (*built and inspected like
  one*).
- **G, take 1: failed.** Sea jellyfish, bells and frilled arms, over spires
  in an illustrated register: both the judging lines it was written to
  catch. Revised before take 2, and the revision is the one of record:
  *bell-shaped* struck (it is what draws the jellyfish), the bladders
  described as lopsided wrinkled sacs wider than tall with a sparse fringe of
  hair-fine threads, the long lens looking up into the sky as the filed
  still does, the lumenspires reduced to tips along the bottom edge, the
  still's *Photographed, not rendered* lines carried over, and *not
  jellyfish* spelled out as objects. **Take 2 passes:** the sacs drift up
  and across under the ring's arc, the spire tips stay put, grain and haze
  throughout.

Lettering: none in any take. Lesson for the next clips: a shape word draws
its commonest owner (*bell* draws a jellyfish, *causeway* draws a pier), so
describe the shape the page means and name the owner in the negative.

**Revised prompt F, as run for take 2:**

> Footage from a fixed weatherproof camera bolted to the rail of the upper deck of a tall open-truss mooring tower standing alone in open ocean on a world with no land anywhere, looking out across open water at a large floating city platform about two hundred metres away, the frame alive only with the faint vibration of a structure that is always working. Long unbroken take, one shot, no cuts. Diegetic light only: overcast daylight on the sea; nothing glows that would not glow. Matte surfaces, real materials, salt-stain and weathering, everything maintained and in use, nothing derelict. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain. Enigmatic, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. Grey-green open water in a long heavy swell under a low grey sky, the sea running to the horizon on every side with no coast, island or rock anywhere. Nothing solid joins the tower to the platform: there is open water all the way between them, and the only link is three thick mooring cables running from the tower's foot across the water to the platform's edge. The platform is a broad low floating hull carrying plain clean low buildings of pale composite, a working city segment, and it rides the swell for the whole take, rising and settling slowly and swinging a little sideways on its cables, while the cables lift out of the water and draw taut, then sag back into the sea. The platform's riding and the cables' slow give are the only motion apart from the sea; the tower does not move. No pier, no bridge, no walkway or causeway joining the tower to the platform. No people, no figures, no boats, no ships, no aircraft, no birds. No land, no beach, no cliff, no skyscrapers, no glass towers, no domes, no futuristic city skyline, no oil rig, no flare stack, no wind turbines, no ruins, no rust-eaten wreck. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, projected interfaces, glowing UI or warning lights. No lens flares, no light streaks, no volumetric god rays. No drone flythrough, no aerial view, no crash zoom, no whip pan. No storm, no lightning, no breaking wave over the platform, no disaster. Not a music-video montage, not a trailer.

**Revised prompt G, as run for take 2:**

> Documentary footage from a fixed survey camera with a long lens on a low tripod, looking up into a thick hazy golden dusk sky over a low-gravity world whose living things are built of glass and crystal, the frame alive only with the faint stir of the haze. Long unbroken take, one shot, no cuts. Diegetic light only: the low sun behind the haze; nothing glows except where stated. Photographed, not rendered: real glass and mineral textures, haze between the lens and everything far off, high-ISO grain heavy in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. The air is visibly thick with suspended particles. Drifting slowly upward and sideways across the sky on a rising thermal are several lopsided gas bladders of thin wrinkled veined membrane, each wider than it is tall, irregular and soft like a half-filled sac, backlit so its rim and veins show the light through it, each with a sparse fringe of hair-fine threads hanging straight down beneath it to catch dust; the nearest large and soft-focus, the farthest pale specks in the haze. Along the very bottom edge of the frame, small and dark, the tips of a few frosted-glass spires faintly amber from within. High in the sky the faint pale arc of a planetary ring. The animals' slow drift on the thermal is the only motion. Not jellyfish: no umbrella-shaped bells, no domes, no long frilled arms, no swimming pulse, no underwater look. No hot-air balloon, no paper lantern, no glowing tendrils, no neon, no sparkles, no magic particles, no fairy lights, no rainbow sheen. No people, no figures, no vehicles, no wings, no birds. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms or glowing UI. No lens flares, no light streaks, no god rays. No drone flythrough, no crash zoom, no whip pan. No jump scares, no horror imagery. Not a fantasy illustration, not concept art, not a digital painting, not a 3D render, not a music-video montage, not a trailer.

**Filing, 4 November 2026.** The container cannot reach the generator's file
host, so the takes came in as chat attachments, and were identified by their
frames, not their filenames, since the names given on download did not match
the worlds. Filed: **E take 2** as `cirrane.mp4` and **G take 2** as
`prismere.mp4`, each with a poster frame at 5 s, embedded on their pages
(Cirrane after the opening paragraph, Prismere in *Native Fauna* after the
driftjelly photograph). Also received and not filed: G take 1 and F take 1,
both failed above. **F take 2** arrived the same day and is filed as
`saltmere.mp4` with its poster frame at 5 s, after the page's opening
paragraph.

---

## Four more setting clips offered 4 November 2026, written before anything is generated

Dermot's *"Yes"* to a second set, then his pick of all four offered: Fliade,
Winterbourne, Sentinel and Verdance. Same loop as the first set: each a
moving version of the page's filed still, one held shot of ten seconds from
a named mount, the one motion stated, negatives as objects, two takes each,
his pick. The first set's lesson is applied throughout: a shape word draws its
commonest owner, so each prompt describes the shape the page means and names
the owner it must not become.

**One correction before anything was written.** The offer named Winterbourne's
stream running in its dry bed. That is withdrawn: the still's own entry in
`images.md` keeps the bed dry on purpose (*a winterbourne photographed running
is a stream; photographed dry it is the name*). What moves is the one thing no
camera could film there, the ascent javelin's trail.

**The camera rule, per world.** Fliade, Sentinel and Verdance are worlds no
camera has been to. Winterbourne's landscape is one a camera could film on
Earth, and the page argues that it looks so; its still was generated in the
11 October century batch, and the clip is held to the same line, the javelin
being the thing that makes it this world.

### H. Below the roof (Fliade; `planets/fliade.jpg`)

**Why it earns a clip.** The page's light *has no cycle to it*, and a still
cannot show a light that does not change while other things do. So the fungi
hold steady and the water moves. No Pandoids and no Anstolik: a people's body
is never drawn by a clip that was not asked for it, and the passage is empty
in the still too.

> Documentary footage from a fixed survey camera on a low tripod in an enormous natural cavern deep beneath the frozen surface of a cold world, looking down the passage as it recedes into dark, the frame alive only with the faint drift of humid haze. Long unbroken take, one shot, no cuts. The only light is the world's own: bioluminescent fungi coating the rock walls and the floor in soft amber and blue-green, a dim steady glow that never pulses, flickers or changes for the whole take. The growth is real fungal growth, irregular and uneven: thin bracket shelves stacked on wet stone, pale threads and mats across mineral silt, clusters of small caps on slender stalks, some of it brown and dead at the edges. In the foreground a shallow still pool in the silt reflects the glow; from the dark above, single drops of mineral water fall into it slowly and irregularly, each one spreading a ring across the reflection, and a thin trickle runs out of the pool across the floor. A faint haze drifts slowly through the light. The falling drops, their rings, the trickle and the haze are the only motion. Photographed, not rendered: a real camera in a real cave, high-ISO grain heavy in the shadows, a fast wide lens with shallow depth of field and slight softness toward the corners, the darks holding detail without going to black. Restrained, patient, unhurried, no event arriving suddenly. Enigmatic, haunting, beautiful, quietly dramatic. 24 fps, 16:9 landscape, 10 seconds. No people, no figures, no animals, no creatures, no bears, no eyes in the dark, no shapes moving. No opening to the sky, no equipment, no lamps, no torches, no crystals, no glowing mushrooms in neon colours, no fairy lights, no sparkles, no magic particles, no fantasy forest. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no light rays. No drone flythrough, no camera moving down the passage, no crash zoom, no whip pan. No jump scares, no horror imagery. Not a fantasy illustration, not a 3D render, not a video-game cave, not a music-video montage, not a trailer.

**Judging a take.** It fails if anything alive and moving appears; if the
glow pulses or flickers; if the fungi turn neon, crystalline or sculpted; if
the camera travels down the passage; and if any lettering appears.

### I. The javelin over the down (Winterbourne; `winterbourne.jpg`)

**Why it earns a clip.** The javelin is the still's one sign of the century,
and in a still it can be taken for a contrail, which `images.md` records as a
flaw passed. Moving, it climbs, which no aircraft does, and that is the whole
of the clip: everything on the ground holds still in late summer and the trail
grows upward.

> Documentary footage from a fixed camera on a low tripod at the foot of a long chalk escarpment in late summer, the frame alive only with the faint stir of dry grass in a light breeze. Long unbroken take, one shot, no cuts. Available light, hazy warm afternoon, a high thin sky. The steep scarp face rises on the left to a bare rounded down of pale dry turf; along its foot, small with distance, a line of small villages of flint and chalk-block houses with reed-thatched roofs spaced along one lane. In the foreground a dry stream bed of pale gravel with no water in it, grass growing in the bed, and a plank footbridge over nothing. High in the hazy sky above the down, a thin pale vapour trail is being drawn almost straight upward: its head climbs steeply and steadily away from the ground for the whole take, the trail lengthening behind it and beginning to soften and spread at its lower end. The climbing trail and the stirring grass are the only motion. Photographed, not rendered: real materials, high-ISO grain in the shadows, a real lens with slight softness toward the corners, a touch under-exposed, muted natural colour. Restrained, patient, documentary, nothing dramatic, slightly too empty. 24 fps, 16:9 landscape, 10 seconds. No water in the stream bed, no flowing stream, no puddles. No aeroplane, no jet, no horizontal contrail, no trail crossing the sky sideways, no spacecraft visible, no flame, no explosion, no rocket launch pad, no smoke column from the ground. No people, no vehicles, no livestock near the camera, no wires, no poles, no road markings. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no light streaks, no god rays. No drone flythrough, no aerial view, no crash zoom, no whip pan. No time-lapse clouds. Not a postcard, not a music-video montage, not a trailer.

**Judging a take.** It fails if the stream bed holds water; if the trail runs
sideways like an airliner's or the craft at its head is visible; if anything
on the ground moves beyond grass; and if any lettering appears.

### J. Walking up to the receiver (Sentinel; `sentinel.jpg`)

**Why it earns a clip.** Nothing on an airless world moves on its own, so a
fixed camera would film a still, and the pulse is not visible. The clip takes
the house motion signature's other anchor instead: a camera carried by
someone walking slowly toward the receiver in low gravity, a push that does
not arrive. The walker is the Survey Corps team that left the boot prints
already in the still. Nobody is in frame.

> Documentary footage from a camera carried at chest height by someone walking slowly across the surface of a small airless world toward a small survey receiver, a gentle low-gravity bounce in each step, the receiver growing a little larger but never reached by the end of the take. Long unbroken take, one shot, no cuts. Hard low sunlight from one side, long black shadows with no fill, every edge sharp because there is no air, a black sky with no stars showing in the daylight exposure. A bare plain of grey regolith and low worn crater rims runs to a near, sharply curved horizon. Low in the sky above the horizon, a small pale sickly-green disc of a neighbouring world, holding still. Ahead, alone on the plain, the receiver: a small sealed matte housing with honest seams on three short splayed legs, a shallow dish under it turned down toward the ground, still. Around it the shallow prints of boots and the round marks of a lander's pads in the dust. The slow approach is the only motion; nothing on the plain moves, and no dust rises or hangs in the air. Photographed, not rendered: hard vacuum light, high-ISO grain in the black sky, a moderately wide lens with slight softness toward the corners, muted natural colour. Still, ordinary, faintly attentive. 24 fps, 16:9 landscape, 10 seconds. No hands, feet, boots, suit or helmet in frame, no visor reflection, no person, no figure, no shadow of a person in front of the camera. No lights on the receiver, no blinking, no antenna mast, no beam, no glow, nothing coming out of the ground, no structure, no ruin. No Earth, no blue planet, no Moon, no stars. No on-screen text, letters, numbers, signage, insignia, flags, subtitles or watermarks. No holograms, no helmet display, no HUD. No lens flares. No drone flythrough, no orbit around the receiver, no crash zoom, no whip pan. No jump scares, no horror imagery. Not a science-fiction film set, not a music-video montage, not a trailer.

**Judging a take.** It fails if the camera reaches or circles the receiver;
if any part of a walker, a HUD or a light shows; if dust floats; if the green
disc becomes Earth or moves; and if any lettering appears.

### K. Where the four lands meet (Verdance; `planets/verdance.jpg`)

**Why it earns a clip.** The still's one sign of the century is the
flood-gate, and the page's Tidewrights maintain it as the Fenmarch Republic's
core civic duty: a gate is the thing that holds water, so the clip shows the
tide moving against it. The still is aerial; a camera may not fly, so the
clip is taken from the high terraces' edge, the one ground from which all four
biomes are in view, which is why the still could see them.

> Documentary footage from a fixed survey camera on a tripod at the very edge of a high dry upland terrace, looking down and out across a wide view where four utterly different landscapes meet within sight of one another: cold dark forest, open savanna, a broad wetland of fen channels, and the dry upland falling away beneath the camera, the transitions clearly visible, each with a small distinct settlement far off. Long unbroken take, one shot, no cuts. Clear midday light, full natural colour, a wide horizon, the frame alive only with the faint shimmer of heat over the upland. Down in the wetland, across the broad fen channel, the long low pale line of a plain seamless tidal flood-gate; the tide is running in against it, water sliding slowly along the channel and spilling in a thin continuous sheet through its low openings, the channel's surface glinting as it moves. Slow shadows of high small clouds drift across the forest. The moving water at the gate and the drifting cloud shadows are the only motion. Photographed, not rendered: real materials, high-ISO grain in the shadows, a real lens with slight softness toward the corners, a touch under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Extraordinary range held in one frame. 24 fps, 16:9 landscape, 10 seconds. No dam, no hydroelectric spillway, no concrete wall with a waterfall, no flood, no rushing torrent. No people, no figures, no animals in the foreground, no camera equipment in frame. No roads with markings, no power lines, no cars, no aircraft, no drone, no glass towers, no domes, no neon. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no god rays. No drone flythrough, no aerial descent, no crash zoom, no whip pan. No time-lapse clouds. Not a 3D render, not a video-game landscape, not a matte painting, not a music-video montage, not a trailer.

**Judging a take.** It fails if the gate reads as a dam or spillway with a
waterfall; if the camera flies or descends; if the four lands collapse into
one; if the clouds race; and if any lettering appears.

**Run and judged, 4 November 2026.** Grok Imagine from Dermot's Chrome, 720p,
10 s, 16:9, frames read at 0, 5 and 9.6 s in the browser. Eight generations,
two per world.

- **H, both takes pass.** Take 1: the fungi strong amber and blue-green down
  a long passage, drops ringing the pool, the glow steady; the passage a
  little too round, like a bore. Take 2: truer growth (brackets, threads, dead
  edges) and a drop splashing in the pool, the glow fainter. Take 2
  recommended for the growth, take 1 the alternate for the light.
- **I, take 1: failed.** The trail was drawn but did not climb, and the
  villages came out as one modern housing row. Revised before take 2, and the
  revision is the one of record: the sky empty at the start, a bright point
  rising from beyond the crest and drawing the trail as it climbs, three
  separate old hamlets with fields between them, and *no modern houses,
  housing estate, terraced rows or slate roofs*. **Take 2 passes:** the point
  rises from behind the down and the trail grows and spreads behind it. It is
  nearer and louder than the still's (a launch just over the crest, the
  plume's foot billowing), which the javelin page's *thrown*, near-vertical
  boost allows; the still keeps it far.
- **J, take 1 passes with a flaw:** a slow walk toward the receiver that
  never arrives, the green disc still. The receiver carries a short mast,
  which the negative named, and the disc is pale enough to read grey. **Take
  2 failed:** the walk reaches the receiver, which fills the frame by the end.
  Take 1 recommended, its mast a flaw passed as the 12 October batch passed
  Peran Slade's look.
- **K, take 1: failed.** A real-looking subarctic valley, one land not four,
  and the gate too small to show its water. Revised before take 2, and the
  revision is the one of record: the four lands given the page's own names
  and a colour each (dark-green canopy forest, reed-green tidal fen, golden
  temperate grassland, red-brown stony terraces under the camera) with sharp
  borders, and the gate *large enough to see clearly* in the middle distance.
  **Take 2 passes:** the four lands distinct, the gate a long low pale line
  across the fen with water passing it; the motion is small at that
  distance.

**Revised prompt I, as run for take 2:**

> Documentary footage from a fixed camera on a low tripod at the foot of a long chalk escarpment in late summer, the frame alive only with the faint stir of dry grass in a light breeze. Long unbroken take, one shot, no cuts. Available light, hazy warm afternoon, a high thin sky. The steep scarp face rises on the left to a bare rounded down of pale dry turf; along its foot, small with distance, three separate small old hamlets of flint and chalk-block cottages with reed-thatched roofs, each a cluster of a few cottages with open fields between them, along one lane. In the foreground a dry stream bed of pale gravel with no water in it, grass growing in the bed, and a plank footbridge over nothing. At the start of the take the sky is empty. Then, from far beyond the crest of the down, a tiny bright point rises into view and climbs steeply and steadily upward through the hazy sky, drawing a thin pale vapour trail behind it, so that the trail grows upward from the crest during the take and its lower end slowly softens and spreads. By the end the point is high and small and still climbing. The rising point with its growing trail, and the stirring grass, are the only motion. Photographed, not rendered: real materials, high-ISO grain in the shadows, a real lens with slight softness toward the corners, a touch under-exposed, muted natural colour. Restrained, patient, documentary, nothing dramatic, slightly too empty. 24 fps, 16:9 landscape, 10 seconds. No modern houses, no housing estate, no terraced rows, no slate roofs, no town. No water in the stream bed, no flowing stream, no puddles. No aeroplane, no jet, no horizontal contrail, no trail crossing the sky sideways, no flame, no explosion, no launch pad, no smoke column from the ground. No people, no vehicles, no livestock near the camera, no wires, no poles, no road markings. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no light streaks, no god rays. No drone flythrough, no aerial view, no crash zoom, no whip pan. No time-lapse clouds. Not a postcard, not a music-video montage, not a trailer.

**Revised prompt K, as run for take 2:**

> Documentary footage from a fixed survey camera on a tripod at the edge of a high stony terrace of red-brown rock, looking down and out across a wide view where four sharply different lands meet within sight of one another, each a different colour: on the left a dense dark-green multi-layered canopy forest; in the middle distance a broad reed-green tidal fen of winding channels and pools; on the right a wide golden temperate grassland running to the horizon; and in the foreground the red-brown stony terraces falling away beneath the camera. The borders between them are sharp and clearly visible. Long unbroken take, one shot, no cuts. Clear midday light, a wide horizon, the frame alive only with the faint shimmer of heat over the stone. In the middle distance, large enough to see clearly, a broad fen channel is crossed by the long low pale line of a plain seamless tidal flood-gate; the tide is running in against it, water sliding slowly along the channel and spilling in a thin continuous glinting sheet through its low openings. Slow shadows of small high clouds drift across the forest. The moving water at the gate and the drifting cloud shadows are the only motion. Photographed, not rendered: real materials, high-ISO grain in the shadows, a real lens with slight softness toward the corners, a touch under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. 24 fps, 16:9 landscape, 10 seconds. No dam, no hydroelectric spillway, no concrete wall with a waterfall, no flood, no rushing torrent. No people, no figures, no animals in the foreground, no camera equipment in frame. No roads with markings, no power lines, no cars, no aircraft, no drone, no glass towers, no domes, no neon. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no god rays. No drone flythrough, no aerial descent, no crash zoom, no whip pan. No time-lapse clouds. Not a 3D render, not a video-game landscape, not a matte painting, not a music-video montage, not a trailer.

Lettering: none in any take. Lessons: Grok will not grow a trail it is shown
already drawn, so a thing that must appear during the take has to be absent
at its start; and a world made of several lands needs each named by colour,
or it draws one.

**Filing, 4 November 2026.** Identified by frames. Filed with poster frames
and embedded after each page's opening paragraph: **H take 2** as
`fliade.mp4`, **I take 2** as `winterbourne.mp4`, **K take 2** as
`verdance.mp4`, and **J take 2** as `sentinel.mp4`, where take 1 had been
recommended. Take 2 is the file that arrived, and it is filed on a second
look at its frames: the walk ends a couple of metres short of the receiver
and does not reach it, so the line it was failed on was read too strictly,
and it carries neither take 1's mast nor its grey disc. Its flaw is that the
receiver grows much more than *a little*. Take 1 stays the alternate.
