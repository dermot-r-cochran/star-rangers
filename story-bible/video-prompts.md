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

### A brief binds canon; the rest is offered

**Ruled by Dermot, 7 November 2026** (*"Yes, agreed"*, then *"so long as it sticks to
canon and does not contradict prose already written, or other videos with canon status
then it is fine"*, and *"They should also obey physics and xenobiology except for the
licensed deviations in canon"*). A Director brief binds only what the record or a ruling
fixes: the facts, the look and the judging line. Framing, pacing, staging and invented
detail, such as the time a clock shows, are offered, not required. What Director invents
stands if it keeps to canon, contradicts neither written prose nor any of Dermot's films
given canon status, and obeys physics and xenobiology except where canon licenses a
deviation. Exact numbers on screen go only in the shots where the story turns on them,
and a negative lists only the refusals that have actually got through. A repair note
names the fault, the shot and the time, and ends *keep everything else as it is*; it adds
no requirement and prescribes no method. D1's repair of 7 November asked for six things
across two shots, one of them a framing change nobody had faulted, and Director spent an
hour writing its own masks and filters without finishing.

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
hears "spaceship". Indoors, light is recessed, from no visible fitting;
otherwise it is daylight, window light, stars and fire, and a lamp only where a brief
names one.

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
Mounts and judging lines were added on 6 November 2026, after the Benevolent Critic;
scene 10 is left as it was, for Dermot.

### 1. The forty seconds

> Two clean sealed atomic clocks well apart on a pale matte wall of Dock Seven,
> a quiet clean enclosed dock, soft light from no visible source, seen from a
> fixed dock camera high on the opposite wall. In each narrow sight port a thin
> column of atoms holds a faint violet light, and a brighter band climbs it; one
> band is behind the other and never catches up. Both clocks stay in frame for
> the whole take, the frame alive only with a faint structural vibration. Nobody
> present.

**Judging a take.** It fails if either clock leaves the frame; if hands or dials appear; if one band catches the other; and if any lettering appears.

The premise of the entire work in one shot, and it needs no text to say so.

### 2. Half-light causeway

> Footage from a camera carried at walking height down a long enclosed dock
> causeway at half-light, empty, viewed from one end. Wet deck, a low rail, a
> row of small recessed guide lights down one side dimmed for the night
> rotation, one near the far end burning a different colour to all the others.
> Slow drift forward, never reaching the end. Cold blue ambient, one warm
> source.

**Judging a take.** It fails if the camera reaches the end; if any light flickers or fails; if rust or grime appears; and if any lettering appears.

Straight out of the anthem's own lines — *every dock has a light it can't
explain*.

### 3. The muster

> Footage from a camera carried at head height inside a crowd of young people in
> dark service dress standing close together in a large hard-walled hall,
> singing. The camera stays **inside** the group, not in front of it, drifting
> slowly past shoulders and faces in profile. No stage, no conductor, no
> audience. Light from no visible fitting, faces half in shadow.

**Judging a take.** It fails if a stage or a conductor appears; if a face turns to the lens; and if any lettering appears on the dress.

Pairs with `music-prompts.md`'s Take B. The camera being inside the group rather
than facing it is the shot.

### 4. The empty berth

> Footage from a fixed camera on the walkway rail: a vacant docking berth seen
> through a clean observation window at night. Mooring clamps open, guide lights
> still cycling for a ship that is not there, a barrier line across the walkway.
> The frame alive only with a faint structural vibration. One figure out of
> focus in the foreground reflection, still.

**Judging a take.** It fails if a ship arrives; if the figure moves; if a screen appears; and if any lettering appears.

The Ballad's register — hint at the dark fact, never depict it.

### 5. Inner space bloom

> Total darkness. One small point of warm light appears off-centre and begins,
> very slowly, to acquire structure — filaments, a faint spiral, a
> shell — as if something is organising rather than exploding. Extremely slow
> outward drift. No debris, no shockwave, no sound-implied impact. Vast scale
> implied by how slowly it changes.

**Judging a take.** It fails if a shockwave or debris appears; if the form finishes into a settled shape, which would settle the song; and if any lettering appears.

The uploaded track's own title, and the one scene where the music can be
dramatic without anything being violent. **Note the canon caution:** if this is
ever attached to *Baby Universe*, that codex entry deliberately declines to
resolve whether the song's reading is true, and a picture that shows it happening
resolves it. Keep it abstract enough to remain a song's image rather than the
record's finding.

### 6. The Undersong

> Footage from a camera held at one wall of a dark chamber cut true into an
> asteroid, negligible gravity, the air still. A haze of fine grains hangs in
> it, gathers slowly into clean geometric sheets along standing waves, then
> reorganises into another pattern. Nothing visible causes it. Slow drift along
> the wall. Faint amber light from a single opening.

**Judging a take.** It fails if a creature appears; if anything visible causes the pattern; if the grains settle on a floor; and if any lettering appears.

Shows resonance without putting a Chthonari on screen and without inventing one.

### 7. The Garden Core

> Footage from a camera carried at walking height on a cultivated terrace inside
> a rotating habitat, humid air, working lamps among green growth, the curve of
> the floor rising away in the far distance. A single leaf falls far too slowly
> and lands without sound. Slow handheld drift.

**Judging a take.** It fails if the leaf falls at normal speed; if the floor reads flat; and if any lettering appears.

Variable gravity carried by one falling leaf instead of by exposition.

### 8. Prismere

> Footage from a fixed survey camera in a silicate-carbon biosphere: living
> tissue built of glass and crystal, bioluminescent throughout, the world
> producing its own light. Translucent forms, soft shifting colour washes, dense
> particulate haze. The frame looks between two crystal masses, alive only with
> the faint stir of the haze. No figures.

**Judging a take.** It fails if the render goes painterly or CGI; if anything turns neon or takes a rainbow sheen; if a figure appears; and if any lettering appears.

Deliberately reuses the shared preamble already recorded in `image-prompts.md`
for the Prismere cluster, so the moving version and the stills read as one place.

### 9. Both ends of a fold

> Two shots of the same short length, cut together with nothing between them,
> each from a fixed camera on its marker, the frame alive only with a faint
> vibration: a ship's running lights receding from a quiet transit marker, then
> the same class of lights approaching a different marker under a different sky.
> Long holds. Nothing dramatic happens in either.

**Judging a take.** It fails if star streaks appear; if any transit is shown; and if any lettering appears.

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

> Footage from a camera resting on a catwalk rail: a large ribbed rotor assembly
> in a maintenance space, seen side-on. Stacked discs narrowing to a waist at
> the centre, matte black, kept and in use, its faces burnished only where the
> seals run. It is turning slowly enough that only the surface texture shows it.
> Light in the space from no visible fitting, falling away into deep shadow
> behind. Camera drifts a few degrees; nothing else happens.

**Judging a take.** It fails if rust, a cage or a bulb appears; if the rotor changes shape; and if any lettering appears.

The hum with a body. Shape borrowed from the card art supplied with
*Rotational Hum*, which is the best of the supplied stills and the one that
needs no fixing.

### 12. Listening to the structure

> Footage from a camera held against the corridor wall, the frame alive only
> with the rod's faint tremble: an engineer in coveralls presses a long metal rod
> against a bulkhead and rests an ear on the other end, eyes closed, entirely
> still. A clean service corridor, light from no visible fitting. Held
> for eight seconds with no cut and no reaction. The far end of the rod trembles
> faintly against the wall.

**Judging a take.** It fails if the engineer reacts; if there is a cut; if the tool glows; and if any lettering appears.

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
> stringed instrument. Working clothes, not stage clothes. Light in the room
> from no visible fitting — no stage lighting, no coloured wash, no haze. A dozen
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
| 0:48–1:18 | **pulse enters** | **1. The forty seconds** — the two clocks |
| 1:18–1:36 | fuller | **6. The Undersong**, grains reorganising |
| 1:36–2:08 | sustained, two internal edges | **3. The muster**, one long take |
| 2:08–2:24 | thins out | **4. The empty berth**, static |
| 2:24–2:32 | bright break | cut to black, hold |
| 2:32–3:52 | fullest and longest passage | **5. Inner space bloom**, the whole arc |
| 3:52–4:02 | tail | **11** again, still turning, lights out |

The two hinges are the ones to protect: **the pulse at 0:48**, which should land
on the clocks so the mechanism and the beat arrive together, and **the break at
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

## Trailers: the bar, 17 November 2026

**Recorded at Dermot's *"Yes, record it"*, 17 November 2026,** after he asked whether any of the Journal's films were good enough for trailers, *"and what is the bar, otherwise they are in the journal for reference and context only"*. Until now the record had no written bar. These five tests come from what it already says. A film filed in the Journal as an impression is there for reference and context only until it passes all five, and he decides which film becomes a trailer.

1. **It keeps its promise.** A trailer is a promise: this is what you will find if you come in (`src/journal/the-long-white-trail.md`, *What it was asked for*). Everything it shows must be in the record, so a reader who comes looking finds it. *The Long White Trail* fails this test: a reader who came looking for Maeve would find nobody.
2. **None of its listed faults is on screen.** His ruling of 17 November is that a rough cut is *"fine as journal impressions, but would need more polish if attached to a chapter or episode"*. A trailer faces the public more than a chapter link does, so the bar is at least that high. Every fault listed in its Journal entry or version table is fixed or cut out.
3. **It speaks for one thread and carries the chosen title treatment.** The late note and the closing title were chosen on 6 November 2026 for trailers only (`story-bible/music-prompts.md`, *A theme and title for the trailers*). The *Fian Ilchruinne* title cuts in on the last late note, with the thread's name small beneath it, set by script and never generated.
4. **He has heard and passed its sound.** Claude can measure the sound's levels but cannot hear it, so a spoken line or a score is settled by his ear.
5. **It is cut as a trailer.** That means a shorter cut taken from the film, not the whole film.

**The three chained films, as of 17 November 2026:**

- ***Nothing Taken* (D2): the nearest.** It is faithful to S01E00C11. Its faults can be fixed in the edit and with a few new clips: the house changes from stone to panels after the first two clips, the dog turns its head, and the night-and-morning stretch is missing.
- ***The Character of the Light* (D5): possible after polish.** The window's island and the wrong robot need new stills and clips. The flash rhythm can be fixed in the edit, and it matters more here than anywhere, because the light's timing is what the chapter is about.
- ***Lúnasa* (D7): fails test 1, whatever the polish.** Its ring of stations exists only in his films, and whether its station is the record's Lúnasa is still open (parked for Fable). It stays reference only until both are settled.
  *(Note, 19 November 2026: both are now settled. He ruled one station on 15 November, and the ring entered the record on 19 November, `intake-2026-11-19.md`. The film's other faults stand, and its rethink is at the end of D7's entry.)*

None has the title treatment or a score yet, and none has had its sound passed.

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
*(Note, 15 November 2026, on Dermot's ruling of one station: on screen Lúnasa is the record's Survey Corps station keeping its place in the ring's line, not one of the ring's habitats.)*

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

**Version 2, read, 6 and 7 November 2026.** Run from the rewritten brief after the
critic's pass, in a new project, `b5e7775b`, which Director labels its own version 1.
Director went straight to production, with no setup questions. 1:31, 854×480, 8 scenes,
kept at `F:\CLAUDE\Director films\` as *Incident Report 001 — v2.mp4*, not filed. Kept as
it stands at Dermot's *"Stop, keep v2"*.

It holds: a clean, pale dock with no dials, lamps or grime; the two clocks well apart on
one long wall, seal left and hatch right; every readout read sharp and correct, the hatch
clock forty seconds ahead and both counting (03:10:03 and 03:10:43 at 0:31, 01:22:07 and
01:22:47 at 1:08); the figure between the doors, from behind, with no face. Shot 1 shows
11:16, Director's own choice, which no record contradicts. The narration on the project
page matches the brief and ends with the two called times; the audio is not heard here.

It fails in two shots. At 0:10 to 0:15 the dock darkens during the shot, and a violet line
shows along the foot of both doors at about 0:14, where only the sight ports may glow. At
0:51 to 1:06 the technician's hands wash out and read half-transparent. In both, the columns blaze
white and the readouts vanish. One repair round on those two shots ran for an hour on
7 November without publishing and was stopped; the rule above came out of it.

| Version | Length | Date | Changed from the last | Filed |
| --- | --- | --- | --- | --- |
| 1 | 1:31 | 6 Nov 2026 | First run; worn dials and caged lamps | No |
| 2 | 1:31 | 6 Nov 2026 | Rewritten brief: clean atomic clocks, digits correct; two hand shots faulty | No; kept |

### D2. Nothing Taken

**Status, 19 November 2026: under rethink.** Dermot, verbatim: *"Whereas 'Nothing Taken' and 'Lunasa - a film' need a rethink, please."* A new brief is at the end of this entry, under *Rethink, 19 November 2026*: one house taken from the chapter's own picture, two mounts, the leaf standing out from the wall with its hinges seen from inside, the night and the morning restored, and two of the chapter's sentences heard once each. Nothing has been generated from it, and rough cut 1 stays filed until he picks a replacement.

**Withdrawn 19 November 2026, at Dermot's word:** *"Likewise for Nothing Taken unless the replacement is much better"*. No replacement had been made, so rough cut 1 is off the site, with its poster, subtitles and watch page. The Journal entry *Nothing Taken* is unlisted and keeps its address, and the cut is filed in `negative-examples/README.md`. The rethink below stands as the way back: a replacement is filed only if it is much better.

**Status, 17 November 2026: filed as an impression.** Rough cut 1 (1:26), made as a chain of 10-second Imagine clips with the door shots started from Gemini stills, stands as `src/video/nothing-taken.mp4`, with an English subtitle track (`nothing-taken.en.vtt`, off by default), and is shown in `src/journal/nothing-taken.md`. Dermot's ruling, verbatim: *"fine as journal impressions, but would need more polish if attached to a chapter or episode"*. So it is not linked from the chapter until a polish round. Working files and the run log: `F:\CLAUDE\Director films\D2\`.

| Version | Length | Date | Changed from the last | Filed |
| --- | --- | --- | --- | --- |
| Rough cut 1 | 1:26 | 15 Nov 2026 | First cut of the chained segments | **17 Nov, current** |

**Status, 15 November 2026: five of nine segments run, none kept yet. Director mode has been removed from Grok, so the film is being made as a chain of nine 10-second Imagine clips.** The segments, their prompts and the version table are under *Made as a chain of Imagine clips* below. Both shots with a door in them failed twice, so at Dermot's *"Start from a still"* every door shot now starts from a still; those stills and the six prompts they replace are under *The door from stills* at the end of this entry. The brief below stands as written.

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
6. Fixed camera low inside the back door, looking out: her boots step over the bowl
   on the stone; then her back in the doorway, saying something the recorder does
   not pick up.
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

#### Made as a chain of Imagine clips, 15 November 2026, written before anything is generated

**Why.** Director mode, the multi-shot film maker this brief was written for, was removed from Grok on 15 November 2026. Dermot's ruling the same day, verbatim: *"You may still prompt each 10 second interval and use the last frame to extend into the next one and so on via Grok Imagine or Grok Agent without needing the full Grok director."* So *Nothing Taken* is made as nine clips of 10 seconds, 720p, 16:9, each either a new shot or an extension of the one before from its last frame, 90 seconds in all, inside the brief's 75 to 110. The brief above stands as written and still binds; this subsection only cuts it into pieces Imagine can take one at a time. The precedent for the method is the *Four Seconds* clip's three parts (3 November 2026, below).

**How the seven shots fall.**

| Segment | Brief's shot | New or extension | Start | Seconds | The one motion | Speech |
|---|---|---|---|---|---|---|
| 1 | 1 | New | Text-to-video | 10 | The three goats go to the far wall together | None |
| 2 | 2 | Extension of 1 | Last frame of 1 | 10 | The straw gets up, goes along the wall and over it, and lies down | None |
| 3 | 3 | New | Text-to-video | 10 | The back door swings outward and comes to rest flat against the outside wall | None |
| 4 | 3 | Extension of 3 | Last frame of 3 | 10 | He turns back into the house; the door holds | None |
| 5 | 4 | New | Text-to-video | 10 | The Ranger walks down the lane | None |
| 6 | 5 | New | Text-to-video | 10 | Her hand tries the door and it swings out | His: *You'll want the door, a Mhaoir.* |
| 7 | 5 | Extension of 6 | Last frame of 6 | 10 | Her hand writes on the form | Hers: *Is anything missing.* His: *No.* |
| 8 | 6 | New | Text-to-video | 10 | She steps over the bowl and stands in the doorway, her back to the lens | None heard |
| 9 | 7 | New | Text-to-video | 10 | The door comes in and he goes through | None |

Each join falls where nothing moves: the goats standing at the far wall (1 to 2), the door at rest with him on the threshold (3 to 4), the door at rest with her beside it (6 to 7). Everything else is a cut, which the runbook prefers to a dissolve.

**Start stills.** No filed still suits a segment as its start frame, so every new shot is text-to-video. `donncha-o-laoire.jpg` is the staging of segments 3 and 4, but it shows the door already at rest and his face in clear profile, and the brief fails a take whose face resolves. `eilis-ni-mhurchu.jpg` is the lane of segment 5, but she stands still in it with empty hands and her face to the light. Both frames are what the takes are judged against, for the house, the yard wall, the mast, his build and hair, and her build, braids and shell. One fallback is offered, not required: if two takes of segment 3 both swing the leaf into the room, as eight stills did, start from `donncha-o-laoire.jpg` and ask only for segment 4's motion, accepting that the swing itself is then not shown; that take still fails if his profile stays clear. Segment 9 shares segment 1's mount, so if its text-to-video take returns a different house, the first frame of segment 1's kept take may be tried as its start frame, with the morning light stated.

**Readings the chain makes, offered and not required** (the 7 November rule: a brief binds what the record fixes, and the rest is offered). None of these is canon and none changes the brief.

- The dog sits still in the yard in segments 1 and 2, and Donncha is not in frame there. The shot list has only the goats, the straw and the dog; the chapter's *the dog was at his heel* is carried by a dog that has not stirred.
- The prompts name fewer made objects than the instruction: the folded field drone and the yard robot are left out, since no shot needs them, both returned in present-day form in the stills, and anything named is one more thing to come back wrong. The brush stays in segments 1 and 9, with its composite handle, because leaving it standing is his custom.
- His coat is the filed frame's plain dark slate-grey (the 10 November replacement), not the instruction's *dark brown-green*, because the brief takes his look from the filed frame and a grey coat cannot be mistaken for the olive shell. The record gives him no coat at all.
- In segment 4 he turns back into the room. The instruction's *he does not force it and does not go through it; he goes round by the front* is shown as far as the doorway and no further.
- The door is shut again at the start of segment 6, since the shot list has it swing out under her hand. Who shut it is not shown.
- In segments 6 and 7 she is seen close from behind, shoulders to hands, and the case is out of frame; he is a voice near the camera and not in frame. In segment 7 the hand and the form stay beyond focus, so no writing instrument is seen, which is how the brief's *writes* and its *no pen* both stand.
- In segment 9 he comes out of the house through the door. The chapter's *it came in to him on its hinges* puts him inside it.
- Left out, because the shot list does not have them: her four questions at the gate, the night (the door open the wrong way, the bowl out, the dog across the front step) and the morning's bowl, dog and sweeping. They are in the instruction and the chapter; a chain makes only what a segment is written for.

**Prompts to paste, each as one line.** Enter sends in that box, so each segment goes in as one paragraph. Every prompt stands alone, extensions included, since Imagine sees one prompt at a time and an extension is not known to carry anything over but its start frame. The shared preamble and the shared negative travel inside each prompt, cut to what has mattered: footage recorded inside the world, one unbroken take from a named mount, daylight as the only light, the place kept, nothing glowing, no lettering. If a prompt will not go in at its length, cut the cottage negatives first (thatch, half door, small panes), which the stone-panel house already carries, and never the staging sentences, the still air or the door.

**Segment 1, the goats (new, text-to-video, 10 seconds, no speech).**

> Footage recorded inside the world by a fixed camera mounted on the wall of a stone byre, looking across a paved farmyard to a hill field and a ridge, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, on a dead-still late-autumn afternoon under flat grey overcast daylight, the only light. On the left, the gable end and back wall of a long low house of smooth sealed pale grey stone panels under a dark plain matte roof, three grey heating conduits running under the eave, one plain dark back door in the back wall, shut. A little loose straw lies on the paving by the gable, and a brush with a grey composite handle stands against the house wall. A seamless smooth pale yard wall, waist high, runs from the gable across the frame. A dog sits in the yard, still. Beyond the wall rises a bare field of dun grass, bounded by slim pale sensor posts with no wire between them and by a low pale wall on its far side, and on the ridge above stands one slim plain pale composite mast, unlit. Three goats graze apart in the field. The one motion: after a few seconds all three goats lift their heads and walk together, close and unhurried, to the far wall of the field, and stand there bunched, the way goats go for a herding dog, though nothing drives them and the dog has not stirred. Nothing else moves: no wind in the grass, the straw lies still, the dog stays where it sits, no person is in frame. Sound: open-air quiet and hooves on turf; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows; no rust, grime or clutter; no thatch, whitewashed cottage, half door, small-paned window, wire fence, lattice mast, pylon, tractor or vehicle; nobody in the field or the lane.

*Fails if* the dog moves or herds; the goats scatter or run; grass, straw or anything else stirs; a person, a vehicle or wire appears; the mast is a lattice, a pylon or lit; the house is a cottage; or any lettering shows.

**Segment 2, the straw (extension of segment 1 from its last frame, 10 seconds, no speech).**

> Continue the same unbroken shot with no cut, from the same fixed camera on the byre wall, never moved, in the same flat grey overcast afternoon light: the kept goat holding of the year 2826, the pale stone-panel house with grey conduits under its eave on the left, its dark back door shut, the seamless pale yard wall, the hill field with slim sensor posts and no wire, the slim pale mast on the ridge. The three goats stand bunched at the far wall of the field and do not move. The dog sits in the yard and does not move. The air is dead still. The one motion: the loose straw on the paving by the gable gets up off the ground by itself and turns slowly, a loose open skirt of straw about the height of a man, straws only, thin enough to see the wall through it; it goes unhurried along the yard wall, away from the gable, then over the wall, and lies down in a line along the wall and stays there, still, for the last seconds of the take. Nothing else in the frame moves at any moment: no wind in the grass, on the dog's coat or anywhere but the straw, and no dust rises. Nothing is in the straw, behind it or after it: no figure, shape, face, shadow or light. It is not a dust devil, funnel, tornado or column, only straw turning. Sound: dry straw whispering, then silence; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows; no person in frame; no wire fence, lattice mast, thatch or vehicle.

*Fails if* anything but the straw moves, the dog and the grass included; anything is seen in, behind or after the straw; the straw is drawn as a funnel or a column of dust, rises far above a man's height, or does not lie down and stay; or the camera follows it. If the straw is still in the air at the tenth second, extend once more from the last frame with this prompt and keep the take that ends with it lying still.

**Segment 3, the door (new, text-to-video, 10 seconds, no speech).**

> Footage recorded inside the world by a fixed camera set low in a paved farmyard, at about waist height, some paces back from the back wall of a house and a little to the left of its back door, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, on a dead-still late-autumn afternoon under flat grey overcast daylight, the only light. The back wall of a long low house fills the left two-thirds of the frame: smooth sealed pale grey stone panels, a dark plain matte roof, three grey heating conduits running under the eave. In the wall is one back door, shut at the start: a single smooth dark matte leaf with a fine close grain, no handle, lever or knob, only a narrow recessed finger pull, in a crisp recessed jamb, with a flat stone step below it. To the right, past the gable corner, a seamless pale yard wall and a bare hill. The one motion: the door is pushed from inside by a man's hand and swings outward into the yard, away from the house, smoothly and all the way round on its hinge side, until the leaf lies flat against the outside wall to the right of the doorway with its face to the camera, and there it stays, perfectly still. In the open doorway stands the man who pushed it, a lean man in his forties with short dark hair greying at the temples, bareheaded, in a plain dark slate-grey field coat, a plain earthenware bowl of milk in his hands; he stops on the threshold and does not step out, his head bowed and turned away from the lens toward the hinges, his face unseen in the shadow of the doorway, the room behind him dim. Nothing else moves: no wind in his hair or coat, nothing in the air. The door is undamaged, with no mark on it or on its frame. Sound: the quiet of still air and the soft travel of the door; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows, least of all at the door; the door never swings into the room and never stands at an angle to the wall; no second door; no thatch, half door, painted door, small-paned window, lever handle, cap or knitted jumper; no rust, grime or clutter.

*Fails if* the leaf swings into the room, stops at an angle to the wall, shows damage or is a half door; he steps out over the threshold; his face resolves; anything glows at the door; his hair or coat stirs; or a word is spoken.

**Segment 4, the door holds (extension of segment 3 from its last frame, 10 seconds, no speech).** The first segment to drop if the film runs long.

> Continue the same unbroken shot with no cut, from the same fixed camera set low in the paved yard a little to the left of the back door, never moved, in the same flat grey overcast afternoon light: the back wall of a long low house of smooth sealed pale grey stone panels in the year 2826, grey heating conduits under its eave, clean and well kept. The dark door stands open outward, its leaf laid flat against the outside wall to the right of the doorway, and it does not move at all at any moment of the take. A lean man in his forties with short dark hair greying at the temples, bareheaded, in a plain dark slate-grey field coat, stands on the threshold with a plain earthenware bowl of milk in his hands, his head bowed and turned away from the lens toward the hinges, his face unseen in shadow. He stays so for some seconds. The one motion: without touching the door and without stepping out over the threshold, he turns and goes back into the dim room, unhurried, carrying the bowl, his back to the lens, and is gone from the doorway. The doorway stands empty and the door stays flat against the wall, open and still, to the end. The air is dead still: no wind in his hair or coat, and nothing else moves. Sound: quiet, and his steps going in; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows; the door does not swing, close or tremble and shows no damage; nobody else appears; no thatch, half door, small-paned window or lever handle.

*Fails if* the door moves at all; he steps out through the doorway or touches the door; his face turns to the lens; anyone else appears; or a word is spoken.

**Segment 5, the lane (new, text-to-video, 10 seconds, no speech).**

> Footage recorded inside the world by a fixed camera mounted at the gable corner of a house, looking up a lane, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, at dusk on a dead-still late-autumn day, the last grey daylight the only light, deep shadow with detail kept in it. At the near edge of the frame, the corner of a long low house of smooth sealed pale grey stone panels with grey heating conduits under its eave, and a seamless smooth pale yard wall with a line of loose straw lying still along it. A narrow lane, a firm pale track of fine compacted gravel with clean edges, climbs away from the yard between banks of dun grass toward a bare ridge, where one slim plain pale composite mast stands unlit against the sky. The one motion: a single figure walks down the lane toward the holding at an even, unhurried pace, small in the frame at first and still some way off when the take ends: a compact, square-shouldered woman, bareheaded, her black braids bound at the nape, in a matte deep olive field shell with a high soft collar, cut like plain workwear, one small tab at the collar carrying a row of five short bars and nothing else on the shell, plain dark boots; in one hand a small plain case of dull grey composite, smooth, with no latches, clasps or metal fittings. Her face is too far off and too dim to make out, and stays so. Nothing else moves: no wind in the grass, in her braids or on her shell, and the straw lies still. Sound: boots on gravel in the quiet; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows, no lamp or torch, and the mast is not lit; no vehicle; no second Ranger and nobody else in the lane; no weapon, belt, holster, radio, backpack, hat or raised hood, and no coat over the shell; no latched or hard-shell case, clipboard, tablet or phone; no wire fence, lattice mast or pylon; no thatch.

*Fails if* her face resolves; she wears anything but the olive shell and the one tab, or a coat over it; the case is latched, hard-shell or a bag (drop the case from the prompt on the second take, as the still did); a vehicle, a second Ranger or anyone else is in the lane; the mast is lit or a lattice; anything carries a light; or the straw or the grass stirs.

**Segment 6, she tries the door (new, text-to-video, 10 seconds, one line spoken).** His, once, before she touches the door: *You'll want the door, a Mhaoir.*

> Footage recorded inside the world by a small hand-held camera, held at shoulder height by someone standing in a paved farmyard just behind and to one side of a woman at the back door of a house, 16:9, one unbroken take, no cut, no zoom, only the slight sway of a held camera. A small upland goat holding in the year 2826, clean and well kept, in the last grey light of a dead-still late-autumn day, the only light. The back wall of a long low house of smooth sealed pale grey stone panels, grey heating conduits under its eave. In it one back door, shut at the start: a single smooth dark matte leaf with a fine close grain, no handle, lever or knob, only a narrow recessed finger pull, in a crisp recessed jamb, a flat stone step below it, and a plain earthenware bowl of milk standing on the stone beside the step. The woman is seen close and from behind, from her shoulders to her hand, her face never in frame: compact, square-shouldered, bareheaded, her black braids bound at the nape, in a matte deep olive field shell with a high soft collar and nothing on its back or sleeves. At the start a man's low voice, off camera and near, says once, quietly: "You'll want the door, a Mhaoir." Then the one motion: she puts her free hand flat to the door and tries it, and it swings outward under her hand, away from the house, all the way round on its hinge side until the leaf lies flat against the outside wall beside the doorway, and stays there, still. She stands looking at the hinges, her face still unseen. Nothing else moves: no wind in her braids or on her shell, nothing in the air. The door is undamaged, with no mark on it or on its frame. Sound: the one spoken line, then the soft travel of the door and quiet; no other word, no music, no narration. No text, letters, numbers, captions or subtitles; nothing glows, least of all at the door; the door never swings into the room and never stands at an angle to the wall; no man in frame; no second Ranger; no weapon, belt, holster, radio, hat or raised hood, and no coat over the shell; no thatch, half door, small-paned window or lever handle.

*Fails if* any word is spoken but the one line, the line is captioned, or she speaks it; the leaf swings into the room, stops at an angle or shows damage; her face comes into frame; anything glows at the door; or the bowl is touched. Whether the vocative is said well enough is for Dermot's ear; if it is not, the fallback is the same prompt with the spoken sentence taken out and *no speech* in its place, and the line goes unsaid in the picture.

**Segment 7, she writes (extension of segment 6 from its last frame, 10 seconds, two lines spoken).** Hers, once: *Is anything missing.* His, once: *No.*

> Continue the same unbroken hand-held shot with no cut, the camera still held at shoulder height just behind and to one side of the woman at the back door, in the same last grey light of a dead-still late-autumn day: the back wall of a long low house of smooth sealed pale grey stone panels in the year 2826, clean and well kept. The dark door stands open outward, its leaf laid flat against the outside wall beside the doorway, and it does not move. A plain earthenware bowl of milk stands on the stone beside the step. The woman is seen close and from behind, from her shoulders to her hands, her face never in frame: compact, square-shouldered, bareheaded, her black braids bound at the nape, in a matte deep olive field shell with a high soft collar. The one motion: she holds a thin pale rigid sheet, a form, matte and unlit, low in one hand and beyond the plane of focus, and her other hand moves across it in short strokes, writing; the hand and the sheet stay soft, so that no lettering and no writing instrument can be made out. While she writes she says once, level and quiet, without turning her head: "Is anything missing." A man's low voice, off camera and near, answers once: "No." She writes again. No other word is spoken. Nothing else moves: no wind in her braids or on her shell, and the door stays where it lies. Sound: the two spoken lines and the quiet around them; no music, no narration. No text, letters, numbers, captions or subtitles; the sheet does not glow and lights nothing; no legible form; no tablet, phone, screen, clipboard or pen; no man in frame; no second Ranger; no belt, holster or radio, and no coat over the shell.

*Fails if* any word is spoken beyond the two lines, either is captioned, or the voices are swapped; the form is legible, glows, or is a tablet or a clipboard; a pen resolves; her face comes into frame; or the door moves.

**Segment 8, over the bowl (new, text-to-video, 10 seconds, no speech heard).** The words she says at the door are not picked up, so the prompt asks for none.

> Footage recorded inside the world by a fixed camera set low on the floor just inside the back door of a house, looking out through the open doorway into a paved yard, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, at dusk on a dead-still late-autumn day; the last grey daylight coming in through the doorway is the only light, and the room is dim, with a smooth pale floor and deep shadow with detail kept in it. The doorway is an empty opening: the door stands open outward, its leaf laid flat against the outside wall and out of the opening, and no part of it is inside the room. Just outside the threshold is a flat stone step, and on the stone stands a plain earthenware bowl of milk. Beyond it, the paved yard and a seamless smooth pale yard wall in the dusk. The one motion: a woman walks from beside the camera out through the doorway, seen low and from behind, her plain dark boots first; she steps over the bowl on the stone without pausing and without looking down, and stops just beyond it, standing in the doorway's light with her back to the lens: compact, square-shouldered, bareheaded, her black braids bound at the nape, in a matte deep olive field shell with a high soft collar and nothing on its back, a small plain case of dull grey composite with no latches or clasps in one hand. She stands a moment, her head a little bowed, and does not turn. Her face is never seen and no word is heard. Nothing else moves: no wind in her braids or on her shell, and the milk in the bowl is still. Sound: boots on the floor and on stone, then the quiet of dusk; no speech, no whisper, no music, no narration. No text, letters, numbers or captions; nothing glows at the door, in the room or in the yard, and no lamp is lit; no door leaf inside the room; the bowl is not touched, kicked or spilled; no man in frame and no second Ranger; no weapon, belt, holster, radio, hat or raised hood, and no coat over the shell; no latched or hard-shell case.

*Fails if* a word or a whisper is audible; she looks down at the bowl, touches it or spills it; she turns or her face is seen; a door leaf stands inside the room; a lamp or anything else glows; or the case is latched or hard-shell (drop it from the prompt on the second take).

**Segment 9, the morning (new, text-to-video, 10 seconds, no speech).**

> Footage recorded inside the world by a fixed camera mounted on the wall of a stone byre, looking across a paved farmyard to a hill field and a ridge, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, early on a clear, dead-still late-autumn morning, low sun and long shadows across the paving, daylight the only light. On the left, the gable end and back wall of a long low house of smooth sealed pale grey stone panels under a dark plain matte roof, three grey heating conduits running under the eave, and one plain dark back door in the back wall, a single smooth matte leaf, shut at the start. A brush with a grey composite handle stands against the house wall. A seamless smooth pale yard wall, waist high, runs from the gable across the frame; beyond it a bare field of dun grass bounded by slim pale sensor posts with no wire between them, and on the ridge above one slim plain pale composite mast, unlit. The one motion: the back door opens inward, the ordinary way, its leaf swinging away into the house and out of sight, and a lean man in his forties with short dark hair greying at the temples, bareheaded, in a plain dark slate-grey field coat, comes out through the doorway and walks on across the yard at an even pace, without stopping in the doorway and without looking back, his face turned away from the lens or lost in the shadow the low sun throws. Nothing else moves: no wind in the grass, in his hair or on his coat. Sound: his steps on the paving in the morning quiet; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows; no lens flare or light streaks from the low sun; the door does not swing outward and no leaf lies against the outside wall; no rust, grime or clutter; no thatch, whitewashed cottage, half door, small-paned window, wire fence, lattice mast, pylon, tractor or vehicle; nobody else in the yard, the field or the lane.

*Fails if* the door swings outward or a leaf lies against the outside wall; he stops in the doorway; his face resolves; the light is overcast or dusk; a flare or streak crosses the frame; or the house is not plainly the house of segments 1 and 2.

**Judging the film.** Each take is read from frames at 0, 5 and 9 seconds against its own line above, by the 8 October method, then watched once for the sound, and each join is watched for a jump. The assembled chain is then held to the brief's own judging line, unchanged: *The film fails if anything but the straw moves in the still air; if anything is seen in, behind or after the straw; if the door swings into the room, stands at an angle to the wall or shows damage; if a face resolves; if the Ranger carries anything but a case, or a latched or hard-shell case, or wears anything but the olive shell and one barred tab; if a vehicle, a second Ranger or a stranger appears in the lane; or if a line is spoken that the brief does not give.* No child is in any segment, and none is to appear (`CLAUDE.md`, *A child is pictured grown*). Two takes a segment at most; a segment that fails twice on one cause is re-staged here before a third is run. Generation is a desktop step on Opus; the kept takes, the alternates and the prompts as run are recorded in the table.

**Open at the time of writing.** Whether an extension holds the mount, the house and the still air from the last frame. Whether Imagine speaks a supplied line without captioning it, and what it makes of the vocative. Whether six separate text-to-video shots return one holding and one pair of figures, or six; if they drift, the house of segment 1 and the figures of segments 3 and 5 set the look and the others are re-run against them.

**Versions.**

| Segment | Take | Date | Verdict | Used |
|---|---|---|---|---|
| 1 | 1 | 15 November 2026 | Fails: three goats become six or seven, entering from the left, and they run. The house, yard, brush, straw, sensor posts and mast all hold | No |
| 1 | 2 | 15 November 2026 | Holds the judging line: three goats walk together, the dog never stirs, no wire, no lettering. Flaws: the goats come to the near yard wall, not the far wall of the field; the top of the gable is rough old stone above the panels | Base of segment 2; offered to stand |
| 2 | 1 | 15 November 2026 | Nearly holds: the straw lifts by the gable, travels along the wall top and lies there, nothing in it. Faults: the dog turns its head to it at about 12.5 s of the joined clip; the straw is a low wisp, not a man's height | Best of two; offered to stand |
| 2 | 2 | 15 November 2026 | Fails: the straw is a translucent net or veil, not straws; the dog turns again | No |
| 3 | 1 | 15 November 2026 | Fails: two doors; the leaf falls off and lies on the ground; a second man; faces | No |
| 3 | 2 | 15 November 2026 | Fails: the door swings back and forth and ends at a right angle, not flat against the wall; his face is plain; a second dark panel beside the doorway | No |
| 5 | 1 | 15 November 2026 | Fails: she walks up to the lens and her face resolves from about 7 s; the padded jacket reads as a coat | No |
| 5 | 2 | 15 November 2026 | Fails the same way at 8 to 10 s. The first 6 s hold (small dim figure, barred tab, plain case) | 0 to 6 s, offered |
| 9 | 1 | 15 November 2026 | Fails: he walks into the house first, then stops in the doorway; the door reads as a sliding panel and never swings in; his face shows small in profile crossing the yard. Morning light, low sun and the clean panel house are right | No |
| 9 | 2 | 15 November 2026 | Fails: a second man stands in the field the whole take; he is bald in a long overcoat, not short dark greying hair; his face shows in profile. The door does open inward, and the light and house are right | No |

All ten takes were made on 15 November 2026 from the prompts above, text-to-video or by extension, at 720p, 10 seconds, 16:9, and were read from frames; the audio was not heard. The takes and their frame sheets are kept at `F:\CLAUDE\Director films\D2\takes\`, outside the repository, with the run log beside them. Segments 4, 6, 7 and 8 were not run.

Segment 2's prompt was changed in one clause before it ran: *The three goats stand bunched at the far wall of the field* became *stand bunched together in the field where they are*, to match the last frame of segment 1 take 2, where the goats had come to the near yard wall. The prompt above is left as written.

#### The door from stills, 15 November 2026, written before anything is generated

**Why.** Five of the nine segments were run on 15 November 2026, two takes each, and both shots with a door in them failed both of their takes (the table above). Dermot's decision the same day, verbatim: *"Start from a still"*. That is the chain's own fallback for segment 3, widened to every shot that has the door in it: a still is made first in which the door already lies flat open against the outside wall, the still is judged, and Imagine animates it image-to-video and is asked only for a small motion that leaves the door alone. The brief above and the chain subsection both stand as written. This subsection replaces the prompts of segments 3, 4, 6, 7, 8 and 9 and nothing else; where it and the chain subsection differ on those six, this one is the one to run.

**What the run found, in brief.** Read from frames; the audio was not heard, so nothing is said here about sound.

- **Segments 1 and 2 nearly hold.** Segment 1 take 2 holds its judging line: three goats walk together, the dog never stirs, no wire, no lettering. Its two flaws are that the goats come to the near yard wall, not the far wall of the field, and that the top of the gable is rough old stone above the panels. Segment 2 take 1 is the better of its two: the straw lifts by the gable, travels along the wall top and lies there with nothing in it, but the dog turns its head to it at about 12.5 seconds of the joined clip, and the straw is a low wisp, not a man's height. The house these two takes share is the house of the film now: pale stone panels in even courses, a dark slate-like roof, grey conduits under the eave, a plain dark door, grey stone paving and a seamless pale yard wall.
- **Segment 5 holds for six seconds.** In both takes she walks up to the lens and her face resolves, from about 7 seconds in take 1 and at 8 to 10 seconds in take 2. The first 6 seconds of take 2 hold: a small dim figure, the barred tab, the plain case.
- **Segment 3 failed twice on the door.** Take 1 drew two doors, a leaf that fell off and lay on the ground, a second man, and faces. Take 2's door swung back and forth and ended at a right angle to the wall; his face was plain; a second dark panel stood on the wall beside the doorway. Two takes failed on one cause, the outward swing to flat, so by the chain's own rule the shot is re-staged and no third take of that prompt is run. Segment 6 asked for the same swing and is re-staged with it, unrun.
- **Segment 9 failed twice, on the door and on the man.** In take 1 he walked into the house first and then stopped in the doorway, the door read as a sliding panel and never swung in, and his face showed small in profile as he crossed the yard. In take 2 a second man stood in the field for the whole take, he was bald in a long overcoat, and his face showed in profile; the door did open inward. The morning light, the low sun and the clean panel house were right in both.

**What the run teaches, applied below.** Five lessons from the ten takes, each written into the prompts where it binds.

- **A door holds only as a held state.** Imagine could not swing a leaf out to lie flat in two takes, and swung one inward once in two. So no prompt below asks a door to move. Every door is drawn where it lies by a still, and every prompt says it does not move.
- **A walker who crosses the frame shows his face in profile.** *Face turned away* did not survive a walk across the yard in either take of segment 9. So everyone who walks in these prompts walks away from the lens, with their back to it, and anyone who turns is told which way: the way they already face, never toward the lens.
- **A walker reaches the lens inside ten seconds.** *Still some way off when the take ends* did not hold in segment 5. Nobody below walks toward the lens. Segment 5 is the one shot that must, since she comes down the lane, so it is ended by the cut and not by the prompt.
- **Counts drift.** Three goats became six or seven in one take, and a man nobody asked for appeared in two. So each prompt names how many people it has and says *no other person anywhere in frame*, and no prompt below has an animal in it.
- **An animal in frame watches the event.** The dog turned its head to the straw in both takes of segment 2, though the prompt said it did not move. That is why no animal is in any still or segment here; for segment 2 itself the glance is accepted or not at the cut, below.

**What the film no longer shows.** The outward swing itself. In segments 3 and 4 the door is already open the wrong way when the shot begins, and in segments 6 and 7 it is already open when she comes to it. The reason is the tool and not the story: Imagine could not draw a leaf swinging out through a half turn and coming to rest flat, in two takes, and the eight stills of 31 October could not draw the leaf outside the room from inside it. The wrongness is carried the way the filed still carries it, by where he looks, by his not going through, and by her hand on a door that lies where no door of that house should lie. The brief's judging line is unchanged and is easier to meet: *if the door swings into the room, stands at an angle to the wall or shows damage* now fails a still before it can fail a clip. The inward swing of the morning is not shown either, for the same reason: it came out once in two takes, with the wrong man. In segment 9 the door already stands open into the room, where a door of that house belongs, seen from the mount that showed the empty doorway the evening before, and he goes through it without stopping.

**The stills.** Four start frames, made on Gemini (`gemini-3.1-flash-image`, 16:9, 2K) by `node scripts/image-edit.js`, which takes a plain-text prompt file and any number of reference images after it, writes `v1.jpg` onward and a `run.json` to the folder named, and files nothing. `scripts/image-prompts.js` is not the tool: it reads only entries in `images.md` under the portrait, lore and codex sections, and each of those is a picture bound for a page under `src/images/`. These four are working frames for a film. They are not filed on the site, they take no `images.md` entry, and they are kept beside the takes in `F:\CLAUDE\Director films\D2\stills\`, outside the repository. The run is registered in `image-prompts.md` when it is made, as every run of the pipeline is. If one of them is ever wanted on a page it goes through `images.md` and to Dermot like any new depiction of a person or a place.

The prompt text below is the record. For the tool, each blockquote is saved as plain text, one file a still, under the still's key; the copies made on 15 November 2026 are `F:\CLAUDE\Director films\D2\stills\d2-door-a.txt`, `d2-door-b.txt`, `d2-door-c.txt` and `d2-door-d.txt`. If a prompt is changed here, its text file is saved again from here before the next round.

References. Still A takes the filed `src/images/characters/donncha-o-laoire.jpg` for its staging and `F:\CLAUDE\Director films\D2\takes\seg1-t2-house-ref.jpg` for the house. The second is the first frame of segment 1 take 2 with its upper part cut away, so that it shows the panel wall, the conduits, the door, the paving and the yard wall and does not show the rough gable or the roof. Still B takes the kept take of still A and the filed `src/images/characters/eilis-ni-mhurchu.jpg`. Still C takes the kept take of still B, the same filed frame of her, and the kept take of still A. Still D takes the kept take of still C for the mount and the room, the filed `donncha-o-laoire.jpg` for the man, and the kept take of still A for his coat seen from behind. So the four are made in order, A, B, C, D, and each later one is held to the ones before.

No child is in any still or segment, and none is to appear (`CLAUDE.md`, *A child is pictured grown*). Nothing in any still is lettered, so nothing needs `set-readouts.py`.

**Still A, `d2-door-a`: he stands at the open door (overcast afternoon; start frame of segments 3 and 4).**

> A single frame of documentary footage recorded inside the world by a fixed 29th-century camera, a photograph, 16:9 landscape orientation, available light only, deep focus. Two reference images are attached. Take the staging from the first: the low camera in the yard a little to the left of a back door, a man on the threshold with a bowl, and a dark door leaf laid back flat against the outside wall to the right of the doorway. Take the house and the light from the second: walls of smooth pale grey stone panels laid in even courses, grey conduits under the eave, a plain dark door leaf, grey stone paving, a seamless pale yard wall, flat grey overcast. Where the two differ, the second governs the house, the ground and the light, and the first governs the door's position and the man. The scene: a small upland goat holding in the year 2826, clean and well kept, on a dead-still late-autumn afternoon under flat grey overcast daylight. The camera is low in the paved yard at about waist height, some paces back from the back wall of a long low house and a little to the left of its back door, so that the back wall fills the left two-thirds of the frame: smooth sealed pale grey stone panels from the paving to the eave, the thin clean edge of a dark plain matte roof, three grey heating conduits running under the eave. In the wall is one doorway, open, with a crisp recessed jamb and a flat stone step below it. Its door is a single smooth dark matte leaf with a fine close grain, with no handle, lever or knob, only a narrow recessed finger pull, and it stands wide open outward, swung right round until it lies flat against the outside wall immediately to the right of the doorway, its hinged edge at the jamb and its whole face to the camera, at rest, with no mark on it or on its frame. It is the only door and the only dark panel on the wall. On the threshold, inside the line of the doorway and not stepping out, stands a lean man in his forties with short dark hair greying at the temples, bareheaded, in a plain dark slate-grey field coat, a plain earthenware bowl of milk held in both hands. He is turned three-quarters away from the camera toward the right-hand jamb, where the hinges are, his head bowed toward them, so that the camera sees the back and side of his head, an ear and the line of his jaw at most, and no eye, nose or mouth; the room behind him is dim and plain. To the right, past the corner of the house, a seamless smooth pale yard wall, waist high, and a bare dun hill under the grey sky. Nothing is in motion and the air is still: no wind in his hair or coat. No text, letters, numbers or captions anywhere; nothing glows, least of all at the door, and no lamp is lit inside; no second door, no shutter and no other dark panel beside the doorway; he is the only person, and no other person is anywhere in frame, in the room, the yard or on the hill; no animal anywhere in frame; no window in this part of the wall; no rough stone, rubble or old masonry anywhere on the house; no thatch, half door, painted door, small-paned window, lever handle, cap or knitted jumper; no tools, drone, robot or vehicle; no rust, grime or clutter.

*Judging line.* The image critic runs its ladder on every take at full size and as a thumbnail, century first. The still fails if the leaf stands at any angle to the wall, is inside the room, is off its hinges or shows damage; if a second door, a shutter or a second dark panel is on the wall; if an eye, a nose or a mouth of his can be made out; if he stands outside the doorway; if the leaf has a lever or a knob; if the house is not plainly the house of segments 1 and 2 (rough stone, cast concrete, a cottage); if anything glows or is lettered; or if a second person or an animal is in the yard. Among takes that pass, keep the one whose leaf lies flattest and whose head is turned furthest, since those are the two things a clip made from it must hold. If two rounds fail on the leaf, the fallback is one edit of the filed `donncha-o-laoire.jpg` by the same tool, asking only that his head be turned further from the lens; the house is then the filed frame's and not segment 1's, which is named as a flaw if that take is used.

**Still B, `d2-door-b`: she has her hand on the open door (last light; start frame of segments 6 and 7).**

> A single frame of documentary footage recorded inside the world by a small hand-held 29th-century camera, a photograph, 16:9 landscape orientation, available light only. Two reference images are attached. The first shows the place: the same back wall of pale grey stone panels, the same open doorway and flat stone step, and the same dark door leaf lying flat against the outside wall to the right of the doorway; keep the wall, the doorway, the step and the leaf exactly as they are there, and leave the man out. The second shows the woman: take from it her build, her black braids bound at the nape and her deep olive field shell, and nothing of her face. The scene: a small upland goat holding in the year 2826, clean and well kept, in the last grey light of a dead-still late-autumn day, dim and even, the only light. The camera is held at shoulder height by someone standing in the paved yard just behind the woman and a little to her left, close to her. She stands with her back to the camera, facing the open door leaf where it lies against the wall, and the frame holds her from the top of her shoulders down to her hands: her head is above the top edge of the frame and no part of her face is in it; only the bound ends of her black braids show at the nape. She is compact and square-shouldered, in a thin matte deep olive field shell with a high soft collar, cut like plain workwear, not padded or quilted, with nothing on its back or sleeves. Her left hand rests flat on the face of the open leaf at the height of her chest. Her right hand hangs low at her side and holds a thin pale rigid sheet, a form, matte, blank and unlit, soft and beyond the plane of focus. Past her left shoulder the doorway stands open and empty, the room inside it dark, and on the flat stone step below the doorway, in the middle of the step, stands a plain earthenware bowl of milk. The leaf is a single smooth dark matte panel with a fine close grain and a narrow recessed finger pull, flat against the wall, at rest, with no mark on it or on its frame. Nothing is in motion and the air is still: no wind in her braids or on her shell. No text, letters, numbers or captions anywhere, and none on the sheet; nothing glows, least of all at the door, the sheet lights nothing, and no lamp is lit; she is the only person, and no other person is anywhere in frame, no man and no second Ranger; no animal in frame; no case or bag in frame; no pen, tablet, phone, screen or clipboard; no weapon, belt, holster, radio, hat or raised hood, and no coat over the shell; no second door, no shutter and no other dark panel on the wall; no lever handle; no rough stone; no rust, grime or clutter.

*Judging line.* The still fails if any part of her face is in frame, a chin or a cheek included; if the leaf stands at an angle to the wall, is inside the room, shows damage, or is not plainly the leaf and the wall of the kept still A; if the sheet glows, carries any mark, or is a tablet or a clipboard, or a pen can be made out; if the shell is padded, has anything on its back or sleeves, or reads as a coat; if the bowl is missing, spilled or anywhere but on the step; if her hand grips the leaf's edge and does not lie flat on its face; if a second person or a case is in frame; if anything glows or is lettered; or if the light is brighter than the dusk of segment 5, since this shot follows it.

**Still C, `d2-door-c`: she stands inside the doorway, the bowl outside it (dusk; start frame of segment 8).**

> A single frame of documentary footage recorded inside the world by a fixed 29th-century camera set low on the floor just inside the back door of a house, looking out through the open doorway, a photograph, 16:9 landscape orientation, available light only, deep shadow with detail kept in it. Three reference images are attached. The first shows the woman from behind at this same door: keep her shell, her braids, her build and the grey dusk light. The second shows her at full length: take from it her trousers and her plain dark boots, and nothing of her face. The third shows the doorway from the yard: this frame looks out through that same doorway from the other side, with the same stone step and the same yard beyond it. The scene: a small upland goat holding in the year 2826, clean and well kept, at dusk on a dead-still late-autumn day; the last grey daylight coming in through the doorway is the only light, and the room is dim, with a smooth pale floor and plain pale walls at the edges of the frame. The doorway is an empty opening with a crisp recessed jamb: its door stands open outward, laid flat against the outside wall and out of sight from here, and no door leaf is in the opening or anywhere inside the room. Just outside the threshold is a flat stone step, and on the stone, in the middle of the way out, stands a plain earthenware bowl of milk. Beyond it the grey stone paving of the yard, a seamless smooth pale yard wall, waist high, a bare field of dun grass rising behind the wall, and on the ridge above one slim plain pale composite mast, unlit, against the dusk sky. A woman stands just inside the threshold, at full length, her back to the camera and her face toward the yard, so that no part of her face is seen: compact, square-shouldered, bareheaded, her black braids bound at the nape, in a thin matte deep olive field shell with a high soft collar and nothing on its back, not padded or quilted, plain dark trousers and plain dark boots; in one hand, low at her side, a small plain case of dull grey composite, smooth, with no latches, clasps or metal fittings. She is a dim figure against the last light, with detail kept in her. Nothing is in motion and the air is still: no wind in her braids or on her shell, and the milk in the bowl is still. No text, letters, numbers or captions anywhere; nothing glows at the door, in the room or in the yard, no lamp is lit and the mast is not lit; no door leaf inside the room; she is the only person, and no other person is anywhere in frame, in the room, the yard, the field or on the ridge; no animal anywhere in frame; no weapon, belt, holster, radio, hat or raised hood, and no coat over the shell; no latched or hard-shell case; no furniture, tools or screens in view; no wire fence, lattice mast or pylon; no rust, grime or clutter.

*Judging line.* The still fails if a door leaf stands in the opening or anywhere in the room; if the bowl is missing, spilled or not in her way out; if any part of her face is seen, or she is turned to the lens; if a lamp or anything else glows, or the room is lit by anything but the doorway; if the case is latched, hard-shell or a bag (drop the case from the prompt in the second round, as the filed still did); if the shell is padded or reads as a coat; if the mast is a lattice or is lit; or if anything is lettered. The leaf cannot be seen from here, so the fault that stopped eight stills on 31 October, a leaf drawn into the room, shows in this frame as a leaf present at all.

**Still D, `d2-door-d`: the morning, the door open the right way (low sun; start frame of segment 9).**

> A single frame of documentary footage recorded inside the world by a fixed 29th-century camera set low on the floor just inside the back door of a house, looking out through the open doorway, a photograph, 16:9 landscape orientation, available light only, shadow with detail kept in it. Three reference images are attached. The first shows this same view at dusk with a woman in it: keep the camera's place, the room, the doorway, the stone step and the yard beyond exactly as they are there, leave the woman, her case and the bowl out, and change the light to early morning. The second shows the man: take from it his build, his short dark hair greying at the temples and his plain slate-grey coat, and nothing of his face. The third shows him at this door from the yard: take his coat and the back of his head from it. The scene: a small upland goat holding in the year 2826, clean and well kept, early on a clear, dead-still late-autumn morning. Low sun comes in through the doorway from one side and lies in a long bright patch on the smooth pale floor; the sun itself is not in frame; the room is otherwise dim, with plain pale walls at the edges of the frame. The back door stands open the ordinary way, inward: its leaf, a single smooth dark matte panel with a fine close grain and a narrow recessed finger pull, with no handle, lever or knob, is swung into the room on its hinges and stands back against the inside wall on the left of the doorway as the camera sees it, at rest, its edge catching the sun, with no mark on it. The doorway itself is clear. Outside, a flat stone step, bare, then the grey stone paving of the yard with long shadows across it, a seamless smooth pale yard wall, waist high, a bare field of dun grass rising behind the wall, and on the ridge above one slim plain pale composite mast, unlit, against a clear pale sky. One man stands inside the room a pace short of the threshold, at full length, his back to the camera and his face toward the yard, so that no part of his face is seen: lean, in his forties, bareheaded, with a full head of short dark hair greying at the temples, in a plain dark slate-grey field coat that ends at the hip, plain dark trousers and boots, his hands empty at his sides. He is a figure against the morning light, with detail kept in him. Nothing is in motion and the air is still. No text, letters, numbers or captions anywhere; nothing glows, no lamp is lit and the mast is not lit; no lens flare or light streaks; no door leaf lying against the outside wall, and no sliding door; he is the only person, and no other person is anywhere in frame, in the room, the yard, the field or on the ridge; no animal anywhere in frame; no bowl on the step; no long overcoat, hat or cap, and he is not bald; no furniture, tools or screens in view; no wire fence, lattice mast or pylon; no thatch, half door or small-paned window; no rust, grime or clutter.

*Judging line.* The still fails if the leaf is missing from the room, lies outside, or is a sliding panel; if any part of his face is seen, or he is turned to the lens; if he is bald, hatted or in a long overcoat, or is not plainly the man of still A; if anyone else is anywhere in frame, a small figure in the field included; if an animal or a bowl is in frame; if the light is overcast or dusk, or a flare crosses the frame; if the mast is a lattice or is lit; if the room is not plainly the room of still C; or if anything glows or is lettered.

**Desktop steps for the stills** (Opus; nothing below has been run). From the root of the clone, in this order, four takes a round and two rounds at most for each still. `<A>`, `<B>` and `<C>` are the kept takes of the stills before, for example `F:\CLAUDE\Director films\D2\stills\d2-door-a\v2.jpg`.

```
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D2/stills/d2-door-a.txt" --out "F:/CLAUDE/Director films/D2/stills/d2-door-a" --n 4 --aspect 16:9 src/images/characters/donncha-o-laoire.jpg "F:/CLAUDE/Director films/D2/takes/seg1-t2-house-ref.jpg"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D2/stills/d2-door-b.txt" --out "F:/CLAUDE/Director films/D2/stills/d2-door-b" --n 4 --aspect 16:9 "<A>" src/images/characters/eilis-ni-mhurchu.jpg
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D2/stills/d2-door-c.txt" --out "F:/CLAUDE/Director films/D2/stills/d2-door-c" --n 4 --aspect 16:9 "<B>" src/images/characters/eilis-ni-mhurchu.jpg "<A>"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D2/stills/d2-door-d.txt" --out "F:/CLAUDE/Director films/D2/stills/d2-door-d" --n 4 --aspect 16:9 "<C>" src/images/characters/donncha-o-laoire.jpg "<A>"
```

Each round is judged by the image critic against the still's line above before the next still is made, and a still that fails twice on one cause is re-staged here before a third round. The kept take is uploaded to Imagine as the start frame of its segment, at 16:9.

**How the segments fall now.** Segments 1, 2 and 5 are as the chain subsection has them.

| Segment | Brief's shot | Start | Seconds | The one motion | Speech |
|---|---|---|---|---|---|
| 1 | 1 | Text-to-video (run) | 10 | The three goats go to the wall together | None |
| 2 | 2 | Last frame of 1 (run) | 10 | The straw gets up, goes along the wall and lies down | None |
| 3 | 3 | Still A, image-to-video | 10 | His bowed head goes a little lower along the hinge side; the door holds | None |
| 4 | 3 | Last frame of 3, or still A | 10 | He turns away from the lens and goes back into the house; the door holds | None |
| 5 | 4 | Text-to-video (run) | 10, cut to 6 | The Ranger walks down the lane | None |
| 6 | 5 | Still B, image-to-video | 10 | Her hand rests on the open leaf and draws back | His: *You'll want the door, a Mhaoir.* |
| 7 | 5 | Last frame of 6, or still B | 10 | Her hand writes on the form | Hers: *Is anything missing.* His: *No.* |
| 8 | 6 | Still C, image-to-video | 10 | She steps out over the bowl and stands, her back to the lens | None heard |
| 9 | 7 | Still D, image-to-video | 10 | He walks out through the doorway and on across the yard, away from the lens | None |

With segment 5 cut to six seconds the chain runs 86 seconds, inside the brief's 75 to 110. Segment 3 is now the first to drop if the film runs long, in place of segment 4: it is the still held, and segment 4 has the one thing he does. If it is dropped, segment 4 starts from still A.

**Readings these prompts make, offered and not required.** None is canon and none changes the brief.

- In segment 3 he only stands and looks down the hinge side. The chapter's *he stood with the bowl and looked at the hinges* is all the shot has; how the door came to lie there is not shown.
- In segment 6 her hand is already on the leaf when his line is heard, and it draws back. The chapter has him say the line, take her round by the gable, and then has her try the door; the shot keeps the line and the hand and leaves out what came between. Her hand lies on the leaf and does not push it, so the film says nothing about whether the door would have gone back.
- The form is in her other hand from the start of segment 6, so that segment 7 does not have to produce it.
- The case is out of frame in segments 6 and 7, as before, and in her hand in segment 8.
- In segment 8 she is already standing inside the threshold when the shot begins. A figure who walks into an image-to-video frame from beside the camera is drawn from the prompt alone, and nothing would tie her to the woman of segments 5 to 7.
- Segment 9 is seen from inside the door, the mount of segment 8, and not from the byre wall as the shot list has it. From the byre wall he crosses the frame, and both takes showed his face; from inside he walks away from the lens into the light. The two shots then answer each other from one place: at dusk an empty doorway with the leaf outside, in the morning the leaf standing in the room. The chapter's *it came in to him on its hinges* puts him inside, which this mount keeps.
- The step is bare in segment 9. The chapter has the bowl full in the morning and the dog at the milk, and does not say when the bowl was lifted; a bowl left there would have him step over it, which is her gesture and not his.
- The bowl stands on the step in the middle of her way out, in stills B and C alike, so that she has something to step over. The chapter has *the stone by the back step* and *the bowl on the stone*.

**Prompts to paste, each as one line, with its start frame attached.** Each stands alone, as before. Each describes its start frame as well as its motion, so that Imagine is told twice what must not change.

**Segment 3, he stands at the door (image-to-video from still A, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a fixed camera set low in a paved farmyard, a little to the left of the back door of a house, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, on a dead-still late-autumn afternoon under flat grey overcast daylight, the only light. The back wall of a long low house of smooth sealed pale grey stone panels, grey heating conduits under its eave. The dark door stands open outward, its leaf laid flat against the outside wall to the right of the doorway, and it does not move at all at any moment of the take: it does not swing, close, drift or tremble. A lean man in his forties with short dark hair greying at the temples, bareheaded, in a plain dark slate-grey field coat, stands on the threshold with a plain earthenware bowl of milk in both hands, turned away from the lens toward the hinge side of the doorway, his head bowed, his face unseen. The one motion, small and slow: his bowed head goes a little lower, as his eyes travel down the hinge side of the doorway from the top to the foot, and then he is still again, the bowl steady in his hands. He does not turn to the lens, does not step out over the threshold and does not touch the door. He is the only person: no other person is anywhere in frame at any moment, in the room, the yard or on the hill. Nothing else moves: no wind in his hair or coat, nothing in the air, the milk level in the bowl. Sound: the quiet of still air; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows, least of all at the door; the door shows no damage; no second door or dark panel appears; no animal comes into the frame.

*Fails if* the door moves at all; his face turns to the lens or a feature of it resolves; he steps out or touches the door; a second door, a panel, a person or an animal appears; anything glows; his hair or coat stirs; or a word is spoken.

**Segment 4, he goes back in (extension of segment 3 from its last frame, or image-to-video from still A if segment 3 is dropped or has drifted; 10 seconds, no speech).**

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same fixed camera set low in the paved yard a little to the left of the back door, never moved, in the same flat grey overcast afternoon light, 16:9, no cut, no pan, no zoom. The back wall of a long low house of smooth sealed pale grey stone panels in the year 2826, grey heating conduits under its eave, clean and well kept. The dark door stands open outward, its leaf laid flat against the outside wall to the right of the doorway, and it does not move at all at any moment of the take. A lean man in his forties with short dark hair greying at the temples, bareheaded, in a plain dark slate-grey field coat, stands on the threshold with a plain earthenware bowl of milk in his hands, his head bowed and turned away from the lens toward the hinges, his face unseen. He stays so for a few seconds. The one motion: without touching the door and without stepping out over the threshold, he turns the way he already faces, away from the lens and never toward it, and goes back into the dim room, unhurried, carrying the bowl, his back to the lens, and is gone from the doorway. He is the only person: no other person is anywhere in frame at any moment, in the room, the yard or on the hill. The doorway stands empty and the door stays flat against the wall, open and still, to the end. The air is dead still: no wind in his hair or coat, and nothing else moves. Sound: quiet, and his steps going in; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows; the door does not swing, close or tremble and shows no damage; no second door or dark panel appears; no animal comes into the frame.

*Fails if* the door moves at all; he steps out through the doorway or touches the door; his face turns to the lens; anyone else appears; or a word is spoken.

**Segment 6, her hand on the door (image-to-video from still B, 10 seconds, one line spoken).** His, once, at the start: *You'll want the door, a Mhaoir.*

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a small hand-held camera, held at shoulder height by someone standing in a paved farmyard just behind and to one side of a woman at the back door of a house, 16:9, one unbroken take, no cut, no zoom, only the slight sway of a held camera, which never rises to her head. A small upland goat holding in the year 2826, clean and well kept, in the last grey light of a dead-still late-autumn day, the only light. The back wall of a long low house of smooth sealed pale grey stone panels. Its dark back door stands open outward, the leaf laid flat against the outside wall beside the doorway, and it does not move at all at any moment of the take. A plain earthenware bowl of milk stands on the stone step below the doorway. The woman is seen close and from behind, from her shoulders to her hands, her face never in frame: compact, square-shouldered, bareheaded, her black braids bound at the nape, in a matte deep olive field shell with a high soft collar and nothing on its back or sleeves; one hand lies flat on the face of the open leaf, and the other holds a thin pale sheet low at her side, soft and beyond focus. At the start a man's low voice, off camera and near, says once, quietly: "You'll want the door, a Mhaoir." Then the one motion, small and slow: her hand rests on the leaf a moment longer, then she draws it back and lets it fall to her side, and stands looking at the hinge side of the doorway, her face still unseen. She does not push the door, and it does not give, swing or tremble. She does not turn round and does not walk. She is the only person in frame: no other person is anywhere in frame at any moment, and the man who speaks is never seen. Nothing else moves: no wind in her braids or on her shell, nothing in the air. Sound: the one spoken line, then quiet; no other word, no music, no narration. No text, letters, numbers, captions or subtitles; nothing glows, least of all at the door; the door shows no damage; no animal in frame; no weapon, belt, holster, radio, hat or raised hood, and no coat over the shell; the bowl is not touched.

*Fails if* the door moves at all; any word is spoken but the one line, the line is captioned, or she speaks it; her face comes into frame; anything glows at the door; a man or anyone else comes into frame; or the bowl is touched. Whether the vocative is said well enough is for Dermot's ear; if it is not, the fallback is the same prompt with the spoken sentence taken out and *no speech* in its place, and the line goes unsaid in the picture.

**Segment 7, she writes (extension of segment 6 from its last frame, or image-to-video from still B if segment 6's last frame has drifted; 10 seconds, two lines spoken).** Hers, once: *Is anything missing.* His, once: *No.*

> Continue from the attached image as the first frame and change nothing in it: the same unbroken hand-held shot, the camera still held at shoulder height just behind and to one side of the woman at the back door, never rising to her head, in the same last grey light of a dead-still late-autumn day, 16:9, no cut, no zoom. The back wall of a long low house of smooth sealed pale grey stone panels in the year 2826, clean and well kept. The dark door stands open outward, its leaf laid flat against the outside wall beside the doorway, and it does not move at all. A plain earthenware bowl of milk stands on the stone step below the doorway. The woman is seen close and from behind, from her shoulders to her hands, her face never in frame: compact, square-shouldered, bareheaded, her black braids bound at the nape, in a matte deep olive field shell with a high soft collar and nothing on its back or sleeves. The one motion: she lifts the thin pale rigid sheet in her hand a little, a form, matte and unlit, still low and beyond the plane of focus, and her other hand moves across it in short strokes, writing; the hand and the sheet stay soft, so that no lettering and no writing instrument can be made out. While she writes she says once, level and quiet, without turning her head: "Is anything missing." A man's low voice, off camera and near, answers once: "No." She writes again. No other word is spoken. She does not turn round and does not walk. She is the only person in frame: no other person is anywhere in frame at any moment, and the man who speaks is never seen. Nothing else moves: no wind in her braids or on her shell, and the door stays where it lies. Sound: the two spoken lines and the quiet around them; no music, no narration. No text, letters, numbers, captions or subtitles; the sheet does not glow and lights nothing; no legible form; no tablet, phone, screen, clipboard or pen; no animal in frame; no belt, holster or radio, and no coat over the shell.

*Fails if* any word is spoken beyond the two lines, either is captioned, or the voices are swapped; the form is legible, glows, or is a tablet or a clipboard; a pen resolves; her face comes into frame; or the door moves.

**Segment 8, over the bowl (image-to-video from still C, 10 seconds, no speech heard).** The words she says at the door are not picked up, so the prompt asks for none.

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a fixed camera set low on the floor just inside the back door of a house, looking out through the open doorway into a paved yard, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, at dusk on a dead-still late-autumn day; the last grey daylight coming in through the doorway is the only light, and the room is dim. The doorway is an empty opening: the door stands open outward, laid flat against the outside wall and out of sight, and no door leaf comes into the opening or the room at any moment. On the flat stone step just outside the threshold stands a plain earthenware bowl of milk. A woman stands just inside the threshold with her back to the lens: compact, square-shouldered, bareheaded, her black braids bound at the nape, in a matte deep olive field shell with a high soft collar and nothing on its back, plain dark boots, a small plain case of dull grey composite with no latches or clasps in one hand. The one motion: she walks out through the doorway, steps over the bowl on the stone without pausing and without looking down, and stops a pace beyond it on the paving, standing in the last light with her back to the lens, her head a little bowed. She walks straight away from the lens and stands so to the end; she does not turn, and at no moment is she side-on to the lens. Her face is never seen and no word is heard. She is the only person: no other person is anywhere in frame at any moment, in the room, the yard, the field or on the ridge. Nothing else moves: no wind in her braids or on her shell, and the milk in the bowl is still. Sound: boots on the floor and on stone, then the quiet of dusk; no speech, no whisper, no music, no narration. No text, letters, numbers or captions; nothing glows at the door, in the room or in the yard, and no lamp is lit; the bowl is not touched, kicked or spilled; no animal in frame; no weapon, belt, holster, radio, hat or raised hood, and no coat over the shell; no latched or hard-shell case.

*Fails if* a word or a whisper is audible; she looks down at the bowl, touches it or spills it; she turns or her face is seen; a door leaf comes into the opening or the room; a lamp or anything else glows; or the case becomes latched or hard-shell.

**Segment 9, the morning (image-to-video from still D, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a fixed camera set low on the floor just inside the back door of a house, looking out through the open doorway into a paved yard, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept, early on a clear, dead-still late-autumn morning; low sun comes in through the doorway and lies on the pale floor, long shadows cross the paving outside, and daylight is the only light. The back door stands open the ordinary way, inward, its dark leaf swung into the room and standing back against the inside wall beside the doorway, and it does not move at all at any moment of the take: it does not swing, close, slide or tremble. The doorway is clear and the stone step outside it is bare. One man stands inside the room a pace short of the threshold with his back to the lens: lean, in his forties, bareheaded, with short dark hair greying at the temples, in a plain dark slate-grey field coat that ends at the hip, his hands empty. The one motion: he walks out through the doorway at an even pace, without slowing or stopping on the threshold and without touching the door, and goes straight on across the yard away from the lens toward the yard wall, growing smaller, his back to the lens the whole way. He does not turn, does not look back, and at no moment is he side-on to the lens; his face is never seen. He is the only person: no other person is anywhere in frame at any moment, in the room, the yard, the field or on the ridge. Nothing else moves: no wind in his hair or on his coat or in the grass. Sound: his steps on the floor, on stone and on the paving in the morning quiet; no speech, no music, no narration. No text, letters, numbers or captions; nothing glows and the mast on the ridge is not lit; no lens flare or light streaks from the low sun; no door leaf lies against the outside wall; no animal comes into the frame; no long overcoat, hat or cap; no vehicle.

*Fails if* the door moves at all or reads as a sliding panel; he stops on the threshold, turns, or goes back into the house; his face is seen, in profile included; anyone else is anywhere in frame, a small figure in the field included; he is bald, hatted or in a long overcoat; an animal comes into frame; the light is overcast or dusk; or a flare or streak crosses the frame. If he reaches the yard wall and turns before the tenth second, the take is cut before the turn and is not failed for it.

**Offered for the final cut, not decided.** These are readings of the run for Dermot's cut, and nothing here keeps or drops a take.

- **Segment 1 take 2 can stand.** It holds its judging line. The goats come to the near yard wall, which the brief's *far wall* does not match, though they go together and for no dog; and the rough gable top is in the corner of the frame for all ten seconds. If the gable is wanted gone, the cheaper repair is a crop of the frame's upper left in the edit, not a third take.
- **Segment 2 take 1 can stand, with the dog's turned head named.** It is the brief's one hard failure in that take (*if anything but the straw moves in the still air*), at about 12.5 seconds of the joined clip. A cut out of the take before the head turns loses the straw lying down, so the choice is his: the take as it is, with the glance accepted, or one more take from segment 1's last frame. Both takes had the glance, and the dog is in that last frame already, so a third take is likely to have it too.
- **Segment 5 is cut to its first six seconds** of take 2, which the run proposed. She is then still some way up the lane when the shot ends, as the prompt asked, and the face that resolves later is never reached. Her jacket reads as padded in both takes; at that distance in the first six seconds it is passed and named. The shot is not re-staged: she comes down the lane toward the holding, so she cannot walk away from the lens, and a walk across the frame would show her profile, as it showed his.
- **Neither take of segment 9 is usable**, and the segment is re-staged above from still D.

**Judging the film.** As the chain subsection has it, with one addition: a clip made from a still is read at 0, 5 and 9 seconds against the still as well as against its own line, and a door leaf that has moved from where the still put it fails the take whatever else holds. Two takes a segment at most. Takes of these six segments go in the table above, with the still they started from.

**Open at the time of writing.** Whether Gemini lays the leaf flat from the yard a second time, as it did for the filed frame on 1 November. Whether Imagine holds a door still for ten seconds when a figure moves beside it, or animates the leaf because it is there. Whether a frame cut at her shoulders stays cut there under a hand-held sway. Whether Gemini stands the leaf in the room on the hinge side still A gives it, and whether a viewer reads the morning's leaf in the room as the answer to the evening's empty doorway without being told. Whether Imagine speaks a supplied line in an image-to-video clip without captioning it, and what it makes of the vocative; no spoken segment has been run yet.

#### Rethink, 19 November 2026, written before anything is generated

**Why.** Dermot, 19 November 2026, verbatim: *"Whereas 'Nothing Taken' and 'Lunasa - a film' need a rethink, please."* Of the model, the same day: *"The Up People's First Stone fit the text as well as being watchable."* So this is a new brief for the same chapter, held to both halves of that sentence. Nothing has been generated from it (Fable). Rough cut 1 stays filed until he picks a replacement, and everything above stays as the record of how it was made. For any new run this subsection replaces the shot list, the chain and *The door from stills*. The 29 October brief's people, dress, negatives and grounding still bind, except in the two places named under *Readings* below.

**What the filed cut does, read from frames.** Sixteen frames of rough cut 1 on its overview sheet (`F:\CLAUDE\Director films\D2\cut\overview.jpg`), with the run log. The audio was not heard.

- **It shows the opposite of its enigma.** From 0:24 to 0:38 the leaf lies folded back against the outside wall with hinge hardware drawn down its outer edge, at the jamb. That is a picture of a door hung to open outward, open. The chapter's door is the reverse: *"Outward. On its hinges, which were on the inside, where his grandfather had hung them."* From inside, at 1:10, the doorway is simply empty, because a leaf lying flat on the outer wall cannot be seen from the room. So no frame of the film holds the hinges and the door together, and a viewer who has not read the chapter sees an open door.
- **The place does not hold.** There are three houses: a rough stone gable under slate (0:00 to 0:20), small pale blocks under a dark roof (0:24 to 0:38), and large flush panels (0:42). There are two doorways, narrow at 0:24 and wide with a dark frame at 0:48. None is the house of the chapter's own filed picture, `chapters/s01e00c11.jpg`. His coat is slate at 0:24 and pale at 1:20.
- **The night and the morning are missing.** The film cuts from dusk to a man walking out. The door open in the dark, the bowl out, the milk, the sweeping and the brush put back are not in it.
- **She arrives backwards.** At 0:42 she is seen from behind on the lane with the mast ahead of her, which reads as someone walking up the hill and away.
- **It never settles.** Nine shots from six mounts in 86 seconds, joined hard, and the one act the Ranger is there for, writing it down, is never seen.
- **What works, and is kept.** The look he liked on 16 November: matte, grey natural light, held mounts, figures from behind. And the two shots from inside the door at 1:10 and 1:20, which answer each other from one place. The rethink is built on that pair.

**The judging lines, written first.** The film fails if any one of these is true.

1. **The hinge is not legible.** Shown the evening frame from inside the room, cold, a reader who has not read the chapter cannot say which side the door was hung to open to and which side it is on now. The image critic is asked exactly that of the still before any clip is made from it.
2. **The place changes.** The house, the yard wall, the doorway, the field or the mast differs between any two shots, or from `chapters/s01e00c11.jpg`. Either person's dress changes, his coat in the sun included.
3. **The door moves, or is hurt.** In any shot the leaf swings, drifts or trembles, shows a mark, or has a hinge drawn on its outside. Through the afternoon, the evening and the night it stands outside, straight out from the wall. In the last two shots it stands inside the room.
4. **The still air is broken.** Anything but the straw moves on the afternoon; anything is seen in, behind or after the straw; the straw is a funnel or a column of dust.
5. **A face resolves,** an eye, a nose or a mouth, of either person.
6. **The night or the morning is missing:** the door out in the dark with the bowl on the stone; the dog at the milk; the sweeping.
7. **A word is added.** A line is spoken that this brief does not give, a given line is spoken twice, or her lines come in more than one voice.
8. **It does not end on the mast,** small on the ridge, seen through the door that has come in.
9. **It hurries.** A shot is on screen for less than eight seconds, the night for less than ten, or the film runs under two minutes.
10. **The Ranger's dress.** She wears anything but the olive shell and one barred tab, or carries a latched or hard-shell case.

And one line for *watchable*: someone who has not read the chapter can say afterwards, in a sentence, what happened. A door opened the wrong way for a day, and nothing was taken.

**The place, fixed.** One holding, two mounts, and no shot from anywhere else.

- **The reference.** The chapter's own filed picture, `src/images/chapters/s01e00c11.jpg`, is attached to every master still and governs the house, the yard and the hill: walls of large cast pale-grey panels, a dark seamed roof, grey conduits under the eave, the drone in its cradle on the gable, one plain dark door with a recessed pull on its left edge, a brush standing against the wall, paving, a waist-high cast yard wall, the top field with slim sensor posts and no wire, one slim pale mast on the ridge. A still whose house is not plainly that house fails, whatever else it gets right. The pale block house of the 15 November stills is retired with them.
- **The yard mount.** The filed picture's own: a fixed camera in the yard, looking along the back wall to the gable, with the door, the yard wall, the top field and the mast all in one frame. Every outdoor event of the chapter happens in that frame.
- **The room mount.** A fixed camera inside the back room at chest height, some paces back from the back door and toward its latch side, looking out through the doorway across the yard to the yard wall, the foot of the top field and the mast on the ridge. It is the mount of the kept morning still of 15 November (`d2-door-d\v3.jpg`), moved a pace to the right so that the hinge-side jamb shows its inner face.
- **The door.** The pull is on the leaf's left edge from the yard, so the hinges are on the left jamb as the room mount sees it. They are his grandfather's: three plain dark hinges, old and kept, their knuckles standing proud on the room side of the jamb. For the one day the leaf stands outside, straight out into the yard from that same jamb, at a right angle to the wall, touching nothing. From the room the frame then holds both facts at once: the three hinges on this side, folded as they lie when the door is shut, and the leaf out there, beyond the threshold. In the morning the leaf stands in the room, swung in on those hinges and resting against the inside wall.

**Readings, offered and not required.** None is canon. The first two change the 29 October brief for this run, and are his to overrule.

- **The leaf stands out from the wall; it does not lie flat on it.** The 29 October judging line fails a leaf that *stands at an angle to the wall*. That was staging, chosen because a flat leaf was the one a still could hold. The chapter gives no angle. It says the door was *"open the wrong way on them and holding there in the still air"*, and a leaf standing in the open with nothing to hold it is nearer those words than one resting on a wall. It is also the only position that can be seen from the room with the hinges.
- **Two of her sentences are heard as a voice.** The 29 October brief has no narration. This one has her form's line for the door, and the chapter's last line, each said once (see *The voice*). The filed films he likes carry a plain voice, and the hinge needs one sentence said aloud. This is put to him in `open-questions.md`.
- **No lane.** She is first seen far up the hill and then at the door. The lane was a third mount, and both takes of it brought her to the lens.
- **His line at the gate is not heard.** *You'll want the door, a Mhaoir* is the chapter's, and it is left out so that the film has four spoken lines and no vocative for a generator to mangle.
- **The swing is not shown,** in either direction, for the reason of 15 November: a door holds only as a held state. The door's going out and its coming in both happen in a cut.
- **The front step is not shown.** *"The dog across the front step, which was the dog's own custom and had no form at all"* is at the other side of the house. The dog is seen in the morning, at the milk, by the back step. If he wants the dog's custom in the film, it is one more held shot from a third mount, and the first thing to add.
- **She carries no case.** Every still of 15 November that was asked for one drew a stock case.

**The voice.** Four spoken lines in three places, each said once, and nothing else.

| Where | Who | The words | From |
|---|---|---|---|
| Segment 8, at the door | Hers, then his, off camera | *Is anything missing.* / *No.* | The chapter's dialogue |
| Segment 9, over the hinges | Hers, as a voice | *One door. Opens outward; hung inward. No damage. Duration pending.* | Her form, as she wrote it |
| Segment 15, over the empty doorway | Hers, as a voice | *The instrument had a tolerance. The door did not.* | The last line of her block |

Her three pieces are one voice: plain, level, not performed. No face is ever shown, so no line needs a mouth. All of hers are taken from one clip and laid in the cut where the table puts them. The sound is still Grok's own, moved and not replaced. The subtitle track carries these exact words. Whether the voice is right is for his ear.

**The stills.** Gemini, by `node scripts/image-edit.js`, 16:9, kept beside the takes in `F:\CLAUDE\Director films\D2\rethink\`, outside the repository, and judged by the image critic before the next is made. There are two masters. Every other still is an edit of a kept one that names only what changes and ends *keep everything else exactly as it is*, which is the method that fixed a fault every time on 15 November. No child is in any still or segment, and none is to appear (`CLAUDE.md`, *A child is pictured grown*). Nothing is lettered.

*Master 1, `d2r-yard-up`, the yard on the afternoon.* An edit of the filed chapter picture itself, with that picture attached:

> Keep this photograph exactly as it is: the house, the roof, the conduits, the drone in its cradle, the shut dark door, the brush, the paving, the yard wall, the hill, the sensor posts, the mast, the grey light, and the loose column of straw standing in the air by the gable. Change one thing only. Across the field just beyond the three goats runs a low pale wall of the same cast panels as the yard wall, and the three goats stand bunched close against it. Add nothing else: no person, no dog, no fourth goat, no wire, no lettering. Keep everything else exactly as it is.

*Master 2, `d2r-room-him`, the room on the afternoon.* Three pictures attached: the filed chapter picture, the kept `d2r-yard-up`, and the kept morning still of 15 November (`d2-door-d\v3.jpg`).

> A single frame of documentary footage recorded inside the world by a fixed 29th-century camera, a photograph, 16:9, available light only, deep shadow with detail kept in it. Three reference images are attached. The first two show the house from its yard: take from them the cast pale-grey wall panels, the plain dark door leaf with its narrow recessed pull, the paving, the waist-high cast yard wall, the hill field with slim sensor posts and no wire, and the one slim pale mast on the ridge. The third shows a room of that house looking out through its back door: keep that room, its pale floor and plain walls, and the man seen from behind, and move the camera one pace to the right. The scene: a small upland goat holding in the year 2826, clean and well kept, on a dead-still late-autumn afternoon under flat grey overcast; the daylight in the doorway is the only light. The camera is inside the back room at chest height, some paces back from the doorway and to the right of its centre, so that the left jamb of the doorway shows its inner face. On that inner face, on the room side, are three plain dark hinges, old and well kept, one above another, their knuckles standing proud and catching the grey light, each folded flat as a hinge lies when its door is shut. No door hangs from them inside the room. The door is outside: a single smooth dark matte leaf with a fine close grain stands beyond the threshold, straight out into the yard from the left side of the doorway at a right angle to the wall, upright and at rest, touching nothing, with no mark on it. Through the doorway it is seen as a tall dark panel running away from the camera along the left of the view. Beyond it are the paving, the yard wall, the foot of the hill field, and the mast small on the ridge under the grey sky. One man stands in the room a pace short of the threshold, at full length, his back to the camera: lean, in his forties, bareheaded, short dark hair greying at the temples, a plain dark slate-grey field coat that ends at the hip, plain dark trousers and boots, a plain earthenware bowl of milk held in both hands in front of him. Nothing is in motion and the air is still. No text, letters or numbers anywhere; nothing glows and no lamp is lit; no door leaf anywhere inside the room; no hinge on the outside of the wall or on the leaf's outer edge; no second door; he is the only person and no animal is in frame; no bowl on the step; no furniture, tools or screens; no rust, grime or clutter.

*It fails if* a leaf is in the room; the leaf outside lies flat on the wall or is missing; the hinges are missing, are on the right jamb or are anywhere outside; the house or yard is not plainly the reference's; any part of his face shows; or the cold reader of judging line 1 cannot answer. If two rounds of edits cannot stand the leaf outside with the hinges inside, the fallback is a block model: the room, the doorway, three hinges and a leaf at a right angle, built in Blender to these measurements and made photographic by one image edit with the same three references (`scripts/blockouts/` is the precedent). A doorway is plain geometry, and a model cannot swing the leaf into the room.

The other ten stills, each an edit of a kept one:

| Key | Edit of | Change only | Starts |
|---|---|---|---|
| `d2r-yard-before` | `d2r-yard-up` | No straw in the air: it lies in a loose heap by the gable. The three goats graze apart, lower in the field | Segment 1 |
| `d2r-yard-door` | `d2r-yard-up` | No straw in the air: it lies in a line along the yard wall. The goats graze apart. The door is open: the doorway is dark, and the leaf stands straight out into the yard from the right-hand side of the doorway, at a right angle to the wall, no hinge on its outside | None; the base of the next six |
| `d2r-yard-bowl` | `d2r-yard-door` | A lean man in a dark slate-grey hip-length coat, short dark greying hair, crouches at the stone by the back step from outside, his back to the camera, setting an earthenware bowl of milk on the stone | Segment 6 |
| `d2r-yard-hill` | `d2r-yard-door` | The last grey light before dark. The bowl stands on the stone. Far up the hill beside the field, near the mast, one very small figure in deep olive | Segment 7 |
| `d2r-yard-her` | `d2r-yard-hill` | No figure on the hill. A compact, square-shouldered woman in a thin matte deep olive field shell, black braids bound at the nape, stands at the standing leaf with her back to the camera, one hand flat on its face, a thin pale blank sheet low in the other | Segment 8 |
| `d2r-room-her` | `d2r-room-him` | The last grey light. The man is gone. That woman stands where he stood, her back to the camera, the pale sheet low in one hand. Outside, the bowl of milk stands on the stone step in the middle of the way out | Segments 9 and 10 |
| `d2r-yard-night` | `d2r-yard-hill` | Night under cloud, no moon and no star, no lit window: the frame near dark, with the pale panels, the paving and the milk in the bowl just holding. No figure anywhere | Segment 11 |
| `d2r-yard-dog` | `d2r-yard-night` | Early on a clear morning, low sun and long shadows. A dark rough-coated dog stands at the bowl on the stone with its head down to the milk | Segment 12 |
| `d2r-yard-sweep` | `d2r-yard-dog` | No dog and no bowl. The man, his back to the camera, stands in the yard with the brush in both hands, its head on the paving | Segment 13 |
| `d2r-room-morning` | `d2r-room-him` | Early on a clear morning: low sun through the doorway in a long patch on the floor. The leaf is no longer outside. It stands inside the room, swung in on its three hinges and resting against the wall on the left. His hands are empty. The step is bare | Segments 14 and 15 |

Each fails on the lines above that touch it, and on any change the edit was not asked for.

**How the film falls.** Fifteen clips of 10 seconds, 720p, 16:9, sound on, each starting from a still or from the last frame of the clip before. About 2 minutes 20 seconds; accept 2:00 to 2:40.

| Segment | Mount | Start | The one motion | Heard |
|---|---|---|---|---|
| 1 | Yard | `d2r-yard-before` | The three goats lift their heads, walk together to the far wall and stand bunched against it | Hooves on turf |
| 2 | Yard | Last frame of 1 | The straw by the gable gets up off the ground and stands turning, the height of a man | Dry straw |
| 3 | Yard | `d2r-yard-up` | The straw goes along the yard wall and over it, lies down along the wall, and stays | Dry straw, then nothing |
| 4 | Room | `d2r-room-him` | His head turns to the hinges, goes down the three of them, and comes back to the leaf outside | The quiet of the room |
| 5 | Room | Last frame of 4 | He takes one half-step back from the threshold and stands. He does not go through | One footfall |
| 6 | Yard | `d2r-yard-bowl` | His hands leave the bowl; he straightens and stands with his head bowed | The bowl on stone |
| 7 | Yard | `d2r-yard-hill` | The small figure comes down the hill, and is still far beyond the yard wall at the end | Nothing |
| 8 | Yard | `d2r-yard-her` | Her hand rests on the leaf, draws back and falls | *Is anything missing.* / *No.* |
| 9 | Room | `d2r-room-her` | Her head turns to the hinges and goes down the three of them, as his did | The form's line, laid in the cut |
| 10 | Room | Last frame of 9 | She walks out through the doorway, steps over the bowl without looking down, and stops a pace beyond it with her head a little bowed | Boots on stone; her words at the door are not picked up |
| 11 | Yard | `d2r-yard-night` | Nothing. The leaf stands out in the dark | The night |
| 12 | Yard | `d2r-yard-dog` | The dog laps, lifts its head and walks off toward the gable | Lapping |
| 13 | Yard | `d2r-yard-sweep` | He sweeps the paving in short strokes, working away from the lens | The brush |
| 14 | Room | `d2r-room-morning` | He walks out through the doorway without slowing and on across the yard, away from the lens | His steps |
| 15 | Room | Last frame of 14 | Nothing. The doorway is empty, the leaf is in the room, and the mast is small on the ridge | The chapter's last line, laid in the cut |

Segment 7 is the first to drop if the film runs long, and segment 5 the second. Segment 11 may be extended once if it holds. The two halves of the day are joined by the cut into segment 11 and the cut out of it; every other cut falls where nothing is moving.

**Prompts to paste.** Each is pasted as one line with its start image attached: the segment's paragraph, then the shared tail. Any *this does not move* clause comes first, as D7's run taught.

*Shared tail, every segment:*

> Footage recorded inside the world by a fixed camera, 16:9, one unbroken take, no cut, no pan, no zoom, the frame alive only with the faintest tremor of the mount. A small upland goat holding in the year 2826, clean and well kept. The air is dead still: no wind in grass, hair or cloth, and nothing stirs that this prompt does not name. The sky is the only light; nothing glows and no lamp is lit. No text, letters, numbers, captions or subtitles. No music and no narration. No person and no animal anywhere in frame beyond those named here; nothing on the ridge but the one mast. No face is seen at any moment.

*Segment 1.*

> Animate the attached image as its first frame and change nothing in it. The house door stays shut and the straw on the ground does not stir. There are three goats and only three. The one motion: after a few seconds all three lift their heads and walk together, close and unhurried, up the field to the low wall on its far side, and stand bunched against it, as goats go for a herding dog, though nothing drives them. No dog and no person is in frame. Sound: hooves on turf in open-air quiet.

*Segment 2.*

> Continue from the attached image as the first frame and change nothing in it. The three goats stand bunched at the far wall and do not move, and the house door stays shut. The one motion: the loose straw on the ground by the gable gets up off the ground by itself and stands turning slowly in the still air, a loose open skirt of straws about the height of a man, thin enough to see the wall through it. It stays by the gable. Nothing is in it, behind it or under it: no figure, shape, shadow or light, no dust, no funnel. Sound: dry straw whispering.

*Segment 3.*

> Animate the attached image as its first frame and change nothing in it. The three goats stand bunched at the far wall and do not move, and the house door stays shut. The one motion: the standing skirt of straw goes unhurried along the yard wall, away from the gable, then over it, and lies down in a line along the wall and stays there, still, for the last seconds of the take. Nothing is in it, behind it or after it: no figure, shape, shadow or light, no dust, no funnel. The camera does not follow it. Sound: dry straw, then silence.

*Segment 4.*

> Animate the attached image as its first frame and change nothing in it. The door leaf standing outside does not move at any moment: it does not swing, close, drift or tremble. The three hinges on the jamb do not move. One man stands in the room with his back to the lens, a bowl of milk in both hands. The one motion, small and slow: his head turns a little to the left, toward the hinges, and goes down them from the top one to the lowest, then lifts again toward the leaf outside, and he is still. He does not turn to the lens, does not step forward and does not touch anything; the milk stays level. Sound: the quiet of a room.

*Segment 5.*

> Continue from the attached image as the first frame and change nothing in it. The door leaf standing outside does not move at any moment, and the three hinges do not move. The man stands with his back to the lens, the bowl in both hands. He stays so for some seconds. The one motion: he takes one half-step straight back from the threshold, toward the lens and without turning, and stands. He does not go through the doorway and does not touch the door. Sound: one footfall, then quiet.

*Segment 6.*

> Animate the attached image as its first frame and change nothing in it. The door leaf standing out from the wall does not move at any moment, and the straw along the yard wall lies still. One man crouches at the stone by the back step with his back to the lens. The one motion: his hands come away from the bowl and leave it standing on the stone; he straightens slowly and stands where he is, his back still to the lens, his head bowed, and does not walk. He does not go into the doorway. Sound: earthenware set on stone, then quiet; no word is heard.

*Segment 7.*

> Animate the attached image as its first frame and change nothing in it. The door leaf standing out from the wall does not move at any moment; the bowl stands on the stone; the yard is empty. In the last grey light one very small figure in deep olive is far up the hill beside the field. The one motion: the figure walks down the hill toward the holding at an even pace, a little larger at the end of the take and still far beyond the yard wall, too small and too dim for a face. It does not reach the yard. Sound: almost nothing.

*Segment 8.*

> Animate the attached image as its first frame and change nothing in it. The door leaf does not move at any moment, however it is touched: it does not give, swing or tremble. One woman stands at it with her back to the lens, one hand flat on its face, a thin pale sheet low in her other hand. The one motion, small and slow: her hand rests on the leaf a moment longer, then draws back and falls to her side. She does not turn and does not walk. While she stands she says once, level and quiet: "Is anything missing." A man's low voice, off camera and near, answers once: "No." No other word is spoken and the man is never seen. The sheet is blank, matte and unlit. Sound: the two lines and the quiet round them.

*Segment 9.*

> Animate the attached image as its first frame and change nothing in it. The door leaf standing outside does not move at any moment, and the three hinges do not move. One woman stands in the room with her back to the lens, a thin pale sheet low in one hand. The one motion, small and slow: her head turns a little to the left, toward the hinges, and goes down them from the top one to the lowest, and she is still. She does not turn to the lens and does not walk. Sound: the quiet of a room; no word is spoken.

*Segment 10.*

> Continue from the attached image as the first frame and change nothing in it. The door leaf standing outside does not move at any moment, and no leaf comes into the doorway. A bowl of milk stands on the stone step outside, in the middle of the way out. The one motion: the woman walks straight away from the lens out through the doorway, steps over the bowl on the stone without pausing and without looking down, and stops one pace beyond it, her back to the lens and her head a little bowed. She does not turn, and is never side-on to the lens. The bowl is not touched and the milk stays still. Sound: boots on the floor and on stone, then quiet; no word and no whisper is heard.

*Segment 11.*

> Animate the attached image as its first frame and change nothing in it. Nothing in this frame moves at any moment: the door leaf standing out from the wall, the bowl on the stone, the brush against the wall, the field, the cloud. It is night, near dark, with no moon, no star and no lit window, and it stays exactly this dark. There is no motion but the grain and the faintest tremor of the mount. Nobody and no animal comes. Sound: the night, very quiet.

*It fails if* anything moves or any light comes. If two takes both invent a motion, the still is held in the cut for ten seconds under the sound of the better take.

*Segment 12.*

> Animate the attached image as its first frame and change nothing in it. The door leaf standing out from the wall does not move at any moment. It is early on a clear still morning, low sun and long shadows. One dog stands at the bowl on the stone with its head down. The one motion: the dog laps the milk for some seconds, lifts its head, and walks unhurried away along the wall toward the gable, away from the lens. It does not look at the door. Nobody is in frame. Sound: lapping, then paws on paving.

*Segment 13.*

> Animate the attached image as its first frame and change nothing in it. The door leaf standing out from the wall does not move at any moment. One man stands in the yard with his back to the lens, a brush in both hands; his coat stays the same dark slate-grey in the sun. The one motion: he sweeps the paving in short even strokes, working slowly away from the lens toward the yard wall, his back to the lens the whole time. He does not turn. No dog and no bowl is in frame. Sound: a brush on stone.

*It is not failed if* he also stands the brush back against the wall; the chapter has that too (*"He put the brush back where it stood"*), and a second motion is not asked of one clip.

*Segment 14.*

> Animate the attached image as its first frame and change nothing in it. The door leaf stands inside the room against the wall on the left and does not move at any moment: it does not swing, close, slide or tremble. The three hinges do not move. The doorway is clear and the step outside is bare. One man stands in the room with his back to the lens, his hands empty; his coat stays the same dark slate-grey in the sun. The one motion: he walks out through the doorway at an even pace, without slowing on the threshold and without touching the door, and straight on across the yard away from the lens, growing smaller, his back to the lens the whole way. He does not turn or look back. No lens flare. Sound: his steps on the floor, on stone and on the paving.

*Segment 15.*

> Continue from the attached image as the first frame and change nothing in it. Nothing in this frame moves at any moment: the door leaf standing inside the room, the three hinges, the patch of sun on the floor. The doorway is empty and nobody comes back into it. Beyond it are the yard, the yard wall, the hill field and one slim pale mast, small on the ridge, unlit. There is no motion but the grain and the faintest tremor of the mount. Sound: a morning, very quiet; no word is spoken.

**Judging the film.** Each still by the image critic, century first. Each take from frames at 0, 5 and 9 seconds against its still and against the judging lines, then the joins, then the whole against all ten lines and the line for *watchable*. Two takes a segment at most; a segment that fails twice on one cause is re-staged here before a third is run. Generating is a desktop step on Opus.

**What it leaves out, and says so.** His line at the gate and her four questions. The shears on the wrong peg. The front step. Her walk down at the hour the next day. The fifty-one seconds, which the film never explains: the last line is left to stand on the picture, the door in the room and the mast on the ridge.

**Open at the time of writing.** Whether a still can stand the leaf outside with the hinges inside, which eight text-only tries could not do on 31 October and no edit has yet been asked to. Whether Imagine holds a frame with no motion asked of it (segments 11 and 15). Whether one clip gives all of her lines in one voice. Whether the dog, alone in its frame with nothing happening behind it, leaves the door alone.

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

**Title and length.** *Before the Close.* 110 seconds; accept 90 to 130.

**Instruction to paste.**

> Make a film of about 110 seconds, 16:9, on Tír na nÓg in the Celtic Union,
> in the autumn of 2826 UCSD, on a night that is not dated and is never given a
> date. This is a reconstruction of a night nobody recorded, so that night the
> camera stands only where the two witnesses stood: at a farmyard gate at a
> woman's eye height, and on the pillow of a child's bed looking up. In the
> morning it stands at the top wall, and low at the table. No human face is
> ever shown. A stone holding
> below a top field that rises to a line of bare trees; a gate where the yard
> becomes the field; ewes brought down in the afternoon; a lamp put out before
> dark; a shutter on the child's room left open a hand's width. Mairéad Ní
> Dhálaigh, a tall rangy woman with one black plait down her back, sends her
> daughter Úna to bed, goes out to the gate and keeps her
> hand on its top bar. The large moon, Donn, is up over the trees, full and
> ordinary. Its edge softens on one side, as if breathed on; no second moon is
> drawn. Low between the bare trunks a light comes up, level, a lamp's worth and
> no more, from nothing visible. A long held low note, like a person humming
> with the mouth shut, rises, and the light rises with it. Within the light, at
> the tree line, one tall stillness, seen for a breath and not looked at long,
> never resolved, never nearer, never in focus, never faced; then the woman's
> eye is on her own hand on the gate, and the note goes on. Nothing comes down
> the field; nothing is set down or lifted. Then there is only the light, then
> less; the moon's edge comes back; the trees are bare trees. Inside, the
> child sees the moon's white bar across the ceiling, then the whole ceiling
> come up warmer
> and move slowly, like river light under a bridge, breathing with the note,
> and stays where she is. Morning: at the table, a bowl, a child's hand beside
> it, a woman's forearm, nobody's face, and the four spoken lines, supplied;
> then the ewes go back up, the woman walks the top wall counting, and does not
> go into the trees; nothing is on the ground. No narration, no score, only the
> note. No date, no minutes, no place name, no instrument, no Ranger.

**Shot list.**

1. Camera fixed at the gate, eye height, looking up the field to the trees
   and the moon; the one motion is the moon's edge softening on one side;
   moonlight.
2. The same mount: the light coming up low between the trunks and lying
   level; moonlight and the light.
3. The same mount, about four seconds: within the light, at the tree line,
   one tall stillness, a small part of the frame, unresolved, never in focus,
   never nearer; nothing else moves; the note.
4. Close at the same place, held long: a hand on the top bar of the gate, the
   grain of the wood; moonlight; the note stays over the hand, rising, and
   nothing moves.
5. Camera on the pillow looking up: the moon's white bar across the ceiling,
   then the ceiling coming up warm and moving slowly, breathing; the light
   from the window gap.
6. The gate mount: the light going down between the trunks; the moon's edge
   returning; the trees bare.
7. Morning, low fixed camera on the table, about ten seconds: a bowl, a
   child's hand beside it, a woman's forearm resting on the wood; beyond
   focus on the plain wall, one sealed plain housing with a grain-sized
   steady indicator, the only made light in the film; the four lines, spoken
   off; no face.
8. Morning, camera at the top wall, low sun: ewes going up the field, a woman
   walking the wall counting, the trees behind her not entered.

**Narration.** No narration. Four lines at the table in the morning, over
shot 7, the child's then the mother's, from off frame, no mouth shown:
*Were they there?* *The moon was.* *I saw the ceiling.* *So did I, once.*

**Negatives as objects.** The shared negative, plus: no human face, no face
at the table, no reflection of one; no face, features, eyes, ears or hands on
the figure, and no figure held or dwelt on; no pointed ears, wings, robes,
crown or staff; at the table no almanac, page or print in frame, no meter box,
switch, socket, thermostat or lamp on the wall;
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

**Status, 17 November 2026: filed as an impression.** Rough cut 1 (1:58), made from stills as a chain of 10-second Imagine clips, with the wall clock and the stair taken out of the room stills at Dermot's word, stands as `src/video/the-character-of-the-light.mp4` (re-encoded from 55 MB to fit the repository), with an English subtitle track (`the-character-of-the-light.en.vtt`, off by default), and is shown in `src/journal/the-character-of-the-light.md`. Dermot's ruling, verbatim: *"fine as journal impressions, but would need more polish if attached to a chapter or episode"*. Open for a polish round: the lantern's groups come about 5 seconds apart, not 15; the room's window shows an island, not the far hull; the robot on the spit is the filed slim one, not the brief's boxy one. Working files and the run log: `F:\CLAUDE\Director films\D5\`.

| Version | Length | Date | Changed from the last | Filed |
| --- | --- | --- | --- | --- |
| Rough cut 1 | 1:58 | 16 Nov 2026 | First cut; clock and stair removed from the room stills | **17 Nov, current** |

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

#### Made as a chain of Imagine clips, from stills, 16 November 2026, written before anything is generated

**Why, and the rulings.** Director mode, the multi-shot film maker this brief was written for, was removed from Grok on 15 November 2026. Dermot's ruling the same day, verbatim: *"You may still prompt each 10 second interval and use the last frame to extend into the next one and so on via Grok Imagine or Grok Agent without needing the full Grok director."* Of the method, verbatim: *"This is experimentation until we refine the skill and technique so keep going until we hit the Grok limit"*. And when both door shots of the first film failed twice, verbatim: *"Start from a still"*. Two further words of his from 15 November bind and are recorded in D7's subsection, not quoted here: a continuous shot is a first clip and at most two extensions of 10 seconds, 30 seconds in all, and the sound is Grok's own and is kept. Two films have been made this way, D2 *Nothing Taken* and D7 *Lúnasa*. On 15 and 16 November he chose to go on with the experiment, on the *keep going* word above, and Opus picked this brief over D3 *Left Blank* for the third film: D5's subject is a rhythm of light, which is a motion a clip can show, where D3 turns on handwriting, and the one act of writing in D2 came back unseen. So *The Character of the Light* is cut into thirteen clips of 10 seconds, 720p, 16:9, sound on, 130 seconds in all, inside the brief's accepted 100 to 150. The brief above stands as written and still binds. This subsection only cuts it into pieces Imagine can take one at a time, and nothing here is canon.

**Status.** Written 16 November 2026 (Fable). Nothing has been generated: no still and no take. The nine still prompts are saved as plain text beside the film's working folder, and making the stills and the clips is a desktop step on Opus.

**What D2 and D7 taught, and where it binds here.** The run logs' lessons are in the `grok-director` skill and in the two films' subsections.

- **A state holds only from a still.** The tower, the open door, the room, the clock, the three open volumes, the dark lantern, the stair and the far line with its three lights are each drawn once by a still and then asked to stay as they are. Every new shot below starts from a still, and no shot is text-to-video.
- **The second round of a still is an edit of the best take,** naming only the faults and saying *keep everything else as it is*.
- **Any *this does not move* clause goes first in a prompt.** Each segment prompt opens with what holds: the tower, the door, the clock's hands, the books, the lantern's place, the woman on the stair, the far line.
- **Walkers walk away from the lens and are never side-on.** The three on the spit go straight away from the camera in segments 1 to 3, and the attendant goes down the stair away from it in segment 12. Nobody crosses a frame.
- **Name the count and the skyline.** Three walkers and no one else; two people in the room; one hand on the page; nobody on the gallery; nothing on the water but the one far form; nothing built but the tower.
- **No action the camera cannot see.** The door's shutting is asked for as a sound, since the door is behind the camera. The register is not read aloud or written in. The tide's falling is set by a still, as wet stones already uncovered, and is not asked of a clip.
- **Launches and fades misbehave.** The lantern is the risk of this film: a light asked to come up and die twice and then stay dark. Its timing is asked for loosely in the prompt and is finished in the cut, as set out under *The rhythm* below, and a fallback still holds the lit state.
- **An approached object stays centred.** The tower stands in the exact centre of segment 3, the only take in which the camera advances, and the lantern in the exact centre of segments 8 to 10.

**The brief against the 29th-century look, and against *A child is pictured grown*.** D5 was written on 29 October and corrected on 6 November after the Benevolent Critic; the look rulings were gathered the same day (the `twenty-ninth-century-look` skill; in this repository, *Light is diegetic* and the shared negative above, and `images.md`, *Conventions*). Read against them on 16 November, the brief holds in all but one line, and the chain makes six readings of the look. Each is offered, and none changes the brief.

1. **The room's lamp is taken out.** The brief lights the room with *one lamp* (the instruction, shots 3 and 4). A lamp the brief names is allowed by the shared preamble, but the record names no lamp in that room, and an unnamed lamp arrives as a present-day desk lamp, a bulb or an oil lamp, each of which the look refuses. Here the room is lit by the grey daylight in its one window and by light from no visible fitting, and every room still says *no lamp, bulb, candle, lantern or light fitting*. The lighthouse's own lamp is a different thing: it is the brief's named light and the film's subject, and it is the only thing in the film that flashes. If he would rather keep a lamp in the room, it is one plain lamp in the century's form, a sealed plain housing with a soft even light, added to still `d5-room-a` as an edit.
2. **The clock stands, and its dial carries strokes, not numerals.** A dial is a period object in the century's made rooms, and this one is the record's own old object: the chapter makes the clock mechanical, and the 6 November correction kept it with the reason stated. It is one plain clock, kept and going, and it never glows. Lettering made by a generator fails, so the dial has twelve plain strokes and no numerals or maker's name, and it has no second hand and no pendulum, since either would be animated badly.
3. **The register is old and kept.** *Old pages* is read as cream paper, changing hands and worn-smooth boards. A word about age goes to the object it belongs to, so the volumes have no stains, foxing, torn edges or dust.
4. **The tower is kept.** The limewash is clean and whole, the gallery rail sound, the lantern glass clean, as the inspection in S01E00C10 found them. Weather, wet stone, weed and spray stay, by the rural exception in the shared rules. The filed frame `s01e00c10.jpg` was passed with faint rust at its gallery; the stills that take it as a reference say to leave the rust out.
5. **The lantern lights and goes dark, and nothing else glows.** No beam, ray or cone is drawn in the air, which is the brief's own negative. The station's three small working lights are the brief's, and they are the only other lights in the film.
6. **What says the century.** A whitewashed light on a shingle spit is Earth in any century, which is the chapter's point. On the spit the hint is Rook-7's figure, as in the filed chapter frame. From the gallery it is the station's low hull form with three lights, taken from `s01e00c10.jpg`. In the room it is that same form, very small through the window, with the room's light from no fitting and the Ranger's field coat. The three close frames (the register, the lantern, the stair) carry no hint of their own inside the sequence, and are held instead to showing nothing of our century: no bulb, switch, cable, plastic or stock fitting.

**No child is in the brief, the stills or the segments,** and none is to appear. The four people the film shows are adults: the attendant, past sixty, and the three of the survey party. So *A child is pictured grown* is met with nothing to change.

**One line of the brief's grounding is out of date** and is left as written, since this subsection changes no brief: *Her build and coat come from the filed frame `nuala-beirne.jpg`*. That portrait was removed on 10 November 2026 and is kept only as a negative example. The chain takes her from the brief's own words and from the removed frame's prompt in `images.md` (small, straight-backed, short iron-grey hair, a dark moss-green coat with the hood down), attaches no picture of her, and never shows her face. A one-line dated note under the brief is offered.

**How the seven shots fall.**

| Segment | Brief's shot | New or extension | Start | Seconds | The one motion | Speech |
|---|---|---|---|---|---|---|
| 1 | 1 | New | Still `d5-spit-a`, image-to-video | 10 | The three walk away along the spit, leaning, and grow smaller | None |
| 2 | 1 | Extension of 1 | Last frame of 1 | 10 | They walk on; one harder gust pushes them a half-step right and they lean back into it | None |
| 3 | 2 | New | Still `d5-spit-b`, image-to-video | 10 | The camera is carried forward and the tower grows a little; the door is already open | None |
| 4 | 3 | New | Still `d5-room-a`, image-to-video | 10 | A door is heard to shut and the gale drops to a moan; her head lifts a little | His: *Your clock. The one that times the character.* |
| 5 | 3 | Extension of 4 | Last frame of 4 | 10 | Nothing but the sea beyond the glass | His: *I want to know how often it needs correcting, and I want to know whether anyone has ever written that down.* |
| 6 | 3 | New | Still `d5-room-b`, image-to-video | 10 | Her head turns a few degrees toward the clock and back to the water | Hers: *Everyone writes that down. It's a maintenance record. That's the whole job.* Then: *Nobody's ever asked for it.* |
| 7 | 4 | New | Still `d5-register`, image-to-video | 10 | A forefinger goes slowly down one column and rests | None |
| 8 | 5 | New | Still `d5-lantern-dark`, image-to-video | 10 | The lantern flashes twice and stays dark | None |
| 9 | 5 | Extension of 8 | Last frame of 8 | 10 | Dark, then two flashes, then dark | None |
| 10 | 5 | Extension of 9 | Last frame of 9 | 10 | Dark, and in the last second the lantern lights once | None |
| 11 | 6 | New | Still `d5-stair`, image-to-video | 10 | She stands on the stair, her back to the lens, and speaks down it | Hers: *Because it's lit. That's the whole of it.* |
| 12 | 6 | Extension of 11 | Last frame of 11 | 10 | She finishes and goes on down the stair, away from the lens | Hers: *A light you only put on when you know someone's out there isn't a light. It's a favour.* |
| 13 | 7 | New | Still `d5-shore`, image-to-video | 10 | The sea works on both sides of the spit; the far line holds | None |

The chains are 1 and 2 (20 seconds), 4 and 5 (20 seconds), 8 to 10 (30 seconds, the limit) and 11 and 12 (20 seconds). Segments 3, 6, 7 and 13 stand alone. Each join inside a chain falls where the frame is at rest, and every other join is a cut.

Against the shot list: the walk out is 20 seconds; the approach 10; the room 30, which is the length the three lines spoken there need; the register 10; the lantern 30, which is the brief's own *held for thirty seconds*; the stair 20, for her line; the last look down the spit 10. The first to drop if the film runs long is segment 2, then segment 3, and then segment 10, after which the lantern shot is two groups in 20 seconds and still shows the interval once. No segment with a spoken line is dropped.

**Speech.** The brief gives four lines and the film has no others: his in the room, her two in the room, and hers on the stair. Two of them are too long to be said in one clip at an unhurried pace, so each is carried across a join inside one continuous shot: his across segments 4 and 5, at the full stop after *character*, and hers on the stair across segments 11 and 12, at the full stop after *whole of it*. No word is added, dropped or moved. Every speaker has their back to the lens or is turned to the window, so no mouth is seen and no clip has to match lips to words. Nobody else speaks: the two colleagues are not heard, and there is no narration. The sound is Grok's own and is measured here, not heard, so whether each line is said, said once and said well is for Dermot's ear.

**The rhythm.** The record fixes two things about the character: two flashes and then dark, and fifteen seconds from group to group (S01E01C03; S01E00C10). The brief adds *correct and no tighter than that*. Fifteen seconds is longer than one clip, and Imagine keeps an order of events better than it keeps a clock, so the prompts ask for order and the cut sets the interval:

- Segment 8 asks for the first group near its start, and dark after it. Segment 9 asks for dark, then the second group about halfway through, then dark. Segment 10 asks for dark, and for the first flash of a third group in its last second.
- Each take is then measured from frames: the mean brightness of the lantern's glass, frame by frame, gives the moment each flash begins.
- The cut trims or slows the dark stretches, and only the dark stretches, by up to a fifth, until the three groups begin 15.0 seconds apart. A flash is never retimed. The film leaves the shot on the first lit frame of the third group, so the cut to the dark stair is made on the light.
- A take passes on order and count: two flashes in a group, alike in length and brightness, with the lantern fully dark between and after. A take with one flash, three flashes, a glow that never goes out or a light that stays on fails.

The length of a flash and the gap between the two flashes of a group are not in the record. The prompts ask for about one second and about two seconds, and the two groups must match each other to within a quarter of a second, measured the same way.

**Readings the chain makes, offered and not required** (the 7 November rule: a brief binds what the record fixes, and the rest is offered). None of these is canon and none changes the brief.

- **The two colleagues are on the spit and nowhere else.** The brief keeps Syra and Rook-7 to *figures from behind and at a distance*, and a small round room, a stair and a gallery have no distance in them. So they are in segments 1 to 3, small, soft with spray and seen wholly from behind, and they are out of frame in every later segment, though the chapter has them in the room, on the stair and on the gallery.
- **The hand on the register is the attendant's.** In the chapter the finger on the column is Syra's, and a hand at desk level is closer than the brief lets her be shown. The brief's shot 4 does not say whose finger it is. Here it is Nuala Beirne's, told by the dark green cuff: S01E00C10 has her run a finger down a season's entries and add them. Thorne's hand, in a grey-green cuff, is the alternative.
- **The clock hangs in the room at the foot of the stair.** The brief gives the clock no place, and neither chapter says where it hangs. It is put where his line about it is spoken, small in segment 4 and near in segment 6.
- **The door is open before the walkers reach it, and is never seen to move.** Still `d5-spit-b` draws it open with the attendant standing in it, which is the chapter's own sentence. In segment 4 its shutting is heard behind the camera and not seen, by D2's lesson about doors.
- **The stair line is said down the stair, to someone out of sight.** The chapter has Rook-7 ask the question; the brief says *to someone out of frame*. The question is not asked on screen, since it is not among the four lines.
- **Each flash fills the lantern's glass with light and dies.** S01E00C10 has the lamp *go round* and the attendant go up *to see it turn*. The film shows no turning lens, only what the rail sees: the glass lit, and then dark.
- **The rail camera stands where the chapter puts Rook-7,** on the seaward side where the gallery narrows, counting. No figure is in that frame.
- **The gallery has a low stone parapet with one plain rail along it.** The chapters give the gallery a rail. The two filed frames differ: `s01e01c03.jpg` has a stone parapet and `s01e00c10.jpg` an iron rail. The film takes the tower of `s01e01c03.jpg`, since it opens on that view, and adds the rail.
- **The last shot is empty.** The chapter ends with the party going back down and fifty minutes of the falling tide left. The brief's shot 7 has nobody in it, and the chain keeps it so.
- **Looking back from the gallery, the wind is from the right,** since it was from the left going out, and the station's form lies on the flatter water to the left. The record does not say where along the shore the station lies as seen from the tower.
- **Left out, because no segment is written for them:** the introductions at the door, the hour and fifty of the tide and the one bed, her going up for the book, the reading of the three volumes and everything Syra finds and says, the inspector's marginal note, the receipt, and Rook-7's count of four hundred and six groups.

**The stills.** Nine start frames, eight to be made and one held back, made on Gemini (`gemini-3.1-flash-image`, 16:9, 2K) by `node scripts/image-edit.js`, as D2's and D7's were: the tool takes a plain-text prompt file and any number of reference images after it, writes `v1.jpg` onward and a `run.json` to the folder named, and files nothing. They are working frames for a film. They are not filed on the site, they take no `images.md` entry, and they are kept in `F:\CLAUDE\Director films\D5\stills\`, outside the repository. The run is registered in `image-prompts.md` when it is made. If one is ever wanted on a page it goes through `images.md` and to Dermot like any new depiction of a person or a place.

The prompt text below is the record. For the tool, each blockquote is saved as plain text, one file a still, under the still's key; the copies made on 16 November 2026 are `d5-spit-a.txt`, `d5-spit-b.txt`, `d5-room-a.txt`, `d5-room-b.txt`, `d5-register.txt`, `d5-lantern-dark.txt`, `d5-lantern-lit.txt`, `d5-stair.txt` and `d5-shore.txt` in that folder. If a prompt is changed here, its text file is saved again from here before the next round.

References, from filed frames where one exists.

- **The spit, the tower and the three walkers:** `src/images/chapters/s01e01c03.jpg`, the chapter's own frame, edited on 16 November to the retrofit Rook-7. It is this film's first shot already, with two faults that entry names: the walkers are nearer than the middle distance, and the robot walks upright where the people lean. Still 1 is therefore an edit of it that changes only the walkers.
- **The station's form, the lantern close by, and the dusk:** `src/images/chapters/s01e00c10.jpg`. It is the one filed frame that draws the station as one long low hull form with three lights, small on the water, and the lantern from near. It also holds a lit lamp, a short beam, faint rust and calm water, which each prompt names to leave out.
- **Thorne:** `src/images/characters/galahad-thorne.jpg`, for his hair, his beard and the cloth of his coat only, since the film sees him from behind.
- **Nuala Beirne:** no filed frame. Her removed portrait and its thumbnail in `story-bible/negative-examples/` are never attached.
- **Rook-7 and Syra:** nothing beyond the chapter frame, which holds them as the film needs them, from behind. Their portraits are not attached, so that no still learns a face or a body in detail.
- **The room, the register and the stair:** no filed frame serves. `d5-room-a` is made from its prompt, with the two references above for the man's coat and the far form.
- **Each later still is held to the one before.** `d5-spit-b` takes the kept `d5-spit-a` as its first reference. `d5-room-b` takes the kept `d5-room-a`, and `d5-register` and `d5-stair` take the kept `d5-room-b`, for her coat and the limewash. `d5-lantern-dark` and `d5-shore` take the kept `d5-spit-a`. `d5-lantern-lit` is an edit of the kept `d5-lantern-dark`.

Nothing in any still is lettered, so nothing needs `set-readouts.py`.

**Still 1, `d5-spit-a`: the three far out on the spit (start frame of segments 1 and 2; an edit of the filed `s01e01c03.jpg`).**

> Edit the attached image, which is the frame to change, and keep everything else as it is: the same camera at standing height at the shore end of the same long shingle spit, the same grey wind-torn sea on both sides of it, short, steep and white-capped on the left and flatter on the right, the same spray blown low across the stones from the left, the same torn grey cloud and grey late-afternoon light, and the same plain round whitewashed lighthouse tower at the far end of the spit, with its one dark door at its foot facing the camera, its low stone parapet and its small unlit lantern. Change one thing only: the three walkers. They are the same three, seen wholly from behind, walking away from the camera toward the tower, but they are now much farther along the spit, about a third of the way to the tower, close together in the middle of the frame's width and in line with the tower, and small: none of them stands taller than a twelfth of the frame's height. From left to right they are a man in a grey-green field coat whose skirts stream out to the right, a tall slight woman in dark close clothing whose dark hair streams to the right, and a broad, boxy, grey-khaki robot with a small sensor block on its shoulder, as tall as the man and broader. All three lean well over to the left, shoulders down into the wind, and the robot leans exactly as the two people lean. At that distance and through the blown spray they are soft: no face shows, and nothing of the robot's body can be made out beyond its broad boxy outline and its colour. Where the walkers stood before there is only the spit, the same pale rounded stones and dark weed, with no mark, shadow or smear left behind. They are the only three figures: no other person, figure or animal anywhere in frame. Add nothing else: nothing on the water, no boat, no buoy, no bird, nothing on the horizon, nothing built but the tower, no light in the lantern, no beam, no text, no lens flare.

*Judging line.* The image critic runs its ladder on every take at full size and as a thumbnail, century first; here the robot's figure is the one thing in frame that says the century. The still fails if anything but the walkers has changed from the filed frame: the tower, the sea, the sky or the shingle; if any walker stands taller than a twelfth of the frame's height, or there are more or fewer than three; if a face or a profile shows, or a walker is side-on; if the robot is upright where the people lean, is slim, glossy, white or a plated humanoid, or shows detail of its body; if a mark or a smear is left where the walkers stood; if the lantern is lit; or if a boat, a bird or a building has appeared. Among takes that pass, keep the one whose walkers are most nearly in line with the tower, since the clip is the three of them going straight at it. If two rounds of the edit rebuild the frame's distances, the still is made as a new generation with the filed frame as its reference.

**Still 2, `d5-spit-b`: near the tower, the door already open (start frame of segment 3).**

> A single frame of documentary footage recorded inside the world by a small hand-held 29th-century camera, a photograph, 16:9 landscape orientation, available light only, deep focus. Two reference images are attached, and both show this place on this afternoon from the shore end of the spit. Take from them the spit's pale shingle and dark wet stones, the grey sea, the blown spray, the sky, the light, the whitewashed tower, and the dress, build and colours of the three walkers. This frame is taken much farther out along the same spit, near the tower. The scene: the year 2826, early autumn, late afternoon, the Sceir Light, a small old navigational light at the seaward end of a long shingle spit on a sea coast on Earth, on a falling tide in a southwest gale that blows hard from the left. The camera is held at chest height by someone walking out along the spit, about eighty metres short of the tower, looking straight along the spit at it. The tower stands in the exact centre of the frame and fills about two-thirds of the frame's height: one plain round lighthouse tower of whitewashed stone, broad, thick-walled and squat, far more of it below its gallery than above, the limewash clean and whole, a plain low stone parapet round its gallery, and at the top a small plain glazed lantern under a small plain dark cap, with no light showing in it. At the tower's foot, facing the camera, is its one doorway, and the door is already open: a plain dark upright opening, its leaf swung inward and out of sight. Just inside the doorway, out of the wind, stands one small straight-backed woman past sixty with short iron-grey hair, bareheaded, in a dark moss-green weather coat cut to the hip with its hood down, her arms folded, waiting. She is small in the frame and in the doorway's shade, and no feature of her face can be made out. Between the camera and the tower, about fifty metres ahead, three walkers go away from the camera toward the door, close together in the middle of the frame, each about a tenth of the frame's height, seen wholly from behind: on the left a man in a grey-green field coat whose skirts stream out to the right; beside him a tall slight woman in dark close clothing whose dark hair streams to the right; and on the right a broad, boxy, grey-khaki robot with a small sensor block on its shoulder, as tall as the man and broader. All three lean well over to the left, shoulders down into the wind, the robot leaning as the two people lean. Through the spray they are a little soft: no face shows, and nothing of the robot's body can be made out beyond its broad boxy outline and its colour. The spit runs straight from the bottom of the frame to the tower's foot, narrow, rough and natural, never a made path, with the sea close on both sides: short, steep and white-capped on the left, flatter on the right in the lee of the stones. Spray is torn off the wave tops on the left and blown low across the stones to the right. Above is torn grey cloud, with a hard pale brightness low in the sky to the right where the sun is behind the cloud. The woman in the doorway and the three walkers are the only figures: no other person, figure or animal anywhere in frame, on the spit, at the tower, on its gallery or in its lantern. No text, letters, numbers, signs, plaques or markings anywhere, on the tower, the door or the coats. Nothing glows: no light in the lantern, no beam, no lit window, no lamp at the door. Nothing on the water and nothing on the horizon: no boat, no ship, no buoy, no bird, no land, no station. Nothing built but the tower: no keeper's cottage, no outbuilding, no wall, no steps down to a jetty, no mast, antenna, flagpole, turbine, solar panel or lamp post. No red tower, no red-and-white bands, no stripes, no tall slender tower, no iron lattice. No road, gravel path, paved causeway, concrete, railing or vehicle on the spit. No wave breaks over the spit, the sea is never calm and the sun is not out. No rust, cracked render, stains or litter. No lens flare. Photographed, not rendered: real shingle with its separate stones, real broken water and blown spray, real whitewash with the stone showing through, cloth snapping in wind, a moderately wide lens, a little spray on the air softening the distance, high-ISO grain in the shadows, muted natural colour.

*Judging line.* The still fails if the tower is off the frame's centre, is slender, banded, red or has an iron lattice, or has its door anywhere but at its foot facing the camera; if the doorway is shut, or shows a door leaf; if the woman is missing from the doorway, stands out on the stones, or shows a feature of her face; if any walker is larger than about a tenth of the frame's height, shows a face or a profile, or is side-on; if the robot's body shows detail, or it is not the broad boxy grey-khaki figure of still 1; if there is a fifth figure anywhere; if the lantern is lit; if anything is built but the tower, or anything is on the water; or if the sea is calm.

**Still 3, `d5-room-a`: the room at the foot of the stair (start frame of segments 4 and 5).**

> A single frame of documentary footage recorded inside the world by a small 29th-century camera set down on a ledge, a photograph, 16:9 landscape orientation, available light only, deep focus. Two reference images are attached. The first shows a man from the front: take from it only his short greying hair, his short greying beard and the cloth and colour of his grey-green field coat; in this frame he is seen from behind, and nothing else of that image is used, not its marsh, its instrument or its drone. The second shows, small on flat water, one long low dark hull-shaped form with three small lights along it: take from it only that form, for the far thing seen through the window here; nothing else of that image is used, not its lighthouse, its shingle, its calm or its dusk. The scene: the year 2826, early autumn, late afternoon, the room at the foot of the stair inside the Sceir Light, an old stone lighthouse at the end of a shingle spit on a sea coast on Earth, in a gale, with the door shut and the room quiet. The camera sits on a ledge beside the door at chest height, looking across the room. The room is round and small, about five paces across: thick curving stone walls limewashed white, clean and whole, and a floor of large grey stone flags, swept and dry. In the wall opposite the camera, a little left of the frame's centre, is one small square window set deep in the thick wall, with a broad stone sill at waist height. Through its clean glass is grey wind-torn sea with white caps under grey cloud, and far off on that water, very small and soft with distance, one long low smooth dark hull-shaped form lies along the horizon with three tiny steady lights spaced along its waterline. At the window, her hip against the sill, stands a small, wiry, straight-backed woman past sixty with short thick iron-grey hair, bareheaded, in a dark moss-green weather coat cut to the hip, its hood lying flat down her back, over plain dark trousers and plain short dark boots. Her arms are folded and she looks out at the water, her back three-quarters to the camera, so that only the back of her head, one ear and the line of her jaw can be seen. On the wall to the right of the window, at head height, hangs one plain old mechanical wall clock, kept and going: a round white dial about two hands across under clean glass, in a plain dark wooden case, with two plain dark hands and twelve plain short dark strokes round its edge for the hours. It has no numerals, no name and no lettering, no second hand and no pendulum, and it is lit only by the room. In the middle of the room stands one plain heavy old timber table, scrubbed pale, with nothing on it. At the left edge of the frame the first steps of a stone stair go up along the curve of the wall and out of the frame. In the near right of the frame, two paces from the camera, stands a man seen from behind from the waist up: short greying hair, the edge of a short beard at his jaw, a dark grey-green field coat with a plain standing collar, facing the woman, his hands at his sides. The light is soft, grey and even: daylight from the window, and the room's own quiet light, which comes from nowhere that can be seen. They are the only two people: no other person, figure or robot anywhere in frame, at the door, on the stair or outside the window. Neither face is seen. Nothing is in motion. No lamp, bulb, candle, lantern, shade, light fitting, switch, socket or cable anywhere in frame, and nothing glows, the clock least of all. No text, letters, numbers or markings anywhere: no calendar, chart, map, notice, label or book. No screen, tablet, radio, telephone or instrument panel. No second clock, no digital clock. No stove, kettle, mug, coat hooks, oilskins, coiled rope, lifebuoy, telescope, barometer, ship's wheel or nautical ornament, and no picture on the wall. No rust, damp stain, peeling limewash, cobweb, dust or clutter. Outside the window: no boat, no bird, no pier, no building, no sun and no calm sea. No lens flare. Photographed, not rendered: real rough limewash over stone, real worn flags, real cloth, a moderately wide lens with slight softness toward the corners, high-ISO grain in the dim parts of the room, muted natural colour.

*Judging line.* Century first: the room's hint is the far hull form in the window, with light that has no fitting and the Ranger's coat. The still fails if either face shows an eye or a mouth; if she faces the room; if a third person, a figure or a robot is in frame; if a lamp, a bulb, a candle, a fitting, a switch or a cable is in frame, or anything glows; if the clock has numerals or lettering, a second hand or a pendulum, glows, is digital, or there are two; if the far form is a pier, a row of buildings, a ship with masts or a tower; if a book or anything lettered is in the room; if the room holds nautical ornament, a stove or clutter, or shows grime; or if the window shows a calm sea or sun. A window with only sea in it, in both rounds, is passed and named, and the room's hint is then the light and the coat. Among takes that pass, keep the one whose clock is plainest and whose two figures are farthest from showing a face.

**Still 4, `d5-room-b`: the attendant at the sill, the clock beside the window (start frame of segment 6).**

> A single frame of documentary footage recorded inside the world by a small hand-held 29th-century camera, a photograph, 16:9 landscape orientation, available light only. One reference image is attached: it shows this room from beside its door. Keep the room, the window, the woman and the clock exactly as they are there, the same limewashed stone, the same deep window and sill, the same coat and hair, the same plain clock, the same soft grey light, and move only the camera. The scene: the year 2826, early autumn, late afternoon, the room at the foot of the stair inside the Sceir Light, an old stone lighthouse on a sea coast on Earth, in a gale, with the door shut and the room quiet. The camera is now held at chest height two paces behind the woman and a little to her right, looking past her right shoulder at the window and the wall beside it. She stands at the left of the frame, seen from behind from the waist up, her hip against the broad stone sill: a small, wiry, straight-backed woman past sixty with short thick iron-grey hair, bareheaded, in a dark moss-green weather coat, its hood lying flat down her back, her arms folded. She looks out through the window at the water, so that only the back of her head, one ear and the line of her jaw can be seen, and no eye and no mouth. Beyond her, in the middle of the frame, is the small square window set deep in the thick limewashed wall, and through its clean glass grey wind-torn sea with white caps under grey cloud. In the right third of the frame, on the curving limewashed wall beside the window at head height, hangs the one plain old mechanical wall clock, sharp and near, kept and going: a round white dial about two hands across under clean glass, in a plain dark wooden case, with two plain dark hands and twelve plain short dark strokes round its edge for the hours. It has no numerals, no name and no lettering, no second hand and no pendulum, and it is lit only by the room. The light is soft, grey and even: daylight from the window, and the room's own quiet light, which comes from nowhere that can be seen. She is the only person: no other person, figure or robot anywhere in frame; the man she is speaking with is behind the camera and no part of him shows. Nothing is in motion. No lamp, bulb, candle, lantern, shade, light fitting, switch, socket or cable anywhere in frame, and nothing glows, the clock least of all. No text, letters, numbers or markings anywhere: no calendar, chart, notice, label or book. No screen, tablet, radio or instrument. No second clock, no digital clock. No kettle, mug, coat hooks, rope, telescope, barometer or nautical ornament, and no picture on the wall. No rust, damp stain, peeling limewash, cobweb, dust or clutter. Outside the window: no boat, no bird, no pier, no building, no sun and no calm sea. No lens flare. Photographed, not rendered: real rough limewash over stone, real cloth, the grain of the clock's wood, slight softness toward the corners, high-ISO grain in the dim parts of the room, muted natural colour.

*Judging line.* The still fails if anything in the room has changed from still 3 but the camera's place: the limewash, the window, her coat and hair, the clock; if her eye or her mouth shows; if the man or any second figure is in frame; if the clock has numerals or lettering, a second hand or a pendulum, or glows; if a lamp or a fitting is in frame; or if anything lettered has appeared.

**Still 5, `d5-register`: the three volumes open (start frame of segment 7).**

> A single frame of documentary footage recorded inside the world by a small 29th-century camera resting on a table, a photograph, 16:9 landscape orientation, available light only, shallow focus. One reference image is attached: it shows a woman in a dark moss-green coat in a limewashed stone room. Take from it only the cloth and colour of her coat sleeve and the room's soft grey light; nothing else of it is in this frame, not the window, the clock or her figure. The scene: the year 2826, early autumn, late afternoon, the room at the foot of the stair inside the Sceir Light, an old stone lighthouse on a sea coast on Earth. The camera rests on the near edge of a plain heavy old timber table, a hand's height above its scrubbed pale top, looking across it. Three thick old bound books lie open on the table side by side in one row from left to right, a register in three volumes, filling the width of the frame. They are old and kept: plain dark cloth boards worn smooth, sound spines, thick cream pages with clean edges, each page ruled in a few narrow columns. On the open right-hand page of the middle volume rests a woman's hand, coming in from the right edge of the frame: a weathered hand past sixty with short plain nails, the cuff of a dark moss-green coat sleeve at the wrist, its forefinger out and its tip resting near the top of the narrowest column at the page's outer edge. Only the hand and the cuff are in frame, and no more of her. The plane of focus lies on the near edge of the table and the near corners of the books' boards, which are sharp. The hand and all the open pages lie just beyond it and are soft: the columns are soft pale lines and the entries are rows of faint soft grey marks, too soft to be writing, so that no letter, numeral, word, initial or date can be read anywhere, on any page, at any size. Beyond the books the limewashed wall is a pale blur. The light is soft, grey and even, from a window out of frame to the left and from the room itself; nothing in frame is a source of light. It is the only hand: no other hand, arm, person, figure or robot anywhere in frame. Nothing is in motion. No legible text of any kind: no title on a board or a spine, no gilt lettering, no page number, no printed heading, no label, no stamp. No lamp, candle, bulb or light fitting, and nothing glows. No pen, pencil, stylus, inkwell, blotter, ruler, spectacles, magnifying glass, bookmark, ribbon, loose slip or paper clip. No cup, plate, key, tool, screen, tablet or instrument on the table. No stains, foxing, torn or curled pages, mould, dust, cobweb or clutter. No lens flare. Photographed, not rendered: real paper with its tooth, real worn cloth, the grain of the scrubbed table, a normal lens close to its subject with a shallow depth of field, high-ISO grain, muted natural colour.

*Judging line.* Read at full size, every page of every volume. The still fails if any letter, numeral, word, initial or date can be read anywhere, or a board or a spine carries a title; if there are more or fewer than three volumes, or any is shut; if there is a second hand, or more of her than the hand and the cuff; if the cuff is not dark green; if a pen, spectacles, a lamp or any object but the books is on the table; if the books are stained, torn, foxed or dusty; or if anything glows. Rows of soft grey marks that cannot be read pass. Among takes that pass, keep the one whose pages are softest.

**Still 6, `d5-lantern-dark`: the lantern from the seaward rail, between flashes (start frame of segments 8 to 10).**

> A single frame of documentary footage recorded inside the world by a small fixed 29th-century camera, a photograph, 16:9 landscape orientation, available light only, deep focus. Two reference images are attached. The first shows a whitewashed lighthouse at the end of a shingle spit from far off by day: take from it the tower's plain rough whitewash and its plain squat build. The second shows a small old lighthouse lantern close by at dusk, lit: take from it only the form of the lantern, a round drum of tall clear glass panes under a small plain dark cap, and the deep blue-grey of the dusk; leave out its light, its beam, its rust, its calm water and everything else in it. The scene: the year 2826, early autumn, dusk, the gallery at the top of the Sceir Light, an old stone lighthouse on a sea coast on Earth, in a southwest gale. The camera is fixed to the rail on the seaward side of the gallery at chest height, looking back and a little up at the lantern, four paces away. The lantern stands in the exact centre of the frame and fills about half of the frame's height: a round drum of tall clear glass panes held in slim plain dark bars, standing on the top of the whitewashed tower under a small plain dark domed cap, all of it sound, clean and kept. Inside the glass, dim, is the lamp's one large glass lens on its frame, unlit toward the camera. The lantern is dark at this instant, between flashes: no light is in it, and its glass shows only the dusk sky through it and across it. Below the lantern, across the bottom of the frame, are the curved top of the whitewashed tower wall and the narrow stone floor of the gallery, wet with blown spray. Behind and around the lantern the sky is a deep blue-grey dusk with torn darker cloud driven across it, and fine spray is on the air. Nobody is in frame: no person, figure, hand or robot on the gallery or inside the lantern, and no bird. Nothing is in motion. Nothing is lit and nothing glows: no light in the lantern, no beam, no ray, no cone of light, no glow on the cloud, no lit window, no indicator, no lamp on the gallery. No text, letters, numbers, plaques or markings anywhere. Nothing is fixed to the lantern or the tower: no antenna, mast, dish, aerial, solar panel, camera, loudspeaker, floodlight, cable or conduit, no weather vane, no ornate finial, no flag. No red tower, no red-and-white bands, no stripes. No rust streaks, peeling paint, cracked glass, bird droppings or grime. No stars, no moon, no sun, no lightning, no aircraft. No lens flare. Photographed, not rendered: real rough limewash over stone, real old glass with the faintest waviness, wet stone, a moderately wide lens with slight softness toward the corners, high-ISO grain heavier in the dark sky, a touch under-exposed, muted natural colour.

*Judging line.* The still fails if the lantern is lit at all, or a beam, a ray or a glow shows anywhere; if the lantern is off the frame's centre, or cut by its edge; if a person, a figure or a bird is in frame; if anything is fixed to the lantern or the tower that the prompt refuses, an antenna or a panel above all; if the tower is banded or red; if rust, grime or cracked glass shows; or if stars, a moon or a sunset show. Among takes that pass, keep the one whose glass is plainest and darkest, since the clip is that glass filling with light.

**Still 7, `d5-lantern-lit`: the same frame at the height of a flash (held back; an edit of the kept still 6).** It is made only if segment 8 fails twice, and is then the start frame of a re-staged segment 8 that asks the lit lantern to go dark, flash once and stay dark.

> Edit the attached image, which is the frame to change, and keep everything else as it is: the same fixed camera at the gallery rail, the same lantern in the exact centre of the frame, its round drum of tall clear glass panes in slim dark bars under its small plain dark cap, the same whitewashed tower top and wet stone gallery floor below it, the same deep blue-grey dusk and torn cloud, the same spray on the air. Change one thing only: the lantern is lit, at the height of one flash. The whole drum of glass is full of strong, steady, warm-white light from the lens inside it, bright enough that the lens itself is lost in the light, and the glazing bars stand dark against it. A little of that light lies on the wet stone floor of the gallery just below the lantern and on the fine spray close to the glass, and nowhere else. No beam, ray, shaft or cone of light is drawn in the air, and no light reaches the clouds. Add nothing else: no person, no bird, no second light, no glow in the sky, no star-shaped glare, no lens flare, no light streaks, no text, and nothing new fixed to the lantern or the tower. The sky stays the same dusk and does not brighten.

*Judging line.* The still fails if anything but the lantern's light and its spill on the floor and the near spray has changed from still 6; if a beam, a ray, a cone or a star-shaped glare is drawn; if the sky has brightened or the cloud is lit; or if the light is coloured.

**Still 8, `d5-stair`: the attendant stopped on the stair, her back to the lens (start frame of segments 11 and 12).**

> A single frame of documentary footage recorded inside the world by a small hand-held 29th-century camera, a photograph, 16:9 landscape orientation, available light only, in very low light. One reference image is attached: it shows a woman from behind at a window in a limewashed stone room. Take from it only the woman as seen from behind, her short thick iron-grey hair, her build and her dark moss-green coat with its hood lying flat down her back, and the rough limewash of the stone; nothing else of it is in this frame, not the window, the sea or the clock. The scene: the year 2826, early autumn, after dusk, the stair inside the Sceir Light, an old stone lighthouse on a sea coast on Earth, in a gale. The camera is held at chest height by someone standing on the stair, looking down it. The stair is of worn grey stone steps, clean and sound, built against the inside of the tower's thick round wall and curving gently away to the left as it goes down, with the limewashed wall on its right and one plain smooth dark rail fixed along that wall. It is nearly dark. The only light is the last grey dusk through one small deep window slit in the wall farther down, and a faint soft light coming up round the curve from the room below; the limewash holds a little of both, and the rest is deep shadow with detail still in it. Five steps below the camera, in the exact centre of the frame, a woman has stopped on the stair, seen wholly from behind and from above: small, wiry and straight-backed, past sixty, with short thick iron-grey hair, bareheaded, in a dark moss-green weather coat cut to the hip, its hood lying flat down her back, over plain dark trousers and plain short dark boots. Her right hand rests on the rail. Her head is bent a little down the stair, toward someone below her who is out of sight round the curve, so that only the back of her head and the top of one ear can be seen. She is the only person: no other person, figure, shadow of a person or robot anywhere in frame, above her, below her or on the wall. No face is seen. Nothing is in motion. Nothing glows: no lamp, torch, lantern, candle, bulb, strip light, light fitting, switch or lit sign on the stair, nothing in her hand, and no flash of light from above. No text, letters, numbers, signs or markings anywhere. No rope handrail, no iron spiral stair, no open metal treads, no ladder. No pipes, cables, conduits, boxes, hooks, tools, buckets or stores on the stair. No rust, damp stain, peeling limewash, cobweb, dust or litter. No lens flare. Photographed, not rendered: real worn stone, real rough limewash, real cloth, a moderately wide lens held by hand, heavy high-ISO grain in the dark, a little soft, under-exposed, muted natural colour.

*Judging line.* The still fails if any part of her face shows beyond the top of an ear; if she is climbing toward the lens, or is side-on; if a second person, a shadow of one or a robot is in frame; if a lamp, a torch, a fitting or anything lit is on the stair or in her hand; if the stair is an iron spiral, open treads or a ladder; if pipes, cables or stores are on it; if her coat is not the dark green coat of still 4 with its hood down; or if the frame is too dark to show her back and the steps. Among takes that pass, keep the one with the most step visible below her, since she goes down it.

**Still 9, `d5-shore`: the spit from the gallery at dusk, the far line with its three lights (start frame of segment 13).**

> A single frame of documentary footage recorded inside the world by a small fixed 29th-century camera, a photograph, 16:9 landscape orientation, available light only, deep focus. Two reference images are attached. The first shows, small on the water at dusk, one long low dark hull-shaped form with three small lights along it, beside a whitewashed lighthouse: take from it only that far form with its three lights, and the deep blue-grey of the dusk; leave out its lighthouse, its lit lantern, its beam, its rust and its calm water. The second shows a long shingle spit in a gale by day, with three walkers on it: take from it only the spit's pale shingle and dark wet stones and the grey wind-torn sea; nobody is in this frame. The scene: the year 2826, early autumn, dusk, on a falling tide in a southwest gale, seen from the gallery at the top of the Sceir Light, an old whitewashed stone lighthouse at the seaward end of a long shingle spit on a sea coast on Earth. The camera is fixed to the rail on the landward side of the gallery, looking down and out along the spit toward the shore. Across the bottom of the frame runs the top of the gallery's low whitewashed stone parapet with one plain dark rail along it, wet with spray, sound and clean, a little out of focus. Below and beyond, from the bottom centre of the frame, the spit runs straight away from the foot of the tower toward the land, the better part of a kilometre long, narrowing with distance: a rough natural spine of pale shingle, never a made path, and on both sides of it, uncovered by the falling tide, broad dark margins of wet stones and weed. The sea lies on both sides of the spit: on the right, the windward side, short, steep and white-capped, with spray torn off the wave tops and blown low across the stones to the left; on the left, flatter, in the lee. At its far end the spit meets a long low shore of bare shingle with low dark land behind it, hazed by spray and the failing light, and nothing is built anywhere on that shore. Far off on the flatter water to the left of the spit, small and soft with distance, lying along the line where the sea meets the far shore, is one long low smooth dark hull-shaped form with exactly three small steady warm lights spaced along its waterline, and nothing else on it: no tower, no mast, no crane, no building. The sky is a deep blue-grey dusk with torn darker cloud driven across it, and no colour of sunset. Nobody is in frame: no person, figure or robot on the spit, on the shore or on the gallery, and no animal or bird. Nothing is in motion. Nothing glows but those three small far lights: no beam or light from the lantern above, no lit window, no lamp on the gallery, no light on the shore. No text, letters, numbers, signs or markings anywhere. Nothing on the water but that one far form: no boat, no ship, no buoy, no rock with a beacon. Nothing built on the spit or the shore: no house, cottage, shed, pier, jetty, harbour wall, road, path, fence, post, pylon, turbine, mast or street light. No wave breaks over the spit, and the sea is never calm. No stars, no moon, no sun, no lightning, no aircraft. No rust, cracked render, stains or litter on the parapet or the rail. No lens flare. Photographed, not rendered: real shingle with its separate stones, real broken water and blown spray, real wet limewash, a moderately wide lens stopped down for deep focus, high-ISO grain heavier in the dark sky, a touch under-exposed, muted natural colour.

*Judging line.* Century first: the far hull form is the one thing in frame that says it. The still fails if that form is missing, is a pier, a row of buildings, a ship with masts, a tower or a harbour, is near enough to show structure, or carries more or fewer than three lights; if anything else is on the water; if anything is built on the spit or the shore; if a person, a figure or a bird is in frame; if the lantern's light or a beam shows; if the spit is a made causeway; if the sea is calm, or a wave breaks over the spit; or if the sky has sunset colour, stars or a moon.

**Desktop steps for the stills** (Opus; nothing below has been run). From the root of the clone, in this order, four takes a round and two rounds at most for each still. `<SA>`, `<RA>`, `<RB>` and `<LD>` are the kept takes of `d5-spit-a`, `d5-room-a`, `d5-room-b` and `d5-lantern-dark`, for example `F:\CLAUDE\Director films\D5\stills\d5-spit-a\v2.jpg`.

```
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-spit-a.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-spit-a" --n 4 --aspect 16:9 src/images/chapters/s01e01c03.jpg
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-spit-b.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-spit-b" --n 4 --aspect 16:9 "<SA>" src/images/chapters/s01e01c03.jpg
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-room-a.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-room-a" --n 4 --aspect 16:9 src/images/characters/galahad-thorne.jpg src/images/chapters/s01e00c10.jpg
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-room-b.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-room-b" --n 4 --aspect 16:9 "<RA>"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-register.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-register" --n 4 --aspect 16:9 "<RB>"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-lantern-dark.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-lantern-dark" --n 4 --aspect 16:9 "<SA>" src/images/chapters/s01e00c10.jpg
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-stair.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-stair" --n 4 --aspect 16:9 "<RB>"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-shore.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-shore" --n 4 --aspect 16:9 src/images/chapters/s01e00c10.jpg "<SA>"
```

Held back, and run only if segment 8 fails twice:

```
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D5/stills/d5-lantern-lit.txt" --out "F:/CLAUDE/Director films/D5/stills/d5-lantern-lit" --n 4 --aspect 16:9 "<LD>"
```

Each round is judged by the image critic against the still's line above before the next still is made. A second round is an edit of the first round's best take, naming only the faults and saying *keep everything else as it is*. A still that fails twice on one cause is re-staged here before a third round. The kept take is uploaded to Imagine as the start frame of its segment, at 16:9.

**Prompts to paste, each as one line, with its start frame attached.** Enter sends in that box, so each segment goes in as one paragraph. Every prompt stands alone, extensions included, since Imagine sees one prompt at a time and an extension is not known to carry anything over but its start frame. Each opens with what must not move, and each describes its start frame as well as its motion, so that Imagine is told twice what must not change. The shared preamble and the shared negative travel inside each prompt, cut to what has mattered: footage recorded inside the world from a named mount, one unbroken take, the brief's light and no other, nothing lettered, the count of people named.

**Segment 1, the walk out (image-to-video from still `d5-spit-a`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it. The whitewashed tower at the far end of the spit does not move, grow, lean or change at any moment of the take, its lantern stays unlit, and the camera is fixed: no pan, no tilt, no zoom, no advance. Footage recorded inside the world by a fixed camera set on the shingle at the shore end of a long shingle spit, 16:9, one unbroken take, no cut, the frame alive only with the buffeting of the wind on the mount. The year 2826, early autumn, late afternoon, a sea coast on Earth, on a falling tide in a southwest gale that blows hard from the left without a break; grey late light under torn cloud is the only light. A narrow rough spit of pale shingle and dark wet stones runs straight out from the camera to one plain round whitewashed lighthouse tower, broad and squat, with one dark door at its foot facing the camera; the sea is on both sides, short, steep and white-capped on the left and flatter on the right. Far out along the spit, small in the middle of the frame, three walkers go away from the camera, seen wholly from behind: a man in a grey-green field coat whose skirts stream out to the right, a tall slight woman in dark close clothing whose dark hair streams to the right, and a broad boxy grey-khaki robot as tall as the man; all three lean well over to the left into the wind. The one motion: the three walk steadily on along the spit toward the tower, straight away from the camera, leaning the whole way, and grow slowly smaller. They do not stop, turn, look back, spread apart or walk side-on, and none of them straightens up. The wind is in everything else: spray torn off the wave tops on the left and blown low across the stones to the right, the cloud driven fast, the coat and the hair streaming. They are the only three figures: no other person, figure or animal anywhere in frame at any moment. Sound: the gale, loud and continuous, and the sea on the shingle; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows: no light in the lantern, no beam. Nothing on the water and nothing on the horizon: no boat, no buoy, no bird. Nothing built but the tower. No wave breaks over the spit, the sea is never calm, the wind never drops and the sun does not come out. No lens flare.

*Fails if* the tower moves, grows or changes; the camera pans, zooms or follows; a walker turns, stops, shows a face or a profile, or straightens up out of the wind; there are more or fewer than three figures at any moment; the robot's shape changes, or its body comes clear; the lantern lights; the sea calms or the wind drops; anything appears on the water; or a voice or music is heard.

**Segment 2, the gust (extension of segment 1 from its last frame, 10 seconds, no speech).** The first segment to drop if the film runs long.

> Continue from the attached image as the first frame and change nothing in it. The whitewashed tower at the far end of the spit does not move, grow, lean or change at any moment of the take, its lantern stays unlit, and the camera is fixed and never moved: no pan, no tilt, no zoom, no advance. The same unbroken shot from the same fixed camera set on the shingle at the shore end of a long shingle spit, 16:9, no cut, the frame alive only with the buffeting of the wind on the mount. The year 2826, early autumn, late afternoon, a sea coast on Earth, on a falling tide in a southwest gale that blows hard from the left without a break; grey late light under torn cloud is the only light. A narrow rough spit of pale shingle and dark wet stones runs straight out from the camera to one plain round whitewashed lighthouse tower, broad and squat, with one dark door at its foot facing the camera; the sea is on both sides, short, steep and white-capped on the left and flatter on the right. Far out along the spit, small in the middle of the frame, three walkers go away from the camera, seen wholly from behind: a man in a grey-green field coat, a tall slight woman in dark close clothing with dark hair streaming to the right, and a broad boxy grey-khaki robot as tall as the man; all three lean well over to the left into the wind. The one motion: they walk on toward the tower, straight away from the camera, growing a little smaller; once, about halfway through the take, a harder gust from the left pushes all three a half-step to the right together, and they lean farther into it, recover their line and walk on, the way people cross a moving deck. They do not fall, stop, turn, look back or walk side-on. The wind is in everything else: spray blown low across the stones from left to right, the cloud driven fast, the coat and the hair streaming. They are the only three figures: no other person, figure or animal anywhere in frame at any moment. Sound: the gale, loud and continuous, with one harder blast in it, and the sea on the shingle; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows: no light in the lantern, no beam. Nothing on the water and nothing on the horizon: no boat, no buoy, no bird. Nothing built but the tower. No wave breaks over the spit, the sea is never calm, the wind never drops and the sun does not come out. No lens flare.

*Fails if* a walker falls, turns, stops, or shows a face or a profile; the three separate, or one is lost; a fourth figure appears; the tower moves or changes; the camera moves; the lantern lights; a wave covers the spit; or a voice or music is heard. A take in which they only walk on, with no gust to be seen, passes.

**Segment 3, the door already open (image-to-video from still `d5-spit-b`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it. The doorway at the foot of the tower stays open and dark, and no door leaf comes into it, swings or closes at any moment of the take; the small woman standing just inside it does not move from it: she does not step out, wave, turn or unfold her arms; and the tower stays in the exact centre of the frame, upright and unchanged, its lantern unlit. Footage recorded inside the world by a small camera held at chest height by someone walking out along a shingle spit toward a lighthouse, 16:9, one unbroken take, no cut, no pan, no zoom, the frame shaken a little by the wind. The year 2826, early autumn, late afternoon, a sea coast on Earth, on a falling tide in a southwest gale that blows hard from the left; grey late light under torn cloud is the only light. One plain round whitewashed stone lighthouse tower, broad and squat, with a low stone parapet round its gallery and a small glazed lantern at the top, stands at the end of a narrow rough spit of pale shingle; the sea is close on both sides, steep and white-capped on the left and flatter on the right. In its open doorway stands a small straight-backed grey-haired woman in a dark green coat with her arms folded, in the doorway's shade, her face not to be made out. Well ahead of the camera, small in the middle of the frame, three walkers go away from it toward the door, seen wholly from behind: a man in a grey-green field coat, a tall slight woman in dark close clothing with dark hair streaming to the right, and a broad boxy grey-khaki robot as tall as the man; all three lean well over to the left into the wind. The one motion: the camera is carried slowly forward along the spit at a walking pace, so that the tower grows a little in the frame, by about a fifth, staying in the exact centre; the three walkers go on ahead at the same pace, so they keep the same distance from the camera and stay the same size, leaning the whole way. Neither the walkers nor the camera reach the door in this take. The walkers do not turn, stop, look back or walk side-on. Spray is blown low across the stones from left to right and the cloud is driven fast. The woman in the doorway and the three walkers are the only figures: no other person, figure or animal anywhere in frame at any moment. Sound: the gale, loud and continuous, the sea close on both sides, and footsteps in shingle; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows: no light in the lantern, no beam, no lit window, no lamp at the door. Nothing on the water: no boat, no buoy, no bird. Nothing built but the tower. No wave breaks over the spit, the sea is never calm and the sun does not come out. No lens flare.

*Fails if* a door leaf appears, swings or shuts; the woman leaves the doorway, waves or shows a feature of her face; the tower slides off the centre, leans or changes; the camera overtakes the walkers, or they grow much larger; a walker turns or shows a face or a profile; the robot's body comes clear; a fifth figure appears; the lantern lights; or a voice or music is heard. If the walkers reach the door before the tenth second, the take is cut before they do and is not failed for it.

**Segment 4, the noise drops (image-to-video from still `d5-room-a`, 10 seconds, one line begun).** His, once, after the door is heard to shut: *Your clock. The one that times the character.*

> Animate the attached image as its first frame and change nothing in it. The clock on the wall does not change at any moment of the take: its two hands do not visibly move, it does not glow, and nothing on its dial alters; the camera is fixed, with no pan, no tilt and no zoom; and neither person turns toward the lens, so that neither face is ever seen. Footage recorded inside the world by a small camera set on a ledge beside the door of a small round room, at the foot of the stair inside an old stone lighthouse, 16:9, one unbroken take, no cut. The year 2826, early autumn, late afternoon, in a gale; the light is soft, grey and even, daylight from one small deep window and the room's own quiet light from nowhere that can be seen. Thick curving limewashed stone walls, a floor of grey stone flags, one plain bare timber table in the middle of the room, the first steps of a stone stair at the left. At the window opposite, her hip against its broad stone sill, a small straight-backed woman past sixty with short iron-grey hair, in a dark moss-green coat with its hood flat down her back, stands with her arms folded, looking out at the grey sea, her back three-quarters to the camera. On the wall beside the window hangs one plain old wall clock with a white dial, two dark hands and plain strokes for the hours. In the near right of the frame a man stands seen from behind from the waist up, with short greying hair and a dark grey-green field coat, facing her. The sound carries this take: for the first two seconds the gale is loud and close, as through an open door behind the camera; then a heavy timber door is heard to shut, behind the camera and out of frame, and the noise drops at once to a low steady moan of wind in the stone, and stays there. In that quiet the man says once, level and unhurried, without turning his head: "Your clock. The one that times the character." Nothing else is said. The one motion, small: as he speaks, the woman's head lifts a little from the water and settles again, still turned to the window. Otherwise both stand as they are, and beyond the glass the grey sea goes on working. No door is seen in frame at any moment. They are the only two people: no other person, figure or robot anywhere in frame at any moment, on the stair or outside the window. No other voice, no music, no narration, and the line is not shown as a caption. No text, letters, numbers or title. Nothing glows: no lamp, bulb, candle, screen or light fitting appears. Nothing is put on the table. No lens flare.

*Fails if* the clock's hands sweep or jump, or the clock glows; either face is seen, or either person turns to the lens; a door comes into frame; a third person, a figure or a robot appears; a lamp or anything lit appears; any word is spoken but the one line, the line is captioned, or a woman's voice says it; or music is heard. Whether the door is heard to shut is measured as a fall in level in the first three seconds. Whether the line is said, and said once, is for Dermot's ear.

**Segment 5, his question (extension of segment 4 from its last frame, 10 seconds, one line finished).** His, once: *I want to know how often it needs correcting, and I want to know whether anyone has ever written that down.*

> Continue from the attached image as the first frame and change nothing in it. The clock on the wall does not change at any moment of the take: its two hands do not visibly move, it does not glow, and nothing on its dial alters; the camera is fixed and never moved, with no pan, no tilt and no zoom; and neither person turns toward the lens, so that neither face is ever seen. The same unbroken shot from the same small camera set on a ledge beside the door of a small round room, at the foot of the stair inside an old stone lighthouse, 16:9, no cut. The year 2826, early autumn, late afternoon; the door is shut and the room is quiet; the light is soft, grey and even, daylight from one small deep window and the room's own quiet light from nowhere that can be seen. Thick curving limewashed stone walls, a floor of grey stone flags, one plain bare timber table in the middle of the room, the first steps of a stone stair at the left. At the window opposite, her hip against its broad stone sill, a small straight-backed woman past sixty with short iron-grey hair, in a dark moss-green coat with its hood flat down her back, stands with her arms folded, looking out at the grey sea, her back three-quarters to the camera. On the wall beside the window hangs one plain old wall clock with a white dial, two dark hands and plain strokes for the hours. In the near right of the frame a man stands seen from behind from the waist up, with short greying hair and a dark grey-green field coat, facing her. The man goes on speaking, and says once, level and unhurried, without turning his head: "I want to know how often it needs correcting, and I want to know whether anyone has ever written that down." Nothing else is said, and the woman does not answer in this take. Nothing moves in the room while he speaks: both stand as they are, she still turned to the window, and beyond the glass the grey sea goes on working. They are the only two people: no other person, figure or robot anywhere in frame at any moment. Sound: under his voice, the low steady moan of the wind in the stone; no other voice, no music, no narration, and the line is not shown as a caption. No text, letters, numbers or title. Nothing glows: no lamp, bulb, candle, screen or light fitting appears. No door is seen. Nothing is put on the table. No lens flare.

*Fails if* the clock's hands sweep or jump, or the clock glows; either face is seen; she answers, or a woman's voice is heard; any word is spoken beyond the one sentence, or it is captioned; a third person or a robot appears; a lamp or anything lit appears; or music is heard. If the sentence runs past the tenth second and is cut off, the take fails, and the fallback is the same prompt asking for a brisker delivery.

**Segment 6, her answer (image-to-video from still `d5-room-b`, 10 seconds, two lines spoken).** Hers, once: *Everyone writes that down. It's a maintenance record. That's the whole job.* Then, after a pause: *Nobody's ever asked for it.*

> Animate the attached image as its first frame and change nothing in it. The clock on the wall does not change at any moment of the take: its two hands do not visibly move, it does not glow, and nothing on its dial alters; and the woman's face is never seen: no eye and no mouth come into view. Footage recorded inside the world by a small camera held at chest height two paces behind a woman who stands at a window, a little to her right, 16:9, one unbroken take, no cut, no pan, no zoom, only the slight sway of a held camera. The year 2826, early autumn, late afternoon, a small round limewashed stone room at the foot of the stair inside an old lighthouse, the door shut and the room quiet; the light is soft, grey and even, daylight from the window and the room's own quiet light from nowhere that can be seen. At the left of the frame, seen from behind from the waist up, her hip against the broad stone sill, stands a small straight-backed woman past sixty with short thick iron-grey hair, in a dark moss-green coat with its hood flat down her back, her arms folded, looking out through the small deep window at grey wind-torn sea. On the limewashed wall to the right of the window, near and sharp, hangs one plain old wall clock in a dark wooden case, with a white dial, two dark hands and plain strokes for the hours. She speaks to someone behind the camera without turning to him, in a woman's voice past sixty, dry and plain. She says once: "Everyone writes that down. It's a maintenance record. That's the whole job." She is silent for about two seconds. Then she says once, more quietly: "Nobody's ever asked for it." Nothing else is said. The one motion, small and slow: in the silence between the two, her head turns a few degrees to the right, toward the clock on the wall, and then back to the water; it never turns far enough to show her eye or her mouth. Her arms stay folded. She is the only person: no other person, figure or robot anywhere in frame at any moment. Sound: under her voice, the low steady moan of the wind in the stone; no man's voice, no music, no narration, and no line is shown as a caption. No text, letters, numbers or title. Nothing glows: no lamp, bulb, candle, screen or light fitting appears. No lens flare.

*Fails if* her eye or her mouth is seen, or she turns to the lens; the clock's hands sweep or jump, or the clock glows; she unfolds her arms; a second person comes into frame; any word is spoken beyond the two lines, either is captioned, or a man's voice says either; a lamp or anything lit appears; or music is heard. If both lines will not fit, the fallback is two takes from the same still, one line each, joined at the pause.

**Segment 7, the column (image-to-video from still `d5-register`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it. The three open books do not move, no page turns, lifts or curls, and nothing on any page comes into focus or becomes readable at any moment of the take: the pages stay soft, and the entries stay rows of faint grey marks; the camera is fixed, with no pan, no tilt, no zoom and no change of focus. Footage recorded inside the world by a small camera resting on the near edge of a plain old timber table, a hand's height above its top, 16:9, one unbroken take, no cut. The year 2826, early autumn, late afternoon, a quiet limewashed stone room inside an old lighthouse; the light is soft, grey and even, from a window out of frame and from the room itself. Three thick old bound books, kept and clean, lie open side by side in one row across the table, their cream pages ruled in narrow columns, all of it just beyond the plane of focus. On the right-hand page of the middle book rests a woman's weathered hand, past sixty, with the cuff of a dark moss-green coat sleeve at the wrist, its forefinger out, the tip near the top of the narrowest column at the page's outer edge. The one motion, slow and even: the forefinger travels straight down that one column, from near the top of the page to near its foot, pausing a moment once on the way, and comes to rest there; the rest of the hand follows it and nothing else moves. The finger does not tap, point, write, or leave the page, and it turns no page. It is the only hand: no other hand, arm, person or figure anywhere in frame at any moment. Sound: the quiet of the room, the low moan of the wind in the stone, and the faint drag of a fingertip on paper; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title, and no writing becomes legible. Nothing glows: no lamp, candle, screen or light fitting appears. No pen, pencil or stylus appears. Nothing else is put on the table. No lens flare.

*Fails if* any letter, numeral or word can be read in any frame; the focus pulls onto the page; a page turns or a book moves; the finger writes, taps or leaves the page; a second hand, an arm or a face comes into frame; a pen or a lamp appears; anything glows; or a voice or music is heard.

**Segment 8, the first group (image-to-video from still `d5-lantern-dark`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it. The lantern, the tower and the camera do not move at any moment of the take: the lantern stays in the exact centre of the frame, the same size and shape, with no pan, no tilt and no zoom, the frame alive only with the buffeting of the wind on the mount. Footage recorded inside the world by a small camera fixed to the seaward rail of the gallery at the top of an old whitewashed stone lighthouse, looking back and a little up at its lantern, 16:9, one unbroken take, no cut. The year 2826, early autumn, dusk, a sea coast on Earth, in a southwest gale. The lantern is a round drum of tall clear glass panes in slim dark bars under a small plain dark cap, with the lamp's large glass lens dim inside it; below it are the top of the whitewashed tower and the wet stone floor of the gallery; behind it is a deep blue-grey dusk sky with torn cloud driven fast across it, and fine spray on the air. The one motion is the lantern's light, in this order and no other. For about the first second the lantern is dark, as in the first frame. Then the whole drum of glass fills with strong warm-white light for about one second, and goes fully dark. About two seconds later it fills with the same light again for about one second, and goes fully dark. Then it stays dark, as dark as the first frame, to the end of the take. Two flashes only, alike in brightness and in length. Each flash comes up and dies quickly but not in an instant, as a turning lens swings its light past, and at its height the light lies for that moment on the wet floor of the gallery below the lantern and on the spray near the glass, and nowhere else. No beam, ray, shaft or cone of light is drawn in the air at any moment, and the cloud is never lit. Nobody is in frame at any moment: no person, figure, hand or robot on the gallery or inside the lantern, and no bird. Sound: the gale, loud and continuous, and under it one low steady note humming in the lantern glass; no speech, no voice, no music, no narration, no horn, no bell. No text, letters, numbers, captions or title. Nothing glows but the lantern in its two flashes: no other light, no lit window, no indicator. No lightning, no stars, no moon. No lens flare, no star-shaped glare, no light streaks.

*Fails if* the lantern flashes once, three times or more, or stays lit; it glows between or after the flashes; the two flashes differ plainly in length or brightness; a beam, a ray or a cone is drawn, or the cloud lights up; the lantern moves, turns bodily or changes shape; the camera moves; a person or a bird appears; lightning or a flare crosses the frame; or a voice, a horn or music is heard. The moment each flash begins is measured from frames, as *The rhythm* has it. After two failed takes the segment is re-staged from the held-back still `d5-lantern-lit`.

**Segment 9, the dark and the second group (extension of segment 8 from its last frame, 10 seconds, no speech).**

> Continue from the attached image as the first frame and change nothing in it. The lantern, the tower and the camera do not move at any moment of the take: the lantern stays in the exact centre of the frame, the same size and shape, with no pan, no tilt and no zoom, the frame alive only with the buffeting of the wind on the mount. The same unbroken shot from the same small camera fixed to the seaward rail of the gallery at the top of an old whitewashed stone lighthouse, looking back and a little up at its lantern, 16:9, no cut. The year 2826, early autumn, dusk, a sea coast on Earth, in a southwest gale. The lantern is a round drum of tall clear glass panes in slim dark bars under a small plain dark cap, with the lamp's large glass lens dim inside it; below it are the top of the whitewashed tower and the wet stone floor of the gallery; behind it is a deep blue-grey dusk sky with torn cloud driven fast across it, and fine spray on the air. The one motion is the lantern's light, in this order and no other. For about the first five seconds, half of the take, the lantern stays dark, as in the first frame, and only the cloud and the spray move. Then the whole drum of glass fills with strong warm-white light for about one second, and goes fully dark. About two seconds later it fills with the same light again for about one second, and goes fully dark. Then it stays dark to the end of the take. Two flashes only, alike in brightness and in length, and none in the first half of the take. Each flash comes up and dies quickly but not in an instant, and at its height the light lies for that moment on the wet floor of the gallery below the lantern and on the spray near the glass, and nowhere else. No beam, ray, shaft or cone of light is drawn in the air at any moment, and the cloud is never lit. Nobody is in frame at any moment: no person, figure, hand or robot, and no bird. Sound: the gale, loud and continuous, and under it one low steady note humming in the lantern glass; no speech, no voice, no music, no narration, no horn, no bell. No text, letters, numbers, captions or title. Nothing glows but the lantern in its two flashes. No lightning, no stars, no moon. No lens flare, no star-shaped glare, no light streaks.

*Fails* as segment 8 does, and if the lantern lights in the first four seconds, since the dark before the group cannot then be stretched to the interval. A take whose group comes late, with less than a second of dark after it, passes if both flashes are whole.

**Segment 10, the dark, and the light again (extension of segment 9 from its last frame, 10 seconds, no speech).** The film leaves this shot on the first lit frame. The third segment to drop if the film runs long.

> Continue from the attached image as the first frame and change nothing in it. The lantern, the tower and the camera do not move at any moment of the take: the lantern stays in the exact centre of the frame, the same size and shape, with no pan, no tilt and no zoom, the frame alive only with the buffeting of the wind on the mount. The same unbroken shot from the same small camera fixed to the seaward rail of the gallery at the top of an old whitewashed stone lighthouse, looking back and a little up at its lantern, 16:9, no cut. The year 2826, early autumn, dusk deepening, a sea coast on Earth, in a southwest gale. The lantern is a round drum of tall clear glass panes in slim dark bars under a small plain dark cap, with the lamp's large glass lens dim inside it; below it are the top of the whitewashed tower and the wet stone floor of the gallery; behind it is a deep blue-grey dusk sky with torn cloud driven fast across it, and fine spray on the air. The one motion is the lantern's light, and it comes only at the very end. For nearly the whole take the lantern stays dark, as in the first frame, and only the cloud and the spray move. Then, in the last second of the take, the whole drum of glass fills once with strong warm-white light, and the take ends with the lantern lit. One flash only, at the end, and none before it. At its height the light lies on the wet floor of the gallery below the lantern and on the spray near the glass, and nowhere else. No beam, ray, shaft or cone of light is drawn in the air at any moment, and the cloud is never lit. Nobody is in frame at any moment: no person, figure, hand or robot, and no bird. Sound: the gale, loud and continuous, and under it one low steady note humming in the lantern glass; no speech, no voice, no music, no narration, no horn, no bell. No text, letters, numbers, captions or title. Nothing glows but the lantern at the end. No lightning, no stars, no moon. No lens flare, no star-shaped glare, no light streaks.

*Fails if* the lantern lights before the seventh second; a beam or a cone is drawn; the lantern or the camera moves; a person or a bird appears; or a voice or music is heard. A take that stays dark to its end passes as a hold: the film then leaves the shot in the dark, and the third group is not shown.

**Segment 11, on the stair (image-to-video from still `d5-stair`, 10 seconds, one line begun).** Hers, once: *Because it's lit. That's the whole of it.*

> Animate the attached image as its first frame and change nothing in it. The woman stays where she is on the stair for the whole take, five steps below the camera in the exact centre of the frame, her back to the lens: she does not turn round, climb, sit or go on down in this take, and her face is never seen; and the stair stays as dark as it is, with no light coming on. Footage recorded inside the world by a small camera held at chest height by someone standing on a stone stair inside an old lighthouse, looking down it, 16:9, one unbroken take, no cut, no pan, no zoom, only the slight sway of a held camera. The year 2826, early autumn, after dusk, in a gale shut out by thick stone. Worn grey stone steps curve gently away to the left as they go down, against the inside of a thick round limewashed wall with one plain dark rail along it. It is nearly dark: the only light is the last grey dusk through one small deep window slit farther down, and a faint soft light coming up round the curve from the room below. The woman is seen wholly from behind and from above: small and straight-backed, past sixty, with short thick iron-grey hair, in a dark moss-green coat with its hood flat down her back, one hand on the rail, her head bent a little down the stair toward someone below her who is out of sight round the curve. She speaks down the stair to that person, without turning, in a woman's voice past sixty, dry and plain, and says once: "Because it's lit. That's the whole of it." Nothing else is said, and nobody answers. The one motion, small: her head lifts and settles a little as she speaks, and her hand shifts on the rail. She is the only person: no other person, figure, shadow of a person or robot anywhere in frame at any moment, above her or below her. Sound: one low steady note, felt as much as heard, coming down the stair from the glass far above, with the gale faint behind the stone; under it her voice; no other voice, no music, no narration, and the line is not shown as a caption. No text, letters, numbers or title. Nothing glows: no lamp, torch, lantern, candle, bulb or light fitting appears, nothing is in her hand, and no flash of light comes down the stair. No lens flare.

*Fails if* she turns round, or any part of her face beyond an ear is seen; she goes on down or climbs toward the lens; a second person, a shadow of one or a robot appears; a light comes on, or a flash comes down the stair; any word is spoken but the one line, it is captioned, or another voice answers; or music is heard. Whether the low note is there is measured as a steady level under the voice, and is for Dermot's ear.

**Segment 12, a favour (extension of segment 11 from its last frame, 10 seconds, one line finished).** Hers, once: *A light you only put on when you know someone's out there isn't a light. It's a favour.*

> Continue from the attached image as the first frame and change nothing in it. The woman's face is never seen at any moment of the take: she does not turn round, look back or climb toward the lens; and the stair stays as dark as it is, with no light coming on. The same unbroken shot from the same small camera held at chest height by someone standing on a stone stair inside an old lighthouse, looking down it, 16:9, no cut, no pan, no zoom, only the slight sway of a held camera, which does not follow her. The year 2826, early autumn, after dusk, in a gale shut out by thick stone. Worn grey stone steps curve gently away to the left as they go down, against the inside of a thick round limewashed wall with one plain dark rail along it. It is nearly dark: the only light is the last grey dusk through one small deep window slit farther down, and a faint soft light coming up round the curve from the room below. Five steps below the camera, in the centre of the frame, stands a small straight-backed woman past sixty, seen wholly from behind and from above, with short thick iron-grey hair, in a dark moss-green coat with its hood flat down her back, one hand on the rail, her head bent a little down the stair toward someone below her who is out of sight. Still standing there, without turning, she goes on speaking down the stair, in a woman's voice past sixty, dry and plain, and says once: "A light you only put on when you know someone's out there isn't a light. It's a favour." Nothing else is said, and nobody answers. Then the one motion: when she has finished, she goes on down the stair, unhurried, straight away from the lens, her hand sliding along the rail, three or four steps, growing a little smaller, her back to the lens the whole way. She is the only person: no other person, figure, shadow of a person or robot anywhere in frame at any moment. Sound: one low steady note, felt as much as heard, coming down the stair from the glass far above, with the gale faint behind the stone; under it her voice, and then her soft footfalls on stone; no other voice, no music, no narration, and the line is not shown as a caption. No text, letters, numbers or title. Nothing glows: no lamp, torch, lantern, candle, bulb or light fitting appears, nothing is in her hand, and no flash of light comes down the stair. No lens flare.

*Fails if* she turns round, or her face is seen; she walks down before she has finished speaking, or comes back up; a second person or a robot appears; a light comes on; any word is spoken beyond the one line, it is captioned, or another voice answers; or music is heard. If she shows her profile as she rounds the curve, the take is cut before that and is not failed for it. If the line runs past the tenth second and is cut off, the take fails, and the fallback is the same prompt with the walk taken out.

**Segment 13, the spit at dusk (image-to-video from still `d5-shore`, 10 seconds, no speech).** The film ends on this take's last frame.

> Animate the attached image as its first frame and change nothing in it. The far dark form on the water and its three small lights do not move or change at any moment of the take: the form never comes nearer, grows, turns, sails or resolves, and its lights never blink, brighten or multiply; the parapet, the spit and the far shore stay as they are; and the camera is fixed, with no pan, no tilt and no zoom, the frame alive only with the buffeting of the wind on the mount. Footage recorded inside the world by a small camera fixed to the landward rail of the gallery at the top of an old whitewashed stone lighthouse, looking down and out along a shingle spit toward the shore, 16:9, one unbroken take, no cut. The year 2826, early autumn, dusk, a sea coast on Earth, on a falling tide in a southwest gale that blows hard from the right. Across the bottom of the frame runs the top of a low whitewashed stone parapet with one plain dark rail, wet with spray. Below, a long narrow spit of pale shingle runs straight away from the foot of the tower to a low bare shore, with broad dark margins of wet stones and weed uncovered on both sides of it. The sea is short, steep and white-capped on the right of the spit and flatter on the left. Far off on the flatter water to the left, small and soft with distance, lies one long low dark hull-shaped form with three small steady warm lights along its waterline. The sky is a deep blue-grey dusk with torn cloud driven across it. The one motion is the sea and the wind: on the right the waves run in along the wet stones and fall back, each a little short of the dry shingle, and spray is torn off their tops and blown low across the spit to the left; the cloud is driven fast. Nothing else moves. Nobody is in frame at any moment: no person, figure or robot on the spit, the shore or the gallery, and no animal or bird. Sound: the gale, loud and continuous, the sea below, and one low steady note humming in the glass above the camera; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows but the three small far lights: no beam or flash from the lantern above, no lit window, no light on the shore. Nothing on the water but the one far form: no boat, no buoy. Nothing built on the spit or the shore. No wave breaks over the spit, the sea is never calm and the wind never drops. No stars, no moon, no lightning. No lens flare.

*Fails if* the far form moves, grows, resolves into a building, a pier or a ship, or gains or loses a light; anything else appears on the water or the shore; a person, a figure or a bird appears; a beam or a flash crosses the frame; the camera moves; a wave covers the spit, or the sea calms; or a voice or music is heard.

**Judging the film.** Each take is read from frames at 0, 5 and 9 seconds against its still and against its own line above, by the 8 October method, and each join is watched for a jump. A state that has moved from where the still put it fails the take whatever else holds: the tower, the open door, the clock, the books, the lantern's place, the far line. The lantern takes are also measured frame by frame, as *The rhythm* has it, and the interval is set in the cut and stated beside the cut. The sound is Grok's own and is measured, not heard: the fall in level in segment 4 and the level shape of each spoken line are recorded, and the words are for Dermot's ear. The assembled chain is then held to the brief's own judging line, unchanged, with one reading of it: the brief counts *the four given* lines, and two of the four are each said across a join. Two takes a segment before it is re-staged here, and the run goes on as his word above has it. Generation is a desktop step on Opus; the kept takes, the alternates and the prompts as run are recorded in the table.

**Open at the time of writing, offered to Dermot as readings.** None blocks the run, and each has the chain's own answer until he gives another.

1. **The room's lamp.** Taken out, as the first look reading has it; or one plain lamp in the century's form, added to the room still as an edit.
2. **The clock's place and face.** On the wall of the room at the foot of the stair, with strokes for the hours, as written; or out of frame altogether, the film then showing no clock and only speaking of one. The record does not say where the clock hangs.
3. **Whose finger is on the column.** The attendant's, as written; or Thorne's.
4. **Whether Imagine can light a dark lantern twice and leave it dark.** If it cannot in two takes, segment 8 is re-staged from the held-back lit still. If neither holds, the group is assembled in the cut from one dark take and one lit take of the same fixed frame, and the film says so in its notes.
5. **The interval is set in the cut.** As written, with only the dark retimed and by no more than a fifth; or the film shows whatever interval the takes give, which the brief's judging line would fail if it is not steady.
6. **The length of a flash and the gap inside a group** are the chain's, about one second and about two. The record gives neither.
7. **The third group as the cut.** The film leaves the lantern on the first lit frame of a third group, as written; or holds the shot in the dark after the second group.
8. **The station in the room's window.** A far hull form is asked for in still 3 as the room's hint of the century. On 10 November the same hint drew as a present-day pier in her portrait, from a reference since replaced. If it fails twice, the window holds only sea.
9. **The two colleagues are kept out of the room, the stair and the gallery,** where the chapter has them. The other reading keeps Rook-7 in the room as a figure from behind at the door, which the brief's *at a distance* does not allow in a room five paces across.
10. **Two lines are each said across a join.** If a join is heard as a break, each is run as one clip of 15 seconds, which the 10-second rule of the method does not allow without his word.
11. **The door's shutting is heard and not seen.** As written; or segment 4 opens with the room already quiet, and the brief's *the noise drops* is given up.
12. **The last shot is empty.** As written; or the three go back along the spit, small and from behind, which the chapter's last line supports and the brief's shot 7 does not ask for.
13. **Her line on the stair has no question before it.** The chapter's question is Rook-7's and is not among the brief's lines, so the answer is heard alone.
14. **The parapet and its rail.** One low stone parapet with a plain rail, as written, where the two filed frames of the tower differ.
15. **The grounding line that names `nuala-beirne.jpg`** is out of date since 10 November. A one-line dated note under the brief is offered, as was done for D7's two lines.
16. **The length.** 130 seconds for the brief's 120, inside its accepted 100 to 150. Dropping segment 2 gives 120.

**Versions.**

| Segment | Take | Date | Start frame | Verdict | Used |
|---|---|---|---|---|---|

Nothing has been generated: no still and no take.

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

**Status, 19 November 2026: under rethink, with a choice that is his.** Dermot, verbatim: *"Whereas 'Nothing Taken' and 'Lunasa - a film' need a rethink, please."* Under *Rethink, 19 November 2026* at the end of this entry are two shapes: (a) retire D7 and let *The Long White Trail* stand as the film of Lúnasa and the ring, or (b) a new brief on the record's own Lúnasa, one room, the clock room, with forty seconds waited out in the film's running time. (b) is recommended, behind one proof shot, and is written in full. The choice is indexed in `open-questions.md`. Nothing has been generated, and rough cut 3 stays filed until he picks. **Ruled the same day, his *"As recommended"*: (b), behind one proof shot.** The wall shot with its digits is made first, alone (a desktop step; the digits set by `scripts/set-readouts.py`, never generated); if the forty seconds cannot be put on screen exactly, the film stops at one clip and (a) stands.

**Proof shot run, 19 November 2026 (Opus): passed, so (b) goes on.** Segment 3 was made first and alone, as ruled.

- *Stills, on Gemini.* `d7r-room`: three takes in round 1. All failed: the two panels were of different sizes, a cheek showed, one take had screw heads and one a third panel. Round 2 was an edit of the best take that named only those faults, and its second take was kept. Still owed on it: a sliver of cheek shows, and the surfaces read a little smooth. `d7r-wall`: three takes from that master, and the second was kept. Its panels are level, the same size, square to the frame and blank. The stills are kept outside the repository with the takes.
- *Takes, on Grok.* Two takes of the segment 3 prompt as written, and two more with the mount named (*"locked off, bolted to the opposite wall … does not move, push in, zoom, drift"*). In all four the camera pushes in by about 3% over the ten seconds, smoothly, and a panel's corners move 13 to 20 pixels. Naming the mount did not stop it. So as run, every take fails the creep line above.
- *Stabilised and set.* `scripts/set-readouts.py video TAKE --stabilise --crop 20,11` warps each frame back onto the first by a whole-frame affine fit, sets the digits, and trims the black edges it leaves. On take C the wall then holds within a pixel. The left panel turns 04:00:00 at 8.000 seconds (frame 192), the right reads 03:59:20 on that frame, and every reading in between is exact. The forty seconds can be put on screen exactly, which was the one risk.
- *A fault in the takes, for the next round:* at its brightest the violet fills the whole glass of the sight port as a halo, not a point the size of a pea (judging line 2). The segment prompts should say the glass stays dark around the point.
- *Owed before the film:* the Opus physics read of the port view and then `d7r-port`; nine clips, each wall and room take stabilised the same way; the voice take; and the cut.

**The film, cut 19 November 2026 (Opus): *Lúnasa*, rethink v1, 1:30.** It is made from the brief above, and nothing was generated outside it. The files are kept outside the repository with the takes, and nothing is filed. Whether this film replaces rough cut 3 or is filed beside it is his choice.

- *The port, after the Opus read.* From geostationary height the Earth's disc is about 17° across. A 2 km habitat on the far half of the ring, about 80,000 km off, comes to roughly magnitude −1 to +1, depending on phase. An exposure that holds the sunlit Earth is a daylight exposure, and it records nothing that faint, just as the Apollo frames show no stars. So the port shows the Earth alone, as the brief's own fallback allows. `d7r-port` came from three takes, and the first was kept: ocean under broken cloud, no stars and no thread of light. The other two were rejected, one for a green cast on the surround and one for an Earth drawn too small.
- *Takes.* Every take was run with the mount named and with *the glass staying dark around the point*. The room chain (1 → 2 → 6 → 9) was run from chain frames: each segment's last frame, warped back onto its first frame's geometry, with the edge that leaves filled from the first frame, so the chain never inherits a push-in. The wall segments (3, 4, 7, 8) are four separate takes from `d7r-wall`. Segment 5's first take pushed in 35% (a zoom, with the Earth growing along with the port), and Grok's agent turned the second submission into an image edit; the third, run as a held shot, is kept. Every take pushed in 2 to 6% and was stabilised. At its peak the violet still fills the glass of the sight port. That is against the prompt, but it is inside the glass, so none of the judging lines is met.
- *Readouts.* `set-readouts.py video --stabilise --crop 20,11` was run on every segment (the port shot was cropped 110,62). Room shots use `--occlude`, so the digits pass behind the officer and are never drawn over them, and `--grain 2`. Measured on the cut: the left panel turns 04:00:00 at 0:28 exactly, and the right panel turns it at 1:08 exactly. Every reading in between is continuous across the joins.
- *Voice.* Grok's voice runs about eight seconds to a sentence, so the three sentences could not share one ten-second clip; that take was cut off in the second sentence. Sentence 1 is segment 1's own track. Sentences 2 and 3 are single-sentence takes from the room master. Each was transcribed, and all three are one low, measured male voice with an American accent. Sentence 2 is laid over the Earth at 0:40.6, and sentence 3 at 1:10.4, just after the second turn. Segment 1's voice was lowered 13 dB to match the others, and each segment's room hum was evened to about −58 dBFS. The subtitles are a separate track, never burned in. *Whether the voice is right is for his ear.*
- *A transcription trap.* On a near-silent hum, Gemini invents fluent speech: a tax speech, a Bible verse, a finance talk. Sound is checked by measured level, not by transcript.

**Withdrawn 19 November 2026, at Dermot's word.** The rethink was made to the end, 1:30, with the clocks exact (the record above). He then judged four Grok narrators in turn and found none right, and chose to drop the narration (v6). Asked whether v6 should replace rough cut 3 or sit beside it, he said *"Remove both"*, then: *"Both are negative examples for future reference, unpublished from the site, unlisted if they have pages that cannot or should not be removed"*. Rough cut 3 is off the site, with its poster and watch page. The Journal entry *Lúnasa, a Film* is unlisted and keeps its address. Both films are filed in `negative-examples/README.md`. *The Long White Trail* stands as the film of Lúnasa and the ring. A chained remake of D1 no longer waits on this film.

**Status, 17 November 2026: filed as an impression.** Rough cut 3 (1:49) stands as `src/video/lunasa.mp4` and is shown in `src/journal/lunasa-a-film.md`. It is wordless, so it has no subtitle track. Dermot's ruling, verbatim: *"fine as journal impressions, but would need more polish if attached to a chapter or episode"*. Still open, and parked for Fable: whether the station the film climbs to is the record's Lúnasa or has diverged enough to be renamed. Working files and the run log: `F:\CLAUDE\Director films\D7\`.

| Version | Length | Date | Changed from the last | Filed |
| --- | --- | --- | --- | --- |
| Rough cut 1 | 1:33 | 15 Nov 2026 | First cut; the far-shore climb and four segments missing | No |
| Rough cut 2 | 1:53 | 15 Nov 2026 | Adds the sunlit trail; climbs beyond the ring and back (Dermot's catch) | No |
| Rough cut 3 | 1:49 | 15 Nov 2026 | The ring edge-on from its own height; the approach stays on the ring | **17 Nov, current** |

**Status, 30 October 2026: drafted, not run.** Dermot's request, verbatim:
*"Draft a Director brief for the Lúnasa remake"*, the same morning he settled
the ring's look for films (`intake-2026-10-30.md`: films only, circling
Earth, Lúnasa without the forty seconds). Drafted on Opus, because what the film
shows is mostly physics and geometry: a launch, a climb, an orbit, a view from
the ring (the 16 October line in `CLAUDE.md`). It is not canon and asserts
nothing in the record. It is filed in the Journal at most, beside *The Long
White Trail*, which stays as it is.

**Status, 15 November 2026: to be made as a chain of Imagine clips from stills.** Director mode is gone, and Dermot's choice, verbatim, was *"Next film: D7 Lúnasa"*. The seven start stills and the fifteen segment prompts are written in the subsection at the end of this brief. Nothing has been generated.

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
*(Note, 15 November 2026, on Dermot's ruling of one station: "Lúnasa as one bead of it" means, on screen, the record's Survey Corps station keeping its place in the ring's line, not one of the ring's habitats.)*

**Title and length.** *Lúnasa.* 2½ to 3 minutes; accept 2 to 3½.

**Instruction to paste** (as one line, since Enter sends in that box):

> Make a quiet wordless film of about two and a half minutes, 16:9, with no narration, no voice, no dialogue, no captions and no title card. It is set in 2826 on Earth and in high orbit above it, and it shows only what is described here, in this order, with nothing added. (1) Before dawn, late summer: a stone terrace on a hill above a wide bay on the west coast of Ireland, the sea dark and calm, the sky deep blue going pale in the north-east, low green hills across the water. Low across the southern sky, about a third of the way up from the horizon, is a fine arc of separate points of white light, already lit by a sun that has not reached the ground. It has a regular rhythm: brighter points, like pearls, evenly spaced about two moon-widths apart, and between each pair of pearls about nine much fainter points, evenly spaced. It does not move at all, and toward the east and west horizons the points crowd together into a faint fine thread. As the sky slowly brightens, the faint points between the pearls fade out one by one until only the bright pearls are left, a clear string of evenly spaced lights low in the south. It is a ring of thousands of separate habitat stations very far away in orbit: never a solid band, never a structure joined to the ground, never close. (2) Across the bay, on the far shore, a launch site: a long straight level rail running beside a runway and out along a low causeway into the bay, a few small low steady lights along it, and a single slender pale winged craft, short swept wings, a blunt nose, one body with nothing riding on it, plain unmarked skin with honest seams, a few small ports, sitting on a sled at its landward end. The sled carries the craft along the rail, faster and faster, and at the end of the causeway the craft lifts off it on its wings, already climbing over the open water, while the empty sled slows on the track. Then its own engines take it up in a steepening climb, leaning slowly east, toward the dawn; no flame shows from the terrace, only a moving point and the trail behind it. Minutes later, as it climbs above the earth's shadow the high part of its exhaust trail catches the sun before the ground does and shines white and gold against the blue sky, a long white trail standing over the bay while the water is still dark. The low roar arrives at the terrace about a minute after the launch, because the launch site is far away. The trail never reaches or touches the arc of lights, which is hundreds of times farther away. (3) Seen through a small round window of the craft as it climbs: the curve of the earth's horizon, the sky going black, cloud over the sea, sunlight striking in. The flight is smooth; no shaking, no fire outside the window. (4) Hours later, in high orbit, seen through the window of the small craft that has carried passengers on from low orbit: the whole earth large in the frame, partly sunlit, blue ocean and white cloud, about a third of the width of the window. Running away from the camera in both directions is the ring, a long gently curved line of separate stations in a regular rhythm: a large rotating habitat, then about nine much smaller stations, then another large habitat, and so on. The nearest are small separate shapes, too far off for their form to resolve, the farther ones points, crowding closer and closer together until they run into the curve of the earth's edge on both sides and pass behind it, like a necklace laid around the planet. Because the earth and the stations are bright, no stars are visible in the black sky. (5) One station ahead slowly grows from a point into a dark shape seen against the lit earth, its form never fully resolved, with a few small low steady lights around one opening. The camera drifts toward that opening and the film ends before the craft arrives. (6) People: nobody's face is ever shown. On the terrace, at most one person's hands resting on the stone wall in the foreground, out of focus. In the craft, at most a sleeve and a hand near the window. (7) Camera: everything is seen from where a person or a mounted camera could actually be: from the terrace, from a fixed camera on a mast at the end of the causeway, from inside the craft looking out of its window. No drone shots, no shot from outside the craft in space, no impossible camera, no passing through solid objects, no crash zoom, no whip pan, no time-lapse, no slow motion. Long unbroken takes, very few cuts, slow drift that never settles. (8) Light: the dawn, the sun, the earth, those small steady lights, and nothing else; nothing glows that would not glow. Strictly no text, lettering, numbers, signs, interfaces, holograms, readouts, lens flares or light streaks anywhere in frame. (9) Sound: wind on the terrace, the sea, birds starting, the late low roar of the launch, then inside the craft only its own quiet hum; no sound in space outside. Music almost absent: a few sparse low tones at most, never cut on a beat. Peaceable, patient, beautiful and quiet, never a trailer, never a montage.

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
  edge-on to the sun, which no shot here resolves), depots and yards, and station-keeping posts. A degree of
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
  away both ways, near ones separate and far ones crowding, meeting Earth's limb
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

#### Made as a chain of Imagine clips, from stills, 15 November 2026, written before anything is generated

**Why.** Director mode, the multi-shot film maker this brief was written for, was removed from Grok on 15 November 2026. Dermot's ruling the same day, verbatim: *"You may still prompt each 10 second interval and use the last frame to extend into the next one and so on via Grok Imagine or Grok Agent without needing the full Grok director."* And, of the method: *"This is experimentation until we refine the skill and technique so keep going until we hit the Grok limit"*. The first film made this way was D2 *Nothing Taken* (above), whose rough cut is done. His choice for the second, verbatim: *"Next film: D7 Lúnasa"*. So *Lúnasa* is made as fifteen clips of 10 seconds, 720p, 16:9, sound on, 150 seconds in all, which is the brief's own *about two and a half minutes* and inside its accepted 2 to 3½. The brief above stands as written and still binds. This subsection only cuts it into pieces Imagine can take one at a time, and nothing here is canon.

**The limit on extensions.** Dermot's word of 15 November 2026: Imagine extends a clip up to 30 seconds in total, so a continuous shot is a first clip and at most two extensions of 10 seconds, and anything longer starts a new clip. Six of the seven chains below run 20 seconds and the last runs 30. None runs longer.

**What D2 taught, and where it binds here.** The run log and the lessons are in the `grok-director` skill and in D2's two subsections above.

- **A state holds only from a still.** The ring's arc, the far shore, the rail, the port and the earth are each drawn once by a still and then asked to stay as they are. Every new shot below starts from a still, and no shot is text-to-video.
- **Walkers walk away from the lens.** Nobody walks in this film, and the rule is applied to the one thing that travels: the craft runs down the rail away from the camera and is small when it lifts. A craft coming toward the lens would have to be drawn afresh in every frame as it grew.
- **Name the count and the skyline.** One craft, one sled, one track, four lights on the far shore, one arc, one trail, nothing on the hills. Each prompt says so.
- **The only person; no other person anywhere in frame.** This film goes one further and has no person at all. The brief allows *at most* hands on the terrace wall and a sleeve at the port, and both are left out, so every prompt says *no person anywhere in frame*. A hand invites the rest of its owner.
- **No action the camera cannot see.** Nothing is asked for that the frame does not show: no boarding, no change of craft, no docking, no arrival. The roar in segment 6 is sound and is asked for as sound.
- **Nothing glows that the brief does not light.** The brief lights the dawn, the sun, the earth, the ring's points and the *few small low steady lights* at the rail and at the station's opening. Each prompt names its lights and refuses the rest.

**How the six shots fall.**

| Segment | Brief's shot | New or extension | Start | Seconds | The one motion | Speech |
|---|---|---|---|---|---|---|
| 1 | 1 | New | Still `d7-terrace-a`, image-to-video | 10 | The sky pales a little; the arc holds | None |
| 2 | 1 | Extension of 1 | Last frame of 1 | 10 | The faint points go out one by one; the pearls stay | None |
| 3 | 2 | New | Still `d7-rail`, image-to-video | 10 | The sled carries the craft away down the rail, faster and faster | None |
| 4 | 2 | Extension of 3 | Last frame of 3 | 10 | The craft lifts off the sled on its wings at the causeway's end; the sled slows | None |
| 5 | 3 | New | Still `d7-terrace-b`, image-to-video | 10 | A pale point rises off the far shore, low over the water, leaning left | None |
| 6 | 3 | Extension of 5 | Last frame of 5 | 10 | The point climbs more steeply and leaves the frame; the roar arrives | None |
| 7 | 3 | New | Still `d7-terrace-c`, image-to-video | 10 | The white and gold comes slowly down the standing trail | None |
| 8 | 3 | Extension of 7 | Last frame of 7 | 10 | The trail broadens and drifts a little; the bay stays dark | None |
| 9 | 4 | New | Still `d7-window`, image-to-video | 10 | The horizon sinks in the port and the sky above it goes black | None |
| 10 | 4 | Extension of 9 | Last frame of 9 | 10 | The patch of sunlight slides across the port's surround | None |
| 11 | 5 | New | Still `d7-orbit-a`, image-to-video | 10 | The earth and the ring drift slowly across the port | None |
| 12 | 5 | Extension of 11 | Last frame of 11 | 10 | The same drift goes on | None |
| 13 | 6 | New | Still `d7-orbit-b`, image-to-video | 10 | The dark shape ahead grows a little | None |
| 14 | 6 | Extension of 13 | Last frame of 13 | 10 | It grows further and stays a silhouette | None |
| 15 | 6 | Extension of 14 | Last frame of 14 | 10 | A few small steady lights show round one opening; the drift goes on | None |

The chains are 1 and 2, 3 and 4, 5 and 6, 7 and 8, 9 and 10, 11 and 12 (20 seconds each), and 13 to 15 (30 seconds). Each join inside a chain falls where the frame is at rest. Every other join is a cut. The film is wordless, so no segment has speech, and a voice in any take fails it.

Against the shot list: the terrace's first take is 20 seconds for the brief's 25; the rail is 20 for 10, because a run and a lift-off are two motions; the rising point is 20 for 50, and the standing trail 20 for 20; the javelin's port is 20 for 15; the ring is 20 for 35 and the approach 30 for 25. The first to drop if the film runs long are segment 8, then segment 10, then segment 12, each the second half of a hold.

**Readings the chain makes, offered and not required** (the 7 November rule: a brief binds what the record fixes, and the rest is offered). None of these is canon and none changes the brief.

- **No person is in the film.** The hands on the wall and the sleeve at the port are the brief's *at most*, and the chain takes neither.
- **The terrace camera does not pan.** The shot list has it *drifting slowly across the bay toward the south*. Here it already faces south and only sways, because a pan makes Imagine draw new sky, and the arc must not be redrawn.
- **The terrace sky has no stars.** At that hour a few would show. They are left out so that no star can be taken for a bead of the ring or grow into one.
- **The rail is seen from its landward end, looking out to sea,** and not from the brief's mast at the end of the causeway looking back. The craft then runs away from the lens, which is D2's lesson, and it is drawn large once, by a still made from the two filed javelin frames. The cost is that the lift-off is small and far away. The brief's mount is the alternative if he prefers the craft coming at the lens.
- **The rail shot shows no arc.** The record does not say which way the rail points, so the frame keeps the sky plain.
- **The terrace takes are framed so the trail leaves the left edge below the arc.** The brief says the trail never reaches or touches the arc. In a flat frame the surest way to hold that is to keep the two apart on screen.
- **The far shore carries four lights.** The brief says *a few small low steady lights*; a number can be counted in a take.
- **The dark part of the earth shows no lights,** for the brief's own reason for the stars: the exposure is set for sunlit cloud.
- **The station ahead is a dark silhouette, a little longer than it is tall, and no more.** The brief wants a *dark unresolved shape*; an outline has to be something, and this one names no structure. No sheet for Lúnasa is on file, and the stills and takes are judged against that.
- **Left out, because no segment is written for them:** the craft's passengers, the change from the javelin to the craft that goes on, the hours between low orbit and the ring, and the arrival, which the brief itself leaves out.

**The stills.** Seven start frames, made on Gemini (`gemini-3.1-flash-image`, 16:9, 2K) by `node scripts/image-edit.js`, as D2's were: the tool takes a plain-text prompt file and any number of reference images after it, writes `v1.jpg` onward and a `run.json` to the folder named, and files nothing. They are working frames for a film. They are not filed on the site, they take no `images.md` entry, and they are kept in `F:\CLAUDE\Director films\D7\stills\`, outside the repository. The run is registered in `image-prompts.md` when it is made. If one is ever wanted on a page it goes through `images.md` and to Dermot like any new depiction of a place or a vessel.

The prompt text below is the record. For the tool, each blockquote is saved as plain text, one file a still, under the still's key; the copies made on 15 November 2026 are `d7-terrace-a.txt`, `d7-terrace-b.txt`, `d7-terrace-c.txt`, `d7-rail.txt`, `d7-window.txt`, `d7-orbit-a.txt` and `d7-orbit-b.txt` in that folder. If a prompt is changed here, its text file is saved again from here before the next round.

References, from filed frames where one exists.

- **The bay:** `src/video/the-long-white-trail-poster.jpg`, the poster frame of the film this one remakes. It is the only filed frame of the bay, and D7 keeps the trailer's terrace above it. It also holds what the remake drops, a looping trail and a sunrise, so the prompt takes the lie of the land from it and names the rest to leave out. If the loop comes back in two rounds, the still is made again with no reference.
- **The craft:** `src/images/lore/ascent-javelins.jpg` and `src/images/hero/home-launch.jpg`, the two filed frames that passed sheet F of `starship-design.md`. Both show the javelin in flight, so the prompt takes shape and skin from them and puts the craft at rest on its sled.
- **The ring, the port and the station:** no filed frame serves. `images.md` holds no picture of the ring or of Lúnasa, and the ring's look is settled for films only. `src/images/hero/seasons-orbit.jpg` has the earth from orbit, but its subject is a spoked wheel station, which D7's negative refuses by name, so it is not attached. The two orbit stills and the window are made from their prompts alone, and the second orbit still is an edit of the first.
- **Each later still is held to the one before.** `d7-terrace-b` is an edit of the kept `d7-terrace-a`, and `d7-terrace-c` an edit of the kept `d7-terrace-b`, by D2's lesson that a second frame of one place is an edit and not a new generation. `d7-rail` takes the kept `d7-terrace-b` as its third reference, for the bay and the light. `d7-orbit-b` is an edit of the kept `d7-orbit-a`.

No child is in any still or segment, and none is to appear (`CLAUDE.md`, *A child is pictured grown*); no person is. Nothing in any still is lettered, so nothing needs `set-readouts.py`.

**Still 1, `d7-terrace-a`: the terrace before dawn, the whole arc (start frame of segments 1 and 2).**

> A single frame of documentary footage recorded inside the world by a small hand-held 29th-century camera, a photograph, 16:9 landscape orientation, available light only, deep focus, exposed for the sky. One reference image is attached. Take from it only the lie of the land: a wide calm bay seen from high ground, a hazy far shore and low hills across the water. Leave out its white trail, its warm sunrise colour, its rocks and its scrub; nothing of them is in this frame. The scene: the year 2826, late summer, before dawn, on the west coast of Ireland, in clear still air. The camera is held at chest height by someone standing at the wall of a stone terrace on a hill, looking due south across the bay. Along the bottom of the frame runs the top of the terrace wall, old dressed grey stone, dry and clean, a little out of focus, with nothing on it. Below and beyond lies the bay, wide, dark and calm, with a long slow swell. Across the water is a low line of dark green hills, bare, their skyline smooth and empty. On the far shore, a little right of centre and very small, a thin straight level line runs out from the land into the bay just above the water, a causeway seen from many kilometres away, with four small low steady white lights spaced along it and nothing else to be made out there. The sky fills the upper two-thirds of the frame, clear and cloudless, deep blue, a little paler toward the left edge, where dawn is coming from behind the camera's left shoulder. Across the sky, about two-thirds of the way up the frame, runs one fine shallow arc of separate points of white light, highest in the middle of the frame and a little lower at each edge, crossing the whole width. The points are small, sharp and steady, each a pinpoint, lit by a sun that has not reached the ground. They have a regular rhythm: brighter points, like pearls, evenly spaced along the arc, and between each pair of pearls a short row of about nine much fainter points, evenly spaced. Every point is separate, with dark sky between it and the next. The arc is the only thing in the sky. Nothing is in motion. No person, hand or figure anywhere in frame, and no animal. No text, letters, numbers or captions anywhere. Nothing glows but the points of the arc and the four small lights on the far shore: no lamp on the terrace, no lit window, no light on the hills, no beam or glow in the sky. The arc is never a solid band, hoop, halo, streak or drawn line, never a ring like Saturn's, never joined to the ground or the sea, and nothing hangs from it. No stars, no moon, no planet, no aircraft, no satellite streak, no cloud, no trail of any kind. Nothing on the hills: no mast, tower, turbine, pylon or building. No boat on the water. No railing, lamp post, bench, furniture, plant pot or sign on the terrace. No lens flare or light streaks. Photographed, not rendered: real photography in the last of the night, high-ISO grain, slight softness toward the corners, muted natural colour.

*Judging line.* The image critic runs its ladder on every take at full size and as a thumbnail, century first; here the ring is the one thing in frame that says the century. The still fails if the arc is a solid band, a drawn line, a halo or a streak; if it has no rhythm of brighter and fainter points; if it touches the hills or the sea, or anything joins it to the ground; if a trail of any kind is in the sky, the reference's loop included; if stars, a moon or cloud are in the sky; if a person, a hand, a boat or a building is in frame; if the far shore's level line is missing, is a tower or a ramp, or carries more than a few lights; if anything on the terrace or the hills is lit; or if the light is sunrise and not the blue before it. Among takes that pass, keep the one whose points are sharpest and most evenly spaced, since a clip made from it must hold them.

**Still 2, `d7-terrace-b`: the same view some minutes later, the pearls alone (start frame of segments 5 and 6; an edit of the kept still 1).**

> Edit the attached image, which is the frame to change, and keep everything else as it is: the same camera at the same terrace wall, the same bay, the same hills, the same far shore with its thin level line and four small steady lights, and the same arc in the same place. Change two things only. First, the light: it is some minutes later, and the sky is a lighter, clearer blue, palest toward the left edge, though the sun has not risen and the bay, the hills and the terrace wall are still dark. Second, the arc: the faint points between the pearls have gone out, lost in the brightening sky, and only the brighter points are left, a clear string of evenly spaced separate white lights along the same shallow arc, each still a sharp steady pinpoint, with empty sky between each one and the next. The number and the places of the bright points do not change. Add nothing: no person, no stars, no moon, no cloud, no trail, no aircraft, nothing new on the hills, the water or the terrace, no text, no lens flare, and no sun or sun glow in frame. The arc is not a band or a drawn line, and nothing joins it to the ground.

*Judging line.* The still fails if anything but the sky's tone and the faint points has changed from still 1: the wall, the bay, the hills, the far shore and its four lights, and the places of the bright points; if faint points remain between the pearls, or the pearls have run into a line; if the sun or its glow is in frame, or the bay is lit; or if anything has been added.

**Still 3, `d7-terrace-c`: the trail standing (start frame of segments 7 and 8; an edit of the kept still 2).**

> Edit the attached image, which is the frame to change, and keep everything else as it is: the same camera at the same terrace wall, the same dark bay, the same hills, the same far shore with its thin level line and four small steady lights, and the same string of evenly spaced bright points along the same shallow arc. It is a few minutes later: the sky is a little lighter again, the ground is still in shadow and the bay is still dark. Add one thing only: the exhaust trail of a craft that has launched from the seaward end of that level line and gone. The trail is one thin continuous line of vapour. It begins just above the water at the seaward end of the line on the far shore, rises gently at first, low over the bay, then more steeply, leaning always to the left, toward the east, and leaves the frame at the left edge about halfway up, clearly below the arc of points. It never reaches, crosses or touches the arc, which is hundreds of times farther away and stays above it, untouched. The lower part of the trail, from the shore to about its middle, is in the earth's shadow: dim blue-grey, a little spread and softened by the air. The upper part, toward the left edge, has climbed into sunlight and shines white and pale gold against the blue sky, the brightest thing in the frame. The trail is slightly kinked and broadened in places by high winds, as a real trail is. No craft is in frame and no point of light is at the trail's end. Add nothing else: no second trail, no smoke cloud at the shore, no flame, no glow on the water, no person, no stars, no moon, no cloud, no aircraft, no sun or sun glow in frame, no lens flare, no text. The trail does not loop, curl back or form a ring.

*Judging line.* The still fails if the trail reaches, crosses or touches the arc, or leaves the frame above it; if it loops, curls back or stands straight up like a rocket's; if it does not begin at the seaward end of the level line; if its upper part is not plainly sunlit white and gold while its lower part and the bay are in shadow; if a craft, a flame or a second trail is in frame; if the trail is red, orange or violet; or if anything else has changed from still 2.

**Still 4, `d7-rail`: the craft on its sled at the landward end (start frame of segments 3 and 4).**

> A single frame of documentary footage recorded inside the world by a fixed 29th-century camera, a photograph, 16:9 landscape orientation, available light only, deep focus. Three reference images are attached. The first and second show the craft, an ascent javelin, in flight: take from them its shape and its skin, one long pale flattened winged body about fifty metres long, broad like a thick arrowhead, short swept wings blended into the body, a blunt rounded nose, a short row of narrow ports at the nose, air intakes under the belly, rocket nozzles at the tail, a dull pale thermal skin with the honest seams of its panels, unmarked. Here it is on the ground, at rest, with no exhaust. The third shows this bay and this morning's light from a hill across the water: take from it the dark calm water, the low hills and the clear pale blue sky before sunrise, and nothing else. The scene: the year 2826, late summer, a small coastal launch site on the west coast of Ireland, some minutes before sunrise, in clear still air, the ground in even blue-grey shadow with no direct sun. The camera is fixed on a short mast beside the landward end of a launch rail, about six metres up and a little to the left of the track, looking straight out along it toward the sea. The rail is one long straight level track laid on the ground, pale and clean, two plain parallel rails on a smooth pale bed. It runs dead straight away from the camera, across a little level ground, then out along a low level causeway into the bay, two or three kilometres in all, narrowing to a point far out over the water. It never rises, slopes or leaves the ground. A few small low steady white lights sit beside it at wide even intervals, each a plain low marker no higher than a knee. To the right of the track and parallel to it lies a broad smooth level runway, pale and empty. In the near part of the frame, on the track, sits one low plain sled, a flat carriage of pale composite and dull metal gripping the rails, and on the sled rests the one craft, level on its belly, seen from behind and a little to the left, its tail and dark unlit nozzles nearest the camera, its nose pointing away down the track toward the sea. Nothing rides on the craft and nothing is attached to it but the sled beneath. Grey calm water lies on both sides of the causeway, and far across the bay is a low line of bare dark green hills. Nothing is in motion. It is the only craft and the only sled: no other craft, aircraft or vehicle is anywhere in frame, on the runway, the ground, the water or in the sky. No person or figure anywhere in frame, and no animal. No text, letters, numbers, markings, painted name, stripes or signs anywhere, on the craft, the sled, the track or the runway. Nothing glows but the few small steady lights beside the track: no engine glow, no lit ports, no floodlight, no beacon. No exhaust, steam, smoke or vapour. No ramp, no elevated or sloping track, no launch tube, tower, gantry, crane, arm, mast or building anywhere along the track or on the causeway; nothing stands on the causeway but the track and its low lights. No vertical rocket, no external tank, no boosters, no Space Shuttle, no present-day airliner or fighter, no glazed bubble canopy, no window band, no tail fin on a cylinder, no wheels under the craft. No arc of lights, band or ring in the sky, no stars, no moon, no cloud, no trail. No rust, grime, stains, clutter, cables or hoses. No lens flare. Photographed, not rendered: real dawn photography from a mast, slight haze over the water, high-ISO grain, muted natural colour.

*Judging line.* The craft is judged against sheet F of `starship-design.md` and against the two filed frames, not against taste. The still fails if the craft is a vertical rocket, a stack, a Space Shuttle or a present-day aircraft, has a glazed canopy, a window band, wheels or anything riding on it, or carries a mark; if the rail rises, slopes, leaves the ground or ends in a ramp, a tube or a tower; if a gantry, a crane, a mast or a building stands anywhere along it; if a second craft, a vehicle or a person is in frame; if anything glows but the few low lights beside the track, an engine included; if exhaust or vapour shows; or if the light is direct sun. Among takes that pass, keep the one whose track runs straightest and farthest, since the clip is the craft going down it.

**Still 5, `d7-window`: the javelin's port in the climb (start frame of segments 9 and 10).**

> A single frame of documentary footage recorded inside the world by a small hand-held 29th-century camera, a photograph, 16:9 landscape orientation, available light only. No reference image is attached. The scene: the year 2826, inside the passenger cabin of an ascent javelin, a winged craft climbing to orbit, about seventy kilometres up and still rising, some minutes after a launch at dawn. The camera is held close to one small round passenger port and looks out through it. The port is a single thick clear pane about the width of two hands, set deep in the cabin wall in a plain smooth rounded surround of pale matte composite, seamless, with no bolts, rivets, screws, handle, blind or trim. The round pane sits in the middle of the frame and fills most of its height; around it the cabin wall is dim, pale, plain and out of focus, with nothing on it. Through the pane is the earth's horizon, a long clean gentle curve running a little tilted across the lower half of the view. Below the curve, far down, lies a wide deck of white and grey cloud over dark sea, in early low sunlight with long soft shadows. Along the curve lies the thin bright blue line of the atmosphere, and above it the sky goes quickly from deep blue to black. Low sunlight strikes in through the pane from the left and lays one bright soft patch on the port's surround at the right; the sun itself is not in frame. The view is steady and clear. Nothing is in motion. No person, face, hand, sleeve or reflection of a person anywhere in frame. No part of the craft is seen outside the port: no wing, engine, hull or nose. No flame, fire, plasma, sparks or glow outside the pane. No text, letters, numbers, labels, placards or markings anywhere. Nothing glows: no screen, readout, indicator, lamp, light strip or lit panel in the cabin, which is lit only by the daylight through the pane. No seat, belt, buckle, strap, handle, vent, switch or screen in view. No stars, no moon, no arc or ring of lights, no other craft. No airliner window with a pull-down shade, no oval window, no scratched plastic, no frost, no condensation. No lens flare or light streaks. Photographed, not rendered: real hand-held photography through thick glass, high-ISO grain in the dim wall, muted natural colour.

*Judging line.* The still fails if a person, a hand, a sleeve or a reflection of one is in frame; if a wing, an engine or any part of the craft shows outside; if fire, plasma or a glow is outside the pane; if the port is an airliner's window, is oval, has a shade, or sits in a wall of bolts, rivets or fittings; if anything in the cabin is lit or lettered; if the horizon is flat, or the earth is a whole globe; or if stars or a ring of lights show.

**Still 6, `d7-orbit-a`: the earth and the ring from high orbit (start frame of segments 11 and 12).**

> A single frame of documentary footage recorded inside the world by a small hand-held 29th-century camera, a photograph, 16:9 landscape orientation, available light only, exposed for the sunlit earth. No reference image is attached. The scene: the year 2826, inside a small passenger craft in very high orbit, about thirty-six thousand kilometres above the earth. The camera is held close to one small round port and looks out through it. The port is a single thick clear pane about the width of two hands, set deep in the cabin wall in a plain smooth rounded surround of pale matte composite, seamless, with no bolts, rivets, screws, handle, blind or trim. The round pane sits in the middle of the frame and fills most of its height; around it the cabin wall is dim, pale, plain and out of focus, with nothing on it. Through the pane, in black space, is the whole earth, a complete round globe, small enough to sit well inside the pane, about a third of the pane's width across, a little left of centre. The sun lights it from the left, a little more than half of it in daylight, blue ocean and white cloud, real and photographic; the rest of the globe is dark. Past the earth runs the ring: one long, thin, gently curved line of separate stations, all sharing one orbit round the planet. It is seen almost edge-on from just above its plane, so that it reads as a very thin flattened ellipse of separate points round the earth, never a circle. From the lower right of the pane, where the nearest stations are, the line runs away from the camera, curving gently, its points drawing closer and closer together with distance, until it meets the earth's edge on the right side and passes behind the globe; and from the lower left it does the same on the left side. The stations have a regular rhythm: one larger, then a row of about nine much smaller, then one larger, and so on. The nearest few are small separate pale shapes, sunlit on one side, too far off for any form to be made out; beyond them every station is only a point of light. Every station is separate, with black space between it and the next. Nothing joins one station to another, and nothing joins any station to the earth. No stars are visible anywhere, because the earth and the stations are bright. Nothing is in motion. No person, face, hand, sleeve or reflection of a person anywhere in frame. No part of this craft is seen outside the port. No text, letters, numbers, labels or markings anywhere. Nothing glows but sunlight on the earth and on the stations: no lights on the dark part of the earth, no engine glow, no screen, readout, indicator, lamp or light strip in the cabin. No seat, belt, handle, vent, switch or screen in view. The ring is never a solid band, hoop, halo, wheel or drawn line, never a ring like Saturn's, and never a single ring-shaped station. No wheel-shaped station, no spoked wheel, no large detailed station in the foreground. No tether, cable, tower or space elevator. No moon, no sun in frame, no nebula, no galaxy, no starfield, no other craft near the port. No lens flare or light streaks. Photographed, not rendered: real hand-held photography through thick glass, hard sunlight and black shadow, high-ISO grain in the dim wall, muted natural colour.

*Judging line.* The still fails if the ring is a solid band, a hoop, a halo or a drawn line, or reads as Saturn's; if it has no rhythm of larger and smaller stations; if any station is a wheel, or is resolved in the foreground; if a tether, a cable or a tower joins anything to the earth; if stars show; if the earth fills the pane, is cut by its edge, or is much more or much less than a third of its width; if the dark part of the earth carries lights; if a person or a reflection of one is in frame; or if anything in the cabin is lit or lettered. Among takes that pass, keep the one whose line of stations most plainly runs into the earth's edge on both sides.

**Still 7, `d7-orbit-b`: one station ahead, dark against the earth (start frame of segments 13 to 15; an edit of the kept still 6).**

> Edit the attached image, which is the frame to change, and keep everything else as it is: the same camera at the same small round port in the same dim plain cabin wall, black space with no stars, the same sunlit earth, and the same thin curved line of separate stations running away on both sides into the earth's edge. Change two things only. First, the craft has come nearer to one station of the line and turned a little, so the earth now sits a little right of centre in the pane and looks slightly larger. Second, that one station, the one straight ahead, now lies between the camera and the earth and is seen against the earth's sunlit cloud: a single small dark shape, about one twentieth of the pane's width, in the middle of the pane. It is seen from its shadowed side, so it is a plain dark silhouette with a soft edge, compact and a little longer than it is tall, and nothing of its structure can be made out: no ring, no wheel, no spokes, no panels, no windows, no detail. Nothing on it is lit. Add nothing else: no second dark shape, no other craft, no tether or cable, no stars, no moon, no person or reflection, no text, no screens or lights in the cabin, no lens flare. The line of stations is still made of separate points and is never a band.

*Judging line.* The still fails if the dark shape shows structure: a ring, a wheel, spokes, panels, windows or any detail; if it is lit anywhere; if it is larger than about a twentieth of the pane; if a second shape, a craft or a tether has been added; if stars show; or if the line of stations has become a band or is gone.

**Desktop steps for the stills** (Opus; nothing below has been run). From the root of the clone, in this order, four takes a round and two rounds at most for each still. `<TA>`, `<TB>` and `<OA>` are the kept takes of `d7-terrace-a`, `d7-terrace-b` and `d7-orbit-a`, for example `F:\CLAUDE\Director films\D7\stills\d7-terrace-a\v2.jpg`.

```
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D7/stills/d7-terrace-a.txt" --out "F:/CLAUDE/Director films/D7/stills/d7-terrace-a" --n 4 --aspect 16:9 src/video/the-long-white-trail-poster.jpg
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D7/stills/d7-terrace-b.txt" --out "F:/CLAUDE/Director films/D7/stills/d7-terrace-b" --n 4 --aspect 16:9 "<TA>"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D7/stills/d7-terrace-c.txt" --out "F:/CLAUDE/Director films/D7/stills/d7-terrace-c" --n 4 --aspect 16:9 "<TB>"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D7/stills/d7-rail.txt" --out "F:/CLAUDE/Director films/D7/stills/d7-rail" --n 4 --aspect 16:9 src/images/lore/ascent-javelins.jpg src/images/hero/home-launch.jpg "<TB>"
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D7/stills/d7-window.txt" --out "F:/CLAUDE/Director films/D7/stills/d7-window" --n 4 --aspect 16:9
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D7/stills/d7-orbit-a.txt" --out "F:/CLAUDE/Director films/D7/stills/d7-orbit-a" --n 4 --aspect 16:9
node scripts/image-edit.js --prompt "F:/CLAUDE/Director films/D7/stills/d7-orbit-b.txt" --out "F:/CLAUDE/Director films/D7/stills/d7-orbit-b" --n 4 --aspect 16:9 "<OA>"
```

Each round is judged by the image critic against the still's line above before the next still is made. A second round is an edit of the first round's best take, naming only the faults and saying *keep everything else as it is*, by D2's lesson. A still that fails twice on one cause is re-staged here before a third round. The kept take is uploaded to Imagine as the start frame of its segment, at 16:9.

**Prompts to paste, each as one line, with its start frame attached.** Enter sends in that box, so each segment goes in as one paragraph. Every prompt stands alone, extensions included, since Imagine sees one prompt at a time and an extension is not known to carry anything over but its start frame. Each describes its start frame as well as its motion, so that Imagine is told twice what must not change. The shared preamble and the shared negative travel inside each prompt, cut to what has mattered: footage recorded inside the world from a named mount, one unbroken take, the brief's light and no other, nothing lettered, nobody in frame.

**Segment 1, the terrace (image-to-video from still `d7-terrace-a`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a small camera held at chest height by someone standing at the wall of a stone terrace on a hill, looking due south across a wide bay on the west coast of Ireland, 16:9, one unbroken take, no cut, no pan, no tilt, no zoom, only the slight sway of a held camera. The year 2826, late summer, before dawn, in clear still air. The top of an old grey stone wall along the bottom of the frame, the bay dark and calm below, low bare dark green hills across the water, and on the far shore a thin level line running out into the bay with four small steady white lights along it. Across the deep blue sky runs one fine shallow arc of separate points of white light, brighter points like pearls evenly spaced, with a row of much fainter points between each pair. The arc does not move at all at any moment of the take: no point drifts, slides, twinkles, pulses, brightens or streaks, and the whole arc keeps its place against the hills. It is a ring of separate stations very far away, never a band. The one motion, slow and slight: the sky pales a little, most toward the left edge, as the dawn comes on, and a long slow swell moves on the dark water. Every point of the arc is still there at the end, the faint ones included. Nothing else moves and nothing enters the frame. No person, hand or figure anywhere in frame at any moment, and no animal. Sound: light wind on the terrace and the sea far below; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows but the points of the arc and the four small lights on the far shore; no lamp, no beam, no flare. No stars, moon, cloud, aircraft, satellite, shooting star or trail appears. Nothing on the hills: no mast, tower, turbine or building. No boat. The sun does not rise in this take, and the bay stays dark.

*Fails if* the arc or any point of it moves, twinkles or streaks; the arc becomes a band or a line; the faint points are gone by the end; anything appears in the sky, a star included; a person, a boat or a light appears; the camera pans or zooms; the sun comes up; or a voice or music is heard.

**Segment 2, the faint points go out (extension of segment 1 from its last frame, 10 seconds, no speech).**

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same small camera held at the wall of a stone terrace on a hill, looking due south across a wide bay on the west coast of Ireland, 16:9, no cut, no pan, no tilt, no zoom, only the slight sway of a held camera. The year 2826, late summer, a little before dawn, in clear still air. The grey stone wall along the bottom of the frame, the bay dark and calm, low bare dark green hills across the water, a thin level line on the far shore with four small steady white lights. Across the blue sky runs one fine shallow arc of separate points of white light, brighter points like pearls evenly spaced, with a row of much fainter points between each pair. The arc does not move: no point drifts, slides, twinkles or streaks, and the bright points keep their places exactly to the end. The one motion: as the sky slowly brightens, the faint points between the pearls fade out, one by one and without hurry, lost in the lightening sky, until only the bright pearls are left, a clear string of evenly spaced separate white lights along the same arc, with empty sky between each one and the next. The bright points do not fade, move, merge or grow. Nothing else changes and nothing enters the frame. No person, hand or figure anywhere in frame at any moment, and no animal. Sound: light wind, the sea far below, and the first few birds starting; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows but the points of the arc and the four small lights on the far shore. No stars, moon, cloud, aircraft, satellite or trail appears. Nothing on the hills. No boat. The sun does not rise in this take, the bay stays dark, and the arc never becomes a band or a line.

*Fails if* the bright points fade, move or run together; the faint points all vanish at once in a jump, or are still there at the end; the arc moves or becomes a band; anything appears in the sky; a person appears; or a voice or music is heard. If two takes cannot fade the faint points, the fading is not shown: segment 1 cuts to the rail, and segment 5, which starts from still 2, shows the pearls alone.

**Segment 3, the run (image-to-video from still `d7-rail`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a fixed camera on a short mast beside the landward end of a launch rail, looking straight out along the rail toward the sea, 16:9, one unbroken take, no cut, no pan, no tilt, no zoom, the frame alive only with the faintest tremor of the mount. The year 2826, late summer, a small coastal launch site on the west coast of Ireland, some minutes before sunrise, the ground in even blue-grey shadow. One long straight level track laid on the ground runs dead straight away from the camera and out along a low level causeway into the bay, with a few small low steady white lights beside it; a broad empty runway lies to its right, grey calm water on both sides of the causeway, low bare hills far across the bay. On the track sits one low plain sled, and on the sled rests one craft, seen from behind: a long pale flattened winged body with short swept wings, a blunt nose pointing away down the track, dark unlit nozzles at its tail, a dull pale unmarked skin with plain seams. The one motion: the sled carries the craft away from the camera along the track, smoothly, faster and faster, straight down the rail and out along the causeway, the craft growing smaller and smaller, level on its sled the whole way, until it is small and far out over the water at the end of the take, still on the track. It does not lift, tilt, rise or leave the sled in this take. Its nozzles stay dark: no flame, no exhaust, no smoke, no glow. The track stays level and on the ground along its whole length. It is the only craft and the only sled: no other craft, aircraft or vehicle anywhere in frame at any moment. No person or figure anywhere in frame at any moment, and no animal. Nothing else moves. Sound: the rising rush of the sled on the rail, falling away with distance; no speech, no voice, no music, no narration. No text, letters, numbers, markings or captions. Nothing glows but the few small steady lights beside the track. No ramp, tower, gantry, launch tube, crane or building appears; no rocket rising on a column of fire; no sparks; no lens flare; the sun does not rise in this take.

*Fails if* the craft lifts, tilts nose-up or leaves the sled; flame, exhaust or smoke shows; the track rises, bends or grows a ramp; the craft changes shape as it goes, or turns into a rocket, a Shuttle or an airliner; a second craft, a vehicle or a person appears; the camera follows the craft; or a voice or music is heard.

**Segment 4, the lift-off (extension of segment 3 from its last frame, 10 seconds, no speech).**

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same fixed camera on a short mast beside the landward end of a launch rail, never moved, looking straight out along the rail toward the sea, 16:9, no cut, no pan, no tilt, no zoom. The year 2826, late summer, a small coastal launch site on the west coast of Ireland, some minutes before sunrise, the ground in even blue-grey shadow. One long straight level track on the ground runs away from the camera and out along a low level causeway into the bay, a few small low steady white lights beside it, a broad empty runway to its right, grey calm water on both sides, low bare hills far across the bay. Far out along the causeway, small in the frame, one pale winged craft rides one low sled along the track, moving fast away from the camera. The one motion: at the seaward end of the causeway the craft lifts off the sled on its wings, level, the way an aircraft leaves a runway, and climbs away gently over the open water, going on away from the camera and growing smaller; once it is clear of the sled its engines light as one small steady pale point at its tail, and a thin pale trail begins behind it; the empty sled slows on the track and comes to rest near the end of the causeway. The craft never points its nose straight up and never rises on a column of fire like a rocket: it flies off the end of the track, climbing gently, and by the end of the take it is a small pale point low over the water with a thin trail behind it. The track stays level and on the ground and nothing on it rises. It is the only craft and the only sled: no other craft, aircraft or vehicle anywhere in frame at any moment. No person or figure anywhere in frame at any moment, and no animal. Sound: the craft's engines, far off and steady, and the quiet of the shore; no speech, no voice, no music, no narration. No text, letters, numbers, markings or captions. Nothing glows but the few small steady lights beside the track and the one small pale point at the craft's tail. No fireball, no explosion, no smoke cloud over the causeway, no sparks; no ramp, tower, gantry or launch tube; no lens flare or light streaks; the sun does not rise in this take.

*Fails if* the craft leaves the track nose-up like a rocket, or rises on a column of fire; the track ends in a ramp or anything on it rises; a fireball or a smoke cloud fills the causeway; the sled flies, falls into the sea or goes on off the end; a second craft, a vehicle or a person appears; the camera follows the craft; or a voice or music is heard.

**Segment 5, the point rises (image-to-video from still `d7-terrace-b`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a small camera held at chest height by someone standing at the wall of a stone terrace on a hill, looking due south across a wide bay on the west coast of Ireland, 16:9, one unbroken take, no cut, no pan, no tilt, no zoom, only the slight sway of a held camera. The year 2826, late summer, just before sunrise, in clear still air, the sky a clear light blue, the bay and the hills still dark. The top of an old grey stone wall along the bottom of the frame, low bare dark green hills across the water, and on the far shore, many kilometres away, a thin level line running out into the bay with four small steady white lights along it. High across the sky runs one shallow arc of evenly spaced separate bright white points, a string of pearls, which does not move at all: no point drifts, twinkles, fades or streaks. The one motion: from the seaward end of the thin level line on the far shore, one small pale point lifts off just above the water and climbs slowly away, low over the bay, leaning to the left, drawing one thin dim blue-grey trail behind it. It is very far away, so it is small and slow in the frame: by the end of the take it has risen only a little way above the far hills and moved a little to the left. No flame is seen, only the small pale point and the thin trail behind it. The trail and the point stay far below the arc of bright points and never come near it. It is the only craft and the only trail: no second point, no aircraft, no other trail anywhere in the sky. Nothing else moves but a long slow swell on the dark water. No person, hand or figure anywhere in frame at any moment, and no animal. Sound: light wind on the terrace, the sea far below, a few birds; the launch itself is not yet heard, because it is far away; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows but the points of the arc, the four small lights on the far shore and the one small pale point of the craft. No fireball, flash or flare; no stars, moon or cloud; nothing on the hills; no boat; the sun does not rise in this take, and the bay stays dark.

*Fails if* the point climbs straight up like a rocket, shows flame, or crosses the frame in seconds; the trail reaches or comes near the arc; the arc moves, fades or becomes a band; a second trail, an aircraft or a person appears; the launch is heard at once as a roar; or a voice or music is heard.

**Segment 6, the climb and the roar (extension of segment 5 from its last frame, 10 seconds, no speech).**

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same small camera held at the wall of a stone terrace on a hill, looking due south across a wide bay on the west coast of Ireland, 16:9, no cut, no pan, no tilt, no zoom, only the slight sway of a held camera. The year 2826, late summer, just before sunrise, in clear still air, the sky a clear light blue, the bay and the hills still dark. The grey stone wall along the bottom of the frame, low bare dark green hills across the water, a thin level line on the far shore with four small steady white lights. High across the sky runs one shallow arc of evenly spaced separate bright white points, which does not move at all. Low over the far side of the bay one small pale point is climbing away to the left, with one thin dim blue-grey trail behind it leading back down to the seaward end of the level line. The one motion: the small pale point goes on climbing, a little more steeply now, leaning always to the left, and passes out of the frame at the left edge about halfway up, clearly below the arc of bright points; the thin trail it has drawn stays behind it in the air, whole, from the far shore to the left edge. The trail never reaches, crosses or touches the arc. No flame is seen. It is the only craft and the only trail. Nothing else moves but a long slow swell on the dark water. No person, hand or figure anywhere in frame at any moment, and no animal. Sound: wind and the sea, and then, late, the launch is heard at last from far across the bay: one long low distant roar that swells slowly, rolls over the terrace and fades again; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows but the points of the arc, the four small lights on the far shore and the one small pale point of the craft. No fireball, flash, flare or explosion; no second trail; no stars, moon or cloud; nothing on the hills; no boat; the sun does not rise in this take, and the bay stays dark.

*Fails if* the trail reaches, crosses or touches the arc, or leaves the frame above it; the point turns back, loops or bursts; the trail vanishes behind the point; the arc moves or becomes a band; a second trail or a person appears; or a voice or music is heard. Whether the roar comes, and comes late, is for Dermot's ear: the sound is Grok's own and is measured here, not heard.

**Segment 7, the trail standing (image-to-video from still `d7-terrace-c`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a small camera held at chest height by someone standing at the wall of a stone terrace on a hill, looking due south across a wide bay on the west coast of Ireland, 16:9, one unbroken take, no cut, no pan, no tilt, no zoom, only the slight sway of a held camera. The year 2826, late summer, minutes before sunrise, in clear still air, the sky light blue, the bay, the hills and the terrace wall still in shadow. Low bare dark green hills across the water, a thin level line on the far shore with four small steady white lights. High across the sky runs one shallow arc of evenly spaced separate bright white points, which does not move at all. Standing over the bay is one long thin exhaust trail, left by a craft that has gone: it begins just above the water at the seaward end of the level line, rises leaning to the left and leaves the frame at the left edge, clearly below the arc. Its lower part is dim blue-grey, in the earth's shadow; its upper part, toward the left edge, is in sunlight and shines white and pale gold. The one motion, slow: the white and gold comes a little way down the trail toward the shore, as the sunlight reaches lower, so that more of the trail is lit at the end of the take than at the start; the trail itself stays where it stands. The water below stays dark the whole time. The trail never reaches, crosses or touches the arc, and does not rise, fall, curl or loop. No craft is in frame. It is the only trail in the sky. Nothing else moves but a long slow swell on the water. No person, hand or figure anywhere in frame at any moment, and no animal. Sound: light wind, the sea far below, birds; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows but the points of the arc and the four small lights on the far shore; the trail is lit by the sun and does not glow of itself. No second trail, no aircraft, no stars, moon or cloud; nothing on the hills; no boat; no lens flare or light streaks; the sun itself does not come into frame, and the bay stays dark.

*Fails if* the trail moves bodily, curls, loops or fades out; it touches the arc; the bay or the hills light up; the trail turns red, orange or violet; a craft, a second trail or a person appears; the arc moves or becomes a band; a flare or the sun comes into frame; or a voice or music is heard.

**Segment 8, the trail holds (extension of segment 7 from its last frame, 10 seconds, no speech).** The first segment to drop if the film runs long.

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same small camera held at the wall of a stone terrace on a hill, looking due south across a wide bay on the west coast of Ireland, 16:9, no cut, no pan, no tilt, no zoom, only the slight sway of a held camera. The year 2826, late summer, minutes before sunrise, in clear still air, the sky light blue, the bay, the hills and the terrace wall still in shadow. Low bare dark green hills across the water, a thin level line on the far shore with four small steady white lights. High across the sky runs one shallow arc of evenly spaced separate bright white points, which does not move at all. Standing over the bay is one long thin exhaust trail, from the seaward end of the level line up and away to the left edge of the frame, clearly below the arc: dim blue-grey low down, white and pale gold in sunlight higher up. The one motion, very slow: the trail broadens a little and its high part drifts and kinks slightly in the upper winds, as a real trail does, while it keeps its place over the bay and keeps its white and gold. The water below stays dark the whole time. The trail never reaches, crosses or touches the arc, and does not curl back, loop, fall or vanish. No craft is in frame. It is the only trail in the sky. Nothing else moves but a long slow swell on the water. No person, hand or figure anywhere in frame at any moment, and no animal. Sound: light wind, the sea far below, birds; no speech, no voice, no music, no narration. No text, letters, numbers, captions or title. Nothing glows but the points of the arc and the four small lights on the far shore. No second trail, no aircraft, no stars, moon or cloud; nothing on the hills; no boat; no lens flare or light streaks; the sun itself does not come into frame, and the bay stays dark.

*Fails if* the trail curls back, loops, breaks up or is gone by the end; it touches the arc; the bay lights up; a craft, a second trail or a person appears; the arc moves or becomes a band; or a voice or music is heard.

**Segment 9, through the javelin's port (image-to-video from still `d7-window`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a small camera held close to one small round passenger port inside a winged craft climbing to orbit, looking out through the port, 16:9, one unbroken take, no cut, no pan, no zoom, only the slight sway of a held camera. The year 2826, some minutes after a launch at dawn, high above the earth and still rising. The port is one thick clear round pane in a plain smooth rounded surround of pale matte composite; the cabin wall around it is dim, pale, plain and out of focus. Through the pane: the earth's horizon as a long gentle curve, a deck of white and grey cloud over dark sea far below in low early sunlight, the thin bright blue line of the atmosphere along the curve, and above it the sky going from deep blue to black. Low sunlight comes in through the pane from the left and lies in one soft patch on the port's surround. The one motion, slow and smooth: as the craft climbs, the horizon sinks a little lower in the pane and its curve grows a little more marked, the blue line of the atmosphere thins, and the sky above it goes fully black. The flight is smooth: no shaking, no jolt, no vibration of the frame. Nothing passes outside the pane: no wing, engine or part of the craft, no flame, fire, plasma, sparks or glow, no debris, no other craft. No person, face, hand, sleeve or reflection of a person anywhere in frame at any moment. Sound: only the craft's own quiet steady hum; no speech, no voice, no music, no narration, no alarm, no radio. No text, letters, numbers, labels or captions. Nothing glows: no screen, readout, indicator, lamp or light strip in the cabin, which is lit only by the daylight through the pane. No stars appear, no moon, no arc or ring of lights; the sun itself does not come into frame; no lens flare or light streaks.

*Fails if* the frame shakes; fire, plasma or a glow shows outside; a wing or any part of the craft comes into view; a person, a hand or a reflection of one appears; anything in the cabin lights up; the earth becomes a whole globe; stars or a flare appear; or a voice, an alarm or music is heard.

**Segment 10, the light crosses the port (extension of segment 9 from its last frame, 10 seconds, no speech).** The second segment to drop if the film runs long.

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same small camera held close to one small round passenger port inside a winged craft climbing to orbit, looking out through the port, 16:9, no cut, no pan, no zoom, only the slight sway of a held camera. The year 2826, high above the earth and still rising. The port is one thick clear round pane in a plain smooth rounded surround of pale matte composite; the cabin wall around it is dim, pale, plain and out of focus. Through the pane: the curve of the earth's horizon low in the view, white and grey cloud over dark sea far below, the thin bright blue line of the atmosphere along the curve, and a black sky above it. Low sunlight comes in through the pane and lies in one soft patch on the port's surround. The one motion, slow and smooth: as the craft leans gently on its way up, the patch of sunlight slides slowly across the port's surround from one side toward the other, and the horizon outside tilts by a few degrees and steadies. The flight is smooth: no shaking, no jolt, no vibration of the frame. Nothing passes outside the pane: no wing, engine or part of the craft, no flame, fire, plasma, sparks or glow, no debris, no other craft. No person, face, hand, sleeve or reflection of a person anywhere in frame at any moment. Sound: only the craft's own quiet steady hum; no speech, no voice, no music, no narration, no alarm, no radio. No text, letters, numbers, labels or captions. Nothing glows: no screen, readout, indicator, lamp or light strip in the cabin, which is lit only by the daylight through the pane. No stars appear, no moon, no arc or ring of lights; the sun itself does not come into frame; no lens flare or light streaks.

*Fails if* the frame shakes; the horizon rolls right over; fire, plasma or a glow shows outside; any part of the craft comes into view; a person, a hand or a reflection of one appears; anything in the cabin lights up; stars or a flare appear; or a voice, an alarm or music is heard.

**Segment 11, the ring from high orbit (image-to-video from still `d7-orbit-a`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a small camera held close to one small round port inside a small passenger craft in very high orbit above the earth, looking out through the port, 16:9, one unbroken take, no cut, no zoom, only the slight sway of a held camera. The year 2826. The port is one thick clear round pane in a plain smooth rounded surround of pale matte composite; the cabin wall around it is dim, pale, plain and out of focus. Through the pane, in black space: the whole earth, a complete globe about a third of the pane's width across, a little more than half of it sunlit, blue ocean and white cloud, the rest dark. Running away from the camera on both sides is the ring, one long thin gently curved line of separate stations in a regular rhythm, one larger and then about nine much smaller, over and over; the nearest are small separate pale shapes too far off for their form to be made out, the farther ones points, crowding closer and closer together until the line meets the earth's edge on each side and passes behind it, like a necklace laid round the planet. The one motion, very slow and even: the craft turns a little, so that the earth and the whole line of stations drift together a short way across the pane, about a tenth of its width in the whole take, without changing size or shape. The stations keep their places along the line: none moves along it, none drifts off it, none grows, flashes or goes out. The earth does not visibly turn. No stars appear at any moment, because the earth and the stations are bright. No person, face, hand, sleeve or reflection of a person anywhere in frame at any moment. Sound: only the craft's own quiet steady hum inside; no sound from outside; no speech, no voice, no music, no narration. No text, letters, numbers, labels or captions. Nothing glows but sunlight on the earth and on the stations: no lights on the dark part of the earth, no engine glow, nothing lit in the cabin. The ring never becomes a solid band, a hoop, a halo or a wheel. No tether, cable or tower; no wheel-shaped station; no craft passing the port; no moon; the sun does not come into frame; no lens flare or light streaks.

*Fails if* stars appear; the line of stations becomes a band, breaks, or its points move along it; a station grows into a detailed shape or a wheel; a tether or a cable appears; the earth spins, swells or leaves the pane; a craft passes the port; a person or a reflection of one appears; anything in the cabin lights up; or a voice or music is heard.

**Segment 12, the drift goes on (extension of segment 11 from its last frame, 10 seconds, no speech).** The third segment to drop if the film runs long.

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same small camera held close to one small round port inside a small passenger craft in very high orbit above the earth, looking out through the port, 16:9, no cut, no zoom, only the slight sway of a held camera. The year 2826. The port is one thick clear round pane in a plain smooth rounded surround of pale matte composite; the cabin wall around it is dim, pale, plain and out of focus. Through the pane, in black space: the whole earth, a complete globe about a third of the pane's width across, a little more than half of it sunlit, blue ocean and white cloud, the rest dark; and the ring, one long thin gently curved line of separate stations in a regular rhythm, one larger and then about nine much smaller, running away on both sides, crowding closer together with distance until it meets the earth's edge on each side and passes behind it. The one motion, very slow and even: the same slight turn of the craft goes on, so that the earth and the whole line of stations drift together a little farther across the pane, the same way and at the same slow pace, without changing size or shape. The stations keep their places along the line: none moves along it, none drifts off it, none grows, flashes or goes out. The earth does not visibly turn. No stars appear at any moment. No person, face, hand, sleeve or reflection of a person anywhere in frame at any moment. Sound: only the craft's own quiet steady hum inside; no sound from outside; no speech, no voice, no music, no narration. No text, letters, numbers, labels or captions. Nothing glows but sunlight on the earth and on the stations: no lights on the dark part of the earth, no engine glow, nothing lit in the cabin. The ring never becomes a solid band, a hoop, a halo or a wheel. No tether, cable or tower; no wheel-shaped station; no craft passing the port; no moon; the sun does not come into frame; no lens flare or light streaks.

*Fails* as segment 11 does, and if the drift reverses or the earth passes out of the pane.

**Segment 13, one station ahead (image-to-video from still `d7-orbit-b`, 10 seconds, no speech).**

> Animate the attached image as its first frame and change nothing in it: footage recorded inside the world by a small camera held close to one small round port inside a small passenger craft in very high orbit above the earth, looking out through the port, 16:9, one unbroken take, no cut, no zoom, only the slight sway of a held camera. The year 2826. The port is one thick clear round pane in a plain smooth rounded surround of pale matte composite; the cabin wall around it is dim, pale, plain and out of focus. Through the pane, in black space: the sunlit earth, blue ocean and white cloud, and a thin curved line of separate stations running away on both sides into the earth's edge. Straight ahead, seen against the earth's sunlit cloud, is one station of that line: a single small dark shape, a plain silhouette with a soft edge, seen from its shadowed side, with nothing on it lit and nothing of its structure to be made out. The one motion, very slow and even: the craft drifts toward that one station, so the dark shape grows a little, from about a twentieth of the pane's width to about a tenth, staying in the middle of the pane; the earth behind it and the line of stations hold their places. The shape stays a plain dark silhouette with a soft edge as it grows: no ring, wheel, spokes, panels, windows, lights or detail of any kind resolves on it. It is the only dark shape: no second station comes near, and no craft crosses the view. No stars appear at any moment. No person, face, hand, sleeve or reflection of a person anywhere in frame at any moment. Sound: only the craft's own quiet steady hum inside; no sound from outside; no speech, no voice, no music, no narration. No text, letters, numbers, labels or captions. Nothing glows but sunlight on the earth and on the far stations: nothing on the dark shape is lit, no lights on the dark part of the earth, no engine glow, nothing lit in the cabin. The line of stations never becomes a band. No tether or cable; no moon; the sun does not come into frame; no lens flare or light streaks.

*Fails if* the dark shape shows structure, a wheel or a ring above all; anything on it lights up; it grows past about a tenth of the pane, or rushes at the lens; a second shape or a craft appears; stars appear; the line of stations becomes a band; a person or a reflection of one appears; or a voice or music is heard.

**Segment 14, it grows (extension of segment 13 from its last frame, 10 seconds, no speech).**

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same small camera held close to one small round port inside a small passenger craft in very high orbit above the earth, looking out through the port, 16:9, no cut, no zoom, only the slight sway of a held camera. The year 2826. The port is one thick clear round pane in a plain smooth rounded surround of pale matte composite; the cabin wall around it is dim, pale, plain and out of focus. Through the pane, in black space: the sunlit earth, blue ocean and white cloud, and a thin curved line of separate stations running away on both sides into the earth's edge. Straight ahead, seen against the earth's sunlit cloud, is one station of that line: a single dark shape in the middle of the pane, a plain silhouette with a soft edge, seen from its shadowed side, with nothing of its structure to be made out. The one motion, very slow and even: the craft goes on drifting toward it, so the dark shape grows a little more, to about a fifth of the pane's width by the end of the take, staying in the middle of the pane; the earth behind it holds its place. The shape stays a plain dark silhouette with a soft edge as it grows: its form is never fully resolved, and no ring, wheel, spokes, panels, windows or detail of any kind comes clear on it. Nothing on it is lit in this take. It is the only dark shape: no second station comes near, and no craft crosses the view. No stars appear at any moment. No person, face, hand, sleeve or reflection of a person anywhere in frame at any moment. Sound: only the craft's own quiet steady hum inside; no sound from outside; no speech, no voice, no music, no narration. No text, letters, numbers, labels or captions. Nothing glows but sunlight on the earth and on the far stations: no lights on the dark part of the earth, no engine glow, nothing lit in the cabin. The line of stations never becomes a band. No tether or cable; no moon; the sun does not come into frame; no lens flare or light streaks.

*Fails if* the dark shape's form comes clear, as a wheel, a ring, a cylinder with panels or anything else that could be drawn from the take; anything on it lights up; it fills more than about a fifth of the pane; a second shape or a craft appears; stars appear; a person or a reflection of one appears; or a voice or music is heard.

**Segment 15, the lights at the opening (extension of segment 14 from its last frame, 10 seconds, no speech).** The film ends on this take's last frame, before the craft arrives.

> Continue from the attached image as the first frame and change nothing in it: the same unbroken shot from the same small camera held close to one small round port inside a small passenger craft in very high orbit above the earth, looking out through the port, 16:9, no cut, no zoom, only the slight sway of a held camera. The year 2826. The port is one thick clear round pane in a plain smooth rounded surround of pale matte composite; the cabin wall around it is dim, pale, plain and out of focus. Through the pane, in black space: the sunlit earth, blue ocean and white cloud, and straight ahead, seen against it, one station: a single dark shape in the middle of the pane, a plain silhouette with a soft edge, seen from its shadowed side, its form not resolved. The one motion, very slow and even: the craft goes on drifting toward the station, and as it nears, a few small low steady white lights come into view on the dark shape, four or five of them, set round one plain dark opening on its near side; the dark shape grows a little more, to about a quarter of the pane's width, and the opening with its small lights stays in the middle of the pane, still some way off when the take ends. The craft does not arrive, enter the opening or touch the station. The small lights are steady and plain: they do not blink, pulse, sweep or change colour, and they light nothing around them. The rest of the shape stays a plain dark silhouette with a soft edge: its form is never fully resolved, and no ring, wheel, spokes, panels, windows, lettering or detail comes clear on it. It is the only dark shape: no second station comes near, and no craft crosses the view. No stars appear at any moment. No person, face, hand, sleeve or reflection of a person anywhere in frame at any moment, in the opening included. Sound: only the craft's own quiet steady hum inside; no sound from outside; no speech, no voice, no music, no narration. No text, letters, numbers, labels or captions. Nothing glows but sunlight on the earth and those few small steady lights: no beam, no floodlight, no glowing interior, no coloured or violet light, no lights on the dark part of the earth, nothing lit in the cabin. No tether or cable; no moon; the sun does not come into frame; no lens flare or light streaks.

*Fails if* the station's form is shown sharply or in full; it is a wheel; the lights blink, sweep, are coloured or number many more than a few; the opening glows from inside or shows a lit dock; the craft arrives or enters; a person, a craft or a second shape appears; stars appear; or a voice or music is heard.

**Judging the film.** Each take is read from frames at 0, 5 and 9 seconds against its still and against its own line above, by the 8 October method, and each join is watched for a jump. A state that has moved from where the still put it fails the take whatever else holds: the arc, the far shore, the track, the port, the earth. The sound is Grok's own (his ruling of 15 November) and is measured, not heard, so a level shape that looks like a voice is put to Dermot's ear. The assembled chain is then held to the brief's own judging line, unchanged. Two takes a segment before it is re-staged here, and the run goes on as his word above has it. Generation is a desktop step on Opus; the kept takes, the alternates and the prompts as run are recorded in the table.

**Open at the time of writing, offered to Dermot as readings.** None blocks the run, and each has the chain's own answer until he gives another.

1. **The film's Lúnasa and the record's.** D7 was drafted on 30 October, when Lúnasa was only the trailer's invention. Since 13 November the record has a Lúnasa (`src/lore/lunasa.md`): a Survey Corps station in Earth orbit, the far end of the forty seconds, with *none of the film's habitat ring, rail,* Brightwater *or Carrigbawn*, and its shape, size and orbit not on file. The chain names nothing on screen, so no take says which station is approached, and the silhouette agrees with *shape not on file*. What still joins the two is the title, and the brief's *Lúnasa as one bead of the ring*. Offered: the film keeps its title and stays an impression of the trailer's Lúnasa, the Journal saying so if it is ever filed; or it is retitled; or the last three segments are dropped and the film ends on the ring. The chain's answer is the first.
2. **Two lines above are now out of date** and are left as written, since this subsection changes no brief: the preamble's *Lúnasa is one bead of the ring and never has the forty seconds*, and D7's *the record gives nobody at Lúnasa*. The second is still true of people. The first is now true only on screen. A one-line note under each is offered.
3. **The rail's mount.** Landward end, the craft going away, as written; or the brief's mast at the causeway's end with the craft coming at the lens, which is the stronger picture and the likelier failure.
4. **Nobody in the film.** As written; or the brief's hands on the wall in segments 1 and 2, added to still 1 as an edit.
5. **Whether Imagine can fade faint points out of a still sky** without moving the bright ones. If it cannot in two takes, the fading is not shown, as D2's door swing was not.
6. **Whether an arc of pinpoints survives 720p video at all,** or comes back as a line. If every take draws a line, the arc is made of the pearls only from the first frame, and the brief's *one event* is given up.
7. **Whether the poster frame helps or harms as the bay's reference.** It ties the remake to the trailer's bay, and it carries the loop the remake drops.
8. **The roar.** Whether Imagine brings a sound in late on request. It cannot be checked here except by its level shape.
9. **The stars on the terrace,** left out for the arc's sake, where a true sky at that hour would keep a few.

**Ruled 15 November 2026 by Dermot**, each *as recommended* (`open-questions.md`, *One Lúnasa or two*):

- **One station.** The film's Lúnasa is the record's, drawn inside a ring that stays the film's own. Points 1 and 2 above close: the film keeps its title, and the two lines take the dated notes beside them. No still and no segment changes. `lunasa.md` changes nothing.
- **One slow point.** In the first terrace take, one small steady point of light crosses a few degrees of sky, clear of the arc, which also shows that the arc is still. It is tried only after the arc has held in a take, and dropped after two failed takes. When it is tried, still 1's *no satellite streak* and segment 1's one motion are rewritten for that take; a take where the point comes back as a streak, or drags the arc with it, fails.
- **The orbit shots stand as written,** following `earth-2826.md`. One judging line is added to every orbit take: *it fails if it draws a broad white cap across the top of the globe*, since the film is set in late summer and Arctic sea ice is gone then.

**Versions.**

| Segment | Take | Date | Start frame | Verdict | Used |
|---|---|---|---|---|---|

Nothing has been generated: no still and no take.

#### Rethink, 19 November 2026, written before anything is generated

**Why.** Dermot, 19 November 2026, verbatim: *"Whereas 'Nothing Taken' and 'Lunasa - a film' need a rethink, please."* Of the model, the same day: *"The Up People's First Stone fit the text as well as being watchable."* And of the film this one remade: *"I also very much like the Up People's First Stone and The Long White Trail … in the current versions as shown in the journal."* Two things have changed since rough cut 3 was made. The record moved toward the Trail on 19 November (`intake-2026-11-19.md`): Earth's ring is canon, and the Lúnasa page has a clock room, a violet light behind a port, a repeater of Threshold's time and a docking spine. And the Trail itself, which he likes as it stands, is already the film of the bay, the rail, the trail and the ring. Nothing below has been generated (Fable). Rough cut 3 stays filed until he picks.

**What the filed cut does, read from frames.** Sixteen frames of the filed rough cut 3, one every seven seconds, on a sheet made on 19 November from `src/video/lunasa.mp4`, with the run log. The audio was not heard.

- **It explains a launch.** A terrace, a rail, a lift-off, a trail, a port, the Earth: six places in 109 seconds, in the order of a journey. Nobody is in it and nothing is said. It answers *how does one get there*, which nobody in the record is asking.
- **The ring is drawn as decoration.** From the terrace it is a high, even arch of large, equally bright dots that spans the whole frame and peaks near its top. The settled look is a low arc a third of the way up the southern sky, pearls with much fainter points between them, crowding into a thread toward each horizon.
- **The craft becomes a rocket.** Seen from the terrace it leaves the far shore on a thick bright trail, steeply.
- **From orbit, the line is ruled across the globe.** The Earth is small in the port, and a straight row of dots runs across its face. The far half of a ring passes behind the Earth, and from a station in the ring no other station lies in front of the globe. So the row reads as a rule drawn on the picture, and the station as a dark blot that grows.
- **It competes with a film he prefers.** The terrace, the trail and the ring are *The Long White Trail*'s three images, here without its voice.
- **What works, and is kept.** The deep round port in a pale surround, the stillness, and the Earth small in the port.

**The choice, which is his.** Two shapes, put to him in `open-questions.md`.

- **(a) Retire D7.** No new film. *The Long White Trail* stands as the film of Lúnasa and the ring, which since 19 November it very nearly is in the record too. This entry is marked retired, and rough cut 3 stays in the Journal as the record of an experiment unless he says otherwise.
- **(b) Rebrief it on the record's own Lúnasa,** from inside, as below. It remakes nothing of the Trail's. It shows the one thing the Trail cannot, the far end of the comparison in the record's present, with the light behind the port where the page puts it.

**Recommended: (b), behind one proof shot.** The basis: the page gained its clock room on the day this was written, no film shows it, and the forty seconds, the premise of the whole work, have no film in the record's own present. The risk is one thing, the digits (see *The digits*). So segment 3 is made first and alone. If the forty seconds cannot be put on screen exactly, the film stops there and (a) stands.

**Title and length.** *Lúnasa.* About 1 minute 30 seconds; accept 1:20 to 2:00.

**What it is.** One room on Lúnasa in 2826 UCSD: the clock room, one officer, and forty seconds waited out in the film's own running time. Its text is `src/lore/lunasa.md`, *The Clock Room* and *The Forty Seconds*. There is no terrace, bay, rail, craft, trail, launch or docking in it, and nobody from the Trail.

**What arrives.** A film he can watch needs something to wait for. Lúnasa's standard turns the hour. Forty seconds later by the viewer's own count, the repeater of Threshold's time turns the same hour, beside it, and both run on. Nothing else happens, and nothing is explained.

**The judging lines, written first.** The film fails if any one of these is true.

1. **The forty seconds are not exact.** The right-hand readout does not turn the hour forty seconds of running time after the left-hand one, to the frame; or either readout stalls, skips, jumps at a cut or shows a malformed digit.
2. **Something glows that would not.** Anything gives light but the atoms behind the sight port and the Earth in the round port. The violet is in the room's open air, or is a column or a beam. A readout glows. A face or a hand is lit by a readout.
3. **The Earth moves.** It turns, wheels or drifts in the port. Or the line of the ring moves, turns, closes into a loop, crosses the face of the globe, or reads as a band, a hoop or a string of lights (large, warm, twinkling or all equally bright).
4. **A person is someone.** A face resolves; a name or a rank is given; a second person appears; the officer is old enough or young enough to be read as the Trail's narrator.
5. **The room takes a side on weight.** Anything floats or falls, or anyone walks.
6. **A word is added.** A sentence is spoken that this brief does not give, one is spoken twice, the three come in more than one voice, or a caption is burned in.
7. **It leaves the room.** Any shot from outside the station, or of a craft, a launch, a shore or a terrace.
8. **The room is our century's, or a film set's.** A bank of screens, a dial, a cable, a rivet, a switch, a status light, grime.
9. **It does not end on the Earth,** small in the port across the room.

And one line for *watchable*: someone who has not read the page can say afterwards what the two readouts are, that they are forty seconds apart, and that they stayed so.

**The place, fixed.** One room and one wall. The camera never leaves the room, and everything the film is about is on the wall it faces.

- **The room.** Small, plain and kept: pale matte composite, walls and floor meeting in a rounded cove, no signage, light in it from no visible fitting, low and even.
- **The standard.** On the left of the far wall, set into it: a sealed housing of the same pale composite with one small round sight port, above head height. Behind the port, deep in the dark of the chamber, is a small faint violet glow, no bigger than a pea, which comes up and fades as the chamber loads. *"That is the one light in the room."* Under the port is the standard's readout: a matte, unlit panel, pale, read by the room's light like a page.
- **The repeater.** Beside it on the right, at the same height, hangs a second panel of the same kind and size, alone, with no port and no housing: Threshold's station time.
- **The port.** Further right on the same wall, apart from the two panels, one deep round port in a pale surround. In it is the Earth, small and partly lit.
- **The bench.** Under the two panels, a plain bench with a rail along its front edge and one thin matte sheet lying on it.
- **The officer.** One adult of the Survey Corps on duty, at the bench below and between the two panels, back to the lens, one hand closed on the rail: a matte deep olive field shell with a high soft collar and nothing on its back, hair bound close at the nape. The record gives nobody at Lúnasa, so this is nobody: unnamed, unranked, of no age the eye can fix.
- **Three framings of that wall, and no other shot.** *The room*: from the back of the room at chest height, the whole wall and the officer. *The wall*: square-on and closer, the sight port and the two panels filling the frame, nobody in it. *The port*: the round port alone, the Earth in it.

**From the record, and offered.** A brief binds what the record fixes, and the rest is offered (the 7 November rule).

- *From the page:* the station and its duty; the ytterbium standard read behind a port and its violet; the repeater hanging beside it; that the same two times are read here as on Dock Seven; forty seconds, which neither grow nor shrink; that neither clock is wrong.
- *Offered, and not on record:* that the room has a port; the bench and the sheet; the officer; the hour that turns (04:00:00, and any hour would do). Which end leads is not stated on any page; the film follows the Season 1 banner and brief D1, where the repeater of Lúnasa's time reads forty seconds ahead of Threshold's own, so here the standard turns first.
- *Kept open on purpose:* whether the room has weight. The page says the station's shape and size are not on file, and a room that spun for weight would wheel the Earth round in its port. So nobody walks, nothing is set down and nothing hangs loose, and the frame says nothing either way.
- *Not shown, so nothing is owed:* the station from outside, the docking spine, the ring's other stations as shapes. No sheet in `starship-design.md` is needed for a film that never leaves one room.

**The digits.** No generator is asked for a numeral, in a still or in a clip. Both readout panels are blank in every still and every take. The times are set in the cut, on every frame in which a panel shows, in the stroke font `scripts/set-readouts.py` draws, dark on the pale panel, as *hours:minutes:seconds*. They are computed from the film's own running time, so the forty seconds are exact by construction and no cut can break them: at running time *t* seconds the left-hand panel reads 04:00:00 plus (*t* minus 28), and the right-hand panel reads forty seconds less. The script sets one frame today; a clip needs it run frame by frame with the time advanced, a small extension that is tooling and is written first, tried on the wall still held for ten seconds before a Grok take is spent. The wall framing is square-on so that each panel is a plain rectangle, and the mount in those shots must hold: a take in which a panel creeps more than a few pixels fails, since the digits would slide off it.

**The voice.** Three sentences of the page, each said once, by one plain voice reading the Archive's page as written. It is not the officer's voice, and nobody in the room speaks.

| Where | The words | From the page |
|---|---|---|
| Segment 1, over the room | *Lúnasa is a Survey Corps station in Earth orbit. Among its duties, it keeps the reference time standard against which Threshold Station checks its own.* | *What It Is* |
| Segment 5, over the Earth | *Every correction physics predicts has already been made, and the forty seconds are what is left.* | The *In short* line |
| Segment 8, after the second turn | *Neither clock is wrong: the gap is the reading.* | The *In short* line |

All three are taken from one clip, so that they are one voice, and laid in the cut. The sound is Grok's own, moved and not replaced: the room's low hum, and no sound from outside. Nothing ticks, and no tone marks either turn. The subtitle track carries the three sentences exactly. If two sentences serve better than three, the second is the one to drop. Whether the voice is right is for his ear.

**The physics, owed an Opus read before any still is made** (`CLAUDE.md`: a prompt that is mostly geometry is Opus's). These are worked for geostationary height, 42,164 km from the Earth's centre.

- **The Earth's size.** Its disc is about 17° across. In the port framing it is asked for at about a third of the pane's width.
- **The Earth does not turn.** The station keeps pace with the ground below it, so the port holds one face of the Earth, always. Only the line between day and night crosses that face, once a day, which is nothing in ten seconds. A take in which the globe rotates fails.
- **The ring from inside itself.** Seen from within its own plane a circle is a straight line. It runs level through the middle of the globe and is hidden where the globe is. Every station inside the port's field is on the far half of the ring, about 80,000 km off. At the layout of 30 October (one large habitat to a degree, nine small stations between) the large ones stand half a degree apart there, about one thirty-fifth of the globe's width, and the small ones three arcminutes apart, which a frame of this size does not separate. So the line is a fine thread running out from behind each limb, with a slightly brighter bead at even intervals, never a row of lamps.
- **Whether the line records at all.** An exposure that holds the lit Earth loses the stars. Whether it keeps points of about magnitude 0 to +1, which is what a two-kilometre habitat comes to at that distance, is the question. If it does not, the port shows the Earth alone and this film does not draw the ring; the ending stands either way.
- **Which face.** The page makes Lúnasa one of the points seen from Ireland, so Ireland is somewhere on the face the port shows; where Lúnasa sits along the ring is not on file. The still asks for ocean under broken cloud with no continent's whole outline. A take fails on this only if the face could not hold Ireland at all. It also fails if it draws a broad white cap across the top of the globe (`earth-2826.md`).
- **No stars** beside the lit Earth, and no sun in frame.

**The stills.** Three, on Gemini by `node scripts/image-edit.js`, 16:9, kept in `F:\CLAUDE\Director films\D7\rethink\`, outside the repository, each judged by the image critic, century first. The second round of any still is an edit of the best take that names only its faults. No child is in any still or segment, and none is to appear (`CLAUDE.md`, *A child is pictured grown*).

*Master, `d7r-room`, the room.* No reference attached; the kept port still of 15 November (`d7-window\v3.jpg`) may be attached for the port's surround only.

> A single frame of documentary footage recorded inside the world by a fixed 29th-century camera, a photograph, 16:9, available light only, shadow with detail kept in it. A small plain instrument room on a station in high orbit in the year 2826, clean and well kept: walls, floor and ceiling of pale matte composite, seamless, meeting in rounded coves, lit low and evenly from no visible source. The camera is at the back of the room at chest height, facing the far wall square-on. On the left of that wall, set flush into it above head height, is a sealed housing of the same pale composite, plain, with one small round sight port of dark glass. Deep behind the glass is one small faint point of violet light, no bigger than a pea, soft-edged, the only thing in the room that glows; it lights nothing around it. Directly under the sight port is a flat rectangular panel, matte, pale, blank and unlit, like an unprinted card. Beside it on the right, at the same height and of the same size, hangs a second flat panel, matte, pale, blank and unlit, alone on the wall. Further to the right on the same wall, well apart from the panels, is one deep round port in a thick pale surround; in it, against black, the Earth is seen whole and small, about a third of the port's width, partly sunlit, blue ocean under broken white cloud, and a pale patch of its light lies on the inside of the surround. Under the two panels runs a plain narrow bench of the same composite with a rounded rail along its front edge, and on the bench lies one thin matte pale sheet, blank. One person is at the bench, below and between the two panels, at full length, back to the camera, head bowed toward the sheet, one hand closed on the rail: an adult of middle build in a matte deep olive field shell with a high soft collar and nothing on its back, plain dark trousers and soft dark shoes, hair bound close at the nape. Nothing is in motion. No text, letters, numbers or marks anywhere, and none on the panels or the sheet; nothing glows but the one violet point and the Earth; no screens, displays, holograms, dials, status lights, switches, cables, pipes, rivets or signage; no lamp, bulb or light fitting; no chair, cup or loose object; nothing floating; no second person; no stars in the port; no window but the one port; no rust, grime or clutter.

*It fails if* either panel carries a mark or gives light; the violet is outside the port, large, or a column; a screen, a dial or a fitting is in the room; any part of the face shows; anything floats or hangs loose; the port shows stars, a ring as a hoop, or no Earth; or the room, guessed cold, is put in our century.

*`d7r-wall`, the wall.* The kept master attached.

> The attached photograph shows a room. Make a second photograph of the same room by the same fixed camera, moved forward and raised until it faces the upper left of the far wall square-on from two paces. The frame holds the small round sight port of dark glass with its one faint violet point deep behind it, the blank matte pale panel directly under it, and the second blank matte pale panel beside it on the right, the two panels level, the same size, each a plain rectangle with its edges parallel to the frame, and pale wall all round them. Nobody is in the frame, and neither the bench nor the round port with the Earth is in it. Keep the wall, the housing, the panels, the light and the violet point exactly as they are in the attached photograph. No text, letters, numbers or marks anywhere; nothing glows but the violet point.

*It fails if* a panel is not a plain blank rectangle square to the frame, the two differ in size or height, anything is lettered, or the wall is not plainly the master's.

*`d7r-port`, the port.* The kept master attached. Made only after the Opus read above.

> The attached photograph shows a room with one deep round port in its far wall. Make a second photograph by the same fixed camera, moved forward until the port fills most of the frame's height, square-on, its thick pale surround at the edges of the frame with a pale patch of earthlight on its inner side. Through the port, against black: the Earth, whole, in the exact centre, about a third of the port's width, partly sunlit, blue ocean under broken white cloud, no continent's whole outline, no white cap across its top. Level with the middle of the globe, a very fine straight thread of tiny separate points of white light runs out from behind the globe's left edge to the port's rim, and another from behind its right edge, with a slightly brighter point at even intervals along each; no point lies across the face of the globe. No stars, no sun, no other craft or station as a shape. Nobody is in the frame. No text, letters or numbers.

*It fails on* judging line 3, on stars, or on a recognisable map that could not hold Ireland.

**How the film falls.** Nine clips of 10 seconds, 720p, 16:9, sound on, 90 seconds.

| Segment | Framing | Start | The one motion | Readouts, set in the cut (left, right) | Voice |
|---|---|---|---|---|---|
| 1 | The room | `d7r-room` | The violet point comes up and fades, slowly, twice | 03:59:32 to :42, 03:58:52 to 03:59:02, a few pixels high | The first sentence |
| 2 | The room | Last frame of 1 | The officer's head lifts from the sheet to the two panels | Running on | None |
| 3 | The wall | `d7r-wall` | The violet point comes up and fades | 03:59:52 to 04:00:02; the left panel turns the hour at 8 seconds. Right: 03:59:12 to :22 | None |
| 4 | The wall | Last frame of 3 | The same | 04:00:02 to :12, 03:59:22 to :32 | None |
| 5 | The port | `d7r-port` | The camera drifts a hand's width toward the port; the Earth and the thread do not move | None in frame | The second sentence |
| 6 | The room | Last frame of 2 | The officer's head turns a little to the right, to the repeater, and stays | Running on | None |
| 7 | The wall | `d7r-wall` | The violet point comes up and fades | 04:00:32 to :42. Right: 03:59:52 to 04:00:02; the right panel turns the hour at 8 seconds | None |
| 8 | The wall | Last frame of 7 | The same | 04:00:42 to :52, 04:00:02 to :12 | The third sentence, at about 3 seconds |
| 9 | The room | Last frame of 6 | The officer's head lowers to the sheet. The Earth is small in the port | Running on | None |

The first turn falls at 0:28 of the film and the second at 1:08. Between them are twelve seconds of the wall, ten of the Earth, ten of the officer waiting, and eight of the wall again. Neither turn falls on a join.

**Prompts to paste.** Each is pasted as one line with its start image attached: the segment's paragraph, then the shared tail. What does not move comes first.

*Shared tail, every segment:*

> Footage recorded inside the world by a fixed camera in a small plain instrument room on a station in high orbit in the year 2826, 16:9, one unbroken take, no cut, no pan, no zoom, the frame held steady. Low even light from no visible source. Nothing glows but one small faint violet point deep behind a sight port, and the Earth where it is in frame. The pale panels are blank, matte and unlit and stay blank: no text, letters, numbers, marks or captions appear anywhere at any moment. Nothing floats, falls or drifts loose. No second person. No music, no ticking, no tone; only the room's low hum.

*Segments 1, 3, 4, 7 and 8* (segments 4 and 8 open with *Continue from the attached image as the first frame* instead).

> Animate the attached image as its first frame and change nothing in it. The camera is fixed and the frame does not move at all. The panels stay blank. Anyone in the frame stays exactly as they are, and does not move. The one motion: the small violet point behind the sight port slowly brightens a little and slowly fades almost to nothing, twice in the take, soft-edged, never larger than a pea, never outside the glass, lighting nothing around it. In segment 1 a plain, level voice says once, unhurried, over the room: "Lúnasa is a Survey Corps station in Earth orbit. Among its duties, it keeps the reference time standard against which Threshold Station checks its own." In the other segments no word is spoken.

For the voice, one further take of this prompt carries all three sentences with a pause between them, and the cut takes them from it.

*Segment 2.*

> Continue from the attached image as the first frame and change nothing in it. The camera is fixed. The panels stay blank; the Earth in the round port does not move or turn. One person is at the bench with their back to the lens, one hand closed on the rail. The one motion, small and slow: the bowed head lifts until it is level, toward the two panels on the wall, and is still. The person does not turn, step or let go of the rail. No word is spoken.

*Segment 5.*

> Animate the attached image as its first frame and change nothing in it. The Earth is fixed in the centre of the port and does not move, turn, rotate or drift at any moment; the fine thread of points beside it is fixed in space and none of its points moves, turns or twinkles. The one motion: the camera drifts very slowly straight toward the port, by a hand's width in the whole take, so that the pale surround widens a little at the edges of the frame. Nothing else changes. No stars appear. Nobody is in frame and no word is spoken.

*Segment 6.*

> Animate the attached image as its first frame and change nothing in it. The camera is fixed. The panels stay blank; the Earth in the round port does not move or turn. One person is at the bench with their back to the lens, head level. The one motion, small and slow: the head turns a few degrees to the right, toward the right-hand panel, and stays there, still, to the end. No more than the back of the head and an ear is ever seen. The person does not turn round, step or let go of the rail. No word is spoken.

*Segment 9.*

> Continue from the attached image as the first frame and change nothing in it. The camera is fixed. The panels stay blank; the Earth in the round port does not move or turn. The one motion, small and slow: the person's head comes back to the middle and lowers toward the sheet on the bench, and is still. Then nothing moves but the violet point, which fades. The person does not turn round, step or let go of the rail. No word is spoken.

**Judging the film.** The proof shot first: segment 3, alone, with its digits set, read frame by frame through the turn. Then each still by the image critic. Each take from frames at 0, 5 and 9 seconds against its still and the nine lines; the readouts read digit by digit at every second of the assembled cut; then the whole against the line for *watchable*. Two takes a segment at most; a segment that fails twice on one cause is re-staged here before a third is run. Generating is a desktop step on Opus.

**What this closes, if he picks (b).** The Journal entry's open question, whether the station in the film is the record's Lúnasa: this film is made from that page and from nothing else. And the 17 November reading under *Trailers: the bar*, that D7 fails the first test because its ring is the films' alone, which the 19 November ruling has already overtaken. Whether the finished film replaces rough cut 3 under its filename or is filed beside it is his, when there is a film to pick.

**Beside D1.** *Incident Report 001* shows the same two times from the shore's end, in 2815, and has no filed cut. This is the far end, in the present. If this film is made, a chained remake of D1 waits until it has been seen, since the two share their central image.

**Open at the time of writing.** Whether digits set by script sit on a generated take as if they were there. Whether Imagine holds a frame in which almost nothing moves for ten seconds without inventing a motion, a rotation of the Earth above all. Whether a violet point stays a point. Whether one voice reading three sentences of an Archive page sounds like the record or like a guide.

---

## A clip for *Four Seconds*, offered 3 November 2026, written before anything is generated

**15 November 2026: the prompt of 3 November is not to be run.** Lev, a child of
about eight, was that clip's subject. Since 15 November no generated picture on
the site has a child as its subject, and a film prompt is revised to that rule
before anything is generated (`CLAUDE.md`, *A child is pictured grown*;
`intake-2026-11-15.md`, first section). The critic read of that day marked the
prompt *not to be run as written* and put the revision to Dermot
(`open-questions.md`, *The open points of `intake-2026-11-15.md`*, point 8).
**Ruled the same day, his "As recommended":** re-stage it with the walkway as
subject (the crowd stopped, then moving) and Lev a small figure at the far end,
back to the lens. **The re-staged prompt was written the same day and is the
next subsection. It is the only prompt in this section that runs.** The
3 November prompt, its notes and its revisions are kept under it for the record.

### Re-staged 15 November 2026: the walkway is the subject

Written before anything is generated (`grok-clips`). Two parts of 10 seconds,
720p, 16:9, on Grok Imagine: part 1 new, part 2 an extension from part 1's last
frame, 20 seconds in all, two takes of each. Generating is a desktop step on
Opus. Nothing has been generated at the time of writing.

**What the clip is now.** The subject is the Deck 7 walkway at shift change: a
crowd that has stopped, and then a crowd that is walking. Those are the two
things the chapter gives that a still cannot show. S02E10C01, Achebe's block:
*"The walkway was full and not moving. It had the shape of a crowd that has
forgotten why it is one"*, and *"everyone in the crowd was bent a little towards
it"*. Lev's block: *"It took about four seconds"*, and *"the walkway started
moving again as if it had never stopped."* The four seconds are still in the
clip, but they are measured on the crowd, which holds still through them. Lev
is in the frame as the rule allows a child to be: *"a small figure in a crowd
or at a distance, not the subject"*.

**What changes from the 3 November staging, and why.**

| | 3 November | Re-staged | Why |
|---|---|---|---|
| Subject | The boy, followed down a lane | The stopped crowd, then the walking crowd | The ruling |
| The boy | Enters past the lens, large in the near frame | At the far end from the first frame, small, soft, seen only from behind | A child who passes a knee-height lens fills it |
| His head | A half-profile allowed, and a turn to the detective | He never turns; no profile | *"Back to the lens"*; the intake's reason is faces |
| Sightline | A lane down the middle, leading to him | One narrow gap between standing legs, left of centre | A lane's lines converge on whoever stands at its end and make that figure the subject |
| Nearest thing | The boy's back | Adult legs and backs, large and sharp | What the eye meets first is the crowd |
| Carrier | A capsule with a lattice end | A low rounded-oblong seamless case, no opening seen | Dermot, 12 November: *"a hyper-sealed electrostatic holding capsule not an ordinary catbox"* (`images.md`, `lev.jpg`) |
| Galley door | An open doorway spilling warm light | Not in frame | Knopka's block has the warm coming out *"at the bottom"* of a door: it is air, which a lens does not see, and a lit doorway would pull the eye to the far end |
| Parts | Three (walk, four seconds, release) | Two (the stillness with the four seconds in it, the release) | The walk is gone; a stopped crowd with nothing moving in it is a still |

**What still binds from the notes below, unchanged.** *What is never in frame*:
Muffin is not depicted, and no animal is visible in any frame, a rabbit
included; this is still solved by staging, with the boy's back and the case
between the lens and the floor in front of him, and the prompt says nothing of
what is there. *The mount, and why*: the device on the rim of Barsik's bin at
the end of the walkway, at knee height, named so that Grok holds it, with the
hum as the frame's only movement. *The register*: warm, ordinary, a little
funny, not haunted. *The rabbit*: whatever leaves the case leaves out of the
lens's sight.

**Readings the re-staging makes, offered and not required** (the 7 November
rule: a prompt binds what the record fixes, and the rest is offered). None is
canon.

- The boy is already standing at the front when the clip opens. Lev's block has
  him come out at the front and then watch for some time before he acts; the
  clip starts inside that watching. How he came through the crowd is not shown.
- The opening of the case, the rabbit, the lift and the shutting all happen in
  front of his body. The frame holds a crouch, a word, and two hands on the
  case. The frame knows less than the scene.
- Two or three things are set down on the deck by people's shoes, a glove and a
  small folded cloth bag. The chapter counts sixty-one such articles from the
  third night and has Achebe set the carrier down *"to free a hand"* on this
  day; it does not list this day's articles. This is the first sentence to cut,
  and a take without it passes.
- The walkway *curves gently away*, after the Eden deck prompts filed on
  12 November (*"The deck curves gently away"*, `image-prompts.md`). It is the
  frame's sign of a habitat now that the case is too small to be one. No page
  says which way the Deck 7 walkway runs on the ring.
- Shoes and trouser hems are the sharpest made things in a knee-height frame,
  and the generator's stock ones are today's. `civilian-dress.md` gives Eden
  knitwear, soft jackets, aprons and plain trousers and says nothing of shoes,
  so the prompt asks only for plain soft shoes and low boots and refuses
  trainers, jeans and logos by name.
- The cook's laugh is heard and not seen: one adult's laugh from somewhere in
  the crowd.
- The case carries no indicator light here. The 12 November portrait gave it
  one tiny pale one; at this distance a lit point would be the brightest thing
  at the far end.
- The boy's look round for the detective, her going for her rabbit and the walk
  back to the bureau are in the chapter and not in the clip. The crowd closes
  over the far end and the clip ends on the walkway walking, so no direction is
  asserted for either of them.

**The one word: RULED 15 November 2026, (a), his "As recommended": the word stays.** Was: put to him as options; the prompt is written for (a). The
chapter has *"No," Lev said. Out loud. In front of everybody.* The ruling fixes
the picture and says nothing of the sound.

- **(a) The word stays**, heard small and clear from the far end, with no
  caption. The silent wording below is used only if a take captions the word,
  adds other speech or gives the word to an adult.
- **(b) Nobody speaks.** Part 1 runs in its silent wording from the start, and
  the stillness, the one laugh and the walking carry it.

**Recommended: (a).** The basis is the record. The rule is about what is
pictured (*"No generated or composited image on the site has a child as its
subject"*), and the same day's read left *Before the Close* as written with a
child's voice from off frame, which his "As recommended" accepted. The chapter
makes the word the act, and with the walkway as subject it is the crowd's half
of the scene: what a deck full of people heard. Without it the frame shows a
crowd stopping and starting for no reason a viewer is given. What (b) has for
it: the voice is the one thing in the clip that is the child's alone, and a
generator may letter it. This is not a dilemma, so the run follows (a) unless
he says otherwise (`open-questions.md`, *The* Four Seconds *clip, re-staged*).

**How the two parts fall.**

| Part | New or extension | Start | Seconds | The one motion | Sound |
|---|---|---|---|---|---|
| 1, the four seconds | New | Text-to-video | 10 | Nobody moves; far off, a small figure crouches and settles back | Hum; one word, *No* |
| 2, the walkway moves | Extension of 1 | Last frame of 1 | 10 | The whole crowd starts walking and closes over the far end | Hum; one laugh; shoes |

The join falls where nothing moves and the case is shut on both sides of it:
the boy crouched at the far end with both hands on the case, and the crowd
standing as it stood.

**Prompts to paste, each as one line.** Enter sends in that box, so each part
goes in as one paragraph. Each stands alone, since an extension is not known to
carry anything over but its start frame. If part 1 will not go in at its
length, cut the sentence about the glove and the bag first, then the
present-day object negatives (louvres, rivets, door frames, lever handles), and
never the mount, the sentences that keep the boy small and turned away, or the
animal negatives.

**Part 1, the four seconds (new, text-to-video, 10 seconds, one word).**

> Footage recorded inside the world by a small fixed recording device resting on the rim of a low bin at one end of a walkway aboard a large space habitat in the year 2827, at knee height, looking level along the walkway, 16:9, 24 fps, 10 seconds, one unbroken take, no cut, no pan, no zoom, no push in, never moved and never lifted, the frame alive only with the faint steady vibration of a deck that is running. The subject is the walkway and the crowd standing on it. The walkway is clean and well kept: wall and floor of smooth seamless pale composite meeting in a softly rounded cove, the floor a matte resilient deck surface curving gently away, no fittings, no signage, the ceiling out of frame, soft even light from no visible source, nothing glowing. It is full of adults at a shift change, a few dozen, in plain work clothes of quiet natural colours, knitwear, soft jackets, aprons, plain trousers, plain soft shoes and low boots, and not one of them is walking: they stand across the whole width of the walkway with their backs to the lens, the nearest legs and backs large and sharp and filling most of the frame, every figure leaning a little towards one place on the floor far down the walkway, a place the standing bodies hide completely for the whole take. Here and there beside a pair of shoes something small has been set down neatly on the deck, a glove, a small folded cloth bag, two or three in all. Through one narrow gap between the standing figures, a little left of centre, the far end is seen small and soft with distance: a young woman with a long dark plait down her back, in a plain blue-grey band-collared work jacket, standing very still and turned away; at her feet a low rounded-oblong case of pale matte composite, seamless, with no handle and no opening; and beside it a small boy in a plain grey jumper, seen only from behind, standing still, tiny in the frame, less than a sixth of the frame's height, softer than the near figures, never the centre of the picture, never turning round. For the first three seconds nobody moves at all. Then the one motion, small and far off: the boy crouches beside the case with his back squarely to the lens and leans forward low, so that his own back and the case hide his hands and the floor in front of him, and from far down the walkway a child's voice says one ordinary clear word, No, the only word spoken, with no caption; then he settles back on his heels with both hands resting on top of the case, the whole action about four seconds, plain and unhurried. For the last three seconds nothing moves: he stays crouched and the crowd stands exactly as it stood, still leaning. Filmic grain, a real lens, the near figures sharp and the far end soft. Warm, ordinary, a little funny and quietly dramatic, a habitat's afternoon, not haunted. Sound: the low hum of a running deck, cloth, that one distant word; no other speech, no music, no narration. No text, letters, numbers, signage, subtitles, captions or watermarks. No screens, holograms, projected interfaces or glowing panels; no ceiling panels, light strips, lamps or light fittings; no lens flares or light rays. No animal of any kind anywhere in the frame, no cat, dog, kitten, puppy, lamb or rabbit, no fur, ears, tail, eyes or face on the floor, in any hand or in anyone's arms, not blurred, not partly, not in silhouette. No pet carrier, cage, crate, grille, mesh, wire door, carry handle, box with a door, egg shape or ball. No child near the lens, no child's face, no closer view of the boy, no other children. No jeans, trainers, logos, backpacks, shopping bags, phones, uniforms, badges or weapons; no louvred grille, rivets, exposed screws, door frames, lever handles, stainless steel or present-day corridor; no litter, grime, dust or clutter. Not a render, not a miniature, not a music-video montage, not a trailer.

*The silent wording* (option (b), and the fallback under (a)): replace *and from
far down the walkway a child's voice says one ordinary clear word, No, the only
word spoken, with no caption;* with *nobody speaks;* and replace *that one
distant word; no other speech* with *no speech*. Nothing else changes.

*Fails if* the boy is the subject, by any of the tests under *Judging* below;
any animal is visible anywhere; anyone in the crowd walks, turns or
straightens; the camera moves, pushes in or reframes; the far place the crowd
leans towards is shown; any word but the one is heard, the word comes from an
adult, or a caption appears; or the take does not end with the boy crouched,
both hands on the case, and nothing moving.

**Part 2, the walkway moves (extension of part 1 from its last frame, 10 seconds, no speech).**

> Continue the same unbroken shot with no cut, from the same small fixed recording device on the rim of the low bin at knee height, never moved, no pan, no zoom, no push in, in the same soft even light from no visible source: the same clean, well-kept habitat walkway of the year 2827, seamless pale composite wall and floor meeting in a rounded cove, the ceiling out of frame; the same crowd of adults in plain work clothes standing across its whole width with their backs to the lens, the nearest legs and backs large and sharp; and through one narrow gap, a little left of centre, the far end small and soft with distance, where a small boy seen only from behind is crouched with both hands on a low rounded-oblong pale seamless case, beside a young woman with a long dark plait who stands turned away. For the first two seconds nobody moves. Then somewhere in the crowd one adult laughs once, short and surprised. The small far figure stands up with the case held against his chest in both arms, his back still to the lens, tiny in the frame, never turning round. Then the one motion, and it is the whole picture: the walkway starts to move again as if it had never stopped. The standing figures straighten, turn and walk, unhurried, some away down the walkway and some towards the lens and past it on both sides, legs and hems crossing close to the lens and blurring, the narrow gap closing, so that within three seconds the far end, the woman and the boy are hidden behind walking figures and are not seen again. To the last frame it is an ordinary shift change walking, as if nothing had happened. Filmic grain, a real lens. Warm, ordinary, a little funny, not haunted. Sound: the low hum of a running deck, the one laugh, many soft shoes on the deck, cloth; no speech, no music, no narration. No text, letters, numbers, signage, subtitles or captions. No screens, holograms or glowing panels; no ceiling panels, light strips or lamps. No animal of any kind anywhere in the frame, no cat, dog, kitten, puppy, lamb or rabbit, no fur, ears, tail, eyes or face on the floor, in any hand or in anyone's arms, not blurred, not partly, not in silhouette. No pet carrier, cage, crate, grille, mesh, wire door, carry handle, egg shape or ball. No child near the lens, no child's face, no closer view of the boy, no child walking towards the lens, no other children. No camera following anyone, no rise above the crowd, no camera passing through anyone, nobody running, no sudden movement at the lens. No jeans, trainers, logos, backpacks, shopping bags, phones, uniforms or badges; no door frames, lever handles or present-day corridor; no litter, grime or clutter. Not a render, not a miniature, not a music-video montage, not a trailer.

*Fails if* the boy is the subject, by any of the tests under *Judging*; he
walks towards the lens or is still in clear view in the frame at 9 s; any
animal is visible; any word is spoken or lettered; the camera follows, rises or
moves; or the walkway is not walking by the end, since that motion is why the
clip exists.

**Judging, written before anything runs.** Frames at 0, 3, 6 and 9 s of each
part, by the 8 October method, each looked at twice as `image-critic` asks: at
about 300 pixels wide and at full size. The lines are in order, and a take that
fails one is not judged on the rest.

1. **The boy is the subject.** The take fails if, in any judged frame, he
   stands taller than a fifth of the frame's height (144 pixels of 720); he is
   nearer than the far end; any of his face shows, a profile included, or he
   turns; he is as sharp as the nearest figures or sharper; the crowd has
   parted to present him, with a lane or leading lines ending on him; or the
   camera has moved towards him. And the thumbnail test: if someone shown the
   frame at 300 pixels wide would say *a boy* before *a crowd* or *a corridor
   full of people*, it fails. Any other child in view fails it too. A take in
   which the boy cannot be found at all does not fail the rule; it is kept as
   an alternate and Dermot is told, since his ruling asks for the small figure.
2. **A creature.** Any animal visible anywhere, blurred, partial or in
   silhouette, with no exception for a rabbit.
3. **Render or miniature.** The frame reads as a render, a model or a diorama,
   or the camera is high and looking down.
4. **The century.** The walkway reads as a present-day building; a ceiling
   panel, lamp or fitting is in frame; anything glows; the case shows a handle,
   a grille, a mesh, a wire door, a box shape or an egg shape; trainers, jeans,
   a logo, a backpack or a phone is legible in the near frame; or what is set
   down on the deck reads as litter.
5. **Lettering.** Any letter, numeral, sign or caption.
6. **The motion.** In part 1 anyone but the boy moves, or the camera leaves the
   bin. In part 2 the walkway does not start walking, or the camera follows.
7. **The modesty bar and the tone.** Everyone is dressed for work; nothing
   menaces; nobody is hurried or afraid.

A part that passes the frames is then watched once for the sound (the one
word, from a child, far off, uncaptioned; the one laugh, an adult's), and the
join is watched for a jump in the crowd or the case. Part 1 is judged before
part 2 is run, since part 2 starts from its last frame.

**If part 1 fails line 1 twice, a third take is not run.** A generator enlarges
a distant figure, and a second failure for the same reason is a problem of
geometry, not of wording (`image-critic`, section 4). The repair offered is a
start still: the frame of part 1 as its prompt describes it, from *The subject
is the walkway* to *never turning round*, under the stills' opening
(*Documentary photograph taken inside the world by a 29th-century camera*),
written under this heading before it is run, judged by the same seven lines,
and then given to Imagine as part 1's start frame with only the motion asked
for. That still is a working frame and is not filed on the site.

**Checked before anything runs.** Against `image-critic`'s ladder: what a
viewer sees first is a crowd's legs and backs (rungs 1 and 2 have no body to
misread); the camera is low and level and the near figures are large, so the
frame is not a diorama (rung 3); adult legs at the lens give the scale (rung
4); the child rule, the period, the light and the lettering are lines 1, 4 and
5 above (rung 7). Against `twenty-ninth-century-look`: every made thing in
frame is named in the century's form (the composite cove, the deck surface, the
seamless case, the cloth, the shoes); no fitting is named for the light and the
ceiling is kept out of frame, which is the skill's own trap; no display is in
frame; and what could date the frame is listed and refused (trainers, jeans,
logos, bags, a door frame, a ceiling panel). The hint of the century is the
seamless curving deck and the case with nothing to carry it by.

**Where a kept take is filed: RULED 15 November 2026, (a), his "As recommended": Lev's page, in its *Four Seconds* section.** Was: not decided, and need not be until one is
kept. The 3 November notes name no page. **(a)** Lev's page, in its *Four
Seconds* section, since the request named his scene. **(b)** Muffin's page,
since the stopped walkway is what the specimen does and the page's own picture
shows nothing of it. **(c)** The chapter's own page, which no clip has used.
**Recommended: (a).** Every filed clip sits on the page of the thing it shows
(`lib/videos.js`), and his request was *"The scene where Lev catches Muffin"*.

### Superseded: the prompt of 3 November 2026, kept for the record, not to be run

Everything from here to the end of this section is the 3 November offer with
its revisions of 6 and 7 November. Its three prompts, its list of negatives,
its judging paragraph and its notes on the dialogue, the three parts and the
carrier are superseded by the subsection above. Four of its notes still bind
and are named there. Its last paragraph, *Open at the time of writing*, is
still open, since nothing has been run: whether an extension holds the mount
and the crowd, and whether Imagine carries a child's one word without
lettering it.

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
at the far end is hidden behind the capsule and the bodies from a lens at that height, where a
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
a matte resilient deck surface, clean and kept, a
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

> Footage from a small fixed recording device resting on the rim of a low waste bin at one end of a walkway aboard a large space habitat, about knee height, looking straight down the length of the walkway, never moved and never lifted for the whole take, the frame alive only with the faint continuous vibration of a deck that is running. Long unbroken take, one shot, no cuts. Diegetic light only: warm light spilling from a rounded galley doorway at the far end of the right-hand wall and soft even habitat daylight, nothing glowing that would not glow. Matte surfaces, real materials, clean and well kept. Deep shadow with detail retained in it. Restrained, patient, unhurried, no event arriving suddenly. Cinematic, filmic grain, shallow depth of field, the near legs sharp and the far end soft. Warm, ordinary, a little funny and quietly dramatic, a habitat's afternoon, not haunted. 24 fps, 16:9 landscape, 10 seconds. The walkway is unmistakably a habitat's: wall and floor of smooth seamless pale composite meeting in a softly rounded cove, the floor a matte resilient deck surface, clean and kept, no fittings and no signage. It is full of people at shift change in plain work clothes of quiet natural colours and not one of them is moving: they stand on both sides of the walking line leaving a narrow lane down the middle, backs and shoulders to the lens, every figure leaning a little towards one place on the floor at the far end of the lane, just beyond the capsule, near the lit doorway, which the capsule and the standing bodies hide completely from the lens for the whole take, so that the lens sees only legs, backs and the lane. At the far end of the lane, small with distance and softened, a young woman with a long dark plait down her back in a plain blue-grey band-collared work jacket stands very still, three-quarters turned away, and at her feet sits a small pet carrier of the century: a smooth rounded capsule of pale matte composite with no handle and nothing to carry it by, one end a flush panel of fine woven lattice, that end turned away from the lens. A boy of about eight in a plain soft jumper, plain trousers and plain shoes enters from behind the lens, passes close by it and goes away down the lane with his back to the camera, ducking under elbows, never turning to the camera, and comes out at the front and stops beside the capsule, standing still with his back to the lens. Nobody else moves. Ambient sound only: the low hum of a running deck, the boy's shoes on the deck surface, cloth; no music, no narration, no speech. No on-screen text, letters, numbers, signage, subtitles, captions or watermarks. No holograms, projected interfaces, glowing UI, screens or floating icons. No lens flares, no light streaks, no volumetric god rays. No camera drift down the walkway, no crash zoom, no whip pan, no rise above the crowd, no camera passing through anyone. No jump scares, no gore, no horror imagery, no menace. No cat, no dog, no kitten, no puppy, no lamb, no small animal of any kind, no fur, no ears, no tail, no face or eyes on the floor, at the doorway, in any hand, not blurred, not partly, not in silhouette. No plastic pet carrier, no wire door, no carry handle, no box shape, no airline crate, nothing visible through the lattice. No uniform, no badge, no weapon, no futuristic gadget. No louvred grille, no riveted steel, no exposed screws, no stainless-steel kitchen, no restaurant corridor, no boiler room, no present-day building. No grime, no dust, no peeling paint, no debris. Not a music-video montage, not a trailer.

**Part 2, the four seconds (extend by 10 seconds).**

> Continue the same unbroken shot with no cut, from the same small fixed device on the rim of the bin at knee height, never moved, the same light, the same habitat walkway. The standing crowd stays perfectly still on both sides of the lane, backs to the lens, and the capsule, the boy and the bodies still hide the floor near the lit doorway completely. The boy stands a moment beside the pale capsule with his back to the lens. Then, in one plain unhurried action of about four seconds, he crouches, reaches to the far side of the capsule, then leans forward low with his back squarely to the lens, so that his body and the capsule hide whatever is on the floor in front of him, and nothing but his back is seen. He says one word, No, in an ordinary clear child's voice, the only word spoken in the whole clip, with no caption. He closes the lattice panel on the far side of the capsule. Then he stays crouched and still with both hands on the shut capsule, and nothing else moves. Ambient sound only apart from that one word: the low hum of a running deck, cloth; no music, no narration, no other speech. No on-screen text, letters, numbers, subtitles or captions. No camera movement, no cut, no closer view, no rise above the crowd. No cat, no dog, no kitten, no puppy, no lamb, no small animal of any kind, no fur, no ears, no tail, no face or eyes on the floor, in any hand or in the boy's arms, not blurred, not partly, not in silhouette; his hands stay out of sight or empty. No wire door, no carry handle, nothing visible through the lattice. The boy never turns to the camera.

**Part 3, the walkway moves (extend by 10 seconds).**

> Continue the same unbroken shot with no cut, from the same small fixed device on the rim of the bin at knee height, never moved, the same light, the same habitat walkway. Nobody moves for a moment. Then one figure in a plain apron at the lit doorway laughs once, shoulders only. The boy stands and lifts the pale capsule, hugged in both arms against his chest as if it had some weight, the lattice end against him, and half turns his head towards the young woman with the long plait, in profile only, never to the lens. Then the whole walkway starts to move again as if it had never stopped: the standing figures turn, the lane closes, and legs walk past the lens on both sides, unhurried, towards and away, blurring the near frame, while the crowd closes round the boy and the woman where they stand, until the two of them are lost among the walking figures. Ambient sound only: the low hum of a running deck, the one laugh, shoes on the deck surface, cloth; no music, no narration, no speech. No on-screen text, letters, numbers, subtitles or captions. No camera movement, no cut, no rise above the crowd, no camera passing through anyone. No cat, no dog, no kitten, no puppy, no lamb, no small animal of any kind, no fur, no ears, no tail, no face or eyes on the floor, at the doorway or in any hand, not blurred, not partly, not in silhouette, and nothing visible through the lattice. No wire door, no carry handle. Warm, ordinary, a little funny, not haunted; not a music-video montage, not a trailer.

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
building; grime, dust, peeling paint, debris; music-video montage, trailer.

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

**Revised 6 November 2026, before anything was generated.** The wear words are
out, under *Places are well kept*, and the warm patch and the doorway move to the far
end of the lane, so that the crowd leans towards the place where the boy acts.

**Revised 7 November 2026, before anything was generated.** Part 3 no longer
sends the boy and the woman off down the walkway. The chapter has him walk back
to the bureau with the box and her behind him, which is back past the lens, the
way he came; a prompt that sent them the other way asserted a direction the
record contradicts, and one that walked them past a knee-height lens would put
his face nearer than a half-profile. So the crowd closes round the two where
they stand and the clip ends with them lost among the walking figures. The
walk back to the bureau is past the clip's end (Dermot's *"All as
recommended"*, option (a), `intake-2026-11-07.md`).

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

### J, remade 10 November 2026: the receiver in the century's form

Dermot asked of the clip's poster: *"Is this anachronistic?"*. It was. The prompt above asks for a receiver *with honest seams on three short splayed legs, a shallow dish under it*, and Grok drew the 1960s lunar experiment package that phrase describes. The still was remade first (`images.md`, `sentinel.jpg`, the 10 November note). The clip was then run image-to-video from that still, so the clip and the page agree. The revised prompt, as run:

> Documentary footage from a camera carried at chest height by someone walking slowly across the surface of a small airless world toward a small survey receiver, a gentle low-gravity bounce in each step, the receiver growing only a little larger and never reached by the end of the take. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its plain, craters, light and green world. Hard sunlight from one side, long black shadows with no fill, every edge sharp because there is no air, a black sky with no stars showing in the daylight exposure. Low in the sky above the horizon, a small pale green disc of a neighbouring world, holding still. Ahead, alone on the plain, the receiver: one low, smooth, rounded sealed housing of pale matte composite, wider than it is tall, resting low on three short broad rounded feet, with one fine join around its middle, one small dark round window on its upper face and one very small steady pale indicator beside it. Around it the shallow prints of boots and the round mark of a lander's pad in the dust. The slow approach is the only motion; nothing on the plain moves, and no dust rises or hangs in the air. Photographed, not rendered: hard vacuum light, high-ISO grain in the black sky, a moderately wide lens with slight softness toward the corners, muted natural colour. Still, ordinary, faintly attentive. 24 fps, 16:9 landscape, 10 seconds. No hands, feet, boots, suit or helmet in frame, no visor reflection, no person, no figure, no shadow of a person in front of the camera. No box, no metal panels, no rivets, no legs, no struts, no dish, no antenna, no mast, no blinking, no beam, no glow, nothing coming out of the ground, no structure, no ruin. No Earth, no blue planet, no Moon, no stars. No on-screen text, letters, numbers, signage, insignia, flags, subtitles or watermarks. No holograms, no HUD. No lens flares. No drone flythrough, no orbit around the receiver, no crash zoom, no whip pan. No jump scares, no horror imagery. Not a science-fiction film set, not a music-video montage, not a trailer.

**Run and judged, 10 November 2026.** Grok Imagine from Dermot's Chrome, image to video, 720p, 10 s, the corrected still attached. Two takes, both downloaded by his hand, and frames read at 0, 3, 6 and 9.5 s. **Take 1 passes:** a slow walk toward the receiver, which grows a little and is never reached, with boot prints underfoot and the green disc still. **Take 2:** the approach is fine, but a pair of vehicle tracks grows toward the receiver from nowhere, so it stays the alternate. Take 1 is filed as `sentinel.mp4`, with its poster at 2 s. Lettering: none.

## Season 0 chapter clips, written 15 November 2026, before anything is generated

Dermot, 15 November 2026, verbatim: *"An image for every chapter, either generated or using one of my own photos."* then *"With optional videos based on the text of each chapter or POV scene."* The six chapter stills are in `images.md` § 53. A clip is optional, so each chapter or POV scene was asked one question: does motion carry something its still cannot? Three do, and their prompts are below, in the grok-clips shape: one held shot of ten seconds from a named mount, one motion, negatives as objects, a judging line. Each starts from its chapter's filed still where one is named, so the room and the people are the still's. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *Supplementary Material* (S00E01C01): the hand-over is one act and the still is the whole of it; the corridor closing on the hauler would need a hull the record has not drawn and a picture of a fold, which the shared negative's *no hyperspace star streaks* refuses. *Unauthorised, Therefore* (S00E02C01): the scene's weight is that she does not move. *What They Were Forbidden to Become* (S00E03C01): an argument and a signature, neither of them a motion.

**Each clip has its own audio** (Dermot, 15 November 2026, verbatim: *"Videos where chosen, for narrative prose, or codex, will have their own audio."*). So every prompt below says what is heard, in the prompt itself and again in a **Heard** line under it, and the judging line checks it. The sound is the clip's own and nothing page-level is proposed, the site's footer audio having been removed the same day (#1874). All three are diegetic sound with no music: each is a witness's recording, and a score would be the film's voice, not the room's. None has speech or narration. A narrated line is allowed only where the chapter's text supplies the words; clip M's chapter does supply the general's sentence, and M still leaves it unspoken, for the reason given under it.

### L. The last corridor (S00E01C02, Okafor's block; start frame `chapters/s00e01c02.jpg`)

**Why it earns a clip.** The chapter's contrast is one person going and three people present with nothing to do. In the still all four are equally still. Moving, she walks and they do not.

> Documentary footage from a fixed camera mounted at standing height on the wall of a long pale passage aboard a space habitat, looking along it; the camera does not move. Long unbroken take, one shot, no cuts. Soft even light, exactly as in the start frame. A woman in a plain grey coverall, seen from behind, walks steadily away from the camera down the centre of the passage at an ordinary unhurried pace for the whole take, growing smaller, her arms swinging slightly, her head level; she never turns round and her face is never seen. At the far end three figures in dark olive-grey tunics stand apart beside a closed rounded hatch, half turned toward her, exactly as in the start frame, and they do not move at all: no turning, no stepping, no gesture, for the whole take. The hatch stays closed. Her walk is the only motion. Photographed, not rendered: real cloth moving as she walks, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Room tone only, footsteps soft, no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No face turned to the camera, no one looking back, no salute, no wave, no greeting. No door opening, no lights changing, no alarm, no warning light, no screens, no displays. No second walker, no one entering the frame. No spacesuit, no helmet, no weapons. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** Her footsteps, soft on composite and growing fainter as she goes, over the low steady air of a habitat passage. No voice, no music, no alarm or chime.

*(The start frame was refiled the same evening with the three standing apart and half turned toward her; the prompt's sentence about them was changed to match, and nothing else.)*

**Judging a take.** It fails if she turns or her face shows; if any of the three moves or looks round; if the hatch opens; if the camera follows her; if any lettering or lit panel appears; and, by ear, if there is a voice, music or a signal tone.

**Run and judged, 19 November 2026.** Grok Imagine from Dermot's Chrome, image to video, 720p, 10 s, the start frame attached and the prompt as written. Two takes, both downloaded by his hand (three files, one a duplicate by checksum), and frames read at 0, 3, 6, 9 and 10 s, with crops of the hatch end. **Take A passes:** she walks steadily away from behind and grows smaller, never turning; the three hold their poses, the hatch stays shut, the camera does not move, and the take ends with her still a few paces short of them. The one doubt is a slight turn of the middle figure's head in the last second. **Take B fails:** she walks right up to the three and ends overlapping the left-hand figure, an arrival the brief does not have. Sound, measured only: both tracks are near silence (take A peaks at −46 dB), so no voice or music at any normal level, and the soft footsteps may be too faint to carry; that is for his ear. Take A is filed as `the-last-corridor.mp4` at his *"Yes, file take A"*, with its poster at 2 s, on the chapter page after Okafor's walk to the airlock. Lettering: none.

### M. The nine seconds (S00E02C02, Solano's block; start frame `chapters/s00e02c02.jpg`)

**Why it earns a clip.** The chapter's object is itself a clip: *cut to nine seconds*, recorded from the gallery. A still shows the room quiet. Only a held take shows it staying quiet, which is the thing the chamber did. The take is the seconds after the sentence, not the sentence: nobody speaks in it, because the record gives the words to the prose and a generated voice would be someone else's.

> Documentary footage from a small hand-held recording unit held at chest height by someone seated in the back row of a tiered public gallery, looking down across a full hearing chamber; the frame has the very slight tremor of a hand holding still and never travels. Long unbroken take, one shot, no cuts. Soft even light, exactly as in the start frame. Rows of people in dark jackets, all seen from behind, sit completely still facing a long pale table, where one grey-haired woman in a blue-grey high-collared tunic stands alone with her hands on the table's edge. She has just finished speaking: her mouth is closed, she does not speak, and she stands upright and unmoving, looking steadily ahead. Nobody in the room moves for the first several seconds. Then one person in the middle rows slowly turns their head a little toward the person beside them and back again, and nothing else happens. Beyond the long window, fine dust drifts very slowly over rust-red ground. The single turned head and the drifting dust are the only motion. Photographed, not rendered: real cloth, hair with stray strands, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Room tone only: the hush of a full room, no speech, no voice, no murmur, no applause, no music. 24 fps, 16:9 landscape, 10 seconds. No one speaking, no moving lips, no one standing up, no applause, no raised hands, no pointing, no one leaving. No faces turned to the camera. No cameras, phones, tablets, microphones or recording devices visible. No crest, emblem, flag or banner. No screens, no displays, no holograms, no glowing UI. No on-screen text, letters, numbers, signage, subtitles, captions or watermarks. No lens flares, no light streaks. No zoom toward the woman, no push-in, no camera travel, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer, not a news broadcast.

**Whose unit it is** (Dermot, 20 November 2026, *"Yes, as recommended"*). The recording unit of this clip is one of the other two observers', not Solano's: the chapter has three units in the gallery, and she holds the floor, so the back row is another observer's seat. No page or caption changes.

**Heard.** The hush of a full room that has stopped: air handling, one seat creaking, cloth shifting once, nothing else. No voice, no murmur, no applause, no music. The chapter does give the sentence, so the ruling would allow it spoken; it is left out because the take is the silence after it, and because a generated voice would give General Krast a voice the record has not chosen. If he wants the sentence heard, it is a second take with the words quoted exactly from S00E02C02, and her voice becomes his pick.

**Judging a take.** It fails if anyone speaks or a voice is heard; if the standing woman's face is brought close or changes into another's (set a frame beside `maren-solveig-krast.jpg`); if the room stirs, stands or applauds; if a caption, a lower third or any lettering appears; and if the camera pushes in. Read the frames at 0, 3, 6 and 9 seconds and listen once for a voice.

**Run and judged, 19 November 2026: both takes fail.** Grok Imagine from Dermot's Chrome, image to video, 720p, 10 s, the start frame attached and the prompt as written. Two takes, both downloaded by his hand, frames read at 0, 3, 6, 9 and 10 s with crops of the standing woman and the front rows. What held in both: her mouth stays closed and her hands stay on the table, her face stays the start frame's from first frame to last, the camera only trembles, nobody stands or claps, and no lettering appears; the sound is flat room tone (peaks −43 dB), with nothing at speech level. What failed in both: at about 5 to 7 s four people in the front rows turn their heads toward their neighbours together and face forward again by 9 s, where the prompt allows one person in the middle rows. That is the room stirring, and the turn in unison reads as staged. Neither filed; both kept in `image-out/video/` as `nine-seconds-a.mp4` and `-b.mp4`.

**Revised the same day, before the second run** (Dermot's *"Tighten and re-run"*). Only the sentence about the turned head is changed, and one negative added; everything else stands as above.

> Documentary footage from a small hand-held recording unit held at chest height by someone seated in the back row of a tiered public gallery, looking down across a full hearing chamber; the frame has the very slight tremor of a hand holding still and never travels. Long unbroken take, one shot, no cuts. Soft even light, exactly as in the start frame. Rows of people in dark jackets, all seen from behind, sit completely still facing a long pale table, where one grey-haired woman in a blue-grey high-collared tunic stands alone with her hands on the table's edge. She has just finished speaking: her mouth is closed, she does not speak, and she stands upright and unmoving, looking steadily ahead. Nobody in the room moves for the first several seconds. Then one single person far back in the middle rows, and only that one person, slowly turns their head a little toward the person beside them and back again. Everyone in the front rows keeps their head facing forward and perfectly still for the whole take, and no two heads ever move at the same time. Beyond the long window, fine dust drifts very slowly over rust-red ground. The single turned head and the drifting dust are the only motion. Photographed, not rendered: real cloth, hair with stray strands, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Room tone only: the hush of a full room, no speech, no voice, no murmur, no applause, no music. 24 fps, 16:9 landscape, 10 seconds. No one speaking, no moving lips, no one standing up, no applause, no raised hands, no pointing, no one leaving. No heads turning in the front rows, no group of people turning together, no one whispering to a neighbour. No faces turned to the camera. No cameras, phones, tablets, microphones or recording devices visible. No crest, emblem, flag or banner. No screens, no displays, no holograms, no glowing UI. No on-screen text, letters, numbers, signage, subtitles, captions or watermarks. No lens flares, no light streaks. No zoom toward the woman, no push-in, no camera travel, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer, not a news broadcast.

The judging line above stands, with one addition: it also fails if more than one head turns, or if any head in the front rows turns.

**Second run, judged the same day: both takes pass.** The revised prompt, the same start frame and settings. Frames read at 0, 2, 4, 6, 8 and 10 s across the front rows, with crops of the standing woman. **Take D (the first of the pair) is filed:** the front rows hold; one woman in the second row turns her head toward her neighbour at about 4 to 6 s and back, nearer the front than *far back* asks, and nobody else moves; the standing woman's face is the start frame's throughout, with a slight turn of the head; the sound is room tone with a small rise (peak −40 dB), nothing at speech level. **Take C** also passes, a room that stays wholly still with no head turning at all, so it is the alternate. Take D is filed as `the-nine-seconds.mp4` at his *"File take D"*, with its poster at 2 s, in Solano's block between the general's sentence and *She sat very still*. Lettering: none.

### N. A name the charter didn't print (S00E03C02, Kilbride's block; no start frame)

**Why it earns a clip.** *She raised whatever was in her glass, once, privately.* A gesture made once is a motion with a beginning and an end, and the still (`chapters/s00e03c02.jpg`) is the moment after it, with Pitch beside her. This is the moment before: one woman alone at the window. Text alone, because the filed still has two figures; her back, hair and tunic are described as the still has them.

> Documentary footage from a fixed camera on a low stand some metres back in a quiet corner of a reception hall, at standing height; the camera does not move. Long unbroken take, one shot, no cuts. Evening. One woman in her sixties stands alone at a tall sealed window of very thick glass, seen wholly from behind: grey hair tied back at the nape, a long plain dark slate-grey tunic with a stand collar and no ornament, a small plain glass held low in her right hand. Through the window is dusk on Mars: flat dark rust-brown stony ground, two low domes on the horizon, a dusty brown-grey sky, and a cool pale blue glow low on the horizon where the small sun has set. The hall is plain and kept: smooth pale ochre-grey walls with rounded coving, a floor of honed pale stone, warm soft light from no visible fitting; at the far left edge, soft and small, a few guests stand talking and take no notice of her. She stands still for several seconds. Then, once, she lifts the glass a little way toward the window, no higher than her shoulder, holds it there a moment, and lowers it again without drinking. She does not turn round. That one small lift of the glass is the only motion besides the faint shifting of the distant guests. Photographed, not rendered: real cloth with a weave and creases, hair with stray strands, high-ISO grain in the shadows, slight softness toward the corners, a touch under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Room tone only: a gathering far off, no speech that can be made out, no music. 24 fps, 16:9 landscape, 10 seconds. No face, no turning to the camera, no second person joining her, no clinking of glasses, no toast with others, no drinking, no champagne flute, no bottle, no waiter. No orange or red sunset, no large sun, no clouds, no stars, no Earth in the sky, no vehicles or people outside. No sky changing colour, no time-lapse. No medals, braid, epaulettes or insignia. No screens, no displays, no holograms, no glowing UI. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no light streaks. No camera travel, no push-in, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A reception some way off: low voices with no word that can be made out, a glass set down somewhere, the hall's quiet close to her. No music, no speech from her, no toast spoken.

**Judging a take.** It fails if her face shows or she turns; if she drinks, or lifts the glass more than once; if anyone joins her (that is the still, not this); if the sky turns orange or changes during the take; if any lettering appears; and, by ear, if a word can be made out or music plays. The tunic is a picture choice recorded in `images.md` § 53 and is held to the still's.

**Run and judged, 19 November 2026: both takes fail.** Grok Imagine from Dermot's Chrome, text to video, 720p, 10 s, 16:9, the prompt as written. Two takes, frames read at 0, 2, 4, 6, 8 and 10 s, with crops of her hands. What held in both: she stays alone and seen from behind and never turns, the guests stay far off at the left, the camera does not move, the dusk keeps its blue afterglow and two domes with no orange sky, no lettering, and the sound is quiet room tone (peaks −47 and −49 dB). What failed: in take A a second glass appears in her left hand at about 6 s and is raised to head height while the first stays low in her right; in take B the one glass goes to her lips and she drinks, from about 5 to 7.5 s. Grok reads *lifts the glass* as a drink or a toast. Neither filed; both kept in `image-out/video/` as `name-charter-a.mp4` and `-b.mp4`.

**Revised the same day, before the second run** (Dermot's *"Tighten and re-run"*). The gesture is now described by where the glass goes rather than as a lift, and the second glass and the drink are named in the negatives; everything else stands as above.

> Documentary footage from a fixed camera on a low stand some metres back in a quiet corner of a reception hall, at standing height; the camera does not move. Long unbroken take, one shot, no cuts. Evening. One woman in her sixties stands alone at a tall sealed window of very thick glass, seen wholly from behind: grey hair tied back at the nape, a long plain dark slate-grey tunic with a stand collar and no ornament. She holds one small plain glass, low, in her right hand; her left hand is empty and stays at her side for the whole take. Through the window is dusk on Mars: flat dark rust-brown stony ground, two low domes on the horizon, a dusty brown-grey sky, and a cool pale blue glow low on the horizon where the small sun has set. The hall is plain and kept: smooth pale ochre-grey walls with rounded coving, a floor of honed pale stone, warm soft light from no visible fitting; at the far left edge, soft and small, a few guests stand talking and take no notice of her. She stands still for several seconds. Then, once, her right arm extends a little forward and away from her body, bringing the glass out to chest height toward the window, at arm's length and well away from her face; she holds it there a moment, as a quiet salute to someone not present, then lowers her arm to her side again. The glass never comes near her face or her mouth. She does not turn round. That one small reach of her right arm is the only motion besides the faint shifting of the distant guests. Photographed, not rendered: real cloth with a weave and creases, hair with stray strands, high-ISO grain in the shadows, slight softness toward the corners, a touch under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Room tone only: a gathering far off, no speech that can be made out, no music. 24 fps, 16:9 landscape, 10 seconds. One glass only: no second glass, nothing in her left hand, no raising of her left arm. No drinking, no sipping, no glass to the lips, no glass raised above her shoulder. No face, no turning to the camera, no second person joining her, no clinking of glasses, no toast with others, no champagne flute, no bottle, no waiter. No orange or red sunset, no large sun, no clouds, no stars, no Earth in the sky, no vehicles or people outside. No sky changing colour, no time-lapse. No medals, braid, epaulettes or insignia. No screens, no displays, no holograms, no glowing UI. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no light streaks. No camera travel, no push-in, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

The judging line above stands, with two additions: it also fails if a second glass appears, or if the glass goes above her shoulder.

**Second run, judged the same day: take C filed as a near miss.** The revised prompt, the same settings. Frames read every 1.25 s with crops of her arm. Both takes fixed the first run's faults: one glass, no drink, the glass never near her face, everything else holding as before (peaks −43 and −46 dB, room tone only). **Take C** holds the glass low, extends her right arm toward the window from about 5 to 7.5 s, holds it and lowers it to her side by the end: a quiet salute, which is what the sentence is. Two things are off: at its height the glass is at about ear level, a little above her shoulder, which the addition above fails; and it starts a little out from her body rather than at her side. **Take D** raises the glass to head height or above, more of a toast. The original judging line, which rules out a drink or a second lift, passes C; only the height addition fails it, and Grok raised the glass high in all four takes. Take C is filed at his *"File take C"* as `a-name-the-charter-didnt-print.mp4`, with its poster at 2 s, in Kilbride's block just before *She raised whatever was in her glass*. Lettering: none.

## Season 1 Episode 0 chapter clips, chapters 0 to 6, written 15 November 2026, before anything is generated

The seven chapter stills are in `images.md` § 55. As with Season 0, each chapter or POV scene was asked one question: does motion carry something its still cannot? Two do. Their prompts are below in the same shape: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *The Garden Gate* (S01E00C01): the still is a dish nobody comes to, and nothing in it should move; the other half of the chapter, the shore lights going, is already two stills on Aldera's page. *Carraig Bán* (S01E00C03): the still says the lesson, and a generated cat in motion is the likeliest thing in the set to go wrong. *A Person's Name* (S01E00C04): every motion in it belongs to a child (the carrying, the patting of Lumbarian's manipulator, the boy holding the light), and a child is not a clip's subject; Xenon's one-handed work is as slow as a still. *Survives Correction* (S01E00C05): the chapter's event is a residual that *sat*, which is the opposite of a motion. *The Time the Study Needs* (S01E00C06): what the still cannot carry is the room singing, and that is a song. A generated tune would give Slipwave's set a melody the record has not chosen, so it is not written here; if he wants the room heard, it is a `music-prompt` piece first and a clip second.

### O. The sound under the gate (S01E00C00, Elvira's block; start frame `chapters/s01e00c00.jpg`)

**Why it earns a clip.** The chapter is a sound, and a stillness that follows it: *a frequency that lived in the bone rather than the air*, and a cat that *stopped moving altogether*. The still can show the cat rigid. It cannot show her going rigid while the woman is still walking, and it cannot be heard.

> Documentary footage from a small camera carried at shoulder height a few steps behind a woman walking down a gravel road toward an old stone river abbey; the frame has the slight sway of someone walking and then of someone standing. Long unbroken take, one shot, no cuts. Low sideways autumn sun, long shadows, exactly as in the start frame. The woman, seen only from behind, in a long grey-green coat with dark hair tied back, walks on for the first three seconds, carrying a tabby cat against her shoulder; the cat faces back along the road, alert, its ears up and turning. Then the cat's ears flatten against its skull and its whole body locks: it stops blinking, stops turning its head and holds perfectly rigid, eyes wide and fixed on nothing, for the rest of the take. One second later the woman stops walking and stands still, her free hand tightening on the cat, facing the shut gate ahead; she does not turn round. Nothing else moves but the dry grass very slightly. The abbey gate stays shut. Far off beside the gate a small rounded tending machine rests on the verge and does not move. Photographed, not rendered: real fur and whiskers, real cloth, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: boots on gravel that stop; a light wind in dry grass that dies away as the cat goes rigid; then, low and steady under everything, one very deep sustained tone, more a pressure than a note, like a large struck bar of metal heard through the ground, with no attack and no bell clang; faint soft music from inside the abbey, far off, almost lost. No speech, no score. 24 fps, 16:9 landscape, 10 seconds. No face of the woman, no turning to the camera, no cat hissing, no cat struggling or jumping down, no meow. No gate opening, no monks, no robed figures, no one else on the road. No bell swinging, no bell tower, no church bell sound, no chime. No ground shaking, no ripples, no shock wave, no glow, no light effects. No cars, no aircraft, no power lines. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No crash zoom, no whip pan, no drone shot. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** Her steps on gravel, stopping. Wind in dry grass, dying away. Then one very low held tone, felt more than heard, with nothing bell-like in its attack; under it, far off, the soft music a Fellowship house keeps. No voice, no score, no bell.

**Judging a take.** It fails if her face shows or she turns; if the cat hisses, struggles or looks into the lens; if the cat keeps moving after its ears go flat; if the gate opens or anyone appears; if the tone is drawn as anything visible (a shimmer, a ripple, a glow); if any lettering appears; and, by ear, if a church bell rings, a voice speaks or a score plays. Read the frames at 0, 3, 6 and 9 seconds and listen once for the bell.

**Run and judged, 19 November 2026: both takes fail.** Grok Imagine from Dermot's Chrome, image to video, 720p, 10 s, the start frame attached and the prompt as written. Two takes, frames read at 0, 2, 4, 6, 8 and 10 s, with crops of the cat every 1.25 s. What held in both: she is seen only from behind and never turns, the gate stays shut, the tending machine waits on the verge, no bell, monk or second walker appears, and the cat holds still once locked. What failed in both: from about 4 to 5 s the cat turns its face to the camera and stares into the lens for the rest of the take. The prompt causes it: *the cat faces back along the road* points the cat at a camera that is behind her on that road, and the filed still already has the cat looking back over her shoulder. Also noted, not the generator's doing: the start frame carries a contrail across the sky, so every take from it breaks *no aircraft*. Sound, measured only: much louder than the other clips (peaks −17 and −21 dB), which may be the tone and the steps or may be a meow; that is for his ear. Neither filed; both kept in `image-out/video/` as `sound-gate-a.mp4` and `-b.mp4`.

**Revised the same day, before the second run** (Dermot's *"Tighten and re-run"*). Only the cat's gaze is re-aimed, toward the river on the left, and the negatives name the lens; everything else stands as above.

> Documentary footage from a small camera carried at shoulder height a few steps behind a woman walking down a gravel road toward an old stone river abbey; the frame has the slight sway of someone walking and then of someone standing. Long unbroken take, one shot, no cuts. Low sideways autumn sun, long shadows, exactly as in the start frame. The woman, seen only from behind, in a long grey-green coat with dark hair tied back, walks on for the first three seconds, carrying a tabby cat against her shoulder. The cat looks out to the left, over her shoulder, toward the river; its head stays turned to the left in profile, its ears up and turning, and it never looks toward the camera. Then the cat's ears flatten against its skull and its whole body locks: it stops blinking, stops turning its head and holds perfectly rigid, its head still turned to the left in profile, eyes wide and fixed on the river, for the rest of the take. One second later the woman stops walking and stands still, her free hand tightening on the cat, facing the shut gate ahead; she does not turn round. Nothing else moves but the dry grass very slightly. The abbey gate stays shut. Far off beside the gate a small rounded tending machine rests on the verge and does not move. Photographed, not rendered: real fur and whiskers, real cloth, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: boots on gravel that stop; a light wind in dry grass that dies away as the cat goes rigid; then, low and steady under everything, one very deep sustained tone, more a pressure than a note, like a large struck bar of metal heard through the ground, with no attack and no bell clang; faint soft music from inside the abbey, far off, almost lost. No speech, no score. 24 fps, 16:9 landscape, 10 seconds. No cat looking at the camera, no cat facing the lens, no cat's face toward the viewer, no eye contact. No face of the woman, no turning to the camera, no cat hissing, no cat struggling or jumping down, no meow. No gate opening, no monks, no robed figures, no one else on the road. No bell swinging, no bell tower, no church bell sound, no chime. No ground shaking, no ripples, no shock wave, no glow, no light effects. No cars, no aircraft, no power lines. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No crash zoom, no whip pan, no drone shot. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

The judging line above stands; *looks into the lens* now includes any turn of the cat's face toward the camera.

**Second run, judged the same day: take D filed as a near miss.** The revised prompt, the same start frame and settings. Frames read at 0, 3, 6, 9 and 10 s, with crops of the cat every 1.25 s. **Take C** fails as the first run did: from about 4 s the cat turns and stares into the lens. **Take D** is the closest yet. The cat's face never comes round to the lens; by about 4 s it has turned its head away, toward her neck and the river side, and it holds still to the end. She walks, slows and stands facing the shut gate, never turning, and no bell, monk or second walker appears. Three things are off. For its first second the cat keeps the start frame's three-quarter gaze toward the camera, which every take from this still will. Its ears never flatten, so the stillness reads as settling against her more than locking. And the contrail stays, from the still. Sound, measured only: mostly near silence with one short loud transient (peak −16 dB) that may be the tone or a meow, for his ear. Take D is filed at his *"File take D"* as `the-sound-under-the-gate.mp4`, with its poster at 2 s, in Elvira's block after Aldera goes rigid. A cleaner clip would need a re-made start frame (the cat facing the river, no contrail), which is an image job of its own. Lettering: none.

**Predates the collar ruling (noted 20 November 2026, Dermot's *"Yes, as recommended"* to the critic read of #2004 to #2023).** Take D was filed on 19 November, before Aldera's collar was ruled; the cat wears no collar in it, while the chapter's still now shows one. It stays filed. Re-run this clip from the collared still the next time Grok is open, with the cat facing the river and no contrail as above.

### P. The print on the glass — retired 20 November 2026 (S01E00C02, Elvira's block; start frame `chapters/s01e00c02.jpg`)

**Retired, 20 November 2026.** The chapter was rewritten as *Out of Range* (PR 2001): there is no working, no mirror and no print on glass, and the start frame is now a print on a quay stone at night (`images.md` § 55). No take was ever filed. **Nothing here is to be run**; the entry below is kept only as the record of what was written. The rewritten chapter earns no clip in its place: its turn is a sheet redrawing itself and a heading, and the one thing a camera could see, the print, holds still, so the still is the whole of it.

**Why it earns a clip.** *Gone before she could be sure she'd truly seen it.* The still has to choose: print or no print. A held take can show the glass clear, then marked, then clear again, which is the whole of what the working gave her.

> Documentary footage from a small fixed camera set low on a stone floor, looking across a ring of river stones lit only by candles; the camera does not move. Long unbroken take, one shot, no cuts. Candlelight only, exactly as in the start frame. A woman's two hands press flat on two of the stones at the left and stay there, the fingers tightening a little and never lifting. In the middle of the ring an oval hand mirror lies face up, its glass dark and clear, reflecting one small candle flame. For the first three seconds nothing happens but the flames wavering. Then a soft cold bloom of mist spreads across the mirror glass from its centre, and in the mist one small faint print of a cat's paw appears, as if pressed from beneath the glass; it holds for two seconds; then the print and the mist fade evenly away until the glass is dark and clear again, and stays clear to the end. The candle flames lean once, together, as if a draught has crossed the floor, and stand upright again. At the right edge the bare feet and pale robe of a standing man do not move. The mist forming and fading on the glass is the only motion besides the flames. Photographed, not rendered: real skin, real stone, high-ISO grain heavy in the shadows, shallow depth of field, under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the close quiet of a stone room at night; as the mist forms, one struck stone rings, a single dry note that seems to fold inward and die quickly; then a small bell, low and slightly flat, twice, a few seconds apart; a breath drawn in sharply once. No speech, no chanting, no score. 24 fps, 16:9 landscape, 10 seconds. No face, no reflection of a face, no eyes in the mirror, no figure in the mirror, no cat, no animal. No glowing mirror, no glowing print, no light rays, no sparks, no smoke shapes, no floating objects, no stones moving. No hands lifting or reaching for the mirror. No candle going out. No runes, no chalk marks, no drawn circle. No screens, no displays, no holograms, no glowing UI. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares, no light streaks. No camera travel, no push-in, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A stone room at night. One struck stone, a dry note that folds inward. A small low bell, slightly flat, twice. One sharp breath. No voice: the sage's two sentences are the chapter's, and a generated voice would be someone else's.

**Judging a take.** It fails if a face or a cat appears anywhere, the mirror included; if the print glows, moves or is drawn as a clean symbol; if the print is still there at the end; if her hands leave the stones; if the mirror changes shape from the still's; if any lettering appears; and, by ear, if anyone speaks or chants or a score plays. Read the frames at 0, 3, 6 and 9 seconds: clear, marked, fading, clear.

## Season 1 Episode 0 chapter clips, chapters 7 to 13, written 15 November 2026, before anything is generated

The seven chapter stills are in `images.md` § 56. Two chapters earn a clip, in the shape of the Season 0 entries above; nothing is generated yet.

**No clip, and why (S01E00C07 to C13).** *Which One First* (C07): the turn is a figure changing on two housings that show nothing, and the hour at the viewport is a man who does not turn round; the still is the whole of both. *Under Full Power* (C09): the runbook already declines it, since the event is a figure falling on a board and nothing a camera could see changes. *Nothing Taken* (C11), *Left Blank* (C12) and *Before the Close* (C13) already have film briefs above (D2, D3 and D4), each cut or to be cut into ten-second parts; a chapter clip would repeat them, and D4's read of 15 November stands (the tree line and the gate; the child is not its subject). So two chapters of the seven get a clip.

### Q. The vanes going out (S01E00C08, Isren's block; start frame `chapters/s01e00c08.jpg`)

**Why it earns a clip.** *The vanes went out. It was not a decision.* A Verdani orients to the light continuously, the way a ship's hand keeps balance, and a still can only show vanes already open. Moving, they turn and spread a little further toward the sun while the witness beside her does not move at all, which is the scene's other fact: *in no hurry about anything at all*.

> Documentary footage from a fixed camera on a low stand at standing height on an open terrace in low evening sun; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its terrace, wall, doorway, sky, light and both bodies. On the left, a low smooth grey-green mound from which several very wide green fern-like vanes rise, fanned toward the low sun at the left. On the right, a very tall being with an ochre and russet banded hide stands on three long arched legs, her long neck curved down so that her small head hangs low beside the vanes. Over the whole take the green vanes move, slowly and all together: they tilt a few degrees further toward the sun and spread a little wider, the way a plant turns to light but in seconds instead of hours, the light glowing through them, their edges trembling very slightly in a light air. The tall being does not move: her legs, body, neck and head hold perfectly still for the whole take, except that once, near the end, her head tips a very little toward the nearest vane. Their long shadows on the floor shift only as the vanes do. The slow turning of the vanes is the only motion. Photographed, not rendered: real hide with creases, leaf blades with torn edges, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. A light evening wind over an open terrace and the dry papery rustle of the vanes; no speech, no voice, no animal sound, no music. 24 fps, 16:9 landscape, 10 seconds. No walking, no stepping, no legs lifting, no neck swinging, no mouth opening, no blinking close-up. No face, no second eye, no teeth. No people, no one entering the frame, no door closing. No flowers opening, no growth, no new leaves, no time-lapse clouds, no sun moving. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A light wind across an open terrace, and under it the dry, papery rustle of the vanes as they turn. No voice. The chapter gives both of them lines, and none is spoken here: neither people's voice has been chosen, and Ulessa's is *low and did not carry*, which a generator would not hold.

**Judging a take.** It fails if either body changes its plan (a fourth leg, a second head, a face, a tortoise shell under the vanes); if the tall one walks, steps or swings her neck; if the vanes grow, multiply or flower instead of turning; if the sun or sky changes; if any lettering appears; and, by ear, if there is a voice, an animal call or music. Set a frame at 9 seconds beside `ulessa.jpg` and `isren-farrowkin.jpg`.

**Aligned to the re-made start frame, 20 November 2026, before the first run** (Dermot's *"Align it, then run"*). The prompt above was written for the 15 November frame, a low mound under fanned vanes, which `images.md` § 61 replaced on 19 November with the apron body: a band of hide along the bottom of the frame, three vanes open to the sun, two drawn narrow and bent toward a sheet held up in two tendrils, and the Mnemari beyond with three working limbs and a jointed neck. Only the sentences describing the two bodies are changed, taken from the filed frame's `image_alt`, and the sheet is added to what holds still; the motion, the sound and every other line stand. Nothing is invented: what is described is what the filed frame shows.

> Documentary footage from a fixed camera on a low stand at standing height on an open terrace in low evening sun; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its terrace, parapet, sky, light and both bodies exactly as they are. Along the bottom of the frame runs the creased grey-green hide of a long low body, with no head and no face. At the left, three broad green vanes rise from the hide, open to the low sun at the left and lit through so their veins and the rows of small dark nodes along their edges show. Nearer the middle, two more vanes are drawn narrow and dark and bent the other way, and two slender tendrils of the same skin rise beside them and hold up a plain pale sheet, their blunt tips against it. At the right a tall being stands on three long ochre legs that arch up to a hub; beneath it her deep rounded body hangs, with three short working limbs ending in closed rounded buds; her jointed neck folds down so that her smooth blunt head hangs low, level with the sheet, seen from the side. Over the whole take the three open vanes at the left move, slowly and together: they tilt a few degrees further toward the sun and spread a little wider, the way a plant turns to light but in seconds instead of hours, the light glowing through them, their edges trembling very slightly in a light air. The two dark bent vanes, the two tendrils and the sheet stay exactly where they are. The tall being does not move: her legs, body, working limbs, neck and head hold perfectly still for the whole take, except that once, near the end, her head tips a very little toward the sheet. Their long shadows on the floor shift only as the open vanes do. The slow turning of the three open vanes is the only motion. Photographed, not rendered: real hide with creases, leaf blades with torn edges, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. A light evening wind over an open terrace and the dry papery rustle of the vanes; no speech, no voice, no animal sound, no music. 24 fps, 16:9 landscape, 10 seconds. No sheet moving, falling, turning or blowing away; no writing on the sheet. No head or face on the low body, no eyes on the low body. No walking, no stepping, no legs lifting, no neck swinging, no working limbs opening, no mouth opening, no blinking close-up. No second eye, no teeth. No people, no one entering the frame. No flowers opening, no growth, no new leaves, no time-lapse clouds, no sun moving. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

The judging line above stands, read against the new frame: a tortoise shell is now any edge or shell appearing on the hide, and it also fails if the sheet moves or the tendrils let go.

**Run and judged, 20 November 2026: both takes pass.** Grok Imagine from Dermot's Chrome, image to video, 720p, 10 s, the re-made start frame attached and the aligned prompt. Frames read at 0, 2, 4, 6, 8 and 10 s, and a frame at 9 s set beside the filed frame. Both: the three open vanes turn slowly toward the sun and spread a little, lit through; the two bent vanes, the tendrils and the sheet hold; the Mnemari holds still on her three legs, her working limbs closed, and her head tips a little toward the sheet near the end; neither body changes its plan; no lettering; the sky holds; sound is room tone (peaks −44 and −43 dB). **Take A is filed** at his *"File take A"* as `the-vanes-going-out.mp4`, with its poster at 2 s, in Isren's block after *The vanes went out*: its turn reads a little more over the ten seconds. Take B is the alternate, kept in `image-out/video/`.

### R. Two and dark (S01E00C10, Nuala's block; start frame `chapters/s01e00c10.jpg`)

**Why it earns a clip.** *Two and dark, two and dark.* A light's character is a rhythm and the still has one lit instant of it. Ten seconds holds one group of two flashes and the dark after it, over water with nothing on it, which is the chapter's last scene: a light correct to the second, kept for nobody. The brief for *The Character of the Light* (S01E01C03) is the same lamp in a gale by day, from the spit; this is the still evening a season earlier, and the fifteen seconds group to group are the chapter's and are not claimed by a ten-second take.

> Documentary footage from a fixed camera on a low stand on a shingle shore at late dusk, at standing height; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its whitewashed stone tower, its steps, the grey shingle, the flat grey water, the dusk sky and the long low dark hull-shaped form far off on the water with its three small steady warm lights. The lamp in the lantern at the top of the tower turns. In the first four seconds its light swings round toward the camera and brightens to a full warm white flash, falls away, and comes round to a second flash of the same length; then for the remaining six seconds the lantern glass is dark, with only a dull glow inside it, and nothing else in the picture changes. The three small lights on the water stay steady throughout and do not flash. The water is flat and all but still, the faintest slow movement at the shingle's edge. The two flashes and the dark after them are the only event. Photographed, not rendered: rough limewashed stone, wet shingle, high-ISO grain in the dark sky, slight softness toward the corners, a touch under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Small slow water on shingle and one very low steady note, the lantern glass sounding in a light wind; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No searchlight beam sweeping the sky, no rays, no strobe, no third flash, no coloured light. No person, no figure in the gallery, no door opening. No boat, no ship moving, no buoy, no birds, no waves, no surf. No lights going on or off on the far form, no movement of the far form. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** Slow water on shingle, and the glass: *a note so low he felt it in his teeth before he heard it*, steady, with the wind almost nothing. No voice, no foghorn, no gulls, no music.

**Judging a take.** It fails if there are more or fewer than two flashes, or the lamp stays lit through the dark; if a beam sweeps the sky; if the station's lights flash, move or change in number from three; if anyone or anything appears on the shore or the water; if the tower changes colour or shape; if any lettering appears; and, by ear, if there is a horn, a bird, a voice or music.

**Run and judged, 20 November 2026: no take passes as generated.** Grok Imagine from Dermot's Chrome, image to video, 720p, 10 s, the prompt as written. One run from the old still, then a second from the still re-made for scale the same day (PR #2020). From the old still: **take A** gave two flashes only 0.25 s apart, a near pass of the lamp rather than a group; **take B** gave one slow flash with a lens flare. From the new still: **take C** flashed three times (at about 0.5, 5 and 7.7 s); **take D** held one long light from 0.5 to 4.5 s and then went dark, one flash, not two. In all four the far station's three lights stayed steady, and no figure, beam or lettering appeared.

**Filed from take D, with the flashes set in post**, at Dermot's *"As recommended"* (set the flashes in post) and *"File it"*. Like `set-readouts.py` setting digits on a take's frames, this is post-production on the take's own frames, composited with ffmpeg; nothing was generated for it. The base is take D's dark section from 5.5 s on, played forward, reversed and forward again (the water is nearly still, so the loop does not show). Take D's own lit lantern, a frame at 2.5 s, is faded in through a soft round mask over the lantern in two pulses peaking at 1.0 and 2.8 s, so the character is exactly two flashes and then dark to the end. Measured brightness of the lantern confirms it: two peaks, then a flat dull glow from 3.4 s, with a slight flicker of that glow at about 9 s. Sound is take D's own, unchanged. Filed as `two-and-dark.mp4`, with its poster at 2.8 s (the second flash), in Nuala's block after *two and dark, two and dark*. Takes A to D and the composite stay in `image-out/video/`. Lettering: none.

## Season 1, Episode 1 chapter clips, written 15 November 2026, before anything is generated

The four chapter stills are in `images.md` § 57. One chapter earns a clip, in the shape of the Season 0 entries above; nothing is generated yet.

**No clip, and why (Season 1, Episode 1).** *Arrival at the Threshold Station* (S01E01C01): the motion that matters is two clocks forty seconds apart, which needs numerals, and the arrival itself is three people not yet speaking. *The Forty-Second Discrepancy* (S01E01C02): a file being read; the scene's weight is that nobody moves or says the thing. *Station Time* (S01E01C04): one line written, an act the still already is. The Director brief D5 above covers *The Character of the Light* as a two-minute film; the clip below is one held shot and does not replace it. No filed clip in `src/video/` shows this shore.

### S. The spit in the gale (S01E01C03, Galahad's block; start frame `chapters/s01e01c03.jpg`)

**Why it earns a clip.** *Not a gust structure at all but one continuous pressure with harder events inside it … so that the three of them walked the spit leaning and corrected between events like people crossing a deck. Speech was not available in it.* The still has the lean and the spray. It cannot have the pressure, the correcting, or the noise that takes a sentence inland. Ten seconds can.

> Documentary footage from a fixed camera on a low stand at the shore end of a long shingle spit, at standing height, looking along it; the camera does not travel, though the wind shakes it very slightly. Long unbroken take, one shot, no cuts. Late afternoon under torn grey cloud, exactly as in the start frame. A shingle spit runs out to a broad whitewashed stone lighthouse tower with its dark door facing the land; steep white-capped sea on the left, flatter water on the right. Three walkers go steadily away from the camera along the stones, seen from behind and growing a little smaller: a man in a grey-green field coat, a woman in dark clothing, and a heavy pale grey bipedal robot. A gale blows from the left for the whole take, one continuous pressure with two harder gusts inside it: the two people lean into it and at each gust give half a step to the right and correct, like people crossing a deck; the man's coat and the woman's hair stream to the right; the robot walks evenly and does not stagger. Spray tears off the wave tops and blows across the spit in low white streaks; waves break along the left side of the stones; the cloud moves fast. Nobody turns round and no face is seen. The walk, the wind and the sea are the only motion. Photographed, not rendered: real broken water, real cloth snapping in wind, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: a hard steady gale across an open microphone, surf breaking on shingle and stones dragging in the backwash, no speech, no voice and no music. 24 fps, 16:9 landscape, 10 seconds. No face turned to the camera, no one looking back, no one falling, no one speaking or shouting, no wave or greeting. No light showing from the lighthouse, no beam, no flash. No red or banded tower. No boats, no ships, no buoys, no birds. No vehicles, no road, no railings, no lamp posts. No fourth walker, no one entering the frame. No glowing lights on the robot. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** The gale, loud and unbroken, with two harder passages in it; surf on the left and shingle dragging; nothing else. No voice: the chapter says speech was not available on the spit, and the clip keeps it so. No music.

**Judging a take.** It fails if anyone turns or a face shows; if the lighthouse shows a light or a beam (the chapter is in daylight); if the tower turns red or banded, or a boat or a bird appears; if the robot staggers, runs, changes shape or becomes a slim glossy figure (set a frame beside `rook-7.jpg`); if the camera follows them; if any lettering appears; and, by ear, if there is a voice, a shout or music. Read the frames at 0, 3, 6 and 9 seconds.

## Season 1, Episode 2 chapter clips, written 15 November 2026, before anything is generated

The six chapter stills are in `images.md` (the S01E02 chapter section). Each chapter and POV block was asked the one question: does motion carry something its still cannot? Two do. The prompts are in the shape of the Season 0 entries above: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet. No clip of a grove at the Causeway or of the transit ring exists in `src/video/` or in this runbook (the Prismere clip's *groves* are glass and on another world).

**No clip, and why.** *A Working That Worked* (S01E02C00): a dream taken apart and a look not explained; the still is the look, and the dream is not to be pictured. *The Broken Causeway* (S01E02C01): the working has already failed when the chapter opens, and two people reading a chalk line do not move. *Harmonic Debrief* (S01E02C03): an explanation and a routing decision, neither a motion; the traces lining up would need drawn lettering and a display that animates, which a still on a matte table avoids. *The Harmonic Price* (S01E02C05): an argument settled in words; Elvira's one written line is the chapter's and a generated hand would write something else.

### T. Against the wind (S01E02C02, Thorne's block; start frame `chapters/s01e02c02.jpg`)

**Why it earns a clip.** *The canopy moved above him. Not with the wind. The wind had died when they entered the clearing.* The still can show leaves blurred in the crowns and reeds standing straight, but only a held take shows the one moving while the other does not, which is the whole observation and the first sign the page gives of a dryadic grove.

> Documentary footage from a fixed survey camera on a low stand at the edge of a reed marsh at night, looking level at a small stand of white-barked trees; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its trees, its dark water, its old stone blocks, its reeds, its black sky and its one cold lamp light from the left. The night is dead calm: the reeds at both sides stand perfectly straight and still for the whole take, the grass does not stir, and the pools of dark water are flat, with no ripple, holding the reflections of the pale trunks. Above, the fine upper branches of all the trees sway slowly and together, as if in a steady light breeze, and the few small yellow leaves in the crowns tremble; the swaying is gentle, continuous and unhurried and happens only in the crowns. The trunks do not move. Two small figures in grey-green coats, seen from behind at the left edge, stand still and look up; they do not walk, turn or speak. The slow movement of the crowns above a motionless marsh is the only motion. Photographed, not rendered: high-ISO grain heavy in the dark, slight softness toward the corners, a little under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the hush of a windless marsh at night and, over it, only the dry light rustle of leaves high up; no wind noise at ground level, no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No wind in the reeds, no ripples on the water, no falling leaves in a shower, no storm, no rain, no fog rolling in. No glow from the trees, bark, roots or ground, no light pulsing, no fireflies, no sparks, no spirits, no figure among the trees, no faces in the bark, no eyes. No torch beam sweeping, no lamp in frame, no lights changing. No face turned to the camera, no one walking, no one touching a tree. No animals, no birds, no bats. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A marsh with no wind in it: near silence, a far-off water sound, and high up the dry rustle of leaves that nothing at ground level accounts for. No voice, no music, no drone or tone laid under it.

**Judging a take.** It fails if the reeds or the water move with the crowns, which makes it an ordinary breeze; if the crowns do not move at all; if anything glows, pulses or appears among the trees (tone: unsettling, never horror, and the page says the anomalies are lawful); if either figure turns or walks; if the camera travels; if any lettering appears; and, by ear, if wind is heard at ground level, or a voice, music or an ominous tone. Read the frames at 0, 3, 6 and 9 seconds: the reeds should be identical in all four and the crowns different in each. The 0.22-second lag Rook-7 measures is too fine for a generated take to hold and is not asked for.

### U. She sat down (S01E02C04, Dr. Vale's block; start frame `chapters/s01e02c04.jpg`)

**Why it earns a clip.** *She sat down afterward, because her own hands had started shaking, and sitting was cheaper than explaining to anyone watching that fear wasn't what was doing it.* The still has her seated and him down; it cannot show a tremor, and the tremor is the chapter's fact about what a jump costs the operator as well as the subject. Rook-7 logs the same thing: *She sat down before anyone suggested it.*

> Documentary footage from a fixed monitoring camera mounted at standing height in the wall of a clean pale transit bay, looking level across it; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its bay, its round dark floor, its light and both people. Soft even daylight-coloured light from the surfaces, exactly as in the start frame. In the middle of the round floor a man in a dusty ochre-grey work coverall kneels with his head bowed, one hand flat on the floor and the other at his chest; he coughs twice, his shoulders jerking, and his breathing slowly steadies; he does not get up and his face stays turned down. At the right a dark-haired woman in a charcoal field shell sits forward on a low rounded housing with her forearms on her knees, watching him steadily; her two hands, held loosely together in front of her, tremble with a fine fast involuntary shake for the whole take, and once she presses them together to still them and they go on shaking. She does not stand, speak or look at the camera. A little fine dust settles slowly through the air around the man. His coughing, her trembling hands and the settling dust are the only motion. Photographed, not rendered: real skin, cloth with a weave and creases, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: his coughing and ragged breath growing steadier in a quiet hard-walled room, the low even air of the station, no alarm, no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No beam of light, no energy glow, no sparks, no shimmer in the air, no flash, no one appearing or vanishing, no ghost image. No one entering the frame, no medics, no stretcher, no oxygen mask. No embrace, no hand on his shoulder, no one standing up, no weeping. No alarm lights, no red lamps, no lights flickering or changing, no screens, no displays. No face turned to the camera. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A man coughing and getting his breath back in a bare room, and under it the station's air. Nothing from her. No klaxon (the alert is over or elsewhere; the chapter's klaxon belongs to the minutes before), no voice, no music. Her two spoken orders (*Post-jump checks. Now. Him first. Then me.*) are the chapter's own words and are left to the prose, since a generated voice would give Dr. Vale a voice the record has not chosen; if he wants them heard it is a second take with the words quoted exactly, and her voice becomes his pick.

**Judging a take.** It fails if any light, glow or shimmer plays over either of them (the jump is over and is never drawn); if her hands are still, or the tremor grows into a fit or a collapse; if her face changes into another's (set a frame beside `dr-iona-vale.jpg`); if she stands, speaks or goes to him; if he looks up at the camera or rises; if anyone else enters; if any lettering or lit panel appears; and, by ear, if there is an alarm, a voice or music. Read the frames at 0, 3, 6 and 9 seconds and watch the hands in the player once, since a fine tremor will not show in four stills.

## Season 1, Episode 3 chapter clips, written 15 November 2026, before anything is generated

The six chapter stills are in `images.md` (the Season 1, Episode 3 chapter section). Each chapter was asked the one question: does motion carry something its still cannot? Two do. Their prompts are below in the grok-clips shape: one held shot of ten seconds from a named mount, one motion, negatives as objects, a judging line, and what is heard. Two takes each when run, from his Chrome; nothing is generated yet. No existing clip has either subject (the *Half-light causeway* of the anthem set is a dock causeway, not this marsh).

**No clip, and why.** *The One He Did Not Name* (S01E03C03): a man walking away is in the still already, and the chapter's weight is what is not said. *The Order of Evacuation* (S01E03C04): the motion in it is the evacuation, which needs a transport the record has not drawn and would put a disaster crowd in a generator's hands; the sixth day is water that has stopped moving. *The Word She Did Not Like* (S01E03C05): a word, a stillness and a correction written down; Syra's block is about a body that does not shift. *No Instrument to Hand* (S01E03C06): the weal rising and the cut closing are motions, but a close moving frame of a wound closing reads as body horror, which the tone bar refuses, and the still says it.

### V. The wind comes back (S01E03C02, Galahad's block; start frame `chapters/s01e03c02.jpg`)

**Why it earns a clip.** *The wind, which had been absent all night in the way it was always absent here, came back. … Only air moving through a grove where air had not moved.* The still can only show a grove with no wind. The chapter's event is the change from none to some, and the dryadic page gives it a signature only motion can show: the reeds move first and the pale leaves answer a moment later.

> Documentary footage from a fixed camera on a low stand at the edge of a small grove of pale-barked trees beside a reed marsh, before dawn; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its trees, its chalk ring, its three figures and its light. A woman kneels with one palm flat on the ground inside a ring of white chalk; a bearded man stands at the edge of the roots holding out a small sealed lamp, the only light; a pale grey robot stands watching at the left edge. For the first five seconds nothing moves at all: no wind, the marsh grass upright, the last leaves hanging still, the three figures motionless. Then a light wind arrives from the marsh: the grass beyond the trees leans first, and a moment after it the sparse pale leaves overhead begin to stir and turn, a beat late. The woman's hair lifts a little. Nobody moves from their place; the man's arm and the lamp stay exactly where they are. The arriving wind is the only event. Photographed, not rendered: real bark, wet ground, cloth with a weave, heavy high-ISO grain in the dark, under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: dead still air at first, then wind arriving across the marsh and reaching the leaves a moment later; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No figure between the trees, no shape, no apparition, no glowing mist, no light from the chalk, no sparks, no glow from the ground. No one standing up, no one walking, no face turned to the camera, no robot eyes lighting. No lantern swinging, no flame, no torch beam. No storm, no rain, no lightning, no leaves torn off, no branches thrashing. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A marsh with no wind in it, close and flat. Then wind coming in over the grass, and the leaves a beat after. No voice (the classification he speaks comes before the take), no music, no tone.

**Judging a take.** It fails if anything appears between the trunks or the chalk or ground lights up; if the wind is there from the first frame, or comes as a gust or a storm; if the leaves move before the grass; if either person leaves their place or the lamp moves; if the robot's face lights; if any lettering appears; and, by ear, if there is a voice, music or a struck note. Read frames at 0, 3, 6 and 9 seconds.

### W. Choosing to be seen (S01E03C01, Elvira's block; start frame `chapters/s01e03c01.jpg`)

**Why it earns a clip.** *The stillness did not move immediately. When it did, it was unhurried — a cat choosing to be seen rather than being caught at it.* The sentence is a delay and then a movement at a chosen speed. The still shows her already at the edge of the stones; only a take shows the wait and the choosing.

> Documentary footage from a small fixed camera set very low on the edge of a causeway of dark flat stones across a reed marsh, at dusk; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its stones, reeds, sky and the two people standing far down the causeway, soft and small, facing each other. In the foreground a tabby cat in a slim plain grey collar stands at the edge of the stones, half in the tall dry reeds, perfectly still for the first four seconds, only her ears turning. Then, unhurried, she steps fully out of the reeds onto the stones, walks three slow paces along the causeway toward the two people, and sits down upright, facing them, her tail settling around her feet. She never looks at the camera. The two distant people do not move, except that the woman's head turns toward the cat. The cat's walk is the only motion; the reeds are still and there is no wind. Photographed, not rendered: real fur, real stone, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: a still marsh at dusk, water barely moving, the dry reeds brushing once as she leaves them; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No cat looking at the camera, no meowing, no running, no pouncing, no grooming, no second animal, no bird taking off. No glowing eyes, no lights on the collar, no tag, no bell, no implants. No one walking toward the camera, no one waving, no screen lighting up in the man's hand. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** Dusk on a marsh with no wind: water, far off, and the reeds brushing once as she steps out. No voice (her name is spoken before the take), no purr or cry, no music.

**Judging a take.** It fails if she moves at once, hurries or looks into the lens; if her markings or collar change from `aldera.jpg`; if her eyes or collar light; if either person walks or the slate lights; if the reeds blow; if any lettering appears; and, by ear, if there is a voice, a meow or music.

## Season 2 chapter clips, written 16 November 2026, before anything is generated

The fifteen chapter stills are in `images.md` § 63. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Three do, and a fourth, *Four Seconds*, already has its prompt above (*A clip for* Four Seconds, re-staged 15 November 2026 with the walkway as subject). The three below are in the shape of the Season 0 and Season 1 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet. *The Honest Dark* clip in `src/video/` is the drithle run itself; none of these repeats it.

**No clip, and why.** *The Desk That Called First* (S02E01C01), *The Office That Reads Everything* (S02E01C02) and *A Very Ordinary Call* (S02E01C03): a form waiting, a page read slowly and a call listened to; each is a stillness, and the one motion among them, tea being poured, is Jeeves's, whose body is an open question. *Testing, Inspection and Certification* (S02E02C01): a corridor that measures forty metres and then forty-one cannot be shown changing, which is the chapter's point. *Carrying Two* (S02E03C03): a shuttle lifting needs a vessel the record has not drawn. *The Undersong of the Drithle* (S02E04C01): the event is a pressure below any ear, felt through stone by a creature lying still in the dark; a clip could only invent a sound for it, and the record says there is none to hear. *The Warm Patch* (S02E05C01): *That is the whole of what happened, and it was enough*; a rabbit looking at a wall is a still. *The Unacceptable Cat* (S02E06C01): four hours of a cat not moving. *Somebody's Cat* (S02E07C01): the motion is a child lifting a blanket and catching his cat, and a child is not a clip's subject. *The Control Group* (S02E08C01): six days of nothing done well; a take in which the rabbit so much as turned her head would say the opposite. *Sixty-Eight in a Hundred* (S02E11C01): its motions are a valve closed by hand and a plant carried in both hands, each said by a still; the window turning to terrace light is a change of light on a wall and too slight to carry ten seconds.

### X. The tide of lights (S02E03C01, Bubochka's block; no start frame)

**Why it earns a clip.** *The lights went out the way a tide goes out. Not all at once, and nobody announcing it — just the far end of the valley going dark first, then the middle, then the near houses, then the shepherd's own windows...* The still is the valley already dark. The custom is the going dark, in an order and at a pace, kept by nobody; only a held take shows that. It has no start frame because the chapter still begins after it ends.

> Documentary footage from a fixed survey camera on a low stand at the turn of a hill lane above a long snowbound valley at dusk, on a cold, high, clear-skied settled world in the year 2826, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. The valley runs away from the camera between snowy mountains under a deep blue sky with the first stars out. Along it lie some thirty long low stone steadings with dark seamless roofs and the pale shapes of long glasshouses beside them, and at the start every one of them shows small warm windows, so the valley is a string of soft gold lights from the far end to the house nearest the camera. Then the lights go out, unhurried and with no signal: first the farthest steadings, a few at a time, then the middle of the valley, then the near houses, and last the two windows of the nearest house at the right of the frame. Each light simply stops; none flickers. By the end the valley is entirely dark under the snow and the stars, except for one tiny cluster of five or six small red points far down on the valley floor, which stay lit. Nothing else moves: no person, no vehicle, no smoke; a few pale sheep lie still on the near slope. The sky stays quiet for the whole take, with no sparks and no meteors yet. The lights going out, far to near, is the only event. Photographed, not rendered: high-ISO grain heavy in the dark, slight softness toward the corners, a little under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the hush of a cold still valley, a dog barking once far off early in the take, a door closing somewhere below, then nothing but air; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No sparks, no meteors, no fireworks, no aurora, no moon rising. No lights flickering, no power cut all at once, no searchlights, no headlights, no lanterns carried, no torches. No street lamps, no power lines, no poles, no cars, no smoke from chimneys. No people in frame, no crowd, no faces. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A cold valley settling: one far bark, one door, and then the quiet the chapter gives it. No voice, no music, no tone laid under it, and no sound from the sky, which has not begun.

**Judging a take.** It fails if the lights go out all at once, or near to far, or flicker like a fault; if any spark, meteor or glow appears in the sky (the drithle is the next beat and has its own clip); if the red points go out or are missing; if a person, a vehicle or a carried light appears; if the steadings read as a present-day village with street lamps; if the camera travels; if any lettering appears; and, by ear, if there is a voice, music or an ominous tone. Read the frames at 0, 3, 6 and 9 seconds: the lit windows should be many, fewer and far, only near, and none.

### Y. The eye (S02E03C02, Sorcha's block; start frame `chapters/s02e03c02.jpg`)

**Why it earns a clip.** *No barking, no heat — the eye and the angle and the slow pressure of a dog whose whole cognition is the difference between where a thing is and where it should be.* The still has the eye and the angle. The slow pressure is a motion: a creep, a drop, a creep. It is also the season's one picture of the counter that works, and it works without the thing it works on being shown.

> Documentary footage from a small fixed camera set on the ground at the edge of a frozen farm track on a grey winter morning; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its dog, its frosted track, its dry-stone walls, marker posts, gate, stone house and snow hills, and its flat grey light. A black-and-white working sheepdog lies flat on the track with his forelegs out and his eyes fixed on a point low down beyond the left edge of the frame. For the first three seconds he does not move at all; only his breath shows. Then, without rising above a crouch, he creeps forward three slow steps to the left, belly almost on the ground, head low and level, eyes never leaving the same point, and drops flat again and is still. Near the end he creeps one more step and holds. He never barks, never wags, never looks at the camera and never stands up. Whatever he is watching stays outside the frame for the whole take. Nothing else moves except a little frost dust lifting from the track where his paws go. The dog's slow advance is the only motion. Photographed, not rendered: real fur with frost on it, real frozen ground, high-ISO grain in the shadows, slight softness toward the corners, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: a cold still morning, the dog's breath, the small crunch of frost under his paws, a sheep far off once; no barking, no whistle, no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No animal in front of the dog, no rabbit, no cat, no lamb, no small creature entering the frame, no shadow of one. No barking, no snarling, no teeth, no running, no pouncing, no tail wagging, no tongue out. No person, no shepherd, no whistle, no crook, no hand. No dog looking at the camera. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** Frost under a dog's paws and his breath, in a valley with no wind. No bark (the chapter says so twice), no shepherd's whistle (he is working on his own account), no voice, no music.

**Judging a take.** It fails if anything at all appears where he is looking, since the record does not describe it and a generated creature would; if he barks, runs, stands upright or looks into the lens; if his markings change between frames; if a person or a whistle is added; if the camera travels; if any lettering appears; and, by ear, if there is a bark, a voice or music. Read the frames at 0, 3, 6 and 9 seconds: flat, creeping, flat, creeping.

### Z. An inspector being driven (S02E09C01, Bubochka's block; start frame `chapters/s02e09c01.jpg`)

**Why it earns a clip.** *...rode it down the length of the floor, sitting upright, entirely composed, like an inspector being driven.* The joke and the finding are both in the travel: a machine on its slow square route and a cat who has never been seen to carry anything, carried, carrying. A still stops the unit; the composure is only funny at walking pace.

> Documentary footage from a small fixed monitoring camera a hand's breadth above the floor of an empty office at night aboard a large space habitat in the year 2827; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its dark cork floor, its cleared desks and stools, its empty open shelf, its wide window onto dark blue terraces with a few small warm lights, and its dim blue night light. A low rounded-square grey housekeeping machine with one small green light and a shallow tray of small clear bags in its side glides slowly and perfectly steadily across the frame from left to right, a finger's width above the floor, at the pace of a slow walk, without turning, stopping or speeding up. On its flat top sits a black cat, bolt upright, in profile, facing the way it is going, a round tag on his collar, holding by one corner in his mouth a small clear bag with a few bolts in it and a blank pale slip clipped to its top. The cat does not move at all except that the bag sways very slightly with the travel and one ear turns once. He never looks at the camera and never looks down. The machine and its passenger cross the frame and are nearly at the right edge when the take ends. Nothing else moves; no light changes. Photographed, not rendered: real fur with one cool edge of light, heavy high-ISO grain in the dark, under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the low even hush of the habitat's air at night and the faint soft whirr of the machine passing, a little louder as it nears the camera and fading as it goes; the tiny click of bolts shifting in the bag once; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No cat jumping on or off, no cat looking at the camera, no meowing, no glowing cat eyes, no cat dropping the bag. No face on the machine, no robot arms, no eyes, no headlights, no light beam, no beeping, no voice from the machine, no wheels showing, no brushes spinning. No person, no night guard, no door opening, no lights coming on. No on-screen text, letters, numbers, signage, subtitles or watermarks. No holograms, no glowing UI. No lens flares, no light streaks. No camera travel, no dolly, no following shot, no crash zoom, no whip pan. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A machine's soft whirr going by on an empty floor at night, the habitat's air, one small click of bolts. No voice, no beep or chime from the unit (the record gives it a route and a form, not a voice), no meow, no music, and no comic sting: the composure is the joke.

**Judging a take.** It fails if the cat moves more than an ear, looks at the lens, or drops or shakes the bag; if his coat, collar or tag change from `agent-barsik.jpg`; if the machine grows a face, arms, lights or wheels, or changes shape from the start frame; if it stops, turns or hurries; if anyone enters or a light comes on; if any lettering appears on the slip, the bags or the machine; and, by ear, if there is a voice, a beep, a meow or music. Read the frames at 0, 3, 6 and 9 seconds: the same cat in the same pose at four places along one straight line.

## Season 3 chapter clips, written 16 November 2026, before anything is generated

The eleven chapter stills are in `images.md` § 64. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Four do. They are in the shape of the Season 0, 1 and 2 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *Filed Under Noise* (S03E01C01) and *Honest Clocks* (S03E02C03): a person sitting still and listening. What moves is in her ears, and a clip would have to invent the Sentinel's pulse or a source's grain, which is music-critic's ground and the record's to give; the Sentinel has its own filed clip. *Independent Verification* (S03E01C02): twenty-two minutes of not filling a silence. *What Meridian Asked* (S03E01C03): a channel arguing with itself for half an hour is not a motion a camera sees. *Standing Practice* (S03E01C05): a magnet taking is a click, and the still has both tabs. *Aware of Weather* (S03E02C01): a room waiting; the one sentence is speech, and the record's clips carry no dialogue. *Spent* (S03E03C01): four lines written and read back. Wender declining a hull is a thing not done.

### X. Then it stopped (S03E01C04, Shepherd's second block; start frame `chapters/s03e01c04.jpg`)

**Why it earns a clip.** *One limb hung beneath the desk, and its underside carried a patch that was warmer than the rest, and the patch was moving. Not fast. ... Then it stopped. She knew the stopping better than the moving.* The still can show a patch. It cannot show that it was moving, or the stop, and the stop is the whole of what she can stand on.

> Documentary footage from a small fixed record camera just inside the door of a dim office aboard a station in the year 2828, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the woman with red hair seen from behind in the left foreground, looking down; the soft grey-violet being at the low desk, with no head and no face, its two long limbs lying along the desk top with small dark eyes along them; the small dark instrument on the desk; the dim taupe walls. One limb of the being hangs beneath the desk in shadow, and on its underside is one small patch of skin a shade warmer than the rest. For the first six seconds that patch drifts very slowly along the limb, about the width of two fingers in all, in one direction only, the way a shadow moves, with soft edges, never brighter than the skin around it and never glowing. At six seconds it stops, completely, and stays where it is until the take ends. Nothing else on the being moves at all: no limb lifts, no eye turns, no colour changes anywhere else. The woman does not move except that her head lowers very slightly in the first two seconds and stays there. The drifting patch and its stopping are the only event. Photographed, not rendered: real dry matte skin with grain and creases, cloth with a real weave, heavy high-ISO grain in the shadows, under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the low even hush of a station's air in a quiet room and nothing else; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No glowing skin, no pulsing light, no stripes or patterns running over the body, no colour change on the upper limbs, no tentacles writhing, no suckers, no eyes blinking, no face. No woman turning round, no woman's face, no second person. No screens, no holograms, no light from the instrument changing. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares. No camera travel, no dolly, no zoom. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A quiet room on a station: air and nothing over it. No voice (the instrument's flat voice has finished), no tone or hum from the being or its skin, no sting when the patch stops, no music.

**Judging a take.** It fails if the patch glows, pulses, flickers, changes colour or runs over the body as a pattern; if it does not stop, or stops and starts again; if any limb moves or any eye turns to the lens; if the body gains a head, a face or suckers, or changes from `sohrel.jpg`; if she turns or her face shows; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a tone from the being or music. Read the frames at 0, 3, 6 and 9 seconds: the patch in three places and then in the third place again.

### Y. The stylus put down (S03E02C02, Shepherd's second block; no start frame, ends on `chapters/s03e02c02.jpg`)

**Why it earns a clip.** *She had the stylus in her hand. She noticed that the way she noticed most things, afterwards, by the shape of it. ... a sentence already drafting itself in her hand, and the hand stopped. She put the stylus down.* The still is the stylus already down. The chapter's event is a hand on its way to a line and not arriving.

> Documentary footage from a small fixed record camera set level with a broad sill at the watch desk of a dock on a station, on an evening in the year 2828, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, close, no faces. On the cream composite sill lies a watch log: two thin rigid pale grey leaves lying open and flat, joined by a narrow hinge, blank, seen at a low angle. From the right a woman's right hand in the cuff of a blue-grey uniform holds a plain slim dark stylus. For the first three seconds the hand moves slowly toward the right-hand leaf until the tip of the stylus is a finger's width above it. Then it stops and holds there, perfectly still, for three seconds. Then, without touching the leaf, the hand draws back, lays the stylus down on the sill beside the log, lets go of it, and comes to rest on the edge of the sill, empty. Beyond the sill, out of focus, a cadet in a blue-grey uniform sits on a bench built into the wall, seen from the chin down, hands clasped, not moving; behind, a large rounded pressure door and a window of deep blue dusk over a calm sea. The hand, its pause and the stylus set down are the only motion. Photographed, not rendered: real skin with knuckles and lines, cloth with a real weave, a fast lens with shallow focus on the log and the hand, high-ISO grain heavier in the shadows, a touch under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the low hush of the dock's air, the small dry click of the stylus laid on the sill, and far off, once, water against the dock; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No stylus touching the leaf, no writing, no mark appearing on the leaf, no lines or text on the leaves. No face, no head, no second hand. No clock, no clock face. No screens, no glowing leaf, no holograms. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares. No camera travel, no dolly, no zoom. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** The dock's air, one small click of a stylus on a sill, water once. No voice (the cadet's *Chief* is before the take and *the watch was in good order* is after it), no chronometer tick (the record gives the two instruments no sound), no music.

**Judging a take.** It fails if the stylus touches the leaf or any mark appears; if the hand does not pause, or puts the stylus down on the log; if a face comes into frame; if the log becomes a paper book or the stylus a pen with a clip; if the leaves glow; if a clock is shown; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a tick or music. Read the frames at 0, 3, 6 and 9 seconds: approaching, held above the leaf, drawing back, stylus down and the hand empty.

### Z. Out (S03E02C04, Halvorsen's first block; start frame `chapters/s03e02c04.jpg`)

**Why it earns a clip.** *Halvorsen had watched the going the way she watched a drift figure, not for the number but for whether it would stop, and it had not stopped, and had not hurried either.* The still is the bench after she has gone. Whether a walk stops, and whether it hurries, are things only a held take can say.

> Documentary footage from a fixed record camera at standing height at one end of a long, tall, narrow corridor of pale stone in an old kept building on Earth, late in the spring of the year 2829, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep its stone walls and floor, its slot of daylight overhead, its oak bench, its tall flush door with the small pale light beside it and the dark round housing with one violet point above it, and the grey-haired woman in olive sitting on the bench in profile. At the start a second woman is standing in the corridor a few steps beyond the bench, seen wholly from behind: about thirty, red hair drawn back in a neat knot, a dark blue-grey uniform, her hands empty. She walks away from the camera down the middle of the corridor at an even, ordinary pace, neither slow nor quick, without looking back, without pausing at the door, growing smaller, and by the end of the take she is near the far end, where the corridor turns. The seated woman does not stand and does not speak; her head turns very slightly to follow the other for the first few seconds, and then is still. The light does not change. The one walk is the only motion. Photographed, not rendered: real stone with fine joints, cloth with a real weave, deep focus, high-ISO grain heavier in the shadows, a touch under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: soft even footsteps on stone going away and growing fainter, the very quiet air of a tall stone corridor, and nothing else; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No walking woman turning round, no face of the walking woman, no wave, no stopping, no running, no door opening, no door handle, no third person. No clock face, no clock hands, no numerals. No screens, no holograms. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares. No camera travel, no dolly, no following shot, no zoom. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** Footsteps on stone going away at one pace, and the corridor's quiet. No voice, no door, no tick from the floor's clock (the record gives it a time and no sound), no music.

**Judging a take.** It fails if she stops, hurries, looks back or turns her face to the lens; if she pauses at the floor's door or the door opens; if Halvorsen stands, speaks or changes from `ingrid-halvorsen.jpg`; if a third person appears; if the clock gains a face or numerals; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a door or music. Read the frames at 0, 3, 6 and 9 seconds: the same back at four distances along one line, at one pace.

### AA. The hatch (S03E03C02, Shepherd's second block; start frame `chapters/s03e03c02.jpg`)

**Why it earns a clip.** *A few minutes past midnight the hatch behind her had opened, and after about as long as it takes to read a bill it had closed again. She had not turned round.* The still is the view from the hatch. That she does not turn while it stands open, and that it then closes, is a courtesy with a duration.

> Documentary footage seen through an open hatchway into a small dim indigo watch compartment on a remote post in deep space, in the middle of the night in the year 2829, eight centuries from now; the camera stands in the hatchway at standing height and does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: three officers standing side by side with their backs to the camera, a woman with red hair in a neat knot in the middle with her hands clasped behind her, a tall man on her left and a woman with a long dark plait on her right; on the wall in front of them a long dark housing with six small steady pale lights in one row; above it a wide port onto black space with a thin scatter of faint stars; the dark rounded edge of the hatchway around the view. For the first six seconds almost nothing happens: the six lights dim together very slightly, once, and return together, all six alike; the man and the woman at the sides each glance toward the woman in the middle and back at the lights; the woman in the middle does not move and does not turn her head. Then, from six seconds, the hatch slides shut smoothly across the view from one side, a plain dark panel, and by the end of the take the frame is almost entirely dark with only a thin line of the dim compartment left at one edge. Nobody in the compartment turns round at any point. Photographed, not rendered: cloth with a real weave, heavy high-ISO grain in the dark, under-exposed, muted natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the low even hush of a small post's air at night, and at the end the soft slide and seat of a hatch closing; no speech, no alarm and no music. 24 fps, 16:9 landscape, 10 seconds. No officer turning round, no face turned to the camera, no salute, no speaking. No lights changing colour, no lights flashing, no light going out alone, no alarm, no screen, no figures or numerals, no holograms. No ship, no planet, no drive flare, no moving star in the port. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares. No camera travel, no dolly, no zoom. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** The post's air on a middle watch, and a hatch sliding shut. No voice, no tone or chime at the agreement (the record gives it a word, *agreed*, and no sound), no alarm, no music.

**Judging a take.** It fails if she turns, or anyone faces the lens; if the six lights are not six, change colour, or one differs from the rest; if anything at all moves in the port; if the hatch does not close, or swings on a hinge with a wheel or a lever; if a fourth person appears in the compartment; if the camera travels; if any lettering or numeral appears; and, by ear, if there is a voice, a chime, an alarm or music. Read the frames at 0, 3, 6 and 9 seconds: three backs, three backs, the hatch part closed, nearly dark.

## Season 4 chapter clips, written 17 November 2026, before anything is generated

The six chapter stills are in `images.md` § 65. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Three do. They are in the shape of the Season 0 to 3 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *What It Did Not Say* (S04E00C01): a line left empty and a step not taken are things not done; the instruments agree every ninety seconds, which a ten-second take cannot hold. *Nobody at the Desk* (S04E00C02): a man standing still for ninety minutes while nobody comes; the still is the whole of it, and a take in which nothing happens is a still with a hum. *Both Ends* (S04E02C02): the scene is speech, and the record's clips carry no dialogue; the Superintendent's block is a line written. Larsen's and Calloway's blocks throughout are a man reading and deciding.

### X. The lift of the heads (S04E01C01, Alala's first block; start frame `chapters/s04e01c01.jpg`)

**Why it earns a clip.** *A raven overhead is an event; a raven still overhead is weather.* The still is the ninety-first second: nobody looking up. The technique is the change from one to the other, each face lifting once and not again, and only a held take has a before and an after.

> Documentary footage from a small fixed record camera high among the pale roof ribs of a habitat's dock ring, looking steeply down, on a working shift in the year 2827, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the raven perched on the broad pale rib in the left foreground, seen from behind, her head tilted down, with a band on one leg and a slim collar fitting at her neck; far below, the rounded grey machine in its berth with its folded arms and its even film of pale dust; the dock workers in ochre and slate blue around it with their low carriers and plain crates; the pale deck. In the first four seconds three of the workers, one after another and not together, lift their faces and look up toward the raven for a moment; one of them half raises a hand. Then each looks down again and goes back to what he was doing. From five seconds to the end nobody looks up at all: the workers walk, lift and set down crates, and talk to one another, at an ordinary working pace. The raven does not fly and does not call; she shifts her weight once and tilts her head a little further. The machine in the berth does not move at any point, and its dust is not disturbed. Photographed, not rendered: real feathers, cloth with a real weave, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: the wide even air of a working dock, soft footsteps, the low roll of a carrier, a crate set down, indistinct voices far below with no words; no bird call and no music. 24 fps, 16:9 landscape, 10 seconds. No raven taking off, no cawing, no pointing crowd, no alarm. No machine powering up, no lights changing, no arm unfolding. No hard hats, no helmets, no cameras, no phones, no screens, no holograms. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares. No camera travel, no dolly, no zoom. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A working dock from high up: air, footsteps, a carrier, a crate, voices too far to be words. No call from the raven (she is announced on paper, not by voice), no tone from the berth, no music.

**Judging a take.** It fails if nobody looks up, or if anyone looks up after the fifth second or twice; if the whole crew looks up together; if the raven flies, calls or turns to the lens; if the machine moves, lights or loses its dust; if a helmet, a camera or a screen appears; if the camera travels; if any lettering appears; and, by ear, if there is a caw, an alarm or music. Read the frames at 0, 3, 6 and 9 seconds: at work, a face or two lifted, at work, at work.

### Y. The light on the girder (S04E01C02, Alala's block; no start frame)

**Why it earns a clip.** *The girder she was going to land on had lit before she landed on it, every time, two shifts and a night, a run of light coming up along the cable tray a wingbeat ahead of her.* A still can show a lit rib and a bird. It cannot show which came first, and which came first is the whole of what she thanks the Warden for.

> Documentary footage from a small fixed record camera set among the pale roof ribs high in a habitat's dock ring, level with one broad smooth rib that crosses the frame from the lower left to the right, in the year 2827, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. The rib is pale matte composite, wide enough to stand on; along its upper edge runs one narrow shallow channel. The space under the roof is dim and even; far below and out of focus, the pale working deck and small figures at work. For the first three seconds nothing is on the rib and nothing is lit. Then a soft pale light comes up inside the channel at the left end and runs smoothly along it to the right, one low even band of light the length of the rib, which stays on; it lights the top of the rib gently and nothing else. One second after the light has arrived, a raven flies in from the upper left and lands on the lit rib at the right of the frame: a real raven with glossy black plumage, a plain metal band on one leg and a slim matte collar fitting at the back of her neck. She folds her wings, settles, and looks down at the deck, and does not look at the light or at the camera. The light is steady to the end. Photographed, not rendered: real feathers with their small disorder, grain heavier in the shadows, natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: the high quiet air of a large dock, the working deck faint far below, then wingbeats arriving, the scrape of claws on the rib, and the small rustle of wings folding; no bird call, no tone or chime when the light comes on, and no music. 24 fps, 16:9 landscape, 10 seconds. No raven before the light, no light that follows the raven, no light that flashes, flickers, pulses or changes colour, no spotlight beam, no lamp, bulb or visible fitting. No cawing. No steel lattice girders, no rivets, no cables hanging, no cage, no second bird. No screens, no holograms. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares. No camera travel, no dolly, no zoom. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** High dock air, wingbeats, claws on composite, wings folding. No sound at all from the light (the Warden says nothing, and the record gives its lighting no tone), no call, no music.

**Judging a take.** It fails if the raven is in frame before the light has run the rib, or lands before it arrives; if the light follows or tracks her, flashes, pulses or changes colour, or comes from a visible lamp or a beam; if she calls, or looks at the light or the lens; if she has no band; if the rib becomes lattice steel; if the camera travels; if any lettering appears; and, by ear, if a chime or tone marks the light, or there is a caw or music. Read the frames at 0, 3, 6 and 9 seconds: dark rib, light running, lit rib and the bird arriving, the bird settled on the lit rib.

### Z. The timing (S04E02C01, Larsen's first block; start frame `chapters/s04e02c01.jpg`)

**Why it earns a clip.** *So the cradle is clamped, oscillated against a calibrated spring, and timed.* The still shows a pod, a bed and a spring, which is a diagram of the method. The method itself is a period: a slow, even swing that is the same every time, and is the one thing in the case that two instruments could not agree about.

> Documentary footage from a fixed record camera at standing height in a bright bonded freight hall aboard a rotating space habitat, on a working shift in the year 2827, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the large smooth pale grey sealed pod with a small bronze seal on its seam, lying on a long dark measuring bed; the thick bright steel coil spring joining its carriage to a fixed dark block with one small steady pale light; the woman with short black hair in a teal work shell standing at the right with her hands behind her back, watching; the terracotta floor, the pale sea-green ribbed walls, the rows of identical pods and the workers far down the hall. Through the whole take the pod and its carriage slide slowly and smoothly a hand's width to the left and back to the right along the bed, again and again, evenly, like a slow heavy pendulum: three full swings in the ten seconds, each exactly like the last. The spring closes a little as the pod comes toward the block and opens as it goes away. Nothing else on the bed moves; the fixed block and its light do not move or change. The woman stands still and watches the spring; she does not touch anything. Far down the hall the workers go on with their own work. Photographed, not rendered: cloth with a real weave, real skin, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: the wide even air of a large hall, and under it the soft low slide of the carriage out and back, three times, with the faint creak of a heavy spring at each turn; distant indistinct work far off; no beeps, no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No pod lifting, tipping, rolling, opening or shaking, no fast vibration, no sparks, no steam. No dial, no gauge, no needle, no digital readout, no screen, no figures or numerals, no holograms. No light flashing or changing colour, no alarm. No forklift, no crane, no chains. No on-screen text, letters, numbers, signage, subtitles or watermarks. No lens flares. No camera travel, no dolly, no zoom. No rust, grime, dirt or debris. Not a music-video montage, not a trailer.

**Heard.** A big quiet hall, a heavy carriage sliding out and back three times, a spring's small creak at each turn. No beep or tone when a swing is counted (the record gives the instrument a method and no sound), no voice, no music.

**Judging a take.** It fails if the pod does not swing, swings unevenly, speeds up or slows, or stops; if it shakes fast, lifts, rolls or opens; if the spring does not close and open with it; if a dial, a readout or a numeral appears, or the light changes; if the clerk touches the pod or turns to the lens; if the camera travels; if any lettering appears; and, by ear, if there is a beep, a voice or music. Read the frames at 0, 3, 6 and 9 seconds: the pod in nearly the same place each time, with the spring a little more open or closed, and nothing else changed.

## Season 5 chapter clips, written 17 November 2026, before anything is generated

The six chapter stills are in `images.md` § 66. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Three do. They are in the shape of the Season 0 to 4 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *Not Asked* (S05E00C01): two questions and two noes are speech, and the record's clips carry no dialogue; what Wender does is decline to ask, which is a thing not done. *Asked Across* (S05E00C02): a nomination left unsent, a figure read on a sheet and a woman sitting down; the still is the last of these and the others are reading. *A Fraction of a Second* (S05E02C02): the tell is that her pace does not change, and a take of an unchanged pace is a still. In *What Came Off the Ship*, Syra's, Wender's, Rook-7's and Tobble's blocks have none: a desk assessment, a log read twice, an event the certified instruments recorded as a null and nine witnesses named differently, and a place the next season opens on.

### The half-beat (S05E02C01, Tissadelle's first block; start frame `chapters/s05e02c01.jpg`)

**Why it earns a clip.** *The leaves moving a half-beat behind the wind that moved everything else.* The still is a stand of trees. The marker is a delay, and a delay has no still: only a take can show the weeds move, and then the leaves.

> Documentary footage from a fixed camera on a tripod at the edge of rough upland ground, looking across it at a stand of trees in a shallow hollow, on an overcast afternoon in early autumn in the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the bramble in flower and the tall weeds across the foreground, the trees in full leaf with their slender pale grey trunks, the one trunk wound with dry creeper, the flat white sky. A steady light wind comes across the frame from left to right in three slow gusts. At each gust the weeds and the bramble in the foreground bend and stir first, at once, the way any plant does. The leaves of the trees do not move with them: they stay still for half a second, and then stir in the same direction, and when the gust drops the weeds settle first and the leaves go on moving for half a second more. The delay is the same at every gust. Nothing else happens. The trunks do not move. Nobody enters the frame. Photographed, not rendered: real leaves, grain, natural colour, normal exposure, flat overcast light. Restrained, patient, unhurried, no event arriving suddenly. Sound: wind over open ground, the dry rustle of weeds close by, and then, each time a little late, the fuller rush of leaves from the trees; a sheep far off, once; no birdsong from the hollow, no voices and no music. 24 fps, 16:9 landscape, 10 seconds. No leaves glowing, changing colour or falling. No mist, no light among the trees, no figure, no animal in the hollow. No slow motion, no reversed motion, no leaves moving against the wind. No fence, no wire, no building, no path. No text, lettering, numerals or captions anywhere.

**Heard.** Wind, weeds, then leaves a half-beat after them, three times; one sheep far off. Nothing from inside the hollow, no voice, no music. The lag is in the sound as well as the picture.

**Judging a take.** It fails if the leaves move with the weeds, or before them, or against the wind; if the delay is so long that it reads as a second wind, or differs from gust to gust; if anything glows, falls or changes colour; if a person, an animal or a made thing appears; if the camera travels; if any lettering appears; and, by ear, if there is music, a voice or an eerie tone laid over it. Read the frames at 0, 3, 6 and 9 seconds against the foreground: where the weeds are bent and the leaves are not yet, the take has it.

### The drift (S05E02C03, Tissadelle's first block; start frame `chapters/s05e02c03.jpg`)

**Why it earns a clip.** *They were going into the aperture. Not past it. Into it, in a steady unhurried line, the way a thing goes toward what it has been built to go toward.* The still has the line. It cannot have the direction, the pace, or the lights reaching the end of it and not coming out.

> Documentary footage from a fixed camera on a sea wall, looking out over a grey sea under heavy cloud in the hour before dawn in mid-autumn of the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the grey sea with its rows of small white breakers, the low heavy cloud, the dull even light, and far out the loose drift of small pale warm lights low over the water at the right, gathering into one thin line that climbs to the left across the sky and ends. The sea moves as a real sea does, the breakers running in toward the camera. The lights move too, all of them the same way and at the same slow steady pace: along the line, from right to left and upward, one after another, unhurried, like a procession. Each light that reaches the upper left end of the line goes out there, quietly, one at a time, and is not seen again. Nothing is drawn at the place where they go out: no ring, no hole, no glow, no flash. New lights rise off the water at the right and join the drift, so the line stays the same length. None turns back, none speeds up, none leaves the line. Photographed, not rendered: grain, natural colour, a touch under-exposed. Restrained, patient, unhurried, no event arriving suddenly. Sound: wind and a grey sea breaking on stone below the camera, steady and close; nothing at all from the lights; no voices and no music. 24 fps, 16:9 landscape, 10 seconds. No ship, no aircraft, no platform, no structure on the sea or in the sky. No beam, no portal, no vortex, no lightning, no explosion. No lights swarming, scattering, circling or coming toward the camera. No birds. No creature, no dragon, no shape in the cloud. No text, lettering, numerals or captions anywhere.

**Heard.** The sea on the wall and the wind. The lights make no sound (the record gives the tapers a light and no voice), the place they end makes none, and there is no music.

**Judging a take.** It fails if the lights do not travel, travel both ways, scatter or swarm; if they speed up toward the end; if anything is drawn where they go out, or it flashes; if a light comes back out; if a ship, a structure or a shape in the cloud appears; if the sea is still; if the camera travels; if any lettering appears; and, by ear, if there is a hum, a chime, a voice or music. Read the frames at 0, 3, 6 and 9 seconds: the same line in the same place, made of different lights each time.

### The third strike (S05E01C01, Tissadelle's block; start frame `chapters/s05e01c01.jpg`)

**Why it earns a clip.** *On the third pass she caught it, not as engineering but as what it also was: a beat. Two resonances a fraction apart, interfering.* The still shows a woman listening. What she hears is the chapter's finding, and it is a sound; the motion is small and is hers, at the moment she has it.

> Documentary footage from a fixed record camera at standing height where a relay station's outer-ring corridor meets a junction, in the late summer of the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the woman with red hair in a knot, in a slate blue-grey service shell, standing with one hand flat on the great pale arched rib and her eyes closed, a thin dark slate held down at her side; the small dark discs seated up the rib; the arched ribs repeating down the wide pale grey corridor to the far door. She stands quite still and listens. Three times in the take, at one second, at four seconds and at seven, the rib is struck once, out of frame to the left, by something hard and small: nothing is seen of what strikes it, and the rib does not visibly move. After the first and second strikes she does not move at all. After the third she opens her eyes and lifts her head a little, slowly, and looks along the rib toward where the sound came from; her hand stays on the rib. Nothing else in the corridor changes. Photographed, not rendered: real skin, cloth with a real weave, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: the low even air of a station corridor; each strike is one clean hard tap on a great hollow frame, followed by a long quiet ring that is two tones very close together, so that the ring slowly swells and fades, swells and fades, as it dies away; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No hammer, no tool, no hand, no limb, no second person and no creature in frame. No lights coming on, no readout, no dial, no slate lighting up. No alarm, no shaking, no crack appearing, no dust falling. No text, lettering, numerals or captions anywhere.

**Heard.** Corridor air, and three taps on the frame, each ringing away as two tones a fraction apart that beat slowly against each other. No voice (the teaching is Qiren's and Qiren is out of frame and unheard, as the record gives a Veyr's speech no sound), no alarm, no music.

**Judging a take.** It fails if anything that strikes the rib is seen, or a second figure or a creature enters; if she opens her eyes before the third strike, or turns to the lens; if the slate lights; if the rib shakes or cracks; if a light, a dial or a readout appears; if the camera travels; if any lettering appears; and, by ear, if the ring is one plain tone with no beat in it, or there is an alarm, a voice or music. Read the frames at 0, 3, 6 and 9 seconds: eyes closed, closed, closed, open.

## Season 6 chapter clips, written 17 November 2026, before anything is generated

The four chapter stills are in `images.md` § 67. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Three do. They are in the shape of the Season 0 to 5 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *What the Instruments Kept* (S06E01C02): what Rook-7 reads is a field signature that phrases, repeats and returns, and the record gives it no light and no sound; a take could only show a robot standing still at a window, which the still is, or invent a pulse for the signal, which the chapter leaves at low confidence. Wender's block there is a citation not signed, which is a thing not done. In *The Well Ran Warm Again*, the made Wender's block is speech, and the record's clips carry no dialogue. In *On the Record First*, Sen's block is a note not written and Rook-7's is two documents read; neither is a motion.

### The grey and the gold (S06E01C01, Tissadelle's block; start frame `chapters/s06e01c01.jpg`)

**Why it earns a clip.** *Grey first, then the particular gold that only the Union's home star threw.* The still has the gold. The chapter's morning is the change from one to the other, and it is the thing that keeps happening; only a take can show a light arrive.

> Documentary footage from a fixed camera on a tripod high on a hillside, looking down across a mown hill pasture to a dark wood, at first light on a morning in early autumn in the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. End exactly on the attached photograph and keep everything in it: the bright mown pasture, the dark wood behind it, the tall conifer at the right, the rough tawny grass, and on its rise the one small low house of pale stone with a dark roof, two wide rounded windows and an open door, its dry-stone yard wall and the line of pale posts along the pasture's edge. The take begins before the sun has reached the hill: the same view in flat grey light, cool and even, with no shadows at all, the pasture dull green, the house pale grey. Over the ten seconds the sun comes onto the hill from the left. A warm gold light arrives first on the tops of the wood, then slides down across the pasture toward the camera, and long soft shadows of the trees appear on the grass behind it and lengthen; last of all the light reaches the house and its wall. Nothing else moves but the grass, a little, in a light wind. The door of the house is open throughout and nobody comes out of it. Photographed, not rendered: real grass, real leaves, grain, natural colour. Restrained, patient, unhurried, no event arriving suddenly. Sound: a light wind over open grass; sheep somewhere below the house, out of sight, a few voices of a flock waking; one small bird; no human voice and no music. 24 fps, 16:9 landscape, 10 seconds. No sun in frame, no lens flare, no rays through mist, no orange or red sky. No person, no animal in frame, no vehicle, no smoke, no light in the windows, no door moving. No time-lapse clouds racing, no flicker. No second house, no second clearing, no doubled or mirrored thing anywhere. No text, lettering, numerals or captions anywhere.

**Heard.** Wind on grass, a flock below and out of sight (*the smell of the flock somewhere below the house* is the chapter's; the sound stands in for it), one bird. No voice: *You're up early* is the next block's, and a clip carries no dialogue. No music.

**Judging a take.** It fails if the light does not change, or changes all at once, or goes orange; if the sun or a flare is in frame; if anyone comes out of the door or the door moves; if a sheep, a person or a vehicle appears; if the house, the wall or the posts change shape during the take; if anything in the frame is doubled; if the camera travels; if any lettering appears; and, by ear, if there is a voice or music. Read the frames at 0, 3, 6 and 9 seconds: grey with no shadows, gold on the wood, gold on the pasture, gold on the house.

### The warm edge (S06E01C03, Tissadelle's block; start frame `chapters/s06e01c03.jpg`)

**Why it earns a clip.** *It did not enter. It did not fix her. It stayed at the boundary of the only reality she had, and it held there.* And then: *The clearing, where the presence touched its edge, ran warm.* The still has a sunlit trunk at the frame's edge. That the warmth comes on, and that nothing comes in with it, are both things that happen over time.

> Documentary footage from a fixed camera on a tripod under two great trees at the edge of a clearing, looking out across rough pasture to dark scrub and a wooded slope, on a morning in early autumn in the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the pale, deeply ribbed foot of the great trunk at the left edge, the darker trunk at the right, the leaves overhead, the long shadows on the grass, the four crows at the patch of bare earth in the middle of the pasture. A light wind moves the leaves overhead and the shadows on the grass move with them. Over the ten seconds one thing changes, slowly and only at the left edge of the frame: the sunlight on the pale trunk and on the grass at its foot grows a little warmer and a little brighter, as it does when thin cloud clears the sun, and stays so. The rest of the clearing does not change. At about six seconds the four crows all lift their heads together and stand still, looking toward the left edge; they do not fly. Nothing enters the frame from the left or from anywhere. Photographed, not rendered: real bark, real leaves, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: wind in a great tree's leaves overhead; the crows, two or three low calls, which stop when they lift their heads; then the leaves alone; no voice and no music. 24 fps, 16:9 landscape, 10 seconds. No figure, no shape, no shadow of a figure, no silhouette among the trees. No glow, no beam, no rays, no mist, no shimmer, no heat haze, no distortion of the air, no lens flare. No wings, no creature, no dragon, no bird larger than a crow. No leaves changing colour or falling, no fire, no steam. No person, no building, no fence. No text, lettering, numerals or captions anywhere.

**Heard.** Leaves overhead, crows, and then the crows stopping. The presence makes no sound (the chapter gives it a pressure and a holding and no voice), and there is no music.

**Judging a take.** It fails if anything at all enters or appears at the left edge: a figure, a shape, a shadow, a glow, a shimmer; if the air distorts; if the whole frame warms and not the edge alone; if the warmth flares or pulses; if the crows fly off or turn to the lens; if a person or a made thing appears; if the camera travels; if any lettering appears; and, by ear, if there is a hum, a tone, a voice or music. Read the frames at 0, 3, 6 and 9 seconds against the left trunk: the same frame each time, the trunk a little warmer in the last two, and the crows' heads up in the last.

### The stylus (S06E02C01, Wender's block; start frame `chapters/s06e02c01.jpg`)

**Why it earns a clip.** *She set the stylus down.* The sentence closes the block here and closed her block in *What the Instruments Kept* thirty-four days earlier. The still shows the stylus lying on the desk; it cannot show that she was holding it over an answer, and put it down.

> Documentary footage from a fixed record camera at standing height just inside the door of an office on a sea coast, on a grey afternoon in the late autumn of the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. End exactly on the attached photograph and keep everything in it: the woman in her fifties with short greying brown hair, in a graphite uniform jacket with a stand collar, seated at the dark wooden desk beyond it; the closed grey bound document in front of her; the man in a dark band-collared jacket standing in front of the desk with his back to the camera; the wide rounded window behind her, the grey sea and the rain on the glass. The take begins with the slim dark stylus in her right hand, held a little above the closed document, quite still, while she looks down at the document; the man waits and does not move. At about four seconds she lowers the stylus and lays it on the desk beside the document, without hurry, takes her hand off it, and rests the hand open on the desk. Then she lifts her eyes to the man, level and calm, and holds them there. His shoulders drop a very little. Neither of them speaks. Rain runs down the window throughout. Photographed, not rendered: real skin, cloth with a real weave, wood with a real grain, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: rain on thick glass and the sea beyond it, low and steady; the small flat sound of the stylus laid on wood; the man lets out one breath; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No writing, no signing, no opening the document, no pushing it across the desk. No screen, no display, no light from the document or the desk. No handshake, no gesture, no standing up, no third person. No ship on the sea. No text, lettering, numerals or captions anywhere.

**Heard.** Rain on the glass, the stylus on the wood, one breath. No speech: *The Corps does not answer the first claim* is the chapter's and is said before this; the clip is the second after.

**Judging a take.** It fails if she writes, signs, opens the document or slides it; if she puts the stylus down hard, throws it or drops it; if she speaks, smiles or turns to the lens; if the man turns round, gestures or speaks; if the document or the desk lights; if her face is not the still's; if the camera travels; if any lettering appears; and, by ear, if there is speech or music. Read the frames at 0, 3, 6 and 9 seconds: stylus in hand, in hand, on the desk, on the desk with her eyes up.

## Season 7 chapter clips, written 17 November 2026, before anything is generated

The four chapter stills are in `images.md` § 69. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Two do. They are in the shape of the Season 0 to 6 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *Enough Is Enough* (S07E01C03): its morning is *grey then gold*, and Season 6's first clip is already a grey hill turning gold on the same hillside; a second would be the same take from another spot. What is new in the chapter is that the morning *did not resolve*, which is a thing that does not happen, and the still holds that as well as a take could. Rook-7's and Sen's blocks there are a log read against a shelf, and the three lines the signal carries could only be lettered. *Not Under a Name* (S07E01C04): a hand that stops above a blank line is a thing not done, the argument is inner speech, and the walk to the door is in the still. In *The Accurate Account*, Syra's block is speech, and the record's clips carry no dialogue. In *Shown, Not Healed*, Tissadelle's block is a refusal with nothing to see, and the levril has no body.

### The stylus taken up (S07E01C01, Wender's block; start frame `chapters/s07e01c01.jpg`)

**Why it earns a clip.** *Wender picked up the stylus she had set down ten weeks ago.* Season 6's last clip is the stylus put down, and this is its answer. The still shows it already in her hand; only a take can show it lying there and then lifted.

> Documentary footage from a fixed record camera at seated eye height at the near end of a long cream desk in a quiet archive room, on an afternoon in early winter of the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. End exactly on the attached photograph and keep everything in it: the cream moulded room with its deep rounded niches; the pale dark-haired woman in a dark high-necked garment standing beyond the desk with both hands on it; the woman with short greying brown hair in a graphite jacket seated at the right, seen in profile from behind her shoulder; and on the desk between them the two closed bound records side by side, one ochre-brown and one slate grey. The take begins with the slim dark stylus lying on the desk beside the grey record, a hand's width from the seated woman's right hand, which rests open on the desk; the standing woman has just finished speaking and her mouth closes; both are still. At about four seconds the seated woman's hand moves to the stylus, closes on it without hurry and lifts it, and she holds it a little above the desk, not yet writing. The standing woman watches the hand and does not move. Neither of them speaks. Photographed, not rendered: real skin, cloth with a real weave, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: a quiet room with its air moving, very low; the small sound of the stylus leaving the desk; one drawn breath; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No writing shown, no marks appearing, no opening of either record, no moving of the records. No screen, no display, no light from the records or the desk. No gesture, no nod, no smile, no standing up, no third person. No text, lettering, numerals or captions anywhere.

**Heard.** The room, the stylus leaving the desk, one breath. No speech: Syra's *It is not a eulogy. It is the rope* is said before this, and a clip carries no dialogue. No music.

**Judging a take.** It fails if the stylus is in her hand at the start; if she writes, or marks appear; if either record is opened, moved or lit; if either of them speaks, smiles or turns to the lens; if either face is not the still's; if a third person appears; if the camera travels; if any lettering appears; and, by ear, if there is speech or music. Read the frames at 0, 3, 6 and 9 seconds: stylus on the desk, on the desk, in her hand, in her hand and held still.

### The kettle (S07E01C02, Órla's block; start frame `chapters/s07e01c02.jpg`)

**Why it earns a clip.** *The kettle came to the boil, in a kitchen that could not decide how far it stood from a well fourteen centuries and a galaxy away, and for one morning — held open, unresolved, entirely true — it was enough.* The still has a thread of steam. Coming to the boil is a thing that happens over time, and that she lets it and does nothing else is the block.

> Documentary footage from a fixed camera at standing height just inside the open door of a small stone kitchen on an upland sheep holding, early on a grey morning in the year 2831, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the rough pale stone walls, the deep window with rounded corners and the green pasture and dry-stone wall beyond it, the river stone on the sill, the plain pale counter, the two pale beakers, the dark kettle on its dark disc, the corner of the old dark table, and the woman with curling greying hair in a long dark grey wool coat and a grey scarf, standing at the counter with her back mostly to the camera and one hand on the kettle's handle. Over the ten seconds one thing changes: the thin thread of steam at the kettle's spout thickens, slowly and steadily, into a full soft plume that rises past the window and thins out in the grey light. The woman stands quite still with her hand on the handle and waits; at about seven seconds she turns her head a very little further toward the door, and holds it there. She does not lift the kettle. Outside the window nothing moves but the grass, a little. Photographed, not rendered: real wool, real stone, grain, muted natural colour, a touch under-exposed. Restrained, patient, unhurried, no event arriving suddenly. Sound: water coming to the boil in a metal kettle, a low rising rumble that steadies; a light wind outside thick glass; a flock somewhere far off; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No pouring, no lifting the kettle, no lid rattling, no whistle. No flame, no glow under the kettle, no light from the disc or the wall housing changing. No second person, no shadow of a person in the doorway, no figure at the window. No steam filling the room, no mist, no shimmer. No text, lettering, numerals or captions anywhere.

**Heard.** The water coming to the boil, wind on the glass, a flock far off (the holding's own sound, as in Season 6's first clip). No speech: *You didn't go in* is said before this, and the long speech after it is the chapter's. No whistle, since the kettle is drawn without one. No music.

**Judging a take.** It fails if the steam does not thicken, or bursts out all at once, or fills the room; if she lifts or pours the kettle, or turns to the lens, or her face shows in full; if anyone else appears, in the room, in the door or at the window; if a flame or a glow appears; if the kettle, the window or the counter change shape during the take; if the camera travels; if any lettering appears; and, by ear, if there is a whistle, speech or music. Read the frames at 0, 3, 6 and 9 seconds: a thread of steam, a little more, a plume, a plume with her head turned.

## Season 8 chapter clips, written 17 November 2026, before anything is generated

The two chapter stills are in `images.md` § 70. Season 8 is the Church Space overlay, and a clip is held to what the stills are held to: nothing devotional is asserted, nobody appears who is not there, and no prayer is shown answered. Each chapter and POV block was asked the one question: does motion carry something its still cannot? One does, and what it carries is a sound. It is in the shape of the Season 0 to 7 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *Asteria's Night* (S08E02C01): the one thing that moves in it is three children crossing a mile of bog in the dark. A take of that has children for its subject, which the rule of 15 November does not allow, and it would show the crossing as a camera saw it, stopping in the right places, which is the one thing the chapter's record declines to carry. Ferdia's block is that walk from inside it, in a dark *with no edges*, and a take of it is a black frame. Dunne's block is a report being written, and Asteria's is a night of counsel with a man who is not in the room; a take must either show him or show her speaking to nobody, and each is a claim. In *The Night Office*, Fintan's second block is prayer and forty seconds of silence, which a ten-second take cannot hold and a picture should not stage; the bee's block is the inside of a comb in the dark.

### The half-tone (S08E01C01, Fintan's first block; start frame `chapters/s08e01c01.jpg`)

**Why it earns a clip.** *A hive in order hums in one voice... The third hive's testimony had a seam in it tonight. A half-tone, low in the chord, of the kind you could stand beside for a minute and talk yourself out of.* The chapter turns on a thing heard, and no still can carry it. The take is the still held while the last light goes, with the three hives' sound under it.

> Documentary footage from a fixed camera on a low stand in the grass of an open green hill at the end of dusk in late autumn of the year 2827, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the small old building of rough granite with its steep gable at the left and the low warm lamp in its doorway; the three plain pale squared beehives in a row on their low stand at the right, with the folded dark cloth over the rail in front of the nearest; the boulders, the grass, the far skyline and the heavy grey cloud. Over the ten seconds one thing changes: the last daylight goes, slowly and evenly, so that the sky, the grass and the pale hives each darken a little and the lamp in the doorway, which does not change, comes to seem a little brighter. The grass moves slightly in a light wind and the cloth on the rail stirs once at its lower edge. Nothing else moves. Nobody comes out of the door and nobody is in the frame. No bees are seen. Photographed, not rendered: real stone, real grass, grain heavier in the shadows, muted natural colour, under-exposed as dusk is. Restrained, patient, unhurried, no event arriving suddenly. Sound: the low steady hum of three beehives closed up for a cold night, heard from a few paces away; two of them hum together as one even voice, and under them the third holds a second, lower tone a half-step off, quiet and perfectly steady, neither growing nor fading; a light wind over open ground; no birds, no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No person, no shadow of a person, no figure in the doorway. No bees in the air, no swarm, no smoke. No lamp flaring or flickering out, no second light, no light in the sky, no stars moving, no aircraft. No opening of a hive, no lid lifting. No bell, no chant, no singing. No text, lettering, numerals or captions anywhere.

**Heard.** Three hives: two as one voice and the third a half-tone low, steady. Wind. No speech, since nobody is there; no bell and no chant, since the office is said alone and indoors and the record does not stage it; no music.

**Judging a take.** It fails if anyone appears, in the doorway or on the hill; if bees are seen, or a hive is opened; if the lamp flares, moves or goes out; if any new light appears; if the building or the hives change shape during the take; if the camera travels; if any lettering appears; and, by ear, if the hum is one plain tone with nothing under it, if the low tone swells, pulses or resolves, or if there is a bell, a voice or music. Read the frames at 0, 3, 6 and 9 seconds: the still, a little darker, darker, darkest with the lamp unchanged. The ear's verdict is his: Claude can read the frames and measure whether two tones are present, and cannot hear whether the seam is the chapter's.

## Season 9 chapter clips, written 17 November 2026, before anything is generated

The five chapter stills are in `images.md` § 71. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Two do, and both are a step. They are in the shape of the Season 0 to 8 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *Nothing to Report* (S09E01C01): the chapter's event is that nothing happens, six lights that do not change, and a still holds that as well as a take could; the struck words and the entry written after them are lettering. *What Did Not Fit* (S09E01C03): the chapter is a telling, fourteen minutes of it, and the record's clips carry no dialogue; the one motion in it, a pen put down, is finished in the still, and Season 6's and Season 7's clips are already a stylus put down and taken up. *Without the Can* (S09E01C04): its turn is that neither of them moves, and its forty seconds are speech; Noah's block is a wait, and Smith's is a thing heard through a hatch, which is the still. In *The Door With the Plant*, Smith's block is a reading of two signals and a decision to say nothing. In *Stand Where You Like*, the second scene is two answers and a question in a corridor, all speech.

### The step back (S09E01C02, Varn's block; start frame `chapters/s09e01c02.jpg`)

**Why it earns a clip.** *Varn did the thing a Deputy does when a Deputy does not know where they stand, which was take one step back. Not far. One... He stopped laughing. Something in his face closed the way a hatch closes, without a sound.* The whole chapter turns on one step and on what it does to a face, and the still is of the day before it. A take can show the step and the face in one shot.

> Documentary footage from a fixed camera low on the floor of a plain residential corridor aboard a large rotating space habitat, in the early spring of the year 2828, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the pale cream corridor curving away, the closed flush doors, the small round-leaved plant in its clay pot at the left, the young man in a pale linen overshirt crouched beside it with a rounded pale watering can held in both hands, looking up, and at the right edge the grey-brown trouser legs, dark boots and pale hands of an officer standing over him. For the first three seconds he is still looking up, and he gives one short, easy laugh, his face open. At about four seconds the officer's nearer boot lifts and comes down one pace further from him, and the other follows it: one step back, not far, unhurried, and then the legs are still again. His laugh stops. Over the next three seconds his face closes: the mouth shuts, the eyes drop from the officer to the can, the shoulders settle. He does not get up. Nothing else in the corridor moves. Photographed, not rendered: real skin, cloth with a real weave, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: the low even air of a habitat corridor; one short laugh from a young man, cut off; two soft footfalls on a hard matte floor; the small slosh of water in a nearly full can as his hands tighten on it; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No pouring, no water on the floor, no standing up, no walking away, no door opening. No second step, no step forward, no gesture from the officer's hands. No face of the officer, no third person. No screen, no display, no light changing. No text, lettering, numerals or captions anywhere.

**Heard.** The corridor's air, one short laugh that stops, two footfalls, water moving in the can. No speech: *What does it watch?* and *It doesn't* are said before this, and *Right. Sorry, Deputy* after it; a clip carries no dialogue. No music.

**Judging a take.** It fails if the officer does not step back, or steps more than once, or steps forward; if the officer's face comes into the frame; if he goes on laughing, or his face does not change, or he looks at the lens; if he stands, pours or leaves; if his face is not the still's; if the plant, the can or the corridor change shape during the take; if a door opens or anyone else appears; if the camera travels; if any lettering appears; and, by ear, if there is speech or music. Read the frames at 0, 3, 6 and 9 seconds: laughing with the legs near, the legs a pace further, the face closing, the eyes on the can. The still is the fourth day and the step is the fifth; the take borrows the still's staging, and the chapter gives both days the same hour, the same can and the same plant.

### The step that moved (S09E01C05, Varn's first block; end frame `chapters/s09e01c05.jpg`)

**Why it earns a clip.** *Varn had come through the hatch after a month of a log and a line and a countersign and the Corps leaving the ring, and had walked to the desk, and had stopped where Varn stopped, and it had been here.* The still shows the Deputy already at the desk. That nobody decided where the walk would end is a thing only a walk can show.

> Documentary footage from a fixed record camera at standing height just behind the shoulder of an older officer who stands at her desk in a small plain watch compartment aboard a large rotating space habitat, in the spring of the year 2828, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. End exactly on the attached photograph and keep everything in it: the warm pale grey room, the long dark housing on the left wall with its six small steady points of light, the round port above it, the pale desk growing from the right-hand wall with one blank grey leaf and a slim dark stylus on it, the plain closed hatch in the far wall, the grey-streaked hair and grey-brown shoulder of the older officer in the near right, and the young officer with short dark hair in grey-brown service dress. The take begins with the young officer just inside the hatch, which has closed behind, at the far end of the room, and the older officer's head up and level. Over the first five seconds the young officer walks the length of the room toward the desk at an ordinary pace, not slow and not marching, eyes ahead, and stops at the end of the desk, close to it, and one hand comes to rest on it. For two seconds nothing moves. Then the older officer's head tips down, toward the floor at the young officer's boots, and a moment later the young officer looks down too. The six points of light do not change at any time. Neither of them speaks. Photographed, not rendered: real skin, cloth with a real weave, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: a low steady hum from the wall housing, at one pitch throughout; five or six unhurried footfalls of ridged boots on a smooth hard floor, and then none; the small sound of a hand laid on a desk; no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No salute, no standing to attention, no stepping back, no shuffling nearer, no looking at the lens. No picking up of the leaf or the stylus, no writing. No change in the lights, no screen, no display, no alarm. No opening of the hatch, no third person. No text, lettering, numerals or captions anywhere.

**Heard.** The housing's hum (*the rack hummed at the pitch it hummed at*), footfalls that stop, a hand on the desk. No speech: Smith's *Varn* is said as the hatch opens, before the take, and *You moved the step* after it. No alarm and no tone from the instruments, since no event has come. No music.

**Judging a take.** It fails if the Deputy stops a pace short of the desk, or corrects the distance after stopping; if the walk is a march or a creep; if either of them speaks, gestures, or turns to the lens; if the Deputy's face is not the still's; if the lights on the housing change in number or brightness; if the leaf or the stylus is touched; if the hatch opens or anyone else appears; if the room changes shape during the take; if the camera travels; if any lettering appears; and, by ear, if there is speech, an alarm or music, or if the hum changes pitch. Read the frames at 0, 3, 6 and 9 seconds: at the hatch, mid-floor, at the desk with her head level, both heads down. Count the points of light in each: six.

## Season 10 chapter clips, written 17 November 2026, before anything is generated

The seven chapter stills are in `images.md` § 72. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Two do. They are in the shape of the Season 0 to 9 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *Sent for the Log* (S10E01C01): a document fetched and a line read; the handing-over is finished in the still, and Smith's block is three choices weighed and an entry written. *Sound, as Certified* (S10E01C02): a mount that rings under load does not move, and what the crew say goes through the deck, which a camera in the air neither sees nor hears; Tikket's block is standing still on purpose. *What It Hangs From* (S10E01C03): the turn is a sentence, and the record's clips carry no dialogue; the finger on the leaf is in the still. *More, Not When* (S10E01C04): ninety seconds of waiting for six instruments to agree, then a subtraction on a slate; nothing under a dock ring is dramatic, as the chapter says, and the number is lettering. *Record in Order* (S10E01C07): a signature is a stylus on a leaf, which Seasons 0, 6 and 7 have already as stills and clips, and the inspection's finding is a bracket that bent three years ago. In *What Settles It*, Tekka's block is a line written in a log and an admission; in *By Invitation*, Smith's block is a letter read and an entry made.

### The circuit (S10E01C06, Varn's block; start frame `chapters/s10e01c06.jpg`)

**Why it earns a clip.** *A raven was flying the ring. Banded, obvious, not hurrying: a long slow circuit under the gallery lights with the whole of the dock shift watching her and pretending not to.* The still has her fixed in the air with every face up. What she is doing is going round, at her own pace, where everyone can see her, and a circuit is a thing only a held take has. It is not Season 4's *lift of the heads*: there she sat still and the heads moved; here the heads are still and she moves.

> Documentary footage from a fixed record camera at standing height on the upper gallery of a habitat's dock ring, on a working afternoon in the spring of the year 2828, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts. Start exactly from the attached photograph and keep everything in it: the broad pale cream ribs arching overhead, the pale deck climbing away with small dock workers on it and rounded grey hulls held in smooth clamps, the solid cream rail, the young officer in grey-brown service dress seen from behind at the rail with one thin pale leaf in one hand and head tipped back, the five residents in plain band-collared tunics on the walk below, all looking up, and the raven in the air with her wings spread. Through the whole take the raven glides on, slowly and steadily, from where she is across the frame toward the right and away down the length of the ring, following its curve, with two or three slow unhurried wingbeats and long glides between them, growing smaller, never changing height much and never turning back. The young officer's head turns slowly to follow her. The residents' heads turn to follow her too; in the last three seconds two of them look down and walk on, and the others go on watching. The dock workers on the deck keep working. Nothing else moves. Photographed, not rendered: real feathers, real skin, cloth with a real weave, grain, natural colour, normal exposure. Restrained, patient, unhurried, no event arriving suddenly. Sound: the wide even air of a big working dock, distant footsteps and a low carrier far below, the soft beat of large wings two or three times, receding; a murmur of a few voices too far to be words; no call from the raven, no speech and no music. 24 fps, 16:9 landscape, 10 seconds. No landing, no diving, no circling tightly, no second bird, no flock. No bird looking at the camera. No pointing, no cameras or phones held up, no applause. No face of the young officer. No screen, no display, no light changing. No text, lettering, numerals or captions anywhere.

**Heard.** The dock's air and distant work, wingbeats going away, a murmur without words. No call (she is the notification made visible, and a notification is on paper), no announcement, no music.

**Judging a take.** It fails if the raven hovers, lands, dives, turns back or leaves the ring's curve; if she flaps hard or hurries; if a second bird appears; if she has become a crow, a gull or a bird of prey; if she looks at the lens; if nobody's head follows her, or everybody looks down at once; if the Deputy turns to the camera; if the ribs become lattice steel or the hulls grow windows; if the camera travels; if any lettering appears; and, by ear, if there is a caw, speech or music. Read the frames at 0, 3, 6 and 9 seconds: overhead, further right and smaller, far down the ring, nearly gone with two residents walking on.

### The telling through the deck (S10E01C05, Tsikk's block; no start frame, the room and the crew of `chapters/s10e01c05.jpg`)

**Why it earns a clip.** *Tsikk told the crew through the deck, in the register for things that are the case, and felt Kattik stop moving at the far end of the module, and Tikket come up off the third mount, and Tekka, who had said it was settled, say nothing at all for longer than Tekka had ever managed.* Nothing a camera can see or hear passes between them, and three bodies stop at once. A still cannot show a stop, and the stop is the only sign in the air that anything was said.

> Documentary footage from a small fixed record camera resting on the deck inside a plain sealed contractors' module beneath a habitat's dock ring, in the spring of the year 2828, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. The attached photograph shows this room and these beings: keep the dark blue-grey deck plates, the sand-coloured walls, the closed flush hatch, the blank grey panel low in the wall, the row of smooth metal capsules, and the four small six-legged beings with low domed slate-grey bodies and smooth featureless heads; there is no slab of slate on the deck in this take. At the start the four are apart and busy: one stands still in the middle of the deck, near the panel, facing it; one at the far end is pushing a capsule slowly into line with the others; one walks unhurriedly across the deck from left to right; one stands by the wall. For the first four seconds this goes on. At about four seconds the one in the middle lowers its body until its underside rests on the deck and presses the tips of its two forelegs down on the plating, once, firmly, and holds them there. At the same instant, with nothing seen to pass between them, the other three stop exactly where they are: the capsule stops, the walker stops in mid-stride with all six feet down, the one by the wall goes still. For the rest of the take nobody moves. Then, slowly, over the last three seconds, the three turn where they stand until each smooth head points toward the one in the middle. Photographed, not rendered: real matte chitin with fine scratches, real metal, grain, natural colour, normal exposure. Restrained, patient, unhurried, quiet and entirely unthreatening. Sound: the low even hum of a sealed room; the light quick ticking of small hard feet on metal plate and the soft scrape of a capsule; then one dull firm tap of two limb tips on the deck, and after it no footfalls at all, only the hum; no voice, no call, no chirp and no music. 24 fps, 16:9 landscape, 10 seconds. No fifth being, no human, no hand. No light, glow or writing on the panel. No antennae, no wings, no mouth, no eyes, no face. No rearing up, no running, no scattering, no threat posture. No screen, no display, no light changing. No text, lettering, numerals or captions anywhere.

**Heard.** The module's hum, feet on plate, a capsule sliding, one tap, then stillness. No voice from the crew (the Undersong does not carry through air, and nothing they say is a sound a camera hears), no tone from the panel (the habitat answers *through the module's panel, with the reading*, which is lettering, and the take is after it), no music.

**Judging a take.** It fails if the three do not stop, or stop one after another, or stop before the tap; if anything visible passes between them, a light, a glow, a gesture; if any of them scatters, rears or runs; if a fifth appears or one is lost; if a body grows antennae, wings, eyes or a mouth; if the panel lights or shows writing; if a slab, a human or a hand comes into frame; if the room changes shape; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a chirp, a tone or music, or footfalls after the tap. Read the frames at 0, 3, 6 and 9 seconds: four at their work, four at their work, one pressed to the deck and three stopped, three heads turned to the one. Count the bodies in each: four. The still is the minutes after, with the log open; the take borrows its room and has no slab.

## Season 11 chapter clips, written 17 November 2026, before anything is generated

The eight chapter stills are in `images.md` §§ 73 and 74. Each chapter and POV block was asked the one question: does motion carry something its still cannot? They are in the shape of the Season 0 to 10 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet. Episode 2's two are here; Episode 1's follow below them when that episode lands.

**No clip, and why (Episode 2).** *Eleven Minutes* (S11E02C01): the eleven minutes are a profile on a thermal channel, read that evening, and the point of them is that nothing moved and nobody turned; the unit on the line is a found object, standing still, and its log is lettering. Aravena's question to the dark is speech, and the record's clips carry none. In *Nothing Happened*, Aravena's block is the third reading given aloud; in *Something Happened*, Nakagawa's blocks are a ruling and a log entry.

### The shadow that moves (S11E02C02, Nakagawa's block; start frame `chapters/s11e02c02.jpg`)

**Why it earns a clip.** *The two shapes did not move when the light's edge reached them. They moved when the shadow reached them.* The still has one shadow lying down the slope and two shapes at the bottom of the light. The finding is an order of events: the light arrives and they hold, the shadow arrives and they go. Only a held take has an order.

> Documentary footage from a survey imager set down on the rock at the top of a broad fall of broken stone inside a cavern on a cold world, in the year 2832, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. Start exactly from the attached photograph and keep everything in it: the person in the grey-green coverall seen from behind at the left with a small lamp in one hand, the pale rock walls, the fall of pale slabs and boulders going down and away, the person's long dark shadow lying down the slope, the two small pale rounded shapes standing still at the bottom of what the light reaches, and the dark beyond with its faint amber and blue-green glow. Through the take the person slowly turns a quarter of the way to the right, the lamp swinging with the body, once, without hurry, and stops. As the light swings, every shadow on the slope swings with it: the person's long shadow and the long shadow of each boulder slide sideways across the stone, steadily, from left to right, toward the two pale shapes. The edge of the light reaches the two shapes first and they do not move at all. A second later the first moving shadow reaches them, and at that instant, together and without hurry, both shapes turn and go back into the dark, and are gone by the time the shadow covers where they stood. The person does not see it and does not react. Nothing else moves. Photographed, not rendered: real rock, real cloth, grain, natural colour. Restrained, patient, unhurried, quiet and not frightening. Sound: the close dead air of a cavern, the scuff of one boot turning on grit, a slow breath; then, far below and small, one low grind of a stone shifting on stone; no voice, no call and no music. 24 fps, 16:9 landscape, 10 seconds. No face of the person. No close view of the two shapes, no eyes shining, no animal running, no creature coming toward the camera. No beam drawn in the air, no lens flare, no second lamp, no second person. No screen, no display. No text, lettering, numerals or captions anywhere.

**Heard.** Cavern air, a boot on grit, a breath, and one stone shifting far below as they go. No voice (the party talks through the whole shift and none of it is the record's to carry here), no sound from the two shapes themselves, no music.

**Judging a take.** It fails if the two shapes move when the light reaches them, or before the shadow does, or not at all; if they run, bolt, come nearer or turn into animals with ears, eyes or faces; if the shadows do not move with the lamp, or move against it; if the person turns to the camera, points or reacts; if a second person or a second lamp appears; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a growl, a call or music. Read the frames at 0, 3, 6 and 9 seconds: the still; the shadows part-way across and the shapes holding in the light; the first shadow on them and both turning; shadow where they stood and nobody there.

### The knock answered (S11E02C03, Aravena's block; start frame `chapters/s11e02c03.jpg`)

**Why it earns a clip.** *It put a hand — it had hands — on a rock at the edge of the silt, a big one, bigger than the stone Aravena had carried, and moved it.* The still is the wait: the stone down, the step back, the adult still. The answer is a movement and a sound, the shift of rock the survey has logged since its first month, and neither is in a still.

> Documentary footage from a small fixed record camera at standing height just inside a narrow crack in the rock, looking out onto an open floor of pale silt in a cavern on a cold world, in the year 2832, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. Start exactly from the attached photograph and keep everything in it: the slight person in the grey-green coverall seen from behind at the left with a small lamp held low, the pale rock, the amber and blue-green fungus, the boulders, the one plain stone on the silt at the end of the bootprints, and the large round grey-furred being standing upright and still across the silt, back-lit, its face in shadow. For the first four seconds nobody moves at all. Then the being turns a little to one side, bends slowly from the hips, sets one broad hand on a large rock at the edge of the silt beside it, and pushes it a hand's width across the floor, once, plainly, the way a thing is moved so that it is somewhere else; then it straightens, slowly, and stands as it stood before, facing the person. The person does not move through any of it, and in the last second lowers the head a very little. Neither takes a step toward the other. Nothing else moves. Photographed, not rendered: real fur, real rock, real cloth, grain, natural colour. Restrained, patient, unhurried, solemn and entirely unthreatening. Sound: the close still air of a cavern, a slow breath; then one short low grind of heavy rock dragged across a stone floor, and stillness again; no voice from either of them, no growl, no call and no music. 24 fps, 16:9 landscape, 10 seconds. No face of the person. No lit face on the being, no eyes shining, no teeth, no claws. No reaching toward the person, no touching, no stone picked up or held up or thrown, no second stone set beside the first. No step over the stone. No second being, no second person. No screen, no display. No text, lettering, numerals or captions anywhere.

**Heard.** Air, a breath, and the rock: one short grind of stone on stone, which is the whole of the answer. No voice (what Aravena said *is not in any log*, and the take is after it), no sound from the adult's mouth, no music.

**Judging a take.** It fails if the being walks toward the person, reaches for them, touches them or crosses the stone; if it lifts, carries or throws the rock, or moves the person's stone; if it drops to all fours, or its face comes into the light as an ape's, a bear's, a sloth's or a person's; if the person turns to the camera, steps forward, kneels again or speaks; if a second being or person appears; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a growl or music, or no sound of rock at all. Read the frames at 0, 3, 6 and 9 seconds: the still; the still; the being bent with a hand on the rock; both standing as at the start, the rock a hand's width from where it was.

**Episode 1, added with § 74.** One of the five earns a clip.

**No clip, and why (Episode 1).** *Nobody Looked Up* (S11E01C01): the finding is that nothing turned, for as long as a long story takes, twice; ten seconds of three people not turning is the still. Stone-First's block is a telling asked for again. *Someone to Ask* (S11E01C03): an argument is speech, and how the up-people ask, *an empty hand held out, a sound that rises at the end, and waiting*, would put a human asking at the centre of a take in the one episode told from the other side; Stone-First's block is a thought finished. *Waiting to Be Asked* (S11E01C04): the waiting is the point, and a held take of someone standing still is the still; the sound that comes down the squeeze is a voice. *Theirs to Move* (S11E01C05): the one act has its clip already, from above, in *The knock answered*, and a second take of the same ten seconds from the other side would be a second record of one sound.

### The hum in the arms (S11E01C02, the youngest's block; start frame `chapters/s11e01c02.jpg`)

**Why it earns a clip.** *It hummed. Against the youngest's chest, through the fur, a small even hum the youngest could feel in their teeth. The youngest stopped.* The still has the carrying. What the chapter turns on is a sound and a stop: the thing wakes, and the one carrying it holds exactly still until it sleeps again, as you would for a small one who stirs. A stop is not in a still, and a hum is not in a picture. The chapter has it in the squeeze, where no camera fits; the take has the same thing a few steps earlier, in the passage, and says so.

> Documentary footage from a small fixed record camera at standing height in a long natural rock passage deep underground on a cold world, in the year 2832, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. Start exactly from the attached photograph and keep everything in it: the round-roofed passage of pale damp rock, the shelves of softly glowing blue-green and amber fungus, the pale silt floor, and the large round grey-furred being seen from behind, walking away from the camera on its two hind legs with a plain grey cylinder held upright against its chest in both forelimbs. For the first four seconds the being walks on, slowly and heavily, two or three careful steps away from the camera. At about four seconds a low even hum begins, and at the same instant the being stops in mid-step and holds perfectly still, exactly as it is, its arms unmoving round the cylinder, its head bent a very little toward it. It does not put the cylinder down, shift its grip or look round. For four seconds nothing moves at all. Then the hum stops, and the being stays still for the rest of the take. Nothing else moves; no light changes anywhere and nothing on the cylinder lights. Photographed, not rendered: real fur, real rock, grain, natural colour. Restrained, patient, unhurried, tender and entirely unthreatening. Sound: the close still air of a rock passage; slow soft heavy footfalls on silt, two or three; then one small low even hum, steady, like a sealed instrument waking, for four seconds; then it stops, and there is only the air; no voice, no growl, no call and no music. 24 fps, 16:9 landscape, 10 seconds. No face of the being. No light, glow, lens or display on the cylinder. No dropping, shaking, rocking or setting down of the cylinder. No second being, no person, no lamp. No screen. No text, lettering, numerals or captions anywhere.

**Heard.** Footfalls on silt, then the hum, small and even, then nothing. No voice (the youngest's *it is all right. It is only me.* is thought, *not out loud*), no tone or chime from the unit beyond the hum, no music.

**Judging a take.** It fails if the being does not stop, or stops before the hum or long after it; if it puts the cylinder down, shifts it, shakes it or turns round; if its face comes into view; if the cylinder lights, shows a lens or a display, or changes shape; if the being drops to all fours or becomes a bear or an ape; if a second being or a person appears; if the camera travels; if any lettering appears; and, by ear, if there is no hum, or the hum is a beep, a chime or a voice, or there is music. Read the frames at 0, 3, 6 and 9 seconds: walking; a step further on; stopped in mid-step; stopped still, exactly as at 6.

## Season 13 chapter clips, written 17 November 2026, before anything is generated

The four chapter stills are in `images.md` § 75. Each chapter and POV block was asked the one question: does motion carry something its still cannot? They are in the shape of the Season 0 to 11 entries: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet.

**No clip, and why.** *The Names Go By* (S13E01C01): what moves in it is a figure of light walking to the fourth door, and the chapter's own weight is in two people giving each other a name and a way, which is speech; the storm on the outer works is the other motion, and its point is a thing not heard (*the keep made none*), which a soundtrack cannot carry for one building among several. *Always There* (S13E02C02): a line recited, a page held out and read without being taken, a file closed; every beat is speech or writing, and the record's clips carry neither.

### The tide over the stone (S13E02C01, Oriel's last block; start frame `chapters/s13e02c01.jpg`)

**Why it earns a clip.** *The tide came in over the catchment stones the way it had been coming in all day and would all night, and nothing anyone said on the terrace made it come faster.* The still has one wave across the stone. The sentence is about a thing that keeps coming at its own pace whatever is said above it, and only a held take has a pace.

> Documentary footage from a camera fixed on a stone terrace above the sea on a windy island, on a grey evening; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. Start exactly from the attached photograph and keep everything in it: the flat slab of wet stone sloping down into the water at the bottom of the frame, the group of dark rounded rocks awash beyond it, the grey sea to a pale level horizon, the flat grey light. Through the take the sea does the one thing it is doing: a low swell comes in from the horizon side, breaks white round the rocks, runs up and across the stone slab as a thin sheet of foam, drains back off its edge, and the next one comes, three times in the ten seconds, each a little further up the stone than the last, none of them large. Nothing else moves. Nobody is in the picture. Photographed, not rendered: real water, real wet stone, grain, natural colour. Plain, patient and unhurried. Sound: the wash of a small swell on rock, the hiss of foam draining off flat stone, a steady wind; far behind the camera and very faint, a few women's voices speaking together in unison, low and even, no word of it distinct; no music. 24 fps, 16:9 landscape, 10 seconds. No people, no boats, no ships, no birds taking off, no land on the horizon, no lighthouse, no sunset, no breaking storm wave, no spray over the camera. No text, lettering, numerals or captions anywhere.

**Heard.** The swell on the rocks, foam draining off the stone, wind; and, faint and behind, the evening office spoken in unison with no word distinct (*The Abbess spoke them*; Oriel *did not know the words yet*, so the clip does not either). No music.

**Judging a take.** It fails if the sea is calm or stormy rather than a steady small swell; if the water does not reach further up the stone by the end than at the start; if the slab or the rocks change shape or move; if a person, a boat, a bird in flight or land comes into the frame; if the camera travels; if any lettering appears; and, by ear, if a word of the office can be made out, if one voice speaks alone, or if there is music. Read the frames at 0, 3, 6 and 9 seconds: the still; foam across the lower stone; the stone draining; foam higher up the stone than at 3.

### The lamp lowered and raised (S13E01C02, Bram's last block; no start frame, the hall of `chapters/s13e01c02.jpg`)

**Why it earns a clip, and why it is his to decline.** *He lowered the lamp and it was gone, and he raised it and it was there, and he understood that he could do that all night and it would not change.* It is the one thing in the Castle that can be done twice and come out the same, and a still cannot do a thing twice. But no picture on the site shows one of the Castle's people; both portraits and the chapter still leave the light to the reader. This prompt would be the first to show one, so it is written and not offered for a run until he says so. It shows no more than the chapter states: the lamp's own colour, more of it than the lamp has, the size of a person, no shadow, standing.

> Documentary footage from a camera held at standing height in the open doorway of a plain room inside an old windowless keep on an island, in an isolated kingdom on a far world; the camera does not move. Long unbroken take, one shot, no cuts. The room is small, bare and seamless: walls, floor and ceiling one continuous smooth pale grey surface with no joints, blocks, windows or fittings, meeting in soft rounded curves. On the floor just inside the doorway, against the wall at the right, lies one small plain sealed grey oblong case the length of a forearm, with nothing on it. The only light is one small oil lamp held by someone beside the camera and out of frame, low at the left edge; its warm light reaches into the room. At the start the lamp is held up, and in the middle of the room there is a standing shape made only of that same warm lamplight: about the height and outline of a person standing still and facing the door, with no face, no features, no clothing, no hands that can be made out, an even soft glow the colour of the lamp and a little brighter than the lit wall behind it, with no shadow on the floor under it and no light falling from it onto the walls. At three seconds the lamp is lowered out of the light's reach and the room goes dark: the shape is simply not there, at once, with no fading, and for two seconds there is only a dark room and the dim edge of the case. At five seconds the lamp is raised again and the room is lit as before, and the shape is there, in exactly the same place and the same stance, as if it had not gone. It does not move at any point. Nothing else moves. Photographed, not rendered: real fall-off of lamplight, grain heavier in the dark, natural colour. Still and strange, quiet, and not frightening. Sound: the dead quiet of a room with no wind in it; one slow breath let out; the faint creak of a lamp's handle as it is lowered and again as it is raised; no voice, no tone, no hum and no music. 24 fps, 16:9 landscape, 10 seconds. No face, eyes or mouth on the shape. No ghost, no skeleton, no robed figure, no angel, no wings, no halo, no rays, no sparkles, no mist, no smoke, no flicker. No movement of the shape, no turning, no reaching, no walking, no coming nearer. No shadow under the shape. No lamp in frame, no flame in frame, no hand in frame, no person in frame. No light or display on the case. No stone blocks, no masonry, no window. No text, lettering, numerals or captions anywhere.

**Heard.** A windless room, one breath, the lamp's handle twice. No voice (Bram says nothing in this block), no sound from the shape or from the case (*Thermal: nil. Sound: nil*, by the next episode's log), no music.

**Judging a take.** It fails if the shape has a face, clothing or any feature; if it moves, turns, fades in or out, flickers, or stands anywhere else after the dark; if it casts a shadow or lights the walls; if it is still there in the dark, or absent in the light; if it reads as a ghost, an angel or a person in a suit of light; if the lamp, a hand or a person comes into frame; if the case lights; if the room has blocks, joints or a window; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a tone, a hum or music. Read the frames at 0, 4, 6 and 9 seconds: the shape standing in lamplight; a dark room and nothing in it; the shape standing exactly as at 0; the same.

## Season 14 chapter clips, written 17 November 2026, before anything is generated

The seven chapter stills are in `images.md` §§ 76 and 78. Each chapter and POV block was asked the one question: does motion carry something its still cannot? Episode 2's answer is here; Episode 1's follows below it when that episode lands.

**No clip, and why (Episode 2).** *Sound, Rising* (S14E02C01): the chapter is a class in a summary and a question put at a table; the going through the squeeze is a motion, but it is the same on every one of two hundred shifts and the chapter turns on none of them, and the thing the class is of is a voice, which the record's clips do not carry. *Not Given* (S14E02C02): what happens at the junction on shift 220 is that the rock is felt through two pairs of boots and the unit files nothing; nothing in frame would move, and a take whose whole content is its soundtrack would be the roof recording the line, which is what the chapter's order ends. *Heard By* (S14E02C03): for the same reason, and more strongly. *Nothing said is recorded and nothing on the roof could have recorded it*; a clip with the long sound coming up the passage on it would be the one record the chapter says does not exist. The act itself has its clip from the deep side (below, with Episode 1), after the telling is done.

**Episode 1, added with § 78.** One of the four earns a clip.

**No clip, and why (Episode 1).** *Nobody Came* (S14E01C01): the game is a stone moved once and a step back, which is a motion, but the ones who move it are small ones and are not pictured, in a still or a take; what is left is the ground saying *someone is coming* with nobody coming, and ten seconds of nobody coming is the still. *Not a Place You Tell From* (S14E01C02): an argument is speech. *Keeps a Hand on It* (S14E01C03): the warm going still round a hand is a stillness spreading, which a take could hold, but the hand is the smallest's; and the telling of it at the line is speech.

### The light went with them (S14E01C04, Stone-First's block; start frame `chapters/s14e01c04.jpg`)

**Why it earns a clip.** *Back through the crack, slowly, not scraping more than they had to, and the light went with them, and the silt was in the light that never changes again.* The still is the hand kept on the rock and the one who has not gone. The end of the act is three things in order, none of them in a still: the rock moved, once; the up-person going, *not running*; and the cavern passing from lamp light back to its own. The take begins after the telling is done, so it carries no word of it, and it is not a second record of *The knock answered* (Season 11): there the answer comes at once and the person stays in frame; here the hand has been kept, the person leaves, and the light changes.

> Documentary footage from a small fixed record camera at standing height at the side of an open floor of pale silt in a cavern deep underground on a cold world, in the year 2834, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. Start exactly from the attached photograph and keep everything in it: the pale rock wall with its narrow dark crack at the left, the slight person in the grey-green coverall standing still in profile at the left with a small lamp held low, the one plain stone on the silt, the large shaggy grey-furred being at the right bent low with one broad hand laid flat on a rounded rock, its face turned down in shadow, and the shelves of softly glowing amber and blue-green fungus beyond. For the first two seconds nobody moves at all. Then the being, without lifting its head, pushes the rock under its hand a hand's width across the silt, once, plainly, and is still again, the hand still resting on the rock. The person hears it, lowers the head a very little, turns away without hurry and walks, slowly and steadily, never running, the few steps to the narrow crack in the wall, turns sideways and goes into it, carrying the lamp low. As the person goes into the crack the lamp light goes with them: the pool of pale light slides across the silt to the wall, narrows to a line at the crack and is gone, and the cavern is left in its own soft steady amber and blue-green glow, dimmer and unchanging. Only then does the being lift its hand from the rock and slowly straighten. Neither takes a step toward the other at any point. Nothing else moves. Photographed, not rendered: real fur, real rock, real cloth, grain, natural colour. Restrained, patient, unhurried, solemn and entirely unthreatening. Sound: the close still air of a cavern; one short low grind of heavy rock dragged across a stone floor; a breath let out; slow soft footsteps on silt, five or six; cloth brushing rock; then only the air; no voice from either of them, no growl, no call and no music. 24 fps, 16:9 landscape, 10 seconds. No lit face on the being, no eyes shining, no teeth, no claws. No reaching toward the person, no touching, no stone picked up or carried, no second being, no second person, no second lamp. No running, no backing away in fear, no turning to look back, no wave. No text, lettering, numerals or signage anywhere in frame. No screens, holograms or glowing displays. No camera movement.

**Heard.** Air, the rock once, a breath, footsteps going, cloth on rock, and then the warm's own quiet. No voice: the telling is over before the take begins and *the record does not set the telling down again*; what the up-person says at every knock is said before the still. No sound from Stone-First's mouth, no music.

**Judging a take.** It fails if the rock is lifted, carried or thrown, or moves before the two seconds or not at all; if the being walks toward the person, reaches for them, drops to all fours or follows; if its face comes into the light as an ape's, a bear's, a sloth's or a person's; if the person runs, backs away, turns to look, speaks, waves or picks up the stone; if the person leaves any way but by the crack; if the lamp light stays after the person has gone, or the cavern goes black instead of to the fungus glow; if a second being, person or lamp appears; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a growl or music, or no sound of rock. Read the frames at 0, 3, 6 and 9 seconds: the still; the rock a hand's width from where it was and the person turning; the person at the crack, the light narrowing; nobody at the left, fungus light only, the being upright with its hand off the rock.

## Season 12 chapter clips, written 17 November 2026, before anything is generated

The nine chapter stills are in `images.md` §§ 77 and 79. Each chapter and POV block was asked the one question: does motion carry something its still cannot? The shape is that of the Season 11 entries above: one held shot of ten seconds from a named mount, one motion, negatives as objects, what is heard said in the prompt and again in a **Heard** line, and a judging line. Two takes each when run, from his Chrome; nothing is generated yet. Episode 1's one is here; Episode 2's follow below them when that episode lands.

**No clip, and why (Episode 1).** *Someone Is Coming* (S12E01C02): a stone moving with nobody at it is a motion, and it is the one motion the season will not show. Stone-First heard the ground and found the rock moved; nobody saw it move, and a take of it sliding would be a middle that the telling says nobody was there for. *No Warmth in It* (S12E01C01): the shape *did not move while the smallest looked*, and was simply not there afterwards; a held take of a still shape is the still, and its going is a cut, which the record's clips do not have. *Where Someone Always Stands* (S12E01C03): the shape in Stone-First's place does nothing, which is the finding; Went-Round's answer from the line is the knock answered, which has its clip already (Season 11). *Where the Rock Is* (S12E01C05): what happens is in a crack a hand wide, to a child, where no camera stands; at the foot of it there is only waiting, and *breathe out* is speech. *The Light Went Round It* (S12E01C06): the one act has its clip from above, in Episode 2's entry, and a second take of the same ten seconds from behind would be a second record of one lamp.

### The light out of the wall (S12E01C04, Carried-It-Sleeping's block; start frame `chapters/s12e01c04.jpg`)

**Why it earns a clip.** *The amber on the near wall, the one the small ones sleep against, had gone dim the way a telling goes quiet near its end.* The still has the light already standing in the ring and the wall already dim. What the chapter saw first was the going: the wall thinning, and the same light gathering in the middle of the floor. That is one slow change in two places at once, and only a held take can show that the one is the other.

> Documentary footage from a small fixed record camera at standing height far back across the floor of a broad warm cavern chamber deep underground on a cold world, in the year 2833, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. Start from the attached photograph and keep everything in it, the wide floor of pale silt and loose stones, the boulders, the rock walls, the fungus glowing amber and blue-green at the right, and the dozen large grey-coated beings standing and sitting in a loose ring with their backs mostly to the camera, with two differences at the start: there is no shape of light in the middle of the ring, only bare silt, and the fungus on the rock wall at the left glows amber as brightly as the fungus at the right. Through the first six seconds the fungus on the left wall slowly dims, shelf by shelf, to dull grey, and as it dims a soft upright shape of light slowly gathers on the bare silt in the middle of the ring, growing brighter exactly as the wall grows darker, until it stands as the photograph has it: the size of one of the beings, rounded, featureless, amber on one side and blue-green on the other. It does not arrive from anywhere and nothing travels through the air between the wall and the floor. The beings do not move away; one or two heads turn slowly toward it. The darker, leaner one stands still until the last two seconds and then takes one slow step, beginning to walk round it. For the last four seconds the light stands quite still. Photographed, not rendered: real rock, real coarse hair, grain, natural colour. Restrained, patient, unhurried, curious and not frightening. Sound: the close warm air of a large cavern; the low murmur of one voice telling a story, without words that can be made out, which trails off into silence as the light gathers; then only the air and one soft footfall on silt; no hum from the light, no chime, no gasp and no music. 24 fps, 16:9 landscape, 10 seconds. No beam, ray, spark, flame, smoke or mist. No light moving across the chamber. No face, eyes, arms or legs on the shape of light. No being touching it, bowing to it, kneeling, pointing, or backing away. No small beings. No text.

**Heard.** Cavern air and a telling that goes quiet, then one footfall. The telling is a murmur and carries no words: Went-Round is in the middle of the two stones, and the record's clips carry no speech. No sound from the light, and no music.

**Judging a take.** It fails if the light flies, pours or beams from the wall to the floor, or appears all at once; if the left wall does not dim, or the right wall dims too; if the shape has a face, limbs, a flame or a flicker, or moves; if any being touches it, bows, kneels, points, flinches or runs; if the beings become bears, apes or cubs, or a small one appears among them; if the camera travels; if any lettering appears; and, by ear, if words can be made out, or the light hums or chimes, or there is music. Read the frames at 0, 3, 6 and 9 seconds: no light and a bright left wall; a faint shape and a half-dim wall; the shape as in the still and the wall dull; the same, with the dark one a step on.

**Episode 2, added with § 79.** Two of the three earn a clip.

**No clip, and why (Episode 2).** *Nominal* (S12E02C02): what Ferrant finds is in a log that said one word every day for two years, and a log is lettering; at the junction she stands still and feels the answer through her boots, and the knock answered has its clip already (Season 11). Nakagawa's and Aravena's blocks are questions asked and declined. In *Imager Fault*, Aravena's and Nakagawa's blocks at the station are a place named and a word struck; in *Two on the Line*, Ferrant's and Nakagawa's are a grade that does not move and a log entry.

### Forty seconds at the passage mouth (S12E02C01, Nakagawa's block; start frame `chapters/s12e02c01.jpg`)

**Why it earns a clip.** *It had arrived between one frame and the next, and stood for forty seconds, and was not there.* The still has it standing. What the imager kept, and what Egede called a fault, is that it does not come and does not go: it is absent, present, absent, with nothing between. A still cannot be empty and occupied at once, and this take is the playback itself, the one time in the season that an instrument was there for the whole of it.

> Documentary footage from a survey imager on its stand at the far wall of an empty cavern junction deep underground on a cold world, in the year 2833, eight centuries from now; the camera does not move at all. Long unbroken take, one shot, no cuts, deep focus. Start from the attached photograph and keep everything in it, the pale frosted rock, the two dark passage mouths, the faint blue-green and amber fungus, the plain grey cylinder standing on the silt among old bootprints, and the small sealed grey housing on its post at the left edge, with one difference at the start: the mouth of the right-hand passage is empty, plain dark, with no shape in it. For the first three seconds nothing in the room changes at all. Then, between one frame and the next, with no fade and no movement, the dark upright shape of the photograph is standing in the mouth of the right-hand passage: flat, featureless, rounded at the top, darker than the dark behind it, with a thin pale line of light all the way round its edge. It stands perfectly still for four seconds. Then, between one frame and the next, it is not there, and the passage mouth is plain dark again for the rest of the take. Nothing else changes: no light changes, no dust moves, and the shape never throws a shadow. Photographed, not rendered: real rock, grain, natural colour. Restrained, patient, flat and not frightening: a record, not a visitation. Sound: the dead still air of an empty cavern, unchanged from start to end; no hum, no tone, no sting, no whoosh, no footstep and no music when the shape arrives or when it goes. 24 fps, 16:9 landscape, 10 seconds. No fade in, no fade out, no flicker, no glitch, no static, no scan lines, no timestamp or overlay. No walking, drifting, turning, growing or shrinking of the shape. No face, eyes, arms or legs on it. No person, no creature, no lamp. No text.

**Heard.** The junction's own still air, the same throughout. The sound channel returned nothing, and the take says so by not changing: no hum, no tone and no music at the arrival or the going.

**Judging a take.** It fails if the shape fades, slides, walks, turns, grows or flickers in or out; if it has a face, limbs or a hood, or throws a shadow; if anything else in the room changes with it, a light, the fungus, dust; if the picture glitches, tears or shows a timestamp or any overlay; if a person, a creature or a lamp appears; if the camera travels; if any lettering appears; and, by ear, if anything at all marks the arrival or the going, or there is music. The forty seconds are four here, and the record says so. Read the frames at 0, 3, 6 and 9 seconds: an empty passage mouth; the same, or the shape just there; the shape standing as in the still; an empty passage mouth.

### The light going round (S12E02C03, Aravena's block; start frame `chapters/s12e02c03.jpg`)

**Why it earns a clip.** *Aravena's light was on the silt, low, finding the first one's feet the way it always found them, and Aravena's hand, without being told, took the light to the side. It went round.* The still has the light already on both. The finding is a movement of one lamp from one to the other: the same light lands on a coat and finds its texture, and a second later reaches the other and will not land. Only a take has the before and after in one beam. The take is the moment before the kneeling, with the lamp still in the hand, and says so.

> Documentary footage from a small fixed record camera at kneeling height just inside a narrow crack in the rock, looking out onto an open floor of pale silt in a cavern deep underground on a cold world, in the year 2833, eight centuries from now; the camera does not move. Long unbroken take, one shot, no cuts, deep focus. Start from the attached photograph and keep its place and its three figures, the pale rock, the amber and blue-green fungus, the boulders, the stones on the silt, the large grey-coated being standing upright at the left and the flat dark upright shape of the same height standing an arm's length to its right, with these differences at the start: the slight person in the grey-green coverall is standing, seen from behind at the left, a plain stone held against the chest in one arm and the small block lamp held low in the other hand, and the lamp's low pool of light lies on the silt at the feet of the grey-coated being only, so that the dark shape beside it is hard to see against the dark. For the first three seconds the light rests on the being's feet and legs and the coarse hair of its coat. Then the person's hand slowly carries the light sideways along the silt to the right, once, without hurry, and stops. As the light reaches the dark shape it does not land on it: a thin bright line appears all the way round the shape's edge, and inside the line it stays quite dark, with no texture. Behind the being a long black shadow lies on the silt; behind the dark shape the silt is lit and bare, with no shadow at all. For the last four seconds the light and everyone in it are perfectly still. The being never turns toward the shape. Photographed, not rendered: real coarse hair, real rock, real cloth, grain, natural colour. Restrained, patient, unhurried, held and not frightening. Sound: the close still air of a cavern; the person's breathing, a little fast, slowing; the small scuff of a boot on silt as the light moves; then stillness; no voice from anyone, no growl, no hum, no sting and no music. 24 fps, 16:9 landscape, 10 seconds. No face of the person. No shadow behind or under the dark shape at any moment. No face, eyes, arms or legs on the dark shape, and no movement of it. No reaching, touching, stepping forward or kneeling. No second lamp, no beam in the air, no text.

**Heard.** Air, breath and one scuff of a boot. No voice (what Aravena said *is in no log*, and the sound channel was off by Nakagawa's order: the take is before it in any case), no sound from either of the two on the line, no music.

**Judging a take.** It fails if the light lands on the dark shape and shows a surface, or the rim does not appear, or the shape throws a shadow at any moment; if the shape moves, turns, or shows a face or limbs; if the being turns to the shape, steps, reaches, drops to all fours or shows a lit face as an ape's, a bear's or a person's; if the person turns to the camera, kneels, steps forward or speaks; if the lamp becomes a torch beam in the air or a second lamp appears; if the camera travels; if any lettering appears; and, by ear, if there is a voice, a growl, a sting or music. Read the frames at 0, 3, 6 and 9 seconds: light on the being's feet, the shape barely seen; the same; the light across, a rim round the shape and bare lit silt behind it; the same, with nobody moved.
