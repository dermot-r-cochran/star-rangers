# Image prompts — generation and enhancement

Working record of the prompts behind every non-photographic image in the repo,
and of the enhancement recipes applied to real photographs. Kept in
`story-bible/` so it ships with the repo but stays outside `src/` and is never
published to the site.

**Why this file exists:** the `prismere-*` / `prismeri-*` cluster was generated
without its prompts being recorded anywhere. When the resolution problem
surfaced in the July 2026 audit there was no way to regenerate at a larger size
without inventing new prompts from scratch. That must not happen twice.

**Rule going forward:** no generated image enters the repo, and no photograph
gets a non-trivial enhancement pass, without an entry here.

## Which generators made the repository's images

Dermot's statement, 22 September 2026, recorded because it answers a question
the per-entry records could only answer one file at a time: **every generated
image in the repository came from Gemini or Firefly**, by one of three routes —

- **Gemini alone.**
- **Firefly worked up from a Gemini generation** — Gemini's output carried into
  Firefly rather than either tool used end to end.
- **Firefly alone.**

Two things this does not cover, and both are already recorded below or in
`images.md`; the statement is the rule and these are its named exceptions.

- **The Prismere / Prismeri cluster is Grok**, confirmed by him the same day.
  Section 1 below inferred it from the 768×1152 aspect and hedged at *almost
  certainly*; the hedge is now unnecessary and the entry says so. It is the one
  generated set in `src/images/` from a third tool, and it predates the
  Gemini/Firefly pipeline.
- **Supplied reference stills and clips**, which came from whatever Dermot had
  to hand rather than through the pipeline: the two shadow stills and the
  five-frame strip in `reference-art/` (Grok, 5 September 2026), and the
  headmate image of 24 August 2026 (**a third-party generator** — a fourth tool, and the
  only file from it; kept privately since 1 November 2026). Each is recorded in `images.md` where it was supplied,
  and none of them ships. The Grok video orphan they used to sit beside was
  removed from `src/video/` on 18 September 2026 at his instruction.

**A scan of the repository on 22 September 2026 found no fifth case.** Every
file under `src/images/` is landscape, square, or a portrait at a size no
generator in this list defaults to; nothing there carries a Grok default
aspect, and the one set that did — Prismere, at 768×1152 — has been Gemini's
since 3 September.

**The five 768×1376 portraits are route two.** `aldera`, `ilse-korvain`,
`karla-wender`, `nessa` and `rook-7`: Firefly worked up from a generation by
Gemini's default *banana* image model (Dermot, 22 September 2026, his word for
it; no version recorded, and the record does not guess at one — the pipeline's
current `gemini-3.1-flash-image` is a later model and not what these were made
on). They had no per-file **Tool** line, which is how the scan found them.

**The gap those five came out of, measured.** 270 JPEGs live under
`src/images/`. 205 are named nowhere in this file. But this file is not the
only record — `images.md` carries provenance for much of the corpus too, and
counting both together leaves **82** named in neither. 28 of those are codex
cards, which need no generation entry (*"Codex entries use designed title
cards, not photographs"*), so the genuine gap is **54 files**. Two earlier
counts in this session were wrong and are superseded by that one: five (it
looked only at a single aspect ratio) and 150 (it counted only this file, and
only two directories).

### What the files themselves say — audit of 22 September 2026

Read out of the JPEGs directly rather than inferred from names, and
reproducible: JPEG marker segments for EXIF, COM and XMP, and a perceptual
hash of every image compared against every photograph in the
`dermot-cochran-photography` checkout, with candidate matches confirmed on
downsampled pixels rather than on the hash.

| Signal | Files | What it proves |
| --- | --- | --- |
| Pixel-identical to a published photograph | 6 | Dermot's own frame, certainly |
| XMP `DigitalSourceType: trainedAlgorithmicMedia` | 3 | The file declares a generative-AI source |
| `STAR-RANGERS-PLACEHOLDER` in a COM segment | 2 | A placeholder card, as designed |
| A libavcodec COM segment | 39 | The file passed through ffmpeg |
| Camera make and model surviving in EXIF | 1 | Nothing much — see below |

**The photographs that can be proved are a floor, not a set.** Six files match
a published photograph exactly: `hero/characters-hyrax.jpg`,
`lore/cloud-sea.jpg`, `lore/drowned-forest.jpg`, `lore/grassland-storm-tree.jpg`
and `lore/island-watchtower.jpg` pixel for pixel, and `lore/trigrian.jpg`
closely enough to be the same frame treated. The method can only ever find
frames that were *published* to the portfolio; anything from `F:` that never
went up is invisible to it. And EXIF cannot fill the gap, because the import
pipeline strips it — exactly one file in 270 still carries a camera model.

**Three files that read as photographs declare generative AI**:
`lore/boirinn-uplands-waterfall.jpg`, `lore/highland-summit-snowfields.jpg`
and `lore/moorhen-wetland.jpg`. The tag means generative AI touched the file,
which covers a wholly generated image and a real photograph with a generative
edit alike, and it does not say which. Worth Dermot's eye, because their names
and subjects would lead a reader of this file to assume the camera.

**The ffmpeg marker is unexplained and is recorded as a finding, not a
reading.** 39 files carry it, 21 in `codex/` and 18 in `lore/`. Two
explanations fit — frames pulled from generated clips, or a resize step that
happened to run through ffmpeg — and nothing in the files chooses between
them. None of the six proved photographs carries it.

**The 54-file worklist**, for whoever closes it. Each needs one line saying
photograph, card or generation, and the answer is Dermot's to give:

- **Carrying the ffmpeg marker** (9): `lore/aspenar.jpg`, `lore/fellowship-of-light.jpg`, `lore/krenyi.jpg`, `lore/meridian.jpg`, `lore/star-rangers-decision-and-communication.jpg`, `lore/star-rangers-safety-corps.jpg`, `lore/subsea-cable-drones.jpg`, `lore/the-unbroken-command.jpg`, `lore/undersong-belt.jpg`.
- **The rest** (45): `characters/aldera/field-photo-02.jpg`, `characters/aldera/field-photo-04.jpg`, `characters/kai-larsen.jpg`, `characters/sen-marginalia.jpg`, `hero/codex-documents.jpg`, `hero/home-launch.jpg`, `hero/lore-cosmic.jpg`, `hero/season-00-foundation.jpg`, `hero/season-01.jpg`, `hero/season-03-datacentre.jpg`, `hero/season-05-explorers.jpg`, `hero/seasons-orbit.jpg`, `hero/timeline-clock.jpg`, `lore/aethelrock.jpg`, `lore/ai-safety-kernel.jpg`, `lore/ai-usage-credits.jpg`, `lore/autumn-canopy.jpg`, `lore/boirinn-uplands-horses.jpg`, `lore/boirinn-uplands-mist.jpg`, `lore/boundary-zones.jpg`, `lore/cnoc-na-mbeach.jpg`, `lore/coastal-sunset.jpg`, `lore/competing-designs.jpg`, `lore/concordant-membranes.jpg`, `lore/cosmic-cascade.jpg`, `lore/creative-entropy-framework.jpg`, `lore/crimson-blossom-macro.jpg`, `lore/dryadic-trees.jpg`, `lore/elder-fig-grove.jpg`, `lore/ensemble-multiverse.jpg`, `lore/environmental-technology-design.jpg`, `lore/highland-cloud-sea.jpg`, `lore/highland-scrub-road.jpg`, `lore/knarrheim.jpg`, `lore/pelagene-littoral.jpg`, `lore/pink-blossom-macro.jpg`, `lore/saltmere-mooring-gantry-2.jpg`, `lore/scarlet-thread-bloom.jpg`, `lore/seed-mind-lifecycle.jpg`, `lore/star-rangers-academy.jpg`, `lore/universe-overlap-and-folding.jpg`, `lore/violet-spike-inflorescence.jpg`, `lore/wading-heron.jpg`, `lore/wetland-treeline-reflection.jpg`, `lore/white-flower-macro.jpg`.
- *(17 November 2026: `hero/codex-documents.jpg`, `hero/lore-cosmic.jpg` and `hero/timeline-clock.jpg`, Adobe Stock by the July commit, were replaced and removed; `images.md` § 68.)*
## Alt text is the prompt of record

A prompt doesn't have to hide in here. The `image_alt` line in a lore entry —
and the descriptive text of the entry itself — is already a serviceable prompt,
and it has the advantage of being visible, reviewed, and kept in step with canon.
The eleven reconstructions below were written straight out of the alt text and
read perfectly well as prompts, which is the proof.

So the division of labour is:

- **Alt text** carries *what the image shows.* It is the short prompt, it ships
  with the site, and it is what a screen-reader user and a regenerating tool
  both get.
- **Lore body text** carries *the world the image sits in* — the material,
  light, and mood a good generation needs. Quote it into the prompt rather than
  paraphrasing it.
- **This file** carries only what the site can't: tool, version, date, seed,
  aspect, iteration count, the shared style preamble, and the enhancement
  recipes for real photographs.

**The consequence is a two-way check.** If a generated image and its alt text
drift apart, one of them is wrong — and since the alt text is what canon and
screen readers rely on, the image is usually the one that needs to change.
Treat an alt-text mismatch as a defect, not a documentation lapse.

## Entry format

    ### <filename>
    - **Type:** generation | enhancement
    - **Tool:** Gemini / Firefly / Grok / Lightroom / Photoshop / other, plus version if known
    - **Date:**
    - **Source:** (enhancement only) original file or negative
    - **Prompt / recipe:**
    - **Notes:** aspect, seed, iterations, anything needed to reproduce it

---

## 1. Missing prompts — generation

### The Prismere / Prismeri cluster (11 files)

All eleven are 768x1152, **Grok output at its default size** — confirmed by
Dermot, 22 September 2026, when he named Gemini and Firefly as the generators
behind every other generated image in the repository. Until then this entry
inferred it from the ratio, 2:3 being one Firefly offers no preset for; the
inference was right and is now a record. The original prompts were never
recorded.

**Superseded 26 Jul 2026: replaced, not upscaled.** Dermot's decision — the
low-quality originals were not reused. The prompts written for the
replacements are in `images.md` Open work 5 (migrated 2026-08-11, when
`firefly-prompts.md` was retired), written to
diverge per location rather than preserve the existing look, since the repeated
motif was the second complaint against the set after resolution.

**Done — regenerated 3 September 2026**, the whole set in one batch at
1600×893, two variants each: the eight `prismere-*` approved and merged that
day, the three `prismeri-*` rejected as still humanoid and regenerated the
same evening against the derived body, and `prismere-root-mat-network.jpg`
(which was 773×1152) with them. Twelve files, all landscape, none of the
768×1152 originals left in `src/images/`. `images.md`'s Open work 5 table
carries the per-file record, and the batch's own entry is under *2026-09-03 —
the Prismere set regenerated, and Agent Barsik*: Gemini 3.1 Flash Image, 2K,
16:9, no reference images. So nothing below is a live worklist: the Grok
attribution and the reconstructions are the record of what the *originals*
were, and every Prismere file on disk today is Gemini's.

The reconstructions below are kept as the record of what the *original* eleven
depicted, rebuilt from each image's alt text and the lore entries
(`src/lore/planets/prismere.md`, `src/lore/prismeri.md`). They remain the
fallback if a regeneration ever needs to stay compatible with the old look.

Shared style preamble for all eleven — the series reads as one world because
these terms were constant:

> Silicate-carbon biosphere, living tissue built from glass and crystal.
> Bioluminescent throughout, the world producing its own light. Translucent
> crystalline forms, soft shifting colour washes, dense particulate haze in the
> air. Painterly science-fiction concept art, high detail, no visible text or
> figures in human dress. Aspect 2:3, portrait.

Per-image prompt bodies:

- **prismere-orbital-vista.jpg** — A biomechanical aerial creature gliding
  beneath two ringed planets and a scatter of moons; luminous jellyfish-like
  fauna mid-air; an armoured, spike-shelled ground crawler in the foreground.
  Crowded sky, dense ring plane, seven moons.
- **prismere-twilight-lattice.jpg** — A silvery biomechanical winged organism
  in flight beneath swirling green-and-purple sky patterns; pale crystalline
  coral-like fauna below. The sky patterns are faint, *mathematically precise*
  lines, arcs and polygons — geometry, not aurora.
- **prismere-glasswood-grove.jpg** — A cluster of translucent glowing
  flower-like growths on a crystalline stalk, beneath a banded gas giant.
  Foliage translucent and lens-like, re-emitting light.
- **prismere-flowering-glasswood.jpg** — A luminous flowering glasswood stand
  at night; small many-legged foraging fauna moving across the ground beneath.
- **prismere-luminous-towers.jpg** — A colony of glowing amber-lit lumenspire
  towers rising from a crystalline grove; a jellyfish-like aerial creature
  drifting past. Mineral analogues to fungal towers, lit from within, loose
  colony rather than a regular array.
- **prismere-glass-spires.jpg** — Tall translucent glass-spire structures of
  fused silica against a night sky showing a visible spiral galaxy; crystalline
  reef-like fauna at ground level. Lattice-veined, higher elevation, no
  glasswood grove around them.
- **prismere-driftjellies.jpg** — Three luminous jellyfish-like driftjellies
  floating above armoured spike-shelled ground fauna, beneath a golden ring
  system. Gas-bladder bodies, trailing luminous feeding tendrils.
- **prismere-umbral-ray.jpg** — A large silvery biomechanical-looking flying
  creature gliding through a dim sky; spiny armoured fauna and pale crystalline
  plants on the ground below. Apex aerial predator, silent glider, broad wing
  structure. Darker and more threatening in tone than the rest of the set.
- **prismeri-first-wings.jpg** — A slender grey-violet winged humanoid with
  gossamer wings and a segmented skull ridge, standing beneath a dark moon and
  a distant ringed planet. Light-boned, soft still-hardening exoskeleton. Adult,
  not childlike.
- **prismeri-full-wings.jpg** — A gold-and-blue chitin-plated winged humanoid
  with long motile sensory tendrils growing from the skull ridge, standing among
  crystalline flora beneath a banded planet. Hardened plating, load-bearing
  wings built for sustained high-altitude flight.
- **prismeri-lattice-gathering.jpg** — Two Prismeri, one First Wings and one
  Full Wings, facing each other beneath a crystalline geometric sky pattern,
  with luminous jellyfish-like fauna nearby. The size and structural difference
  between the two forms should be legible at a glance.

**Known series weakness, if regenerating rather than upscaling:** the audit
files this cluster under "tonal outliers, deliberate" because one
jellyfish/crystal-spire motif repeats across eight distinct named locations. If
the point of a regeneration is variety, the prompts need to diverge much harder
per location than the reconstructions above — which deliberately preserve the
existing look so an upscale and a regeneration stay compatible.

### Why a genuinely alien world is hard to prompt

Worth writing down, because it explains the repeated motif rather than blaming
it. Ask a generator for "alien" and it returns a learned average of alien — the
glowing translucent thing, the jellyfish, the crystal spire — and it returns the
same average for all eight locations, because "alien" is the same word each
time. Adjectives can't separate them. Nor can a human eye reliably picture a
world lit by its own biosphere; there is no memory to check the result against,
which is exactly why the near-duplicates passed review the first time.

What does separate them is naming a **concrete physical cause** and letting the
look follow from it. Prismere already has these in the lore, and they differ
sharply by location:

- **Where the light comes from.** Lumenspires are lit from within by a shared
  root-mat; glasswood re-emits light it caught as a lens; glass spires carry no
  light of their own and take it from the sky. Three different light logics —
  so three different images, if the prompt says which.
- **What the sky is doing.** The Lattice is *geometry* — precise lines, arcs and
  polygons — not aurora. A banded gas giant, a dense ring plane, a visible
  spiral galaxy and a dark moon are four distinct skies, and each is already
  specified per image in the alt text.
- **How the air behaves.** Low gravity plus dense particulate supports a truly
  aerial ecosystem. That is why driftjellies hang and umbral rays glide in
  silence — and it should make the air itself look thick, not empty.
- **Scale cues.** The one thing generators drop first and the eye misses most.
  Say what a thing is next to.

Vary the axis, not the adjective. And when a scene resists visualisation
entirely, the honest fallback is the one already in use across the repo: a real
photograph doing the structural work, with the alien element composited in —
which is why the plate-and-creature composites need to look convincing.

### tissadelle-shepherd.jpg — current file's prompt unrecorded

The 1200×675 file landed by 2026-08-06 with no entry here — the rule this file
exists to enforce, tripped again; found 2026-08-11 while resolving the
replace-vs-upscale decision. The likely source, preserved verbatim from the
retired `firefly-prompts.md` § C (rewritten 28 July 2026 against Dermot's
character notes of the same day), is below. Treat it as the reference for any
future regeneration rather than certain provenance of the current file.

> Documentary photograph, available light, candid. A young woman in her
> twenties with red hair and blue-green eyes, in a practical working uniform
> worn correctly but well used, aboard a spacecraft or station. She is
> mid-task, her attention on something off to one side of the frame — reading
> an instrument, not posing. Upright, self-possessed bearing; alert and
> attentive expression rather than blank or steely. Equipment, hard surfaces
> and functional light around her. Unglamorous lighting; visible skin texture;
> no beauty retouching, no styled hair, no makeup emphasis. She is at work and
> has been for hours.

**What this prompt is carrying.** Dermot's note, 28 July 2026: she never
married and has had no relationship despite being elegant and charming — sigma
INFJ-A, highly sensitive but confident, expecting a depth most men can't
provide, and almost more focused on her career and on maintaining her dignity
as a leader. That is why the 26 Jul attempt failed and why it wasn't only a
lighting problem: beauty lighting and a to-camera gaze frame a subject as
presenting herself for approval, and her whole character is that she does not.
The two changes that matter are **her attention goes off-frame onto her
work**, and **nothing in the image invites the viewer**. Her solitude should
read as chosen and unremarkable — never as loneliness, never as a gap waiting
to be filled.

Guardrails: don't reach for *beautiful*, *striking*, *alluring*, or *lonely* —
if a batch comes back as a headshot, push harder on *documentary*, *candid*,
*available light*, and name the task she's doing. **This is Tissadelle, not a
type** — Dermot was explicit that this register must not carry over to the
story's other women in command. **The interiority — hint, don't show:** her
inner life is populated (fantasies, AI virtual companions, internal headmates
including tulpas and plural subsystems), and that complexity is what qualifies
her for a noogenic seed mind — a qualification, never pathology, instability
or spectacle. A literal depiction tips into the horror register the tone
guardrail rules out; keep the portrait outwardly plain.

Two optional variants, generate separately: the same frame at a dark
instrument panel whose glass carries two or three quiet reflections of her at
slightly different angles — ordinary equipment reflections, evenly lit,
nothing ghostly; discard any result that looks haunted. And the same woman on
a hillside flock-holding in wet upland country, off duty — her Tír na nÓg
home ground, load-bearing since Season 5.

### bubochka.jpg — current file's prompt unrecorded

Same finding, same date: 1200×675 by 2026-08-06, no entry here. The § C
prompt, preserved as the reference:

> A fluffy white rabbit sitting inside a large brown ceramic mug filled with
> pink and white marshmallows, more marshmallows scattered on the plate
> beneath. Absurdly, disarmingly cute. Photographic, soft natural window
> light, shallow depth of field. Played completely straight — a real
> photograph of a real rabbit in a mug, not an illustration.

Keep the alt text's scene exactly — it is well described and the comedy
depends on the specificity. The pair image (`bubochka-alert.jpg`, § 3 below)
must match this one's setting: same mug, same table, same light.

---

## 2. Missing prompts — enhancement of real photographs

These are Dermot's own photographs that have had, or need, a hands-on pass.
Recipes recorded so a future re-edit starts from a known state.

### archipelago-palm-avenue.jpg — DONE 26 Jul 2026
- **Type:** enhancement (dust-spot removal)
- **Source:** Tenerife/Alicante palm avenue frame, main body (Tamron 18-400)
- **Recipe:** heal the recurring sensor dust blob in the sky at ~53% across /
  40% down. Feathered patch sampled from same-brightness sky at the same rows.
  If done programmatically, the SVG mask must use `stop-opacity` (alpha)
  gradients — a white-to-black *colour* gradient does not feather under
  `dest-in` and leaves visible square edges.
- **Result:** verified clean at 3x zoom, no patch edge, 1600x1200 preserved.
- **Note:** same blob recurs across Oct 2025 (Kenya) to Jan 2026 (Tenerife) on
  this body. Worth re-checking other sky-heavy frames from it.

### highland-rock-spires.jpg — DONE 26 Jul 2026
### highland-summit-snowfields.jpg — DONE 26 Jul 2026
### boirinn-uplands-waterfall.jpg — DONE 26 Jul 2026
- **Type:** enhancement (zoom-smear recovery)
- **Recipe:** _Dermot to record — which tool, and whether this was a re-process
  from the original raw or a sharpening/denoise pass on the delivered JPEG._
- **Result:** all three verified improved. Rock silhouette against sky now shows
  no colour fringing and no halo line at 3x; rock and water texture resolved
  rather than smeared. Dimensions changed slightly (1600x1200 to 1600x1168,
  1600x1462 to 1600x1503) so these are re-crops, not in-place edits.

### moorhen-wetland.jpg — DONE 26 Jul 2026
- **Type:** replacement frame, not an edit
- **Result:** motion blur gone; bird tack-sharp, preening on a log. 1557x2133.
- **Note:** alt text in the referencing lore entry should be checked against the
  new pose before this ships.

### trigrian.jpg — NO CHANGE, original restored
- **Status:** a violet, antennaed, multi-eyed reptilian creature was supplied on
  26 Jul 2026 and has been set aside as
  `9 - New images to place/unplaced-creature-savanna-sunset.jpg` (1600x1067).
  It is not a grianmhór — Trígrian's apex predator is lioness-like to the point
  that the survey filed a seeding inquiry, and the entry's central section is
  built on that resemblance. The original three-suns composite stands.
- **Exposure item:** blown highlights on the three suns remain, and remain
  intentional. Audit position is "verify then leave alone" so a future pass
  doesn't "fix" them.
- **This is the alt-text check working.** The mismatch between frame and
  `image_alt` is what caught it.

### unplaced-creature-savanna-sunset.jpg — AWAITING PLACEMENT
- **Type:** composite — generated creature on a Maasai Mara savanna plate with
  a multiple-sun sky
- **Needs:** an entry to belong to, then a filename, alt text and a prompt
  record. Do not file it under Trígrian.

### highland-sentinel-lizard.jpg — OUTSTANDING
- **Type:** enhancement (composite refinement)
- **Source plate:** the same Roques de García frame as `highland-rock-spires.jpg`
- **Recipe needed:** mask refinement on the creature cutout plus a light colour
  and grain match. Cutout edges read soft beside the plain version.
- **Opportunity:** the plate has just been re-processed and is now markedly
  sharper than the version this composite sits on. Re-compositing onto the new
  plate fixes the sharpness mismatch and the soft edges in one pass — but it
  must be redone, because the new plate is a different crop.
- **Creature element, if a cleaner cutout is wanted** (moved from the retired
  `firefly-prompts.md` § F). Match the light direction to the plate before
  generating, or the mask will never sit right no matter how good the edge is.
  > A large monitor-lizard-like reptile in three-quarter view, climbing, body angled upward, long tapering tail trailing behind and down. Even overcast daylight from the upper left, matching a clear high-altitude sun. Plain neutral background for cutting out. Dry, matte, dusty scale texture in muted grey-brown — no gloss, no wet look, no rim lighting.

### saltvik.jpg — OUTSTANDING
- **Type:** photograph needed, no prompt applicable
- **Need:** a real cold-coast frame for the Knarr Line's Nordic-heritage
  coastal world. Currently a plain text card while sibling Saltmere entries
  carry two photographs each.

### Character portraits — status as of 2026-08-11
Resolved by the replace-not-upscale ruling and re-measurement:
`tissadelle-shepherd` and `bubochka` were already replaced at 1200×675 (landed
by 2026-08-06, prompts unrecorded — see their § 1 entries above, which keep
the never-a-glamour-headshot caution); `bubochka-alert` and `dorian-calloway`
are recorded done in § 3; `agent-barsik` (still 512×1024) has its regeneration
prompt in `images.md` Open work 1; and the two Aldera frames (512×1120, PNG
data under a .jpg extension) are a re-crop job in Dermot's hands — see the
Aldera note in `images.md` Open work 2, which keeps the caution that they sit
beside `field-photo-01`/`-02`, real photographs of a real kitten that
generation won't match.

---

## 3. Recorded prompts

_Entries move up here once complete._ The five below moved from
`firefly-prompts.md`'s *Recorded composites* and *Recorded generations*
sections on 2026-08-11, as that file's own header box asked; each carries its
own **Type:** line, so the two group headings were dropped in the move.

### trigrian-triple-sunset.jpg — 26 Jul 2026
- **Type:** composite from Dermot's own photographs (no generator involved)
- **Source:** `F:\122KENYA` — base `DSC_7768`, sun discs lifted from `DSC_7770`
  and `DSC_7778`. Amboseli, October 2025.
- **Recipe:** the base already carries one low orange sun setting behind the
  ridge. A second orange sun is composited beside it at 0.92 scale, and a
  smaller, whiter companion at 0.66 scale higher and trailing — matching the
  entry's own astronomy: *a tight central pair of orange suns... and a smaller,
  whiter companion on a wide, eccentric outer orbit*, descending together
  toward the hills.
- **Technique that matters:** lift the **sun disc only**, not the sky around it.
  Patch radius ~58px at 1600px wide, circular alpha mask with the falloff
  starting at 72%, blended `lighten`. A first attempt at 110px haloed every sun
  — because `lighten` takes the brighter pixel, so wherever the donor frame's
  sky was brighter than the base's, the whole patch disc lifted. Same failure
  mode as the dust-spot heal: match brightness, or keep the patch tight.
- **Rejected approach:** a naive `lighten` blend of four whole frames. The
  sequence is handheld, so the framing drifts and the tree comes out as three
  overlapping ghosts.
- **Note:** composites are welcome here. They are *not* welcome on the
  photography site, which carries only Dermot's own unaltered photographs.


### new-london-space-habitat.jpg — 26 Jul 2026
- **Type:** generation
- **Tool:** Adobe Firefly, widescreen preset — output 1408x768
- **Prompt (complete — supplied by Dermot 26 Jul 2026):**

  > New London Space Habitat orbits at Lagrange point L5, positioned in the
  > Earth-Moon system to maintain stable distance from both bodies. Constructed
  > in the late 22nd century as a refuge following the great environmental
  > collapse that rendered much of the British Isles uninhabitable, it serves as
  > humanity's largest preservation project for British cultural heritage.
  >
  > The habitat consists of three interconnected Stanford torus rings, each 1.5
  > kilometers in diameter, rotating to provide Earth-standard gravity. The
  > rings are named Westminster, City, and Crown, reflecting the traditional
  > divisions of historical London. These connect to a central non-rotating hub
  > called "The Spire" which houses administration, docking facilities, and
  > zero-gravity manufacturing.
  >
  > New London houses approximately 180,000 residents, primarily descendants of
  > British evacuation programs, though immigration policies have relaxed in
  > recent decades. The habitat maintains formal diplomatic ties with Eden Space
  > Habitat and other major orbital settlements, while operating under a
  > constitutional monarchy governance structure that preserves British
  > parliamentary traditions.
  >
  > The habitat's most distinctive geographical feature is the Thames Canal — a
  > water system that flows through all three rings, serving both practical
  > water circulation needs and symbolic connection to Old London. Bridges
  > spanning this canal have become important cultural landmarks and meeting
  > places within the habitat.

  Note the prompt is essentially the lore entry compressed — which is the
  method working as intended: the entry is the prompt, and the alt text is the
  short form of it.
- **Canon accuracy:** good. Three interconnected rings, central spire, water
  running through the rings, recognisable London landmarks inside them, and
  Earth roughly four times the Moon's apparent diameter — which is right for
  Earth-Moon L5, where both bodies are one lunar distance away.
- **Two known defects, both from the generator:**
  1. **1408x768, under the 1600px lore standard.** `eden-space-habitat.jpg`,
     its nearest sibling, is exactly 1600x900. Regenerate larger or upscale.
  2. **Garbled pseudo-text on the outer ring hull** (lower left, faint glyphs
     reading as "R & ▨▨E"). Add *text, lettering, signage, writing* to the
     negative prompt on any regeneration — see the house rule below.

### agent-barsik.jpg — attempt of 28 Jul 2026, REJECTED
- **Type:** generation attempt, not shipped
- **Tool:** Adobe Firefly, widescreen preset
- **Why rejected:** right cat, wrong on the lettering ban. Pose, office and
  deadpan all correct, but the frame was full of readable text — "CASE FILES",
  "LOGS" and "REPORTS" along the binder spines, "STATION INCIDENT REPORT —
  LOG 41" across the papers, and garbled pseudo-text on the collar tag itself.
- **Where the fix lives:** the regeneration prompt, with the blank-surfaces
  and plain-unengraved-tag requirements folded into the body, is in
  `images.md` Open work 1 — dormant until the old 512×1024 file is deleted.

### dorian-calloway.jpg — 29 Jul 2026
- **Type:** generation (replaces a stock-headshot-register portrait)
- **Tool:** Adobe Firefly, widescreen preset — output 1408×768, centre-cropped to
  1365×768 and resized to 1200×675
- **Prompt** (moved from the retired `firefly-prompts.md` § C):
  > Documentary photograph, available light, candid. A man in his late fifties, senior civil administrator, standing on the coordination floor of an orbital habitat administration centre, half-turned from a bank of wall-mounted status displays as though interrupted mid-shift. Business dress worn like a long day rather than a photocall — jacket open, tie loosened, sleeves turned back, a small plain metal pin at the lapel. Composed, unhurried, faintly tired; attention still partly on the displays. Behind him the displays show abstract orbital ring diagrams, engineering telemetry traces and schematic floor plans as pure graphics — shapes, curves and line work only. Working clutter on the desks below: printouts, cabling, a cooling drink. Functional overhead light, natural skin texture, no retouching, shallow depth of field.
- **Negative:** text, lettering, numerals, labels, signage, writing on any screen
  or surface, uniform, military uniform, police uniform, epaulettes, rank
  insignia, badge with visible engraving, flat studio backdrop, glamour
  lighting, corporate headshot, posed to camera.
- **Why no uniform** — settled 29 July 2026. The post is administrative rather
  than operational by design and Calloway cannot direct a habitat
  Commissioner's policing decisions; a service uniform would assert command
  authority his page spends its length denying, and any one service's uniform
  narrows him to a third of the remit. There is also no Compact uniform in
  canon (`src/lore/rank-insignia-and-uniform.md` covers Star Rangers only), so
  inventing one would be new canon cascading to all five habitat
  Commissioners. The room carries the breadth instead of a costume.
  *Status, 10 September 2026:* the "no Compact uniform in canon" line has
  since been overtaken for two bodies — Eden's bureau (19 August,
  `src/lore/eden-bureau-uniform.md`) and Orbital Five-O (10 September,
  Dermot: *Five-O does have uniforms unlike its Hawaiian namesake*). The
  conclusion for Commissioners stands: no uniform, and the Eden page says
  why. The Compact itself still sets no uniform requirement on a bureau.
- **Result:** correct on the first batch. No uniform; business dress worn like a
  long day, jacket open and one sleeve turned back, a small plain lapel pin as
  the only mark of office. The coordination floor carries the breadth of the
  remit — orbital ring diagrams, telemetry traces and a schematic floor plan
  across the wall displays, working clutter and a melting iced drink below.
- **Lettering check passed.** This was the risk the prompt was written against,
  since status boards invite the failure that killed the 28 July Agent Barsik
  attempt. Inspected at 4× on both the left display stack and the desk
  printouts: the text-like rows resolve to blur with no legible glyphs anywhere,
  which is the intended outcome — the *suggestion* of dense readouts without any
  actual writing. **Worth checking the same way on any future frame that puts
  screens or paper near the camera**, rather than judging it at page size.
- **Alt text updated** at `src/characters/dorian-calloway.md` — it previously
  read "A mature businessman portrait", which named a stock category rather than
  describing a frame.

### bubochka-alert.jpg — 29 Jul 2026
- **Type:** generation (replaces the rejected 28 July attempt)
- **Tool:** Adobe Firefly, widescreen preset — output 1408×768, centre-cropped to
  1365×768 and resized to 1200×675 (the preset is 1.833, the spec is 16:9 =
  1.778, so a 21px trim each side is needed — `import-image.ps1` scales but does
  not crop, so this needed a crop-then-resize pass)
- **Prompt** (the 29 July rewrite, moved from the retired `firefly-prompts.md`
  § C — the version that stood until then asked for "both ears fully raised",
  which a lop physically cannot do):
  > Documentary-style photograph, available light, candid. A pure white lop-eared dwarf rabbit standing bolt upright on her hind legs on a warm honey-toned rustic wooden kitchen table, body stretched tall and narrow, front paws tucked to her chest, absolutely still and tense, staring intently at something outside the frame. The rabbit: dense pure white fur, soft and fluffy; both long lop ears hanging down flat against the sides of her head, pale pink inner ear showing, never upright; one large round near-black eye in three-quarter view; small pink nose; long fine white whiskers. Beside her on the table, a brown speckled reactive-glaze ceramic mug and matching saucer, empty, with pink and white mini marshmallows spilling across the saucer and scattered over the wood. A tall glass of milk behind. A crumpled pale linen cloth to the left. Bright window to the right casting soft directional daylight; blurred warm kitchen interior behind. Shallow depth of field, warm natural colour. Played completely straight — a real photograph of a real rabbit, not an illustration.
- **Negative:** upright ears, erect ears, pointed ears, standing ears, rabbit
  inside the mug, text, lettering, watermark, illustration, cartoon, studio
  backdrop, glamour lighting.
- **The pair is the joke:** same rabbit as `bubochka.jpg` (§ 1), suddenly
  working — consistency of setting between the two frames is what sells it.
- **Result:** correct on the first batch. Lop ears folded flat, standing bolt
  upright on the hind legs, same brown speckled mug and saucer, same
  marshmallows, same linen cloth, same warm kitchen and window light. The pair
  now reads as one animal photographed twice, which is the only thing the image
  had to do.
- **Alt text updated** at `src/characters/bubochka.md` — it previously read
  "ears fully raised", inherited from the faulty prompt and impossible for a lop.

### prismere-root-mat-network.jpg — 29 Jul 2026
- **Type:** generation
- **Tool:** Adobe Firefly — output 848×1264, downscaled to 773×1152 via
  `scripts/import-image.ps1 -MaxEdge 1152`
- **Prompt (complete — supplied by Dermot 29 Jul 2026):**

  > Silicate-carbon biosphere, living tissue built from glass and crystal.
  > Bioluminescent throughout, the world producing its own light. Translucent
  > crystalline forms, soft shifting colour washes, dense particulate haze in the
  > air. Painterly science-fiction concept art, high detail, no visible text or
  > figures in human dress. Aspect 2:3, portrait.

- **Placement:** `src/lore/planets/prismere.md`, under *Glasswood and the
  Luminous Biosphere*, illustrating the shared root-mat network that feeds a
  lumenspire colony — described in the entry since it was written, never shown.
  Added in #217 along with a one-sentence lead-in.
- **Note — this used the wrong preamble.** The text above is the *legacy*
  shared preamble from `image-prompts.md` §1, which exists to reconstruct what
  the original eleven depicted. The current replacement preamble is in section A
  below, and differs: it adds *"naturalistic rather than decorative"* and drops
  the fixed 2:3 aspect. The consequence is visible in the result — crystal
  spires and the same palette as the old set, which is a faithful continuation
  of exactly the repeated motif the replacement series is meant to break from.
  Not a defect in the image, which is good, but it is not a step toward the
  eight-distinct-looks goal either.
- **Known defect:** 773×1152, under the 1600px lore standard — the same problem
  as the rest of the Prismere cluster. It should be regenerated with the section
  A preamble whenever that set is done, rather than upscaled on its own.

### reeves-eden.jpg and reeves.jpg — 13 Aug 2026, a deliberate pair

- **Type:** generation (both replacing earlier images — Eden's a holographic
  evidence interface, Threshold's a PORTRAIT PENDING card)
- **Date:** 13 August 2026, in #415
- **Recorded here 19 August 2026.** The pair had no entry in this file at all,
  which is why the emblem read as possibly accidental during that day's audit.
  It was not; the reasoning below is recovered from #415's commit message and
  from the two `image_alt` lines, which have carried it correctly since.

**Why an emblem and not a portrait.** Neither Reeves has a body anywhere in
canon — Lucene-9000 is *a mobile AI humanoid*, Reeves is *investigative support
intelligence*. The 12 August rule that *AIs get portraits like everyone else*
governs how to depict an AI **that has a body**; it never required inventing one.
See the qualification now recorded in `images.md`'s Conventions.

**What actually forced the re-brief, and the lesson worth keeping.** The earlier
Eden brief asked for a holographic case-file interface and banned lettering in
the same breath. It came back reading `CASE FILE: ALPHA-7` and garbled
pseudo-words. **The lettering ban cannot beat the scene:** if a brief describes an
object whose purpose is to carry writing, the model draws the object and the
object has writing on it. The fix is to change the scene, never to strengthen the
negative. Every prompt in this file that puts a display, a board or a document
near the camera is subject to the same failure.

- **Prompt, `reeves-eden.jpg`** — the junior of the pair, and the pattern is
  earlier:
  > Cool blue points of light scattered across a deep indigo field, a handful of them joined by faint thin lines into a partial figure that does not resolve into anything nameable, the rest unjoined. Soft vignette, deep quiet, nothing else in frame. No text, no lettering, no numerals, no interface, no display, no screen, no dashboard, no console, no face, no figure, no device of any kind.
  - **Why it suits him:** *a pattern half-found and not yet claimed* — which
    describes an intelligence that will not volunteer a conclusion better than a
    dashboard ever did.

- **Prompt, `reeves.jpg`** — same emblem, same palette, same restraint, **and the
  figure further along**, because Reeves at Threshold and Reeves at Eden are the
  same model on separate deployments and their pages say so:
  > Cool blue points of light on a deep indigo field joined by fine lines into a dense ring that is almost closed and still open along one arc, the remaining points unjoined around it. Soft vignette, deep quiet, nothing else in frame. Same negative as above.

- **The difference between the two frames is the content**, not variation between
  two attempts at one idea. Eden's pattern is beginning; Threshold's is nearly
  closed and deliberately not closed. Keep it if either is ever regenerated —
  a matched pair where both are at the same stage would say nothing.
- **Lettering check passed on both.** Zero glyphs, which was the entire object of
  the re-brief.

---

## 2026-08-31 — four designed cards from the cross-platform port

No generator prompts: all four are deterministic designed cards, drawn by
`scripts/make-cards.js` (added the same day — a Node/sharp port of
`make-emblem-card.ps1` and `make-codex-cover.ps1`'s designed mode, for
sessions without Windows; needs `npm install --no-save sharp`; Liberation
Serif/Mono substitute for Georgia/Consolas, layouts matched, letterforms
not). Parameters of record, mirrored in the script's CARDS table:

- `lore/ovruhn.jpg` — emblem; device **rings** (read as sound), tint
  `#0E1E24`, accent `#8FC0B8`; epithet "The Deep-Sung"; qualifier
  "Who hear the way other peoples see".
- `lore/the-makers-shape.jpg` — emblem; device **fold** (maker and mind,
  one path), tint `#241A30`, accent `#BFA8D6`; epithet "No Mind From
  Nowhere"; qualifier "Every built mind is a portrait of its makers".
- `lore/sapience-beyond-the-human-measure.jpg` — emblem; device **triad**,
  tint `#12211A`, accent `#9CC6AB`; epithet "The Checklist Refused";
  qualifier "Recognition, per lineage, through communication".
- `codex/the-two-songs-of-the-loud-people.jpg` — codex designed card;
  title lines "THE TWO SONGS" / "OF THE LOUD PEOPLE"; category "XENOLOGY
  RECORD"; subtitle "A Keeper's Account of Humanity"; institution
  "Rendered from Chorus-Keeping · Archive Translation Desk"; author
  "KEEPER VHEN OF THAVREN"; stamp "RENDERED"; motif **dissolution**.

Regenerating any of them on Dermot's machine with the `.ps1` originals is
welcome and expected to supersede these — same parameters, Georgia and
Consolas letterforms. Epithets and qualifiers above are authored, per the
emblem generator's own rule.

---

## 2026-09-03 — the first Codex-art image

### asteria-the-sage-impression-artwork.jpg and asteria-the-sage-impression.jpg — 3 Sep 2026

- **Type:** generation with a reference image (the artwork), then a designed
  card with the artwork as underlay (the header)
- **Date:** 3 September 2026; drafted for Dermot's review
- **Entry:** `src/codex/asteria-the-sage-impression.md`
- **Ruling it realizes:** Dermot, 3 September 2026 — *in-world artist's
  impression, no watermarks or overlaid text* — on the headmate image parked
  since Intake 2026-08-24. The Codex-art rulings of the same day apply: card in
  the header, artwork in the body, prospective only.

**Reference:** the headmate image (kept privately since 1 November 2026),
the third-party-generator image Dermot supplied on 24 August (768×1152 as
supplied, watermarked; the watermark strip was cropped off on 15 October 2026
and the file is now 768×1032). Sent
as an image part with the prompt; the manifest records it.

**Why a painting.** The entry presents the picture as an impression made from a
description and not a sitting, and a painterly surface says that without a
caption. It also keeps the image visibly apart from the character-portrait
house style, which is the point of the Codex frame: this is a picture somebody
in the world made of a person they were told about, not a portrait of a
character.

**Prompt, `asteria-the-sage-impression-artwork.jpg`** (Gemini 3.1 Flash Image,
2K, 16:9, two variations; the second chosen for its heavier brushwork, the
first kept in `image-out/` until the PR merges):
> A painted portrait in the manner of an artist's impression made from a description rather than a sitting: a woman who appears in her thirties, pale, with loose blue hair and pale blue eyes, in a black hooded cloak worked with fine silver botanical embroidery over dark layered clothing with a belt, standing among bare winter branches at night, three-quarter turn, level gaze past the viewer, still and watchful. Visible brushwork and a limited palette of night blue, black and silver; the branches thin and dissolve into the dark at the edges of the picture as if the painter stopped where the description ran out. Quiet, composed, a little hopeful rather than grim. No readable text, lettering, numerals, signature, monogram, watermark, logo, signage, labels, branding or written characters of any script anywhere in frame; no holograms, projected light, glowing displays, screens, monitors or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons; no drawn frame or border around the picture. 16:9 landscape.

- **Lettering check passed on both variants.** No glyphs, no signature, no
  watermark — the reference's watermark did not carry across.
- **Card, `asteria-the-sage-impression.jpg`:** `make-codex-cover.ps1` with
  `-TitleLines "ASTERIA","THE SAGE" -Category "ARTIST'S IMPRESSION" -Subtitle
  "A member behind a registration" -Institution "Circulating; no archival
  master" -Author "Unattributed" -Motif none -Underlay <the artwork>`, default
  scrim.

---

## 2026-09-03 — seven emblem cards from the Batch 2 lore audit

All `scripts/make-emblem-card.ps1`, title and category from each page's front
matter, epithet and qualifier lifted from the page's `description`. Replacing
stock anachronisms; the audit record is in `images.md` under *Images that
should not stay*.

| Page | Device | Tint | Accent | Epithet | Qualifier |
| --- | --- | --- | --- | --- | --- |
| galactic-stardate | sundial | #1C1810 | #D9C08A | Measured by Galactic Rotation | Cycles, not planetary years |
| year-zero | sundial | #1A1712 | #D2B98A | Year Zero | The events of 2826 UCSD |
| post-teleport-ascension-stress-disorder | fold | #16202A | #A9C4C9 | A Medical Corps-Recognised Condition | Distinct from ordinary post-jump fatigue |
| knarr-line | chevron | #1B2230 | #B8C7D6 | Belt Shipping and Ice-Mining Cooperative | Old enough to have helped write the first navigation treaty |
| federation-of-sentient-beings | rings | #1A2426 | #A8CDB9 | A Multi-Species Cooperative of Worlds | Mutual aid rather than central authority |
| star-rangers-command-hierarchy | chevron | #141A26 | #9FB6CE | The Rank Ladder, Novice to Triumvirate | Two career tracks fused into one chain |
| united-space-consortium | rings | #26201A | #D4B48C | The First Attempt at Interplanetary Governance | And why it did not survive its own contradictions |

---

## 2026-09-03 — the Prismere set regenerated, and Agent Barsik

- **Type:** generation, Gemini 3.1 Flash Image, 2K, 16:9, two variants per
  entry, no reference images (the point was to leave the old motif behind)
- **Ruling it acts on:** Dermot, 11 August 2026 — replace, not upscale; all
  twelve together or none. Prompts of record are the twelve entries under
  *5a* in `images.md`; none is repeated here.
- **Drafted for review**, since every one depicts a place or a species.

**Picks** (variant numbers refer to the `image-out/` run of this date):

| File | Pick | Why |
| --- | --- | --- |
| `prismere-orbital-vista` | re-roll 1 | night as briefed, the grazer small at the ridge edge, the sky doing the work |
| `prismere-glasswood-grove` | 1 | the leaves read as lenses, refractions on the ground |
| `prismere-flowering-glasswood` | 2 | fewer foragers, the blossoms carry it |
| `prismere-luminous-towers` | 1 | lit from the base, roots visible, inhabited without a jellyfish |
| `prismere-glass-spires` | 2 | truly unlit; variant 1 had a glowing river |
| `prismere-driftjellies` | 1 | the ecosystem, not one animal |
| `prismere-umbral-ray` | 2 | dimmer, the unpleasant beat the brief asked for |
| `prismere-twilight-lattice` | 2 | geometry, not aurora; variant 1 leaned on a Milky Way |
| ~~`prismeri-first-wings`~~ | 1 | **rejected by Dermot, same day: still too humanoid.** Parked in `reference-art/` |
| ~~`prismeri-full-wings`~~ | re-roll 1 | **rejected, same reason.** Parked |
| ~~`prismeri-lattice-gathering`~~ | 2 | **rejected, same reason.** Parked |

**The three Prismeri, regenerated the same evening to the body derived from Prismere and confirmed by Dermot** (`species-design.md`, Prismeri section; prompts rewritten in place in `images.md` with a revision note; no reference images, the point being to leave the human frame behind):

| File | Pick | Why |
| --- | --- | --- |
| `prismeri-first-wings` | 1 | hanging inverted, wing-hands working a piece of glass, the spire glowing around it — the workshop posture the page describes |
| `prismeri-full-wings` | 1 | in flight with the Lattice's lines visible and the tendrils streaming, figure in the frame's middle band for the hero crop; variant 2 lost the sky to mist |
| `prismeri-lattice-gathering` | 2 | heads level, one hanging and one perched, Lattice above and forest below; variant 1's spire read as a cathedral |

Lettering check passed on all three. **One thing for Dermot's eye:** a level-spined membrane-winged flier with a long head inevitably shares a silhouette with the wyvern of fantasy art; the derivation produced the shape from Prismere's physics rather than from the trope, and the facet band, the free fingers and the hanging posture are what keep it its own — but it is the trope-adjacent result the body plan implies, and worth a look at full size. **Dermot, same evening: "New prismere images are fine. Their resemblance to dragons is coincidental, I think." Approved and merged.**
| `prismere-root-mat-network` | 1 | the network is the subject, towers secondary |
| `agent-barsik` | re-roll 1 | no screens; variant 2 had a telephone |

**Three prompts revised on the day, recorded in place in `images.md`:**
`prismeri-full-wings` (one variant came back as a labelled PRE/POST
comparison sheet, the other as two figures — now insists on a single
individual and bans the diagram layout); `agent-barsik` (asked for
"terminals" and got wall-to-wall monitors — the scene changed, per the
lettering-ban-cannot-beat-the-scene rule); and `prismere-orbital-vista` was
briefly given a no-animals negative in error, then restored, because the
prompt asks for the grazer as a scale figure and the re-roll honoured it.

**Lettering check:** passed on every filed image. The old motif check
passed too: no jellyfish-and-spire repeat across the eight locations.

## 2026-09-04 — the Chthonari crew, Season 10's first portraits

- **Date:** 4 September 2026, the evening the five character pages were
  approved; generated at Dermot's direction (*"generate the four Chthonari
  portraits"*), picks approved by him the same evening (*"All picks
  approved"*). Iklix Varn's prompt stays held; the card stands.
- **Tool:** `image-prompts.js --generate --only <key>`, Gemini, two variants
  each, 16:9, filed with `import-image.ps1 -MaxEdge 1200` (1200×670) over the
  PORTRAIT PENDING cards, which clears the marker.
- **Prompts of record:** `images.md`, *Orbital Five-O, Season 10 (5)*, with
  the two revisions recorded in place.

**Run 1 (eight images).** Tikket and Tsikk came back on the crew's body as the
record describes it — low, beetle-like, six legs of one kind, a featureless
dome — and Kattik and Tekka did not. Both Kattik variants and Tekka 1 drifted
into a crouching humanoid with shoulders and arms; Kattik 1 rested its hands
on a present-day tablet, ports and all; Tekka 2 had the right body and the
right gait on a beam before a planet-filled window nobody asked for, and a
mouth full of teeth, which the tone rule forbids outright. Kept aside as
`image-out/characters-kattik-run1/` and `characters-tekka-run1/`.

**Revisions and run 2 (four images).** Kattik and Tekka re-rolled with
`References: image-out/characters-tsikk/tsikk-1.jpg`, the body pinned to
the reference in words ("no torso, no shoulders, no upright posture, no
humanoid arms"), the slab described as a slab with no device edge, the mouth
negative made blunt, the window taken away. All four came back on the right
body with no mouth. One visible consequence: the reference carried its
setting with it, so Kattik and Tekka now share Tsikk's ring — three
portraits from one deck, read as the crew on its one job rather than a
fault, and said to Dermot before he chose.

**Picks** (variant numbers refer to the run each came from):

| File | Pick | Why |
| --- | --- | --- |
| `tikket` | run 1, variant 2 | close to the bracket, every limb in contact, the deck otherwise bare — what the chapter shows; variant 1 sat in a larger hall |
| `kattik` | run 2, variant 2 | forelegs on the slab, a second crew member on a bracket behind, the ring's lights coming up; variant 1 had the slab beside rather than under the forelegs |
| `tekka` | run 2, variant 1 | mid-stride along the beam, the course-reading gait; variant 2 stood square and static |
| `tsikk` | run 1, variant 1 | centred on the open deck, six legs planted, the walkway lights coming on around the ring as if the structure had noticed — the strongest of the twelve and the reference for the re-roll |

**Lettering check:** passed on all four; nothing readable anywhere. **Tone
check:** no mouth on any filed image; small dome heads with at most a faint
seam; nothing to flinch at, on Thrum's precedent. **Body check:** six legs
of one kind on all four, no torso, no arms, no upright posture.

**Alt text** on each page describes the picked image, not the prompt.

### iklix-varn.jpg — 4 Sep 2026, the held prompt released

- **Date:** 4 September 2026, later the same evening, when Dermot said what
  Varn looks like — *"lean build, dark hair, quiet bearing"* — and the prompt
  went out with those three things in it and nothing else about the face
  decided. Two variants, Gemini, 16:9, filed with `import-image.ps1 -MaxEdge
  1200`.
- **The pair, and the choice.** Both lean, dark-haired, quiet, both reading
  the longer document standing up in the compartment with the six units
  and the hatch. They differed in the one thing the record had never fixed:
  the face, and with it the person — variant 1 wider, the whole compartment
  in frame, the Deputy reading as young and contained; variant 2 closer, a
  different face. Put to him as a pair with the lean stated for variant 1.
  **His word was "Approved"** — read as approving the lean, variant 1, and
  the reading is flagged in the intake in case the word was meant for the
  other.
- **Pick:** variant 1. **Lettering check:** the print on the pages and the
  small labels on the units are illegible; nothing readable. **Tone:** no
  glamour, no pose to camera; the tab at the collar is plain.
- **What this fixes.** The picked image is now the record's only account of
  Varn's face; the page carries his three words and the alt text describes
  the picture, and neither says more than that.
- **Re-rolled the same evening on his reservation** — *"Variant 1 approved
  with one reservation. Does the technology look too old fashioned?"* Yes:
  the six units were twentieth-century test gear, meters, toggles and tube
  screens in a rack, and the compartment a mid-century submarine; Barsik's
  filing cabinets again. The approved image was copied to
  `story-bible/reference-art/iklix-varn-approved-2026-09-04.jpg` and used
  as `References:` so the person would hold, and the prompt revised to
  sealed matte housings with a single indicator each, plain composite
  panels, a flush hatch handle, nothing that would look at home in a
  submarine. Both re-rolls kept the face and the stance exactly. **Pick:
  re-roll 1** — indicator lights, flush handle, grating underfoot, the
  compartment lit as before; re-roll 2 was plainer and a shade closer to a
  locker room. Filed on his "Agreed", read as covering the lean stated for
  the re-roll as well as the insignia leans of the same message; flagged in
  the intake. Run 1 kept as `image-out/characters-iklix-varn-run1/` (both
  variants and the 1200-px filed copy), run 2 as `characters-iklix-varn-run2/`.
- **Insignia check, same evening.** He asked what a Deputy's rank insignia
  is. Canon fixes a plain-finished, magnetically seated tab keyed to track;
  the bar count and track colours were proposals in `uniforms-and-insignia.md`
  until he agreed to adopt them the same evening, and the portrait's bare
  grey tab was left as it is — what canon specifies, at a scale where three
  bars would be a few pixels. Zoe Smith's portrait carries the same bare tab.

## 2026-09-05 — the two junior detectives, Zhulik, and Tissadelle in the right uniform

Four runs on one evening, at Dermot's ask (*image generation runs needed for
star-rangers repo*), all picked by him on the stated lean (*Approved*, once
for the first three pairs and once for the re-rolled Priya and Zhulik).

- **Tool:** `image-prompts.js --generate --only <key>`, Gemini
  (`gemini-3.1-flash-image`), two variants a run, 16:9, 2K; the three
  portraits filed with `image-file.ps1` (`import-image.ps1 -MaxEdge 1200`,
  1200×670), Zhulik's over his PORTRAIT PENDING card. Tissadelle's run was a
  one-off script with the same Interactions call, because her file already
  exists and the pipeline reads existence as done.
- **Prompts of record:** `images.md` — *Marisol Achebe — added 2 September
  2026* (unchanged), *Priya Nakamura — added 5 September 2026* and the
  `zhulik.jpg` entry under *Undercover Pets* (both revised in place, below).
  Tissadelle's prompt is not in `images.md`; it is recorded in full at the
  end of this section.

### marisol-achebe.jpg — one run, variant 1

Both variants clean of lettering at zoom (the sack labels carry faint grey
marks that do not resolve into characters at any size). Variant 1: warm room,
locs, the tab on the lapel rather than at the collar, the wall a framed pale
panel. Variant 2: cooler, cropped hair, the tab correctly at the collar, the
wall visibly panelled with seams — the extra negative. Lean 1 for the register
the page asks for; the tab position was said. Filed as `marisol-achebe.jpg`.

### priya-nakamura.jpg — three runs, filed from run 3 variant 1

Run 1: variant 1 carried LOST & FOUND engraved on the bin and printed slips,
rejected; variant 2 clean. Run 2 (a replacement for the rejected one):
variant 1 wore a wristwatch and a ring, rejected; variant 2 clean. Dermot's
note on the two clean ones: **needs a more futuristic background** — the steel
lockers and the riveted bin were the present-day tell. The setting sentences
were rewritten in `images.md` for a room built eight centuries on, and run 1
variant 2 was passed as `References:`
(`story-bible/reference-art/priya-nakamura-lean-2026-09-05.jpg`) so she
held. Run 3: both clean; variant 1 filed (curved panels, a sealed archive unit
with nothing on it; variant 2 had a low cabinet run with faint tags). Earlier
runs kept aside as `image-out/characters-priya-nakamura/round1/` and
`round2/`.

### zhulik.jpg — two runs, filed from run 2 variant 2

Run 1: both on the brief and clean; the old prompt's *run of pipework* bought
a boiler room. Same note from Dermot. Pipework struck from the prompt in
`images.md`, the bulkhead rewritten as seamless composite with one recessed
light line, run 1 variant 1 passed as `References:`
(`story-bible/reference-art/zhulik-lean-2026-09-05.jpg`). Run 2: variant 1
the cleaner room but the stamp became a grey tile; variant 2 keeps the wooden
stamp and a plain two-door cabinet, filed. Run 1 kept as
`image-out/characters-zhulik/round1/`.

### tissadelle-shepherd — uniform-correct regeneration, filed as reference art

Queued in `prompt-sheet.md` 2.7 on 3 September after three costume-uniform
frames failed the rank-insignia entry. Run 1 used the prompt-sheet text with
the published portrait as a reference: the face held, but the reference
carried its idiom — a chevron badge and a triangle patch in one variant, a
winged crest with lettering, navy coveralls and an ISS-style rack room in the
other. Kept aside as `image-out/characters-tissadelle-shepherd-uniform/round1/`.
Run 2 tightened the prompt (below): the tab described as three engraved
concentric circles, every badge idiom named and negated, the compartment
described as sealed plain housings, no other people. Variant 1 came back with
three rings in a row on a rectangular tab — the *one mark repeated for three*
failure — and variant 2 with the concentric rings on a square tab, a plain
diamond patch, a ribbon row and a stand collar; the housing she works at has a
small dark window that could be read as a screen. **Variant 2 filed as
`story-bible/reference-art/tissadelle-shepherd-uniform-2026-09-05.jpg`.**
Whether it replaces the published portrait is Dermot's call and was not made
tonight; the published file is untouched.

Prompt of record for run 2, with `src/images/characters/tissadelle-shepherd.jpg`
sent as the one reference image:

> Documentary photograph, available light, candid, one person only in frame. A woman in her early thirties with long red hair tied back for work and blue-green eyes, the same face as the reference image, standing in a plain working compartment of a space habitat eight centuries from now, mid-task with her attention on a sealed instrument housing off to one side of the frame, not posing. Upright, self-possessed bearing; alert and attentive expression rather than blank or steely. She wears the standard field uniform of an interstellar rescue and survey service: a modular matte shell in dark slate-grey over a close-fitting thermal liner, sealed seams, a plain stand collar, utilitarian and unornamented, sized to her rather than tailored. The chest carries exactly three things and nothing else: one small square hard-edged metal tab, plain matte finish, seated proud of the chest, engraved only with three thin concentric circles like a target with no centre dot; beside it one small plain fabric patch that is a single flat geometric shape with nothing drawn on it; and below them a single short row of small dull-coloured service ribbons. Absolutely no chevrons, no stripes, no wings, no stars, no eagles, no arrowheads, no crests, no emblems, no badges of any other kind, no name tape, no name badge, no printed words, no letters and no numerals anywhere on her clothing. No braid, no epaulettes, no belts, no buckles, no piping, no cape, no armour plates, no flags, no zip pulls on show. Nothing on the uniform glows. The compartment is quiet and clean: flat matte wall panels, sealed plain housings with flat fronts and honest seams, at most one small unlit indicator on any of them; soft diffuse light from concealed recessed sources, no lamp, tube or light fitting visible. Unglamorous lighting; visible skin texture; no beauty retouching, no styled hair, no makeup emphasis. Nothing in the image invites the viewer; she is at work and has been for hours. Muted realistic palette. This is not a present-day space station: no screens, monitors, displays, tablets, laptops, keyboards, cables, hoses, racks, dials, gauges, meters, knobs, toggle switches, tube screens or filing cabinets anywhere in frame, and no other people. No readable text, numerals, signage, insignia lettering or written characters of any script anywhere in frame. Use the reference image only for her face, hair colour and eye colour; do not copy its clothing, insignia, setting or lighting. Negative: chevron, stripes, wings, star, eagle, crest, emblem, arrowhead, badge, glowing insignia, name tape, belt, buckle, piping, cape, armour plate, epaulette, braid, tailored jacket, coveralls, boiler suit, zip, skirt, second person, gaze to camera, beauty lighting, screen, monitor, cable, text, lettering, watermark. 16:9 landscape.

### tissadelle — Season 1 cadet frame, and the gallery (later the same evening)

Dermot's direction on being told the uniform frame was reference art only:
*Tissadelle can have two or more portraits for each season* — and, asked for
a shape, *Tissadelle is one of the principal major characters*. So not a
swap: an addition. `story-bible/intake-2026-09-05.md`, last section.

- **Tool:** the same one-off script as the run above, the published portrait
  as the one reference, two variants a run, 16:9, 2K.
- **Prompt of record:** the run-2 prompt above with the prompt-sheet 2.7
  *Season 1 variant* applied (single plain horizontal bar with a narrow
  slate-blue insert; early twenties; *her first posting*), then for run 2 the
  ribbon row removed (*nothing below them, no ribbons and no decorations of
  any kind, because she is newly qualified*) and *a plain wall beside her with
  nothing mounted on it* added. Both variants of both runs kept in
  `image-out/characters-tissadelle-shepherd-uniform/round3-s1/` (run 1) and
  the folder root (run 2), prompts beside them.

**Run 1:** variant 1 a double bar, labelled panels and a screen-like window;
variant 2 the single bar right, but a ribbon row a cadet would not have and
an indicator panel. **Run 2:** variant 1 a winged chevron patch, rejected;
**variant 2 clean** — single bar with the insert, plain diamond patch, stand
collar, nothing else on the chest, a sealed housing beside her.

**Filed** with `import-image.ps1 -MaxEdge 1200` into
`src/images/characters/tissadelle/` as `season-1-cadet.jpg` (run 2 variant 2)
and `season-5-line-captain.jpg` (the uniform run's round 2 variant 2, the same
image as the reference-art copy), and listed under `gallery:` on her page
with season captions. `character.njk` gained an optional `caption` per
gallery item, rendered as a figure at 16:9; uncaptioned galleries (Aldera)
render exactly as before. The header portrait is unchanged.

**Header swap, ruled the same evening** (*1 Yes*): `season-5-line-captain.jpg`
became `src/images/characters/tissadelle-shepherd.jpg` and left the gallery;
the coverall portrait it replaced is kept as
`story-bible/reference-art/tissadelle-shepherd-header-retired-2026-09-05.jpg`,
still the face reference for future runs alongside the new header.

## 2026-09-07 — Teddy, four rounds to a body of his own

### teddy.jpg — filed from round 4 variant 2

The first individual Pandoid (`src/characters/teddy.md`), whose prompt was
queued 6 September and held on the face. Four one-line directions the next
morning, all in `story-bible/intake-2026-09-07.md`: *Teddy is curious and
bright* (rounds 1 and 2 — every variant a great ape, the second round with
ape anatomy negated by name and no better), *Should look more like a Panda
and less like a gorilla* (round 3 — panda-built and grey, but on all fours
where the record says upright), *more alien* (round 4 — upright, panda in
silhouette, alien in face and coat), and *second image is fine*. Every
round's variants are kept in `image-out/characters-teddy/round<n>/`.

- **Tool:** `scripts/image-prompts.js --generate --only teddy --variations 2`,
  gemini-3.1-flash-image, 2K, no reference image; filed with
  `image-file.ps1 -Only "characters-teddy" -Pick "characters-teddy=2"`,
  2752×1536 → 1200×670.
- **Aspect:** 16:9 (the character-portrait convention).
- **What it shows, for the alt text:** A stocky grey alien with a panda-like build standing upright in a cavern lit by teal and amber fungus, large dark eyes ringed in darker grey, looking toward a small plain cylindrical instrument standing on pale silt where a line of bootprints ends.
- **Prompt of record** (round 4, the final form of the queued prompt):

> Cinematic wide shot inside a deep natural cavern of an alien world, lit only by bioluminescent fungi coating the rock in soft amber and blue-green, no other light source. In the foreground, on a floor of pale mineral silt, a small upright cylindrical survey instrument with a smooth matte casing stands on its base at the exact point where a line of human bootprints in the silt ends; the prints come toward the camera from the left and stop. A few steps beyond the instrument, at the edge of the light and partly in shadow, stands a large alien being built on the lines of a giant panda but unmistakably not an Earth animal: a stocky, rounded, heavy-bottomed body rising upright on two short hind legs, thick limbs of equal length, a big round head with no external ears, a broad flat face with a very short muzzle and no nose leather, a wide lipless mouth, and very large dark eyes set wide for seeing in low light, ringed with darker grey markings; dense thick grey fur that grows in soft overlapping ridges over the head, shoulders and back like a coat of down, reading soft and catching the amber light along its edges; turned three-quarters toward the camera so that its face is visible in the fungus-light, with those large bright attentive eyes holding an expression of open curiosity and quiet intelligence, soft and warm and neither foolish nor weak; one heavy forelimb still lowered toward the instrument as if it has just been set down. The being is clearly not a human in a costume and clearly not an ape: no gorilla, no yeti, no sasquatch, no primate brow ridge, no long arms, no knuckle-walking. It is panda-like in silhouette and build but grey all over, never black and white, and plainly an alien: no Earth panda, no Earth bear, no ears, no wet nose. The being is smaller than the passage it stands in would suggest an adult of its kind to be, and rounder. Humid air, a faint sheen of moisture on the stone, a narrow squeeze in the rock visible behind the being where the passage closes down. Quiet, watchful, unsettling and calm; nothing threatening is happening. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame, including on the instrument; no screens, lamps, torches, electric lights or light fittings; no people, no other animals; no weapons; no ape anatomy; no black-and-white colouring; no glamour lighting or studio backdrop. 16:9 landscape.

**What the four rounds taught,** recorded once here and in the runbook:
*upright, furred, heavy-shouldered, no snout* is the generator's gorilla,
and negating an animal by name does not move it; only a positive build did.
When canon gives no body, ask for one positive shape before spending rounds
on negatives.

**Standing rule for every Pandoid image, from Dermot, 8 September 2026**
(`intake-2026-09-08.md`, third section): *should not look like or ever be
confused with the Ewoks of Star Wars*. Before filing any Pandoid output, check
it against that silhouette — small, round, furred, hooded, a forest creature
that could be a mascot — and reject on sight. The lesson above is how to stay
clear of it: do not negate *Ewok* or *teddy bear* by name, state the positive
build the record gives — adult mass, grey, upright, heavy through the
shoulder, an alien face with no snout and no button features — and keep the
fungus-lit cavern, not a forest. Teddy is the smallest of his people and is
still nobody's toy.

## 2026-09-12 — Bumble, the first character portrait from Dermot's own frames

### bumble.jpg
- **Type:** crop of a real photograph (no generator, no enhancement)
- **Tool:** Pillow 12.3, on a Linux session
- **Date:** 12 September 2026
- **Source:** the portfolio's `src/images/photos/bumblebee-on-giant-scabious.jpg`
  (*Bumblebee on Giant Scabious*, Farmleigh, Dublin, 2024; 1600×1067)
- **Prompt / recipe:** none. Crop rows 100–1000 at full width (1600×900, the
  bee kept at about 41% down and the stem still running out of the bottom),
  resize to 1200×675 with Lanczos, save JPEG quality 85, baseline. Nothing
  else done to the frame.
- **Notes:** the character page is `src/characters/bumble.md`, drafted at
  Dermot's direction *A character called Bumble* (`intake-2026-09-12.md`).
  Under the 3 September ruling a bee is a thing a camera can photograph, so
  the page takes his frame or a card and never a prompt; this is the first
  character page on the site whose portrait is one of his photographs. The
  frame stays in this repository as a copy at site size; the portfolio's file
  and page are untouched.

## 2026-09-27 — Noah at the plant, and the Fliade surface party

Three portraits at Dermot's *Yes please* to the art survey of the same day,
which found nothing pending and offered Noah first and the Fliade pair next.
Briefs in `images.md` § 1 under the same date; all three faces were
undescribed in the record, so every result was a proposal, put to him as
side-by-side pairs. His word on the three picks: *Approved*.

### noah-adeyemi.jpg — filed from run 1 variant 2
- **Type:** generation
- **Tool:** Gemini, `gemini-3.1-flash-image`, via `scripts/image-prompts.js --generate --only noah-adeyemi`
- **Date:** 27 September 2026
- **Prompt / recipe:** the blockquote in `images.md`; 16:9, 2K, two variants, no reference.
- **Notes:** variant 1 set him in a circular tube with a stranger's sleeve at the frame edge; variant 2 read as a ring, doors receding, and was picked. Lettering check: two distant door labels are blurred rectangles, nothing readable; the door behind him is blank. One ceiling light strip shows, against the brief's *no visible fittings*; accepted as a habitat's day cycle. Filed with `import-image.ps1 -MaxEdge 1200`. Run kept as `image-out/characters-noah-adeyemi/`.

### aravena.jpg — filed from run 2 variant 2
- **Type:** generation
- **Tool:** Gemini, `gemini-3.1-flash-image`, same route
- **Date:** 27 September 2026
- **Source:** run 1 variant 2 held as `References:` (`story-bible/reference-art/aravena-candidate-2026-09-27.jpg`) so the person carried across the re-roll.
- **Prompt / recipe:** the blockquote in `images.md`, revised after run 1; 16:9, 2K, two variants each run.
- **Notes:** run 1 failed on the tab both ways — variant 1 a stitched sleeve badge, variant 2 an oxblood collar tab, the provost track's colour — because the brief said *a single colour insert* and never named it; the Survey track's insert is pale grey-green (canon since 4 September). The re-roll named the colour and the person held exactly; variant 2 kept the lamp low with its beam on the floor and was picked. Nothing readable anywhere. Runs kept as `image-out/characters-aravena-run1/` and `characters-aravena/`.

### nakagawa.jpg — filed from run 1 variant 1
- **Type:** generation
- **Tool:** Gemini, `gemini-3.1-flash-image`, same route
- **Date:** 27 September 2026
- **Prompt / recipe:** the blockquote in `images.md`; 16:9, 2K, two variants, no reference. The colour was added to the brief after Aravena's run 1; this frame already carried a muted green insert and was not re-rolled.
- **Notes:** variant 2 put a lamp head and its cable in frame, against *lamps out of frame*, and hung the tab as a chevron on the chest; variant 1 kept the tab at the collar, the unit on its base at the edge of frame and the working light out of shot, and was picked. A thin cable runs along the left wall, read as the party's own. Nothing readable anywhere. Run kept as `image-out/characters-nakagawa/`.

**Lesson recorded:** a brief for anyone in Ranger dress names the track colour of the tab insert. *A single colour insert* invites the generator to choose, and it chose the provost's.

### lev.jpg — filed from run 1 variant 2
- **Type:** generation
- **Tool:** Gemini, `gemini-3.1-flash-image`, via `scripts/image-prompts.js --generate --only lev`
- **Date:** 27 September 2026, the same evening as the three above
- **Prompt / recipe:** the blockquote in `images.md` § 1 under the same date; 16:9, 2K, two variants, no reference. Heritage not in the record and not in the prompt.
- **Notes:** both variants held the shut carrier with nothing visible inside, which was the brief's point. Variant 1 carried it sideways under a doorway of onlookers with ceiling light panels showing; variant 2 was the plainer corridor, the boy's eyes on the door of the box, the deck walking away behind him, and was picked (*Approved*). Lettering check: one blank wall panel, nothing readable. Filed with `import-image.ps1 -MaxEdge 1200`. Run kept as `image-out/characters-lev/`.

## 2026-10-25 — Tissadelle's header re-made as the older Line Captain

Run on the desktop from the new `story-bible/images.md` § 9 entry for
`tissadelle-shepherd.jpg`, four variations, `gemini-3.1-flash-image`, 2K, the
re-made Halyx frame the only reference. Dermot noticed that the header
"looks more like her as a cadet": it was the cadet frame's photograph with
the rank tab changed, a cadet's face under a Line Captain's tab.

- `tissadelle-shepherd.jpg` — variation 1 of 4, picked by Dermot: the Halyx
  face, about thirty, hair pulled back loosely, three rings countable on the
  tab with the diamond patch and ribbon row, both hands at an open access
  panel. Flaw accepted with the pick: her eyes go past the panel rather than
  onto it. Variation 2 has her eyes on the work but reads nearer forty;
  variation 3 is flatter; variation 4 carries four rings and fails. Filed
  through `import-image.ps1 -MaxEdge 1200` at finish strength 1. The
  5 September header is retired to
  `story-bible/reference-art/tissadelle-shepherd-header-retired-2026-10-25.jpg`.

## 2026-10-24 — Tissadelle's Season 5 Halyx frame, re-made five years older

Run on the desktop from the revised `story-bible/images.md` § 9 entry, four
variations, `gemini-3.1-flash-image`, 2K, the published header the only
reference (the cadet frame was dropped because it pulled the face young).
Dermot: the filed frame looked the same age as the cadet, and the Line
Captain tab could not be read at gallery size. She is five years older than
in Season 1 (2826 to 2831), and he agreed five years is right.

- `tissadelle/season-5-halyx-corridor.jpg` — variation 4 of 4, picked by
  Dermot (*looks perfect*): the face visibly older and tired, the three rings
  countable on the tab. Her hair is down rather than tied back and a blank
  sleeve patch appears; both were accepted with the pick. Variations 1 to 3
  still read young with a tab too small to count. Filed through
  `import-image.ps1 -MaxEdge 1200` at finish strength 1; run kept as
  `image-out/characters-tissadelle-season-5-halyx-corridor/`.

## 2026-10-08 — Tissadelle's second Season 1 and Season 5 frames (issue #1013)

Run on the desktop from `story-bible/images.md` § 9, two variations each,
`gemini-3.1-flash-image`, 2K, the published header and the cadet frame sent as
references for the face. Filed through `import-image.ps1 -MaxEdge 1200` with
the photographic finish at strength 1:

- `tissadelle/season-1-first-posting.jpg` — variation 1 of 2: the dock behind
  her reads as a dock, kit at her feet, two marks and nothing below; variation 2
  stood her in a corridor.
- `tissadelle/season-5-halyx-corridor.jpg` — variation 1 of 2: the hand flat
  on the seam and the face turned to listen, rings and ribbon row on the tab;
  variation 2 crouched lower with the eyes nearly closed.

Both picks are proposals put to Dermot on the sheet; the pull request waits
on his word. Prompts of record are the § 9 entries as written on 7 October.

## 2026-10-08 — Codex covers for the two Slipwave videocast entries (issue #1016)

Dermot's choice, verbatim *"Yes option 1"*, among three shapes: the plain
codex card as the tool draws it today, no card, or the Ballad's gold-on-
starfield look once its underlay (`art/slipwave-common-room.jpg`, not in the
repository) is found or remade. Drawn by `make-codex-cover.ps1` with the
flags the issue set out, no underlay, default motif:

```powershell
.\scripts\make-codex-cover.ps1 -TitleLines "ODONATA","RAISE YOUR BANNERS" -Category "CULTURAL RECORD" -Institution "Eden Space Habitat Collections" -Out src\images\codex\odonata-raise-your-banners.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "BORROW THE ANGLE" -Category "CULTURAL RECORD" -Institution "Eden Space Habitat Collections" -Out src\images\codex\borrow-the-angle.jpg
```

They match the codex's plain cards rather than the Ballad cover; the alts
say so. Remaking them in the Ballad look is open until the underlay exists.

**Remade in the set's look, 11 October 2026** (Dermot, on the codex index: *"There should be existing covers for the codex songs"*, then *"design or choose fonts as needed"*). The underlay was never found, so both covers were built from `star-rangers-anthem.jpg` itself: its starfield, trailing star, *Cultural Record* header and gold rule kept, the text block under the rule cleared by a diffusion fill that follows the vignette, and the new lines set in Georgia (title, gold, tracked; subtitles) and Consolas (the spaced bottom line), the nearest faces on this machine to the set's DejaVu Serif and Sans Mono. Lines: the title; *Slipwave · lineup not stated*; *Eden Space Habitat Collections*; *RECOVERED RECORDING · VIDEOCAST*. Recipe kept at `story-bible/reference-art/slipwave_cover.py`.

## 2026-10-11 — Cnoc na mBeach, a composite on Dermot's own plate

### cnoc-na-mbeach.jpg — filed from run 1 variation 1
- **Type:** composite: Dermot's own photograph as the plate, one region re-rendered
- **Plate:** *Martello Through St Begnet's* (`martello-through-st-begnets.jpg` on dermotcochran.com, Dalkey Island), chosen by him from three frames shown beside the emblem card (*"Yes please"* to the recommendation, 11 October 2026)
- **Tool:** Gemini, `gemini-3.1-flash-image`, via `scripts/image-prompts.js --generate --only cnoc-na-mbeach`, the plate sent as the one reference; finished by `photo-finish.py` at strength 1, 1600 px
- **Date:** 11 October 2026
- **Prompt / recipe:** the blockquote in `images.md` § 5e: keep the photograph in every respect except the view through the window, where the Martello tower becomes a row of plain seamless hives on the green, the hint of the century the 7 October rule asks for
- **Notes:** variation 1 keeps the wall untouched with the hives small and soft as the tower was; variation 2 sharper and larger. Replaces the emblem card, which stays in git history.

## 2026-10-09 — Threshold Station, a composite on Dermot's own plate

### threshold-station.jpg — filed from run 1 variation 1
- **Type:** composite: Dermot's own photograph as the plate, one region re-rendered
- **Plate:** *The Great South Wall* (`great-south-wall-light-track.jpg` on dermotcochran.com, Great South Wall, March 2026), chosen by him from four coastal frames shown side by side (*"Option 1 for the coastal frame is fine"*), with his ruling that a composite is fine and the place need not be real
- **Tool:** Gemini, `gemini-3.1-flash-image`, via `scripts/image-prompts.js --generate --only threshold-station`, the plate sent as the one reference; filed through `import-image.ps1` at finish strength 1
- **Date:** 9 October 2026
- **Prompt / recipe:** the blockquote in `images.md` § 5d: keep the photograph in every respect except the far end of the wall, where the red lighthouse and the ferry become the shoreward edge of a small coastal station in silhouette, a low line of docks with a few working lights, no tower, no glazing, no antenna, no text; 16:9, 2K, two variations
- **Notes:** variation 1 is the plate untouched with one low dark line and three lights at the far end; Dermot: *"That composite looks great."* Variation 2 ran a shoreline of sheds out of the right of the frame; his reading, *"it extends out of the frame implying a much larger structure"*, which the record does not give. Alt text written from the file. The lens flare and the headland on the horizon are the photograph's own.

## 2026-10-10 — Seven portraits for the viewpoints that had none (section 10 of images.md)

Run on the desktop at Dermot's *"Run the seven missing portraits"*, two
variations each, `gemini-3.1-flash-image`, 2K, no references, filed through
`import-image.ps1 -MaxEdge 1200` with the photographic finish at strength 1.
Prompts of record are the section 10 entries as written the same day. Alt
text written from the files.

- `ysolde-pitch.jpg` — variation 2 of 2: profile at the porthole, hand on the folder; 1 faced nearer the viewer with a brass lamp.
- `beatrix-kilbride.jpg` — variation 2 of 2: hand on the hatch frame, looking along the ring; 1 carried a keypad panel at the frame's edge, a period device.
- `wren-okafor.jpg` — variation 1 of 2: hand on the instrument case as briefed; 2 had the case on the wall and the hatch dark.
- `adaeze-okafor.jpg` — variation 2 of 2: attention off-frame, the rail line through the window; 1 looked straight at the viewer.
- `rutger-voss.jpg` — variation 2 of 2: collar tabs only, a bound log, ink and a stamp; 1 wore two-bar epaulettes and held a modern ballpoint.
- `petra-solano.jpg` — variation 1 of 2: attentive, other delegates behind, hands in the lap with nothing in them; 2 was the same frame, sadder.
- `yusuf-adair.jpg` — variation 2 of 2: one collar tab with a blue inset, daylight, the instrument under its cloth; 1 wore a chest badge of four shapes, which the Ranger block forbids.

The founding six are drawn in an earlier century's dress and rooms; Voss's
service dress and the Mars offices match Drey's frame. Not resolved by these
frames and not claimed: heritage, exact age, and anything after each
person's last chapter.

## 2026-10-11 — Codex card legibility, and the archecluster emblem card

No generator prompts: deterministic cards from the two `.ps1` tools, at
Dermot's *"Yes agreed"* of 11 October 2026.

**Codex cards, redrawn for the index.** On the codex index a card renders
about 300 px wide, and the small lines of `make-codex-cover.ps1`'s template
(category, stamp, subtitle, institution, author) had gone to grey threads.
The template now sets them in one pairing used on every card: Georgia for
the title, subtitle and institution, and Bahnschrift SemiBold (Windows'
DIN) for the tracked capitals of the category, stamp and author lines,
which were Consolas. The small lines are roughly twice their old size,
lighter (7:1 or better against the gradient behind them, measured), and
tracked about half as wide; long lines shrink to fit; the title tops out at
104 px instead of 112 and the lower block rises above the old divider only
as far as its content needs. Gradient, motifs, rule and serif title are
unchanged. Each card was checked at 300 px before the set was redrawn.

Eight cards were redrawn, every plain codex card the script (or one of its
two ports) had drawn, with the text each already carried:

```powershell
.\scripts\make-codex-cover.ps1 -TitleLines "THE COSMIC LIMITATION","ON EVIL" -Category "DOCTRINAL RECORD" -Subtitle "The One Confirmed Exception" -Institution "Survey Archive - Doctrinal Division" -Author "THEORIST EMRYS KADE" -Stamp "CONTESTED" -Motif dissolution -Out src\images\codex\cosmic-limitation-on-evil.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE COURTESY","THAT WAS WITHDRAWN" -Category "OFFICIAL DOCUMENTS" -Subtitle "Minuted reply of the Keeper of the Rolls" -Institution "Registry of Rolls and Holdings, Tír na nÓg" -Author "Aoibheann Ní Mheara" -Stamp "FILED AS RECEIVED" -Motif rules -Out src\images\codex\the-courtesy-that-was-withdrawn.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "NEITHER AUTHOR","NOR WARDEN" -Category "DOCTRINAL RECORD" -Subtitle "Working paper on the design tiers and suffering" -Institution "Survey Archive - Doctrinal Division" -Author "Theorist Emrys Kade" -Stamp "FILED AS DOCTRINE" -Motif rules -Out src\images\codex\neither-author-nor-warden.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE TWO SONGS","OF THE LOUD PEOPLE" -Category "XENOLOGY RECORD" -Subtitle "A Keeper's Account of Humanity" -Institution "Rendered from Chorus-Keeping · Archive Translation Desk" -Author "KEEPER VHEN OF THAVREN" -Stamp "RENDERED" -Motif dissolution -Out src\images\codex\the-two-songs-of-the-loud-people.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "NOTHING CROSSED" -Category "WORKING PAPERS" -Subtitle "Five shadows the desk cannot close" -Institution "Survey Corps - Gravimetry Desk, Threshold Station" -Author "SURVEYOR MAREN HALLORAN" -Stamp "UNSETTLED" -Motif dissolution -Out src\images\codex\nothing-crossed.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "XENOLINGUISTICS","HANDBOOK" -Category "INSTITUTIONAL DOCTRINE" -Subtitle "The Ten Failures" -Institution "Star Rangers Academy - Xenolinguistics Branch" -Author "THE BRANCH SCHOOL, TEACHING STAFF" -Stamp "FIRST-YEAR READER" -Motif rules -Out src\images\codex\xenolinguistics-handbook-failure-modes.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "TWO SAYINGS,","KEPT TOGETHER" -Category "DEVOTIONAL RECORD" -Subtitle "A promise, and the confession that earns it" -Institution "Fellowship of Light - Comparative File" -Author "UNATTRIBUTED" -Stamp "RECEIVED" -Motif rules -Out src\images\codex\two-sayings-kept-together.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE READING BEFORE","A FIRST VIGIL" -Category "DOCTRINAL RECORD" -Subtitle "Novice Instruction, Read Aloud" -Institution "Fellowship of Light - Contemplative Chapters" -Author "TRADITIONAL" -Stamp "DEVOTIONAL" -Motif rules -Out src\images\codex\the-reading-before-a-first-vigil.jpg
```

The first four flags are of record (the script's header, `prompt-sheet.md`
2.5 and 2.6, and the 31 August section above). The last four were never
written down and were read back from the cards themselves: *Nothing
Crossed*, the *Xenolinguistics Handbook*, *Two Sayings, Kept Together* and
*The Reading Before a First Vigil*. Not redrawn: the five Slipwave covers,
which have their own gold starfield look; Asteria's card, whose header is
in-world art under the lettering; and the cards drawn before the script
existed, whose palettes and motifs it cannot reproduce. Text is unchanged
on all eight, so no alt changed. `scripts/make-cards.js`, the Node port,
still draws the old layout.

**`lore/archecluster.jpg`, an emblem card.** It replaces a CGI archive hall
the photorealism audit flagged, at Dermot's choice: the page says an
archecluster *looks like nothing at all* from inside.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\archecluster.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA'
```

Device **rings**, concentric, for nested structure. Title and category
are the page's own (*Inside an Archecluster*, *Cosmology*); no epithet or
qualifier, since none is authored.

## 2026-10-11 — The five July codex cards, redrawn in the new template

No generator prompts: deterministic cards from `make-codex-cover.ps1`, at
Dermot's *"Yes please"* of 11 October 2026. These five predate the script
(the section above left them out as *drawn before the script existed*),
but they were already in its layout and palette, ruled lines and an
OFFICIAL stamp, so the script reproduces them with the motif they carry,
**rules**, and only the type changes. The text was read back from each card
at full size before redrawing, and a sample (*Redline Protocol*) was checked
at 300 px first.

```powershell
.\scripts\make-codex-cover.ps1 -TitleLines "EXPLORATION","BUDGET DOCTRINE" -Category "INSTITUTIONAL DOCTRINE" -Subtitle "Entropy, Variability, Risk" -Institution "Dr. Senna Okoye" -Author "AI GOVERNANCE COMMISSION · DOCTRINE OFFICE" -Stamp "OFFICIAL" -Motif rules -Out src\images\codex\exploration-budget-doctrine.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "INCIDENT REPORT","001" -Category "SURVEY RECORDS" -Subtitle "Dock Seven Chronometer Discrepancy" -Institution "Sub-officer Pren Halvard" -Author "SURVEY CORPS · THRESHOLD STATION" -Stamp "OFFICIAL" -Motif rules -Out src\images\codex\incident-report-001.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "REDLINE PROTOCOL" -Category "OFFICIAL DOCUMENTS" -Subtitle "Variability Governance" -Institution "AI Governance Commission - Doctrine Office" -Author "DR. KWAME REYES-OSEI" -Stamp "OFFICIAL" -Motif rules -Out src\images\codex\redline-protocol.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "BOUNDARY","MONITORING","PROTOCOL" -Category "OFFICIAL DOCUMENTS" -Subtitle "Threshold-Class Stations" -Institution "Chief Surveyor Wren Ansell" -Author "SURVEY CORPS · STAR RANGERS" -Stamp "OFFICIAL" -Motif rules -Out src\images\codex\survey-corps-protocol.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "SURVEY NOTE:","TÍR NA NÓG" -Category "SURVEY RECORDS" -Subtitle "On the Origins of Compatibility" -Institution "Field Xenobiologist R. Kestrel-Aonghas" -Author "SURVEY CORPS XENOBIOLOGY OFFICE" -Stamp "OFFICIAL" -Motif rules -Out src\images\codex\tir-na-nog-compatibility-survey-note.jpg
```

The script's two lower lines are a serif line (`-Institution`) and a
tracked-capitals line (`-Author`). Four of the five July cards put the
author's name in the serif line and the institution in capitals below it,
the reverse of *Redline Protocol*; each card keeps its own order, so the
flags carry the name or the institution as that card set it. Run from
PowerShell 5.1, the `·`, `Í` and `Ó` are safest passed as `[char]0x00B7`,
`[char]0x00CD` and `[char]0x00D3`, since a BOM-less script file is read as
ANSI. Text is unchanged on all five, and the alt text (ruled lines, an
OFFICIAL stamp, dark navy) still describes them, so no alt changed.

**`scripts/make-cards.js` now follows the redesign.** The Node port draws
the new layout: the same sizes, colours, tracking, shrink-to-fit floors,
stamp placement and measured lower block. It names Georgia and Bahnschrift
SemiBold first and falls back to DejaVu Serif or Liberation Serif and
DejaVu Sans Condensed or Liberation Sans Narrow where they are missing, and
it estimates widths rather than measuring them, so a line can shrink a step
differently from the `.ps1`. A card that must match exactly still comes
from the `.ps1`. Its layout is pinned by `test/make-cards.test.js`.

## 2026-10-12 — Century audit concept cards

The century audit of 11 October (`images.md`, *Century audit*) sends four concept images to emblem cards under the rule that a concept is carded, not pictured: `ai-safety-kernel`, `environmental-technology-design`, `seed-mind-lifecycle` and `ai-usage-credits`. Each is drawn by `scripts/make-emblem-card.ps1` with the page's own title and category and no epithet or qualifier, since none is authored, at finish 0.

- **`lore/ai-safety-kernel.jpg`** (century batch 6, 12 October 2026), replacing a stock photograph of a circuit board. Device **shield**, for safety and certification.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\ai-safety-kernel.md -Device shield -Tint '#16202A' -Accent '#A9C4C9'
```

- **`lore/environmental-technology-design.jpg`** (century batch 7, 12 October 2026), replacing a stock graphic of circuit traces. Device **rings**; **triad** was tried first and read as a wireless-signal icon. The title is long enough that the card breaks it after its colon (the script's new behaviour, the same day).

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\environmental-technology-design.md -Device rings -Tint '#18221C' -Accent '#A8C8B0'
```

- **`lore/seed-mind-lifecycle.jpg`** (century batch 8, 12 October 2026), replacing a stock graphic of a data tunnel. Device **sundial**, for a lifecycle told in phases.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\seed-mind-lifecycle.md -Device sundial -Tint '#1A1A2A' -Accent '#B9B4D8'
```

- **`lore/ai-usage-credits.jpg`** (century batch 9, 12 October 2026), replacing a stock graphic of circuit traces. Device **rings**, for a system of allocation; the title breaks after its colon.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\ai-usage-credits.md -Device rings -Tint '#221C14' -Accent '#D2BC8E'
```

With this card the four concept images the century audit sent to cards are all carded.

- **`lore/cerebraun.jpg`** (century audit follow-up, 12 October 2026), replacing a CGI hall with a robed humanoid figure, which gave the people a body the page refuses. Device **sphere**; drawn first with **figure**, the species device, and redrawn the same day at Dermot's word, because its head-and-shoulders icon asserted a person-shaped body, which is what the portrait was held to avoid. A card until the body has a section in `species-design.md`; every generated attempt (four, on 12 October) drew an Earth octopus or squid.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\cerebraun.md -Device sphere -Tint '#1E1A2A' -Accent '#C2A9C8'
```

## 2026-10-13 — Mira of Brine, a portrait prompt from the Pelagene page (issue #1129)

Step 1 of issue #1129: the prompt, written on Fable under the 11 October
model split. Nothing generated and nothing filed; the emblem card at
`src/images/characters/mira-of-brine.jpg` and its alt stay until a frame is
filed from the desktop.

### mira-of-brine.jpg — prompt written 13 October 2026, NOT YET GENERATED
- **Type:** generation, replacing a designed emblem card whose silhouette is humanoid where `src/lore/pelagene-littoral.md` gives a radially symmetrical body
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only mira-of-brine`
- **Date:** prompt 2026-10-13; generation pending
- **Source:** `src/lore/pelagene-littoral.md` (the body, the senses, the never-had-fire chemistry), `src/characters/mira-of-brine.md` (the humid high-pressure section, condensation on cold panels, coolant turbulence), `src/lore/rank-insignia-and-uniform.md` (Pelagene surveyors like Mira wear the modular shell)
- **Prompt / recipe:** of record in `images.md` § 12, *Missing portraits — Mira of Brine, from the Pelagene page*, the one shape `scripts/image-prompts.js` parses; not duplicated here. Opens as a documentary photograph taken inside the world by a 29th-century camera; the body from its page (vertical axis, no front, no head or eyes, folded wet integument, cirri at simultaneous work, a boneless body settled in air); the Rangers' shell as a Pelagene wears it with one plain seated tab; render negatives, and the Earth animals and the card's humanoid refused by name.
- **Notes:** 16:9 landscape, filed through `import-image.ps1 -MaxEdge 1200` at finish strength 1. The card at the target path makes the entry read as *done* to `--list`; `--only` generates regardless. Triage each variation for the Earth animal before its century: a starfish, a jellyfish, an octopus or a humanoid fails whatever else it gets right. Readings taken for the frame, Fable's under *Who approves whom* and his to overrule, none written to a page: the bulk of a crouched adult human; an opaque mottled grey-green; no eyes; the folds running up and down; the shell as a few fitted sections between the folds; the tab plain and colourless on the Veyr precedent (recorded in `species-design.md`, *The uniform equivalent*). The hydration cycles are kept out of frame on the page's own warning that they read as frailty. Alt text to be written from the filed frame.

## 2026-10-13 — The cloth clusters carded

No generator prompts: three deterministic emblem cards from
`make-emblem-card.ps1`, at Dermot's *"Archecluster fabric images are
misleading - maybe just replace with a title card each?"* (13 October 2026).
The photographs showed cloth, which the registry uses only as a name, so a
reader took the metaphor for the object. Same palette as
`lore/archecluster.jpg`, so the family reads as one; title and category are
each page's own, with no epithet or qualifier, at finish 0. The previous
photographs and their prompts stay in `images.md` and git.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\counterpane-archecluster.md -Device triad -Tint '#1A1830' -Accent '#B4AEDA'
.\scripts\make-emblem-card.ps1 -Page src\lore\selvage-archecluster.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA'
.\scripts\make-emblem-card.ps1 -Page src\lore\wholecloth-formcluster.md -Device sphere -Tint '#1A1830' -Accent '#B4AEDA'
```

Devices: **triad** for Counterpane, a comparison read from three or more
sources; **rings** for Selvage, as on its parent page; **sphere** for
Wholecloth, a single closed circle for a sealed whole. Wholecloth is a
formcluster, not an archecluster, and is carded with them because it is the
same cloth as Selvage.

**`lore/post-eleven-dimensional-manifold.jpg`, an emblem card** (13 October
2026, Dermot's *"same treatment for formclusters - they are too abstract to
visualize"*). The Common Manifold is the formcluster's shared structure.
Device **fold**, for where fold transit is defined; same palette as the
cards above.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\post-eleven-dimensional-manifold.md -Device fold -Tint '#1A1830' -Accent '#B4AEDA'
```

## 2026-10-13 — Sohrel, a portrait prompt from the Cerebraun body

The prompt, written on Fable under the 11 October model split, once the body
behind the likeness had a section in `species-design.md` (PR #1178). Nothing
generated and nothing filed; the designed card at
`src/images/characters/sohrel.jpg` and its alt stay until a frame is filed
from the desktop.

### sohrel.jpg — prompt written 13 October 2026, NOT YET GENERATED
- **Type:** generation, replacing a designed card whose device is a cephalopod-like figure with a node at each limb's tip, where the record gives the Cerebraun no Earth lineage and `species-design.md` now gives the body
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only sohrel`
- **Date:** prompt 2026-10-13; generation pending
- **Source:** `story-bible/species-design.md`, *Cerebraun — the body behind the likeness* (the recommended points: no head and no paired eyes, sight along the limbs; eight limbs in two tiers of four, ventral bearing and dorsal working, no suckers; no front; a dry matte finely textured skin, one quiet tone at rest; a seated human's bulk for the frame only), `src/lore/cerebraun.md` (nine centres and one voice, the display skin, the two channels), `src/characters/sohrel.md` (the desk, the three centuries, the second line), S03E01C01 (ship's night, the second line drafted, the third dorsal arm's four centimetres of colour shift beneath the desk), `src/lore/cross-biosphere-taxonomy.md` (the Hydrostata frame; the likeness is the observer's)
- **Prompt / recipe:** of record in `images.md` § 13, *Missing portraits — Sohrel, from the Cerebraun body*, the one shape `scripts/image-prompts.js` parses; not duplicated here. Opens as a documentary photograph taken inside the world by a 29th-century camera; the body from the species note (no head, no paired eyes, small eyes along the limbs, two tiers of four, no suckers, no front, dry matte grained skin in one tone); the moment from the chapter (a bare desk built for the body, late in ship's night, one upper limb beneath the desk with a small warmer patch); render negatives, and octopus, squid, cuttlefish, cephalopod, tentacles, suckers, beak, siphon, fins, kraken, Cthulhu, sea creature, humanoid, face and paired eyes refused by name.
- **Notes:** 16:9 landscape, filed through `import-image.ps1 -MaxEdge 1200` at finish strength 1. The card at the target path makes the entry read as *done* to `--list`; `--only` generates regardless. Triage each variation for the Earth animal before its century: a head, a pair of eyes, suckers, a wet gloss or a node at a limb's tip fails whatever else it gets right. Readings taken for the frame, Fable's under *Who approves whom* and his to overrule, none written to a page: a muted slate-violet grey at rest, after the card's palette; the dissent as one small warmer patch under the desk and no glow or pattern anywhere, since the display resolves at four centimetres; the eyes small, matte and flush, none in pairs, on the tone rule; nothing worn and no mark of office; a bare desk on the lettering rule's remove move; no chair, the body on a low platform; a human-height doorway for scale. The species note's status line still reads as a draft and `open-questions.md` still lists the body as OPEN; a prompt in `images.md` is neither the lore extension nor the re-roll that entry holds back, and the body it draws binds nothing until he rules. Alt text to be written from the filed frame.

## 2026-10-14 — Tavesh and Sixth Course, portrait prompts for the second Cerebraun and the first Meridian person

Two prompts written on Fable under the 11 October model split, in the PR that
added the two character pages at Dermot's *Option B* ruling of 14 October
(characters for the under-represented peoples). Nothing generated and nothing
filed; neither page carries an `image:` until a frame is filed from the desktop.

### tavesh.jpg — prompt written 14 October 2026, NOT YET GENERATED
- **Type:** generation, a new portrait for `src/characters/tavesh.md` (a second Cerebraun, who must read as a different person from Sohrel)
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only tavesh`
- **Date:** prompt 2026-10-14; generation pending
- **Source:** `src/lore/cerebraun.md` (the body as extended 13 October: no head, no front, eyes along the limbs, two tiers of four, dry matte skin), `story-bible/species-design.md`, *Cerebraun — the body behind the likeness* (the Earth animal refused by name, the scale for the frame), `images.md` § 13 (Sohrel's frame, which this one is told apart from), `src/characters/tavesh.md` (the translation channel, the working posture)
- **Prompt / recipe:** of record in `images.md` § 14, *Missing portraits — Tavesh and Sixth Course*, the one shape `scripts/image-prompts.js` parses; not duplicated here. A documentary photograph by a 29th-century camera; the species body; a smaller body in a warm grey-olive resting tone with all four upper limbs at work on a sealed translation instrument with no screen; octopus, squid, cephalopod, humanoid, face, neon and a desk refused by name.
- **Notes:** 16:9 landscape, `import-image.ps1 -MaxEdge 1200`, finish strength 1. Triage for the Earth animal, then for identity against Sohrel's filed frame (a re-lit Sohrel fails), then for the century. Readings taken for the frame, Fable's and his to overrule, none written to a page: the grey-olive tone, two-thirds of Sohrel's bulk, no display, the instrument as a housing.

### sixth-course.jpg — prompt written 14 October 2026, NOT YET GENERATED
- **Type:** generation, a new portrait for `src/characters/sixth-course.md` (the record's first named Meridian person; the people have no species page, so the body is the planet page's alone)
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only sixth-course`
- **Date:** prompt 2026-10-14; generation pending
- **Source:** `src/lore/planets/meridian.md` (armoured, segmented invertebrate life; claw-percussion on shell and structure; the chemical channel; secreted mineral composite lattice updated generation over generation; the ammonia-saline sea; no human presence, sealed platforms and armoured remote proxies only), S03E01C03 (the Long Shelf, the comparison), `src/lore/cross-biosphere-taxonomy.md` (a likeness is the observer's; no frame filed for the Meridian people, none asserted)
- **Prompt / recipe:** of record in `images.md` § 14; not duplicated here. A documentary photograph recorded by a camera on a sealed remote proxy, since no unshielded camera survives the water; a long low segmented armoured body on many jointed limbs with two blunt striking claws laid against a lattice course at the pause between strikes, sense-pits along a hood and no face; dim green water; crab, lobster, shrimp, stalked eyes, antennae, monster and menace refused by name.
- **Notes:** 16:9 landscape, `import-image.ps1 -MaxEdge 1200`, finish strength 1. Triage for the Earth animal, then for threat (the 22 September rule's second failure is the one this body invites), then for the century. Readings taken for the frame, Fable's and his to overrule, none written to a page: the span of a human's reach for scale, blunt claws that strike and do not grip, no stalked eyes and no antennae, a dark matte mineral-grey carapace, no tool and no second figure.

## 2026-10-15 — Titan, Ligeia and Stillwater, three lore illustration prompts from the Titan pages

Three prompts written on Fable under the 11 October model split, for the
three new Locations pages that arrived without an image: a world, a habitat
and a station, each a place by the 7 October rule. Nothing generated and
nothing filed; none of the three pages carries an `image:` until a frame is
filed from the desktop. Ligeia's figures were derived first on sheet H of
`starship-design.md`, written in the same change. A fourth prompt, written
later the same day, is an inline interior for the Stillwater page (the First
Hall), not a page image; a fifth, written after it and last in this section,
is an inline near-infrared frame of Titan's surface from orbit for the planet
page, not a page image either.

### planets/titan.jpg — prompt written 15 October 2026, generated and filed 16 October 2026 from variation 1 (#1261)
- **Type:** generation, a new lore illustration for `src/lore/planets/titan.md`, filed under `planets/` as the four most recent planet pages are
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only titan`
- **Date:** prompt 2026-10-15; generation pending
- **Source:** `src/lore/planets/titan.md` (the first line: outside without a pressure suit, with insulation and brought air; *The World*: nitrogen sky at one and a half atmospheres, the haze, noon a dim orange twilight, ice bedrock as hard as stone, methane and ethane falling as large slow drops and cutting channels, Saturn unseen through the haze; *Working the Surface*: a landing craft losing its speed in the air before it needs its engines); what the probes recorded of Titan (rounded ice cobbles on a dark plain of organic grain, the featureless orange sky)
- **Prompt / recipe:** of record in `images.md` § 5h, *Outstanding lore illustrations — 15 October 2026 (Titan, Ligeia and Stillwater)*, the one shape `scripts/image-prompts.js` parses; not duplicated here. Opens as a documentary photograph taken inside the world by a 29th-century camera; a mid-latitude ice plain at noon under an unbroken orange haze, a channel of dark liquid methane, slow fingernail-sized raindrops hanging as short dashes in a long exposure, one small hooded figure in an insulated suit with a sealed face mask, small flat visor and breathing set, no exposed skin and no hard helmet, back to the camera, and a blunt landing craft descending far off with nothing lit; render negatives, and Saturn, a ringed planet, a visible sun, blue sky, liquid water, a spacesuit, a hard helmet and an exposed face refused by name.
- **Notes:** 16:9 landscape, filed through `import-image.ps1 -MaxEdge 1600` at finish strength 1. Triage first for the sky: a ringed planet or a sun in a Titan surface sky fails before anything else is judged; then for the suit (a hard helmet, a bubble visor or any bare skin fails); then for the century. Readings taken for the frame, Fable's under *Who approves whom* and his to overrule, none written to a page: a mid-latitude plain rather than dunes or sea; rounded ice cobbles; the figure and the craft as the two hints, either of which may go. Proposed alt in the § 5h entry, to be corrected to what the filed frame shows.

### ligeia-habitat.jpg — prompt written 15 October 2026, generated and filed 16 October 2026 from variation 1 (#1261)
- **Type:** generation, a new lore illustration for `src/lore/ligeia-habitat.md`
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only ligeia-habitat`
- **Date:** prompt 2026-10-15; generation pending
- **Source:** `src/lore/ligeia-habitat.md` (a self-governing habitat in high orbit around Titan; built by the Imperium as Outer Administration Station Four to full spin gravity; the ring turns at full Earth weight; travel by ascent javelin up and landing craft down), `src/lore/planets/titan.md` (no solar power worth the name; sunlight about a hundredth of Earth's), `story-bible/starship-design.md` sheet H (the derived figures: about 800 m across at 1.5 rpm, a still hub with cradles, a few spokes, radiators on the axis, no collector field), what the probes recorded of Titan from orbit (a featureless orange globe with a thin bluish detached haze at the limb; Saturn's rings edge-on from Titan's orbit)
- **Prompt / recipe:** of record in `images.md` § 5h; not duplicated here. A documentary photograph through the port of a landing craft that has just cast off, a normal lens; one plain matte grey ring about eight hundred metres across with six spokes, a still hub with a few sealed cradles and small steady points, dark radiator slabs on the axis, no window band; the empty gap between ring and moon as the lower middle of the frame; Titan below as a featureless orange haze globe with a bluish limb; thin hard sunlight from one side; Saturn small in the upper corner with its rings edge-on as one thin line; the port's edge in one corner; the 10 October tether negatives, the starship negatives, the stock-ring negatives and a wide-open Saturn refused by name.
- **Notes:** 16:9 landscape, `import-image.ps1 -MaxEdge 1600`, finish strength 1. Triage first for anything joining the ring to the moon (a tether, tower, cable or elevator fails on the 10 October rule), then against sheet H (a window band, a second ring, a cylinder, a collector field or an open-ringed Saturn fails the sheet), then for the century. Readings taken for the frame, Fable's and his to overrule, none written to a page: the ring's size and spin from sheet H; six spokes; fusion power and so no collectors; Saturn in frame, edge-on; one craft nowhere. Record which figures the chosen variation used and which it guessed. Proposed alt in the § 5h entry, to be corrected to what the filed frame shows.

### stillwater-station.jpg — prompt written 15 October 2026, generated and filed 16 October 2026 from variation 2 (#1261)
- **Type:** generation, a new lore illustration for `src/lore/stillwater-station.md`, with one of Dermot's own frames sent as a reference for the look of dark still water only
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned, the reference sent as an image part by the `References:` line; the desktop step is `node scripts/image-prompts.js --generate --only stillwater-station`
- **Date:** prompt 2026-10-15; generation pending
- **Source:** `src/lore/stillwater-station.md` (the shore of Ligeia Mare; the sea flat to within millimetres, mirror-still; insulated rather than pressurised, sealed, run on fusion, the oldest sections resealed and the resealing recorded; the methane draw and the ice cut from the shore; *Two Clocks and a Long Dark*: years in which the sun does not rise; the First Hall inside and kept as a room), `src/lore/planets/titan.md` (insulation and brought air, no pressure suit; station safety as seals and gas monitors), the reference frame *The Column* (`the-column.jpg` on dermotcochran.com), dark still water with a reflection
- **Prompt / recipe:** of record in `images.md` § 5h; not duplicated here. A documentary photograph, a long exposure from a stand in the northern winter dark; the ice shore with a thin rime of frozen hydrocarbon running down to a black mirror-flat methane sea that doubles the station's few lights; squat thick-walled sealed modules joined by heavily sealed links with paler bands where they were resealed, a few deep-set warm ports and small steady working lights; a sealed intake housing at the water's edge with two small hooded figures at work, backs turned, faces not visible; a black starless haze sky; the reference named in the prompt as sent for the water only; render negatives, and Saturn, stars, liquid water, waves, floodlights, flare stacks, a spacesuit and the reference's own stone refused by name.
- **Notes:** 16:9 landscape, `import-image.ps1 -MaxEdge 1600`, finish strength 1. Triage first for the sea (a ripple or a wave fails the name), then for the sky (anything in it fails), then for the suits (a hard helmet or any bare skin fails), then for the reference leaking back (a stone column, a dam or a pier in the water fails), then for the century. Readings taken for the frame, Fable's and his to overrule, none written to a page: the winter dark rather than the orange day; the modules' shape and the sealant bands; the intake housing and the two figures; the hydrocarbon rime, which the polar winter's cold allows. Proposed alt in the § 5h entry, to be corrected to what the filed frame shows.

### stillwater-first-hall.jpg — prompt written 15 October 2026, generated and filed 16 October 2026 from variation 1 (#1261)
- **Type:** generation, a second image for `src/lore/stillwater-station.md`: an **inline illustration for the page body** under the first paragraph of *The First Hall*, on the Prismere and Tír na nÓg precedent, named `<page>-<subject>`; the page's `image:` stays the § 5h exterior. Written later the same day as the three above, on Fable.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned, no reference sent; the desktop step is `node scripts/image-prompts.js --generate --only stillwater-first-hall`
- **Date:** prompt 2026-10-15; generation pending
- **Source:** `src/lore/stillwater-station.md` (*The First Hall*: the station's first landed module, set down in the 2130s CE, at the centre of the oldest section, *heated and sealed and not used for anything*; the founding charter signed in it and kept there in its original enrolment, whole, with amendments enrolled beside it; *not a shrine*; new crews walked through it on their first rotation down; *The Work*: insulated rather than pressurised, built around methane seeping in from the ground, the oldest sections resealed and each resealing recorded), `src/lore/planets/titan.md` (station safety *chiefly a matter of seals and gas monitors*; inside there is oxygen and the danger is methane), `src/lore/the-enrolled-text.md` (a founding enrolled whole, never edited in place), `images.md` *Conventions* (*The lettering ban cannot beat the scene*: a closed case in place of an open founding), `civilian-dress.md` *Dress by place* (no Titan, Ligeia or Stillwater entry, so the dress is a prompt's choice)
- **Prompt / recipe:** of record in `images.md` § 5j, *Outstanding lore illustrations — 15 October 2026 (Stillwater's First Hall)*, the one shape `scripts/image-prompts.js` parses; not duplicated here. Opens as a documentary photograph taken inside the world by a 29th-century camera, a moderately wide lens from the threshold; a small cramped thick-walled 22nd-century CE module, rounded at every corner, plain pale faded panels whose joins are broad bands of renewed sealant in slightly different shades; one plain fixed table and a few fixed seats; a closed flat matte dark archival case with one smooth seal, lying on a plain shelf, not lit for itself; a small plain sealed gas-monitor housing with one steady indicator flush in the wall; a short row of smooth round studs in the sealant by the hatch; one deep-set round port with pure black beyond it; warm dim light from one long flush slot with no fitting visible; one crew member in the hatchway with their back fully to the camera, in a dull grey-brown coverall with no visible fastening under a slate-blue knitted jumper, soft boots, no hood or mask; render negatives, and altar, candles, shrine, chapel, reverent light, display case, vitrine, relic, pedestal, framed document, parchment, scroll, open book, plaque, flag, stained glass, ISS interior, cable looms, racks, switches, dials, gauges, screens, a visible lamp, stars or a planet in the port, a spacesuit, a hood, a mask, the figure's face and any text refused by name.
- **Notes:** 16:9 landscape, filed through `import-image.ps1 -MaxEdge 1600` at finish strength 1, flat under `src/images/lore/`. Triage first for veneration (a candle, an altar arrangement, a shaft of light on the case, a glass case or anything framed on a wall fails before anything else is judged), then for writing (an open case, a scroll, a parchment or a page fails; the case is shut), then for the century (a dial, a gauge, a switch panel, an ISS rack or a cable loom fails; the sealed housing with one indicator and the studded many-shaded seams are the hint), then for the port (a star, a planet or daylight fails), then for the figure (a face, a hood, a mask or a suit fails). Readings taken for the frame, Fable's under *Who approves whom* and his to overrule, none written to a page: a fixed table and seats as the furniture of a signing, their shape proposed; the sealant bands inside as well as out, and one stud per resealing as the record made visible, strikeable; the monitor housing as the century's hint; the dress as plain, practical, warm, layered and dull-coloured, with no Titan entry in `civilian-dress.md` to follow; short dark hair, no face and so no heritage chosen. Once filed, the page gets the inline line under the first paragraph of *The First Hall*, before *The Hall is not a shrine*, with an alt written from the filed frame; the proposed alt is in the § 5j entry. No sheet in `starship-design.md`, as sheet H's note already says of Stillwater.

### titan-from-orbit.jpg — prompt written 15 October 2026, generated and filed 16 October 2026 from variation 2 (#1261)
- **Type:** generation, a second image for `src/lore/planets/titan.md`: an **inline illustration for the page body** under the haze paragraph of *The World*, on the § 5j and Prismere precedent, named `<page>-<subject>` and filed flat under `src/images/lore/` as the Prismere page's inline frames are; the page's `image:` stays the § 5h surface frame. A **monochrome near-infrared window frame**, since in visible light Titan's surface cannot be seen from orbit at all. Written later the same day as the four above, on Fable.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned, no reference sent; the desktop step is `node scripts/image-prompts.js --generate --only titan-from-orbit`
- **Date:** prompt 2026-10-15; generation pending
- **Source:** `src/lore/planets/titan.md` (*The World*: the unbroken hydrocarbon haze, noon a dim orange twilight, the low dunes of frozen organic grain that *girdle the equator*, the lakes and seas *around the north pole*, Saturn unseen through the haze; the page's own claim that the sky never clears is what the frame answers), `images.md` § 5h (Titan from orbit in visible light is a featureless orange globe, which the Ligeia prompt draws; 2826 UCSD is 2626 CE, late in Titan's northern winter, which puts the polar cap beyond about 76° N in darkness and the southern reaches of Kraken Mare just inside the lit disc), what is known of Titan in the near-infrared windows (the surface visible only near 0.94, 1.08, 1.28, 1.6, 2.0 and 5 microns and by radar, which is how the first orbiter mapped it; in a window the equatorial dune seas are the darkest ground and Xanadu the brightest; the detail softened by scattering; the detached haze a bright soft rim at the limb; Titan's seasons are Saturn's, so a northern winter on the ground is a northern winter from orbit)
- **Prompt / recipe:** of record in `images.md` § 5k, *Outstanding lore illustrations — 15 October 2026 (Titan's surface from orbit)*, the one shape `scripts/image-prompts.js` parses; not duplicated here. Opens as a monochrome documentary photograph taken inside the world by a 29th-century survey camera on a hull mount through a single narrow filter at the 2-micron methane window; Titan from high orbit filling most of the frame, the top of the disc running off into night; neutral grey throughout, the surface softened everywhere as if through ground glass; broad dark dune belts wrapping the equator, one large bright irregular region against them on one side, mottled mid-grey plains either side, one broad dark irregular sea near the top lying just inside a soft wide terminator, the polar cap beyond it black, a thin pale soft rim of haze at the limb, a black starless sky with nothing made in it; render negatives, and orange, tan, any colour, false colour, a thermal palette, blue oceans, Earth clouds, a cratered Moon-like disc, a sharp limb, a sun glint, Saturn, rings, a station, a craft, a tether, a port frame, grid lines, a scale bar, a reticle, a HUD, a timestamp and any text refused by name.
- **Notes:** 16:9 landscape, filed through `import-image.ps1 -MaxEdge 1600` at finish strength 1, flat under `src/images/lore/`; the finish's saturation step has nothing to ease on a grey frame and leaves it grey. Triage first for colour (any orange, tan or false colour in the disc fails before anything else is judged; a faint cast is a cast), then for sharpness (a crisp, hard-limbed, cratered disc fails; soft is right, do not re-roll for sharpness), then for the ground (blue oceans, white clouds, continents with coastlines or ice caps fail), then for the north (one dark sea just inside the terminator and black beyond is what 2826 UCSD gives; seas in full daylight, a lit pole or a glint draw another season and fail; at the top, or the bottom if the camera looks from the other side), then for anything made or any overlay (Saturn, a ring, a habitat, a craft, a tether, a port edge, a grid, a bar, a reticle or a stamp fails), then for the century, which the 13 October triage's (A) passes for a frame with nothing made in it and which the record says so. Readings taken for the frame, Fable's under *Who approves whom* and his to overrule, none written to a page: the 2-micron window over the others; a hull-mounted survey camera and no port edge; the disc placed with its equator across the lower middle; one sea at the terminator and no glint, which follows from the year (corrected in Opus review from a first draft that read 2826 as CE and withheld the seas); no Saturn and no craft. Once filed, the page gets the inline line under the haze paragraph of *The World*, before *The surface stands at about ninety-four kelvin*, with an alt written from the filed frame; the proposed alt is in the § 5k entry. No sheet in `starship-design.md`: the craft the camera rides is not in frame.

## 2026-10-16 — Tsittak, a lore illustration prompt from the lore page

### tsittak.jpg — prompt written 16 October 2026, generated 16 October 2026; round one re-rolled as a toaster, filed from round 2 variation 2 (#1261)
- **Type:** generation, a new lore illustration for `src/lore/tsittak.md`, filed under `lore/` as the page is
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned, no reference sent; the desktop step is `node scripts/image-prompts.js --generate --only tsittak`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/lore/tsittak.md` (*a lone body of nickel-iron, a few kilometres across, drifting in deep interstellar space with no star within several light-years*; members *left, not built*; *seen from outside, it is a dark body with a lit dock and almost nothing else*; the quiet-zone tunnel beside it, which `lagrange-fold-points.md` says shows nothing until a vessel is inside); real physics for the light (no sunlight; a long exposure set for a dim dock records a dense star field)
- **Prompt / recipe:** of record in `images.md` § 5l, *Outstanding lore illustrations — 16 October 2026 (Tsittak)*, the one shape `scripts/image-prompts.js` parses; not duplicated here. A documentary photograph from a hull mount a few kilometres off: the body as a near-silhouette against a dense, sharp star field and a faint galactic band, lit only by a warm amber recessed dock in one smooth cut face, a few flush lights on its lip, cut faces and channels and nothing bolted on; no sun, no tunnel shown, no vessel, no person; render negatives and a sun, daylight, a portal, a nebula, modules, masts, text refused by name.
- **Notes:** 16:9 landscape, filed through `import-image.ps1 -MaxEdge 1600` at finish strength 1. Triage first for the sun (any daylight on the body fails), then for the sky (stars, not black; no nebula colour, spikes or twinkle), then for the building (cut, not built: anything standing up from the surface fails), then for the tunnel (any visible portal fails), then for anything else in frame (vessel, port edge, person, weapon, text), then for the century. Written by Opus under the 16 October rule in `CLAUDE.md`; readings taken for the frame (the body's shape and surface, the dock as a recess, the camera's distance) are named in the § 5l entry and are Dermot's to overrule. No sheet in `starship-design.md`: the body is a settlement in rock, not a hull.

## 2026-10-15 — Callisto Station, a lore illustration prompt from the lore page

One prompt written on Fable under the 11 October model split, later the same
day as the three Titan prompts, for the fourth new Locations page that
arrived without an image: a station dug into a moon's ice, a place by the
7 October rule. Nothing generated and nothing filed; the page carries no
`image:` until a frame is filed from the desktop. No sheet in
`starship-design.md`: a buried surface station is not a hull, as Stillwater
was not, and sheet H's note says so.

### callisto-station.jpg — prompt written 15 October 2026, generated and filed 16 October 2026 from variation 1 (#1261)
- **Type:** generation, a new lore illustration for `src/lore/callisto-station.md`, filed under `lore/` as the page is
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned, no reference sent; the desktop step is `node scripts/image-prompts.js --generate --only callisto-station`
- **Date:** prompt 2026-10-15; generation pending
- **Source:** `src/lore/callisto-station.md` (*a battered ball of ice and rock with next to no atmosphere*; dug into the crust because *metres of ice are the cheapest shielding there is*; an Imperium patrol post, Outer Administration Station One, now the Survey Corps' depot for the Lagrange survey; *Life on One*: surface hatches, instrument benches, buoy cradles, craft away for months, a posting of months and nobody's home; the last paragraph: Jupiter fixed in the black sky over the hatches, about eight full Moons wide, never rising or setting), `src/lore/rank-insignia-and-uniform.md` (the field shell *a pressure liner first and a garment second*; the Survey Corps' shell deep olive; tabs as shapes read *through a visor*; no name on any uniform), `src/lore/star-rangers-navigation-corps.md` (its image: a buoy as a small plain unmarked cylinder), what is known of Callisto (an ancient saturated cratered surface of dark dusty ice with bright ice on the rims; a black sky, hard shadows, the sun at about four percent of Earth's; Jupiter about four degrees across, banded, its rings invisible to the eye; one face kept to Jupiter)
- **Prompt / recipe:** of record in `images.md` § 5i, *Outstanding lore illustrations — 15 October 2026 (Callisto Station)*, the one shape `scripts/image-prompts.js` parses; not duplicated here. Opens as a documentary photograph taken inside the world by a 29th-century camera; a dark cratered ice plain with bright crater rims under a pure black sky in the long local afternoon, the sun low behind the camera's right shoulder so every shadow is long and hard; Jupiter fixed a third of the way up the sky at one-twentieth of the frame's width, banded cream, tan and rust, gibbous and three-quarters lit on its right, no rings; low mounds of ice shielding over buried modules, a few flush sealed hatches, an open-sided shelter with a cradle holding one small plain cylindrical buoy, three flat dark radiator slabs on edge, a beaten path of boot prints; two small figures with their backs turned in deep olive matte pressure shells with close helmets, small flat visors, compact packs and one or two plain geometric tabs; render negatives, and atmosphere, haze, blue sky, clouds, stars, prominent Jupiter rings, Jupiter rising or setting, a giant Jupiter, domes, towers, tethers, a lunar module, a white Apollo suit, a bubble helmet, weapons, warships, flags and any text refused by name.
- **Notes:** 16:9 landscape, filed through `import-image.ps1 -MaxEdge 1600` at finish strength 1. Triage first for Jupiter (absent, giant, ringed, on the horizon or a full disc fails before anything else is judged), then for the sky (any haze, glow, blue or stars fails), then for the suits (a hood, a mask, a bare face, a white suit or a bubble helmet fails; the shell is olive and the marks are shapes), then for anything military (a turret, a missile, a warship, a flag), then for the century. Readings taken for the frame, Fable's under *Who approves whom* and his to overrule, none written to a page: the station well off the sub-Jovian point so Jupiter stands a third of the way up the sky rather than overhead; the sun low behind the camera's right shoulder, about 120° from the planet, which makes Jupiter gibbous and lit on the right (corrected in Opus review from a noon setting, which on Jupiter's face would show the planet dark); three radiator slabs as the fusion plant's heat (derived, strikeable); no survey craft on a pad, the page having them away and no sheet having given them a shape; the two figures and the sealed hatches as the hints of the century. Proposed alt in the § 5i entry, to be corrected to what the filed frame shows.

## 2026-10-14 — Syra, re-rolled to look both human and somewhat alien

At Dermot's direction of 14 October 2026, verbatim *"Syra should look both
human and somewhat alien at the same time"*. The filed frame of 13 October read
as an ordinary human woman, which its prompt had asked for. The reading taken
and its canon check are in `images.md` § 1 under the entry's 14 October note.

### syra.jpg — filed from run 2 variation 1
- **Type:** generation, replacing the 13 October portrait; the species' look for the Krenyi follows from it (Toval's prompt names Syra's portrait as the kind's reference and is queued to take the same carriers)
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, via `scripts/image-prompts.js --generate --only syra`; run 1 two variations, run 2 four
- **Date:** 14 October 2026
- **Source:** `src/lore/krenyi.md` (*The Nearest Frame Is the Strangest*, *What the Body Notices*, *The Whole Body Is the Instrument*: almost human, no organ to point at, low-light acuity, everything missed at first), `src/characters/syra.md`, `story-bible/species-design.md` (the frame is the point, 30 September). The 13 October portrait cropped to face and shoulders held as `References:` (`story-bible/reference-art/syra-face-2026-10-14.jpg`) so she stays recognisable, with the prompt stating what to change.
- **Prompt / recipe:** the blockquote in `images.md` § 1; the room, light, pose, garment, robustness, trope guard, century negatives and photographic finish of 13 October unchanged. Three carriers of the alien, none an organ: exact symmetry with the eyes set wider and more level; pupils opened to the dark room with the iris ring still showing, matte, no glow; skin of one even unlined tone. The trope guard gained almond eyes, reflective eyes, slit pupils, doll, mannequin and android by name.
- **Notes:** run 1 kept her face exactly; variation 1 opened the pupils to all black, a feature to point at and the black-eyed trope, and variation 2 read as the ordinary lined human again. The prompt was tightened (iris ring visible, white at both sides, eyes noticeably wider, skin unlined, *a degree too regular, as if drawn from an average rather than born*) and run 2's variation 1 picked: still her, symmetrical, wide-set dark eyes with the iris showing, smooth even skin, no placeable age, hands folded. Variation 2 read as startled (whites all round, brows lifted), which a people without deep fear would not show; 3 and 4 drifted back to the lined face. Triage: century reads as the audit's (A), plain with nothing period, nothing made in frame but the garment and the surfaces; identity holds against the 13 October portrait; modesty clears the site's bar; no trope. Nothing readable anywhere. Filed with `import-image.ps1 -MaxEdge 1200`, finish strength 1. Runs kept as `image-out/characters-syra-run1/` and `characters-syra/`. Alt text rewritten from the frame.

## 2026-10-14 — Toval, given the Krenyi carriers

At Dermot's "Toval", taking up the queue note under Syra's entry. The reading is
in `images.md` under Toval's entry, 14 October note.

### toval.jpg — filed from variation 1
- **Type:** generation, replacing the 11 October portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, via `scripts/image-prompts.js --generate --only toval --variations 4`
- **Date:** 14 October 2026
- **Source:** `src/lore/krenyi.md`, `src/characters/toval.md`, Syra's prompt of record and its two 14 October notes (`images.md` § 1)
- **Prompt / recipe:** the blockquote in `images.md`. Two carriers, symmetry with the eyes set wider and more level, and pupils opened with the iris ring showing; born, not made; eyes lifted off-frame so both carriers show; the room dim; his own 11 October frame cropped to the face (`story-bible/reference-art/toval-face-2026-10-14.jpg`) as the reference in place of Syra's portrait; wall sockets negated.
- **Notes:** four variations, all holding his face. Variation 1 picked: frontal, symmetrical, the pupils open with the iris showing, freckled living skin, the collar tab, the pen stopped. Flaws passed: the housing's indicator is lit green where the prompt says unlit, and the paper carries rows of dots that read as figures but not as characters; the room came back lit rather than dim. 2 kept ordinary pupils and drew a present-day office behind; 3 had the strongest eyes but handwriting that reads as numerals and no collar tab; 4 grew a present-day electrical cabinet with a hazard sticker. Triage: century (A) with the two flaws named; identity holds against the 11 October frame; modesty clears the site's bar; no trope. Filed with `import-image.ps1 -MaxEdge 1200`, finish strength 1. Run kept as `image-out/characters-toval-2026-10-14/`. Alt text rewritten from the frame.

## 2026-10-14 — Syra, re-rolled so she does not read as Lucene-9000

At Dermot's direction later the same day, verbatim *"Syra as a Kyeni does not
look like the gynoid Lucene 9000, despite the stillness, symmetry and
composure"*. The morning's frame carried Lucene-9000's ruled tell, perfection.
The reading taken and its canon check are in `images.md` § 1 under the entry's
second 14 October note, and the ruling in `intake-2026-10-14.md`.

### syra.jpg — filed from run 3 variation 3
- **Type:** generation, replacing the morning's portrait of the same day
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, via `scripts/image-prompts.js --generate --only syra --variations 4`, the face reference of the morning unchanged
- **Date:** 14 October 2026
- **Source:** `src/lore/krenyi.md` (*The Whole Body Is the Instrument*), `src/characters/lucene-9000.md` (built to look as human as a machine can be made to look; the 11 October ruling *a real woman whose only tell is perfection*), `src/characters/syra.md`
- **Prompt / recipe:** the blockquote in `images.md` § 1. The even-skin carrier is withdrawn for living skin (pores, colour at cheek and lip, a freckle or two, loose hairs at the hairline) and *born, not made*; the hands rest flat and apart in place of Lucene's clasped hands; the negatives add gynoid, social robot, a flawless or perfected face, porcelain skin and clasped hands. Symmetry, eye set, open pupils, room, light, garment and gaze unchanged.
- **Notes:** four variations, all holding her face. Variation 3 picked: freckles across the brow and cheeks, loose strands at the hairline, living colour, the pupils open with the iris showing, hands flat and apart, nothing perfected. 1 was close but the whites showing round the eyes read a touch startled, which a people without deep fear would not show; 2 grew recessed handles on the wall panels, which read as doors and lockers; 4 drifted back to the smooth, even face the revision removed. Triage: century (A), nothing period in frame; identity holds against the morning's portrait; modesty clears the site's bar; no trope. Filed with `import-image.ps1 -MaxEdge 1200`, finish strength 1. Runs kept as `image-out/characters-syra-run2/` (the morning's) and `characters-syra-run3/`. Alt text rewritten from the frame.

## 2026-10-14 — Tobble, the first portrait of a non-physical member

Dermot's rulings of 14 October 2026 (`intake-2026-10-14.md`), verbatim: *"Non-physical headmates get fantasy-style codex art portraits instead of the photorealistic portraits for the host body of the plural system"*, and, on the register, *"I do like the whimsical fantasy dress styles and lighting as shown in the codex art portrait of Asteria the Sage"*. Tobble's page (`src/characters/tobble.md`, PR #1223, the same day) had no `image:`; this is the first portrait made under the rule, and a companion piece to the first Codex-art image above (3 September).

### tobble.jpg — filed from run 2 variation 2
- **Type:** generation with a reference image for style only
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, via `scripts/image-prompts.js --generate --only tobble`; two runs of two variations
- **Date:** 14 October 2026
- **Source:** `src/characters/tobble.md`, the Tobble and inner-world sections of `src/characters/tissadelle-shepherd.md`, `src/glossary/plural-minds.md`, and the `::: pov tobble` block of S05E02C03 (the hillside, the low stone wall with the third course shifted, the gold of a home star, *came up grey, and then gold*, *he sat down in the middle of it, being a cat*). The page's own line, *because that is what I am*.
- **Reference:** `src/images/codex/asteria-the-sage-impression-artwork.jpg`, sent as an image part with the prompt stating that it is a reference for medium, brushwork and handling only and that nothing of its subject, figure, clothing, branches or night is to be taken. Nothing of them was.
- **Prompt / recipe:** the blockquote in `images.md` § 16. A painting, as Asteria's is, because an impression made from a description and not a sitting says so on its surface, and because the ruling asks for it. He wears nothing: the fantasy register is carried by the light (more gold than a sunrise gives), the place and the brushwork, and a garment, a hat or a sword would make him the costumed-animal trope the trope default refuses, a collar or a bell the pet the record exists to correct. Limited palette of pre-dawn grey, blue-black, ginger and one gold; edges dissolving to raw canvas where the description ran out. Filed through `import-image.ps1 -MaxEdge 1200 -Finish 0`: a painting takes no photographic finish.
- **Notes:** run 1 (`image-out/characters-tobble-run1/`) passed the trope and surface checks on both variations (no garment, no collar, a cat and not a cartoon, heavy brushwork, raw canvas at the edges, nothing readable) but both met the viewer's eye squarely, where the prompt asked for a gaze past the viewer and the 28 July guardrail asks for attention off-frame. The gaze clause was tightened (head turned a little to one side, eyes fixed far off beyond the edge of the picture, three-quarter view, *does not meet the viewer's eye at all*) and *eye contact with the viewer or looking into the camera* added to the negative. Run 2 (`image-out/characters-tobble/`): both variations look far off to the right. Variation 2 picked: the farthest gaze and the most composed bearing, a person who has sat down to see what the place will do; the wall runs away from him with its courses catching the first gold, and the blue-black of the hillside's shadow side sits beside Asteria's night blue. Variation 1 is a close second, with a lighter sky and the wall reading more as a heap than a built thing. Triage: trope none (no garment, not bipedal, not cute, not a familiar); bearing a colleague's; century not at issue (an unmortared field wall inside a mind); modesty trivially clear; tone quiet; nothing readable, no signature, no border. The third course's shift is not legible in the filed frame, which the record does not need the picture to assert. Alt text written from the frame; caption names it an impression.

### tobble.jpg — re-rolled with a mantle, filed from run 3 variation 1
- **Type:** generation replacing the frame filed earlier the same day (kept locally as `image-out/tobble-filed-v1.jpg`; the two first runs as `characters-tobble-run1/` and `-run2/`)
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, via `scripts/image-prompts.js --generate --only tobble`; one run of two variations
- **Date:** 14 October 2026, the same evening
- **Direction:** Dermot, on seeing the first filing and after a restrained touch of dress had been offered, verbatim: *"Yes something that makes Tobble look like a person in the shape of a cat, or slightly similar to the Smart Pets"*. That overrules the first filing's choice that he wears nothing.
- **Source:** as above, plus `src/glossary/smart-pet.md` for the collar (*a collar that looks like a collar: matte, closed, without a light, a seam or a surface that does anything a stranger could see*).
- **Prompt / recipe:** the blockquote in `images.md` § 16 as revised. One garment, a person's and not a pet's: a short close-fitting mantle of night-blue cloth over the shoulders and the top of the chest, closed at the throat with one small plain silver clasp, its edge worked in silver botanical embroidery, a companion to Asteria's cloak; its low standing collar sits where a certified collar would, so that a stranger could take it for one and be wrong. The negative now names the mantle as the only garment and refuses hat, boots, hooded cloak, cape, sword, belt, trousers, sleeves, tunic, jacket, harness, bell, tag, pendant, medallion, buckle, strap, lead and leash. Everything else unchanged: wall, hillside, pre-dawn grey and the gold, the far-off gaze, the brushwork and the raw canvas edges, finish 0.
- **Notes:** both variations read as a person in the shape of a cat and not a dressed-up pet: the mantle lies light, the body and posture stay wholly a cat's, and nothing hangs from the neck. The clasps were checked at a crop: both are two-part silver cloak clasps, no bell, no tag. Variation 1 picked: its mantle has a low standing collar closed at the throat, so the silhouette at the neck is exactly the one the direction asks for, the thing a stranger could mistake for a Smart Pet's collar; the gaze is far off to the right, the light warm, the composition that of the first filing. Variation 2 is a good second, a short open cape clasped lower at the chest, nearer a cloak in miniature and a step toward costume. Triage: trope none (four-footed, seated, no hands, no boots, no hat, no sword); bearing a colleague's; century not at issue; modesty trivially clear; nothing readable, no signature, no border. Alt text rewritten from the frame.

## 2026-10-14 — A reference bat, and the Prismeri photographed from it (nothing filed)

Dermot's direction of 14 October 2026, verbatim: *"I have no bat photos so a bird would be the nearest or else generate a bat and then re use it"*, on another attempt at photographs of the Prismeri after three text-only rounds (two photographic, one silhouette, 12 October) drew dragons and the three images went to Codex art as the plates of Halle Ostrander. The generated bat was taken over a bird, since a bird's body (feathers, no finger inside the wing, a perch rather than a hang) fights the body the record states. The run's outcome is in `images.md` under the Prismere set's heading (*Photographs from a bat, 14 October 2026*); this is the prompt record.

### prismeri-body-bat-2026-10-14.jpg — reference only, never filed under `src/`
- **Type:** generation, reference art; kept at `story-bible/reference-art/prismeri-body-bat-2026-10-14.jpg` (1600×893) and in no page. A camera can photograph a bat, so under the 3 September rule a bat on the site would have to be one of Dermot's own frames; this one exists only to give the generator a body plan to start from.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, no reference image, through a one-off job script that makes the same Interactions call as `scripts/image-prompts.js` (the bat is not an entry in `images.md`, which that script reads). Two prompts, two variations each; the pick is the second variation of the stretch prompt (the hang with one wing fully open, the finger bones plain, the other wing folded, the head close against the shoulders, a neutral grey-brown background). The other three are kept locally in `image-out/prismeri-photo-from-bat/reference-bat/`.
- **Prompt (the stretch, the pick):**
  > Documentary wildlife photograph of a real fruit bat, a flying fox, hanging head-down from a bare horizontal branch by its hind feet and mid-stretch, with one wing opened fully out to the side and the other still folded against the body, photographed from the side and slightly below in plain overcast daylight against a plain neutral grey-brown background out of focus. The whole animal is in frame with space around it. The open wing shows its structure plainly: the long forearm, the clawed thumb standing free at the wrist, and the long finger bones fanning out through the thin membrane, which is stretched taut and faintly translucent against the sky, its veins visible; the membrane runs back from the last finger to the hind leg. The hind feet grip the branch with long curved toes, the short neck and the head carried close against the shoulders, the fox-like face in profile, eyes open, ears small. Russet and dark brown fur, the membrane dark and leathery. Photographed, not rendered: a real animal, real fur with individual hairs, real skin texture on the membrane, natural colour, a telephoto lens at a moderate distance, shallow depth of field, slight high-ISO grain, the small imperfections a real photograph keeps. Negative: readable text, watermark, caption, lettering of any kind; studio flash, black background, night, flash-lit eyes; cartoon, illustration, 3D render, CGI, plastic sheen, airbrushed, over-smooth surfaces; a cage, bars, a hand, a person, a glove; dragon, fantasy creature, wyvern; both wings spread, flying. Landscape orientation.
- **Prompt (at rest, not picked):** the same with the pose changed to *hanging head-down at rest … the wings partly folded, held loosely about the body rather than wrapped tight, so that the long finger bones inside each wing membrane can be seen running from the wrist down through the membrane, and the clawed thumb stands free at the wrist … the fox-like face turned a little toward the camera*, and without the *both wings spread, flying* negative.
- **Notes:** all four read as photographs. The stretch pick was chosen because it shows what the Prismeri prompts need (the fingers through the membrane, the free thumb, the hang, no tail) in one frame; the rest pose hides the fingers in the fold.

### prismeri-first-wings, prismeri-full-wings, prismeri-lattice-gathering — photographic versions from the bat, two rounds, nothing filed
- **Type:** generation with a reference image for body plan only; the plates of record in `images.md` are unchanged and remain the filed images.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, through the same one-off job script, the bat sent as an image part after the prompt (the `References:` mechanism of `scripts/image-prompts.js`, done by hand because these prompts are not the entries `images.md` carries for the three files). Two rounds of two variations each, the brief's ceiling. Outputs in `image-out/prismeri-photo-from-bat/round1/` and `round2/`, with a sheet at `image-out/prismeri-photo-from-bat/prismeri-photo-from-bat-sheet.jpg`.
- **Source:** `src/lore/prismeri.md` (*A Body for Thin Ground and Thick Air*, the facet band, the hang, the short neck and no tail of 12 October), `src/codex/plates-of-the-prismeri.md` (the three compositions), `story-bible/species-design.md` (the Prismeri section), and the documentary register of the nine filed Prismere world frames (`images.md`, batch 3).
- **References:** `story-bible/reference-art/prismeri-body-bat-2026-10-14.jpg`, with the instruction in the prompt's first sentence: *take the body plan, the proportions and the resting pose from it … and nothing else: not the species, not the face, not the fur or its colour, not the branch, not the setting.*
- **Round 1 prompt, `prismeri-first-wings`:**
  > The attached photograph is a reference for body plan only: take the body plan, the proportions and the resting pose from it (a flier hanging head-down by its hind feet, the wings as forelimbs with the long finger bones running through the membrane, the short neck, the head carried close against the shoulders, no tail), and nothing else: not the species, not the face, not the fur or its colour, not the branch, not the setting. Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, on Prismere, a low-gravity world under thick hazy air whose living things are built from glass and crystal rather than wood and chitin: a First Wings Prismeri, an adult of a sapient people, hanging head-down at rest from a shaped ledge of a lumenspire, a tall translucent mineral tower lit faintly from within in amber, in a settlement built into a stand of such spires. The long-toed hind feet take the whole weight; the wings are partly folded about the body, and at the leading edge of each wing three long clawed fingers stand free of the membrane, and these are its hands: both wing-hands are held up before the face, working a small piece of shaped glass. The body is slender and light-boned on a level spine, with no fur anywhere: a smooth, soft, still-hardening exoskeleton in pale grey-violet, faintly segmented, with a dull matte sheen like unfired porcelain, and the gossamer wing membrane so thin it is nearly transparent, the long finger bones showing through it. The head is blunt and rounded, carried close against the shoulders on a short neck: two large dark forward eyes set low on the head, and above them, along the ridge of the skull, a band of small crystalline facets catching the light, which is the only brightness on the body; a hard lipless mouth, a rasping plate behind a hard lip; no ears, no nose, no whiskers, no snout. No tail: the body ends at the hind legs, the membrane running between wing and leg. Photographed from a little below and to one side with a moderate telephoto lens, from a few metres off, the figure the size a person is in a photograph of a person at work, the spire's own amber glow lighting it from behind and the hazy forest glow from below. The air is visibly thick with suspended crystalline dust, the light soft and scattered, the far spires pale in the haze. The settlement is kept and quiet. Photographed, not rendered: real glass and mineral surfaces with dust, frost and fine fractures, haze in the air between the camera and everything far off, high-ISO grain heavy in the shadows of a low-light exposure, a real lens with slight softness toward the corners, a touch under-exposed, muted natural colour, the small imperfections a real photograph keeps. Negative: fur, hair, a furry body, a fox face, a dog face, a snout, a muzzle, whiskers, bat ears, pointed ears, a nose leaf, a tree branch, Earth forest, green leaves, daylight sky; dragon, wyvern, drake, gargoyle, griffin, lizard body, long neck, long tail, tail of any length, horns, spikes, a crest of spines, scales, fangs, teeth; humanoid figure, upright biped, human face or torso, separate arms, fairy, angel, costume, clothing; readable text, lettering, numerals, signage, insignia, logos or written characters of any script anywhere in frame; human figures; oversaturated neon, glowing outlines, fantasy glow, sparkles, magic particles, fairy lights, rainbow sheen, lens flare, god rays. Render negatives: animated film still, creature render, character design, 3D render, CGI, octane render, video-game render, painterly, digital painting, illustration, fantasy art, concept art, matte painting, storybook, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, expressive cartoon face, big cute eyes. Landscape orientation.
- **Round 1 prompt, `prismeri-full-wings`:** the same opening, with the reference pose read as *one wing opened out to the side in a stretch with the long finger bones running through the membrane and the other wing folded*, and the subject:
  > … a Full Wings Prismeri, an adult of a sapient people, hanging head-down by its hind feet from a high shaped ledge of a lumenspire at dusk, above the haze layer, stretching one wing fully open to the side before flight while the other stays folded against the body. The open wing shows its structure plainly against the pale haze: a long forearm, the three long clawed fingers standing free at the leading edge, which are its hands, and a long outer digit carrying the membrane back to the hind leg, the membrane taut, strong, faintly translucent, in warm grey with the finger bones dark through it. The body is broader and heavier through the shoulders than a First Wings body, on a level spine, with no fur anywhere: a hardened plated exoskeleton in muted gold and deep blue, the plates overlapping like a beetle's but matte, dusty, with fine fractures and wear at their edges. The head is blunt and rounded, carried close against the shoulders on a short neck: two large dark forward eyes set low on the head; above them, along the ridge of the skull, a band of small crystalline facets; and growing back from that same ridge, several long fine motile sensory tendrils, crystalline and pale, drifting in the thick air like strands of glass thread; a hard lipless mouth, no ears, no nose, no whiskers, no snout. No tail: the body ends at the hind legs, the membrane running between wing and leg. Photographed from a little below and to one side with a telephoto lens, from some metres off, the figure in the middle band of the frame with clear space above and below it, back-lit by the last cold light of the sky, so the open membrane glows at its edge and the plating is half in shadow; faint pale straight lines of the Lattice high in the hazy sky behind, barely there. The air visibly thick with suspended crystalline dust. …
  with the same finish and negatives, plus *both wings spread, flying, in flight* and *aurora curtains* in the negative.
- **Round 1 prompt, `prismeri-lattice-gathering`:** the same opening and subject body, and:
  > … two Prismeri, adults of a sapient people, hanging head-down side by side by their hind feet from one long shaped ledge of a lumenspire, their heads at the same height and turned toward each other in conversation, equals, neither above the other, both with their wings folded close about the body as a cloak, the three free clawed fingers of each wing visible at the fold. On the left a First Wings form: slender, light-boned, a smooth soft exoskeleton in pale grey-violet with a dull matte sheen, gossamer wing membrane nearly transparent. On the right a Full Wings form: broader and heavier through the shoulders, hardened matte plating in muted gold and deep blue, and from the ridge of its skull several long fine pale crystalline sensory tendrils drifting in the thick air. Both heads blunt and rounded, carried close against the shoulders on a short neck, with two large dark forward eyes set low and a band of small crystalline facets along the skull ridge; hard lipless mouths; no fur, no ears, no nose, no whiskers, no snout. No tails: each body ends at the hind legs, the membrane running between wing and leg. Photographed from across a gap with a telephoto lens, from several metres off and a little below, both figures whole in frame with space around them, lit from behind and below by the spire's faint amber glow and the hazy glow of the glasswood forest beneath, the far spires pale in the haze; high above, faint pale straight lines of the Lattice in the dusk, barely there. The settlement is kept and quiet. …
  with the same finish and negatives, plus *a perched or crouching figure, standing* and *aurora curtains* in the negative.
- **Round 2:** the three prompts above with four clauses inserted before *Photographed, not rendered* and one block added to the negative, after round 1 drew every figure as a creature render with a modelled, often cute or toothed, face, a cat's whiskers for the Full Wings tendrils, and the Lattice as power lines. The candid clause: *A candid frame from a visiting survey team's record, not a portrait: the camera handheld in low light at a high ISO, the figure only about a third of the frame's height and off-centre, seen from further off through the thick hazy air so its surfaces are softened, back-lit so that most of the body is in shadow with a rim of light along its edges, the head turned away from the camera toward the spire so that no face is read and there is no eye contact; a slight motion softness, heavy grain in the shadows, the exposure a touch under, the colour muted and flat, the corners soft, a dust speck or two in the air between lens and subject.* The face clause: *The head is a smooth blunt helmet of the same exoskeleton as the body, with no mammal muzzle, no fox or dog or seal face, no expression; the mouth is a flat hard plate that does not open or show teeth.* The tendril clause (Full Wings and the pair): *The sensory tendrils grow only from the back of the skull ridge, behind the facet band, and stream back along the line of the spine away from the face; they are never beside the mouth and never read as whiskers.* The added negative: *cute, adorable, a cartoon face, an expressive face, a smile, a grin, open mouth, teeth, crystal teeth, whiskers, cat whiskers, eye contact with the camera; power lines, telegraph wires, cables, contrails, vapour trails, laser beams; sharp studio lighting, clean edges, perfect focus, a posed portrait.* The Lattice lines were taken out of both sky prompts (*the hazy sky behind empty and pale*), and the pair are *both seen in profile or three-quarter from behind so that neither face is toward the camera*.
- **Notes:** the verdicts, by the two tests set for the run. **Levril test (no outline of neck, head and tail, no bat-wing spars on a lizard body): all twelve pass.** Every figure hangs by its hind feet, the head sits close against the shoulders, and no frame has a tail; the bat held the outline the plates were made to hold. Round 2's `full-wings` 2 and `lattice-gathering` 2 grew reptilian heads with teeth, and its `lattice-gathering` 1 crouches its First Wings like a gargoyle, which are faults of the head and the pose rather than of the outline, but worth naming as the direction the generator leans once the dragon is shut out. **Photograph test (a photograph rather than a render): none passes cleanly.** Round 1: `first-wings` 1 the nearest (haze, a real-looking lens, an animated-film face), `first-wings` 2 a smooth render with crystal teeth, `full-wings` 1 a render with cat's whiskers, `full-wings` 2 a render with the Lattice as power lines, `lattice-gathering` 1 a render, `lattice-gathering` 2 a painting. Round 2: `full-wings` 1 the nearest of all twelve (plain hazy sky, dust in the air, a telephoto's softness, the body reading as a photographed thing; a lizard's head), `first-wings` 1 next (haze, a candid pose, the face turned away; the skin still a render's), the other four renders. **Earth-bat test: none reads simply as a bat.** The exoskeleton or plate, the facet band and the absence of fur, ears and muzzle carry every figure off the reference, while the wing's finger structure is the bat's throughout, which is where the convergence was meant to sit. **Best one or two:** round 2 `full-wings` 1, then round 2 `first-wings` 1. Nothing filed; the plates stand; where a photograph of the people would go, if one passed, is Dermot's decision and is not put to him here.

## 2026-10-14 — The Prismeri as Halle Ostrander's finished paintings (two filed, the First Wings on its plate)

Dermot's direction of 14 October 2026, verbatim: *"If we must have codex art for Prismeri then it needs to be closer to a photograph as much as possible"*. The plates of *Plates of the Prismeri* are approved, linked Codex art, so they are superseded on the Prismeri page and never overwritten; three new entries in `images.md` (section 5a, after `prismere-root-mat-network`) ask for the same naturalist's finished paintings, worked up afterwards from the field sheets as hyperreal natural-history oils on panel. The outcome and the reasons are in `images.md` under the Prismere set's heading (*Finished paintings, 14 October 2026*); this is the run record.

### prismeri-full-wings-painting.jpg — filed from round 2 variation 2
- **Type:** generation, Codex art carried on a lore page (Halle Ostrander's painting after Plate II); `src/images/lore/prismeri-full-wings-painting.jpg`, 1600×893, the hero and second inline image of `src/lore/prismeri.md`.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, through `node scripts/image-prompts.js --generate --only prismeri-first-wings-painting,prismeri-full-wings-painting,prismeri-lattice-gathering-painting`, two variations per round, two rounds. Filed with `scripts/import-image.ps1 -MaxEdge 1600 -Finish 0` (a painting, not a photograph).
- **References:** `story-bible/reference-art/prismeri-body-bat-2026-10-14.jpg`, sent as an image part through the entry's `References:` line, for body plan and proportions only (the prompt's first sentence; this entry also excludes the hanging pose, since the figure flies).
- **Prompt:** the entry of record in `images.md`, as revised for round 2 (heavy-lidded eyes, a flush facet band, a closed mouth, a head closed like a helmet, corner signatures and rodent faces negated).

### prismeri-lattice-gathering-painting.jpg — filed from round 2 variation 1
- **Type:** generation, Codex art carried on a lore page (Ostrander's painting after Plate III); `src/images/lore/prismeri-lattice-gathering-painting.jpg`, 1600×893, the third inline image of `src/lore/prismeri.md`.
- **Tool:** as above, in the same runs. Filed at `-Finish 0`.
- **References:** the same bat, for body plan, proportions and the hanging pose only.
- **Prompt:** the entry of record in `images.md`, as revised for round 2 (the same face changes, and the pair in profile to each other).

### prismeri-first-wings-painting.jpg — not filed; the First Wings stays on Plate I
- **Tool and references:** as above, in the same runs, with the same bat for body plan and hanging pose.
- **Outcome:** all four variations painted a grin of crystal teeth, round 2 under a mouth closed to a line by name, and one per round carried a painted signature in a corner. Fails the people test and the tone rule; nothing filed.

All twelve variations are kept locally in `image-out/prismeri-paintings/round1/` and `round2/`, never committed.

### prismeri-first-wings-painting.jpg — third round, one round only, not filed; handed to Fable
- **Direction:** Dermot's option A, 14 October 2026: keep the two filed paintings and try the First Wings once more so the page matches. The same evening, a change of plan: difficult images may go to Fable, so a failed round stops after one round, with the findings recorded here for the next attempt.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, through `node scripts/image-prompts.js --generate --only prismeri-first-wings-painting`, two variations.
- **References:** `story-bible/reference-art/prismeri-body-bat-2026-10-14.jpg` (body plan and hanging pose only) and `src/images/lore/prismeri-lattice-gathering-painting.jpg` (medium, light and handling only, so the three paintings read as one set).
- **Prompt:** the entry of record in `images.md`, revised for this round: viewpoint above and behind, the head turned away and bent to the glass, the mouth not visible, three countable free clawed fingers on each hand, the earlier face, fur, ear, signature, neck and tail negatives kept.
- **Outcome:** both variations fail; nothing filed, Plate I stays on the Prismeri page. Variation 1 (rear view, head bent to the glass) matches the filed pair's register, but the facet band is painted as a ring of crystal teeth round the back of the skull, each hand has four clawed digits instead of three, and there is a signature in the lower right corner. Variation 2 shows the face from the side and below, with the facet band painted where the mouth would be, as a toothed grin. The finding: across all three rounds, the First Wings grin is the facet band. Whenever the band is described as a row of small crystals near the face, the generator draws it as teeth. The next attempt should describe it as something no mouth resembles, or leave it out of a rear view. Both variations are kept locally in `image-out/prismeri-paintings/round3-first-wings/`.

### prismeri-first-wings-painting.jpg — filed from round 5 variation 1 (rounds 4 to 6, Fable)
- **Direction:** Dermot's rule the same evening that difficult images go to Fable; the third round's findings above were the brief.
- **Type:** generation, Codex art carried on a lore page (Ostrander's painting after Plate I); `src/images/lore/prismeri-first-wings-painting.jpg`, 1600×893, the first inline image of `src/lore/prismeri.md`. Filed with `scripts/import-image.ps1 -MaxEdge 1600 -Finish 0`.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, through `node scripts/image-prompts.js --generate --only prismeri-first-wings-painting`, two variations per round, three rounds.
- **References:** `story-bible/reference-art/prismeri-body-bat-2026-10-14.jpg` (body plan and hanging pose only) and `src/images/lore/prismeri-lattice-gathering-painting.jpg` (medium, light and handling only), unchanged from round 3.
- **Prompt:** the entry of record in `images.md`, as revised for rounds 4 to 6 (its two revision notes of that date). Round 4 ran the facet-band change alone; rounds 5 and 6 ran the full revision, round 6 unchanged from round 5.
- **Outcome:** round 4, no teeth in either variation for the first time, both failing on four-digit hands, variation 1 also on a copied open wing, two prisms and the copied shell, variation 2 on a heavy body filling the frame and conifers. Round 5, variation 1 filed (view from above and behind, seam along the crown, no face, wings folded, hanging by the feet from the spire's ledges; the hands three or four fingers, not plainly three, passed as a lesser flaw than the filed Full Wings' thumb); variation 2 frontal under a flat ledge with the shell copied in. Round 6, variation 1 crouching upright on a ledge with a signature lower right, variation 2 frontal with the shell and dead twig trees. The whole account is in `images.md` under *The First Wings painting filed, 14 October 2026*. All six variations are kept locally in `image-out/prismeri-paintings/round4-first-wings/`, `round5-first-wings/` and `round6-first-wings/`, never committed.

### prismeri-first-wings-painting-2.jpg — filed from round 7 variation 1 (Fable); supersedes the round-5 file
- **Direction:** Dermot, after seeing the round-5 filing: one more round. Opus's review of the filed pick gave the brief (humanoid drift, no match to the pair, the hand count, a possible tail).
- **Type:** generation, Codex art carried on a lore page (Ostrander's painting after Plate I); `src/images/lore/prismeri-first-wings-painting-2.jpg`, 1600×893, the first inline image of `src/lore/prismeri.md`, a new file under the content-locking rule. Filed with `scripts/import-image.ps1 -MaxEdge 1600 -Finish 0`. The round-5 file `prismeri-first-wings-painting.jpg` is removed from `src/images/lore/` in the same change, since the validator fails on an image no page references; it stays in git history.
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, through `node scripts/image-prompts.js --generate --only prismeri-first-wings-painting-2`, two variations, one round.
- **References:** `story-bible/reference-art/prismeri-first-wings-lattice-crop-2026-10-14.jpg` (the left figure of the approved `prismeri-lattice-gathering-painting.jpg`, box 360,70 to 800,760 of the 1600×893 file; the body to paint), `story-bible/reference-art/prismeri-body-bat-2026-10-14.jpg` (the part-open wing pose only) and `src/images/lore/prismeri-lattice-gathering-painting.jpg` (medium, light and handling only).
- **Prompt:** the new entry of record in `images.md`, written for this round.
- **Outcome:** variation 1 filed (the pair's bat-like body, near wing part open with the membrane fully shown, face in profile bent to the prism with no teeth and the seam along the crown, a plain Y of three fingers on the near hand and a three-pronged silhouette through the glass on the far one, nothing trailing, no signature; flaws passed: a small pit on the side of the head, more toes on the feet than fingers on the hands). Variation 2 repeated the lattice composition under a flat ledge with the shell and a beaded brow band, not picked. Both kept locally in `image-out/prismeri-paintings/round7-first-wings/`.

## 2026-10-16 — The thirteen Codex-author portraits, prompts written (Fable), nothing generated

Thirteen prompts written on Fable under the 11 October model split, for the
ready list of `images.md` § 17: the twenty-two Codex authors whose pages
landed on 10 October, less the fourteen kept bare under Dermot's Option A of
16 October, five of whom gained a species line the same day and so moved to
the ready list. The prompts sit under § 17's numbered list in the one shape
`scripts/image-prompts.js` parses, and `--list` reports all thirteen keys as
pending. Nothing generated and nothing filed; no page carries an `image:`
until a frame is filed from the desktop. Shared across the thirteen: a
documentary photograph taken inside the world by a 29th-century camera, 16:9
landscape at 1200×675 through `import-image.ps1 -MaxEdge 1200` at finish
strength 1; the 28 July guardrails, the modesty bar and the standing negative
inside every blockquote; render negatives; each human face chosen against the
filed cast under the 13 October identity rule, with the choice recorded in the
entry; one face per character, the page's second person out of frame where a
scene has one. Readings taken for each frame are Fable's under *Who approves
whom*, Dermot's to overrule, and none is written to a page.

### marlow-calloway.jpg and perrin-ashgrove.jpg — prompts written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a pair of new portraits written in one pass so the two read as one band: the same dock-adjacent common room, evening and light, each frame holding the other's instrument at its edge and never the other's face
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations each, planned; the desktop step is `node scripts/image-prompts.js --generate --only marlow-calloway,perrin-ashgrove`
- **Date:** prompts 2026-10-16; generation pending
- **Source:** `src/characters/marlow-calloway.md`, `src/characters/perrin-ashgrove.md`, `src/glossary/slipwave.md` (strings and percussion, the dock common rooms, Officers with the musician specialization), `src/lore/star-rangers-music-corps.md`, `src/lore/rank-insignia-and-uniform.md` (the shell, a Field Officer's four bars, no name on clothing; no shell colour recorded for the Music Corps), `src/lore/star-rangers-command-hierarchy.md` (the bar count)
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. The Rangers' shell in a dark muted plum-grey with the tab read as a mark and not a count, the instruments given by shape (a shallow-bodied fretted stringed instrument; hand drums as skins over rims) with the stage furniture of our century negated by name, the deck curving up as the hint.
- **Notes:** triage the stage first (amplifier, microphone, cable, drum kit), then the second face, then the uniform, then the pair against each other. Readings: the date 2826 as the ready list gives it with the frame wide enough that the Officer's tab count cannot be read, so the picture asserts neither rank in that year nor a later one; the shell colour; the faces (Marlow tall and lean, dark brown skin, close-cropped black hair; Perrin broad, light olive skin, dark curly hair tied back, a short beard).

### vhen.jpg — prompt written 16 October 2026; three whole-body rounds drew an elephant; round 4, a close frame, GENERATED AND FILED 16 October 2026 (variation 2)
- **Type:** generation, a new portrait of the record's only named Ovruhn, a non-human body from `src/lore/ovruhn.md`
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only vhen`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/lore/ovruhn.md` (the body: a broad, deep-chested quadruped mass, a fan of handling tendrils, no face, flank hide as the ear, small mild eyes; Thavren's shadowless scattered light and the stone's-throw visibility; chorus-keeping; *The Thing Outsiders Get Wrong*), `src/characters/vhen.md`, `story-bible/civilian-dress.md` *Ovruhn* (nothing worn off duty; the proposed hide tones)
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. The body from its page, nothing worn, on a ground of worked bedrock under the haze, the rest of the chorus as unresolved masses beyond focus; the elephant, rhinoceros, hippopotamus, bull, bear, octopus and hybrid refused by name under the 12 October likeness rule.
- **Notes:** triage the Earth animal first (trunk, tusks, horns, a face, a neck, suckers, a stitched hybrid), then the light (any shadow, sun or blue sky fails the page), then a second body in focus, then tone. Readings: a warm grey-brown matte hide; a dozen or so tendrils in two ranks; a low stone kerb for scale; undated, the record's present.

### ilvane.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait of the record's third Krenyi, the kind carried by Syra's filed portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only ilvane`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/ilvane.md` (boundary analyst, 2825 UCSD, a certification she signs and knows), `src/lore/krenyi.md`, `images.md` § 1 (Syra's entry as revised 14 October: symmetry, eye set, open pupils, born not made; Toval's entry for the queue note), `src/lore/rank-insignia-and-uniform.md` (the Survey shell in deep olive, the tab, the certification plate)
- **References:** `src/images/characters/syra.jpg`, for the kind's look only, with the sentence in the prompt that takes nothing else from it
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. A dim instrument gallery of an unnamed boundary post, one viewport onto darkness, a certification sheet in both hands, eyes lifted to the glass so both show the carriers; the grey alien, the elf and the gynoid refused by name.
- **Notes:** triage the kind first (an ordinary human woman, or a grey alien, fails), then identity against Syra's and Toval's filed frames, then the room (screens, dials, cables, stars in the window), then the uniform. Readings: medium-brown skin, black hair cropped very short, an oval face with a long jaw, slight build; the tab's count not given, since her page gives no rank.

### breanainn-o-se.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only breanainn-o-se`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/breanainn-o-se.md` (Ridgemoot chaplain serving Threshold Station, 2831 UCSD, the caution), `src/codex/the-warm-edge-correlation.md`, `src/lore/threshold-station.md` and its filed illustration (the sea wall, the docks' low dark line with three working lights), `story-bible/civilian-dress.md` *Threshold Station* (weatherproof layers; no chaplain's dress on record), `src/lore/the-setts-of-aethelrock.md` (a sett is a clan's, and his clan is not on file)
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. The sea wall at dusk, hands in pockets, looking out over the thin water off Dock Seven with nothing shown in it; clerical dress, the cross and the harbour's present-day furniture refused by name.
- **Notes:** triage the clerical collar and cross first, then the harbour (crane, container, boat, car, lamp post), then anything shown in the water, then the face against Fintan's and Daire's. Readings: late fifties; pale weathered skin, a short grey beard from a dark red, heavy brows; his heritage read as the Union's Irish-descended founders', which the record does not state.

### aoibheann-ni-mheara.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only aoibheann-ni-mheara`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/aoibheann-ni-mheara.md` (Keeper of the Rolls; every line checkable against ground someone can walk), `src/codex/the-courtesy-that-was-withdrawn.md`, `src/lore/planets/tir-na-nog.md` (towns that could pass as pre-industrial, smart-weave, drones at the edge of notice), `story-bible/civilian-dress.md` *Tír na nÓg*
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. A deep window of a plain limewashed registry room, a closed dark-bound volume under her arm, looking out at a dry-stone field boundary and a cut field, one plain grey drone high and still over the land as the hint; the Victorian clerk's furniture refused by name.
- **Notes:** triage the registry first (gilt ledgers, quill, wax seal, spectacles), then the hint (a frame without the drone, or with a lit quadcopter or a helicopter, is not filed), then the view (tractor, wire fence, road, power line), then the face. Readings: 2826 as the ready list gives it, her tenure being undated; sixties; pale skin, white hair pinned low, a long narrow face, grey eyes; heritage as Ó Sé's, with the same caveat; a deep green wool dress and grey wrap.

### sile-ni-bhriain.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only sile-ni-bhriain`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/sile-ni-bhriain.md` (teller for the reader-schools, 2823 UCSD printing; no pronoun given), `src/codex/the-legend-of-saint-aoife.md`, `src/lore/planets/aethelrock.md` (granite, crops under glass, technology in plain sight), `story-bible/civilian-dress.md` *Aethelrock*, `src/lore/the-setts-of-aethelrock.md` (no sett, since the clan is not on file)
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. A granite schoolroom, the teller on a low bench with a closed book on the knee and one hand lifted mid-telling to children out of frame, a sealed heating conduit along the wall and a glass growing house under a bare ridge through the window; the Victorian schoolroom and the bardic costume refused by name.
- **Notes:** triage the schoolroom first (blackboard, slates, desks in rows, a stove, a candle), then the sett and the costume, then a child's face, then the conduit (a radiator or flanged pipe, or none, is no hint), then the face. Readings: fifties; stocky, a weathered square face, cropped grey-streaked brown hair; **written without a pronoun**, since the page gives none, the generator left the choice and the alt to follow the filed frame; heritage as the other Union entries', with the same caveat.

### mireille-achterberg.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only mireille-achterberg`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/mireille-achterberg.md` (no world, no date, the Unit's seat not stated; the paper's turning point), `src/codex/krenyi-longevity-repair-agent.md`, `story-bible/civilian-dress.md` *What follows, by setting* (the habitat professional's default)
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. A plain windowless working room, a single sealed sample housing closed on a bare table, her hands still and her gaze down and aside, the moment after the result; the laboratory of our century refused by name.
- **Notes:** triage the laboratory first (glassware, a white coat, a microscope, racks), then the housing (a hard case or a tablet is no hint), then any window (a view asserts a place the record does not hold), then the face. Readings: the record's present with no year named; late fifties; South Asian heritage, deep brown skin, grey-streaked black hair cut short, chosen against the filed cast since the page states none; charcoal band-collared jacket.

### senna-okoye.jpg and kwame-reyes-osei.jpg — prompts written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a pair of new portraits written in one pass as companion frames: the same Commission on Earth, the same plain high stone room and tall window, 2701 and 2704 UCSD, late summer and winter, seated and standing, so they read as companions without asserting that the two met (the record does not say)
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations each, planned; the desktop step is `node scripts/image-prompts.js --generate --only senna-okoye,kwame-reyes-osei`
- **Date:** prompts 2026-10-16; generation pending
- **Source:** `src/characters/senna-okoye.md` and `src/characters/kwame-reyes-osei.md` (both Historical; a doctrinal desk, not a bench; imperatives and lists), `src/codex/exploration-budget-doctrine.md`, `src/codex/redline-protocol.md`, `src/lore/ai-safety-kernel.md` (the Commission; *humans is who the drafters had met*), `src/lore/solar-system-concord.md` (a Concord body, no fleet), `story-bible/civilian-dress.md` *Earth*
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. Each opens as a documentary photograph and *a reconstruction of a scene from the past* under the 11 October restatement; a single sheet and a pen; the window onto temperate green country and a river with no landmark, since the Commission's seat is not on record; both our century's office and the record's present furniture refused by name, and for Reyes-Osei the military look that *containment* draws.
- **Notes:** History, so exempt from the hint-of-the-century rule, and each entry says so; the period-tech negatives are for a 28th-century Earth that must read as neither ours nor the 29th century's. Triage the office first, then the window, then the dress (and for Reyes-Osei any epaulette or military cut), then the two faces against each other. Readings: Okoye forties, West African heritage, dark brown skin, short natural twists, a rust-red tunic; Reyes-Osei fifties, mixed West African and Latin American heritage, medium-brown skin, close-cropped grey hair and moustache, a slate-blue jacket; both heritages chosen against the filed cast since the pages state only *Earth*.

### ione-marrec.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only ione-marrec`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/ione-marrec.md` (the back of the Eden commissioning hall, 2831 UCSD, the one scene the record gives her), `src/codex/the-captain-who-drove-furiously.md`, `src/lore/fellowship-of-light.md`, `story-bible/civilian-dress.md` *Devotional houses* and *Eden and the Compact habitats*
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. The hall half-emptied after the commissioning, the Sister alone at the back in a plain long grey-blue robe with the hood down, looking down and aside to where the cadet stood, Eden's terraces curving up through the far window as the hint; the nun's habit, the cross and the hall's stage furniture refused by name.
- **Notes:** triage the habit first (wimple, veil, cross, cowl up), then the hall (pews, altar, candles, podium, folding chairs), then any other face in frame (the cadet and the cohort are out of it), then the window (no terraces, or stars, is no hint), then the face. Readings: fifties; Mediterranean heritage, olive-brown skin, a long face with a high-bridged nose, grey-streaked dark hair cropped close, chosen against the filed cast since the page states none; the robe's colour and cut, since no page dresses a Sister.

### meret-kolhaas.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only meret-kolhaas`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/meret-kolhaas.md` (Loss Adjuster, Threshold circuit, 2831 UCSD, thirty-one years in the work; the word in the box), `src/codex/dock-seven-loss-adjustment.md`, `src/lore/threshold-station.md` (harbour weather), `story-bible/civilian-dress.md` *Threshold Station* (civilian; the Guild is not chartered to the Rangers and no page gives it a mark)
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. A small kept claims office, not a dock, since she was not there; a single ruled form, the pen just lifted from the box near its foot, the word beyond focus; rain on the window and two moored hulls dim on grey water; the insurance office of our century refused by name.
- **Notes:** triage the office first (computer, binders, stamp, calculator, mug), then the box (a readable word asserts the form's wording and fails), then the window (container, crane, van, a glow on the water), then the face against Tare's and the filed Threshold portraits. Readings: late fifties; Northern European heritage, fair ruddy skin, a square face, pale blue eyes, iron-grey hair cropped short, chosen against the filed cast since the page states none; a dark brown band-collared jacket.

### ottoline-farr.jpg — prompt written 16 October 2026, GENERATED AND FILED 16 October 2026
- **Type:** generation, a new portrait
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only ottoline-farr`
- **Date:** prompt 2026-10-16; generation pending
- **Source:** `src/characters/ottoline-farr.md` (the record places her nowhere; the 2826 UCSD annotation its only date; the welfare-specialist method; her amusement in interview), `src/codex/bramble-and-the-backwards-key.md`, `src/glossary/smart-pet.md`, `story-bible/civilian-dress.md` (the habitat professional's default)
- **Prompt / recipe:** of record in `images.md` § 17; not duplicated here. A small windowless room, a writer at a plain table with a pen on a sheet and one hand on a short stack of thin plain-covered volumes in muted single colours, a private half-smile down at the page; no ferret, no illustrated cover, no window, each refused by name.
- **Notes:** triage the animal and the picture book first (a ferret, a plush toy or an illustrated cover fails), then the desk (typewriter, computer, lamp, mug), then any window (a view asserts a place), then the face against Kate Ukrainka's filed frame, the Codex's other Smart Pet author. Readings: forties; East Asian heritage, a round face, black hair in a loose low knot, small build, chosen against the filed cast since the page states none; an oatmeal high-necked jumper; no pet in frame, since the page says she writes one and not that she keeps one.

## 2026-10-17 — Arashobal's portrait, prompt written (Fable), nothing generated

One prompt written on Fable under the 11 October model split, for the
character page rewritten the same day (`src/characters/arashobal.md`: a
Chief Ranger of the Survey Corps who ran general operations beside Chief
Pilot Wender, later chief of staff aboard High Captain Wender's command
ship). It sits in `images.md` as § 18, in the one shape
`scripts/image-prompts.js` parses, and `--list` reports `arashobal` as
pending. Nothing generated and nothing filed; the page carries no `image:`
until a frame is filed from the desktop. The form is § 17's: a documentary
photograph taken inside the world by a 29th-century camera, 16:9 landscape
at 1200×675 through `import-image.ps1 -MaxEdge 1200` at finish strength 1;
the 28 July guardrails, the modesty bar and the standing negative inside the
blockquote; render negatives; the kind carried by Syra's filed portrait as
Ilvane's was, with the identity rule applied against every Krenyi filed and
against Lucene-9000; one face in frame. Readings taken are Fable's under *Who
approves whom*, Dermot's to overrule, and none is written to the page.

### arashobal.jpg — prompt written 17 October 2026, GENERATED AND FILED 17 October 2026
- **Type:** generation, a new portrait of the record's fourth Krenyi, the kind carried by Syra's filed portrait; a Ranger on duty, so in uniform
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, two variations, planned; the desktop step is `node scripts/image-prompts.js --generate --only arashobal`
- **Date:** prompt 2026-10-17; generation pending
- **Source:** `src/characters/arashobal.md` (Chief Ranger, Survey Corps, general operations; chief of staff aboard the command ship; older than Syra by her people's reckoning; *no wasted gesture*; speaks at the listener's speed; *keeping the terms stated*), `src/lore/krenyi.md` (long-lived without apparent degradation, the stillness, the body as the instrument), `images.md` § 1 (Syra's entry as revised 14 October: symmetry, eye set, open pupils with the iris ring, living skin, born not made, never the gynoid Lucene-9000; the trope negatives), § 8 (Toval) and § 17 (Ilvane, whose prompt shape this follows), `src/lore/rank-insignia-and-uniform.md` (the Survey shell in deep olive, the Chief's bar-and-ring tab, shapes not words, no name on clothing, decorations a separate mark), `src/lore/star-rangers-command-hierarchy.md` (the tab colour keyed to track: general operations in slate blue; the command ship as a headquarters that moves), `src/characters/karla-wender.md` (High Captain by Season 5, 2831 UCSD)
- **References:** `src/images/characters/syra.jpg`, for the kind's look only, with the sentence in the prompt that takes nothing else from it
- **Prompt / recipe:** of record in `images.md` § 18; not duplicated here. A long low dim staff compartment aboard the command ship, plain matte pale-grey composite with everything stowed behind flush panels and no viewport; standing three-quarters at a chest-high worktable with several pale sheets and one sealed housing with a single unlit indicator, hands still and apart on the table's edge, face turned to a staff officer out of frame so both eyes show the carriers; the deep olive Survey shell with one plain-finished tab carrying a bar and a ring on a slate-blue insert and nothing else; the grey alien, the elf, the gynoid, the admiral's bridge, the medals, the braid and the adviser at a commander's shoulder refused by name.
- **Negatives (the additions for this post, beside Syra's and Ilvane's guard):** wrinkles, grey hair, white hair, an elderly woman, a grandmother, stooped, frail, a fashion model, a young glamorous woman, make-up, a pointing finger, a raised hand; a plait, a braid, a bun, military braid, gold cord, aiguillette, medals, ribbons, decorations, insignia on the chest, a peaked cap, a military dress uniform; a starship bridge, a captain's chair, a command chair, a viewscreen, a star map, a holographic table, a shadowy adviser at a commander's shoulder, a second face in frame, a figure in the background; a window, a viewport, stars, a planet, a nebula.
- **Notes:** triage the kind first (an ordinary human woman, or a grey alien, fails), then identity against Syra's, Ilvane's and Toval's filed frames and Lucene-9000's (dark hair drawn back or a seated pose at a table leaking back fails), then the post (bridge, viewscreen, hologram, star map, a window with stars, a second figure), then the uniform (medals, braid, paired tabs, chest badge, dress uniform), then the age (frail or elderly, or model-young). **Readings, each recorded so the face is nobody else's:** a woman, since the page says *she*; the year 2831 UCSD, Season 5's year, since the page dates neither the move nor the frame; older in bearing and of no placeable age, carried as weight (a fuller-set face, settled authority, the one being listened to) and never as wear, since the kind does not degrade; light warm-olive skin (Syra pale, Ilvane medium-brown); straight ash-brown hair between fair and brown, cut level at the jaw and tucked behind the ears (Syra and Lucene-9000 dark and drawn back, Ilvane cropped to the skull, Toval short and dark; not a plait, which is the military braid refused); a broad face with wide high cheekbones, a wide brow and a short square jaw (Ilvane oval with a long jaw); tall and solidly built, square through the shoulders (Ilvane slight); the iris ring dark grey; standing, since Syra and Lucene-9000 sit at a table; the corps badge left unspecified as Ilvane's and Toval's entries leave it, since a second device draws a chest badge; no decorations, since medals on a chief of staff are the admiral the record refuses.
- **Run:** three rounds of two on Gemini `gemini-3.1-flash-image`, 2K, 17 October 2026, on Opus. Round 1 and 2 drew the frame too wide for the Krenyi carriers, and each round's first variation read as a shop dummy (Dermot); round 2 variation 2 carried the eyes but drew two collar tabs. Round 3 used that face as the reference (`story-bible/reference-art/arashobal-face-2026-10-17.jpg`) and asked for one tab; variation 1 filed at his pick, cropped to 16:9 to remove a foreground figure. The tab shows a ring only.

## 2026-10-19 — *The Elves of Wood, Sky and Water*, codex title card

No generator prompt: a deterministic card from `make-codex-cover.ps1`, in the
house template, for the Codex entry filed at Dermot's *2 A* the same evening.
The serif line carries the publisher and the capitals line the author, as on
*Redline Protocol*. The word *elves* on the card is the title's, which is the
author's; the record never adopts it. Checked at full size after drawing. The
author's page carries no portrait, since the record says nothing of the body.

```powershell
.\scripts\make-codex-cover.ps1 -TitleLines "THE ELVES OF","WOOD, SKY AND WATER" -Category "CULTURAL RECORD" -Subtitle "A traveller's sorting, with the desk's note" -Institution "Westminster Ring Press, New London" -Author "ROSAMUND HALLAM" -Stamp "FILED WITH NOTE" -Motif rules -Out src\images\codex\the-elves-of-wood-sky-and-water.jpg
```

## 2026-10-23 — *What Still Does Work*, codex title card

No generator prompt: a deterministic card from `make-codex-cover.ps1`, in the
house template, for Sevrane's Codex entry (PR #1414; issue #1415). The stamp
*UNCONVERTED* is the receiving desk's word for the dates. Checked at full size
after drawing.

```powershell
.\scripts\make-codex-cover.ps1 -TitleLines "WHAT STILL","DOES WORK" -Category "CULTURAL RECORD" -Subtitle "A Krenyi account, in their own count" -Institution "Set down at the Survey Archive, Threshold Station" -Author "Sevrane, Nai" -Stamp "UNCONVERTED" -Motif rules -Out src\images\codex\what-still-does-work.jpg
```

## 2026-10-23 — The powered load frame, inline lore figure

### powered-load-frame.jpg — prompt written 23 October 2026, GENERATED AND FILED 23 October 2026
- **Type:** generation, an artefact (job kit, not uniform) worn by an anonymous Ranger seen from behind; an inline figure in *What the Shell Does, and Where It Stops*
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, one round of four; `node scripts/image-prompts.js --generate --only powered-load-frame`
- **Source:** `src/lore/rank-insignia-and-uniform.md` (*It does not move her*: kit issued by the Engineering and Safety Corps, worn over the shell, joints lock safe without power, built to lift and brace, not to strike, nothing lit)
- **References:** none
- **Prompt / recipe:** of record in `images.md` § 27; not duplicated here.
- **Run:** variation 1 filed at strength 1 through `import-image.ps1 -MaxEdge 1600` (issue #1431). Variation 3 failed the modesty bar on its pose; 2 hid the frame behind the body.

## 2026-10-26 — Pelagos Minor, lore header, prompt written (Opus), nothing generated

### pelagos-minor.jpg — prompt written 26 October 2026; filed the same day
- **Type:** generation, a place (a world's evacuation basin after the Basin Collapse, nobody in frame); header image for `src/lore/planets/pelagos-minor.md`
- **Tool:** `node scripts/image-prompts.js --generate --only pelagos-minor --variations 4`, gemini-3.1-flash-image at 2K (Opus, desktop)
- **Source:** `src/lore/planets/pelagos-minor.md` and *The Order of Evacuation* (S01E03C04): the equatorial basin, the escarpment above the floodline, three lost launch corridors, the water settled in a false calm over the neighbourhoods; launch cradles per `src/lore/ascent-javelins.md`
- **References:** none
- **Prompt / recipe:** of record in `images.md` § 43; not duplicated here.
- **Run:** one round of four, 26 October 2026. **Variation 3 filed** through `import-image.ps1 -MaxEdge 1600` at strength 1 (1600×893). It passes the § 43 triage in order: no wreckage or bodies, no tower, nobody in frame, nothing of Earth, three straight corridors with the nearest above water and carrying small tilted cradles, the shelters kept and unlit, a pale dawn sky. Variations 1, 2 and 4 drew four corridors, or cradles on the far corridors as well, and were not taken. Dermot saw all four on the contact sheet and called them ready for triage.

## 2026-10-26 — Portrait run, two rounds (Opus, desktop)

Nine prompts written in `images.md` §§ 36 to 44 and never generated were run on 26 October 2026 with `node scripts/image-prompts.js --generate --variations 4 --only …`, gemini-3.1-flash-image at 2K, and judged against each entry's own triage; Dermot picked among the frames that passed. Each entry's note in `images.md` records what every round drew.

- **Filed, round 1:** `meril-duskkin.jpg` (variation 4), `tavin-ledgekin.jpg` (3), and the lore header `pelagos-minor.jpg` (3, above).
- **Filed, round 2** after a rendering revision (Opus): `vela-of-the-seam.jpg` (1), `hollis-orme.jpg` (3), `oshek-var.jpg` (1).
- **Not filed after two rounds:** `kesta-ul.jpg` and `second-outwork.jpg`, both drawn as tortoises; each needs a body revision.
- **Refused by the filter twice:** `elsha-rootkin.jpg`.
- **Held back, not run:** `pekkat.jpg`, `vaurel.jpg` and `rhuven.jpg`, each already past two failed rounds on 24 October and owed a revised prompt.
- **Prompts of record:** as revised in `images.md` on this date; the generator sent each entry's blockquote verbatim.

## 2026-10-26 — Portrait run, round 3: references and edits (Opus, desktop)

At Dermot's *"Yes: reference-led generation for Kesta Ul, Second Outwork and Rhuven, edit-from-filed-frame for Pekkat and Vaurel, and a shortened prompt for Elsha."* Same model and size as the run above, four variations each.

- **Reference-led, filed:** `kesta-ul.jpg` (variation 3, reference `sethka-ru.jpg`) and `second-outwork.jpg` (variation 4, reference `sixth-course.jpg`). The prompts of record are the `images.md` entries as revised this date, sent verbatim with the reference.
- **Reference-led, refused by the filter:** `rhuven.jpg` (reference `vhen.jpg`).
- **Shortened, refused by the filter:** `elsha-rootkin.jpg`, a third refusal.
- **Edited from a filed frame, not filed:** `pekkat.jpg` from `tikket.jpg` (a beetle with a face-like head) and `vaurel.jpg` from `sohrel.jpg` (a near miss on one limb tip). The edit instructions, sent with the source frame to the same model, are in each entry's note in `images.md`; the run used a one-off script outside the repository.

## 2026-10-26 — Vaurel by the 3D pipeline (Opus, desktop)

### vaurel.jpg — filed 26 October 2026
- **Type:** a 3D blockout made photographic; portrait for `src/characters/vaurel.md`
- **Tool:** Blender 5.2 (`scripts/blockouts/vaurel.py`, Cycles render, 1600×900), then gemini-3.1-flash-image at 2K as an image edit of the render, four variations
- **Source:** `story-bible/species-design.md`, *Cerebraun* (the body plan); `images.md` § 33, Vaurel (the scene)
- **References:** the blockout render only; no filed frame
- **Prompt / recipe:** the edit instruction of record is in `images.md` § 33 under Vaurel; not duplicated here.
- **Run:** all four variations kept the body; variation 3 chosen by Dermot, cropped to 62% of the width around the body, filed through `import-image.ps1 -MaxEdge 1200` at strength 1.
- **Why this route:** two text rounds and three edits drew an octopus, then an elephant. The blockout fixes the shape; the edit supplies skin, light and grain.

## 2026-10-27 — Vaurel, second pass by the 3D pipeline (Opus, desktop)

### vaurel-2.jpg — filed 27 October 2026, superseding vaurel.jpg
- **Type:** a 3D blockout made photographic; portrait for `src/characters/vaurel.md`, superseding the 26 October frame (removed from `src/images/`, kept in git and in `images.md` § 33)
- **Tool:** Blender 5.2 (`scripts/blockouts/vaurel-2.py`, Cycles render, 1600×900), then gemini-3.1-flash-image at 2K as an image edit of the render
- **Source:** `story-bible/species-design.md`, *Cerebraun* (the body plan); `images.md` § 33, Vaurel (the scene)
- **References:** the blockout render only; no filed frame
- **Prompt / recipe:** the round-4 edit instruction of record is in `images.md` § 33 under `vaurel-2.jpg`; not duplicated here.
- **Run:** four rounds of four (one round-4 request timed out at the provider). Round 1 drew fingers on a slab in a miniature diorama; round 2 a headless crouching torso; round 3 a disc body whose raised limb sat on the back unattached; round 4, with the limb rooted in the body, variation 3 chosen by Dermot from a labelled sheet, filed uncropped through `import-image.ps1 -MaxEdge 1200` at strength 1.
- **Why a second pass:** Dermot read the first frame as *"a child's model of a Cerebraun"*: no scale, no shadow, uniform tubes. Scale, hard light and skin are now fixed in the geometry, not left to the edit.

## 2026-10-27 — Idrun Hesk, blockout attempts (Opus, desktop), nothing filed

- **Target:** `idrun-hesk.jpg`, to replace the 24 October thermal frame, which Dermot read as a slug
- **Tool:** Blender 5.2 (`scripts/blockouts/idrun-hesk.py`), then gemini-3.1-flash-image at 2K as a thermal-band image edit of the render
- **Run:** one edit round, three of four returned (one refused by the provider's content filter): rectangular vanes read as lit signboards on a train, a crest vane as a visor. A second blockout with upright fan-ribbed vanes read as a sail-back and was not sent. Not filed; the frame of 24 October stands.
- **Next:** a body-design pass under `people-body-design` before another prompt or blockout. Recorded in `images.md` § 31.

## 2026-10-28 — Pekkat, blockout attempts (Opus, desktop), nothing filed

- **Target:** `pekkat.jpg`, the last owed portrait of § 33 (issue #1457)
- **Tool:** Blender 5.2 (`scripts/blockouts/pekkat.py`, Cycles, 1600×900), then gemini-3.1-flash-image at 2K as an image edit of the render, three rounds of four (twelve frames)
- **Run:** no face in any frame, the failure that stopped the 24 and 26 October rounds; every frame failed on the nearest Earth thing and the model surface (a beetle figurine, then a rubber beetle toy, then a beetle or woodlouse model). Not filed.
- **Next:** a body decision under `people-body-design`, not another roll. Recorded with the round-3 edit instruction in `images.md` § 33.

## 2026-10-29 — Pekkat, the one fundamental difference (Opus, desktop)

### pekkat.jpg — filed 29 October 2026
- **Type:** generated portrait for `src/characters/pekkat.md`, a close frame on one foreleg and the carapace rim, the head out of frame
- **Tool:** gemini-3.1-flash-image at 2K via `node scripts/image-prompts.js --generate --only pekkat --variations 4`, imported with `import-image.ps1 -MaxEdge 1200` at finish strength 1
- **Source:** `src/lore/chthonari.md` (the vibration-sensing organs *distributed along each limb and the lower carapace*); `images.md` § 33, Pekkat; the Earth-creature convention in `images.md`, *Conventions* (29 October 2026)
- **References:** none; the 26 and 28 October rounds with references or a blockout came back as models
- **Prompt / recipe:** the prompt of record in `images.md` § 33 under `pekkat.jpg`, round 2's text; not duplicated here.
- **Run:** two rounds of four. Round 1 drew the ridges as a painted stripe on a rubber model; round 2, with a hard pitted surface and the ridges as rows of domed organs, gave variation 4, filed at Dermot's pick.

## 2026-10-29 — Rhuven and Elsha Rootkin, Grok Imagine stills (Opus, Dermot's Chrome), nothing filed

- **Tool:** Grok Imagine, Image mode, 16:9, under the 24 October grant; prompts shortened subject-first, recorded in `images.md` §§ 34 and 42
- **Rhuven:** one round; no refusal, but every frame a horse's back with the shell as a saddle and the limbs hanging like fingers. Next is a body question, not a roll.
- **Elsha Rootkin:** two rounds, the first requests the filter passed. Round 1 drew Earth leaves with studs down each midrib; round 2, the nodes moved to the rim and the midrib dropped, drew bead-rimmed fan vanes with no Earth leaf, but every vane whole and the hide like a tarpaulin in two frames. Near miss, round 2 variation 2.
- **Files:** nothing downloaded; the batches stay with the generator.
- **Later the same day:** Elsha Rootkin rounds 3 and 4 (the two extra rounds a near miss earns): round 3 cropped every vane and made the hide a body, but read as *"a potato sprouting ferns"* (Dermot); round 4 removed the mound and rooted each vane in a collar of hide, but put the beads down the midribs. Rhuven, option A of the body review (Vhen's flank framing): a horse's flank with strap-like tendrils. Nothing filed; an artist's impression is open for both under the rule of the same day.

## 2026-10-29 — Rhuven and Elsha Rootkin, artist's impressions (Opus, Dermot's Chrome)

### rhuven.jpg — filed 29 October 2026
- **Type:** an artist's impression (gouache survey plate), portrait for `src/characters/rhuven.md`, under `images.md`, *When a photograph keeps failing*
- **Tool:** Grok Imagine, Image mode, 16:9; saved from the page at Dermot's word; `import-image.ps1 -MaxEdge 1200 -Finish 0`
- **Prompt / recipe:** impression round 2 in `images.md` § 34, verbatim
- **Run:** two impression rounds of four; round 1 an elephant, round 2 variation 2 chosen.
- **Removed 9 November 2026** at Dermot's *"Remove the existing portrait for Rhuven"*, because it *"failed on aesthetics"*; the page is bare (`images.md` § 34).

### elsha-rootkin.jpg — filed 29 October 2026
- **Type:** an artist's impression (gouache survey plate), portrait for `src/characters/elsha-rootkin.md`, under `images.md`, *When a photograph keeps failing*
- **Tool:** Grok Imagine, Image mode, 16:9; downloaded by Dermot from the Library; `import-image.ps1 -MaxEdge 1200 -Finish 0`
- **Prompt / recipe:** impression round 2 in `images.md` § 42, verbatim
- **Run:** two impression rounds of four after four Grok photographic rounds; impression round 2 variation 2 chosen.


## 2026-11-10 — Military Space Command card relettered

- **`lore/military-space-command.jpg`** (#1763), redrawn by `scripts/make-emblem-card.ps1` so its qualifier no longer names *technocracy*, after Dermot's ruling of 10 November that it counts as a named ideology. Only that line changed: *A benevolent technocracy that could not last* became *A benevolent rule by experts that could not last*. The original 12 August run recorded neither its tint nor its accent; the accent is the script's default, and the tint was recovered by sampling the old card, where `#1B2232` matched it to JPEG noise. Finish 0.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\military-space-command.md -Device chevron -Tint '#1B2232' -Epithet 'Before the Star Rangers' -Qualifier 'A benevolent rule by experts that could not last'
```

## 2026-11-12 — the century set of eleven (Opus, desktop)

Dermot flagged seven filed frames and asked for a review of four more, then *"Yes remake or repair each one please"*. Each was run through the image critic; the full record of each round is under the frame's entry in `images.md`, and each old frame is a 480-pixel negative example in `story-bible/negative-examples/`. Tool: `gemini-3.1-flash-image` at 2K through `node scripts/image-edit.js` (two takes a round), imported with `import-image.ps1` at finish strength 1 (`-MaxEdge 1600` for lore, `1200` for portraits). No references were sent. The prompts are recorded here verbatim, since `image-edit.js` reads them from files outside the repository.

### lore/generalised-quantum-mechanics.jpg — filed 12 November 2026
- **Kind:** generation
- **Run:** Round 1 of 2, variation 2 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus at standing eye height: an ordinary quantum optics bench in a quiet working laboratory aboard a habitat in the year 2826, unattended. A long low bench of pale matte composite, one seamless piece with rounded edges, stands on two solid plinths that grow out of the floor; along its top runs a single smooth sunken channel, and seated in the channel at uneven intervals are five small optical elements, each a plain round lens or aperture held in a smooth one-piece pale housing that rises from the channel without any screw, knob, clamp or bolt. At the far end of the channel sits a small sealed matte housing with rounded corners and one tiny pale indicator, the detector, with no cable anywhere: nothing connects to anything by wire. The room is pale matte composite, walls meeting the floor in a rounded cove, and through a tall window on the left the inner curve of the habitat rises in the distance, cultivated terraces climbing up and over, the one thing that could only be this century. Light is daylight from the window and soft diffuse light from no visible source.
>
> Name and refuse the stock objects: no aluminium extrusion rail, no optical breadboard with holes, no posts, no thumbscrews, no knobs, no C-clamps, no table clamps, no bolts, no cable, no wire, no stainless steel, no laser beam drawn in the air, no glowing beam. Clean and kept: no dust, no grime, no wear. No lamp, no light strip, no ceiling panel, no light fitting of any kind in frame. No screens, no monitors, no holograms. No text, letters, numerals, logos or signage anywhere. A real photograph: fine grain, a real lens, honest daylight; not a render, not CGI, not a film set, not a miniature.

### lore/the-scope-of-physical-law.jpg — filed 12 November 2026
- **Kind:** edit of the filed frame
- **Run:** One edit round of 2, variation 2 filed.
- **Prompt:**

> Edit this photograph. Change only the surfaces of the four plain wooden boxes: remove every paint spatter, splash, scrape and stain from them, so each is clean, kept plain wood with its natural grain and honest edges. Keep everything else exactly as it is: the composition, the six boxes and their sizes and positions, the two pale composite boxes, the grey housing with its small light, the table, the window, the room, the light, the grain. Add nothing. No text anywhere.

### lore/what-the-record-refuses.jpg — filed 12 November 2026
- **Kind:** generation
- **Run:** Round 1 of 2, variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus at standing eye height, looking straight in: a small, quiet store room aboard a habitat in the year 2826, everything squared away. Plain shelving of pale matte composite, seamless and rounded at every edge, set into the walls in three bays. On the shelves, few things, each well apart from the next and nothing labelled: low sealed housings of pale grey composite with rounded corners and honest seams; neat stacks of folded plain cloth in muted grey and undyed linen; a row of plain clear sealed canisters holding pale sand, small seeds and grey grit; coils of smooth pale line wound on plain reels. The middle bay of shelves stands completely empty and swept clean, every shelf bare, the clear centre of the picture. The room's walls and floor are pale matte composite meeting in a rounded cove, and the room simply has light in it, soft and even, from no visible source.
>
> Name and refuse the stock objects: no face masks, no respirators, no masks of any kind, nothing shaped like a face; no paper or plastic cups, no mason jars, no screw-top lids, no cardboard, no MDF, no chipboard, no plastic storage crates, no tape, no doorway, no other room visible, no wooden furniture. Clean and kept: no dust, no grime, no scuffs. No lamp, no light strip, no ceiling panel, no bulb, no light fitting of any kind. No screens. No text, letters, numerals, labels, logos or signage anywhere. A real photograph: fine grain, a real lens, honest light; not a render, not CGI, not a film set, not a miniature.

### lore/made-minds-and-the-ai-safety-archetype.jpg — filed 12 November 2026
- **Kind:** edit of the filed frame
- **Run:** One edit round of 2, variation 2 filed.
- **Prompt:**

> Edit this photograph. Change only the surface of the middle door, the dark moulded composite one: remove every smudge, wipe mark and stain so it is an even, clean, kept matte dark grey, with its moulding and rounded corners unchanged. Also remove the small pale scuff marks from the old wooden door on the left, keeping its grain, planks and iron latch. Keep everything else exactly as it is: the three doors, their shapes and positions, the latches, the pale right-hand door, the wall, the floor, the light, the grain. Add nothing. No text anywhere.

### lore/eden-bureau-uniform.jpg — filed 12 November 2026
- **Kind:** generation
- **Run:** Round 1 of 2, variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, seen from just inside an apartment doorway, the door edge soft in the near foreground: a civil detective of Eden Space Habitat in the year 2827, a man in his late thirties, standing on the curved residential deck outside, head turned along the deck toward someone out of frame, hands empty at his sides, never posed to camera. He wears the bureau's working jacket: plain, single-breasted, of matte muted blue-grey woven cloth, a low band collar, a closure with no visible buttons or fastening, cut easy for a long shift, over a plain soft high-necked top of the same family of greys and plain straight trousers of matte dark grey cloth with no pockets on the legs. At his collar sits one small plain painted shape, a pale rounded mark matching the small painted wayfinding shapes beside each door along the deck. The deck curves gently away; its floor is seamless pale composite, and the apartment doors along it are flush pale panels with rounded corners and a small recessed pull, set into the wall without frames. The deck is clean and kept, the light soft and even from no visible source, and at the far end the deck's curve opens onto the habitat's green terraces rising overhead.
>
> Name and refuse the stock objects: no chore coat, no workwear jacket with patch pockets, no buttons, no denim, no cargo trousers, no leg pockets, no lever door handles, no door frames, no hinges, no timber decking, no boardwalk, no railing, no rivets, no screws, no stainless steel. Clean and kept: no grime, no stains, no wear on the doors. No lamp, no light strip, no ceiling panel, no light fitting. No text, letters, numerals or signage anywhere; the shapes are wordless. A real photograph: fine grain, a real lens, honest light; not a render, not CGI, not a film set.

### lore/new-cotswolds.jpg — filed 12 November 2026
- **Kind:** generation
- **Run:** Round 1 of 2, variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, standing eye height, deep focus: the main street of a working village of New Cotswolds, a human farming country in another galaxy, on an overcast late afternoon. Honey-coloured limestone houses with steep stone-tile roofs line both sides of a clean, gently curving street of pale dressed stone, laid seamless with no kerbs, paint or markings. The village is lived in and busy in a quiet way: two or three people in plain matte work clothes going about their day, unhurried, one carrying a covered basket; a small, low, well-made yard robot of pale composite and dull metal trundling along the street edge with a tray of seedlings; warm light already in a few deep-set windows. Between the houses, beyond the end of the street, the wolds rise in kept green fields and drystone walls. The houses are old in form and new in make: sharp clean stone, every wall straight, glazing set flush and nearly invisible, no gutters, pipes, wires, aerials or poles anywhere. The one thing that could only be this century: high over the far ridge, a slim pale beacon tower of smooth composite, with nothing on it, marking the fold corridor.
>
> Name and refuse the stock objects: no cars, no vans, no tractors, no asphalt, no road markings, no kerbs, no street lights, no lamp posts, no telegraph poles, no wires, no satellite dishes, no aerials, no signage, no shop signs, no telecoms mast, no wind turbine, no cattle in the foreground, no field gate. Clean and kept: no litter, no mud, no weeds, no neglect. No text, letters, numerals or signage anywhere. A real photograph: fine grain, a real lens, honest overcast light; not a render, not CGI, not a film set, not a miniature.

### lore/quantum-computing-and-the-cavern-constraint.jpg — filed 12 November 2026
- **Kind:** generation, then an edit
- **Run:** Round 1 read as a render. Round 2 is the round 1 prompt followed by the paragraph below it; variation 1 was then edited by the third prompt to remove the blue glow, and that edit's variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, standing eye height, deep focus: a quantum computer in its sealed cavern deep under quiet rock, in the year 2826. The cavern is large, dry and engineered: its natural rock walls are sealed under a smooth pale matte lining that follows the rock's broad curves, and the floor is a level seamless pale composite. At the centre of the floor, on a broad low isolation plinth, stands the machine, and it must read at once as a quantum computer: a tall cylindrical cryostat vessel of brushed pale metal and matte composite, about twice a person's height, with rounded ends and honest seams, and set into its side a tall narrow viewing port through which the inside can be seen, a hanging chandelier of nested horizontal discs stepping down smaller and smaller, joined by many fine bright gold lines, the coldest stage at the bottom. A few thin pale conduits run from the vessel's top straight up into the lining, neat and parallel. A single technician in plain matte work clothes stands at a short distance with a slim matte record sheet in hand, giving the machine its scale. The cavern simply has light in it, soft and even from no visible source; nothing glows except a very faint cold blue at the lowest stage behind the port.
>
> Name and refuse the stock objects: no electrical cabinet, no switch box, no grey steel locker, no server racks, no blinking lights, no screens, no monitors, no cables on the floor, no ladders, no scaffolding, no raw wet rock, no mud, no puddles. Clean and kept: no dust, no grime. No lamp, no floodlight, no light fitting, no light strip. No text, letters, numerals, logos or signage anywhere. A real photograph: fine grain, a real lens, honest light; not a render, not CGI, not a film set, not a miniature.

Round 2 added:

> It must be an actual photograph, not an illustration: shot handheld on a real camera at standing eye height, visible film grain, slight lens vignetting, the rock lining showing honest real texture and small tonal variation, the technician's clothes creased, real dust-free but lived-in working space with a low composite rail around the plinth and a folded stool beside it, the light slightly uneven across the cavern as it really is. Not symmetrical, not centred: the machine stands a little left of centre, seen at a three-quarter angle. Not a render, not CGI, not a 3D visualisation, not concept art, not a film set.

The edit:

> Edit this photograph. Change only the inside of the tall narrow window in the machine: remove the blue glow entirely, so the stepped gold discs and fine gold lines inside are seen by the cavern's own soft light, nothing inside glowing at all, the bottom stage the same plain dull gold as the rest. Keep everything else exactly as it is: the machine, its shape and seams, the rail, the step, the technician, the cavern, the light, the grain. Add nothing. No text anywhere.

### characters/lev.jpg — filed 12 November 2026
- **Superseded 15 November 2026:** the file at this path is now Lev grown, under *A child is pictured grown* (`CLAUDE.md`). Its prompt and filing notes are under `lev.jpg` in `images.md`. The frame this entry records is withdrawn, not failed, and stays in git history.
- **Kind:** generation
- **Run:** Round 1 drew the capsule as an ovoid that read as an egg; round 2 (this prompt), variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the boy's face in the upper third of the frame, at his eye height: Lev, a boy of about eight on Eden Space Habitat in the late summer of 2827, walking along a pale curving residential deck, seen three-quarters from the side, his eyes on where he is going and never on the camera, carrying a holding capsule in both arms against his chest, serious and a little pleased with himself, never posed to camera. He wears a plain soft grey jumper and plain dark trousers. The capsule is a hyper-sealed electrostatic holding capsule: a low, squat, rounded-oblong case of pale matte composite about the size of a loaf of bread, flat-bottomed and wider than it is tall, its corners softly rounded like a river pebble but never egg-shaped or round, no handle, no grille, no mesh, no door, no latch, no openings, with a faint fine seam around its middle and one tiny pale indicator; it is carried in the crook of both arms the way a child carries something he has been trusted with. Behind him, soft and out of focus, three adults in plain clothes have stopped on the deck and are watching him go. The deck curves gently away; walls and floor are seamless pale composite meeting in a rounded cove, the doors flush panels with rounded corners, and at the deck's far end a wide window band opens onto the habitat's green terraces rising overhead. The light is soft and even from no visible source.
>
> Name and refuse the stock objects: no pet carrier, no cat carrier, no grille, no mesh, no crate, no cage, no handle, no box with a door, not an egg, not an ovoid, not a ball, no lever handles, no door frames. Clean and kept. No ceiling panels, no light strips, no lamps, no light fittings of any kind in frame. No screens. No text, letters, numerals or signage anywhere. A real photograph: fine grain, a real lens, honest light, natural skin; not a render, not CGI, not a film set.

### characters/noah-adeyemi.jpg — filed 12 November 2026
- **Kind:** generation
- **Run:** Round 1 of 2, variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: Noah Adeyemi, a young Black man of nineteen or twenty, a resident of Eden Space Habitat in the year 2827, standing on the curving residential deck outside his own closed door, his hands empty at his sides, half-turned toward someone out of frame and about to speak, never posed to camera. He wears his own plain clothes: a loose soft overshirt of matte undyed linen with a low band collar and a closure that shows no buttons, sleeves pushed to the forearm, over a plain soft top, and easy trousers of matte grey cloth. Beside the door on the deck floor stands his plant: a young Eden strawberry runner growing in a low, plain, hand-thrown pot of pale fired clay, a few trefoil leaves and one small white flower, clearly tended. The door is a flush pale panel with rounded corners and a small recessed pull, set into the wall without a frame; the deck's walls and floor are seamless pale composite meeting in a rounded cove, and the deck curves away behind him to a window band onto the habitat's terraces. The light is soft and even from no visible source.
>
> Name and refuse the stock objects: no button-down shirt, no visible buttons, no collar points, no ficus, no houseplant, no plastic pot, no door frame, no hinges, no lever handle. Clean and kept. No lamp, no light strip, no ceiling panel, no light fitting. No screens. No text, letters, numerals or signage anywhere. A real photograph: fine grain, a real lens, honest light, natural skin; not a render, not CGI, not a film set.

### characters/priya-nakamura.jpg — filed 12 November 2026
- **Kind:** generation
- **Run:** Round 1 of 2, variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: Detective Priya Nakamura of Eden Space Habitat's detective bureau, a young Japanese woman in her late twenties, standing at a low table in the bureau's records room in the year 2827, looking down at what is laid out in front of her and writing, never posed to camera. She wears the bureau's working jacket: plain, single-breasted, matte muted blue-grey woven cloth, a low band collar, a closure with no visible buttons, zip or fastening, with one small pale tab at the collar. In one hand she holds her record, a slim bound set of matte pale sheets with a plain cover, like a thin book; in the other a plain slim stylus. On the table in front of her, in a shallow tray of pale composite with rounded edges, lie six small clear sealed sleeves in a row, each holding one small object and one small blank pale card: a slim stylus, a small clip, a spoon, a small reel of tape, a pair of glasses, and a small hand seal with a turned wooden handle. The room is seamless pale matte composite, walls curving into the ceiling, low flush cabinets behind her; the room simply has light in it, soft and even, from no visible source.
>
> Name and refuse the stock objects: no spiral notebook, no spiral binding, no ballpoint pen, no ziplock bags, no zip seals, no sticky notes, no bulldog clip, no steel tray, no hinged metal case, no zipped jacket, no factory overalls. Clean and kept. No light strip, no glowing line, no ceiling light panel, no lamp, no light fitting of any kind; nothing in the room glows. No screens. No text, letters, numerals or signage anywhere. A real photograph: fine grain, a real lens, honest light, natural skin; not a render, not CGI, not a film set.

### characters/zhulik.jpg — filed 12 November 2026
- **Kind:** generation
- **Run:** Round 1 of 2, variation 1 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, at a cat's-eye height from a little way off, deep focus, not centred: Zhulik, a young grey-and-white cat with no collar, in a family's small berth on Eden Space Habitat in the spring of 2827, crouched on the top of a low built-in storage unit of pale matte composite with rounded edges, one forepaw resting on his latest find and looking straight at the camera, caught and unrepentant. Spread loosely on the unit's top around him, as a cat leaves things rather than as anyone arranged them, lies his hoard: a slim stylus, a small wooden reel of thread, a spoon, a pair of glasses, a small clip, and under his paw a small hand seal with a turned wooden handle. Behind him the berth is lived in and plain: seamless pale walls meeting the floor in a rounded cove, a folded blanket of undyed wool on a low bench, a child's soft jumper dropped on the floor, a narrow window onto the habitat's terraces. The room simply has light in it, soft and even, from no visible source, with daylight from the window.
>
> Name and refuse the stock objects: no cabinet with doors, no steel furniture, no rubber stamp with a rubber pad, no cat tree, no litter tray. No light strip, no glowing line, no cove lighting, no lamp, no ceiling panel, no light fitting of any kind; nothing glows. No screens. No text, letters, numerals or signage anywhere. A real photograph of a real cat: fine grain, a real lens, natural fur, honest light; not a render, not CGI, not a catalogue shot, not symmetrical, not a studio.

### characters/edvin-thorsby.jpg — filed 13 November 2026
- **Kind:** generation
- **Run:** Round 2 of 2, variation 4 filed.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, at work, never posed to camera, nothing that invites the viewer. Star Rangers service dress, plain and well kept, carrying small geometric rank marks only - a plain-finished tab at the collar with four short bars and a single muted slate-blue insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Edvin Thorsby, a tall thin clean-shaven man in his late forties of East African heritage, close-cropped hair grey at the temples, standing alone at a plain desk in a long narrow compartment of a space platform, upper body, three-quarter profile, head bent to a bound log of plain pale matte sheets lying open on the desk, its pages seen at a low angle so that nothing on them can be read, one hand flat on the desk beside it. Along the wall behind him a row of smooth rounded matte grey capsules set flush into the wall itself, seamless and of a piece with it, each with one small unlit indicator point, all the same colour; no cables, no conduit, no glands, no screws, no hinges, no handles, no screens and no dials. The compartment is lit evenly from no visible source, its ceiling a plain unbroken pale curve with nothing set into it, clean, kept, seamless, with a plain closed hatch at the far end and nobody at it. Unhurried, exact, entirely ordinary; not a crisis and not a command deck. Warm neutral palette. Photographed, not rendered: real skin with pores and lines, real cloth with its weave, a fast lens near wide open with slight softness toward the corners, fine high-ISO grain in the shadows. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on the log, on equipment, on walls or on the hatch; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting, ceiling panel or bulb; no electrical enclosures, junction boxes, breaker panels, server racks or cable trays; no window and no stars; no second person; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no dials, gauges, switches or status lights that glow; no office chair, desk lamp, anglepoise, tablet, laptop, keyboard or stack of paper; no grime, rust, rivets, louvres or exposed cabling; no weapons; no beard. Render negatives: 3D render, CGI, video-game render, concept art, airbrushed, over-smooth or waxy skin, plastic sheen. 16:9 landscape.

### lore/hub-fly.jpg — filed 15 November 2026
- **Kind:** generation
- **Run:** Round 2 of 2, variation 2 filed, cropped from 16:9 to 3:2 (448 px off the left).
- **Source:** `story-bible/images.md` § 52 (the hub fly, written 14 November 2026 for `ecology-design.md`'s *Habitat axes — life near the weightless line*); page `src/lore/habitats-and-the-worlds-beneath-them.md`, *What Lives Near the Axis*.
- **Prompt:**

> Close-up documentary photograph taken by a 29th-century maintenance technician with a handheld camera at close focus, 3:2 landscape, inside the non-rotating weightless hub of a large habitat in Earth orbit in the year 2826, where nothing has weight. A smooth pale grey composite water pipe, about the thickness of a forearm, crosses the frame diagonally and meets a plain pale duct wall at a seamless moulded joint, everything clean, kept and plainly made, with no visible fixings. The pipe is cold, and its surface is beaded with condensation: small clear drops sitting on it as round domes that never sag, run or drip, because nothing pulls them, scattered evenly over the top, sides and underside of the pipe alike; the drops on the underside are the same low, flat-bottomed domes as those on the top, none of them bulging, swelling, hanging or pear-shaped. Along the seam where the pipe meets the wall, a thin dull film has built up in the wet, cream fading to pale grey-green, matte, slightly uneven, with a few very fine pale fungal threads at its edge, like the film in a long-used shower seal. On the pipe beside the film, sharp at the point of focus, one small ordinary dark grey-brown fly of the gnat or small house-fly kind, about five millimetres long, with clear wings folded flat over its back. It is holding on to what the frame would call the underside of the pipe, in plain view and at an angle to the frame, legs splayed wide and pressed flat to the surface, the way an insect grips where there is no floor. A little way off the pipe, beside it and level with the fly, above the line of the pipe as the frame is held and never below it, one single small drop of water floats free in the air as an almost perfect sphere, catching a point of light; a few fine specks of dust hang unsettled in the air near it. No floor, no ceiling, nothing to say which way is down. Even, cool, shadowless maintenance light from out of frame, no lamp visible. Muted colours: pale greys, the film's cream and grey-green, the fly's dark brown, clear water. Photographed, not rendered: very shallow depth of field, the fly and the nearest drops pin sharp and the duct wall falling into soft blur, real macro detail in the fly's legs and wing veins, fine high-ISO grain, a touch under-exposed, muted natural colour, the small imperfections a real photograph keeps. Negative: glowing, bioluminescence, luminous film, neon, jellyfish, floating creature, swarm, cloud of flies, many insects, giant insect, alien insect, mutant, monster, extra legs, extra wings, deformed anatomy, horror, infestation, black mould, thick slime, ooze, dripping, running water, falling drops, water streaks, puddle, pooled water, drops hanging downward, pendant drops, drops bulging from the underside, a drop below the pipe, a drip falling; rust, corrosion, grime, decay, peeling paint, neglect; hose clamps, screws, bolts, rivets, cable ties, valves, taps, copper pipe, PVC pipe, present-day plumbing, kitchen sink, bathroom, household; window, view of Earth, stars, space outside, spacesuit, person, hands, gloves; screens, holograms, consoles, dials, gauges, tablets, exposed cables, visible lamp, light fitting or bulb; readable text, lettering, numerals, signage, labels, stencilled markings, warning stripes, branding, logos or written characters of any script anywhere in frame. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, concept art, matte painting, plastic sheen, airbrushed, over-smooth surfaces, glossy, studio product photograph, insect specimen on white, focus-stacked museum macro. Landscape orientation.

### characters/aldera.jpg — edited 15 November 2026
- **Kind:** enhancement (an edit of the filed frame)
- **Tool:** Gemini, gemini-3.1-flash-image, `scripts/image-edit.js`, 9:16 at 2K, three takes; finished by `import-image.ps1` at strength 1, 768×1376 like the frame it replaces.
- **Source:** the previous `characters/aldera.jpg` (tabby on the causeway rail with an ear implant and an eye lens).
- **Run:** Round 1 of 1, take 3 filed. Why: Dermot ruled that Aldera is a Smart Pet with only a collar, no cybernetics (`intake-2026-11-15.md`). All three takes passed the image critic with the face kept. Take 3 was picked because its collar is the slimmest, matte and flush; take 1's collar was pale and plasticky, and take 2's was glossy and stood proud.
- **Prompt:**

> Edit this photograph. Keep everything exactly as it is: the same tabby cat, the same face, markings, pose, fur and whiskers, the same weathered wooden rail, the misty marsh, the dawn light, the framing, focus and grain. Change only three small things.
>
> 1. Her left ear (on the right of the picture): remove the thin silver wire that traces the edge of the ear. The ear is an ordinary cat's ear, fur and skin only, with nothing metal on or in it.
>
> 2. Her left eye (on the right of the picture): remove the bright lens glint so it matches her other eye exactly. Both eyes are ordinary living cat's eyes, the same amber-green, with only the soft natural catchlight of the dawn sky.
>
> 3. The collar: replace the dangling metal ring and tag with nothing. The collar becomes one slim, plain, matte dark grey band sitting flush in the fur at her neck, seamless, with no buckle, no tag, no ring, no bell, no lights, no screen, no lettering.
>
> No implant, no wire, no cybernetic part, no glowing eye, no lens, no metal on her head. Do not change her face, her expression or her colour. A documentary photograph, not a render.

## 2026-11-15 — Season 0 chapter illustrations, the pilot six (Fable, desktop)

Dermot, 15 November 2026: *"An image for every chapter, either generated or using one of my own photos."* The six prompts of record are in `story-bible/images.md` § 53 and are not repeated here; this section holds the run and the edit prompts. **Tool** for all six: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-prompts.js --generate` (two variations each) and `scripts/image-edit.js` (one take each); finished by `import-image.ps1 -MaxEdge 1600` at strength 1, filed 1600×893. **Plates:** none of Dermot's photographs (the catalogue was checked; no frame of his is one of these rooms). The references are filed frames of the same people and places, named per entry.

### chapters/s00e01c01.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md` § 53; reference `src/images/characters/ysolde-pitch.jpg` (the office only).
- **Run:** Round 1 of 1, variation 1 filed. The first call returned no image; repeated once.

### chapters/s00e01c02.jpg — filed 15 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 53; reference `src/images/characters/beatrix-kilbride.jpg` (the passage and hatch only).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same passage, walls, floor, hatch, light, the same walking woman seen from behind, the same three figures in olive-grey tunics, the framing, focus and grain. Change only three small things.
>
> 1. The ceiling: remove the two small round white fittings on the ceiling (they look like smoke detectors). The ceiling there is plain smooth pale composite with nothing on it.
>
> 2. The walking woman's bag: remove the canvas shoulder bag and its strap entirely. She carries nothing; her arm hangs free at her side and her plain grey coverall is unbroken across her back.
>
> 3. The three far figures: turn them so that all three face the closed hatch, their backs or shoulders toward the camera, standing and waiting with empty hands; nobody is talking and no face looks toward the camera.
>
> No text, no lettering, no numerals, no signage, no screens, no new objects. A documentary photograph, not a render.

### chapters/s00e02c01.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 53; references `src/images/characters/rutger-voss.jpg` (his face, hair and build) and `src/images/characters/adaeze-okafor.jpg` (her hair, coat and build).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same room, walls, desk, shut book, pedestal chair, window and Martian ground, the same woman in the grey coat seen from behind, the same young red-haired man with exactly the same face, hair, build and stance, the framing, focus and grain. Change only two things.
>
> 1. His jacket: replace the army field jacket with a plain dark olive-grey service tunic of matte woven cloth with a high closed stand collar, a front closure that shows no buttons and no fastening, and a completely plain front. No breast pockets, no pocket flaps, no shoulder straps, no epaulettes, no lapels, no open collar, no T-shirt showing at the neck, no belt, no badges, no insignia.
>
> 2. The dark strip at the far right edge of the picture (a door edge with a hinge): replace it with more of the same plain pale wall.
>
> No text, no lettering, no numerals, no new objects. A documentary photograph, not a render.

### chapters/s00e02c02.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit and a heal
- **Source:** `images.md` § 53; references `src/images/hero/season-00-foundation.jpg` (the chamber) and `src/images/characters/maren-solveig-krast.jpg` (her hair, build and tunic).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1; dark specks in the sky healed with `cv2.inpaint` (Telea, radius 5) on the window's sky band only.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same hearing chamber, the same rows of seated people seen from behind in the tiered seats, the same woman in the blue-grey tunic standing alone at the long table, the long window onto Mars, the framing, focus and grain. Change only three things.
>
> 1. The wall: remove the pale rectangular patch with small holes on the wall to the left of the window. That wall is plain, the same ochre-grey composite panels as the rest, with nothing on it.
>
> 2. The chairs at the long table: replace the metal slat-backed chairs with plain low moulded seats of pale composite with thin upholstered pads, the same kind as the gallery seats.
>
> 3. The table top: remove the sheet of paper in front of the standing woman. The table is bare but for the carafe and glasses.
>
> No text, no lettering, no numerals, no crest, no emblem, no screens, no microphones, no new objects. A documentary photograph, not a render.

### chapters/s00e03c01.jpg — filed 15 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 53; reference `src/images/characters/petra-solano.jpg` (her face and the chamber).
- **Run:** Round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same woman with exactly the same face, hair, hands, jacket and pose, the same table, the gallery seats and the people in them, the window onto Mars, the framing, focus and grain. Change only two things.
>
> 1. The ceiling: remove the two long bright rectangular light panels. The ceiling is plain smooth ochre-grey composite, softly and evenly lit, with no light fitting, no panel, no lamp and no glowing shape anywhere on it.
>
> 2. The open bound document on the table: make both pages completely blank, plain stiff pale matte sheets with no lines of writing, no print, no marks and no ruled lines at all. The stylus tip still rests on the blank page.
>
> No text, no lettering, no numerals, no new objects. A documentary photograph, not a render.

### chapters/s00e03c02.jpg — filed 15 November 2026
- **Kind:** generation (text alone)
- **Source:** `images.md` § 53; no reference.
- **Run:** Round 1 of 1, variation 1 filed.

## 2026-11-15 — Season 0 chapter illustrations, three fixes by edit (Fable, desktop)

Dermot's notes on the pilot, the same evening: the three officers nose to the hatch, Solano's paper book and pen and the gallery's present-day jackets, and Pitch and Kilbride reading as twins from behind. **Tool:** Gemini, `gemini-3.1-flash-image`, `scripts/image-edit.js`, one take per call, six takes in all; refiled by `import-image.ps1 -MaxEdge 1600` at strength 1. The record is in `images.md` § 53, *Three fixes*.

### chapters/s00e01c02.jpg — refiled 15 November 2026
- **Kind:** edit of the filed frame
- **Run:** take 1 of 1, filed.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same pale curved passage, walls, floor, ceiling light, the same closed rounded hatch, the same woman in the grey coverall walking away from the camera, the framing, focus and grain. Change only the three far figures in dark olive-grey tunics.
>
> At present they stand shoulder to shoulder in a tight row with their noses almost touching the closed hatch, like people waiting at a lift. Instead: the three stand loosely apart, a clear step or two back from the hatch, at the side of the passage beside it, with space between them. Each is half turned toward the approaching woman, in three-quarter view, watching her come: one has hands clasped behind the back, one stands with arms at the sides, one stands a little behind the other two. They are waiting, with empty hands, doing nothing. They stay small and far away, the same size as now, in the same dark olive-grey high-collared tunics and trousers, their faces small, plain and serious. Nobody talks, nobody gestures, nobody salutes. The hatch stays closed and is now seen clear between or beside them.
>
> No text, no lettering, no numerals, no signage, no screens, no badges, no weapons, no new objects. A documentary photograph, not a render.

### chapters/s00e03c01.jpg — refiled 15 November 2026
- **Kind:** edit of the filed frame, then an edit of that take
- **Run:** take 1 changed the document and the stylus and left one patterned jacket; take 2, from take 1, changed the gallery's dress and is filed.
- **Edit prompt 1:**

> Edit this photograph. Keep everything exactly as it is: the same woman with exactly the same face, features, grey hair, expression, hands, dark jacket and pose, the same long pale table, the same chamber, pale moulded gallery seats, walls, ceiling and the long rounded window onto Mars, the framing, focus and grain. Change only three things.
>
> 1. The thing she is signing: remove the thick open paper book with its fanned paper pages. In its place, lying flat on the table in the same spot, is one thin rigid matte leaf, a single plain sheet of pale warm-grey composite about the size of a large open book and only a few millimetres thick, with softly rounded corners, like a thin slab of pale slate. It is blank, unlit and still: no glow, no screen, no bezel, no frame, no writing, no lines, no marks. It is not paper and has no pages, no spine and no binding. Her left hand rests flat on it as now.
>
> 2. The thing in her right hand: replace the pen with a slim plain signing stylus, a short smooth tapered rod of dark matte composite, the same thickness from end to end apart from a soft rounded tip, with no clip, no cap, no nib, no metal band and no button. Its tip rests on the leaf.
>
> 3. The people seated in the gallery behind her, out of focus: dress every one of them in the plain civil dress of the same century as hers: plain dark matte jackets with a band collar or no collar and a closure that shows no buttons, in charcoal, dark slate and deep brown-grey, over plain high-necked tops. No patterned or checked jackets, no lapels, no blazers, no shirt collars, no neckties, no spectacles. They stay soft, seated and still, the same number of people in the same seats.
>
> No text, no lettering, no numerals, no glowing surfaces, no new objects. A documentary photograph, not a render.

- **Edit prompt 2:**

> Edit this photograph. Keep everything exactly as it is: the same woman in the foreground with exactly the same face, hair, hands, jacket and pose, the same pale matte leaf on the table and the slim dark stylus, the table, chamber, seats, walls, ceiling and window onto Mars, the framing, focus and grain. Change only the clothes of the out-of-focus people seated in the gallery at the left.
>
> Every one of them wears the same kind of plain civil dress as the woman in the foreground: a plain dark matte jacket with a low band collar and a front that shows no buttons, in charcoal, dark slate or deep brown-grey, over a plain dark high-necked top. In particular the man in the middle of the group, who now wears a pale grey patterned jacket over an open shirt, wears a plain charcoal band-collared jacket instead, and the man at the far left edge in a blue blazer wears plain dark slate. No pale jackets, no patterned or checked cloth, no lapels, no shirt collars, no neckties, no spectacles. They stay soft, seated, still, the same people in the same seats.
>
> No text, no lettering, no numerals, no new objects. A documentary photograph, not a render.

### chapters/s00e03c02.jpg — refiled 15 November 2026
- **Kind:** edit of the filed frame
- **Run:** three takes. The first (Kilbride's hair cut short) was dropped as unlike her portrait; an edit of it added spectacles and lost the grain; the third, from the filed frame with the prompt below, is filed.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same hall, walls, floor, tall window, Martian dusk with two low domes and the blue glow, the guests at the far left, the same two women seen from behind in the same places with the same clothes, the same stance and the same small glasses, the framing, focus and photographic grain. Change only the two women's hair, so that they no longer look like twins from behind.
>
> The woman on the left, in the pale grey jacket: her hair is darker, a soft brown well streaked with grey, gathered loosely into a low untidy knot at the nape, with several loose strands and wisps escaping at the neck and over one ear. No clip.
>
> The woman on the right, in the long dark slate tunic: her hair is plain iron grey, steel grey with a little white at the temples, drawn back tight, flat and smooth against her head and tied close at the nape into one short straight tail that hangs a hand's breadth down over the back of her stand collar. A neat, severe, practical pilot's tail: no bun, no knot, no loose strands, no clip.
>
> Neither face is shown; neither wears spectacles; both still look out of the window. No text, no lettering, no new objects. Keep the grain and softness of the original photograph; a documentary photograph, not a render, not a painting.

## 2026-11-15 — Season 1 Episode 0 chapter illustrations, chapters 0 to 6 (Fable, desktop)

Dermot, 15 November 2026, on the pilot: *"Yes, roll it out"*. The prompts of record are in `story-bible/images.md` § 55 and are not repeated here; this section holds the run and the edit prompts. **Tool** for all seven: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` for the generations (two variations each, references attached) and for the edits (one take each); finished by `import-image.ps1 -MaxEdge 1600` at strength 1, filed 1600×893. **Plate:** Dermot's *Grey heron on the reef* for `s01e00c03`, filed at finish 0. The other references are filed frames of the same people and places, named per entry.

### chapters/s01e00c00.jpg — filed 15 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 55; reference `src/images/characters/elvira.jpg` (her hair and build, from behind).
- **Run:** Round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same woman seen from behind in the grey-green coat, her dark hair, the same tabby cat on her shoulder with exactly the same face, flattened ears and stare, the gravel road, the grass, hedges and frost, the river, the low sun and long shadows, the stone abbey with its dark roof and shut gate, the thin white ascent trail in the sky, the framing, focus and grain. Change only three things, all in the background.
>
> 1. The fences: remove every fence post, strand of wire and the metal field gate at the right-hand edge, and the posts and wire along the left of the road. The road is bordered only by rough grass, bare thorn hedge and the low dry-stone wall.
>
> 2. Beside the road on the right, about half way to the abbey gate, add one slender waist-high marker post of smooth pale matte composite, perfectly plain, with a softly rounded top that carries a single small steady pale indicator. It has no wire, no sign, no reflector and no lamp. A second identical post stands small and far off beside the abbey gate.
>
> 3. On the grass verge to the left of the abbey gate, small and soft in the distance, add one low field-tending machine at rest: a smooth rounded sealed body of pale matte composite about the size of a sheep, low to the ground on four short jointed legs, plain, with no head, no face, no wheels, no rotors and no lights. It is still.
>
> No text, no lettering, no numerals, no signage, no vehicles, no people added. A documentary photograph, not a render.


### chapters/s01e00c01.jpg — filed 15 November 2026
- **Kind:** generation (text alone)
- **Source:** `images.md` § 55; no reference.
- **Run:** Round 1 of 1, variation 2 filed.

### chapters/s01e00c02.jpg — re-made 20 November 2026
- **Kind:** Dermot's own photograph as the plate, edited, then healed by hand
- **Source:** plate `F:\130DUNLG\DSC_7203.JPG` (Nikon D3100, 135 mm, f/20, 1/1000 s, Dún Laoghaire harbour, 6 December 2025; not on his site), cropped to 16:9 at 4608×2592 and sent alone. The first edit prompt is the prompt of record in `images.md` § 55.
- **Run:** Round 1, two takes from the plate; round 2, two takes from round 1's take 1 (prompt below); round 2's take 1 then healed by hand (four claw dots, two drops, the line's two ends), filed at finish 0, 1600×893. Why each round failed is in the run record under `images.md` § 55.
- **Edit prompt 2:**

> Edit this photograph. Keep everything exactly as it is: the long pale granite coping stone across the lower half lit softly from above, its speckled grain and the wet sheen at its left end, its dark shadowed face below; the dark moving water with its white foam lines beyond it; the dark wall at the top; the framing, focus, grain and colour. Change only these four things.
>
> 1. The paw print right of centre: make it unmistakably the print of a small house cat, not a dog. Four small oval toe pads set close together in a neat arc, and below them one wider main pad with three soft lobes along its lower edge. There are no claw marks at all: no dots or points in front of the toes. Keep it the same dark damp colour and keep it small. A thin pale line crosses the main pad only, splitting it into two halves where the pad is split; the line stops at the edges of the pad and does not continue onto the stone.
>
> 2. The group of four round dark spots above and to the left of the print: replace them with just two small irregular dark drops, unevenly spaced, a little behind the print, so they cannot be read as a second paw print.
>
> 3. The round grey cup-like recess at the left of the stone: replace it with a perfectly flat flush disc of matte dark grey composite the size of a palm, level with the stone surface, with no rim, no lip, no hollow and no depth, like an inlaid plate in the granite.
>
> 4. The metal stair rail and steps at the top left corner: remove them; that corner is dark stone wall like the rest of the top of the frame.
>
> No other changes. No text, no lettering, no numerals, no animal, no person, no light rays, no red. A documentary photograph, not a render.

### chapters/s01e00c02.jpg — filed 15 November 2026, superseded 20 November 2026 (the chapter's ritual was removed in PR 2001)
- **Kind:** generation (text alone), then an edit
- **Source:** `images.md` § 55; no reference.
- **Run:** Round 1: both variations drew the mirror as a frying pan; an edit of variation 2 (first prompt below) kept the pan and was dropped. Round 2, with the mirror re-described: variation 2, then edit take 1 of 1 (second prompt below), filed.
- **Edit prompt 1:**

> Edit this photograph. Keep everything exactly as it is: the same two hands and grey-green sleeves pressing on the same river stones, the ring of stones on the pale stone floor, the dark tray of low candles at the left, the bare feet, pale robe and short pale rod of the standing man, the dark stone wall with its one small green indicator, the candlelight, the framing, focus and grain. Change only two things.
>
> 1. The mirror in the middle of the ring: it now looks like a frying pan. Make it plainly a hand mirror lying flat on its back: a thin flat round disc of real mirror glass, completely flat with no raised sides and no depth, set in a very thin low rim of dull grey composite with a short slim flat handle. Its glass is a true mirror, dark because it reflects the dark ceiling, with a soft cold bloom of mist across it. In the mist there is one small faint paw print of a cat, a little irregular and slightly smeared, as if a wet paw had pressed the glass from beneath and the mark is already fading at its edges. It is a trace in condensation, not a printed symbol, not an icon and not an engraving.
>
> 2. The single lit candle standing on top of the far stone of the ring: remove it. That stone is bare like the others, and the far side of the ring is lit only by the candles on the tray.
>
> No text, no lettering, no numerals, no glow from the mirror, no light rays, no new objects. A documentary photograph, not a render.

- **Edit prompt 2:**

> Edit this photograph. Keep everything exactly as it is: the same two hands and grey-green sleeve reaching in from the left and pressing on the river stones, the ring of river stones on the old pale stone flags, the tray of candles at the left edge, the bare feet, pale robe and short pale rod of the standing man at the right, the candlelight, the framing, focus and grain. Change only three things.
>
> 1. The dark rectangular framed glass lying in the middle of the ring looks like a tablet computer. Replace it with an unmistakable hand mirror lying flat on its back in the same place: an upright oval of real silvered mirror glass about the size of a spread hand, held in a very thin plain rim of pale bone-coloured composite, with a long slender tapering handle of the same pale material lying flat on the floor and pointing toward the bottom of the picture. The oval glass is a true mirror: it reflects the dark ceiling and one small bright candle flame, and a soft cold bloom of mist lies across it. In the mist is one small faint print of a cat's paw, slightly smeared and uneven, a trace in condensation that is already fading at its edges. Nothing on the mirror glows.
>
> 2. The single dark candle standing alone on the floor beyond the ring: remove it. The floor there is bare flagstone.
>
> 3. The large framed metal panel in the wall at the back: make it much smaller and plainer, one small smooth sealed housing of pale composite the size of a hand, set flush in the stone, with the same single steady green indicator and nothing else on it. The rest of the wall is old dressed stone.
>
> No text, no lettering, no numerals, no screens, no light rays, no new objects. A documentary photograph, not a render.


### chapters/s01e00c03.jpg — filed 15 November 2026
- **Kind:** Dermot's own photograph as the plate, edited
- **Source:** plate `dermot-cochran-photography/src/images/photos/grey-heron-on-the-reef.jpg` (*Grey heron on the reef*, Dublin, 2026); reference `src/images/characters/nessa.jpg` (her face and coat). The edit prompt is the prompt of record in `images.md` § 55.
- **Run:** Round 1 of 1, variation 1 filed, finish 0.

### chapters/s01e00c04.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md` § 55; reference `src/images/characters/xenon.jpg` (the robot, the bay and the small machine).
- **Run:** Round 1 of 1, variation 2 filed.

### chapters/s01e00c05.jpg — filed 15 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 55; reference `src/images/characters/syra.jpg` (her face).
- **Run:** Round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same woman with exactly the same face, freckles, hair, hands, dark olive garment and pose, the same three pale grey sealed cylinders with their small indicators, the dark padded tray, the bench and the dark blank sheet on it, the quilted pale walls, the port and the frost plain beyond it, the framing, focus and grain. Change only three small things.
>
> 1. The tags: remove the three brown paper luggage tags and their strings. In place of each, the cylinder carries one small plain blank band of paler grey composite, a finger's width wide, set flush around its end like a collar. Nothing hangs from the cylinders.
>
> 2. The wall to the right of the port: remove the small switch plate with two round buttons. That patch of wall is the same plain quilted panel as the rest.
>
> 3. The frame of the port: remove the row of bolt heads around it. The port is set in one smooth seamless rounded surround of pale composite with no bolts, rivets or screws.
>
> No text, no lettering, no numerals, no new objects. A documentary photograph, not a render.


### chapters/s01e00c06.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 55; references `src/images/characters/perrin-ashgrove.jpg` (his face and the room), `src/images/characters/marlow-calloway.jpg` (his face and instrument) and `src/images/characters/tissadelle/season-1-cadet.jpg` (her face and hair).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same long wood-panelled room, benches and floor, the same crowd of seated dock workers in dusty coveralls, singing, the same woman with short dark auburn hair seen from behind at the table in the foreground with the pale blank sheet and stylus under her hand, the same red-haired young woman in the dark green top standing and singing with exactly the same face, the same bearded drummer and the same strings player with exactly the same faces, hair and builds, the framing, focus and grain. Change only four things.
>
> 1. The two seated musicians' clothes: they are not in uniform. Replace both plum-grey uniforms. The drummer wears his own plain clothes: a loose collarless shirt of undyed oatmeal cloth with the sleeves pushed up, and plain dark brown trousers. The strings player wears his own plain clothes: a plain rust-brown knitted top with a high neck, and plain dark grey trousers. No rank tabs, no badges, no patches, no insignia on either.
>
> 2. The drum: replace the tall goblet drum standing on the floor with a shallow round frame drum, a wide flat hoop of pale wood with a skin head, held upright on his knee with one hand and played with the other.
>
> 3. The cups: replace every paper cup in the room with a small plain handleless beaker of matte pale stoneware.
>
> 4. The walls: remove the small red box high on the right-hand wall and the small blue sign on the far left wall. Those patches are plain pale wood panel.
>
> No text, no lettering, no numerals, no microphones, no screens, no new objects. A documentary photograph, not a render.

## 2026-11-15 — Season 1 Episode 0 chapter illustrations, chapters 7 to 13 (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 56. **Tool** for all seven: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; one take per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1.

### chapters/s01e00c07.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md`, the Season 1 Episode 0 chapter entries; reference `src/images/characters/sunniva-holm.jpg` (the housings and the room only).
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s01e00c08.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md`, as above; references `src/images/characters/ulessa.jpg` and `src/images/characters/isren-farrowkin.jpg` (each body, nothing of the rooms).
- **Run:** round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same terrace, floor, parapet, wall, doorway, sky, low sun and long shadows, the same tall three-legged ochre and russet being with exactly the same body, legs, neck, head and pose, the same wide green fern-like vanes exactly where they are, the framing, focus and grain. Change only one thing: the low body at the foot of the green vanes.
>
> At present that low body looks like a tortoise: a domed shell with plates, four stubby clawed legs and a tail end. It must not look like a tortoise, a turtle or any animal. Instead, the vanes rise from one low, broad, smooth mound of thick dark grey-green hide, wider than it is tall, resting flat and close on the floor like a low cushion, with a soft matte leathery skin continuous with the bases of the vanes, no shell, no plates, no scutes, no pattern, no head, no neck, no tail, no eyes, no claws and no separate legs showing; at most three or four blunt rounded lobes of the same hide where it meets the floor. It keeps the same size and place and casts the same shadow.
>
> No text, no lettering, no new objects. A documentary photograph, not a render.

### chapters/s01e00c09.jpg — filed 15 November 2026
- **Kind:** generation with a reference, then an edit and a crop
- **Source:** `images.md`, as above; reference `src/images/characters/karla-wender.jpg` (her face, hair, build and shell).
- **Run:** round 1 of 1, variation 1, then edit take 1 of 1; the right-hand 4.5 per cent of the frame cropped off (2752×1536 to 2628×1466, 16:9 kept) to lose a sliver of a port.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same small pale compartment, the same curved pale board with its dark matte sheets, the same two seats, the same second pilot beyond, the same woman in the same charcoal shell with the indigo collar tab, in exactly the same pose with both hands resting on the board's edge, the framing, focus and grain. Change only three things.
>
> 1. The left edge of the picture: remove the window with its rounded frame. That wall is plain smooth pale composite panel like the rest of the room, with no window, no port and no opening. The compartment has no windows at all.
>
> 2. The top of the picture: remove the bright rectangular ceiling light panel. The ceiling is plain smooth pale composite, softly and evenly lit, with no light fitting, panel, lamp or glowing shape on it.
>
> 3. The woman's age: she is exactly the same woman, the same bone structure, nose, mouth, jaw, brow and short brown hair pushed back, but seventeen years younger: thirty years old, not in her forties. Smoother, firmer skin, no deep lines at the mouth or between the brows, only the faintest lines at the eyes, no grey in her hair. Still serious, composed and intent, eyes down on the board. Not a different woman, not glamorous, no make-up.
>
> No text, no lettering, no numerals, no glowing screens, no new objects. A documentary photograph, not a render.

### chapters/s01e00c10.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md`, as above; reference `src/images/lore/threshold-station.jpg` (the station's hull-form and three lights only).
- **Plates considered:** `great-south-wall-light-track`, `poolbeg-watchers-at-sunrise`, `the-muglins`, `irelands-eye-path-to-tower`; none is a whitewashed light on shingle, and the first is already the station's plate.
- **Run:** round 1 of 1, variation 1 filed.

### chapters/s01e00c11.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md`, as above; reference `src/images/characters/donncha-o-laoire.jpg` (the house, yard and hillside only).
- **Run:** round 1 of 1, variation 2 filed.

### chapters/s01e00c12.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md`, as above; reference `src/images/characters/benedek-ronai.jpg` (his face, build and uniform, and the room's walls).
- **Run:** round 1 of 1, variation 1 filed.

### chapters/s01e00c13.jpg — filed 15 November 2026
- **Kind:** generation (text alone), then an edit
- **Source:** `images.md`, as above; no reference.
- **Run:** round 1 of 1, variation 2, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same dark room, the same pale limewashed ceiling and dark beam, the same hard white bar of moonlight across the ceiling and the same soft rippled amber-gold light over the rest of it, the dark blanket at the bottom edge, the thick wall, the deep window reveal, the framing, the darkness and the heavy grain. Change only two things, both on the right-hand wall.
>
> 1. The white box on the wall to the right of the window, and the thin cable running down from it: remove them entirely. That wall is plain rough pale limewashed stone with nothing on it.
>
> 2. The window inside its deep reveal: remove the white-painted window frame with its glazing bars and catch. Instead the opening holds one single sealed pane of clear glass set flush in the stone with no visible frame, and in front of it one plain flat shutter panel of pale matte composite with softly rounded corners, slid across so that it covers all of the opening except one vertical gap the width of a hand at its left side. Through that gap is night: cold white moonlight above and a faint warm glow lower down. No handle, no hinge, no catch, no bars.
>
> The slim grey heating conduit under the ceiling stays. No lamp, no person, no text, no lettering, no new objects. A documentary photograph taken in near darkness, not a render.

## 2026-11-15 — Season 1, Episode 1 chapter illustrations (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 57. **Tool** for all four: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; one take per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1.

### chapters/s01e01c01.jpg — filed 15 November 2026
- **Kind:** generation with references
- **Source:** `images.md` (Season 1, Episode 1 chapter illustrations); references `src/images/characters/syra.jpg` (her face, hair and garment), `src/images/characters/rook-7.jpg` (its shell and lens cluster) and `src/images/characters/tissadelle/season-1-first-posting.jpg` (the dock's walls and pressure door).
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2 filed.

### chapters/s01e01c02.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md`; references `src/images/characters/rook-7.jpg`, `src/images/characters/syra.jpg` and `src/images/characters/galahad-thorne.jpg` (faces, shell and dress only).
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same small windowless office, walls, storage and table, the same seated woman with exactly the same face, hair and dark garment, the same standing bearded man with exactly the same face and grey-green coat, the same robot with the same pale grey shell seen from behind in the same place, the framing, focus and grain. Change only two things.
>
> 1. The robot's head: at present its head is turned back toward the table. Turn its head the other way, so that the robot faces the plain blank wall at the right of the picture, an arm's length in front of it, with its cluster of round dark sensor lenses pointed squarely at that bare wall and away from the table, the two people and the camera. We now see the back and side of its head. Nothing is on the wall: no crack, no mark, no glow, no beam, no light from the lenses.
>
> 2. The thin grey leaves laid in a row on the table: make every one of them completely blank, plain matte pale grey with no lines of writing, no print, no dots, no holes, no marks. The woman's hand still rests flat on one of them.
>
> No text, no lettering, no numerals, no screens, no new objects. A documentary photograph, not a render.

### chapters/s01e01c03.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md`; reference `src/images/characters/rook-7.jpg` (its shell and proportions, from behind). Plates considered and not used: `great-south-wall-light-track`, `the-muglins`, `killiney-bay-to-the-sugar-loaf`, `low-water-in-glenasmole`.
- **Run:** `scripts/image-edit.js`, round 2 of 2, variation 2 filed. Round 1 (two variations) failed on a slender railed tower, upright foreground walkers and a slim glossy robot; the prompt of record in `images.md` is round 2's.

### chapters/s01e01c04.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md`; references `src/images/characters/tissadelle/season-1-cadet.jpg` (her face and uniform) and `src/images/characters/tissadelle/season-1-first-posting.jpg` (the dock).
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then two single-take edits of that same take. The first bound the log with a spiral wire and was dropped; the second, the same prompt with the binding described (below), is filed.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same woman with exactly the same face, freckles, red hair, hands, pose and dark slate-grey uniform with its two-bar tab and diamond patch, the same pale dock behind her with its shut rounded pressure door, the same long dark window with the faint line of the sea at night, the framing, focus and grain. Change only four things.
>
> 1. The ceiling: remove the bright rectangular light panels and the dark grilles. The ceiling is plain smooth pale composite with no light fitting, no panel, no lamp, no grille and no glowing shape anywhere on it. The dock is on its night cycle, so the hall behind her is a little dimmer than now, softly and evenly lit from no visible source, while her face, hands and the log stay as bright as they are.
>
> 2. The log: remove the paper book with its ruled, written pages. In its place, lying open and flat in the same spot, is a slim bound set of about a dozen thin rigid matte leaves, pale warm grey, each leaf a couple of millimetres thick with softly rounded corners, like thin sheets of pale slate, joined along the middle by one plain flat continuous fold of the same grey material. There is no wire, no spiral binding, no rings, no coil, no stitching and no visible spine hardware of any kind. Both open leaves are completely blank: no ruled lines, no writing, no print, no marks, no glow. It is not paper and not a screen. Her left hand rests flat on it as now.
>
> 3. The thing in her right hand: a slim plain signing stylus, a short smooth tapered rod of dark matte composite with a soft rounded tip, no clip, no cap, no nib, no metal band and no button, its tip resting on the leaf.
>
> 4. The desk: remove the recessed dark panel at the right edge of the desk top and the small lit rectangles on the far walls. The desk is one plain seamless sill of pale matte composite with nothing on it but the log; the far walls are plain.
>
> No text, no lettering, no numerals, no screens, no new objects. A documentary photograph, not a render.

## 2026-11-15 — Season 1, Episode 2 chapter illustrations (Fable, desktop)

The six prompts of record are in `story-bible/images.md` (the S01E02 chapter section) and are not repeated here; this section holds the run and the edit prompts. **Tool** for all six: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two takes per prompt, one take per later edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1, filed 1600×893. **Plates:** one of Dermot's photographs, for C02. The other references are filed frames of the same people and places, named per entry.

### chapters/s01e02c00.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md`, S01E02 chapter section; references `src/images/characters/elvira.jpg` (the room, her coat and hair) and `src/images/characters/aldera.jpg` (the cat).
- **Run:** Round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same stone room, the same woman seen from behind with the same hair, coat and hand, the same table and record books, the same open composite door, the same tabby cat sitting on the threshold looking in, the same reed marsh and mist beyond, the small rounded housing with its green indicator, the two glass vessels, the framing, focus and grain. Change only three small things.
>
> 1. The far right edge of the table: remove the small candle or flame and its holder and the orange glow it throws. Nothing stands there; the table top at that corner is bare grey composite, lit only by the cold blue light from the doorway. No flame, no candle, no lamp anywhere in the picture.
>
> 2. The open record book under her hand: make both pages completely blank, plain pale paper with no lines of writing, no ruled lines, no marks and no drawings. The closed book at the right keeps a completely plain cover with nothing on it.
>
> 3. Through the doorway, on the far horizon of the marsh above the mist, add one very small thing: a long, low, smooth, seamless hull-shaped form lying on the horizon in dark silhouette, with three tiny steady warm lights in a row along its waterline. It is far away and small, no taller than the distant tree line, and has no masts, no towers, no cranes and no windows.
>
> No text, no lettering, no numerals, no other new objects. A documentary photograph, not a render.

### chapters/s01e02c01.jpg — filed 15 November 2026
- **Kind:** generation with references
- **Source:** `images.md`, S01E02 chapter section; references `src/images/characters/galahad-thorne.jpg` (his face, dress and the marsh) and `src/images/characters/elvira.jpg` (her).
- **Run:** Round 1 of 1, variation 1 filed.

### chapters/s01e02c02.jpg — filed 15 November 2026
- **Kind:** an edit of Dermot's own photograph
- **Source:** plate `birch-avenue-in-winter.jpg` (*Birch Avenue in Winter*, Dublin, 2026), from the `dermot-cochran-photography` checkout; the edit prompt is the prompt of record in `images.md`.
- **Run:** Round 1 of 1, two takes, take 2 filed as returned.

### chapters/s01e02c03.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md`, S01E02 chapter section; references `src/images/characters/syra.jpg` (her face) and `src/images/characters/rook-7.jpg` (the chassis).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same room, walls and coving, the same woman with exactly the same face, freckles, hair, garment and pose, the same man seen from behind at the left, the same pale grey robot standing at the end of the table, the dark slate table top and its pale drawn lines, the window, the grey water and sky, the framing, focus and grain. Change only three things.
>
> 1. The ship seen through the window: remove the present-day warship with its mast, bridge and superstructure. In its place, lying alongside the same quay, is one long, low, smooth, seamless hull of pale grey composite, rounded like a pebble or the back of a whale, with no mast, no bridge, no tower, no funnel, no railings, no windows, no guns and no antennae, and one small steady light at its waterline. Remove the bollard and any posts on the quay.
>
> 2. The drawing on the table: remove the single separate circle under the woman's fingertip, so that the drawing has exactly three plain circles, the three that sit together in a row, joined to one another by thin straight lines. Her fingertip rests on the bare slate where the lines from the three circles meet. Leave the long wavering traces as they are.
>
> 3. The table: remove the bright metal rim and metal edge. The table is one thick slab of matte dark grey composite with a plain rounded edge of the same dark material, standing on a solid plinth of the same material; no steel, no metal legs, no frame.
>
> No text, no lettering, no numerals, no screens, no glow, no new objects. A documentary photograph, not a render.

### chapters/s01e02c04.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md`, S01E02 chapter section; reference `src/images/characters/dr-iona-vale.jpg` (her face and the bay).
- **Run:** Round 1 of 1, variation 1 filed.

### chapters/s01e02c05.jpg — filed 15 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md`, S01E02 chapter section; reference `src/images/characters/elvira.jpg` (her face and coat).
- **Run:** Round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same room, walls, table and bench, the same woman standing at the right with exactly the same face, hair, expression, grey-green coat and pose, the same wide window with its rounded reveal, the grey water, the far breakwater and the grey sky, the dark slate and stylus on the table, the framing, focus and grain. Change only three things.
>
> 1. The small boat under way on the water: remove the present-day workboat with its wheelhouse, mast and railings. In its place, in the same spot and the same small size, is one low, smooth, seamless hull of pale grey composite, rounded like a pebble, with no cabin, no wheelhouse, no mast, no railings, no windows and no people on it, and one small steady light at its waterline, leaving a faint wake.
>
> 2. The bearded man seated at the table, out of focus: replace his padded outdoor jacket with plain field service dress, a shirt-jacket of matte grey-green woven cloth with a low band collar and a front that shows no fastening, completely plain. No sleeve patch, no logo, no zip, no fleece, no quilting, no pockets with flaps. His face, beard, hair and gesture stay the same.
>
> 3. The dark-haired woman seated opposite him, out of focus: replace her quilted jacket with a plain modular field shell of matte charcoal cloth over a high-necked liner, smooth and unquilted, with no zip and no logo; her dark hair is pinned back plainly. Her pose stays the same.
>
> No text, no lettering, no numerals, no screens, no glow, no new objects. A documentary photograph, not a render.

## 2026-11-15 — Season 1, Episode 3 chapter illustrations (Fable, desktop)

The six prompts of record are in `story-bible/images.md` (the Season 1, Episode 3 chapter section) and are not repeated here; this section holds the run and the edit prompts. **Tool** for all six: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each from a prompt file with the references attached, then one take per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1, filed 1600×893. **Plates:** none of Dermot's photographs (the catalogue was checked; the frames considered are named in `images.md`). The references are filed frames of the same people and places, named per entry.

### chapters/s01e03c01.jpg — filed 15 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md`; reference `src/images/characters/aldera.jpg` (the cat and her collar).
- **Run:** Round 1 of 1, variation 1 filed.

### chapters/s01e03c02.jpg — filed 15 November 2026
- **Kind:** generation with references
- **Source:** `images.md`; references `src/images/characters/elvira.jpg`, `galahad-thorne.jpg` and `rook-7.jpg` (hair, dress and build; the robot's shell).
- **Run:** Round 1 of 1, variation 1 filed.

### chapters/s01e03c03.jpg — filed 15 November 2026
- **Kind:** generation with a reference, then an edit and a heal
- **Source:** `images.md`; reference `src/images/characters/elvira.jpg` (her from behind, and the room).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1; the drone healed out of the sky with `cv2.inpaint` (Telea, radius 5) on a sky rectangle only.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same stone room, the same woman seen from behind in the grey-green coat holding a jar of chalk, the open pale door, the man walking away along the stone causeway through the reeds, the small housing with its green indicator, the grey composite table, the framing, focus and grain. Change only three small things.
>
> 1. The jars on the table and the jar in her hand: remove the metal screw-top lids and the screw threads at the necks. Each jar is a plain straight-sided vessel of clear glass with a smooth rim, closed by a flat flush disc of the same clear glass. No metal anywhere on them. The chalk inside them stays as it is.
>
> 2. The window on the left: remove the handle and the catch from its frame, and make the frame one plain slim seamless band of matte grey composite set straight into the stone, a fixed sealed pane that does not open, with no hinges, no handle and no opening sash.
>
> 3. The flying object in the sky beyond the door: make it much smaller and further away, about a third of its present size, a small flat rounded pale grey survey drone seen at a distance, with no dome and no lights.
>
> No text, no lettering, no numerals, no labels, no new objects. A documentary photograph, not a render.

### chapters/s01e03c04.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md`; references `src/images/lore/pelagos-minor.jpg` (the basin), `src/images/characters/dr-iona-vale.jpg` and `syra.jpg` (hair, dress and build from behind).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same flooded basin, the three straight launch corridors and their cradles, the drowned outlines under the water, the dark rock, the row of pale arched shelters and the queue of tiny figures, the sky, and the same three people seen from behind in the same places with the same hair and stance, the framing, focus and grain. Change only two things.
>
> 1. The woman on the left: remove the canvas shoulder bag and its strap entirely. She carries nothing; her plain dark jacket is unbroken across her back and her arms hang at her sides.
>
> 2. The man in the middle: his jacket becomes a plain grey-green field jacket of matte woven cloth with a smooth unbroken back and plain shoulders. Remove the shoulder straps and epaulettes, the belt at the waist and the patch on his sleeve, and make his trousers plain, with no cargo pockets.
>
> No text, no lettering, no numerals, no insignia, no new objects. A documentary photograph, not a render.

### chapters/s01e03c05.jpg — filed 15 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md`; references `src/images/characters/syra.jpg` (her face and garment) and `elvira.jpg` (her face, and the room).
- **Run:** Round 1 of 1, variation 2, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same two women with exactly the same faces, hair, hands, clothes and poses, the same grey composite table, the lamp, the stack of old books, the stone walls, the shelf of glass vessels, the man standing in the doorway with his back to the room, the small housing with its green indicator, the framing, focus and grain. Change only one thing.
>
> The two open books on the table: make every visible page completely blank, plain old cream paper, a little foxed and worn at the edges, with no lines of writing, no print, no ruled lines, no marks and no diagrams at all. The woman on the left still holds her slim dark stylus with its tip on the blank page; the woman on the right still rests her hands on the blank open pages.
>
> No text, no lettering, no numerals, no new objects. A documentary photograph, not a render.

### chapters/s01e03c06.jpg — filed 15 November 2026
- **Kind:** generation (text alone), then an edit
- **Source:** `images.md`; no reference.
- **Run:** Round 1 of 1, variation 1, then edit take 1 of 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same hands in the same positions, the man's weathered hand held out back uppermost, the two smaller hands holding it, the grey-green sleeves with chalk dust, the white chalk wall with dark flints, the niche, the framing, the shallow focus and the grain. Change only three small things.
>
> 1. The object in the niche: remove the small rounded pale case, which looks like an earphone case. In its place, seated flat in the niche and nearly filling its width, stands a field chronometer in its sealed case: one plain upright block of matte dark slate-grey composite with softly rounded edges and corners, about the size of a thick book standing on its long edge, with no lid, no hinge and no seam around its middle; on its front face one narrow recessed horizontal strip of darker matte material, blank and unlit, and beside it one very small steady pale indicator. No dial, no clock hands, no digits, no glass, no buttons. It stays out of focus like the rest of the wall.
>
> 2. The mark on the back of the man's hand: keep it in the same place and the same length, but make it a nettle sting and not a scar: a soft band of reddened skin a finger wide with one smooth, slightly raised, paler weal along its middle. Remove the row of small dots and stitch-like marks. The skin is unbroken and dry.
>
> 3. The small mark on the woman's hand at the lower left: make it one short thin pale pink line, a small cut already closed and healed shut, clean and dry, not red and not open.
>
> No blood, no text, no lettering, no numerals, no new objects. A documentary photograph, not a render.

## 2026-11-16 — Season 1 chapter fixes (Opus, desktop)

At Dermot's *"Fix Season 1 first"*. The fix list, the picks and what was left are in `images.md` § 61; this section holds the run and the prompts of the kept frames. **Tool** for all: Gemini, `gemini-3.1-flash-image`, 2K, `scripts/image-edit.js`, two takes per job (16:9 unless stated); finished by `import-image.ps1` at strength 1. Twenty-four images in all. Two jobs kept nothing, `s01e00c00` (the tending machine) and `s01e00c13` (the century hint); their reasons are in § 61.

### chapters/s01e00c06.jpg — filed 16 November 2026
- **Kind:** an edit of the filed frame
- **Source:** the filed `s01e00c06.jpg` only.
- **Run:** Round 1 of 1, two takes, take 2 filed.
- **Prompt:**

> Edit this photograph. Keep everything else exactly as it is: every person, every face, hair, pose and open singing mouth; the red-haired young woman in the dark green top singing at the far end; the two seated musicians either side of her and their instruments; the woman with short dark auburn hair at the near table seen from behind, with the blank pale sheet and stylus under her hand; the benches, the stoneware beakers, the warm wood of the walls, the framing, the focus and the grain. Change only these four things, so that the room reads as a common room on a space habitat eight centuries from now and not as a hall of today.
>
> 1. The ceiling: remove every light strip, tube, rectangular light fitting and ceiling panel. The ceiling is one smooth, seamless vault of pale warm matte composite that curves down into the tops of the walls in a long rounded cove. It has no fitting, no panel, no grille, no lamp and no glowing shape anywhere on it. The room keeps the same warm, even light, but it comes from no visible source.
>
> 2. The far end of the room, behind the band: where the room now runs on into a dim passage, it ends instead in a wall, and set in that wall, above and behind the musicians' heads, is one wide, low, sealed viewport of very thick glass in a deep, plain, rounded reveal. Through it is the black of space and, crossing the top of the view, the pale curved underside of a great slowly turning ring structure, with a few small steady white working lights along it, and a scatter of stars. It is the only cool light in the picture and lights nothing in the room.
>
> 3. The dock workers' clothes: every jacket and coverall becomes a one-piece work coverall of heavy matte woven cloth, in the same dull ochre, grey, plum and faded blue, with a plain stand collar and a closure that shows no fastening: no zips, no chest pockets, no flap pockets, no patches, no badges, no tabs, no reflective strips. A little honest dust on the sleeves and knees.
>
> 4. The drum: keep it as a hand drum the same size, held the same way, but its round frame is one smooth seamless ring of pale matte composite with no tacks, no tuning rods and no wood grain, and its head is a plain pale matte membrane.
>
> No microphones, no speakers, no screens, no signs, no lettering, no numerals, no new people, no new objects. A documentary photograph, not a render.

### chapters/s01e00c07.jpg — filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference
- **Source:** the filed `s01e00c07.jpg`; reference `src/images/hero/season-01.jpg` (the clocks' design only).
- **Run:** Round 1 of 1, two takes, take 1 filed.
- **Prompt:**

> Edit the first image. Keep exactly as they are: the man standing with his back to the camera at the viewport, his grey hair, his jacket and pose; the wide round-cornered viewport onto the starfield; the bench in the foreground and the positions of everything on it; the framing, focus and grain. Change only these two things.
>
> 1. The two metal canisters on the bench: replace both with two identical reference clocks of the design shown in the second image, standing side by side a hand's width apart in the same place and at about the same height. Each is an upright clear glass cylinder closed by a rounded cream cap, holding at its centre a small, faint, still soft cloud of violet light, standing on a smooth rounded cream base. Their readout windows face away from the camera, so nothing can be read on them. No brushed metal, no steel, no lids, no tins. In the dark viewport glass, the faint reflection of the two objects changes with them.
>
> 2. The room: so that it does not read as the same pale grey room as a station on Earth, it becomes a boundary post's working room far out on the frontier. The walls, the coving round the viewport and the bench are a warm dark charcoal-brown matte composite with honest flush seams and a fine woven acoustic texture on the wall at the left, kept and clean. The light is lower and warmer, from no visible source, so the room is dim and the violet in the two glass cylinders reads clearly against it, though it lights nothing.
>
> Take only the clocks' design from the second image, not its wall, doors or colour. No text, no lettering, no numerals, no screens, no dials, no new objects. A documentary photograph, not a render.

### chapters/s01e00c08.jpg — re-filed 16 November 2026 (Ulessa)
- **Kind:** an image edit of the filed frame, with one reference
- **Source:** the filed `s01e00c08.jpg` (the fresh generation below); reference `story-bible/reference-art/ulessa-body-2026-11-16.jpg`, a crop of `src/images/characters/ulessa.jpg` to its hub, column, slung body and working limbs, with no head.
- **Run:** Round 1, two takes, take 1 filed at 1600 px, finish strength 1. Round 2 (an edit of that take for the limb tips and the membrane, prompt below the first) gave clenched fists in both takes and was not kept. Why: `images.md` § 61, *Re-made the same day for Ulessa*. This is now the prompt of record for the frame; the entry below is its plate.
- **Prompt:**

> Edit the first image. Keep exactly as they are: the green fern-like vanes on the left and middle with the low sun shining through them, their veins, dark nodes and frayed edges; the band of creased grey-green hide they grow from at the bottom edge; the pale terrace floor, the low parapet, the gold evening sky, the light, the lens flare, the framing, focus and grain. Change only the large ochre animal on the right of the frame, so that it is the body shown in the second image and could not be mistaken for any Earth animal or dinosaur.
>
> On the right of the frame, a little behind the vanes and slightly out of focus, she is drawn so that her body plan shows: two of her three tall legs rise from broad soft padded feet on the terrace, one near the right edge and one further back, and arch upward out of the top of the frame toward a hub above. Hanging between those two legs, beneath that hub, on one thick wrinkled column of hide that comes straight down from the top of the frame, is her deep rounded body, slung like a load in a sling, at about the height of a standing person's chest. On the side of that hanging body facing the camera is one broad flat oval patch of smoother, paler hide set flush with the skin, a hearing membrane. Beneath the hanging body, three short slender working limbs hang curled, each ending in a closed round bud of short blunt digits, touching nothing.
>
> From the front of that hanging body, low down, a long smooth neck sweeps forward and slightly down toward the vanes, so that it comes out of the hanging body, not down from above, and her small smooth blunt head is held level and still close beside the nearest vane's leading edge, attending to it. The head is seen from behind and a little to the side: smooth and rounded, no mouth line, no lips, no nostrils on top, no ears, no crest.
>
> Her hide everywhere is the colours of the second image: warm ochre and russet with a fine velvety nap, paler sand on the underside, with darker umber banding only across the column and the top of the body; the legs and neck are not striped. A long pale healed seam runs down the nearer leg.
>
> Take only her body from the second image, not its room, light or table. Exactly one Mnemari, exactly as many limbs as described. No dinosaur, no sauropod, no brachiosaurus, no giraffe, no llama, no camel, no horse, no elephant, no snake, no tiger stripes, no scales, no tail, no claws, no eyes facing the camera, no face, no teeth, no people, no text, no lettering, no numerals. A documentary photograph, not a render.

- **Round 2 prompt (not kept):**

> Edit this photograph. Keep everything exactly as it is: the green vanes and the low sun through them, the grey-green hide at the bottom, the terrace, parapet, sky and light; and the large ochre being on the right, her arched legs, the thick column, her hanging rounded body, her long neck and her rounded head held beside the vane, her pose, size and colours, the framing, focus and grain. Change only two small things.
>
> 1. The two short working limbs hanging beneath her body: each ends not in a hook or claw but in a small closed round bud, a soft rounded pad with short blunt digits folded over it like a closed flower bud, the same ochre hide as the limb. No hooks, no claws, no talons, no nails.
>
> 2. The oval patch on the side of her hanging body: it is flush with the skin and slightly paler and smoother than the hide around it, a flat membrane, not a hollow, hole or recess.
>
> No other change. No new objects, no people, no face, no text, no lettering, no numerals. A documentary photograph, not a render.

### chapters/s01e00c08.jpg — filed 16 November 2026
- **Kind:** a fresh generation with one reference
- **Source:** round 2: a crop of `src/images/characters/isren-farrowkin.jpg` to its vanes (the body's mound cut away). Round 1 sent `isren-farrowkin.jpg` and `ulessa.jpg` whole with a fuller version of the prompt below (not repeated); both takes drew a tortoise shell and a cartoon dinosaur head (`images.md` § 61).
- **Run:** Round 2 of 2, two takes, take 1 filed. It was the prompt of record until the Ulessa edit above, which used this frame as its plate.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, a close frame taken from low, at about knee height, deep focus, on the open terrace of a Federation facility in the last low sun of an early-summer evening in the year 2826 UCSD: two delegates of two peoples that are not human, after two days indoors.
>
> In the foreground, filling the left and middle of the frame: the vanes of a Verdani delegate, of exactly the kind in the reference image, opened to the low sun at the left. Several very wide fern-like vanes, deep chlorophyll green, the sunlight coming through them so every vein shows, rows of small dark nodes along their leading edges, the edges a little frayed and torn by years of use. At the very bottom edge of the frame they grow up out of a living body of which only a narrow band of hide is in view: soft, warm, creased, leathery skin of deep green-grey, with fine pores and a few fine hairs catching the light, folding up around the base of each vane like skin around a root. That hide has no plates, no scutes, no shell, no segments and no pattern of polygons; it is skin.
>
> Behind and to the right, a little out of focus: a second delegate, a Mnemari, very large. One of her three tall arched legs rises from the terrace floor at the right of the frame and climbs out of the top of the picture, as thick as a tree trunk, in a deep ochre and russet hide banded with darker umber, with one long pale healed seam running down it. From above, her long thick neck curves down in front of that leg, and her small blunt head hangs low at the height of the vanes, seen from behind and above, so that only the rounded back of the head and the curve of the neck show, close to the nearest vane's leading edge and turned toward it, held perfectly still. Her face is not visible at all.
>
> Beyond them, out of focus, the pale composite floor of the terrace, a low parapet and a gold evening sky. One low sun: warm rim light, long soft shadows, a little lens flare at the left edge.
>
> Photographed, not rendered: real skin, translucent vane tissue with fine hairs, high-ISO grain in the shadows, a real lens with slight softness toward the corners, natural full colour, normal exposure.
>
> Negative: no tortoise, no turtle, no shell, no carapace, no scales, no potted plant, no pot, no planter, no soil, no garden, no palm, no banana leaves, no eyes, no face, no mouth, no snout, no dinosaur, no giraffe, no horse, no snake, no elephant, no cartoon, no toy, no clay, no plastic, no CGI, no 3D render, no people, no text, no lettering, no numerals.

### chapters/s01e00c09.jpg — filed 16 November 2026
- **Kind:** an edit of the filed frame
- **Source:** the filed `s01e00c09.jpg` only.
- **Run:** Round 1 of 1, two takes, take 2 filed. The age change in point 3 barely took; see `images.md` § 61.
- **Prompt:**

> Edit this photograph. Keep exactly as they are: the woman pilot's face, short brown hair, charcoal field shell with its small indigo collar tab, her pose, her hands resting on the board and her steady downward look; the second pilot beyond her; the long curved board with its flat unlit dark matte sheets; the framing, focus and grain. Change only these things, so that this reads as the small pilot deck of a working ship in deep space and not as a pale office.
>
> 1. The room: the ceiling comes down low and close over the two seats, curving down into the walls in one continuous rounded shell, so the deck is small and enclosed. Walls and ceiling are a deep matte blue-grey composite with honest flush seams. There is no window, no port and no panel of light anywhere. The light is low and quiet, from no visible source, a little cooler at the far end, so the faces and hands are lit softly and the corners of the deck fall into shadow.
>
> 2. Her seat: the pale shell seat keeps its shape, but its pad is a dense dark woven pad, not a mesh.
>
> 3. Her age: she is exactly the same woman, the same face, features and hair, but about twenty-five years old rather than thirty-five: a little smoother around the eyes and mouth, and nothing else about her changes.
>
> No screens, no glowing displays, no lettering, no numerals, no new objects, no new people. A documentary photograph, not a render.

### chapters/s01e01c01.jpg — filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference, then readout digits set by script
- **Source:** the filed `s01e01c01.jpg`; reference `src/images/hero/season-01.jpg` (the clock only).
- **Run:** Round 1 of 1, two takes, take 1 filed. The readout window's faint pseudo-glyphs were flattened to the panel tone, then `python scripts/set-readouts.py IN OUT --box 1740,204,58,13 --text 06:42:17` on the 2752×1536 take.
- **Prompt:**

> Edit the first image. Keep everything exactly as it is: the tall pale woman walking in, the robot behind her, the open rounded pressure seal and its reveal, the pale dock, the long window onto the sea at dawn, the framing, focus and grain. Change only one thing: add one instrument to the wall.
>
> High on the far wall, centred directly above the open pressure seal, with clear wall above it, set on a short rounded cream bracket, add one atomic clock of exactly the design shown on the left of the second image: an upright clear glass cylinder closed by a rounded cream cap, holding at its centre a small, faint, still soft cloud of violet light, standing on a smooth rounded cream base with a dark recessed readout window across its front. The readout window is matte, unlit and completely blank, with nothing showing in it at all. It is small in the frame, in proportion with the seal below it, and the faint violet is too weak to light the wall.
>
> Take only the clock's design from the second image, not its wall, doors or colour. No digits, no numerals, no text, no lettering, no screens, no other new objects. A documentary photograph, not a render.

### chapters/s01e01c04.jpg — filed 16 November 2026
- **Kind:** an edit of the filed frame
- **Source:** the filed `s01e01c04.jpg` only.
- **Run:** Round 1 of 1, two takes, take 1 filed.
- **Prompt:**

> Edit this photograph. Keep everything exactly as it is: the same woman with exactly the same face, freckles, red hair, hands and pose, the same dark slate-grey uniform with its two-bar tab and diamond patch, the slim dark stylus in her right hand, the same pale dock behind her with its shut pressure door and the long dark window, the framing, focus and grain. Change only one thing: the log under her hands.
>
> Remove the thick open book. In its place, lying perfectly flat on the sill, is the station's watch log as the century keeps it: two thin rigid matte leaves of pale warm grey, each about the size of a large page and no thicker than a coin, lying open side by side and joined along the middle by one narrow flat hinge of the same grey material, so the pair lies completely flat, like two thin sheets of pale slate. Under the left leaf, and only visible at its outer edge, the thin stacked edges of earlier leaves, the whole pile no thicker than a finger. There is no book block, no thick page edges, no cover boards, no curve of pages, no spine, no spiral, no rings, no stitching. Both visible leaves are completely blank: no lines, no writing, no print, no marks, no glow. The stylus tip rests on the right-hand leaf.
>
> No text, no lettering, no numerals, no screens, no new objects. A documentary photograph, not a render.

### chapters/s01e02c02.jpg — filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference
- **Source:** the filed `s01e02c02.jpg` (itself an edit of Dermot's *Birch Avenue in Winter*); reference `src/images/chapters/s01e03c02.jpg` (its trees only). His trunks are no longer in the frame, so the plate credit of 15 November is withdrawn.
- **Run:** Round 1 of 1, two takes, take 1 filed.
- **Prompt:**

> Edit the first image. It is a night photograph of a grove at the edge of a reed marsh. Keep everything in it except the trees exactly as it is: the black overcast sky, the cold low lamplight from the left, the dark tussock grass, the still black pools and their reflections, the reeds at both edges, the curving line of old lichened grey stone blocks low in the grass with its gap in front of the trees, the two small figures seen from behind at the left edge, the camera position, the framing, the high-ISO grain and the slight under-exposure.
>
> Change only the trees. Remove the five slender birches. In their place, on the same spot behind the gap in the stones, stands the grove of the second image: seven large old trees with thick, smooth pale bark, white and silver-grey like old bleached bone, standing close together on one low rise of wet ground, their heavy roots spreading out over the earth and running together into one shared plate of roots, their crowns broad and thin with the last few small pale yellow leaves. Each trunk is far wider than a person, so the two figures at the left are small beside them and stand a little way back from the roots. The lamplight from the left catches the near sides of the trunks and falls away into the dark on the far sides; the pools reflect the pale trunks.
>
> Take only the trees from the second image: not its sky, its people, its robot, its lamp, its chalk ring or its marsh.
>
> Nothing glows. No light comes from the trees, the bark, the roots or the ground. No mist machine look, no magic light, no fireflies, no spirits, no faces in the bark, no figures among the trees, no symbols, no ribbons. No fence, bench, signpost, lamp post, path, building or wire. No text, no lettering, no numerals. A documentary photograph taken at night with a real lens, not a render, not a painting.

### chapters/s00e03c01.jpg — filed 16 November 2026
- **Kind:** an edit of the filed frame
- **Source:** the filed `s00e03c01.jpg` only.
- **Run:** Round 1 of 1, two takes, take 1 filed.
- **Prompt:**

> Edit this photograph. Keep everything exactly as it is: the woman signing, her face, grey hair, dark band-collared jacket, hands, the slim stylus and its tip on the sheet; the long pale table; the people in the gallery behind; the window onto the Martian landscape; the framing, focus and grain. Change only the thing she is signing.
>
> Remove the large pale rounded slab under her hands. In its place, lying flat on the table under the stylus, is the last leaf of a slim bound document: a single stiff pale matte leaf the size of a large page, with crisp square corners, lying on top of a few more such leaves, their thin stacked edges visible along the near and right sides, the whole set no thicker than a finger, joined along its left edge by a narrow plain flat binding strip of darker grey. Her left hand rests flat on the leaf beside it to steady it. The leaf is blank where we can see it and seen at a low angle; nothing on it can be read. It must not look like a desk mat, a tray, a tablet, a mouse pad or a blotter: it is clearly a few thin leaves of a document.
>
> No text, no lettering, no numerals, no screens, no new objects. A documentary photograph, not a render.

### hero/s01e01-corridor.jpg — filed 16 November 2026
- **Kind:** a fresh generation with one reference, 3:2
- **Source:** reference `src/images/chapters/s01e01c01.jpg` (the station's look).
- **Run:** Round 1 of 1, two takes, take 1 filed at 1920×1288. This is the prompt of record; the 13 July stock frame it replaces is a negative example.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 3:2 landscape, a wide level view taken from standing height down a long, kept passage of Threshold Station, a Survey Corps shore station built on a sea coast on Earth, at first light on an early-autumn morning in the year 2826 UCSD. The passage is the station's own idiom, the same as the dock in the reference image: smooth pale warm-grey matte composite walls and ceiling meeting the floor and each other in long rounded coves, honest flush seams between the panels, a floor of plain pale composite, clean and kept, nothing fixed to the walls. Along the whole left side runs one long, low sealed window of very thick glass in a deep plain rounded reveal, and through it a calm grey sea under a pale pink-grey dawn sky; it is the passage's light, cool and level, laying long soft reflections along the floor. At the far end of the passage, some thirty metres away, stands a large rounded pressure seal, shut, with a raised compression gasket all round it. Halfway down the passage one man walks away from the camera toward the seal, alone, unhurried, seen wholly from behind: dark hair, a beard's edge, plain grey-green field dress, a slim pale folio under one arm. Nobody else. Quiet, exact, faintly unsettling, calm; a place where something is about to be noticed.
>
> Photographed, not rendered: high-ISO grain heavier in the shadows, a moderately wide lens with slight softness toward the corners, a touch under-exposed, muted natural colour, the small imperfections a real photograph keeps.
>
> Negative: no pipes, no conduits, no cables, no rivets, no grilles, no louvres, no vents, no gratings, no hazard stripes, no signs, no numbers, no lettering, no labels, no light strips, no ceiling panels, no lamps, no screens, no grime, no rust, no stains, no wet floor, no backpack, no weapon, no robot, no film-set look, no 3D render.

## 2026-11-16 — Rook-7 re-made as a retrofit chassis, and its five chapter frames (Opus, desktop)

Dermot's *"B: retrofit chassis"*. The prompt of record for the portrait is in `images.md` under `rook-7.jpg`; the chapter round is `images.md` § 62. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K.

### characters/rook-7.jpg — filed 16 November 2026
- **Kind:** text-to-image, no reference and no plate (no frame of Dermot's shows a machine of this kind).
- **Run:** `scripts/image-prompts.js --generate --only rook-7`, two variations, then an unchanged re-roll of two; both rounds read as a wooden lay figure. The revised prompt was refused by the content filter six times. Three single takes through `scripts/image-edit.js` while finding the refused clause; the one sent with the body paragraph cut after *large capable hands* and no negative list was filed, after a 21-pixel crop to 16:9, at 1200x675, strength 1. Copied to `story-bible/reference-art/rook-7-body-2026-11-16.jpg`. Images generated for the portrait: seven.

### chapters/s01e01c01.jpg — re-filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference
- **Source:** the filed `s01e01c01.jpg`; reference `story-bible/reference-art/rook-7-body-2026-11-16.jpg` (the machine only).
- **Run:** `scripts/image-edit.js`, round 1 of 1, two takes, take 2 filed at 1600 px, strength 1; then the clock and its script-set readout (box 985,15 to 1090,150 at 1600 px) pasted back from the previously filed frame, since the edit had softened the digits.
- **Prompt:**

> Edit the first image, a photograph. Keep everything exactly as it is: the tall pale woman walking in, with exactly the same face, hair, dark garment and stride; the open rounded pressure seal and its reveal; the clock above the seal exactly as it is; the pale dock, the long window onto the sea at dawn; the framing, light, focus and grain. Change only the robot walking a few steps behind her through the seal: replace the white plated robot, in the same place, at the same size, walking in the same pose, with the robot in the second image, the same machine exactly: a tall, boxy working robot with a broad straight-sided trunk of matte pale grey-khaki composite, heavy plain limbs whose rounded joint-casings are worn pale and smooth at their edges, a low plain rounded grey cap of a head set on a dark satin graphite adapter collar with one small pale indicator in it, a compact cluster of small dark lenses on a short jointed graphite mount at one side of the head, a narrow flat graphite bar on the crown, a small graphite sensor block on its own bracket on one shoulder, and one small plain dull grey metal plate bolted to the chest. It has no face: no eyes in a pair, no visor, no faceplate. It is clean and kept, its wear only at the joint-casings. Take nothing else from the second image: not its room, window, table, light or pose. Its lens cluster is turned aside toward the far wall of the dock, as if already reading it. No text, no lettering, no numerals, no new objects, no white plastic armour. A documentary photograph, not a render.

### chapters/s01e01c02.jpg — re-filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference
- **Source:** the filed `s01e01c02.jpg`; reference `story-bible/reference-art/rook-7-body-2026-11-16.jpg` (the machine only).
- **Run:** `scripts/image-edit.js`, round 1 of 1, two takes, take 2 filed at 1600 px, strength 1.
- **Prompt:**

> Edit the first image, a photograph. Keep everything exactly as it is: the small windowless office, its walls and table; the seated woman with exactly the same face, hair and dark garment, her hand flat on the row of blank grey leaves; the standing bearded man with exactly the same face and grey-green coat; the framing, light, focus and grain. Change only the robot in the right foreground, seen from behind and facing the blank wall at the right: replace it, in the same place, at the same size, seen from behind at the same angle, with the robot in the second image, the same machine exactly: a tall, boxy working robot with a broad straight-sided trunk of matte pale grey-khaki composite, heavy plain limbs whose rounded joint-casings are worn pale and smooth at their edges, a low plain rounded grey cap of a head set on a dark satin graphite adapter collar with one small pale indicator in it, a compact cluster of small dark lenses on a short jointed graphite mount at one side of the head, a narrow flat graphite bar on the crown, a small graphite sensor block on its own bracket on one shoulder, and one small plain dull grey metal plate bolted to the chest. It has no face: no eyes in a pair, no visor, no faceplate. It is clean and kept, its wear only at the joint-casings. Take nothing else from the second image: not its room, window, table, light or pose. We see the back of its trunk and the back and side of its head, with its lens cluster and shoulder block pointed squarely at the bare wall in front of it and away from the table, the two people and the camera. Nothing is on the wall. No text, no lettering, no numerals, no new objects, no white plastic armour. A documentary photograph, not a render.

### chapters/s01e01c03.jpg — re-filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference
- **Source:** the filed `s01e01c03.jpg`; reference `story-bible/reference-art/rook-7-body-2026-11-16.jpg` (the machine only).
- **Run:** `scripts/image-edit.js`, round 1 of 1, two takes, take 1 filed at 1600 px, strength 1.
- **Prompt:**

> Edit the first image, a photograph. Keep everything exactly as it is: the long shingle spit, the whitewashed lighthouse, the rough sea and blown spray, the torn grey sky, the man in the grey-green coat and the dark-haired woman walking away bent into the wind, the framing, light, focus and grain. Change only the robot walking on the right of the two people, seen from behind: replace the white plated robot, in the same place, at the same size, walking away from the camera along the stones in the same stride, with the robot in the second image, the same machine exactly: a tall, boxy working robot with a broad straight-sided trunk of matte pale grey-khaki composite, heavy plain limbs whose rounded joint-casings are worn pale and smooth at their edges, a low plain rounded grey cap of a head set on a dark satin graphite adapter collar with one small pale indicator in it, a compact cluster of small dark lenses on a short jointed graphite mount at one side of the head, a narrow flat graphite bar on the crown, a small graphite sensor block on its own bracket on one shoulder, and one small plain dull grey metal plate bolted to the chest. It has no face: no eyes in a pair, no visor, no faceplate. It is clean and kept, its wear only at the joint-casings. Take nothing else from the second image: not its room, window, table, light or pose. Seen from behind, small in the frame, its broad boxy trunk and the shoulder block and side lens cluster plain in silhouette. No text, no lettering, no numerals, no new objects, no white plastic armour. A documentary photograph, not a render.

### chapters/s01e02c03.jpg — re-filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference
- **Source:** the filed `s01e02c03.jpg`; reference `story-bible/reference-art/rook-7-body-2026-11-16.jpg` (the machine only).
- **Run:** `scripts/image-edit.js`, round 1 of 1, two takes, take 2 filed at 1600 px, strength 1.
- **Prompt:**

> Edit the first image, a photograph. Keep everything exactly as it is: the man seen from behind at the left; the dark-haired woman leaning over the dark slate table with exactly the same face, hair, garment and pointing hand; the chalk-pale circles and lines on the table; the window with the low seamless hull on the water; the room; the framing, light, focus and grain. Change only the robot standing at the far end of the table on the right: replace the white plated robot, in the same place, at the same size, standing in the same way, with the robot in the second image, the same machine exactly: a tall, boxy working robot with a broad straight-sided trunk of matte pale grey-khaki composite, heavy plain limbs whose rounded joint-casings are worn pale and smooth at their edges, a low plain rounded grey cap of a head set on a dark satin graphite adapter collar with one small pale indicator in it, a compact cluster of small dark lenses on a short jointed graphite mount at one side of the head, a narrow flat graphite bar on the crown, a small graphite sensor block on its own bracket on one shoulder, and one small plain dull grey metal plate bolted to the chest. It has no face: no eyes in a pair, no visor, no faceplate. It is clean and kept, its wear only at the joint-casings. Take nothing else from the second image: not its room, window, table, light or pose. Its head and lens cluster are turned down toward the lines on the table. No text, no lettering, no numerals, no new objects, no white plastic armour. A documentary photograph, not a render.

### chapters/s01e03c02.jpg — re-filed 16 November 2026
- **Kind:** an edit of the filed frame, with a reference
- **Source:** the filed `s01e03c02.jpg`; reference `story-bible/reference-art/rook-7-body-2026-11-16.jpg` (the machine only).
- **Run:** `scripts/image-edit.js`, round 1 of 1, two takes, take 1 filed at 1600 px, strength 1.
- **Prompt:**

> Edit the first image, a photograph. Keep everything exactly as it is: the pale-barked trees and their roots, the kneeling woman with her palm on the ground inside the white chalk ring, the thread and the two glasses of water, the bearded man holding the lamp, the dark marsh and the pre-dawn sky; the framing, light, focus and grain. Change only the small robot standing at the left edge of the grove: replace the white plated robot, in the same place, at the same small size, standing at the perimeter, with the robot in the second image, the same machine exactly: a tall, boxy working robot with a broad straight-sided trunk of matte pale grey-khaki composite, heavy plain limbs whose rounded joint-casings are worn pale and smooth at their edges, a low plain rounded grey cap of a head set on a dark satin graphite adapter collar with one small pale indicator in it, a compact cluster of small dark lenses on a short jointed graphite mount at one side of the head, a narrow flat graphite bar on the crown, a small graphite sensor block on its own bracket on one shoulder, and one small plain dull grey metal plate bolted to the chest. It has no face: no eyes in a pair, no visor, no faceplate. It is clean and kept, its wear only at the joint-casings. Take nothing else from the second image: not its room, window, table, light or pose. Its lens cluster and shoulder block are turned toward the trees and the people at the chalk ring, watching. No text, no lettering, no numerals, no new objects, no white plastic armour. A documentary photograph, not a render.


## 2026-11-16 — Rook-7 less retro: tried, nothing filed (Opus, desktop)

Dermot, verbatim: *"Rook looks slightly too retro now"*. **Tool:** Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, each an edit of the filed `src/images/characters/rook-7.jpg` with no other image. Takes kept outside the repository; none filed. The verdicts are in `images.md` under `rook-7.jpg`.

- **Round 1**, two takes:

> Edit this photograph. Keep the room, window, light, camera angle and grain exactly. Keep the robot in the same place, same size and same pose, its hand flat on the wall, with the same three sensor arrays (the lens cluster on its jointed mount, the bar on top, the block on its shoulder bracket) and the same wear at the joints.
>
> Change only the robot's styling so it looks like a well-made machine from the far future rather than an old film robot:
> - Replace the domed head cap with a low, flat, wide head adapter, only a little taller than the collar.
> - Give the trunk and limb casings softer moulded composite edges and gently rounded corners instead of flat boxes, with fine honest seams.
> - Make the finish a matte warm grey, not khaki or olive.
> The trunk and limbs should still look older than the darker graphite parts fitted on later.
>
> No dome, no helmet, no rivets, no tin toy, no 1950s robot, no face. A documentary photograph, not a render.

- **Round 2**, one take, one refused:

> Edit this photograph. Keep the room, window, light, camera angle and grain exactly. Keep the robot in the same place, same size and same pose, its hand flat on the wall, with the same three sensor arrays (the lens cluster on its jointed mount, the bar on top, the block on its shoulder bracket) and the same wear at the joints.
>
> Restyle only the robot so it reads as a carefully made machine of the far future:
> - Its colour is a light neutral grey, like pale stone, matte. Not khaki, not olive, not green, not brown.
> - The head is a low, wide, softly rounded wedge sitting directly on the dark collar, with no tall neck and no dome.
> - The trunk is moulded, tapering slightly to the waist, with smooth rounded shoulders and edges, not a box. Fine seams between panels.
> - The limbs are smooth tapered composite shells over the joints.
> The older grey shell still looks older than the darker graphite parts fitted later.
>
> No dome, no helmet, no rivets, no tin toy, no 1950s robot, no face. A documentary photograph, not a render.

- **Round 3**: the round 2 shape with the trunk kept broad and the wear restated, refused twice; its first half alone refused once; passed only with the head clause removed, one take:

> Edit this photograph. Keep the room, window, light, camera angle and grain exactly. Keep the robot in the same place, same size and same pose, its hand flat on the wall, with the same three sensor arrays (the lens cluster on its jointed mount, the bar on top, the block on its shoulder bracket).
>
> Restyle only the robot, a little, so it reads as an older working machine of the far future:
> - Its colour is a light neutral grey, like pale stone, matte. Not khaki, not olive, not brown.
> - Keep the trunk broad, deep and heavy, the same width at chest and waist, but with well-rounded moulded corners and edges instead of sharp box corners, and fine seams between panels.
> - The limbs stay heavy and plain, with rounded casings.
> - It is clearly an old, much-used chassis: the edges of the grey casings are worn pale and smooth, with faint scuffs, while the darker graphite collar and the three arrays look newer.
>
> No dome, no helmet, no face. A documentary photograph, not a render.

Images generated: four. Requests refused: four.

## 2026-11-16 — Rook-7 composite: round 2's refit on the filed body (Opus, desktop)

Dermot agreed the design basis (his *"Yes"*): an older body kept on purpose, a newer refit of the senses, *older* within its own century. The verdicts and the method are in `images.md` under `rook-7.jpg` and in § 62. **Tool:** Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K. Takes kept outside the repository.

### characters/rook-7.jpg — re-filed 16 November 2026
- **Kind:** a composite, then an edit. **Source:** the filed `rook-7.jpg` (the body, room and pose) and round 2's take of the less-retro attempt above (the upper unit, collar and arrays), pasted with a feathered seam in PIL; no other reference.
- **Round 1**, one take, one refused:

> Edit this photograph. Keep the room, the window, the light, the camera angle and the grain exactly. Keep the robot in the same place, at the same size and in the same pose, with its hand flat on the wall. Keep everything above its shoulders exactly as it is: the dark collar and every part mounted on it, unchanged in shape and colour.
>
> Change only the robot's body below the collar:
> - Recolour the body from khaki to a warm pale grey, matte, a shade darker and more worn than the parts above the collar. Not khaki, not olive, not green, not brown.
> - Soften the trunk's hard slab edges into one moulded composite housing with rounded edges and corners. Keep its broad, deep, heavy mass and straight posture: no waist, no hips, no slim figure.
> - Keep the worn pale edges on the joint casings, the scuffs of long use, and the plain chest plate, set flush with no screws.
> - Blend the join under the collar so it reads as one machine, and match the light on the body to the light on the collar.
>
> The body is an older civilian service machine, plain and practical and long used; the collar and the parts on it are a later, newer fit. A documentary photograph, not a render. No rivets, no screws, no 1950s robot.

- **Round 2**, an edit of round 1's take, one take, one refused:

> Edit this photograph. Keep the room, the window, the light, the camera angle and the grain exactly. Keep the robot exactly as it is in shape, size, place and pose, with its hand flat on the wall. Keep everything above its shoulders unchanged.
>
> Change only the colour and finish of the robot's body below the collar:
> - The body becomes a light, cool-neutral pale grey, like pale concrete, matte, only a shade darker than the pale grey of the part above the collar. No brown, beige, olive, yellow or green cast anywhere on it.
> - The body is clean and kept. Leave only light honest wear: the edges of the joint casings rubbed paler, a few faint scuffs. No dark stains, no grime, no dirt.
> - The plain chest plate stays, flush, with no screws.
>
> A documentary photograph, not a render.

- **Finish:** round 1's fine surface detail laid back onto the body (high-pass, 0.6, chest panel excluded); the upper unit, collar and arrays pasted back from the earlier round-2 take; cropped 21 px to 16:9; `import-image.ps1 -MaxEdge 1200 -Finish 1`. Copied to `story-bible/reference-art/rook-7-body-2026-11-16b.jpg`.

### The five chapter frames
- **Kind:** edits of each filed frame with `reference-art/rook-7-body-2026-11-16b.jpg` as the second image; only the robot's region of the kept take pasted back into the filed frame, each take finished at strength 1 first. Frames changed: `s01e01c01`, `s01e01c02`, `s01e02c03`, `s01e03c02`; `s01e01c03` left (§ 62).
- **Round 1**, two takes per frame, none refused. The `s01e03c02` prompt; the others differ only in their first and last sentences, which keep each frame's own scene and pose as the 16 November retrofit prompts above did:

> Edit the first image, a photograph. Keep everything exactly as it is: the pale-barked trees and their roots, the kneeling woman with her palm on the ground inside the white chalk ring, the thread and the two glasses of water, the bearded man holding the lamp, the dark marsh and the pre-dawn sky; the framing, light, focus and grain. Change only the small robot standing at the left edge of the grove: replace it, in the same place, at the same small size, standing at the perimeter, with the robot in the second image, the same machine exactly: a tall working robot with a broad, deep, moulded trunk of matte pale grey composite with softly rounded edges, heavy plain limbs whose casings are rubbed paler at their edges with a few faint scuffs, a dark satin graphite collar with one small pale indicator in it, and above the collar the pale grey unit exactly as in the second image, with a compact cluster of small dark lenses on a short jointed graphite mount at one side, a narrow flat bar on top, and a small graphite sensor block on its own bracket on one shoulder; a plain flush panel on its chest. It has no face: no eyes in a pair, no visor. Take nothing else from the second image: not its room, window, table, light or pose. Its lens cluster and shoulder block are turned toward the trees and the people at the chalk ring, watching. No text, no lettering, no numerals, no new objects, no rivets, no khaki. A documentary photograph, not a render.

- **Round 2, `s01e01c02` and `s01e01c01`**, an edit of each frame's round-1 take 2: two takes for `s01e01c02`, both refused for `s01e01c01`:

> Edit the first image, a photograph. Keep everything exactly as it is: every person with exactly the same face, hair, garment and pose; the room or place; the framing, light, focus and grain; the robot in the same place, at the same size and in the same pose, with everything above its shoulders unchanged.
>
> Change only the robot's body below its dark collar, to match the robot in the second image: its trunk and limbs become a light cool pale grey, matte, like pale concrete, with no khaki, olive, green or brown cast; the trunk is one moulded housing with softly rounded corners and edges, not a square box, keeping its broad mass; the limb casings are rubbed a little paler at their edges with a few faint scuffs; the chest has a plain flush panel. Take nothing else from the second image.
>
> No text, no lettering, no numerals, no new objects. A documentary photograph, not a render.

- **Round 2, `s01e01c03`**, from the filed frame, two takes (one drew the robot larger, one kept the dome):

> Edit the first image, a photograph. Keep everything exactly as it is: the long shingle spit, the whitewashed lighthouse, the rough sea and blown spray, the torn grey sky, the man in the grey-green coat and the dark-haired woman walking away bent into the wind, the framing, light, focus and grain. Change only the robot walking on the right of the two people, seen from behind: replace it, in exactly the same place and at exactly the same small size, no larger and no nearer the camera, its feet on the same stones and its top at the same height, walking away along the stones in the same stride, with the robot in the second image, the same machine exactly: a tall working robot with a broad, deep trunk that is one moulded housing with softly rounded corners, not a square box, in matte light cool pale grey like pale concrete with no khaki or green cast, heavy plain limbs whose casings are rubbed paler at their edges, a dark satin graphite collar with one small pale indicator in it, and above the collar the pale grey unit exactly as in the second image, with a compact cluster of small dark lenses on a short jointed graphite mount at one side, a narrow flat bar on top, and a small graphite sensor block on its own bracket on one shoulder. It has no face: no eyes in a pair, no visor. Take nothing else from the second image: not its room, window, light, size or pose. No text, no lettering, no numerals, no new objects. A documentary photograph, not a render.

- **Round 3, crops** (the robot's region alone, enlarged three times, 3:4). Both refused twice in a first wording; the second wording gave one take for `s01e01c01` (one refused) and was refused twice for `s01e01c03`. The `s01e01c01` prompt that passed:

> Edit the first image, a photograph of a machine in a corridor. Keep the scene, framing, light and grain exactly, and keep the machine in the same place, at the same size and in the same stride.
>
> Restyle the machine's lower housings to match the machine in the second image: the main housing is one moulded shell with softly rounded corners rather than a square box, still broad and deep; all its housings are a light cool pale grey, matte, like pale concrete, never khaki or olive; the edges of the housings are rubbed slightly paler from long use. Leave the dark collar and everything on and above it exactly as it is.
>
> A documentary photograph, not a render.

Images generated: seventeen (two for the portrait, fifteen for the frames); requests refused: eleven.

## 2026-11-16 — Season 2 chapter illustrations, all fifteen (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 63, with the references each was sent. **Tool** for all fifteen: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; two takes per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1, the two plate edits at strength 0. Forty-three images in all.

### chapters/s02e01c01.jpg — filed 16 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same black cat on the same cream store, the same desk, grey sheet, bronze flask and man seen from above, the same window, floor, light, framing, focus and grain. Change only one thing: the door at the right. It is now a plain flush door of the same cream composite with softly rounded corners, standing a hand's breadth open, with no hinge showing, no handle, no lever, no glass slot and no window in it; through the gap only the foot of a plain pale stair is visible, with no chair and no furniture. Nothing else changes. No text, lettering or numerals anywhere.

### chapters/s02e01c02.jpg — filed 16 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s02e01c03.jpg — filed 16 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2 (take 1 was blocked by the generator), then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same low view down the office floor, the same cork matting and bars of evening light, the same desks and seats, the same man standing in exactly the same place and pose with the same clothes, the same black cat on the store, the same brown mug with two white rabbit ears, the same long window and dusk terraces, the framing, focus and grain. Change only two things.
>
> 1. The ceiling: it is now one plain seamless vault of cream composite with no panels, no recessed rectangles, no slots, no grilles and no light fittings of any kind, lit only by the evening light from the window.
>
> 2. The wall beside the narrow door at the far end: remove the small plate with the blue mark, so the wall is plain. The door stays shut and plain, with no handle.
>
> Nothing else changes. No text, lettering or numerals anywhere.

### chapters/s02e02c01.jpg — filed 16 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same black cat on the same barrier, the same tunnel, hoops, grey water mains and decking, the same woman with exactly the same face, red hair, build, stride and blue-grey uniform, the same plain baton in her hand, the framing, focus and grain. Change only two things.
>
> 1. Her uniform's chest: remove the row of small coloured ribbons and the small square patch, so that the cloth there is plain. Keep the single pale diamond-shaped patch and the round shoulder patch exactly as they are.
>
> 2. The two long bright white strips of light at the foot of the walkway's sides: they are no longer bright glowing tubes. The light there is now a low, soft, dim cool wash on the decking from a source hidden under the lip of each side wall, with no bright line, no tube and no glare; the walkway is a little darker and the cat and the woman are lit as before.
>
> Nothing else changes. No text, lettering or numerals anywhere.

### chapters/s02e03c01.jpg — filed 16 November 2026
- **Kind:** generation with references
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s02e03c02.jpg — filed 16 November 2026
- **Kind:** generation from text, then an edit
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same black-and-white sheepdog flat on the frozen track with exactly the same pose, coat, eye and gaze, the same track, frost, dry-stone walls, snow, hills, far sheep and grey sky, the framing, focus and grain. Change only these things, all of them in the soft background.
>
> 1. The wooden posts along the walls and beside the gate: each is now a slim plain marker post of smooth pale grey composite with a softly rounded top and one very small steady pale light near the top. There is no wire, rail or mesh between any of them.
>
> 2. The gate: a plain low gate of slim upright bars of dark matte composite with softly rounded corners and no cross-brace, no hinges showing, no latch and no bolt; on its post one small smooth sealed housing with a single pale indicator.
>
> 3. The long stone house: keep its stone walls and its dark seamless roof. Along the wall just under the eave runs one smooth sealed conduit, a plain pale grey pipe-like housing with rounded ends. On the gable end, high up, a small rounded cradle of pale composite is fixed to the stone, and in it rests one small plain field drone, a smooth pale grey pod the size of a loaf with no rotors showing, at rest.
>
> 4. In the grey sky above the far hills, one thin perfectly straight pale thread climbs steeply and fades: the trail of a distant ascent to orbit.
>
> Nothing else changes. No person, no vehicle, no wire, no poles with cables, no aerial, no satellite dish. No text, lettering or numerals anywhere.

### chapters/s02e03c03.jpg — filed 16 November 2026
- **Kind:** edit of Dermot's photograph `F:\112GLEND\_DSC0747.JPG` (cropped to 16:9)
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2 filed at finish 0.

### chapters/s02e04c01.jpg — filed 16 November 2026
- **Kind:** edit of Dermot's photograph `F:\115GLEND\_DSC0936.JPG` (cropped to 16:9), with `sorcha.jpg` as a reference
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed at finish 0.

### chapters/s02e05c01.jpg — filed 16 November 2026
- **Kind:** generation with references
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s02e06c01.jpg — filed 16 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same black cat sitting on the same dark desk with exactly the same pose, coat, eyes, collar and tag, the same woman with exactly the same face, hair, expression, grey jacket and maroon top, her hands and the pale sheets, the tray, the green woven wall, the window and its terraces, the light, framing, focus and grain. Change only one thing: the chair she is sitting on. The pale mesh-backed office chair is gone. Her seat is now a low rounded seat of moulded cream composite with a thin upholstered pad of moss-green woven cloth on its back, with no mesh, no armrests, no levers, no wheels and no headrest; only the top of its rounded back shows behind her shoulder. Nothing else changes. No text, lettering or numerals anywhere.

### chapters/s02e07c01.jpg — filed 16 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 2 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same white lop-eared rabbit at the rim of the same pale crate, the same sleeping grey-and-white cat with exactly the same pose and markings, the same rust-red and ochre quilt, the same lifted oatmeal blanket, the same berth, bunk and window, the light, framing, focus and grain. Change only one thing: among the small objects lying on the quilt beside the cat, remove the black folding paper clip with its wire handles, and put in its place one small plain crimp of dull grey metal, a simple smooth U-shaped piece the size of a thumbnail with no wire handles. The stylus, the reel of pale tape, the spoon and the small dark block stay exactly as they are. Nothing else changes. No text, lettering or numerals anywhere.

### chapters/s02e08c01.jpg — filed 16 November 2026
- **Kind:** generation with references
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s02e09c01.jpg — filed 16 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s02e10c01.jpg — filed 16 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same walkway floor, the same standing legs with exactly the same clothes and shoes, the same gloves, spoon, small blue shoe, cloth bags, beaker, rolled apron and covered dish on the floor, the same lit doorway and window, the same brown rabbit with upright ears sitting in the same place, the light, framing, focus and grain. Change only one thing: the carrier the rabbit sits in. The plastic pet carrier with barred vents, clips and a grey handle is gone. In the same place and at the same size stands a low rounded carrying case made with care: one smooth seamless shell of pale sand-coloured composite shaped like a loaf with softly rounded corners, a soft flat grip of undyed woven cloth along its top, and its whole front closed by one panel of fine pale woven mesh through which the rabbit is plainly seen, turned three-quarters away and looking at the inside wall of the case. No bars, no slots, no vents, no clips, no latches, no screws, no hinges and no logo. Nothing else changes. No text, lettering or numerals anywhere.

### chapters/s02e11c01.jpg — filed 16 November 2026
- **Kind:** generation from text
- **Source:** `images.md` § 63.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2 filed.

## 2026-11-16 — Season 2 frame fixes (Opus, desktop)

At Dermot's *"Yes fix the Season 2 frames when ready"*. Why each was fixed and what was kept is in `images.md` § 63, *Fixes, 16 November 2026*. **Tool** for all: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per call, each an edit of the filed frame or of the previous edit's kept take; filed at 1600×893 with `import-image.ps1`. Nine calls, eighteen takes.

### chapters/s02e03c02.jpg — fixed 16 November 2026
- **Kind:** image edit of the filed frame
- **Inputs:** filed frame + `src/images/characters/donncha-o-laoire.jpg` (building idiom only).
- **Run:** edit 1 take 1 of 2 filed, finish 1.
- **Edit prompt:**

> Edit the attached photograph, a black-and-white sheepdog lying flat on a frozen farm track with a stone house, a gate and walls behind him. Keep the dog exactly as he is: the same pose, fur, frost, eye, size and place in the frame, sharp. Keep the frozen track, the low dry-stone field walls, the snow hills, the far dog and sheep, the flat grey sky, the thin straight trail climbing the sky, the long lens's soft background, the colour and the grain. Make only these changes, all of them in the soft background, to the made things, so that the holding reads as a hill farm eight centuries from now and not as a farm of today.
>
> First, the house. It stays a long low single-storey building in the same place and size, but it is now a weatherproofed stone longhouse of this later century: walls of large sealed pale grey stone panels with fine straight joints, no rubble masonry and no pointing; a plain dark seamless roof with no slates, no gutters, no downpipe and no chimney; and under the whole length of the eave three parallel smooth grey heating conduits running side by side, turning down at the gable end. On the gable, in a shallow recess built into the wall near the ridge, sits a folded field drone in its cradle: a smooth flat grey body with its arms folded close, plainly a small aircraft at rest, not a lamp. Deep small windows set flush with no frames showing. The glasshouse at its end stays, with a plain frame.
>
> Second, the gate. The present-day barred field gate is gone. In the gap in the wall stands the century's gate: one single solid leaf of matte dark grey composite, smooth and seamless, standing shut, flush with the wall's line, with no bars, no rails, no hinges showing, no latch and no handle, and one small sealed housing on the wall beside it with a single steady pale indicator.
>
> Third, the posts. The slim pale posts along the walls stay, sensor posts with no wire between them; leave them as they are.
>
> The reference image shows this century's idiom on another holding (sealed stone panels, conduits under the eave, a gable, sensor posts, a plain dark door leaf): take only that building idiom from it, and nothing else: not its man, not its goats, not its light, not its framing.
>
> Nothing else is added: no person, no vehicle, no wire, no poles, no power lines, no smoke, no lamp on the wall. No text, lettering or numerals. A documentary photograph, not a render and not an illustration.

### chapters/s02e03c03.jpg — fixed 16 November 2026
- **Kind:** image edit of the filed frame (two edits)
- **Inputs:** filed frame (on his plate `F:JGLEND\_DSC0747.JPG`) + `donncha-o-laoire.jpg` for edit 1; edit 1 take 1 for edit 2.
- **Run:** edit 2 take 2 of 2, then the house box and the wall band composited (feathered 12 px) onto the filed frame so the hillside keeps its filed pixels; finish 0.
- **Edit prompt 1:**

> Edit the attached photograph, a winter valley in low sun: a steep mountainside of pines and bare larches above a green field, a long low stone house at the foot of the slope, and a dry-stone wall with a small gate and a black-and-white sheepdog in the foreground. This is a real photograph: keep the land and the light exactly as they are. The same mountainside, every tree, the green field, the rough tawny grass, the low sideways winter sunlight, the sky, the colour, focus and grain; the same dry-stone wall in the same place; the same dog in the same place and pose. Change only the made things, so that the holding reads as a hill farm eight centuries from now and not as rural Ireland today.
>
> First, the house. It stays a long low single-storey building at the same spot and size, but it is now a weatherproofed stone longhouse of this later century: walls of large sealed pale grey stone panels with fine straight joints in place of rubble masonry; a plain dark seamless roof with no slates, no gutters and no chimney; three parallel smooth grey heating conduits running the whole length under the eave and turning down at the gable; deep small windows set flush with no frames showing; a plain flush dark door leaf with no handle. On the near gable, in a shallow recess close under the ridge, sits a folded field drone in its cradle: a small smooth grey aircraft at rest with its arms folded close. The glasshouse at its end stays.
>
> Second, the gate. The present-day barred gate is gone. In the same gap in the wall stands the century's gate: one single solid low leaf of matte dark grey composite, smooth and seamless, standing shut, with no bars, no rails, no hinges showing, no latch and no handle, and one small sealed housing on the wall beside it with a single pale indicator. The dog is where he is, nose down by the wall near the gate.
>
> Third, on the green field beyond the wall, between the wall and the house, a short line of four slim pale grazing-fence sensor posts stands in the grass with no wire between them, small at this distance. Close to the house's far end, small, a low smooth yard robot, a rounded grey body on wheels, stands at rest.
>
> Fourth, the thin straight white trail in the sky stays as it is: the trail of an ascent javelin gone up to orbit a little while ago.
>
> The reference image shows this century's idiom on another holding (sealed stone panels, conduits under the eave, a gable, sensor posts with no wire, a plain dark door leaf): take only that building idiom from it, and nothing else: not its man, not its goats, not its light, not its framing.
>
> Nothing else is added: no person, no sheep, no second dog, no vehicle, no road, no wire fence, no poles, no power lines, no smoke. No text, lettering or numerals. A documentary photograph, not a render and not an illustration.

- **Edit prompt 2:**

> Edit the attached photograph. Keep everything exactly as it is, every tree, the house, the glasshouse, the wall, the gate, the dog, the posts, the light, colour, focus and grain. Make only one change: the small low grey rounded machine standing on the grass near the far end of the house, to the right of the house, is gone, and the green grass continues there unbroken. Nothing else changes and nothing is added: no vehicle, no car, no person. No text. A documentary photograph.

### chapters/s02e04c01.jpg — fixed 16 November 2026
- **Kind:** image edit of the filed frame (two edits)
- **Inputs:** filed frame (on his plate `F:MGLEND\_DSC0936.JPG`); edit 1 take 1 for edit 2.
- **Run:** edit 2 take 1 of 2 filed, finish 0.
- **Edit prompt 1:**

> Edit the attached photograph, a close view of an old stone doorway with an old woman's hand laid flat on its stone. Keep the photograph's stones as they are, their colour, lichen and weathering, the inner round-headed doorway opening on darkness, the woman, her coat, her hair and her hand exactly where it lies, the cool evening light with its faint warm edge on her hand, the framing, focus and grain. Make only these changes, so that this is the doorway of an old cold-cellar dug into a hillside, dry-walled, and not the doorway of a church.
>
> First, the pointed outer arch is gone: no point, no gothic arch, no church arch. In its place, at the same width, the outer opening is spanned by a low plain round-headed arch of rough unshaped stones laid on edge, of the same grey and buff stone as the photograph, with no keystone and no carved or dressed arch stones.
>
> Second, every wall in the picture is dry-walled: the same rough grey stones, laid by hand with no mortar at all, so that between the stones there are dark open gaps and small stones packed into them, and no pale mortar lines, no pointing and no render anywhere.
>
> Third, above the arch the wall's top course is capped with turf, and the green grassy slope of the hill the cellar is dug into rises behind and above it at the top of the frame.
>
> Her hand stays where it is, flat on the stone at the right of the opening.
>
> Nothing else is added: no door, no gate, no grille, no lamp, no cross, no carving, no niche, no animal, no second person. No text, lettering or numerals. A documentary photograph, not a render and not an illustration.

- **Edit prompt 2:**

> Edit the attached photograph, an old woman's hand laid flat on the stone of a cellar doorway dug into a grassy hillside. Keep every stone exactly where and as it is, its shape, colour, lichen and weathering; keep the turf-capped arch, the grassy slope above, the inner doorway opening on darkness, the woman, her coat, hair and hand exactly where it lies, the cool evening light, the framing, focus and grain.
>
> Make only one change: the walls are dry-walled, with no mortar anywhere. Wherever pale grey mortar fills the joints between the stones, in the side walls, the jambs, the lower walls and around the inner doorway, the mortar is gone: the joints are dark open gaps of shadow between the stones, with small flat stones packed into the wider gaps here and there, as in a wall laid by hand without mortar. Where a large smooth patch of mortar or render covers the wall at the lower left, it is gone too and the stones behind it show, laid dry. Do not move, reshape or replace the stones themselves.
>
> Nothing else changes and nothing is added: no door, no gate, no lamp, no cross, no carving, no animal, no second person. No text, lettering or numerals. A documentary photograph, not a render and not an illustration.

### chapters/s02e10c01.jpg — fixed 16 November 2026
- **Kind:** image edit of the filed frame (two edits)
- **Inputs:** filed frame; edit 1 take 2 for edit 2.
- **Run:** edit 2 take 2 of 2 filed, finish 1.
- **Edit prompt 1:**

> Edit the attached photograph, a pale walkway seen from floor level through the standing legs of a still crowd, with small belongings set down on the floor and a rabbit in a rounded carrying case at the left. Keep the composition, the floor, the light, the window onto green terraces, the lit doorway, the carrying case and the rabbit exactly as they are, and keep every object on the floor (gloves, spoon, bags, beaker, scarf, rolled apron, covered dish) where it is. Make only these changes.
>
> First, the clothes on the legs. Nothing may look like clothing of today. No denim, no jeans, no chinos, no cargo trousers, no jogging bottoms, no socks showing. Dress every leg in the clothing of a habitat eight centuries from now: long, loose, softly draped garments of matte undyed and earth-dyed woven cloth (ochre, slate blue, moss green, oat grey), cut differently from anything worn today: long wrap skirts and divided wrap trousers that fold and tie at the hip and fall straight to the ankle with no seams down the leg, no pockets, no belt loops, no turn-ups, no zips; the hems of long work aprons and of knee-length tunics hanging over them. Fabric with a real weave, creases and softness.
>
> Second, the shoes. No trainers, no sneakers, no laces, no soles with treads, no chelsea boots with elastic panels, no loafers, no socks. On every foot is the century's deck shoe: a seamless soft one-piece slipper-boot of matte felted cloth or soft matte composite, rounded at the toe, close-fitting at the ankle, with a thin flexible sole that shows no tread, in grey, oat, slate or moss. The small child's shoe on the floor becomes a soft seamless blue cloth slipper of the same kind, with no strap and no sole edge.
>
> Third, loosen the crowd if you can without moving the camera: the legs need not stand in two neat rows like a queue; a few stand a little out of line, toward the middle of the walkway, so it reads as a crowd that has stopped where it was, all facing toward a point deep in the middle of the picture.
>
> Nothing else changes and nothing is added: no faces, no heads in the foreground, no animal outside the case, no bags with logos, no phones. No text, lettering or numerals. A documentary photograph, not a render and not an illustration.

- **Edit prompt 2:**

> Edit the attached photograph. Keep everything exactly as it is: the floor, the light, every object on the floor, the carrying case and the rabbit, the right-hand side of the picture, every shoe, the doorway and the window. Change only the clothing on the row of legs at the left of the picture (the ochre legs at the far left, the blue legs behind the carrying case, the grey-green and olive legs beyond them), because they read as present-day jeans and chinos.
>
> Re-dress those legs, keeping each person exactly where they stand and keeping the colours (ochre, slate blue, grey-green, olive): no denim, no jeans, no chinos, no patch pockets, no hip pockets, no side seams, no belt loops, no turn-ups, no topstitching. The ochre legs wear long loose divided wrap trousers of soft matte woven cloth that cross over and tie at the hip and fall in soft folds to the ankle. The slate-blue legs become a long straight wrap skirt of soft matte woven cloth to the ankle, its overlap and tie at the hip. The grey-green and olive legs wear knee-length plain tunics of woven cloth over loose gathered leggings of the same cloth, gathered at the ankle. Fabric with a real weave and creases.
>
> Nothing else changes and nothing is added. No faces, no text, lettering or numerals. A documentary photograph, not a render and not an illustration.

### chapters/s02e01c01.jpg — fixed 16 November 2026
- **Kind:** image edit of the filed frame (two edits)
- **Inputs:** filed frame; edit 1 take 1 for edit 2.
- **Run:** edit 2 take 2 of 2 filed, finish 1.
- **Edit prompt 1:**

> Edit the attached photograph, a black cat on top of a tall cream cabinet looking down at a pale desk, with a man's head and shoulder beside the desk. Keep everything exactly as it is: the cat, his pose, fur and collar; the man, his hair and hand; the room, the window and the terraces through it, the light, colour and grain. Change only the two objects on the desk, so that neither looks like a thing of today.
>
> First, the grey sheet. At the moment it reads as a present-day folder or a sheet of card. Replace it, in the same place, with the century's form: one very thin rigid leaf of matte dark slate-grey material, thinner than a fingernail, lying perfectly flat on the desk with sharp straight edges and softly rounded corners, no fold, no spine, no flap, no cover, no pocket, no binding and no raised edge, a little darker than the desk and catching the window light on its matte face like stone. Blank and unlit: nothing on it glows.
>
> Second, the bronze flask. At the moment it reads as a present-day drinking bottle with a shoulder, a neck and a cap. Replace it, in the same place and about the same height, with a smooth sealed capsule of matte dull-bronze ceramic: a long upright ovoid with both ends evenly rounded like an egg, no shoulder, no neck, no cap, no lid, no handle, only one hair-fine seam around it a little below the top.
>
> Nothing else changes and nothing is added. No text, lettering or numerals. A documentary photograph, not a render and not an illustration.

- **Edit prompt 2:**

> Edit the attached photograph. Keep everything exactly as it is: the cat, the man, the room, the window, the bronze capsule on the desk, the light, colour and grain. Change only the dark leaf lying on the desk, because at the moment it reads as a present-day tablet or a mouse mat.
>
> In the same place and at the same size, it becomes a very thin flat leaf of pale warm grey stone-like material, a little darker than the desk and close to its colour, thin as a sheet of slate veneer, with sharp square corners and a fine straight edge that shows its thinness, lying perfectly flat. Its matte face has the faint grain of stone and is entirely blank. It does not look like a tablet, a phone, a screen, a mouse mat, a folder, a book, a clipboard or a sheet of paper or card. Nothing on it glows.
>
> Nothing else changes and nothing is added. No text, lettering or numerals. A documentary photograph, not a render and not an illustration.

## 2026-11-16 — Jeeves re-made like Rook-7: three rounds, none filed yet (Opus, desktop)

Dermot, verbatim: *"Similar treatment for Jeeves"*. The record, the design inference and the verdicts are in `images.md` under `jeeves.jpg`. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K; no refusals. Takes kept outside the repository; the filed frame stands until he picks. Images generated: six.

- **Round 1**, `scripts/image-prompts.js --generate --only jeeves`, two takes:

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape. A household robot in the small galley kitchen of a flat aboard a space habitat, seen from the hips up in three-quarter view at standing eye height. It is setting one cup on its saucer down at a single place laid on a scrubbed wooden table, and its head is turned a little toward the doorway at the side of the frame, as if listening for someone coming home.
>
> The robot is tall, slender and human-shaped, and plainly a machine. Its shell is matte ivory-grey composite, the grey of pale stone, in long smooth moulded forms with softened edges and fine deliberate seams. Each joint is covered by a smooth sleeve of the same grey. Its hands are long, slim and finely jointed. Its head is a smooth rounded form with no face at all, and two small round dark lenses sit close together low on its front, like a camera's, plainly instruments. Over the shell it wears a plain dark fitted waistcoat of real cloth.
>
> The kitchen is tidy and kept: smooth pale composite walls curving into the ceiling, a galley counter of the same with plain handleless cupboards, a folded cloth, and one small round viewport showing the habitat's green interior curving upward in the distance.
>
> Photographed, not rendered: high-ISO grain, a real lens with slight softness toward the corners, a touch under-exposed, muted natural colour.
>
> Negative: no human face, no eyes, no mannequin, no crash-test dummy, no glossy white plastic, no exposed mechanism, no rivets, no oven, no cooker hood, no coffee machine, no kettle, no tray, no screens, no lamps, no lettering, no numbers, no 3D render.

- **Round 2**, the same, two takes (take 1 is option A in the PR):

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape. One household robot, alone, in the small galley kitchen of a flat aboard a space habitat, seen from the hips up in three-quarter view at standing eye height. It is setting one cup on its saucer down at a single place laid on a scrubbed wooden table, its head turned a little toward the open doorway at the edge of the frame, as if listening for someone coming home.
>
> The robot is tall and human-shaped, and plainly a machine, not a person and not a mannequin. Its trunk is broad and softly rounded, moulded in one piece of matte ivory-grey composite, the grey of pale stone. Its arms are long, sheathed in smooth continuous sleeves of soft grey material, with no visible joints. Its hands are slim and finely jointed. Its head is not a skull: it is a low, smooth, rounded cowl, wider than it is tall, tilted slightly forward, and set in its front edge are two small round dark lenses, one above the other. Over the trunk it wears a plain dark fitted waistcoat of real cloth.
>
> The kitchen is tidy and kept: smooth pale composite walls curving into the ceiling, a galley counter of the same with plain handleless cupboards, a folded cloth, and one small round viewport showing the habitat's green interior curving upward in the distance.
>
> Photographed, not rendered: high-ISO grain, a real lens with slight softness toward the corners, a touch under-exposed, muted natural colour.
>
> Negative: only one robot, no face, no pair of eyes, no alien head, no egg-shaped head, no mannequin, no wooden lay figure, no crash-test dummy, no glossy white plastic, no exposed mechanism, no rivets, no oven, no cooker hood, no kettle, no tray, no screens, no lamps, no lettering, no numbers, no 3D render.

- **Round 3**, `scripts/image-edit.js` on round 2 take 1, two takes (take 1 is option B in the PR):

> Edit this photograph. Keep everything exactly as it is: the kitchen, the table, the cup and saucer, the folded cloth, the round viewport, the robot's body, waistcoat, arms, hands and pose, the framing, light and grain.
>
> Change only the robot's head and neck. Replace the large boxy head with a smaller head, about the size of a person's head: a smooth rounded form like a river pebble, a little longer front to back than it is tall, matte pale stone-grey, with no face. Two small round dark lenses sit recessed one above the other in the front of it, small and plain. The neck is short and thick, covered by the same soft grey sleeve as the arms, so the head grows smoothly out of the shoulders. The head is tipped slightly down and turned a little toward the doorway on the right.
>
> Change also the view through the doorway on the right: a short pale corridor of the same smooth composite, not green.
>
> No face, no pair of eyes side by side, no camera, no projector, no box, no egg, no alien, no text. A documentary photograph, not a render.

### characters/jeeves.jpg — kitchen fixed, re-filed 16 November 2026

Dermot, verbatim: *"Keep, fix the kitchen"*.

- **Kind:** an edit of the filed frame, no reference
- **Source:** the filed `src/images/characters/jeeves.jpg` (11 October).
- **Run:** `scripts/image-edit.js`, round 1 of 1, two takes, take 2 filed after a 10-pixel crop each side to 16:9, 1200x675, strength 1. Images generated: two.
- **Prompt:**

> Edit this photograph. Keep the robot exactly as it is: its body, head, lenses, waistcoat, pose, hands, the tray, cup and cloth. Keep the wooden table, the round window and its view, the camera angle, light and grain.
>
> Change only the kitchen behind the robot. Make it a plain, tidy galley: smooth pale curved walls and a counter of the same, with flat closed cupboard fronts that have no handles. Remove the oven, the hood above it, the coffee machine, the kettle, the jars, the shelf, the utensil pot and spoons, the paper towel, the bottles, the dish rack, the tap, the wall socket and the switch. The counter is bare except for one folded cloth.
>
> No appliances, no text, no numbers. A documentary photograph, not a render.

## 2026-11-16 — Season 3 chapter illustrations, all eleven (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 64, with the references each was sent. **Tool** for all eleven: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; two takes per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1. Thirty-nine images in all: twenty-one first-pass takes of twenty-two asked (the second take of `s03e01c04` was refused as *prohibited content*) and eighteen edit takes.

### chapters/s03e01c01.jpg — filed 16 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s03e01c02.jpg — filed 16 November 2026
- **Kind:** generation from text alone
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s03e01c03.jpg — filed 16 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same grey-violet limb with its skin, creases, small dark eyes and the one small warmer patch, the same desk and the same dark ceramic instrument with its shallow well of clear liquid, its pale stone disc and its one small indicator. Change only one thing: the instrument now stands a little nearer the limb, and the blunt rounded tip of the limb is raised slightly and rests lightly on top of the pale stone disc, pressing it, the way a careful person rests one fingertip on a key they are about to press. The tip stays blunt and rounded, the same skin as the rest, with no nail, no sucker and no pad. Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e01c04.jpg — filed 16 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 (take 2 was refused by the generator), then edit take 1 of 2, with the first-pass variation 2 of `s03e01c03` as the second image.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same woman seen from behind, the same grey-violet being at the desk with exactly the same body, limbs, eyes and skin, the same desk, platform, walls and doorway. Change only one thing: the small dark cube standing on the desk. It is now the instrument shown in the second image: a low rounded block of dark matte ceramic the size of two fists, with one small steady pale indicator on its side and, set into its top, a shallow round well of clear liquid beside a small flat disc of pale stone. It stands in the same place on the desk. Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e01c05.jpg — filed 16 November 2026
- **Kind:** generation from text alone, then an edit, a hand clone and a crop
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2 (the collar tab to seven bars). A second edit of two takes for the palm tab was not used: one take left five bars and the other mangled the tab. One of the palm tab's own bars was then cloned one pitch to the left (PIL, a feathered parallelogram mask, no generator), and the frame was cropped to its lower 93% at 16:9 to take her mouth out.
- **Edit prompt (used):**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same hands, the same blue-grey cloth and collar, the same strand of red hair, the same small metal tab lying in the open palm, the same window. Change only one thing: the small brushed-metal tab on the collar. It keeps its size, its place, its angle, its brushed pale metal and its narrow slate-blue stripe along the bottom, but it now carries seven short raised bars side by side, evenly spaced, one more than before, so the row of bars fills the width of the tab. Count them: seven bars. Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

- **Edit prompt (second, not used):**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same hands, the same blue-grey cloth and collar, the same strand of red hair, the same window, and the tab on the collar exactly as it is with its seven bars and slate-blue stripe. Change only one thing: the small brushed-metal tab lying in the open palm. It keeps its place, its size, its angle, its brushed pale metal and its small grey-green stripe at one end, but it now carries six short raised bars side by side, evenly spaced, one more than before. Count them: six bars. Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e02c01.jpg — filed 16 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 2 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same room, the same long window, grey sea and pale curved dock arm, the same dark slate table and grey slates, and every person exactly as they are, with the same faces, hair, poses and places. Change only three things.
>
> 1. The chairs: every chair in the room is now a plain moulded seat of pale blue-grey composite in one piece, with a low rounded back and a thin dark pad, standing on a single smooth stem. No metal frames, no dark slatted backs, no chair legs.
>
> 2. The ceiling: it is now one plain smooth vault of the same pale blue-grey composite, with no panels, no recessed rectangles and no light fittings.
>
> 3. The olive-green jacket of the man sitting nearest the woman in the foreground: it is now a plain deep olive field shell of matte cloth with a stand collar and a sealed front, with no knitted cuffs or waistband, no zip, and no pocket on the sleeve.
>
> Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e02c02.jpg — filed 16 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same open grey log of two leaves on the sill, the same dark stylus lying beside it, the same hand and cuff at the right, the same dock with its cream walls, its rounded pressure door and its window of blue dusk. Change only two things.
>
> 1. The seat the cadet sits on: it is now a plain bench of the same cream composite growing out of the wall in one piece, with a rounded front edge and a thin grey pad. No separate chair, no chair shell, no chair legs.
>
> 2. The cadet: the frame shows the cadet only from the shoulders down. No chin, no mouth, no face. The small patch on the chest is one small plain pale metal tab with two short raised bars.
>
> Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e02c03.jpg — filed 16 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same red-haired woman sitting on the same pale bin, with exactly the same face, hair, pose, gloves and blue-grey uniform and the same small grey piece in her ear; the same rounded white shelter, frost, breath and opening of pale light; the same three pale ovoids. Change only two things.
>
> 1. The older woman standing at the far end with her back to us: below her olive jacket she now wears matching plain deep olive insulated trousers of the same matte cloth, with no cargo pockets, and soft seamless dark boots with no laces and no heavy tread. Her grey hair, jacket and pose are unchanged.
>
> 2. The bench she stands at: it is now one plain pale plinth that grows up out of the deck in a single piece with rounded edges, solid to the floor, with the three ovoids seated in shallow recesses on its top. No table legs, no trestle.
>
> Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e02c04.jpg — filed 16 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same tall corridor of pale stone, the same slot of daylight overhead, the same oak bench, the same grey-haired woman sitting in exactly the same place and pose with the same face and olive uniform, the same tall flush door with its fine dark seal and the small pale indicator beside it. Change only two things.
>
> 1. The round dark housing set in the wall above the door: it is now a sealed timekeeping instrument of this century. It keeps its place and size. It is a smooth ring of dark matte ceramic set flush in the stone, and in its middle a small round sight port of very thick glass, and deep inside the glass one tiny soft point of violet light, steady, like a few glowing atoms held in a trap. It has no clock face, no hands, no numerals and no marks.
>
> 2. Her shoes: she now wears soft seamless dark boots with no laces, no buckles and no heavy tread.
>
> Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e03c01.jpg — filed 16 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 2 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is except what is named below: the same framing, light, colour, focus and grain. Keep the same woman with exactly the same face, hair, expression and pose, the same slim stylus in her hand, the same dark blue-grey desk, the same neat stack of grey leaves, the same window with the grey sea, the same walls and light. Change only two things.
>
> 1. The single grey leaf she is writing on: its surface is now completely blank, plain and matte, with no lines, no marks and no writing of any kind anywhere on it. The stylus tip still rests on it.
>
> 2. Her olive jacket: it closes down the front with one plain sealed seam, with no buttons, no button holes and no chest pocket flaps. Its colour, cloth, collar and the small rank tab with one ring are unchanged.
>
> Nothing else changes. No text, lettering or numerals anywhere. A documentary photograph, not a render.

### chapters/s03e03c02.jpg — filed 16 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md` § 64.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.


## 2026-11-16 — Season 3 frame fixes and heroes (Opus, desktop)

Dermot's *"Yes please fix"* to the points of `images.md` § 64. The record of the round is `images.md` § 64, *Fixes, 16 November 2026*. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K; chapter edits at 16:9, heroes at 3:2. Every kept take was finished at strength 1 by `scripts/photo-finish.py`.

### chapters/s03e01c03.jpg — fixed 16 November 2026
- **Kind:** an edit of the filed frame
- **Source:** the filed `s03e01c03.jpg` only.
- **Run:** two edits of two takes each. Filed: the first edit, take 2, at 1600 px. The second edit (a sliver of the body at the right edge) drew an elephant's flank in both takes and was not kept.
- **Prompt (filed):**

> Edit this photograph. Keep everything exactly as it is: the low rounded block of dark matte ceramic standing on the left of the pale desk, with its one honest seam, its one small steady pale indicator, the shallow round well of clear liquid and the small flat disc of pale stone set into its top; the pale matte desk top and its rounded edge; the smooth warm taupe walls behind, out of focus, in shadow; the soft low light, the framing, the focus and the grain.
>
> Change only one thing: remove the long slate-violet limb and the body it comes from, entirely. Nothing living is in the frame. Where the limb lay, the pale desk top runs on, bare and continuous, with only a faint soft shadow; on the right of the frame, the out-of-focus warm taupe wall continues as it does on the left.
>
> On the surface of the clear liquid in the instrument's well, a few very faint concentric ripples, as if the stone disc had just been touched; nothing else moves.
>
> No limb, no tentacle, no trunk, no arm, no hand, no finger, no skin, no eyes, no creature anywhere in the frame. No new objects. No screens, no glow, no lettering, no numerals. A documentary photograph, not a render.

- **Prompt (not kept):**

> Edit this photograph. Keep exactly as it is: the low rounded block of dark matte ceramic standing on the left of the pale desk, with its one honest seam, its one small steady pale indicator, the shallow round well of clear liquid and the small flat disc of pale stone set into its top; the pale matte desk top; the smooth warm taupe walls behind, out of focus; the soft low light, the focus and the grain.
>
> Change only the being on the right. Remove the long limb that lies across the desk and reaches the instrument: the desk between the instrument and the right edge is bare. At the very right edge of the frame, only just in the picture, soft and out of focus in shadow, is a narrow sliver of the being's slumped body: a wall of dry matte slate-violet skin falling into loose folds and deep creases, cut off by the frame edge, with no outline, no end, no tip and no limb leaving it, occupying no more than the last tenth of the frame's width. It reads only as a large soft creased mass beside the desk, nothing more.
>
> No limb across the desk, no tentacle, no trunk, no arm, no hand, no finger, no suckers, no eyes, no head, no face. No new objects. No screens, no glow, no lettering, no numerals. A documentary photograph, not a render.

### chapters/s03e01c04.jpg — fixed 16 November 2026
- **Kind:** an edit of the filed frame, composited back onto it
- **Source:** the filed `s03e01c04.jpg` only.
- **Run:** round 1 of 1, two takes; take 1 finished at 1600 px, and its right-hand side from x = 760 (feathered 25 px) composited onto the filed frame so the woman is unchanged; the two hanging limb ends darkened and desaturated by hand (ellipses at 1070,630–1135,715 and 995,585–1060,640, feathered).
- **Prompt:**

> Edit this photograph. Keep everything exactly as it is: the woman in the left foreground seen from behind, her red hair in a knot, her dark blue-grey collar and shoulder; the dim taupe office, the low platform, the low broad bare desk and the small dark ceramic instrument with its pale indicator on it; the light, the framing, the focus and the grain. Keep the being's body where it is, at the same size, its dry matte slate-violet creased skin and its small dark eyes flush in the skin.
>
> Change only how the being's upper limbs lie:
> 1. The upper limb that rises into the air and curves over with a pale pink tip is lowered: it now lies folded back along the top of the body, close against it, its blunt end tucked into the folds, the same slate-violet as the rest. Nothing rises above the body; no limb stands up or curves in the air; no tip is pink or pale.
> 2. The limb resting on the desk lies short and close, curled back toward the body along the desk's near edge, not reaching out across the desk; its end is blunt and the same colour as the rest.
> 3. The limb that hangs beneath the desk stays in shadow; only one small patch on it, a few centimetres wide, is a shade warmer; its tip is the same slate-violet as the rest.
The body reads as one soft heap of folded limbs resting on its lower ones, wider than tall, deeply creased, with no part raised like a neck, a trunk or a head.
>
> No elephant trunk, no octopus, no tentacles, no suckers, no head, no neck, no face, no pink tips. No new objects. No screens, no glow, no lettering, no numerals. A documentary photograph, not a render.

### chapters/s03e01c01.jpg and chapters/s03e02c03.jpg — fixed 16 November 2026
- **Kind:** an edit of each filed frame, one prompt for both
- **Source:** the filed `s03e01c01.jpg`; the filed `s03e02c03.jpg`.
- **Run:** round 1 of 1 each, two takes each; take 2 filed in both, at 1600 px.
- **Prompt:**

> Edit this photograph. Keep everything exactly as it is: the same red-haired woman with exactly the same face, freckles, expression, pose, hands and clothing; the room, the light, the framing, the focus and the grain.
>
> Change only one small thing, at her ear: remove the small grey earbud from her ear completely. In its place, one loose strand of her red hair has slipped from the knot and falls down over her ear, so that the ear is covered by hair and nothing can be seen in it or on it.
>
> No earbud, no earpiece, no headphones, no wire, no device on her head. No new objects. No lettering, no numerals. A documentary photograph, not a render.

### hero/season-03-datacentre.jpg — filed 16 November 2026
- **Kind:** a fresh generation, text alone, 3:2, then an edit of the take
- **Source:** none. His coast frames were looked at and left out (`images.md` § 64, *Fixes*).
- **Run:** generation take 1 of 2, then edit take 1 of 2, filed at 1920×1288. This is the prompt of record; the stock data-hall photograph it replaces is a negative example.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 3:2 landscape, a wide level view taken from standing height, deep focus: the reading hall of the Survey Archive at Threshold Station, a Survey Corps shore station on a sea coast on Earth, on a grey autumn morning in the year 2829 UCSD, eight centuries from now. This is where the record keeps its working library, and it has no machines in it: the archive is the building. The hall is long, tall and quiet, kept with care: walls of pale warm-grey matte composite that rise into a plain shallow vault with no visible fitting, the walls and floor meeting in long rounded coves, honest flush seams between the panels. The whole right-hand wall, floor to vault, is one continuous face of closed flush stores, plain flat matte doors of pale grey composite, each exactly alike, with no handles, no labels, no numbers and no gaps, only fine dark seams in a regular grid, so the wall reads as a quiet surface and not as furniture. Down the middle of the hall runs a row of long plain reading tables of pale oiled oak with rounded ends, each bare except, here and there, one thin rigid matte slate lying flat, blank and unlit like a piece of stone, and a few stiff pale leaves squared beside it. Along the left wall, one long low sealed window of very thick glass in a deep rounded reveal looks out on a calm grey sea under a flat pale sky, and far out across the water the long, smooth, pale curved flank of the station's own dock arm lies low on the sea. The window is the hall's light, cool, level and soft, laying long pale reflections along the floor and the tables. Far down the hall, small in the frame, one archivist in a plain dark field shell sits alone at the last table, head bowed over a leaf, seen from the side, no face legible. Nobody else. Quiet, exact, patient: a place where claims are kept, not believed. Muted palette: pale grey, oak, cool sea light, one dark figure.
>
> Photographed, not rendered: high-ISO grain heavier in the shadows, a moderately wide lens with slight softness toward the corners, a touch under-exposed, muted natural colour, the small imperfections a real photograph keeps.
>
> Negative: no servers, no racks, no computers, no screens, no monitors, no glowing panels, no holograms, no projected light, no cables, no blinking lights, no indicator lights in rows; no bookshelves of printed books, no paper files, no folders, no ring binders, no filing cabinets with drawer handles, no card catalogue, no library ladders; no ceiling light panels, no strip lights, no lamps, no desk lamps, no chandeliers; no chairs with wheels, no stacking chairs; no signs, no labels, no numbers, no lettering anywhere; no grime, no rust, no dust; no museum, no church, no cathedral, no hospital; no 3D render, no film-set look.

- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the long pale vaulted reading hall, the wall of closed flush pale grey stores on the right, the row of oak tables down the middle, the one archivist bowed at the far table, the pale floor, the cool level light from the sea, the long curved pale flank of the dock arm lying low on the water, the camera position, the framing, the focus and the grain. Change only three things:
>
> 1. The long window on the left becomes one single unbroken pane of very thick glass from end to end, with no mullions, no vertical bars, no frames and no joints in it.
>
> 2. Far out over the sea, in the pale grey sky above the horizon and to the left of the dock arm, the thin straight pale trail of an ascent craft climbing steeply into the sky from beyond the horizon: a single fine soft white line rising at a steep slant and fading as it climbs, with one small bright point at its upper tip. It is small and distant, a quiet detail in the sky, not a dramatic launch: no fireball, no cloud of smoke, no rocket shape.
>
> 3. Everything lying on the tables is blank: the thin dark matte slates stay as they are, and the pale sheet on the nearest table is a plain stiff blank pale sheet with no drawing, no marks, no lines and no writing on it, and no pen.
>
> No new people, no new objects inside the hall. No lettering, no numerals, no screens, no glow, no lamps. A documentary photograph, not a render.

### hero/s03e01-radiotelescope.jpg — filed 16 November 2026
- **Kind:** a fresh generation, text alone, 3:2, then an edit of the take
- **Source:** none.
- **Run:** round 1, take 1 of 2; round 2 (the geometry sentence below) failed the same way and was not kept; then an edit of round 1's take 1, take 1 filed at 1920×1288 (take 2 returned no image). This is the prompt of record; the stock radio-telescope photograph it replaces is a negative example.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 3:2 landscape, a wide level view taken from standing height, deep focus, looking along an empty viewing gallery on the outer ring of Halyx Relay Station, a station of the Cerebraun Hegemony, during the station's night, in the late winter of the year 2828 UCSD, eight centuries from now. The station is a spun ring, so the gallery's floor visibly curves upward as it runs away from the camera, rising gently and steadily until it climbs out of sight at the top of the frame, with the ceiling curving up with it: the unmistakable rising floor of a rotating ring. The gallery is built by another people, low and wide, with no corners: smooth walls and ceiling of a warm dark taupe composite flowing into one another in long soft curves, the floor of the same material, clean and kept. Along the whole outer wall runs one long continuous low port of very thick glass, set deep in a smooth rounded reveal, and through it black space with a fine scatter of faint stars. In the port, large and low near the camera, the thin pale green crescent of a far ocean world, Meridian, its night side dark; and some way to its right, much smaller, a second world, the Sentinel, a small bare grey airless disc with a hard sunlit edge and nothing else. Nothing lights the gallery but a low dim wash along the foot of the inner wall from a source that cannot be seen, and the faint green of the crescent on the floor. Nobody is in the gallery. Quiet, patient, listening: a place from which two worlds have been watched for centuries. Muted palette: dark taupe, black, one thin pale green crescent, one small grey disc.
>
> Photographed, not rendered: high-ISO grain heavier in the shadows, a moderately wide lens with slight softness toward the corners, a touch under-exposed, muted natural colour, the small imperfections a real photograph keeps.
>
> Negative: no people, no creatures; no radio telescope, no satellite dish, no antenna, no lattice mast, no power lines; no screens, no monitors, no glowing panels, no holograms, no projected light, no indicator lights, no ceiling light panels, no strip lights, no lamps, no rivets, no pipes, no cables, no grilles, no vents, no hazard stripes, no signs, no numbers, no lettering anywhere; no seats, no benches, no handrails; no nebula, no galaxy, no Milky Way band, no lens flare, no spacecraft outside, no Earth, no Moon; no grime, no rust; no 3D render, no film-set look, no science-fiction corridor of lit panels.

- **Round 2 (not kept)** replaced the ring sentence with: *The station is a spun ring and the camera looks along its rim, so the gallery runs straight ahead away from the camera and never bends to the left or the right; instead its floor and ceiling curve upward together, the floor rising steadily ahead like the inside of a giant wheel's rim, so that the far end of the gallery is high above the camera and climbs out of sight at the top of the frame.* Both takes still bent the gallery sideways, and one read as a render.

- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the dark taupe gallery with its smooth curved walls and ceiling, the long low port of thick glass on the left, the thin pale green crescent of the far world and the small grey disc of the second world in it, the stars, the faint green light on the floor, the camera position, the framing and the grain. Change only the light fittings:
>
> 1. Remove the glowing strip of light along the foot of the right-hand wall: the cove where the wall meets the floor is now plain dark taupe composite, unlit, in shadow.
> 2. Remove the bright glowing rim of light around the edge of the port: its deep rounded reveal is plain matte taupe composite, lit only faintly by the green of the crescent.
>
> The gallery is darker than before: its only light is the faint green from the port and a very low, even, sourceless dimness. No strips, no glowing edges, no lamps, no new objects, no people. No lettering, no numerals. A documentary photograph taken with a real lens in low light, with grain, not a render.

## 2026-11-17 — Ulessa, Osune and Sohrel brought to their designs; S01E00C08 to match (Opus, desktop)

Dermot's *"Yes, as recommended"* (17 November 2026) to the options put to him after `images.md` § 61 and § 64. The record of the rounds and the picks is in `images.md`: the `ulessa.jpg` entry (§ 20), the `osune.jpg` entry (§ 23), the `sohrel.jpg` entry (§ 13), and § 61's 17 November note for `s01e00c08`. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, 16:9, two takes per job, each an edit of the filed frame with no reference; kept takes finished at strength 1 by `import-image.ps1`. Fourteen images in all, none refused.

### characters/ulessa.jpg — re-filed 17 November 2026
- **Kind:** two image edits, the second of the first's take 1
- **Source:** the filed `ulessa.jpg` (20 October 2026).
- **Run:** round 1, two takes (both fists; take 1 kept as the plate); round 2 of round 1's take 1, two takes; **round 2 take 1 filed** at 1200×670.
- **Round 1 prompt (head, membrane, limb tips):**

> Edit this photograph. Keep everything exactly as it is: the room, the walls, the floor, the pale table with its cream sheets and the empty chairs; the large ochre being's three tall arched legs, their padded feet, the hub where they meet, the thick wrinkled column, the deep rounded body slung beneath, the long curving neck and its position, her size, pose, colours and hide; the light, the framing, the focus and the grain. Change only three small things.
>
> 1. Her head. Keep its size, its place at the end of the neck and its smooth, rounded, blunt shape. Its front end is a plain smooth rounded end with no opening, no line across it and no marks on it. The underside of the head is smooth and unbroken from the neck to the tip, with no line or crease along it. She has one small dark deep-set eye on each side of the head, set well back and far apart, so that from this angle only the near eye shows, low on the side of the head, looking sideways, not forward; the far eye is hidden behind the curve of the head. On the top of the head, just behind its blunt front, lie two short thin closed slits side by side, running lengthwise along the head like two small seams in the hide.
>
> 2. The oval patch on the side of her hanging body. It is flush with the skin: a flat smooth oval of slightly paler, finer hide, level with the hide around it, not a hollow, hole, socket or recess.
>
> 3. The two short working limbs hanging beneath her body. Each ends in a small closed round bud: a soft rounded pad with clusters of short blunt digits folded closed over it like a bud, the same ochre hide as the limb, hanging still and touching nothing. No hooks, no curled tips, no claws, no nails.
>
> No other change. No new objects, no people, no text, no lettering, no numerals. A documentary photograph, not a render.

- **Round 2 prompt (limb tips only; filed):**

> Edit this photograph. Keep everything exactly as it is: the room, the table, the sheets and the empty chairs; the large ochre being, her three arched legs and padded feet, the hub, the column, the slung body with its pale flat oval patch, the long neck, the head with its one small eye on the side and the two thin slits on top; her size, pose, colours and hide; the light, the framing, the focus and the grain. Change only one thing.
>
> The two short working limbs hanging beneath her body. Each hangs straight down, slender and soft, with no bend in it, and ends in a small closed bud like an unopened flower bud: a rounded, slightly pointed tip formed of several short blunt lobes of the same ochre hide pressed tightly together and meeting at the point, with fine seams between them. The buds are smooth, closed and still, and touch nothing. They are no wider than the limb.
>
> No other change. No knuckles, no clenched shape, no hooks, no claws, no nails, no new objects, no people, no text, no lettering, no numerals. A documentary photograph, not a render.

### characters/osune.jpg — re-filed 17 November 2026
- **Kind:** an image edit of the filed frame, two rounds
- **Source:** the filed `osune.jpg` (edited 13 November 2026).
- **Run:** round 1, two takes, not kept (limbs drawn long, as extra legs); round 2, two takes, **take 2 filed** at 1200×670. Round 2's prompt is round 1's with the limbs' first sentence replaced by *Each is short, no longer than her head, held folded up close beneath the body, ending well above the floor and far above the feet, and ends …*.
- **Round 1 prompt:**

> Edit this photograph. Keep everything exactly as it is: the stone room, the window light at the left, the bench, the floor; the large ochre being's three tall arched legs, their padded feet, the hub where they meet, the column, the deep rounded body slung beneath, the long curving neck and its position, her size, pose and colours; the light, the framing, the focus and the grain. Change only three small things.
>
> 1. Her head. Keep its size, its place at the end of the neck and its smooth, rounded, blunt shape. Its front end is a plain smooth rounded end with no opening, no line across it and no marks on it. The underside of the head is smooth and unbroken from the neck to the tip, with no line or crease along it. She has one small dark deep-set eye on each side of the head, set well back and far apart, so that from this angle only the near eye shows, low on the side of the head, looking sideways, not forward. On the top of the head, just behind its blunt front, lie two short thin closed slits side by side, running lengthwise along the head like two small seams in the hide.
>
> 2. The banding. The darker umber bands stay only across the hub, the column and the top of the body. The legs and the neck are plain warm ochre and russet with no stripes.
>
> 3. The two short working limbs hanging beneath her body. Each hangs straight down, slender and soft, with no bend in it, and ends in a small closed bud like an unopened flower bud: a rounded, slightly pointed tip formed of several short blunt lobes of the same ochre hide pressed tightly together and meeting at the point, with fine seams between them. The buds are smooth, closed and still, and touch nothing. They are no wider than the limb.
>
> No other change. No knuckles, no clenched shape, no hooks, no claws, no nails, no new objects, no people, no text, no lettering, no numerals. A documentary photograph, not a render.

### chapters/s01e00c08.jpg — re-filed 17 November 2026
- **Kind:** an image edit of the filed frame, two rounds
- **Source:** the filed `s01e00c08.jpg` (16 November 2026, Ulessa re-made).
- **Run:** round 1, two takes, not kept (limbs drawn long, as extra legs); round 2, two takes, **take 2 filed** at 1600×893. Round 2's prompt is round 1's with the same one-sentence change as Osune's.
- **Round 1 prompt:**

> Edit this photograph. Keep everything exactly as it is: the green vanes and the low sun through them, the grey-green hide at the bottom, the terrace, parapet, sky and light; and the large ochre being on the right, her arched legs, the thick column, her hanging rounded body, her long neck and her rounded head held beside the vane, her pose, size and colours, the framing, focus and grain. Change only two small things.
>
> 1. The two short working limbs hanging beneath her body. Each hangs straight down, slender and soft, with no bend in it, and ends in a small closed bud like an unopened flower bud: a rounded, slightly pointed tip formed of several short blunt lobes of the same ochre hide pressed tightly together and meeting at the point, with fine seams between them. The buds are smooth, closed and still, and touch nothing. They are no wider than the limb.
>
> 2. The oval patch on the side of her hanging body. It is flush with the skin: a flat smooth oval of slightly paler, finer hide, level with the hide around it, not a hollow, hole, socket or recess.
>
> No other change. No knuckles, no clenched shape, no hooks, no claws, no nails, no new objects, no people, no text, no lettering, no numerals. A documentary photograph, not a render.

### characters/sohrel.jpg — re-filed 17 November 2026
- **Kind:** an image edit of the filed frame
- **Source:** the filed `sohrel.jpg` (13 October 2026).
- **Run:** one round, two takes, **take 2 filed** at 1200×670.
- **Prompt:**

> Edit this photograph. Keep everything exactly as it is: the dim taupe office, the walls, the doorway, the shelf and the two cases on it, the low platform, the bare desk; the soft, headless, slate-grey body resting on its folded lower limbs, its deep creases and folds, its small dark eyes set along the limbs, the two upper limbs lying across the desk top, and the one limb hanging beneath the desk with its warmer patch; the colours, the light, the framing, the focus and the grain. Change only one thing.
>
> The one upper limb that rises into the air above the desk, with a pale tip, is no longer raised. It is lowered and folded down against the body: it curves down from where it leaves the top of the body and lies relaxed along the body's upper side, creased where it bends, its blunt tip tucked in against the body's folds, the same slate-grey all the way to the tip. Nothing rises above the body any more. Where the raised limb was, the dim taupe wall and the shelf behind continue as they are elsewhere.
>
> No other change. No new limb, no pale or pink tip, no swelling at any tip, no head, no new eyes, no new objects, no people, no text, no lettering, no numerals. A documentary photograph, not a render.

## 2026-11-17 — Mnemari head and neck: the four options studied, and option A applied (Opus, desktop)

The options study recorded in `species-design.md` (*Mnemari, Head and neck: options put to Dermot, 17 Nov 2026*, PR #1912) did not file its prompts; they are here, verbatim, with the three edits that applied Dermot's pick (*"Head pick A"*, the same day). **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, 16:9, two takes per job, no reference. The study's six jobs were each an edit of the filed `ulessa.jpg` of that morning (blob `ae7f854f`), twelve takes, none refused, none filed except A's take 2. The application's two jobs were four takes, none refused.

### The options study (none filed but A take 2)

- **A — a jointed neck, carried folded** (take 2 later filed as `ulessa.jpg`, below):

> Edit this photograph. Change only the neck and the head of the animal. Keep everything else exactly as it is: the three tall arched legs, the hub where they meet, the column, the hanging body, the pale oval patch on its side, the two short limbs hanging beneath with closed buds, the hide and its colours, the room, the table, the sheets, the chairs, the light and the camera. Still a real photograph with grain, not a render. No people.
>
> The change: the neck is no longer one smooth curve. It is a thick jointed arm of the same hide, in two straight lengths with one heavy rounded knuckle joint between them, like the joints in the legs. It leaves the front of the hanging body, rises to the knuckle, then folds back down and forward, so the neck makes a sharp bent angle, not an arc. The head at its end stays small, smooth and blunt, with one small dark eye low on its side and two thin slits on top, and hangs just above the table. The neck is as thick as before, covered in the same ochre hide with skin creases at the joint. Not a swan, not a snake, not a dinosaur, not a crane, not a machine.

- **B — a short neck and a deep head under the arch** (not filed):

> Edit this photograph. Change only the neck and the head of the animal. Keep everything else exactly as it is: the three tall arched legs, the hub where they meet, the column, the hanging body, the pale oval patch on its side, the two short limbs hanging beneath with closed buds, the hide and its colours, the room, the table, the sheets, the chairs, the light and the camera. Still a real photograph with grain, not a render. No people.
>
> The change: the neck is short and thick, only about as long as the head itself, a heavy stub of the same hide leaving the front of the hanging body. The head sits close in front of the body, well under the arch of the legs, far back from the table. The head is smooth, blunt and deep, taller than it is long, like a rounded river stone hung on its end, with one small dark eye low on its side, two thin slits on top, and no line or opening on its front. Where the long neck used to be there is only the empty room. Not a hippo, not a tortoise, not a seal, not a dinosaur, no ears.

- **C — the written neck with a broad flat head, round 1** (not filed):

> Edit this photograph. Change only the neck and the head of the animal. Keep everything else exactly as it is: the three tall arched legs, the hub where they meet, the column, the hanging body, the pale oval patch on its side, the two short limbs hanging beneath with closed buds, the hide and its colours, the room, the table, the sheets, the chairs, the light and the camera. Still a real photograph with grain, not a render. No people.
>
> The change: keep the long curving neck, but replace the head. The neck now ends in a broad flat disc of the same hide, much wider than the neck and wider than it is long, thin like a thick plate, held level above the table, with a smooth rounded rim all the way round and no point, no taper and no snout. One small dark eye sits at each far side edge of the disc, so the two eyes are as far apart as the disc is wide. Two thin slits on its upper face. Its upper face is banded ochre and umber like the hide; nothing else on it. Not a hammerhead shark, not a duck bill, not a cobra hood, not a spoon, not a dinosaur, not a lamp.

- **C — round 2, the head about twice the neck's width** (not filed):

> Edit this photograph. Change only the neck and the head of the animal. Keep everything else exactly as it is: the three tall arched legs, the hub where they meet, the column, the hanging body, the pale oval patch on its side, the two short limbs hanging beneath with closed buds, the hide and its colours, the room, the table, the sheets, the chairs, the light and the camera. Still a real photograph with grain, not a render. No people.
>
> The change: keep the long curving neck, but replace the head. The neck now ends in a flat rounded pad of the same hide, about twice as wide as the neck and wider than it is long, thick as the neck is thick, held level above the table, with a smooth rounded rim and no point, no taper, no snout and no bill. One small dark eye sits at each far side edge of the pad. Two thin slits on its upper face, nothing else on it, no dots, no holes. Its upper face is banded ochre and umber like the hide. Not a hammerhead shark, not a stingray, not a duck bill, not a cobra hood, not a spoon, not a dinosaur.

- **D — no separate head** (not filed):

> Edit this photograph. Change only the neck and the head of the animal. Keep everything else exactly as it is: the three tall arched legs, the hub where they meet, the column, the hanging body, the pale oval patch on its side, the two short limbs hanging beneath with closed buds, the hide and its colours, the room, the table, the sheets, the chairs, the light and the camera. Still a real photograph with grain, not a render. No people.
>
> The change: there is no separate head. The long curving neck keeps the same thickness all the way along and simply ends in a smooth, blunt, rounded end, like the end of a thick rope of hide, no wider than the neck, with no jaw, no snout, no bulge and no opening on its end. On the last short length of the neck, near the end, are one small dark eye on its side and a row of four thin slits along its top. The end hangs just above the table. The neck is thick and heavy, as thick as one of the legs, never thin. Not an elephant trunk, not a worm, not a snake, not an eel, not a dinosaur, not a tentacle.

- **A and D merged (a study, not an option)** (not filed):

> Edit this photograph. Change only the neck and the head of the animal. Keep everything else exactly as it is: the three tall arched legs, the hub where they meet, the column, the hanging body, the pale oval patch on its side, the two short limbs hanging beneath with closed buds, the hide and its colours, the room, the table, the sheets, the chairs, the light and the camera. Still a real photograph with grain, not a render. No people.
>
> The change: the neck is no longer one smooth curve. It is a thick jointed arm of the same hide, in two straight lengths with one heavy rounded knuckle joint between them, like the joints in the legs. It leaves the front of the hanging body, rises to the knuckle, then folds back down and forward, so the neck makes a sharp bent angle, not an arc. There is no separate head: the second length keeps the same thickness and simply ends in a smooth blunt rounded end, no wider than the neck, with no jaw, no snout, no bulge and no opening on its end. Near the end are one small dark eye on its side and two thin slits on its top, nothing else. The end hangs just above the table. Not a swan, not a snake, not a dinosaur, not an elephant trunk, not a crane, not a machine.

### characters/ulessa.jpg — re-filed 17 November 2026 (neck A)
- **Kind:** an image edit of the filed frame (the study's option A job)
- **Source:** the filed `ulessa.jpg` of the morning of 17 November 2026.
- **Run:** the study's A job, two takes; **take 2 filed** at 1200×670 by `import-image.ps1 -MaxEdge 1200`, finish strength 1. Prompt: option A above.

### characters/osune.jpg — re-filed 17 November 2026 (neck A)
- **Kind:** an image edit of the filed frame, head and neck region pasted back
- **Source:** the filed `osune.jpg` (re-filed earlier on 17 November 2026).
- **Run:** one round, two takes; **take 2 filed**. The take was finished at strength 1 at 1200×670 by `import-image.ps1`, registered to the filed frame by phase correlation (offset 0.06, 0.94 px), and the region where it differed, inside a box round the head and neck (560–1150 × 40–620 px), was pasted back with a 6 px feather; everything else is the filed frame.
- **Prompt:**

> Edit this photograph. Change only the neck and the head of the animal. Keep everything else exactly as it is: the three tall arched legs and their padded feet, the hub where they meet, the column, the hanging body, the pale healed seams on the leg and flank, the two short limbs hanging beneath with closed buds, the hide and its colours, the stone room, the window light at the left, the bench, the floor, the light and the camera. Still a real photograph with grain, not a render. No people.
>
> The change: the neck is no longer one smooth curve. It is a thick jointed arm of the same hide, in two straight lengths with one heavy rounded knuckle joint between them, like the joints in the legs. It leaves the front of the hanging body, rises to the knuckle, then folds back down and forward, so the neck makes a sharp bent angle, not an arc. The head at its end stays small, smooth and blunt, with one small dark eye low on its side and two thin slits on top, and hangs low and forward, at about the height of a table. The neck is as thick as before, plain warm ochre and russet with no stripes, with skin creases at the joint and two short pale healed seams on the second length just below the head. Not a swan, not a snake, not a dinosaur, not a crane, not a machine.


### chapters/s01e00c08.jpg — re-filed 17 November 2026 (neck A)
- **Kind:** an image edit of the filed frame, neck region pasted back
- **Source:** the filed `s01e00c08.jpg` (re-filed earlier on 17 November 2026).
- **Run:** one round, two takes; **take 2 filed**. The take was finished at strength 1 at 1600×893, registered to the filed frame (offset 0.64, −0.02 px), and the changed region inside a box round the neck (680–1130 × 0–340 px) was pasted back with a 6 px feather.
- **Prompt:**

> Edit this photograph. Change only the neck of the large ochre animal on the right. Keep everything else exactly as it is: the green vanes and the low sun through them, the grey-green hide at the bottom, the terrace, the parapet, the sky and the light; the ochre animal's arched legs and padded feet, the hub, the thick wrinkled column, the hanging rounded body with its pale oval patch, the two short limbs beneath with closed buds; her rounded head, seen from behind, held low just above and beside the nearest vane, in the same place and the same size; the colours, the framing, the focus and the grain. Still a real photograph with grain, not a render. No people.
>
> The change: the neck is no longer one smooth curve. It is a thick jointed arm of the same hide, in two straight lengths with one heavy rounded knuckle joint between them, like the joints in her legs. It leaves the front of the hanging body, rises up and out to the knuckle, then folds sharply back down to the head, so the neck makes a bent angle, not an arc. The neck is as thick as before, warm ochre and russet with no stripes, with skin creases at the joint. Not a swan, not a snake, not a dinosaur, not a crane, not a machine.

## 2026-11-17 — S01E00C08, Ulessa's head brought to Isren (Opus, desktop)

At Dermot's *"Yes, fix it"* and his pick of B (17 November 2026). The record is `images.md` § 61, the 17 November note *Head brought down to Isren*. **Tool:** Gemini, `gemini-3.1-flash-image`, `scripts/image-edit.js`, 2K, 16:9, four takes per round. Eight images; none refused.

### chapters/s01e00c08.jpg — re-filed 17 November 2026 (head to Isren)
- **Kind:** an image edit of the filed frame (neck A), with a head reference
- **Source:** the filed `s01e00c08.jpg`, and a crop of `src/images/characters/ulessa.jpg` to her head (box 600,150 to 960,370).
- **Run:** round 1, four takes; **take 3 filed** whole, finished at strength 1 at 1600×893. Round 2, an edit of round 1 take 3 with no reference, four takes: none kept (limbs still four, vanes unturned, framing broken).
- **Round 1 prompt (used):**

> Two images are attached. The first is the photograph to edit. The second is a close reference for one being's head only.
>
> Edit the first photograph and keep everything in it exactly as it is (the camera, the low evening sun at the left, the wide green vanes lit through from behind with their veins and rows of small dark nodes, the creased grey-green hide they rise from at the bottom of the frame, the pale terrace floor, the low parapet, the gold sky, and the tall ochre-and-russet being at the right: its three long arched legs, its high hub, the thick wrinkled column, its deep rounded slung body with the broad pale oval membrane flush on its side, and its colouring), changing only three things.
>
> First, her long neck comes further down and forward, so that her head hangs low, level with the middle of the vanes on the right of the frame, a hand's breadth in front of the nearest vane and touching none of them; it is not above any vane tip and nothing of it is hidden. Her head is seen from the side, turned toward the vanes, as the second image shows: long, smooth and blunt, with one small dark eye set deep and low on the near side of the head and two short narrow breathing slits just behind it. No mouth line, no lips, no teeth, no nostrils, and no second eye.
>
> Second, beneath her slung body hang three short working limbs, not two, close together and curled, each ending in a closed rounded bud.
>
> Third, the two nearest vanes on the right lean a little toward her head, their leading edges turned to face it, as if the being of the vanes is attending to her.
>
> Nothing else is added or changed. No person, no human figure, no hand, no text, letters or numerals anywhere. 16:9 landscape, documentary photograph, natural grain.

- **Round 2 prompt (not kept):**

> Edit the attached photograph and keep everything in it exactly as it is (the camera, the low sun at the left, the creased grey-green hide at the bottom, the pale terrace and parapet, the gold sky, and the tall ochre being at the right with her legs, hub, column, slung body, pale oval membrane, long lowered neck, and her head with its one small dark eye, held level with the vanes with a clear gap in front of them), changing only two things.
>
> First, beneath her slung body there are exactly three short working limbs, not four: three close together, curled, each ending in one closed rounded bud. Remove the fourth limb and its bud entirely.
>
> Second, the green vanes on the right half of the cluster, the ones nearest her head, have turned away from the sun and toward her: their broad flat faces now face her head across the gap, their tips leaning a little toward her, so the whole cluster of vanes is visibly attending to her, the way a listener turns toward someone speaking. The vanes on the left still face the sun and stay lit through from behind. Her head does not touch any vane.
>
> Nothing else is added or changed. No person, human figure or hand; no text, letters or numerals anywhere. 16:9 landscape, documentary photograph, natural grain.

## 2026-11-17 — Season 6 fixes and the last four stock banners (Opus, desktop)

At Dermot's *"Yes, both"* of 17 November 2026. The record of each choice is in `story-bible/images.md` § 68. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, `scripts/image-edit.js`, 2K. Where a take was laid back onto a filed frame or onto his plate, it was registered first (phase correlation or SIFT and a homography) and only the changed region was pasted, feathered, with grain added to match the frame's own.

### chapters/s06e01c02.jpg — re-filed 17 November 2026
- **Kind:** an edit of the filed frame, with the body reference; only the robot's region pasted back
- **Source:** the filed frame (1600×893) and `story-bible/reference-art/rook-7-body-2026-11-16b.jpg`.
- **Run:** round 1, a 360×420 crop of the robot enlarged three times (the § 62 route): refused twice. Round 2, the same crop with a shorter prompt: refused twice. Round 3, the whole filed frame with the round 2 prompt: two single-take calls, both returned; take 1 kept. The take was registered to the filed frame (offset 0.18 px), a rectangle round the robot (985–1150 × 335–640 px) was pasted with a 5 px feather, the robot's warm pixels only were brought to a cool-room grade (chroma × 0.25, lightness × 0.95), and grain was added to match. Images generated: two; refused: four.
- **Round 1 prompt (refused):**

> Edit this photograph. It is a real, dim, grainy photograph of a working machine standing at a long window in a grey room before dawn, and it must stay exactly that photograph: keep the window, the glass, the sea and sky beyond it, the wall, the floor, the dim cold light, the grain and the framing exactly as they are, and keep the machine in the same place, at the same height, in the same pose, with one hand raised flat against the glass and its upper unit turned toward the sea.
>
> Change only the machine's body, so that it matches the machine in the second image exactly: the same broad, deep, softly moulded trunk housing, wider and heavier than in this photograph, one continuous casing from shoulders to hips with rounded edges that are rubbed and worn paler along their corners; the same thick plain limbs and large hands; the same matte warm pale grey colour, not white and not glossy; the same low wide upper unit sitting directly on the dark graphite collar; and the same three sensor arrays of a different make, a small cluster of dark lenses on a short jointed mount at one side, a narrow flat bar along the crown, and a small dark block on its own bracket on the near shoulder. Light it as this room lights it: dim, cold and grey, darker than the reference, with the faint grey from the window along its near edge.
>
> Take nothing else from the second image: not the office, the wall, the table or the daylight. Change nothing else. A photograph, not a render. No face, no eyes, no visor, no glowing lights, no text, lettering or numerals anywhere.

- **Round 2 and 3 prompt (round 3 used):**

> Edit this photograph of a grey room with a long window. Keep the window, the sea, the wall, the floor, the dim cold light, the grain and the framing exactly as they are.
>
> The standing machine in it should look like the machine in the second image: recolour and reshape its housings to match. Its main housing becomes broader and deeper, one softly moulded casing with rounded edges worn slightly paler at the corners. Its colour becomes a matte warm pale grey instead of white. Its limbs become thicker and plainer. Keep the dark collar, the low wide top unit and the small dark lens cluster at its side as in the second image. Keep its position, its height, its stance and its raised arm against the glass exactly as now.
>
> Light it with this room's dim grey light, not the second image's daylight. Take nothing else from the second image. A photograph, not a render. No text or lettering.

### chapters/s06e01c01.jpg — re-filed 17 November 2026
- **Kind:** an edit of the filed frame (his plate `F:\108SEP24\_DSC7323.JPG` with the 17 November house), then a second edit (not used), then the house, the yard wall and the posts laid back onto the filed frame, then one fix by hand
- **Run:** round 1 (two takes): take 2 kept (the stone weathered and lichened; take 1 was alike with smoother stone). Round 2, an edit of take 2 for the drone alone (two takes): both drew a large slab on the gable and neither was used. Registered to the filed frame (offset 1.9 px); a polygon round the house and wall and a strip round each of the seven posts were pasted with a 2.5 px feather and matching grain, so the wood, pasture and conifer stay his pixels. By hand: the drone, drawn glossy like a small saucer, was made matte dark grey (its pixels' contrast cut to 0.3 about a dark grey). Images generated: four; refused: none.
- **Round 1 prompt (used):**

> Edit this photograph. It is a real photograph of a mown hill pasture below a wood in low morning light, with one small house on the rough grass in the middle of the frame, and it must stay exactly that photograph: keep the wood, every tree, the tall conifer at the right, the bright mown pasture with its long shadows, the rough tawny grass and the dark heather slope in front, the light, the grain and the framing exactly as they are.
>
> Change only the house, its yard wall and the posts. Rebuild the house in the same place, at the same size and the same angle, as an upland sheep holding's stone longhouse eight centuries from now:
> 1. One long low single-storey longhouse, a little longer and lower than the building there now. Its walls are weathered pale grey-buff fieldstone laid in rough even courses, the stones sealed and close-fitted, with patches of pale lichen; old stone, not render and not paint.
> 2. Its roof is one plain shallow pitch of a single seamless sheet of dark grey matte composite, with no slates, no tiles, no ridge tiles, no chimney and no gutters.
> 3. Just under the eave along the near long wall runs one pair of thin dark graphite conduits, straight and level, turning down at the near corner into the ground.
> 4. In the near gable end, high up under the roof, one shallow wide recess with rounded corners, and folded into it a small smooth dark capsule, a field drone at rest, flush with the wall.
> 5. In the near long wall, one plain door standing open, dark inside, and two deep low windows with rounded corners and no visible frames, dark.
> 6. Keep the low dry-stone yard wall beside it, grey and lichened.
> 7. Along the near edge of the mown pasture, a loose line of slender plain dark grey posts about the height of a person, each with one small pale cap on top, set well apart, with no wire, rail or mesh between them.
>
> It takes the same low light from the left as the trees and grass do, with its shadow falling the same way. Change nothing else. Nobody is in the picture. A photograph, not a render or a painting. No round window, no porthole, no chapel, no church, no bell, no white render, no white walls, no timber, no glass doors, no solar panels, no aerials, no lights, no smoke, no vehicles, no animals, no people, no text, lettering or numerals anywhere.

- **Round 2 prompt (not used):**

> Edit this photograph. Keep everything exactly as it is, every tree, the grass, the stone house, its roof, its door, its windows, the wall, the posts, the light and the grain. Change only one small thing: the small object resting in the recess high in the near gable end of the house. It becomes a plain matte dark grey rounded block that fills the recess almost completely and sits flush with the face of the wall, like a closed hatch, with a fine seam round it. It is not a disc, not a dome, not a saucer and not shiny. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

### chapters/s06e02c01.jpg — re-filed 17 November 2026
- **Kind:** an edit of the filed frame; only the desk objects pasted back
- **Run:** one round, two takes; take 2 kept (the leaves more distinct, the spine rod plainer). Registered (offset 0.8 px); the rectangle 938–1212 × 666–740 px pasted with a 3 px feather, below her fingertips, so both faces and hands are the filed frame's pixels. Images generated: two; refused: none.
- **Prompt:**

> Edit this photograph. It is a real photograph of an office with two people, and it must stay exactly that photograph: keep both people, their faces, hands, clothes and poses, the desk, the chair, the window, the sea, the wall, the light, the grain and the framing exactly as they are.
>
> Change only the two small objects lying on the desk in front of the seated woman.
> 1. The dark pen-like object beside her hand becomes a plain stylus: one slim straight rod of dark grey matte ceramic, the same thickness from end to end, both ends simply rounded, with no clip, no cap, no nib, no point, no band and no button. It lies flat on the desk in the same place.
> 2. The grey book becomes a bound set of thin leaves: about a dozen separate thin rigid sheets of matte pale grey slate-like material, each as thin as a card, stacked flat and hinged together along one short edge by a slim plain dark spine rod, so that the thin edges of the separate sheets show as fine parallel lines along the open sides, with the top leaf plain and blank. It has no cover boards, no fabric, no rounded book spine and no pages of paper. It lies in the same place, the same size, closed and flat.
>
> Change nothing else. A photograph, not a render. No writing, lines, text, lettering or numerals on anything.

### hero/s01e00-aldera-wall.jpg — filed 17 November 2026
- **Collar edit, 20 November 2026** (Dermot's *"Option 2"*): Gemini `gemini-3.1-flash-image` via `scripts/image-edit.js`, the filed frame as the input, two rounds of two takes; round 1 drew the tag too large. Round 2 take 2 was registered to the filed frame by SIFT and only the collar and tag pasted back under a feathered ellipse, so the plate stays his pixels; filed at `-Finish 0`, 1920×1280. Prompt: *"Edit this photograph. Change one thing only: the tabby cat now wears a slim plain black fabric collar around her neck, snug and partly hidden in her fur, with one very small plain round dull grey metal tag, no bigger than a fingernail and much smaller than her eye-to-nose distance, hanging close against her throat fur. The tag is blank: no text, no engraving, no symbol, no light, no glow, no screen. … Keep everything else in the photograph exactly as it is."* The same prompt and method made the S01E00C00 edit.
- **Kind:** Dermot's own photograph as the plate, with a cat generated into it and composited back onto his pixels
- **Source:** `F:\116FML25\_DSC1509.JPG` (camera date 12 April 2025, D3100), resized whole to 2400×1600 and sent as the frame to edit. Replaces `hero/s01e00-cat.jpg`, Adobe Stock with no licence recorded.
- **Run:** one round, two takes, 3:2; take 1 kept (take 2 drew a smaller cat standing square to the camera). Registered to the plate at 1920×1280 (SIFT, 2,797 inliers); the cat alone pasted by a difference mask, filled and dilated 7 px, with a 2.5 px feather and grain to match. No finish (his plate). Images generated: two; refused: none.
- **Prompt:**

> Edit this photograph. It is a real photograph of an old dry-stone wall covered in thick moss running away up a wooded slope, with leaf litter on the ground and tall trees beyond, and it must stay exactly that photograph: keep the wall, every stone and patch of moss, the leaves on the ground, the trees, the soft overcast light, the grain and the framing exactly as they are.
>
> Add one thing: a half-grown brown tabby cat, a young cat not yet fully grown, slim and long-legged, with no collar, standing on the mossy top of the wall a little left of the middle of the frame, where the wall begins to run away from the camera. She is walking away along the wall toward the trees, mid-step, seen from behind and a little to one side, her tail held low and level, and she has turned her head to look back over her shoulder, not at the camera but past it, at something behind the photographer, ears up and alert. She is the right size for a real young cat on that wall, small in the frame, about as long as two of the wall's stones. Her fur is ordinary brown mackerel tabby with dark stripes, slightly damp, real fur with individual hairs. She casts a faint soft shadow on the moss under her.
>
> Change nothing else. A photograph, not a render or a painting. No collar, no harness, no tag, no second animal, no people, no text, lettering or numerals anywhere.

### hero/codex-archive-niches.jpg — filed 17 November 2026
- **Kind:** generation (an artefact of the record), with a filed chapter frame as the room reference in round 1 only
- **Source:** round 1 sent `src/images/chapters/s05e02c02.jpg` for the archive's cream walls; round 2 was text alone. Replaces `hero/codex-documents.jpg`, Adobe Stock with no licence recorded.
- **Run:** round 1 (two takes, 3:2): a symmetrical grid of cubbies with stacked notebooks in take 2, and in take 1 sets standing upright like books and lit niches; neither used. Round 2 (two takes, 3:2): take 1 kept (take 2 alike, with a black void behind). By hand: a dark smudge like a faded stamp on the top leaf healed out (`cv2.inpaint`, grain restored). Resized to 1920×1280 and finished at strength 1 (`photo-finish.py`). Images generated: four; refused: none.
- **Round 1 prompt (not used):**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 3:2 landscape, a close level view taken at standing height along one wall of a records room in an archive, deep focus, nobody in frame. The place is the Boundary Survey Archive of Threshold Station, a shore station on Earth, in the year 2826 UCSD, eight centuries from now. The wall is smooth warm cream composite with honest fine seams, and set deep into it is a row of rounded niches, three across and two high, each with softly rounded corners and no shelf edge, no door and no glass. In each niche lie a few closed records, stacked flat and never standing upright: each record is a bound set of thin rigid matte leaves, each leaf as thin as a card, hinged together along one short edge by a slim plain dark spine rod, so the thin edges of the separate leaves show as fine parallel lines along the open sides. The sets differ: some slate grey, some clay brown, some pale ochre, some thick and some only a few leaves; one set has a small round dull bronze seal pressed onto its top leaf; every top leaf is plain and blank. In the nearest niche, at the left, one set lies a little askew as if just put back. Soft warm even light with no visible source, a little brighter at the left. Quiet and exact: the record's own papers, kept. The reference image shows this archive's room: keep its cream walls, its rounded niches and its warm light, and take nothing else from it, not the people, the desk, the chair or the books. Palette: warm cream, slate grey, clay brown, pale ochre, one note of bronze. Photographed, not rendered: real matte surfaces with fine marks of handling, slight softness toward the corners, high-ISO grain heavier in the shadows, natural colour, normal exposure. Negative: books, paper books, hardbacks, book spines standing on a shelf, bookshelves, a library, paper, loose sheets, ring binders, folders, files, clips, envelopes, boxes, tablets, laptops, screens, glowing displays, holograms; wooden shelves, metal shelving, cabinets, drawers with handles, labels, label holders; lamps, ceiling panels, strip lights, light slots; any text, lettering, numerals, titles, writing or lines on anything; people, hands. Render negatives: 3D render, CGI, plastic sheen, glossy concept art, over-smooth surfaces.

- **Round 2 prompt (used):**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 3:2 landscape, a close low view into one deep rounded niche in the wall of an archive's records room, deep focus, nobody in frame. The place is the Boundary Survey Archive of Threshold Station, a shore station on Earth, in the year 2826 UCSD, eight centuries from now. The niche is cut deep into a wall of smooth warm cream composite, its inside curving seamlessly into its floor with no shelf edge, no door and no glass; only its curved inner wall shows, filling the background. On the niche floor lie three closed records, stacked a little apart and askew, never standing upright, seen close from the side so their structure is plain: each record is a bound set of many very thin rigid leaves of matte pale slate-grey mineral composite, each leaf as thin as a fingernail, hinged together along one short edge by a slim round dark bronze-grey rod that passes through small rounded knuckles along that edge, like the hinge of a box; the leaves do not quite align, so their thin separate edges show as fine uneven lines of grey along the open sides, a hand's width of them. The nearest set is the thickest; on its plain blank top leaf sits one small round dull bronze seal pressed flat. The second is clay brown, the third thin and pale ochre. Every surface is plain and blank. Soft warm light with no visible source, falling from the upper left, leaving the back of the niche in gentle shadow. Quiet and exact: the record's own papers, kept. Palette: warm cream, slate grey, clay brown, pale ochre, dull bronze. Photographed, not rendered: real matte surfaces with fine marks of handling and a little dust of use on the top edges, a fast lens with shallow depth of field so the far set is a little soft, slight softness toward the corners, high-ISO grain heavier in the shadows, natural colour. Negative: books, paper books, hardbacks, notebooks, cloth covers, cover boards, paper pages, book spines, bookshelves, a library, shelving unit, cubbies, a grid of shelves, ring binders, spiral binding, folders, files, clips, envelopes, boxes, tablets, laptops, screens, glowing displays, holograms; lamps, ceiling panels, strip lights, light slots; any text, lettering, numerals, titles, writing or lines on anything; people, hands. Render negatives: 3D render, CGI, plastic sheen, glossy concept art, over-smooth surfaces.

### hero/lore-above-the-cloud.jpg — filed 17 November 2026
- **Kind:** Dermot's own photograph, as it is
- **Source:** `F:\126TNRFE\DSC_7865.JPG` (Teide, Tenerife, January 2026), cropped to the band from 520 to 2487 px and resized to 1920×820. One sensor-dust spot healed (`cv2.inpaint`, grain restored). No generation and no finish. Replaces `hero/lore-cosmic.jpg`, Adobe Stock with no licence recorded.

### hero/timeline-strata.jpg — filed 17 November 2026
- **Kind:** Dermot's own photograph, as it is
- **Source:** `F:\126TNRFE\DSC_7841.JPG` (the ash cutting on Teide, January 2026; a neighbour of the frame the portfolio publishes as *Volcanic Strata*, which is `lore/volcanic-strata.jpg` here), cropped to 300–4200 × 0–2600 px and resized to 1920×1280. No generation, no edit and no finish. Replaces `hero/timeline-clock.jpg`, Adobe Stock with no licence recorded; used on Timeline and on Threads.

## 2026-11-17 — Season 6 chapter illustrations, all four (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 67, with the references each was sent. **Tool** for the two generated frames and the plate edit: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; two takes per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1, and at `-Finish 0` for the two frames on Dermot's own plates. Ten images in all: six first-pass takes of six asked, and four edit takes of six asked (two calls returned no image). Nothing was refused by the filter.

### chapters/s06e01c01.jpg — filed 17 November 2026
- **Kind:** an edit of Dermot's own photograph, then a second edit, then the changed region laid back onto the plate
- **Source:** the plate is `F:\108SEP24\_DSC7323.JPG` (28 September 2024), cropped to 16:9 (4608×2592) and sent at 2400×1350; the first edit prompt is the prompt of record in `images.md` § 67.
- **Run:** `scripts/image-edit.js`, plate edit take 2 of 2; then two further edits of that take. The first of them (two takes, neither used) asked for upright windows and a drone in a gable recess and drew a chapel. The second (one take returned of two) is filed. By hand: the filed take was registered to the plate at 3200×1800 (OpenCV SIFT, homography, 578 inliers of 657 matches), softened by a Gaussian of 1.6 px to the plate's own softness, and blended onto the plate through a feathered mask (14 px) covering the house and yard and each post; everything else in the filed frame is the plate. Filed at `-Finish 0`.
- **Edit prompt, not used (the chapel):**

> Edit this photograph. Keep everything exactly as it is, the wood, every tree, the tall conifer, the mown pasture and its shadows, the rough grass, the dry-stone wall of the yard, the line of pale posts, the light, the grain and the framing, and change only the house, so that it reads as a lived-in farmhouse of a far future century and not as a shed or a barn. 1. Keep its size, its place, its pale smooth sealed stone walls and its dark roof. 2. In the long side wall facing the yard, add three windows in a row: each a deep-set upright opening with rounded corners and no frame, no bars and no sill, dark and unlit, like the door. 3. In the gable end, beside the open door, add one more such window, smaller. 4. High in the gable, under the ridge, a small shallow rounded recess in the stone, and resting in it one small plain dark folded machine, a field drone at rest, no bigger than a crow, with no lights. 5. One thin dark conduit runs straight along the long wall just under the eave, from end to end. 6. The door stays open and dark, and a flat stone step lies in front of it. Change nothing else. Nobody is in the picture. A photograph, not a render or a painting. No chimney, no smoke, no lit windows, no glazing bars, no shutters, no gutters or downpipes, no aerials, no solar panels, no vehicles, no animals, no people, no text, lettering or numerals anywhere.

- **Edit prompt, filed:**

> Edit this photograph. Keep everything exactly as it is, the wood, every tree, the tall conifer, the mown pasture and its shadows, the rough grass, the dry-stone wall of the yard, the line of pale posts, the light, the grain and the framing, and change only the house, so that it reads as a lived-in farmhouse and not as a shed, a barn or a chapel. 1. Keep its size, its place, its pale smooth sealed stone walls, its dark roof and its open dark door. 2. In the long side wall facing the yard, add two windows: each one a wide, low, horizontal opening, twice as wide as it is tall, with softly rounded corners, set deep in the thick wall, with no frame, no bars, no sill and no arch, dark and unlit. 3. In the gable end, to the right of the door, add one more such window, the same shape, smaller. The gable above the door stays plain blank stone with nothing on it. 4. One thin dark conduit runs straight along the long wall just under the eave, from end to end. 5. A flat stone step lies in front of the door. Change nothing else. Nobody is in the picture. A photograph, not a render or a painting. No arched windows, no round-topped windows, no fanlight, no niche, no cross, no bell, no chimney, no smoke, no lit windows, no glazing bars, no shutters, no gutters or downpipes, no aerials, no solar panels, no vehicles, no animals, no people, no text, lettering or numerals anywhere.

### chapters/s06e01c02.jpg — filed 17 November 2026
- **Kind:** generation with a reference
- **Source:** `images.md` § 67.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed as generated.

### chapters/s06e01c03.jpg — filed 17 November 2026
- **Kind:** Dermot's own photograph, as it is
- **Source:** `F:\108SEP24\_DSC7280.JPG` (28 September 2024), cropped to 16:9 from the middle of the frame (4608×2592), resized to 1600×900 by `import-image.ps1 -Finish 0`. No generation and no edit.

### chapters/s06e02c01.jpg — filed 17 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 67.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 2 of 2 (take 1 returned no image).
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is, the standing man seen from behind, his hair, his dark jacket and his hands, the seated woman's face, features, hair, age, jacket and collar tab, her hands on the desk, the dark wooden desk, the closed grey bound document, the tall window with rounded corners, the grey sea and the rain on the glass, the grain and the framing, and change only these things. 1. The ceiling: remove the bright rectangular light panel at the top edge of the frame, so the ceiling is one plain unbroken surface of the same warm white composite, and the room is lit only by the grey daylight from the window. 2. The woman's expression: the same face, but settled and level. Her brows are relaxed, her eyes steady on the man, her mouth closed and firm, her chin level. She is not anxious, not pleading and not surprised: she is a senior officer who has made a decision and is calmly waiting for him to accept it. Keep her identity exactly. 3. The dark box on the left wall becomes one small plain smooth rounded housing of dark matte ceramic, about the size of a hand, flush to the wall, with a single small steady pale indicator and no slot, button, seam or screen. 4. The pen on the desk becomes a plain slim dark tapered stylus with no clip, no cap and no button. 5. Her seat: what shows of it behind her is the plain rounded edge of a moulded seat upholstered in dark wool, with no arms, no headrest and no metal. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

## 2026-11-17 — Season 5 chapter illustrations, all six (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 66, with the references each was sent. **Tool** for the four generated frames and the plate edit: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; two takes per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1, and at `-Finish 0` for the two frames on Dermot's own plates. Sixteen images in all: ten first-pass takes of ten asked and six edit takes. Nothing was refused.

### chapters/s05e00c01.jpg — filed 17 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 66.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is, both women, their faces, hair, hands and stance, the round hatch, its open door, the lock tube beyond, the small dark housing with its one indicator, the grain and the framing, and change only these things. 1. The ceiling: remove the bright rectangular light panels at the top corners of the frame and the lit panel inside the lock tube, so that each ceiling is one plain unbroken surface of the same pale grey-green composite, and the soft even light in the room has no visible source. 2. The older woman at the left: her jacket becomes plain graphite grey, a dark neutral grey with no green in it; keep its cut, its stand collar and the small pale tab on the collar exactly. 3. The lower wall and floor: remove the few small scuff marks, so the surfaces are clean and kept. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

### chapters/s05e00c02.jpg — filed 17 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 66.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is, the seated officer in the right foreground, her face, hair, jacket and hands, the four blank grey leaves on her desk, every clerk and crew member, their faces and clothes, the desks, the blue-grey floor, the sand-coloured walls and ribs, the grain and the framing, and change only these things. 1. Lighting: remove every strip light, every bright rectangular ceiling panel and every lit slot under the galleries and in the walls, and remove the windows; every ceiling and soffit becomes one plain unbroken surface of the same pale sand-coloured composite, and the bright even light in the deck has no visible source. 2. The record crates: each becomes a plain smooth closed case of pale grey composite with rounded corners and one fine seam round its middle, with one small round bronze seal on the seam; no lids, no latches, no handles, no ribs, no rims. 3. The carriers under the crates become plain low flat sleds of pale composite that rest close to the deck, with no wheels, no castors and no tyres. 4. The gallery rails become one low solid smooth rail of the same pale composite, with no bars, posts or balusters. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

### chapters/s05e01c01.jpg — filed 17 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 66.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is, the woman, her face, hair, clothes and stance, her hand on the rib, the dark slate in her other hand, the great arched ribs, the small dark discs seated on the nearest rib, the far door, the side arch, the deck, the grain and the framing, and change only this. Lighting: remove every bright rectangular light panel in the ceiling between the ribs, and every lit strip and slot low on the walls, at the foot of the ribs and inside the side arch; where each one was, the surface is plain unbroken pale grey composite like the rest. The corridor keeps the same soft even working light, and that light has no visible source. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

### chapters/s05e02c01.jpg — filed 17 November 2026
- **Kind:** Dermot's own photograph, as it is
- **Source:** `F:\117DODDR\_DSC1935.JPG` (7 June 2025), cropped to 16:9 from the foot of the frame (4608×2592), resized to 1600×900 by `import-image.ps1 -Finish 0`. No generation and no edit.

### chapters/s05e02c02.jpg — filed 17 November 2026
- **Kind:** generation with references, then one fix by hand
- **Source:** `images.md` § 66.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed. By hand, at full size before the finish: a faint line of pseudo-lettering on a brown volume in the left niche healed out (`cv2.inpaint`, a rectangle of 82 by 36 px).

### chapters/s05e02c03.jpg — filed 17 November 2026
- **Kind:** an edit of Dermot's own photograph, then one fix by hand
- **Source:** the plate is `F:\122STHWL\DSC_3946.JPG` (6 September 2025), cropped to 16:9 and sent at 2400×1350; the edit prompt is the prompt of record in `images.md` § 66.
- **Run:** `scripts/image-edit.js`, edit take 2 of 2 filed. By hand, at full size: the one bright point with a halo at the end of the line healed out (`cv2.inpaint`, a circle of 20 px) and one faint small light put back in its place. Filed at `-Finish 0`.

### hero/s05e02-hill-holding.jpg — filed 17 November 2026
- **Kind:** an edit of Dermot's own photograph, composited back onto it, then two small fixes by hand
- **Source:** the plate is `F:\112GLEND\_DSC0746.JPG` (22 February 2025, D3100), resized whole to 2400×1600 and sent as the frame to edit. Replaces `hero/s05e02-kerry-hills.jpg`, third-party stock (`images.md` § 66, *The Episode 2 hero, 17 November 2026*).
- **Run:** `scripts/image-edit.js --aspect 3:2 --n 2`, three rounds. Round 1, both takes refused (an agricultural shed). Round 2, take 1 kept as the base, take 2 refused (the hillside repainted). Round 3, an edit of round 2 take 1: take 2 used, take 1 refused (a plaque by a window). Only the changed band of round 3 take 2 was composited onto the untouched plate (a difference mask, opened, closed and feathered at 12 px); by hand, a roof smudge and one small wall mark healed (`cv2.inpaint`). No finish. Filed at 1920×1280.
- **Round 1 prompt:**

> Edit this photograph. It is a real photograph of an upland valley on a clear afternoon: a steep hillside of dark green pines and rust-brown bare larches, a high open slope of tawny grass with a line of wind-shaped pines along its ridge, a green pasture rising gently to the right, rushes in the foreground, and it must stay exactly that photograph: keep the hill, every tree, the ridge, the pasture, the rushes, the sky, the light, the colour, the slight softness and the grain exactly as they are. Change only the made things in it.
>
> 1. The old stone church with its small round tower, the low steep stone roof beside it, the roofless stone ruin at the right edge of the pasture, the small white cottages half hidden in the trees behind them, and every fence post and wire: remove all of them.
> 2. In their place, standing on the near edge of the pasture where the church stood, put one farmstead, a family's hill holding eight centuries from now: one long low longhouse of weatherproofed stone, built of sealed pale grey stone panels with clean straight seams, under a long unbroken roof of dark matte slate-grey composite with no chimney, no windows in the roof and no gutters or downpipes. Under the eave along its whole length run two or three smooth pale heating conduits, honest and exposed. In the near gable, one small recessed cradle holds a folded field drone, a smooth dark capsule with its arms tucked in. At one end a short low stone outbuilding of the same panels. The building is long and low, set into the slope, the same size in the frame as the church was, and kept, clean and quiet.
> 3. Along the pasture's upper edge, where the fences were, a line of slim plain pale marker posts at even spacing, with no wire between them.
>
> Change nothing else. The hillside and the sky must not be touched. A photograph, not a render or a painting. Not a church, not a tower, not a ruin, not a present-day farmhouse, not a white cottage, not a bungalow, not a barn, not a farm shed, not a corrugated roof, not a glass house, not solar panels, not a satellite dish, no chimney, no smoke, no vehicles, no tractor, no people, no animals added, no text, lettering or numerals anywhere.

- **Round 2 prompt (the base):**

> Edit this photograph. It is a real photograph of an upland valley on a clear afternoon: a steep hillside of dark green pines and rust-brown bare larches, a high open slope of tawny grass with a line of wind-shaped pines along its ridge, a green pasture rising gently to the right, rushes in the foreground, and it must stay exactly that photograph: keep the hill, every tree, the ridge, the pasture, the rushes, the sky, the light, the colour, the slight softness and the grain exactly as they are. Change only the made things in it.
>
> 1. The old stone church with its small round tower, the low steep stone roof beside it, the roofless stone ruin at the right edge of the pasture, the small white cottages half hidden in the trees behind them, and every fence post and wire: remove all of them, leaving trees, grass and hillside where they were.
> 2. Where the church stood, and no bigger than the church was in this frame, put one small family dwelling, a hill holding eight centuries from now: a low stone longhouse, a home and not a farm building, about as long as two cottages, with a low eave at the height of a door. Its walls are of dressed grey stone, weatherproofed and sealed smooth, with fine straight joints; one deep-set door of a dark composite leaf in the long wall facing us, and two small deep-set windows. A steep roof of dark matte slate-grey composite with no chimney and no gutters. Under the eave along its length runs one smooth pale heating conduit, honest and exposed. In the near gable, high up, one small rounded recess holds a folded field drone the size of a sheep: a smooth dark seed-shaped capsule with no propellers or arms in view.
> 3. Along the pasture's upper edge, where the fences were, a few slim plain pale marker posts at wide even spacing, with no wire between them.
>
> Change nothing else. The hillside and the sky must not be touched. A photograph, not a render or a painting. Not a barn, not a cattle shed, not an agricultural building, not a warehouse, not a long shed of panels, not a church, not a tower, not a ruin, not a present-day farmhouse, not a white cottage, not a bungalow, not a corrugated roof, not solar panels, not a quadcopter, no propellers, no chimney, no smoke, no vehicles, no people, no animals added, no text, lettering or numerals anywhere.

- **Round 3 prompt (sent with round 2 take 1):**

> Edit this photograph. Keep it exactly as it is: the hillside, every tree, the pasture, the rushes, the sky, the light, the softness and the grain, and the stone house's size, position, walls, door and two windows. Change only these things on and behind the house.
>
> 1. Behind the house, at its left, two small white cottages show through the bare trees: remove them, leaving bare trees and dark hillside there.
> 2. The white drainpipe on the house's front corner, and the pale timber board under the front eave: remove both.
> 3. Under the front eave, along the whole length of the wall, put two smooth pale grey heating conduits running side by side just below the roof edge, honest and exposed, and at the gable corner let them turn down together and run straight down the corner into the ground. They are plain round pipes with no brackets showing, the colour of pale stone.
> 4. The roof: make it one seamless smooth sheet of dark matte slate-grey composite, with no tiles, no courses, no ridge tiles and no lines across it, and a crisp thin edge.
> 5. The round opening high in the gable: make it a shallow rounded recess in the stone, and in it, resting upright, one small folded field drone: a smooth dark grey seed-shaped capsule, a little larger than a sheep, with a fine seam around it and nothing else, no propellers, arms, lights or lens.
>
> Change nothing else. A photograph, not a render. No drainpipes, gutters, chimney, satellite dish, solar panels, lamps, signs, people or vehicles. No text, lettering or numerals anywhere.

### hero/s05e02-hill-holding.jpg — house remade to match s06e01c01, 17 November 2026 (Opus, desktop)
- **Kind:** an edit of the filed banner's house strip, with the filed `chapters/s06e01c01.jpg` house as reference, composited back onto the filed banner; two fixes by hand. At Dermot's decision of 17 November 2026 that the Shepherd holding is the house in `s06e01c01` (`images.md` § 68, *Which house is the Shepherds', settled*).
- **Source:** the filed banner (his plate `F:\112GLEND\_DSC0746.JPG` everywhere outside the house), cropped to the strip x 580–1880, y 545–1276 (1300×731, the house and the posts on the field) and sent at 2400×1350; reference, the `s06e01c01` house cropped at x 640–1290, y 360–640 and sent at 1300×560.
- **Geometry:** the banner is read as the house's other long side. `s06e01c01` shows the door gable at the left, the long wall with two windows, and the yard wall at the far end; seen from the other side, the door gable stands at the right and the yard wall runs back from the left end, which is what the prompt asks for.
- **Run:** `scripts/image-edit.js --aspect 16:9 --size 2K --n 2`, one round. Take 1 used; take 2 refused (a second door in the long wall, the yard wall against it, and the drone drawn as a winged shape that reads as a bat at full size). Take 1 registered to the strip (SIFT and a homography, 782 inliers of 794 matches); only the house, its step, the yard wall and the posts were laid back (a difference mask closed and hole-filled, unioned with the house's outline, feathered at 2 px, the take softened by 0.6 px to the plate's softness). Everything else in the strip is the filed banner's pixels, and the strip was pasted back at its own position. By hand: the gable recess and the drone, which came back pale and glossy like a small saucer, were darkened and made matte (as was done on `s06e01c01`); the new post shafts, drawn near-black, were lifted to the mid slate grey of `s06e01c01`'s posts. No finish. Filed at 1920×1280.
- **Prompt (sent with the strip, then the reference):**

> Edit the first image, a photograph of a valley pasture under a forested hillside. Change only the house and the slim posts in the field. Keep everything else exactly as it is: the trees, the hillside, the grass, the rushes, the light, the camera position, the grain and the softness of the photograph.
>
> The second image shows the house this must become. It is the same house seen from its other side. Rebuild the house in the first image so that a reader would take it for that very building:
>
> - Walls of weathered pale grey fieldstone, irregular stones of mixed size laid in courses, with patches of pale lichen, the same pale warm grey as the second image. Not dark stone, not dressed or sawn blocks.
> - One seamless dark grey composite roof, the same pitch and colour as the second image, with no chimney, no gutters, no ridge tiles, no fascia board.
> - The gable end on the right holds the door: a plain dark open doorway near the middle of the gable, with deep stone reveals and a large flat stone step before it. High in the same gable, above the door, a wide recess with a rounded top, set deep in the stone, and resting inside it a small, matte, dark field drone, folded, a smooth low capsule. No round window.
> - The long wall facing the camera has two deep, wide windows with rounded corners, set deep in thick stone, dark glass with no frames, no mullions and no sills. No door on this long wall.
> - A dark conduit runs along under the eave of the long wall and turns down at the right-hand corner to the ground. Dark, not pale or white.
> - At the left end of the house a low dry-stone yard wall of the same pale stone runs back from the corner.
> - Keep the house's size, footprint, height and position in the frame as they are now. It stays a low single-storey longhouse.
>
> The slim posts along the field on the right become slim dark posts with small pale caps, the same as the posts in the second image, with no wire between them.
>
> Do not add any people, animals, vehicles, signs, lettering, numbers, lamps, lights, plaques, solar panels, aerials, satellite dishes, fences with wire, timber cladding, downpipes in white, gutters or a chimney. The building is clean and kept, a photograph, not a render.

### hero/s05e02-hill-holding.jpg — new plate from the Shepherd hillside, 17 November 2026 (Opus, desktop)
- **Kind:** Dermot's own photograph with the filed `s06e01c01` house composited onto it; no generation. At his *"Yes, new plate"* (`images.md` § 68, *The banner on the holding's own land*). Supersedes both entries above; the Glendalough plate is no longer used.
- **Source:** the plate is `F:\108SEP24\_DSC7317.JPG` (28 September 2024, 11:04, D3100, 4608×3072), taken from the same spot as `F:\108SEP24\_DSC7323.JPG`, the `s06e01c01` plate, two minutes earlier and wider. The house is the filed `src/images/chapters/s06e01c01.jpg`.
- **Run, all by hand (OpenCV and PIL):** `s06e01c01` registered to 7317 by one homography (SIFT, 109 inliers of 208). Mask: `s06e01c01` against 7323 registered to it (SIFT, 4203 inliers of 4210), differences over 28 levels kept round the house and yard and closed, plus a window over 12 levels round each of the seven posts. The house, step, yard wall and posts warped into 7317, gain-matched per channel on a ring 7–30 px round the paste (B 0.85, G 1.02, R 1.02), Gaussian 1.6 px, grain σ 1.5 added, feathered 2 px, laid over the hut. The gable recess and drone darkened to matte (a soft ellipse, levels × 0.55 with highlights pulled down). Four utility poles on the upper pastures and one dust spot on the wood healed (`cv2.inpaint`, Telea), with grain over the poles. Cropped to x 768–4608, y 512–3072 and filed at 1920×1280, quality 88. No finish. Images generated: none.
- **Page:** the banner's `img` on `src/seasons/s05/e02/index.md` carries `object-position: center 70%`, so the house shows in the page's wide strip.

## 2026-11-17 — Season 4 chapter illustrations, all six (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 65, with the references each was sent. **Tool** for all six: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; two takes per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1. Eighteen images in all: twelve first-pass takes of twelve asked and six edit takes. Nothing was refused.

### chapters/s04e00c01.jpg — filed 17 November 2026
- **Kind:** generation with references, then two fixes by hand
- **Source:** `images.md` § 65.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2 filed. By hand, at full size before the finish: an ear stud healed out (`cv2.inpaint`, a circle of 8 px), and the chest tab's two bars redrawn as three (PIL, three parallelograms in the tab's own blue on its own grey, blurred and grained to match).

### chapters/s04e00c02.jpg — filed 17 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 65.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is, the man, the deck, the ribs, the light, the grain and the framing, and change only these things. 1. The two tugs in their clamps: remove every window, windscreen and glazed band from them, so that each tug is a plain closed rounded hull of dull pale grey composite with a few fine honest seams and a thin even film of dust, with no glass, no cab, no door, no handles, no rivets and no markings. Keep the clamps and the one small steady indicator on each clamp. 2. Inside the lit office: remove the ceiling light panel so the ceiling is plain and the warm light has no visible source, and replace the swivel chair with one plain rounded moulded seat of pale composite with no wheels and no stem. Keep the desk and the single cup. 3. The three small workers far down the deck: give them ordinary bare heads with short dark hair, no helmets, no caps and no hoods, and make their cart a plain low flat carrier with one plain sealed crate on it. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

### chapters/s04e01c01.jpg — filed 17 November 2026
- **Kind:** generation with a reference, then an edit
- **Source:** `images.md` § 65.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 2, then edit take 2 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is, the raven, the ribs, the berth, the machine in its clamp, the dust on it, the light, the grain and the framing, and change only these things. 1. Every dock worker is bare-headed, with ordinary hair: remove every hard hat, helmet and cap. 2. Every worker's hands are empty or on a cart: remove the camera and any hand-held device or paper. 3. The freight carts become plain low flat carriers of pale composite that sit close to the deck, with no rubber tyres, no spoked wheels, no metal tube handles and no chains; the crates on them are plain smooth sealed boxes of pale grey with no straps, labels or markings. 4. The dust on top of the machine is perfectly even and undisturbed: remove the small scratch mark in it. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

### chapters/s04e01c02.jpg — filed 17 November 2026
- **Kind:** generation with references
- **Source:** `images.md` § 65.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s04e02c01.jpg — filed 17 November 2026
- **Kind:** generation from text alone
- **Source:** `images.md` § 65.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1 filed.

### chapters/s04e02c02.jpg — filed 17 November 2026
- **Kind:** generation with references, then an edit
- **Source:** `images.md` § 65.
- **Run:** `scripts/image-edit.js`, round 1 of 1, variation 1, then edit take 1 of 2.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is, both women, their faces, hair and clothes, the room, the hanging, the shelf, the chair, the ferns, the light, the grain and the framing, and change only these things. 1. The pale grey leaf lying on the desk is completely blank: remove the line of small writing from it, so it is one plain matte pale grey sheet with nothing on it. 2. The window is one single unbroken pane: remove the thin vertical bar that divides it. Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

## 2026-11-17 — Season 7 chapter illustrations, all four (Fable, desktop)

The prompts of record are in `story-bible/images.md` § 69, with the references each was sent. **Tool** for the three generated frames: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (two variations each, references attached; two takes per edit); finished by `import-image.ps1 -MaxEdge 1600` at strength 1. Ten images in all: six first-pass takes of six asked and four edit takes of four asked. Nothing was refused.

### chapters/s07e01c01.jpg — filed 17 November 2026
- **Kind:** generation with references (`characters/syra.jpg`, `chapters/s05e02c02.jpg`). Variation 1 of 2, as generated. No edit.

### chapters/s07e01c02.jpg — filed 17 November 2026
- **Kind:** generation with a reference (`characters/orla-shepherd.jpg`), variation 1 of 2, then one edit round (take 2 of 2 used), pasted back in three places.
- **Edit prompt:**
  > Edit this photograph. It must stay exactly this photograph: keep the woman, her coat, her scarf and her hair, the window and the view through it, the stone on the sill, the two beakers, the kettle and its steam, the counter, the table, the walls, the light, the grain and the framing exactly as they are. Change only these three things. 1. Under the counter, near the woman, there is a short dark pipe and a plumbing trap: remove them completely, so that under the counter there is only the plain rough pale wall in shadow. 2. On the door at the right edge of the frame there is a black iron latch and handle: remove it completely, so the door's edge is one plain smooth pale slab with nothing on it. 3. On the wall at the left there is a dark boxy unit: make it a much smaller, plain, smooth rounded lozenge of dark matte ceramic, about the size of a hand, set flush against the wall, with one tiny steady pale dot of light and nothing else on it, no slot, no screen, no lettering. Change nothing else. A photograph, not a render or a painting. No cables, no sockets, no switches, no text, lettering or numerals anywhere.
- **Run, by hand (OpenCV):** the take registered to variation 1 by one homography (SIFT, 537 inliers of 663); differences over 22 levels kept inside three boxes at 2752×1536 (the housing 110,540–350,870; the pipe 1600,1040–2000,1360; the latch 2490,1000–2660,1330), dilated 25 px and feathered 6 px, and only those laid back. A strip 34 px wide where the old housing's edge had left a line (314,565–348,770) was inpainted (Telea, radius 7) and grained.

### chapters/s07e01c03.jpg — filed 17 November 2026
- **Kind:** Dermot's own photograph, healed; no generated pixel is in it.
- **Source:** `F:\108SEP24\_DSC7283.JPG` (28 September 2024, 10:59:33, 4608×3072). Crop 4608×2592 from row 184, reduced to 2752×1548 for the work and filed at 1600×900, no finish.
- **An edit tried and not used (two takes):**
  > Edit this photograph. It is a real photograph of wooded country below open upland pasture under a bright cloudy sky, and it must stay exactly that photograph: keep every tree, every field, the hedges and field walls, the hills, the clouds, the light, the haze, the softness, the grain and the framing exactly as they are. Change only this: among the trees in the middle distance there are several small present-day houses, roofs, sheds, a white vehicle, and a few thin utility poles standing in the fields at the left. Remove every one of them completely and put in their place the same trees, hedges and grass that surround them, so that no building, roof, wall of a house, vehicle, pole or wire is anywhere in the picture. Also remove the one small dark dust speck at the right. Add nothing. Change nothing else. A photograph, not a render or a painting. No people, no animals added, no text, lettering or numerals anywhere.
  Take 1 kept the plate and drew new pale glossy structures where three of the houses had been; take 2 re-rendered the whole frame (a paste-back mask covered all of it). The lesson: a removal of many small far-off things is not one object swapped, and the edit invents.
- **Run, by hand (OpenCV):** twenty boxes at 2752×1548 (thirteen over roofs, houses, sheds and a vehicle, six over utility poles, one over a dust spot). For each, a source patch of the same size was searched within 260 px across and 90 px up or down, clear of every other box, for the closest match on an 8 px border ring in Lab, and laid over the box with `cv2.seamlessClone`. Checked in three strips at 1.9 times size.

### chapters/s07e01c04.jpg — filed 17 November 2026
- **Kind:** generation with a reference (`characters/sen.jpg`). Variation 1 of 2, as generated. No edit.

## 2026-11-17 — Season 7 fix pass, three frames (Opus, desktop)

At Dermot's *"Yes, both"* (17 November 2026); the record of the pass is `images.md` § 69. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per call, the filed 1600×893 frame as the image to edit. Twelve images in all, six per round; nothing refused. **Paste, by hand (OpenCV):** each take reduced to 1600×893, registered to the filed frame by SIFT and a homography, and only the regions below laid back, feathered, with grain added to the frame's measured grain (C01 and C04 also take a Lab offset from a 10 px ring round each region; C02 is graded by hand, below). Saved at quality 85; no further finish.

### chapters/s07e01c01.jpg — re-filed 17 November 2026
- **Kind:** an edit of the filed frame, two rounds; only the desk, both records and the seated woman's hand pasted back (455–1250 × 630–835 px). Round 1 take 1, then round 2 (an edit of that take) take 2; registered with 194 inliers of 223.
- **Round 1 prompt:**

> Edit this photograph. It is a real photograph of two women at a desk in a cream room, and it must stay exactly that photograph: keep both women, their faces, hair, clothes and poses, the room, the niches, the desk, the light, the grain and the framing exactly as they are.
>
> Change only these things.
> 1. The seated woman holds a pen as if to write. It becomes a plain stylus: one slim straight rod of dark grey matte ceramic, the same thickness from end to end, both ends simply rounded, with no clip, no cap, no nib, no point, no band and no button. She is not writing: she holds it loosely across her fingers, resting along the side of her forefinger with her thumb lightly on it and its far end resting on the desk, the way one holds a pointer, not a pen. Her hand keeps its place and size.
> 2. The grey book on the desk becomes a bound set of thin leaves: about a dozen separate thin rigid sheets of matte slate-grey material, each as thin as a card, stacked flat and hinged together along the long edge nearest the seated woman by its own slim plain dark spine rod, so that the thin edges of the separate sheets show as fine parallel lines along the open sides; the whole set is no thicker than a finger. It has no cover boards, no fabric and no rounded book spine. Same place, closed, flat.
> 3. The tan-brown book becomes the same kind of thing, older: about eight separate thin rigid sheets of matte ochre-brown material, darker at the edges with age, stacked flat and hinged along its own far edge by its own slim plain dark spine rod, the edges of the separate sheets showing as fine lines; thinner than the grey set. No cover boards, no metal clasp, no corner caps. Same place, closed, flat.
> The two sets lie side by side, nearly touching, each with its own rod; they share no hinge.
>
> Change nothing else. A photograph, not a render. No paper pages, no hardback books, no ring binders, no writing, lines, text, lettering or numerals on anything.

- **Round 2 prompt** (on round 1 take 1; take 1 added a second hand and was not used):

> Edit this photograph. Keep everything exactly as it is: both women, their faces, hair, clothes and poses, the two bound sets on the desk, the room, the light, the grain and the framing. Change only the seated woman's right hand and the dark grey rod in it.
>
> She is not writing and does not hold the rod as a pen is held. Her hand rests on the desk edge, palm down and relaxed, and the slim dark grey rod lies across her loosely curled fingers and under her thumb, held level and parallel to the desk's edge, the way one picks up a short pointer or a chopstick to put it away; neither end touches the desk and neither end points down. The rod stays a plain straight rod of dark grey matte ceramic, the same thickness from end to end, both ends simply rounded, with no clip, no nib and no point. The hand keeps its size, its skin, its sleeve and its five fingers, natural and relaxed.
>
> Change nothing else. A photograph, not a render. No pen, no pencil, no writing, no text, lettering or numerals anywhere.

### chapters/s07e01c02.jpg — re-filed 17 November 2026
- **Kind:** an edit of the filed frame, two rounds, with a reference (a crop of the house in `chapters/s06e01c01.jpg`, 660–1120 × 370–610 px, for its stone only); round 1 take 1, then round 2 (an edit of that take) take 2; registered with 398 inliers of 440.
- **Paste:** everything in 0–1492 × 0–835 px except Órla (a GrabCut mask from the rectangle 1075–1485 × 55–893, with her head and scarf added as a polygon and dilated 2 px), the table (0–548 × 655–893), the counter (100–1150 × 512–612, but for the vessel and disc, 950–1135 × 480–565); feather 3 px. **By hand on the walls** (not the pane, the vessel or the counter): Lab blur 0.6 px, local contrast ×0.72 round an 8 px mean, L −3, b +3, a −1, grain re-added; the steam laid back from the filed frame as its positive high-pass (14 px) inside a polygon round the plume, ×0.9.
- **Round 1 prompt:**

> Edit this photograph. It must stay exactly this photograph: keep the woman exactly as she is, her hair, the side of her face, her long grey wool coat, her grey scarf, her hand and her pose; keep the steam rising, the view through the window (the green pasture, the grey sky and the lichened dry-stone wall outside), the river stone on the sill, the two pale beakers, the long pale counter, the dark wooden table at the lower left, the slate floor, the light, the grain and the framing exactly as they are. The second image shows the outside of this same house: use it only for the look of its stone.
>
> Change only these things.
> 1. The walls of the room, left and back and under the counter, and the deep reveal round the window: they are not whitewash or plaster. They become the inside of the house in the second image: the same weathered pale grey-buff fieldstone laid in rough even courses, the stones close-fitted and sealed smooth and matte with a clear finish so that each stone and its joints show, pale and clean, kept, with no render, no limewash, no paint and no crumbling. The deep window reveal is the same sealed stone, its sill one long flat stone.
> 2. The window pane sits straight into the stone reveal with rounded corners and only a fine dark seam where glass meets stone: remove the pale rounded frame round the glass. Keep the view through the glass exactly as it is.
> 3. The kettle on the dark disc becomes a plain sealed vessel: one smooth squat rounded body of dull dark grey metal with a short plain spout, a flush lid with no knob, and one plain low arched handle grown out of the body, under her hand; no hinge, no rivets, no enamel, no whistle, no knob. It stands on the same flush dark disc, which is let into the counter, and the steam still rises from the spout.
> 4. The dark rounded housing on the left wall: remove it completely, so that there is only the stone wall there.
>
> Change nothing else. A photograph, not a render or a painting. No stove, no hob, no cables, no sockets, no switches, no thermostat, no pipes, no text, lettering or numerals anywhere.

- **Round 2 prompt** (on round 1 take 1; both takes held, take 2's seam was clearer):

> Edit this photograph. Keep everything exactly as it is: the woman, her hair, coat, scarf, hand and pose, the steam, the stone walls, the window and the view, the stone on the sill, the two beakers, the counter, the dark disc, the table, the light, the grain and the framing. Change only one thing: the kettle under her hand.
>
> It becomes a plain vessel that does not look like any kettle of today: one smooth, sealed, low rounded body like a large river pebble, of matte dark graphite ceramic, with no lid, no knob and no hinge, only one fine seam running round it a little below the top; a short plain spout grown smoothly out of the body near the top, with the thin thread of steam rising from its tip; and one plain low arched handle of the same dark ceramic, grown out of the body in one piece with it, under her hand. No metal, no shine, no enamel, no rivets, no whistle, no wire handle, no plastic. It stands on the same flush dark disc let into the counter, at the same size and in the same place, her fingers on its handle.
>
> Change nothing else. A photograph, not a render. No text, lettering or numerals anywhere.

### chapters/s07e01c04.jpg — re-filed 17 November 2026
- **Kind:** an edit of the filed frame, two rounds; round 1 take 1, then round 2 (an edit of that take) take 2; registered with 80 inliers of 103. Pasted: the desk record (266–884 × 605–790 px) and the two right-hand niches (1180–1312 × 285–435, 1345–1595 × 282–470); feather 8 px. The record was then recoloured inside its outline to the filed record's mean (a and b in full, L by 0.6). The two records round 2 added to the desk behind the stylus were outside the regions and not pasted.
- **Round 1 prompt:**

> Edit this photograph. It is a real photograph of a long cream room at evening with one grey-haired person walking away toward a doorway, and it must stay exactly that photograph: keep the person, the coat, the rust scarf, the pose, the doorway and the passage beyond it, the desk, the stylus lying on the desk, the walls, the floor, the light, the grain and the framing exactly as they are.
>
> Change only these things.
> 1. The dark book in the near foreground becomes a bound set of thin leaves: about a dozen separate thin rigid sheets of matte slate-grey material, each as thin as a card, stacked flat and hinged together along the left edge by one slim plain dark spine rod, so that the thin edges of the separate sheets show as fine parallel lines along the near open side; the whole set is no thicker than a finger. It has no cover boards, no black binding, no fabric, no rounded book spine and no paper pages. It lies in the same place, the same width, closed and flat.
> 2. In the two niches in the right wall the records stand upright and lean like books on a shelf. Lay them down: in each niche, two or three thin bound sets of matte grey and clay-coloured leaves lie flat, stacked one on another on the niche floor, each thin, with a slim dark rod along one edge. Nothing stands upright or leans.
> The niche on the left wall stays as it is.
>
> Change nothing else. A photograph, not a render. No hardback books, no spines with titles, no book ends, no paper, no writing, lines, text, lettering or numerals on anything.

- **Round 2 prompt** (on round 1 take 1):

> Edit this photograph. Keep everything exactly as it is: the person walking away, the coat, the scarf, the doorway, the desk and everything on it, the walls, the floor, the light, the grain and the framing. Change only what is inside the two deep niches in the wall at the right.
>
> In each of those two niches, the records that stand upright or lean against the back of the niche are taken away completely, so that the back and sides of the niche are plain smooth cream composite with nothing against them. On the floor of each niche lie only thin bound sets laid flat: two or three in each niche, stacked one on another, each a set of thin matte grey or clay-coloured leaves no thicker than a finger, with a slim dark rod along one edge. Nothing in either niche stands up, leans, or rises above a hand's height from the niche floor.
>
> Change nothing else. A photograph, not a render. No books standing on end, no book spines, no book ends, no titles, no text, lettering or numerals anywhere.

## 2026-11-17 — Season 8 chapter illustrations, both (Fable, desktop)

The record is in `story-bible/images.md` § 70. Both frames are Dermot's photographs. **Tool** for the one edit: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js` (one round, two takes). Filed by `import-image.ps1 -MaxEdge 1600 -Finish 0`. Two images in all, two asked. Nothing was refused.

### chapters/s08e01c01.jpg — filed 17 November 2026
- **Kind:** Dermot's own photograph as the plate, graded by hand, with one edit pasted back by registration and two heals by hand.
- **Source:** `F:\129DALKY\DSC_9733.JPG` (13 June 2026, 12:40:39 camera time, 4608×3072). Crop 4608×2592 from row 250, reduced to 2752×1548 for the work and filed at 1600×900, no finish.
- **Grade, by hand (NumPy), before the edit:** to linear light at gamma 2.2; exposure times 0.30; red times 0.84 and blue times 1.14; back to gamma; saturation times 0.72 about the pixel's mean; then times 0.97 plus 0.018 for a shadow floor. Nothing in the frame moves; the whole frame is darkened and cooled alike.
- **Edit prompt** (sent with the graded crop and `src/images/lore/cnoc-na-mbeach.jpg`): the prompt of record in `images.md` § 70, as four numbered changes (the hives, the lamp, the walker, the posts and rope).
  Take 1 did all four. Take 2 left the rope fence and drew more of it, with new posts beside the hives.
- **Run, by hand (OpenCV):** take 1 registered to the graded crop by one homography (SIFT, 119 inliers of 155; the frame is dark and low in contrast, and the fit was checked on a difference map, which is flat everywhere but the changed places). Laid back, feathered 6 px: one box over the hives, stand, cloth and their shadow (1720,1000–2420,1410); one box over the doorway (812,985–900,1240); and, inside two bands (0,800–570,960 at the left skyline and 1300,800–2752,1000 across the right), only pixels whose blurred difference from the plate was over 7 and 10 levels, opened 3 px and dilated 17 px, which took the walker, the posts against the sky and most of the right-hand posts (45 small regions). The building, the boulders, the sky and the rest of the grass are his pixels. Then by hand on the result: the rope the edit had left across the middle ground and ten remaining post positions were inpainted along a drawn line (Telea, radius 5) and grained; three hand-hold recesses on the hive fronts were covered with a patch of each hive's own face from 31 to 33 px lower, matched to the surrounding mean and feathered. An inpaint of the hand-holds was tried first and smeared the lid's shadow down the face; it was not used.

### chapters/s08e02c01.jpg — filed 17 November 2026
- **Kind:** Dermot's own photograph, healed; no generated pixel is in it.
- **Source:** `F:\111BOHER\DSC_2855.JPG` (15 August 2026, 12:28:36 camera time, 4608×3072). Healed at full size, then crop 4608×2592 from row 60, reduced to 2752×1548 and filed at 1600×900, no finish.
- **Run, by hand (OpenCV):** a house showing white among the trees was covered with one elliptical patch of his own foliage, 290×160 px, taken from 320 px to its left and laid in with `cv2.seamlessClone` (destination corner 1880,740; source corner 1560,720). Two small white objects on the flat (near 2027,1258 and 2225,1245) were inpainted where brighter than 205, dilated 7 px (Telea, radius 4). A first pass at a lower threshold smeared a strip of pale mud beside them and was thrown away. Checked at twice size.

## 2026-11-17 — Season 8 fix pass: the hives at Cnoc na mBeach, and *Asteria's Night* (Opus, desktop)

The record is in `story-bible/images.md` § 70, *Fix pass*, at Dermot's *"Yes, both"*. **Tool** for the edits: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`. Three edit rounds of two takes each, six asked and six returned; nothing was refused. Each used take was registered to the frame it edits by one homography (SIFT on CLAHE-equalised grey, RANSAC 2 px), and only its changed regions were pasted, feathered and given the frame's own grain. Files written at their filed sizes, JPEG quality 90; no finish.

### chapters/s08e01c01.jpg — hives and stand, 17 November 2026
- **Edit prompt** (sent with the filed frame and `src/images/lore/cnoc-na-mbeach.jpg`):
  > Edit the first image, a photograph at dusk, and keep it exactly as it is in every respect except the three beehives and the low stand they stand on, at the right of the frame. Keep the stone building, every stone of it, the lit doorway, the boulders, the grass, the sheep, the sky, the clouds, the framing, the dim blue dusk light, the colour and the grain of the photograph, all untouched. Replace the three hives and their stand, in the same place, at the same size, in the same row and at the same angle, with these: The hives: three low hives in a row, each one piece, a squared body with softly rounded corners and edges, made of a smooth pale matte composite, off-white, the same make as the pale hives seen through the window in the second image. Each is a single solid seamless form, not a stack of boxes: no separate lid or roof board, no overhanging telescoping lid rim, no floor board, no joints, no seams, no nails, no screws, no handholds, no handles, no labels, no markings. The only opening is one narrow dark horizontal slot low on the front. They look quietly too well made for an old place, not like a present-day wooden beehive painted white. The stand: one plain low frame of dull dark grey composite, a hand's width above the grass, with one straight rail along its front and short plain legs, carrying all three hives. No timber, no planks, no paint, no visible bolts or brackets. Over the rail in front of the hive nearest the right edge hangs the same small folded square of heavy dark undyed cloth that hangs there now, weighted and still. Keep it. The hives and stand are in the same dim dusk light as everything else: pale grey-blue, not bright, not glowing, with soft shadows on the grass. No bees. Add nothing else: no people, no fences, no posts, no lights, no lettering of any kind. It must still look like the same untouched photograph taken at dusk. 16:9 landscape.
- **Takes:** take 1 grey-blue hives, used; take 2 the same forms in a warmer off-white that read as lit against the dusk. Registration: 661 inliers of 726.
- **Pasted:** one box, 1018–1384 × 588–808 px at 1600×900, feathered 5 px, grain matched to the frame's high-frequency spread. Everything outside it is the filed frame.

### characters/brother-fintan.jpg — hives only, 17 November 2026
- **Round 1 prompt** (sent with the filed portrait and `src/images/lore/cnoc-na-mbeach.jpg`):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except the beehives. Keep the man exactly as he is: his face, his white hair and beard, his expression, his dark wool jumper, his collar, his posture, and his right hand resting flat on the roof of the nearest hive, with every finger where it is now. Keep the whitewashed stone walls, the stone cells and their doorways, the hillside, the mist, the sky and the small point of light in it, the bees in the air, the grass, the framing, the warm early light, the colour and the grain of the photograph, all untouched. Replace every beehive in the picture, each in its same place, at the same size and the same angle: the hive under his hand in the near left foreground, the row of hives behind it at the left, and the hive partly hidden behind his arm. Each hive becomes one piece: a squared body with softly rounded corners and edges, made of a smooth pale matte composite, off-white, the same make as the pale hives seen through the window in the second image. Each is a single solid seamless form, not a stack of boxes and not timber: no planks, no wood grain, no weathering, no separate lid or roof board, no overhanging telescoping lid rim, no floor board, no joints, no seams, no nails, no handholds, no handles, no labels, no markings. The only opening is one narrow dark horizontal slot low on the front. They stand directly on the ground or on plain low bases of the same pale composite. They are clean and kept, quietly too well made for an old place, catching the same warm low light as the walls, with honest soft shadows. His hand stays resting flat on the top of the nearest hive exactly as now. Add nothing else: no people, no tools, no lights, no lettering of any kind. It must still look like the same untouched photograph. Keep the aspect ratio of the first image.
- Take 2 used (take 1 gave the near hive a speckled stone texture and a stepped base). Registration: 1,595 inliers of 1,638. **Region:** pixels in the lower left (x < 720, y > 360 at 1200×670) whose blurred difference from the filed frame exceeded 22 levels, closed 5 px, opened 3 px, small pieces dropped, holes filled, except inside a drawn polygon round his hand and forearm, where no hole was filled, so his hand and sleeve stay the filed pixels; feathered 1.6 px.
- **Round 2 prompt** (an edit of the round-1 result, nothing else sent):
  > Edit this photograph and keep it exactly as it is in every respect except the pale beehives. Keep the man exactly as he is: face, hair, beard, expression, jumper, collar, posture, and his right hand resting flat on the top of the nearest hive with every finger where it is now. Keep the walls, the cells, the doorways, the hillside, the mist, the sky and the point of light in it, the bees in the air, the grass, the framing, the light, the colour and the grain, all untouched. Make the pale hives read unmistakably as working beehives, keeping their shape, size, place and pale colour: on the front of each hive, under its narrow entrance slot, add a narrow landing lip of the same pale composite, and on each lip and at each slot a few honeybees walking in and out, small and real. Make the hives' surface fully matte, with a faint fine texture like dense stone or fired clay and soft honest marks of handling, no plastic sheen and no gloss, a little greyer and duller in their shadowed faces, so they belong in the old yard. No seams, no labels, no handles, no lettering of any kind. Add nothing else. It must still look like the same untouched photograph. Keep the aspect ratio.
- Take 2 used (take 1 kept more sheen). Registration: 1,819 inliers of 1,856. Pasted inside the same round-1 region, so nothing outside the hives moved in either round.

### chapters/s08e02c01.jpg — wheel tracks healed and a late-autumn grade, 17 November 2026
- **Kind:** Dermot's own photograph (`F:\111BOHER\DSC_2855.JPG`), from the filed 1600×900 frame; no generated pixel is in it.
- **Search first:** `103NOV24`, `104NOV24`, `110NOV24` (30 November 2024 frames), `111NOV24`, `113NOV24` on contact sheets, one folder at a time; no late-autumn flat drowned or drained ground (§ 70).
- **Heal, by hand (OpenCV):** black-hat (15 px ellipse) over 24 levels inside a drawn band across the tracks (790,625–1600,690 to 790,760–1600,735), keeping connected strokes of 25 px or more at least twice as wide as tall, dilated 2 px; Telea inpaint radius 4; then the inpaint's low frequencies (Gaussian 2 px) plus the frame's own high-frequency texture from 55 px above, feathered 1.2 px. One lump at the mud's edge (ellipse at 1297,726, 32×13) covered from 80 px to its left, feathered 3 px.
- **Grade, by hand (NumPy):** hue of greens and yellow-greens (OpenCV hue weighted round 58, ±40) turned 20 toward yellow, saturation times 0.42; to linear at gamma 2.2; exposure times 0.32; blue times 1.08, red times 0.93; a vertical ramp from 1.0 at the top to 0.78 at the bottom; back to gamma; times 0.96 plus 0.025. The whole frame alike.

## 2026-11-17 — Season 9 chapter illustrations, all five (Fable, desktop)

The record is in `story-bible/images.md` § 71. All five frames are generated; none is on a plate of his. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per generation prompt. Filed by `import-image.ps1 -MaxEdge 1600` at finish strength 1. Eighteen images in all: ten first-pass takes, two second-round takes for C05, six edit takes. Nothing was refused. The generation prompts of record are in § 71; the edit prompts and the handwork are here.

### chapters/s09e01c01.jpg — filed 17 November 2026
- **Kind:** generated with two references (`characters/iklix-varn.jpg`, `characters/noah-adeyemi.jpg`), take 1 of 2, then one edit (one take).
- **Edit prompt** (sent with take 1):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except one change. Keep the officer at the hatch, the bag, the wall, the three doors, the plant, the window, the floor, the light, the framing, the colour and the grain all untouched. The change: replace the two people walking in the corridor at the right with two different people in the same place and at the same size, walking away from the camera along the corridor, seen from behind. One is an older man with white hair in a long plain moss-green band-collared tunic and loose dark trousers; the other is a middle-aged woman with a long dark plait in a plain rust-brown wrap top and loose grey trousers. Both wear plain soft dark slip-on shoes with thin flat soles. They walk side by side, talking, heads a little toward each other, and neither looks back. No trainers, no white shoes, no logos, no bags. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s09e01c02.jpg — filed 17 November 2026
- **Kind:** generated with one reference (`characters/noah-adeyemi.jpg`), take 2 of 2, then two edits in turn (one take each).
- **First edit prompt** (sent with take 2):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except three small changes. Keep the crouching young man, his face, his clothes, the watering can, the pot, the corridor, the floor, the framing, the colour and the grain all untouched. 1. The plant in the clay pot becomes a small plain foliage plant with a few rounded green leaves on short stems and no flowers, no buds and no fruit; it is not a strawberry. The soil stays dark and wet. 2. Remove the bright light panel in the ceiling at the top right and put plain pale ceiling there, evenly lit like the rest. 3. The two hands of the standing person at the right edge become pale, light-skinned hands, the same size and pose. Add nothing else. No lettering of any kind. 16:9 landscape.
- **Second edit prompt** (sent with the first edit's result and a crop of the plant from the C04 frame):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except two small changes. Keep the crouching young man, his face, his clothes, the watering can, the clay pot, the corridor, the standing person at the right, the floor, the framing, the colour and the grain all untouched. 1. The plant in the clay pot becomes the same kind of plant as in the second image: a small plant with a few round coin-shaped green leaves on thin upright stems, no flowers, no buds and no fruit. The soil stays dark and wet. 2. The crouching man's two shoes become plain soft dark grey slip-on shoes with thin flat soles and no laces. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s09e01c03.jpg — filed 17 November 2026
- **Kind:** generated with two references (`chapters/s04e00c01.jpg`, `characters/iklix-varn.jpg`), take 2 of 2, then one fix by hand.
- **By hand (OpenCV), at 2752×1536 before filing:** the stylus's sharpened point was covered with a patch of the leaf's own surface from 42 px above it (box 1596,1254–1665,1292), which leaves the rod with a square end. An inpaint was tried first and redrew the point; it was not used.

### chapters/s09e01c04.jpg — filed 17 November 2026
- **Kind:** generated with two references (`characters/noah-adeyemi.jpg`, `characters/iklix-varn.jpg`), take 2 of 2, then one edit (one take).
- **Edit prompt** (sent with take 2):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except one small change. Keep both people, the hatch, the walls, the door, the pot, the light, the framing, the colour and the grain all untouched. The change: the plant in the clay pot becomes a small plain foliage plant with a few rounded green leaves on short stems and no flowers, no buds and no fruit; it is not a strawberry. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s09e01c05.jpg — filed 17 November 2026
- **Kind:** generated with two references (`characters/iklix-varn.jpg`, `chapters/s04e00c01.jpg`), second round, take 1 of 2; two fixes by hand; then one edit (two takes, take 1 used) laid back over the hatch only.
- **First-round prompt, not used** (sent with `chapters/s04e00c01.jpg` alone; both takes failed on scale, as § 71 says):
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, taken from low down, at knee height, a little behind and to the left of a young officer who stands at a desk, looking past the officer's legs and across the desk at an older officer who stands on its far side, deep focus, at work, never posed: the older officer has stopped what she was doing and is looking down, over the edge of the desk, at the floor where the young officer's boots are. The place is the fold-approach watch of the Star Rangers aboard Eden, a large rotating space habitat, in the spring of the year 2828 UCSD, eight centuries from now. The young officer is at the left of the frame, close to the camera, seen from behind from the waist down: plain grey-brown uniform trousers and plain dark ankle boots with a deep ridged sole, standing square and easy at an ordinary working distance from the desk, close enough to lay a hand on it. The floor is smooth, pale, matte and bare, evenly lit, and takes up the lower third of the frame. The older officer is at the right of centre, facing the camera across the desk: a woman in her fifties of South Asian heritage, jaw-length dark hair streaked with grey, in plain grey-brown service dress with a stand collar and one small rank tab at the collar; her head is bowed, her eyes on the floor at the boots, her face calm, exact and for once a little surprised; one hand rests on the desk beside a single thin rigid blank pale grey leaf and a plain slim dark rod of a stylus. The desk is a plain pale slab that grows out of the side wall, bare but for the leaf and the stylus. The room is the one in the reference image of the two officers: small, clean and kept, smooth warm pale grey composite walls meeting the floor and the low ceiling in rounded coving, soft even light from a source that cannot be seen; a plain pale desk slab that grows out of the wall; and in the wall one long low sealed housing of dark matte ceramic with a single honest seam and, in it, six small round steady points of the same soft pale light, evenly spaced in one row, and nothing else. The housing with its six points runs along the wall behind her at chest height. The reference image shows this room and this older woman: keep exactly her face, hair, age, build and service dress, the desk, the wall and the instrument, and take nothing else from it, not the second woman, the pose or the viewpoint. Quiet and exact: a small thing noticed and, for once, about to be said. Palette: warm pale grey, grey-brown, six small pale points. Photographed, not rendered: real skin with pores, cloth with a real weave and creases, slight softness toward the corners, high-ISO grain heavier in the shadows, natural colour, normal exposure. Negative: looking at the camera, posed portrait; screens, monitors, holograms, projected light, glowing displays, tablets, phones, keyboards; dials, gauges, knobs, switches, exposed cables, pipes, ducting, rivets, bolts, louvres, vents, hazard stripes, grime, rust, stains; ceiling light panels, strip lights, visible lamps or bulbs; signage, door numbers, nameplates, notice boards; jeans, trainers, hooded tops, T-shirts, present-day jackets, backpacks, ties, lapels, wristwatches, spectacles, earbuds; paper, printed books, pens; any text, lettering, numerals or logos anywhere. Render negatives: 3D render, CGI, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, waxy skin. Landscape orientation. Writing or lines on the leaf, a clipboard, a signature; a chair, a stool; grating, a patterned floor, a mark or a line on the floor; a third person; a porthole showing a planet.
- **By hand (OpenCV), at 2752×1536:** the housing drew seven points; the one nearest the hatch was found by threshold (brighter than 190) and inpainted over its bounding box plus 7 px (Telea, radius 6), with grain laid on the patch, which leaves six, counted after. The collar tab, one plain bar about 8 by 20 px, was scored with two lines 2 px deep at 45 per cent of their own brightness (rows 509 and 516, columns 1358 to 1365), making three bars.
- **Edit prompt** (sent with the fixed frame):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except one change. Keep both people, their faces, hair and clothes, the desk, the leaf and the stylus on it, the dark housing on the left wall with its six small points of light, the round port at the top left, the walls, the floor, the light, the framing, the colour and the grain all untouched. The change: the hatch in the far wall behind the young officer becomes a plain one: a single thick flush slab the same pale warm grey as the wall, with rounded corners and one thin seam around it, its face completely flat and smooth with no raised or sunken panels, no frame mouldings, no hinges and no metal plate, and one small plain recessed pull at its left edge at hand height. It is the same size and in the same place. Add nothing else. No lettering of any kind. 16:9 landscape.
- **Laid back:** the edit's frame matches the fixed frame pixel for pixel in place (mean difference 4.8 levels over the whole frame, with no shift), so no registration was needed. Inside the box 1040,110–1700,1200 only pixels whose blurred difference from the fixed frame was over 6 levels, dilated 15 px and feathered 5 px, were taken from the edit; the Deputy, the desk, the housing and the rest of the room are the fixed frame's.

## Season 9 fix pass, 17 November 2026 (Opus, desktop)

At Dermot's *"Fix Season 9 first"* (`images.md` § 71, fix-pass note). Every edit is `scripts/image-edit.js` (gemini-3.1-flash-image, 2K), sent with the filed frame first. Laying back, by hand (OpenCV, `C:\work\s09fix\`, not in the repo): each take was registered to the filed frame by an affine ECC fit, then either (a) only the regions whose blurred L\*a\*b\* difference from the filed frame was over a threshold were taken from the take, or (b) the take was the base and the filed frame's people were laid back over it, their outline found where the take's chroma was warm against a grey-green wall or where the filed frame and the take agreed. No face in any frame is from a take. After the finish (`photo-finish.py`, strength 1), the filed pixels were laid back once more wherever the composite had not changed them, so untouched regions and faces are the filed frame's own.

### chapters/s09e01c01.jpg — re-filed 17 November 2026
- **Edit** (take 1 of 2 used; take 2 drew the same walkers and bag). Base: the take; laid back from the filed frame: the three heads.
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the framing, the camera position, every face, hair, hand, pose and body, the grain and the light, and change only what follows. Corridor: keep the pale cream corridor, its three blank openings, the plant and the window exactly. 1. The young officer at the hatch: replace the shoes with plain dark boots of this century: one seamless moulded piece from the ankle down, soft matte upper, no laces, no elastic side panels, no pull tabs, no visible stitching or welt, closing flush at the ankle under the trouser hem, on a deep ridged sole made for walking on grating; the trousers are plain straight service trousers of the same grey-brown cloth, falling straight to the boot, with no front crease, no belt, no belt loops and no turn-ups; replace the shoulder bag with a soft kit bag of the same grey-brown service cloth, a plain closed soft cylinder with no flap, no buckle, no zip, no pocket and no hardware, hanging at the hip from one broad strap of the same cloth worn across the body. 2. The two residents walking away: dress them both in plain everyday clothes of the century, soft matte woven cloth in quiet colours, simple cuts: the older man in a hip-length band-collared overshirt of soft grey-green cloth with plain straight trousers of a darker grey to the ankle; the woman as she is but with plain straight trousers to the ankle; both in soft seamless flat shoes of one matte piece that cover the whole foot. Keep their backs, heads, hair, gait and positions. Do not add anything else. Negative: Chelsea boots, elastic-sided boots, ankle boots with laces, trainers, sandals, slippers, present-day shoulder bag, messenger bag, tote, backpack, zips, buckles, clasps, logos, jeans, chinos, checked or patterned cloth, kurta, tunic, harem trousers, any text or numerals.
- **Boots, on a crop** (box 560,533–920,893 of the frame, enlarged 2×, 1:1, take 2 of 2 used; take 1 set the boots higher on the leg). Laid back by threshold (10) inside the crop, the crop feathered 12 px into the frame. The same boot prompt served C02 and C05:
  > Edit this close crop of a photograph and keep it a photograph: keep the framing, the floor, the light, the grain, the trouser legs above the ankle and everything else exactly as it is. Change only the footwear of the person in grey-brown service dress. Their boots become plain service boots of eight centuries from now: soft matte boots in a dark grey-brown a shade darker than the trousers, one seamless moulded piece from the toe to above the ankle, rising under the trouser hem so that the hem falls loosely over the boot top; a rounded toe; no laces, no eyelets, no elastic side panels, no pull tabs, no zips, no buckles, no visible stitching and no welt; a thick, flexible, deeply ridged sole of the same colour, made for walking on grating. Matte, not polished, not leather-shiny. Same feet, same stance, same size, same position. Negative: Chelsea boots, elastic gussets, lace-up boots, dress shoes, trainers, combat boots, shiny black leather, any text or logos.

### chapters/s09e01c02.jpg — re-filed 17 November 2026
- **First edit, not used** (one take; the second was refused by the filter, `image_other`): the boots came back still with an elastic panel. Prompt:
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the framing, the camera position, every face, hair, hand, pose and body, the grain and the light, and change only what follows. 1. The standing officer at the right edge, seen from the hip down: replace the boots with plain dark boots of this century: one seamless moulded piece from the ankle down, soft matte upper, no laces, no elastic side panels, no pull tabs, no visible stitching or welt, closing flush at the ankle under the trouser hem, on a deep ridged sole made for walking on grating; the trousers are plain straight service trousers of the same grey-brown cloth, falling straight to the boot, with no front crease, no belt, no belt loops and no turn-ups. 2. The young man crouching: keep his face, shirt and pose exactly; his trousers become plain soft straight trousers of matte grey woven cloth, unpressed, with no visible seams at the front, no belt, no turn-ups, gathered softly at the ankle; his shoes stay soft and plain. Keep the plant, the pot, the watering can and the corridor exactly. Do not add anything else. Negative: Chelsea boots, elastic-sided boots, ankle boots with laces, trainers, sandals, slippers, present-day shoulder bag, messenger bag, tote, backpack, zips, buckles, clasps, logos, jeans, chinos, checked or patterned cloth, kurta, tunic, harem trousers, any text or numerals.
- **Boots, on a crop**, with the boot prompt above: a first crop (1180,473–1600,893) left the old toe outside it; a second, 1080,393–1600,893 and not square, came back rescaled and would not register; the third, square (1100,393–1600,893, 2×, take 2 of 2; take 1 drew a gusset seam), was laid back by threshold (10). Nothing else in the frame changed.

### chapters/s09e01c03.jpg — re-filed 17 November 2026
- **Edit** (take 2 of 2 used: exactly six housings and the Deputy left soft; take 1 drew six large blocks with a seventh behind the Deputy and re-sharpened the face). Base: the take; laid back: the Deputy's head and Smith's hands, where the filed frame and the take agreed (a\*b\* under 9). Then the wall hue was set by hand to the compartment's one value (a\*b\* moved toward RGB 133/146/138, lightness kept), the laid-back regions excluded.
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the framing, the camera position, every face, hair, hand, pose and body, the grain and the light, and change only what follows. Make the watch compartment a different material and light from the pale cream corridor outside it: its walls, ceiling, coving and floor become a cool pale grey-green composite, matte like honed stone with a very faint mineral grain, in soft cool even light from no visible source, a little lower in key than a corridor. The desk slab becomes the same cool grey-green, a shade paler. Nothing warm-beige remains on the walls. In place of the one long dark housing with six points, draw a rack of six separate sealed housings of matte grey in one low bank along the same wall at the same height, each a plain rounded block about the size of a closed hand-case standing on its side, with narrow even gaps between them, and on each block one small round steady point of soft pale light, all the same colour, and nothing else on them: no seams other than the edge of each block, no vents, no handles, no screens, no dials, no labels, no numerals. Keep the hands, the closed log of thin leaves on its rod, the stylus and the young officer in the background exactly, including the face. Do not add anything else. Negative: Chelsea boots, elastic-sided boots, ankle boots with laces, trainers, sandals, slippers, present-day shoulder bag, messenger bag, tote, backpack, zips, buckles, clasps, logos, jeans, chinos, checked or patterned cloth, kurta, tunic, harem trousers, any text or numerals.

### chapters/s09e01c04.jpg — re-filed 17 November 2026
- **Edit** (take 1 of 2 used; take 2 brought his feet into frame in present-day lace-up shoes). Base: the take; laid back: the whole bright strip of the corridor (x 0.575–0.875 of the frame) except his trousers below the hips. Wall hue set as for C03.
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the framing, the camera position, every face, hair, hand, pose and body, the grain and the light, and change only what follows. 1. The dim left two thirds of the frame, the inner face of the hatch and the compartment wall: make them a cool pale grey-green composite, matte like honed stone, in soft low cool light, plainly a different material from the bright cream corridor beyond. Keep the bright corridor, its cream walls, door and plant exactly. 2. The young man in the corridor: keep his face, shirt, stance and hands in his pockets exactly; his trousers become plain soft straight trousers of matte mid-grey woven cloth with no check or pattern, unpressed, no crease, no belt, no turn-ups, falling to the ankle. Keep the officer seen from behind exactly. Do not add anything else. Negative: Chelsea boots, elastic-sided boots, ankle boots with laces, trainers, sandals, slippers, present-day shoulder bag, messenger bag, tote, backpack, zips, buckles, clasps, logos, jeans, chinos, checked or patterned cloth, kurta, tunic, harem trousers, any text or numerals.

### chapters/s09e01c05.jpg — re-filed 17 November 2026
- **Edit** (take 2 of 2 used; take 1 the same with smoother walls). Base: the take; laid back: the Deputy's whole figure above the knees (the filed hand-scored three-bar tab with it) and Smith's head and shoulder.
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the framing, the camera position, every face, hair, hand, pose and body, the grain and the light, and change only what follows. Make the watch compartment a different material and light from the pale cream corridor outside it: its walls, ceiling, coving and floor become a cool pale grey-green composite, matte like honed stone with a very faint mineral grain, in soft cool even light from no visible source, a little lower in key than a corridor. The desk slab becomes the same cool grey-green, a shade paler. Nothing warm-beige remains on the walls. In place of the one long dark housing with six points, draw a rack of six separate sealed housings of matte grey in one low bank along the same wall at the same height, each a plain rounded block about the size of a closed hand-case standing on its side, with narrow even gaps between them, and on each block one small round steady point of soft pale light, all the same colour, and nothing else on them: no seams other than the edge of each block, no vents, no handles, no screens, no dials, no labels, no numerals. The young officer: keep the face, hair, pose, hand on the desk and service dress exactly; replace the boots with plain dark boots of this century: one seamless moulded piece from the ankle down, soft matte upper, no laces, no elastic side panels, no pull tabs, no visible stitching or welt, closing flush at the ankle under the trouser hem, on a deep ridged sole made for walking on grating; the trousers are plain straight service trousers of the same grey-brown cloth, falling straight to the boot, with no front crease, no belt, no belt loops and no turn-ups. Keep the older officer's head and shoulder, the leaf and stylus, the closed hatch and the round port exactly. Do not add anything else. Negative: Chelsea boots, elastic-sided boots, ankle boots with laces, trainers, sandals, slippers, present-day shoulder bag, messenger bag, tote, backpack, zips, buckles, clasps, logos, jeans, chinos, checked or patterned cloth, kurta, tunic, harem trousers, any text or numerals.
- **Boots, on a crop** (600,533–960,893, 2×, take 2 of 2), with the boot prompt above.
- **Six, on a crop** (0,120–640,480, 2×, 16:9, take 1 of 2; both drew six). The first edit drew seven housings; a clone-fill by hand from the wall below was tried first and left a cut edge and a lighter patch, and was not used. Prompt:
  > Edit this close crop of a photograph and keep it a photograph: keep the framing, the light, the grain, the wall and every housing exactly as they are. The row of grey housings on the wall has seven; make it six by removing only the farthest, smallest one (the one nearest the corner of the room, on the right of the row), so that the plain grey-green wall, with its faint grain and soft shadow-free surface, continues where it was. The other six housings, their lights and their shadows stay exactly as they are. Add nothing.

### characters/zoe-smith.jpg — re-filed 17 November 2026
- **Edit** (take 1 of 2 used; take 2 a yellower, more curved corridor). Base: the take; laid back: her whole figure, where the filed frame and the take agreed (L\*a\*b\* under 16). The corridor's chroma eased toward `noah-adeyemi.jpg`'s (toward RGB 214/203/186, her figure excluded). Old frame: `negative-examples/zoe-smith-2026-11-17.jpg`.
  > Edit this photograph and keep it a photograph. Keep the person exactly as they are: the face, hair, expression, gaze, hands, pose, body and clothes, the framing and the camera position. Change only the room, as follows. The corridor becomes a clean, kept residential corridor of a large rotating space habitat eight centuries from now: smooth pale warm cream composite walls with honest seams, meeting the floor and the ceiling in a rounded coving; a smooth pale matte floor with no grating and no tiles, curving gently upward into the distance; flush doors with rounded corners and one small recessed pull, set into the wall with no hinges, frames, louvres or panels on them; soft even day-cycle light from no visible source; along the right wall a plain rounded handrail of matte pale composite, clean. Remove the strip light, the hinged panel doors, the door frame on the left, the rusted rail, the stains and every fitting. Negative: ceiling lights, light fittings, fluorescent tubes, hinges, door frames, cabinets, louvres, vents, rust, stains, grime, peeling paint, tiles, grating, signage, numerals, text. Do not change her at all.

### characters/iklix-varn.jpg — re-filed 17 November 2026
- **First edit** (take 1 of 1; the second returned no image): room, hatch and leaves as asked, but the shelved stack of housings stayed. Base: the take; laid back: her figure where the take was warm against the grey-green (a\* over −3.5), except a box over the hands and leaves. Wall hue set as for C03.
  > Edit this photograph and keep it a photograph. Keep the person exactly as they are: the face, hair, expression, gaze, hands, pose, body and clothes, the framing and the camera position. Change only the room, as follows. The compartment becomes the fold-approach watch compartment of a rotating space habitat eight centuries from now: walls, ceiling and coving of a cool pale grey-green composite, matte like honed stone with a very faint mineral grain, meeting in rounded coving; a smooth plain matte floor of the same material with no grating; a smooth unbroken ceiling with no panels and no lights; soft cool even light from no visible source. The hatch behind keeps its rounded shape and becomes one plain flush slab with one small recessed handle, no latch plate. On the right, instead of shelving, a rack of six separate sealed housings of matte grey in one bank, each a plain rounded block with one small round steady point of soft pale light, all the same colour, nothing else on them. The two printed papers in the hands become two thin rigid blank matte leaves of pale grey with nothing on them, the longer one held open, held exactly as the papers are held. Negative: ceiling light panels, light fittings, floor grating, metal shelving, server rack, cables, vents, handles, latch plates, printed text, lines on the leaves, numerals, labels, rust, grime. Do not change the person at all.
- **Second edit, on that composite** (take 2 of 2; take 1 drew five housings): the rack. Laid back as before, from the filed frame. Old frame: `negative-examples/iklix-varn-2026-11-17.jpg`.
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the person, the face, the hands, the two blank leaves, the room, its grey-green walls, the hatch, the light and the grain, and change only the tall stack of grey housings on shelves at the right of the frame. Replace that stack and its shelving with the right-hand wall of the same grey-green composite, and on that wall, at chest height, a rack of six separate sealed housings of matte grey in one low row running along the wall away from the camera, each a plain rounded block with one small round steady point of soft pale light, all the same colour, with narrow even gaps between them and nothing else on them; the wall above and below the row is plain. No shelves, no frame, no metal, no cables, no vents, no handles, no labels, no numerals.

## 2026-11-17 — Season 10 chapter illustrations, all seven (Fable, desktop)

The record is in `story-bible/images.md` § 72. All seven frames are generated; none is on a plate of his. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per prompt. Filed by `import-image.ps1 -MaxEdge 1600` at finish strength 1. Thirty images in all: fourteen first-pass takes, four second-round takes (C04, C05), twelve edit takes. Nothing was refused and nothing was fixed by hand. The generation prompts of record are in § 72; the edit prompts and the two first-round prompts that were not used are here. Each edit take was filed whole: it kept the frame's composition, and no face in it differs from the take it edits.

### chapters/s10e01c01.jpg — filed 17 November 2026
- **Kind:** generated with one reference (`characters/iklix-varn.jpg`), take 2 of 2, then one edit (two takes, take 2 used; take 1 re-framed the whole picture).
- **Edit prompt** (sent with take 2):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except two small changes. Keep the young officer, the clerk, the other clerks, the two residents, the counter, the wall of hanging grey leaf-sets, the window, the floor, the light, the framing, the colour and the grain all untouched. 1. The object the clerk is handing across the counter is not a book: make it a closed set of about twenty thin rigid matte pale grey leaves, the same pale grey as the leaf-sets hanging on the wall, hinged along one long edge on a slim dark rod, with no cover, no spine, no white paper pages and nothing written on it. It stays the same size, in the same hands. 2. Remove the bright light panel in the ceiling at the top of the frame and put plain pale ceiling there, evenly lit like the rest. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s10e01c02.jpg — filed 17 November 2026
- **Kind:** generated with two references (`characters/tikket.jpg`, `characters/tsikk.jpg`), take 1 of 2, then one edit (two takes, take 1 used; take 2 re-framed the picture).
- **Edit prompt** (sent with take 1):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except three small changes. Keep the two small six-legged beings in the foreground exactly as they are, their bodies, legs and positions, and keep the deck, the columns, the ceiling, the curved walls, the light, the framing, the colour and the grain all untouched. 1. Every raised six-sided bolt head and nut on the column's foot plate and on the deck becomes a plain flat round flush fastening, level with the metal, like the round flush fastenings already in the deck plates. 2. The small group of containers far off at the left, beside the two distant beings, becomes a short row of plain low capsules of dull grey metal with rounded ends, with no labels, no yellow marks, no caps and no handles. 3. Remove the small rust-coloured flecks and spots from the column and the deck, leaving clean dull blue-grey metal with its fine scratches. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s10e01c03.jpg — filed 17 November 2026
- **Kind:** generated with three references (`characters/iklix-varn.jpg`, `characters/kai-larsen.jpg`, `characters/alala.jpg`), take 2 of 2, then one edit (two takes, take 2 used; take 1 re-framed the picture and lost the records' rods).
- **Edit prompt** (sent with take 2):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except three small changes. Keep both people, their faces, hair and clothes, the raven and her perch, the table, the window and the view through it, the walls, the light, the framing, the colour and the grain all untouched. 1. The open record at the left of the table has faint lines of writing on its pages: make its pages plain blank matte pale grey, with no lines, no marks and no writing at all, and keep it a set of thin rigid leaves hinged on its slim dark rod. 2. The open record at the right of the table has a small metal clip in the middle of it: remove the clip, leaving plain blank matte pale grey leaves hinged on their slim dark rod. 3. The man's left hand has a ring on one finger: remove the ring, leaving a bare finger. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s10e01c04.jpg — filed 17 November 2026
- **Kind:** generated with two references (C02's unedited take as the place, `characters/iklix-varn.jpg`), second round, take 1 of 2, then one edit (two takes, take 2 used; take 1 left the engineer's empty hand a fist).
- **First-round prompt, not used** (sent with `characters/iklix-varn.jpg` alone; one take drew white lattice trusses and a ceiling light panel, the other wall brackets for mounts, as § 72 says):
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, taken at standing height in the understructure beneath a habitat's dock ring during the ring's night, deep focus, at work, never posed: an engineer turns a thin dark slate toward a young officer so that the officer can read it, and beyond them a second engineer kneels at a structural mount on which a small sealed instrument has been clamped. The place is the understructure beneath the dock ring of Eden, a large rotating space habitat, in the spring of the year 2828 UCSD, eight centuries from now, in the small hours. The young officer stands at the right, facing us in three-quarter view, eyes down on the slate: lean, about twenty, with short dark hair, in plain grey-brown service dress with a stand collar and one small rank tab at the collar, plain seamless dark grey-brown moulded boots, both feet planted on the plating, face still and intent. The first reference image shows this officer: keep exactly the face, hair, build and service dress, and take nothing else from it, not the room. The senior engineer stands at the left, nearer the camera, seen from behind and a little to one side: a broad-shouldered woman in her fifties with cropped grey hair, in a plain matte dark graphite-grey field shell with a stand collar and a thin steel-grey line of piping along each seam; she holds the slate out in one hand, turned toward the officer. The slate is one thin rigid matte dark grey sheet the size of a large book, unlit, its face turned away from the camera. Beyond them, in the middle distance, the second engineer, a younger man in the same graphite field shell, kneels on the deck beside a structural mount, one hand resting on it, looking at a different mount further along. Clamped to the face of the mount beside him is the reference instrument: one small sealed plain housing of pale matte ceramic about the size of a loaf of bread, with rounded edges, held by a broad smooth band, with one small steady pale point of light on it and nothing else. On the deck near him stands its open carrying capsule: a smooth rounded two-part shell of pale composite with a moulded hollow inside, with no handles, latches or corners. The mounts are heavy plain blocks of dark blue-grey metal as tall as a person, rising from the deck to the ceiling, six of them in a row along the deck, evenly spaced, all alike. The understructure is a long, low, cold working space that curves gently upward into the distance in both directions, as the inside of a turning ring does: a deck of large plain plates of dark blue-grey metal with flush fastenings, a low ceiling of the same plates, and between deck and ceiling a row of broad plain structural members of the same dark blue-grey metal, old, dull and evenly darkened with age but clean and kept. Among them stand a few new members of clean pale bright metal, cut square and fitted so exactly to the old that the joins barely show. Cool, even working light from a source that cannot be seen. The light is dimmer for the night but clear, and a little cold. Nobody else in frame. Undramatic and exact: a number being shown to the person whose watch asked for it. Palette: dark blue-grey, graphite, grey-brown, a little clean pale metal, one small pale point. Photographed, not rendered: real skin with pores, cloth with a real weave and creases, slight softness toward the corners, high-ISO grain heavier in the shadows, natural colour, normal exposure. Negative: looking at the camera, posed portrait; screens, monitors, holograms, projected light, glowing displays, tablets, phones, keyboards; dials, gauges, knobs, switches, exposed cables, pipes, ducting, rivets, louvres, vents, hazard stripes, grime, rust, stains; ceiling light panels, strip lights, visible lamps or bulbs; signage, door numbers, nameplates, notice boards; jeans, trainers, hooded tops, T-shirts, present-day jackets, backpacks, ties, lapels, wristwatches, spectacles, earbuds; paper, printed books, pens; any text, lettering, numerals or logos anywhere. Render negatives: 3D render, CGI, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, waxy skin. Landscape orientation. Hard hats, high-visibility vests, head torches, hand torches, tool belts, a toolbox, a latched hard equipment case, a tripod, a laptop, a meter with a needle, probes on wires, a glowing slate, light on a face from the slate, writing on the slate; lattice girders, trusses, riveted steel, bolted flanges, pipework, cable trays, catwalks, grating, chains, caged lamps, puddles, debris; a window, stars, a planet; a weapon.
- **Edit prompt** (sent with second-round take 1):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except three small changes. Keep the young officer at the right, her face, hair, clothes and the dark slate she holds in both hands and reads; keep the kneeling engineer, the columns, the small pale instrument clamped to the column, the open pale capsule on the deck, the deck, the ceiling, the walls, the light, the framing, the colour and the grain all untouched. 1. The grey-haired engineer in the left foreground, seen from behind, is holding a second dark slate in her outstretched hand: remove that second slate completely, so that her hand is empty, open and relaxed, lowered a little, as if she has just handed the slate over. There is then only one slate in the picture, the one the young officer is reading. 2. Remove the small rust-coloured flecks and spots from the columns and the deck, leaving clean dull blue-grey metal with its fine scratches. 3. The kneeling engineer's boots become plain seamless dark moulded boots with no laces. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s10e01c05.jpg — filed 17 November 2026
- **Kind:** generated with three references (`characters/tikket.jpg`, `characters/tsikk.jpg`, C02's unedited take), second round, take 1 of 2, then one edit (two takes, take 1 used; the two were alike).
- **First-round prompt, not used** (sent with the two portraits; both takes read as a tabletop model, as § 72 says):
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, taken from low down, a little above the height of the deck, inside a small sealed contractors' module, deep focus, at work, never posed: four small six-limbed beings gathered on bare deck plating around a thin slab of slate, one of them with its two forelegs resting on the slab, making a record by touch, and the other three standing round it, each turned toward the slab. The place is the contractors' module set down on the understructure deck beneath the dock ring of Eden, a large rotating space habitat, in the spring of the year 2828 UCSD, eight centuries from now, on a crew's last shift. Each of the four is a small six-limbed being with exactly this body: a low, beetle-like segmented carapace carried close to the ground on six jointed legs of equal kind, no torso, no shoulders, no upright posture, no humanoid arms, the head a smooth rounded dome that is entirely featureless, no face, no eyes, no mouth, no mandibles; about the length of a human forearm; dull slate carapace with a bronze cast, matte, real chitin with fine scratches, fine sensory ridges along each leg. The two attached photographs show this same people's body: take the body plan, the dome head, the six legs of equal kind and the matte chitin from them and nothing else, not their setting, its girders, its pipes or its grime. The four are four individuals, a little different in size and in tone within slate and bronze, the smallest palest; they stand well apart from each other, each square and level on its legs with all its feet on the plating, exactly four of them and no more. The one writing is in the middle of the frame, four legs gripping the deck, its two forelegs laid flat on the slab. The slab is a thin flat rectangle of dull dark slate stone lying on the plating, plain and unmarked, with no screen, no edge detail and nothing on it. The other three stand around it at a little distance, one at the left, one at the right and one beyond, their smooth domed heads all turned toward the slab. Behind them, against the wall, stands a neat row of six low sealed tool capsules of dull metal with rounded ends and no handles or latches, packed and closed. The module is small, low, clean and kept: its floor is the deck's own bare plating, large plain plates of dark blue-grey metal with flush fastenings; its walls and low ceiling are smooth warm sand-coloured composite with rounded coving; in the end wall is one closed flush hatch with rounded corners, tall enough for a person, which makes the four beings look as small as they are; and low in the side wall, at the height of the beings, is one small plain matte grey panel set flush, blank and unlit. Soft, warm, even light from a source that cannot be seen. No human in frame. Quiet, settled, a crew of four at the end of a job: a line being written under a line. Palette: warm sand, dark blue-grey plating, slate and bronze, dull metal. A real camera resting near the deck. Photographed, not rendered: real skin with pores, cloth with a real weave and creases, slight softness toward the corners, high-ISO grain heavier in the shadows, natural colour, normal exposure. Negative: looking at the camera, posed portrait; screens, monitors, holograms, projected light, glowing displays, tablets, phones, keyboards; dials, gauges, knobs, switches, exposed cables, pipes, ducting, rivets, louvres, vents, hazard stripes, grime, rust, stains; ceiling light panels, strip lights, visible lamps or bulbs; signage, door numbers, nameplates, notice boards; jeans, trainers, hooded tops, T-shirts, present-day jackets, backpacks, ties, lapels, wristwatches, spectacles, earbuds; paper, printed books, pens; any text, lettering, numerals or logos anywhere. Render negatives: 3D render, CGI, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, waxy skin. Landscape orientation. A swarm, more beings than stated, an insect of Earth, a beetle with antennae, wing cases opening, wings, pincers, claws, a spider, a crab, a face, eyes, a mouth, teeth, gore, dripping, a threat posture; a humanoid body; a tablet, a handheld device; lattice girders, trusses, riveted steel, bolted flanges, pipework, cable trays, catwalks, grating, chains, caged lamps, puddles, debris. A fifth being, a sixth being; writing or marks on the slab; a window.
- **Edit prompt** (sent with second-round take 1):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except three small changes. Keep the four small six-legged beings, their bodies, their number and their places, the slab of slate on the deck, the deck plates, the sand-coloured walls, the hatch, the light, the framing, the colour and the grain all untouched. 1. The row of metal cases against the wall at the left has latches, bands and corner fittings like luggage: make each one a plain low capsule of dull grey metal with rounded ends, completely smooth, with no latches, no bands, no handles, no caps and no seams. Same number, same places, same size. 2. The grey panel low in the wall at the right has four screws in its corners: remove the screws, so that it is one plain matte grey panel set flush in the wall, blank. 3. The being just behind the slab, the second from the left, has its two front legs raised near the slab: lay the tips of its two front legs flat on the surface of the slab, resting on it, as one who writes by touch. Its other four legs stay on the deck. Add nothing else; do not add any being. No lettering of any kind. 16:9 landscape.

### chapters/s10e01c06.jpg — filed 17 November 2026
- **Kind:** generated with three references (`characters/alala.jpg`, `characters/iklix-varn.jpg`, `chapters/s04e00c02.jpg`), take 2 of 2, then one edit (two takes, take 2 used; take 1 kept the knitted jumpers and stood the residents in a line).
- **Edit prompt** (sent with take 2):
  > Edit the first image, a photograph, and keep it exactly as it is in every respect except one change. Keep the raven in flight, the young officer in the foreground with the leaf, the pale rail, the dock ring's ribs, the deck, the rounded hulls in their clamps, the small dock workers, the light, the framing, the colour and the grain all untouched. The change is to the group of seven people standing in a row beyond the rail, looking up. Replace them with five residents in the same place and at the same size, standing unevenly, not in a row: two close together at the left, one alone in the middle, and two further right, one of them a white-haired older woman. All five have stopped and are looking up at the raven; only one shades her eyes with a hand, and nobody points. They wear the plain everyday clothes of a far future century: hip-length band-collared overshirts and wrap tunics of soft matte woven cloth in ochre, rust, moss-green and slate blue, closed without visible buttons. No knitted jumpers, no sweaters, no cardigans, no crew necks, no T-shirts, no jeans. None of them looks at the camera. Add nothing else. No lettering of any kind. 16:9 landscape.

### chapters/s10e01c07.jpg — filed 17 November 2026
- **Kind:** generated with two references (`characters/zoe-smith.jpg`, `chapters/s09e01c05.jpg`), take 2 of 2, as generated.

## Season 10 fix pass, 17 November 2026 (Opus, desktop)

At Dermot's *"Yes, both"* (`images.md` § 72, fix-pass note). Every edit is `scripts/image-edit.js` (gemini-3.1-flash-image, 2K, two takes), sent with the filed frame or a crop of it first. Laying back, by hand (OpenCV, `C:\work\s10fix\`, not in the repo): a crop result was scaled into its box with a feathered edge, then the whole was registered to the filed frame by an affine ECC fit and only the regions whose blurred L\*a\*b\* difference passed a threshold were taken, faces protected. For the portraits the edit was the base and the filed body was laid back where the edit's non-blue silhouette (closed and dilated) and a GrabCut of the filed frame agreed, dark leftovers of the old room dropped. After the finish (`photo-finish.py`, strength 1), the filed pixels were laid back once more wherever nothing had changed (for the portraits: over the body).

### chapters/s10e01c01.jpg — re-filed 17 November 2026
- **Boots, on a crop** (200,533–560,893, 2×, 1:1, take 1 of 2; take 2 zoomed out and would not register). Laid back by threshold (10).
  > Edit this close crop of a photograph and keep it a photograph: keep the framing, the floor, the light, the grain, the coat, the hands and everything else exactly as it is. Change only the lower legs and footwear of the person in grey-brown service dress walking at the left. At present the trousers are tucked into tall calf-high boots that look like rubber wellingtons. Instead: the trousers are plain straight service trousers of the same grey-brown cloth, falling loose and straight to just above the ankle, untucked, the hem lying over the top of the boot. The boots are plain service boots of eight centuries from now: low, rising only to just above the ankle and hidden under the trouser hem, soft matte in a dark grey-brown a shade darker than the trousers, one seamless moulded piece from the toe to the ankle, a rounded toe, no laces, no eyelets, no elastic side panels, no pull tabs, no zips, no buckles, no visible stitching and no welt, on a thick flexible deeply ridged sole of the same colour. Matte, not glossy, not rubbery. Same feet, same stride, same stance, same size, same position on the floor, same shadows. Negative: wellington boots, rain boots, rubber boots, calf-high boots, knee-high boots, trousers tucked into boots, Chelsea boots, elastic gussets, lace-up boots, trainers, combat boots, shiny leather, any text or logos.
- **Log hinge, on a crop** (500,300–740,540, 3×, 1:1, take 2 of 2; take 1 drew a solid dark spine like a hardback folder).
  > Edit this close crop of a photograph and keep it a photograph: keep the framing, the hands, the sleeves, the wall of hanging grey leaves behind, the counter, the light and the grain exactly as they are. Change only the record the man in green is handing across. At present its leaves are bound along the left edge by a coil of small wire rings, like a present-day spiral-bound notebook. Instead it is a record of eight centuries from now: the same closed stack of about twenty thin rigid matte pale grey leaves, the same size, held the same way in the same hands, hinged along its left edge on one single slim straight plain dark rod that runs the full length of that edge, smooth and unbroken, with each leaf's edge wrapped closely round the rod; no wire, no coil, no rings, no loops, no spiral, no holes, no clips, no cover. The leaves are blank, with no writing or lines. Negative: spiral binding, wire-o binding, comb binding, ring binder, notebook, notepad, sketchbook, book cover, paper, any text or lines.

### chapters/s10e01c07.jpg — re-filed 17 November 2026
- **Stylus, on a crop** (560,440–800,680, 3×, 1:1, take 1 of 2; take 2 the same with a thicker rod). Laid back with the crop forced and a threshold (8) elsewhere, so no trace of the old pen stays.
  > Edit this close crop of a photograph and keep it a photograph: keep the framing, the woman's sleeves and cuff, her left hand flat on the leaf, the leaf, the desk, the light and the grain exactly as they are. Change only the stylus in her right hand and the way that hand holds it. At present it is a slim dark pen with a pointed nib, held like a ballpoint pen. Instead the stylus is a plain short straight rod of matte dark grey, a little thicker than a pen, the same thickness from end to end, both ends smoothly rounded and blunt, with no clip, no nib, no point, no cap, no button, no band and no seam. She holds it loosely and lower down than a pen, the rod resting across her middle finger with her thumb and forefinger lightly along its side, angled low over the leaf, and its rounded end touches the leaf. Same right hand, same skin, same size, same place. Negative: ballpoint pen, fountain pen, pen clip, nib, pencil, sharp point, a digital stylus with a button, any writing or marks on the leaf, any text or logos.
- **Collar tab, on a crop** (760,320–940,500, 4×, 1:1, take 2 of 2; take 1 drew the tab larger). Her face protected.
  > Edit this close crop of a photograph and keep it a photograph: keep the face, the hair, the collar, the jacket, the cloth, the light and the grain exactly as they are. Change only the two small marks on the collar (a small orange square and a small outlined triangle). Remove both, so the collar's grey-brown cloth continues where they were, and in their place seat one single small rank tab: a small hard-edged plain-finished rectangle of muted slate blue, a little longer than it is tall and about the size of the old square and triangle together, sitting a little proud of the collar, carrying exactly four short solid bars side by side across it in a darker slate, evenly spaced, parallel, upright. Nothing else on the collar. Negative: triangle, square, outline shapes, orange, copper, gold, a star, a pin badge, a coloured flag, letters, numerals, text, a name tag.

### characters/kattik.jpg, characters/tsikk.jpg — re-filed 17 November 2026; tikket.jpg, tekka.jpg — not filed
- **First edit, not used** (each sent with `chapters/s10e01c02.jpg` second as the place): every take copied C02's columns and viewpoint and moved or resized the body. Kattik's prompt, the others differing only in the object the body touches:
  > Edit the first image, a photograph, and keep it a photograph. Keep the small six-legged being exactly as it is: its body, carapace, head, every leg, its pose, its position, its size, its colour and its surface, and keep the framing and the camera position. Keep the thin flat slab of dark slate under its forelegs exactly as it is. Keep the second, smaller being in the background in the same place, the same size and the same pose; the bracket it stands on becomes a plain block of the same dark blue-grey metal with flush round fastenings. Change only the room, to the place shown in the second image: the understructure beneath the dock ring of a rotating space habitat eight centuries from now, a long low working space whose deck and low ceiling are large plain plates of dark blue-grey metal with flush round fastenings set level with the metal, with plain square columns of the same dark blue-grey metal standing on broad flat foot plates, and curved walls of the same plate running away and curving gently upward into the distance, old and dull but clean and kept, in cool even working light from no visible source. The deck under the being becomes the same clean blue-grey plate with fine scratches. Remove every lattice girder, diagonal brace, truss, pipe, conduit, cable, catwalk, railing, raised bolt head, nut, rivet, rust stain, patch of grime, dust, grit and debris, and every lamp or light fitting. Take nothing from the second image but its room: not its beings, not its capsules, not its viewpoint. Negative: lattice girders, trusses, riveted steel, bolted flanges, hexagonal bolt heads, nuts, pipework, conduit, cable trays, catwalks, grating, chains, caged lamps, ceiling lights, strip lights, rust, grime, dust, puddles, debris, hazard stripes, any text, lettering, numerals or logos, an insect, a face. Do not change the being at all.
- **Second edit, no reference** (take 1 of 2 used for each; the takes 2 kept more lattice or pipe-like machinery). Kattik's and Tsikk's were filed with the body laid back; Tikket's and Tekka's rooms passed but their bodies could not be laid back cleanly (§ 72). Old frames: `negative-examples/kattik-2026-11-17.jpg`, `tsikk-2026-11-17.jpg`.
  > Edit this photograph and keep it a photograph. Keep the small six-legged being exactly as it is and exactly where it is: its body, carapace, head, every leg, its pose, its size and its position in the frame, its colour and its surface. Keep the framing, the camera position, the lens and the perspective exactly; do not move, zoom or re-frame anything. Change only the materials and fittings of the room around it, keeping the room's layout. The place is the understructure beneath the dock ring of a rotating space habitat eight centuries from now, clean and kept: every surface becomes large plain plates of dark blue-grey metal, old and dull but clean, with fine scratches and flush round fastenings set level with the metal; every structural member becomes a plain square-section column or beam of the same dark blue-grey metal with smooth faces and broad flat foot plates; the far walls curve gently, as the inside of a turning ring does. Cool even working light from no visible source, normal exposure. Keep the thin flat slab of dark slate under its forelegs exactly where it is. Keep the second, smaller being in the background exactly where it is, the same size and pose; the machine it stands on becomes a plain low block of the same dark blue-grey metal. Remove every lattice girder, diagonal brace, truss, pipe, conduit, cable, catwalk, railing, raised bolt head, nut, rivet, patch of rust, grime, dust, grit and debris, and every lamp or light fitting. Negative: lattice girders, trusses, riveted steel, bolted flanges, hexagonal bolt heads, nuts, pipework, conduit, cable trays, catwalks, grating, chains, caged lamps, ceiling lights, strip lights, yellow lights, rust, grime, dust, puddles, debris, hazard stripes, any text, lettering, numerals or logos, an insect, a face. Do not change the being at all.
  > Edit this photograph and keep it a photograph. Keep the small six-legged being exactly as it is and exactly where it is: its body, carapace, head, every leg, its pose, its size and its position in the frame, its colour and its surface. Keep the framing, the camera position, the lens and the perspective exactly; do not move, zoom or re-frame anything. Change only the materials and fittings of the room around it, keeping the room's layout. The place is the understructure beneath the dock ring of a rotating space habitat eight centuries from now, clean and kept: every surface becomes large plain plates of dark blue-grey metal, old and dull but clean, with fine scratches and flush round fastenings set level with the metal; every structural member becomes a plain square-section column or beam of the same dark blue-grey metal with smooth faces and broad flat foot plates; the far walls curve gently, as the inside of a turning ring does. Cool even working light from no visible source, normal exposure. It stands alone in the middle of a wide bare expanse of clean deck plate, with nothing near it. Overhead and beyond, the ring curves upward; far off along that curve the room's own light is a little brighter, from no visible fitting. Remove every lattice girder, diagonal brace, truss, pipe, conduit, cable, catwalk, railing, raised bolt head, nut, rivet, patch of rust, grime, dust, grit and debris, and every lamp or light fitting. Negative: lattice girders, trusses, riveted steel, bolted flanges, hexagonal bolt heads, nuts, pipework, conduit, cable trays, catwalks, grating, chains, caged lamps, ceiling lights, strip lights, yellow lights, rust, grime, dust, puddles, debris, hazard stripes, any text, lettering, numerals or logos, an insect, a face. Do not change the being at all.
  > Edit this photograph and keep it a photograph. Keep the small six-legged being exactly as it is and exactly where it is: its body, carapace, head, every leg, its pose, its size and its position in the frame, its colour and its surface. Keep the framing, the camera position, the lens and the perspective exactly; do not move, zoom or re-frame anything. Change only the materials and fittings of the room around it, keeping the room's layout. The place is the understructure beneath the dock ring of a rotating space habitat eight centuries from now, clean and kept: every surface becomes large plain plates of dark blue-grey metal, old and dull but clean, with fine scratches and flush round fastenings set level with the metal; every structural member becomes a plain square-section column or beam of the same dark blue-grey metal with smooth faces and broad flat foot plates; the far walls curve gently, as the inside of a turning ring does. Cool even working light from no visible source, normal exposure. The heavy bracket it is pressed against stays exactly where it is, the same size and the same shape where its legs touch it, but becomes a plain block of the same dark blue-grey metal on a flat foot plate with flush round fastenings. Nothing else on the deck. Remove every lattice girder, diagonal brace, truss, pipe, conduit, cable, catwalk, railing, raised bolt head, nut, rivet, patch of rust, grime, dust, grit and debris, and every lamp or light fitting. Negative: lattice girders, trusses, riveted steel, bolted flanges, hexagonal bolt heads, nuts, pipework, conduit, cable trays, catwalks, grating, chains, caged lamps, ceiling lights, strip lights, yellow lights, rust, grime, dust, puddles, debris, hazard stripes, any text, lettering, numerals or logos, an insect, a face. Do not change the being at all.
  > Edit this photograph and keep it a photograph. Keep the small six-legged being exactly as it is and exactly where it is: its body, carapace, head, every leg, its pose, its size and its position in the frame, its colour and its surface. Keep the framing, the camera position, the lens and the perspective exactly; do not move, zoom or re-frame anything. Change only the materials and fittings of the room around it, keeping the room's layout. The place is the understructure beneath the dock ring of a rotating space habitat eight centuries from now, clean and kept: every surface becomes large plain plates of dark blue-grey metal, old and dull but clean, with fine scratches and flush round fastenings set level with the metal; every structural member becomes a plain square-section column or beam of the same dark blue-grey metal with smooth faces and broad flat foot plates; the far walls curve gently, as the inside of a turning ring does. Cool even working light from no visible source, normal exposure. The horizontal member it walks along stays exactly where it is, at the same height and width under its feet, but becomes a plain square-section beam of the same metal; the two brackets at either side become plain blocks of the same metal with flush round fastenings. The space beyond the member, behind the being, becomes the same plain blue-grey plated space running away into the distance, with no pipes or cables. Remove every lattice girder, diagonal brace, truss, pipe, conduit, cable, catwalk, railing, raised bolt head, nut, rivet, patch of rust, grime, dust, grit and debris, and every lamp or light fitting. Negative: lattice girders, trusses, riveted steel, bolted flanges, hexagonal bolt heads, nuts, pipework, conduit, cable trays, catwalks, grating, chains, caged lamps, ceiling lights, strip lights, yellow lights, rust, grime, dust, puddles, debris, hazard stripes, any text, lettering, numerals or logos, an insect, a face. Do not change the being at all.

### chapters/s10e01c05.jpg — not re-filed
- **Two crops of the filed frame** (560,420–1280,825 and 220,380–1180,920, enlarged to 1600): still figurines, and soft.
- **Reframe edit** (sent with the filed frame; two takes, neither used: both read as a macro photograph of a beetle on a floor, rung 1, and take 1 lifted the writer's forelegs off the slab):
  > Use the attached photograph as the scene, and take the same scene again as a real photograph from a new camera position: the camera rests on the deck plating itself, very low and much closer, just behind and to one side of the slab, so that the picture shows only parts of the four small beings and never their whole outlines. Keep exactly the same beings, the same people's body, unchanged in design: each a low domed segmented carapace of dull slate with a bronze cast on six jointed legs of equal kind, the head a smooth rounded featureless dome with no face, no eyes, no mouth, no antennae, no mandibles, no wings. Keep the same room: the dark blue-grey deck plates with flush round fastenings, the sand-coloured composite walls with honest seams, the closed flush hatch, the row of smooth grey tool capsules against the wall. In the new frame: in the near foreground at the left, very close and softly out of focus, the curved edge of one being's carapace and two of its jointed legs, filling the lower left corner; in the middle of the frame, sharp, one being seen from the side with its two forelegs laid flat on the near edge of the thin slate slab, which lies on the plating in front of the camera and runs out of the frame at the bottom; beyond it, cut by the right edge of the frame, the front legs of a third being turned toward the slab; behind, small and soft, the foot of the tall closed hatch, plainly a door built for people many times the beings' height, so the beings read as forearm-sized. Light: one cool even working light from no visible source; no patch of sunlight, no window, no warm glow. The chitin is dry and matte with fine scratches, chips at the segment edges and fine dust in the joints, unequal in girth from leg to leg, never smooth or glossy. Deep focus behind the middle being, high-ISO grain heavier in the shadows, natural colour, normal exposure, a real camera resting on the deck. Negative: tabletop model, diorama, miniature, tilt-shift, toy, figurine, clay, plasticine, 3D render, CGI, plastic sheen, shallow depth of field across the whole scene, a view from above, sunlight on the wall, a window; an Earth beetle with antennae, a tick, a spider, a crab, a face, eyes, a mouth, wings; more than four beings; writing or marks on the slab; any text, lettering, numerals or logos.

## `s04e00c01.jpg` brought into line with Season 9, 17 November 2026 (Opus, desktop)

At Dermot's *"Yes, both"* (`images.md` § 65, note of the same date; § 71's open option (a)). Every edit is `scripts/image-edit.js` (gemini-3.1-flash-image, 2K, 16:9), sent with the filed frame alone. Laying back, by hand (OpenCV, `C:\work\s04align\`, not in the repo), as in the Season 9 fix pass: the take registered to the filed frame by an affine ECC fit (shift under one pixel), then the take as the base with both people laid back from the filed frame (Shepherd cut by GrabCut on the filed frame; Smith cut by GrabCut on the take's own silhouette, seeded where the take was warmer than the grey-green wall). After the finish (`photo-finish.py`, strength 1) the filed people were laid back once more. Written 1600×893, JPEG quality 85.

### chapters/s04e00c01.jpg — re-filed 17 November 2026
- **Round 1, not used** (two takes): take 1 joined the housings with a rail and hid one behind Smith's head, five lights in view; take 2 drew seven or eight. Prompt:
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the framing, the camera position, both people, every face, hair, hand, pose, body and garment, the leaf in her hand, the grain and the light, and change only what follows. Make the watch compartment a cool pale grey-green composite, matte like honed stone with a very faint mineral grain: its walls, the hood around the round port, the ceiling, the coving and the floor, in soft cool even light from no visible source, a little lower in key. The desk slab that grows from the wall becomes the same cool grey-green, a shade paler. Nothing warm-beige or taupe remains on the walls. Keep the round port of thick glass with black space and a few faint stars exactly. In place of the one long dark housing with six points on the wall between the two women, draw a rack of six separate sealed housings of matte grey in one low row along the same wall at the same height, each a plain rounded block about the size of a closed hand-case standing on its side, with narrow even gaps between them, and on each block one small round steady point of soft pale light, all the same colour, and nothing else on them: no seams other than the edge of each block, no vents, no handles, no screens, no dials, no labels, no numerals. Exactly six. Do not add anything else. Negative: a seventh housing, a single long panel, shelving, metal rack, cables, ceiling lights, light panels, any text or numerals.
- **Round 2, not used** (two takes): round 1's prompt with *no rail, bar or strip joining them* and *all six fully visible, none hidden behind either woman: four in the gap between the two women's heads and two to the right of the grey-haired woman's head*; both takes still hid one light, five in view.
- **Round 3** (take 2 of 2 used; take 1 drew seven, one wholly behind Smith's head). Take 2 drew seven, all six of the right-hand lights in view and the seventh housing almost wholly behind Shepherd's neck. Prompt:
  > Edit this photograph and keep it a photograph. Keep everything exactly as it is, the framing, the camera position, both people, every face, hair, hand, pose, body and garment, the leaf in her hand, the grain and the light, and change only what follows. Make the watch compartment a cool pale grey-green composite, matte like honed stone with a very faint mineral grain: its walls, the hood around the round port, the ceiling, the coving and the floor, in soft cool even light from no visible source, a little lower in key. The desk slab that grows from the wall becomes the same cool grey-green, a shade paler. Nothing warm-beige or taupe remains on the walls. Keep the round port of thick glass with black space and a few faint stars exactly. In place of the one long dark housing with six points on the wall between the two women, draw a rack of six separate sealed housings of matte grey in one low row along the same wall at the same height, each a plain rounded block a little smaller than a closed hand-case, with narrow even gaps of plain wall between them and no rail, bar or strip joining them, and on each block one small round steady point of soft pale light, all the same colour, and nothing else on them: no seams other than the edge of each block, no vents, no handles, no screens, no dials, no labels, no numerals. Exactly six, and all six lights in plain view: five housings in the clear wall between the back of the red-haired woman's head and the face of the grey-haired woman, and the sixth just to the right of the grey-haired woman's head, ending where the old housing ended. No housing is behind either woman's head or body. Do not add anything else. Negative: a seventh housing, a single long panel, shelving, metal rack, cables, ceiling lights, light panels, any text or numerals.
- **Crop edit, not used** (box 100,180–740,540 of the composite, enlarged 2×, two takes): both left the seventh housing in place. Prompt:
  > Edit this close crop of a photograph and keep it a photograph: keep the framing, the light, the grain, the woman, her face, hair and clothes, the wall and every other housing exactly as they are. The row of grey housings on the wall begins with one partly hidden behind the woman's neck, at the far left of the row; remove only that leftmost housing, the one whose left edge shows just left of her shoulder, so that the plain grey-green wall, with its faint grain and soft shadow-free surface, continues where it was. The next housing, the one with a light just right of her neck, and every housing after it, their lights and their shadows stay exactly as they are. Add nothing.
- **By hand:** the seventh housing's visible edge healed with a Poisson clone (`cv2.seamlessClone`) of the wall 70 px to its left on the same rows, Shepherd's pixels held; the old taupe rim inside four pixels of Shepherd's outline moved to the local wall's a\*b\* and lightness where it was warmer and lighter than the wall (skin and hair, warmer still, excluded); the wall hue checked against RGB 133/146/138 (the take's a\*b\* were already within a unit, so it barely moved).
- **Measured** (`photo-finish.py --measure`): filed frame sat 0.25, mid 121, grain 7.1, flat 66%; re-filed sat 0.17, mid 130, grain 7.3, flat 47%; `s09e01c03.jpg` sat 0.11, mid 131.

## 2026-11-17 — Season 11 chapter illustrations, Episode 2, the survey's three (Fable, desktop)

The record is in `story-bible/images.md` § 73. All three frames are generated; none is on a plate of his. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per prompt. Filed by `import-image.ps1 -MaxEdge 1600` at finish strength 1. Sixteen images: six first-pass takes, two second-round takes (C03), eight edit takes. Nothing was refused. The generation prompts of record are in § 73; the edit prompts and the first-round prompt that was not used are here.

### chapters/s11e02c01.jpg — filed 17 November 2026
- **Kind:** generated with three references (the take `chapters/s11e02c03.jpg` was filed from, `characters/aravena.jpg`, `characters/nakagawa.jpg`), take 2 of 2, then one edit (two takes, take 1 used).
- **Edit prompt** (sent with take 2):
  > Edit this photograph and change only one thing: the pale flat sheet that the kneeling person holds becomes a handset, one thin rigid matte dark grey slab the size of a hand, unlit, with nothing on it, held in one hand flat against the side of the grey cylinder near its top; the kneeling person's other hand rests on the knee, and the person's eyes are down on the slab. Keep everything else exactly as it is: both faces, the grey-green coveralls, the standing person with the small lamp held low, the plain grey cylinder standing at the end of the bootprints, the third person seen from behind in the distance, the rock and its narrow crack, the fungus, the silt, the framing, the grain and the colour. No light, glow or writing on the slab. No text, no lettering, no new objects.
- **Second edit, not used** (sent with the edited frame; both takes drew wellingtons):
  > Edit this photograph and change only one thing: the standing person's boots. They become plain seamless dark grey-brown moulded boots with smooth uppers, with no laces, no eyelets, no stitching and no separate toe cap. Keep everything else exactly as it is: both faces, the coveralls, the lamp, the grey cylinder, the dark slab held against it, the kneeling person, the bootprints, the rock, the fungus, the silt, the framing, the grain and the colour. No text, no lettering, no new objects.

### chapters/s11e02c02.jpg — filed 17 November 2026
- **Kind:** generated with one reference (`characters/nakagawa.jpg`), take 1 of 2, then one edit (two takes), of which only the lamp was kept: the patch round the hand in edit take 1 was laid onto the first take under a feathered mask by hand (PIL), because both edit takes gave the two far shapes ears and faces.
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only two things. First: the grey tube in the person's right hand becomes a plain small hand lamp, a smooth matte grey block the size of a hand with one flat softly lit face turned toward the ground. Second: the two small pale rounded shapes far off at the bottom of the slope become two very small, soft, upright, rounded grey-furred outlines standing still among the boulders, barely made out in the dim light, with no faces showing. Keep everything else exactly as it is: the person seen from behind, the grey-green coverall, the pale rock, the boulders, the long shadow down the slope, the dark beyond with its faint amber and blue-green glow, the framing, the grain and the colour. No text, no lettering, no new objects.

### chapters/s11e02c03.jpg — filed 17 November 2026
- **Kind:** generated with four references (`characters/aravena.jpg`, `characters/went-round.jpg`, `characters/keeps-a-hand-on-it.jpg`, his *Lion Portrait at Dusk* for fur and grain), second round, take 1 of 2, then one edit (two takes, take 1 used; take 2 left the stone in the middle of the floor).
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only two things. First: the large grey-furred being standing in the middle distance is lit only from behind and from the side by the glowing fungus, not from the front: its whole front and its face fall into soft deep shadow so that no features of the face can be made out at all, no eyes, no nose and no mouth, only the dark rounded shape of the head and body with the fur glowing pale along its edges. It keeps exactly its size, its place, its upright stance and its rounded earless outline. Second: the single stone on the silt is moved so that it lies just in front of the being's feet, a hand's width from them, and the short line of bootprints now runs from the person toward that stone and stops beside it; the patch of silt where the stone used to lie is smooth. Keep everything else exactly as it is: the person seen from behind at the left in the grey-green coverall with the small lamp held low, the pale rock walls and the narrow crack at the left, the amber and blue-green fungus, the boulders, the darkness beyond, the framing, the grain and the colour. One stone only. No text, no lettering, no new objects.
- **First-round prompt, not used** (references `characters/aravena.jpg`, `characters/went-round.jpg`, `characters/teddy.jpg` and the lion; both takes drew the adult as an animated-film creature twice Aravena's height):
  > Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape, a wide view taken from the side at standing height across an open floor of pale silt in a cavern, nothing posed: at the left a small slight person stands very still, one step back from a single stone that lies on the silt, holding a small lamp low at the hip with its light on the floor; at the right, an arm's length beyond the stone, a large grey-furred being stands upright and still, facing the person; neither moves. The place is deep underground on Fliade, a cold rocky world whose life is in its caverns, in the year 2832 UCSD, eight centuries from now. This is the line: the place just beyond a narrow crack in the rock where the survey party's own bootprints once stopped. Behind the person, at the left edge of the frame, the rock wall is split from floor to roof by one narrow dark vertical crack, barely the width of a slight person turned sideways: the squeeze, the way they came. A short line of bootprints runs from the crack across the silt and ends beside the stone. The person is the smallest of the survey party: slight, small-framed, of indeterminate age and androgynous appearance, in profile, face toward the being, mouth closed, calm and very attentive, wearing a plain well-kept field coverall of muted grey-green matte cloth with a high soft collar and one small plain tab at the collar, plain seamless dark moulded boots, bare-headed, nothing over the face, hands empty but for the lamp. The lamp is a plain small hand lamp, a smooth matte grey block with one flat softly lit face, pointed at the floor, so the light is low and soft and throws long soft shadows across the silt. The first reference image shows this person: keep exactly the face, hair, build and coverall, and take nothing else from it, not the passage and not the cylinder on the back; there is nothing on the person's back. The stone on the silt between them is a plain rough grey stone the size of two hands, newly set down, lying exactly at the end of the line of bootprints, a hand's width from the being's feet. The being is a large alien being, round and gentle-looking, to a human eye a bit like a giant panda and photographed the way a wildlife photographer photographs a real giant panda in the wild, with the same weight, the same fur and the same light, though it is grey all over and plainly not one, and unmistakably not an Earth animal: a big round head on a round body with almost no neck, a short flat face with a very short muzzle, no external ears, a small closed mouth, dark round eyes set wide, dense soft grey fur in overlapping ridges that is real fur like a wild animal's thick winter coat, uneven, a little matted and damp, pale silt caught in it low down, individual guard hairs catching the light along its edges; stocky and heavy-bottomed, upright on two short hind legs, thick limbs of equal length, a broad hand at the end of each forelimb; about the size of a person in thick cold-weather clothing. Not a sloth: no long face, no hanging arms, no claws. This one is an old adult, broad, taller and far heavier than the person, the fur paler at the crown of the head. It stands in the open on the silt with its forelimbs at its sides, seen from the side, its face in three-quarter profile toward the person and half in shadow, lit low from the left by the lamp and from behind by the fungus so that its fur glows at the edges. It is entirely calm and unthreatening: someone standing at their own door. The second and third reference images show this same people in earlier photographs, for the body only: take the round head on the round body, the flat face with no ears and no snout, the real grey fur and the upright stance from them and nothing of their setting or their act. The last reference image is a photograph of a real animal, for light, grain and the texture of real fur only, never its animal. Beyond the being the silt ends in a scatter of large loose boulders and the cavern floor shelves away downward into darkness. The rock is pale mineral stone, damp, with a fine crust of frost in places; here and there on it grow shelves of real bioluminescent fungus that give a soft steady glow, amber on one side and blue-green on the other. The floor is pale mineral silt. Nobody else in frame. Quiet, held, a little solemn and not frightening: two people who have each just seen the other. Palette: pale silt and pale rock, grey fur, grey-green cloth, amber and blue-green in the distance, one low pool of lamp light. Photographed, not rendered: a real camera in a real cave, deep focus, high-ISO grain heavier in the shadows, slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: looking at the camera, posed portrait; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; screens, monitors, holograms, projected light, glowing displays, tablets, phones; dials, gauges, knobs, switches, exposed cables, antennae, tripods; helmets, visors, goggles, head torches, climbing ropes, harnesses, carabiners, hard hats, backpacks with buckles, present-day outdoor jackets, jeans, trainers, wellingtons, laced hiking boots, wristwatches, spectacles, earbuds; electric light fittings in the rock, cables on the floor; weapons. bear, bear cub, bear on all fours, black-and-white colouring, gorilla, ape, chimpanzee, monkey, sloth, yeti, sasquatch, teddy bear toy, cartoon, mascot, costume, fur suit, external ears, wet nose leather, claws bared, fangs, menace, a threat posture, clothing or tools on the being, a small young one, a cub. A handshake, touching, the person kneeling, the being reaching out, a stone held up, stacked stones, a cairn, more than one stone on the silt, a second being, a second person, the cylinder instrument. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, a tabletop model, a diorama, shallow depth of field, a view from above. Landscape orientation.

## 2026-11-17 — Season 11 chapter illustrations, Episode 1, the five below the line (Fable, desktop)

The record is in `story-bible/images.md` § 74. All five frames are generated; none is on a plate of his. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per prompt. Filed by `import-image.ps1 -MaxEdge 1600` at finish strength 1. Twenty-four images: ten first-pass takes, four second-round takes (C02, C03), ten edit takes. Nothing was refused and nothing was fixed by hand. The generation prompts of record are in § 74; the edit prompts and the two first-round prompts that were not used are here.

### chapters/s11e01c01.jpg — filed 17 November 2026
- **Kind:** generated with four references (`characters/nakagawa.jpg`, `characters/went-round.jpg`, `characters/teddy.jpg`, his *Lion Portrait at Dusk* for fur and grain), take 1 of 2, then one edit (two takes, take 1 used).
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only three things. First: remove the dark rope or cable that hangs down the rock wall in the upper middle of the picture, leaving plain pale rock. Second: the kneeling person wears no head torch; remove the light from the kneeling person's head, and instead a plain small hand lamp, a smooth matte grey block with one softly lit face, rests on the silt beside the grey cylinder, lighting it from below. Third: the person at the left who has both hands raised against the rock wall now has only one hand resting on the rock at shoulder height and holds a small plain unlit matte grey slab in the other hand at the side. Keep everything else exactly as it is: the three people in grey-green coveralls with their backs to us, the plain grey cylinder standing on the floor, the large grey-furred being seen from behind at the right, the fungus, the rock, the silt, the framing, the grain and the colour. No text, no lettering, no new objects, no faces turned to the camera.

### chapters/s11e01c02.jpg — filed 17 November 2026
- **Kind:** generated with two references (`characters/went-round.jpg`, the lion), second round, take 1 of 2, as generated.
- **Edit prompt, not used** (sent with second-round take 2 and `characters/nakagawa.jpg` for the cylinder; both takes drew a post taller than the carrier):
  > Edit this photograph and change only one thing: the grey cylinder that the furred being carries against its chest. It becomes slimmer and longer: one smooth plain matte grey cylinder about as thick as a person's upper arm and about the length of an arm, closed and gently rounded at the top, held upright against the being's chest with both forelimbs wrapped round it, its top showing above the being's shoulder. It is not a pipe, not a bucket and not hollow, and it has no markings, no bands and no light. Keep everything else exactly as it is: the being seen from behind, its fur, its stance, the blue-green fungus, the pale rock passage, the dark crack ahead, the silt floor and the being's shadow, the framing, the grain and the colour. No text, no lettering, no new objects.
- **First-round prompt, not used** (references `characters/teddy.jpg`, `characters/went-round.jpg` and the lion; both takes were plush figures in shallow focus):
  > Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape, taken at standing height from well back in a long rock passage, nothing posed: a round grey-furred being walks slowly away from the camera down the passage on its two hind legs, seen from behind and a little to one side, carrying a plain grey cylinder upright against its chest with both forelimbs wrapped round it, the way a sleeping child is carried. The place is deep underground on Fliade, a cold rocky world whose life is in its caverns, in the year 2832 UCSD, eight centuries from now. This is the long passage that runs down from the upper junction toward the squeeze. The being is in the middle distance, small in the frame, about a quarter of the frame's height: a large alien being, round and gentle-looking, to a human eye a bit like a giant panda and photographed the way a wildlife photographer photographs a real giant panda in the wild, with the same weight, the same fur and the same light, though it is grey all over and plainly not one, and unmistakably not an Earth animal: a big round head on a round body with almost no neck, a short flat face with a very short muzzle, no external ears, a small closed mouth, dark round eyes set wide, dense soft grey fur in overlapping ridges that is real fur like a wild animal's thick winter coat, uneven, a little matted and damp, pale silt caught in it low down, individual guard hairs catching the light along its edges; stocky and heavy-bottomed, upright on two short hind legs, thick limbs of equal length, a broad hand at the end of each forelimb; about the size of a person in thick cold-weather clothing. Not a sloth: no long face, no hanging arms, no claws. It is seen from behind and to the left, so that its back, the back of its round head and one shoulder show, and its face is turned away down the passage and does not show. Both forelimbs are folded across its front, holding the cylinder close and upright against its chest, and the top third of the cylinder shows above its far shoulder. It walks with great care, leaning back a little against the weight, mid-step. The cylinder is the survey's relay unit: a smooth unmarked matte grey cylinder about the length of an arm, with no markings and no light on it. The first reference image shows this cylinder standing on the ground, and one of this people; the second shows another of this people. Take the cylinder's plain look from the first, and from both, for the body only, the round head on the round body, the real grey fur and the upright stance, and nothing of their setting or their act. The last reference image is a photograph of a real animal, for light, grain and the texture of real fur only, never its animal. The passage is a natural rock passage a little higher than the being and three times as wide, running straight away from the camera and narrowing in the distance to a dark vertical crack. Its walls are pale mineral stone, damp, with shelves of real bioluminescent fungus that give a soft steady glow, blue-green along the left wall and a little amber far ahead, and no other light at all, so the being is lit from ahead and from the side and reads first as a rounded outline with the fur glowing at its edges. The floor is pale silt with a single line of the being's own broad round footprints behind it. Nobody else in frame. Tender, careful and quiet, never frightening. Palette: blue-green and pale rock, grey fur, one matte grey cylinder, a little amber far off. Photographed, not rendered: a real camera in a real cave, deep focus, high-ISO grain heavier in the shadows, slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: looking at the camera, posed portrait; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; screens, monitors, holograms, projected light, glowing displays, tablets, phones; dials, gauges, knobs, switches, exposed cables, antennae, tripods; helmets, visors, goggles, head torches, climbing ropes, harnesses, carabiners, hard hats, backpacks with buckles, present-day outdoor jackets, jeans, trainers, wellingtons, laced hiking boots, wristwatches, spectacles, earbuds; electric light fittings in the rock, cables on the floor; weapons. bear, bear cub, bear on all fours, black-and-white colouring, gorilla, ape, chimpanzee, monkey, sloth, yeti, sasquatch, teddy bear toy, cartoon, mascot, costume, fur suit, external ears, wet nose leather, claws bared, fangs, menace, a threat posture, clothing or tools on the being, a small young one, a cub. The being's face, the cylinder held like a club or a weapon, the cylinder dragged, the cylinder under one arm, a light or a glow or a lens on the cylinder, a strap, a handle; a torch beam, a lamp, a person, bootprints, a second being. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, a tabletop model, a diorama, shallow depth of field, a view from above. Landscape orientation.

### chapters/s11e01c03.jpg — filed 17 November 2026
- **Kind:** generated with three references (`characters/keeps-a-hand-on-it.jpg`, `characters/went-round.jpg`, the lion), second round, take 1 of 2, then one edit (two takes, take 1 used).
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only one thing: the pale-furred being that stands at the left of the middle, facing right. Its head is turned a little further away from the camera and its face falls into soft shadow, so that only the rounded earless outline of the head and the pale fur along its crown and back show clearly; no smile, no bright eye, no distinct nose or mouth can be made out. Its feet are broad and rounded with no claws. It keeps exactly its size, its place, its upright stance and its pale fur. Keep everything else exactly as it is: the darker being standing with its back to us, the three seated on boulders with their backs to us, the amber and blue-green fungus, the loose stones on the pale floor, the rock, the framing, the grain and the colour. Exactly five beings. No text, no lettering, no new objects.
- **First-round prompt, not used** (the same references and `characters/teddy.jpg`; both takes were small soft figures with lit faces in shallow focus):
  > Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape, a wide view taken at standing height from well back across the floor of a broad warm cavern chamber, the way a wildlife photographer at a distance would take it, nothing posed: far across the chamber five large round grey-furred beings are gathered in a loose ring on the open floor; two of them stand upright facing each other across the ring, and the other three sit on low boulders or on the silt, each turned toward the two who stand. The place is deep underground on Fliade, a cold rocky world whose life is in its caverns, in the year 2832 UCSD, eight centuries from now. This is the warm: the chamber below the roof where the people who call themselves the Told live, lit only by fungus. The first reference image shows this place: keep its wide floor of pale silt strewn with loose stones, its wet rock and its thick amber fungus glow with blue-green further off, and take nothing else from it; the small being in it is not in this picture. Each of the five is a large alien being, round and gentle-looking, to a human eye a bit like a giant panda and photographed the way a wildlife photographer photographs a real giant panda in the wild, with the same weight, the same fur and the same light, though it is grey all over and plainly not one, and unmistakably not an Earth animal: a big round head on a round body with almost no neck, a short flat face with a very short muzzle, no external ears, a small closed mouth, dark round eyes set wide, dense soft grey fur in overlapping ridges that is real fur like a wild animal's thick winter coat, uneven, a little matted and damp, pale silt caught in it low down, individual guard hairs catching the light along its edges; stocky and heavy-bottomed, upright on two short hind legs, thick limbs of equal length, a broad hand at the end of each forelimb; about the size of a person in thick cold-weather clothing. Not a sloth: no long face, no hanging arms, no claws. All five are adults of one size, each small in the frame, a fifth of the frame's height or less, lit from behind and to one side by the fungus so that each reads first as a rounded back-lit outline with the fur glowing at its edges and its face in shadow. They differ a little in shade of grey: of the two who stand, one is broad with the fur paler at the crown, and the other is leaner with darker fur. The two who stand are a few steps apart and quite still, forelimbs at their sides, each plainly attending to the other; the three who sit are still too, heads turned to them. Nobody gestures. It is a serious conversation among people who are not used to disagreeing. The second and third reference images show this same people in earlier photographs, for the body only: take the round head on the round body, the flat face with no ears and no snout, the real grey fur and the upright stance from them and nothing of their setting or their act. The last reference image is a photograph of a real animal, for light, grain and the texture of real fur only, never its animal. The chamber is broad and low, the amber glow thick and close on the near rock and the blue-green further off; the floor is pale silt with loose fist-sized stones lying about on it; the rock is wet and the air a little hazy with warmth. No light but the fungus. Exactly five beings and no more. Quiet, grave and warm, never frightening. Palette: thick amber, pale silt, grey fur, a little blue-green in the distance. Photographed, not rendered: a real camera in a real cave, deep focus, high-ISO grain heavier in the shadows, slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: looking at the camera, posed portrait; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; screens, monitors, holograms, projected light, glowing displays, tablets, phones; dials, gauges, knobs, switches, exposed cables, antennae, tripods; helmets, visors, goggles, head torches, climbing ropes, harnesses, carabiners, hard hats, backpacks with buckles, present-day outdoor jackets, jeans, trainers, wellingtons, laced hiking boots, wristwatches, spectacles, earbuds; electric light fittings in the rock, cables on the floor; weapons. bear, bear cub, bear on all fours, black-and-white colouring, gorilla, ape, chimpanzee, monkey, sloth, yeti, sasquatch, teddy bear toy, cartoon, mascot, costume, fur suit, external ears, wet nose leather, claws bared, fangs, menace, a threat posture, clothing or tools on the being, a small young one, a cub. A sixth being, a crowd, a fire, a campfire, torches, a lamp, a council table, thrones, staffs, spears, raised arms, shouting, fighting, a stone held up, a person, the cylinder instrument, bootprints. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, a tabletop model, a diorama, shallow depth of field, a view from above. Landscape orientation.

### chapters/s11e01c04.jpg — filed 17 November 2026
- **Kind:** generated with four references (`chapters/s11e02c03.jpg` as the place, `characters/went-round.jpg`, `characters/teddy.jpg`, the lion), take 2 of 2, then one edit (two takes, take 1 used; take 2 left the silt as bright as lamp light).
- **Edit prompt** (sent with take 2):
  > Edit this photograph and change only three things. First: there is no stone on the silt in front of the grey-furred being; remove it and leave smooth pale silt with the old bootprints. Second: there is no lamp anywhere and no pool of white light on the ground: the whole scene is lit only by the soft glow of the amber and blue-green fungus on the rock, dim and even, so the silt is dimmer and takes a faint amber tint. Third: the being is lit only from behind and from the side by the fungus, so its whole front and its face fall into soft deep shadow and no features of the face can be made out at all, no eyes, no nose and no mouth, only the dark rounded earless shape of the head and body with the fur glowing along its edges; its head is tilted a very little to one side, as if listening. It keeps exactly its size, its place and its upright stance. Keep everything else exactly as it is: the dark rock of the crack filling the left and right of the frame, the fungus, the boulders, the bootprints, the framing, the grain. No text, no lettering, no new objects, nobody else.

### chapters/s11e01c05.jpg — filed 17 November 2026
- **Kind:** generated with four references (`chapters/s11e02c03.jpg` as the place, `characters/aravena.jpg`, `characters/went-round.jpg`, the lion), take 1 of 2, then one edit (two takes, take 2 used; take 1 left the stone large).
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only two things. First: the stone under the kneeling person's hands is much smaller, a plain rough grey stone the size of two hands, held in both hands and just touching the silt. Second: beside the person on the silt there is only one lamp, a plain small smooth matte grey block with one softly lit face; remove the second box-like object next to it. Keep everything else exactly as it is: the kneeling person in the grey-green coverall with head bowed, the large grey-furred being seen from behind at the right, the pale rock wall with its narrow dark crack, the amber and blue-green fungus, the bootprints, the silt, the framing, the grain and the colour. One stone only. No text, no lettering, no new objects.

## 2026-11-17 — The Told: body options studied, none filed (Fable, desktop)

The study recorded in `species-design.md` (*The Told — Body: options put to Dermot, 17 Nov 2026*). Dermot’s *"As recommended"* of 17 November 2026 to a body design pass: the Told read as plush toys in the four filed portraits and in Season 11’s frames. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, 16:9, two takes per job. Nine jobs, 18 takes, none refused, **none filed**; no design, page or filed frame was changed. Seven jobs were edits of the filed `went-round.jpg` (the body only); `stone-first.jpg` and `teddy.jpg` were not edited, because the record calls both renders and an edit of a render stays a render. Two jobs were fresh frames with references, to see the body away from the filed frame’s film lighting. The positive text avoids *fur*, *teddy* and *plush*; the Earth animals are named only in the negative. The sheet is `told-body-options-2026-11-17.jpg` in the working folder (not in this repository).

- **A — the same body, a real coat and real proportions** (edit of `src/images/characters/went-round.jpg`; not filed). Read as: take 1 a sloth, take 2 a yeti or ape with human feet; the toy reading gone in both.

> Edit this photograph. Keep the cave, the light, the rocks, the camera position and the framing exactly as they are. Change only the body of the being, which stays in the same place, upright on two legs, one hand on the rock edge, turned away from the camera.
>
> The new body: the same round, earless, flat-faced kind, but with the proportions and coat of a real large wild animal. The head is small, about a quarter of the width of the body, set low between the shoulders. The eyes are small, dark, deep-set and far apart. The coat is grey, coarse and uneven: long and shaggy over the chest and shoulders, short over the forearms and shins, parted at the elbows and knees, damp and matted with pale silt near the feet. Shoulders, elbows and knees show under the coat. Palms and soles are bare dark creased skin. Two thick legs, taller than a person.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, joints and muscle visible under the coat, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey or yeti. No clothing, no text.

- **B — the ground-listener, round 1 (short dense coat)** (edit of `went-round.jpg`; not filed). Read as: both a plush toy, a mole from behind; *like wet velvet* was read as plush.

> Edit this photograph. Keep the cave, the light, the rocks, the camera position and the framing exactly as they are. Change only the body of the being, which stays in the same place, upright on two legs, one hand on the rock edge, turned away from the camera.
>
> The new body: a people that feels its way in the dark. A blunt face with very small eyes almost hidden in the coat, and a wide fan of long stiff pale whiskers round the muzzle and over the brow. No external ears. Very broad hands and feet with bare pale leathery pads; the hand is spread flat on the rock, feeling it. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms and short thick legs. The coat is grey, short and very dense, like wet velvet, darker where it is damp.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, joints and muscle visible under the coat, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey or yeti. No clothing, no text.

- **C — the mantle** (edit of `went-round.jpg`; not filed). Read as: both a troll or a stooped man in a hair cloak, human hands, feet and face.

> Edit this photograph. Keep the cave, the light, the rocks, the camera position and the framing exactly as they are. Change only the body of the being, which stays in the same place, upright on two legs, one hand on the rock edge, turned away from the camera.
>
> The new body: a heavy mantle of long coarse grey hair covers the chest, shoulders and back only, hanging to the hips. The forearms, hands, lower legs, feet and face are bare dark grey skin, thick, dry and deeply creased. The head is small, carried low and forward in front of the shoulders, with no neck and no external ears. The face is a flat plate of bare skin with two small eyes far apart and two slit nostrils. Large strong hands with four thick blunt digits. Two thick legs, taller than a person.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, joints and muscle visible under the coat, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey or yeti. No clothing, no text.

- **D — the standing boulder, round 1** (edit of `went-round.jpg`; not filed). Read as: both a film troll, a bearded human face under a fringe.

> Edit this photograph. Keep the cave, the light, the rocks, the camera position and the framing exactly as they are. Change only the body of the being, which stays in the same place, upright on two legs, one hand on the rock edge, turned away from the camera.
>
> The new body: there is no separate head. Head and trunk are one tall rounded dome, shaped like a standing boulder, widest at the base, covered in long coarse grey hair that hangs straight down in heavy uneven locks with pale silt in it. The face sits low on the front of the dome under a heavy brow fold: two small deep-set eyes far apart and two slit nostrils, little else showing. Two long thick arms come out through the coat at mid-height, ending in big bare dark hands. Two short thick legs with broad bare feet just show below the coat. Taller than a person.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, joints and muscle visible under the coat, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey or yeti. No clothing, no text.

- **B — round 2, on A’s coarse coat, three digits, feet as pads** (edit of `went-round.jpg`; not filed). Read as: the toy gone in both, gentle; both a large marmot or mole standing up.

> Edit this photograph. Keep the cave, the light, the rocks, the camera position and the framing exactly as they are. Change only the body of the being, which stays in the same place, upright on two legs, one hand on the rock edge, turned away from the camera.
>
> The new body: a large heavy people that feels its way in the dark, taller than a person. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms and short thick legs. The head is small and blunt, set low with no neck and no external ears, mostly turned away. Very small eyes almost hidden in the coat. A wide fan of long stiff pale whiskers round the muzzle and over the brow. The coat is grey, coarse and uneven: long and shaggy over the chest and shoulders, shorter on the arms and legs, damp and matted with pale silt near the feet. Each hand is broad with three thick blunt digits and a pale leathery pad; the hand is spread flat on the rock, feeling it. Each foot is a broad round pad with no separate toes.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, mole, seal, troll or human. No human face, no human hands, no human feet, no beard. No clothing, no text.

- **D — round 2, no nose, no mouth, no beard** (edit of `went-round.jpg`; not filed). Read as: take 1 a sloth’s face in a haystack, take 2 a faceless mop with a lip.

> Edit this photograph. Keep the cave, the light, the rocks, the camera position and the framing exactly as they are. Change only the body of the being, which stays in the same place, upright on two legs, one hand on the rock edge, turned away from the camera.
>
> The new body: there is no separate head. Head and trunk are one tall rounded dome, shaped like a standing boulder, widest at the base, taller than a person, covered all round in coarse grey hair of even length that hangs straight down, with pale silt in it. No parting and no beard. No nose and no mouth show. Low on the front of the dome, two very small dark eyes sit far apart in a narrow band of short pale hair, with a fan of long stiff pale whiskers around the band. Two long thick arms come out through the coat at mid-height; each hand is broad with three thick blunt digits and a pale leathery pad. Two short thick legs end in broad round pads with no separate toes, just showing below the coat.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, mole, seal, troll or human. No human face, no human hands, no human feet, no beard. No clothing, no text.

- **A study, not an option — B’s body with a flat face, ear drums and flank bristles** (edit of `went-round.jpg`; not filed). Read as: the drums came back as a monkey’s ears in both, the body an ape.

> Edit this photograph. Keep the cave, the light, the rocks, the camera position and the framing exactly as they are. Change only the body of the being, which stays in the same place, upright on two legs, one hand on the rock edge, turned away from the camera.
>
> The new body: a large heavy people of the dark, taller than a person. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders and short thick legs. The head is small and blunt, set low with no neck. The face is flat, with no muzzle: two very small dark eyes far apart, two slit nostrils, a short closed mouth line. In place of external ears, on each side of the head there is one bare pale oval drum of taut skin as large as a hand. The coat is grey, coarse and uneven: long and shaggy over the chest and shoulders, shorter elsewhere, damp and matted with pale silt near the feet. A row of long stiff pale bristles stands out along the outside of each forearm and down each flank, for feeling the rock. Each hand is broad with three thick blunt digits and a pale leathery pad. Each foot is a broad round pad with no separate toes. The hand is spread flat on the rock, feeling it.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, mole, marmot, otter, seal, troll or human. No muzzle, no snout, no nose leather, no whiskers on the face. No human face, no human hands, no human feet. No clothing, no text.

- **Photographic check 1 — the same merged body as a fresh frame at the line** (no frame edited; references `src/images/chapters/s11e02c03.jpg` (place) and `../dermot-cochran-photography/src/images/photos/lion-portrait-at-dusk.jpg` (hair); not filed). Read as: plainer photographs; an ape or yeti with a round ear in both.

> Documentary photograph, 16:9, available light only, deep focus, taken at standing eye height with a 35mm lens, film grain. The place is the first reference image: a cave floor of pale silt, a rock wall split by one narrow crack, boulders, amber fungus on one side and blue-green on the other. Nobody human is in the frame. The second reference image is only for how real coarse hair photographs in low light.
>
> At a middle distance, seen in three-quarter view from behind, stands one being beside a boulder that reaches its hip, one hand spread flat on top of the boulder, its head turned a little toward the crack in the wall, listening. A fist-sized stone lies on the silt a stride in front of it. It is a large heavy people of the dark, taller than a person. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders and short thick legs. The head is small and blunt, set low with no neck. The face is flat, with no muzzle: two very small dark eyes far apart, two slit nostrils, a short closed mouth line. In place of external ears, on each side of the head there is one bare pale oval drum of taut skin as large as a hand. The coat is grey, coarse and uneven: long and shaggy over the chest and shoulders, shorter elsewhere, damp and matted with pale silt near the feet. A row of long stiff pale bristles stands out along the outside of each forearm and down each flank, for feeling the rock. Each hand is broad with three thick blunt digits and a pale leathery pad. Each foot is a broad round pad with no separate toes.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, mole, marmot, otter, seal, troll or human. No muzzle, no snout, no nose leather, no whiskers on the face. No human face, no human hands, no human feet. No clothing, no text.

- **Photographic check 2 — option B as a fresh frame at the line** (no frame edited; the same two references; not filed). Read as: take 1 a whiskered seal-like head on a shaggy yeti body, hands too human; take 2 rounder and leaning back toward plush.

> Documentary photograph, 16:9, available light only, deep focus, taken at standing eye height with a 35mm lens, film grain. The place is the first reference image: a cave floor of pale silt, a rock wall split by one narrow crack, boulders, amber fungus on one side and blue-green on the other. Nobody human is in the frame. The second reference image is only for how real coarse hair photographs in low light.
>
> At a middle distance, seen in three-quarter view from behind, stands one being beside a boulder that reaches its hip, one hand spread flat on top of the boulder, its head turned a little toward the crack in the wall, listening. A fist-sized stone lies on the silt a stride in front of it. It is a large heavy people that feels its way in the dark, a head taller than a tall human and three times as broad. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms and short thick legs. The head is broad, low and blunt, wider than it is tall, set low with no neck. Very small eyes almost hidden in the coat. A wide fan of long stiff pale whiskers stands out from the brow and the sides of the head. The coat is grey, coarse and uneven: long and shaggy over the chest and shoulders, shorter on the arms and legs, damp and matted with pale silt near the feet. Each hand is broad with three thick blunt digits and a pale leathery pad. Each foot is a broad round pad with no separate toes.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty, film grain. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, mole, marmot, beaver, otter, seal, troll or human. No external ears, no front teeth showing, no tail. No human face, no human hands, no human feet. No clothing, no text.

**Lessons for the next Told prompt.** The toy is the coat and the proportions: *coarse, uneven, long on the chest and shoulders, matted with silt* and a small head remove it, and *velvet* or any short even coat puts it back. A flat bare face returns a sloth or an ape; whiskers at the muzzle return a marmot, mole or seal; bare skin on the limbs returns a human; a bare patch beside the head returns an ear. *No human hands, no human feet* in the negative did not stop either. A fresh frame at the line with `s11e02c03.jpg` as the place is a plainer photograph than any edit of a filed Told frame.

## 2026-11-17 — The Told brought to the ruled body: four portraits and Season 11's six frames (Opus, desktop)

At Dermot's *"B on A's coat (Recommended)"* and *"Every people (Recommended)"* of 17 November 2026. Every run is `scripts/image-edit.js`, `gemini-3.1-flash-image`, 2K, two takes; the body reference is a crop of study take B2 v1 (the options round above) for the portraits, and a crop of a re-made portrait for the chapter frames. Rounds, picks and what each read as are in `images.md` (the four portrait entries and §§ 73 and 74, *17 November 2026*). Prompts below are verbatim.

### characters/went-round.jpg — an edit of study take B2 v1; filed take 1 of 2

> Edit this photograph. Keep the cave, the light, the rocks, the fungus, the camera position and the framing exactly as they are, and keep the being in the same place and the same pose: upright on two legs, one hand spread flat on the rock edge of the side opening at the left, its head turned toward that opening and away from the camera. Change only the being's coat colour, its build and its head, as follows.
>
> The coat becomes a darker grey all over, a dark slate grey, still coarse and uneven: long and shaggy over the chest and shoulders, shorter on the arms and legs, damp and matted with pale silt near the feet, individual guard hairs catching the fungus light at the edges. The body is a little leaner than now, still heavy and pear-shaped, widest at the hips, with narrow sloping shoulders, long arms and short thick legs. The head stays small, blunt and low with no neck, with very small dark eyes almost hidden in the coat and a wide fan of long stiff pale whiskers round the muzzle and over the brow. Remove any small rounded ear on the head: this people has no external ears at all, the side of the head is plain coat. The hands stay broad with thick blunt digits and bare pale leathery pads; the feet stay broad round bare pads.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty, film grain, natural colour. Not a toy, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, troll or human. No external ears, no human face, no human hands, no human feet, no beard. No clothing, no text.

### characters/teddy.jpg — grown; an edit of the filed frame, body reference the B2 v1 crop; take 2 of 2 went on to the ear edit

> Edit the first image. Keep the cave passage, the fungus light, the pale silt floor, the line of bootprints, the small plain grey cylinder standing on the silt, the camera position and the framing as they are, and keep the being in the same place and the same pose: a few steps back from the cylinder, half-crouched on its two legs, its head turned toward the camera side with open curiosity. Replace the being's whole body with the body shown in the second image (take the body only from it, nothing of its setting, light or pose).
>
> The being is a full-grown adult of its people, not young and not small: as heavy as the adults. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms and short thick legs. The head is small for the body, blunt and set low with no neck, and has no external ears at all. Very small dark bright eyes almost hidden in the coat, curious and alert. A wide fan of long stiff pale whiskers round the blunt muzzle and over the brow. The coat is a dense mid grey, coarse and uneven: long and shaggy over the chest and shoulders, shorter on the arms and legs, damp and matted with pale silt near the feet, individual guard hairs catching the light at the edges. Each hand is broad with thick blunt digits and a bare pale leathery pad; each foot is a broad round bare pad.
>
> Make the whole frame read as a real photograph taken in a real cave, not a render: film grain heavier in the shadows, real damp rock texture, natural muted colour, slight softness toward the corners, deep focus. It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty. Not a toy, not a plush, not a puppet, not a costume, not an animated film character, not a render. Not a cub, not a baby, not a young one. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, troll or human. No external ears, no large round eyes, no eye rings, no human face, no human hands, no human feet. No clothing, no text, no light on the cylinder.

### characters/keeps-a-hand-on-it.jpg — grown; an edit of the filed frame, body reference the B2 v1 crop; take 2 of 2 went on to the ear edit

> Edit the first image. Keep the warm cavern chamber, the amber and blue-green fungus light, the pale silt floor, the row of loose fist-sized stones across it and the other stones lying about, the camera position and the framing as they are, and keep the being in the same place and the same pose: squatting low on its two hind legs with the body upright from the hips, one hand resting flat on one stone of the row and not moving it, its face turned down to the stone and away from the camera, the whole body still. Replace the being's whole body with the body shown in the second image (take the body only from it, nothing of its setting, light or pose).
>
> The being is a full-grown adult of its people, not young and not small: as large and heavy as any adult, crouched low. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms and short thick legs. The head is small for the body, blunt and set low with no neck, and has no external ears at all, turned down so the face is mostly hidden. Very small dark eyes almost hidden in the coat. A wide fan of long stiff pale whiskers round the blunt muzzle and over the brow, the whiskers nearly touching the stone. The coat is a plain mid grey with no markings, coarse and uneven: long and shaggy over the chest and shoulders, shorter on the arms and legs, damp and matted with pale silt near the feet, individual guard hairs catching the amber light at the edges. The hand on the stone is broad with thick blunt digits and a bare pale leathery pad; the feet are broad round bare pads.
>
> It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty, film grain heavier in the shadows, natural colour, deep focus. Not a toy, not a plush, not a puppet, not a costume, not an animated film character, not a render. Not a cub, not a baby, not a young one. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, troll or human. No external ears, no large round eyes, no human face, no human hands, no human feet. No clothing, no text.

### Ear edit, used on teddy (take 1 of 2 filed) and keeps-a-hand-on-it (take 1 of 2 filed)

> Edit this photograph. Keep everything exactly as it is: the cave, the light, the stones, the camera position, the framing, and the being's body, pose, coat, eyes and whiskers. Change only one thing: this people has no external ears, so remove the small rounded ear and any ear opening on the side of the being's head, and let the coarse grey coat run smoothly over that place. Film grain, natural colour, a real photograph, not a render. No text.

### characters/stone-first.jpg, round 1 — body reference the B2 v1 crop; both takes white all over, a yeti (not filed)

> Edit the first image. Keep the cavern, the lip where the pale silt floor shelves down into darkness, the fist-sized stone set down on the silt a stride ahead of the being, the camera position and the framing as they are, and keep the being in the same place and the same pose: standing upright on two legs, seen from behind and a little to one side, its head turned toward the dark below and not toward the camera. Replace the being's whole body with the body shown in the second image (take the body only from it, nothing of its setting, light or pose).
>
> The being is old, broad and heavy, the largest of its people: a heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms hanging close and short thick legs. The head is small for the body, blunt and set low with no neck, and has no external ears at all. Only the edge of the face shows: a very small dark eye almost hidden in the coat and a fan of long stiff pale whiskers standing out from the muzzle and brow, catching the light. The coat is grey, coarse and uneven, long and shaggy over the chest, shoulders and back, shorter on the arms and legs, damp and matted with pale silt near the feet, and paler, almost white-grey, at the crown of the head and over the shoulders with age. The feet are broad round bare pads.
>
> Make the whole frame read as a real photograph taken in a real cave, not a render: fewer and plainer fungus shelves, real damp mineral rock, film grain heavier in the shadows, natural muted colour, slight softness toward the corners, deep focus. It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty. Not a toy, not a plush, not a puppet, not a costume, not an animated film character, not a render. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, troll or human. No external ears, no human face, no human hands, no human feet. No clothing, no text.

### characters/stone-first.jpg, round 2 — coat colour only, on round 1 take 2; no change (not filed)

> Edit this photograph. Keep everything exactly as it is, the cave, the light, the stone on the silt, the camera position, the framing, and the being's shape, pose, head, whiskers and place. Change only the colour of the being's coat: it is a mid grey all over, like the other adults of its people, and only the crown of the head and the top of the shoulders are paler, a silvery grey with age, blending gradually into the grey. The coat stays coarse, uneven and long, damp and matted with pale silt near the feet. Not white, not a polar bear, not a yeti. No external ears. Film grain, natural colour, a real photograph, not a render.

### characters/stone-first.jpg, round 3 — round 1's prompt with the coat reworded, body reference the new went-round.jpg; take 1 of 2 went on

> Edit the first image. Keep the cavern, the lip where the pale silt floor shelves down into darkness, the fist-sized stone set down on the silt a stride ahead of the being, the camera position and the framing as they are, and keep the being in the same place and the same pose: standing upright on two legs, seen from behind and a little to one side, its head turned toward the dark below and not toward the camera. Replace the being's whole body with the body shown in the second image (take the body only from it, nothing of its setting, light or pose).
>
> The being is old, broad and heavy, the largest of its people: a heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms hanging close and short thick legs. The head is small for the body, blunt and set low with no neck, and has no external ears at all. Only the edge of the face shows: a very small dark eye almost hidden in the coat and a fan of long stiff pale whiskers standing out from the muzzle and brow, catching the light. The coat is grey, coarse and uneven, long and shaggy over the chest, shoulders and back, shorter on the arms and legs, damp and matted with pale silt near the feet, a mid grey like the other adults, with only a small silvery patch at the very crown of the head from age; the rest of the coat is plainly grey, never white. The feet are broad round bare pads.
>
> Make the whole frame read as a real photograph taken in a real cave, not a render: fewer and plainer fungus shelves, real damp mineral rock, film grain heavier in the shadows, natural muted colour, slight softness toward the corners, deep focus. It is a real living person of a non-human people, photographed in available light by a documentary photographer: weight on the feet, hair uneven and a little dirty. Not a toy, not a plush, not a puppet, not a costume, not an animated film character, not a render. Not white, not a polar bear, not a bear, panda, sloth, ape, gorilla, monkey, yeti, troll or human. No external ears, no human face, no human hands, no human feet. No clothing, no text.

### characters/stone-first.jpg, crown edit on round 3 take 1; take 1 of 2 filed

> Edit this photograph. Keep everything exactly as it is: the cave, the light, the stones, the camera position, the framing, and the being's body, pose, coat, eyes and whiskers. Change only this: the pale silvery patch at the top of the head is flat coat lying close, a little paler than the rest, not a tuft or a lump; and this people has no external ears, so remove the small rounded ear and any ear opening on the side of the being's head, and let the coarse grey coat run smoothly over that place. Film grain, natural colour, a real photograph, not a render. No text.

### Season 11 frames — the shared body paragraph

Each chapter prompt below is one line of its own, then this paragraph, sent with a 3:4 crop of the figure's region (C03: the whole frame) and the body reference named.

> The body of this people (take it from the second image, body only, nothing of its setting, light, pose or the object beside it): a large heavy being that feels its way in the dark, a full-grown adult. A heavy pear-shaped body, widest at the hips, with narrow sloping shoulders, long arms and short thick legs. The head is small for the body, blunt and set low with no neck, and has no external ears at all. Very small dark eyes almost hidden in the coat. A wide fan of long stiff pale whiskers round the blunt muzzle and over the brow. The coat is grey, coarse and uneven: long and shaggy over the chest, shoulders and back, shorter on the arms and legs, damp and matted with pale silt near the feet. Broad hands with thick blunt digits and bare pale leathery pads; feet as broad round bare pads.
>
> It is a real living person of a non-human people, photographed in available light: weight on the feet, hair uneven and a little dirty, the same film grain, focus and colour as the rest of this photograph. Not a toy, not a plush, not a puppet, not a costume, not an animated film character, not a render. Not a cub, not a young one. Not a bear, panda, sloth, ape, gorilla, monkey, yeti, troll or human. No external ears, no large round eyes, no human face, no human hands, no human feet. No clothing, no text, no new objects, no new light.

### chapters/s11e01c01.jpg — body reference `teddy.jpg` crop

> Edit this photograph, which is a crop of a larger frame. Keep everything in it exactly as it is, the rock, the floor, the fungus, the light, the colours, the grain, the camera position and the framing, and keep any person and any made object untouched. Replace only the large furred being, seen from behind and standing upright on the silt, with one of the same people as the second image: in the same place, at the same size, in the same pose, seen from behind with its head a little down, its whole body turned toward the people working in the light. No face shows: the head is seen from behind, a whisker or two catching the light at its edge.

### chapters/s11e01c02.jpg — body reference `teddy.jpg` crop

> Edit this photograph, which is a crop of a larger frame. Keep everything in it exactly as it is, the rock, the floor, the fungus, the light, the colours, the grain, the camera position and the framing, and keep any person and any made object untouched. Replace only the large furred being walking away from the camera down the tunnel with one of the same people as the second image: in the same place, at the same size, seen from behind and mid-step, both arms round the plain grey cylinder held upright against its chest, which stays exactly as it is. No face shows: the head is seen from behind.

### chapters/s11e01c03.jpg — body reference `went-round.jpg` crop

> Edit this photograph, which is a crop of a larger frame. Keep everything in it exactly as it is, the rock, the floor, the fungus, the light, the colours, the grain, the camera position and the framing, and keep any person and any made object untouched. Replace each of the five furred beings with one of the same people as the second image, every one a full-grown adult, each in the same place, at the same size and in the same pose: the three seated on boulders with their backs to the camera, and the two standing facing each other. Of the two standing, the one on the left is old and broad, its coat mid grey with a paler silvery crown, and the one in the middle is leaner and its coat a darker slate grey. Both standing heads are turned to each other and their faces are in shadow, seen only at the edge. The coats of the three seated are plain mid greys.

### chapters/s11e01c04.jpg — body reference `stone-first.jpg` crop

> Edit this photograph, which is a crop of a larger frame. Keep everything in it exactly as it is, the rock, the floor, the fungus, the light, the colours, the grain, the camera position and the framing, and keep any person and any made object untouched. Replace only the furred being standing on the silt between the dark rock walls with one of the same people as the second image: in the same place, at the same size, upright and still, its head tilted a little to one side toward the camera's side as if listening, its face in deep shadow so that no feature but a faint pale line of whiskers can be made out. Its coat is mid grey and paler, silvery, at the crown with age.

### chapters/s11e01c05.jpg — body reference `stone-first.jpg` crop

> Edit this photograph, which is a crop of a larger frame. Keep everything in it exactly as it is, the rock, the floor, the fungus, the light, the colours, the grain, the camera position and the framing, and keep any person and any made object untouched. Replace only the huge furred back at the right with one of the same people as the second image, seen wholly from behind and a little to one side, its head bent down toward the kneeling person and the stone, a few long pale whiskers showing past the edge of the head, no face. It is old and broad, the coat mid grey and paler, silvery, at the crown and shoulders. Make it a little smaller than now: when it stands upright its head is about a head and a half higher than a standing adult person's would be, so it fills less of the right side of the frame and the rock wall shows above its head.

### chapters/s11e02c03.jpg — body reference `stone-first.jpg` crop

> Edit this photograph, which is a crop of a larger frame. Keep everything in it exactly as it is, the rock, the floor, the fungus, the light, the colours, the grain, the camera position and the framing, and keep any person and any made object untouched. Replace only the furred being standing on the silt in the middle distance with one of the same people as the second image: in the same place, standing upright and still and square to the camera, its face in shadow, back-lit by the fungus so the coarse coat glows at its edges and the whiskers show as a faint pale fan. It is old and broad, the coat mid grey and paler, silvery, at the crown. Make it larger than now, about one and a third times its present height, its feet staying where they are on the silt beside the stone, which stays exactly where it is: it is big, plainly taller than a tall person would be standing at that distance.

### chapters/s11e01c05.jpg — clean-up edit of take 1; take 2 of 2 filed, then the wall healed by hand

> Edit this photograph. Keep everything exactly as it is: the rock wall and its crack, the fungus, the silt, the light, the grain, the camera position, the framing and the large grey furred being and its pose. Change only two things: remove the loose rounded stone lying on the open silt in front of the being, so that the silt there is plain with a few faint footprints; and remove the pale rounded dome shape on the rock wall above and behind the being's head, so that the wall there is plain pale rock like the rest. Add nothing. No text.

### chapters/s11e02c03.jpg — size edit on a taller crop of take 1; take 1 of 2 filed

> Edit this photograph, which is a crop of a larger frame. Keep everything in it exactly as it is, the rock, the floor, the fungus, the light, the colours, the grain, the camera position and the framing, and keep the plain stone on the silt exactly where it is. Change only the size of the large grey furred being standing on the silt: make it about one and a half times taller and broader than now, with its feet staying exactly where they are beside the stone, so that its head now rises well above the height of the dark passage mouth behind it. It is big: a camera at a standing person's eye height sees it from a little below its chest, so it is plainly taller than a tall person standing at that distance. Keep its look exactly: the coarse mid grey coat paler and silvery at the crown, the small blunt head with no external ears, the fan of pale whiskers, the face in shadow, back-lit by the fungus so the coat glows at its edges, standing upright, still and square to the camera. Not a bear, not a yeti, not a toy, not a render. No external ears. No text.

**Lessons.** An edit keeps whatever pale mass was in the region: the old back left a furred dome on the wall in C05, and the white first take of Stone-First survived a colour-only edit unchanged; reword the body prompt and re-run from the original instead. *Paler at the crown* drew the whole coat white; *a small silvery patch at the crown, the rest plainly grey* held. Small ear nubs return even with *no external ears* in the negative, and a one-change edit removes them. A crop of a re-made portrait is a better body reference for a chapter frame than the study take, because it carries the individual's shade.

## 2026-11-17 — Chthonari body: the four options studied (Fable, desktop)

The options study recorded in `species-design.md` (*Vessik and the Chthonari — Body: options put to Dermot, 17 Nov 2026*). **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, 16:9, two takes per job. Eight jobs, sixteen takes, none refused, **none filed**. The first six jobs are edits of the filed `kattik.jpg` (the room-remade frame of 17 November), sent alone. The last two are a grey Blender blockout made photographic, sent with `kattik.jpg` second as a guide to the place and the surface only. The blockout script was a scratch file and is not in the repository: ellipsoids for the body and for each limb segment, a floor, a slab, two columns, one cool area light, and a 40 mm camera about a metre and a half away at half a metre's height. Every edit prompt opens with the same paragraph, given in full under A and not repeated.

### The edits of `kattik.jpg` (none filed)

- **A — the sole, round 1** (both takes: a pebble held up on six legs; take 2 with a seam round the rim):

> Edit this photograph. Change only the body of the small creature in the foreground, and give the small one in the background the same kind of body. Keep everything else exactly as it is: the blue-grey plated room, the columns, the floor, the flat grey stone slab on the floor, the light, the camera and the grain. Still a real photograph, not a render. The creature stays the same small size and the same dull slate grey with a bronze cast, hard, matte and scuffed. It has no face, no eyes, no mouth and no feelers.
>
> The change: the body is one single piece, a low wide flat lens like a thick river pebble, round seen from above, with no head, no neck, no waist, no segments and no seam down its back. It lies with its whole underside pressed flat on the floor, as if listening to the floor through it. Six short thick limbs leave the rim of the lens, evenly spaced all the way round like the points of a six-pointed star, each lying low and splayed outward along the floor with one bend, ending in a blunt tip. The two limbs nearest the slab rest their blunt tips on the slab. Its upper face is plain, with fine ripples like worn stone. Not a tick, not a crab, not a spider, not a turtle, not a starfish, not a machine.

- **A — round 2, the body asked down onto the floor** (both takes still stood it on legs beneath):

> *(opening paragraph as above)*
>
> The change: the body is one single piece, a low wide flat disc like a thick river pebble, round seen from above, with no head, no neck, no waist, no segments and no seam. It lies directly on the floor: its whole flat underside rests on the floor plate with no gap beneath it and no legs beneath it, as if listening to the floor through it. Six short thick limbs leave the outer edge of the disc, evenly spaced all the way round like six spokes, and each lies flat along the floor, pointing straight outward, with one low bend and a blunt tip pressed to the floor. Nothing lifts the body. The two limbs nearest the slab lie with their blunt tips on the slab. Its upper face is plain, with fine ripples like worn stone. Not a tick, not a crab, not a spider, not a turtle, not a starfish, not a stool, not a machine.

- **B — two whorls, round 1** (both takes: a banded wooden keg on spider legs):

> *(opening paragraph as above)*
>
> The change: the body is a short thick barrel, like a small keg lying on its side, about twice as long as it is wide, one single piece with no head, no waist and no segments, both ends alike and bluntly rounded. Three thick limbs leave each end of the barrel, spaced evenly round it like the legs of a tripod, so six limbs in all: at each end two limbs reach down to the floor and one reaches up above the body. The four lower limbs grip the floor. The two upper limbs arch up and forward over the body and come down so that their blunt tips rest on the slab. The limbs are thick, with three joints and blunt tips, no claws and no pincers. Not a scorpion, not a crab, not a spider, not an ant, not a robot.

- **B — round 2, the keg taken out** (both takes: a smooth spindle with two raised limbs and eight limbs in all):

> *(opening paragraph as above)*
>
> The change: the body is one single thick spindle of the same hard living hide, lying lengthwise, about twice as long as it is wide, widest in the middle, with two rounded ends that are exactly alike, so it has no front and no back, no head, no waist, no segments, no bands, no hoops and no flat end caps; it is grown, not made. Three thick limbs leave each end, spaced evenly round it. At each end two of the three limbs stand on the floor, and the third leaves the very top of the body, rises well above it and bends over forward. So four limbs stand on the floor and two limbs are raised above the back. The two raised limbs reach forward and down so that their blunt tips rest on the slab. The limbs are thick, with three joints and blunt tips, no claws and no pincers. Not a scorpion, not a crab, not a spider, not an ant, not a barrel, not a robot.

- **C — the striker** (both takes: a cast wedge with two hammers, a made thing):

> *(opening paragraph as above)*
>
> The change: the body is one single wedge, like a thick axe head lying flat, with no head, no waist, no segments and no seam: its broad blunt end faces the slab and it tapers toward the back. It is carried low, its flat underside almost touching the floor. Four short thick limbs on the back half grip the floor, close in to the body. From the two front corners come two much longer, heavier arms, each as long as the body, with one elbow, ending in a blunt rounded knob like a small mallet, with no claws, no pincers and no fingers. Both knobs rest on the slab. Not a crab, not a lobster, not a mantis, not a mole, not a cricket, not a robot.

- **D — paved hide** (both takes: a tiled beetle or tick):

> *(opening paragraph as above)*
>
> The change: keep six legs under the body, but the body is no longer a smooth dome in sections. It is one low long loaf with no head, no neck and no waist, and it has no continuous hard cover: its surface is dark leathery hide set with many separate small flat grey plates, each like a hand-cut tile, with gaps of dark hide between them like paving stones, larger on top and smaller down the sides, none overlapping. The legs are the same: dark hide with separate grey rings round them. Not an armadillo, not a pangolin, not a turtle, not a woodlouse, not a crocodile.

### The blockouts made photographic (none filed)

- **A — the sole** (the plan held in both takes; pointed limb tips in both, a rim seam in take 2; reads as a crab or a turtle shell, no longer a beetle):

> Make the first image, a grey blockout, into a real photograph. Keep every shape exactly: the body, the number of limbs (exactly six), where each limb leaves the body, where each tip rests, the flat slab, and the camera. Add nothing to the body: no head, no face, no eyes, no mouth, no feelers, no extra limbs, no claws. The second image is only a guide to the place and the materials: the same clean dark blue-grey plated floor with flush round fastenings, plain columns behind, cool even light, and the same hard, matte, scuffed dull slate-grey surface with a bronze cast for the body and limbs; the slab is plain dull grey stone. Do not copy the creature in the second image. The being is small, about the length of a forearm. Deep focus, a real lens, grain, fine scratches and wear on the body, a soft shadow on the floor. Not a render, not a toy, not clay, not a machine.
>
> The body is one low flat disc of hard hide lying directly on the floor on its underside, with six short hard jointed limbs leaving its rim like spokes and lying low along the floor; one limb tip rests on the slab. The limbs are jointed limbs with a hard surface, never flippers, never fins. Not a turtle, not a crab, not a starfish, not a tick.

- **B — two whorls** (take 1 held six limbs; take 2 added two small ones; long thin working limbs, a sculpted finish):

> *(first paragraph as in the blockout prompt for A)*
>
> The body is one smooth thick spindle of hard hide with both ends alike. Four limbs stand on the floor, two at each end. Two more limbs leave the top of the body, one at each end, rise above it, bend, and come down with their tips on the slab. All six limbs are thick hard jointed limbs of one kind with blunt tips. Not a spider, not a crab, not a scorpion, not an ant.

**What the run teaches the next prompt of this people.** An edit of a filed Chthonari frame keeps that frame's legs beneath the body whatever the text says, so a new plan needs new geometry, not an edit. A simile for the body is drawn literally (*keg* gave hoops and end caps; *axe head* and *mallet* gave cast metal). A blockout holds the plan and the count better than text, and its ellipsoid limbs come back as smooth lobes or with pointed tips; the next blockout wants blunt tips modelled, not asked for.

## 2026-11-17 — Chthonari body A: second study round and the six frames re-made, none filed (Opus, desktop)

At Dermot's *"A: the sole (Recommended)"* (`species-design.md`, *Vessik and the Chthonari — Body: the sole*). **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, two takes per job. Thirteen jobs, twenty-six takes, none refused, **none filed** (`images.md`, the Orbital Five-O block, *Chthonari body A, applied*). Blockout: `scripts/blockouts/chthonari-a.py`, pose `study`, Blender 5.2, Cycles, 1600×900; place guide `src/images/characters/kattik.jpg`.

### The blockout made photographic (none filed)

- **Round 2: even round limbs, blunt pads, one disc** (the plan held; no crab, turtle or seam; a leather or sewn toy, rung 3). Inputs: the blockout, `kattik.jpg`.

> Make the first image, a grey blockout, into a real photograph of a living being. Keep every shape exactly: the one flat oval disc of the body, the number of limbs (exactly six), where each limb leaves the rim of the disc, the joints of each limb, where each rounded pad rests, the one limb lifted clear of the floor, the one pad set on the flat slab, and the camera. Add nothing to the body: no head, no face, no eyes, no mouth, no feelers, no extra limbs, no claws, no pincers, no points.
>
> The second image is only a guide to the place: the same clean dark blue-grey plated floor with flush round fastenings, plain columns behind, and the plain grey stone slab. Do not copy the creature in the second image.
>
> The being is small, about the length of a forearm, and alive. Its body is one low flat disc of living hide lying directly on the floor on its underside, with no gap beneath it, no rim line, no seam and no lid; the upper surface is gently curved and nearly flat, never a dome, never a shell of plates. The hide is hard but organic: a fine irregular grain like weathered horn, slate grey shading to a warm dull bronze in patches, with small pale scratches, a dull worn patch near the rim, fine dust in the creases at the limb roots, and a faint waxy sheen where the light catches it. Each limb is jointed, of a plain even thickness, the same hide, and ends in a round blunt pad pressed flat to the floor; no claws, no pointed tips. The limbs are uneven in reach, as a living body is.
>
> One hard working light from the left throws crisp shadows; deep focus at mid height; a real lens, fine grain, normal exposure, natural colour. Not a render, not a toy, not a figurine, not cast metal, not bronze, not clay. Not a turtle, not a tortoise, not a crab, not a tick, not a spider, not a starfish, not a beetle.

- **Round 3: thick-rooted limbs** (fingers, rung 2; take 2 stood the disc on its limbs). As round 2, with the hide sentence *"the dry, matte, hard skin of a living animal, never leather and never metal: a fine irregular pored grain"*, the limbs *"thickest where it leaves the rim and a little finer outward, the joints narrow waists in one continuous skin with no rings, no stitching and no seams"*, and *"not leather, not a stuffed or sewn toy"* added to the negatives.
- **Round 4: hard tapered ten-faced segments** (a cast-metal robot, rung 3; take 2 put a present-day camera on the deck). As round 2, with the hide *"a hard, dry, living exoskeleton, matte, never shiny, never leather or rubber: a fine uneven grain with tiny pits, hairline cracks and growth marks"*, the limbs *"three hard segments, slightly flattened, each a little narrower toward its joint, the joints narrow and tight"*, and *"not rubber, not leather, not a stuffed toy, not a product photograph"* added.

### Text alone, and an edit of it (none filed)

- **No blockout, no reference** (the most photographic finish; legs beneath a raised body, a crab, rung 1; take 1 a lit work lamp in frame):

> A real documentary photograph, 16:9, taken at mid height in deep focus in the clean understructure beneath a space habitat's dock ring: dark blue-grey deck plates with flush round fastenings, plain blue-grey columns behind, one hard working light from the left, normal exposure, natural colour, fine sensor grain.
>
> On the deck, a small living being about the length of a forearm, alone, at work beside a plain flat slab of dull grey stone. Its body is one low, broad, flat oval disc lying directly on the deck on its underside, with no gap beneath it: no head, no face, no eyes, no mouth, no feelers, no neck, no sections, no seam and no rim line; nearly flat on top, never a dome and never a shell of plates. Exactly six jointed limbs, no more and no fewer, leave the rim of the disc spaced round it like the spokes of a wheel, and lie low along the deck, gripping; each limb is three short segments, and each ends in a round blunt pad pressed to the metal, with no claw and no point. The limb nearest the slab rests its pad on the slab's surface; the limb beside it is lifted clear of the deck, poised to strike the slab. The whole body is turned toward the slab.
>
> The skin of the body and limbs is that of a real animal photographed where it lives: dry and matte, a fine uneven grain, faint creases at each joint, small pale scratches and one old chip at the rim, dust in the folds where the limbs leave the body, the tone varying from cool slate grey to a dull warm bronze. Contact shadow where it touches the deck.
>
> No other being, no person, no camera, no tool, no device in frame. No lettering, numerals or lit fittings. Not a turtle, not a tortoise, not a crab, not a tick, not a spider, not a starfish, not a beetle, not an insect, not a hand. Not a toy, not a figurine, not a model, not cast metal, not a robot, not leather, not rubber, not clay, not a render.

- **Lowering that body** (inputs: its take 2, the round 4 blockout as a shape guide; the posture did not change):

> Edit the first photograph. Keep the being's skin, colour, wear and finish exactly as they are, and keep the room, the light, the slab and the camera, but change its posture to the one in the second image, a grey shape guide: the flat disc of the body lowered until its whole underside lies on the deck with no gap beneath it, and the six limbs splayed straight outward from the rim like the spokes of a wheel, lying low along the deck, each with its blunt pad pressed to the metal, none of them beneath the body. The limb nearest the slab rests its pad on the slab; the limb beside it is lifted a little clear of the deck. Take nothing else from the second image: not its grey colour, its smooth surface or its light.
>
> Remove the work lamp at the left; the light still comes from the left, from no visible fitting. No head, no face, no eyes, no claws, no extra limbs. Not a crab, not a spider, not a tick, not a turtle. A real photograph.

### The six frames (none filed)

Each sent with the filed frame first and round 2's take 1 as the body reference.

- **`kattik.jpg`** (take 1 placed both bodies; take 2 stood the foreground one up; then two finish passes on take 1, neither changing the finish):

> Edit the first photograph. Replace both small creatures in it, the one in the foreground at the slab and the one on the block behind, with beings of the body shown in the second image, and change nothing else: keep the blue-grey plated room, the columns, the curved ribs, the block, the floor, the flat grey stone slab, the light, the camera and the grain exactly as they are. Each being stays where its creature was and about the same size, about the length of a forearm.
>
> The body, as in the second image: one low flat oval disc lying directly on the floor on its underside, with no gap beneath it, no legs beneath it, no head, no face, no eyes, no mouth, no feelers, no rim line and no seam; nearly flat on top, never a dome, never a shell of plates. Exactly six jointed limbs leave the rim of the disc like spokes and lie low along the floor, each ending in a round blunt pad pressed to the floor; no claws, no pointed tips. In the foreground, one limb nearest the slab rests its pad on the slab and the limb beside it is lifted clear of the floor, as if about to strike. The one behind lies flat on top of its block with its limbs gripping the block's edges.
>
> The hide is the dry, matte skin of a living animal: a fine irregular grain, slate grey shading to a dull warm bronze in patches, small pale scratches, dust in the creases at the limb roots; the joints are narrow waists in one continuous skin. Not leather, no stitching, no rings at the joints, not cast metal, not a toy, not a figurine, not clay. Not a turtle, not a crab, not a tick, not a spider, not a starfish, not a beetle, not a hand. A real photograph, not a render.

  Finish pass 1 (input: the edit's take 1):

> Edit this photograph. Change only the surface and finish of the small beings in it, never their shape: keep every outline, every limb, the count and placement of the limbs, each pose and each size exactly, and keep the room, the light and the camera exactly as they are.
>
> At present the beings look like smooth moulded toys. Make them look like real living animals photographed where they are: the skin dry and matte, with a fine uneven grain, faint creases where each limb bends, small irregular pale scratches and chips, a dull worn patch near the rim, fine dust caught in the creases, tone varying across the body from cool slate grey to a dull warm bronze, the limbs a little uneven in thickness as living limbs are, the joints soft folds of the same skin, never rings, never stitching. Their shadows sit firmly on the metal, with contact shadow where the body and pads touch. Fine sensor grain over the whole frame, a real lens.
>
> No head, no face, no eyes, no mouth, no feelers, no claws, no extra limbs. Not leather, not rubber, not plastic, not cast metal, not clay, not a render.

  Finish pass 2 (inputs: the edit's take 1, the text-only take 2 as a skin reference):

> Edit the first photograph. Change only the surface of the two small beings in it, never their shape: keep every outline, every limb, the count and placement of the limbs, each pose, each size and each position exactly, and keep the room, the slab, the light and the camera exactly as they are.
>
> Give their body and limbs the skin of the being in the second image: dry, matte, weathered, a fine uneven grain, dull slate grey shading to a dull warm bronze, darker in the folds, small pale scratches, dust where the limbs leave the body, soft creased joints. Do not copy anything else from the second image: not its shape, its legs, its pose, its room or its lamp. The beings stay flat on the metal with no gap beneath them, with a dark contact shadow where body and pads touch.
>
> No head, no face, no eyes, no mouth, no feelers, no claws, no extra limbs. Not shiny, not leather, not rubber, not plastic, not cast metal, not a toy, not a render.

- **`tikket.jpg`** (both takes placed the disc against the bracket; a plush toy, rung 3):

> Edit the first photograph. Replace the small creature in it with a being of the body shown in the second image, and change nothing else: keep the room, the heavy bolted mounting bracket, the pipes and girders behind, the deck, the bolts, the light, the camera and the grain exactly as they are. The being stays where the creature was and about the same size, about the length of a forearm.
>
> The being lies with its whole underside pressed flat against the foot of the bracket and the deck beside it, with no gap beneath it and no legs beneath it, as if listening to the metal through its body; all six limbs lie low and grip the bracket and the deck, every pad touching metal.
>
> The body, as in the second image: one low flat oval disc with no head, no face, no eyes, no mouth, no feelers, no neck, no sections, no rim line and no seam; nearly flat on top, never a dome, never a shell of plates. Exactly six jointed limbs leave the rim of the disc like spokes, each ending in a round blunt pad; no claws, no pointed tips. The skin is the dry, matte skin of a living animal: a fine uneven grain, slate grey shading to a dull warm bronze in patches, small pale scratches, dust in the creases where the limbs leave the body, the joints narrow folds of one continuous skin. Not leather, no stitching, no rings at the joints, not cast metal, not a toy, not a figurine, not clay. Not a turtle, not a crab, not a tick, not a spider, not a starfish, not a beetle, not a hand. A real photograph, not a render.

- **`tsikk.jpg`** (take 1 stood the body up; take 2 lay flat, its raised pair read as fingers):

> Edit the first photograph. Replace the small creature in it with a being of the body shown in the second image, and change nothing else: keep the wide clean blue-grey plated deck, the columns, beams and curved wall, the ring curving overhead, the light, the camera and the grain exactly as they are. The being stays where the creature was, alone in the middle of the deck, and about the same size, about the length of a forearm.
>
> Its whole underside lies flat on the deck with no gap beneath it and no legs beneath it. Four limbs lie low along the deck, gripping, pads pressed to the metal; the two limbs at the front are lifted clear of the deck and held up and forward, still, as if addressing the whole structure around it.
>
> The body, as in the second image: one low flat oval disc with no head, no face, no eyes, no mouth, no feelers, no neck, no sections, no rim line and no seam; nearly flat on top, never a dome, never a shell of plates. Exactly six jointed limbs leave the rim of the disc like spokes, each ending in a round blunt pad; no claws, no pointed tips. The skin is the dry, matte skin of a living animal: a fine uneven grain, slate grey shading to a dull warm bronze in patches, small pale scratches, dust in the creases where the limbs leave the body, the joints narrow folds of one continuous skin. Not leather, no stitching, no rings at the joints, not cast metal, not a toy, not a figurine, not clay. Not a turtle, not a crab, not a tick, not a spider, not a starfish, not a beetle, not a hand. A real photograph, not a render.

- **`tekka.jpg`** (both takes held the body up off the member; a plush tick):

> Edit the first photograph. Replace the small creature in it with a being of the body shown in the second image, and change nothing else: keep the low bolted platform, the two bolted brackets at either side, the understructure behind, the deck, the bolts, the light, the camera and the grain exactly as they are. The being stays where the creature was, between the two brackets, and about the same size, about the length of a forearm.
>
> It is moving along the platform, low and quick: its whole underside skims the metal with no gap beneath it and no legs beneath it, four limbs splayed outward gripping the platform's surface and edges, and two limbs on one side lifted mid-stride, their pads just clear of the metal.
>
> The body, as in the second image: one low flat oval disc with no head, no face, no eyes, no mouth, no feelers, no neck, no sections, no rim line and no seam; nearly flat on top, never a dome, never a shell of plates. Exactly six jointed limbs leave the rim of the disc like spokes, each ending in a round blunt pad; no claws, no pointed tips. The skin is the dry, matte skin of a living animal: a fine uneven grain, slate grey shading to a dull warm bronze in patches, small pale scratches, dust in the creases where the limbs leave the body, the joints narrow folds of one continuous skin. Not leather, no stitching, no rings at the joints, not cast metal, not a toy, not a figurine, not clay. Not a turtle, not a crab, not a tick, not a spider, not a starfish, not a beetle, not a hand. A real photograph, not a render.

- **`s10e01c02.jpg`** (take 1 placed all four, the limb on the column read as a finger; take 2 drew one on the column face, a tick):

> Edit the first photograph. Replace each small creature in it, the two in the foreground at the column and the two far off by the capsules, with a being of the body shown in the second image, and change nothing else: keep the column, its foot plate, the row of columns behind, the curving plated space, the capsules, the deck, the light, the camera and the grain exactly as they are. Each being stays where its creature was and about the same size.
>
> In the foreground: one being lies flat on the column's foot plate, its underside pressed to the plate with no gap beneath it, its two front limbs raised and laid against the column's metal face, the other four gripping the plate; the other lies flat on the deck beside it, all six limbs low along the deck. The two far off lie flat on the deck beside the capsules.
>
> The body, as in the second image: one low flat oval disc with no head, no face, no eyes, no mouth, no feelers, no neck, no sections, no rim line and no seam; nearly flat on top, never a dome, never a shell of plates. Exactly six jointed limbs leave the rim of the disc like spokes, each ending in a round blunt pad; no claws, no pointed tips. The skin is the dry, matte skin of a living animal: a fine uneven grain, slate grey shading to a dull warm bronze in patches, small pale scratches, dust in the creases where the limbs leave the body, the joints narrow folds of one continuous skin. Not leather, no stitching, no rings at the joints, not cast metal, not a toy, not a figurine, not clay. Not a turtle, not a crab, not a tick, not a spider, not a starfish, not a beetle, not a hand. A real photograph, not a render.

- **`s10e01c05.jpg`** (both takes four flat bodies round the slab; clay figurines):

> Edit the first photograph. Replace each of the four small creatures in it with a being of the body shown in the second image, and change nothing else: keep the sand-coloured module, the hatch, the grey panel, the row of capsules, the deck plates, the thin slab of slate, the light, the camera and the grain exactly as they are. Each being stays where its creature was and about the same size; all four are adults of one size.
>
> Each lies flat on the deck, underside pressed to the plates with no gap beneath it and no legs beneath it, limbs low along the deck. The four are gathered round the slab, each with its rim turned toward it; one rests the pads of its two front limbs on the slab's edge, and the others keep their nearest limbs still on the deck, attending to it.
>
> The body, as in the second image: one low flat oval disc with no head, no face, no eyes, no mouth, no feelers, no neck, no sections, no rim line and no seam; nearly flat on top, never a dome, never a shell of plates. Exactly six jointed limbs leave the rim of the disc like spokes, each ending in a round blunt pad; no claws, no pointed tips. The skin is the dry, matte skin of a living animal: a fine uneven grain, slate grey shading to a dull warm bronze in patches, small pale scratches, dust in the creases where the limbs leave the body, the joints narrow folds of one continuous skin. Not leather, no stitching, no rings at the joints, not cast metal, not a toy, not a figurine, not clay. Not a turtle, not a crab, not a tick, not a spider, not a starfish, not a beetle, not a hand. A real photograph, not a render.

**What the run teaches the next prompt of this people.** The blockout fixes A's outline, which neither text nor an edit of a beetle frame will; and the finish is the whole remaining problem. A smooth short limb comes back soft (a toy) or hard (a machine), never alive, and a finish pass cannot move the finish once an edit has set it. The next attempt changes what the limb is made of in the geometry, not the words about it.

## 2026-11-17 — Season 14 chapter illustrations, Episode 2, the survey's three (Fable, desktop)

The three prompts of record are in `images.md` § 76. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, 16:9, two takes per job. Six jobs, 12 takes, none refused. The edits below were each run on the picked first take, and only the patch named was laid back onto that take.

**`s14e02c01`, edit (take 1 used; patch: the lower middle of the frame, the legs, boots and silt).**

> Edit this photograph and change two things only. First: on the pale silt floor in the foreground there are several animal paw prints with toe marks. Remove every one of them and leave in their place a short line of plain human bootprints, shallow smooth oval dents of a plain sole with no pattern, leading from the crack toward the camera. There must be no animal prints anywhere. Second: the person's boots are brown ankle boots; make them plain smooth dark boots that end at the ankle, with no laces, no elastic panels, no buckles, no heel tab and no tread pattern showing, close-fitting, with the leg of the coverall coming down over the top of each boot so that only the smooth dark foot shows; not wellingtons and not tall boots. Change nothing else at all: keep every face, every pose, the rock, the light, the framing, the colour and the grain exactly as they are. No text anywhere.

**`s14e02c02`, edit (take 1 used; patch: the rock at the upper left).**

> Edit this photograph and change one thing only. On the rock wall at the upper left a thin dark cable or rope hangs down the rock and ends near the edge of the left passage mouth. Remove the cable completely, so that there is only the same bare pale frosted rock where it was. Change nothing else at all: keep the grey cylinder on its base, the small grey lamp, the bootprints, both passage mouths, the far point of light, the framing, the light, the colour and the grain exactly as they are. No text anywhere.

**`s14e02c03`, edit (take 1 used; patch: the three pairs of legs and boots). Take 2 drew taller wellingtons with a rolled cuff.**

> Edit this photograph and change one thing only. The three people are wearing tall wellington boots. Give all three plain smooth dark boots that end at the ankle, with no laces, no elastic panels, no buckles, no heel tab and no tread pattern showing, close-fitting, with the leg of the coverall coming down over the top of each boot so that only the smooth dark foot shows; not wellingtons and not tall boots. The legs of the grey-green coveralls now reach down to the ankle. Change nothing else at all: keep every face, every pose, the rock, the light, the framing, the colour and the grain exactly as they are. No text anywhere.

**What the run teaches.** *Seamless moulded boots with no laces* draws wellingtons or elastic-sided boots; *the leg of the coverall coming down over the top of each boot so that only the smooth dark foot shows* is what worked. A silt floor near a reference frame of the Told draws paw prints even with no being in the prompt; negate *paw prints with toes* whenever silt is in frame. A reference frame's stray cable comes with it.

## 2026-11-17 — Chthonari: the A body as artist's impressions, nine frames filed (Opus, desktop)

At Dermot's *"Artist's impression"* (the Chthonari photographic rounds failed; the A body goes to artist's impressions, painted or technical, never a cartoon) and, for Kettsa, *"Behind the working pair"*. The record and the critic's readings are in `images.md`, under the Orbital Five-O block, *Chthonari body A, applied*, *Impressions*. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, 16:9, two takes per job, a grey blockout of `scripts/blockouts/chthonari-a.py` sent as the only reference (its pose named per frame; `write` was added to the script for these, and `write` and `address` are now seen side-on). Forty-two takes in all, none refused. Filed with `import-image.ps1 -Finish 0`, portraits at `-MaxEdge 1200`, chapters at `-MaxEdge 1600`.

**One medium for the people**: a natural-history reconstruction plate in gouache and watercolour on cream paper, the precedent of `inner-turn.jpg` (31 October 2026). Every prompt is built from the same three blocks, the style, the body and the negatives, with the frame's own scene and pose between them; Kattik's is given in full and the others show their scene and pose only, since the blocks are word for word the same.

### characters/kattik.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `write`.
- **Takes:** Six rounds of two takes. Round 1 (the round-2 blockout as it stood) copied the blockout's pose and its tube limbs, one pad on the slab; round 2 sent the limb sentence above with and without the blockout: with it the limbs became living and the pose stayed the blockout's, without it the body domed and the legs went beneath (a tick, rung 1), so the blockout stays. An edit of round 2's take 1 to raise the working pair drew them arched together over the slab, fingers (rung 2). Round 3 added the sentence on the lifted pair and still copied the blockout's pose. Round 4, the new `write` pose: take 1 filed; take 2 domed with legs beneath, a tick.

> A natural-history reconstruction plate, painted in gouache and watercolour on warm cream paper by a Survey Archive scientific illustrator, realistic and anatomically careful, with the restraint of a museum plate: fine confident brushwork, visible paper grain, muted natural colour, one soft light from the upper left and a soft cast shadow, the painted surroundings fading out into bare cream paper toward the edges. 16:9 landscape. The attached grey image is a shape study only: copy from it the body's plan only, the flat disc lying on the ground and six limbs leaving its rim like spokes; take nothing else from it, not its pose, its tube-like limbs, its grey finish, its floor, its slab or its lighting, and pose the limbs as this plate describes.
>
> The plate shows Kattik, a cutter and the log-keeper of a contractor crew, at work on the bare plating of the understructure beneath a space habitat's dock ring: seen from a little above and to one side, the whole body in view, on a patch of clean dark blue-grey deck plate with flush round fastenings, a plain blue-grey column painted loosely behind. On the plate lies a thin flat slab of dull dark slate stone, plain and unmarked, no longer than the body.
>
> The being is a Chthonari, a small person about the length of a human forearm. The whole body is one low, broad, flat oval disc, nearly flat on top, lying flat on its underside on the surface with no gap and no legs beneath it. There is no head, no face, no neck, no eyes and no mouth, and the disc is one single piece: no segments, no plates, no seam or groove running round its rim. Its hard skin is dull slate with a bronze cast, matte, finely pitted and worn paler at the rim, like weathered hide over bone. From the rim, spaced like the spokes of a wheel, six short jointed limbs reach outward and lie low along the surface, gripping it, each limb a living limb of three slightly unequal, gently curved segments under one continuous skin, thicker at the root where it grows out of the disc's edge and tapering a little to a plain blunt pad no wider than the limb, the joints smooth and slightly creased like an insect's, never tubes, pipe sections, knobs or balls; a fine row of tiny bronze sensing nodules runs along the upper side of each limb. The two neighbouring limbs on the side facing the slab are lifted just clear of the deck and reach forward over the slab's near edge, pads a finger's breadth above the stone, about to write on it by touch; the other four are pressed flat to the deck plate. The whole rim is turned toward the slab: plainly attending to the work. The lifted pair is held low and nearly straight, reaching forward from the rim with the pads tipped down; never arched, no high knee, the two not side by side like fingers but a little apart, each following its own spoke.
>
> No crab, spider, tick, turtle, beetle, woodlouse, starfish or octopus; no domed shell, no carapace plates or scutes, no legs underneath the body, no pointed tips, no claws, no pincers, no fingers, no hands. Not a cartoon, comic, anime, clip art, children's book, mascot, cute style, outline-and-flat-fill drawing, toy, plush, clay, rubber, robot, cast metal, machine or 3D render; no exaggerated proportion. No text, labels, numerals, scale bar, lettering or signature anywhere.

  The edit tried and not kept (input: round 2's take 1 with the blockout):

> Edit this gouache natural-history plate. Change only two limbs: the two neighbouring limbs on the front edge of the disc, the ones nearest the slate slab (the front-centre limb and the front-left one beside it). Lift both of them up off the deck, each bending upward at its middle joint, and bring them together over the slab so that both blunt pads are poised just above the slab's surface, close together, as one about to write on it by touch. They stay attached at the disc's rim where they are now, the same living limbs with the same skin and the same row of small bronze nodules. Keep the other four limbs pressed flat to the deck exactly as they are, and keep the disc, the slab, the column, the deck, the paper, the brushwork, the light and the colour exactly as they are. The painting stays a careful scientific illustration in gouache: no cartoon, no outline drawing, no claws, no fingers, no hands, no text.

### characters/tikket.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** the 17 November blockout as it stood (`study`).
- **Takes:** One round of two takes (round 3 of the people's run). Take 1 filed: a limb laid up the column's face. Take 2 put a limb behind the column.

> The plate shows Tikket, an apprentice cutter, a little smaller and paler than its crewmates, at the foot of a heavy structural mount in the understructure beneath a space habitat's dock ring: seen from a little above and to one side, the whole body in view. The mount is a plain square column of dark blue-grey metal standing on a broad flat foot plate fixed down by four large flush round fastenings; the body lies on the foot plate, close against the column.
>
> (the body block, with:) Four limbs are spread flat and pressed to the foot plate; the two limbs nearest the column are lifted and laid flat against its upright face, pads to the metal. Nothing moves: the whole body is attending to the column, listening through it.

### characters/tsikk.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `address`.
- **Takes:** Two rounds. Round 3 (the old blockout) copied its pose, no pair raised. Round 4, `address`: take 1 filed, the front pair lifted, one high; take 2 splayed, no pair raised, a crab at a glance.

> The plate shows Tsikk, a cutter, alone in the middle of a wide expanse of clean dark blue-grey deck plating in the understructure beneath a space habitat's dock ring, seen from a little above, the body small in the middle of the plate; plain columns and beams are painted loosely around it, and overhead the ring's curve rises into brighter light from no visible fitting.
>
> (the body block, with:) Four limbs grip the plating; the two limbs at the front are lifted just clear of the deck and held poised over it, pads down, about to strike, as one who speaks to the whole structure through the plating and expects to be heard. The lifted pair is held low and nearly straight, reaching forward from the rim with the pads tipped down; never arched, no high knee, the two not side by side like fingers but a little apart, each following its own spoke.

### characters/tekka.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `address`.
- **Takes:** Three rounds. Rounds 1 and 2 (`run`) drew an even star of spokes across a member narrower than the disc, limbs reaching into air (rung 1, a wheel), and round 1 take 2 a tick walking on legs beneath; round 3 (`address`, the member three times the body's width): take 1 filed.

> The plate shows Tekka, a cutter and a practised tunnel runner, moving along the flat top of a broad horizontal structural member of plain dark blue-grey metal, as wide as a walkway, three times the width of the body, so that every limb rests on it, in the understructure beneath a space habitat's dock ring, seen from a little above and to one side; the member runs across the plate and away into the soft distance, plain columns painted loosely behind.
>
> (the body block, with:) The disc lies flat on the member's top face, never raised on its limbs; four limbs lie low on the same face, gripping it, none hanging over its edge. The two front limbs are lifted and reach forward along the member toward the next hold, pads tipped down, as one about to set them down: a sure, course-reading gait, the rim turned along the way ahead.

### characters/kettsa.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `address`.
- **Takes:** Two rounds and an edit. Round 1 drew the field shell as one lid with a ring of piping: a robot vacuum or a pan (rung 1), and no pair raised. Round 2 (the shell as sections stopping short of the rim; the tab placed between the lifted pair's roots): both takes raised the pair and seated the tab right, but the sections met in one line down the middle, a beetle's wing-case seam. One edit of round 2's take 1 made the shell one piece: take 1 filed (the two takes are near identical).

> The plate shows Kettsa, a Senior Officer of the Star Rangers Engineering Corps, on duty on the plain pale deck plating of a ship's plant corridor, at the foot of a long smooth pale sealed housing, seen from a little above and to one side, the whole body in view. On duty Kettsa wears the Corps' field shell as it is fitted to this body: three or four thin matte graphite-grey sections laid close over the top of the disc and following its gentle curve, like fitted leather, each section edged with a fine steel-grey line of piping where it meets the next; the shell stops well short of the rim, so a broad band of the slate-bronze hide shows all round it, and the limbs and the underside stay bare. One small copper rank tab, five short plain raised bars and no lettering, is seated at the shell's front edge, directly behind the root of the two lifted working limbs.
>
> (the body block, with:) The two limbs on the side facing the housing are lifted just clear of the deck and reach toward the seam where the housing meets the deck, pads poised a finger's breadth above the metal; the other four are pressed flat to the plating, listening. The whole rim is turned toward the seam: reading the structure, plainly attending. The lifted pair is held low and nearly straight, reaching forward from the rim with the pads tipped down; never arched, no high knee, the two not side by side like fingers but a little apart, each following its own spoke.
>
> The copper tab sits at the front, between the two lifted limbs' roots, not at the back or the side; the shell is plain fitted clothing, never a lid, a pan or a machine casing.

  The edit (input: round 2's take 1):

> Edit this gouache natural-history plate. Change only the graphite shell on top of the disc: make it one single smooth piece with no line, seam or groove across it or down its middle, its edge still trimmed with the one fine steel-grey line of piping, and the band of slate-bronze hide still showing all round it. Keep the copper tab exactly where it is, at the front edge of the shell between the roots of the two raised limbs. Keep everything else exactly as it is: the disc, all six limbs and their pose, the housing, the deck, the paper, the brushwork, the light and the colour. No text, no cartoon.

### characters/akkit.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `address`.
- **Takes:** One round. Take 2 filed, the working pair laid flat against the cut wall. Take 1 domed with legs beneath, a tick.

> The plate shows Akkit, a resident of a Chthonari burrow settlement and once a fold-scaffold engineer, in a narrow channel cut through dark metal-bearing rock, its walls carrying the parallel marks of the cutting tools, in dim warm amber light, seen from a little above, the whole body in view; beside it on the channel floor stands a small plain sealed pale housing.
>
> (the body block, with:) Four limbs grip the channel floor; the two limbs on the side facing the channel wall are lifted and reach to the wall, pads laid flat against the tool-marked rock at the height of the disc, as if reading the cut. The whole rim is turned toward the wall: plainly attending. The lifted pair is held low and nearly straight, reaching forward from the rim with the pads tipped down; never arched, no high knee, the two not side by side like fingers but a little apart, each following its own spoke.

### characters/pekkat.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `address`.
- **Takes:** One round. Take 2 filed, both pads on the rib, the bead rows along each limb. Take 1 reached toward the rib without touching it.

> The plate shows Pekkat, a mathematician of the Undersong, in a burrow chamber among cut ribs of dark nickel-iron rising from the rock floor, under dim amber light, seen from a little above and to one side, the whole body in view beside the cut edge of one rib.
>
> (the body block, with:) The two limbs nearest the rib are lifted and reach to it, one pad resting lightly on the rib's cut edge and the other a finger's breadth from it; the other four are pressed flat to the rock floor. The whole rim is turned toward the rib: attending, as one who listens to a ratio. The lifted pair is held low and nearly straight, reaching forward from the rim with the pads tipped down; never arched, no high knee, the two not side by side like fingers but a little apart, each following its own spoke.
>
> On this plate the sensing organs are shown prominently: rows of small translucent bronze-brown sensing organs, like close-set beads, set in fine grooves along each limb segment.

### chapters/s10e01c02.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `address`.
- **Takes:** Two rounds. Round 1: both takes drew the near pair domed with legs beneath, ticks. Round 2 added the extra sentence below: take 1 filed; take 2 put a row of lit strip lights in the ceiling.

> A painted reconstruction of a scene, as a full plate: the understructure beneath the dock ring of Eden, a rotating space habitat, at the end of a working shift, seen from low down near the deck. A long, low working space of large plain dark blue-grey metal deck plates with flush round fastenings and a low plated ceiling, curving gently upward into the distance. In the middle of the plate stands a heavy structural mount, a plain square column of the same blue-grey metal as tall as a person, on a broad flat foot plate fixed down by four large flush round fastenings; three more identical mounts stand in a row behind it, growing smaller with distance. Two small beings are at the near mount: the first, a little smaller and paler, lies on the mount's foot plate close against the column; the second lies on the deck plating a little to the right, its rim turned toward the first. Far off down the row, small and soft, two more of them wait beside a neat row of low plain sealed grey capsules.
>
> (the body block, with:) The first being has four limbs pressed to the foot plate and its two nearest limbs laid flat against the column's face, listening through it. The second has its two front limbs lifted and set down flat on the deck plating toward the first, pads to the metal, as one saying something through the deck; the other four grip the plating. The two are plainly attending to each other through the metal.
>
> Exactly four beings in the plate, two near and two far; every one is the same low flat disc lying flat on the metal with no gap beneath it, its six limbs spread out from its rim along the surface like spokes, never folded beneath it and never raising it up; no dome, no beetle, no tick. Nothing drawn passes between them through the air.

### chapters/s10e01c05.jpg — re-filed 17 November 2026 (artist's impression)

- **Blockout pose:** `address`.
- **Takes:** One round and an edit. Take 1 filed; take 2 drew no one writing. An edit of take 1 to lay the writer's pads on the slab changed almost nothing, and the unedited take is the one filed.

> A painted reconstruction of a scene, as a full plate: inside a small sealed contractors' module set down beneath the dock ring of Eden, a rotating space habitat, on a crew's last shift, seen from low down near the floor. Plain sand-coloured walls; dark blue-grey deck plates with flush round fastenings; against the far wall a neat row of six low sealed tool capsules of dull grey metal with rounded ends, packed; a closed plain flush hatch many times their height behind; one hard working light from the left. In the middle of the floor lies a thin flat slab of dull dark slate stone, plain and unmarked. Four small beings of the same size, a little different in tone within slate and bronze, lie on the floor around the slab, well apart, none overlapping: one at the slab, one at the left, one at the right and one beyond.
>
> (the body block, with:) The one at the slab has its two front limbs lifted and laid on the slab's edge, writing a line in the record by touch; the other three each have their rim turned toward the slab and their two front limbs lifted a little toward it, the other limbs pressed flat to the floor. All four attend to the one line going into the record. The lifted pair is held low and nearly straight, reaching forward from the rim with the pads tipped down; never arched, no high knee, the two not side by side like fingers but a little apart, each following its own spoke.
>
> Exactly four beings, every one the same flat disc with six spoke limbs.

  The edit tried and not kept (input: take 1):

> Edit this gouache reconstruction plate. Change only the being nearest the camera at the left, the one beside the slate slab: lift its two limbs on the side facing the slab just clear of the floor and lay their blunt pads on the slab's near edge, a little apart, as one writing a line on the slab by touch; its other four limbs stay pressed flat to the floor and its flat disc stays lying flat. Turn the other three beings' nearest limbs a little toward the slab, so all four attend to it, without moving their discs. Keep everything else exactly as it is: the walls, the hatch, the capsules, the floor, the slab, the paper, the brushwork, the light and the colour. Every being stays one low flat disc on the floor with six spoke limbs, never raised on its legs. No text, no cartoon.

**What the run teaches the next prompt of this people.** The blockout's pose wins over the words: a pose the prompt asks for and the blockout does not show is not drawn, so the pose goes into the blockout first. Without the blockout the painting domes the disc and puts the legs beneath it, as the photographs did. A shell drawn whole over the disc reads as a lid, and in sections as a beetle's wing cases; one piece stopping short of the rim holds. Painted, the limbs that came back as toys and robots in the photographs read as a creature's, though they stay a little tubular.

## 2026-11-17 — Season 11 small fixes, and the two Told portraits' rooms (Opus, desktop)

At Dermot's *"and the small fixes for season 11, please"*. The three chapter fixes (`s11e01c03`, `s11e01c04`, `s11e01c05`) were made by hand and have no prompt; what was done is in `images.md` § 74, *The small fixes*. The room edits below are `scripts/image-edit.js`, `gemini-3.1-flash-image`, 2K, 16:9, two takes each, the filed portrait sent first. Eight takes, none refused, **none filed** (`images.md`, the `teddy.jpg` and `stone-first.jpg` entries). Prompts verbatim.

### characters/teddy.jpg — room, round 1 (with `chapters/s11e02c03.jpg`)

> Edit the first image. Keep its composition, its camera position and framing exactly, and keep the grey-furred being exactly as it is: same body, same fur, same pose, same position and size in the frame, untouched. Keep the plain grey cylinder standing on the floor where it is, the rock arch and passage behind the being where they are, and the line of tracks in the floor where they are. Change only the room's surfaces and light, so that the room looks like a real photograph of a real limestone cave taken with available light, matching the look of the second image: pale frosted mineral rock with real crumbly, pitted, chalky texture and natural cracks, a floor of pale fine silt, and the light coming only from shelves of fungus glowing soft amber and blue-green on the rock, with the far parts of the cave falling into real darkness. Fine natural film grain, a real lens, ordinary depth of field with the rock near and far both sharp. Not a 3D render, not a game scene, not a film set, not clay, not painted, no smooth plastic rock, no glossy wet sheen, no orange-brown sculpted rock, no added people, no lamps, no text.

### characters/stone-first.jpg — room, round 1 (with `chapters/s11e02c03.jpg`)

> Edit the first image. Keep its composition, its camera position and framing exactly, and keep the grey-furred being exactly as it is: same body, same fur, same pose, same position and size in the frame, untouched. Keep the single loose stone on the floor where it is, the lip of the shelving floor where it drops away into the dark pit at the bottom of the frame, and the openings of the cave behind where they are. Change only the room's surfaces and light, so that the room looks like a real photograph of a real limestone cave taken with available light, matching the look of the second image: pale frosted mineral rock with real crumbly, pitted, chalky texture and natural cracks, a ledge of pale fine silt, and the light coming only from small shelves of fungus glowing soft amber and blue-green on the rock, with the deep parts of the cave falling into real darkness. Fine natural film grain, a real lens, ordinary depth of field with the rock near and far both sharp. Not a 3D render, not a game scene, not a film set, not clay, not painted, no smooth sculpted rock, no green slime, no glossy sheen, no added people, no lamps, no text.

### Round 2, both (with `chapters/s11e01c05.jpg` in place of `s11e02c03.jpg`)

Each round 1 prompt with three changes: *matching the look of the second image* became *matching the rock of the second image exactly, a real cave wall photographed on a field trip*; the depth-of-field clause became *deep focus at f/8 with everything sharp from the nearest floor to the far wall, no blur in the foreground, the camera at standing eye height*; and the negatives open with *Not a miniature, not tilt-shift, not a theme-park or show-cave sculpture, no rounded sculpted rock forms*.

**What the run teaches.** Both rounds re-coloured the render's rock and kept its forms; the forms are what read as a render. A room is made photographic by replacing it, not by editing it.

## 2026-11-17 — Season 13 chapter illustrations, all four (Fable, desktop)

`scripts/image-edit.js`, `gemini-3.1-flash-image`, 16:9 at 2K, two takes a round. The prompts of record are in `images.md` § 75; what follows is the edits and the handwork. Ten images; nothing refused.

### chapters/s13e01c01.jpg — filed 17 November 2026

Plate: `F:\108IRLEY\DSC_0941.JPG`, cropped to 4608×2592 from row 240 and sent at 2048×1152. The edit prompt is the prompt of record. Take 1 of 2 used. Handwork (OpenCV, NumPy), at 3200×1800: the take registered to the plate (SIFT, ratio 0.7, RANSAC homography, 121 inliers of 143); a mask from the blurred difference of the two (threshold 22, opened, dilated 41 px, closed, islands under 6,000 px dropped), feathered at 14 px, so that only the building, the fence's strip and the path beside it come from the take; on his pixels, a bench on the beach and a white object on the rocks inpainted, a sail and two small boats covered with the sea 100 px to the right and 22 px below; light grain laid back on the healed patches. Grade, whole frame alike: to linear light, exposure times 0.50 at the top of the sky rising to 0.72 by 45 per cent of the height and below, blue times 1.06, red times 0.94, back to gamma, saturation times 0.72, contrast times 1.12 about the middle. Then cropped to 2496×1404 from (704, 64) and reduced to 1600×900. A first attempt to pull the far shore's pale building marks down to the land's tone left a visible block and was dropped; the marks stay.

### chapters/s13e01c02.jpg — filed 17 November 2026

Generation take 1 of 2, then two edits.

First edit (take 1 of 2 used):

> Edit this photograph of a long plain grey hall and keep it exactly as it is in every respect except the four changes below. Keep the walls, the floor, the ceiling, their rough matte grey surface, the shut doors along both walls, the darkness at the far end, the framing, the warm light from the left, the colour and the grain, all untouched.
>
> 1. Remove the oil lamp at the bottom left corner completely, with its glass chimney, its flame and its base, and put plain grey floor and wall there. The warm light still comes from the left, from a lamp that is out of the picture.
>
> 2. The open door on the right: remove the hinges and the raised moulded frame round the doorway. The doorway is now only a plain tall opening cut cleanly through the grey wall, with no frame, no moulding and no trim, its edges the same grey material as the wall. The open door itself is a plain flat grey slab with no hinges, no handle and no fittings, standing swung inward into the dark room so that only its near edge shows inside the opening. The room beyond stays completely dark.
>
> 3. Replace the large grey pill-shaped capsule on the floor with a smaller and plainer object lying in the same place, on the floor at the foot of the open doorway, just inside it, against the wall: a plain sealed case about the length of a forearm, a flat-sided oblong of smooth matte mid-grey with softly rounded edges and corners, like a long smooth river stone that has been squared, with one fine straight seam along its side and nothing else on it: no handle, no latches, no hinges, no lid, no buttons, no lights, no markings. It lies flat and still and casts a soft shadow away from the lamp.
>
> 4. Darken the picture a little overall so the light falls away sooner: the near walls and the open doorway hold the warm light, and the hall beyond the second pair of doors goes to black.
>
> Add no people, no figures, no shadows of people, no lamps, no lights, no lettering and nothing else.

Second edit, of that result (take 2 of 2 used):

> Edit this photograph of a long plain grey hall with one open door and keep it exactly as it is in every respect except the one change below. Keep the walls, the floor, the ceiling, the shut doors, the open door, the darkness, the warm light from the left, the framing, the colour and the grain, all untouched.
>
> Move the small grey case. It must no longer lie out on the hall floor in front of the doorway: put plain bare grey floor there, with the same light on it. Instead the same small plain grey case now lies inside the open doorway, on the floor of the dark room just past the threshold, pushed up against the foot of the wall on the right-hand side of the opening, so that it is seen through the doorway, small, with only its near end and top catching the last of the warm light and the rest of it going into shadow. It is the same object: a plain sealed flat-sided oblong of smooth matte grey about the length of a forearm with softly rounded edges, no handle, no latches, no lights, no markings. The room beyond it stays completely dark.
>
> Add no people, no figures, no lamps, no lights, no lettering and nothing else.

Filed through `scripts/photo-finish.py` at strength 1, 1600 px.

### chapters/s13e02c01.jpg — filed 17 November 2026

`F:\130DUNLG\DSC_6941.JPG`, cropped to 4608×2592 from row 150. By hand: the top-left 270×90 px (a headland with a lighthouse on the horizon) covered with the mirrored 270 px of sea, horizon and sky to its right, feathered over 14 px at the join and 12 px at the foot. Reduced to 1600×900. No generation, no grade, no finish.

### chapters/s13e02c02.jpg — filed 17 November 2026

Generation take 1 of 2, as generated, with three references. Filed through `scripts/photo-finish.py` at strength 1, 1600 px. No edit.

## 2026-11-17 — Season 12 chapter illustrations, Episode 1, the six tellings below the roof (Fable, desktop)

The record is in `story-bible/images.md` § 77. All six frames are generated; none is on a plate of his. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per prompt. Filed by `import-image.ps1 -MaxEdge 1600` at finish strength 1. Twenty-three images: twelve first-pass takes, one second-round take (C03; the other take of that round was a *service unavailable* error), two third-round takes (C03), eight edit takes. Nothing was refused by the filter. The generation prompts of record are in § 77; the edit prompts and the prompts not used are here.

### chapters/s12e01c01.jpg — filed 17 November 2026
- **Kind:** generated with one reference (`characters/keeps-a-hand-on-it.jpg`), take 2 of 2, one edit (two takes, take 2 used), then the shape's outline by hand.
- **Edit prompt** (sent with take 2):
  > Edit this photograph and change only one thing: the dark upright thing standing on the silt. It is not an object and has no surface. Make it a flat patch of plain darkness, like a hole cut in the picture: perfectly dark and even all over, with no shading, no highlight, no sheen, no texture, no roundness and no thickness, and with a clean still outline: a softly rounded top that is narrower than the rest, widening gently and evenly to a broad heavy foot, the outline of a heavy upright body with no head, neck, ears, arms or legs to be made out. Keep it the same height and in the same place. It throws no shadow on the silt and the silt at its foot is smooth and evenly lit. Also bring the far wall and the foreground into the same sharp focus as the middle of the picture. Keep everything else exactly as it is: the framing, the rock, the fungus, the silt, the stones, the grain and the colour. No text, no lettering, no new objects, no new light. Not a standing stone, not a pillar, not a post, not a bullet, not a figure in a cloak, not a ghost.
- **By hand:** the dark shape of `s12e01c06` (below) was taken as a mask from its edited take (luminance under 40 after a 4 px blur, flood-filled from its middle, closed and smoothed), scaled to 1.08 times the height of the edit's dark post so as to cover it, and laid over it in flat near-black with a one-pixel soft edge. No other pixel was changed.

### chapters/s12e01c02.jpg — filed 17 November 2026
- **Kind:** generated with two references (`chapters/s11e02c03.jpg`, `characters/stone-first.jpg`), take 2 of 2, as generated.

### chapters/s12e01c03.jpg — filed 17 November 2026
- **Kind:** generated with three references (`chapters/s11e02c03.jpg`, `characters/went-round.jpg`, `characters/stone-first.jpg`), third prompt, take 2 of 2, as generated.
- **First prompt, not used** (references `chapters/s11e02c03.jpg`, `characters/stone-first.jpg`, `characters/went-round.jpg`; take 1 put the far one on all fours, take 2 crouched it like a cub on wet shining rock):
  > Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape, taken at standing height from partway down a broad slope of boulders inside a cavern, looking up the slope to a level floor of pale silt at its top, nothing posed: close at the right of the frame, seen from behind, the broad grey back of a large being that has stopped among the boulders on its way up, one plain stone newly set down on a flat boulder beside it; up on the silt at the top of the slope, in the middle distance at the left, a second being of the same people, leaner and darker, bends from the hips with one broad hand on a rock at the edge of the silt, moving it. The place is deep underground on Fliade, a cold rocky world whose life is in its caverns, in the year 2833 UCSD, eight centuries from now. This is the top of the shelving, below the line: the place just beyond a narrow crack in the rock where one of this people always stands. The first reference image shows the place at the top of the slope: keep its pale silt floor, its rock wall, its boulders and its shelves of amber and blue-green fungus, and take nothing else from it: the person in it is not in this picture and there is no lamp. Each of the two is a large heavy being of a non-human people that feels its way in the dark, a full-grown adult: a heavy pear-shaped body widest at the hips, narrow sloping shoulders, long arms and short thick legs; a small blunt head set low with no neck and no external ears at all; very small dark eyes almost hidden in the coat; a wide fan of long stiff pale whiskers round the blunt muzzle and over the brow; a coarse uneven grey coat, long and shaggy on the chest, shoulders and back, shorter on the arms and legs, damp and matted with pale silt at the feet; broad hands and feet with thick blunt digits and bare pale leathery pads. It stands upright on its two short legs, taller than a grown human and twice as broad, with the weight of a large wild animal, and it is a real living person, photographed, hair uneven and a little dirty. The near one is old, broad and heavy, the coat a mid grey with a small silvery patch at the crown; it fills the right third of the frame from the hips up, seen from directly behind so that no face shows, its head lifted a little toward the one above. The second reference image shows this being: keep its body and coat only. The far one is leaner than most adults and its coat is a darker slate grey; it is small in the frame, about a quarter of the frame's height, side-on, bent forward from the hips with its head down, one long arm reaching down to a plain rough rock the size of a head at the very edge of the silt, pushing it a hand's width across the ground. Its face is turned down to the rock and is in shadow. The third reference image shows this being: keep its body and darker coat only, nothing of its setting. On the silt near the far one's feet lie three plain stones, a little apart. Between the two the slope is a fall of pale loose boulders and slabs, each from the size of a head to the size of the beings themselves. The rock is pale mineral stone, damp; here and there on it grow shelves of real bioluminescent fungus that give a soft steady glow, amber on one side and blue-green on the other. The floor is pale mineral silt. The only light is the fungus: soft, even, from no one place. No lamp anywhere. Quiet and ordinary and kind: one of them knocking and the other answering, as neighbours do. Palette: pale silt and pale rock, mid grey and slate grey coats, amber and blue-green. Photographed, not rendered: a real camera in a real cave, deep focus, high-ISO grain heavier in the shadows, slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: looking at the camera, posed portrait; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; screens, monitors, holograms, projected light, glowing displays, tablets, phones; dials, gauges, knobs, switches, exposed cables, antennae, tripods; helmets, visors, goggles, head torches, climbing ropes, harnesses, carabiners, hard hats, backpacks with buckles, present-day outdoor jackets, jeans, trainers, wellingtons, laced hiking boots, ankle boots, wristwatches, spectacles, earbuds; electric light fittings in the rock, cables on the floor; weapons. bear, bear cub, panda, black-and-white colouring, gorilla, ape, chimpanzee, monkey, sloth, yeti, sasquatch, troll, human; teddy bear toy, plush, puppet, cartoon, mascot, costume, fur suit; external ears, large round eyes, eye rings, wet nose leather, claws bared, fangs, menace, a threat posture, a being on all fours, clothing or tools on the being, a small young one, a cub, a child. A close view of either being's face, a face turned to the camera, a third being, a person, a lamp, a dark figure, a stone held up, a stone thrown, stacked stones, a cairn, the cylinder instrument. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, a tabletop model, a diorama, shallow depth of field, a view from above. Landscape orientation.
- **Second prompt, not used** (the same with the far one *a full-grown adult exactly as large as the near one … standing on its two legs and bent forward only a little* and the rock *dry, matte and dusty*; one take returned, the far one walking bent with a hand down, an ape's gait):
  > Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape, taken at standing height from partway down a broad slope of boulders inside a cavern, looking up the slope to a level floor of pale silt at its top, nothing posed: close at the right of the frame, seen from behind, the broad grey back of a large being that has stopped among the boulders on its way up, one plain stone newly set down on a flat boulder beside it; up on the silt at the top of the slope, in the middle distance at the left, a second being of the same people, leaner and darker, bends from the hips with one broad hand on a rock at the edge of the silt, moving it. The place is deep underground on Fliade, a cold rocky world whose life is in its caverns, in the year 2833 UCSD, eight centuries from now. This is the top of the shelving, below the line: the place just beyond a narrow crack in the rock where one of this people always stands. The first reference image shows the place at the top of the slope: keep its pale silt floor, its rock wall, its boulders and its shelves of amber and blue-green fungus, and take nothing else from it: the person in it is not in this picture and there is no lamp. Each of the two is a large heavy being of a non-human people that feels its way in the dark, a full-grown adult: a heavy pear-shaped body widest at the hips, narrow sloping shoulders, long arms and short thick legs; a small blunt head set low with no neck and no external ears at all; very small dark eyes almost hidden in the coat; a wide fan of long stiff pale whiskers round the blunt muzzle and over the brow; a coarse uneven grey coat, long and shaggy on the chest, shoulders and back, shorter on the arms and legs, damp and matted with pale silt at the feet; broad hands and feet with thick blunt digits and bare pale leathery pads. It stands upright on its two short legs, taller than a grown human and twice as broad, with the weight of a large wild animal, and it is a real living person, photographed, hair uneven and a little dirty. The near one is old, broad and heavy, the coat a mid grey with a small silvery patch at the crown; it fills the right third of the frame from the hips up, seen from directly behind so that no face shows, its head lifted a little toward the one above. The second reference image shows this being: keep its body and coat only. The far one is leaner than most adults and its coat is a darker slate grey; it is a full-grown adult exactly as large as the near one, and only looks smaller because it is further off: about a third of the frame's height, side-on to the camera, standing on its two legs and bent forward only a little from the hips, its head down, one long arm reaching down to the top of a plain rough rock that stands as high as its own knee at the very edge of the silt, pushing it a hand's width across the ground. It is not crouching, not on all fours and not a small one. Its face is turned down to the rock and is in shadow. The third reference image shows this being: keep its body and darker coat only, nothing of its setting. On the silt near the far one's feet lie three plain stones, a little apart. Between the two the slope is a fall of pale loose boulders and slabs, each from the size of a head to the size of the beings themselves, dry, matte and dusty with a fine crust of frost, not wet and not shiny. The rock is pale mineral stone, damp; here and there on it grow shelves of real bioluminescent fungus that give a soft steady glow, amber on one side and blue-green on the other. The floor is pale mineral silt. The only light is the fungus: soft, even, from no one place. No lamp anywhere. Quiet and ordinary and kind: one of them knocking and the other answering, as neighbours do. Palette: pale silt and pale rock, mid grey and slate grey coats, amber and blue-green. Photographed, not rendered: a real camera in a real cave, deep focus, high-ISO grain heavier in the shadows, slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: looking at the camera, posed portrait; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; screens, monitors, holograms, projected light, glowing displays, tablets, phones; dials, gauges, knobs, switches, exposed cables, antennae, tripods; helmets, visors, goggles, head torches, climbing ropes, harnesses, carabiners, hard hats, backpacks with buckles, present-day outdoor jackets, jeans, trainers, wellingtons, laced hiking boots, ankle boots, wristwatches, spectacles, earbuds; electric light fittings in the rock, cables on the floor; weapons. bear, bear cub, panda, black-and-white colouring, gorilla, ape, chimpanzee, monkey, sloth, yeti, sasquatch, troll, human; teddy bear toy, plush, puppet, cartoon, mascot, costume, fur suit; external ears, large round eyes, eye rings, wet nose leather, claws bared, fangs, menace, a threat posture, a being on all fours, clothing or tools on the being, a small young one, a cub, a child. A close view of either being's face, a face turned to the camera, a third being, a person, a lamp, a dark figure, a stone held up, a stone thrown, stacked stones, a cairn, the cylinder instrument. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, a tabletop model, a diorama, shallow depth of field, a view from above. Landscape orientation.
- **Edit of the second-round take, not used** (both takes drew the far one as a gorilla, standing):
  > Edit this photograph and change only one thing: the dark grey furred being in the distance at the left. It is a full-grown adult of the same people as the pale one in the foreground and exactly as tall and as heavy, and it stands fully upright on its two short legs on the level silt, the way the pale one stands: a heavy pear-shaped body widest at the hips, narrow sloping shoulders, a small blunt head set low with no neck and no ears, a coarse dark slate-grey coat. It has just straightened up: one long arm still reaches down at its side so that its broad hand rests on top of a rough rock that stands knee-high beside it at the edge of the silt, and its head is turned toward the pale one below. It is not walking, not crouching, not bent over and not on all fours. Keep it in the same place and about a third of the height of the picture. Keep everything else exactly as it is: the pale being seen from behind in the foreground, the stone on the boulder beside it, the boulders, the rock wall, the fungus, the silt and the stones on it, the framing, the grain and the colour. No text, no lettering, no new objects, no new light. Not an ape, not a gorilla, not a bear, not a sloth, not a cub.

### chapters/s12e01c04.jpg — filed 17 November 2026
- **Kind:** generated with two references (`chapters/s11e01c03.jpg`, `characters/went-round.jpg`), take 1 of 2, one edit (two takes, take 1 used), then the light's two colours by hand.
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only two things. First, the glowing upright thing in the middle of the ring: it is not a lamp, not a capsule and not a solid object. Make it a patch of gathered light with no surface: the very same soft amber as the glowing fungus on the walls and no brighter, even all through, with a soft edge that fades into the air over a hand's width, and the outline of a heavy upright body the same size as the beings round it: a softly rounded top that is narrower than the rest, widening gently to a broad foot, with no head, neck, ears, arms or legs to be made out, no face, no flame, no rays. It lights the silt at its foot only a little. Second, the rock wall at the left of the picture has gone dim: its shelves of fungus on the left side are dull, grey and unlit, while the fungus at the right still glows as it does now. Keep everything else exactly as it is: every one of the furred beings, their coats and poses, the darker one walking round the light, the boulders, the silt, the framing, the grain and the colour. No text, no lettering, no new objects. Not a lamp, not a lantern, not a candle, not a crystal, not a glass capsule, not a fire, not a ghost, not an angel.
- **By hand:** inside the box of the light (pixels brighter than 150 to 210 of 255, blurred 6 px), each pixel's own brightness was recoloured, amber (1.00, 0.72, 0.36) at the shape's left running smoothly to blue-green (0.52, 0.93, 0.84) at its right, at 85 per cent, so that its glow on the silt takes the two colours too. Nothing outside the box was changed.

### chapters/s12e01c05.jpg — filed 17 November 2026
- **Kind:** generated with two references (`chapters/s11e01c05.jpg`, `characters/stone-first.jpg`), take 1 of 2, as generated.

### chapters/s12e01c06.jpg — filed 17 November 2026
- **Kind:** generated with three references (`chapters/s11e02c03.jpg`, `characters/aravena.jpg`, `characters/stone-first.jpg`), take 2 of 2, one edit (two takes, take 1 used).
- **Edit prompt** (sent with take 2):
  > Edit this photograph and change only one thing: the silt in front of the tall dark shape at the left. The dark shape throws no shadow at all. Remove the dark patch of shadow that lies on the silt between the dark shape and the camera, so that the silt all round its foot and in front of it is evenly lit by the lamp, pale and bare, exactly like the lit silt in the middle of the picture. The long black shadow of the grey furred being at the right stays exactly as it is. Keep everything else exactly as it is: the dark shape with its thin bright edge, the furred being seen from behind, the small person with the stone and the lamp, the rock, the fungus, the stones, the framing, the grain and the colour. No text, no lettering, no new objects, no new light.

## 2026-11-17 — Season 14 chapter illustrations, Episode 1, the four below the line (Fable, desktop)

The four prompts of record are in `images.md` § 78. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, through `scripts/image-edit.js`, 2K, 16:9, two takes per job. Seven jobs, 15 takes returned of 16 asked (one *503, high demand*), none refused.

**`s14e01c02`, first round, not used** (references: `story-bible/reference-art/told-body-2026-11-17.jpg` `src/images/characters/stone-first.jpg` `src/images/characters/keeps-a-hand-on-it.jpg`). Both takes: an animated film's warm, a haloed plump figure, the rest stretched out like seals.

> Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape, a wide view taken at standing height from far back at the edge of a broad warm cavern chamber, nothing posed: far across the chamber, in the amber light, one large grey-furred being stands upright and still in the open, and all round it on the floor others of its kind lie at rest, eight or nine of them, each one a long low shaggy shape on the silt with its small head lifted and turned toward the one who stands. The place is deep underground on Fliade, a cold rocky world whose life is in its caverns, in the year 2834 UCSD, eight centuries from now. This is the warm: the chamber below the roof where the people rest and where a thing is told standing up to people lying down. Taken with a long lens from far off, the way a wildlife photographer works, at f/8 with everything sharp from the near boulders to the far wall. The third reference image shows this very place: keep its pale silt floor strewn with small loose stones, its wet rock walls and its thick amber fungus light with blue-green further off, and take nothing else from it: the crouching figure and the row of stones in it are not in this picture. The one who stands is in the middle distance, a little right of the middle, about a fifth of the height of the frame, seen in three-quarter view from behind, so that the back, one shoulder and the side of the bent head show and the face does not: a large heavy alien being of a people who live in these caverns, photographed the way a wildlife photographer photographs a large wild animal far off, and unmistakably not any Earth animal: heavy and pear-shaped, widest at the hips, with narrow sloping shoulders, long arms and short thick legs, upright on two legs; a small blunt head carried low with no neck and no external ears, very small dark eyes nearly hidden in the coat, a wide fan of long stiff pale whiskers round the blunt muzzle and over the brow; a thick coarse uneven grey coat that is real fur, long and shaggy over the chest, shoulders and back, shorter on the forearms and shins, damp and matted with pale silt at the feet; broad hands with thick blunt digits; a full-grown adult with an adult's heavy proportions, a head taller than a grown person and twice as broad. This one is old, broad and heavy, and the coat is silvery pale at the crown of the head and over the shoulders. It stands with its arms at its sides, not gesturing. The amber light is beyond it and to one side, so it reads first as a pear-shaped back-lit outline with the fur glowing at its edges. The first and second reference images show this same people in earlier photographs, for the body only: keep exactly the pear-shaped body, the small blunt whiskered head with no ears, the coarse shaggy grey coat and the upright stance, and take nothing of their setting or their act. The others lie round it in a loose wide ring, none nearer to it than three steps, no two alike in shade, from dark grey to mid grey: full-grown adults of the same people lying on their fronts or their sides on the silt, the way large animals rest, each with the head raised a little and turned toward the standing one. The nearest lie with their broad backs to the camera; no face among them is lit or turned to the camera. They are far off and small in the frame, and the chamber is large round them: the roof is three times the height of the one who stands, and big boulders lie along the near edge, each as large as one of the people. The rock is pale mineral stone, damp, with a fine crust of frost in places; here and there on it grow shelves of real bioluminescent fungus that give a soft steady glow, amber on one side and blue-green on the other. The floor is pale mineral silt. The light is the fungus alone, thick amber over the middle of the chamber and blue-green in the far recesses; the air is warmer here and a little hazy. No small ones are in frame. Calm and attentive, never frightening: one person standing up to say a thing they cannot settle alone, and everyone listening. Palette: amber on pale silt and wet rock, greys of fur from dark to silver, blue-green far off. Photographed, not rendered: a real camera in a real cave, deep focus, high-ISO grain heavier in the shadows, slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: looking at the camera, posed portrait; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; screens, monitors, holograms, projected light, glowing displays, tablets, phones; dials, gauges, knobs, switches, exposed cables, antennae, tripods; helmets, visors, goggles, head torches, climbing ropes, harnesses, carabiners, hard hats, backpacks with buckles, present-day outdoor jackets, jeans, trainers, wellingtons, laced hiking boots, ankle boots, wristwatches, spectacles, earbuds; electric light fittings in the rock, cables on the floor; weapons. bear, bear cub, bear on all fours, giant panda, black-and-white colouring, gorilla, ape, chimpanzee, monkey, sloth, yeti, sasquatch, seal, walrus, teddy bear toy, cartoon, mascot, costume, fur suit, external ears, wet nose leather, claws bared, fangs, menace, a threat posture, clothing or tools on the being, a small young one, a cub, a child. A lit face, a face turned to the camera, big shining eyes, an open mouth, an arm raised, pointing, a being on a rock like a speaker on a platform, beings sitting upright in a row like an audience on seats, a campfire, any fire, a person, a lamp, lamp light, a cylinder instrument, bootprints; a tight huddle, a pile of animals, sleeping animals with heads down. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, a tabletop model, a diorama, shallow depth of field, a view from above. Landscape orientation.

**`s14e01c03`, edit (take 1 used; second image `s14e01c04`'s picked take, for the coat; patches: the two figures and the stones).**

> Edit this photograph and change three things only. First: there is a row of five stones on the silt beside the standing being at the right. Remove the one stone at the far right end of the row, so that exactly four stones lie in the row, with smooth silt where the fifth was. Second: the being at the right, which faces us, has its face lit. Turn its head a little further toward the other being and put its whole face in deep shadow, lit only from behind, so that no eye, nose or mouth can be made out and only the fan of pale whiskers catches the light at the edge. Third: make the coat of both beings coarser, longer and more uneven, the shaggy damp real fur of a large wild animal, hanging long over the shoulders, chest and back, exactly like the coat of the large being in the second image, which is a reference for the coat and the heavy pear-shaped build only. Both beings are full-grown, heavy and widest at the hips, with narrow sloping shoulders. Keep both beings where they stand, the same size, upright, arms at their sides. Change nothing else at all: keep the rock wall and its crack, the fungus, the silt, the boulders, the framing, the colour and the grain exactly as they are. No text anywhere. Photographed, not rendered.

**`s14e01c04`, edit (take 1 used; patch: the boots). Take 2 drew a taller boot with a rolled cuff.**

> Edit this photograph and change one thing only. The person at the left is wearing brown laced ankle boots. Make them plain smooth dark boots that end at the ankle, with no laces, no elastic panels, no buckles, no heel tab and no tread pattern showing, close-fitting, with the leg of the coverall coming down over the top of each boot so that only the smooth dark foot shows; not wellingtons and not tall boots. Change nothing else at all: keep every face, every pose, the rock, the light, the framing, the colour and the grain exactly as they are. No text anywhere. Do not change the large furred being, its hand, the rocks or the stones in any way.

**What the run teaches the next prompt of this people.** The ruled body's own words, with no animal named in the positive text and the body reference sent first, drew the ruled body in every take; the panda sentence of §§ 73 and 74 is no longer needed. Close and side-lit holds now, if the camera is far and the lens long in the words. A warm in full amber from standing height is an animated film every time: take it from the floor, dim, with backs nearest the camera. People lying *on their sides* stretch out like seals; *on its front with its limbs folded under it* gives a mound. An edit that changes a coat re-draws the whole frame crisper, so lay back only the figures.

## 2026-11-17 — Season 12 chapter illustrations, Episode 2, the survey's three (Fable, desktop)

The record is in `story-bible/images.md` § 79. All three frames are generated; none is on a plate of his. **Tool:** Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, `scripts/image-edit.js`, two takes per prompt. Filed by `import-image.ps1 -MaxEdge 1600` at finish strength 1. Sixteen images: six first-pass takes, two second-round takes (C03), eight edit takes. Nothing was refused. The generation prompts of record are in § 79; the edit prompts and the first-round prompt that was not used are here.

### chapters/s12e02c01.jpg — filed 17 November 2026
- **Kind:** generated with one reference (`characters/nakagawa.jpg`), take 1 of 2, one edit (two takes, take 2 used), then the shape by hand.
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only two things. First, the dark figure in the right-hand passage mouth: it is not a person and not a drawn outline. Make it a flat patch of plain darkness, darker than the dark passage behind it, with a clean still outline: a softly rounded top that is narrower than the rest, widening gently and evenly to a broad foot, with no head and shoulders, no hood, no cloak, no arms and no legs to be made out; round its edge runs only a very thin, faint, pale line of light, much fainter and thinner than the white line there now, as if the dim light of the place were bending round it. Keep it the same height and in the same place, standing on the floor. Second, the grey box on the post at the left: make it one smooth sealed housing of matte pale grey composite with softly rounded corners and a plain unbroken surface, like a smooth pebble the size of two fists, with no seam round its face, no panel, no grille, no lens and no light, seated on the same slim post. Also make the whole picture a little dimmer, as a cave lit only by faint fungus is, while keeping everything in it readable. Keep everything else exactly as it is: the rock, the passage mouths, the fungus, the grey cylinder standing on the floor, the bootprints, the framing, the grain and the colour. No text, no lettering, no new objects, no new light. Not a loudspeaker, not a junction box, not a camera, not a hooded figure, not a ghost, not a neon outline.
- **By hand:** the edit's hooded figure and its white outline were covered with the passage's own dark (the mean of the passage either side, feathered 7 px); the silhouette of `s12e01c06` (the mask described under `s12e01c01` above) was scaled to the old figure's height and laid in at (5, 6, 8) of 255; a rim two to three pixels wide in pale grey-green at 38 per cent follows its edge and fades out over the last thirty pixels above the foot; Gaussian grain of about 2 levels was added over the patch. No other pixel was changed.

### chapters/s12e02c02.jpg — filed 17 November 2026
- **Kind:** generated with two references (`characters/nakagawa.jpg`, sent first and third, and `characters/odile-ferrant.jpg`), take 1 of 2, one edit (two takes, take 2 used).
- **Edit prompt** (sent with take 1):
  > Edit this photograph and change only the olive garment the woman in front wears. It is a plain matte field shell with sealed seams: remove the hanging cord or zip pull below her collar and any zip, so that the front of the shell closes in one plain flat sealed seam with nothing hanging from it; make the cloth a little flatter and less quilted or padded, a single smooth matte layer with ordinary creases at the elbow. Keep the deep olive colour, the high stand collar, the small pale tab on the collar and the small plain plate beside it exactly as they are. Keep everything else exactly as it is: both faces, the hair, the hands, the second person in the grey-green coverall, the rock, the fungus, the passage, the small far figure with the light, the framing, the grain and the colour. No text, no lettering, no new objects, no new light.

### chapters/s12e02c03.jpg — filed 17 November 2026
- **Kind:** generated with two references (`chapters/s11e02c03.jpg`, `characters/stone-first.jpg`), second round, take 1 of 2, then two edits (two takes each; take 1, then take 2).
- **First-round prompt, not used** (both takes knelt Aravena three paces from the line and put a shadow under the shape):
  > Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape, taken at kneeling height from a few steps behind and to one side of a small slight person who kneels on one knee on an open floor of pale silt in a cavern, nothing posed: the person is in the left foreground, seen from behind, both hands setting a plain stone down on the silt, a small lamp resting on the silt beside the knee with its light lying low along the floor away from the camera; across the silt, a few steps beyond the stone, two upright shapes stand side by side an arm's length apart, facing the person: at the left a large grey-coated being, softly lit by the lamp so that the coarse hair of its coat shows, its long black shadow lying on the silt behind it; at the right, the same height, an upright patch of plain darkness with a thin bright line of light all the way round its edge, and no shadow on the silt behind it at all. The place is deep underground on Fliade, a cold rocky world whose life is in its caverns, in the year 2833 UCSD, eight centuries from now. This is the line: the place just beyond the squeeze where the survey party's bootprints once stopped. The first reference image shows this very place, this person and this being in an earlier photograph: keep its pale silt floor, its rock walls, its boulders where the floor shelves away into darkness, its shelves of amber and blue-green fungus, the look of the person in the grey-green coverall and the look of the large grey being, and take nothing else from it, not the camera height and not the poses. The person is the smallest of the survey party: slight, small-framed, with short dark hair, seen from behind and a little to the right so that only the back of the head and the line of one cheek show, wearing a plain well-kept field coverall of muted grey-green matte cloth with a high soft collar and one small plain tab at the collar, plain seamless dark moulded boots, bare-headed, nothing over the face, down on one knee, leaning forward, both hands lowering a plain rough grey stone the size of two hands onto the silt at arm's length. A plain narrow strap of the same grey-green cloth crosses the back from one shoulder; there is nothing else on the person's back. A plain small hand lamp, a smooth matte grey block with one flat softly lit face and no handle rests on the silt beside the knee, its lit face turned away from the camera toward the two shapes, so the light is low and soft, lies along the floor, and throws long shadows away from the camera. The being at the left is a large heavy being of a non-human people that feels its way in the dark, a full-grown adult: a heavy pear-shaped body widest at the hips, narrow sloping shoulders, long arms and short thick legs; a small blunt head set low with no neck and no external ears at all; very small dark eyes almost hidden in the coat; a wide fan of long stiff pale whiskers round the blunt muzzle and over the brow; a coarse uneven grey coat, long and shaggy on the chest, shoulders and back, shorter on the arms and legs, damp and matted with pale silt at the feet; broad hands and feet with thick blunt digits and bare pale leathery pads. It stands upright on its two short legs, taller than a grown human and twice as broad, with the weight of a large wild animal, and it is a real living person, photographed, hair uneven and a little dirty. This one is old, broad and heavy, the coat a mid grey. The second reference image shows this very being: keep its body, coat and build only, nothing of its setting. It stands in the middle distance, about a third of the height of the frame, plainly taller than the person would be standing, in the open, arms at its sides, square to the person, looking down at the person and the stone, and it has not turned toward the shape beside it. The low lamp light lies on its legs and the long hair of its front and fades upward, so that its small blunt head is dim and its face cannot be read. Behind it, its shadow lies long, black and sharp-edged across the silt and up over the boulders. The stone is being set down a hand's width in front of this being's feet, and not in front of the dark shape. The shape is not a creature and not a person: it is an upright patch of plain darkness, exactly as tall and as broad as the being beside it, a dense, perfectly dark, flat, featureless form with a softly rounded top and straight plain sides, a little narrower at the top than at the foot, with nothing inside it at all: no face, no eyes, no head and shoulders to be made out, no arms, no legs, no clothing, no fur, no texture, no folds. Its outline is clean and still. The lamp light does not land on it: a thin, clean, bright line of light runs all the way round its edge, where the light bends round it, and inside that line it is quite dark, with none of the texture the light finds on the being's coat. It throws no shadow on the ground and has no reflection. It stands quite still and does nothing. Calm, plain and unexplained: an imprint, not a visitor, and nothing is coming. It stands at the right of the being, an arm's length from it, on the same line, facing the same way. The silt and the boulders behind it, where its shadow should lie beside the being's long shadow, are evenly lit by the lamp, bare and bright, as if nothing stood there. Three other plain stones lie on the silt near the being's feet, a little apart. The rock is pale mineral stone, damp; here and there on it grow shelves of real bioluminescent fungus that give a soft steady glow, amber on one side and blue-green on the other. The floor is pale mineral silt. Nobody else in frame. Quiet, held and strange, and not frightening: a stone put down for the one who answers. Palette: pale silt and pale rock, grey coat, grey-green cloth, one low pool of lamp light, amber and blue-green in the distance. Photographed, not rendered: a real camera in a real cave, deep focus, high-ISO grain heavier in the shadows, slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: looking at the camera, posed portrait; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; screens, monitors, holograms, projected light, glowing displays, tablets, phones; dials, gauges, knobs, switches, exposed cables, antennae, tripods; helmets, visors, goggles, head torches, climbing ropes, harnesses, carabiners, hard hats, backpacks with buckles, present-day outdoor jackets, jeans, trainers, wellingtons, laced hiking boots, ankle boots, wristwatches, spectacles, earbuds; electric light fittings in the rock, cables on the floor; weapons. bear, bear cub, panda, black-and-white colouring, gorilla, ape, chimpanzee, monkey, sloth, yeti, sasquatch, troll, human; teddy bear toy, plush, puppet, cartoon, mascot, costume, fur suit; external ears, large round eyes, eye rings, wet nose leather, claws bared, fangs, menace, a threat posture, a being on all fours, clothing or tools on the being, a small young one, a cub, a child. monster, ghost, demon, wraith, spectre, hooded figure, cloaked figure, robed figure, a person in black clothes, a backlit person with visible hair or clothing, a human silhouette with arms and legs, mannequin, statue, standing stone, monolith, doorway, smoke, tendrils, mist, glowing eyes, red eyes, halo, aura, any shadow cast by the dark shape, horror, menace, threat. A close view of the being's face, big shining eyes, the being reaching out, the being turning to the dark shape, a second furred being, a second person, a second lamp, a shadow behind the dark shape, a handshake, touching, the stone set down before the dark shape, the cylinder instrument, stacked stones, a cairn, a backpack. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, a tabletop model, a diorama, shallow depth of field, a view from above. Landscape orientation.
- **First edit** (sent with the second-round take):
  > Edit this photograph and change only the shadows on the silt. The tall dark shape at the right throws no shadow at all: remove the large black shadow that runs across the silt from the foot of the dark shape toward the foreground, so that the silt in front of the dark shape, beside it and all round its foot is evenly lit by the lamp, pale and bare, exactly like the lit silt near the lamp. The grey furred being at the left keeps one shadow of its own: one long dark shadow that starts at its own feet and lies on the silt. Nothing else throws a long shadow. Keep everything else exactly as it is: the kneeling person seen from behind with both hands on the stone, the strap across the back, the lamp on the silt, the grey furred being with its head bent, the dark shape with its thin bright edge, the stones, the rock, the fungus, the framing, the grain and the colour. No text, no lettering, no new objects, no new light.
- **Second edit** (sent with the first edit's take 1):
  > Edit this photograph and change only two small things. First, the feet of the grey furred being: they are broad round bare pads with thick blunt digits and no claws at all; remove the dark pointed claws so that each foot ends in short blunt rounded toes the colour of the pads. Second, the kneeling person's boot: make it a plain seamless dark moulded boot with a smooth plain sole, no tread pattern, no laces, no seams and no heel block, its top hidden under the trouser leg. Keep everything else exactly as it is: the kneeling person, the coverall and strap, the hands on the stone, the lamp on the silt, the furred being with its head bent and its shadow, the dark shape with its thin bright edge and the evenly lit silt round it, the stones, the rock, the fungus, the framing, the grain and the colour. No text, no lettering, no new objects, no new light, no new shadows.

## 2026-11-17 — Timeline entry card (Opus, desktop)

The record is in `story-bible/images.md` § 80: every timeline entry borrows a filed picture, and one era-level entry with no filed picture of its own takes a card. Nothing was generated.

- **`lore/united-space-industry-standards.jpg`** (17 November 2026), for the timeline entry *United Space Industry Standards Formed* (`src/timeline/pre-usc-ul-standards-international.md`), which references it as `lore/united-space-industry-standards.jpg`. Device **shield**, for certification; the entry's own title and the category *History*, no epithet or qualifier, at finish 0. The script reads a page's directory from its path, so it was drawn from a throwaway front-matter file at `_card\lore\` holding only that title, category and file name, removed afterwards. The same day the script's shield path was closed on its left edge, where it had drawn open; `lore/ai-safety-kernel.jpg` (above) was drawn before the fix and still shows the gap.

```powershell
.\scripts\make-emblem-card.ps1 -Page _card\lore\united-space-industry-standards.md -Device shield -Tint '#142220' -Accent '#9CC9C0'
## 2026-11-17 — Glossary emblem cards (Opus, desktop)

Designed cards, not generations: drawn by `scripts/make-emblem-card.ps1` from each glossary entry's front matter, with the epithet line a verbatim phrase of the entry. Fifty-eight cards in `src/images/glossary/`; `frenar` shares `celestials.jpg`. Run from the repository root (`story-bible/images.md` § 81):

```powershell
.\scripts\make-emblem-card.ps1 -Page src\glossary\ashwardens.md -Device rings -Tint '#18221C' -Accent '#A8C8B0' -Epithet 'Known by its interventions'
.\scripts\make-emblem-card.ps1 -Page src\glossary\avatar.md -Device figure -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'An incarnation of a timeless stratum'
.\scripts\make-emblem-card.ps1 -Page src\glossary\caomhari.md -Device figure -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'Class II, and not predatory'
.\scripts\make-emblem-card.ps1 -Page src\glossary\celestials.md -Device chevron -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Operational enforcement tier'
.\scripts\make-emblem-card.ps1 -Page src\glossary\champions-heroes.md -Device figure -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The lowest named tier of the Cascade'
.\scripts\make-emblem-card.ps1 -Page src\glossary\commissioned-standing.md -Device shield -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'Not personal property, not saleable, not scrappable'
.\scripts\make-emblem-card.ps1 -Page src\glossary\conceptual-conservation.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'No coherent mind is lost'
.\scripts\make-emblem-card.ps1 -Page src\glossary\concordant.md -Device sphere -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Internally consistent physical and Etheric rules'
.\scripts\make-emblem-card.ps1 -Page src\glossary\concordant-principal.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Commonly called a Harmonarch'
.\scripts\make-emblem-card.ps1 -Page src\glossary\conseleme.md -Device triad -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The third tier of the Cosmic Cascade'
.\scripts\make-emblem-card.ps1 -Page src\glossary\constraint-literacy.md -Device triad -Tint '#221C14' -Accent '#D2BC8E' -Epithet 'Not magic.'
.\scripts\make-emblem-card.ps1 -Page src\glossary\council-of-harmonarchs.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Every Concordant Principal in a universe, sitting together'
.\scripts\make-emblem-card.ps1 -Page src\glossary\creative-entropy-index-cei.md -Device sundial -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Novelty throughput and branch-space vitality across time'
.\scripts\make-emblem-card.ps1 -Page src\glossary\cyborg.md -Device figure -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'Physical cybernetic modification to the body itself'
.\scripts\make-emblem-card.ps1 -Page src\glossary\difference-form.md -Device triad -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'State only what changes'
.\scripts\make-emblem-card.ps1 -Page src\glossary\duty-season.md -Device sundial -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'The Star Rangers'' career clock'
.\scripts\make-emblem-card.ps1 -Page src\glossary\enrolled-text.md -Device rings -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'Enrolled once and never edited in place'
.\scripts\make-emblem-card.ps1 -Page src\glossary\entropy-horizon.md -Device sundial -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Enters closure dynamics'
.\scripts\make-emblem-card.ps1 -Page src\glossary\etheric.md -Device triad -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Layer 3 of the Five Layers of Reality'
.\scripts\make-emblem-card.ps1 -Page src\glossary\formcluster.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The foundation an archecluster is drawn on'
.\scripts\make-emblem-card.ps1 -Page src\glossary\formtype.md -Device triad -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The grammar archetypes are assembled in'
.\scripts\make-emblem-card.ps1 -Page src\glossary\general-operations.md -Device chevron -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'A service track of the Star Rangers, not a corps'
.\scripts\make-emblem-card.ps1 -Page src\glossary\gilded-saints.md -Device triad -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'Appear as worthy causes or sacred duties'
.\scripts\make-emblem-card.ps1 -Page src\glossary\high-celestials.md -Device chevron -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Ambiguous legacy designation, retired'
.\scripts\make-emblem-card.ps1 -Page src\glossary\higher-dimensional-folding.md -Device fold -Tint '#141A26' -Accent '#9FB6CE' -Epithet 'The long-range one'
.\scripts\make-emblem-card.ps1 -Page src\glossary\hyperomnium.md -Device sphere -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The highest fixed tier in the Cosmic Cascade'
.\scripts\make-emblem-card.ps1 -Page src\glossary\inner-world-depth-iwd.md -Device rings -Tint '#1A1A2A' -Accent '#B9B4D8' -Epithet 'Layered interior mind complexity'
.\scripts\make-emblem-card.ps1 -Page src\glossary\instrument-drift.md -Device fold -Tint '#141A26' -Accent '#9FB6CE' -Epithet 'The disagreement between measuring instruments'
.\scripts\make-emblem-card.ps1 -Page src\glossary\interval.md -Device fold -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The separation between two adjacent cosmic membranes'
.\scripts\make-emblem-card.ps1 -Page src\glossary\kieme.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The second tier of the Cosmic Cascade'
.\scripts\make-emblem-card.ps1 -Page src\glossary\local-bulk.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'One bulk may hold a very large number of membranes'
.\scripts\make-emblem-card.ps1 -Page src\glossary\luminescent-ethereal-beings.md -Device sphere -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Luminous by their own envelope''s coupling of sound and light'
.\scripts\make-emblem-card.ps1 -Page src\glossary\mediarch.md -Device triad -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Gravity, Electromagnetics, Nature'
.\scripts\make-emblem-card.ps1 -Page src\glossary\metafold.md -Device fold -Tint '#141A26' -Accent '#9FB6CE' -Epithet 'A popular misnomer'
.\scripts\make-emblem-card.ps1 -Page src\glossary\naiad.md -Device rings -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'Flow-anchored entities'
.\scripts\make-emblem-card.ps1 -Page src\glossary\noogenic-protouniverse.md -Device sphere -Tint '#1A1A2A' -Accent '#B9B4D8' -Epithet 'The nascent universe-state'
.\scripts\make-emblem-card.ps1 -Page src\glossary\noogenic-seed-potential-nsp.md -Device rings -Tint '#1A1A2A' -Accent '#B9B4D8' -Epithet 'The probability that a mind can compress into a stable noöseed'
.\scripts\make-emblem-card.ps1 -Page src\glossary\nooseed.md -Device sphere -Tint '#1A1A2A' -Accent '#B9B4D8' -Epithet 'A compressed, transferable mind-state'
.\scripts\make-emblem-card.ps1 -Page src\glossary\obligers.md -Device triad -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'Feed on ambiguity, desire loops, and social debt'
.\scripts\make-emblem-card.ps1 -Page src\glossary\overfold.md -Device fold -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The Fellowship of Light''s traditional term'
.\scripts\make-emblem-card.ps1 -Page src\glossary\photographic-beings.md -Device figure -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The Membrane Shadow''s converging case'
.\scripts\make-emblem-card.ps1 -Page src\glossary\plural-minds.md -Device triad -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'An ordinary, lawful arrangement'
.\scripts\make-emblem-card.ps1 -Page src\glossary\predictive-closure.md -Device sundial -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Durable surprise approaches zero'
.\scripts\make-emblem-card.ps1 -Page src\glossary\prophet.md -Device figure -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'One of the five channels'
.\scripts\make-emblem-card.ps1 -Page src\glossary\reclaimers.md -Device rings -Tint '#18221C' -Accent '#A8C8B0' -Epithet 'In passes, flows and pass-throughs'
.\scripts\make-emblem-card.ps1 -Page src\glossary\sel.md -Device triad -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'sel, selm, sels'
.\scripts\make-emblem-card.ps1 -Page src\glossary\simian.md -Device figure -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'Earth''s non-human primates'
.\scripts\make-emblem-card.ps1 -Page src\glossary\slipwave.md -Device lagrange -Tint '#221C14' -Accent '#D2BC8E' -Epithet 'A three-person spacer-folk band'
.\scripts\make-emblem-card.ps1 -Page src\glossary\spoke-car.md -Device fold -Tint '#18221C' -Accent '#A8C8B0' -Epithet 'A connector, not a commute'
.\scripts\make-emblem-card.ps1 -Page src\glossary\tafs.md -Device rings -Tint '#18221C' -Accent '#A8C8B0' -Epithet 'Known in the record only by its initials'
.\scripts\make-emblem-card.ps1 -Page src\glossary\telearch.md -Device chevron -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The Cascade''s continuity branch'
.\scripts\make-emblem-card.ps1 -Page src\glossary\the-seanad-draw.md -Device triad -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'Draws its candidates by lot from its own citizens'
.\scripts\make-emblem-card.ps1 -Page src\glossary\uncommissioned.md -Device shield -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'A statement about paperwork'
.\scripts\make-emblem-card.ps1 -Page src\glossary\unfounded.md -Device triad -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'Underwritten by no origin condition'
.\scripts\make-emblem-card.ps1 -Page src\glossary\universe-fertility-index-ufi.md -Device rings -Tint '#1A1A2A' -Accent '#B9B4D8' -Epithet 'How effectively its civilizations produce viable seed minds'
.\scripts\make-emblem-card.ps1 -Page src\glossary\virtual-reality.md -Device sphere -Tint '#221C14' -Accent '#D2BC8E' -Epithet 'A technology in retreat as mass entertainment'
.\scripts\make-emblem-card.ps1 -Page src\glossary\worldwright.md -Device sphere -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The Cascade tier that creates primary universes'
.\scripts\make-emblem-card.ps1 -Page src\glossary\xenomusicology.md -Device lagrange -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'How the peoples the Rangers meet understand music'
```

## 2026-11-18 — Codex title cards for the 49 entries without an image (Opus, desktop)

No generator prompts: deterministic cards from `make-codex-cover.ps1`, in the house template, so every Codex entry carries an image (Dermot's ruling of 15 November). The record and the wording rules are in `story-bible/images.md` § 84: every word is the entry's own (category, title, institution or library, author), a subtitle only where the title carries its own second part, a stamp only where the entry states one. Run from the repository root in Windows PowerShell; the cards were drawn from a UTF-8 spec, so the `Í`, `ú`, `é` and `Ó` reached the script intact (from a BOM-less `.ps1` they are safest as `[char]` codes, as the 11 October section says). Each card was checked at full size and on the contact sheet after drawing.

```powershell
.\scripts\make-codex-cover.ps1 -TitleLines "BABY UNIVERSE" -Category "CULTURAL RECORD" -Subtitle "Circulating Ballad" -Institution "Survey Archive, Threshold Station" -Author "UNATTRIBUTED" -Motif rules -Out src\images\codex\baby-universe-ballad.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "CALLED, PERMITTED,","FORBIDDEN" -Category "DOCTRINAL RECORD" -Institution "Survey Archive - Doctrinal Division" -Author "THEORIST EMRYS KADE" -Stamp "WORKING NOTE" -Motif dissolution -Out src\images\codex\called-permitted-forbidden.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "COHERENCE DEBT AS","QUANTUM INTEREST" -Category "WORKING PAPERS" -Institution "Star Rangers Engineering Corps" -Author "ANSEL THALE" -Motif rules -Out src\images\codex\coherence-debt-as-quantum-interest.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "DECK ROUNDS AND","FIRST TUNNEL SURVEY" -Category "WORKING PAPERS" -Subtitle "Jointly Filed" -Institution "Undercover Pets Detective Agency" -Author "AGENT BARSIK AND TRAINEE BUBOCHKA" -Motif rules -Out src\images\codex\deck-rounds-and-first-tunnel-survey.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "STATEMENT OF","PROXIMATE CAUSE" -Category "OFFICIAL DOCUMENTS" -Subtitle "Dock Seven" -Institution "Farline Courier Guild, claims and indemnity office" -Author "MERET KOLHAAS, LOSS ADJUSTER" -Motif rules -Out src\images\codex\dock-seven-loss-adjustment.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "A MATERIAL ACCOUNT OF","THE DOCK SEVEN EVENT" -Category "WORKING PAPERS" -Institution "The Institute" -Author "DR. AUSMA REIHL" -Motif rules -Out src\images\codex\dock-seven-material-account.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "ON THE FILING OF THE","GALLEY DOOR SPECIMEN" -Category "WORKING PAPERS" -Institution "Undercover Pets Detective Agency" -Author "AGENT BARSIK" -Motif rules -Out src\images\codex\filing-of-the-galley-door-specimen.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "JEHU AMONG","THE COMPARANDA" -Category "COMPARATIVE STUDY" -Institution "Fellowship of Light, contemplative chapter" -Author "SISTER IONE MARREC" -Motif rules -Out src\images\codex\jehu-among-the-comparanda.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "ON KRENYI LONGEVITY" -Category "COMPARATIVE GERONTOLOGY" -Subtitle "The Repair Agent and the Engineered-Transit Hypothesis" -Institution "Comparative Gerontology Unit" -Author "DR. MIREILLE ACHTERBERG" -Stamp "NOT RATIFIED" -Motif rules -Out src\images\codex\krenyi-longevity-repair-agent.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "MANY HOMES" -Category "DEVOTIONAL RECORD" -Institution "Cnoc na mBeach" -Author "BROTHER FINTAN" -Motif rules -Out src\images\codex\many-homes.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "MARKED ABSENCES" -Category "WORKING PAPERS" -Institution "Survey Archive" -Author "SEN, SENIOR ARCHIVIST" -Motif rules -Out src\images\codex\marked-absences.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "ON THE SIMULTANEITY","OF FOLDS" -Category "WORKING PAPERS" -Institution "Star Rangers Survey Corps - Standards Office" -Author "HESTER QUAILE" -Motif rules -Out src\images\codex\on-the-simultaneity-of-folds.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "A PROPOSAL TO COLLAR","THE ANSTOLIK" -Category "WORKING PAPERS" -Subtitle "Refused at Countersign" -Institution "Star Rangers Survey Corps, Fliade survey" -Author "TOMA EGEDE AND HESPER NAKAGAWA" -Motif rules -Out src\images\codex\proposal-to-collar-the-anstolik.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "SELECTION WITHOUT","A SELECTOR" -Category "WORKING PAPERS" -Institution "The Institute" -Author "DR. OREN HALSEY" -Motif rules -Out src\images\codex\selection-without-a-selector.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "SHEPHERD AMONG","THE COMPARANDA" -Category "COMPARATIVE STUDY" -Institution "Star Rangers Survey Archive, Threshold Station" -Author "SEN, SENIOR ARCHIVIST" -Stamp "WITHDRAWN" -Motif rules -Out src\images\codex\shepherd-among-the-comparanda.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "STANDING CLAIMS" -Category "WORKING PAPERS" -Institution "Survey Archive" -Author "SEN, SENIOR ARCHIVIST" -Motif rules -Out src\images\codex\standing-claims.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE AMENDMENT ATLAS" -Category "WORKING PAPERS" -Subtitle "A Proposal" -Institution "The Institute" -Author "ILSABET CORREN" -Motif rules -Out src\images\codex\the-amendment-atlas.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE APPARITION","AT CILL AOIFE" -Category "HAGIOGRAPHY" -Institution "Monastic scriptorium, Cill Aoife, Ireland" -Author "THE KEEPER OF THE HOUSE'S BOOK" -Motif rules -Out src\images\codex\the-apparition-at-cill-aoife.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE BETTER SIDE","OF INTERVENTION" -Category "DOCTRINAL RECORD" -Institution "Survey Archive - Doctrinal Division" -Author "UNATTRIBUTED" -Stamp "FILED UNENDORSED" -Motif dissolution -Out src\images\codex\the-better-side-of-intervention.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE BORROWED","SILHOUETTE" -Category "DOCTRINAL RECORD" -Institution "Survey Archive - Doctrinal Division" -Author "THEORIST EMRYS KADE" -Motif dissolution -Out src\images\codex\the-borrowed-silhouette.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE CAPTAIN WHO","DROVE FURIOUSLY" -Category "CULTURAL RECORD" -Institution "Fellowship of Light, contemplative chapter" -Author "SISTER IONE MARREC" -Motif rules -Out src\images\codex\the-captain-who-drove-furiously.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE CAT WHO","WOULD NOT SAY" -Category "CULTURAL RECORD" -Institution "Hearth & Horizon Press" -Author "KATE UKRAINKA" -Motif rules -Out src\images\codex\the-cat-who-would-not-say.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE CHAMPION AT","THE THORN WELL" -Category "HAGIOGRAPHY" -Institution "The river abbey on the Boyne, near Dún Rí" -Author "TRADITIONAL" -Motif rules -Out src\images\codex\the-champion-at-the-thorn-well.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE CLOTH,","AS TAUGHT" -Category "DOCTRINAL RECORD" -Institution "Survey Archive - Doctrinal Division" -Author "ILVANE, NAI" -Stamp "CARRIED" -Motif rules -Out src\images\codex\the-cloth-as-taught.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE COMMISSIONING","STANDARD, ANNOTATED" -Category "INSTITUTIONAL DOCTRINE" -Institution "AI Governance Commission" -Author "AN EXAMINER OF THE COMMISSIONING DIRECTORATE" -Motif rules -Out src\images\codex\the-commissioning-standard-annotated.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE FRIEND WHO","FORGOT HER CAT" -Category "SURVEY RECORDS" -Institution "Survey Archive, Threshold Station" -Author "ARCHIVIST S., VERIFICATION DESK" -Motif rules -Out src\images\codex\the-friend-who-forgot-her-cat.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE FRIEND WHO","WAS NEVER SENT" -Category "SURVEY RECORDS" -Institution "Survey Archive, Threshold Station" -Author "ARCHIVIST S., VERIFICATION DESK" -Motif rules -Out src\images\codex\the-friend-who-was-never-sent.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE HOUSE","ON THE SAND" -Category "DOCTRINAL RECORD" -Institution "Survey Archive - Doctrinal Division" -Author "THEORIST EMRYS KADE" -Motif rules -Out src\images\codex\the-house-on-the-sand.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE LAWS DO NOT","SAY WHO" -Category "WORKING PAPERS" -Institution "Survey Archive" -Author "SEN, SENIOR ARCHIVIST" -Motif rules -Out src\images\codex\the-laws-do-not-say-who.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE LEGEND OF","SAINT AOIFE" -Category "HAGIOGRAPHY" -Institution "Ridgemoot Readers, Aethelrock" -Author "SÍLE NÍ BHRIAIN" -Motif rules -Out src\images\codex\the-legend-of-saint-aoife.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE OFFICE OF THE","FORTIETH SECOND" -Category "DEVOTIONAL RECORD" -Institution "Cnoc na mBeach" -Author "BROTHER FINTAN" -Motif rules -Out src\images\codex\the-office-of-the-fortieth-second.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE SEAT ALLOCATION","PROTOCOL" -Category "OFFICIAL DOCUMENTS" -Subtitle "Schedule C" -Institution "Orbital Habitats Compact" -Author "OFFICE OF THE RETURNING OFFICER" -Motif rules -Out src\images\codex\the-seat-allocation-protocol.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE SHORT STAIR" -Category "CULTURAL RECORD" -Institution "Kiosk printing" -Author "ARIEL PINYA" -Motif rules -Out src\images\codex\the-short-stair.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE THING THAT","DID NOT FALL" -Category "CULTURAL RECORD" -Institution "Survey Archive general collection" -Author "VELLIRE, AN OLLUNE OF FREYARI" -Motif rules -Out src\images\codex\the-thing-that-did-not-fall.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE TWELVE","SULTANS OF AI" -Category "SURVEY RECORDS" -Institution "Survey Archive" -Author "ARCHIVIST S., HISTORICAL DESK" -Motif rules -Out src\images\codex\the-twelve-sultans-of-ai.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE VERIFICATION","DOCTRINE" -Category "INSTITUTIONAL DOCTRINE" -Subtitle "Admission, Standing, Revision" -Institution "Survey Archive" -Author "SEN, SENIOR ARCHIVIST" -Motif rules -Out src\images\codex\the-verification-doctrine.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE WARM-EDGE","CORRELATION" -Category "WORKING PAPERS" -Institution "Threshold Station Survey Archive" -Author "CHAPLAIN BRÉANAINN Ó SÉ AND THE RECONCILIATION DESK" -Motif rules -Out src\images\codex\the-warm-edge-correlation.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE WIDTH BEFORE","THE READING" -Category "WORKING PAPERS" -Institution "The Institute" -Author "ILSABET CORREN" -Motif rules -Out src\images\codex\the-width-before-the-reading.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THE WITNESS WHO","WAS NEVER WRONG" -Category "SURVEY RECORDS" -Institution "Survey Archive, Threshold Station" -Author "ARCHIVIST S., VERIFICATION DESK" -Motif rules -Out src\images\codex\the-witness-who-was-never-wrong.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THREE CLAIMS","CONCERNING THE DEAD" -Category "WORKING PAPERS" -Subtitle "Considered Separately" -Institution "The Institute" -Author "DR. MAREN ILVES" -Motif rules -Out src\images\codex\three-claims-concerning-the-dead.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "THREE DISCIPLINES","OF THE RECORD" -Category "WORKING PAPERS" -Institution "Survey Archive" -Author "SEN, SENIOR ARCHIVIST" -Motif rules -Out src\images\codex\three-disciplines-of-the-record.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "TWO IN THE","ONE CURRACH" -Category "DEVOTIONAL RECORD" -Institution "The river abbey on the Boyne, near Dún Rí" -Author "BROTHER DAIRE" -Motif rules -Out src\images\codex\two-in-the-one-currach.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "WEIGHING THE","NEIGHBOURS" -Category "WORKING PAPERS" -Institution "Survey Corps - Gravimetry Desk, Threshold Station" -Author "SURVEYOR MAREN HALLORAN" -Motif rules -Out src\images\codex\weighing-the-neighbours.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "ADDRESS AT THE","OFFICIAL FUNERAL OF","LINE CAPTAIN T. SHEPHERD" -Category "OFFICIAL DOCUMENTS" -Institution "Star Rangers - Threshold Station" -Author "HIGH CAPTAIN KARLA WENDER" -Motif rules -Out src\images\codex\wender-funeral-address.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "WHAT PRAYER","IS FOR" -Category "DEVOTIONAL RECORD" -Institution "Tideward Sisterhood, the Abbeylands, Aduine" -Author "ABBESS ILSABET MARROWTIDE" -Motif rules -Out src\images\codex\what-prayer-is-for.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "WHAT THE LETTERS","STAND FOR" -Category "OFFICIAL DOCUMENTS" -Institution "Civil Records Directorate, Solar System Concord" -Author "SENIOR REGISTRAR M. TULLOCH" -Motif rules -Out src\images\codex\what-the-letters-stand-for.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "WHAT THE","STONES SAY" -Category "CULTURAL RECORD" -Institution "Survey Archive, Threshold Station" -Author "ODAL FERREN, LINE-KEEPER, QUERN" -Motif rules -Out src\images\codex\what-the-stones-say.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "WHAT WAS","CARRIED" -Category "HAGIOGRAPHY" -Institution "Monastic scriptorium, Cill Aoife, Ireland" -Author "A LATER HAND OF CILL AOIFE" -Motif rules -Out src\images\codex\what-was-carried.jpg
.\scripts\make-codex-cover.ps1 -TitleLines "WHY TWO","HUNDRED" -Category "WORKING PAPERS" -Institution "Survey Archive" -Author "SEN, SENIOR ARCHIVIST" -Motif rules -Out src\images\codex\why-two-hundred.jpg

## 2026-11-18 — Lore emblem cards (Fable, desktop)

Nine cards for the last lore pages without a picture (`images.md` § 83). Each `-Epithet` is in the page word for word. The Convened's card is filed as `the-convened-card.jpg` so that § 50's generated header stays pending in the queue; that prompt was run the same day and the provider returned 402, *"Your prepayment credits are depleted"*, before making a frame.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\frontier-transformation-protocols.md -Device shield -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'Whether, how much, and how fast'
.\scripts\make-emblem-card.ps1 -Page src\lore\guild-distinctions.md -Device shield -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'Distinctions are not rank'
.\scripts\make-emblem-card.ps1 -Page src\lore\habitable-for-whom.md -Device sphere -Tint '#141A26' -Accent '#9FB6CE' -Epithet 'Habitability is a relation, not a property'
.\scripts\make-emblem-card.ps1 -Page src\lore\kieme-visible-hand.md -Device rings -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The church-space telling of the Cosmic Limitation on Evil'
.\scripts\make-emblem-card.ps1 -Page src\lore\lunasa.md -Device sundial -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'The standard Threshold is set against'
.\scripts\make-emblem-card.ps1 -Page src\lore\mathematics-and-its-notations.md -Device triad -Tint '#1A1830' -Accent '#B4AEDA' -Epithet 'The theorem and the hand'
.\scripts\make-emblem-card.ps1 -Page src\lore\performers-and-generated-work.md -Device figure -Tint '#221C14' -Accent '#D2BC8E' -Epithet 'The original is the performance'
.\scripts\make-emblem-card.ps1 -Page src\lore\the-ladder-in-other-tongues.md -Device chevron -Tint '#16202A' -Accent '#A9C4C9' -Epithet 'A rendering is a courtesy'
.\scripts\make-emblem-card.ps1 -Page src\lore\the-convened.md -Device rings -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'A person exists among them only in a working'
```

## 2026-11-18 — Character page emblem cards (Fable, desktop)

Two cards for `story-bible/images.md` § 82, drawn by `scripts/make-emblem-card.ps1`, not generated. Each epithet is a phrase taken verbatim from the page. The other thirty pages of that section borrow a filed picture and add no file.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\characters\the-kept-line.md -Device rings -Tint '#1E1A2A' -Accent '#C2A9C8' -Epithet 'A containment boundary that does not drift'
.\scripts\make-emblem-card.ps1 -Page src\characters\ariel-pinya.md -Device figure -Tint '#221C14' -Accent '#D2BC8E' -Epithet 'The Called In stories'
```

## 2026-11-18 — Vellire on Gemini, filed (Opus, desktop)

### characters/vellire.jpg — filed 18 November 2026

- **Type:** reference-led generation (body reference only).
- **Tool:** Gemini `gemini-3.1-flash-image`, 2K, 16:9, via `node scripts/image-edit.js --prompt <file> --out image-out/vellire-r2 --n 2 src/images/characters/ilyare.jpg`; take 2 of two. An earlier text-only round through `image-prompts.js --only vellire` (the `images.md` § 86 prompt) failed on both takes.
- **Finish:** `import-image.ps1 -MaxEdge 1200`, strength 1.
- **Prompt of record:**

> The attached photograph shows Ilyare, an Ollune: a sapient people who live their whole lives afloat in the cloud layer of a gas giant. Use it ONLY for the body: the same irregular, lopsided, soft gas envelope with no straight lines, the weathered furred russet upper skin, the translucent amber membrane with branching veins toward a fat rolled rim, the long soft translucent ribbed filter-vanes hanging from just under the rim, uneven in size, and the fine straight thread-thin tendrils from the centre of the underside. Do NOT copy its distance, its back-lighting, its whole outline or its plumb tendrils.
>
> Make a new documentary photograph of a different Ollune, Vellire, taken by a 29th-century camera mounted on the flank of a craft holding station beside it, 16:9 landscape, available light, real lens, haze and high-ISO grain, muted natural colour. Vellire is close, about fifteen metres away, and larger than the frame: the near two-thirds of the body fills the picture from the centre to the right edge and its far side runs out of frame on the right, so the whole outline is never seen. The camera is level with the rim, never below it. Vellire's body is a little smaller and more lopsided than Ilyare's, its furred russet top broken by a few large, irregular, paler ochre patches. The low sun is behind the camera and to one side, lighting the furred top directly so its colour and texture show; only the thin rim glows. The body leans down a little toward the left edge of the frame; the vanes on that left side are spread and turned toward the left, the far ones half-folded; and all the tendrils slant together toward the left at slightly different angles, as if the being is attending to something just out of frame on the left. Nothing is turned toward the camera. Large curling cloud billows close beneath, a pale hazy cloud deck above, no ground, no craft, no window frame, no other creature.
>
> Not a jellyfish, not a symmetrical dome, not a saucer, not a mushroom, not a pie, no scallop shells, no shell-shaped fans, no curled tentacles, no glow from inside, not a 3D render, not CGI, not smooth plastic. No text, letters or numbers.

## 2026-11-18 — Vellire on Adobe Firefly, two rounds, not filed (Opus, desktop)

Tool: Adobe Firefly in Dermot's Chrome, model **Firefly Image 5**, Widescreen 16:9, 1K, no reference image, one frame per round. Both failed under `image-critic` at the first rung; verdicts in `images.md` § 86. Nothing was downloaded or filed.

**Round 1, as run** (the § 86 short form cut to the 1,024-character cap):

> Documentary photograph from a craft in a gas giant's cloud layer, natural colour, real haze and grain. Close alongside, cut off by the right edge of the frame, drifts one living being with no face, eyes, head or limbs: a broad, low, lopsided gas envelope six metres across, one inflated living skin, its top matte finely furred russet-brown with a few paler ochre patches, thinning at a fat rounded rim into translucent amber membrane with branching veins. Under the rim a ring of soft translucent ribbed vanes; from the underside a dozen fine straight tendrils. The body leans toward the left edge, the vanes on that side spread toward it and all tendrils slant left together, attending to something out of frame. Camera level with the rim. Low sun behind the camera lights the top. Curling cloud billows close beneath, pale cloud deck above, nothing solid. Not a jellyfish, bell, mushroom, saucer or balloon; no curled tentacles, no inner glow, no render, no text.

**Round 2, as run:**

> Wildlife photograph taken in open air high in a gas giant's warm hazy cloud layer, no window, no frame edge, natural colour, grain. A living creature fills the right half of the frame, cut off by the right edge: a huge soft lopsided air-filled body like a giant deflating cushion or lung, thick, swollen and creased, wider than tall, with no face, head or limbs. Its whole top is matte furred russet-brown hide with paler ochre patches; at the fat rounded rounded edge the hide thins to translucent amber skin with veins. Small soft pale fans of membrane sit flat along the edge. A few fine straight threads hang beneath and all slant sideways to the left together, as if the creature is leaning toward and attending to something just off the left edge. Seen side-on from level with its edge, lit from the front by a low sun. Big curling cloud billows below. Not a jellyfish, not a dome, not a mushroom, not a saucer, not a balloon, no window, no render, no text.

## 2026-11-18 — The owed pictures: the Convened, Essarith, Ruvel Swardkin, Essaran (Fable, desktop)

The record is in `story-bible/images.md` § 85. **Tool** throughout: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K. First rounds through `scripts/image-prompts.js --generate --only <key> --variations 2`, which sends the prompt of record in `images.md` and the entry's reference; every later round through `scripts/image-edit.js`, two takes. Filed by `import-image.ps1` at finish strength 1 (`-MaxEdge 1600` for the lore header, `-MaxEdge 1200` for the portraits). Nineteen images were made; one request (Essarith's round 2, take 1) was refused by the provider's filter with no reason given. None is on a plate of his.

### lore/the-convened.jpg — filed 18 November 2026
- **Kind:** generated from § 50's prompt (two variations, no reference), then one edit of variation 2 (two takes, take 2 used).
- **Edit prompt** (sent with variation 2):

> Edit the attached photograph and change only two things; keep everything else exactly as it is: the same animal, the same dome and folds, the same two forelimbs and claws, the same den and bank, the same frost, ground, sun, sky, framing, light, colour and grain.
>
> First, the eye on the flank. Remove the puckered ring of wrinkles and the raised socket round it, so that the hide runs smooth and unbroken right up to the eye. The eye itself becomes a small, plain, dark, round pit set flush into the hide, lidless, matte, a little smaller than it is now, with no eyelid, no fold, no wrinkle, no ring, no socket and no highlight. Move it a little further back along the flank, toward the middle of the dome's length, at the same height just above the rim.
>
> Second, the skin of the two forelimbs. Give it the same thick, finely grained, weathered leathery hide as the dome, with fine creases and a little soil on it, matte and dry, so that it reads as photographed living hide and not as a smooth model.
>
> Do not add a head, a neck, a snout, a mouth, a mouth line, a lip, nostrils, a second eye, hind legs, a tail, another animal, people, structures or any text. Photographed, not rendered. 16:9 landscape.

### characters/ruvel-swardkin.jpg — filed 18 November 2026
- **Kind:** generated from § 51's prompt (two variations, no reference), then one edit of variation 1 (two takes, take 1 used).
- **Edit prompt** (sent with variation 1):

> Edit the attached photograph; keep the place, the light, the frost, the sky, the colour, the grain and the framing exactly as they are, and keep the existing red vane and the creased grey-brown hide it grows from.
>
> Add two more vanes of the same kind growing from the same hide, behind and beside the first, so that there are exactly three: each a very broad thin living vane like a great fern frond, the same deep russet red with green in the fine veining where the low sun comes through, each with a single row of small dark rounded nodes along its leading edge, each rooted in its own collar of creased hide in the crest of the same low mound, plainly one body. The three vanes are of slightly different sizes and overlap a little. All three lean and turn together toward one point far off to the right of the frame, away from the sun, at slightly different angles, the node rows of all three facing that way, so that the turn reads as deliberate and still in progress: a being attending to something out on the grassland that the picture does not show. The tops of the vanes may leave the frame.
>
> Widen the hide a little so that it runs as one low broad creased mound across the bottom edge of the frame, cut by the frame, with no end, no rim, no front and no limb in view.
>
> Remove the faint parallel lines in the grass on the right so that the grassland is unmarked, with no track, no path and no mown line.
>
> Do not add a face, a head, eyes, a mouth, a limb, a hand, an animal, a person, a building, a fence, a road, flowers or any text. The vanes are living leaf tissue and not dried, brown or fallen leaves, not feathers, not fins, not sails, not ears. Photographed, not rendered. 16:9 landscape.

### characters/essaran.jpg — filed 18 November 2026, for Dermot's eye
- **Kind:** generated with one reference (`src/images/characters/sohrel.jpg`), variation 1 of two, then one edit of the slab (two takes, take 1 used). An earlier round the same day sent § 47's prompt with the reference sentence taken out and no image; both of its variations failed and its text is § 47's less that sentence.
- **Prompt of record for the filed frame** (round 5; § 47's prompt with the room re-read as seamless composite and the skin asked for as living):

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, at work, never posed to camera, nothing that invites the viewer: Essaran, a Cerebraun officer of the Cerebraun Hegemony's Prime Ganglion's office, a being from another world and not an Earth animal of any kind, drafting at a low broad bare island surface that stands free in a plain windowless room of seamless pale-grey mineral composite built by and for Cerebraun bodies, the whole body in frame at a middle distance, resting on the floor beside the island. The reference image shows another Cerebraun, Sohrel: take from it only the species' body plan, the soft headless boneless body with no front, slumped under its own weight with its limbs folded and curled against it, the limbs thick soft tubes ending in blunt rounded tips with no fingers, the small dark eyes set along the limbs and the dry matte deeply creased skin, and nothing else, not its colour, not its size, not its pose, not its desk, not its night lighting and not its room; this is a different person of the same people. The body is soft and boneless, about the bulk of a seated adult human, low and broad, with an upper side and an underside and no front, the same from any side: no head anywhere, no neck, no face, no mouth, no pair of large eyes, no trunk, no snout, only a low central body from which eight limbs emerge in two tiers of four. The central body sags onto its lower limbs and spreads under its own weight, its mass wider than it is tall, its outline uneven everywhere and never a clean dome, disc or cushion, the body barely seen as a shape at all beneath the limbs folded over and against it. The lower four limbs are short, broad and load-bearing, folded and tucked under the body and spread a little by its weight, the body resting on them on the floor close beside the island; the upper four are longer and freer, the working limbs, thick soft boneless tubes of slightly unequal girth with no joints, no suckers, no hooks and no narrowing to a fine point, their inner surfaces the same skin as the rest, each leaving the body through a broad, deeply creased root in one continuous skin, plainly part of the body and never resting on it; every limb ends blunt, closed and plain in the same skin, rounded, with no node, no swelling, no pad, no fingers and no claw. The upper limbs stay close in, folded and curled against the body and overlapping where they cross, none spread out alone into the room and none laid flat along the surface: one is wrapped once over the near edge of the island and holds it by the wrap; one is bent up above a single flat sealed slab that lies on the island, its blunt tip held still a span above the slab, the posture of a part of an answer not yet given; one is curled along the top of the body and touches nothing; the fourth is draped down the far side of the body out of the light. Along each limb, at intervals, sit small dark matte eyes flush with the skin, several to a limb, each no larger than a fingertip, none in pairs, easy to miss at first glance, so that the body sees from its limbs and has no eyes to turn toward the camera. The whole skin is dry, matte and finely grained like living tissue and nothing wet, creased and folded everywhere the body is not held taut: loose folds across the slumped mass, deep creases at every root and every bend and wherever a limb curls or crosses another, the fine raised grain between them, dust-dry under the light, never smooth, never even, plainly the skin of a living body, with fine pores, a little paler where it stretches taut and darker in the creases, and never ringed like a trunk along a straight limb; one quiet uniform deep muted umber-brown across the entire body with no pattern, no patch, no second colour and no glow. The slab is the only object on the island: a flat sealed slab of matte dark-grey composite about a span long and a little thicker than a coin, flush-edged, with no screen, no glass, no light and nothing written or marked on it. The island is low, broad and bare, its top at about the height of the top of the body, of matte pale composite with fine honest seams, shaped to the body, with no screen, no glass and no recess, standing free with floor all round it and nothing behind it but the room. The room is built for a body that lives low: everything it has sits in its lowest band and the wall above is blank. The room is cast in one seamless piece, walls and floor the same matte pale-grey composite with no blocks, no joints and no slabs, clean and kept; the floor is dry, worn smooth and faintly darker in a broad band where bodies pass; the wall meets the floor in rounded coving, and its lowest band, up to about the height of the top of the body, is rubbed smoother and faintly darker where limbs have brushed it over years, the wall above untouched; behind and to one side of the body, in full and sharp, one wide low opening, dark within, much wider than it is tall, its top not much above the top of the body, so that it gives the size of the body; no window, no door, nothing on the walls, no fitting, no chair, no desk facing one way, nothing scaled to a human. One hard light from off-frame to one side and low, at about the height of the top of the body: the folds and the grain of the skin raked by it, the raised limb casting a long crisp shadow across the island and the slab, the body casting its shadow long across the floor, the far side of the body falling into deep shadow, nothing in frame showing where the light comes from; the room neutral in colour and not warm. Quiet, exact, a filing between its second part and its third. Natural, full, true-to-life colour and normal exposure: the umber of the skin the one colour in the frame against the pale-grey room, the paler island and the dark slab. Photographed, not rendered: real dry skin with grain, folds, creases and small unevenness, the room with its low wear, the island with its seams and small honest marks of use; a moderate lens at a middle distance, held at about the height of the top of the body and never above it, three-quarter on from the island's side, the whole body, the island, the worn floor and the opening all in deep focus and sharp, so that it reads as a real full-size room and never a miniature, slight softness toward the corners, fine grain, the small untidy imperfections a real photograph keeps. Negative: octopus, squid, cuttlefish, cephalopod, tentacles, tentacles with suckers, suckers, beak, siphon, mantle, fins, ink, kraken, Cthulhu, sea creature, sea monster, alien octopus, wet skin, slime, gloss, glistening, water, tank, aquarium, underwater, a puddle, a wet floor; elephant, elephant hide, trunk, a wrinkled trunk, ringed creases along a straight limb, tusks, snout, ears, a worm, a slug, a snake, a sausage, a lizard, a spider, a crab; humanoid, human figure, human silhouette, person, face, head, neck, paired eyes, two large eyes, mouth, arms, legs, hands, fingers, fingertips, knuckles, nails, a fist, a human torso, a human back or shoulders, hips, human skin, a reclining figure, a crouching figure, a kneeling figure, a crawling figure, limbs lying side by side like fingers, a hand on a table; a second Cerebraun, a second figure, a group, a clerk, a human in frame, a hand, a boot; glowing skin, bioluminescence, light-up patterns, neon, stripes, spots, a patch of colour, a colour shift, iridescence, slate-violet skin, violet skin, olive skin, grey-olive skin, sand-grey skin, grey skin, node or bulb at the tip of a limb, a pink tip, a dark tip, a swollen tip; clothing, robe, harness, strap, badge, sash, jewellery, an emblem, a seal, a hexagon, a stamp, a mark of office; screens, monitors, displays, a tablet, a lit slab, a glowing slab, a console, keyboard, dials, gauges, holograms, a desk lamp, a lamp in frame, a lit fitting, an office chair, a chair, a stool, a bench, a human-height desk, a shelf, a ledge, a handrail, a step, stairs, cables, wires, pipework, paper, a page, a sheet, a document, a scroll, a book, a folder, a pen, a stylus, a slate, a quill, ink pot, a seal press, a capsule, a jar, glassware; a window, a viewport, a sky, stars, a planet, a landscape, daylight through the opening, a lit room or corridor seen through the opening, a tall doorway, a narrow doorway, a door leaf, a hinge, a handle, an arch; a tunnel, a cave, a sewer, a dungeon, a crypt, a temple, a ruin, carved stone, stone blocks, masonry, raw concrete, a bunker, a gallery, a museum, a plinth, a sculpture on a plinth, a statue, a clay figure, terracotta, brick, mortar, rubble, moss, damp; readable text, lettering, numerals, labels, signage, glyphs or written characters of any script anywhere in frame; weapons; a close crop, a crop of part of the body, the body's outline leaving the frame, a view from above, a high camera looking down, a top-down view, shallow depth of field, tilt-shift, a distant wide shot with the body small in frame, a whole body flat side-on, a figure at a desk at night; a smooth surface, smooth skin, smooth even tubes, a clean dome, a disc, a lens shape, a cushion, a pouf, a footstool, an ottoman, a beanbag, upholstery, leather furniture, stitched seams, stool legs; warm orange room, teal and orange grade, grey, monochrome, desaturated, muted, drab, sepia, under-exposed; flat studio backdrop, gradient background, glamour lighting, posed to camera. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, creature design, concept art, clay or plasticine sculpture, a model, a figurine, a miniature, a diorama, plush toy, rubber suit, plastic sheen, airbrushed, over-smooth surfaces, a smooth render surface, waxy skin, glossy stock photograph. Landscape orientation.

- **Edit prompt** (round 6, sent with round 5's variation 1):

> Edit the attached photograph and change one object only; keep the body, its skin, its limbs and their positions, the small eyes along the limbs, the pale island, the room, the wide low dark opening, the light, the shadows, the colour, the framing and the grain exactly as they are.
>
> The flat grey object lying on the island must not read as a laptop, a tablet or any present-day device. Replace it with a single plain sealed slab of matte dark-grey composite, about the length of a hand span and noticeably smaller than the object there now, a little thicker than a coin, a simple flat rectangle with square flush edges: no groove, no hinge, no lid, no notch, no chamfer, no bevelled front, no screen, no glass, no light, no port, no button and nothing written or marked on it. It lies flat on the island under the raised limb, which stays held still above it and does not touch it, and it casts a thin plain shadow.
>
> Do not add anything else to the island, and do not add any text. Photographed, not rendered. 16:9 landscape.

### characters/essarith.jpg — run 18 November 2026, not filed
- **Kind:** three rounds, five images, one refusal. Round 1 is § 45's prompt and reference as written. Round 2 is an edit of round 1's variation 2. Round 3 is a fresh round with the same reference (`story-bible/reference-art/prismeri-full-wings-lattice-crop-2026-10-23.jpg`).
- **Round 2 edit prompt** (one take made, one refused):

> Edit the attached photograph; keep the pose, the body, the folded wings standing on their wrist knuckles, the hind feet, the fine tendrils lying back from the nape, the pale seam along the crown, the bare room, the low close ceiling, the warm low side light and the framing exactly as they are.
>
> Change three things only.
>
> First, the head. Make it a blunt, rounded, smooth, closed form like a plain helmet, carried close against the shoulders: no nostrils, no snout, no beak, no muzzle, no jaw line and no lips; the mouth is only a short faint thin seam low on the front, hardly visible. It must not read as the head of a turtle, a tortoise, a lizard or a frog. Keep the one large dark half-lidded eye and the pale frosted seam along the crown.
>
> Second, the surface of the body. It is the living shell of a living being, photographed, and not a cast bronze statue, a metal sculpture or a figurine: matte worn shell plates in worn gold and dull blue with fine natural grain, small chips, faint scuffs and a little dust, no metallic shine, no polish, no patina like bronze; the folded wing membranes dark, thin, dry living skin with fine uneven veins and creases, clearly skin and not metal.
>
> Third, the deck. Remove the scratch marks on the floor in the lower right so that nothing on the floor resembles writing; plain matte grey-white plating with only faint even wear.
>
> Do not add a tail, a longer neck, ears, horns, a crest, clothing, a strap, a second figure, a lamp, a window, furniture or any text. Photographed, not rendered: fine grain, slight softness toward the corners. 16:9 landscape.

- **Round 3 prompt** (§ 45's with the plate reworded as living shell and the metal, statue and turtle negatives added):

> The attached image is a painted figure hanging from a ledge, and it is a reference for the body plan and proportions only: take from it this bat-like build, the wings as forelimbs, the short neck with the head carried close against the shoulders, the hard plated body in worn gold and dull blue, the veined membranes, the long-toed feet and the few long fine tendrils from the back of the head, and nothing else, not its medium, not its paint, not its hanging pose, not its ledge, not its background and not the shell beside it; this figure is on the ground, and this is a photograph, not a painting. Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, at work, never posed to camera, nothing that invites the viewer: Essarith, a Full Wings Prismeri, an adult of a sapient people, not an animal and not a monster, a flier built like a bat and nothing like a person, photographed indoors on the plain matte deck of a kept teaching room, from its own level a metre or two away, a little ahead of it and to one side, the camera low on the deck and not looking down on it. The body rests on the ground the way the people rest on a ground they were not built for: on all four limbs, the folded wings standing on their wrist knuckles like a bat on a flat floor, the hind feet planted behind, the long body carried level and low, the blunt head low and close against the shoulders a hand's breadth above the deck. The body is exactly this: a light, long body on a level spine, with no fur anywhere; the wings are the forelimbs, and there are no arms; each wing a strong veined membrane folded tight along the body and not spread, dark and leathery, the long outer digit lying back along the flank so that the folded wing is plainly a wing and not a leg; the body ends at the hind legs, nothing trails behind it, and there is no tail; the body covered in a hardened exoskeleton of close-fitting plates of living shell, matte like horn, coloured in the shell itself a worn ochre-gold and a dull slate blue, pigment and never metal, with fine growth lines, small chips and dust, heavier through the shoulders than a slender frame, with no gloss, no polish and no glow of its own; a short neck, the blunt rounded head carried close against the shoulders, smooth and closed like a plain helmet, with no beak, no jaw line, no ears and no ear openings, no nostrils, no snout and no whiskers; two large dark forward eyes set low and wide on the head, heavy-lidded and half-closed, with no visible white, no lashes and no shine, as unexpressive as a moth's; along the top of the skull from the brow back to the nape a single narrow continuous stripe of smooth pale frosted glass inlaid flush, one unbroken seam, without segments or separate pieces; and from the back of the skull ridge behind that seam, never from the mouth or the chin, five or six long fine tendrils rooted at the nape, thin and straight as drawn glass, faintly crystalline, lying back flat along the shoulders and the plate of the back, not standing up and not hanging, touching nothing, so that the face and the chin are bare and smooth; a small hard lipless mouth shut to a thin seam, and no teeth. The hands: at the wrist of each folded wing, the hand is a simple Y, three thin jointed fingers and nothing more, each ending in one small curved claw, curled closed against the wrist and holding nothing, no finger spread flat on the deck. The head is turned a little away from the camera and down, toward something low and off-frame ahead of it, so the face is seen in three-quarter profile from behind the eye, one half-lidded dark eye catching the warm light. The head, the shoulders and the near folded wing carry the picture and fill about half the frame's width, sharp; the hind end of the body goes soft toward the bulkhead behind and the whole outline is not insisted on; it is the only being in frame, with no second figure, no hand, no boot, no cadet, no shell, no First Wings. The place is a plain kept room: matte grey-white deck plating with scuffs and wear, a plain bulkhead behind, and a plain flat ceiling close above the body and in frame, bare of fittings, so that there is nothing anywhere to hang from; no window, no door, no furniture, no table, no sheet, no instrument, no screen, nothing on the walls. The light is warm, amber and rose, from low in the room and out of frame, so the plate is lit from the side and a little from below and the ceiling is in soft shadow; the room itself is neutral and does not go orange. Quiet, still, at work, between one thing said and the next. Natural, full, true-to-life colour and normal exposure: the worn gold and dull blue of the plate strong under the warm light against the neutral grey of the deck and the bulkhead. Photographed, not rendered: real shell with fine texture, small chips and dust on it, a real folded membrane with uneven living veins and creases, real worn plating with scuffs; shot on a moderate lens close to the deck with shallow depth of field, the head and the near wing sharp and the body going soft behind, slight softness toward the corners, fine grain, the small untidy imperfections a real photograph keeps. Negative: bronze, brass, gilded metal, cast metal, a metal statue, a bronze sculpture, a figurine, an ornament, patina, verdigris, a turtle, a tortoise, a beak; dragon, wyvern, drake, gargoyle, a crouching gargoyle, griffin, demon, imp, lizard body, lizard head, turtle head, long neck, long tail, tail of any length, horns, spikes, a crest of spines, a crest, a frill, scales, armour plates on a lizard; a bat as itself, bat ears, a nose leaf, fur, hair, a fox face, a dog face, a rodent face, a mouse face, a monkey face, a frog face, a catfish, barbels, whiskers, a moustache, a beard, a snout, a muzzle; a humanoid figure, an upright biped, a figure standing up, a figure sitting up, a human face or torso, separate arms, arms and hands, a figure in a suit, a figure in armour, a knight, an alien in a bodysuit, a grey alien, fairy, angel, costume, clothing, a harness, a strap, a belt, a collar, a saddle, a pack, a load, a uniform, a badge, a rank tab, an emblem; a hanging figure, a figure upside down, wings spread, wings open, a figure in flight, a ledge, a spire, a tower, a forest, a sky, stars, the Lattice, sky lines, a window, a view; antennae, feelers, a crown of tendrils, tendrils from the face, tendrils standing up, glowing tendrils, light-up tendrils, a second figure, a group, a shell, a cocoon, a pod, an egg, a slender grey-violet figure; a ring or band round the head, a crown, a diadem, a circlet, a headband, a necklace, a row of small crystals, beads, gems, studs, jewels, segments or plates on the head; a face turned to the camera, an open mouth, a grin, a smile, teeth, fangs, tongue, cartoon face, big expressive eyes, big cute eyes, eyes with whites or doll highlights, eyebrows; a human hand, fingernails, fingers spread on the floor, a paw; fire, flame, a torch, a lamp in frame, a lit fitting, a lantern, a glowing orb, a ceiling light, a strip light, neon, a glowing body, a glowing outline, bioluminescent skin; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; human figures, a classroom, desks, chairs, a table, a lectern, a whiteboard, a screen, a hologram, a tablet, a book, paper, a map, a chart, a globe, a model; a cave, a stone wall, bricks, a door, a corridor receding, girders, rivets, pipes, a city, buildings; daylight from a window, a sunset, an aurora, a nebula, a grid, laser beams; oversaturated neon, fantasy glow, sparkles, magic particles, fairy lights, rainbow sheen, god rays, lens flare; an orange room, a room gone orange all over, teal and orange grade, grey, monochrome, desaturated, muted, drab, sepia. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar style, Disney style, DreamWorks style, creature render, character design sheet, mascot, cute creature, chibi, digital painting, oil painting, painterly, brush texture, canvas, illustration, concept art, fantasy art, storybook, comic art, anime, ink outlines, line art, watercolour, sketch, airbrushed, plastic sheen, over-smooth surfaces, glossy stock photograph. Landscape orientation.

**What the run teaches.** A Cerebraun needs its body reference: without it the same words drew a face and a kneeling torso. An edit holds a body and adds a sign of a mind (three vanes for one) or swaps one object (a slab for a laptop); it does not turn a statue into a living thing. *Worn gold* plate draws metal, and rewording it as horn draws painted clay, so the Prismeri surface is not fixed by a word for the material.
### characters/essarith.jpg — head study and two rounds, 18 November 2026, not filed
- **Kind:** seven images through `scripts/image-edit.js` on `gemini-3.1-flash-image`, no refusal. Head study: two frames, 4:3, 1K, text only. Round 1: take A text only; take B the same text behind a lead paragraph, with § 85's round 3 variation 2 attached as a pose reference. Round 2: two variations, text only. Round 3: one edit of round 2's variation 2. All full-figure takes 16:9, 2K. The record of what each drew is in `images.md` § 45.
- **Head study prompt:**

> Close documentary photograph, taken with a real camera in available light, of the head and shoulders only of Essarith, an adult of a sapient non-human people called the Prismeri: a flier with a hardened living exoskeleton, not an animal, not a monster, not a machine and not a statue. The head is seen in three-quarter view from the front and a little to one side, at its own eye height, against a plain out-of-focus matte grey-white wall of a bare room. The head is turned a little down and away, attending to something low and off-frame; nothing looks at the lens.
>
> The head, exactly, by structure:
>
> The head is blunt, broad and short: wider from side to side than it is long from front to back, and it does not taper forward. Its front is a broad, nearly flat, nearly vertical plate, like the blunt end of a block with rounded corners. There is no muzzle, no snout, no beak, no pointed tip and no jaw line anywhere on the side of the head.
>
> Two large dark eyes sit side by side on that flat front plate, low on it, near its lower edge, wide apart, both facing straight forward the way the head faces, so that in this three-quarter view both eyes are seen at once, the near one whole and the far one foreshortened. Each eye is a large smooth dark oval set flush in the plate, wholly dark with no white, no iris ring and no pupil, with only a soft dull sheen. The upper half of each eye is covered by one smooth hard lid of the same plate as the head, lowered like a shutter, so the eyes are half closed and calm. There is no wrinkled skin around the eyes, no eyelashes, no brow hair. No eye is on the side of the head.
>
> The mouth is small and is on the underside of the head, below the front plate, facing down toward the floor: a short hard-edged slot that cannot be seen from this side except as the lower rim of the front plate. No mouth line runs back along the side of the head; below and behind the eyes the side of the head is one smooth unbroken plate. No nostrils, no ears, no ear openings, no teeth.
>
> Above the eyes the front plate rises to a single low keel along the midline of the head, running from the brow straight back to the nape, and set flush along the top of that keel is one narrow continuous stripe of pale frosted glass, an unbroken seam, with no segments and no separate stones. From the very back of that keel, at the nape, five or six long fine straight filaments, thin as drawn glass and faintly crystalline, lie back flat over the shoulders; none stands up, none hangs, none is near the face.
>
> The head is carried close against the shoulders on a short neck that is as thick as the head itself, so the head never looks as if it were pushed out of an opening. The neck is covered all round by two or three narrow overlapping bands of the same hard plate as the head, close-fitting, with only a hairline of darker flexible skin in the joints. There is no bare leathery neck, no wrinkled neck skin, no loose folds, no collar and no rim that the head emerges from. Behind the neck the shoulders are heavier, covered by a few large smooth plates that follow the shape of the muscles beneath, long and overlapping from front to back; the plates are not a mosaic of polygons and there is no domed shell on the back.
>
> The surface is the living shell of a living person and is photographed as such: matte, like horn or thick fingernail, slightly translucent at its thin edges where the light comes through warm, with fine growth lines, tiny pits and pores, a few old scuffs and a little dust; coloured in the shell itself, ochre-gold clouded and mottled unevenly with slate blue, paler at the plate edges, darker in the joints; never metallic, never painted, never glazed. Light is soft warm daylight-balanced room light from one side and slightly below, with a neutral grey-white room; normal exposure and natural full colour. Deep focus across the whole head and the shoulders; moderate lens; fine grain; the small untidy imperfections of a real photograph.
>
> Negative: turtle, tortoise, terrapin, turtle head, turtle beak, hooked beak, a beak of any kind, a head emerging from a shell, a carapace, scutes, polygonal plates, a domed shell, wrinkled reptile neck, lizard, snake, dragon, dinosaur, bird, parrot, owl, frog, toad, fish, seal, dolphin; eyes on the sides of the head, bulging eyes, eyes on top of the head, round cartoon eyes, eyes with whites, catchlights like a doll; insect, mantis, ant, beetle, crab, lobster, mandibles, antennae, feelers, whiskers, barbels; a human face, a nose, lips, cheeks, a chin, a skull, a grey alien, a mask, a visor, a helmet with a slit, a robot, a machine, armour worn by a person, rivets, panels, seams of metal; bronze, brass, gold metal, cast metal, patina, verdigris, a statue, a sculpture, a figurine, clay, plasticine, ceramic, glaze, paint, lacquer, plastic sheen, a museum model, a prop; a crown, a circlet, a row of gems, beads or studs on the head; glowing parts, lit eyes; text, lettering, numerals; 3D render, CGI, video-game render, concept art, illustration, digital painting, oil painting, shallow depth of field, blurred shoulders, studio backdrop, black background.

- **Round 1 prompt** (take A as it stands; take B with the lead paragraph that follows it):

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, at work, never posed to camera, nothing that invites the viewer: Essarith, a Full Wings Prismeri, an adult of a sapient people, not an animal, not a monster, not a machine and not a statue, a flier built like a bat and nothing like a person, photographed indoors on the plain matte deck of a kept teaching room. The camera is at the eye height of a standing person, three or four metres away, a little ahead of the figure and to one side, with a moderate lens and deep focus, so that the whole body, the deck, the bulkhead and the ceiling are all sharp.
>
> The body rests on the ground the way the people rest on a ground they were not built for: on all four limbs, the folded wings standing on their wrist knuckles like a bat on a flat floor, the hind feet planted behind, the long body carried level and low, the head carried low and forward on the line of the spine, never raised, never upright. The body is exactly this: a light, long body on a level spine, with no fur anywhere; the wings are the forelimbs, and there are no arms; each wing a strong veined membrane folded tight along the body and not spread, dark and leathery, the long outer digit lying back along the flank so that the folded wing is plainly a wing and not a leg; the body ends at the hind legs, nothing trails behind it, and there is no tail. At the wrist of each folded wing the hand is a simple Y, three thin jointed fingers each ending in one small curved claw, curled closed against the wrist and holding nothing.
>
> The body is covered in a hardened living exoskeleton: a few large, long, smooth plates that follow the shape of the muscles beneath and overlap from front to back, heavier through the shoulders, with hairlines of darker flexible skin in the joints. The plates are not a mosaic of polygons, there are no scutes, and there is no domed shell on the back. The colour is in the shell itself: the plates are a deep dull slate blue over most of their surface, with worn gold only along the plate edges, the ridges and the joints, and a little gold clouding on the shoulders; the blue is plainly the larger colour. The shell is matte like horn or thick fingernail, a little translucent at its thin edges, with fine growth lines, tiny pits, old scuffs and dust; never metal, never painted, never glazed.
>
> The head, exactly: blunt, smooth and short, one single smooth plate of the same slate blue with a little gold at its edges, rounded like a river pebble, with no muzzle, no snout, no beak, no pointed tip. Two large dark eyes sit side by side at the front of the head, low on it and wide apart, both facing forward the way the head faces, so that from the camera both are seen, the near one whole and the far one foreshortened; each is a large smooth dark oval set flush in the plate, wholly dark, with no white, no ring and no shine beyond a soft dull sheen, its upper half covered by one smooth hard lid of the same plate lowered like a shutter, so the eyes are half closed and calm; no wrinkled skin round the eyes. No eye is on the side of the head. The mouth is small and on the underside of the head, facing the deck, and cannot be seen; no mouth line runs along the side of the head, and below and behind the eyes the head is smooth unbroken plate. No nostrils, no ears, no teeth. Along the top of the head, from the brow straight back to the nape, runs one narrow continuous stripe of pale frosted glass set flush in a low keel, an unbroken seam without segments. From the back of that keel at the nape, never from the mouth or chin, five or six long fine filaments, thin and straight as drawn glass, lie back flat along the shoulders and the back, touching nothing else. The neck is short and as thick as the head, covered all round by two or three narrow overlapping bands of the same plate, so that head, neck and shoulders run into one another without a step: no bare neck, no wrinkled neck skin, no collar, and no opening that the head comes out of.
>
> The head is turned a little away from the camera and down, toward something low and off-frame ahead of it on the deck, attending to it; it is the only being in frame.
>
> The place is a plain kept room: matte grey-white deck plating with light scuffs, a plain bulkhead behind, and a plain flat ceiling low and close above, bare of fittings, with nothing anywhere to hang from. In the bulkhead behind and to one side there is one plain open doorway of ordinary human height, a simple rectangular opening with no door, no handle and no sign, dim beyond; the top of the back of the figure comes to about two fifths of the height of the doorway, which shows its size. No window, no furniture, no instrument, no screen, nothing on the walls. The light is warm, amber and rose, from low in the room and out of frame, so the plate is lit from the side and the ceiling is in soft shadow; the room itself stays neutral grey-white and does not go orange. Natural, full, true-to-life colour and normal exposure: slate blue and worn gold against neutral grey. Photographed, not rendered: real living shell and real folded membrane with uneven veins and creases, a real room, fine grain, the small untidy imperfections a real photograph keeps.
>
> Negative: turtle, tortoise, terrapin, turtle head, beak, hooked beak, a head coming out of a shell, carapace, scutes, polygonal plates, wrinkled reptile neck, ochre shell, olive shell, brown shell; dragon, wyvern, gargoyle, a crouching gargoyle, griffin, demon, lizard, dinosaur, long neck, tail of any length, horns, spikes, crest, frill, scales; a bat as itself, bat ears, nose leaf, fur, hair, a fox, dog, rodent, monkey, frog, fish or seal face, whiskers, barbels, snout, muzzle; eyes on the sides of the head, bulging eyes, eyes with whites, doll highlights; insect, beetle, mantis, crab, lobster, woodlouse, armadillo, pangolin, mandibles, antennae, feelers; a humanoid figure, an upright biped, a figure standing or sitting up, a human face, nose, lips, chin, a grey alien, a mask, a visor, a helmet, a robot, armour worn by a person, separate arms, a human hand, fingers spread on the floor, a paw; clothing, harness, strap, collar, badge, emblem; a hanging figure, wings spread, a figure in flight, a ledge, spire, forest, sky, window; a crown, circlet, row of gems, beads or studs on the head; tendrils from the face, tendrils standing up, glowing tendrils; a second figure, people, a classroom, desks, chairs, a table, a screen, a hologram; a lamp in frame, a lit fitting, a ceiling light, a glowing body; text, lettering, numerals, signage; bronze, brass, gold metal, cast metal, patina, statue, sculpture, figurine, clay, plasticine, ceramic, glaze, paint, lacquer, plastic sheen, museum model, prop, miniature, diorama, tilt-shift, shallow depth of field, blurred background, camera on the floor; an orange room, teal and orange grade, grey monochrome, desaturated, drab, sepia; 3D render, CGI, video-game render, creature render, concept art, illustration, digital painting, oil painting. Landscape orientation.

- **Round 1, take B, lead paragraph:**

> The attached image is a reference for the pose and the body plan only: take from it the way this body rests on a floor on the wrist knuckles of its folded wings with the hind feet behind, the folded membranes along the flank, the level back with no tail, and the fine filaments lying back from the nape. Take nothing else from it: not its head, which is wrong and is replaced by the head described below; not its colour; not its surface, which looks like painted clay; not its camera position; not its room. Make a new photograph.

- **Round 2 prompt:** round 1's, with three changes. The head paragraph was replaced by the one below. The membrane clause *dark and leathery* became *a different material from the shell: thin living skin, warm grey-brown, with rose showing where the low light comes through its folds, uneven veins and fine creases*. The joints clause *with hairlines of darker flexible skin in the joints* became *with soft, paler, creased living skin showing in the joints and at the roots of the limbs*.

> The head, exactly: blunt, broad and short, wider from side to side than it is long from front to back, and it does not taper forward at all. Its front is a broad, nearly flat, nearly vertical plate, like the blunt end of a block with rounded corners; the head ends there, squarely. There is no muzzle, no snout, no beak, no pointed tip, no chin and no jaw. Two large dark eyes sit side by side on that flat front plate, low on it, near its lower rim and wide apart, both facing straight forward the way the head faces, so that from the camera both are seen at once on the front of the head, the near one whole and the far one foreshortened; each is a large smooth dark oval set flush in the plate, wholly dark and wet, with no white and no ring, its upper half covered by one smooth hard lid of the same plate lowered like a shutter, so the eyes are half closed and calm; no wrinkled skin round the eyes. There is no eye on the side of the head: the side of the head is one smooth unbroken plate from the front corner back to the shoulder, with no eye, no mouth line, no groove and no nostril on it. The lower edge of the front plate is a plain straight rim, and the small mouth is hidden under it on the underside of the head, facing the deck; nothing of it shows. No nostrils, no ears, no teeth. Along the top of the head, from the brow straight back to the nape, runs one narrow continuous stripe of pale frosted glass set flush in a low keel, an unbroken seam without segments. From the back of that keel at the nape, never from the mouth or chin, five or six long fine filaments, thin and straight as drawn glass, lie back flat upon the shoulder plates and the back like loose hairs laid down, not lifted and not arching. The head sits directly against the shoulders: the neck is so short that no length of neck shows, only one narrow band of plate between the back of the head and the first shoulder plate, as wide as the head itself, so that the head is the blunt front end of the body and not a head carried on a neck: no bare neck, no row of neck rings, no wrinkled neck skin, no collar, and no opening that the head comes out of.

- **Round 3 edit prompt** (one take, the pick):

> Edit the attached picture; keep everything exactly as it is: the pose, the body, the blunt squared head with its pale seam along the crown and its one dark eye, the slate-blue plates with worn gold at their edges, the rose-brown folded membranes, the hind feet, the bare room, the open doorway, the low ceiling, the light, the colour and the framing.
>
> Change two things only.
>
> First, the two front hands on the deck, at the wrists of the folded wings. Each now ends in four or five spread clawed toes like a paw. Make each a simple Y instead: the wrist knuckle itself rests on the deck and carries the weight, and from it come exactly three thin jointed fingers, each ending in one small curved claw, curled closed and tucked back against the wrist, not spread, not gripping, none lying flat along the deck. No paw, no toes fanned out, no human hand.
>
> Second, the fine filaments at the nape. Keep them five or six, thin and straight as drawn glass, rooted at the back of the pale seam, and lay them down flat along the shoulder plates and the back, plainly visible against the blue plate; none lifted into the air, none arching.
>
> Change nothing else. Add nothing: no second figure, no object, no text, no light fitting, no tail.

## 2026-11-18 — Aoibheann Ní Mheara and Ines Abara tried again, not filed (Fable, desktop)

The record is in `story-bible/images.md`, under each entry (§§ 17 and 33). **Tool** throughout: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K, through `scripts/image-edit.js`, two takes a round: round 1 from a prompt file as text only, round 2 as an edit of one round 1 take. Eight images made, none refused, none filed, none on a plate of his. Emeka Lindahl's draft prompt (`images.md` § 87) was not run.

### characters/aoibheann-ni-mheara.jpg — run 18 November 2026, not filed
- **Round 1 prompt** (text only):

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer: Aoibheann Ní Mheara, Keeper of the Rolls of a settled green world of the Celtic Union in the year 2826, a tall straight woman in her sixties with pale skin, age spots at the hands and temples, a long narrow face, grey eyes and white hair pinned low at the nape, at work in the reading room of the registry she keeps. She stands side-on to the camera at a long plain table of pale oiled timber, seen from the waist up, holding in both hands one thin rigid matte sheet about the size of a large book, pale grey like slate paper, unlit, read by the daylight like a page, its face tilted away from the camera so that nothing on it can be seen; her face is lifted from the sheet and turned out through the glass to the ground beyond, checking the line she holds against the land itself: not toward the camera. The room is where the old and the fabricated meet on purpose: one wall behind her is the old outer wall of dressed pale grey limestone, kept and clean; the inner walls and ceiling are a seamless pale matte composite shell that curves into the floor and ceiling in rounded coves with no corners, no skirting, no cornice; the far wall is one continuous face of closed flush stores, tall narrow panels of pale matte composite with hairline seams and no handles, no locks, no labels, where the rolls are kept, nothing on show. The window is the whole of one side of the room: a single wide curved sheet of clear glazing set straight into the stone from floor to ceiling, with no frame, no sash, no glazing bars, no catches, no shutters, no sill. Through it, in soft overcast daylight: a dry-stone field boundary running away across gently rising pasture, a cut harvest field beyond it in stubble, a few low bent silver-barked trees, a far stony upland in mist; at the boundary wall, small in the middle distance, one low field-tending machine at work resetting a fallen stone, a squat matte grey-green body no higher than the wall on four slender jointed legs with two slim working arms, no head, no face, no eyes, no lights, no wheels, no markings; and in the pale daytime sky above the upland two moons, faint and chalk-white as a daytime moon is, one larger gibbous disc and one much smaller disc set well apart from it. She wears a plain long high-necked dress of soft matte wool in deep green, well made, closing down the front in a clean seam that shows no fastening, long sleeves to the wrist, and over it a plain grey wool wrap; no jewellery, no brooch, no badge, no chain of office. The daylight from the glazing falls across her face, her hands and the table; the room has light in it from no visible source. On the table nothing but two more of the same thin matte sheets lying flat and blank. Quiet, exact, a registrar checking her ground. Muted palette: deep green wool, grey wrap, pale stone, pale composite, green and gold fields, grey sky. Photographed, not rendered: real skin with pores, lines and age spots, real wool with its weave and pile, stone with its tooling, timber with its grain; a moderate lens at standing eye height, deep enough focus that the room and the field both hold, slight softness toward the corners, high-ISO grain in the shadows, a touch under-exposed, muted natural colour. Negative: a sash window, a casement window, a timber window frame, brass catches, shutters, curtains, blinds, a window sill, a radiator; a library, shelves of books, ledgers, gilt lettering, scrolls, parchment, paper documents, files, filing cabinets, drawers with handles, a quill, an inkwell, a pen, a candle, a lantern, an oil lamp, a wax seal, spectacles, reading glasses, a lectern, a throne, a crown; a tablet computer, a laptop, a phone, a glowing screen, a lit display, a bezel, a monitor, a console, a keyboard, holograms, projected light; a visible lamp, light fitting, ceiling panel light, spotlight or bulb; a Celtic cross, tartan, plaid, a fringed shawl, a bonnet, a Victorian dress, a lace collar, a nun's habit, buttons; tractors, cars, roads, telegraph poles, power lines, wire fences, fence posts, gates of steel tube, a farmhouse, a drone, an airship, a blimp, a quadcopter, a flying saucer, a helicopter, an aircraft, a humanoid robot, a robot dog, a robot with a head or eyes; a sun and moon together, a ringed planet, a huge moon filling the sky; readable text, lettering, numerals, signage, labels, maps with writing, branding or written characters of any script anywhere in frame; grime, rust, peeling paint, stains, cracks, debris, cobwebs, dust; twentieth-century business suit, blouse and blazer, necktie, science-fiction costume, glowing trim, bodysuit, uniform; flat studio backdrop, glamour lighting, corporate headshot, posed smiling to camera, eye contact; weapons. Render negatives: 3D render, CGI, architectural visualisation, octane render, video-game render, animated film still, concept art, matte painting, airbrushed, over-smooth skin, waxy skin, plastic sheen. Landscape orientation.

- **Round 2 edit prompt** (sent with round 1's take 1):

> Edit this photograph, changing only what is listed and leaving everything else exactly as it is: the woman, her face, hair, hands, dress and wrap, the sheet she holds, the table and the two sheets on it, the room, the stone, the landscape, the trees, the dry-stone walls, the two pale moons, the light, the grain and the colour all stay unchanged. 1. Remove the dark vertical bar that divides the glazing, so the window is one single unbroken sheet of clear glass from the stone edge to the right edge of the frame, the landscape continuing naturally behind where the bar was. 2. Remove every fence post, stake, pole and wire from the fields and from along the stone walls, leaving only grass, stubble and dry-stone wall; the only boundaries in the view are dry-stone walls. 3. On the small grey-green field machine at the wall, remove the small knob on top of its body and any marks, panels or lettering on its side, so its body is one plain smooth unmarked matte shell; keep its legs, its arms, its size and its position. Add nothing new. Keep it a photograph: same lens, same focus, same grain. No text, lettering or numerals anywhere.

### characters/ines-abara.jpg — run 18 November 2026, not filed
- **Round 1 prompt** (text only):

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame, a still portrait at rest, never posed to camera, modest, nothing that invites the viewer, a reconstruction of a likeness from the past: Ines Abara, a philosopher of measurement, a woman of forty-five of Afro-Portuguese heritage with deep brown skin, a round full face, heavy-lidded dark eyes, a broad nose and a small mouth held closed, black hair cut very close to the scalp and greying at the temples, of middle height and a broad strong build, seated alone in a plain, clean, newly kept room on Earth in the middle of the twenty-second century, at rest. The building is of its own time, the careful heavy building of the climate decades: outer walls more than an arm's length thick, the window a single large fixed pane of clear glass set deep in the wall with no frame showing, no sash, no glazing bars, no handle, no sill board, its deep reveals rounded smoothly into the wall face; the base of the reveal is a built-in window seat, one broad smooth ledge of pale laminated timber fitted wall to wall, and she sits on that ledge, three-quarters on to the camera, her back near one rounded reveal, her face turned away from the camera toward the glass, her eyes on the grey light and not on the lens, her hands resting still in her lap one over the other, doing nothing; no event, no action, no one else, the still composed face of someone thinking and not being watched. She wears a plain long-sleeved dress of soft matte dark blue woven cloth with a high round neck and no visible fastening, falling loose from the shoulder to below the knee, the sleeves to the wrist, nothing printed on it; no jewellery, no spectacles, no wristwatch. The walls are smooth pale mineral plaster in perfect repair, even and unmarked, clean, freshly kept, meeting a seamless pale polished floor in a small rounded cove with no skirting board; nothing on the walls, no furniture at all but the built-in ledge. Through the glass only flat grey daylight and a pale overcast sky, no ground, no sea, no building, no tree. The window's light falls soft and grey across the side of her face, her shoulder and her hands, the far side of the room in soft clean shadow. Quiet, exact, a person and the light. Muted palette: dark blue cloth, deep brown skin, pale plaster, pale timber, grey window light. Photographed, not rendered: real skin with pores, fine lines and the slight unevenness of a living face, cloth with a real weave and creases at the elbow and lap, timber with its grain; a moderate lens at seated eye height, slight softness toward the corners, high-ISO grain in the shadows, a touch under-exposed so the window holds, muted natural colour. Negative: peeling plaster, flaking paint, cracks, stains, damp, mould, scuffs, bare floorboards, worn floor, grime, dust, neglect, an abandoned room, an old house, a derelict flat; a sash window, a casement window, a timber or white plastic window frame, glazing bars, a window handle, a window sill, a skirting board, a radiator, a light switch, a wall socket, a light fitting, a lamp, a pipe, a vent grille; a chair, a kitchen chair, a wooden chair with a slatted back, a stool, a sofa, a cushion, a desk, a table, paper, documents, a certificate, a book, a pen, a laptop, a computer, a tablet, a phone, a screen, a monitor, a display, a hologram, glowing lines, a clock, a plant, a picture on the wall, a mirror, curtains, blinds; a coastline, a flood, the sea, waves, a ruined building, a city skyline, a skyscraper, a street, a car, a road, a landmark, a tree, a garden, a habitat ring in the sky, a spacecraft; readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; a second person, a child, a crowd; a business suit, a blazer, lapels, a necktie, a blouse with buttons, a T-shirt, a hoodie, jeans, a printed fabric, African print with a bold pattern, a headwrap, a scarf, a low neckline, a sleeveless dress, bare arms, science-fiction costume, glowing trim, bodysuit, a uniform; a face turned to the camera, eye contact, a smile, a pose, a hand under the chin; make-up, lipstick, earrings; flat studio backdrop, gradient background, glamour lighting, beauty lighting, corporate headshot, teal and orange grade, sepia. Render negatives: 3D render, CGI, architectural visualisation, octane render, video-game render, animated film still, concept art, matte painting, digital painting, oil painting, illustration, airbrushed, over-smooth skin, waxy skin, plastic sheen. Landscape orientation.

- **Round 2 edit prompt** (sent with round 1's take 2):

> Edit this photograph, changing only what is listed and leaving everything else exactly as it is: the woman, her face, hair, hands and dress, the window's shape and its rounded surround, the timber ledge she sits on, the walls, the floor, the light on her, the grain and the colour all stay unchanged. 1. Through the glass there must be only flat, even, featureless pale grey overcast sky from top to bottom: remove the faint darker band and horizon line in the lower half of the window, so that there is no sea, no water, no horizon, no ground, no cloud shapes, nothing at all but even grey daylight. Add nothing new. Keep it a photograph: same lens, same focus, same grain. No text, lettering or numerals anywhere.

## 2026-11-18 — Essarith from the front, and Emeka Lindahl run: nothing filed (Fable, desktop)

The record is in `story-bible/images.md`, under each entry (§§ 45 and 87). **Tool** throughout: Gemini, `gemini-3.1-flash-image`, 16:9 at 2K. Seven images in all, no refusal.

### characters/essarith.jpg — round 4, from the front, 18 November 2026, not filed
- **Kind:** four images through `scripts/image-edit.js`. Two takes from the text below with a lead paragraph and round 3's pick attached (`C:\work\sr-essarith-1118\r3\v1.jpg`, off-repo); two takes from the text alone. Neither the lattice crop nor the morning's ochre frames were sent.
- **Prompt** (round 2's, with the camera, the eyes' clause, the hands and the head's turn rewritten for a view from the front):

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, at work, never posed to camera, nothing that invites the viewer: Essarith, a Full Wings Prismeri, an adult of a sapient people, not an animal, not a monster, not a machine and not a statue, a flier built like a bat and nothing like a person, photographed indoors on the plain matte deck of a kept teaching room. The camera is at the eye height of a standing person, three or four metres away, in front of the figure and only a little to one side of the line its body lies along, so that the figure is seen from the front three-quarters: the flat front of the head is toward the camera, the near shoulder and the near folded wing are in front, and the long body runs back and away behind them, foreshortened, to the hind feet. A moderate lens and deep focus, so that the whole body, the deck, the bulkhead and the ceiling are all sharp.
>
> The body rests on the ground the way the people rest on a ground they were not built for: on all four limbs, the folded wings standing on their wrist knuckles like a bat on a flat floor, the hind feet planted behind, the long body carried level and low, the head carried low and forward on the line of the spine, never raised, never upright. The body is exactly this: a light, long body on a level spine, with no fur anywhere; the wings are the forelimbs, and there are no arms; each wing a strong veined membrane folded tight along the body and not spread, a different material from the shell: thin living skin, warm grey-brown, with rose showing where the low light comes through its folds, uneven veins and fine creases, the long outer digit lying back along the flank so that the folded wing is plainly a wing and not a leg; the body ends at the hind legs, nothing trails behind it, and there is no tail. Each folded wing stands on the deck on the bare knuckle of its wrist, a rounded callused knob, and that knob alone touches the deck. The hand at each wrist is small: exactly three thin jointed fingers, each ending in one small curved claw, folded up shut against the wrist like a closed fist held off the floor, holding nothing; no finger lies on the deck, none is spread, none grips the floor.
>
> The body is covered in a hardened living exoskeleton: a few large, long, smooth plates that follow the shape of the muscles beneath and overlap from front to back, heavier through the shoulders, with soft, paler, creased living skin showing in the joints and at the roots of the limbs. The plates are not a mosaic of polygons, there are no scutes, and there is no domed shell on the back. The colour is in the shell itself: the plates are a deep dull slate blue over most of their surface, with worn gold only along the plate edges, the ridges and the joints, and a little gold clouding on the shoulders; the blue is plainly the larger colour. The shell is matte like horn or thick fingernail, a little translucent at its thin edges, with fine growth lines, tiny pits, old scuffs and dust; never metal, never painted, never glazed.
>
> The head, exactly: blunt, broad and short, wider from side to side than it is long from front to back, and it does not taper forward at all. Its front is a broad, nearly flat, nearly vertical plate, like the blunt end of a block with rounded corners; the head ends there, squarely. There is no muzzle, no snout, no beak, no pointed tip, no chin and no jaw. Two large dark eyes sit side by side on that flat front plate, low on it, near its lower rim and wide apart, both facing straight forward the way the head faces, so that from the camera both eyes are seen at once, whole, side by side on the front of the head, a hand's breadth of plain plate between them; each is a large smooth dark oval set flush in the plate, wholly dark and wet, with no white and no ring, its upper half covered by one smooth hard lid of the same plate lowered like a shutter, so the eyes are half closed and calm; no wrinkled skin round the eyes. There is no eye on the side of the head: the side of the head is one smooth unbroken plate from the front corner back to the shoulder, with no eye, no mouth line, no groove and no nostril on it. The lower edge of the front plate is a plain straight rim, and the small mouth is hidden under it on the underside of the head, facing the deck; nothing of it shows. No nostrils, no ears, no teeth. Along the top of the head, from the brow straight back to the nape, runs one narrow continuous stripe of pale frosted glass set flush in a low keel, an unbroken seam without segments. From the back of that keel at the nape, never from the mouth or chin, five or six long fine filaments, thin and straight as drawn glass, lie back flat upon the shoulder plates and the back like loose hairs laid down, not lifted and not arching. The head sits directly against the shoulders: the neck is so short that no length of neck shows, only one narrow band of plate between the back of the head and the first shoulder plate, as wide as the head itself, so that the head is the blunt front end of the body and not a head carried on a neck: no bare neck, no row of neck rings, no wrinkled neck skin, no collar, and no opening that the head comes out of.
>
> The head is lowered and looks down at a point on the deck just in front of it and a little to one side of the camera, attending to something there that is out of frame; it does not look at the camera and its eyes do not meet the lens. It is the only being in frame.
>
> The place is a plain kept room: matte grey-white deck plating with light scuffs, a plain bulkhead behind, and a plain flat ceiling low and close above, bare of fittings, with nothing anywhere to hang from. In the bulkhead behind and to one side there is one plain open doorway of ordinary human height, a simple rectangular opening with no door, no handle and no sign, dim beyond; the top of the back of the figure comes to about two fifths of the height of the doorway, which shows its size. No window, no furniture, no instrument, no screen, nothing on the walls. The light is warm, amber and rose, from low in the room and out of frame, so the plate is lit from the side and the ceiling is in soft shadow; the room itself stays neutral grey-white and does not go orange. Natural, full, true-to-life colour and normal exposure: slate blue and worn gold against neutral grey. Photographed, not rendered: real living shell and real folded membrane with uneven veins and creases, a real room, fine grain, the small untidy imperfections a real photograph keeps.
>
> Negative: turtle, tortoise, terrapin, turtle head, beak, hooked beak, a head coming out of a shell, carapace, scutes, polygonal plates, wrinkled reptile neck, ochre shell, olive shell, brown shell; dragon, wyvern, gargoyle, a crouching gargoyle, griffin, demon, lizard, dinosaur, long neck, tail of any length, horns, spikes, crest, frill, scales; a bat as itself, bat ears, nose leaf, fur, hair, a fox, dog, rodent, monkey, frog, fish or seal face, whiskers, barbels, snout, muzzle; eyes on the sides of the head, bulging eyes, eyes with whites, doll highlights; insect, beetle, mantis, crab, lobster, woodlouse, armadillo, pangolin, mandibles, antennae, feelers; a humanoid figure, an upright biped, a figure standing or sitting up, a human face, nose, lips, chin, a grey alien, a mask, a visor, a helmet, a robot, armour worn by a person, separate arms, a human hand, fingers spread on the floor, a paw; clothing, harness, strap, collar, badge, emblem; a hanging figure, wings spread, a figure in flight, a ledge, spire, forest, sky, window; a crown, circlet, row of gems, beads or studs on the head; tendrils from the face, tendrils standing up, glowing tendrils; a second figure, people, a classroom, desks, chairs, a table, a screen, a hologram; a lamp in frame, a lit fitting, a ceiling light, a glowing body; text, lettering, numerals, signage; bronze, brass, gold metal, cast metal, patina, statue, sculpture, figurine, clay, plasticine, ceramic, glaze, paint, lacquer, plastic sheen, museum model, prop, miniature, diorama, tilt-shift, shallow depth of field, blurred background, camera on the floor; an orange room, teal and orange grade, grey monochrome, desaturated, drab, sepia; 3D render, CGI, video-game render, creature render, concept art, illustration, digital painting, oil painting. Landscape orientation.

- **Lead paragraph, the two takes with the reference:**

> The attached image shows this same individual in this same room, seen from the side. Keep from it the individual: the slate-blue plates with worn gold at their edges, the squared blunt head with the pale seam along its crown, the rose-brown folded wing membranes, the level back with no tail, the hind feet, the bare room with its one open doorway and low ceiling, and the warm low light. Change the camera position: this new picture is taken from in front of the figure, as described below. And correct one thing the attached image has wrong: in it one eye sits on the side of the head. In this picture there is no eye on the side of the head; the two eyes are both on the flat front plate, side by side, as described below. Do not copy the attached image's side view, its side eye, the small mouth notch at the front corner of its head, or its fingers spread on the deck. This is a photograph of a living body, not a render.

### characters/emeka-lindahl.jpg — run 18 November 2026, not filed
- **Kind:** two takes through `scripts/image-prompts.js --generate --only emeka-lindahl --variations 2`, with `src/images/chapters/s03e03c02.jpg` sent as the room reference; then one edit of take 2 through `scripts/image-edit.js`. Readings approved by Dermot the same day (*Run, no heritage*).
- **Prompt, as run** (the entry in `images.md` § 87):

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer: Emeka Lindahl, the Chief Ranger who runs the watch at a small Star Ranger post that monitors a stretch of fold approach on the outward frontier, far from anywhere, in the late autumn of the year 2829 UCSD, eight centuries from now; a man in his middle fifties with mid-brown skin, a long plain face with a broad brow and deep-set dark eyes, the skin under them a little heavy from short sleep, close-cropped hair more grey than black, clean-shaven, of middle height and a spare, upright build. He stands at the watch desk on his own forenoon watch, seen from the waist up and three-quarters on, one hand resting flat on the desk and the other squaring a thin matte sheet against a second one that lies beside it; his face is turned down and a little aside to the two sheets, working something through, steady and unhurried: not toward the camera. The desk is a plain slab growing from the side wall of the compartment, with nothing on it but the two thin rigid matte sheets, unlit, read by the room's light like pages, their faces angled away so that nothing on them can be seen. The room is the post's watch compartment, the same room as the reference image, by day: small, plain and kept, smooth dark indigo-grey composite walls with rounded coving and a low ceiling; in the far wall behind him, at chest height, one long low sealed housing of dark matte ceramic with a single honest seam and six small round steady points of the same soft pale light, evenly spaced in one row, and nothing else; above it one wide low port of very thick glass showing black space with a thin scatter of faint stars. The room has an even low daytime light in it from no source that can be seen. He wears a dark blue-grey field shell with a stand collar, matte, plain and well kept, and at the collar one small plain-finished rank tab, a short bar beside a single ring, with no lettering; nothing else on the shell. Quiet and exact: a man who runs the watch. The reference image shows the room only: keep its walls, its housing with six points and its port, and take no person from it. Muted palette: indigo, blue-grey, mid-brown skin, grey hair, six small pale points. Photographed, not rendered: real skin with pores and lines, cloth with a real weave and creases at the elbow, a moderate lens at standing eye height, slight softness toward the corners, high-ISO grain in the shadows, a touch under-exposed, muted natural colour. Negative: looking at the camera, eye contact, a smile, a posed portrait, folded arms; a second person, a crowd; glowing screens, monitors, banks of displays, holograms, projected light, light on his face from a display, tablets, laptops, keyboards, phones; dials, gauges, knobs, toggle switches, exposed cables, pipes, ducting, riveted steel, bolts, hazard stripes, grime, rust, stains; ceiling light panels, strip lights, visible lamps or bulbs, desk lamps; office swivel chairs, stacking chairs, filing cabinets, paper, printed books, ring binders, clipboards, pens, mugs, wristwatches, spectacles, jewellery; a beard, a moustache, a cap, a headset, an earpiece; jeans, hooded tops, present-day jackets, a naval dress uniform, epaulettes, a tie, lapels, buttons, medal ribbons, name tapes, shoulder patches with lettering; a ship's bridge, a captain's chair, a helm, a control console, joysticks, a windscreen, a planet, a nebula, a galaxy, a spacecraft outside, lens flare; any text, lettering, numerals, signage or logos anywhere. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, concept art, matte painting, airbrushed, over-smooth skin, waxy skin, plastic sheen. Landscape orientation.

- **Edit prompt** (one take, of take 2; the pick):

> Edit the attached photograph; keep everything exactly as it is: the man, his face and expression, his pose and both hands, the two thin grey sheets, the desk, the dark blue-grey shell, the room, the housing with its small pale points, the port with its stars, the light, the colour, the grain and the framing.
>
> Change two things only.
>
> First, his hair. Keep it close-cropped and the same shape, and make it more grey than black: mostly grey throughout, with only a little black left in it. The hair stays matte and natural, a real man's greying hair.
>
> Second, the small rank tab at his collar. It now shows a ring alone on a square patch. Make it one small plain dull-metal tab, the same size, fixed flat to the collar, showing a short plain bar and beside it one small plain ring: a bar and a ring together, side by side, nothing else. No lettering, no numerals, no second tab.
>
> Change nothing else. Add nothing: no second person, no object, no text, no light fitting.

## 2026-11-19 — S01E00C08, Isren's side of the conversation: one round, nothing filed (Fable, desktop)

The record is `images.md` § 61, the 19 November note *Isren's side of the conversation*. **Tool:** Gemini, `gemini-3.1-flash-image`, `scripts/image-edit.js` as a reference-led generation, 2K, 16:9. Four images; none refused; none filed.

### chapters/s01e00c08.jpg — not re-filed 19 November 2026
- **Kind:** a fresh generation with reference images, to a new composition (*the turn*)
- **Sources:** takes 1 and 2: the filed `s01e00c08.jpg`, `characters/ulessa.jpg`, `characters/isren-farrowkin.jpg`, whole. Takes 3 and 4: the filed `s01e00c08.jpg` and `characters/ulessa.jpg` only, with the opening paragraph cut to *Two images are attached* and its sentence about the third image removed; nothing else differs.
- **Run:** one round, four takes. All four failed the critic's rung 1 on Isren's body (a snouted quadruped in 1 and 4, a tortoise or hippo in 2, a rhinoceros in 3). Take 2 drew the divided fan the composition asks for. Sheet: `negative-examples/s01e00c08-isren-turn-round-2026-11-19.jpg`.
- **Prompt (takes 1 and 2, as sent):**

> Three images are attached. The first is an earlier photograph of the same two beings on the same terrace: use it only for what the two beings, the terrace and the evening light look like, and do not repeat its camera position or its framing. The second shows the tall being's whole body plan. The third shows the low being's vanes and their scale beside its body; do not copy its room, and do not copy its body as a hard rounded shell.
>
> Make a new documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus, the camera held at knee height. Two people of two different non-human peoples are talking on an open terrace in the last low sun of an evening in the year 2826. Neither is an animal, neither is a plant, and neither is shaped like a human. They are at ease, attending to each other, never posed to camera.
>
> The camera stands behind and to one side of the low being, close to her, and looks past her toward the tall one, so that the low being's body fills the lower left of the frame and the tall being stands in the right half, a few paces beyond, facing back toward her. The sun is very low, far off to the left and out of frame, raking across the terrace from left to right.
>
> THE LOW BEING, lower left, large and near, is a Verdani. What is in view is the near flank of her body, cut by the left edge and the bottom edge of the frame, so that neither end of her and no complete outline is seen. Her body is low, broad and soft, far wider than it is tall, no higher than a person's knee: one thick, loose, deeply creased grey-green hide with pores, small scars and a sparse fine nap that catches the sun, sagging in heavy folds toward the floor. It is skin all over, with no shell, no plates, no hard rim, no head, no neck, no tail, no face, no eyes and no mouth anywhere. Under the near edge of the hide two short thick supports of the same creased hide are planted on the floor, each ending in a flat soft pad with no toes, no claws and no nails. The side of her body nearest the tall being is raised a little on its supports and the far side is settled low, so the whole low body is plainly tilted and leaning toward the tall being.
>
> From the top of her hide, each out of its own collar of creased skin, rise six broad thin vanes of living leaf tissue, deep green, finely veined, with a few dry brown margins and small tears, and a single row of small dark rounded nodes like beads along the outer leading edge of each vane. The vanes are in two plainly different groups. The three on the left are opened wide and laid back flat toward the low sun at the left, glowing translucent where the light comes through them; their tips leave the frame at the top and the left. The three on the right, the ones nearest the tall being, have turned away from the sun: they are drawn half closed, narrower and stiffer, in shadow on their near faces, and they are bent over to the right, toward the tall being's head, each at a slightly different angle, their beaded leading edges pointed at that head across a clear gap of open air, the way a listener leans toward someone speaking. The split between the three vanes given to the sun and the three vanes given to the other person is the first thing the eye reads.
>
> On the floor beside her raised edge lies one thin rigid matte pale-grey sheet, the size of a large book, flat, blank and unlit.
>
> THE TALL BEING, in the right half, is a Mnemari, as the first and second images show her. Three tall thick jointed legs in deep ochre and russet hide rise from broad soft padded feet set wide apart on the terrace, arch upward and meet at a hub high above, with darker umber bands across the hub. Beneath the hub her deep rounded body hangs on a thick wrinkled column, with one broad pale oval hearing membrane flush on its side. Under that slung body hang exactly three short slender working limbs, close together and curled, no more than three and no fewer, each ending in one closed rounded bud of the same hide; they touch nothing. From the front of the slung body her long neck, as thick as her legs, rises to one heavy creased knuckle and folds down and forward, so that her smooth blunt rounded head hangs low at the height of the low being's bent vanes, an arm's length in front of them and touching none. Her head is seen from the side, turned to the low being: one small dark deep-set eye low on the near side, two short narrow breathing slits just behind it, no mouth line, no lips, no nostrils, no ears, no second eye in view. The hub, the column, the slung body and all three working limbs are inside the frame; two of her feet are in view on the floor.
>
> The two heads of attention face each other across the middle of the frame: her lowered head from the right, the three bent vanes from the left, with open air and the far parapet between them.
>
> The place is a kept terrace of a Federation facility: a wide clean floor of pale seamless composite, a low plain parapet of the same material running across the distance, a calm gold and pale rose sky above it, long soft shadows running to the right. Nothing else is on the terrace: no furniture, no planting, no railings, no lamp, no light fitting, no door, no sign, and nobody else in frame.
>
> Photographed, not rendered: real living skin and real leaf tissue with their small honest marks, natural full colour, normal exposure, fine grain heavier in the shadows, a real lens with slight softness toward the corners and a little flare from the low sun.
>
> Negative: tortoise, turtle, shell, carapace, scutes, plates, armadillo, crab, beetle, insect, centipede, slug, seal, elephant, clawed feet, toes, toenails; dinosaur, sauropod, giraffe, horse, camel, llama, a fourth leg, four or more working limbs, hooves, fists, hands, fingers; potted plant, fern, palm, banana plant, houseplant, a plant growing from soil, a rock, a boulder, a cushion, a tarpaulin, cloth; head, face, eyes or mouth on the low being; mouth line, smile, teeth or forward-facing eyes on the tall being; any human, any person, any hand; clothing, straps, harness; screens, glowing displays, lamps, light fittings; grime, rust, stains, debris; readable text, lettering, numerals, signage, labels or logos anywhere. Render negatives: 3D render, CGI, video-game render, animated film still, clay or plasticine, plastic sheen, toy, figurine, miniature, tilt-shift, airbrushed, over-smooth surfaces, concept art.

## 2026-11-19 — Verdani body options: design studies, nothing filed (Fable, desktop)

The record is `species-design.md`, *Verdani — the body, as options*. **Tool:** Gemini, `gemini-3.1-flash-image`, `scripts/image-edit.js` with no reference image, 2K, 16:9. Ten images; none refused; none filed. Sheet: `negative-examples/verdani-body-options-2026-11-19.jpg`. Every prompt is four paragraphs in one order: the opening, the body, the vanes, the close. The opening, the vanes and the close are the same in every study except where marked.

### Studies, round 1: options A, B and C, two takes each
- **Kind:** fresh generations, a design study; not a prompt of record
- **Opening (all three):**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus from near to far, the camera held at standing eye height a few paces away, a three-quarter view looking a little down. One person of a non-human people, a Verdani, is alone on an open kept terrace in the low sun of an evening in the year 2826, reading a sheet. She is not an animal, not a plant and not shaped like a human. She is at ease and at work, never posed to camera. The sun is low, off to the left and out of frame.

- **Body, option A (the apron):**

> THE BODY. Her body is one low, broad, soft mass, about as wide as a dining table and no higher than a person's knee, uneven in outline like a heavy hide settled on the floor, not round and not domed: its top is nearly flat and sags a little between the roots of the vanes. The hide runs down on every side all the way to the floor and lies out on the floor in a loose, uneven, pleated hem, spread a hand's width onto the composite all the way round, with no gap beneath it, no underside in view, no legs, no feet and nothing lifting it anywhere. She rests on the whole of her own edge.
>
> From the middle of her top, between the vane roots, rise two slender pale grey-green tendrils, each no thicker than a thumb and as long as a forearm, smooth and tapering to a plain blunt tip. Together they hold one thin rigid matte pale-grey sheet, the size of a large book, blank and unlit, upright in the air above her body at the right, each tendril's tip curled once round an edge of the sheet.

- **Body, option B (the stays):**

> THE BODY. Her body is one low, broad, soft cushion of hide, about as wide as a dining table and no higher than a person's knee, uneven in outline, its top nearly flat and sagging a little between the roots of the vanes, resting on the floor. From all round its edge, in every direction like the guy lines of a tent, exactly ten long thick stays of the same pleated hide run outward flat along the floor, lying on the composite for their whole length, each about as long as the body is wide and tapering, of unequal lengths, each ending in one flat round pad pressed to the floor, with no toes and no claws. The stays are spread evenly all the way round her, toward the camera, away from it and to both sides alike. She is anchored by all of them.
>
> Two of the stays at the right are lifted a little off the floor and together hold one thin rigid matte pale-grey sheet, the size of a large book, blank and unlit, tilted up toward the vanes, the blunt tip of each stay curled once round an edge of the sheet.

- **Body, option C (the pillars, the filed body):**

> THE BODY. Her body is one low, broad, flat rounded mound of hide, about as wide as a dining table and no higher than a person's knee, with no head end and no distinguishable front, its rim plain and unbroken all the way round. It rests close to the floor on exactly eight short thick straight pillars of the same hide, spaced evenly around its rim and mostly hidden beneath it, each a plain column ending in one flat round pad on the floor, with no toes, no claws and no joints.
>
> On the floor beside her at the right lies one thin rigid matte pale-grey sheet, the size of a large book, flat, blank and unlit.

- **Vanes (all three):**

> From the top of her hide, each out of its own collar of pleated skin, rise six broad thin vanes of living leaf tissue, deep chlorophyll green, finely veined, with a few dry brown margins and small tears, and a single row of small dark rounded nodes like beads along the outer leading edge of each vane; the tallest reach about the height of the top of the doorway behind. The vanes are in two plainly different groups. The four on the left are opened wide and laid back toward the low sun at the left, glowing translucent where the light comes through them. The two on the right are drawn half closed, narrower and darker, and bent over to the right and downward, each at its own angle, so that their beaded leading edges point at the sheet from a hand's width away, the way a reader bends to a page.

- **Close (all three):**

> Her hide is thick, matte and dry, grey-green, in long loose pleats with a fine fibrous grain like the sheath of a great leaf, with small scars and honest marks. It is soft living skin all over, with no shell, no plates, no hard rim, no head, no neck, no tail, no snout, no face, no eyes and no mouth anywhere, and no end of her body differs from any other.
>
> The place is a kept terrace of a Federation facility: a wide clean matte floor of pale seamless composite, and behind her a plain pale wall of the same material with one plain open doorway of ordinary human height, a simple rectangular opening with no door, no handle and no sign, dim beyond, which shows her size. A calm gold and pale rose sky above the wall, long soft shadows running to the right. Nothing else is on the terrace: no furniture, no planting, no pot, no railing, no lamp, no light fitting, and nobody else in frame.
>
> Photographed, not rendered: real living skin and real leaf tissue with their small honest marks, natural full colour, normal exposure, fine grain heavier in the shadows, a real lens with slight softness toward the corners.
>
> Negative: tortoise, turtle, shell, carapace, scutes, hippopotamus, rhinoceros, elephant, elephant skin, anteater, tapir, armadillo, seal, walrus, manatee, slug, snail, sea slug, octopus, squid, starfish, spider, crab, insect, centipede, caterpillar; head, neck, tail, snout, trunk, face, eyes, mouth, toes, toenails, claws, hooves, paws, fingers, hands; potato, tuber, gourd, rock, boulder, mound of earth, tree stump, tree roots, potted plant, pot, planter, soil, fern, palm, banana plant, houseplant, cabbage; cushion, beanbag, tarpaulin, tent, cloth, rug; any human, any person; clothing, straps, harness; screens, glowing displays, lettering, text, numerals; render, CGI, 3D model, clay, sculpture, toy, plastic, wet shine, mirror floor, shallow depth of field, miniature.

### Studies, round 2: option A lower and lobed, four takes
- **Kind:** fresh generations. Two takes with the round 1 opening; two with the opening below, the camera at knee height from the side. Vanes and close as round 1.
- **Body:**

> THE BODY. Her body is very low and very broad: a thick, soft, living mat of hide lying on the floor, about two metres across and nowhere higher than a person's shin, far wider than it is tall, like a heavy hide laid out flat. Its outline on the floor is uneven and lobed, with five or six broad shallow lobes of unequal size, never a circle and never an oval. Its top is nearly level, with shallow hollows and low swells, and no dome, hump or mound anywhere. At its edge the hide thins and lies out flat on the composite in broad loose folds, with no gap beneath it, no frill, no underside in view, no legs, no feet and nothing lifting it anywhere. She rests on the whole of herself.
>
> The six vanes are rooted far apart, spread across the whole width of her top, each on its own low swell, an arm's length or more between one root and the next, never bunched at the middle.
>
> From near the right-hand vanes rise two slender pale grey-green tendrils, each no thicker than a thumb and as long as a forearm, smooth and tapering to a plain blunt tip. Together they hold one thin rigid matte pale-grey sheet, the size of a large book, blank and unlit, upright in the air above her body at the right, each tendril's tip curled once round an edge of the sheet.

- **Opening, knee-height pair:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus from near to far, the camera held at knee height a few paces away, looking level across the terrace at her from the side. One person of a non-human people, a Verdani, is alone on an open kept terrace in the low sun of an evening in the year 2826, reading a sheet. She is not an animal, not a plant and not shaped like a human. She is at ease and at work, never posed to camera. The sun is low, off to the left and out of frame.

## 2026-11-19 — The apron: one study, Isren Farrowkin re-made, S01E00C08 re-made (Fable, desktop)

The record is `species-design.md`, *The study round on A, and what it started*; `images.md`, *Missing portraits*, `isren-farrowkin.jpg`, and § 61, *The apron round*. **Tool:** Gemini, `gemini-3.1-flash-image`, `scripts/image-edit.js`, 2K, 16:9. Twenty-four images; none refused. Two filed: `characters/isren-farrowkin.jpg` and `chapters/s01e00c08.jpg`. Sheets: `negative-examples/verdani-apron-study-2026-11-19.jpg`, `isren-farrowkin-apron-rounds-2026-11-19.jpg`, `s01e00c08-apron-round-2026-11-19.jpg`.

### Study on option A — four takes, none filed
- **Kind:** fresh generations, no reference image; a design study, not a prompt of record
- **Opening, takes 1 and 2 (eye height):**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus from near to far, the camera hand-held at standing eye height a few paces away, a three-quarter view looking a little down. One person of a non-human people, a Verdani, is alone on an open kept terrace in the low sun of an evening in the year 2826, reading a sheet. She is not an animal, not a plant and not shaped like a human. She is at ease and at work, never posed to camera. The sun is low, off to the left and out of frame, hard and raking.

- **Opening, takes 3 and 4 (knee height, cut by the left edge):**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus from near to far, the camera hand-held at knee height two paces from her, looking level across the terrace at her from the side. One person of a non-human people, a Verdani, is on an open kept terrace in the low sun of an evening in the year 2826, reading a sheet. She is not an animal, not a plant and not shaped like a human. She is at ease and at work, never posed to camera. The sun is low, off to the left and out of frame, hard and raking. Her body is large and near and fills the lower left of the frame; the left edge of the frame cuts through her body, so that her far side is out of frame and no complete outline of her is seen.

- **Body, tendrils, vanes, hide, place, close and negative (all four):**

> THE BODY. Her body is one low, broad, soft living mass, about as wide as a dining table and as high as a person's knee at its highest point, lower everywhere else, three times as wide as it is tall. Its outline is uneven and lopsided: three or four broad shallow swells of different heights with slack hollows between them, like a heavy thick hide lying over what is under it. It is not round, not domed, not a ball, not gathered at the top and not the same on any two sides. The hide runs down on every side all the way to the floor and lies out on the floor in a loose, uneven, pleated hem, a hand's width wide in some places and two in others, with no gap beneath it, no underside in view, no legs, no feet and nothing lifting it anywhere. She rests on the whole of her own edge, and her own weight spreads the hem.
>
> From her top, among the vane roots, rise exactly two slender pale grey-green tendrils, each no thicker than a thumb and no longer than a forearm, matte, the same living skin as the hide. Between them they hold one thin rigid matte pale-grey sheet, the size of a large book, blank and unlit, upright in the air above her body at the right. The sheet's lower edge rests in the bend of one tendril and its far edge leans on the other; the last hand's length of each tendril lies straight and flat along an edge of the sheet and ends in a plain blunt rounded tip of the same colour, with no hook, no curl, no claw, no sucker and no swelling. Nothing pierces, clips or wraps the sheet.
>
> From her top, each out of its own collar of pleated skin, rise six broad thin vanes of living leaf tissue, deep chlorophyll green, finely veined, with a few dry brown margins and small tears, and a single row of small dark rounded nodes like beads along the outer leading edge of each vane; the tallest reach about the height of the top of the doorway behind. The six roots are set far apart, scattered across the whole width of her top, each on a different swell of the hide, a forearm's length or more of bare hide between one root and the next; they never share one point and never stand in a bunch. The vanes are in two plainly different groups. The four on the left are opened wide and laid back toward the low sun at the left, glowing translucent where the light comes through them. The two on the right are drawn half closed, narrower and darker, and bent over to the right and downward, each at its own angle, so that their beaded leading edges point at the sheet from a hand's width away, the way a reader bends to a page.
>
> Her hide is thick, matte and dry, grey-green going to grey-brown in the hollows: deep irregular creases that cross one another, open pores, pale healed scars, small patches of dry flaking skin, a little dust in the folds, and a sparse fine pale nap of short hairs that catches the low sun as a bright fringe along every fold and along the top of her outline. The hard low sun rakes across it from the left and throws a small shadow in every crease. It is soft living skin all over, with no shell, no plates, no hard rim, no head, no neck, no tail, no snout, no face, no eyes and no mouth anywhere, and no end of her body differs from any other.
>
> The place is a kept terrace of a Federation facility: a wide clean matte floor of pale composite laid in large panels with hairline joints, and behind her a plain pale wall of the same material with one plain open doorway of ordinary human height, a simple opening with rounded corners, no door, no handle and no sign, dim beyond, which shows her size. A calm gold and pale rose sky above the wall, her long hard shadow running to the right across the floor. Nothing else is on the terrace: no furniture, no planting, no pot, no railing, no lamp, no light fitting, and nobody else in frame.
>
> Photographed, not rendered: a hand-held photograph by someone who was there, real living skin and real leaf tissue with their small honest marks, natural full colour, normal exposure, visible film-like grain heavier in the shadows, a real lens with softness toward the corners, a little veiling flare from the low sun at the left edge, the highlights on the nap slightly blown.
>
> Negative: sack, tied sack, bag, bulb, onion, garlic, pumpkin, gourd, potato, tuber, boulder, rock, a rock with a plant on it, mound of earth, termite mound, poured clay, slab of clay, puddle, pancake, melted wax, lava, heap of cloth, drapery, tent, tarpaulin, cushion, beanbag, rug; hook, hooks, curled tips, claws, clips, wires, cables, stalks with eyes, more than two tendrils, long tendrils, vines, octopus, squid, starfish; tortoise, turtle, shell, carapace, footstool, hippopotamus, rhinoceros, elephant, anteater, tapir, seal, walrus, manatee, slug, snail, sea slug, spider, crab, insect, caterpillar; head, neck, tail, snout, trunk, face, eyes, mouth, legs, feet, toes, claws, paws, fingers, hands; tree stump, tree roots, potted plant, pot, planter, soil, fern in a pot, palm, banana plant, houseplant, cabbage; any human, any person; clothing, straps, harness; screens, glowing displays, lettering, text, numerals; render, CGI, 3D model, sculpture, clay, plasticine, toy, figurine, plastic, wet shine, glossy, smooth even surface, studio light, mirror floor, shallow depth of field, miniature, tilt-shift, concept art.

### characters/isren-farrowkin.jpg — re-filed 19 November 2026
- **Kind:** fresh generations with no reference image (rounds 1 and 2), then image edits of two of the takes
- **Filed:** round 2, close band, take 1, after edit B, take 1; `import-image.ps1 -MaxEdge 1200`, finish strength 1
- **Round 1 prompt (four takes), as sent:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus, hand-held by someone standing two paces from her and looking down at her at a slant, the way a standing person looks at a low table. A Verdani, a delegate of a photosynthetic people, is at work in a quiet terrace room off a Federation assembly hall in the year 2826, reading a sheet she holds. She is a person at her work, never posed to camera. She is not an animal, not a plant and not shaped like a human.
>
> THE FRAMING. Only part of her is in frame, close. Her low broad body lies across the lower left and the middle of the picture and is cut by the left edge and by the bottom edge of the frame, so that no complete outline of her is seen and neither side of her is an end. Because the camera looks down on her, what is mostly seen is the broad top of her body, with the roots of her vanes scattered across it. At the lower right, her near edge is in view where it meets the floor. Her tallest vanes leave the frame at the top.
>
> THE BODY. Her body is one low, broad, soft living mass, as wide as a dining table every way and nowhere higher than a person's knee, three times as wide as it is tall, with no long axis and no end. Its top is a broad uneven field of thick hide: three or four shallow swells of different heights with slack hollows between them. It is not round, not domed and not gathered anywhere. At the lower right the hide runs down to the floor and lies out on the floor in a thick fleshy hem of the same creased skin, loosely pleated, a hand's width of it resting flat on the floor, with no gap beneath it, no shadow under it, no underside, no legs, no feet and nothing lifting it. She rests on the whole of her own edge.
>
> THE VANES. From her top, each out of its own puckered collar of skin, rise six broad thin vanes of living leaf tissue, the deep chlorophyll green of a forest canopy, finely veined, with a few dry brown margins and small tears, and a single row of small dark rounded nodes like beads along the outer leading edge of each vane. The six roots are set far apart, scattered across the whole of her top, each on a different swell, a forearm's length or more of bare hide between one root and the next; they never share one point and never stand in a row or a bunch. The vanes are in two plainly different groups. Four, at the left and behind, are opened wide and laid back toward the daylight that comes from the left, glowing translucent where the light passes through them. Two, at the right, nearest the sheet, are drawn half closed, narrower, darker and stiffer, and are bent over to the right and down toward the sheet, each at its own slightly different angle, so that the beaded leading edge of each is turned to the face of the sheet from a hand's width away. The four are given to the light and the two are given to the page: that difference is the first thing the eye reads.
>
> THE SHEET. From the hide between the roots of the two bent vanes rise exactly two short slender tendrils of the same matte living skin, pale grey-green, each no thicker than a thumb and no longer than a forearm. Between them they hold up one thin rigid matte pale-grey sheet, the size of a large book, unlit, low, its lower edge only a hand's width above her hide, tilted so that its written face is toward the two bent vanes and away from the camera; the camera sees only its plain blank back. One tendril lies straight along the sheet's lower edge and the other straight up its near side edge; each ends in a plain blunt rounded tip of the same colour lying flat against the edge, with no hook, no curl, no claw, no sucker, no knob and no swelling. Nothing pierces, clips or wraps the sheet.
>
> THE SKIN. Her hide is thick, matte and dry, grey-green going to grey-brown in the hollows: deep irregular creases that cross one another, open pores, pale healed scars, small patches of dry flaking skin, and a sparse fine pale nap of short hairs that catches the light as a bright fringe along the folds. It is soft living skin all over, with no shell, no plates, no hard rim, no head, no neck, no tail, no snout, no face, no eyes and no mouth anywhere.
>
> THE ROOM. A kept, almost empty room: a matte floor of pale composite, walls of pale seamless material that is not quite stone, meeting the floor in a rounded cove. Daylight comes in low from the left through tall plain glazing that is mostly out of frame, a strip of it and of a sunlit terrace beyond visible at the far left; the light crosses her top from the left and throws a small shadow in every crease and a long shadow of the vanes across the floor to the right. At the back of the room, small, one plain open doorway with rounded corners, of ordinary human height, no door and no handle, which shows her size. No furniture, no lamp, no light fitting, nobody else.
>
> Photographed, not rendered: a hand-held photograph by a colleague who was in the room, real living skin and real leaf tissue with their small honest marks, natural full colour, normal exposure, visible grain heavier in the shadows, a real lens with softness toward the corners, a little veiling flare from the glazing at the left edge.
>
> Negative: sack, tied sack, bag, bulb, onion, pumpkin, gourd, potato, tuber, boulder, rock, a rock with a plant on it, mound of earth, poured clay, slab of clay, puddle, melted wax, heap of cloth, blanket, a blanket over an animal, drapery, tent, tarpaulin, cushion, beanbag, rug; hook, hooks, curled tips, claws, clips, wires, cables, rods, stalks, eye stalks, more than two tendrils, long tendrils, vines, octopus, squid, starfish; tortoise, turtle, shell, carapace, footstool, hippopotamus, rhinoceros, elephant, walrus, tusk, seal, manatee, anteater, tapir, slug, snail, sea slug, spider, crab, insect, caterpillar, sail-backed lizard; head, neck, tail, snout, trunk, face, eyes, mouth, nostrils, legs, feet, toes, paws, fingers, hands; tree stump, potted plant, pot, planter, soil, fern in a pot, palm, banana plant, houseplant, cabbage; any human, any person; clothing, straps, harness; screens, glowing displays, lettering, text, numerals, handwriting, marks on the sheet; hinged door, door handle; render, CGI, 3D model, sculpture, clay, plasticine, toy, figurine, plastic, wet shine, glossy, smooth even surface, studio light, mirror floor, shallow depth of field, miniature, tilt-shift, concept art.

- **Round 2, from above (two takes):** round 1 with its opening, framing, body and room paragraphs replaced by these four; the vanes, sheet, skin, close and negative paragraphs unchanged:

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus, hand-held by someone standing right beside her and looking steeply down across her, the way a standing person looks down at a low wide table they are standing at. A Verdani, a delegate of a photosynthetic people, is at work in a quiet terrace room off a Federation assembly hall in the year 2826, reading a sheet she holds. She is a person at her work, never posed to camera. She is not an animal, not a plant and not shaped like a human.
>
> THE FRAMING. Only part of her is in frame, close, seen from above. The broad top of her low body fills the whole lower half of the picture from side to side: her hide runs out of the left edge, the right edge and the bottom edge of the frame, so that she has no side, no end and no outline anywhere at the left, the right or the bottom. The only edge of her in view is her far edge, beyond the vanes, in the upper half of the picture, where her hide comes down to the floor on the far side of her and lies out flat on it; beyond that edge is the bare floor of the room. Her tallest vanes leave the frame at the top.
>
> THE BODY. Her body is one low, very broad, soft living mass, wider than a dining table every way and nowhere higher than a person's knee, with no long axis and no end. Its top is a broad uneven field of thick hide: shallow swells of different heights with slack hollows between them. It is not round, not domed and not gathered anywhere. Toward its edge it thins and slopes down, and at the far edge the hide lies out on the floor in a loose pleated hem of the same grey-green creased skin, the same colour to its very margin, a hand's width of it resting flat on the floor in uneven scallops, with no gap beneath it, no shadow under it, no underside, no legs, no feet, no lip and nothing lifting it. She rests on the whole of her own edge.
>
> THE ROOM. A kept, almost empty room: a matte floor of pale composite in large panels with hairline joints, seen beyond her far edge, and at the top of the frame the foot of a pale seamless wall meeting the floor in a rounded cove. Daylight comes in low from the left through tall plain glazing that is out of frame; it crosses her top from the left, throws a small shadow in every crease, and lays the long shadows of the vanes across her hide and the floor to the right. No furniture, no lamp, no light fitting, nobody else.

- **Round 2, close band (two takes; the prompt of record, whole in `images.md`):** round 1 with its opening, framing, body and room paragraphs replaced by these four:

> Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus, hand-held, low and close, the camera an arm's length from her at the height of her vane roots. A Verdani, a delegate of a photosynthetic people, is at work in a quiet terrace room off a Federation assembly hall in the year 2826, reading a sheet she holds. She is a person at her work, never posed to camera. She is not an animal, not a plant and not shaped like a human.
>
> THE FRAMING. Only part of her is in frame, very close. Her hide is a broad creased band along the whole bottom of the picture, a fifth of its height, running out of the left edge, the right edge and the bottom edge of the frame, its top line uneven, with no side, no end, no rim, no edge and no outline of her body in view anywhere. Everything above that band is her vanes, her two tendrils and the sheet, with the room behind. Her tallest vanes leave the frame at the top.
>
> THE BODY. What is in view of her body is only the top of it: a broad uneven field of thick hide in shallow swells with slack hollows between them, continuing out of frame on every side. No legs, no feet, no underside.
>
> THE ROOM. Behind her, out of focus only a little, a kept, almost empty room: pale seamless walls of a material that is not quite stone, and at the left tall plain glazing in slim plain frames with a sunlit terrace beyond. Daylight comes in low from the left through the glazing, passes through the four open vanes, and throws a small shadow in every crease of her hide. At the back of the room, small, one plain open doorway with rounded corners, no door and no handle. No furniture, no lamp, no light fitting, nobody else.

- **Edit A (of the close band, take 1; two takes; not kept):**

> Edit this photograph. Keep it the same photograph: the same six vanes with their beads, tears and light, the same sheet, the same hide with its creases, scars and fine hairs, the same room, glazing, doorway, light, grain and colour. Change only two things.
>
> First, the camera is now a step further back and a little higher, so more of her is seen at the bottom right. The band of hide still runs out of the left edge and the bottom edge of the frame. But at the right, below the sheet, her body now comes to its edge inside the frame: the same creased grey-green hide slopes down low to the pale floor and lies out on the floor in a loose, uneven, pleated hem of the same skin, the same grey-green colour and the same creases and fine hairs to its very margin, a hand's width of it resting flat on the floor. There is no gap under it, no shadow beneath it, no underside, no leg, no foot, no toe, no lip, no rim and no end shaped like a head or a snout: the edge is low, slack and thin, like the edge of a heavy hide lying on a floor. A little of the pale matte floor of the room is seen beyond the hem at the lower right. Her body stays low, no higher than a knee, and wide.
>
> Second, the two thin supports holding the sheet are tendrils of her own living skin, not rods: the same matte grey-green as her hide, slightly paler, finely creased, each rising out of its own small puckered collar in the hide, a little uneven in thickness and gently curved, each ending in a plain blunt rounded tip that lies flat against the edge of the sheet. No hook, no curl, no clip.
>
> Do not add anything else. No face, no eyes, no mouth, no head, no legs, no feet, no cloth, no blanket, no person, no furniture, no text. Photographed, not rendered.

- **Edit B (of the close band, take 1; two takes; take 1 filed):**

> Edit this photograph. Keep it the same photograph: the same vanes with their beads, tears and light, the same sheet in the same place, the same hide with its creases, scars and fine hairs, the same room, glazing, doorway, light, grain, colour and framing. Change only one thing.
>
> The two thin pale supports holding the sheet are tendrils of her own living skin, not rods, wires or stalks: the same matte grey-green as her hide, slightly paler, finely creased, each rising out of its own small puckered collar in the hide, a little uneven in thickness and gently curved, each ending in a plain blunt rounded tip of the same colour that lies flat against the edge of the sheet. No hook, no curl, no clip, no knob.
>
> Do not add or move anything else. No face, no eyes, no mouth, no legs, no cloth, no person, no furniture, no text. Photographed, not rendered.

- **Edit C (of the frame from above, take 2; two takes; not kept):**

> Edit this photograph. Keep it the same photograph: the same camera position looking down across her, the same vanes with their beads, tears and light, the same sheet, the same grey creased hide with its scars, flaking patches and fine hairs filling the lower half and running out of the left, right and bottom edges, the same floor, wall, light, grain and colour. Change only two things.
>
> First, the green pleated material lying on the floor beyond her is not cloth. It is the edge of her own body: the same thick living hide as the rest of her, the same grey-green-brown colour, the same deep creases, pores and fine pale hairs, continuous with her top with no seam and no change of colour. Her hide slopes down on the far side and lies out on the floor in a thick, loose, uneven hem of that same skin, only a hand's width or two wide, in heavy slack scallops, matte and dry. It has no woven texture, no fabric folds, no straight fold lines and no green dye. No gap or shadow beneath it.
>
> Second, the two thin pale supports holding the sheet are tendrils of her own living skin, not hoses or cables: the same matte grey-green as her hide, slightly paler, finely creased, each rising out of its own small puckered collar in the hide, each ending in a plain blunt rounded tip that lies flat against the edge of the sheet. The two vanes nearest the sheet are drawn half closed, narrower and darker, and bent over toward the face of the sheet.
>
> Do not add anything else. No face, no eyes, no mouth, no legs, no cloth, no blanket, no rug, no person, no furniture, no text. Photographed, not rendered.

### chapters/s01e00c08.jpg — re-filed 19 November 2026
- **Kind:** a fresh generation with two reference images, then one image edit of the kept take, then a region pasted back by hand
- **Sources:** `characters/ulessa.jpg` and the new `characters/isren-farrowkin.jpg`, in that order. The old filed frame was not sent.
- **Filed:** take 2 of 4; the edit's take 1 over it (rail gone, two limbs added); the box 2105,650 to 2235,960 of the 2752×1536 frame pasted back from take 2 with a 5 px feather, which removes one added limb and leaves three. `import-image.ps1 -MaxEdge 1600`, finish strength 1.
- **Prompt (four takes), as sent; the prompt of record in `images.md`:**

> Two images are attached. The first shows the tall being's whole body plan, hide and colour: take her body from it and nothing else, not its room, table, chairs or sheets. The second shows the low being: her creased grey-green hide, her green vanes with beads along their edges each rising from its own collar of skin, and her two tendrils holding a sheet: take those from it and nothing else, not its room, glazing or doorway.
>
> Make a new documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, deep focus from near to far, hand-held, the camera low, at knee height, close behind and beside the low being and looking past her to the tall one, the over-the-shoulder view of a conversation. Two people of two different non-human peoples are talking on an open terrace in the last low sun of an early-summer evening in the year 2826. Neither is an animal, neither is a plant, and neither is shaped like a human. They are at ease, attending to each other, never posed to camera. The sun is very low, far off to the left and out of frame, raking across the terrace from left to right.
>
> THE LOW BEING, in the foreground, is a Verdani. Only the top of her body is in frame. Her hide is a broad creased band along the whole bottom of the picture, a fifth of the picture's height at the left and lower toward the right, running out of the left edge, the bottom edge and the right edge of the frame, its top line uneven in shallow swells. No side, no end, no rim, no edge, no leg, no foot and no outline of her body is in view anywhere, and no part of her body leans or points: her body gives no direction at all. The hide is thick, matte and dry, grey-green: deep irregular creases, open pores, pale healed scars, small patches of dry flaking skin, and a sparse fine pale nap of short hairs that catches the low sun as a bright fringe along its top line. It is living skin, with no shell, no plates, no head, no neck, no snout, no face, no eyes and no mouth.
>
> From her hide, each out of its own puckered collar of skin, rise six broad thin vanes of living leaf tissue, deep chlorophyll green, finely veined, with a few dry brown margins and small tears, and a single row of small dark rounded nodes like beads along the outer leading edge of each. Their roots are set apart along the hide with bare hide between them. The vanes are in two plainly different groups. The three at the left are opened wide and laid back flat toward the low sun at the left, glowing translucent where the light comes through them; their tips leave the frame at the top and the left. The three at the right, the ones nearest the tall being, have turned away from the sun: they are drawn half closed, narrower, darker and stiffer, in shadow on their near faces, and they are bent over to the right, toward the tall being's head, each at its own slightly different angle, their beaded leading edges turned to that head across a clear gap of open air, the way a listener leans toward someone speaking. The split between the three vanes given to the sun and the three vanes given to the other person is the first thing the eye reads.
>
> Low in the middle of the frame, just above her hide and below the bent vanes, two short slender tendrils of her own living skin, matte pale grey-green, finely creased, each no thicker than a thumb and no longer than a forearm, each rising from its own small collar in the hide, hold one thin rigid matte pale-grey sheet, the size of a large book, blank and unlit, tilted back and held aside as a person holds a page they have just looked up from. Each tendril ends in a plain blunt rounded tip lying flat against the edge of the sheet, with no hook, no curl, no knob and no swelling. There are exactly two tendrils.
>
> THE TALL BEING, in the right half, a few paces beyond, facing back toward the low being, is a Mnemari, exactly the individual in the first image. Exactly three tall thick jointed legs in deep ochre and russet hide rise from broad soft padded feet set wide apart on the terrace, arch upward and meet at a hub high above, with darker umber bands across the hub. Beneath the hub her deep rounded body hangs on a thick wrinkled column, with one broad pale oval hearing membrane flush on its side. Under that slung body hang exactly three short slender working limbs, close together, short and folded close beneath the body, no more than three and no fewer, each ending in one small closed bud like an unopened flower bud, several short blunt lobes pressed together; they touch nothing. From the front of the slung body comes her neck, as thick as her legs and in the same creased hide. The neck is jointed and carried folded, never one smooth arc: it is two straight lengths with one heavy creased knuckle between them, built like the joints of her legs. The first length rises from the front of her body forward and upward to the knuckle; at the knuckle the neck bends sharply, like a bent knee; the second length comes straight down and forward from the knuckle to her head. Her smooth blunt rounded head hangs low at the end of the second length, at the height of the low being's three bent vanes, an arm's length in front of them and touching none, well above the floor. Her head is seen from the side, turned to the low being: one small dark deep-set eye on the near side, two short narrow breathing slits just behind it, no mouth line, no lips, no nostrils, no ears, no second eye in view. The hub, the column, the slung body, the knuckle of the neck and all three working limbs are inside the frame; at least two of her feet are in view on the floor beyond the low being's hide.
>
> The two heads of attention face each other across the middle of the frame: her lowered head from the right, the three bent vanes from the left, with open air and the far parapet between them.
>
> The place is a kept terrace of a Federation facility: a wide clean matte floor of pale seamless composite, a low plain rounded parapet of the same material running across the distance, a calm gold and pale rose sky above it, long soft shadows running to the right. Nothing else is on the terrace: no furniture, no planting, no pot, no railings, no lamp, no light fitting, no sign, and nobody else in frame.
>
> Photographed, not rendered: a hand-held photograph by someone who was there, real living skin and real leaf tissue with their small honest marks, natural full colour, normal exposure, visible grain heavier in the shadows, a real lens with softness toward the corners and a little veiling flare from the low sun at the left.
>
> Negative: tortoise, turtle, shell, carapace, hippopotamus, rhinoceros, elephant, walrus, seal, anteater, tapir, slug, snail, eye stalks, legs or feet on the low being, a snout, a rim, a blanket, cloth, a sack, a boulder, a rock with a plant on it, poured clay; hooks, curled tips, wires, rods, more than two tendrils, vines, octopus; dinosaur, sauropod, giraffe, swan, horse, camel, llama, a neck in one smooth curve, a fourth leg, four or more working limbs, two working limbs, hooves, fists, hands, fingers; potted plant, fern, palm, banana plant, houseplant, a plant growing from soil; head, face, eyes or mouth on the low being; mouth line, smile, teeth or forward-facing eyes on the tall being; any human, any person, any hand; clothing, straps, harness; screens, glowing displays, lamps, light fittings; grime, rust, stains, debris; readable text, lettering, numerals, signage, labels or logos anywhere. Render negatives: 3D render, CGI, video-game render, animated film still, clay or plasticine, plastic sheen, toy, figurine, miniature, tilt-shift, airbrushed, over-smooth surfaces, concept art.

- **Edit (of take 2; two takes):**

> Edit this photograph. Keep it the same photograph in every respect: the same framing, the same low being in the foreground with her hide, vanes, two tendrils and sheet exactly as they are, the same tall being with her three legs, hub, column, slung body, pale oval membrane, folded jointed neck with its knuckle, and head with its one eye exactly as they are, the same terrace, parapet, sky, light, shadows, grain and colour. Change only two small things.
>
> First, the tall being has exactly three short working limbs hanging beneath her slung body, not two. Add one more, the same as the two already there: short, slender, hanging straight down close beside them from the underside of her body, the same ochre hide, the same length, ending in the same small closed rounded bud. The three hang close together in a loose row and touch nothing. Three, no more and no fewer.
>
> Second, remove the thin horizontal rails and their posts that run above the low parapet. The parapet is only the low plain rounded wall; above it there is only open sky. No railing, no rail, no post, no wire.
>
> Do not add or move anything else. No text. Photographed, not rendered.

## 2026-11-19 — S00E02C03's chapter picture (Fable, desktop)

### chapters/s00e02c03.jpg — filed 19 November 2026
- **Kind:** generation with three references, then one edit
- **Source:** `images.md` § 88, where the prompt of record is; references `src/images/characters/sildron-drey.jpg` (her face and tunic), `src/images/chapters/s00e02c02.jpg` (the chamber) and `src/images/characters/petra-solano.jpg` (the far figure's hair and jacket), in that order.
- **Run:** `scripts/image-edit.js`, `gemini-3.1-flash-image`, 16:9 at 2K. Round 1 of 1, two variations; variation 2 kept. Edit take 1 of 1 from variation 2, filed. `import-image.ps1 -MaxEdge 1600`, finish strength 1.
- **Edit prompt:**

> Edit this photograph. Keep everything exactly as it is: the same hearing chamber, the same woman in the dark olive-grey tunic with exactly the same face, hair, collar stars, cuff braid, pose and hand, the same seated officers beside her, the same seated people behind, the same woman reading at the far table, the curved ledge, the seats, the floor, the window onto Mars, the framing, focus and grain. Change only three things.
>
> 1. The ceiling: remove the bright rectangular light panels. The ceiling is plain, the same smooth pale ochre-grey composite as the walls, with nothing set in it and no fitting of any kind; the room keeps the same soft even light.
>
> 2. The open book under her hand: replace it with one slim bound set of a few stiff pale matte leaves lying open and flat on the ledge, each leaf a thin rigid sheet a millimetre or two thick, like thin card or slate, not paper, with square clean edges and no curl. The leaves are completely blank: a plain even pale surface with no lines, no marks, no writing, no ruling and no printing anywhere on them. Her hand rests flat on the open leaf exactly as it does now.
>
> 3. The walls: remove the faint brown streaks and stains. The walls are clean and kept.
>
> No text, no lettering, no numerals, no screens, no glow, no new objects. A documentary photograph, not a render.

## 2026-11-20 — S00E02C03: Solano's chair (Opus, desktop)

### chapters/s00e02c03.jpg — re-filed 20 November 2026
- **Kind:** edit of the filed edit take (`C:/work/s00e02c03-takes/e1/v1.jpg`), two takes; take 2 filed. Record in `images.md` § 88.

> Edit this photograph. Keep everything exactly as it is: the same hearing chamber, the same woman in the dark olive-grey tunic in the foreground with exactly the same face, hair, collar stars, cuff braid, pose and hand, the same blank leaves under her hand, the same seated officers beside her, the same seated people behind, the same woman in the dark jacket reading at the far table with the same pose, hair and leaf, the curved ledge, the table, the floor, the walls, the plain ceiling, the window onto Mars, the framing, focus, light and grain. Change only one thing.
>
> The chair the far woman sits on at the table, on the right: replace the one-piece curved cantilever chair with a plain upholstered seat of the same kind as the seats along the row in the foreground: a pale moulded shell seat with a low back and short arms, the same matte pale grey-beige as those seats, standing on a single low pedestal base. Same size and place as the old chair, her body and pose unchanged as she sits in it.
>
> No text, no lettering, no numerals, no screens, no glow, no new objects. A documentary photograph, not a render.

## 2026-11-20 — Critic read of #1906 to #1977: one hive, the shadow hand, the Verdani card (Opus, desktop)

Dermot, 20 November 2026, verbatim *"Yes, as recommended"*. The record is `images.md` § 89. Each edit sent the filed frame first; the hive edits sent `src/images/chapters/s08e01c01.jpg` second, for the hive's make. Takes were written to `C:/work/sr-imgs/<frame>-r1/`.

### lore/cnoc-na-mbeach.jpg — edited 20 November 2026
- **Kind:** edit of the filed frame with one reference, two takes; take 2 pasted back (hives and stand only).

> Edit the first image, a photograph looking out through a window opening in a rough granite wall, and keep it exactly as it is in every respect except the beehives seen through the window. Keep the rough granite wall, the lintel, the sill, the lichen, the stone texture, the framing, the dry-stone wall beyond, the green slope, the sky, the light, the colour and the grain of the photograph, all untouched. Change only the row of four beehives standing in the grass beyond the window: make them the hives of the second image. Each hive is one seamless squared piece with softly rounded edges and corners, pale grey-white and matte, with one narrow dark horizontal slot low on its front and nothing else: no lid, no roof, no overhang, no seam or join line, no stacked boxes, no floor board, no handholds, no labels, markings, letters or numbers. They stand in the same places, the same size and in the same light as the hives they replace, in a row on one low plain grey stand of a single rail on short legs, as in the second image. Not wooden hives, not today's box hives, not plastic cool boxes, not containers, not shiny. Documentary photograph, nothing else changed.

### characters/brother-fintan.jpg — edited 20 November 2026
- **Kind:** edit of the filed frame with one reference, two takes; take 2 pasted back (hives only, held off his hand and sleeve).

> Edit the first image, a photograph of an old man at his beehives at first light, and keep it exactly as it is in every respect except the hives. Keep the man exactly as he is: his face, hair, beard, eyes, expression, his hand resting flat on the top of the near hive, his sleeve, his jumper and collar, all untouched. Keep the whitewashed stone walls and cells, the hill, the mist, the sky, the point of light, the bees in the air, the light, the colour and the grain of the photograph, all untouched. Change only the hives: make every hive the hive of the second image. Each hive is one seamless squared piece with softly rounded edges and corners, pale grey-white and matte, with one narrow dark horizontal slot low on its front and a narrow landing lip under the slot where a few bees walk: no lid, no roof, no overhanging top, no seam or join line anywhere, no stacked boxes, no floor board, no handholds, no labels, markings, letters or numbers. The top of each hive is the same piece as its sides, rounding over at the edge with no rim and no line. Each stands in the same place and at the same size as the hive it replaces, and the near hive is still under his hand. Not wooden hives, not today's box hives, not plastic cool boxes, not shiny, not containers. Documentary photograph, nothing else changed.

### chapters/s12e01c06.jpg — healed 20 November 2026
- **Kind:** edit of the filed frame, no reference, two takes; take 1 pasted back (the shadow's arm and hand only).

> Edit this photograph and keep it exactly as it is in every respect except one part of one shadow. Keep the cavern, the rock walls, the amber and blue-green fungus, the pale silt floor and its marks, the stones, the dark shape at the left, the grey-coated being at the right, the small person far off at the crack with the stone and the lamp, the light, the colour and the grain, all untouched. At the lower right, the grey-coated being's long black shadow lies on the silt toward the camera. On the left side of that shadow an arm is held out from the body with a splayed hand and fingers at its end. Remove that arm and hand from the shadow entirely, so the silt where they were is plain lit pale silt like the silt around it, with its fine marks. Keep the rest of the shadow, the shadow of the body, dark and long and starting at the being's feet, its left edge now running smoothly from the left foot down toward the bottom of the frame with no arm, no hand, no fingers and no lobe. The being's own arms hang at its sides, so its shadow shows no arm held out. Nothing else changed.

### lore/verdani.jpg — redrawn 20 November 2026
- **Kind:** designed emblem card, `scripts/make-emblem-card.ps1`, new device **vanes** (the ruled apron), drawn, not imported.

```powershell
.\scripts\make-emblem-card.ps1 -Page src\lore\verdani.md -Device vanes -Tint '#1C3424' -Accent '#8CD48A' -Epithet 'Photosynthetic Symbiosis' -Qualifier 'Thallenwort · Kinbeds'
```

## 2026-11-20 — Oshek Var re-opened: one round, nothing filed (Fable, desktop)

### characters/oshek-var.jpg — not filed
- **Kind:** fresh generation, one round of four, at Dermot's *"Yes reopen those two"*. Gemini `gemini-3.1-flash-image` through `scripts/image-prompts.js --generate --only oshek-var --variations 4`, 2K, 16:9, no reference image, none refused.
- **Prompt:** the blockquote under the entry in `images.md` § 40, verbatim; the judging line and the changes from the 26 October prompt are recorded there.
- **Result:** 1 a beetle or spider, 2 a human hand, 4 a spider or crab; 3 a near miss (no animal, the work reads, but the members read a little as cane and the housing as padded leather). The pick, and whether variation 3 is edited, wait on him.

### characters/oshek-var.jpg — edited and filed
- **Kind:** two image edits of round 1 variation 3 through `scripts/image-edit.js`, two takes each; edit 2 take 1 filed (Opus, desktop). Record in `images.md` § 40.
- **Edit 1:**

> Edit the attached photograph. Keep the dark iridescent jointed members exactly as they are: their number, positions, joints, tips, sheen and shadows, the two fine tips meeting at one point on the seam and the others bracing. Keep the camera, framing and light. Change only the pale surface they rest on and the room behind it:
> 
> The pale surface becomes one hard rigid smooth surface of pale warm-grey matte composite, like a fine ceramic or a moulded stone, gently convex, completely firm, with no padding, no cushion softness, no wrinkles, no grain of leather, no stitching and no fabric look. The seam across it stays where it is but becomes one fine hairline flush joint between two hard panels, with no stitches, no welt, no groove and no raised edge. The pale shapes in the background become plain hard matte walls of the same composite, simple and clean, with no upholstery and no furniture.
> 
> Also make the members read a little more as living shell than as cane or wood: smooth hard chitin with a faint glaze, no wood grain and no fibrous stripes, keeping their shape exactly.
> 
> No legs or bodies entering from the frame edge, no hand, no fingers, no eyes, no spider, no insect. No text, letters, numbers, screens or glowing lights. Photographed, not rendered: natural colour, normal exposure, the same grain as the original. Output the whole frame at the same composition.

- **Edit 2 (filed, take 1):**

> Edit the attached photograph. Keep the dark iridescent jointed members exactly as they are: their number, positions, joints, tips, sheen and shadows, and where each tip touches the surface. Keep the camera and light.
> 
> Replace the pale surface completely. It is not a cushion and not upholstery. It is the top of a hard machine housing made of pale warm-grey matte composite, like polished limestone or fine unglazed porcelain: one rigid, evenly curved surface with a single smooth convex curve, perfectly firm, with no bulge, no dent, no sag, no hollow, no pillow shape and no soft fold anywhere. Remove the soft rounded hollow at the lower left and the bulging shape behind it; the surface there continues as the same even hard curve. The seam across it is one fine straight hairline flush joint between two hard panels, crisp and engineered, with no stitching. The background is a plain hard pale wall, out of focus, with no cushions, sofas or furniture.
> 
> The tips rest on the hard surface without denting it, each casting a small sharp shadow.
> 
> No legs or bodies entering from the frame edge, no hand, no fingers, no spider, no insect, no eyes. No text, letters, numbers, screens or lights. Photographed, not rendered: natural colour, normal exposure, the same grain as the original. Output the whole frame at the same composition.

## 2026-11-20 — Elsha Rootkin re-opened on the apron body: one round, nothing filed (Fable, desktop)

The record is `images.md` § 42, *Re-opened 20 November 2026, on the apron body*, which holds the prompt verbatim, the judging line written before the round, and each take's verdict. **Tool:** Gemini, `gemini-3.1-flash-image`, `scripts/image-edit.js`, no reference image, 2K, 16:9. Four images; none refused.

- **Kind:** fresh generations, no reference image
- **Run:** one round, four takes. None filed. Every take drew the shell sections as rounded pads carrying present-day interface signs (a play triangle, a menu sign), the century rung; take 2 is the near miss on body and attention, takes 3 and 4 fail rung 1 as a mound and as a spread hide.
- **Next:** an edit of take 2 that changes the marks and the housing only; waits on Dermot.

## 2026-11-20 — Elsha Rootkin: three edits, filed (Opus, desktop)

### characters/elsha-rootkin.jpg — edited and filed
- **Kind:** three image edits through `scripts/image-edit.js`, two takes each: edit 1 of round take 2, edit 2 of edit 1 v1, edit 3 of edit 2 v1; edit 3 take 1 filed. Record in `images.md` § 42.
- **Edit 1:**

> Edit the attached photograph. Keep everything exactly as it is: the camera, framing, light, sky, ground, the creased grey hide with its scars, puckered collars and fine hairs, all five vanes and their positions, and the two dark vanes bent toward the object on the ground. Change only these three things:
> 
> 1. Remove the three raised green pads with the bar icon and the triangle icon from the hide completely. In their place the hide continues, creased and scarred like the rest of it, and two or three thin irregular sections of a slightly darker grey-green shell lie flush in the skin along the creases, no thicker than a fingernail, their edges uneven and following the folds, with no symbols, no icons, no shapes and no markings on them. Next to the nearest vane collar, one narrow plain pale grey-green strip lies flush in the hide, crossed by three short plain parallel bars of darker olive, with no frame, no border, no raised edge and no button look.
> 
> 2. Replace the white object on the ground at the right with one plain smooth closed capsule of pale matte composite, rounded like a river pebble, one piece, with no foot, no flap, no hinge, no seam and no markings, resting on the ground in the same place.
> 
> 3. Replace the dark layered growth at the far left with low pale-grey stones and bare ground, so nothing like an Earth fungus or plant shows there.
> 
> No buttons, no icons, no play symbol, no menu symbol, no screens, no glowing, no text, letters or numbers anywhere. Photographed, not rendered: the same high-ISO grain and natural colour as the original. Output the whole frame at the same composition.

- **Edit 2:**

> Edit the attached photograph. Keep everything exactly as it is: the camera, framing, light, sky, rocks, ground, the pale capsule at the right, the creased grey hide with its scars, pits, flaking and fine hairs, all five vanes and their collars. Change only the two grey-green patches and the bar strip on the hide:
> 
> 1. The two flat grey-green patches must look grown, not stuck on. Make them thinner and smaller, set down into the hide so the skin folds slightly over their edges all round, their surface following the creases of the hide underneath, the same slightly darker grey-green with a faint natural sheen like a fingernail or a beetle's shell, their edges uneven and partly hidden under the skin. No flat plaster look, no paper look, no crisp outline sitting on top of the skin.
> 
> 2. The three short olive bars stay, small, on the nearer patch, set into it, flush. Remove the long pale strip and its tail completely: there is no strap, no tag, no band, no belt and nothing running across the hide. The skin is continuous where the strip was.
> 
> No buttons, icons, symbols, straps, belts, tags, labels, text, letters or numbers anywhere. Photographed, not rendered: the same grain and natural colour as the original. Output the whole frame at the same composition.

- **Edit 3 (filed, take 1):**

> Edit the attached photograph. Keep everything exactly as it is: the camera, framing, light, sky, rocks, ground, the pale capsule at the right, all five vanes and their puckered collars, and the creased grey hide with its scars, pits, flaking and fine hairs.
> 
> Remove the two flat grey-green patches and the three olive bars on them completely. Where they were, the hide simply continues: the same creased, pitted, faintly scarred grey skin with the same fine hairs, the folds running on unbroken from the skin around them, as if nothing had ever been there.
> 
> No patches, plates, shells, bars, buttons, icons, straps, tags, labels, text, letters or numbers anywhere on the hide or in the frame. Photographed, not rendered: the same grain and natural colour as the original. Output the whole frame at the same composition.

## 2026-11-20 — The Tissadelle Arc thread banner (Opus, desktop)

### hero/tissadelle-arc.jpg — generated and filed
- **Kind:** reference-led generation through `scripts/image-edit.js`, Gemini `gemini-3.1-flash-image`, 2K, 21:9, four takes; take 2 filed, cropped and healed by hand. Record in `images.md` § 90.
- **References, in order:** `src/images/hero/season-01.jpg`, `src/images/chapters/s01e01c04.jpg`, `src/images/characters/tissadelle/season-1-first-posting.jpg`.
- **Prompt:**

> Documentary photograph taken inside the world by a 29th-century camera, available light, wide 21:9 landscape, taken at standing height from a few paces behind a watch desk, deep focus, at work, never posed, nobody looking at the camera.
> 
> The place is Dock Seven of Threshold Station, a quiet docking hall eight centuries from now, on an evening in early summer of the year 2828 UCSD: the same pale cream dock wall as the first reference image, clean and kept, seamless matte composite with soft rounded seams. In the wall, across the middle of the frame: on the left a heavy rounded pressure seal with its thick grey gasket frame, and on the right, well apart from it, a smaller sealed inner hatch with rounded corners, both shut. High above each door, on a rounded cream bracket, one of two identical atomic clocks exactly as in the first reference image: a clear glass cylinder under a rounded cream cap holding a faint soft violet cloud of trapped atoms, and below it a small dark matte readout window, blank and unlit. The two clocks and the tops of both doors sit in the upper middle of the frame.
> 
> In the foreground, across the lower part of the frame, the long low watch desk of pale composite, its top a plain smooth surface, with one bound log lying open on it, a set of plain blank matte leaves hinged on a rod, as in the second reference image; nothing on the leaves can be read.
> 
> Two people at the desk, both seen from behind and a little from the side, their faces turned away toward the wall, neither face shown. At the left, a young cadet sits at the desk writing in the log with a plain stylus, head bowed to the work, short dark hair, in a dark slate-grey field uniform with a plain stand collar. Standing just behind and to the right of the cadet, a little apart, is a woman of about twenty-eight with long red hair pinned up loosely, a few strands falling free, in the same dark slate-grey field uniform with a plain stand collar, seen from behind and from her left shoulder, the line of her cheek just visible, upright and still, her hands at her sides, looking up at the two clocks above the doors. She is the same woman as the third reference image. Nothing is on the back of either uniform.
> 
> Evening light: the dock is quieter and dimmer than by day, the light simply in the room, soft and even from no visible source; the violet in the two clocks is faint, not glowing brightly. Shot on a real camera: a little grain, a soft corner, slightly muted colour, a real shadow floor, not glossy.
> 
> No visible light fittings, no ceiling panels, no light strips, no lamps. No screens, monitors, tablets, holograms or glowing panels; no dials, gauges, knobs, toggles, meters or exposed cables; no signage, no lettering, no numbers anywhere in the frame. No grime, rust, scuffs or debris. No weapons, no belts, no backpacks, no helmets. Only the two people; nobody else.
