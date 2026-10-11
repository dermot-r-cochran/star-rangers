# Images — conventions, open work, prompts

One living document for every image concern. **Replaces four overlapping notes**
(`image-audit-2026-07.md`, `portraits-needed.md`, `firefly-replacement-prompts.md`,
`manual-photo-edits.md`) that drifted out of sync with each other and with the
repo — two of their claims were found false on inspection, so they were retired
in favour of this. Planning note; not rendered on the site.

**Verify before trusting.** Anything here is a snapshot. Check the repo (or run
the commands in "Auditing" below) before acting on a status line, and correct
the line rather than working around it.

**This file stays the runbook and the single place image work is tracked.** What
is *undecided or awaiting a look* is additionally indexed in
[`open-questions.md`](open-questions.md), so it can be found without reading
1,300 lines — the lost emblem-card recipe, the card-style inconsistency, the
open-questions block below, and the two competing abstract-emblem prompts. Add a
line there when something here becomes a decision rather than a task.

---

## Conventions

| | |
|---|---|
| Location | `src/images/<characters\|lore\|codex\|hero>/` |
| Lore & hero | ~1600px long edge, JPG quality ~85 |
| Character portraits | **1200×675 — 16:9 landscape**, not portrait (see below) |
| Codex entries | designed dark-gradient **title cards**, not photographs |
| `image_alt` | must describe what the file *actually shows* |
| Technical lore diagrams | **inline SVG in the page body**, drawn to the entry's own numbers (see below) |

**Finish: a generated photograph is finished toward Dermot's own** (Dermot,
7 October 2026, verbatim: *"the base image generator has inherent limitations
regardless of the prompt itself so post-processing is needed or some way to
align it with the tone and style of real photographs, especially my own
photos. The image generator looks like it was training on stock photos"*; and
*"I don't mind if the generated image looks like an imperfect photograph taken
in the future. That would make it feel more authentic in some ways"*). Measured
the same day against the 217 photographs on his site, the repository's images
crushed their blacks (1st percentile 7 against 16), carried half the grain and
had half again as much smooth gradient area. `scripts/photo-finish.py` closes
that gap on the way in, by the shortfall only: a black floor, saturation eased
downward, a light optical softening, grain to the site's level. `import-image.ps1`
runs it by default at **strength 1**, the measured match (his ruling, same day:
*"Strength 1 as default please"*); strength 2 adds a highlight roll-off, a
vignette and a colour fringe and is used per image and on purpose; strength 0
is for designed cards, emblem cards and his own plates, which are photographs
already, and the `codex/` path takes it automatically. The target is
`scripts/photo-profile.json`, rebuilt from the sibling portfolio checkout with
`--profile-from`. `--measure` prints a candidate's figures beside the profile,
for the pick. Images filed before 7 October 2026 are unfinished; re-finishing
them is a decision of his, not a default.

**Places are well kept; the imperfection is the camera's** (Dermot, 11 October 2026, choosing *"Well kept by default"* when asked why the habitats and ship interiors looked run down and in need of cleaning). His 7 October welcome for *an imperfect photograph taken in the future* is about the photograph: grain, a soft corner, a flat sky. It had been carried into the places instead (*worn*, *scuffed*, *weathered*, *grime* and *rust* ran to well over a hundred uses across the prompts) and the generator's stock science-fiction look is the used future of film sets. So a habitat, a ship, a station or a Ranger's kit is clean and maintained unless its page says otherwise (a frontier post, a derelict, a working engine space), with honest marks of use at most; a prompt says *kept* and negates grime, rust, peeling paint, debris and neglect. Wear words in existing prompts are swept as each entry is revised.

**Machines are made with care** (Dermot, 11 October 2026, choosing *"Made with care"* when asked whether the humanoid robots looked too robotic). What canon fixes stays: Jeeves's round dark lenses that make no attempt to be eyes (his ruling of 30 August), Lucene-9000's seams and manufactured face. What changes is the finish: a kernel-compliant machine is a well-designed object someone was proud to make, in considered proportions and warm, honest materials, never a crash-test dummy, a shop mannequin, a toy or an industrial arm. Prompts negate those four by name. **No robot was made more machine-like than its role required** (Dermot, same day, verbatim *"No robot was made deliberately more machine like than their role required."*): a machine's likeness follows its role. A social machine goes as far toward human as its work needs (Lucene-9000, *as human as a machine can be made to look*, short of disguise); a maintenance machine needs hands, not a face (Xenon); and where a machine is plainly mechanical, its role is the reason, never a convention of the picture. Jeeves's lenses stand on that ground (his choice the same day: the 30 August body kept, his role the reason).

**Spacecraft are derived, not styled** (Dermot, 7 October 2026, verbatim:
*"Derive spaceship images from design principles and detailed blueprints where
possible."*): a ship, a station or a platform in a prompt is built from what
its page and the record's physics say it does, in that order: where its people
get their weight (a coasting hull spins, and the spin axis runs along its line
of travel, so a ring or a drum, never a glazed cabin with a floor), where its
heat goes (radiators, which are large and plain), what it carries and where,
and what is lit, which is almost nothing. Where a page or the story bible holds
a blueprint, measurements or a deck plan, the prompt quotes them. The generator's
stock ship, a lit flank with a glazed nose, is the thing this rule refuses. The
first three held under it, the same evening: the generation ark, Kalypsis Dawn's
ship and the Hyperfold Yield Combine's platform. The principles and the
blueprint sheets a prompt quotes are in `story-bible/starship-design.md`
(the same evening, at his *"Add story bible notes, lore pages or an artefact
if needed for the detailed starship designs and blueprints"*), and the loop is
the `starship-design` skill on the desktop.

**An old-fashioned look carries a hint of the century, unless the page is
Historical** (Dermot, 7 October 2026, verbatim: *"Any image that looks old
fashioned should have a hint of advanced technology unless historical."*): a
frame set in the record's present may look plain, worn and ordinary, since that
is the house look, but not period. Where the generator reaches for a 20th-century
safe, a joiner's shop, a Victorian schoolroom or a churchyard, the prompt puts
one thing in the frame that says the century, in the record's idiom: a sealed
plain housing with a single indicator, an honest seam, a material that is not
quite the old one. A page in the History category, or a frame the page sets in
the past, is exempt. Six held under it the same evening and re-prompted.

**Which pages carry an image** (Dermot, 7 October 2026, verbatim: *"Characters
with no physical body would not needed an image. Neither would abstract
concepts as lore."*): a character page gets a portrait when the character has
a body, and none when the record knows it only as a mind, an instrument
signature or a name; a lore entry gets an illustration when it is a place, a
people, a thing or a sky, an emblem card when it is an institution, and none
when it is an abstract concept, a doctrine or a piece of law (a technical page
may still carry an inline diagram by the rule below). A page without an image
is complete, not pending.

**Diagrams on technical lore pages** (Dermot, 29 September 2026, verbatim:
*"Technical lore pages may have technical or scientific diagrams similar to
the style of the Applied Stats tutorial"* — `intake-2026-09-29.md`). A
fourth kind of image beside photographs, generated art and designed cards,
and the only one that asserts. The shape, taken from the tutorial's
*The figures*:

- **Where.** Physics and Technology entries, and Cosmology entries where the
  entry states a structure (tiers, a hierarchy, an order). A diagram sits in
  the body beside the paragraph it draws; the hero `image:` is unchanged.
- **Drawn, never generated.** Inline SVG written by hand or by a script,
  about 640 units wide, labels as real text. A generator cannot spell and
  cannot hold a number, which is the reason cards exist, and it is the same
  reason here.
- **The entry's numbers, and nothing more.** *Art is illustrative* (below) is
  allowed to be technically wrong; a diagram is not. It says in pictures what
  the page already says in words, from the same figures, and adds no fact the
  text lacks, since a diagram that adds one is a canon change made by drawing.
  Physics is real physics: a ring drawn rotating must be able to rotate.
- **Archive voice.** Labels speak as the page speaks: UCSD dates, in-world
  names, no one from our century (the Journal carries real-world notes).
- **Readable by everyone.** Colour by class, never meaning carried by colour
  alone: every class is named on the figure. Colours come from the site's CSS
  custom properties, so every palette and both light and dark render it, and
  the contrast checker cannot see inline SVG, so read it back in a browser in
  at least one light and one dark theme. A `<title>` and a caption in words
  carry it for a screen reader, the way `image_alt` does for a picture.
- **The tutorial's kinds are the vocabulary**: boxes and arrows in rows,
  boxes inside boxes, curves, bars, points on axes. A new kind is fine; a
  decorative one is not.

This does not reopen *a concept is never pictured; it is carded*. A card
stands for a concept as a page's image; a diagram draws a structure the text
has already stated, in the body.

**The exemption, stated** (Dermot's ruling, 3 September 2026). The portfolio
site takes only his own single-frame photographs; this repository is exempt
from that rule, and the exemption has a shape:

- **A generator may make what no camera can** (and the same holds for video, Dermot, 11 October 2026 — `video-prompts.md`, *What a generator may make*): a non-human body, a habitat, an
  artificial mind, an artefact, or a portrait of someone who does not exist.
  *Clarified 5 September 2026, when Zhulik's page went up behind a card because
  a cat is photographable — Dermot: "Although I could photograph a cat for you;
  this one is a fictional character on a futuristic space habitat, so I think an
  AI generated portrait would be acceptable."* So **a fictional character is
  "someone who does not exist" whatever species they are**: the clause is about
  the subject being invented, not about whether a camera could in principle
  photograph its kind. The next bullet governs the world's furniture — a
  landscape, a sky, a real animal standing for itself — not a named character.
- **Anything a camera can photograph is photographed**: landscape, weather,
  sky, flora, fauna, texture. Where no frame of his fits, the page takes a card
  or nothing, not a prompt. This makes the Tier 3 advice under *Images that
  should not stay* a rule, and settles Tier 2 by it: a stock landscape is
  replaced from his archive when a frame fits and carded when none does,
  opportunistically rather than as a project.
- **A concept is never pictured; it is carded.** Unchanged, restated here so
  the three cases sit together.
- **The modesty bar** (Dermot's standing rule, 18 September 2026 — stated in
  full in `CLAUDE.md`, beside the tone rule): an image clears two bars, the
  repository's (decent as a file) and the site's (nothing a parent reading
  aloud would notice — dressed for the work or the place, never to be looked
  at, nothing that invites the viewer), and clearing the first is not
  clearing the second. Prompts are written to the site's bar. The worked
  example is under *Intake 2026-09-18* below.
- **The membrane runs one way.** Every image the pipeline touches, whether
  generated, extended, or composited onto one of his plates, is recorded in the
  register (`image-prompts.md`) and is this repository's image only. It never
  returns to the portfolio, the Gallery folders, or any competition. His own
  composites in the portfolio's Creative category are his work, not the
  pipeline's, and the rule does not reach them.
- **The site says so once**, on the About page: illustrations are generated,
  or made from the author's photographs, and the prose is the work. The
  register is not rendered, so that sentence is the reader's only notice.
- **Generated images look like his photographs; what they show is what no
  camera could** (Dermot, 29 September 2026, verbatim *"Yes, agreed"* to that
  recommendation, over an openly painterly register and a look per thread —
  `intake-2026-09-29.md`). The light, colour, lens and grain are his: his
  frames as the plate or as references first, per the photo-first order, and a
  prompt asks for a photograph, not an illustration. The generated look is a
  fault to prompt against: gloss, over-detail, plastic skin, perfect symmetry,
  HDR glow. What keeps such an image from passing as his work is its subject,
  which the first bullet already limits to what no camera can photograph, plus
  the register and the About page sentence, never a visible style. Undercover
  Pets keeps its own cute register; designed cards stay cards.
  **Refined the same day** (verbatim: *"even the generated images such look like
  they were taken from a 29th century photographic device unless intended to be
  codex art"*): a generated image is a **photograph taken inside the world**, by
  a 29th-century camera that someone in the record was holding or had mounted.
  *Restated 11 October 2026 for stills and video alike* (verbatim: *"a
  generated image or video should look like it was taken from a contemporary
  video graphic or photographic device, for example 29th century"*), and a
  scene from before cameras existed is still taken as if by a 29th-century
  device, a reconstruction made at the story's present (`video-prompts.md`,
  *What a generator may make*).
  The video runbook's *The camera is a witness* applies to stills: no angle no
  person or instrument could have taken, and the frame knows less than the
  scene. Hard SF keeps the device honest: optics are optics, so it is a
  photograph in every physical respect, and nothing about the date shows in the
  image itself (no overlays, readouts or date stamps, and the period-tech
  negatives in prompts still apply). The one exception is **Codex art**, which
  is an artefact made by its in-world author and takes that author's medium,
  under the Codex-art rules below (a wrong belief is allowed; a wrong century
  or a real place is not). **A second exception, the same day:** Tissadelle's
  inner world is inside a mind, where no camera in the record can go, and it
  is allowed to look dreamy and dreamlike (Dermot, verbatim: *"Tissadelle's
  inner world is allowed to look more dreamy and dreamlike"*). Dreamlike is
  how such a frame sees, never what is in it; the modesty bar and the tone
  rule hold unchanged.

The photo-first order below is how the exemption is exercised; this is the
boundary it is exercised inside.

**Audio has its own runbook now.** This file stays about images;
[`music-prompts.md`](music-prompts.md) carries the house sonic signature, the
per-edition theme briefs and the in-universe recording briefs, written 20 August
2026 after a check found all five files in `src/audio/` had no recorded prompt.
The target below is shared between them, which is why it is still worded for
both.

**The target, for images and audio alike** (12 August 2026):

> **Enigmatic and haunting, with beauty, mystery, hope and serenity woven
> through.**

Read that as the thing to aim at, not a limit to stay inside. The tone line
below says what to avoid; this says what to reach for, and they are the same
instruction from opposite ends. It rules out a register that breaks no
prohibition at all: flat documentary lighting, blunt literal description, the
merely competent. **If a prompt reads like a brief for a passport photograph it
fails this**, however accurate it is. And **hope and serenity are load-bearing** —
haunting on its own drifts toward the horror line the next paragraph exists to
hold.

**One thread is exempt, deliberately.** *Undercover Pets* is **cute, cool and
clever** — Agent Barsik, Bubochka, Nessa. Do not weave melancholy or mystery
through that thread to match the house style; the contrast is the point, and a
haunting cat portrait would be a category error rather than a stylistic
variation.

**House style for people:** role-appropriate, slightly cinematic, in-world
setting, professional wardrobe. Not contemporary glamour or lifestyle shoots.

**A principal character may carry a captioned gallery of season portraits**
(Dermot's direction, 5 September 2026: *Tissadelle can have two or more
portraits for each season*, grounded the same evening — *Tissadelle is one of
the principal major characters*; `intake-2026-09-05.md`, last section). An
**extension** of the one-header-portrait rule, not a change to it: every page
keeps its single `image:`/`image_alt:` header, and a principal character's
page may add `gallery:` items with a `caption` naming the season and standing
(*Season 1 — Cadet*, *Season 5 — Line Captain*), filed under
`src/images/characters/<id>/` at the portrait size. `character.njk` renders a
captioned item as a 16:9 figure; an uncaptioned gallery (Aldera's field photos)
renders as the square grid it always did. Minor pages keep one header portrait.
Each gallery frame is a generated portrait like any other: registered in
`image-prompts.md`, alt text written from the file. Tissadelle is the first
and, so far, the only page with one. **The header follows the page's latest
standing** — ruled the same evening (*1 Yes*): her header is now the Season 5
Line Captain frame, the old coverall portrait retired to `reference-art/`, and
the gallery holds the seasons the header does not show. A frame is never in
both places, since the validator fails byte-identical duplicates. **Season
portraits surface on the season pages too** (taken up 7 October 2026 at
Dermot's *take up the season portraits open question*, the *2 Maybe* of
5 September): a frame is keyed to a season on the character page — `image_season:`
on the header portrait (with `image_caption:` for its standing, worded as a
gallery item's caption is, since his *Add a caption field for the header
portrait too* the same evening), `season:` on a gallery item — and the season's index
page shows every keyed frame the build includes under *Portraits from this
season*, with the character's name and the item's authored caption
(`lib/season-portraits.js`, `src/_includes/season-portraits.njk`). Nothing is
inferred from captions or casts: a frame is on a season page because it was
keyed there, and a placeholder card never is. Her Season 5 header and Season 1
gallery frame are the two keyed today. Her look in Seasons 6–7 (*3 Unknown*)
stays in `open-questions.md`.

**AIs get portraits like everyone else** (12 August 2026, superseding the older
rule that they got an abstract emblem or interface instead of a face — that rule
produced Reeves as *"A laptop displaying a face-recognition hologram"* and the
Eden Warden as *"A facial recognition system interface"*, both since replaced).

The portrait must make the **artificiality visible** — matte shell, seams and
joins, eyes that are plainly optical instruments. This is not decoration. A
generator asked for "an AI" returns a photoreal human face by default, and that
face belongs to nobody and to everybody; it is the same failure as the stock
portraits removed on 12 August, arriving by a different road. Visible
manufacture closes it **at the prompt** rather than at review.

Where a system has several bodies, show **one**. The Eden Warden's Ward and
Custos are two personas in one system, and two figures would literalise them as
two beings — the same mistake ruled out for plural human minds.

**And where canon gives a system no body, the portrait is not a body** — settled
13 August 2026, confirmed and written down here 19 August. This is not an
exception to the rule above; it is the rule's scope. *AIs get portraits like
everyone else* answers **how to depict an AI that has a body**, so that a
generator's photoreal default cannot stand in for one. It was never a
requirement to invent a body for a system that has none.

Three worked cases, all settled the same day in #415:

- **The Eden Warden** — re-briefed on Dermot's direction: *the Warden may not
  have a body at all, other than in the sense that the habitat structure is its
  body.* The portrait became the habitat, inhabited and attended, with no figure
  in it.
- **Reeves (Eden)** — the re-brief that produced the emblem was forced by a
  different problem and landed on the same answer. **The lettering ban cannot
  beat the scene**: a brief describing a case-file interface returns an object
  whose purpose is to carry writing, and the model draws the writing (this one
  came back reading `CASE FILE: ALPHA-7`). The scene had to change, not the
  negative. It became *points of light with some joined and some not — a pattern
  half-found and not yet claimed*, which **suits an intelligence that will not
  volunteer a conclusion better than a dashboard ever did.**
- **Reeves (Threshold)** — made the deliberate twin, because the two Reeves are
  the same model on separate deployments and their pages say so. Same emblem,
  same palette, same restraint, **and the figure further along**: a dense ring
  almost closed and still open along one arc. The difference between the two
  frames is the point and is recorded in both alt texts.

Neither Reeves has a body anywhere in canon — Lucene-9000 is *a mobile AI
humanoid*, and Reeves is *investigative support intelligence*, which is not the
same kind of thing. **So the emblem was the correct answer twice over and is not
a lapse from the 12 August rule.** It was flagged as possibly one during the
19 August audit, and the flag was wrong: the decision is recorded in #415's
commit message and carried consistently into both `image_alt` lines. What it was
never carried into is this file, which is the same failure the rest of that audit
found — *the decision gets made and the note never gets it.*

**Tone line:** unsettling is fine, horror is not — hint at the dark fact rather
than depicting it. A cyber-revenant portrait showing exposed throat machinery
was rejected on exactly this line; the approved version sealed the collar and
left one silver seam at the temple.

**Art is illustrative; the prose is canon.** Lore images are impressions of a
place, not schematics of it, and they are allowed to be technically wrong where
the entry is right — `lore/the-imperium.jpg` is a real modern skyscraper
standing in for a monolithic tower, and the New London render (see Open work 4)
shows rings that could not rotate as drawn. When art and entry disagree, **the
entry wins and the art stays**: don't rewrite settled prose to match a picture,
and don't file the divergence as a defect. The one hard requirement is
unchanged — `image_alt` describes what the file actually shows, so an
impressionistic image gets impressionistic alt text rather than the spec.

### Tools

```powershell
.\scripts\import-image.ps1 -In "$env:USERPROFILE\Downloads\x.png" -Out src\images\characters\y.jpg -MaxEdge 1200
.\scripts\make-codex-cover.ps1 -TitleLines "TITLE","LINE TWO" -Category "SURVEY RECORDS" -Subtitle "..." -Institution "..." -Author "..." -Stamp "OFFICIAL" -Motif rules -Out src\images\codex\z.jpg
```

Codex covers go through the generator, never an image model — the font engine
spells correctly and image models do not. Motifs: `rules`, `dissolution`, `none`.

### Settings the prompt text cannot set

- **Aspect ratio is a request field, not prose.** The orientation sentence at
  the end of each prompt does *not* drive it — in an app it is a dropdown that
  defaults to Auto and will happily return a landscape portrait. **Everything
  is 16:9**, character portraits included: `.character-portrait` crops to
  16 / 9 with `object-fit: cover`, so a taller frame loses its edges rather
  than scaling. The prompts still end "Portrait orientation." — that phrase is
  now about *framing the subject*, not the frame's shape, and the scripts
  ignore it in favour of the CSS. Delivered sizes: **1200×675 portraits,
  1600px long edge lore.**
- **Ban lettering in the prompt, every time.** As of 10 August every prompt
  here carries *"no readable text, signage, insignia lettering or written
  characters anywhere in frame"*. It was added because ten of the twelve
  portrait prompts had no ban at all and the first run came back with
  `DOMESTIC ASSIST`, `CASE #KV-8720`, `DOCKING BAY 4 | CREW MESS` and a
  `GATE 14` — the failure the Prompt craft section below has warned about
  since July. A *narrow* ban is not enough either: `galen.jpg` said "no
  insignia lettering" and got station signage instead, because the model
  honoured the letter of it.
- **One exception: Compact settings may show signage on purpose.** [The
  Plainmark](../src/lore/plainmark.md) (settled 2026-08-11) is shapes and
  colour bands rather than script, so there is nothing in it to misspell — a
  model can draw it, and it reads as deliberate design instead of broken text.
  In a Compact-habitat corridor, hatch or cargo scene, carry this clause
  *instead of* a blanket ban:

  > Wayfinding shown only as Compact plainmarks — flat stencilled panels of
  > stacked colour bands in black, slate-blue, bone-white and ochre, carrying
  > simple geometric figures (chevrons, rings, short tally strokes, lozenge
  > diamonds), painted on the fixed frame beside each hatch and at corridor
  > junctions, no readable text, numerals, signage, insignia lettering or
  > written characters of any script anywhere in frame.

  **Scope it, and do not sweep it.** The plainmark is a Compact standard, not
  a universal one — a galaxy-wide sign system would reintroduce exactly the
  convenience the record refuses. It belongs in Compact habitats and nowhere
  else: not on a Martian hillside, not at an Irish chapter house, and not in
  Celtic Union corridors, which are lettered in their members' own languages.
  So far it is carried by two prompts, `galen` and `wendell-albercombe` — the
  two that failed *because of* signage, now specifying it deliberately.
- **Generate large.** `import-image.ps1` resizes on the way in (~1200px
  portraits, ~1600px lore), so 2K costs nothing and leaves room to crop. 4K
  only costs more.
- **Reference images** are the only lever for making a *set* look like a set —
  worth reaching for on the character portraits, where twelve separately
  generated faces otherwise share no house style. **The script sends them
  (2 September 2026).** Give an entry a `References:` line among its prose,
  before the blockquote, naming the files in backticks — repo-relative
  (`story-bible/reference-art/…`) or absolute (a frame in one of the `F:\`
  camera folders):

  > References: `story-bible/reference-art/tissadelle-headmate-2026-08-24.jpg`

  `--generate` sends them as image parts after the prompt; `--next` and
  `--only` print them so the clipboard loop can attach them by hand. A named
  file that is missing fails that entry rather than generating without it — a
  reference silently dropped is a different picture. Gemini 3.1 Flash Image
  takes up to fourteen in one request; the manifest records which were sent,
  and the provenance rule below still applies: name the plates in
  `image-prompts.md`.
- **Photo first, generation last** (Dermot, 2 September 2026: *"AI enhancements
  of or superpositions into original photographs are often more pleasing than
  purely AI generated images entirely from a text prompt."*). The order for any
  new image is therefore: his own photograph as it stands or cropped; his
  photograph as the plate with a generated element composited in or the frame
  extended; generation with his photographs as references; and a pure
  text-to-image result only when nothing of his fits. Run `--catalogue` before
  `--generate` for that reason. He asked the same day whether his photographs
  could act as fine-tuning: not on Gemini, which offers no user fine-tuning —
  references are the lever it has. A LoRA on an open model trained on a few
  dozen of his frames would learn the look, and he has parked that as probably
  too ambitious for now, while noting a separate repo could be opened for it if
  it is ever wanted.
- **Dermot's own photographs may be used as references.** Standing permission,
  11 August 2026: *"any of my existing photos may be used as references for
  image generation, in future, if relevant or needed."* This is the sharpest
  tool available for the two things generation is worst at. **Consistency** —
  one reference carried across a set is what makes twelve separately generated
  faces read as one cast. **Place** — the corpus already stands Irish uplands
  in for alien terrain, and feeding the actual frame as a reference puts *his*
  light and *his* weather into a generated scene rather than a model's idea of
  them. The unpublished archive is the obvious source: Kenya, Tenerife,
  Scandinavia, the Irish material.

  Note the boundary this does **not** cross. A reference informs a generated
  image and the result is still a generated image; it does not become his
  photograph, and the portfolio's own-work-only rule is untouched. The
  distinction is the one *[Where the Record Lives](../src/journal/where-the-record-lives.md)*
  draws — what matters is whose record the picture carries, and a generated
  image carries none either way.
- **Model choice is a decision, not a default.** Models differ in what they
  are trained on and in the terms attached to their output, and these images
  publish on public domains under `CONTENT-LICENSE.md`.

Neither script writes front matter: `image_alt` describes what the file
*actually shows* and cannot be derived from the prompt that asked for it.
Neither merges anything — new portraits and lore images are the repo's *draft
it and stop* tier.

### Episode heroes: thread sets the palette, the episode sets the frame

Settled 2026-08-11. The site fronts four audience tiers — children, young
adult, general, contemplative — mapped to domains in
[`lib/editions.js`](../lib/editions.js). The question was whether images should
be styled per tier.

**They should not, because the tier is already carried by the thread.**
starquest fronts Orbital Five-O and the young-adult tier; the church-space and
fellowship domains front the contemplative tier; sciencefiction fronts the
general tier; fianilchruinne holds everything. So styling by *thread* delivers
the tier for free — no per-tier variants, no machinery to choose an image per
edition, and no image rendering differently on two domains, which would make
one scene read as two to anyone who visits both.

| Thread | Tier | Palette |
|---|---|---|
| Founding Era | general | archival, documentary, muted — the record being made |
| Tissadelle Arc | general | the house style above, unchanged |
| Undercover Pets | young adult | warmer, higher key, animal eye-level |
| Orbital Five-O | young adult | brighter, procedural, busier |
| Church Space | contemplative | quieter, more negative space, light rather than event |

**But the thread only sets the palette. The episode's own subject sets the
frame** — and `s02e03` is the case that proves why the distinction matters.
*The Dark-Down* sits in the young-adult thread, and its hero should not be
styled young-adult on that account: the episode's weight is the dark-down
itself, the valley warden walking it at night, the kept custom. The prose
reaches two bands at once (Bubochka's blocks in the children's band, Sorcha's
carrying the adult weight) and it works — Dermot's own reading, and the reason
a per-tier scheme was rejected. **A chapter carrying two registers is a feature
of the writing, not a problem for the pictures to solve.** Let the prose carry
the register; put the picture where the episode's weight is.

**The unit is the episode, not the chapter.** Chapters do carry `image` /
`image_alt`, but the schema records why: added 2026-07-30 *"for a
social-sharing reason rather than a design one"* — they are Open Graph cards,
not page illustrations. The established practice is one hero per episode
(`s01e00-cat`, `s01e01-corridor`, `s01e02-machinery`, `s01e03-archive`,
`s03e01-radiotelescope`, `s05e02-kerry-hills`). Nineteen episodes exist and six
have heroes, so **thirteen are missing** — a tractable batch. Forty-four
chapter images would mostly be four views of the same room.

### Prompt craft (learned the hard way)

- **Name the sheen, not the substance.** "Stone-textured skin" for a Basaltborn
  produced a golem; describing basalt *iridescence* on chitin produced the
  character.
- **Ban lettering explicitly** ("no readable text, no insignia") or you get
  gibberish name tapes — and once, an entire NYPD squad room with `NYC POLICE`
  case files. **But the ban is a floor, not a fix — see the next bullet, and
  note that this one used to recommend "plain unmarked folders" as its own
  example, which is precisely the shape that fails.**
- **The lettering ban cannot beat the scene** (13 August 2026, #415; the rule
  was recovered and written down 19 August). If a brief describes an object
  whose purpose is to carry writing — a case file, a form, a certificate, a
  departures board, an open notebook, station wayfinding — **the model draws the
  object, and the object has writing on it**, however many negatives are
  stacked against it. The Eden Reeves brief asked for a holographic case-file
  interface and banned lettering in the same breath, and came back reading
  `CASE FILE: ALPHA-7`.

  **So the fix is always to change the scene, never to strengthen the
  negative.** Three moves, in order of preference: **remove** the object (an
  empty desk says more than a desk of blank paper); **close** it (a shut book is
  reliably safe where an open one is not, and a shut book still reads as a
  record); or **substitute** an object that carries meaning without a writing
  surface — a stamped seal, a tally, a sealed case. *Blank* and *unmarked* are
  not scene changes. They are instructions the model cannot follow, because a
  blank certificate is not a thing it has ever seen.
- **State the era**, or the setting defaults to contemporary Earth.
- **No drones as set-dressing** (Dermot, 8 September 2026, `intake-2026-09-08.md`,
  fourth section: *most AI systems and robots are not drones unless there is a
  very good reason*). The generator reaches for hovering quadcopters and
  floating companion-bots the moment a scene says *future* or *station*. A
  drone goes in a prompt only when the page it illustrates has one and says
  why; otherwise the machinery in frame is the kind that is already there —
  fixed, built into the place, or a body shaped for its job. Negate *drone,
  quadcopter, hovering machine* by name when the scene invites them, and
  reject any output that adds one uninvited.
- Small text artifacts can be fixed in-session with a targeted select-and-blur
  rather than a re-roll (worked on a garbled flight-suit name tape).
- **Generate 4, keep 1.** Vary the seed between attempts, not the prompt;
  change the prompt only when the whole batch misses.
- **A generator has no memory between frames.** "The same rabbit" means
  nothing to it; series continuity must be carried as literal attributes in
  every prompt — coat, ear carriage, crockery, light direction — and any trait
  the model defaults against (a lop's ears) belongs in the negative as well as
  the body. Learned on the bubochka pair.
- **Never name an actor or a real person** — describe features and bearing;
  generators refuse or mangle likenesses.
- **Characters belong in a place, not against a gradient** — no flat studio
  backdrops, no glamour lighting; the 13-file stock-headshot cluster in Open
  work 3 is the cautionary example.

### Auditing

```bash
# alt text vs. front matter, all content types
grep -rn "image_alt" src/ --include="*.md"
```
```powershell
# every image's real dimensions
Add-Type -AssemblyName System.Drawing; Get-ChildItem src\images -Recurse -Include *.jpg,*.png | ForEach-Object { $i=[System.Drawing.Image]::FromFile($_.FullName); "{0,-52} {1}x{2}" -f $_.Name,$i.Width,$i.Height; $i.Dispose() }
```
To check whether an image matches its description, **read the file** — the July
2026 audit's one false finding came from reasoning about filenames instead.

---

## Working through the prompts — the runbook

Two local authoring tools — not in the build, not run by CI — that remove
everything around the generating. `scripts/image-prompts.js` reads the prompts
out of *this file*; `scripts/image-file.ps1` resizes and files the results.

**Everything below runs in your own PowerShell window**, not through an
assistant: Start menu → "PowerShell". Then:

```powershell
cd F:\CLAUDE\star-rangers
```

### Step 0 — one-time setup

Node is already installed (the site build uses it). The only thing missing is
a Gemini API key.

1. Go to **https://aistudio.google.com/apikey**, sign in, **Create API key**.
   Self-serve — no enterprise contract, no admin approval. The free tier
   covers a run of twenty-three comfortably.
2. Set it, once, for your Windows user:

   ```powershell
   setx GEMINI_API_KEY "your-key-here"
   ```

   **`setx` only affects new windows.** Close that PowerShell and open a fresh
   one, or nothing below will see the key.

Prefer the environment variable to the file option: it keeps the key off this
drive entirely. `scripts/gemini.local.json` works too (gitignored), but a
secret inside a git working tree is one `git clean` away from gone and one
folder-copy away from travelling. **Never paste the key into a chat, a commit,
or an issue** — if it ever lands in one, revoke it at the same URL and make a
new one.

**One more thing to settle once — PowerShell will refuse to run the `.ps1`
steps as this machine is configured.** `Get-ExecutionPolicy -List` shows
`CurrentUser` and `LocalMachine` both `Undefined`, which means Restricted, and
Step 4 will fail with *"running scripts is disabled on this system"*. Two ways
out, and the choice is yours because it is a security setting:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned   # persistent
powershell -ExecutionPolicy Bypass -File .\scripts\image-file.ps1   # per-run
```

`RemoteSigned` allows local scripts and still blocks unsigned downloaded ones.
This affects `import-image.ps1` and `make-lore-cards.ps1` equally — anything
in `scripts/` ending `.ps1`.

### Step 1 — see what is pending

```powershell
node scripts/image-prompts.js
```

Lists every prompt with a status: **done** (its file already exists under
`src/images/`), **generated** (waiting to be filed), **served** (handed to the
clipboard, not yet filed), **pending**. Nothing is written; run it whenever.

### Step 2 — generate ONE first

Never start a run of twenty-three. One image proves the key, the model name,
the size constants and the network in about ten seconds:

```powershell
node scripts/image-prompts.js --generate --only arilon
```

Expect: a line naming the target and aspect ratio, then `2 image(s)`. The
files land in `image-out\lore-arilon\`. **Open them.** If the API rejects
anything, Google's error body prints in full rather than being summarised —
the text will name the offending field.

### Step 3 — generate the rest

```powershell
node scripts/image-prompts.js --generate
```

Everything still pending, two variations each. Failures are reported per
image and do not stop the run; a failed entry keeps its error in the manifest
and is simply retried next time.

Useful flags: `--variations 4` for more choice, `--size 4K` if you want room
to crop hard, `--model <id>` to try a different one.

### Step 4 — look at what came back, and choose

The whole pipeline exists to leave you exactly one job: deciding which
variation is the one. Browse `image-out\`, then:

```powershell
.\scripts\image-file.ps1 -WhatIf
```

Prints the full plan — every source file against the target it would become —
and changes nothing. **Always run this before the real thing.** Variation 1 is
assumed; override per image (there are two by default, so `=1` or `=2` unless
you passed `--variations`):

```powershell
.\scripts\image-file.ps1 -Pick "lore-arilon=2","characters-naomi-kestrel=2" -WhatIf
```

**Expect to hold some back.** A run is judged image by image, and the manifest
records what was *generated*, never that all of it is good — the first real
run landed seventeen of twenty-three, with five portraits carrying readable
signage and two missing the thing the entry is actually about. `-Skip` holds
those; `-Only` files just the named ones:

```powershell
.\scripts\image-file.ps1 -Skip "characters-jeeves","characters-galen" -WhatIf
.\scripts\image-file.ps1 -Only "lore-arilon" -WhatIf
```

Then drop `-WhatIf` when the plan reads correctly. That resizes each to
convention through `import-image.ps1` (1200px portraits, 1600px lore), files
it under the right name in the right directory, and puts the lot on a new
branch — or use `-NoBranch` to leave them in the working tree.

**What to look for before choosing.** Readable text anywhere in frame is the
commonest failure and the easiest to miss on a contact sheet — zoom before
deciding. Then: does it show what the *entry* is about, or only what the
prompt literally said? Two of the first run's rejects were technically fine
images of the wrong subject.

### Step 5 — the part no script does

1. Add `image` and `image_alt` to each page's front matter. **Write the alt
   text from the file in front of you**, not from the prompt that asked for
   it — that rule is the whole reason the stock images in Open work 6 were
   catchable.
2. Commit, push, open a PR. New portraits and lore images are the *draft it
   and stop* tier: the PR is a proposal.
3. Add a `CHANGELOG.md` entry under `[Unreleased]` if they are going out.
4. When they have landed: `Remove-Item -Recurse -Force image-out`

### The clipboard path — for one image at a time

A browser beats an API for the image you want to nudge by hand, so the app
loop is kept:

```powershell
node scripts/image-prompts.js --next
```

Puts the next pending prompt on the clipboard and prints **which aspect ratio
to set** — the app's dropdown defaults to Auto and will happily return a
landscape portrait, which the prompt text cannot prevent. Paste, generate,
download, run `--next` again.

Then file from the downloads folder rather than the manifest:

```powershell
.\scripts\image-file.ps1 -From "$env:USERPROFILE\Downloads" -WhatIf
```

Here pairing is **positional** — the order prompts were served against the
order files were downloaded, oldest first. It is right as long as you saved
one image per prompt in the order served. **A re-roll you saved twice, or a
prompt you skipped, throws every later pairing off by one**, which is why
`-WhatIf` matters more on this path than the other. Fix any bad pair with
`-Map "lore-arilon=Firefly_abc.png"`; leftover downloads are reported rather
than silently ignored.

### When something goes wrong

| Symptom | Cause |
|---|---|
| `running scripts is disabled on this system` | Execution policy is Restricted — see Step 0. Affects every `.ps1` in `scripts/`, not just this one |
| `no Gemini API key` | Key not set, or `setx` was run and the window not reopened |
| Readable text in the output | The prompt's lettering ban is missing or too narrow. Every prompt should end with the full "no readable text, signage, insignia lettering or written characters anywhere in frame" |
| A 400 naming a field | Bad model id, unsupported size, or a prompt tripping a safety filter — the message says which |
| `response carried no image` | Call succeeded, shape unexpected. The raw JSON is written beside the output |
| `-WhatIf` plan looks shifted | Clipboard path only. Use `-Map`, or `--reset <name>` and re-serve |
| A prompt never appears | It has no blockquote, or its target file already exists — Open work 6 replacements are invisible until the old file is deleted |
| `Nothing to pair` | Downloads older than 24h. Widen with `-Since 72` |

**Why Gemini and not Firefly Services.** Adobe sells API access to Firefly as
an enterprise contract; the Developer Console disables it outright without the
entitlement (*"Your organization does not have a license to access this
API"*), and the Firefly app bundled with Creative Cloud has no multi-prompt
batch mode. Gemini sells the same class of model self-serve — and Nano Banana
is one of the models the Firefly app itself offers — so the unattended path is
available without an enterprise agreement. The key is gitignored and must stay
that way; this repo is public. See `scripts/gemini.local.json.sample`.

**This file stays the source of truth** — the scripts parse it and never write
to it, and there is deliberately no separate queue file to drift out of sync.
Edit a prompt here and re-run. An entry is picked up only if it is a bullet
naming a `` `file.jpg` `` in bold with the prompt in a blockquote under it,
which is how the nine generator title cards below exclude themselves without
being listed anywhere.

---

## Open work

### 0. Replaced with placeholder cards — **22 of the 28 still carded** (re-audited 19 August 2026)

**Six of the twenty-eight have since been replaced with real images and were
never marked:** `petra-voss`, `brother-daire`, `ilsabet-marrowtide`,
`rasa-oyelaran`, `eden-warden` and `reeves`. The remaining **22 are still
PORTRAIT PENDING / ILLUSTRATION PENDING cards** and are still the head of the
queue.

**Method, so a later audit knows what to trust.** A card and a real image are
separable by shape: the cards are all **1600×900 at 52–77 KB**, the delivered
portraits **1200×670 at 96–217 KB**. Two files were then **opened** to check the
inference at both ends — `cormac-dubhghlas` is still a card reading *PORTRAIT
PENDING*, `rasa-oyelaran` is a finished portrait of a superintendent in a bureau
doorway. The measurement located them; opening them confirmed it, per this
file's own standing rule against reasoning from filenames.

*(One thing noticed here and since resolved: `reeves.jpg` came back as an
abstract emblem rather than a portrait, which looked as though it sat oddly
beside the 12 August rule that **AIs get portraits like everyone else**.
**Confirmed 19 August: it is deliberate**, settled in #415 on 13 August and
recorded in that commit — see the qualification added to that rule under
Conventions. The flag was wrong about the decision and right about the file:
nothing in `images.md` said so until now.)*

**One added at creation rather than by replacement, 5 September 2026:** `characters/zhulik.jpg`, the PORTRAIT PENDING card behind the new Zhulik page (the second cat in *The Unacceptable Cat*). A cat is a thing a camera can photograph, so under the Conventions above the page takes a frame of Dermot's or a card and never a prompt, and `own-photography.json` holds no cat. Drawn on a Linux session by a Pillow port of `make-placeholder-card.ps1`'s `New-Card` to the same geometry and palette, DejaVu Serif standing in for Georgia, and stamped with `mark-placeholder.js`; the page is in the script's card table so a Windows re-run redraws it in the house font. *Superseded the same evening:* Dermot ruled a generated portrait acceptable for a fictional character (the clarification under Conventions), so the prompt is now queued under *Undercover Pets* in section 1 and the card reports `[placeholder]` to `image-prompts.js` until the portrait is filed over it.

**This is the head of the queue.** Every image below was removed and replaced
with a designed PORTRAIT PENDING / ILLUSTRATION PENDING card, so no page is
broken and nothing is claiming to be what it is not — but each one now needs a
real image, and none has a prompt written yet.

Prompts are deliberately *not* drafted here. Section 1's history shows why: the
`asteria-the-sage` note produced two wrong portraits because the brief itself
was wrong, and the fix was Dermot restating the character in his own words. That
is authoring, not bookkeeping.

**Tier 1 — real people standing in for characters (15, PR #396).** All were
photographs of identifiable strangers: `cormac-dubhghlas`,
`demelza-trevithick`, `fergus-aonghas`, `idris-bryneth`, `imogen-petrakis`,
`niamh-o-ceallaigh`, `petra-voss`, `rhian-gwynne`, `rhiannon-ceridwen`, `sen`,
`zara-wayland`, `bertram-ashcombe`, `brother-daire`, `ilsabet-marrowtide`,
`rasa-oyelaran`.

**Reviewed one at a time, 12 August (4, PR #398).**

| Image | Why it went | What its replacement has to carry |
| --- | --- | --- |
| `lore/civilisation-comparison.jpg` | A stock photo *of* real family prints — a christening baby, a girl at first communion | Three eras compared. The old photographs were doing real work; the idea of an inherited record is worth keeping without using anyone's actual family |
| `characters/eden-warden.jpg` | A real woman's face resolved under a recognition mesh | A plural habitat AI, two personas in one system. Not a face at all, arguably |
| `characters/reeves.jpg` | Dated stock look (no real person — the screen face is a halftone render) | An investigative intelligence that will not volunteer a conclusion. Restraint, not menace |
| `lore/ynys-wydrin.jpg` | A real Southeast Asian mask-dance costume standing in for a Welsh-named world | A dome-and-station world settled *because* it was not a paradise. Thin air, permafrost, glass |

**Batch 1 remainder, 12 August (5, this PR).**

| Image | Why it went | What its replacement has to carry |
| --- | --- | --- |
| `lore/mnemari.jpg` | **Tone, not people.** A hockey-mask figure in a hood — slasher iconography, against the standing horror guardrail | A people who never forget and never age. The interest is memory, not menace |
| `lore/meta-dimensional-beings.jpg` | Generic hooded-figure stock | Three classes of being, sorted by whether talking is possible |
| `lore/military-space-command.jpg` | Real NASA EVA imagery in a stock composite; licence unverified | A benevolent technocracy that could not last |
| `hero/characters-concourse.jpg` | Same family, same unverified provenance | A page hero for the whole cast. **On undercover-pets.com, resolved 1 September** with Dermot's own photograph `hero/characters-hyrax.jpg` (*Rock Hyrax on the Coffee Machine*, Nairobi 2025, from the portfolio at its 1600×1037 site size) via the new per-edition `sectionHeroes` field in `lib/editions.js`; every other domain still shows the pending card, and this row stays open for them |
| `hero/about-writer.jpg` | ~~Typewriter-and-rotary-phone cliché, then a stamped placeholder~~ **Replaced 8 October 2026 with Dermot's own *Dublin Bay from the Hills*** (his choice of five of his frames put side by side: *"I live in Dublin so that makes sense"*), centre-cropped to 16:9 from the portfolio's re-developed 1600 file; photo first, generation last, and the author seen through the work rather than a face | The About page |

**Batch 2, 12 August (4, this PR).** The forty never-opened lore images were
finally looked at, all forty at once as a contact sheet. **The result was far
better than the audit implied:** about eighteen are already designed emblem
cards in the house style, and another eighteen are abstract or astronomical
stock with no people and no claims. Only these four needed anything.

| Image | Why it went | What its replacement has to carry |
| --- | --- | --- |
| `ftl-mechanics.jpg` | A suited man cradling a glowing orbital diagram over city lights — stock *business-visionary* imagery. Face cropped above frame, so not a privacy case | How fold transit actually works. Anything true would beat this |
| `lagrange-fold-points.jpg` | A hand holding floating tech icons; the same genre, the same nothing | Five points where gravity balances, and what that buys a ship |
| `chthonari.jpg` | A horned, muscular figure against fire — demon art, in the register the horror guardrail rules out. **Same misjudgement as `mnemari`** | A species. The Korvain lesson applies: hint, don't show |
| `solar-time-and-local-calendars.jpg` | Antique clock-face stock, near-duplicate of `galactic-stardate.jpg`. Kept the latter because its calendar grid is the more apt of the two | Local calendars diverging from solar time |

*Left alone deliberately:* `physics-comparison` and `quantum-space-harmonics`
are near-identical light-trace abstracts, the same repetition the `prismere-*`
note complains about — but neither makes a false claim, and replacing them is
taste rather than need.

**Batch 3, 15 August (2, deleted not carded).** Surfaced by the alt-text pass
rather than looked for. Both were **deleted outright**, following the eight
verified stock images of 11 August: a lore page renders cleanly with no image,
and absence beats a picture that is quietly making a claim. Neither has a
PENDING card, so neither shows up in the placeholder queue — they are recorded
here instead, and both pages currently open with no image at all.

| Image | Why it went | What its replacement has to carry |
| --- | --- | --- |
| `formation-of-star-rangers.jpg` | A **recognisable real city** — a sepia-treated skyline with One World Trade Center's spire unmistakable in it — standing in for the founding of the Star Rangers. No people, so not a privacy case; the problem is that it is a specific place on Earth with its own meaning already attached | The founding of an independent humanitarian corps. Something that is not a photograph of somewhere real |
| `universal-cosmic-stardate.jpg` | An antique dial engraved **in French with a fleur-de-lis border**, on the entry for a count whose whole argument is that it *"commemorates no founding … a spine that honoured an event would belong to whoever owned the event."* The image hands the standard to exactly one nation's heraldry | A civil timescale owned by nobody. The page's own material is better: an ensemble of clocks, a paper timescale, a loop that closes |

### A third option: refile as in-universe art (Dermot's direction, 18 August 2026)

**An image that directly contradicts canon but remains aesthetic may be moved
into the Codex as in-universe artwork rather than removed.**

**This completes the rule above rather than overturning it.** *Absence beats a
picture quietly making a claim* is about a picture asserting in **Archive
voice**, on a lore page. A Codex artefact asserts nothing — it is
valid-for-its-author, like every other codex entry — so relocating an image
stops the claim just as deletion does, and keeps the picture. The disposal
options are therefore three, in order of preference: **fix it, relocate it,
delete it.**

**The Codex's own schema is what makes this work.** `author` is a required field
on every codex entry, and an artwork's author is exactly what makes it
valid-for-its-author: a rendering by someone who never saw the subject, worked
from a description, or had reasons to flatter. A grey-alien bust is wrong as
lore and *interesting* as a popular-press impression by an illustrator who never
met one — and it then illustrates the very refusal
[What the Record Refuses](../src/lore/what-the-record-refuses.md) makes. Test an
image the way the boundary already tests prose: not *is this true?* but *could
someone in this world have made it, and would they have made it this way?*

**What it takes mechanically — it is not a file move.** `validate-content.js`
fails on any unreferenced file under `src/images/`, so an image cannot sit in
the Codex unattached. Refiling means **writing a codex entry around it**, with
an author, and moving the file to `src/images/codex/`. `image_alt` still
describes what the picture actually shows. Codex entries carry no `canon_facts`,
which is consistent — an artefact establishes nothing.

**It would not have rescued either Batch 3 deletion**, and the reason is worth
keeping because it bounds the rule. Both failed for something the Codex cannot
cure: they are **photographs of identifiable real-world subjects**. Refiling
`formation-of-star-rangers.jpg` still shows One World Trade Center, whoever is
said to have taken it — the problem was never the claim the page made, but that
the image arrives with its own meaning already attached. The stock provenance is
a second, independent reason, and the 11 August sweep removed eight on that
ground alone. *(The French dial was recorded here as arguable — an in-universe
artefact could legitimately be French-made. The 18 August exclusions below
settle it twice over: it is stock photography, and an antique instrument on a
twenty-ninth-century page is an anachronism. Not arguable; excluded.)*

**So the rule's real catchment is original or generated images replaced for
canon reasons**, not stock photography removed for provenance.

**Correction, 18 August 2026 — this section shipped with a false claim, now
fixed.** It said the rejected originals were *"recoverable from git history"* and
named `lore/cerebraun` (grey-alien bust) as the strongest candidate. Checking the
blobs rather than the prose settles both halves against it, which is the same
failure this file warns about two sections up:

- **`lore/cerebraun.jpg` has exactly one content version in git**, and opening it
  shows the **architectural indirection** — a vast concrete hall, one robed
  figure, mist and high clerestory light. The grey-alien bust never entered the
  repository. It is not a candidate; it does not exist here.
- **Nor do most of the others.** `aldera`, `rook-7`, `nessa` and `orla-shepherd`
  each have **one** distinct blob across every commit touching them. The
  replacements happened *before* first commit, so the rejected originals were
  never version-controlled and git cannot return them.
- **`characters/qiren-tal.jpg` is the sole exception**, with two distinct blobs.

**Consequence: the rule is effectively prospective.** There is almost nothing to
apply it backwards to, which makes the retroactivity question below much smaller
than it looked — and means this rule will earn its keep on the *next* image
rejected for canon, not on the ones already gone.

#### Two absolute exclusions (Dermot's ruling, 18 August 2026)

**Stock photography never qualifies, and neither do anachronisms.** These are
not weightings to consider; an image failing either is deleted or replaced, and
the Codex is not offered.

The two exclusions look unrelated and share one reason, which is worth stating
because it also marks the rule's outer edge. **The Codex can carry a wrong
belief. It cannot carry a wrong century, or a real place.** A codex artefact is
still a physical object *made inside this world*, so the author's fallibility
covers **interpretation** — what they thought, inferred, flattered or got wrong
— and never **material culture**. Attributing a picture to an in-universe artist
explains why its reading is mistaken; it does nothing whatever about what is
physically in the frame.

- **Stock photography.** The image arrives with real-world meaning already
  attached, and no frame strips it: refiling still shows One World Trade Center
  whoever is said to have taken it. Provenance is an independent second reason.
- **Anachronism.** An out-of-period object is not a claim the artist made — it
  is a claim about what the world could manufacture. An artist working in 2826
  does not put a twenty-first-century desk lamp in a 2826 scene, so the codex
  frame has nothing to explain it with. The record already holds the doctrine
  this rests on: [What the Record Refuses](../src/lore/what-the-record-refuses.md)
  treats the sprung, jointed, domed desk lamp as *"as much a period object as a
  wall of dials,"* and sets out what light, displays and surfaces actually look
  like here.

  **A deliberate historical depiction is not an anachronism** and the rule never
  reaches it: a picture *of* the twenty-first century showing twenty-first
  century objects is correctly period. An anachronism is an object out of its
  time *within the scene depicted*, which is why the exclusion needs no
  exception.

**What the exclusions leave.** They cut the candidate pool hard, and usefully —
most of the Firefly replacement list above goes: `ilse-korvain` (US Army stock),
`karla-wender`, `orla-shepherd`, `nessa` and `maren-solveig-krast` are stock, and
`rook-7` v1 *"arrived furnished with the NYPD"*, which is both. What survives is
the **generated and non-period** remainder — `lore/cerebraun` (grey-alien bust)
still the strongest, with `aldera` and `qiren-tal` behind it.

#### The quality bar (Dermot's ruling, 18 August 2026)

**Only a high-quality image with artistic merit and without technical flaws
qualifies.** *Aesthetic* in the original direction is not a low bar meaning
"looks alright"; it is these three, and an image failing any of them is deleted
or replaced like any other.

The clean formulation: **if the picture would not earn a place on a page were
canon no obstacle, it does not earn one as Codex art.** The Codex is not a
salvage yard, and refiling is not a way of keeping work that was not good
enough. Most images rejected in this repository were rejected *partly* because
they were poor, and a poor generation does not improve by being reattributed.

**Technical flaw versus style — the distinction worth holding.** A generation
artefact is a flaw: six-fingered hands, garbled lettering, mismatched eyes,
architecture that does not resolve, a limb with no shoulder. A stylisation is
not: flattened perspective, exaggerated proportion, a naive or votive manner are
all things a maker chooses. **The test is whether an in-world artist could have
chosen it.** They can choose a style; they cannot choose a diffusion artefact,
because it is evidence of how the picture was actually made — which is exactly
the seam a codex frame cannot cover, the same reason anachronism and stock are
excluded.

**Where this leaves the pool: empty, or nearly.** Combined with the two
exclusions and the correction above, no identified candidate currently survives.
That is not a fault in the rule. It is well specified and will catch the next
case; it simply rescues nothing already gone.

#### Two things decided (Dermot's rulings, 3 September 2026)

1. **The title-card convention stands; the artwork goes in the body.** A
   Codex-art entry carries a designed card in `image:` like every other codex
   entry (`make-codex-cover.ps1`, with `-Underlay` scrimming the artwork behind
   the lettering where that helps), and shows the artwork at full size in the
   body as an inline image with a caption naming its in-world maker. The codex
   index stays a uniform grid; no exception is stated. The mechanics already
   exist: `src/lore/celtic-union-of-planets.md` carries a body image and
   `validate-content.js` accepts an inline reference. Chosen over showing the
   artwork as the header (a mixed grid, and a convention exception for an
   empty pool) and over underlay alone (keeps the grid, loses the picture).
2. **Prospective only.** The sole recoverable candidate, `qiren-tal.jpg` v1
   (blob at `fa95e25^`), was opened on the day of the ruling: a stone-skinned
   horned figure with claws against a wall of fire — a stock fantasy-demon
   trope on the horror side of the tone line, so it fails the quality bar
   before retroactivity is reached. Nothing else survives the exclusions.
   The rule applies to the next image rejected for canon and to none already
   gone; no git dig is owed on future rejections.

The first test case remains the headmate image below, which waits on the
interiority-guardrail ruling and not on either of these.

**Note what the July audit did and did not ask.** `formation-of-star-rangers`
was inspected in that sweep and passed — correctly, on the question being asked,
which was whether the alt matched the image. Nobody asked whether the image
belonged. Two different tests, and only one of them was ever run on it.

**The cheapest good answer to several of these is tier 3 of Open work 6** —
Dermot's own photography. An Irish upland standing in for Ynys Wydrin claims
nothing false and needs no prompt at all.

### 1. Missing portraits — **the original list is fully delivered** (audited 19 August 2026)

**Every one of the thirty-four prompts below has been generated and shipped.**
Checked by pulling each `` `slug.jpg` `` out of this section and testing it against
`src/images/characters/`; nothing is outstanding. The heading said *28 pages* and
the section listed 34, and none of it had been marked done — so the count was
wrong, the label was wrong, and a reader would have taken finished work for a
queue.

**The prompts stay exactly where they are.** They are the prompt of record for
the images they produced, and deleting them to tidy a status line would destroy
the provenance the file exists to hold. Read what follows as an archive, not a
work list.

**What is actually outstanding is a different set of pages** — 25 of them, none
overlapping with this list. See *Outstanding portraits* at the end of this
section.

**One stale instruction to ignore in these archived prompts.** Most of them end
*"Portrait orientation."* That predates the settled convention: character
portraits are **1200×675, 16:9 landscape** (see Conventions, and the recorded
Calloway entry in `image-prompts.md`), and the delivered files bear it out —
42 of 52 are landscape. Don't copy that tail into a new prompt.

None block a build — `character.njk` renders cleanly without an image. Prompts
below were ready to paste; `image`/`image_alt` were added after generating.

**Humans**

- **`naomi-kestrel.jpg`** — junior field investigator, Eden Civil Investigations;
  reads telemetry, manifests and comm chatter "as one continuous sentence."
  > Cinematic portrait of a young woman analyst with dark red hair cut short, clear green eyes and a freckled complexion, at her station in a large working analysis bay aboard a space habitat, upper body, focused and absorbed rather than worried. This is plainly a professional workplace and not a private room: a long fitted work surface of pale composite built into the structure of the bay, other analysts visible at their own stations further down it, a tall structural bulkhead and a wide viewport onto starfield behind them, the room deep and institutional in scale. No domestic furniture of any kind, no wooden table, no wooden chair, no kitchen, no bed, no soft furnishings, no curtains, no bedsit or study. The bay is lit by soft diffuse recessed lighting from a concealed source, warm and even, with no lamp, no light fitting, no shade and no bulb visible anywhere in frame. Flat on the work surface in front of her lies one slim matte grey reading slate, a single rigid slab the size and thickness of a small hardback book, lying face-up on the tabletop, entirely unlit and blank-faced, its surface catching the room light the way a page would. It has no hinge, no lid, no keyboard, no stand and no raised panel — it is not a laptop, not a clamshell and not propped up at any angle; it lies flat like a closed book set down. Nothing else on the table. Practical dark uniform bearing small geometric rank marks — plain metal bars and a single star at the collar, shapes only. No name tape, no name badge, no printed words, no letters and no numerals on her clothing of any kind. Calm, uncluttered interior of a well-kept space habitat, muted palette, professional, no glamour styling. Absolutely no screens, no monitors, no glowing displays, no holograms, no projected light, no consoles, no dials, no gauges, no analogue instrument panels, no filing binders and no loose paper anywhere in frame. Her face is lit by the room, never by anything she is reading. No readable text, numerals, signage or written characters of any script anywhere in frame. Portrait orientation.

- **`rosalind-vey.jpg`** — tactical specialist, Eden Civil Investigations;
  ex-habitat tactical response, treats a scene as a room that might still be dangerous.
  > Cinematic portrait of a composed woman with fair blonde hair worn short and pushed back, in a practical tactical-response jumpsuit aboard a space habitat, upper body, alert and unbothered expression, subdued corridor lighting, science-fiction setting, desaturated palette, professional, no glamour styling. The jumpsuit carries small geometric rank marks only — plain bars and chevrons at the collar and shoulder, shapes and nothing else. No name tape, no name badge, no printed words, no letters and no numerals on her clothing of any kind. Lighting is soft, diffuse and recessed, with no lamp or light fitting visible. No screens, no glowing displays, no holograms and no projected light anywhere in frame. No readable text, numerals, signage or written characters of any script anywhere in frame. Portrait orientation.

- **`tamsin-reyes.jpg`** — undercover specialist; "whoever a room needs her to
  be," craft not instinct. Deliberately forgettable.
  > Cinematic portrait of a woman with a neutral, unreadable expression in understated civilian clothing, upper body, softly lit habitat interior, science-fiction setting, muted palette, deliberately ordinary and approachable rather than striking, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`lorien-the-wanderer.jpg`** — freelance survey-and-salvage captain of the
  *Restless Verge*; weathered but disciplined.
  > Cinematic portrait of a weathered independent starship captain, woman, upper body, wearing a worn unmarked flight jacket, standing in the compact cabin of a well-kept stripped-down long-range courier ship, self-reliant expression, lit by soft diffuse recessed light and starlight through a small viewport, with no lamp or light fitting visible in frame, science-fiction frontier setting, muted realistic palette, professional. The ship is spare rather than shabby: clean painted hull surfaces, everything stowed square and strapped down properly, tools racked, nothing loose, nothing broken — the ship of an owner-operator who flies alone and therefore maintains it meticulously, because there is nobody else aboard to fix anything. Absolutely no rust, no corrosion, no grime, no oil stains, no damage, no exposed wiring, no dripping, no clutter and no derelict or abandoned look anywhere. Her leather flight jacket is old and softened by use but clean and intact, and carries no marks at all — she holds no commission and answers to nobody, so no rank tabs, no insignia, no name tape, no badge, no printed words, no letters and no numerals on her clothing. No instrument panels, no consoles, no screens, no displays, no holograms, no dials, no gauges and no numerals anywhere in frame. No readable text, signage, insignia lettering or written characters of any script anywhere in frame. Portrait orientation.

- **`osric-fenholt.jpg`** — Historical (2558–2621); Imperium-era Belt
  compliance clerk, "The Honest Man of the Directorate." Period, not modern.
  > Cinematic portrait of a plain, serious middle-aged male bureaucrat in a severe archaic administrative uniform of a fallen space empire, upper body, seated at a paperwork desk, unremarkable and precise demeanor, muted sepia-and-grey period palette, dim archival lighting, historical science-fiction, no heroism or grandeur, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`wendell-albercombe.jpg`** — Detective Inspector, Eden; carries the boring
  caseload, complains constantly, solves cases over dinner. Suits the noir register.
  **Re-brief 13 August — two faults, and *noir* caused both.** The returns were
  grimy cyberpunk: rain-slicked industrial corridors, a lit cigarette in each
  variant, and heavy signage (*LEVEL 44*, *DOCKING BAY B*, *SECTOR-7 NO ENTRY*)
  that the plainmarks clause never displaced, because "noir detective, space
  station" summons a genre whose visual furniture *is* neon lettering. **Eden is
  a functioning, well-kept civil habitat, not a dying megacity**, and the house
  target — enigmatic and haunting, with beauty and hope in it — rules the look
  out on its own. So the word *noir* is gone, the setting is named as clean and
  cared-for, the cigarette is banned explicitly, and the plainmarks are stated
  before any mention of a corridor rather than after it.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a rumpled, world-weary man in his fifties, a detective inspector at the end of a long shift, upper body, standing in the doorway of the quiet civil detective bureau of Eden, a large rotating space habitat, in the year 2826, half-turned to listen to someone out of frame, tired but still paying attention, never posed to camera. His own clothes, not a uniform: a plain, well-made jacket of soft matte charcoal-brown woven cloth with a band collar and a closure with no visible fastening, no lapels, softened by long wear but clean, over a plain knitted shirt in muted blue, open at the neck. The bureau is clean, kept and orderly: smooth seamless walls of warm pale composite meeting the floor and ceiling in rounded coving, fittings set flush, soft light spread from long slots in the surfaces, a coat hanging on a plain peg by the door, a green plant on a sill, and through a wide window beyond, the habitat's cultivated green terraces curving upward into haze. Beside the door a flat painted plainmark: four stacked bands of black, slate-blue, bone-white and ochre, each carrying one simple geometric figure (a chevron, a ring, short tally strokes, a lozenge), and nothing else. Muted natural palette with warm skin and the plant's green. Photographed, not rendered: real skin with pores, stubble, fine lines and the slight unevenness of a living face, cloth with a real weave and creases at the elbows; high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, signs, labels, display boards or written characters of any script anywhere in frame; screens, monitors, terminals, consoles, keyboards, desk phones, filing cabinets, ring binders, paper stacks, desk lamps, dials, gauges, indicator lights, holograms; visible lamp, light fitting or bulb; rain, steam, neon, wet floors, smoking, cigarette; grime, rust, peeling paint, debris, neglect; twentieth-century business suit, necktie, lapelled sports jacket, tweed, herringbone, trench coat, hat; science-fiction costume, glowing trim, epaulettes, badge, name tape, logo or lettering on any garment; noir, flat studio backdrop, corporate headshot, glamour lighting. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 1: the filed frame read 20th or 21st century (class B), the herringbone jacket above all. Per Dermot's ruling the same day on `civilian-dress.md` item 1, Albercombe is not retro, so he now wears his own plain jacket in that note's vocabulary, with tweed, herringbone, lapels and a necktie negated. The room takes the century in seamless composite, coving, flush fittings and the habitat's terraces through the window; the doorway, the end of the shift, the plainmark and the no-noir clauses are kept. Opens as a documentary photograph, with render negatives.)*

- **`asteria-the-sage.jpg`** — retired Star Captain, now leads a local
  Fellowship of Light chapter on a quiet planet. **She wears the robes of her
  chapter and still reads unmistakably as a commander. Both at once — that is
  the whole portrait.**

  **This note has now been wrong in both directions, which is worth recording
  rather than tidying away.**

  It first read "a portrait should read as retirement, not command", and two
  rounds produced a beatific wise-woman in flowing robes, looking eighty. The
  correction of 11 August fixed the bearing and overcorrected the costume: it
  banned robes outright — *"absolutely no robes, no shawl, no draped or flowing
  fabric of any kind"* — and named **robes** as a word that "summons the
  wise-woman every time".

  **Dermot's correction, 12 August: she needed to have robes but look strong at
  the same time.** So robes were never the fault. The fault was letting the
  robes carry the whole characterisation — flowing fabric plus *serene* plus
  *older woman* produces a sage, and the first brief supplied all three. Take
  the bearing seriously and the robes stop being a costume for wisdom and
  become what a chapter leader actually wears.

  **The lesson for every other brief in this file:** when an image comes back
  wrong, the instinct is to ban the most visible feature. Usually the visible
  feature is innocent and the *combination* is the fault. Ban the softness, not
  the garment.

  So: robes, and a spine. An age stated as a number, because **older woman**
  drifts on its own. **Serene** stays excluded — that word did produce the
  first version, and nothing here needs it.

  **Third correction, 13 August, and this one came from outside the brief.**
  The 13 August lifespan and retirement canon put Asteria's departure from the
  service at **about a hundred**, and she has been retired long enough for
  Galahad to have met her afterward. She is therefore around **105** in the
  present, and the brief's "about sixty-five" was forty years wrong through no
  fault of its own — the canon moved under it. *(She also gained a surname the
  same day: **Asteria Wessex**. The chapter's "the Sage" is an honorific, not a
  name.)*

  The re-run is consequently a harder brief than the last one, and the reason
  is the setting's own rule: humans here stay **capable into the eleventh
  decade**, so a hundred-and-five-year-old is neither frail nor a marvel. She is
  simply old and entirely functional, which is a face contemporary reference
  photography barely contains. State the number, state the fitness, and ban the
  frailty vocabulary the way *serene* is banned — no stoop, no cane, no tremor,
  no papery softness, and no wondering-at-her-own-age expression either.

  **Also fixed:** the last two returns had no robes at all, which lost the
  chapter house entirely and left her reading as a countrywoman outside a barn.
  The robes are named first this time.

  *(Re-run 30 August at Dermot's report that the filed image reads about 55 —
  half her age. The filed file matched the pre-correction returns, so the
  harder brief below had never actually been run to success. First re-run
  overshot into frailty — both variants gaunt and diminished, which Dermot
  rejected: the age landed and the strength did not. The brief now welds the
  creased skin onto a plainly powerful frame, bans the gaunt vocabulary, and
  keeps the craft in the background from reading as a flying saucer. Stale
  portrait-orientation tail fixed to landscape.)*
  > Cinematic portrait of a woman of one hundred and five who reads unmistakably as a senior officer, upper body, standing outside a modest stone chapter house on a quiet rural world. She wears the plain working robes of a contemplative order over ordinary clothes - heavy, well-worn, functional cloth with a clear shoulder line, belted at the waist, not draping or billowing and not ceremonial; the robes are the first thing to get right and must be present. Genuinely old and physically powerful at the same time, and both must be unmistakable: her face is deeply creased and weathered everywhere, skin spotted with genuine great age, thin white hair cut short and practical - and her body is broad-framed and solid, full square shoulders, a strong neck, sleeves pushed back over thick weathered forearms, large capable hands with prominent knuckles, standing at parade rest with her weight set forward like a woman who hauled feed sacks this morning and will again tomorrow. Old like an ancient oak, not old like a dry reed. Level and unsmiling, looking straight at the viewer, assessing, faintly impatient. No stoop, no cane, no walking stick, no staff, no trembling, no frailty, no gauntness, no thinness, no sunken cheeks, no hollow eyes, no shrunken or withered frame, no papery delicacy, no beatific warmth, no serenity, no wisdom pose; no middle-aged smoothness, no soft focus, no airbrushed skin. Soft overcast daylight, pastoral setting on a settled colony world - dry-stone walls, green hills, and no aircraft, no spacecraft and no flying saucer anywhere in frame. Muted natural palette, a commander who happens to be wearing robes rather than a sage who happens to have been a commander, no uniform, no insignia, no rank marks, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`galen.jpg`** — Star Rangers liaison officer at a Celtic Union shuttle gate;
  minor character, correct and quietly decent.
  > Cinematic portrait of a mid-career woman Star Rangers liaison officer in a plain service uniform, upper body, standing in a quiet arrivals hall beside a tall window, courteous professional expression, soft overcast daylight, science-fiction setting, muted palette. Her uniform carries small geometric rank marks only — plain bars and a ring at the collar, shapes and nothing else. No name tape, no name badge, no printed words, no letters and no numerals on her clothing of any kind. The only wayfinding visible is a Compact plainmark: one flat stencilled panel of stacked colour bands in black, slate-blue, bone-white and ochre carrying a simple geometric figure (a chevron, ring, tally stroke or lozenge diamond), painted on the wall beside her. Absolutely no gates, no departure boards, no destination signs, no illuminated panels, no screens, no holograms and no numerals, and no readable text, signage or written characters of any script anywhere in frame. Portrait orientation.

**Alien**

**The fourteen unfiled Tier 1 sets predate every rule made on 13 August — do
not select from them, re-brief them.** Sampled two on 13 August and both failed
for reasons that were not rules when they were generated:

- **`sen`** — a warm, genuinely lovely archive scene, and wrong twice. A brass
  anglepoise lamp, which the lighting rule now retires by name, and a wall of
  cardboard box files with paper labels, which is a mid-twentieth-century
  office rather than a Survey Archive. Displays are matte slates here.
- **`eden-warden`** — a single humanoid android face in a corridor, against a
  review-table brief that already said *"a plural habitat AI, two personas in
  one system. **Not a face at all, arguably.**"* A whole habitat's mind is not
  one body standing in a walkway.

The rest of the batch was generated in the same run and against the same
pre-review briefs, so the expected yield from reviewing all twenty-eight images
is low and the effort is better spent on the briefs. **Work through them entry
by entry**: check each against the display, lighting, lettering, insignia,
cast-variety and non-humanoid rules above, rewrite, then regenerate. The
medieval-set entries — `brother-daire`, `ilsabet-marrowtide` — are the likeliest
survivors, since a period look is correct for them and the display rules barely
apply.

**Both of them did survive, and are filed** (13 August), which confirms the
diagnosis: what dated the rest was the *future* furniture, and these two have
none. Daire is a scribe at a sloped desk with quill, ink pot and vellum in a
stone cell; Marrowtide is an abbess in a stone passage with grey sea through the
arch behind her. Neither needed a rule that did not exist in 1216.

**And Daire settles something the lettering ban had left open: a scribe may
write.** His vellum carries close script and the entry passes anyway, because
the ban was always aimed at *signage and labels* — the readable word asserting a
name, a place or a rank — and never at the act of writing as a subject. The test
is unchanged and it is the only one that matters: **nothing in frame may be
legible.** Script that reads as writing without resolving into words is correct
here, and would be correct on any archive, ledger or manuscript entry. Nine sets
still need re-briefing.

**Non-humanoid species — briefed from the new lore pages, 13 August.** All three
of these were blocked until the species had a body in prose. They now do:
`src/lore/serephine-dunekin.md`, `veyr-basaltborn.md`, `verdani.md`. The prompts
below all open by stating **what the thing is not**, in the flattest possible
terms, because "non-human" on its own reliably returns a person with a
different head. Landscape orientation throughout — these bodies are wider than
they are tall and a portrait crop fights them.

- **`qiren-tal.jpg`** — Veyr Basaltborn engineer. The body is a **truss**, not a
  mass: many fine chitinous members bracing one another, which is how a slender
  thing stands in gravity that degrades human joints in a generation. No fixed
  front, no privileged pair of arms.
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a Veyr Basaltborn engineer at work on a hull junction inside a dim service space. THIS IS NOT A HUMANOID: no head on a neck, no torso, no two arms, no two legs, no face, no upright bipedal stance. The body is an open lattice - a living scaffold of many fine dark chitinous struts and braces, roughly the size of a large dog and wider than it is tall, with no solid trunk anywhere, so that the space behind it is visible through the frame of it. Eight to ten slender jointed limbs radiate from the lattice at irregular angles; several are braced against the deck and the bulkhead taking load, while three or four fine-tipped ones work together on a single point of the hull plate. The surface is real chitin with the dark iridescent sheen of cooled basalt, blue-black shot with oil-slick colour, the sheen broken by wear: struts scuffed dull where they bear load, fine scratches, grit and dust caught in every joint. Small dark compound eyes are distributed in clusters around the upper lattice rather than paired on a face. Working light is soft and recessed with no lamp or fitting visible, warm against cool metal, muted industrial palette, photographic and biological and grounded. Absolutely no humanoid or bipedal form, no head, no face, no clothing, no armour, no grey-alien features, no glowing screens or holograms. No readable text, signage, insignia lettering or written characters anywhere in frame. Photographed, not rendered: a real camera in a real place, high-ISO grain heavier in the shadows, a real lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - *(Revised 10 October 2026, photorealism triage: the filed frame read as a CGI creature, a polished metal lattice. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic photographic image*, names real materials (worn chitin, scuffs, grit in the joints), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged.)*

- **`isren-farrowkin.jpg`** — Verdani delegate. Photosynthesis pays by area, so
  the body is built to **spread**: kinbeds ride on broad extensible vanes, and
  a Verdani in good light is a far larger object than the same Verdani in a
  corridor. No single face — sensory structures run along the leading margins.
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a Verdani in a bright airy hall, vanes partly opened toward a tall window. THIS IS NOT A HUMANOID: no head on a neck, no torso, no two arms, no two legs, no face, no upright bipedal stance, nothing shaped like a person. The body is low, broad and multiply supported, resting close to the floor on six or more short sturdy limbs, and from it rise several very broad thin extensible vanes like the fanned leaves of a great fern, held half-open and angled to the light - opened, the vanes span far wider than the body itself. The vanes carry dense patches of deep living chlorophyll green across their upper surfaces, real living leaf tissue with fine veining and the faint natural bloom of a leaf, a few torn margins and dry brown edges, set into a paler grey-brown hide that is creased, dusty and scarred like an old animal's. Along the leading edges of the vanes run rows of small dark sensory nodes, evenly spaced, with no eyes and no face anywhere on the animal. Soft diffuse daylight from a tall window, calm institutional interior, muted natural palette, photographic and biological and grounded rather than stylised. Absolutely no humanoid or bipedal form, no head, no face, no clothing, no armour, no glowing screens or holograms. No readable text, signage, insignia lettering or written characters anywhere in frame. Photographed, not rendered: a real camera in a real place, high-ISO grain heavier in the shadows, a real lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - *(Revised 10 October 2026, photorealism triage: the filed frame read as a sculpture or 3D model, the vanes like glazed ceramic. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic photographic image*, names real materials (living leaf tissue with torn margins, a creased and dusty hide), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged.)*

- **`sethka-ru.jpg`** — Serephine Dunekin long-range scout. **Must read as
  clearly non-human** — light-scattering eye membranes, water-conservative
  build (the earlier mistake was a human in a headwrap).

  **Two rounds went wrong in the same two ways.** He arrived **armed with a
  rifle** nobody asked for — badly wrong for a Corps whose own doctrine is that
  a Ranger's real weapon was never on the belt, and wrong for *him*: he is an
  observer who plans routes by radiation profile, glare angle and thermal
  shadow. Weapons are now excluded by name, and he carries instruments instead.
  And "professional concept-art style" produced exactly that — a generic
  videogame alien — so the style words are gone and photographic realism is
  asked for instead. Per the sheen rule, the eye membrane is now described by
  what it *does* rather than named: "nictitating light-scattering membrane" is
  jargon a model cannot draw.
  > Documentary wildlife photograph taken inside the world by a 29th-century camera, available light: a Serephine Dunekin scout at dusk on a high stony ridge under a thin pale sky. THIS IS NOT A HUMANOID: no head on a neck, no torso, no two arms, no two legs, no face, no bipedal stance, nothing shaped like a person. The body is a low, broad, sealed carapace about the size of a large dog, mineral-hard and matte pale bone-grey, weathered like old bone, pitted and scratched, fine grit in its seams, held clear of the ground on six slender jointed limbs of unequal length placed radially rather than in pairs. It has no front. Rising and unfurling from the upper surface are several enormous thin translucent respiratory vanes, fanning open like wet paper lifted into the light, veined and faintly iridescent, real membrane thin enough for the low sun to show through it, creased where it has been folded, twice the span of the body they grow from - the animal is opening for the evening margin and is caught halfway. Set around the rim of the carapace are many small dark eye-spots, each glazed with a pale opaque membrane drawn part-way across it, catching the low sun with a faint prismatic sheen. Cold clear high-altitude light, long shadows, thin dry air, muted sand and bone palette, photographic and grounded and biological rather than stylised or mechanical. Absolutely no weapons, no armour, no helmet, no clothing, no face, no humanoid or bipedal form of any kind, and no grey-alien features. No readable text, signage, insignia lettering or written characters anywhere in frame. Photographed, not rendered: a real camera in a real place, high-ISO grain heavier in the shadows, a real lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - *(Revised 10 October 2026, photorealism triage: the filed frame read as a CGI creature with a polished shell and glassy wings. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic photographic image*, names real materials (weathered, pitted carapace; real membrane the light shows through), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged.)*

- **`suvra-kel.jpg`** — Ilveth search-and-rescue specialist; the first Ilveth
  portrait, briefed 23 August 2026 from `src/lore/ilveth.md` and
  `src/characters/suvra-kel.md` (both merged that day), so the sethka-ru rule
  is satisfied: the body plan comes from the record, not the JPG. **Must read
  as cold.** The body runs at ground temperature, so the frame's one warm
  thing is deliberately the ground and never her — and since heat is invisible
  to a camera, the picture stays honest: the warmth shows only as the one
  frost-free patch of bare rock, **no glow anywhere**. The mirror-pits are
  described by what they look like rather than named, per the sheen rule
  ("mirror optics" is jargon a model cannot draw, and the word *mirror* would
  put glass in the frame). Setting is her biography: the boundary watch of a
  geothermal province on Sardain, at night, utterly still — stillness is the
  portrait's whole posture, a watch-keeper priced in duration. **One axis is
  proposed here and is not canon: size.** The lore says long, low, several
  paired limbs, mass near the ground, and never says how big; the brief
  proposes roughly two people lying end to end and knee height, plausible for
  a body that pulls casualties out of collapsed structure. **Confirmed by Dermot, 23 August 2026** ("size is fine") — the
  two-people-long, knee-height figure is now the settled brief, and if a
  future Ilveth page states a size it should agree with this one.
  > Documentary wildlife photograph taken inside the world by a 29th-century camera, available light: an Ilveth watch-keeper at night on a frost-covered stony plain, beside a low outcrop of bare dark rock. THIS IS NOT A HUMANOID: no head on a neck, no torso, no two arms, no two legs, no face, no upright bipedal stance, nothing shaped like a person. The body is long, low and segmented, roughly the length of two people lying end to end and never higher than a standing person's knee, carried close to the ground on several pairs of short sturdy limbs, its surface matte and slate-grey, a real hide with fine texture, old scars and grit pressed into it and rime frost caught along its edges, drawn compact against the cold. The forward third rises into a hooded crest, and set into the crest are several wide, shallow, bowl-shaped hollows, dry, dark and polished smooth, each holding a faint dim reflection of the sky - nothing like animal eyes, no pupils, no whites, no lenses. Below the crest runs an even ring of very small dark bead-like eyes. Along the flanks lie broad thin folded vanes like furled sails, matte, veined, held flat against the body. The animal is utterly still, facing out across the plain. The outcrop beside it is the one patch of ground free of frost - bare dark stone, dry and free of ice, the only warm thing in the frame. Deep dusk light from a small dim sun low on the horizon, long blue shadows, a handful of faint stars in a clear dark sky, frost and stone in slate, bone-grey and deep blue. Photographic, biological and grounded rather than stylised or mechanical. Absolutely no weapons, no armour, no clothing, no equipment, no glow, no bioluminescence, no steam, no mist, no humanoid or bipedal form of any kind, no grey-alien features, no insectoid mandibles, no reptilian scales. No readable text, signage, insignia lettering or written characters anywhere in frame. Photographed, not rendered: a real camera in a real place, high-ISO grain heavier in the shadows, a real lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - *(Revised 10 October 2026, photorealism triage: the filed frame read as a clay or resin sculpture set on a photographed plain. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic photographic image*, names real materials (a textured, scarred hide with rime on it, which also says the body runs cold), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged.)*

  Proposed alt text for `suvra-kel.md` when the image lands (alt text is the
  prompt of record, so it is drafted with the brief): *"Suvra Kel keeping a
  night watch on Sardain: a long, low, segmented slate-grey body on several
  pairs of short limbs, resting beside the one frost-free outcrop of bare dark
  warm stone on a frozen plain. The forward crest carries wide dry bowl-shaped
  hollows holding faint reflections of a dim sky, a ring of small bead-like
  eyes beneath them, and broad folded vanes lying flat along the flanks. A
  small dim sun sits low on the horizon under a handful of stars."*

**AIs & non-corporeal — abstract emblem, no face**

- **`jeeves.jpg`** — domestic-companion AI, Eden; kitchen-and-gossip
  competence. **Superseded 30 August 2026** by Dermot's body-in-canon ruling:
  the live brief is in "The five stamped on 30 August 2026" below, under the
  visible-artificiality rule. The retired emblem here (the tidied night
  kitchen, no figure) was the 13-August bodiless-AI treatment; its blockquote
  is removed so the generator queue serves only the live brief — the parser
  takes the first quoted entry per filename.

- **`reeves.jpg`** — investigative-support AI, Threshold Station; **the other
  half of a deliberate pair.** Written 13 August on Dermot's note that the two
  or more instances of Reeves might look very similar to each other. They are
  the same model on separate deployments and their pages say so, so the images
  copy each other closely on purpose — same emblem, same palette, same
  restraint — and differ only the way a second installation of one thing
  differs. Here the partial figure is further along: more points joined, still
  not finished. Same intelligence, longer posting. Nothing else changes.
  > Abstract emblematic image representing an investigative intelligence: a slow constellation of small cool-blue points of light suspended in dark space, joined by faint thin lines into a partial figure that is most of the way complete but still open at one edge, a few points left unconnected. Deep indigo and near-black background, soft volumetric glow, quiet and patient rather than busy or urgent, a sense of a pattern nearly found and not yet claimed. No screens, no consoles, no terminals, no user interface, no panels, no dials, no charts, no diagrams, no icons, no symbols, no glyphs, no numerals, no lettering of any script, no human face, no figure, no machinery of any kind. Pure light and geometry only. Portrait orientation.

- **`reeves-eden.jpg`** — investigative-support AI, Eden bureau; same model as
  Threshold's Reeves, distinct enough to read as a separate deployment.
  **Re-brief 13 August — the old prompt was self-defeating.** It asked for "a
  holographic evidence-analysis interface and case-file glyphs" and then banned
  writing, which is a request for the one object in the setting whose entire
  purpose is to carry text. The return was exactly that: *CASE FILE: ALPHA-7*,
  *EVIDENCE CHAIN*, *PATTERN MATCH*, a real-world date, and garbled
  pseudo-words. **The ban was never going to win against the scene.** The fix is
  to describe an image with nothing in it that could bear lettering — light,
  geometry and depth rather than a console. This also suits the character
  better: Reeves is an intelligence that will not volunteer a conclusion, which
  is restraint, not a dashboard.
  > Abstract emblematic image representing an investigative intelligence: a slow constellation of small cool-blue points of light suspended in dark space, a few of them joined by faint thin lines into a partial, unfinished figure, the rest still unconnected. Deep indigo and near-black background, soft volumetric glow, quiet and patient rather than busy or urgent, a sense of a pattern half-found and not yet claimed. No screens, no consoles, no terminals, no user interface, no panels, no dials, no charts, no diagrams, no icons, no symbols, no glyphs, no numerals, no lettering of any script, no human face, no figure, no machinery of any kind. Pure light and geometry only. Portrait orientation.

- **`rasa-oyelaran.jpg`** — Superintendent, Eden's civil detective bureau.
  **Re-run 13 August, and the reason is written into the prompt.** The first
  generation returned a white woman in *both* variants, because the brief
  described her bearing, her role and her setting and never carried the
  heritage her own surname states. Oyelaran is a Yoruba name; the prompt now
  says so, and no future edit should quietly drop it. Note what the picture has
  to hold besides that: she runs an ordinary police bureau in a place that
  keeps handing her things no ordinary bureau was designed for, and her
  competence is patience rather than intensity. Not a hard-bitten chief.
  **Variant 2 chosen, 13 August, and the reason generalises:** the re-run
  returned one portrait in a navy blazer and one in a plain work jacket, both
  correct on heritage and both well made. Dermot took the second — *"she looks
  more like a detective."* The blazer read as someone who now manages people
  who work cases; the jacket reads as someone who still works them. **Dress the
  portrait for the job the page describes, not for the seniority the title
  implies.** Her page opens by calling her bureau the closest thing Eden has to
  an ordinary police detective bureau, so detective-first was the right read and
  the brief should have said so.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a Black woman of Yoruba heritage in her fifties, the detective superintendent who heads the civil detective bureau of Eden, a large rotating space habitat, in the year 2826, upper body, standing in the doorway of her working bureau, her attention on a colleague out of frame, never posed to camera. Dark brown skin, close-set greying natural hair worn short and practical, a level, patient, unhurried face, a woman who has stopped being surprised by her own caseload and has not stopped caring about it; not severe, not hard-bitten. Her own clothes, no uniform and no rank marks: a plain grey work jacket with a band collar and a closure with no visible fastening, no lapels, over a plain maroon shirt, cared for and worn in. Behind her, softly out of focus, the bureau is clean, kept and busy in a quiet way: two detectives talking across a plain table of smooth pale composite, seamless walls meeting floor and ceiling in rounded coving, fittings set flush, soft light spread from long slots in the surfaces, a plant and a few mugs giving the room its colour, and a wide window at the far end opening onto the habitat's cultivated green terraces curving upward into haze. Muted natural palette, warm skin against cool pale composite. Photographed, not rendered: real skin with pores, fine lines and the slight unevenness of a living face, cloth with a real weave and creases; high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, signage, labels or written characters of any script anywhere in frame; screens, monitors, terminals, computers, keyboards, consoles, desk phones, filing cabinets, ring binders, paper stacks, desk lamps, drop ceiling, fluorescent panels, open-plan cubicles, dials, gauges, indicator lights, holograms; visible lamp, light fitting or bulb; grime, rust, peeling paint, clutter, neglect; business suit, blazer, necktie, lapels, police uniform, badge, name tape, logo or lettering on any garment; flat studio backdrop, corporate headshot, posed smiling to camera, glamour lighting. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 1: the filed frame (the 13 August variant 2) read as a present-day open-plan office of monitors (class B). Her heritage, her age, the plain grey work jacket over a maroon shirt that Dermot chose, the doorway and her patience are all kept; the bureau behind her loses its terminals and takes the century in seamless composite, coving, flush fittings and the habitat's terraces through the far window. Opens as a documentary photograph, with render and period negatives. The older 12 August brief for the same file, further down this section, is superseded by this one, which is the entry `image-prompts.js` reads.)*

- **`turquoise-dove.jpg`** — a Higher Levril known only by the turquoise
  iridescence of her dimensional signature. A field signature, not a dragon.
  > Abstract ethereal image of a meta-dimensional presence known only by its harmonic signature: a gentle turquoise-and-verdigris iridescent field of light, coral-shallow blue-green tones, no defined creature shape, soft non-threatening luminosity, science-fiction otherworldly abstraction, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

**Replacement decided — replace, not upscale (Dermot's ruling, 2026-08-11; see
Open work 2).** Dormant by design while the old file exists — delete it to arm
the entry, per the standing pipeline rule.

- **`agent-barsik.jpg`** — currently 512×1024. Undercover Pets Detective
  Agency: black cat, station office, complete deadpan — everyone assumes he is
  the mascot, and the image must not wink. The 28 July attempt was right on
  pose and wrong on the lettering ban (readable binder spines, papers, and
  collar tag); the ban is written into the prompt below. The rejected 28 July attempt is recorded in
  `image-prompts.md` § 3.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a sleek black cat, a real cat with glossy short fur, whiskers and bright amber eyes, seated squarely and upright in the middle of a completely clear, empty desk with nothing at all on it, wearing a small plain metal disc on his collar. He is looking just past the camera at someone who has come in, with complete composure, entirely unbothered, as though he has been interrupted rather than caught; cool, clever and quietly adorable, no whimsy and no costume beyond the disc. The office is on Eden, a large rotating space habitat, in the year 2826, and it is clean, kept and pleasant: the desk a smooth seamless slab of warm pale composite with rounded edges, the walls the same seamless composite meeting floor and ceiling in rounded coving, every fitting flush, soft daylight-coloured light spread evenly from the surfaces, a green plant in a plain pot on the sill and a folded knitted throw on a chair giving the room its colour, and through a wide window behind him the habitat's cultivated green terraces curving upward into haze. Warm, calm, gently bright. Photographed, not rendered: real fur with individual hairs and a soft sheen, a real lens with shallow depth of field and slight softness toward the corners, high-ISO grain, natural colour. Negative: readable text, lettering, numerals, labels, signage or written characters of any script on any surface; the collar disc plain and unengraved; paper stacks, printed paperwork, open documents, binders, filing cabinets, shelving, boxes, telephone, desk lamp, steel desk; screens, monitors, terminals, consoles, keyboards, dials, gauges, indicator lights, holograms; pipework, exposed cables, riveted panels, circular pressure hatch, vault door, bulkhead; visible lamp, light fitting or bulb; grime, rust, clutter, neglect; drone; cartoon, plush toy, anthropomorphic pose, clothing on the cat. Render negatives: 3D render, CGI, animated film still, video-game render, plastic sheen, airbrushed, over-smooth fur, glossy concept art. Landscape orientation. No laptop, no folder, no folio, no book, no papers, no device of any kind on the desk; no wall switches or sockets.
  *(Revised 11 October 2026, century audit batch 1, under Dermot's ruling the same day that the century rule reaches the Undercover Pets rooms (*"Yes, the rooms do"*): the filed frame read 20th century (class B) on paper stacks, a steel desk, pipework and a vault-like hatch. The room is now an Eden office with seamless composite, coving, flush fittings and the terraces through a window; the page's paperwork is left out entirely after both first variants rendered the folio as a closed laptop; his gaze moves just past the camera, still interrupted rather than caught. The cute register is his and is kept. The earlier revision notes below describe the prompt this one replaces.)*
  *(Revised 3 September 2026: the prompt asked for "terminals" and both variants of the first run were wall-to-wall monitors — the lettering ban cannot beat the scene, so the scene changed.)*
  *(Revised again the same evening, Dermot: "Barsik would not have literal filing cabinets" — the re-brief had swapped monitors for cabinets and binders, a twentieth-century office either way. The room is now a habitat office: matte panels, a hatch. A first re-brief kept "a low shelf of unmarked document cases" and the model drew ring binders on it — so the shelf went too. The only paper in frame is the stack he sits on, which the page itself supplies.)*

**2026-09-27 — Noah at the plant, and the Fliade surface party.**

Written at Dermot's *Yes please* to the offer of Noah's portrait first and
Aravena and Hesper Nakagawa as a Fliade pair (his choice from the art survey
of the same day). All three are portraits of people who do not exist, so the
generator is the right tool under the Conventions. **1200 px long edge, 16:9
landscape**, into `src/images/characters/`. The negatives travel inside each
blockquote (30 August lesson). Every face is undescribed in the record, so
whatever comes back is a proposal: two variants each, put to him as pairs.
None of the three records a gender for Aravena or Nakagawa, and the prompts
do not supply one. **All three filed the same day on his *Approved*:** Noah
from run 1 variant 2, Aravena from run 2 variant 2, Nakagawa from run 1
variant 1; the record is in `image-prompts.md` under the same date.

- **`noah-adeyemi.jpg`** — Resident, Eden's fold-approach side, nineteen or
  twenty, the only person on the ring seen to look at the hatch. The record
  holds him in one act: crouched at the plant outside his own door with a
  watering can that was full, looking up at the hatch as it opened. That is
  the portrait — the moment before *You're the hatch*. Civilian, no uniform,
  no tab; the plant is the only prop and the can is the only tell. The
  named door and the numbered hatch stay out of frame or unmarked, since a
  generator cannot spell. Attention off-frame, on someone out of shot; not
  posing, not to camera (the 28 July guardrails, which are for everyone).
  The corridor is a habitat ring: smooth composite panels, a gentle upward
  curve, day-cycle light with no fittings showing. Nothing glowing.
  > Cinematic candid portrait of a young man of nineteen or twenty, of West African heritage, crouched on one knee in a plain residential corridor aboard a large space habitat ring, beside a small potted plant standing on the floor outside a closed flush door. He holds a plain grey metal watering can in both hands, spout tilted down, and is looking up and to one side, off-frame, at someone out of shot, his expression open and about to speak. Ordinary civilian clothing of no recognisable period: a plain dark work shirt with the sleeves pushed up, soft dark trousers, no logos, no badges, no printed words. The corridor is smooth pale composite panelling curving gently upward out of frame, clean and slightly worn at hand height, with no signage, no displays, no screens, no visible lamp fittings, no letters and no numerals anywhere; even soft overhead light like a habitat's day cycle. The door behind him is blank. Documentary, available light, natural skin, shallow depth of field with the plant and his face sharp and the corridor soft, 35 mm film look, muted colour. No uniform, no weapon, no futuristic gadget, no hologram, no lens flare, no dramatic lighting, no glow, not looking at the camera, not smiling for the camera. Landscape orientation.

- **`aravena.jpg`** — Surveyor, Fliade surface party, the newest and
  smallest of the three; carries the relay unit down the long passage and
  is the one who turns round at the end of each working time, light held
  low, and asks the dark whether that was all right. That is the portrait:
  last up the passage, turned back toward the deep dark below the squeeze.
  The Ranger block applies, adapted for cold-cavern field dress; Survey
  Corps working dress is a plain coverall. The relay unit rides on the back —
  *smooth and about the length of an arm* — and is described as unmarked.
  The dark is empty; nothing stands in it (hint, don't show, and the record
  says nothing answers). Age and gender are not in the record and are not
  in the prompt. Pair with `nakagawa.jpg`: same cavern, same light, same kit.
  *(Run 1, same day: variant 1 wore a stitched sleeve badge and variant 2 an
  oxblood tab, the provost track's colour; the Survey track's insert is pale
  grey-green (canon since 4 September). Re-rolled with the colour named and
  run 1 variant 2 held as the reference so the person stays.)*
  References: `story-bible/reference-art/aravena-candidate-2026-09-27.jpg`
  > Cinematic candid portrait of a slight, small-framed surveyor of indeterminate age and androgynous appearance, upper body, standing in a narrow rock passage deep underground on a cold world, turned back to face the dark end of the passage, seen in three-quarter profile from beside and slightly behind, face lit from below by a plain hand lamp held low at the hip with its beam on the stone floor. Keep the same person as the reference image: the same face, hair and build. Plain well-kept field coverall in a muted grey-green, high collar, one small plain-finished geometric tab at the collar with a single pale grey-green insert and nothing else, no badge on the sleeve, no red anywhere: no name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere. A smooth unmarked matte cylinder about the length of an arm is strapped across the back like a bedroll. Breath faintly visible in the cold. The passage walls are pale mineral rock with a fine crust of frost, receding into complete darkness; the dark is empty, nothing stands in it, no eyes, no figure, no glow. Documentary, available light from the one lamp only, natural skin, shallow depth of field, 35 mm film look, muted colour. No helmet, no visor, no weapon, no futuristic gadget, no screen, no display, no hologram, no lens flare, not looking at the camera. Landscape orientation.

- **`nakagawa.jpg`** — Survey Lead, Fliade; *reads the ground, which from
  the outside looks like standing still*. The portrait is that stillness:
  standing in the party's working light at the junction, hands empty,
  looking down at the cavern floor, unhurried, the one person whose job is
  to hold the party still. Middle-aged; gender not in the record and not in
  the prompt. Ranger block adapted for the same field dress as Aravena's,
  the relay unit on its base at the edge of frame so the pair reads as one
  party. Working light is portable lamp stands, plain, no fittings shown.
  > Cinematic candid portrait of a survey lead in middle age, of East Asian heritage and androgynous appearance, upper body, standing perfectly still on the open floor of a rock cavern junction deep underground on a cold world, hands empty at the sides, head bowed slightly, looking down at the stone floor with unhurried attention, face lit from the side by the party's plain working light. Plain well-kept field coverall in a muted grey-green, high collar, small plain-finished geometric tab at the collar with a single pale grey-green insert and nothing else: no name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere. At the edge of frame, on the floor, a smooth unmarked matte cylinder about the length of an arm stands upright on a plain base. Breath faintly visible in the cold. Pale mineral rock walls with a fine crust of frost, three dark passage mouths receding into complete darkness beyond the light; the dark is empty, nothing stands in it, no eyes, no figure, no glow. Documentary, available light from plain lamps out of frame, natural skin, shallow depth of field, 35 mm film look, muted colour. No helmet, no visor, no weapon, no futuristic gadget, no screen, no display, no hologram, no lens flare, not looking at the camera. Landscape orientation.

- **`lev.jpg`** — Lev Saunders, about eight, the boy with the wrong rabbit.
  Added the same evening at Dermot's *Yes please* after the page merged.
  The portrait is the walk back from the walkway in *Four Seconds*: a boy
  carrying a plain pet carrier with both arms, door shut, the shift change
  starting to move again behind him. Muffin is never depicted, and the
  shut carrier is the point. Undercover Pets register: lit warm and
  ordinary, not haunted. No look to camera (the guardrails are for
  everyone); his attention is on the box. Heritage is not in the record
  and is not in the prompt; whatever comes back is a proposal. **Filed the
  same evening from run 1 variant 2 on his *Approved*.**
  > Cinematic candid portrait of a boy of about eight walking along a pale, gently curving residential corridor aboard a large space habitat ring, carrying a plain grey plastic pet carrier in both arms against his chest, its wire door shut and nothing visible inside, his eyes on the carrier door and his mouth set, serious and a little pleased with himself. Ordinary children's clothing of no recognisable period: a plain soft jumper, plain trousers, scuffed shoes, no logos, no badges, no printed words. Behind him, soft and out of focus, a few adults in plain work clothes turning back to their day, and warm light spilling from an open doorway; smooth composite panelling, no signage, no displays, no screens, no visible lamp fittings, no letters and no numerals anywhere. Warm, ordinary, gently lit like a habitat's afternoon; documentary, available light, natural skin, shallow depth of field with the boy and the carrier sharp, 35 mm film look, warm muted colour. No uniform, no weapon, no futuristic gadget, no hologram, no lens flare, no dramatic lighting, nothing glowing, not looking at the camera, not smiling for the camera. Landscape orientation.


#### The seventeen replaced on 12 August 2026

Portraits for pages whose previous image was removed — see Open work 0 for
why each went. Drafted 12 August, revised 13 August against the aesthetic
target, and reviewed with Dermot. The atmosphere is added around each page’s
own `role` and `description`; no fact here is invented.

**`idris-bryneth` revised 20 August 2026 — the prompt contradicted the page.**
It asked for a herder *"of about sixty"*, but Idris Bryneth took the headship in
2815 UCSD as **"the youngest clan head on Aethelrock at the time of his
inheritance"**, which against the current 2826 puts him in his mid-forties. The
first run came back accordingly: a man of about seventy who was also
near-indistinguishable from `cormac-dubhghlas` — same grey beard, same weathered
face, same staff. Two of five clan heads reading as one man is a real cost when
they sit at one table. The revision sets the age and separates the silhouette
deliberately: dark close-cropped hair against Cormac's grey beard, and **no
staff**, which the generator added unprompted both times.

- **`cormac-dubhghlas.jpg`** — holder of the world's most arable ground; the
  Ridgemoot's most persistent voice for restoring the old seat rotation.
  > Cinematic portrait of a weathered farmer in late middle age at the edge of a cultivated upland field on a cold world, upper body, hard-wearing coat over layered woollens, standing entirely still with the unhurried patience of someone who has waited on weather all his life, early light coming low under a broken cloud ceiling and catching the mist still lying in the furrows, the crop young and coming up behind him, the far end of the field lost in haze, science-fiction agrarian colony, muted green and grey with one warm band of low sun, quiet and unhurried rather than stern, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`fergus-aonghas.jpg`** — holder of the eastern granite highlands and most of
  the planet's mining claims; the Ridgemoot's sharpest critic of Rhiannon
  Ceridwen, and her nearest neighbour.
  > Cinematic portrait of a broad, solidly built miner in middle age against a face of exposed granite on a cold world, upper body, heavy quilted working jacket with stone dust in the seams, weight settled, wholly unhurried, late sun raking across the rock so the grain of it reads like weather, the cut of the workings going into darkness behind his shoulder and not explained, thin cold air, science-fiction mining colony, slate and iron with warm light on stone, formidable and not unkind, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`idris-bryneth.jpg`** — holder of the sparsely populated northern high
  country; the Ridgemoot's most consistent voice against any arrangement that
  concentrates authority off Bryneth land.
  > Cinematic portrait of a lean, wind-burned upland herder in his mid-forties on open high moor, upper body small against an enormous sky, dark close-cropped hair and several days' stubble rather than a full beard, both hands empty and no staff, stick or crook anywhere in frame, oiled storm coat with the collar up, standing quite still and watching something well beyond the frame, weather arriving as a wall of light and rain far off across the moor with sun still on the near ground, science-fiction frontier highland, desaturated brown and pewter under a luminous sky, vast and calm rather than bleak, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`niamh-o-ceallaigh.jpg`** — holder of the coastal fjord country and its
  fishing fleets; the Ridgemoot's most consistent broker between Ceridwen's
  faction and the clans demanding the old rotation back.
  > Cinematic portrait of a practical woman in her fifties on a working fjord quayside at first light, upper body, waterproof deck coat, hair pulled back against the wind, head slightly inclined in the posture of someone genuinely listening, the water absolutely flat and holding the cliffs upside down, boats out at the mouth of the fjord already and very small, science-fiction coastal colony, blue-grey and salt-white with the first warmth on the far cliff, still and hopeful, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`rhiannon-ceridwen.jpg`** — holder of the world's only major fold-relay
  station; the most contested figure at the Ridgemoot since she began negotiating
  directly with Star Rangers survey traffic.
  > Cinematic portrait of a composed woman in her fifties beneath the mast structure of a relay station on a cold world, upper body, well-made practical coat, standing level and unhurried and quite alone, the mast rising out of frame above her and its guy lines going up into low cloud, one small steady light burning high on it, dusk with the last daylight behind the hills, science-fiction communications outpost, muted teal and grey with one warm point of light, solitary rather than isolated, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`demelza-trevithick.jpg`** — fourth-generation chief engineer of Kernowek
  Reach's Ridge Processor Cooperative, keeper of the band's atmospheric
  machinery, first Reach officer to speak with the Survey Corps team.
  > Cinematic portrait of a chief engineer in her forties inside a working atmospheric processing plant, upper body, practical coverall with the sleeves pushed back and hands marked by the work, one hand resting on a running machine as though listening to it through her palm, warm furnace light from below meeting cold blue daylight from a high vent far above, steam drifting through the beam, the plant continuing away into depth behind her, science-fiction industrial interior, amber and steel, proprietary and at home, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`rhian-gwynne.jpg`** — senior fabrication engineer at the Ynys Wydrin dome
  and life-support base, whose recycler and cold-world agricultural designs have
  been exported to two later charter worlds — and who has never visited either.
  > Cinematic portrait of a fabrication engineer in her thirties in a dome life-support workshop on a cold world, upper body, insulated work jacket, absorbed and only half turned toward us as though interrupted mid-thought, ranks of growing frames behind her running green and lit from within, and beyond the dome glazing a white permafrost plain going to nothing, condensation on the glass between the two, science-fiction engineering interior, pale green and glass-grey against cold white, warm life held inside a cold world, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`imogen-petrakis.jpg`** — Eden's elected Mayor, the half of Wayland's
  reporting line accountable to residents rather than the Compact.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a woman of Greek heritage in her fifties, the elected Mayor of Eden, a large rotating space habitat, in the year 2826, upper body, standing still on a broad public concourse while residents pass softly blurred around her in both directions, her attention on someone out of frame who has stopped to speak to her, listening, tired and glad of it, never posed to camera. Olive skin with real lines, dark hair going grey, cut practical; a capable, unpretentious face. Her own clothes, no insignia: a plain well-cut charcoal coat-length jacket with a band collar and a closure with no visible fastening, no lapels, over a plain high-necked top, cared for and worn in. The concourse is clean, kept and prosperous: floor and walls of smooth seamless pale composite meeting in rounded coving, a long low planter of real greenery along one side, and a wide window band along the curve through which the habitat's cultivated green terraces rise upward into haze, a long slow bar of daylight from it lying across the floor. The residents wear plain everyday clothes in quiet natural colours, a child's red coat among them. Warm and inhabited, muted natural palette. Photographed, not rendered: real skin with pores and the slight unevenness of a living face, cloth with a real weave and creases, a fast lens near wide open with shallow depth of field, motion blur on the passers-by, high-ISO grain heavier in the shadows, slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: signage, arrows, wayfinding panels, stencils, readable text, lettering, numerals, labels or written characters of any script anywhere in frame; screens, monitors, holograms, glowing displays; exposed ribs, trusses, pipework, cables, riveted panels, porthole windows, aircraft-cabin windows, ceiling light panels, visible lamp, light fitting or bulb; beanies, knitted caps, hoodies, puffer jackets, parkas, jeans, backpacks, lanyards, logos on clothing; business suit, blazer, lapels, necktie, chain of office, sash, badge; grime, rust, peeling paint, debris, neglect; flat studio backdrop, glamour lighting, corporate headshot, posed smiling to camera. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 2: the filed frame read as a rendered science-fiction set (class C), ribbed corridor and aircraft-style windows, with present-day beanies and parkas in the crowd. The concourse is now Eden's, kept and seamless, the habitat's terraces through a window band, and the long bar of sunlight is kept from the first prompt. She wears a leader's ordinary professional dress per `civilian-dress.md` (ruled the same day: no everyday leaders' dress). Heritage is stated on the Oyelaran precedent, from the surname, matching the face already filed, and is his to change; the plainmark wayfinding is dropped because the generator drew it as arrowed signage. Opens as a documentary photograph, with render and period negatives.)*

- **`zara-wayland.jpg`** — Eden's Space Commissioner, answering upward to the
  Compact's Chief Commissioner and in parallel to Eden's Mayor.
  > Cinematic portrait of a civil administrator in her forties at a habitat observation gallery, upper body, restrained administrative dress without rank marks, standing quietly with her hands at her sides, the great curve of the ring's inhabited interior rising away behind her and going soft with distance and haze, lit windows scattered across it, Earth or its star out of frame and throwing one clean edge of light along her, science-fiction orbital habitat, muted navy and bone with one bright rim, measured and faintly wistful, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`rasa-oyelaran.jpg`** — Detective Superintendent, head of Eden's civil
  detective bureau, the officer of record whose paperwork the real work hides
  behind.
  > Cinematic portrait of a detective superintendent in her fifties in a quiet bureau corridor long after hours, upper body, practical dark civilian suit worn well past the end of the working day, entirely unhurried, one office still lit far down the corridor behind her and nobody visible in it, low warm lamplight near and cool habitat night light beyond, science-fiction habitat interior, subdued brown and charcoal with two temperatures of light, dry, patient, still at it, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`petra-voss.jpg`** — Governor presiding over the five self-governing orbital
  habitats bound by the Orbital Habitats Compact, and the officer who
  commissioned Orbital Five-O to close an investigative gap none of her habitats
  could close alone. She is listed among the three original headshots that leaned
  toward the glamour look the house style rules out, so the exclusions below are
  explicit rather than implied.
  > Cinematic portrait of a governor in her fifties at a high viewport, upper body, restrained formal civilian dress without insignia or rank marks, standing quite still with her weight settled, more than one distant orbital habitat visible far off beyond the glass as separate points of light on their own paths, Earthlight coming up cool and even across her from below, the room behind her dark, science-fiction orbital setting, deep blue and bone with one cold soft key light, presiding rather than commanding, no glamour styling, no jewellery, no styled hair, professional, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`bertram-ashcombe.jpg`** — immaculately dressed, unfailingly cheerful, and
  serenely confident that cases solve themselves once he has had a proper
  breakfast.
  > Cinematic portrait of an impeccably turned-out detective inspector in his fifties aboard a space station in the year 2826, upper body, three-piece suit in excellent order with a pocket square — the formality is his, not the room's — entirely at ease and genuinely pleased with the morning, standing in a working constabulary office built into the station's own structure with composite bulkheads, exposed structural ribs and current-era flat displays at the desks behind him, a tall window looking out along the station hull to hard sunlight and black sky rather than onto any street, early light coming through it in a single warm shaft with dust turning in it, warm brass and oxblood in the furnishing set against plainly modern construction, cheerful without being comic, professional, no glamour styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

  *Revised 20 August 2026. The prompt said "science-fiction detective setting with a period sensibility" and stated no era, and the generator took the period half and dropped the other: both candidates came back as a Victorian panelled office that could not be a station in 2826. The prompt-craft rule above — **state the era, or the setting defaults to contemporary Earth** — applies just as much to a stated *sensibility*, which a generator will read as a setting unless something anchors it. The tailoring and the warmth are his and are kept; the room is now the station's.*

- **`reeves.jpg`** — investigative support intelligence: correct, courteous, and
  constitutionally unable to volunteer a conclusion before being asked the right
  question.
  > Cinematic portrait of a humanoid artificial intelligence in a detective's office at night, upper body, a courteous attentive figure whose face is plainly manufactured rather than human - matte shell with visible seams and joins, calm even features, eyes that are clearly optical instruments and not human eyes - in restrained formal service attire in keeping with the station, hands still and folded, poised as though waiting to be asked rather than about to speak, a single warm desk lamp from one side leaving most of the room dark, one soft steady light somewhere within the shell itself, science-fiction detective interior with a period sensibility, brass and deep green, patient, unthreatening, and slightly unreadable, professional, no readable text, signage, insignia lettering or written characters anywhere in frame. Portrait orientation.

- **`sen.jpg`** — Senior Archivist of the Survey Archive, quietly correcting the
  institutional record for two decades. Sen is a plural mind — Cael, Wyn and Sen
  — sharing one body and one desk.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a senior archivist in their forties, upper body, seated at a clear desk deep in the stacks of the Survey Archive in the year 2826, one hand resting flat on the cover of a closed, plainly bound volume, gaze lowered a little past it, wholly absorbed and entirely still, the stillness of someone weighing a thing carefully and not yet saying it, never posed to camera. A single ordinary composed person: an unremarkable, intelligent face with real lines, hair kept short and practical. On duty in the Star Rangers Survey Corps field uniform: a modular field shell in deep olive over a close-fitting dark liner, cut like practical workwear, with a high soft collar; its only mark one small plain-finished tab seated at the collar with a pale grey-green insert; cared for and long worn. A woven rust-coloured scarf hangs over the back of a plain chair of moulded pale composite. The desk is a smooth slab of warm pale composite with rounded edges, nothing on it but the closed volume and a plain glazed mug. Behind, softly out of focus, a plain seamless wall of pale composite curving gently away, unbroken by any case, cabinet, drawer, door, shelf, panel, label holder or binder; the record itself is kept out of sight, and the room is quiet, warm and empty. A sense of enormous quiet and of work that will outlast the worker; serene, and a little uncanny only in the stillness. Warm skin, deep olive and a rust scarf against cool pale composite. Photographed, not rendered: real skin with pores, fine lines and the slight unevenness of a living face, the shell's matte cloth with a real weave and soft creases, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: mirrors, reflections, doubling, a second face, split lighting, translucent overlay, multiple exposure; open book, open pages, loose paper, paper stacks, ledgers, handwriting, film cans, film reels, cardboard boxes, archive boxes, steel shelving, metal racking, filing cabinets, drawers, drawer pulls, keyholes, lockers, card-catalogue drawers, book spines; mesh office chair, swivel chair with castors; desk lamp, domed or shaded lamp, visible lamp, light fitting or bulb; screens, monitors, terminals, keyboards, holograms, glowing displays; dust in the air, cobwebs, grime, clutter, neglect; readable text, lettering, numerals, labels, signage or written characters of any script anywhere in frame; paired collar tabs, epaulettes, buttons, braid, medals, name tape, badge with words, logo or lettering on any garment; military dress uniform, combat fatigues, camouflage, armour; cardigan, civilian clothes; flat studio backdrop, glamour lighting, corporate headshot, posed smiling to camera. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 2: the filed frame read 20th century (class B) on a domed brass desk lamp, film cans, cardboard boxes and steel shelving, and its open volume invited lettering. Sen now sits in the century's archive: sealed composite record cases in coved, seamless aisles lit from slots, a clear desk with one closed volume under a flat hand, colour from a rust cardigan, a scarf and a mug. Dressed at first in their own clothes, the page being silent on whether the archivist is uniformed; corrected the same day by Dermot, verbatim *"Sen is uniformed"*, so Sen now wears the Survey Corps shell in deep olive with one collar tab carrying the survey track's pale grey-green insert and no bar count, since the page gives no rank. The single composed person and the no-doubling negatives are kept. Opens as a documentary photograph, with render and period negatives.)* *(Amended the same day after the first round, which was not filed: variation 1 drew the record cases as banks of lockable drawers that read as filing cabinets, variation 2 a mesh office chair; the chair is now named as moulded composite and drawers, keyholes, lockers and office chairs are negated.)*

- **`eden-warden.jpg`** — Eden's resident AI collective: two Kernel-compliant
  personas, Ward and Custos, sharing one system, with standing authority over the
  habitat's mobile AI humanoids.
  **Re-brief 13 August. Dermot: the Warden may not have a body at all, other than in the sense that the habitat structure is its body.** The previous prompt asked for it to present through a mobile humanoid, and the return was a single android face in a corridor — which is wrong twice over: the mobile humanoids on Eden are *other people* the Warden holds welfare authority over, not limbs, and a whole habitat's mind is not one body standing in a walkway. So the portrait is Eden. The Warden is not depicted; it is **inhabited**, and what a resident can actually see is the habitat behaving.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a wide view of the interior of Eden, a large rotating space habitat, in the year 2826, seen by a resident standing on a terrace walkway, the ground curving upward in both directions until it closes overhead far away in haze. Broad green cultivated terraces step along the curve, real soil, orchards, vegetable beds and long lawns, well tended and generous, with small well-made dwellings and halls of smooth pale composite set into the terrace edges, rounded corners and planted roofs, every one in good repair and clearly lived in. Walkways of smooth pale composite run between the terraces, their edges lit softly from flush strips set into them, already lit for the start of a shift; a doorway in one terrace wall stands open with the light already on inside; the far structure of the habitat is seamless composite, coved and clean, with no visible joints. A prosperous, cared-for, quietly beautiful place, entirely empty of people and of any figure, face, robot, android, humanoid form, statue or silhouette: nothing in the image is a body, and the place is plainly awake and attended, everything in order and nobody present to have done it. Soft diffuse daylight-coloured light spread evenly through the whole volume from concealed sources. Calm, spacious, a little uncanny, warm greens against pale cool structure. Photographed, not rendered: a real camera held at eye level, a real lens, the far curve softened by atmospheric haze across miles of air, high-ISO grain, slight softness toward the corners, a touch under-exposed, muted natural colour, the small honest unevenness of a garden someone tends. Negative: railway, rail line, train, tram, tracks, sleepers, ballast, monorail; tin huts, shacks, sheds, corrugated metal, shanty town, favela, slum, makeshift buildings, prefabricated cabins, ruins, overgrown or abandoned ground, derelict; grime, rust, peeling paint, debris, rubbish, neglect; visible lamp, light fitting, bulb or streetlight; screens, holograms, glowing displays; drone, flying vehicle; readable text, signage, insignia lettering or written characters of any script anywhere in frame. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, architectural visualisation, architectural render, tilt-shift miniature, model railway. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 1: the 10 October re-roll drew the habitat as tin huts along a railway, both variants, which says something untrue about Eden; the rail, the ballast, the weathered roofs and the worn paths were what invited it. Per *Places are well kept* the habitat now reads kept and prosperous: terraces, well-made composite dwellings with planted roofs, walkways with flush light, and no rail of any kind, with the shanty and railway family negated by name. Eden's design is not yet sheeted in `starship-design.md`, so the structure stays plain: a terraced green interior of a large rotating habitat, seamless composite. The Warden is still inhabited, not depicted.)*
  - *(Revised 10 October 2026, photorealism triage: the filed frame read as an architectural visualisation. The prompt now opens as a documentary photograph taken inside the world instead of a bare *Wide interior view*, names real materials (soil, uneven crops, weathered roofs, worn ballast, haze across the curve), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged. The Warden is still inhabited, not depicted: this is a place photograph with nobody and no body in it)*

- **`brother-daire.jpg`** — thirteenth-century monastic scribe of Cill Aoife who
  set down the only surviving account of Saint Aoife's vision at the thorn well.
  **Historical, not science fiction** — the only prompt here with no SF setting.
  > Cinematic portrait of a thirteenth-century Irish monastic scribe at his writing slope in a small stone scriptorium, upper body, undyed woollen habit, ink-stained fingers, absorbed and unsentimental, cold north daylight falling through one narrow window in a single hard shaft across the slope and leaving the rest of the cell in darkness, breath faintly visible in the cold, historical setting, limewash and umber, quiet and rigorous, no piety pose, no hands folded in prayer, no beatific expression, professional, no readable text, lettering, manuscript characters or written script of any kind legible anywhere in frame. Portrait orientation.

- **`ilsabet-marrowtide.jpg`** — Abbess of the Tideward Sisterhood, keeper of the
  Long Accounting, and the Kingdom of the Five Islands' de facto first point of
  contact for the Survey Corps delegation.
  > Cinematic portrait of an abbess in her sixties in a coastal stone abbey, upper body, heavy plain working habit of a contemplative order, belted, with a clear shoulder line and no draping or billowing fabric, upright bearing and entirely still, cold sea light flooding in through an open doorway behind her with the sea beyond it bright and out of focus, the stone interior dark and close around her, pre-industrial island setting, grey stone and dark wool against a luminous doorway, an administrator who happens to be in orders, no serenity of expression, no benevolence, no wisdom pose, no hands folded in blessing, professional, no readable text, signage, lettering or written characters anywhere in frame. Portrait orientation.

#### The five stamped on 30 August 2026 — hero-cast cards

Dermot's full-images-only rule for the homepage slideshow (29–30 August)
surfaced five hero-cast images that were never portraits: four designed
title cards (Iona, Galahad, Syra, Fintan) and Jeeves's kitchen emblem. All
five are now PLACEHOLDER-stamped and out of every cast until real portraits
land — the `lib/editions.js` cast comments say who returns where. The four
below are the portrait briefs; Jeeves is a decision, not a brief, and is
indexed in `open-questions.md`.

All are **16:9 landscape**, and the atmosphere is added around each page's
own `role` and `description` — no fact here is invented.

**The negative lives inside each blockquote, and that is a lesson, not a
style choice** (30 August, first run): `image-prompts.js --generate` sends
only the blockquote, so a "carry the standing negative" instruction beside
it is invisible to the generator. The first run went out bare and returned
readable signage, branded real-world survey kit, active screens and visible
lamp fittings across three of the four. Any future entry written for the
generator carries its negatives in the quoted text itself. (The parser also
joins every consecutive `>` line into the prompt, so notes about an entry
go in its bullet prose, never in the quote.)

- **`dr-iona-vale.jpg`** — Transit Safety Officer, Harmonic Operations,
  Threshold Station; the authority to say the jump does not happen. Her page
  is exact about what she is not: not against teleportation, against the
  pretence that the cost disappears. So the portrait is not a guard at a
  gate — it is a clinician standing where the cost is paid, unhurried and
  immovable. No displays (the standing rule: never light a scene with one);
  the bay behind her is hardware, not readouts.
  *(Revised 30 August after the first run: readable "PLATFORM 4" signage, a
  lettered console, active screens and a caged lamp fitting — the negative now
  travels inside the prompt.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a woman in early middle age, a transit safety officer, upper body, standing at the observation position of a teleportation bay aboard a boundary station in the year 2826, her attention on the empty transit platform off to one side and not on the camera, at work, never posed to camera. Hair pinned back plainly for work, a level, unhurried, immovable face with real lines and no make-up, the person who decides whether the jump happens, not unkind. She wears a plain working uniform: a modular field shell of matte neutral charcoal over a high-necked liner, simple considered cut, closed with no visible fastening, no colour of any service, no tabs, no badges, no marks. One hand rests beside a heavy plain hold lever set on a flush mount in the wall, not pulled. The bay is clean and kept, a quiet chamber of seamless pale-grey composite whose walls meet floor and ceiling in rounded coving, the circular transit platform set flush into the floor and empty, a few smooth sealed housings around it, every fitting flush and nothing lit, soft daylight-coloured light spread evenly from the surfaces themselves. Cool muted palette with the warmth of her skin. Photographed, not rendered: real skin with pores, fine lines and the slight unevenness of a living face, stray hairs, cloth with a real weave and creases; high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, signage, labels, stencilled markings, branding or written characters of any script anywhere in frame; screens, monitors, displays, consoles, keyboards, gauges, dials, meters, toggles, indicator lights, holograms, projected light, glowing rings or portals, exposed cables, conduit, pipework; visible lamp, light fitting or bulb; wristwatch; weapons; grime, rust, scuffs, peeling paint, debris, neglect; science-fiction costume, skin-tight bodysuit, glowing trim, epaulettes, braid, armour, name tape, logo or lettering on any garment; flat studio backdrop, corporate headshot, posed smiling to camera, glamour lighting, beauty retouching, low neckline. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, glossy starship bridge, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 1: the filed frame read as a rendered science-fiction set (class C). The prompt now opens as a documentary photograph taken inside the world, gives the bay the century in seamless composite, rounded coving and flush fittings in place of coil housings and conduit, turns her attention to the platform, and carries render and period negatives. Her page names neither a service nor a corps, so the uniform is a plain field shell in a neutral dark with no corps colour; the lever, the empty platform and her bearing are unchanged.)*

- **`galahad-thorne.jpg`** — Survey Team Lead, twelve years at boundary
  postings; describes accurately rather than reaching for the nearest
  category. Field surveyor, not office lead, so he is outdoors at an
  instrument. The Ranger block applies, adapted for field dress. The Marsh
  Causeway register — standing water, mist, first light — carries the
  boundary without depicting anything across it, per the hint-don't-show
  line.
  *(Revised 30 August after the first run: a branded present-day total
  station with keypad and display, sleeve chevrons, a handwritten notebook, a
  cap — the instrument is now described as unfamiliar and unmarked, and the
  negative travels inside the prompt.)*
  > Cinematic portrait of a weathered man in his forties, bare-headed, a survey team lead at work on a misted marsh boundary at first light, upper body, standing beside a surveying instrument of unfamiliar future design mounted on a heavy tripod — a plain matte grey-green housing around a single large optical lens, smooth unmarked casing with no keypad, no display, no branding and no manufacturer's markings, clearly an optical instrument and clearly not any present-day surveyor's model. One hand steadies it as he looks toward the viewer with a patient, level, precise expression — a man who describes exactly what he sees and nothing more. Plain well-kept field service dress in muted grey-green, its only insignia one small plain geometric tab at the collar, shapes and a single colour insert; no sleeve patches, no chevrons, no badges anywhere else on the clothing; practical field kit, empty hands otherwise. Behind him flat standing water and low mist going pale at the horizon, a single line of old bare wooden marker posts receding into the haze, nothing visible beyond them. Soft dawn light, cool serene palette, quiet and slightly haunting, hopeful rather than bleak. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; no screens, displays or keypads; no notebook and no handwriting; no wristwatch; no cap or hat; no weapons. Landscape orientation.

- **`syra.jpg`** — Krenyi boundary analyst, the Quiet-Built. The hardest
  brief of the four, because the species canon forbids the easy move: there
  is no organ to point at, so there is nothing to exaggerate, and the record
  says the Quiet-Built look almost human and decline to say what they are.
  What the portrait can hold is what the lore page opens on — posture
  steady, gaze direct, no wasted gesture — plus low light (which costs her
  nothing) and an age that will not resolve. The stillness is the alien.
  Trope guard written in: no elf, no grey, nothing glowing.
  *(Revised 30 August after the first run: both variants nailed the
  stillness and the unplaceable age, and both leaked monitors, lamps and
  cabling into the room — the room is now described as closed and inert, and
  the negative travels inside the prompt.)*
  > Cinematic portrait of a Krenyi woman, a humanoid who at first glance reads as an entirely ordinary human and gives the eye nothing to point to — ordinary ears, ordinary eyes, ordinary skin, no prosthetics and no alien features of any kind. What is not human is the composure: she sits perfectly still in a dim survey analysis room, hands at rest on the table, posture exactly balanced, gaze direct into the viewer, an adult whose age is impossible to place, quietly beautiful without any glamour styling, pale, dark hair drawn plainly back, plain professional analyst's clothing with no markings. The room around her is almost dark and everything in it is closed and inert — closed instrument cases, a bare worktable, deep shadow — lit by one soft warm pool of light from a concealed source above, no lamp or light fitting visible in frame, and she is visibly comfortable in the dark. Serene, enigmatic, slightly uncanny in stillness only; not a pointed-eared elf, not a grey alien, no glowing eyes, no unusual skin colour. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; no screens, monitors, displays, tablets, consoles or indicator lights of any kind, powered or dark; no cables; no holograms or projected light; no wristwatch or jewellery; no weapons; no corporate headshot posing. Landscape orientation.

- **`brother-fintan.jpg`** — retired Chief on the boundary-safety track,
  now the beekeeper of Cnoc na mBeach. The one non-SF frame of the four,
  same licence as `brother-daire`. The picture is his page's own image of
  him: the same watch at a smaller scale — and the telling-the-bees custom
  gives the pose, hinted rather than staged. Contemplative-tier domains
  front him, so serenity leads.
  *(First run, 30 August: both variants clean — variant 1 the stronger on
  the telling-the-bees pose and free of modern tells; variant 2 carries a
  wristwatch. Variant 1 filed and approved by Dermot the same day; all four
  portraits in this section were approved as the v1s of their runs.)*
  > Portrait of a fit, weathered man past seventy, a retired officer turned beekeeper, standing among plain wooden hives in a stone-walled hive-yard at first light, upper body. One hand rests flat on a hive roof and his head is slightly inclined toward it, as though he is quietly telling it something; a few bees hang in the air around him, unbothered. Undyed working wool in monastic plainness, no veil, no gloves, deeply lined unhurried face with the attentive patience of a man reading a slow instrument. Behind him low whitewashed stone cells and a green hillside going up into soft mist. Warm early light, gentle and serene, quiet, hopeful, entirely unhaunted; no science-fiction furniture of any kind. Landscape orientation.

- **`jeeves.jpg`** — **ruled 30 August: a body in canon** (Dermot's pick
  from the three options; the alternatives — a new emblem, or emblem-plus-
  never-cast — are closed). The ruling turned out to be half a
  clarification: `s02e01c01` already has him as *"a domestic-model
  intelligence... standing exactly where a man might stand"*, timing
  arrivals and pouring tea, so the frame existed in published canon and the
  character page now describes it (matte ivory-grey shell, plainly jointed,
  hands *sufficient for pastry*, round dark lenses that make no attempt to
  be eyes — and the uncatalogued waistcoat). The portrait falls under *AIs
  get portraits like everyone else*: artificiality visible at the prompt.
  The kitchen carries over from the retired emblem — same room, now with
  him in it, at morning instead of waiting for one.
  *(Revised 11 October 2026, Dermot's "Made with care": canon features kept; the finish now a well-designed object in a kept room, with crash-test dummy, mannequin, toy and industrial arm negated by name.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a portrait of a domestic-model artificial intelligence in the compact kitchen of an apartment aboard a large space habitat, upper body, standing at a scrubbed wooden table setting down a tea tray with exact care. The machine is human-shaped and unmistakably a machine: matte ivory-grey composite shell with plainly visible seams and joints, articulated mechanical hands, a smooth head with two round dark optical lenses that make no attempt to be eyes, no human face, no synthetic skin, no hair. Over the shell it wears a plain dark neatly fitted waistcoat. The apartment is unmistakably aboard a habitat, not a house on a planet: smooth pale composite walls with rounded coving, a galley counter in matching composite, a single small viewport whose view is the habitat's own softly lit green interior curving upward in the distance — no sky, no garden, no countryside. The kitchen is warm and immaculate all the same — a folded cloth, one clean cup, the wooden table an obvious treasure in a moulded room — and the whole picture is gentle, precise, and quietly comic in its dignity. Photographic realism, warm domestic palette over cool habitat neutrals. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; no screens, monitors, displays, consoles or indicator lights; no visible lamp, light fitting or bulb; no holograms; no weapons; not a menacing robot, not an industrial robot, no exposed wiring; no rustic cottage, no exposed wooden beams, no stone walls, no potted plants, no gas stove, no copper kettle. Photographed, not rendered: the shell is a real manufactured object of warm ivory composite with a soft satin finish, immaculately kept, only the faint sheen of long handling at its edges, and the waistcoat is real cloth with creases; Made with care: a well-designed object someone was proud to make, in considered proportions and warm, honest materials, every joint neatly shrouded and every seam deliberate, kept immaculate. Never a crash-test dummy, a shop mannequin, a toy or an industrial arm. soft morning light, high-ISO grain, a real lens with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Render negatives: 3D render, CGI, crash-test dummy, shop mannequin, toy robot, video-game render, plastic sheen, over-smooth surfaces, product shot. Landscape orientation.

#### Peran Slade — added 30 August 2026

- **`peran-slade.jpg`** — Fellowship of Light novice at Asteria's chapter
  house, seeking which expression of the one vocation is theirs (page
  approved by Dermot 30 August). The pose is the page's own material: the
  kept lamp custom and the door the margin-book line is about, so the
  portrait puts them in the doorway at dusk with the lamp — staying and
  going in one frame, nothing depicted beyond the threshold but hills. The
  flame hand-lamp is a deliberate, scoped exception to the no-visible-lamp
  negative: it is the subject's own instrument, not a light fitting.
  > Cinematic portrait of a young person of about twenty-two, androgynous, a novice of a contemplative order, standing in the open stone doorway of a chapter house at dusk, upper body, seen from just inside the threshold. They hold a small lit hand-lamp with a live flame, the picture's only warm light; through the doorway behind them, green hills going dark under a pale evening sky, nothing else out there. Plain undyed novice's working clothes with a belted overtunic, short practical hair, an alert open expression caught mid-thought between staying and going — attentive, earnest, questioning, not sad. Warm lamplight against cool dusk, quiet, serene, hopeful, slightly enigmatic. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; no screens, monitors, displays or consoles; no electric light fittings or bulbs anywhere, the hand-lamp's flame is the only light source; no candle arrays, no incense, no religious symbols or iconography; no weapons; no glamour styling, no corporate headshot posing. Landscape orientation.

#### Bumble — added 12 September 2026, from Dermot's own frame

- **`bumble.jpg`** — the wool-shed bee of Gleann na gCaorach on Drithane
  (page drafted 12 September, `intake-2026-09-12.md`; the direction was the
  five words *A character called Bumble*). A bumblebee is a thing a camera can
  photograph, so under the 3 September ruling the page takes a frame of
  Dermot's and never a prompt — and for the first time on a character page
  one existed: `own-photography.json` holds two bumblebees, and the pipeline's
  *photo first, generation last* order was followed to its first step and
  stopped there. Filed from the portfolio's `bumblebee-on-giant-scabious.jpg`
  (*Bumblebee on Giant Scabious*, Farmleigh, Dublin, 2024, 1600×1067): rows
  100–1000 at full width, resized to the 16:9 slot at 1200×675, JPEG quality
  85, nothing else touched. Chosen over *Bumblebee on Golden Rose* for the
  cold register — a bee against a bright overcast sky with dark conifers
  either side reads as an upland valley, and the rose reads as a warm garden.
  The alt text describes the frame, not the shed; the page does not claim the
  picture was taken on Drithane. No prompt, no reference, no generator; the
  provenance line is in `image-prompts.md` under *2026-09-12*.

#### Teddy — added 6 September 2026, the face ruled 7 September, the body open

- **`teddy.jpg`** — Individual Four, the one Pandoid the Fliade survey can tell
  from the others (page drafted 6 September, `intake-2026-09-06.md`; the page
  has no image and waits on this prompt). A Pandoid is a body no camera can
  photograph, so a generator may make it. The pose is the page's own material:
  the relay, standing upright on its base at the exact line in the cavern
  floor's silt where a line of bootprints stops, and the Pandoid a few steps
  back into the dark beyond it, half in the fungus-light, having just set it
  down. Nobody else in frame — the party found this, it did not see it.
  **Held on the face.** Canon says *strength, gait, mass and face are all their
  own* and describes none of them, and `species-design.md`'s naming caution
  says a name borrowed from an animal is never a licence for that animal's
  body. The prompt below describes the body the record gives — upright, dense
  grey fur, smaller and rounder than an adult — and describes **no face**,
  because inventing one here would put a Pandoid face into canon through a
  picture. ~~Generate only after Dermot says what the face is, and add it to
  the prompt then.~~ **Ruled 7 September 2026: *Teddy is curious and bright*** —
  the face clause was added to the prompt below and two rounds run the same
  morning (`image-out/characters-teddy/round1/`, then `round2/` with ape
  anatomy negated by name); every variant came back a great ape, which the
  naming caution forbids as squarely as a bear. Nothing filed. Three shapes
  put in `intake-2026-09-07.md`: a body detail of his that breaks both
  attractors (recommended), the face-turned-away frame, or accepting round
  1's first variant, which has the best face of the four. *Fliade*: amber and blue-green fungus-light, wet stone,
  cold register with one warm body in it.
  References: `../dermot-cochran-photography/src/images/photos/lion-portrait-at-dusk.jpg`
  > Documentary wildlife photograph taken inside the world by a 29th-century camera, available light only. Seen from well back in the passage, the way a wildlife photographer at a distance would take it: the being small in the frame, a fifth of the frame's height or less, a round heavy outline like a big soft bear's and nothing like an ape's, lit from behind and to one side by the fungi so that it reads first as a rounded back-lit outline with the fur glowing at its edges, its face half in shadow. A wide shot inside a deep natural cavern of an alien world, lit only by bioluminescent fungi coating the rock in soft amber and blue-green, no other light source. In the foreground, on a floor of pale mineral silt, a small upright cylindrical survey instrument with a smooth matte casing stands on its base at the exact point where a line of human bootprints in the silt ends; the prints come toward the camera from the left and stop. A few steps beyond the instrument, at the edge of the light and partly in shadow, stands a large alien being built on the lines of a giant panda, to a human eye a bit like a giant panda, and photographed the way a wildlife photographer photographs a real giant panda in the wild, with the same weight, the same fur and the same light, though it is grey and plainly not one, but unmistakably not an Earth animal: a stocky, rounded, heavy-bottomed body rising upright on two short hind legs, thick limbs of equal length, a big round head with no external ears, a broad flat face with a very short muzzle and no nose leather, a wide lipless mouth, and very large dark eyes set wide for seeing in low light, ringed with darker grey markings; dense thick grey fur that grows in soft overlapping ridges over the head, shoulders and back like a coat of down, soft to look at but real fur like a wild animal's thick winter coat, uneven, a little matted and damp, pale silt caught in it low down, individual guard hairs catching the amber light along its edges; turned three-quarters toward the camera so that the lit half of its face and one eye catch the fungus-light, with those large bright attentive eyes holding an expression of open curiosity and quiet intelligence, soft and warm and neither foolish nor weak; one heavy forelimb still lowered toward the instrument as if it has just been set down. The being is clearly not a human in a costume and clearly not an ape: no gorilla, no yeti, no sasquatch, no primate brow ridge, no long arms, no knuckle-walking. It is panda-like in silhouette and build but grey all over, never black and white, and plainly an alien: no Earth panda, no Earth bear, no ears, no wet nose. The being is smaller than the passage it stands in would suggest an adult of its kind to be, and rounder. Humid air, a faint sheen of moisture on the stone, a narrow squeeze in the rock visible behind the being where the passage closes down. Quiet, watchful, unsettling and calm; nothing threatening is happening. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame, including on the instrument; no screens, lamps, torches, electric lights or light fittings; no people, no other animals; no weapons; no ape anatomy; no black-and-white colouring; no glamour lighting or studio backdrop. Photographed, not rendered: a real camera in a real cave, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. The reference image is Dermot's photograph of a real animal, for light, grain and the texture of real fur only, never its animal. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, fur suit, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. 16:9 landscape.
  - **What the two rounds taught:** *upright, furred, heavy-shouldered, no
    snout* is the generator's description of a gorilla, and negating the ape
    by name does not move it. The prompt needs a positive body detail that is
    neither bear nor ape, which canon has not given and is his to give.
  - **Given the same morning** (`intake-2026-09-07.md`, fourth section):
    *more like a panda and less like a gorilla*. The prompt above is the
    rewritten one — the body leads with the panda build, the eye markings as
    darker grey, never black and white — and round 3
    (`image-out/characters-teddy/round3/`) came back panda-built both times.
    Variant 1 is the lean (clean relay, calm curious face, a thin black band
    along the top to crop on import); variant 2 has the better face and a
    relay with an antenna and a printed label, which the lettering rule
    fails. Both on all fours where the record says upright; his pick, or a
    fourth round on the stance. Nothing filed yet.
  - **"More alien"** (fifth section, same morning): the prompt above is now
    the alien-on-a-panda-build version — no external ears, a flat face with
    no nose leather, a wide lipless mouth, very large low-light eyes with
    the grey rings, fur in overlapping ridges. Round 4 came back upright and
    plainly alien both times, relays plain; variant 2 (rounder, younger,
    cooler light) is the lean, variant 1 the warmer and more adult. His
    pick — **"second image is fine", filed as `teddy.jpg`** (1200×670,
    alt text from the image, prompt of record in `image-prompts.md`), and
    Teddy cast on the below-the-roof edition's hero. Four rounds are the record for one portrait —
    the lesson is in `intake-2026-09-07.md`: when canon gives no body, ask
    for one positive shape before spending rounds on negatives.

#### Priya Nakamura — added 5 September 2026

- **`priya-nakamura.jpg`** — junior detective, Eden's civil bureau; her first
  experiment of her own was six days of hiding small objects from a rabbit,
  closed as *control compromised* (S02E08C01, drafted 5 September; the page
  has no image and, like Achebe's, waits on this prompt). The pose is the
  page's own material: the sixth morning in the records room, the lost-property
  bin open in front of her, six small bagged objects laid out on its lid, each
  with a plain unmarked slip, her notebook open in one hand — a good
  detective's face at the moment a hypothesis dies of natural causes, which is
  nothing, and then a small honest exhale. The station cat is **not** in the
  frame; she has just set him on the floor, and the joke works better unseen.
  Takes the uniform per [The Eden Bureau Uniform](../src/lore/eden-bureau-uniform.md):
  plain grey single-breasted work jacket, a Detective's one short black stroke
  on a bone-white tab, no number. **Heritage is stated in the prompt on the
  Oyelaran precedent**: Nakamura is a Japanese surname and the page asserts
  nothing about her appearance, so the prompt is where this gets decided, and
  it is Dermot's to change before generating. Age read as mid-twenties, as for
  Achebe. *Undercover Pets* thread: warm, dry, comic dignity.
  *(Revised 5 September 2026 after the first run: four variants, two rejected on lettering and a wristwatch, and Dermot's note on the two clean ones — **needs a more futuristic background**. The steel lockers and the riveted bin were the present-day tell. The setting sentences below are rewritten for a room built eight centuries on, and the clean variant he was shown is passed as a reference so she holds.)*
  References: `story-bible/reference-art/priya-nakamura-lean-2026-09-05.jpg`
  > Cinematic wide portrait of a young woman of Japanese heritage in her mid-twenties, the same person as the reference image, a junior police detective, standing at a lost-property container in the small records room of a space habitat built eight centuries from now, upper body, the container's lid open and six small everyday objects laid out on it in clear bags — a stylus, a clip, a spoon, a reel of tape, a pair of reading glasses, a small stamp — each bag with a blank unmarked slip. She holds an open notebook in one hand and is looking down at the objects with the still, level, faintly rueful expression of someone whose hypothesis has just been answered by the room. She wears a plain grey single-breasted work jacket over ordinary clothes, the jacket's only mark a small bone-white tab at the collar bearing a single short black stroke. The room is clearly of the far future and clearly not a present-day office: seamless pale composite wall panels that curve into the ceiling, one faint recessed line of soft light running along the wall at shoulder height, a low sealed archive unit behind her with smooth matte fronts and no visible handles, hinges, seams or rivets; the lost-property container is a smooth sealed composite box whose lid lifts on a hidden hinge. Soft even light from concealed coves. Warm, dry, quietly funny. Grey, bone-white and pale composite against a low warm glow. Use the reference image only for her face, hair and build; do not copy its room, furniture or lighting. No steel lockers, no filing cabinets, no riveted metal, no pipework, ducts, cables, conduits, grilles or vents; no wristwatch, ring or jewellery; no readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame, including on the slips, the bags, the notebook page or the jacket; no screens, monitors, tablets or consoles; no visible lamp, light fitting or bulb; no cat or other animal in frame; no flat studio backdrop, glamour lighting, corporate headshot or posed smile to camera; no weapons. 16:9 landscape.
  - **The slips and the notebook page stay blank.** Every form on Eden is a
    lettering invitation; the negative names them one by one.

#### Marisol Achebe — added 2 September 2026

- **`marisol-achebe.jpg`** — junior detective, Eden's civil bureau; her first
  case of her own was eleven days of missing flour, closed with a one-page
  report, no charges, and a rabbit (page approved by Dermot 2 September). The
  pose is the page's own material: *sit still, say nothing, and let the other
  party talk themselves into a decision* — so she is sitting on a sack of the
  flour that kept not being stolen, waiting, with [Knopka](../src/characters/knopka.md)
  settled against the warm patch beside her, both of them looking at the same
  blank wall. She is the first **junior** bureau officer to be drawn, so she is
  the first frame that **takes the uniform** per
  [The Eden Bureau Uniform](../src/lore/eden-bureau-uniform.md): the plain
  single-breasted work jacket with the rank mark at the collar — a Detective is
  **one short black stroke on a bone-white tab**, no letters, no numerals, and
  no number anywhere on the jacket, since whether it carries one is deliberately
  unsettled in the entry. *Undercover Pets* thread, so warm and ordinary rather
  than haunted, and the register is the same comic dignity as Knopka's own frame.
  **Heritage is stated in the prompt on the Oyelaran precedent** (13 August: a
  brief that never carried the heritage her surname states came back white in
  both variants). Achebe is an Igbo name; the page asserts nothing about her
  appearance, so *the prompt is where this gets decided*, and it is Dermot's to
  change before generating. Age is the chapter's one word, *young*, read as
  mid-twenties for the same reason.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a young Black woman of West African heritage in her mid-twenties, a junior detective of the civil bureau of Eden, a large rotating space habitat, in the year 2826, sitting on a stacked sack of flour in the dry-stores room of a habitat galley, upper body and knees, hands loosely clasped, entirely still and patient, watching a blank wall panel to one side with the composure of someone prepared to wait all afternoon. Dark brown skin, locs tied back, a calm young face with real texture. Beside her on the floor an ordinary brown domestic rabbit, a real rabbit with soft dense fur, sits upright against the foot of the same wall, looking at the same panel; no harness, collar or device on the animal. She wears the bureau's issued jacket: a plain blue-grey single-breasted work jacket with a band collar and no lapels, over ordinary clothes, its only mark a small bone-white tab at the collar bearing a single short black stroke. The stores room is clean, kept and orderly: walls of smooth seamless pale composite meeting floor and ceiling in rounded coving, shelving built flush into the walls, the sacks of undyed woven cloth tied at the neck, plain lidded stoneware crocks, a shallow basket of root vegetables, a warm patch of light lying low on the wall from an unseen source, the rest of the room in soft even light from long slots in the ceiling. The blank panel she watches is plain seamless wall, nothing about it a door. Warm, ordinary, quietly funny: two investigators waiting for a wall to confess. Warm flour-white and blue-grey against a low amber glow. Photographed, not rendered: real skin with pores, real fur with individual hairs, woven cloth with a real weave and a dusting of flour, high-ISO grain, a fast lens with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, labels, printing, stencils, branding or written characters of any script anywhere in frame, including on sacks, crocks or the jacket; paper sacks, printed bags, tins, cans, labelled jars, plastic storage boxes, steel shelving, metal racking, wooden bookcase shelving, skirting board, lino floor; hatch, door, handle, seam in the wall; screens, monitors, holograms, devices; visible lamp, light fitting or bulb; wall switches or sockets; lapels, blazer, name tape, badge with words; clipboard, notebook, pen; grime, clutter, neglect; flat studio backdrop, glamour lighting, posed smile to camera; no weapons. Render negatives: 3D render, CGI, animated film still, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin, plush toy. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 2: the filed frame read 21st century (class B) on printed paper sacks, tins, plastic boxes and steel shelving, a present-day storeroom, and the jacket came back lapelled. The room is now an Eden stores room, seamless and coved with flush-built shelving, the flour in undyed woven sacks and the tins swapped for stoneware crocks; the bureau jacket takes a band collar so the tab sits at the collar as `eden-bureau-uniform.md` says, in the blue-grey of that page's own image. Heritage, age, the pose, Knopka, the blank wall and the joke are all kept. Opens as a documentary photograph, with render and period negatives.)*
  - **The wall is the joke and must stay blank.** The panel she is watching hides
    a pantry the register forgot; nothing about it should look like a door, a
    hatch or a hiding place. If the batch keeps drawing a visible seam or a
    handle, tighten the crop on the two of them and let the wall be a wall.
  - **Extra negative:** hatch, door, handle, seam in the wall, plainmark bands
    (this is a stores room, not a hatch frame), clipboard, slate, notebook, pen,
    writing, cage, hutch, carrier with lettering.

#### Outstanding portraits — audited 19 August 2026 (25 pages); **retired 3 September 2026**

**All twenty-five have images as of PRs #630 and #631** (3 September 2026, the
28 August generation run reviewed and filed). Re-derived from the pages after
the merge, the only character pages without an `image:` are `ilsabet-corren`,
`marisol-achebe` (prompt queued, #628) and `the-kept-line`. The list below is
kept as the record of what the 19 August audit found; the command after it is
still the way to get a true count.

The pages that carried no `image:` on 19 August. This was a **list, not a prompt
set** — only Anne's prompt was written, because that is what was asked for. The
other 24 were named so the next session started from a true count rather than
re-deriving one.

```
alala · andrew-falkorian · anne-de-courtney · anne-wender · dagny-voss
elvira · emma-la-chapelle · ernesto-strozzi · galen-kane · kate-ukrainka
knopka · lucene-9000 · luke-valerius · lumbarian · muffin · saint-aoife
sildron-drey · sofia-santos · sorcha-nic-dhiarmada · sorcha-shepherd
sylvie-harrow · thalassa-vexar · thrum · xenon · zoe-smith
```

Re-derive it rather than trusting it, the same way this audit did:

```bash
for f in src/characters/*.md; do [ "$(basename "$f")" = index.md ] && continue
  grep -q '^image:' "$f" || basename "$f"; done
```

**Three of these are the rescue machines** — Lucene-9000, Xenon and Lumbarian —
and they fall under the *AIs get portraits like everyone else* rule above, with
the artificiality made visible at the prompt. Worth doing as a set rather than
singly, since they share a frame of reference and a generator has no memory
between frames.

##### The remaining twenty-one (19 August 2026)

Written at Dermot's request, in one pass, which is the right way to do it: the
roster reads as a roster only if the frames were chosen against each other. All
are **16:9 landscape**, all are **present-day** unless the page says Historical,
and all carry the standing negative below. **None is generated. All are
proposals.**

**Found 3 September 2026, filing the 28 August run:** the nine entries below that
began `[ranger block]` or `[house block]` went to the generator with that
placeholder as literal text, and every *Extra negative* bullet sat outside the
blockquote and was never sent — the same lesson as the 30 August note above,
learned a second time. Twenty-one portraits from that run were judged good
enough to file regardless (PR #630); the five that failed all failed on
lettering, which is exactly what the unsent negative bans. The blocks and
negatives are now pasted inside every blockquote in this section.

**Standing negative — paste into every one of these:**
> readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.

**Ranger block — paste into the seven Star Rangers frames:**
> Star Rangers service dress, plain and well kept, carrying small geometric rank marks only — a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing.

**Five of these belong to *Undercover Pets* and are deliberately off the house
style.** That thread is *cute, cool and clever*, and the runbook is explicit
that weaving melancholy or mystery through it is a category error rather than a
stylistic variation. Kate Ukrainka, Knopka, Muffin, Sylvie Harrow and Thrum are
therefore lit warm and ordinary, not haunted. Muffin is the exception inside the
exception — see its entry.

---

**The Star Rangers (7)**

- **`andrew-falkorian.jpg`** — Chief Science Officer; an engineering doctorate,
  standing at the seam where *the Corps decides what an instrument needs to
  measure and engineering decides how it will survive measuring it*.
  *(Revised 3 September 2026 after the 28 August run: both variants failed on lettering - unit tapes reading RANGER and ASTROPHYSICS on one variant, a lettered equipment case on the other. The prompt had gone out with a literal `[ranger block]` placeholder and its negatives outside the blockquote; both now travel inside it.)*
  > Star Rangers service dress, plain and well kept, carrying small geometric rank marks only - a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Cinematic wide portrait of a man in his late forties in a post's science section aboard a space installation, upper body, standing at a bench beside a part-built instrument — a bare frame with its optics cradled and its housing not yet on — one hand resting on the frame, considering it rather than working on it. Absorbed, exacting, unhurried; the expression of someone deciding whether a thing is finished. Spare institutional interior, soft diffuse light from a concealed source, deep shadow beyond the bench, a wide dark viewport further back. Muted grey, brushed alloy, one warm neutral. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. No laboratory glassware, bubbling liquids, microscope, mad-scientist styling or wall of equipment. Every case, crate and housing on the bench is plain and unmarked; the shoulder and chest of the jacket are bare cloth with no patch of any kind. 16:9 landscape.
  - **Extra negative:** laboratory glassware, bubbling liquids, microscope, mad-scientist styling, wall of equipment.

- **`anne-de-courtney.jpg`** — Chief Ranger of the one standing delegation on
  Vellamar, whose method is *not asking the court for the second thing before the
  first one is understood.*
  > Star Rangers service dress, plain and well kept, carrying small geometric rank marks only - a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Cinematic wide portrait of a woman in her fifties standing just inside the open doorway of a small walled compound at the edge of a pre-industrial island capital, upper body, looking out at the city beyond without stepping toward it, hands at her sides, entirely composed. Beyond the doorway: tiled roofs, stone lanes, terraced ground rising behind, warm afternoon light on the town. Inside the doorway where she stands the light is cool and plain. Restraint and patience rather than longing. Muted stone, terracotta and grey. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. 16:9 landscape.
  - **The frame is her method.** She is at the threshold of a place she has never
    asked to be let further into. Nothing else on the page needed saying, and a
    desk would have said nothing.
  - **Not the posted clause.** Her page keeps the charter's withdrawal clause
    pinned in the working room, which would have been the obvious frame and is
    unusable — it is a sheet of text, and text is the standing failure mode.

- **`emma-la-chapelle.jpg`** — the junior xenolinguist who filed the reading *at
  the bottom of her confidence range*, and returns from the Abbeylands *with more
  questions than sentences*.
  > Star Rangers service dress, plain and well kept, carrying small geometric rank marks only - a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Cinematic wide portrait of a young woman seated at a plain wooden table in the cool stone hall of a working abbey on a pre-industrial world, upper body, a closed notebook squared on the table in front of her and a pencil laid down beside it, her hands still — listening to someone out of frame with her head slightly tilted, entirely absorbed. Cold north daylight through a tall narrow opening, the hall dim beyond it, plain benches, no ornament. Practical field clothing over her service dress. Grey stone, pale daylight, one warm wood surface. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. 16:9 landscape.
  - **The notebook is shut and the pencil is down** — changed 19 August from
    *open and blank*, which is a page asked to be empty. Shut is the safe form
    and says the same thing better: she is at the moment before the note,
    listening rather than recording.

- **`ernesto-strozzi.jpg`** — the branch's most-cited practitioner for a piece of
  work he got wrong, who *teaches the correction rather than the recovery from
  it*.
  > Star Rangers service dress, plain and well kept, carrying small geometric rank marks only - a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Cinematic wide portrait of a man in his sixties standing at the head of a plain working table in a delegation compound's translation room, upper body, mid-explanation to two junior officers seated out of frame, one hand open in a gesture that is laying something out rather than insisting on it. Unembarrassed, matter-of-fact, patient. The table between them is entirely bare. Warm shuttered daylight in bars across the room, whitewashed walls. Ochre, whitewash, dark wood. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. 16:9 landscape.
  - **The table was cleared on 19 August.** It held *blank unmarked cards laid
    in rows*, which is a writing surface asked not to be one. The gesture does
    the work: a man laying something out for two people carries *method* without
    an object, and a bare table between a teacher and his juniors is the better
    composition anyway.

- **`galen-kane.jpg`** — *counts departures*. His most valued record entries are
  the closures, and the Corps' tradition puts the departing Ranger at the back of
  the room, in civilian clothes, unarmed.
  > Cinematic wide view of a man in his sixties standing alone at the back of a plain frontier meeting hall during a ceremony, upper body, in ordinary civilian clothes and carrying nothing, hands loosely at his sides, watching the front of the room from the last row. He is not the subject of the occasion and is plainly glad of it. The hall is full of seated colonists seen from behind, out of focus, and morning light falls through tall plain windows down the length of it toward the front. Timber, whitewash, low sun. Quiet, unceremonious, complete. 16:9 landscape.
  - **No uniform, deliberately, and the ranger block is not used here.** The
    tradition is explicit that the departing Ranger attends as a civilian guest,
    unarmed, at the back — a uniform would invert the one moment his career is
    counted in.

- **`luke-valerius.jpg`** — will not say *everywhere*, and declines the sentence
  beginning *which suggests*.
  > Star Rangers service dress, plain and well kept, carrying small geometric rank marks only - a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Cinematic wide portrait of a man in his forties standing at a wide dark viewport of a boundary-proximate outpost, upper body, turned away from a plain workbench behind him and looking out, arms at his sides, having just finished and having nothing to add. On the bench behind: two matched sealed reference housings, plain unmarked cylinders on a level mount, close together and identical. Outside the viewport, ordinary starfield and nothing remarkable at all. Very still, very level, faintly austere. Cool grey and deep black with one warm interior note. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. 16:9 landscape.
  - **The two matched housings carry the character** — instruments that disagree,
    with nothing to read on them. The house negative bans dials and readouts and
    it does not hurt here: the point is that the disagreement is not visible from
    the outside.

- **`zoe-smith.jpg`** — *the last rank most civilians ever stand in a corridor
  with*, held on purpose and at length.
  *(Revised 3 September 2026 after the 28 August run: both variants failed on lettering - hatch and block numbers on every door in both variants. The prompt had gone out with a literal `[ranger block]` placeholder and its negatives outside the blockquote; both now travel inside it.)*
  > Star Rangers service dress, plain and well kept, carrying small geometric rank marks only - a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Cinematic wide portrait of a woman in her fifties standing in an ordinary residential corridor of a space habitat, upper body, half-turned toward someone out of frame at a doorway and listening, weight settled, unhurried, entirely approachable. Not a command deck and not a crisis: a plain lived-in corridor with worn deck plate and a stowed handrail. Soft even light from a concealed source. Weathered, capable, patient. Warm neutral palette. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. Every hatch, door and panel in the corridor is plain and unnumbered, with no sign, plate, stencil or label anywhere on it; nothing on her jacket but cloth. 16:9 landscape.
  - **Deliberately the least impressive frame on the roster.** Her page's whole
    argument is that this rank is what the word *Star Ranger* actually means, and
    a heroic setting would have argued the opposite.

---

**Orbital Five-O (1)**

- **`alala.jpg`** — a Smart Pet raven on the public roster *with a service number
  and a leg band, because Commander Larsen's unit does not do covert animals.*
  > Cinematic wide view of a raven perched on a public handrail in the open concourse of a space habitat, in daylight from a great overhead window, the bird sharp and close and the concourse behind soft and busy with people who are not looking at her. Glossy black plumage with blue and purple iridescence, head turned, one bright eye directed at something off to the side, entirely composed. On one leg a plain metal band, unmarked. A slim matte collar fitting sits low at the back of her neck, small, plainly manufactured and making no attempt to be hidden. Bright, open, ordinary. Warm daylight, green planting in the middle distance. 16:9 landscape.
  - **Visible band, unmarked band.** Her whole posting is that she is announced
    in advance and in writing; the band has to read as official and cannot carry
    a number, so it is plain metal and the *manner* does the work.

**Orbital Five-O, Season 10 (5)** — drafted 4 September 2026 with the five
character pages. The four Chthonari were generated and filed the same evening
at Dermot's direction, picks approved by him (run and picks in
`image-prompts.md`); Iklix Varn followed later the same evening once Dermot
had said what Varn looks like — lean build, dark hair, quiet bearing — and
approved the pick — then re-rolled against that pick as a reference on his
reservation that the instruments looked old-fashioned, and re-filed. All five
are filed. The four Chthonari
share one body from `src/lore/chthonari.md` and `species-design.md` — small
(forearm-to-torso length), six-limbed, exoskeletal, low and dense, vibration
organs along each limb and the lower carapace, no face a human reads — and the
prompts differ only in posture and in what each one is doing on the deck. The
tone rule governs the silhouette: Thrum is the precedent, a small creature
stated plainly and never made a thing to flinch at; no mandibles, no dripping,
no swarm. Colour is an illustration decision, not canon: dull slate carapace
with a bronze cast, the Undersong's nickel-iron in it.

- **`iklix-varn.jpg`** — *one step further from the desk than they need to be.*
  *(Held until 4 September 2026, when Dermot said what Varn looks like — "lean build, dark hair, quiet bearing" — and those three things went into the prompt verbatim in sense. Nothing else about the face is decided by the record; the picked image will decide it, which is why the choice is his.)*
  *(Revised the same evening on Dermot's reservation about the approved variant 1 — "does the technology look too old fashioned?" — yes: the six units came out as twentieth-century test gear, analogue meters, toggle switches and small tube screens in a rack, and the compartment as a mid-century submarine. Old instruments are canon; that idiom is not — Barsik's filing cabinets again. The person is now pinned to the approved image as a reference and the units described as sealed plain housings.)*
  References: `story-bible/reference-art/iklix-varn-approved-2026-09-04.jpg`
  > Cinematic wide portrait of exactly the same young person as in the reference image — the same face, short dark hair, lean build and quiet, contained bearing — in the same plain grey-brown service dress with a small plain tab at the collar and no other marking, standing in a narrow instrument compartment on a space habitat's ring and reading the longer of two printed documents held in both hands, eyes down on the page, still, not posed to camera. The compartment is the same worn, clean, evenly lit space, but the six monitoring units racked along one wall are plain sealed matte housings of one design, smooth flat fronts with a single small recessed indicator each and nothing else on them: no dials, no gauges, no meters, no knobs, no toggle switches, no screens, no keyboards, no exposed cables, no vents, no labels. Walls plain composite panels with honest seams; a closed hatch with a flush handle behind; no wheel valve, no pipework, no wiring looms. Nothing in the compartment that would look at home in a twentieth-century submarine or laboratory. Calm, attentive, unremarkable. 16:9 landscape. Absolutely no readable text, lettering, numerals, badges with words, name tapes, logos or written characters anywhere on the clothing, the documents, the units or the walls; no screens or glowing displays; no weapons; no dramatic lighting; no glamour styling, no cosmetics, no heroic pose.

- **`tikket.jpg`** — *the first to hear it.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a wide view of a small six-limbed exoskeletal being, forearm-to-torso length, built low and dense, standing on bare structural plating in the understructure beneath a space habitat's dock ring, all six limbs in contact with a heavy mounting bracket bolted through the deck, the body pressed close to it as if listening through it. Dull slate carapace with a bronze cast, matte, real chitin worn and scuffed at the edges, fine scratches and grit in the segment joints, no gloss; fine sensory ridges along each limb; a smooth head with no face a human would read, no mandibles, no visible mouth. Dim, even working light from an unseen source, girders and conduit receding into shadow, nothing else on the deck. Quiet, still, attentive, faintly uncanny and entirely unthreatening. 16:9 landscape. Absolutely no readable text, lettering, numerals, signage or logos; no screens; no swarm, no second creature, no gore, no dripping, no threat posture; no anthropomorphic face. Photographed, not rendered: a real camera low on the deck, the plating scuffed and dusty with worn bolt heads and a little grime, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field so the structure behind falls soft, slight softness toward the corners, a touch under-exposed, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art.
  - *(Revised 10 October 2026, photorealism triage: the filed set read as a video-game render, a polished creature in a rendered hall. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic wide view*, names real materials (real chitin worn at the edges with grit in the joints, scuffed and dusty plating), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged. The four are revised identically and judged as a set)*

- **`kattik.jpg`** — *the log is Kattik's, which is why the line went in.*
  *(Revised 4 September 2026 after the first run: both variants drifted into a crouching humanoid with shoulders and arms, and variant 1 laid its hands on a present-day tablet, ports and all. The body is now pinned to the Tsikk pick as a reference and the slab described as a slab.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a wide view of a small six-limbed being with exactly this body: a low, beetle-like segmented carapace carried close to the ground on six jointed legs of equal kind, no torso, no shoulders, no upright posture, no humanoid arms, the head a smooth rounded dome with no face, no eyes, no mouth. Forearm-to-torso length. It stands on bare structural plating beneath a space habitat's dock ring, four legs gripping the deck and the two forelegs resting on a thin flat rectangle of dull slate stone laid on the plating, a plain unmarked slab with no screen, no bezel, no ports and no edge detail of any device, in the posture of one making a record by touch. Dull slate carapace with a bronze cast, matte, real chitin worn and scuffed at the edges, fine scratches and grit in the segment joints; fine sensory ridges along each limb. Behind, out of focus, a second identical being stands on a mounting bracket with all six legs in contact. Dim, even working light, girders and conduit in shadow. Deliberate, patient, unhurried. 16:9 landscape. Absolutely no readable text, lettering, numerals or logos; no screens or glowing displays; no tablet, laptop or handheld device; no swarm, no gore, no threat posture; no humanoid body, no anthropomorphic face. Photographed, not rendered: a real camera low on the deck, the plating scuffed and dusty with worn bolt heads and a little grime, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field so the structure behind falls soft, slight softness toward the corners, a touch under-exposed, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art.
  - *(Revised 10 October 2026, photorealism triage: the filed set read as a video-game render, a polished creature in a rendered hall. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic wide view*, names real materials (real chitin worn at the edges with grit in the joints, scuffed and dusty plating), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged. The four are revised identically and judged as a set; the `References:` line to `image-out/characters-tsikk/tsikk-1.jpg` is dropped, because that file is the filed Tsikk frame, itself a render, and would carry the game-render look into the new set. The text already names the body it pinned)*

- **`tekka.jpg`** — *that settled it.*
  *(Revised 4 September 2026 after the first run: variant 1 was the crouching humanoid again, and variant 2 — the right beetle body and the right gait, on a beam before a planet-filled window nobody asked for — had a mouth full of teeth, which the tone rule forbids outright. Body pinned to the Tsikk pick; the mouth negative made blunt; the window taken away.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a wide view of a small six-limbed being with exactly this body: a low, beetle-like segmented carapace carried close to the ground on six jointed legs of equal kind, no torso, no shoulders, no upright posture, no humanoid arms, the head a smooth rounded dome that is entirely featureless — no face, no eyes, no mouth, no teeth, no jaw, no nostrils, not a mark on it. Forearm-to-torso length. It is moving along a horizontal structural member beneath a space habitat's dock ring with the sure, course-reading gait of a practised tunnel runner, legs placed exactly, body level, mid-stride between two bolted brackets. Dull slate carapace with a bronze cast, matte, real chitin worn and scuffed at the edges, fine scratches and grit in the segment joints; fine sensory ridges along each leg. Dim, even working light, the member receding into shadow in both directions, girders and conduit behind, no window, no planet, no sky. Confident, quick, competent. 16:9 landscape. Absolutely no readable text, lettering, numerals, signage or logos; no screens; no swarm, no second creature, no gore, no threat posture; no humanoid body, no anthropomorphic face, no mouth of any kind. Photographed, not rendered: a real camera low on the deck, the plating scuffed and dusty with worn bolt heads and a little grime, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field so the structure behind falls soft, slight softness toward the corners, a touch under-exposed, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art.
  - *(Revised 10 October 2026, photorealism triage: the filed set read as a video-game render, a polished creature in a rendered hall. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic wide view*, names real materials (real chitin worn at the edges with grit in the joints, scuffed and dusty plating), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged. The four are revised identically and judged as a set; the `References:` line to `image-out/characters-tsikk/tsikk-1.jpg` is dropped, because that file is the filed Tsikk frame, itself a render, and would carry the game-render look into the new set. The text already names the body it pinned)*

- **`tsikk.jpg`** — *from the deck, as part of the work, without waiting to be introduced.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a wide view of a small six-limbed exoskeletal being, forearm-to-torso length, built low and dense, standing alone at the centre of a wide expanse of bare structural plating beneath a space habitat's dock ring, all six limbs planted, the body raised slightly at the front as if addressing the whole structure around it rather than any one part of it. Dull slate carapace with a bronze cast, matte, real chitin worn and scuffed at the edges, fine scratches and grit in the segment joints; fine sensory ridges along each limb; a smooth head with no face a human would read, no mandibles, no visible mouth. The habitat's structure fills the frame around it: girders, conduit, the curve of the ring overhead, lights coming up along a distant walkway as if the structure had noticed. Dim, even working light otherwise. Still, direct, unafraid. 16:9 landscape. Absolutely no readable text, lettering, numerals, signage or logos; no screens or glowing displays; no figure or face for the habitat's mind; no swarm, no gore, no threat posture; no anthropomorphic face. Photographed, not rendered: a real camera low on the deck, the plating scuffed and dusty with worn bolt heads and a little grime, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field so the structure behind falls soft, slight softness toward the corners, a touch under-exposed, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art.
  - *(Revised 10 October 2026, photorealism triage: the filed set read as a video-game render, a polished creature in a rendered hall. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic wide view*, names real materials (real chitin worn at the edges with grit in the joints, scuffed and dusty plating), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged. The four are revised identically and judged as a set)*

---

**Undercover Pets — cute, cool and clever (6)**

- **`kate-ukrainka.jpg`** — writes Smart Pet books that *get the animal exactly
  right and the machinery cheerfully, deliberately wrong.*
  > Cinematic wide portrait of a woman in her sixties at a small table in a lived-in habitat apartment, upper body, having just stopped work — her pen set down and her notebook closed under one hand, both hands round a mug, looking out of the window with a half-smile she is not aware of. A plant doing well. Behind her a wide window onto the green curve of an orbital habitat's inner surface in daylight. Warm, comfortable, entirely unhaunted. Warm wood, green, soft daylight. 16:9 landscape.

  - **Nothing is being written, deliberately** (19 August). *Writing by hand* on
    a *blank unmarked notebook* is two invitations to lettering in one clause,
    and the moment just after is warmer anyway: an author with the work shut and
    a hot drink is more like the page than an author mid-sentence.

- **`knopka.jpg`** — failed the assessment *on every axis it measures*, and the
  finding is one word long.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: an ordinary brown domestic rabbit, a real rabbit with soft dense fur, ears up, sitting upright and entirely still on the floor of a tidy apartment on Eden, a large rotating space habitat, in the year 2826, close and low to the ground, facing the camera and looking at nothing in particular with complete composure. One carrot-top lies on the floor a little way off, ignored. No harness, no collar, no fitting, no device of any kind on the animal anywhere. The room is clean, kept and lived in: a floor of warm matte resilient surface, walls of smooth seamless pale composite meeting the floor in a rounded cove, the leg of a chair of pale wood at one side, a soft woven cloth bag slumped beside a rounded doorway whose recessed panel stands closed and flush, a folded knitted throw in a warm colour and a plant doing well near a wide low window through which the habitat's green terraces curve upward into haze, out of focus. Warm domestic daylight. Comic dignity, played completely straight. Photographed, not rendered: real fur with individual hairs and whiskers, a real camera at floor level with a fast lens near wide open, shallow depth of field, high-ISO grain, slight softness toward the corners, natural colour. Negative: harness, collar, tag or device on the animal; timber floorboards, laminate floor, skirting board, panelled door, door handle, doorknob, tote bag, jute shopper, paper bag, patterned rug, radiator, wall switches or sockets, visible lamp, light fitting or bulb; screens, devices, drone; grime, clutter, neglect; readable text, lettering, numerals, labels or written characters of any script anywhere in frame. Render negatives: cartoon, plush toy, 3D render, CGI, animated film still, plastic sheen, airbrushed, over-smooth fur, glossy concept art. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 2, under Dermot's ruling the same day that the century rule reaches the Undercover Pets rooms (*"Yes, the rooms do"*): the filed frame read as a present-day flat (class B), timber floor, panelled door with a knob, a jute tote and a wall socket. The apartment is now Eden's: seamless coved composite, a rounded doorway with a flush panel, a woven cloth bag, a throw and a plant for colour, the terraces through a low window. The rabbit, her composure, the ignored carrot-top and the absence of any harness are hers and are kept; she is brown, as Marisol Achebe's frame has her. Opens as a documentary photograph, with render and period negatives.)*
  - **Absolutely no harness or subsystem**, which is the entire joke: nothing was
    ever fitted, and failing left her exactly as the programme found her.

- **`zhulik.jpg`** — *on a habitat with one cat, every cat is that cat.*
  *(Queued 5 September 2026 on Dermot's ruling that a fictional character may be generated whatever its species; the page currently stands behind a stamped PORTRAIT PENDING card. He is the second cat in S02E06C01: young, grey and white, unaugmented, a boy's pet, and the collection on the cabinet top is his. No collar, so the frame cannot be mistaken for Barsik's; no binders or drawers, per the Barsik-cabinets failure — the records cabinet is a plain sealed steel unit.)*
  *(Revised 5 September 2026 after the first run: both variants clean of lettering and on the brief, and Dermot's note — **needs a more futuristic background**. The "run of pipework" in the old prompt bought a boiler room; it is gone, the bulkhead is rewritten for a habitat eight centuries on, and the variant he was shown is passed as a reference so the cat holds.)*
  References: `story-bible/reference-art/zhulik-lean-2026-09-05.jpg`
  > Cinematic wide view of a young grey-and-white domestic cat, short-haired, slight and alert, the same cat as in the reference image, sitting on top of a tall plain sealed cabinet in the corner of a quiet habitat office built eight centuries from now. The cabinet is a smooth matte composite unit with flat fronts and no drawers, handles, hinges, seams, rivets or labels. Beside him on the cabinet top a small, tidy hoard of little objects he has collected: a stylus, a reel of tape, a spoon, a pair of reading glasses, one small rubber stamp under his forepaw. He is looking down at the viewer with the unrepentant, faintly pleased expression of a cat who has just been noticed and does not mind. No collar, no tag, no harness, no device of any kind on the animal. Behind him only the seamless pale composite bulkhead of the habitat, its panels curving gently into the ceiling, with one faint recessed line of soft light where wall meets ceiling and nothing else on the wall; soft even light from concealed coves. Use the reference image only for the cat; do not copy its room or walls. No pipework, ducts, cables, conduits, rivets, grilles, vents or exposed structure of any kind; no shelving, no ring binders, no filing drawers, no screens, monitors or consoles anywhere in frame. Photographic, warm practical lighting, comic dignity, no whimsy and no costume. 16:9 landscape. Absolutely no readable text, lettering, numerals, signage, logos or written characters anywhere on the objects, the stamp, the cabinet or the walls.

- **`muffin.jpg`** — **and this one should probably not be a portrait at all.**
  Eleven statements returned a cat, a rabbit, a very young dog and *you know —
  Muffin*, and the four who said cat disagreed about the colour. **Drawing a
  specific adorable animal contradicts the page in the first frame.**
  So the portrait is the place, on the [Eden Warden](../src/characters/eden-warden.md)
  precedent — *the Warden is not depicted; it is inhabited* — and the entity is
  present and unresolved.
  *(Revised 11 October 2026: Dermot, *"Muffin image also looks anachronistic"* — the frame read as a present-day restaurant's back corridor. The deck is now described as a habitat's, the century's hint the 7 October rule asks for; the cloth, saucer and warm light are unchanged.)*
  *(Revised 10 October 2026, Dermot's photorealism triage: two rounds with the entity as a defocused shape in frame resolved into a recognisable cat all four times, so the frame now takes the fallback the tone note below names - the place with the presence only implied.)*
  *(Revised 3 September 2026 after the 28 August run: both variants failed on lettering - galley and deck labels on the door frame in both variants. The negatives had sat outside the blockquote; they now travel inside it.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a wide view of a warm-air vent beside a galley doorway on a working deck of a space habitat, seen straight on and slightly low. The deck is unmistakably a habitat's and not an old building's: wall and floor of smooth seamless pale composite meeting in a softly rounded cove, the vent a long low slot set flush into the curve of the wall with a fine integral mesh, no louvres and no screws, the doorway a rounded aperture with a recessed sliding panel, the floor a matte resilient deck surface worn faintly smooth along the walking line. Kept and lived in, a little worn, not shabby: no rust, no grime, no scattered debris. Warm light spills from the galley across the floor. In the warm patch by the vent there is nothing to see, only the signs that something was just there or is just out of frame: a shallow round dent in a folded cloth on the deck, the saucer beside it, chipped, brought from the galley and nearly empty, and the warm light lying across them both. No animal, no shape, no fur and no shadow of one anywhere in frame. Everything is sharp: the vent grille, the door frame, the cloth, the scuffed plate. Inviting, domestic, entirely undramatic. Warm amber against cool grey deck. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. No cat, rabbit, dog, puppy, kitten, lamb or recognisable animal of any species; no face, eyes, teeth or claws; no menace, horror, monster, shadow creature or glowing eyes. The door frame, the vent grille and every panel are plain unmarked metal with no label, stencil, plate or number anywhere. Photographed, not rendered: a real camera at deck level with a fast lens wide open, high-ISO grain, dust and scuffs on the deck plate, a touch under-exposed, muted natural colour. Never a smudge, smear, painted-over patch or pasted blur; never a 3D render or CGI. Not a twentieth- or twenty-first-century building: no louvred grille, no riveted steel plate, no diamond plate, no exposed screws, no restaurant kitchen corridor. 16:9 landscape.
  - **Extra negative:** cat, rabbit, dog, puppy, kitten, lamb, recognisable animal of any species, face, eyes, teeth, claws, menace, horror, monster, shadow creature, glowing eyes.
  - **The tone line is the whole risk here.** The page is unsettling because the
    room is pleasant, and any legible creature — cute *or* frightening — loses
    it. If the batch keeps resolving the shape, the fix is a tighter crop on the
    saucer and the vent with the warm patch only implied.
  - **Worth Dermot's call whether it ships at all.** An entity nobody can
    describe twice is arguably a page that should carry no image, and *no
    picture* is a legitimate answer here rather than a gap.

- **`sylvie-harrow.jpg`** — a model statement, *no sentence that is false*, and
  nothing that catches.
  *(Revised 11 October 2026: Dermot asked why she had a filing cabinet behind her. The prompt never asked for one; the generator furnished "office" with its stock twentieth-century props. Now a documentary photograph, with the room's colour from lived-in things and period office furniture negated.)*
  > Candid documentary photograph taken inside the world by a 29th-century camera, available light: a woman in her forties seated at a plain table in an unremarkable interview room aboard a space habitat, upper body, mid-answer to someone out of frame, pleasant and cooperative and entirely at ease, hands loosely together on the table. Neat ordinary clothing in a warm muted colour. Even, perfectly adequate daylight with nothing dramatic in it; behind her a smooth painted wall in a soft warm tone, one healthy potted plant on a low shelf, and nothing else; an empty table in front of her. Nothing in the frame is out of place and nothing in it is interesting. Photographed, not rendered: real skin with fine texture, cloth with a real weave and creases, high-ISO grain, a real lens with shallow depth of field, natural colour. Negative: filing cabinets, paper files, folders, binders, desk phone, office cubicle, partition, clock, whiteboard, noticeboard, computer, monitor, screen, keyboard, readable text, lettering, numerals, signage or written characters of any script anywhere in frame; visible lamp, light fitting or bulb; studio backdrop, glamour lighting, corporate headshot, posed smiling to camera; 3D render, CGI, airbrushed, waxy skin, glossy stock photograph. 16:9 landscape.
  - **The frame must have nothing to catch on**, which is the hardest brief here.
    No shadow across the eyes, no held look, no tell. It reads as a competent
    witness because that is exactly what every audit found.
  - **Extra negative:** sinister, suspicious, shifty, smirk, hard shadow across the face, film-noir lighting, interrogation lamp, villain styling.

- **`thrum.jpg`** — deaf to airborne sound, blind to a human face, *reads the
  structure it is standing on, continuously, without deciding to.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a wide view of a small six-limbed alien burrow animal low in a narrow service void behind a deck panel, close and at its own height, its whole underside pressed flat in contact with the structural plate beneath it. Low, broad and compact, dark hide with a faint natural sheen and a real fine texture, creased at the limb joints, dust and lint from the void caught on it, no visible ears and no eyes to speak of, entirely occupied with the surface it is standing on and not with the viewer. Warm air and warm light leaking in from an open panel to one side; ducting, cable runs and structure receding into the dark. Alien and completely unthreatening. Warm amber light on dark metal. Photographed, not rendered: a real camera at deck level in a cramped void, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour, the small untidy imperfections a real photograph keeps. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. 16:9 landscape.
  - *(Revised 10 October 2026, photorealism triage: the filed frame read as a clay or CGI creature. The prompt now opens as a documentary photograph taken inside the world instead of *Cinematic wide view*, names real materials (textured, creased hide with dust and lint on it), and carries a *Photographed, not rendered* sentence and render negatives. Body, composition, colour and every canon and negative clause are unchanged.)*
  - **It must not look at the camera.** A creature that cannot see a face and
    would not care about one is the character; a returned gaze would undo it.

---

**Historical (3)** — state the era or the setting defaults to contemporary Earth.

- **`saint-aoife.jpg`** — *never claimed to know what she'd met at the thorn
  well*, and every later reader has taken that refusal at face value.
  > Cinematic wide portrait of a woman in her thirties standing at a spring well in a thorn thicket in thirteenth-century Ireland, upper body, plain undyed woollen dress and shawl, work-worn hands, looking down at the water rather than up or out. **Her face turned down and away and left in shadow, features not legible.** Composed and unresolved — no rapture, no distress, no certainty of any kind. Night, an ordinary clear sky of small stars doing nothing in particular, a moorland horizon behind the thicket. Long dark red hair. Wet blackthorn, low stone kerb around the water, wet grass. Cold, plain, historical, entirely earthbound. Deep blue-green night, wet black thorn, undyed wool. 16:9 landscape, 1200×675.
  - **Extra negative:** halo, aureole, rays of light, glow, doves, upturned face, face toward camera, legible features, hands folded in prayer, beatific expression, ecstasy, stained glass, religious iconography, robes, veil of office, angels, apparition, embroidered or ornamented gown, jewellery, stage lighting, text, lettering.
  - **Keep the face concealed** — turned, shadowed, or away. Adopted 19 August from the older brief in Open work 6, which had it and this entry did not: *the record genuinely does not know it, and the page's whole argument is that she never claimed to know what she had seen.* Canon reasoning rather than styling, so it is written into the prompt above rather than left as a note.
  - **Ruled 20 August 2026 — the *Aoife of Stars* card is reframed, not adopted.** A supplied song card showed her front-lit and facing the viewer, features fully legible, under a night sky on moorland. Dermot's ruling: **keep the concealed face, take the rest.** So the prompt moved from grey overcast daylight to night, gained the star field and the moorland horizon and the red hair, and kept the well, the thorn and the turned face. He liked the look; the page keeps its argument.
    - Two things from the card deliberately **not** taken. The **embroidered blue-green gown** is a class signal this page does not support — she is a holy woman whose whole standing rests on refusal, and plain undyed wool says that where ornament argues with it; the card's colour survives as the colour of the night instead. And the **stars stay ordinary**: no light comes from the sky, nothing in it is happening. A sky that appears to be doing something would tell the viewer what she saw, which is the one thing seven centuries of record declined to say — and the song's own title makes that association easy to drift into.
  - **The whole page is her refusal to claim.** Any device that tells the viewer
    what she saw contradicts it, and a glow would be the story arriving at a
    verdict the record spent seven centuries declining to give. Same discipline
    the `brother-daire.jpg` prompt already used.

- **`sildron-drey.jpg`** — MSC Director of Operations, Mars; the staff side,
  *measured on whether the order was correctly formed rather than on whether it
  arrived in time.*
  > Cinematic wide portrait of a woman in her fifties in the severe service dress of a militarised space command of an earlier era, upper body, standing at a plain operations desk on Mars with her hands resting on it, looking down at the work rather than at anyone. Precise, capable, entirely without warmth or cruelty. The desk is completely bare — no paper, no folder, no document and no object of any kind on it. A tall window behind her onto flat rust-coloured Martian ground under a pale sky. Institutional, historical, cold. Rust, grey and dull olive. 16:9 landscape.
  - **Neither villain nor victim.** Her page is careful that she argued the case
    in writing and then had to execute it, and the frame should let a reader
    arrive at their own verdict rather than pre-empt it.

- **`thalassa-vexar.jpg`** — the best-liked Imperium officer in the Belt, holding
  a grade with *no authority to change anything there*.
  > Cinematic wide portrait of a woman in her fifties in the plain administrative uniform of a fallen space empire, upper body, seated at a small counter in a cramped Belt settlement office, turned attentively toward someone standing out of frame and listening properly. Genuinely courteous, genuinely powerless, and aware of both. A worn counter with absolutely nothing on it, and a queue of people waiting behind her out of focus. Cramped, warm, worn, decent. Dim amber lighting, dull metal, historical science fiction. 16:9 landscape.
  - **The queue is the point.** She was the officer who answered every question
    and could alter no condition, and a solitary desk would have made her a
    functionary instead of the thing the Belt actually remembers.
  - **The empty counter is the 19 August rewrite.** The first version put *blank
    unmarked forms in a tray* in front of her, and a form is the purest
    text-bearing object there is. Clearing it is also the better picture: an
    official with nothing between her and the person talking.

---

**Elsewhere in the settled worlds (5)**

- **`dagny-voss.jpg`** — born vacuum-side, *has never once been to a world anyone
  would call beautiful, and has stopped waiting to be assigned to one.*
  *(Revised 3 September 2026 after the 28 August run: both variants failed on lettering - a company name across her back on one variant, a name tape and logo on the other. The negatives had sat outside the blockquote; they now travel inside it.)*
  > Cinematic wide portrait of a woman in her fifties in practical industrial coveralls on the overlook gallery of a large orbital ore-refining habitat, upper body, one hand on a railing, turned back toward the camera with a dry good humour and no self-consciousness at all. Behind and below her the refinery floor runs away in scale: gantries, bulk hoppers, heavy handling frames, everything clean and orderly and working. Beyond it a wide port shows the planet's ring and the curve of the world below. Hard even industrial light, no glow, no sparks. Steel grey, dull orange, the pale planet beyond. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. No molten metal, sparks, foundry glow, furnace, dirt, grime or hard-hat stock photography. The coveralls are plain unmarked cloth front and back: no name tape, no company name, no logo, no patch, no lanyard, no badge. 16:9 landscape.
  - **Extra negative:** molten metal, sparks, foundry glow, furnace, dirt, grime, hard-hat stock photography.

- **`elvira.jpg`** — **the one prompt that will fight its own subject.** She is
  *not magical*; the locals call her the Enchantress and the label *obscures the
  mechanism*. She is a technician working chalk, thread, water in vessels and
  written records against Etheric gradients.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a woman in her forties working alone in the stone main room of a small marsh outpost at a causeway in the year 2826, upper body and knees, crouched over a broad section of bare chalk floor on which fine thread has been laid out in a precise geometric survey grid, weighting one thread at a corner with careful fingers and checking the line by eye. An ordinary, composed face with real lines, dark hair tied back; procedural and absorbed, the concentration of a surveyor, nothing about her otherworldly. Her working clothes are plain and practical: a hip-length weatherproof work coat of soft matte grey-green cloth with a high band collar and a closure with no visible fastening, its seams fine lines rather than stitching, sleeves pushed back; plain dark trousers and sturdy boots; chalk dust on her hands and forearms. Around her on the floor, plain glass and earthenware vessels of water set at measured intervals; on a plain table, a long straightedge, a plumb bob coiled on its fine line, and stacked plain-bound record books, all shut. Thick old stone walls, clean and sound, a small deep window and an open door onto flat reed marsh under a pale sky; flat cold daylight, marsh light, no fire and no flame anywhere. Chalk white, wet grey-green, plain grey stone. Photographed, not rendered: real skin, real cloth with a fine weave and creases, chalk dust with grain, high-ISO grain, a real lens with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: leather jacket, biker jacket, waxed jacket, zips, studs, buckles, hoodie, puffer jacket, logo or lettering on any garment; witch, sorceress, enchantress, magic, spell, ritual, occult, candles, flame, incense, smoke, glowing runes, glowing symbols, sigils, pentagram, crystal ball, cauldron, staff, wand, amulet, robes, hood, cloak, mystical aura, floating objects, sparkles, arcane; open notebook, open book, drawings, maps, compass, folding ruler, measuring tape, instruments with dials; screens, devices, holograms, glowing displays; visible lamp, light fitting or bulb; grime, rubbish, neglect; readable text, lettering, numerals or written characters of any script anywhere in frame. Render negatives: 3D render, CGI, video-game render, animated film still, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 2: the filed frame read 21st century (class B) on one object, a present-day black leather jacket; the stone room was judged fine and is kept. She now wears a weatherproof work coat in `civilian-dress.md`'s vocabulary, band collar and hidden closure, the century's one quiet hint carried in the cloth. Her ambiguity is kept by adding nothing: the page says she is unclassified and not magical, so the prompt gives an ordinary working woman and the witchcraft negatives stay whole. The folding rule becomes a straightedge and a plumb line, survey tools with no surface to letter (the filed frame also drew an open notebook with a drawing and a brass compass, both now negated). Opens as a documentary photograph, with render negatives.)*
  - **Extra negative:** witch, sorceress, enchantress, magic, spell, ritual, occult, candles, flame, incense, smoke, glowing runes, glowing symbols, sigils, pentagram, crystal ball, cauldron, staff, wand, amulet, robes, hood, cloak, mystical aura, floating objects, sparkles, arcane.
  - **The longest negative on the roster, and it earns its length.** *Chalk,
    thread, water in vessels* is a witchcraft prompt read literally, and the page
    exists to say it is not one. The grid, the folding rule and the shut record
    books are what make it survey work; take any of them out and the frame turns
    into the label she spends her page rejecting.

- **`sofia-santos.jpg`** — answers for *everything below the waterline* and has
  no authority whatever over anything above it.
  *(Revised 3 September 2026 after the 28 August run: both variants failed on lettering - a depth readout panel on one variant, a real-world clothing brand on the other. The negatives had sat outside the blockquote; they now travel inside it.)*
  > Cinematic wide portrait of a woman in her fifties in plain practical clothing standing inside a seabed city's pressure hull, upper body, at a wide thick viewport with dim green-blue ocean beyond it, turned three-quarters to the camera, an engineer's composure and no ceremony of office anywhere about her. Through the viewport: the lit shapes of other domes and a work light in the dark water. The interior is heavy and well-made — thick frames, sealed joints, everything rated. No surface, no sky, no daylight anywhere in the frame. Deep blue-green and warm interior light. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons. Every panel, gauge and fitting on the hull interior is plain unmarked metal with no readout, no dial face with figures, no label and no stencil; her clothing carries no logo, brand mark or patch of any kind. 16:9 landscape.
  - **No sky in frame, deliberately.** Her jurisdiction stops at the waterline
    and the picture stops there too.

- **`sorcha-nic-dhiarmada.jpg`** — walks the dark-down *because a thing kept by
  everyone should still be seen to be kept by someone.*
  > Cinematic wide view of a woman in her forties walking a rough hill track alone at night on an upland pasture world, seen from a little way off and small in the frame, wrapped against the cold, a working dog at her heel. Below her a valley of scattered steadings with every single light out — dark roofs, dark yards, nothing lit anywhere. Above, an enormous clear sky, thick with stars, and the whole scene lit by starlight alone. Sheep on the slope as pale shapes. Nothing frightening: a kept custom, walked. Deep blue-black, silver, the faint warmth of wool. Beautiful and quiet. 16:9 landscape.
  - **Extra negative:** lantern, torch, lamp, firelight, glowing windows, lit houses, any artificial light source anywhere in frame.
  - **The dark is the custom.** One lit window would break the thing the walk
    exists to honour, and this is the frame on the roster with the most
    *serenity* in it, which the house target asks for and the roster is otherwise
    short of.

- **`sorcha-shepherd.jpg`** — the registry taught her that *a record can be
  wrong, and a record can be unfinished, and the second is worse.*
  > Cinematic wide portrait of a woman in her thirties at survey work on open limestone upland, upper body, standing at a tripod-mounted optical survey instrument with one hand steadying it, looking off along the line she is shooting rather than through the eyepiece. Bare pale fissured limestone pavement running away in every direction, thin grass in the cracks, a low drystone wall on the skyline. Practical outdoor clothing, weather on her face. Wide bright overcast light, no sun. Pale grey stone, grey-green, wide sky. Methodical and unhurried. 16:9 landscape.
  - **Looking along the line, not through the eyepiece** — she is checking what
    the measurement will mean before she takes it, which is the habit the page
    says the registry gave her.

**When these come back.** Check Elvira and Muffin first — both have a default the
generator wants badly and both fail quietly rather than obviously. Check
lettering at 4× on Strozzi's cards, Drey's folders and Vexar's tray, per the
Calloway lettering-check note. And **do not generate all twenty-one in one
sitting and judge them tired**; the roster's value is that the frames differ from
each other, and that is a judgement that degrades.

##### The three rescuers — a set (19 August 2026)

`lucene-9000.jpg`, `xenon.jpg`, `lumbarian.jpg`. Prompted together because they
share a generation of manufacture, and **a generator has no memory between
frames** — so "the same era" has to be carried as literal attributes in all three
or it will not survive the batch.

**What binds them is not a place.** Lucene is in Eden's civil detective bureau;
Xenon and Lumbarian are aboard Wender's ship. What they have in common is the
catalogue shelf: all three are **classic designs whose lines are out of
production**, well made in a period that expected its work to outlive it, and
still running decades past it. `xenon.md` files him and Lucene on the same shelf
in as many words.

**All three are present-day frames.** The rescue-era framing was considered and
dropped: a character portrait shows the character now, like every other portrait
on the roster, and setting Xenon's in the aftermath would have put the rack of
part-empty cradles in shot — which is published prose but would make an *image*
carry the hint about the machines that were lost, and §7 is explicit that the
loss stays hinted and no page may state it. Not a line worth walking up to for a
background detail.

**The shared house block — paste verbatim into all three.** This is the set.

> Classic-design service machine of a period that expected its work to outlive it, still in service decades later, plainly manufactured and plainly maintained. Matte pale grey composite shell with a fine even grain, unpainted and entirely unmarked. Panel joins are honest recessed seams with captive fasteners left visible, built to be opened rather than concealed. Dull warm-toned alloy at the bearings and joints. Wear reads as polish and not as damage: edges gone smooth and faintly darker where work and hands have passed, with no rust, no corrosion, no grime, no chipping, no dents and no broken parts anywhere. Where a sensor sits it is plainly an optical instrument — a recessed lens behind a machined ring — and never a human eye. Nothing anywhere is open, exposed, wired, dripping or unfinished; every panel is closed.

**Why the shell is visible rather than seamless, in-world.** The rule that a
machine's artificiality must show at the prompt has a canon reason here rather
than only a craft one: Reeves and Jeeves run newer architecture and Lucene is a
generation behind them. **Her manufacture shows because her generation did not
hide it**, not because she is crude — which is the same sentence her page already
makes about her mind.

**Common negative — paste into all three:**
readable text, lettering, numerals, branding, maker's plate, signage, labels,
stencilled markings or written characters of any script anywhere in frame;
holograms, projected light, glowing displays, screens, monitors, consoles, dials,
gauges; exposed wiring, open panels, visible internal machinery, cabling,
sparks, fluid, damage; rust, corrosion, grime, oil stains, derelict or abandoned
look; weapons of any kind; flat studio backdrop, gradient background, glamour
lighting, corporate headshot; contemporary Earth setting; menace, threat, horror,
uncanny grimace, red glowing eyes.

---

- **`lucene-9000.jpg`** — the one that will fight the generator hardest, because
  *social gynoid* returns a photoreal woman by default and that face belongs to
  nobody. Her frame is her actual working posture: **beside the interviewing
  officer, never leading**. *The questions are always a detective's, and what
  Lucene does is watch the answer arrive.*
  *(Revised 11 October 2026, Dermot's "Made with care": canon features kept; the finish now a well-designed object in a kept room, with crash-test dummy, mannequin, toy and industrial arm negated by name.)*
  *(Revised 11 October 2026, Dermot, verbatim: "In my original conception Lucene did look like a real woman except almost too perfect." The page has said since 31 August that she is built to look as human as a machine can be made to look, stopping short of disguise, with her honesty in what she says; the seams, lenses and moulded hair were an image-prompt choice of 19 August that the page outgrew. Now a real woman whose only tell is perfection.)*
  > Candid documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a woman who looks entirely real and almost too perfect, seated slightly to one side in the plain, well-kept interview room of a civil detective bureau aboard a space habitat, upper body, angled toward someone out of frame and watching them closely and steadily, hands still and folded on the table, not speaking. She is a social machine built to look as human as a machine can be made to look, and the camera finds nothing to disprove it except perfection: a face of exact, calm symmetry, skin unmarked and evenly toned with no blemish, freckle or line, hair dark and drawn back without a strand out of place, a small attentive warmth held perfectly still, the stillness of a held photograph while the room around her is ordinary. No seams, no lenses, no visible machinery, no grey or plastic skin: the only tell is that nothing about her is uneven. She wears the Eden bureau jacket over ordinary clothing: plain, single-breasted, collarless with a soft round neck and no lapels, one quiet colour, cut for a long shift, nothing on it. The room is clean and kept: behind her a smooth, unmarked painted wall in a soft warm tone, daylight from one side; a clean bare table edge in the foreground. Photographed, not rendered: real light on real skin and cloth, high-ISO grain, a real lens with shallow depth of field, natural colour; the perfection is hers, not the photograph's. Negative: lapels, blazer, notched collar, necktie, stained or damaged walls, peeling paint, grime, seams, panel lines, visible joints, lenses for eyes, grey skin, mannequin, doll, android with visible circuitry, exposed machinery, glamour lighting, beauty retouching, cosmetics advertising, seductive styling, jewellery, corporate headshot, posed smiling to camera; readable text, lettering, numerals, signage or badges with words anywhere in frame; screens, holograms, consoles; visible lamp or light fitting; 3D render, CGI, video-game character. 16:9 landscape.
  - ~~**Extra negative:** photorealistic human woman, human skin, …~~ *(retired 11 October 2026 with the seams; the negatives now travel inside the blockquote)*
  - **The tone line lives on this one.** Her artificiality is carried by a seam
    at the jaw, a seam at the temple and the lenses, and by nothing else — the
    cyber-revenant precedent exactly, which sealed the collar and left one silver
    seam. A peeled face or a visible skull would clear no prohibition and break
    the rule.
  - **The bureau jacket with a bare collar** (added 19 August, on Dermot's
    direction that Eden's detectives are uniformed). She wears the uniform
    because she works the bureau's interviews; she carries no rank mark because
    **rank is an office and she holds none** — she answers to Oyelaran
    operationally and to the Warden on her own standing. The bare collar is a
    proposal and the sharpest thing in the frame: a machine in the uniform of a
    ladder it is not on. See `src/lore/eden-bureau-uniform.md`.
  - **Draft alt text, to be checked against the frame:**
    > A humanoid machine of female form in a plain bureau jacket sits to one side in an interview room, hands folded, watching someone out of frame. Her collar carries no rank mark. Her matte face has a fine seam at the jaw and temple, and her eyes are recessed optical lenses.

- **`xenon.jpg`** — *his personhood lives where his hands do*, so the hands are
  the subject and the face is not. He is going over a machine with nothing
  visibly wrong with it, which is the whole character: *his standard for beyond
  repair has never once been met.*
  *(Revised 11 October 2026, Dermot's "Made with care": canon features kept; the finish now a well-designed object in a kept room, with crash-test dummy, mannequin, toy and industrial arm negated by name.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a wide view of an old maintenance robot at work at a bench in a clean, well-kept machine bay aboard a starship in the year 2826, seen close and slightly from the side, the composition centred on its hands and forearms rather than on any face. It is a classic-design service machine of a period that expected its work to outlive it, still in service decades later, plainly manufactured and plainly maintained: a matte pale grey composite shell with a fine even grain, unpainted and entirely unmarked; panel joins are honest recessed seams with captive fasteners left visible, built to be opened rather than concealed; dull warm-toned alloy at the bearings and joints. Wear reads as polish and not as damage: edges gone smooth and faintly darker where work and hands have passed. Made with care: a well-designed object someone was proud to make, in considered proportions and warm, honest materials, every joint neatly shrouded and every seam deliberate, kept immaculate. The hands are the most finished thing about it, many-jointed, worn smooth and bright at the fingertips from decades of use, holding a small component with great precision and no hurry. Its upper body is a functional column of closed panels with no human face and no attempt at one: a sensor head with recessed lenses behind machined rings, plainly optical instruments and never eyes, angled down at the work. On the bench before it lies a small service machine, powered down, intact and closed, with nothing visibly wrong with it; a shallow tray of clean parts sits alongside, laid out in order. The bay is seamless pale composite, walls meeting floor and ceiling in rounded coving, every fitting flush; one clean band of working light falls across the bench from a long flush slot set into the underside of the shelf above it, and the rest of the bay falls away into soft shadow; tools are stowed out of sight behind flush closed fronts. Muted grey, warm alloy and one warm band of working light. Absorbed, unhurried, quietly devotional in the way of skilled hands. Photographed, not rendered: real machined and moulded surfaces with fine tool marks and the soft sheen of handled metal, a real lens with shallow depth of field and slight softness toward the corners, high-ISO grain heavier in the shadows, a touch under-exposed, muted natural colour. Negative: articulated desk lamp, sprung jointed lamp, anglepoise lamp, magnifier lamp, bench lamp, any lamp on an arm, visible lamp, light fitting or bulb; screwdrivers, tool rack, pegboard, hanging tools, toolbox; crash-test dummy, shop mannequin, toy robot, industrial arm; humanoid face, human features, expressive mouth, human eyes; rust, corrosion, grime, chipping, dents, broken parts, open panels, exposed wiring, dripping fluid, welding sparks, cutting torch, disassembled parts strewn about, mess; screens, monitors, holograms, projected light, glowing displays, readouts or consoles; readable text, lettering, numerals, signage, labels, stencilled markings, nameplates, branding, logos or written characters of any script anywhere in frame; flat studio backdrop, glamour lighting; no weapons. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - *(Revised 11 October 2026, century audit batch 2: the frame filed earlier the same day under Made with care passes on the machine and the kept bay, but the century audit found one period object in it, the sprung, jointed desk lamp the prompt itself asked for, which What the Record Refuses names among its period objects; it also read a little rendered, with a rack of present-day screwdrivers. The task light and the deliberate breach recorded below are withdrawn: the working light now comes from a flush slot under the shelf, the tools are stowed behind flush fronts, and lamps on arms are negated by name. The machine, its hands, the patient on the bench and the Made-with-care clauses are unchanged. The prompt now opens as a documentary photograph and carries the render negatives inside the blockquote.)*
  - **Extra negative:** humanoid face, human features, expressive mouth, robot with a human-looking head, clumsy or bulky hands, welding sparks, cutting torch, disassembled parts strewn about, mess, grime, rust, 3D render, CGI, video-game render, crash-test dummy, toy robot, industrial arm.
  - **One deliberate breach of house convention, and why.** The standing rule is
    *no lamp or light fitting visible in frame*, and this prompt puts a bench task
    light in shot. That rule exists to stop habitat interiors filling up with
    domestic lamps; **a task light on a workbench is a tool, not a furnishing**,
    and the single bright light over the work is the register the chapter already
    established for him. Worth a look on return, and easy to drop from a re-roll
    if it reads as clutter.
  - **Draft alt text, to be checked against the frame:**
    > An old maintenance robot bends over a workbench in a ship's machine bay, its many-jointed hands worn bright at the fingertips, holding a small part under a single bench light. A powered-down service machine lies intact on the bench beside a tray of clean parts.

- **`lumbarian.jpg`** — the hardest to get right and the simplest to say. *There
  is nothing humanoid about him. No face to read, no hand-sized anything,
  nothing built to be held.* The frame carries **scale and stillness**, because
  *something that size being that still is a language of its own* — and because
  there is no record, on any posting, of him damaging anything smaller than
  himself.
  > Classic-design service machine of a period that expected its work to outlive it, still in service decades later, plainly manufactured and plainly maintained. Matte pale grey composite shell with a fine even grain, unpainted and entirely unmarked. Panel joins are honest recessed seams with captive fasteners left visible, built to be opened rather than concealed. Dull warm-toned alloy at the bearings and joints. Wear reads as polish and not as damage: edges gone smooth and faintly darker where work and hands have passed, with no rust, no corrosion, no grime, no chipping, no dents and no broken parts anywhere. Where a sensor sits it is plainly an optical instrument - a recessed lens behind a machined ring - and never a human eye. Nothing anywhere is open, exposed, wired, dripping or unfinished; every panel is closed. Cinematic wide view in open space of a vast heavy repair machine working against the outer hull of a starship, no human figure present. The machine has no face and nothing humanoid about it at all — a great trussed frame and armoured housings carrying several long articulated manipulators, built entirely around reach and load. One manipulator is laid flat against the hull plate and held perfectly still, resting rather than gripping, in contact along its whole length. Beside it in the same frame is an ordinary hull hatch with a handrail beside it, human-sized, which is what makes the machine's scale legible. The hull curves away into the distance behind. Hard raw sunlight from one side, absolute black shadow on the other, unfiltered starfield beyond, the vacuum silent and enormous. Muted grey plate, warm alloy at the joints, one long clean seam of new weld running away under the manipulator. Immense, careful and entirely still. 16:9 landscape orientation. Absolutely no readable text, lettering, numerals, signage, labels, stencilled markings, name tapes, nameplates, badges with words, branding, logos or written characters of any script anywhere in frame, on clothing, on equipment, on walls or on doors; no holograms, projected light, glowing displays, screens, monitors, readouts or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons.
  - **Extra negative:** face, eyes, head, humanoid form, arms and legs, mech, mecha, battle robot, walker, weapons, thrusters firing, debris field, wreckage, explosion, drama, astronaut, human figure, spacewalking person.
  - **Why no human in frame** — the hatch and handrail carry the scale instead.
    Putting a person beside him invites the reading his page forecloses: he is
    *not* a machine that works alongside people, he works where people cannot,
    and the crew reach him afterwards, at the height they can reach.
  - **Draft alt text, to be checked against the frame:**
    > A vast trussed repair machine works against the outer hull of a starship in open space, one long manipulator laid flat and still against the plate. A human-sized hatch and handrail beside it give the scale; a clean seam of new weld runs away beneath.

**Generate the three together, and look at them side by side before keeping
any.** The set only works if the shell reads as one catalogue across all three
frames; a batch where Lucene's grey and Xenon's grey are different greys has
failed the thing the set was for, however good each frame is on its own.

**Not yet generated.** All three are proposals.

- **`anne-wender.jpg`** — [Anne Wender](../src/characters/anne-wender.md), the
  eldest survivor of the wreck of 2788 and later the first sheriff a frontier
  world ever swore in. **Depicted as safety officer during the buildout, not as
  sheriff**, for two reasons and the second is the binding one: her page puts her
  in that post at Season 1's start with the election's course left unwritten, and
  **there is no sheriff's insignia in canon** — `rank-insignia-and-uniform.md`
  covers the Star Rangers only, so drawing a badge would invent an office's
  regalia in a picture, which is the same cascade the Calloway entry refused for
  a Compact uniform. The frame is the settlement working, and she is counting it.
  > Cinematic wide portrait of a woman in her early fifties standing in the gravel yard of a young frontier settlement in the early morning, upper body and a little of the yard, turned three-quarters away from the camera and looking off across the site rather than at the viewer, plainly in the middle of taking a count of something out of frame. Dark hair going grey at the temples, tied back tight and out of the way; a weathered outdoor face, no cosmetics, no styling; calm, unhurried, entirely absorbed. Practical hard-wearing site clothing in undyed and muted colours — a canvas work coat over layers, cuffs turned back, gloves pushed into a pocket — worn plain and completely unmarked. Behind her the settlement is visibly working and well kept: timber-framed barns and low prefabricated buildings squared up along the yard, a concrete pad where a plain grey fusion unit stands behind a simple railing with its pipework running off to a nearby building, hand tools racked upright, timber stacked square and strapped down, everything stowed and nothing broken. No crates, no drums and no packaging of any kind. Wide pale sky, low early light raking across the yard from one side, long soft shadows, a thin ground mist not yet burnt off. Muted realistic palette of grey, canvas and pale gold. Quiet, spacious and still, with the settlement plainly thriving rather than struggling. Science-fiction frontier setting, photographic and grounded, documentary in feel but composed and unhurried. 16:9 landscape orientation.
  - **Negative:** badge, star, shield, sheriff badge, police badge, rank insignia, epaulettes, name tape, patch, uniform, military uniform; firearm, gun, holster, weapon of any kind; readable text, lettering, numerals, signage, labels, stencilled markings or written characters of any script anywhere in frame; screens, monitors, glowing displays, holograms, projected light, consoles, dials, gauges; visible lamp, light fitting, bulb or lantern; rust, corrosion, grime, oil stains, damage, exposed wiring, litter, clutter, shanty, slum, refugee camp, derelict or abandoned look, poverty; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed to camera, smiling at camera; contemporary Earth setting, modern street, modern vehicles; horses or draft animals in frame; children.
  - **Why "no poverty" is a canon negative rather than taste.** [The Fusion
    Ceiling](../src/lore/the-fusion-ceiling.md) says it outright: an early
    settlement's pre-industrial surface is *"persistently misread as poverty when
    it is sequencing."* A generator asked for a frontier colony will reach for
    hardship by default, and that default would make the picture assert the exact
    misreading the entry corrects. The yard is orderly because the world is
    working, not because anyone is prospering.
  - **Why she is not looking at the camera.** Her character note is that she
    counts — stock, shifts, who is where — and is not in the habit of saying the
    total aloud. Attention directed off-frame renders that without a caption, and
    it keeps the portrait inside the house target: *enigmatic and haunting, with
    beauty, mystery, hope and serenity woven through.* Hope and serenity are
    carried by the light and the working settlement; the withholding is carried
    by where she is looking.
  - **No family resemblance is specified, deliberately.** She is Karla Wender's
    elder sister, but `karla-wender.jpg`'s alt text establishes no hair, eye or
    feature detail to match, and a generator carries nothing between frames — so
    a resemblance could only be invented here and would then bind Karla's
    existing portrait retroactively. If a resemblance is wanted, it should be
    specified from Karla's actual frame first, in both prompts, as literal
    attributes.
  - **Draft alt text, to be checked against the frame that comes back** and
    rewritten if it does not match, per the standing rule that alt describes what
    the file actually shows:
    > A woman in her fifties in a canvas work coat stands in the gravel yard of a frontier settlement at dawn, turned away from the camera and looking across the site. Behind her, timber barns and low prefabricated buildings, and a plain grey fusion unit on a concrete pad behind a railing.
  - **Not yet generated.** Tone, wardrobe and setting are proposals.

### 2. Lightroom / Photoshop — Dermot's hands only

No spot-heal, upscaler, or compositing exists in-session. Dimensions
re-measured 2026-07-24.

**The dust spot (priority).** `lore/archipelago-palm-avenue.jpg` (1600×1200) —
sensor-dust blemish in the sky at ~53% across, 40% down; the known main-body
Tamron artifact. Same heal recipe as the Kenya 2025 raws. Worth re-checking
other sky-heavy frames from that body while in there.

**Under-spec — resolved 2026-08-11 (Dermot's ruling): replace, not upscale.**
Super Resolution is off for this set, which ends the two-remedies-one-problem
conflict `firefly-prompts.md`'s header box recorded (that file has since
been retired, 2026-08-11, its remaining content absorbed here and into
`image-prompts.md`). Re-measuring for the
ruling also found the 2026-07-24 table half stale: four of the six portrait
files were already replaced at spec (1200×675) — `tissadelle-shepherd.jpg` and
`bubochka.jpg` by 2026-08-06, `bubochka-alert.jpg` and `dorian-calloway.jpg`
recorded done 29 Jul in `image-prompts.md` § 3. What actually remains, and
where each goes:

| File | Current | Route |
|---|---|---|
| ~~`characters/agent-barsik.jpg`~~ | ~~512×1024~~ | **regenerated 3 September 2026** at 1200×670, prompt revised (the "terminals" line was drawing monitors) — drafted for review |
| `characters/aldera/field-photo-03.jpg`, `-04.jpg` | 512×1120 — **PNG data under a .jpg extension** | re-crop from Dermot's own originals — see the Aldera note below; his hands, stays here |
| ~~`lore/prismere-*` / `prismeri-*` — 11 files~~ | ~~768×1152~~ | **regenerated 3 September 2026** as one batch at 1600×893, two variants each; the eight `prismere-*` approved and merged, the three `prismeri-*` rejected as still humanoid, then **regenerated the same evening to the derived body** and drafted for review |
| ~~`lore/prismere-root-mat-network.jpg`~~ | ~~773×1152~~ | **regenerated with the set, 3 September 2026** |

The old all-or-none rule carries over to replacement: the Prismere set
regenerates as one batch or not at all, so the series stays internally
consistent. Every migrated entry is dormant until its old file is deleted, per
the standing pipeline rule — regeneration stays a deliberate act.

**Softness** — may be re-shoots rather than edits; sharpening only goes so far
on zoom-smear: `lore/highland-summit-snowfields.jpg`,
`lore/highland-rock-spires.jpg`, `lore/boirinn-uplands-waterfall.jpg` (all
zoom-smeared), `lore/moorhen-wetland.jpg` (mild motion blur on the bird). This
set now doubles as Órla Shepherd's home landscape, so it earns attention.

**Composite / crop** — `lore/highland-sentinel-lizard.jpg` (1168×880): creature
composited onto the same plate as `highland-rock-spires.jpg`; cutout edges are
visibly soft beside the plain version. Needs mask refinement plus a light
colour/grain match; a creature-element prompt for the rebuild is recorded in
`image-prompts.md` § 2. `lore/noogenic-seeding-system.jpg` (1200×614): unusually
short and wide for a lore image; regeneration decided — its replacement
prompt is in Open work 5, dormant until the old file is deleted.

**Verify then leave alone** — `lore/trigrian.jpg`: blown highlights on the three
suns, almost certainly intentional for a trinary-star world. Noted so a future
audit doesn't "fix" it.

**The lettering ban cannot beat the scene** (added 2026-08-13, after
`reeves-eden`, `wendell-albercombe` and `galen` all came back covered in text
*with the ban present in every prompt*). Every house prompt already ends with
"no readable text, signage, insignia lettering or written characters anywhere in
frame", and it is not a spell. If the brief describes **an object whose purpose
is to carry writing** — a case-file interface, a departures board, a spaceport
gate, station wayfinding, a dashboard — the model will draw the object, and the
object will have writing on it. Strengthening the ban does nothing; the scene
has to change. Two tests before generating:

- **Name every surface in the brief and ask what it is for.** If any of them
  exists to be read, replace it. `reeves-eden` went from "holographic
  evidence-analysis interface" to points of light and connecting lines, which
  says the same thing about the character and offers nothing to letter.
- **Watch for genre words that import furniture.** *Noir* brought neon signage
  into `wendell-albercombe` twice, along with rain, grime and a cigarette,
  none of them requested and all of them standard issue for the genre named.
  *Gritty* did the same to `lorien-the-wanderer`, returning a rusted, stained,
  half-derelict hull for a captain whose own page says she has never lost a
  ship. A genre word is a whole set of defaults arriving at once.
- **`sethka-ru` is blocked, and it is a worldbuilding gap rather than a prompt
  problem** (13 August). Four rounds failed in three different ways — armed
  with a rifle, concept-art alien, grey-alien recipe, then an ordinary
  weathered man — and the fifth was pulled after Dermot supplied the fact that
  makes all of them wrong: **the Serephine Dunekin are not humanoid at all.**
  Every prompt in that history opens "non-human *humanoid* scout", so the whole
  line was building the one thing the species is not. The entry is back to a
  placeholder card and should stay there.

  What is written about the Serephine is only: light-scattering eye membranes,
  a water-conservative metabolism, respiratory efficiency, a homeworld of thin
  air and lethal thermal swing — plus three passing mentions elsewhere, and
  **no lore page at all**, unlike the Krenyi, Cerebraun, Verdani or Mnemari.
  There is nothing to draw a body plan from, and inventing one in a JPG would
  make the picture the most specific statement about the species in the repo,
  which is backwards. **This needs a sentence of prose from Dermot before any
  further generation.** The rule it illustrates is the file's oldest one: the
  brief has to come from the record, and where the record is silent the answer
  is authoring, not another attempt.
- **"Non-human" without further instruction means the grey alien, every time.**
  Dermot on the third `sethka-ru` round: *"he looks too much like a sci-fi trope
  of an alien."* He was right, and the brief was the cause — *tall narrow
  skull, no visible hair, wide pale eyes* is not a description of an alien, it
  is the grey's exact specification, written out. The trope is a **fixed recipe**:
  enlarged domed cranium, hairlessness, oversized almond eyes, tapering chin,
  spindly neck and limbs, smooth grey skin. Ban that list by name, then
  differentiate on axes the recipe never touches — **build, skin, hair,
  proportion** — and let one or two derived features carry the species. The
  Krenyi card already fought this battle and its alt text still says *"not a
  grey alien"*; the lesson generalises to every non-human portrait in the file.
- **The generator converges on one face, so vary the cast on purpose.** Three
  portraits filed in the same batch on 13 August — `naomi-kestrel`,
  `galen`, `rosalind-vey` — came back as dark-haired white women of similar
  age, build and features. Dermot: *"they are not related; they do not need the
  same hair colour and features."* Nothing in any of the three briefs asked for
  that; it is simply where an unconstrained "cinematic portrait of a woman"
  lands, every time, and the effect compounds across a cast until half the
  Corps looks like one family. **Give every human portrait at least one stated
  distinguishing feature** — hair colour and cut, build, age band, colouring —
  and check a new brief against the ones already filed rather than against the
  page alone. Heritage is a separate question and belongs to Dermot (see the
  `rasa-oyelaran` rule below); this is about not producing siblings by default.
- **And the converse, which matters just as much: resemblance has to be earned
  where it is real.** Dermot, same exchange: *"obviously characters who are
  meant to be related should look similar in some way,"* and *"the two or more
  instances of Reeves might look very similar to each other."* Two cases, one
  principle — sameness is meaningful only when it is true, so it must be
  deliberate in both directions.
  - **Kinship.** The clusters currently in the cast are the **Shepherds**
    (Tissadelle, Órla, Sorcha), the **Wenders** (Karla, and Anne when she is
    drafted) and the **Vosses** (Petra, Dagny) — check the relationship on the
    pages before assuming it, then carry one or two shared features across the
    set rather than a matching face. A family resemblance is a recurrence, not
    a duplicate.
  - **Manufacture.** [Reeves](/star-rangers/characters/reeves/) at Threshold
    and [Reeves](/star-rangers/characters/reeves-eden/) at Eden are the same
    model on separate deployments, and their pages say so. Their images should
    be **near-identical by design**, differing only in the small way a second
    installation of one thing differs — a shifted accent, a different count,
    the same emblem seen from another angle. This is the one place in the file
    where copying a previous image closely is the correct answer.
- **Spare is not shabby, and minimal is not neglected.** The distinction is
  worth stating because briefs reach for *stripped-down*, *worn*, *practical*
  and *utilitarian* constantly, and every one of them can slide into decay.
  A vessel or a post in this record is kept: clean surfaces, everything stowed
  square, tools racked, nothing broken. **The people who work alone keep the
  best kit**, because there is nobody else aboard to fix anything — which is
  the opposite of what the frontier-salvage look assumes. Ban the decay
  vocabulary by name (rust, corrosion, grime, oil stains, exposed wiring,
  clutter, derelict) rather than trusting *well-maintained* to carry it.
- **A uniform is a text-bearing object.** Discovered the hard way on
  `naomi-kestrel`, whose portrait came back wearing a badge reading **ANALYST
  A. SHARMA** — a different person's name, legible, plausible, and one
  filing away from a page captioned as somebody else. Uniforms attract name
  tapes, unit patches, rank tabs and badges the way corridors attract signage,
  and the general ban never reaches them because they are clothing rather than
  scenery. **Every character prompt that dresses someone in a uniform must ban
  worn lettering by name.**

  **Ban the words, not the marks** (Dermot, 13 August: *"ok to have stripes,
  bars, stars and other shapes on human uniforms even if no lettering"*). My
  first correction over-banned — it stripped rank tabs and patches outright,
  which contradicts `rank-insignia-and-uniform.md`, where insignia is
  load-bearing. Rank and certification marks are **shapes**: bars, stripes,
  chevrons, stars, rings, discs and bands, read by count and arrangement. A
  geometry has no first language, which is exactly why a service carrying
  Krenyi, Pelagene, Veyr and Serephine officers uses one. So ask for geometric
  insignia and ban only text — no name tape, no name badge, no printed word,
  no letters or numerals of any script. `wendell-albercombe` shows Compact
  plainmarks rendering correctly, badge included.

  **And the lighting is not exempt from the century either** (Dermot, same
  exchange: *"the desk lamp is still too retro and bulky — either just remove
  that lamp or have a softer more diffuse recessed light source"*). Replacing
  screens with an anglepoise swapped one period object for another; a sprung,
  jointed, domed lamp with a visible bulb is a 20th-century design and reads as
  one. **Light is recessed and diffuse**: concealed source, soft spread or a
  gentle pool on the working surface, no visible fitting and no bulb in frame.
  Most rooms simply have light in them.
- **Never light a scene with a display.** "Lit by the glow of data readouts"
  guarantees readouts, and readouts carry readings. Use practical light — a
  work lamp, a window, an overhead fixture. Applied to `naomi-kestrel`,
  `lorien-the-wanderer` and `jeeves` on 13 August.
- **But a negative rule alone sends the picture backwards.** Told only what a
  2826 workspace is *not*, the generator reaches for the last thing it knows,
  and the first screen-free `naomi-kestrel` re-run came back with walls of
  analogue dials and a paper ledger — a room that read as about 1975. The lore
  may decline to specify; **an image cannot.** Anything banned has to be
  replaced by something nameable.

**What a display actually looks like** (Dermot, 13 August: *"I don't believe in
holograms — the displays would be more like a Kindle, less glowing lights and
more like a static object, or even a book that is not a book"*). This is now
canon on `src/lore/what-the-record-refuses.md`, and it is the positive answer
every prompt in this file should reach for:

- **Matte, still and unlit.** A thin rigid sheet, or a bound stack of them,
  read by whatever light is already in the room. No glow, no bezel, no frame,
  no backlight, no visible screen edge, no colour it did not need.
- **Book-shaped, often literally bound.** Slim, hand-held, the size and weight
  of a small hardback. "A book that is not a book" is the in-world phrase and
  it is exact both ways.
- **No holograms at all** — no projected figures, no volumetric charts turning
  above a table, no floating schematics. The technology does not perform.
- **Nobody's face is ever lit by what they are reading.** No under-lit blue
  wash, ever. Light comes from a lamp, a window or the sun, always.
- **The house image of expertise** is therefore a person at an ordinary table
  under an ordinary lamp with one still object in front of her — which looks,
  deliberately, almost exactly like a scholar in any earlier century. That
  resemblance is the point, not a failure of imagination, and it is what makes
  the near-miss retro rooms above so nearly right: they had the calm and the
  lamp and got the object wrong.

**And this is why so many of these images should look old** (Dermot, same
exchange: *"which is why some planets and settlements look medieval and rural
despite very advanced technology"*). It is the single most useful thing to hold
on to when briefing a scene, so it is worth stating as a rule rather than
leaving it to be re-derived every time:

- **Technology that does not announce itself does not reshape a place.** No
  glowing rectangles, no projected light, no machines that need to be seen
  working — so nothing is competing for attention, and a settlement ends up
  shaped by weather, land, local materials and what people actually like
  living in. Which is roughly what they always liked.
- **A stone chapter house, a hive-yard, a thatched roof and a farm track are
  all period-correct for 2826.** Do not "modernise" a rural brief to prove the
  century. The correct reading of thatch here is not *pre-industrial*; it is
  that thatch works, the material is local, and nothing in eleven hundred years
  made it stop working. `the-fusion-ceiling` is the worked example already in
  hand — timber barns, a gravel yard, hand tools on a rack, and one grey
  fusion unit on a concrete pad, and it passed cleanly on the first run.
- **Industrial looks are earned by function, never by era.** A dock, a boundary
  post or a working station may look like machinery because it *is* machinery.
  A farm may not.
- **Consequence for the retro problem above:** the fix is never to add
  futuristic set-dressing. It is to correct the one object the character is
  using and leave the world alone.

**A prompt that does not state heritage will have one chosen for it** (added
2026-08-13, after the `rasa-oyelaran` re-run). An image model fills every gap
in a brief with its own default, and the default is not neutral. Two rules
follow, and both are cheap:

- **If a character's name states a heritage, the prompt must state it too.**
  *Oyelaran* is Yoruba and the brief did not say so, so both variants came back
  white. That is not the generator misbehaving; it is a brief that left the
  question open and got an answer anyway.
- **Where the record genuinely does not say, that is Dermot's call and not a
  variant-picking exercise.** `petra-voss` returned one Black woman and one
  white woman, both good. Choosing between them would have decided a
  character's heritage by selecting a picture, which is authoring — the same
  line Section 1's Asteria history already draws. He chose the first, on
  2026-08-13, **for cast balance**: the reason he gave was that it supplies
  something the cast so far was missing. Worth carrying forward as a criterion
  rather than a one-off — when the record is silent and the variants differ,
  ask what the ensemble is short of, and put the question to him.

**Your camera, not a generator** — `lore/saltvik.jpg` is still a plain text
card while its sibling Saltmere entries have two photographs each; the Knarr
Line's Nordic-heritage coastal world wants a real cold-coast frame.

**Aldera gallery (`field-photo-03`/`-04`) — re-crop, don't generate** (moved
from the retired `firefly-prompts.md` § D). `field-photo-01`/`-02` read as
photographs of a real kitten in a boat; generated frames in the same gallery
will show against them. Prefer re-cropping Dermot's own originals — the alt
text describes a tabby-and-white kitten among yellow flowers, and beside a
blue flower; if those frames exist on the F: drive this is a crop job, not a
generation job. Second choice: retire 03 and 04 and run the gallery with two.
If generation is ever chosen anyway, match 01/02's look rather than the usual
concept-art register: candid close-up pet photography, tabby-and-white kitten
with blue eyes, outdoors among yellow wildflowers (and again beside a single
blue flower), late afternoon sunlight, shallow depth of field, natural colour.
Portrait 3:4, 1200px.

### 3. Deferred by choice

> **Stale as a description — corrected 19 August 2026, not rewritten.** The
> *contemporary-stock-headshot cluster (11 files)* below no longer exists in the
> form described: **all eleven of those names were replaced with PENDING cards on
> 12 August** (they are Tier 1 of Open work 0), and `petra-voss` has since
> received a real portrait. Nothing in that bullet is true of the current files.
>
> **The section's own closing note predicted exactly this** — *"a file that still
> exists but is no longer what the note says it is, the validator cannot see, and
> never will"* — and it was right within four days of being written. The
> `validate-images: on` block passes because the eleven files exist; it has no
> way to know they are cards now. Left in place rather than rewritten because the
> bullet is a record of why those images were deferred, and rewriting it would
> lose that; **read it as history, not as inventory.**

<!-- validate-images: on -->
<!-- Every image named below is asserted to EXIST, so `npm test` checks it.
     That is the point of this section: it describes the image set as it
     stands. Sections listing images still to be made must not opt in. -->

- **The contemporary-stock-headshot cluster (11 files)** — flat studio
  backdrops, no in-world setting: `cormac-dubhghlas`, `demelza-trevithick`,
  `fergus-aonghas`, `idris-bryneth`, `imogen-petrakis`, `niamh-o-ceallaigh`,
  `petra-voss`, `rhian-gwynne`, `rhiannon-ceridwen`, `sen`, `zara-wayland`.
  Two (`imogen-petrakis`, `petra-voss`) lean toward the glamour look the house
  style rules out. Real style work, but a batch that size deserves its own
  session with Dermot choosing each face.
  *Was written as thirteen: dagny-voss was deleted in `55dc1ec` and
  dorian-calloway was replaced with a generated portrait in `525dfc1`, neither
  of which reached this note. Corrected 2026-08-12. Names of removed files are
  left un-backticked here deliberately — inside a `validate-images: on` block a
  backticked name is an assertion that the file exists.*
- **Flat title-card template used on humans** instead of portraits:
  `brother-fintan`, `dr-iona-vale`, `galahad-thorne`. Same template on aliens
  (`isren-farrowkin`, `mira-of-brine`, `sohrel`, `syra`) — internally
  consistent, but a third visual language beside the photo and emblem
  conventions.
- **Tonal outliers, deliberate:** `lore/the-imperium.jpg` (a real modern
  skyscraper standing in for a monolithic tower), and the `prismere-*` series
  repeating one jellyfish/crystal-spire motif across distinct named locations.
  *The "true crime" evidence board, lore/planetary-liaisons-and-recruiters.jpg,
  was listed here too until 2026-08-12 — it was deleted in `55dc1ec` as a
  verified stock image, so it stopped being an outlier and started being a dead
  reference. The same photograph survives at `characters/bertram-ashcombe.jpg`. **No longer true as of
  2026-08-20: that path now holds a generated portrait, so the last copy of the
  stock photograph is gone from the repository.***

<!-- validate-images: off -->

*Two names above are stale and kept only until this section is rewritten:
`dagny-voss` was deleted in `55dc1ec`, and `dorian-calloway` was replaced with a
generated portrait in `525dfc1`, so the cluster is eleven files rather than
thirteen. The validator now catches the first kind of drift; the second kind —
a file that still exists but is no longer what the note says it is — it cannot
see, and never will.*

### 4. New London Space Habitat — delivered, with two recorded defects (2026-07-26)

**Resolved.** `src/images/lore/new-london-space-habitat.jpg` landed in #177 and is
wired into the entry. This item is kept rather than deleted because the defects
below are known and accepted, and a future audit will otherwise re-flag them.

The render shows a horizontal ring carrying an open cityscape (a St Paul's-like
dome, a Westminster-style clock tower, Tower Bridge, parkland, a waterway with
boats), two further rings canted steeply across it, a tall central spire on
spokes, a Union-flag tram, and Earth and the Moon behind.

**Two generator defects, recorded not fixed** (full detail in
`image-prompts.md` § 3):

1. **1408×768, under the ~1600px lore standard** — `eden-space-habitat.jpg` is
   1600×900 for comparison. Not upscaled: interpolation would add pixels, not
   detail, and the file is honest at its native size. Fix by regenerating larger
   if it ever matters.
2. **Garbled pseudo-text on the outer ring hull**, lower left and lower right —
   faint glyphs, low-contrast at full view. Add *text, lettering, signage,
   writing* to the negative prompt on any regeneration.

One accuracy point worth keeping: **Earth renders roughly four times the Moon's
apparent diameter, which is correct.** L4/L5 are equilateral points, so the
habitat sits one lunar distance from *both* bodies, and 12,742 km / 3,475 km
gives 3.67 — Earth ≈1.9° across, the Moon ≈0.52°. The render got this right.

**Dermot's ruling: the image is impressionist and not technically correct, and
that is fine.** Two known divergences from the entry, both accepted rather than
open questions:

- Three rings in *different planes* cannot all rotate about one axis for gravity.
  The entry's three co-rotating Stanford tori are the canon; the art is not a
  schematic of them.
- A Stanford torus interior is enclosed — the far side of the ring curves
  overhead rather than opening onto stars. The render's open city face is a
  visual choice.

Do **not** rewrite the entry's geometry to match a future image, and do not
treat these as errors to fix.

`image_alt` was rewritten after merge to describe what the render actually
shows — the landmarks especially, since a domed cathedral, a gothic clock tower
and a twin-towered bridge are the most distinctive thing in the frame and the
whole point of the habitat. The version that shipped in #177 named the location
("at Earth-Moon L5") and asserted motion ("turning"), neither of which a viewer
can see; per the standing rule, alt text describes the file, not the entry.

### 5. Missing lore illustrations — **the 2026-07-30 list is fully delivered** (re-audited 19 August 2026)

**23 of the 30 slugs named in this section now exist under `src/images/lore/`, and the seven that do not are pages that never had a prompt written here at all** — they were named in passing. The heading said *19 pages*. As with Open work 1, finished work was reading as a queue.

**The prompts stay in place** as the prompt of record for the images they produced. Read what follows as an archive.

**The true outstanding count is 52 lore pages**, re-derived rather than trusted:

```bash
for f in $(find src/lore -name '*.md' ! -name index.md); do
  grep -q '^image:' "$f" || echo "${f#src/lore/}"; done
```

Most of them postdate July. Prompts for all 52 are at *Outstanding lore illustrations* below.

#### The Oversight Council — added 5 October 2026, from Dermot's own frame

- **`the-oversight-council.jpg`** — the page had no image and no prompt. At
  Dermot's question whether a photograph of his, an atrium with cantilevered
  galleries, glass balustrades, a drum of balconies, strip lights under the
  soffits and skylights above, would work as a station, ship or habitat
  interior, the reading was: a habitat or civic institution, yes, and best;
  a station only cropped below the skylights; a ship not at all. Among the
  imageless institution pages the Oversight Council took it (*Yes agreed*):
  galleries over a public floor read as a civilian body's building, and the
  page does not claim where the picture was taken. Filed under *photo first,
  generation last* at its first step: the frame as supplied (4607×3071),
  cropped 110 px off the left and 73 px off the top to keep 3:2 and to drop
  the one twenty-first-century exit pictogram, which sat on the wall at the
  left edge; a cloned patch was tried first and showed a hard edge at site
  scale, so the crop is the honest fix. Resized to 1600×1067, JPEG quality
  85, nothing else touched; the small red call point by the stair base is
  left, since a button is not a period. The alt text describes the frame.
  It is a real building, named by Dermot the same evening: **part of
  University College Dublin, on the Belfield campus** (his words, *Real
  building is part of University College Dublin* and *Belfield campus*;
  which building he did not say and the entry does not guess). Not in `own-photography.json`. On record here on the
  Formation-page lesson that a real place standing in for a fictional one
  is a decision and not an accident; the page itself says nothing of it.
  No prompt, no reference, no generator.

### 5a. Missing lore illustrations (19 pages) — audited 2026-07-30, archived

An unrecorded gap. Open work 1 covers character portraits; nothing here had ever
enumerated the **lore** entries with no `image` at all. Nineteen do (excluding
`lore/index.md` and the canonical-glossary reference doc, which has one). None
blocks a build — `lore-entry.njk` guards the image with `{% if image %}`.

**Two different jobs, and it matters which.** Nine of the nineteen are
institutions or factions and want a designed **title card**; the other ten are
places, phenomena, technology or cosmology and want a **generated image**.

> **Correction, 2026-07-30 — this section shipped with a false claim, now fixed.**
> It originally said the four existing lore cards (`cerebraun-hegemony`,
> `celtic-union-of-planets`, `orbital-habitats-compact`, `levrils`) were made
> with `scripts/make-codex-cover.ps1`, and named
> `federation-of-sentient-beings` and `united-space-consortium` alongside them
> as more of the same. **Both halves were wrong**, and the error came from
> reasoning about `image_alt` strings instead of opening the files — the exact
> failure this file already warns about two sections up. Reading them settles it:
>
> - The four cards are **1600×900 landscape**, individually tinted (Cerebraun's
>   is green-teal), and carry a device inside a ringed seal. `make-codex-cover.ps1`
>   emits **square 1600×1600** in one fixed blue palette and has no emblem motif
>   at all — only `rules`, `dissolution`, `none`. It cannot have produced them.
> - `federation-of-sentient-beings` (1200×1509) and `united-space-consortium`
>   (1200×800) are **photographs**, not cards.
>
> **The emblem-card recipe is therefore unrecorded and currently unreproducible.**
> All four landed in Release 1.7.0 (#187) with no entry in `image-prompts.md`,
> which is precisely the rule that file exists to enforce and precisely the
> failure mode the Prismere cluster prompted it over. A fifth card in the same
> family is referenced from `uniforms-and-insignia.md` ("a blue chevron insignia
> emblem in a ringed seal"). **Recovering or re-deriving that recipe is open
> work in its own right** — see the note at the end of this section.

So the split below is *descriptive of what can be built today*, not a claim about
how the shipped cards were built:

- **Institutions and factions → generator title cards** via
  `scripts/make-lore-cards.ps1` (a batch driver over `make-codex-cover.ps1`,
  added 2026-07-30, nine cards in one command). The generator letters text with
  a font engine, so titles come out sharp and correctly spelled — which an image
  model cannot be trusted to do. **These will read as codex-style cards, not
  like the four 1.7.0 lore cards**, and that inconsistency is unresolved: it is
  Dermot's call whether to accept it, extend the generator with a
  landscape/emblem mode first, or drop the batch.
- **Places, phenomena, technology and cosmology → generated images**, prompts
  below.

Prompts are written to the standing rules: era stated, lettering banned, sheen
named rather than substance, unsettling permitted and horror not. Add
`image`/`image_alt` after generating, and per "Alt text is the prompt of record"
above, write the alt text from what the file actually shows rather than pasting
the prompt back in. For a title card that means describing the card's layout and
text, not the prose of the entry it fronts.

**Title cards (generator, not image model)**

Nine pages. The table lives in `scripts/make-lore-cards.ps1` rather than here, so
there is one copy of it and it is the copy that runs; `-List` prints it. Notes
below cover only the choices that needed a reason. Two constraints learned from
reading the generator: subtitles are **not** auto-fitted (only titles are), so
keep them under ~34 characters; and `Institution`/`Author` are left empty on
every row, because codex covers carry them for a named in-universe source and
lore is the Archive's own voice with no author to name.

Only three rows involved a judgement worth recording:

- `the-institute.jpg` — motif `dissolution` rather than `rules`, because the
  entry's stance is that nothing has been established beyond the disagreement
  between instruments. The fading ring says that; ruled lines say the opposite.
- `hyperfold-yield-combine.jpg` — the one row with a `Stamp`, and it reads
  `DISSOLVED` rather than anything accusatory. Reading as a lawful trading
  entity is the entry's whole point: everything about the Combine was licensed
  right up to the moment it was destroyed. The stamp records its end, not a
  verdict on it.
- `habitat-threshold.jpg` — the weakest candidate of the nine. A charter
  population line is abstract even for a title card, and deferring it is a
  defensible outcome; it is in the batch because the card costs nothing to
  generate and can be dropped after looking at it.

The other six are straightforward: title, category, a subtitle under the length
limit, `rules`.

**Still open after this: the emblem-card recipe.** Nothing here recovers how the
four 1.7.0 lore cards were made, and until that is settled the corpus has two
visual languages for the same job — those four in landscape with a ringed seal,
and anything `make-lore-cards.ps1` produces in square codex style. Three ways
out, none of them started: find the original tool or prompt and record it in
`image-prompts.md` at last; extend `make-codex-cover.ps1` with `-Aspect`,
palette and an emblem/seal motif so one generator covers both looks (note that
every positioning constant in it is tuned for 1600×1600, so this is more than a
parameter); or accept the codex look for lore and treat the four as legacy.
Worth deciding before generating nine cards, not after.

**Generated images (ten pages)**

- **`arilon.jpg`** — not a person: the Fellowship's comparative-archive name for
  a recurring pattern (a witness who names a boundary truth, is discredited, and
  is vindicated only after departing). Must **not** read as a portrait of one
  figure, which is the whole misreading the entry exists to prevent.
  > Abstract archival composition suggesting many separate accounts of the same recurring figure: overlapping translucent layers of indistinct robed silhouettes at different scales, none in focus and none dominant, receding into a pale ground, no face resolvable, muted parchment and grey-blue palette, contemplative rather than mystical, science-fiction archive aesthetic, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`ascent-javelins.jpg`** — winged craft launched near-vertically, almost like
  a missile, surface to orbit. State the era or this defaults to a Shuttle photo.
  > A slender winged orbital ascent craft climbing near-vertically from a planetary launch cradle into high thin atmosphere, seen from below and behind, exhaust plume tight and blue-white, distant curve of the horizon already visible above, far-future science-fiction spaceport infrastructure on the ground beneath, cold clear daylight, functional engineering aesthetic rather than sleek styling, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`embodied-cognition.jpg`** — a small embodied mind resolving what a vast
  systems mind cannot; the doctrine is to *pair* them, so the image should show
  both scales in one frame rather than choosing.
  > A small utilitarian analytical robot chassis with one manipulator resting flat against a corridor bulkhead, foreground and sharply lit; behind and above it the vast dim architecture of a station management intelligence rendered as banks of quiet data surfaces stretching out of focus, far-future science-fiction interior, cool blue ambient glow against one warm working light on the robot, no human figures, no face, no readable text or labels, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`membrane-shadows.jpg`** — gravitational bleed-through: a full, edge-lit
  person-shaped silhouette cast by a mass that never crossed over. **Tone line
  applies hard here** — this must read as an unexplained physical imprint, not a
  threat approaching. Nothing is coming through.
  > A tall humanoid silhouette standing in a boundary-observation chamber, rendered as an absence of light rather than an object — edges cleanly lit from behind, interior featureless and without detail, the shape casting no reflection and disturbing no dust, calm instrument-lit far-future science-fiction interior, cold blue-grey palette, still and unremarkable rather than menacing, no face, no eyes, no readable text, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`the-fusion-ceiling.jpg`** — fusion is the top of the lawful energy ladder,
  and the frontier caveat is the interesting half: a rationed imported core
  running a water plant beside hand tools and human labour. That contrast is a
  better image than a reactor hall, and it is the thing observers misread as
  poverty when it is sequencing.

  **The draft animal is out, and the reasoning is worth keeping.** The earlier
  version of this prompt asked for one, and the sequencing argument that
  justified it survives — a rationed core prioritised for water treatment
  genuinely may not have surplus for traction yet. But that argues for *hand
  tools*, not for livestock. A working draft animal is not one animal: it is
  breeding stock, years of established forage, veterinary support and an
  enormous launch mass, against an electric tractor that folds into a crate and
  runs off the core you have just installed. Realistically a colony ships
  frozen genetic stock and grows a herd decades after the moment this image
  depicts. The corpus does have off-world animals — Bubochka, Agent Barsik —
  but those are companions carried by people, which is a far smaller claim than
  a working herd at early buildout. The tools carry the contrast on their own,
  and they carry it without asserting a biosphere.

  > A compact sealed fusion power core on a poured concrete pad at the edge of a young frontier settlement, plain matt grey industrial casing with bolted access panels and a maintenance walkway, no glow, no illuminated strips, no bevelled armour panelling, no ornament of any kind; armoured conduit runs from it to a modest water-treatment building; in the same frame, well-kept hand tools racked on a rail and two colonists working with them, unhurried, mid-task. No animals anywhere in frame. The settlement behind is newly built and clearly well-provisioned - level gravel, timber-framed buildings finished and roofed, nothing improvised, no tents, no mud, no crates in transit. Late afternoon light, far-future science-fiction colony early in its buildout, muted earth palette, competent and unhurried and plainly not poor, the machine ordinary rather than impressive, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`who-governs-a-universe.jpg`** — a map, not a place: primary universe versus
  the Concordant Zones inside it, and three kinds of authority.
  > Abstract diagrammatic cosmological illustration: one large luminous bounded volume containing several nested translucent regions of differing tint, with three distinct tiers of influence indicated by scale and elevation rather than by arrows or labels, dark field beyond, restrained gold-and-indigo palette, clean and schematic rather than nebulous, no readable text, numbers, or lettering anywhere, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`things-that-are-made.jpg`** — church-space overlay. The entry's argument is
  that the Archive uses the language of authorship and then disclaims the author.
  Avoid religious iconography; the register is *evidence of intent*, not worship.
  > An immense structure of evident deliberate design seen at a scale that makes its purpose unreadable — vast regular geometry receding into mist, precise and unweathered, clearly built and clearly not by anyone present, a single small observing figure at great distance for scale, cold pale light, far-future science-fiction, restrained grey and bone palette, awed and sober rather than devotional, no symbols, no iconography, no readable text, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`kieme-visible-hand.jpg`** — church-space overlay. Devotional tradition
  claims to *see* the ledger kept; the entry's images are the harm that stops
  short, the door that holds. Depict the limit, not the harm.
  > A heavy sealed pressure door holding, seen from the safe side, with visible damage stopping cleanly at its frame and none beyond it, one figure standing back from it unharmed and looking at it, far-future science-fiction station interior, low emergency lighting warming to normal at the edges of frame, quiet aftermath rather than crisis, no visible injury, no readable text or signage, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`universes/si-gaoithe.jpg`** — a second, unrelated membrane; high
  creative-entropy, **no predictable interval**, barely keeps a shape. The
  contrast with Tír Tairngire's regularity is the point, so this should look
  irregular where that one looks periodic. Existing file
  `lore/threnos-omega.jpg` is the precedent for a membrane portrait.
  > An unstable universe-membrane visualised as a churning irregular field of shifting translucent surfaces with no repeating structure, folds forming and collapsing at different scales at once, sudden localised eddies of luminous air, deep field beyond, restless green-grey and pale gold palette, cosmological scale, no horizon and no recognisable objects, no readable text, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

- **`universes/tir-tairngire.jpg`** — the one boundary neighbour on record that
  *keeps time*: a transient gravity tunnel opening on a predictable rhythm.
  Regularity is the whole finding.
  > A universe-membrane seen across a narrowed gap, its surface carrying a smooth regular periodic swell like a slow standing wave, and at one point a clean transient tunnel of clear space open through the interval, edges sharply defined and stable, deep cosmological field, warm gold light on the far side against cool blue on the near, orderly and rhythmic rather than turbulent, no figures, no readable text, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

**Added 2026-08-04, after the audit** — one more generated image, for the new
planet page drafted the same day:

- **`drithane.jpg`** — the crossing night is the planet's whole
  identity, and the custom of going dark to watch it is the human half of
  the frame. Slow sparks, not meteor streaks.

  **Filed one directory too deep**, and the page rendered a broken image from
  2026-08-17 (when both the file and its `image:` line landed, in #454) until
  2026-08-21. It sat at `src/images/lore/planets/drithane.jpg` where the page
  could not reach it: `lore-entry.njk` hardcodes `/images/lore/` and appends
  the front-matter value, so a bare `image: "drithane.jpg"` asked for a file
  that was not there. Every other planet's image is flat in `src/images/lore/`
  and this one now is too. The subdirectory convention is real, but it is
  `universes/`, where the front matter carries the prefix as well — a
  subdirectory only works when both halves agree. `validate-content.js` now
  checks the URL the layout emits, not just that the file exists somewhere.

  **Two rounds returned a night landscape with no sparks in it at all** — a
  starfield and a moon, which is every night sky and not this one. The old
  prompt asked for them correctly and still lost them, and the likely reason
  is instructive: **sparks described as small points high in a clear night sky
  are stars, as far as a model is concerned**, and "not fast meteor streaks"
  is a negation, which prompts handle badly. So the sparks are now the stated
  *subject* of the image rather than a property of the sky — many, large,
  individually distinct, mid-fall and mid-fade, unmistakably not stars — and
  the settlement's darkness is described as the deliberate thing it is rather
  than as an absence of light. The lit windows are gone: the entry says the
  world watches its own sky by the light the sky provides, and a warm window
  was arguing with that.
  > A night sky filled with dozens of slow silent falling sparks - the subject of the picture - each a distinct warm white-gold glow with a short soft trail, drifting downward and fading out high in the air, clearly much larger and brighter than the stars behind them, some at the top of the frame and some low near the ridgeline, caught at different stages of their fall. Below them a high cold valley lies completely unlit, every building dark on purpose, roofs and snow-dusted ground and glasshouse panels picking up only the gold light from above, small figures standing outside in ones and twos with their faces turned up. Far-future science-fiction pastoral world, deep cold blue night against the warm gold of the sparks, still and quiet and shared rather than dramatic, no artificial lighting anywhere in the settlement, no readable text, signage, insignia lettering or written characters anywhere in frame. Landscape orientation.

**Also worth noting from the same audit:** two lore pages carry alt text that is
thin rather than wrong and would fail the "describes what the file shows" test if
tightened — `predatory-entities.jpg` (*"Blurry human arms"*) and
`teleportation-limitations.jpg` (*"Defocused luminous colour stripes"*). Both are
accurate as far as they go; neither is a defect. Flagged so a future audit
doesn't re-derive them.

#### Prismere/Prismeri replacement set — replace, not upscale (Dermot's ruling, 2026-08-11)

Twelve entries, migrated from `firefly-prompts.md` §§ A–B on 2026-08-11 — the
file has since been retired, so **this is the only copy**, each entry carrying
its divergence note in its description. See Open work 2 for the ruling. **Regenerated as one batch on 3 September 2026** (two variants each, all twelve, picks in `image-prompts.md`; the parser needed a fix first, since the `5a.` heading was invisible to it). Was dormant while the old files existed; the set regenerates **all together
or not at all** (the all-or-none rule carried over from the upscale plan), and
each prompt varies the *light source* rather than the adjective — that
divergence is the whole point of replacing instead of upscaling, since the old
set repeated one jellyfish-and-crystal-spire motif across eight distinct named
locations.

- **`prismere-orbital-vista.jpg`** — the establishing shot; was a creature
  portrait, becomes the wide vista whose point is the crowded sky. Landscape
  16:9, 1600px wide.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. Wide high-altitude vista of a crystalline world at night seen from a ridge. A dense planetary ring plane cuts across the sky at a steep angle, with two neighbouring ringed worlds visible as discs rather than points, and seven small moons scattered at varying distances. Far below, the crystalline forest canopy glows faintly in shifting colour washes, bright enough to read the terrain by. A single armoured, spike-shelled ground grazer in the near foreground gives scale against the enormous sky. The land is lit from below by the forest, and from above by ringlight. Cold, vast, quiet. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Landscape orientation.

- **`prismere-glasswood-grove.jpg`** — light caught and re-emitted; daylight,
  botanical clarity. Portrait 3:4, 1600px tall.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. A stand of slow-growing trees with translucent crystalline bark and broad glass-like leaves, in daylight under a banded gas giant low on the horizon. The leaves work as lenses: each catches the pale daylight and re-emits it as a soft colour wash along its own length, so the foliage glows more brightly than the sky that feeds it. Sunlight refracts through the canopy into scattered spectral patches on the forest floor. Botanical clarity, closer to a naturalist's plate than a fantasy scene. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Portrait orientation.

- **`prismere-flowering-glasswood.jpg`** — the same trees in flower at night;
  the deliberate pair to the grove, not a duplicate. Portrait 3:4, 1600px tall.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. The same crystalline forest at full night, in flower. Translucent blossoms open along the branches, each lit from within in warm amber and pale rose, the only warm colour in a cold blue-green scene. Small many-legged foraging animals move across the ground beneath, their shells catching the blossom light. Intimate scale, low viewpoint, shallow depth of field. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Portrait orientation.

- **`prismere-luminous-towers.jpg`** — lit from within by a shared root; the
  inhabited image of the set, no drifting jellyfish. Portrait 3:4, 1600px tall.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. A loose colony of tapering mineral towers rising from a forest floor, each lit from deep inside with amber light that is brightest at the base and fades upward, revealing they are fed by a shared root network under the ground rather than each glowing on its own. Irregular spacing, varied heights, organic rather than architectural. Dwellings have been shaped into the towers' lower structure — subtle, load-bearing, easy to miss at first glance. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Portrait orientation.

- **`prismere-glass-spires.jpg`** — no light of its own; the one image in the
  set that is not glowing. Portrait 3:4, 1600px tall.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. Tall fused-silica spires on a bare high-elevation ridge, far above the tree line, with no glowing forest anywhere near them. These structures produce no light of their own — they are dark glass, visible only as silhouettes and as thin lattice veins catching starlight from behind. A spiral galaxy is clearly visible edge-on in the black sky above. Stark, cold, mineral. The contrast with the luminous lowlands is the subject. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Portrait orientation.

- **`prismere-driftjellies.jpg`** — the aerial ecosystem; the air itself is the
  subject. Landscape 4:3, 1600px wide.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. Translucent gas-bladder animals drifting high on a thermal in a dense, particulate-thick sky, seen from below and slightly to the side. They trail long luminous feeding tendrils that filter spore and dust from the air. The air itself is visibly thick — hazy, full of suspended matter, with light shafting through it. A golden ring system arcs behind them. The animals are unhurried and harmless. Low gravity is evident in how slowly everything moves. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Landscape orientation.

- **`prismere-umbral-ray.jpg`** — the predator and the tonal outlier: unpleasant
  for a beat before you work out why. Landscape 16:9, 1600px wide.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. A large silent gliding predator with a broad, taut, biomechanical-looking wing structure, riding a thermal at dusk in a dim sky. Seen from below and behind at a distance, unaware of the viewer, hunting. Below and far off, a drifting colony of luminous gas-bladder animals it has not yet reached. Darker, colder and more sparse than the rest of the world's imagery — muted greys and deep blues, almost no bioluminescence in frame. Silence and intent. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Landscape orientation.

- **`prismere-twilight-lattice.jpg`** — the sky phenomenon; geometry, not
  aurora, and the one most likely to go wrong. If a batch comes back with
  curtains and ribbons, add *"technical diagram, ruled lines, geometric
  construction, protractor angles"* and push harder. Portrait 3:4, 1600px tall.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. Night sky above a crystalline landscape, dominated by the sky itself: faint, mathematically precise geometric figures traced across the whole visible hemisphere — straight lines, clean arcs, closed polygons, at exact angles, like a drafted diagram rendered in pale light. This is geometry, not aurora: no curtains, no billowing, no organic drift. The figures are thin, exact, and unmistakably constructed. The dark landscape below is a low silhouette, present only to give the sky something to sit above. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Portrait orientation.

- **The three Prismeri entries below were withdrawn on 3 September 2026 and rewritten the same evening** once the body was derived and confirmed (`species-design.md`, Prismeri section; `prismeri.md`). The record of the withdrawal: —
  regenerated with the set and rejected by Dermot on the day: *"Are the winged
  prismere beings still too humanoid?"* They were. Each prompt asks for a
  *winged humanoid*, which is the trap `species-design.md` names — the human
  frame with features applied — and the 13 August ruling makes the Krenyi the
  only other people on that frame. The Prismeri page now carries a
  placeholder card and no body images; the three generated files are parked
  in `story-bible/reference-art/` (`prismeri-*-2026-09-03.jpg`) for reuse at
  Dermot's direction. **A re-brief needs prose first**: the page never says
  what a Prismeri's frame is, only wings, exoskeleton and tendrils, so the
  body plan is Dermot's to write before any prompt can be.

- **`prismeri-first-wings.jpg`** — the first life stage: an adult, not a child.
  Lore image, not a character portrait — the 16:9 portrait rule does not apply.
  Portrait 3:4, 1600px tall.
  > Sapient alien flier of a silicate-carbon world, and not humanoid in any respect: a level, horizontal spine; the wings are the forelimbs, membranes stretched from an elongated outer digit back to the hind leg, with three long clawed fingers standing free at each wing's leading edge as the only hands; long-toed prehensile hind feet; a light, long body. No upright stance, no human torso, no separate arms, no human face. A head with two large forward eyes set low and a band of small crystalline facets running along the skull ridge; a hard, lipless mouth. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. The First Wings form: slender and light-boned, a soft grey-violet exoskeleton still hardening, translucent gossamer wing membranes, no tendrils on the skull ridge. Hanging inverted from a lumenspire by its hind feet inside a glowing lumenspire settlement at night, both wing-hands free and working a small piece of shaped glass, the forest's amber and blue-green glow lighting it from below, the spire's shaped structure around it. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; no holograms, projected light, glowing displays, screens, monitors or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting; no weapons; no humanoid figure, no upright biped, no human face or torso, no separate arms, no fairy, angel, dragon or bat costume, no comparison panels, split frames or diagram layout. 16:9 landscape.
  *(Rewritten 3 September 2026 to the body derived from Prismere and confirmed the same day — wings as forelimbs, hanging at rest, ridge-band, lipless mouth; the first version asked for a "winged humanoid" and got one.)*

- **`prismeri-full-wings.jpg`** — the second stage; the sensory tendrils are
  the character. Also the hero of `src/lore/prismeri.md`, so keep the subject
  clear of the top and bottom thirds for the hero crop. Portrait 3:4, 1600px
  tall.
  > Sapient alien flier of a silicate-carbon world, and not humanoid in any respect: a level, horizontal spine; the wings are the forelimbs, membranes stretched from an elongated outer digit back to the hind leg, with three long clawed fingers standing free at each wing's leading edge as the only hands; long-toed prehensile hind feet; a light, long body. No upright stance, no human torso, no separate arms, no human face. A head with two large forward eyes set low and a band of small crystalline facets running along the skull ridge; a hard, lipless mouth. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. The Full Wings form: hardened gold-and-blue chitin plating, broader and heavier through the shoulders, load-bearing wing membranes built for sustained flight, and long motile crystalline sensory tendrils growing from the skull ridge. In flight, high in the crystal-haze layer above the glowing forest at night, wings spread wide, the faint precise geometric lines and arcs of the Lattice traced across the sky around it, seen from slightly below and behind so the head and tendrils read against the sky; the figure held in the middle band of the frame, clear of the top and bottom thirds. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; no holograms, projected light, glowing displays, screens, monitors or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting; no weapons; no humanoid figure, no upright biped, no human face or torso, no separate arms, no fairy, angel, dragon or bat costume, no comparison panels, split frames or diagram layout. 16:9 landscape.
  *(Rewritten 3 September 2026 to the body derived from Prismere and confirmed the same day — wings as forelimbs, hanging at rest, ridge-band, lipless mouth; the first version asked for a "winged humanoid" and got one.)*
  *(Revised 3 September 2026: one variant came back as a labelled PRE/POST-METAMORPHOSIS comparison sheet and the other as two figures; the prompt now insists on one individual and bans the diagram layout.)*

- **`prismeri-lattice-gathering.jpg`** — two forms, one people, no hierarchy;
  the hardest image in the set. Equals — no looking-up-at, no deference.
  Landscape 4:3, 1600px wide.
  > Sapient alien flier of a silicate-carbon world, and not humanoid in any respect: a level, horizontal spine; the wings are the forelimbs, membranes stretched from an elongated outer digit back to the hind leg, with three long clawed fingers standing free at each wing's leading edge as the only hands; long-toed prehensile hind feet; a light, long body. No upright stance, no human torso, no separate arms, no human face. A head with two large forward eyes set low and a band of small crystalline facets running along the skull ridge; a hard, lipless mouth. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. Two individuals of the same species meeting on a lumenspire at night: a First Wings form, slender, grey-violet, gossamer-winged, hanging inverted from the spire by its hind feet; a Full Wings form, gold-and-blue plated with crystalline tendrils from the skull ridge, perched on all four limbs on the spire's ledge with wings folded; their heads at the same height, facing each other in conversation, equals, neither above the other. Faint geometric lines of the Lattice in the sky behind them, the glowing forest below. No readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; no holograms, projected light, glowing displays, screens, monitors or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting; no weapons; no humanoid figure, no upright biped, no human face or torso, no separate arms, no fairy, angel, dragon or bat costume, no comparison panels, split frames or diagram layout. 16:9 landscape.
  *(Rewritten 3 September 2026 to the body derived from Prismere and confirmed the same day — wings as forelimbs, hanging at rest, ridge-band, lipless mouth; the first version asked for a "winged humanoid" and got one.)*

- **`prismere-root-mat-network.jpg`** — the twelfth file: generated 29 Jul 2026
  at 773×1152 with the *legacy* preamble (see `image-prompts.md` § 3), so it
  faithfully continues the old motif; regenerate with the set. The subject is
  the buried network, not the towers. Portrait 3:4, 1600px tall.
  > Silicate-carbon biosphere: living tissue built from glass and crystal rather than wood and chitin. Painterly science-fiction concept art, high detail, naturalistic rather than decorative. A shared luminous root-mat network beneath a colony of mineral lumenspire towers at night, seen low to the ground: veins of warm amber light running through translucent crystalline soil, converging toward the tower bases and brightest where they feed them, the glow fading upward along each spire. The buried network is the subject; the towers stand at the edge of frame. No text, no lettering, no human figures, no cartoon, no watermark, no oversaturated neon, no generic sci-fi cityscape. Portrait orientation.

**Also decided, independent of the Prismere batch** (moved from the retired
`firefly-prompts.md` § E; dormant until the old file is deleted):

- **`noogenic-seeding-system.jpg`** — currently a 1200×614 banner crop, a
  generic starfield; the entry is about a mind compressed into a seed that
  starts a universe, and the seed should be visible in the image. Landscape
  4:3, 1600px wide.
  > A vast field of stars and nebulae, deep and layered, with a sense of enormous distance — and at its centre something small, dense and structured: a compact point of organised light with visible internal architecture, clearly not a star. The scale relationship is the subject: something very small carrying the information a very large thing will be built from. Cosmological, contemplative, no figures, no text, no lettering. Landscape orientation.

### 5b. Outstanding lore illustrations — all 54: 52 prompted 19 August 2026, the pair below 5 October 2026 and delivered the same day

**Visible to the pipeline since 5 October 2026, and not before.**
`scripts/image-prompts.js` matched the heading *Missing lore illustrations*
and this one says *Outstanding*, so every mode of the script skipped the
whole section for seven weeks: `--list` reported nothing pending while this
note said *none generated; all proposals*, and the Step 1 of the runbook
above was answering for 5a alone. Found when the two prompts added on
5 October did not show up either. The match now takes either word, which
means **`--list` reports 54 pending from this section** and a bare
`--generate` would attempt all of them: Step 2's *generate ONE first* is the
guard, and `--only <name>` the tool.

**The pair, prompted 5 October 2026 at Dermot's *Yes please*:**
`what-a-life-is-built-from.md` (7 September 2026, the four requirements and
the heredities found in DNA's place) and its sibling
`what-a-mind-is-carried-by.md` (18 September 2026, the four things any
carrier of a mind has to do and the carriers the record has met). Both are
abstract pages, so both take the section's rule, a concrete anchor each,
and they are carded as a pair: the same station on the same night, the same
cold light and the same film, one on a bench and one at a table, so that
the two pages read as the two halves they are. Their entries are the last
two under *Cosmology* below.

Written in one pass at Dermot's request. **1600×900, 16:9 landscape**, JPG ~85,
into `src/images/lore/`. **None generated; all proposals.**

**The governing rule for this set: every abstract page gets a concrete anchor.**
Roughly half of these are pages about a *rule*, a *scope*, or an *epistemology*
rather than a place, and an abstract page illustrated abstractly produces exactly
the flat filler the house target rules out — *if a prompt reads like a brief for a
passport photograph it fails this*, and a gradient with a glow in it fails it
worse. So each one is anchored on a place, an object, or a person doing
something, and the idea is carried by what that thing is doing. The corpus
already proves the method works: `embodied-cognition.jpg`,
`who-governs-a-universe.jpg`, `things-that-are-made.jpg` and
`teleportation-limitations.jpg` are all abstract pages with concrete frames.

**Standing negative — paste into every one:**
> readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; schematic diagrams, technical drawings, blueprints, charts, graphs, arrows, callouts, infographic styling; holograms, projected light, glowing displays, screens, monitors, consoles; visible lamp, light fitting or bulb; lens flare, god rays, magical sparkle, glowing energy, neon; flat gradient background, stock illustration, clip art.

**One naming collision, flagged.** `src/lore/saint-aoife.md` and
`src/characters/saint-aoife.md` are different pages about the same person, and
both would reach for `saint-aoife.jpg`. Different directories, so the build is
fine, but two files one letter apart in intent is how the July audit's alt-text
drift started. The lore page's image is proposed as **`cill-aoife-devotion.jpg`**
and framed on the devotion rather than the woman.

---

#### Cosmology (12)

Impressions, never schematics. The Cascade tiers in particular must not become
nested-sphere diagrams.

- **`archecluster.jpg`** — *one Archewright's vocabulary carried in every route chart, statute book and certified machine.*
  > A vast orbital archive hall seen from a high gallery, rank upon rank of identical plain shelving running away in perfect repetition into soft distance, every bay built to the same proportion. Two small figures far below at floor level for scale. Cool even daylight from a high clerestory, no fittings visible. The repetition is the subject: one vocabulary, everywhere, unremarked. Pale stone, brushed alloy, deep shadow between the ranks. Immense, ordered, quiet.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: symmetry from the gallery; 2 looked down from a stair and lost the repetition.
  - **Not re-rolled, 11 October 2026** (photorealism audit, batch 1). The page's subject is immaterial: a family of universes drawn from one Archewright's vocabulary, which *from inside … looks like nothing at all* (the page's own first paragraph), and the 7 October rule gives an abstract concept a card or nothing, never a picture. The archive hall was the 19 August concrete anchor, and it came back as a CGI visualisation; a photographic re-roll would only be a better picture of a metaphor. **Recommended:** a designed card (`make-codex-cover.ps1` or `make-emblem-card.ps1`, Cosmology) in place of the hall; the alternative is no image, a page without one being complete. Left to Dermot; the prompt above stays as the record of the filed frame.

- **`archewright.jpg`** — *eternal, unobserved, and known only by inference.*
  > A worked stone quarry face at dawn, seen straight on, where every block that ever left it has been cut to the same handful of standard proportions — the negative shapes still legible in the rock. No tools, no workers, no machinery, nobody present and no sign of anyone recently. Cold clear early light raking across the cut faces. What made the shapes is absent and only the shapes remain. Grey stone, pale sky, long shadow.
  - **Absence is the whole entry.** Anything that depicts a maker contradicts *known only by inference*.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: cleaner cells; 1 had a stair-like break that read as a building.

- **`ask-and-it-will-be-reviewed.jpg`** — the church-space telling of prayer as *a permissions office*, and *the joke is load-bearing.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A modest municipal planning-office waiting room, warm and worn and entirely ordinary: a row of plain wooden chairs against a wall, a counter with its shutter closed, a well-swept floor, a plant somebody waters, one chair holding a folded coat as though its owner has stepped out, late afternoon light through frosted glass. The notice board is bare cork with nothing pinned to it, the counter carries no sign, the frosted glass carries no lettering, and the walls are plain. One thing in frame says the century: a sealed plain matte housing with a single small unlit recessed indicator, no dials and no screen, honest seams, a material that is not quite the old one. Warm wood, cream paint, dust in the light. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Not a temple, and not a joke played broadly.** The register is affectionate.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: bare board and the housing on the wall; 2 had a shutter and a different housing.

- **`counterpane-archecluster.jpg`** — *single systems behave identically; correlations among independent sources obey a different composition rule.*
  > Two identical hand-woven cloths lying side by side on a plain table, each thread and weave indistinguishable, but where they overlap at the centre the interference of the two patterns produces a moiré figure that belongs to neither. Flat even daylight from one side, plain table, nothing else in frame. Quiet, exact, faintly wrong. Undyed linen, grey table, one cool shadow.
  - **The best frame in the set for a physics idea**: identical parts, a joint behaviour that is not.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the ringed centre reads as the weave that is not ours.

- **`made-minds-and-the-ai-safety-archetype.jpg`** — *an archetype explains convergence, never enforcement. Nothing in the Cascade holds a kernel shut.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. Three unrelated doors of different ages and materials standing in a row against a plain wall, one old planked wood, one plain painted composite, one seamless pale matte panel, each fitted with a latch of visibly different manufacture and every latch resolving to the same simple shape. All three stand closed and none is locked; no bolt, no chain, no seal, no mechanism holds any of them. The newest carries a single small unlit recessed indicator and nothing else. Cool daylight. Convergence without compulsion. Worn wood, dull alloy, matte pale panel, grey wall. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Generated 7 October 2026 and held**, variation 1 chosen on the sheet (workshop context and the three latches; 2 had a modern door too clean.), then held at Dermot's two rules of the same evening: three old plank doors in a joiner's shop; re-prompt with the advanced hint (the latch, or what the doors close). Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 2 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the newest carries the indicator; 1 showed no hint of the century.

- **`post-eleven-dimensional-manifold.jpg`** — the structure *shared by every universe in the Cascade, regardless of its own dimensional floor.*
  > A great still body of dark water at night seen from just above the surface, absolutely flat, with the reflections of several separate distant lights lying on it — each light unreachable from the others across the surface, all of them held by the same water. No horizon visible, no shore, no vessel, no sky detail. Utterly calm. Black, silver, one warm reflected point.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the reflections hold the water; 2 was emptier than the page.

- **`resurrection-and-the-life.jpg`** — *life beyond death rather than life after it, and a last day.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A burial ground on a settled world at first light, a low wall of plain cast composite blocks, wet grass, plain unornamented markers of the same pale material in rows, the light just reaching the top of the far wall and not yet the ground, and at the gate one sealed matte housing on a short post with a single small unlit indicator. No figures, no ceremony, no flowers, no ruin, no crosses. Ordinary, tended, waiting. Grey-green, wet pale stone, one line of gold along the wall top. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Extra negative:** skeleton, bones, ghost, spirit, ascending figure, light from the sky, angel, resurrection imagery of any kind.
  - This is a church-space overlay page: it reads devotional tradition sympathetically and asserts nothing. A depicted resurrection would make the picture claim what the page declines to.
  - **Generated 7 October 2026 and held**, variation 1 chosen on the sheet (the lit wall line; 2 was flatter.), then held at Dermot's two rules of the same evening: a Northumbrian churchyard; re-prompt with the devotion's own ground on a settled world, one plain advanced thing in it. Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 2 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the markers carry no lettering and the housing stands at the gate; 1 had inscriptions.

- **`selvage-archecluster.jpg`** — *the weave's self-finished edge*, where sealed universes *can never touch one another, and can still reproduce.*
  > The finished edge of a heavy woven cloth photographed very close, filling the frame, where the weave turns back on itself and closes without a hem or a stitch. Along that edge the threads are dense and perfectly regular; beyond it, nothing. Raking side light picking out every thread. Textile, tactile, exact. Undyed fibre, warm shadow.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the corner says edge; 1 was a straight edge only.

- **`wholecloth-formcluster.jpg`** — *woven without fold geometry and with static seating; primary, childless, and sealed.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A single very large sheet of plain undyed woven fabric stretched taut across a frame and filling the whole picture, photographed straight on in flat even light, its weave regular across the entire surface with no seam, no join, no fold, no crease, no pattern and no edge visible anywhere in frame, perfectly still, pale and almost without colour. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. painting, canvas art, famous artwork, gallery, frame edge, embroidery, print, logo.
  - **Deliberately the least eventful image on the roster.** *Nothing about it can be measured from here* is the entry, and a dramatic frame would assert access the record denies. Pair it with Selvage — same material, opposite fact.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 2 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the sheet fills the frame; 1 showed a tabletop with edges.

- **`what-the-record-refuses.jpg`** — *what is refused outright, what is kept but honestly priced.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A small meticulously kept store in a working theatre: open shelving of plain composite, everything squared away and nothing ticketed, labelled or numbered, holding ordinary things of the century, plain sealed matte housings of several sizes, folded cloth, unlabelled jars, masks, cups, coils of plain line, and one shelf standing conspicuously and deliberately empty and swept clean while every other shelf is full. Plain worklight, no fitting visible. Ordered, unsentimental, faintly witty. Pale composite, dust, one bare clean shelf. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **The empty shelf is the page.** A refusal that is *filed* rather than merely absent.
  - **Generated 7 October 2026 and held**, variation 1 chosen on the sheet (no light fitting in frame; 2 showed fluorescent tubes.), then held at Dermot's two rules of the same evening: a storeroom of hats, jars and baskets reads as a 20th-century attic; re-prompt with the shelves' contents a century on. Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the empty column reads at once; 2 lost it in clutter.

- **`what-a-life-is-built-from.jpg`** — *the four requirements recur on every surveyed world; not one of the solutions does.*
  *(Prompted 5 October 2026. The first of a pair with `what-a-mind-is-carried-by.jpg` below: same station, same night, same light and film. The anchor is the page's own method, four unlike things doing one job, and the four are the page's cases — Prismere's glass filament, Sardain's cold solvent, a composition, a mineral heredity — named here and on no picture. Dishes of stone rather than laboratory glass, so there is no surface a label could land on.)*
  References: `../dermot-cochran-photography/src/images/photos/fungi-on-a-mossy-stump.jpg`, `../dermot-cochran-photography/src/images/photos/clematis-seedheads.jpg`
  > Documentary photograph taken inside the world by a 29th-century camera, available light. A field bench in a survey hut on a cold world at night, seen from slightly above and to one side: four identical shallow dishes of plain dark stone in a row, each holding something alive that resembles none of the others. In the first, a loose tangle of glassy translucent filament with a faint green cast. In the second, a flat film with a skin rimed in frost, visibly cold, the stone around it misted. In the third, a single cloudy drop with no structure inside it at all, holding a clean curved edge against the dish. In the fourth, a chip of grey mineral with a faint living crust creeping across one face. Each thing keeps a clear boundary against its dish, and nothing else is on the bench: no tools, no vessels, no paper, no hands. Cold even light from one side, breath-frost along the bench edge, the hut wall a plain composite panel in shadow behind. Four unlike answers to one question, laid side by side. Photographic, 35 mm film look, natural grain, shallow depth of field, muted colour; use the reference images only for light, grain, colour and the texture of living things on a surface, and do not copy their subjects. Slate, frost, glass-green, one warm fleck in the mineral. No readable text, lettering, numerals, signage, labels or written characters of any script anywhere in frame; no glow, no bioluminescence, no screens, no instruments, no figures; no visible lamp or light fitting. Landscape orientation.
  - **Extra negative:** petri dish, laboratory glassware, test tube, specimen jar, microscope, pipette, label, gloved hand.
  - **Four, because the page is four requirements; unlike, because no solution recurs.** A frame of four similar samples would illustrate a laboratory, not the page.
  - **Delivered 5 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K, both reference frames sent), unretouched. Variation 1 put vapour over the frost dish, which is drama the page does not ask for.

- **`what-a-mind-is-carried-by.jpg`** — *nobody argues from carrier to standing; the survey finds a mind by meeting it, however long that takes.*
  *(Prompted 5 October 2026. The second of the pair: the same station, the same night, the bench's cold light moved to a table. The anchor is the page's practical content — the mind is met, not inspected, and the carrier can be anything — and the register is *Ask and It Will Be Reviewed*'s, affectionate and faintly funny: two parties to a conversation, one of them a box, and the meeting taken as seriously as any. The sealed housing with one indicator is the Iklix Varn precedent for a far-future machine that is not twentieth-century test gear; the cup is the page's last line.)*
  References: `../dermot-cochran-photography/src/images/photos/empty-bench-greenwich.jpg`
  > Documentary photograph taken inside the world by a 29th-century camera, available light. A small plain meeting room on a boundary station late in its night, seen from the doorway: one table of pale composite, and across it two places set for a conversation. On the near side an ordinary chair, pushed back a little as though someone has just sat down out of frame. On the far side there is no chair and nothing a chair would fit: a smooth matte sealed housing the size of a travelling chest rests on a low plinth, one small recessed indicator on its face and nothing else, no screen, no seams, no cables, no lights. On the table in front of it a plain cup of something warm, steaming, set there as a courtesy nobody needed. The room is otherwise bare: plain composite walls curving gently into the ceiling, soft even light from a concealed cove, a dark viewport with nothing in it. Patient, quiet, faintly funny, and the meeting taken as seriously as any. Photographic, 35 mm film look, natural grain, muted colour; use the reference image only for light, grain and the colour of a place where someone is expected, and do not copy its subject. Slate, bone-white composite, one warm thread of steam. No readable text, lettering, numerals, signage or written characters of any script anywhere in frame; no screens, monitors, holograms or glowing displays; no robot, android, humanoid machine, face, eyes, limbs or drone; no visible lamp or light fitting; no figures in frame. Landscape orientation.
  - **Extra negative:** robot, android, droid, humanoid machine, drone, quadcopter, glowing eyes, speaker grille, keyboard, control panel, cables, server rack.
  - **The box must not become a character.** A face, a lens that reads as an eye, or a limb turns the page's point inside out; the only sign that anyone is there is that a place was set.
  - **Delivered 5 October 2026**, variation 2 of 2 (same model and size, the one reference frame sent), **with one local repair: the indicator healed out** (a Poisson clone of the housing's own face over it, about 106×80 px at generation size). The model drew the indicator as a recessed latch, which reads as a thing to be opened and works against *sealed*; blank, the housing leaves the set place as the only sign that anyone is there. The steam came back distinctly orange, the prompt's *one warm thread* taken at its word, and is kept as the frame's warm note beside the mineral's fleck in the other half of the pair. **Ruled by Dermot the same day** (*Yes - option 2 agreed*, of three shown side by side: as generated, this one, and a version with the steam made neutral as well). Two departures from the prompt left as they are: the housing rests on a slab on the table rather than a plinth, and the back of a second chair shows at the far end.

#### Physics (4)

- **`dreams-across-the-interval.jpg`** — *a dreaming mind near a narrowed Interval registers a neighbour's bled templates.* The mechanism refuses a sender.
  > A single small window of a habitat cabin seen from inside in the middle of the night, the cabin dark and the bunk empty and unmade, and on the far wall a faint indistinct patterning of light that does not correspond to anything outside the window. No figure, nobody sleeping, nothing at the window. Very dark, very quiet. Deep blue-black with one dim uncertain pale shape.
  - **Extra negative:** face, figure, silhouette, apparition, eyes, creature, anything that could read as a sender.
  - *A dream is never evidence about who sent it — nothing did.* The prompt has to hold that line, so the room is empty in both directions.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the patterning on the wall; 1 had a lit lamp and a forest outside the window.

- **`generalised-quantum-mechanics.jpg`** — *the laboratory theory survives exactly as its kernel, and everything Etheric enters as extension terms.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A well-used bench-top physics apparatus of entirely ordinary laboratory kind, a rigid optical bench, mounted posts and one sealed matte enclosure, clean, calibrated and clamped down, on a stone bench in a plain university laboratory, the room falling into soft darkness behind it, flat daylight from a high window. Every surface on the apparatus is plain: no stickers, no labels, no tags, no warning strips, no notebook, no cable except one plain lead. Brushed alloy, black anodising, grey stone. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **The kernel is unamended, so the instrument is ordinary.** Adding anything strange to the apparatus would illustrate the opposite of the entry.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: one lead and nothing labelled; 2 had glassware behind.

- **`quantum-computing-and-the-cavern-constraint.jpg`** — *deep under sealed rock and nowhere else*, and *fast machines rather than oracles.*
  > A deep rock cavern, dry and sealed, its bare stone walls curving away, holding a single compact plain-cased machine cabinet standing alone on a level plinth at the centre with a great deal of empty floor around it. The rock is the subject and the machine is small in it. Cool even light with no visible source, deep quiet. No cables in shot, no racks, no personnel. Grey stone, matte casing, black shadow.
  - **Extra negative:** glowing chandelier cryostat, gold-plated quantum computer, cables, wires, blue glow, server racks.
  - The gold-cryostat image is the single strongest default and it is wrong twice — it is the popular photograph, and it is a glowing object in a page about shielding.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: more empty floor around the cabinet.

- **`the-scope-of-physical-law.jpg`** — *a physics claim is well-formed only at its level. Nothing physical is Ensemble-wide.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. Six plain boxes of graduated size standing apart in a row on a long plain matte composite work surface, not nested, each made to a different standard and none matching, three of worn wood and three of a pale seamless composite, flat daylight. Nothing else on the surface but one sealed matte housing with a single small unlit indicator at the far end. Ordinary, exact. Warm wood, pale composite, grey surface. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Apart rather than nested**, deliberately: nesting would assert that the smaller scopes sit inside the larger as containers, which is not what the entry says.
  - **Generated 7 October 2026 and held**, variation 2 chosen on the sheet (the six sit apart and graduated; 1 was five and uneven.), then held at Dermot's two rules of the same evening: a period woodworking bench; re-prompt so the bench, not the boxes, carries the century. Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the six read as six standards, the housing at the end; 2 made them tall and uneven.

#### Institutions (14)

- **`communion-of-the-called.jpg`** — *secular by charter, not its people*; answerable to no rank.
  > A small plain room aboard a space installation set out for a gathering that has ended: a dozen mismatched chairs pulled into a rough circle, a folding table with cups on it, the room empty. Nothing on the walls, no ornament, no symbol of any kind visible. Warm ordinary light. Companionable and entirely unofficial. Warm neutrals, worn deck.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: bare walls; 2 had panels and fittings on the wall.

- **`cross-biosphere-taxonomy.jpg`** — *frames, which describe structure and claim no ancestry, and lineages, which claim ancestry and never leave one world.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A long bare bench holding four preserved body-frames of clearly unrelated origin laid side by side, none of them an animal of Earth and none built on a spine: a rigid mineral lattice of struts and nodes, a soft segmented hydrostatic body with no bones at all, a radial body with five-fold symmetry, and a jointed shell frame of plates, each roughly a metre long, each unmistakably not a variation of the others, every one a frame that describes structure and claims no ancestry. Nothing else on the bench: no card, no label, no plaque, no case, no mount plate. Cool even daylight. Rigorous and slightly uncanny. Bone-pale, slate grey, dull bench. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. skeleton, skull, ribcage, vertebrae, spine, cat, monkey, bird, lizard, human skeleton, museum, glass case.
  - **Delivered 7 October 2026 and withdrawn the same evening**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no human skeleton; 2 sat one on a bench like a prop.
  - **Withdrawn, 7 October 2026** (Dermot, verbatim: *"Aliens would not have skeletons like terrestrial veterbrates."*): the five skeletons were a cat, a monkey, a bird and a lizard, every one a terrestrial vertebrate, so the picture asserted the kinship the page exists to refuse. File removed, page bare. Re-prompt as frames that share no plan: a lattice, a segmented hydrostat, a radial body, nothing with a spine, and nothing that a museum would shelve beside a cat.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 2 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: all four frames of the prompt, nothing spined; 1 had three and one read as an isopod.

- **`frontier-transformation-protocols.jpg`** — *slowly, incompletely, and never on a Kernel-compliant system's say-so alone.*
  > A wide view across a frontier world's untouched valley at dawn — native vegetation, standing water, bare rock — with a single small survey stake driven at the near edge of the frame and nothing else built anywhere in sight. Enormous, intact, and observed rather than begun. Cold clear light, long shadows. Ochre, grey-green, pale sky.
  - **One stake and nothing else.** The whole clause is that the world gets time.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the plain post; 2 carried a tag that could have been read.

- **`habitat-threshold.jpg`** — *the charter population line above which a settlement passes out of jurisdiction entirely.*
  > A large orbital habitat seen from outside at a middle distance, whole and self-contained against the black, its inhabited ring lit from within along its length, no vessel docked and no other structure anywhere near it. Nothing arriving, nothing attending. Self-sufficient and slightly solitary. Steel grey, warm interior glow through the ring windows, deep black.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no lettering; 1 carried a painted name.

- **`heritable-modification-protocols.jpg`** — *between a change that ends with the body carrying it and a change that breeds.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A plain laboratory bench holding two identical sealed matte cylinders a hand's width apart, one standing inside a shallow plain tray and the other on the bare bench beside it, everything else about them the same, flat clinical daylight, nothing else in frame. The cylinders are unlabelled and unmarked, opaque, with one small unlit recessed indicator each. White, brushed steel, matte grey. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Two identical things on opposite sides of a line** is the entry in one image.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: unlabelled and plain; the tray is the only difference.

- **`monasteries-of-mars.jpg`** — *scattered across Mars's open, thin-atmosphere terrain, deliberately unaffiliated.*
  > A small low stone-built enclosure alone on open rust-coloured Martian ground at evening, sealed and plain, its walls the same material as the ground it stands on, with an enormous empty landscape running to the horizon in every direction and no road, track, vehicle or other structure anywhere. Thin pale sky, long shadow, one small sealed doorway. Rust, ochre, deep violet sky. Austere and unlonely.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: square and alone; 2 was round and busier.

- **`planetary-liaisons-and-recruiters.jpg`** — *the berth a Ranger moves to when front-line work stops being possible without leaving the force.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A modest ground-floor office on an ordinary inhabited world, its door standing open onto a quiet street, one plain desk inside and two chairs on the public side of it, a person's coat on a hook, nobody in frame, warm daylight from the street reaching a little way in. The street beyond shows only blank plastered walls and a doorway, no shop fronts, no signs, no awnings, no vehicles, no bicycle. One thing in frame says the century: a sealed plain matte housing with a single small unlit recessed indicator, no dials and no screen, honest seams, a material that is not quite the old one. Warm plaster, worn wood. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the blank street and the housing on the desk; 2 was a shopfront.

- **`shore-leave-and-neutrality.jpg`** — *an officer on personal leave is the hardest case the neutrality clause has to cover.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A quiet civilian bar on a habitat concourse in the middle of the afternoon, nearly empty, one stool at the counter pulled out with a half-finished drink and a folded jacket left on it, the seat vacant, warm low light from behind the counter with no fitting visible. There is no chalkboard, no menu, no bottles with labels, only plain unlabelled bottles and glasses on plain shelves; the concourse beyond the opening is plain matte panels. Warm brown, brass, grey deck. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **The officer is absent from the frame** because the entry is about which of two people is sitting there, and the record has never decided.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no chalkboard and no labels; 2 had people in the corridor.

- **`solar-system-concord.jpg`** — *the compact that every government since has enforced, and none has owned.*
  *(Revised 11 October 2026: Dermot, *"the Solar System Concord looks more a church prayer meeting"*: stone walls, a timber roof and rush-seat chairs read as a chapter hall of the past. The ring with no head is kept; the room is now a kept civil chamber on Mars in the 29th century.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a large plain civil assembly chamber on Mars, entirely empty of people, seen from one side and a little above. A single ring of identical unmarked desks with matching chairs, all of one smooth pale composite and quiet grey upholstery, no head of table, no dais, no throne, no seat of honour, no flag, crest or emblem anywhere. The room is seamless pale composite, walls meeting floor and ceiling in soft rounded coving, a floor of matte resilient surface, light from long flush slots and from one long low window along the far wall that looks out on a pale ochre Martian plain under a butterscotch sky, the glass set flush and the view plainly another world. Deliberately unimpressive, deliberately symmetrical, kept and clean, a working room of ordinary civil business. Photographed, not rendered: a real wide lens, high-ISO grain, slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: stone walls, exposed brick, timber roof beams, wooden rush-seat chairs, church hall, chapel, pews, altar, lectern, candles, cross or any devotional object, stained glass; readable text, lettering, numerals, signage, flags, emblems or nameplates anywhere; screens, monitors, consoles, microphones on stalks, glowing panels, holograms; visible lamp or light fitting; 3D render, CGI, architectural visualisation, glossy concept art.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the single ring; 2 doubled it.
  - **Re-made 11 October 2026**, variation 1 of 2: the unbroken ring in a coved Mars chamber with the plain outside; 2 broke the ring and lit the ceiling with office panels.

- **`star-rangers-frontier-corps.jpg`** — *whose mandate on every world it serves is designed to end.*
  > A single set of boot tracks crossing wet ground away from the camera toward a small frontier settlement in the middle distance, the settlement lit and busy at dusk, the tracks leading away from it and out of frame at the near edge. Nobody in shot. Cold blue evening with the settlement warm in the distance. Departure as the achievement. Grey-blue, wet ground, distant amber.
  - **The best single image in this set**, and it is entirely the entry's own idea.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the track leads in; 2 was mud without a road.

- **`star-rangers-navigation-corps.jpg`** — *route certificates expire when hull certificates do not.*
  > A navigational beacon buoy alone in deep space, plain and unlit and slightly out of alignment with the corridor it marks, the starfield behind it. Nothing else in frame — no ship, no station, no route line. Small, exact, and quietly out of date. Matte grey against black, one cold highlight.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no lettering; 1 was marked.

- **`star-rangers-science-corps.jpg`** — *interprets what the Survey Corps collects.*
  > A plain working room aboard an installation where a long bench holds a single sealed sample container and, beside it, a stack of shut plain-bound record volumes; a chair pushed back from the bench. Nobody present. The specimen is unremarkable and the record beside it is thick. Cool even light. Grey, warm binding cloth, glass.
  - **The stack is taller than the specimen is interesting**, which is the corps.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no notices or instruments; 1 was covered in labels and an oscilloscope.

- **`the-commonwealth.jpg`** — *thin by design.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A modest meeting room in an orbital habitat with a long plain table set for perhaps ten, most chairs empty and pushed in, three cups at one end where a short conversation happened, a wide window onto the habitat's interior curve with terraces and a river far below. The walls are bare: no screen, no clock, no whiteboard, no picture, no panel. Warm neutrals, pale daylight. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: bare walls and the curve in the window; 2 had a lit ceiling and a second table.

- **`the-institute.jpg`** — *accepts the instruments and declines the cosmology.*
  > A plain research office with one bare wall, a working desk, and a single well-made instrument case standing closed on a side table. On the desk, one shut notebook squared to the edge, and a chair turned to face the wall rather than the window. Flat daylight, nothing decorative anywhere, no diagrams, no display. Sceptical, spare, unfriendly to enthusiasm. Grey, black, one warm wood surface.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the plain case; 2 had a guitar case.

#### Technology (4)

- **`eden-ring-rail.jpg`** — *the ordinary, AI-scheduled way most residents actually move around the ring.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A commuter rail platform on the inner surface of a great orbital habitat in the early morning, a plain unmarked matte-grey train standing at the platform with its doors open, a handful of residents boarding without hurry seen from behind, the habitat's green curved landscape rising away and overhead, soft daylight from the habitat's light band. No signs, no destination boards, no route maps, no numbers on the train, no posters, no screens; the platform's edge marked only by a plain painted stripe. Green, pale grey, warm morning. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 2 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no signs or boards; the painted stripe is the only mark.

- **`fold-transit-catastrophic-failure.jpg`** — *the three accounts settled space gives of the same wreckage.*
  > A single recovered fragment of hull plate laid flat on a bare bench under even light, its torn edge presented to the camera, clean and dry and quite small. Nothing else on the bench at all — no tag, no label, no card, no marker. The room around it dark. Sober and undramatic. Grey metal, black shadow.
  - **Extra negative:** explosion, fire, debris field, wreck, dramatic destruction, ship breaking apart.
  - The entry is about how a loss is *classified*, not about the loss.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the shear is cleaner; 2 was a torn lump.

- **`kalypsis-dawn.jpg`** — *a boundary zone cannot be shielded against, only carried better references into.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. The Kalypsis Dawn, an unarmed Lee-class vessel, holding station in ordinary starfield, seen three-quarter from ahead: a plain spine about three hundred metres long carrying two short counter-rotating drums amidships, each about sixty metres across, so the hull as a whole has no net spin; flat radiator panels aft between the drums and a plain unlit drive; a sealed scaffold generator forward on the spine as a plain matte housing; a small docking structure at the bow; no weapon mounts, no aggressive line, no windows but a few small dark ports, no working lights, the hull dull grey and unmarked, lit from one side by a distant sun. Calm, capable, unthreatening. Pale grey hull, deep black, cold starlight. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. glazed cockpit, glazed nose, window band, engine glow, lit flank, sleek hull, fins, wings, antenna forest, painted name, nebula colours, lens flare.
  - **The lee is the name**, so the silhouette should read as shelter rather than force. No cannon, no prow, no wings.
  - **Generated 7 October 2026 and held**, variation 2 chosen on the sheet (no lettering; 1 carried a name.), then held at Dermot's two rules of the same evening: spacecraft: a glazed forward cabin and a lit flank are the stock image, not a design; re-prompt from what the page says the ship is for. Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: spine, two drums, radiators and bow docking all read; 2's forward block was bulky.

- **`orbital-compute-complexes.jpg`** — *classical machines without exception, since no quantum computer flies.*
  > A very large orbital structure above a settled world, plainly industrial and entirely without windows, its whole surface given over to flat radiator panels edge-on to the sun and running away in ranks. The planet below fills the lower frame. Hard sunlight, black shadow, no glow anywhere. Functional to the point of austerity. White radiator faces, black structure, blue-grey world.
  - **Radiators, not lights.** Heat rejection is what a compute complex actually looks like, and it keeps the frame off the glowing-datacentre default.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the plain geometry; 2 was more structure than radiator.

#### Factions (3)

- **`cairn-trust.jpg`** — *a marker is of no use to the one who set it.*
  > A cairn of stacked flat stones standing on a high bare ridge on an unfamiliar world at first light, carefully built and weathered, with an empty valley beyond it and no track, no building and nobody in sight. Behind it the ridge continues into distance. Cold clear light, long shadow from the stack. Purposeful and unattended. Grey stone, pale gold light, cold blue distance.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the cairn sits on the summit; 1 sat below the ridge.

- **`halvern-combine.jpg`** — *a permission outlives the power that granted it.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A tall sealed plain matte storage cabinet standing open in an otherwise emptied room, its interior holding one squared stack of plain document wallets, every one shut and tied closed, none open and no loose paper anywhere, and nothing else; the cabinet has no maker's plate, no dial and no lettering, only a single small unlit recessed indicator by its latch and honest seams. The room is stripped: pale rectangles on the wall where things hung, dust, a bare floor, flat daylight through an uncurtained window. The institution has gone and the paper has not. Dull grey-green composite, dust. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Generated 7 October 2026 and held** (both variations carried a maker's plate, and then Dermot's rule of the same evening applied too): a 20th-century safe in a stripped room with nothing to say the century; re-prompt with one sealed plain housing or seam that does. Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the stack sits squarely on one shelf and the indicator shows; 2 crammed the stack upright.

- **`hyperfold-yield-combine.jpg`** — *everything about it was lawful*, and it ended at Dock Seven.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. An industrial rendering platform in open space, plain and well maintained and entirely intact, holding station off a distant station's few warm lights: an open truss carrying tank clusters, transfer booms and docking cradles, all orderly, and above everything a field of flat radiator panels far larger than the rest of the plant combined, deployed edge-on to hard sunlight from one side; a small crewed drum at one end, unlit; no painted name, no lettering, no lights but a single cradle's. Nothing dramatic, nothing sinister, nothing damaged. Cold grey plant, black space, distant warm station. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. glazed cockpit, glazed nose, window band, engine glow, lit flank, sleek hull, fins, wings, antenna forest, painted name, nebula colours, lens flare.
  - **Extra negative:** creature, tentacle, dragon, aperture, portal, rift, destruction, wreckage.
  - **Generated 7 October 2026 and held**, variation 1 chosen on the sheet (no painted name; 2 carried one. Tank labels are too small to read at site size and are left.), then held at Dermot's two rules of the same evening: spacecraft: the platform's plant is plausible but undesigned; re-prompt from the page's process (what a rendering platform renders, and where the heat goes). Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 2 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the radiator field dominates as the sheet says; 1's was one panel.

#### Locations (5)

- **`planets/cirrane.jpg`** — *the only Federation member world with no surface.*
  > The upper atmosphere of a great gas giant seen from within it, banded cloud layers running away in enormous horizontal strata above and below, sunlight coming from one side through miles of haze, and no ground, no horizon and no solid object anywhere in frame. Vast, layered, entirely open. Ochre, cream, deep amber shadow.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the brighter bands; 1 was darker at the foot.

- **`planets/corryn.jpg`** — the ringed gas giant *whose rings pulse and hum in patterns.*
  > A gas giant with a complex ring system seen from the night side of a nearby habitable world, low above the horizon and dominating the sky, its rings edge-lit and carrying faint patterned colour in blues, purples and greens along their length. In the foreground the dark silhouette of a hillside with spiral-form vegetation against the sky. Quiet, enormous, patterned. Deep blue-black, cold ring colour, black foreground.
  - **Patterned, never addressed.** No face in the rings, nothing that reads as a signal aimed at the viewer.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the ridge reads better; 2 had a second moon that the page does not.

- **`planets/fliade.jpg`** — *biodiversity lives underground.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light only, 16:9 landscape: a wide view down the throat of an enormous deep natural cavern beneath the frozen surface of a cold world, the passage receding into dark. The only light is the world's own: bioluminescent fungi coating the rock walls and the floor in soft amber and blue-green, a dim, steady glow with no cycle to it. The growth is real fungal growth, seen close and far: thin bracket shelves stacked on the wet stone with fine gills beneath, pale threads and mats spreading across mineral silt, clusters of small caps on slender stalks, soft lichen-like crusts, every patch irregular and uneven, some of it dead and brown at the edges, none of it symmetrical or sculpted. Warm humid air, beads of condensation on the black rock, a thin haze in the light, a trickle of mineral water across the floor, pale silt with a few loose stones. No opening to the sky, no equipment, no figures, no animals. Cold, crowded, alive and quietly beautiful. Muted palette, amber, blue-green and black. Photographed, not rendered: a real camera in a real cave, high-ISO grain heavier in the shadows, a fast wide lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, the faint light falling off as real light does, muted natural colour, the small untidy imperfections a real photograph keeps. Negative: readable text, lettering, numerals, signage or written characters of any script anywhere in frame; torches, lamps, electric lights, light fittings, sunlight, sky; people, animals, creatures; crystals, glowing gems, magical sparkle, neon, saturated fantasy glow, cartoon mushrooms, giant mushrooms, lava. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, clay or plasticine sculpture, sculpted forms, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, fantasy illustration. Landscape orientation.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the throat recedes; 2 was a wall.
  - **Re-prompted 11 October 2026** (photorealism audit, batch 1; cause 2, the growth read as sculpted clay): opens as a documentary photograph, takes the page's own light (*soft amber and blue-green*, `src/lore/planets/fliade.md`, *Below the Roof*) in place of the old grey-green, describes the growth as real fungus, and carries the lens, grain and render negatives of the Pandoid prompts. The previous prompt is in git.
  - **Filed 11 October 2026**, round 1 of the re-prompt, **variation 1**, 1600×893 at finish strength 1 (not healed): real fungal shelves and threads, amber and blue-green, a cavern's scale; 2's caps read miniature, tilt-shift. Flaw in 1: a stalagmite at the right edge has the outline of a small figure.

- **`planets/verdance.jpg`** — *four climate zones, each hosting a distinct native civilization.*
  > A high aerial view across a world where four utterly different landscapes meet within sight of one another — cold forest, open savanna, wetland, and high dry upland — the transitions clearly visible, each with its own distinct built settlement small in the distance. Clear midday light. Extraordinary range held in one frame. Full natural colour, wide horizon.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no place-name lettering; 1 carried labels.

- **`umbral-moon.jpg`** — *a small dark body at Earth–Moon L5, held by ordinary celestial mechanics.*
  > A small, dark, irregular airless body in space seen close and lit hard from one side, its far limb in complete blackness, the Earth and the Moon both visible together as small distant discs in the same frame at a great distance. Nothing built on it, nothing orbiting it, nothing strange about it. Cold, plain, unremarkable. Charcoal rock, hard white light, black.
  - **Nothing strange about the moon**, which is the fix that entry made: the flexure merely shares the address.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the pair is far and small; 1 had a bright galaxy behind.

#### Universes (1)

- **`universes/deadwater.jpg`** — *no corridor has ever formed there, and every journey between its stars is sublight.*
  > A deep-space starfield of ordinary appearance, seen wide, with a single small sublight vessel crossing it far off and plainly a very long way from anything. No corridor, no aperture, no distortion, no structure. The emptiness is the subject and it is entirely calm. Black, cold white points, one dim hull.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the dark shape is lower and plainer.

#### Species (1)

- **`ollune.jpg`** — *never stood on a surface, never lit a fire.*
  > Several large, delicate, entirely non-humanoid atmospheric beings holding position in the sunlit upper cloud of a gas giant, seen at middle distance, broad and translucent and built for buoyancy rather than for walking, with no legs, no feet and nothing that could grip. Banded cloud running away behind and below them. Serene, alien, at home. Amber and cream cloud, pale translucent forms.
  - **Extra negative:** wings, faces, eyes, limbs, hands, humanoid form, jellyfish cliché with trailing tentacles.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: three at different distances; 1 bunched them.

#### Culture (3)

- **`narrative-works-and-their-adaptation.jpg`** — *a spine of scenes carrying several viewpoints, with its reference apparatus attached.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A reader's table holding one bound volume lying shut and flat with a ribbon marker trailing from it and, ranged around it, four slimmer companion volumes standing shut on their edges, a set that plainly belongs together and is plainly not one book, every book closed, warm reading light from a window. Every spine and cover is plain cloth with no title, no lettering, no gilt and no device. Warm wood, cloth binding, pale paper. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: every spine plain; 2 had coloured and lettered spines.

- **`cill-aoife-devotion.jpg`** — the devotion *carried into space as living devotion by the Currach Fleet.* Filed under this name rather than `saint-aoife.jpg` — see the collision note above.
  > A small plain shrine niche set into the bulkhead of an old colony vessel's corridor: a shallow recess holding a few sprigs of blackthorn in water and a worn stone the size of a fist, the metal around it polished bright by generations of hands passing. Nothing ornate, no image, no figure, no candle. Ordinary corridor light. Devotion as an unbroken habit rather than an occasion. Dull alloy, wet green, one bright worn patch.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no stencilled lettering; 1 carried a section code.

- **`star-rangers-proverbs-and-maxims.jpg`** — *taught in the college, inadmissible in the log.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A long plain bench in a training college lecture room, seen close, its matte composite surface marked by decades of use, a plain shut cloth-bound record book set squarely on it and beside it one sealed matte housing with a single small unlit indicator, nothing else, cold daylight from a high window. Two registers, one bench. Scarred pale composite, grey light, dark binding. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Generated 7 October 2026 and held**, variation 2 chosen on the sheet (no lettering on the cover; 1 was a titled register with carved initials.), then held at Dermot's two rules of the same evening: a Victorian schoolroom; re-prompt with the Academy's own room. Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the housing says the century; 2 was a period school desk.

#### Records (2)

- **`plainmark.jpg`** — *stacked colour bands carrying chevrons, rings, tally strokes and lozenges.*
  > A close view of a heavy hatch frame in a working orbital habitat, carrying a vertical stack of flat painted colour bands with simple geometric marks on them — chevrons, plain rings, short tally strokes, lozenges — crisply painted, hard-wearing, and containing no letters or numerals of any kind. The corridor beyond is out of focus. Utilitarian and oddly handsome. Saturated flat colour against grey alloy.
  - **The one prompt in the set whose subject cannot be moved.** Everywhere else the 19 August fix was to change the scene (see *the lettering ban cannot beat the scene* under Prompt craft); here the marks **are** the entry, so the scene stays and the handling has to differ. Two things do the work: the prompt describes the marks purely as **painted geometric shapes** and never as a marking system, a code or a standard — naming the function is what summons letters — and **nothing else in frame is markable**, the corridor beyond being thrown out of focus.
  - **Check at 4× without fail**, and if glyphs appear anyway the next move is to crop tighter onto a single band rather than to add negatives. A band of flat colour with one chevron on it has nowhere to put a word.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the column reads clean against the wheel hatch; 2 had a person and more clutter. The cable density is the generator's and stays.

- **`timekeeping-and-the-common-record.jpg`** — *time distributed by courier in a civilisation without faster-than-light communication.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A small hardened transit case standing alone on a plain bench in a ship's compartment, closed and clamped down and secured with a plain strap, plainly precious and plainly unremarkable to look at, cool even light, nothing else in frame. The case carries no label, tag, stencil or plate; the compartment's walls are plain matte panels with honest seams and no pipes, gauges or notices. Matte case, dull alloy, grey bench. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: no labels, no pipes, no gauge; 2 stood the case on end.

#### History (3)

- **`formation-of-star-rangers.jpg`** — *the moment the Military Space Command's institutional failure became irreversible.*
  > A long negotiating table in a plain hall, seen from one end, strewn with the aftermath of many days: pushed-back chairs at irregular angles, cups and glasses left where they stood, one chair overturned and not righted. Nothing on the table but the cups — no paper, no folder, no document anywhere in frame. The room empty and the work finished. Grey late light through tall windows. Exhausted and consequential. Cool grey, pale wood, cold daylight.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: cool light and bare walls; 2 had signs and a notice.

- **`the-generation-ark-era.jpg`** — *the odds of arriving were the odds of an early Norse or Irish open-boat ocean crossing.*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A Currach-era generation ark crossing deep space, seen small in a very wide frame and entirely alone, no destination visible, no star close: a long dull hull built as a spine with a wide drum amidships, the drum about two hundred metres across and most of the hull's length, plainly a cylinder that turns about the ship's long axis, its surface patched in many slightly different greys from a long passage and with no window band, no markings and nothing lit; flat radiator panels fixed to the spine fore and aft of the drum, edge-on to a far faint sun; a small docking structure at the forward end; nothing glowing at the stern. Cold white points, dull hull, black. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. glazed cockpit, glazed nose, window band, engine glow, lit flank, sleek hull, fins, wings, antenna forest, painted name, nebula colours, lens flare.
  - **Generated 7 October 2026 and held**, variation 2 chosen on the sheet (no readable name; 1 carried one. A faint mark on the hull is below site size.), then held at Dermot's two rules of the same evening: spacecraft: the hull shows no spin structure and no radiators; re-prompt from the record's own principles (a coasting ark spins for gravity, its axis along its line of travel; nothing is lit that need not be). Nothing filed; the files stay in `image-out/` until the re-prompt runs.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 2 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the drum and the radiators read, nothing lit; 1 framed it through a window with furniture in front.

- **`what-nobody-certifies.jpg`** — hulls, routes, people and minds are certified, and *nothing at all certifies a permission to be somewhere.*
  > A plain office wall carrying five identical shallow mounting niches in a level row. Four hold a small stamped metal seal hanging on a short cord — plain discs bearing only a struck geometric device, no writing of any kind. The fifth niche is empty and holds nothing at all. Flat even daylight, nothing else in frame. Bureaucratic, deliberate, quietly pointed. Pale wall, dull metal, one empty recess.
  - **Seals rather than certificates — rewritten 19 August.** The first version asked for *four framed certificates, each one blank of any writing*, the exact self-defeating shape #415 disproved: a certificate's purpose is to carry writing, so the model draws the writing. A struck metal seal keeps the whole idea — four things certified, a fifth with nothing — and removes the writing surface instead of arguing with it.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the empty cord is the page; 2 left the fifth niche bare.

#### Entities (1)

- **`predatory-entities.jpg`** — *classified by sapience and feeding method*, and governed by the tone line.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A vacated compartment aboard a habitat, small and ordinary, its door standing open onto an empty corridor, one plain chair turned away from the door as if someone had been sitting with their back to it, a cup and a folded cloth left exactly where someone set them down, a bunk made, nothing disturbed, nothing broken, nothing taken. Nobody in frame and no sign of struggle, injury or violence anywhere. Cool even light from the corridor, the compartment's own light off. What is wrong is only that the chair faces the wall. Grey composite, pale cloth, one dark doorway. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. shoes, boots, blood, bones, claw marks, broken furniture, creature, shadow figure, fog, mist.
  - **Extra negative:** creature, monster, teeth, claws, blood, gore, corpse, horror, body, violence, glowing eyes, shadow figure.
  - **Superseded — use Open work 6's brief instead, 19 August.** That section already carried a prompt for this file and it is the better one: *a vacated habitat compartment, one chair turned away from the open door, a personal effect left exactly where someone set it down.* Same discipline, held indoors and in-setting, where the clearing above is neither. The frame above is kept only as a second option if the interior refuses to read.
  - **Hint at the dark fact rather than depicting it**, exactly as the tone line requires. Nothing in frame is frightening; what is frightening is what the frame implies, and that is the setting's whole register.
  - **Delivered 7 October 2026 and withdrawn the same evening**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: colder light; 1 was warmer than the page.
  - **Withdrawn, 7 October 2026** (Dermot, verbatim: *"Predatory entities do not literally eat people as that image implied."*): boots and a folded blanket beside a ring in the grass read as a body taken, and the page's entities feed on nothing of the kind. The file is removed and the page is bare again. Re-prompt from the page's own feeding method, with nothing in frame that a predator of bodies would leave; the empty-compartment brief in Open work 6 is the better start.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the chair faces the wall and nothing else is wrong; 2 faced the chair out.

#### Timeline Notes (1)

- **`universal-cosmic-stardate.jpg`** — *a paper timescale kept by an ensemble of clocks no institution owns.*
  > A plain room holding six identical sealed instrument housings on separate isolated plinths, well spaced apart, each one unmarked and giving nothing away, in a space that is plainly kept very still. Cool even light, no cables in shot, no readouts. The agreement between them is the instrument and none of them is it. Matte white, grey stone, deep shadow.

---

**Checking these on return.** Four carry a default strong enough to fail quietly:
**`quantum-computing-and-the-cavern-constraint`** (the gold cryostat),
**`plainmark`** (gibberish lettering — inspect at 4×),
**`predatory-entities`** (the tone line, in both directions: a monster fails it and
so does a frame with nothing implied), and **`ollune`** (the trailing-tentacle
jellyfish). Beyond those, the set's own risk is sameness: a great many of these
are *a quiet room with one object in it*, which is the right answer individually
and would be a monotonous gallery. **Judge them as a page of thumbnails, not one
at a time**, and re-roll for variety rather than for quality where they cluster.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the even row against the wall; 2 scattered them in a hall.

#### Two delivered portraits versus the bureau uniform (19 August 2026)

Dermot's direction that **Eden's detectives are uniformed with rank insignia**
(`src/lore/eden-bureau-uniform.md`) postdates two delivered portraits that show
neither. Recorded here rather than acted on, because the runbook's own rule
settles it: **art is illustrative, the prose is canon — when the two disagree,
the entry wins and the art stays.**

**Both are fine, and the second one stopped being a problem the same day.** An
earlier version of this note called Albercombe's herringbone *not compatible*.
Dermot's follow-up — **the obligation is on the lower ranks** — settled it:
Albercombe is a Detective Inspector and Oyelaran a Superintendent, and neither is
required to wear the jacket at all.

- **`rasa-oyelaran.jpg`** — *a plain grey work jacket over a maroon shirt.* Fine
  twice over: she is senior enough not to be required, and a plain grey work
  jacket would pass as the uniform anyway.
- **`wendell-albercombe.jpg`** — *a worn herringbone jacket over an open blue
  shirt.* Fine. A Detective Inspector in civilian cloth is the entry working, not
  the entry contradicted.

**No alt text changes**, and none were needed. Both lines describe what their
files actually show, which is the one hard requirement.

**A future frame of a junior officer takes the uniform** — the jacket, and the
collar mark by rank — where a senior one need not, an undercover one must not,
and a Commissioner is never required to. Note the lettering trap while writing
any of them: the marks are strokes and blocks carrying **no letters and no
numerals**, and whether the jacket bears any identifying number is deliberately
unsettled in the entry, so no prompt should invent one.

**And the same caution now applies to Ranger frames.** Corps and branch badges
are canon as of the same direction, which puts a new device on a uniform that
previously had only tabs and plates — so a Ranger prompt may name a corps badge,
but it is **shapes only**, never a word, a monogram or an emblem with writing in
it.

### 5c. Outstanding lore illustrations — the 7 October 2026 audit (10 generated, 2 own frames, 3 cards)

Written 7 October 2026 under the rule recorded the same day (*Which pages
carry an image*, above): a place, a people, a thing or a sky gets an
illustration. All **16:9 landscape**, all present-day unless the page says
otherwise, every negative inside the blockquote. Two pages take Dermot's own
frames as they are and three institutions take emblem cards; those five have
no prompt here and are recorded under the intake of the same date. Photo-first
where a camera could have taken it: the references are his frames, sent as
image parts, for light and weather and never for content.

- **`greenward-habitat.jpg`** — *a single ring in a high circular orbit, holding two hundred and forty people, most of whom will never set foot on the world beneath them.*
  The anchor is the non-descent clause made visible: the ring and the world in one frame, and nothing between them. No surface detail that could be read as a landing site; the world is a green disc with weather on it and the ring is small against it.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A single slender habitat ring, plain matte grey composite with no markings, seen from a little way off against the limb of a living green world eight thousand kilometres below, the planet filling the lower half of the frame with cloud bands and a pale ocean, the ring small and exact in the upper half, in sunlight from the side so that one edge of the ring is lit and the rest is in its own shadow. The ring is unlit, no windows glowing, no lights on its hull. Deep black beyond. No ships, no shuttles, no docking structure, no people, no surface lights on the planet, no flags, no emblem, no lettering. Realistic orbital photograph, nothing dramatic, the distance between the two the whole subject. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. spaceship, shuttle, docking arm, lens flare, nebula, stars rendered large, sci-fi gloss.
  - **The clause is the picture.** A shuttle or a docking arm would say the ring can go down. It cannot.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the ring is small against the world, which is the physics; 2 made the ring larger than the planet.

- **`the-guest-ring.jpg`** — *the observation gallery is oriented for the drithle run, and that was not in the specification.*
  The Federation half of the instrument from its own side: not the ring's exterior but what its yard crews added. A long plain gallery, not built for a human body, with Drithane's night beyond the glazing and the debris band's silent sparks over snow. Nobody in frame; the occupants cannot be shown without inventing them.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. The interior of a long curved observation gallery aboard an orbital habitat built by a non-human people, the proportions wrong for a human: a ceiling too low and a floor too wide, the glazing running the full length at knee height, the surfaces pale, seamless and matte with no fittings, no seating, no rails, no markings. Beyond the glazing, below, the night side of a cold clear-skied world, snowbound valleys faintly moonlit by a single low bright moon, and across the dark sky a scatter of fine silent white streaks all travelling the same way. The gallery is empty. The only light is the moon and the streaks reflected on the pale floor. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. chairs, benches, consoles, handrails, airlock door, human-scale furniture, alien figure, creature, window frames with hardware.
  - **Wrong for a human, not alien-looking.** The proportions carry it; nothing is strange on purpose.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the proportions are wrong for a human and nothing is fitted; 2 had window frames with hardware.

- **`new-cotswolds.jpg`** — *a working agricultural country built by people who had an explicit brief about what they were carrying.*
  Honey limestone, drystone walls, steep stone-tile roofs, because that is what comes out of the fields. The light is a grey winter afternoon off Dermot's own field-edge frame: the page is kept in the past tense, and the picture is of a country that may well still be there.
  References: `../dermot-cochran-photography/src/images/photos/at-the-field-edge.jpg`
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A small village of honey-coloured limestone houses with steeply pitched roofs of stone tile, seen across two fields bounded by drystone walls of the same stone, late on a grey winter afternoon with low flat light from one side, no sun visible, bare hedgeless field edges, a lane between the walls, a few bare trees, smoke from no chimney. No people, no vehicles, no animals in the near field, no signs, no wires, no lamp posts, no church spire. The sky plain overcast. Realistic, still, a little too empty. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. thatched roof, half-timbering, cottage garden flowers, postcard, golden hour, cars, roads with markings, telegraph poles, spire.
  - **Stone tile and drystone, not thatch and hedge.** The page derives every feature from the rock; the prompt names the three that follow.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the lane between the walls leads in; 2 was flatter.

- **`winterbourne.jpg`** — *every one of those springs has a village on it, and the streams are dry gravel by late summer.*
  The scarp, the spring line and one winterbourne in its dry half of the year. Late summer, the down turf pale. Nothing on this world says it is not Earth, which is the page's point: a settlement pattern that is weather, given four hundred metres of rock and enough time.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A long chalk escarpment seen from its foot in late summer, the steep face rising on the left to a bare rounded down of pale dry turf, and at the foot of the scarp a line of three small villages of flint and chalk-block houses spaced a couple of kilometres apart along a single lane, each where a spring would come out. In the foreground a dry stream bed of pale gravel with no water in it, grass growing in its bed, a plank footbridge over nothing. Hazy warm light, a high thin sky. No people, no vehicles, no livestock near the camera, no wires, no signs. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. running water, waterfall, river, lush green lawn, mountain, pine forest, cars, road markings, telegraph poles, spire.
  - **Dry gravel, deliberately.** A winterbourne photographed running is a stream; photographed dry it is the name.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the stream bed is dry, which is the name; 2 had water running.

- **`quern.jpg`** — *between them the Millrace, where a small independent settlement lives behind the rain.*
  The terminator belt: sideways rain and lightning, low houses shaped so the wind slides off them, the standing storm's wall on one horizon and the night side's dark on the other. The storm's rain is stone, but at this distance rain is rain. Lit by the storm, not by any lamp.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A small settlement of a dozen very low rounded houses with no windows on the windward side, built of dark stone and streamlined like upturned boats, on a bare plain of wet black grit under a permanent sideways rain, seen from a little way off along the line of the wind. On the horizon to the right, a towering wall of storm cloud lit from within by continuous lightning, the light red-amber at its base; to the left the sky darkens to a clear starless black. Rain streaking across the frame horizontally. No people outside, no vehicles, no lights in the houses, no masts, no cables, no lettering. Realistic, bleak, still despite the wind. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. domes, glass, neon, towers, antennae, vehicles, figures, tornado, lava close up, sci-fi city.
  - **Low and windowless on one side.** The page says the houses are shaped for the wind; the prompt gives the shape and nothing futuristic.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the storm wall on one side and the dark on the other; 2 bunched the houses.

- **`ilveth.jpg`** — *they had been watched from horizon distance for three days before anyone knew the world was inhabited.*
  The one portrait of the kind the record allows: not humanoid, long and low, paired limbs under a segmented body, the forward third rising into a hooded sensory crown, broad vanes furled along the flank. Noon on Sardain is a bright dusk; the ground is old ice. Seen at a distance, half-turned, as the survey saw them.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A non-human being on a cold dim world at noon, which is no brighter than dusk, photographed from thirty metres across a plain of grey ancient ice under a small pale sun low in a dark violet sky. The being is long and low, about the length of two people lying end to end and no higher than a person's waist, its body in several segments carried close to the ground on five pairs of short limbs, the forward third rising into a hooded crown with no eyes, no face, no mouth visible, only a smooth cowl, and along each flank broad vascular vanes lying folded like furled sails. Its surface is the dull grey-blue of the ice it stands on. It is half turned, as if it had noticed the camera long before the camera noticed it. Nothing else on the plain. No lights, no equipment, no tracks but its own. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. humanoid, face, eyes, teeth, claws, insect, centipede, dragon, reptile scales, fur, glowing markings, mouth, fangs, menace.
  - **No face to read.** The page is explicit; a face would make it a creature. The crown is a cowl.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the vanes show and the crown has no face; 1 read as a hooded robe.

- **`the-tally.jpg`** — *the hull turned in toward the nearest body with water on it, a dark icy object of the scattered disc, and moored.*
  The Mooring, three centuries on: a generation ark's hull against a dark ice body in the outer dark, the Sun a bright star among stars. The hull is old and patched and plainly lived in, and nothing on it says where it came from.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A very old generation-ark hull moored to a dark icy body of the scattered disc, seen from a little way off in the faint light of a sun so distant it is only the brightest star in the field: the hull a long dull cylinder patched in many greys, its drum section held at the spin axis by a single plain mooring bearing on a stub tower of ice-anchored struts so that the drum can still turn, heavy lines running from the spine's ends to the surface; flat radiator panels along the spine; the ice grey-black and cratered filling the lower third of the frame. A few small dim windows along the drum, warm and steady, the only colour in the frame. No other ships, no docks, no antennae, no flags, no lettering. The dark is the subject. Negative: readable text, lettering, numerals, signage, labels, labelled containers, notices, posters, maps, book titles, maker's plates, nameplates, stencils, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, clocks with displays, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting, fluorescent tube or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. glazed cockpit, glazed nose, window band, engine glow, lit flank, sleek hull, fins, wings, antenna forest, painted name, nebula colours, lens flare. Earth, Saturn, rings.
  - **Warm windows, nothing else.** Three hundred years of ledgers are inside; the outside says only that people live there.
  - **Re-prompted 8 October 2026** in the house shape with the standing negative inside the blockquote (the 19 August entries carried none, which is how the lettering got through), and amended for the reason it was held; the previous prompt is in git.
  - **Delivered 8 October 2026**, variation 1 of 2 of the re-prompt (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the drum on its bearing and the lines to the surface; 2 was closer and lost the sun.

- **`eden-bureau-uniform.jpg`** — *the uniform exists to answer the question of a resident who has an officer at their door unannounced.*
  Seen from the resident's side: the jacket and its collar mark in a habitat doorway, the officer's face turned toward the deck and out of the frame's attention. The mark is one of the habitat's own painted door shapes, a plain geometric symbol, and it is the only thing the picture lets you read.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. Seen from inside a small habitat apartment looking out through its open door onto a curved residential deck: a civil detective in a plain single-breasted work jacket of one dull blue-grey colour over ordinary clothes, standing just outside the threshold, head turned to look along the deck so the face is in three-quarter profile and not toward the camera, hands empty and visible. At the jacket's collar one small painted geometric mark, a plain shape in one pale colour, the same kind of shape as the painted wayfinding marks on the deck's doorframes behind. The deck beyond is plain composite panels and matte surfaces, ordinary light, a few doors. No lettering, no numerals, no badge with words, no cap, no belt kit, no weapon. The jacket is a working garment, not a dress one. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. police cap, peaked cap, handcuffs, holster, baton, radio, body camera, epaulettes with insignia, badge with text, sunglasses.
  - **Read from the door, not from the parade ground.** The whole page turns on who the garment is read by.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the whole jacket and the collar mark in frame; 1 was cropped by the door.

- **`the-honest-dark.jpg`** — *the sky over a settlement looks much as it did before the settlement came.*
  Drithane's own catalogue entry: the drithle run over snowbound valleys under a single low bright moon, and below them a settlement of matte unlit buildings that throws nothing upward. The settlement is there so that the dark can be seen to be honest.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A small settlement of low dark buildings in a snowbound valley at night, photographed from the hillside above it under a single low bright moon, the roofs and the snow moonlit, not one window or street lamp lit, nothing on the ground glowing, and above it a clear sky crowded with stars across which a scatter of fine silent white streaks all travel the same way. Long exposure stillness, the stars sharp, the snow blue-grey, the buildings plain and unlit. No people, no vehicles, no masts, no lettering. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. street lights, lit windows, light pollution glow on the horizon, headlights, aurora, comet with a huge tail, Milky Way over-saturated, lens flare.
  - **Not one window.** Technology that does not announce itself is the mechanism; a lit window would be a lamp in the page about there being none.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: not one window lit; 2 had warmer buildings.

- **`where-the-weather-stops.jpg`** — *go down far enough on any world and the weather stops.*
  The literal line: from inside a cave, a few metres in, the weather visible at the mouth and absent in the frame. Snow blowing sideways past the opening; still air, dry stone and a plain survey instrument on its base inside. Nothing bioluminescent; this is any world's slow room, not Fliade's.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. From inside a dry rock cave a few metres from its mouth, looking out: the mouth a rough bright opening across which snow is blowing hard sideways in a grey daylight, and inside, in the near frame, still air, dry grey stone floor and walls with no ice and no water on them, and one small upright cylindrical survey instrument with a smooth matte casing standing on its base on the floor, nothing on it lit. The contrast of the moving weather outside and the stillness inside is the subject. No people, no lamps, no tracks, no equipment but the one instrument, no lettering, no bones, no paintings on the wall. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. stalactites dripping, underground lake, glowing fungi, crystals, torch beam, cave paintings, skeletons, bats, treasure, mist inside the cave.
  - **Still inside, moving outside.** One physical fact, stated as geometry across the frame.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the snow is moving past the mouth; 2 was calm outside.

- **`canonical-glossary-and-migration-guide.jpg`** — *An archivist with a red pencil can change how a civilization remembers itself.*
  Also the Glossary page's hero; the two share the file (resolved 15 August 2026, above). Replaces the stock open book on white, which claimed nothing, dated nothing and sat letterboxed in the hero band; Dermot sent the Glossary page as a screenshot on 8 October 2026 and the swap the audit had left for an opportunity was made. The archivist's own desk in the record's present: a bound reference volume open at a page that cannot be read, a red pencil in the gutter, and one sealed thing that says the century.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, muted colour, documentary realism, nothing dramatic, realistic, still, slightly too empty. A heavy bound reference volume lying open on a plain pale worktable in a quiet archive reading room, photographed from a low oblique angle along the table so that the open pages are foreshortened and nothing on them can be read, the pages faintly ruled in columns, a short red pencil lying in the gutter of the spine. Beside the book, resting flat on the table, a small sealed plain housing of pale matte composite with no screen and no markings, a single tiny steady indicator at one corner, the only artificial light in the frame. Soft grey daylight from a high window off to one side. The far wall out of focus: plain shelving of identical unmarked spines. No people, no hands. Realistic, still, a little too empty. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. white background, cut-out, product photograph, quill, inkwell, candle, leather and brass, Victorian study, globe, magnifying glass, spectacles, coffee cup.
  - **The housing is the century.** Everything else in the frame could be four hundred years old, which is the archive's point; the one sealed thing says when.
  - **Delivered 8 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `image-file.ps1` at finish strength 1: unmarked spines, empty ruled columns, the pencil and the housing where the prompt put them; 2 had labelled binders on the shelves and faint marks on the page that read as writing. The stock book it replaces is gone from the repository.

### 5d. Outstanding lore illustrations — 9 October 2026 (Threshold Station, from Dermot's own frame)

The page was written 9 October 2026 from the published canon, and a place
gets an illustration. Dermot's choice among four of his coastal frames,
shown side by side: *The Great South Wall* (`great-south-wall-light-track`
on dermotcochran.com, Great South Wall, March 2026), a sea wall running out
to a light at dusk with the sun on the water beyond. His ruling the same
day: a composite is fine, the place need not be real. So the frame is the
plate and the far end is re-rendered; the record never describes the
station's shape, and the picture withholds it too. Registered in
`image-prompts.md` as a composite on his plate.

- **`threshold-station.jpg`** — *a shore station in the Solar System, built on a coast where the Interval between two universes narrows over the water off its docks. Its vocabulary is a harbour's.*
  The plate is Dermot's own frame of the Great South Wall at dusk, sent as the reference and to be kept as it is: the wall, the water, the sky, the low sun and the lens flare, all his. What changes is the far end: the red lighthouse and the ferry become the station's shoreward edge, low and dark against the light, a long line of docks along the water with a few working lights and no glazing, no tower, no antenna, nothing that announces itself. Nothing in the record says what the station looks like, and the picture keeps that.
  References: `../dermot-cochran-photography/src/images/photos/great-south-wall-light-track.jpg`
  > Edit the reference photograph and keep it as it is in every respect except the far end of the sea wall. Keep the stone wall in the foreground, the rough boulder edge on the right, the sea on the left, the pale dusk sky, the low sun and its glare on the wet stone, the lens flare, the grain, the framing and the colour exactly as the photograph has them. At the far end of the wall, where the photograph shows a red lighthouse and a white ship, place instead the shoreward edge of a small coastal station seen from a long way off, in silhouette against the light: a long, low line of plain docks and dark hull-like structures along the water, a few small steady working lights, no tower, no glazing, no antenna, no mast, no ship, no people, no text or markings of any kind. The station is dark against the sky and reads only as a shape; the sun and the sea do all the work. Documentary realism, available light, muted colour, nothing dramatic, nothing added anywhere else in the frame. Landscape orientation, the same aspect as the photograph.
  - **The plate is the picture.** Anything the model wants to add elsewhere is wrong; the brief is one edit at the far end.
  - **No tower.** The Sceir Light is a different page and its tower faces landward; the station has no tower on record.
  - **Delivered 9 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K, the plate sent as the one reference), through `import-image.ps1` at finish strength 1: the plate is untouched and the far end is one low dark line with three working lights, which is all the record allows. Dermot: *"That composite looks great."* Variation 2 ran a whole shoreline of sheds out of the right of the frame; his reading, *"it extends out of the frame implying a much larger structure"*, and the record gives no such structure.

### 5e. Outstanding lore illustrations — 11 October 2026 (Cnoc na mBeach, from Dermot's own frame)

The card was put beside three of his frames on 10 October; his *"Yes please"* to the recommendation chose *Martello Through St Begnet's* (`martello-through-st-begnets` on dermotcochran.com, Dalkey Island): a rough granite window in a roofless church wall, looking out to green ground. The page is a present-day place, so by the 7 October rule an old-fashioned look carries a hint of the century; the Threshold Station precedent applies, the plate kept and one region edited. What changes is the view through the window only: the Martello tower gives way to the page's own hive-yard, and the hint is the hives' make.

- **`cnoc-na-mbeach.jpg`** — *a hive-yard and a handful of stone cells on land no diocese claims.*
  References: `../dermot-cochran-photography/src/images/photos/martello-through-st-begnets.jpg`
  > Edit the reference photograph and keep it exactly as it is in every respect except the view through the window opening. Keep the rough granite wall, the lintel, the sill, the lichen, the stone texture, the framing, the light, the colour and the grain of the photograph, all untouched. Through the window, in place of the stone tower, the green ground continues up a gentle slope to a row of four or five low beehives standing in the grass, plain and squared, their bodies a smooth pale matte composite with no seams, labels or markings, quietly too well made for an old place, and one low drystone wall beyond them; soft overcast sky above. The hives are small and slightly out of focus, as the tower was. No people, no bees visible, no towers, no buildings, no screens, no lights, no lettering of any kind. It must still look like the same untouched photograph. 16:9 landscape.
  - **The plate is the picture.** One edit, through the window; anything added elsewhere is wrong.

Open work 1 and 5 are the images that are **missing**. This is the other half:
images that **exist and shouldn't**. Prompted by Dermot noticing that Saint
Aoife "looks a bit too much like a dark shadow", which turned out to be the
visible corner of something larger.

> **The figures below are stale, and stale in the good direction — re-measured
> 19 August 2026.** The distribution now reads **7 pages under 80 characters,
> 16 between 80 and 119, and 112 at 120 or more**, across **135** illustrated
> lore and character pages. The 68-page short-caption cohort this audit found is
> down to seven. The alt-text work was done and this section was never updated to
> say so, which made an almost-finished job read as an open one. The reasoning
> below stands as the record of why it was done; the counts do not.

**The corpus carries two visual languages.** Alt-text length is a reliable
tell for which images were ever actually looked at, and it comes out bimodal:
68 pages sit under 80 characters — *"A smiling professional woman"*, *"An open
old book"*, *"Computer circuit board close-up"* — and 40 sit at 120+ with real
descriptions of in-world art. The short ones read as stock-library captions
because that is what they are. Roughly **55% of the 120 illustrated lore and
character pages** are contemporary stock photography, against a house style
that says in so many words: *not contemporary glamour or lifestyle shoots.*

**Correction, same day: there are three languages, not two.** The third is
**Dermot's own photography**, already in the corpus and already the best
material in it — the `highland-*` and `boirinn-uplands-*` sets, `moorhen-wetland`,
`gull-on-rock`, `trigrian`, the flower macros. Open work 2 settles the
provenance without needing EXIF: it records a sensor-dust blemish on one of
them as *"the known main-body Tamron artifact"*, which is his own lens, and
notes that the highland set doubles as Órla Shepherd's home landscape.

**Added to the third language, 2026-08-22: `lore/young-lake-margin.jpg`**
(Rivers Old, Lakes Young) — Dermot's own D3100 frame, February 2025: a flooded
Irish lakeshore, bare trees standing in the shallows, gorse in flower on the
drowned bank. Routed here after failing the portfolio's bar (soft throughout —
f/22 diffraction at ISO 4000 — with a car and fence on the far shore); the top
strip carrying both was cropped away before the 1600px resize, so the frame
holds nothing man-made. The softness stands: at page size it reads as
atmosphere, the same licence the record already extends to `moorhen-wetland`.

**Four more, 2026-08-22, same session — the portfolio survey.** All 158
photos published on dermotcochran.com were cross-matched against the
image-less lore pages (Dermot picked these four from a shortlist of seven);
each is his own frame, re-filed from the portfolio's 1600px site file:

- **`lore/volcanic-strata.jpg`** (Stone, Fire, and Ice) — the portfolio's
  *Volcanic Strata*, cropped to the strata alone (1300×695): the crop removes
  a guardrail, a marker pole and a chain fence, and with the sky gone the
  scale goes unreadable, which is the point. Under the ~1600px convention
  because the source is the 1600px site file; a full-spec recrop from the
  original on `F:` is the upgrade path if ever wanted.
- **`lore/cloud-sea.jpg`** (Coasts, and Other Edges) — *Above the Clouds*,
  unmodified: a cloud sea with distant ridges standing out of it, carrying
  the entry's "shoreline between atmospheres" line. Nothing man-made in frame.
- **`lore/grassland-storm-tree.jpg`** (The Ledger and the Truce) —
  *Before the Storm*, unmodified: one flat-crowned tree in dry grassland
  under a near-black storm sky — the truce with its enforcer arriving.
- **`lore/drowned-forest.jpg`** (The Forest Is Waiting) — *The Drowned
  Forest*, unmodified: a forest's century-bet lost, standing in the water
  that called it. The faint pale structures along the far shore were judged
  acceptable in-world (settled worlds have buildings; they read as haze at
  page size).

**A sixth, same day: `lore/shoreless-sea.jpg`** (Tides Without Shores) —
the portfolio's *Sunset at Sea*, as the radical left crop (1150×900 from the
1920px site file): the cruise deck, railing and lifeboat all fall outside
it, leaving open water to a pink horizon band with **two distant vessels
hull-down on the line** — kept deliberately, because on a shoreless ocean
the only witnesses are afloat, which is the entry's own point. Under the
~1600px convention like the strata crop; the original on `F:` is the
upgrade path.

**A seventh, 2026-08-23: `lore/island-watchtower.jpg`** (The Cost of the
Crossing) — the portfolio's *Dalkey Island*, unmodified from the 1600px site
file: a low green island across dark water, a round stone watchtower on the
summit and the gable of a small stone ruin along the ridge. The structures
were the question — Garachico Rock fell below to a summit cross — and Dermot
ruled these in (2026-08-23): a watchtower and a stone gable are the Kingdom
of the Four Islands' own furniture (Old Houses, an order standing tideward),
where a cross is a specific Earth confession the record does not carry. The
island is identifiable to a local eye as a named Irish island; judged
acceptable — a real place, unnamed, his own work.

**The identifiability question is settled in general, not just for that
frame** (Dermot's ruling, 2026-08-23): *"A movie filmed on location would
also include places that local fans would recognise. I am ok with that."*
So a candidate from his portfolio is never rejected merely because a local
reader could name the place — the record is filmed on location. What still
disqualifies is unchanged: structures the setting cannot absorb (the
Garachico summit cross), anachronisms, recognisable people, and anything
that *names* the place in frame (signage, lettering). The distinction from
the `formation-of-star-rangers` rejection holds: that was a skyline whose
meaning travels with it worldwide; a local landmark carries no meaning a
non-local reader can import.

Not carried over from the shortlist, recorded so the survey isn't redone:
*Where the Water Was* (soils — **judged unusable from the site file,
2026-08-22, second look**: a dozen-plus white litter fragments lie across
the right-hand slope, exactly where the best terrace patterns are; the only
clean crop is a weak 780×810 of the left water-and-spit. Cleaning it means
spot-heal on Dermot's photograph, which this file reserves for his hands —
so the soils page waits for a healed master, or for the 111BOHER originals
STYLE.md names on `F:`, the cracked mud `DSC_2860` or the eroded spit
`DSC_2895`), and *Garachico Rock* (The Cost of the Crossing — a summit
cross survives every crop). The portfolio holds nothing for The Honest Dark
(no night skies), Where the Weather Stops (no caves), or Quern's storm
belt.

**Method, stated so a later audit knows what to trust:** six images were
opened and read. The 66-page cohort is *inferred from caption style* and is
not individually confirmed. Confirming it is its own pass — and per this
file's own standing warning, it must be done by opening files, not by
reasoning about filenames or alt strings.

#### Triage: sort by what the image is doing, not by where it came from

"Replace all the stock" is the wrong unit — it counts 66 images when the
number that matters is nearer 25, and it would replace things worth keeping.

**Tier 1 — photographs of real people standing in for characters. These must
go.** The only non-negotiable tier, for a reason that is not about house
style: a generated portrait of an invented person claims nothing, but a
photograph of a real stranger captioned as a character makes a claim about an
actual human being, and a false one. `dagny-voss.jpg` is a real woman
presented as an orbital refinery director on Aspenar. That is testimony
pointed at the wrong person — the same fraud the photography site's absolute
rule exists to prevent, running in the other direction. There is also a
licensing question worth *checking rather than assuming*: stock model
releases commonly restrict portraying a model as a fictional person or
implying endorsement, and these publish on owned domains under
`CONTENT-LICENSE.md`. **Roughly 15–20 portraits. Do these first.**

**Tier 2 — stock photographs standing in for specific invented places and
institutions. Should go.** An empty Earth parliament chamber as the Star
Rangers command hierarchy; a Mediterranean archway as Cill Aoife. Wrong in a
way a reader can point at. **Roughly 10–15.**
**Policy settled 3 September 2026** by the exemption statement under
*Conventions*: a stock landscape is replaced from Dermot's archive when a frame
fits and carded when none does, opportunistically, never regenerated from a
prompt. No wholesale pass; the tier closes as each page is next touched.

**Tier 3 — Dermot's own photography. Keep it, and lean on it much harder.**
A real Irish upland standing in for an alien world claims nothing false
because it names nothing: a real place, unnamed, his own work, no model
release in sight. **The unpublished photo backlog is a lore-art resource** —
Kenya, Tenerife, Scandinavia and Irish material sitting on `F:` includes
acacias in dust, a drowned forest, flamingos, volcanic strata, a cloud sea.
That is alien terrain already, and `earth-leopard-grassland.jpg` shows the
practice is established. For any lore entry about landscape, weather, flora
or fauna, the archive beats a prompt: cheaper, better, and it moves the
corpus toward his own work rather than away from it.

**Tier 4 — abstract and texture stock. Lowest priority; probably keep.**
Star fields, light gradients, circuit boards, nebulae. No person, no place,
no claim, and nobody's reading is broken by them. Replace opportunistically
when already in the file, never as a project. **Roughly half the 66.**

So the real work is **25–30 images**, not 66 — and a good share of those
should come from the camera rather than a prompt.

#### Five images are doing nine jobs — RESOLVED 15 August 2026

Byte-identical files under different names (MD5-checked). **All five are now
resolved, and a full MD5 scan of `src/images/` returns no duplicate group at
all.** The first three had already been fixed by earlier work without this note
being updated — a reminder that these tables go stale silently.

| Kept by | Also serving as | Resolution |
|---|---|---|
| `characters/bertram-ashcombe.jpg` | `lore/planetary-liaisons-and-recruiters.jpg` | fixed earlier; note was stale |
| `characters/elvira.jpg` | `lore/planets/verdance.jpg` | fixed earlier; note was stale |
| `characters/brother-daire.jpg` | `lore/monasteries-of-mars.jpg` | fixed earlier; note was stale |
| `lore/star-rangers-command-hierarchy.jpg` | `lore/frontier-transformation-protocols.jpg` | duplicate deleted 15 Aug; the frontier page is now image-less and needs one |
| `lore/threnos-omega.jpg` | ~~`lore/post-eleven-dimensional-manifold.jpg`~~ | duplicate deleted 15 Aug, then **flipped on Dermot's ruling the same day**: Threnos-Ω keeps the ring, and the Common Manifold page is now image-less and needs one |

**A sixth pair this note never had**, found by rescanning on 15 August rather
than trusting the table: `hero/glossary-book.jpg` was byte-identical to
`lore/canonical-glossary-and-migration-guide.jpg`. Resolved differently from the
other two, because both *uses* are legitimate — a section hero and a lore
entry's own image — and only the second copy was redundant. The hero file was
deleted and `src/glossary/index.md` now points at the lore copy directly. **Note
the wrinkle:** `lore-entry.njk` hardcodes `/images/lore/`, so an `image:` field
cannot reach across into `hero/`, but an explicit `<img src>` in a page body can
reach the other way. That asymmetry decided the direction; it was not a
preference.

**Which page kept the image, in the two lore pairs, followed this table's own
"Kept by" column** rather than a fresh judgement — flipping either is a
one-line front-matter change plus a file rename.

The pattern in the first three is one error: **a character portrait reused as
the illustration for an institution or a place.** Proposed rule — *the
portrait keeps the file; the lore page gets a new image of what its entry is
actually about.* A picture of a man is not a picture of an order of monks,
and Elvira's portrait is not a picture of a planet.

Separately, `lore/united-space-consortium.jpg` is a *different* file carrying
the *same* alt text as the command-hierarchy pair (*"The interior of an empty
parliament chamber"*). One of the three describes a picture it isn't, which
is a plain breach of the one hard rule in this file.

#### The ten worth doing first

> **Two corrections, 19 August 2026.**
>
> **First: every one of the ten target files has since been deleted.** Nothing
> here is *currently* a hooded figure, a stock headshot or a voting console —
> those pages now carry no image at all. The diagnoses below are the record of
> why each was removed and remain worth reading; the present tense in them is
> not.
>
> **Second, and my own error: eight of these were prompted a second time on
> 19 August**, in *Outstanding portraits* and *Outstanding lore illustrations*,
> because both lists were derived from pages lacking an `image:` field and this
> section was never checked against them. `images.md` therefore carried two
> competing briefs for the same file in eight cases. Reconciled as follows.
>
> **The newer brief governs**, for `verdance`, `dagny-voss`,
> `monasteries-of-mars`, `planetary-liaisons-and-recruiters`, `elvira` and the
> lore Aoife — it was written against each page's current text, carries the
> set's shared negative blocks, and in the Aoife case fixes a naming collision
> this section did not notice.
>
> **This section's brief governs for `predatory-entities`**, and the newer one
> should be dropped. *A vacated habitat compartment, one chair turned away from
> the open door, a personal effect left exactly where someone set it down* is
> in-setting where the newer frame is a woodland clearing, and it holds the same
> tone line better by holding it indoors.
>
> **And this section carries one constraint the newer Aoife portrait brief
> missed and must adopt: keep the concealed face.** The record does not know it,
> and the page's whole argument is that she never claimed to know what she had
> seen — so the face stays turned, shadowed, or away. That is canon reasoning,
> not a styling preference, and it outranks anything in the newer entry.
>
> **Two entries here said *prompt not written* and now have one**: the Frontier
> Transformation Protocols page and the Common Manifold page are both covered in
> *Outstanding lore illustrations*.

Not the merely generic — the ones where the current image **actively
misinforms**. Prompts written to the standing rules and ready to paste.

**These are not visible to `scripts/image-prompts.js`, deliberately.** It reads
only the Open work 1 and 5 headings, and an entry there counts as done while
its target file exists — so a replacement listed here would be skipped twice
over. To put one through the pipeline: delete the offending file, move its
bullet into Open work 1 (characters) or Open work 5 (lore), and re-run. The
separation is the point — this section is a list of *decisions to take*, and
the moment a prompt moves up it has been decided.

- **`saint-aoife.jpg`** (characters) — currently a black hooded figure seen
  from behind, filling the frame, in a *Mediterranean* hill town: whitewashed
  walls, terracotta pantiles, a cypress. Wrong continent for Cill Aoife,
  wrong register, and it reads as menace for a woman who spent her life
  tending the sick. **Keep the concealed face** — the record genuinely does
  not know it, and the page's whole argument is that she never claimed to know
  what she had seen. Lose the menace.
  > Cinematic portrait of a thirteenth-century Irish holy woman standing at a hawthorn well in soft Atlantic daylight, upper body, half-turned away so her face falls into shadow and is never resolved, plain undyed woollen mantle over a simple gown, hands wrapped in cloth from tending the sick, bare thorn branches and low green hill country behind her, overcast western light, muted moss-and-stone palette, quiet and unthreatening, historical rather than fantastical, no readable text or lettering of any kind. Portrait orientation.

- **`saint-aoife.jpg`** (lore) — currently candles on a gilded Orthodox
  iconostasis: real-world, wrong tradition, contemporary. The entry is about a
  devotion, so illustrate the *place* the devotion attaches to.
  > A hawthorn well in Irish hill country as a place of devotion, the low stone kerb worn smooth, strips of cloth and small offerings tied to the bare thorn branches above it, no people in frame, soft overcast western daylight, damp green and grey palette, reverent and ordinary rather than mystical, medieval vernacular with nothing modern visible, no readable text or lettering of any kind. Landscape orientation.

- **`elvira.jpg`** (characters) — **the worst of the set.** A black-robed
  hooded figure in a dark doorway, backlit through smoke, carrying what reads
  as a scythe. Her own page says *"her classification is contested; she is not
  magical"* — the image asserts precisely what the entry denies, and lands on
  the wrong side of the tone line while doing it.
  > Cinematic portrait of a solitary boundary practitioner keeping a remote marsh causeway outpost, upper body, weathered practical outdoor clothing and heavy waterproofs, calm and matter-of-fact expression, standing in the doorway of a small functional outpost building with flat reed marsh and open sky behind her, cold flat daylight, muted grey-green palette, plainly a working technician rather than anything occult, far-future science-fiction setting, no readable text or lettering of any kind. Portrait orientation.

- **`verdance.jpg`** (lore/planets) — currently Elvira's portrait, which is a
  picture of a person standing in for a picture of a world.
  > A temperate living world seen from low orbit, broad continental greens and river systems under scattered cloud, the terminator line falling across one edge, no habitation or structures visible, far-future science-fiction survey imagery, natural and unspectacular colour, no readable text or lettering of any kind. Landscape orientation.

- **`predatory-entities.jpg`** (lore) — currently blurred hands pressed
  against frosted glass: a horror stock cliché, and the one image in the
  corpus that most clearly breaks *hint at the dark fact rather than depicting
  it*. Nothing should be visible that could be pointed at.
  > A vacated habitat compartment at low light, one chair turned away from the open door and a personal effect left exactly where someone set it down, bedding disturbed and not returned to, far-future science-fiction interior, cold desaturated palette, no figure and no creature anywhere in frame, unsettling entirely by absence and by what has been left behind, no readable text or lettering of any kind. Landscape orientation.

- **`dagny-voss.jpg`** (characters) — a corporate stock photograph: smiling
  woman, pale blue blazer, stucco wall, green hedge. Contemporary Earth, no
  science fiction in it at all. She directs an orbital ore refinery.
  > Cinematic portrait of a composed woman directing a large orbital ore-refining habitat, upper body, practical industrial coverall over working clothes, standing on a gantry above refinery machinery with the curve of a planet visible through the bay beyond, competent unsmiling expression, hard directional industrial lighting, far-future science-fiction setting, muted steel-and-amber palette, professional, no glamour styling, no readable markings or insignia lettering. Portrait orientation.

- **`monasteries-of-mars.jpg`** (lore) — currently Brother Daire's portrait.
  Keep it on his page; the order needs its own image.
  > A scattered contemplative settlement on open Martian terrain, low rock-built cells and a single walled enclosure set into rust-coloured ground under a thin pale sky, long shadows and a distant escarpment, no figures in frame, deliberately austere and unmonumental, far-future science-fiction with nothing ornate, no readable text or lettering of any kind. Landscape orientation.

- **`planetary-liaisons-and-recruiters.jpg`** (lore) — currently Bertram
  Ashcombe's portrait. Same fix: an institution is not a person.
  > A small planetary liaison office on a quiet colony world, a plain desk and two chairs by a window looking onto an ordinary street, a coat on a hook and a cooling cup left on the sill, no people in frame, unglamorous and administrative, far-future science-fiction setting, warm muted daylight palette, no readable text, signage or insignia lettering of any kind. Landscape orientation.

- **`frontier-transformation-protocols.jpg`** / **`star-rangers-command-hierarchy.jpg`**
  — byte-identical; **deduplicated 15 August**, the command-hierarchy page
  keeping the file per the table's "Kept by" column. Both files have now been
  opened: the image is a tight close-up of a delegate's electronic voting
  console on a wooden desk, the chamber's blue seating thrown out of focus
  behind it — which suits neither page especially well, and suits *frontier
  transformation* least. **The Frontier Transformation Protocols page is now
  image-less and needs one.** Prompt still not written: what that entry is
  about is a protocol for changing a world, and nothing in a debating chamber
  says so.

- **`threnos-omega.jpg`** / **`post-eleven-dimensional-manifold.jpg`** — same
  situation; deduplicated 15 August with the manifold page keeping the file, and
  then **flipped the same day on Dermot's ruling: Threnos-Ω keeps the ring.**
  The reason is recorded because it is the kind that goes missing: this file
  already calls `lore/threnos-omega.jpg` "the precedent for a membrane
  portrait", so the image had standing on that page specifically, and the
  original "Kept by" column was pointing the wrong way.

  **The Common Manifold page is now image-less and needs one.** Prompt not
  written. What it has to carry is harder than the ring was: higher-order
  spacelike and timelike structure shared by every universe in the Cascade
  regardless of its own dimensional floor — a *shared* substrate, not a
  boundary, so a membrane or a ring is exactly the wrong figure for it.

#### Convention breaches, separately

- `lore/saltmere-mooring-gantry-1.jpg` and `-2.jpg` are **2560×1920** at
  ~420 KB each, against a ~1600px long-edge convention.
- `lore/moorhen-wetland.jpg` is 1557×2133 — 2133 on the long edge.
- `characters/aldera/field-photo-*` run 557–700 KB.
- Twenty hero images are 1920px. Enough of them that this may be an accepted
  deviation rather than drift, but it is not what the Conventions table says.
  Worth either fixing or amending the table; the table currently reads as
  though it were enforced.

#### Batch 2 closed — every lore image opened, 3 September 2026

The "roughly 45 judged from alt text and never opened" remainder of the
12 August audit. All 123 files under `src/images/lore/` were laid out on
fresh contact sheets with filename, size and alt text, and every one was
looked at; twelve were pulled to full size. Judged against the seven
questions in `F:\CLAUDE\Star Rangers Image Review\REVIEW-DECISIONS.md` and
the 18 August exclusions.

**Replaced with designed emblem cards (`make-emblem-card.ps1`), seven** — all
stock photographs of contemporary objects on concept or institution pages,
which fails the anachronism exclusion outright and needs no Codex offer. The
epithet and qualifier lines are lifted from each page's own `description`
(derived, not authored); the device follows the tool's vocabulary.

| File | What it was | Device |
| --- | --- | --- |
| `galactic-stardate.jpg` | Sepia antique clock face over a paper calendar — the twin of the French dial deleted 15 August | sundial |
| `year-zero.jpg` | A steampunk relief of cogs, a hot-air balloon, raised letters and the digits 1870 | sundial |
| `post-teleport-ascension-stress-disorder.jpg` | A stock render of a present-day operating theatre: C-arm scanner, surgical robot, monitors | fold |
| `knarr-line.jpg` | A real ISS cupola window with a Soyuz outside, labelled hardware in frame | chevron |
| `federation-of-sentient-beings.jpg` | A real Earth-observation satellite over cloud, portrait-oriented into a landscape slot | rings |
| `star-rangers-command-hierarchy.jpg` | A delegate's voting console in a real parliament chamber — Tier 2's own named example | chevron |
| `united-space-consortium.jpg` | The same chamber, the same console, a different crop | rings |

**Cropped, two** — Dermot's own Tenerife frames on Kernowek Reach carried a
yellow road sign at the bottom edge: `highland-rock-spires.jpg` (1600×1168 →
1600×1080) and `highland-sentinel-lizard.jpg` (1168×880 → 1168×816). A crop
is within the darkroom test; nothing else touched.

**Looked at and kept, with the reason recorded:**

- `island-watchtower.jpg` — Dermot's Dalkey Island frame on *The Cost of the
  Crossing*: a round stone tower and a ruined stone house on a green island.
  Locally recognisable, not iconic; a stone tower can stand as a ruin in any
  century, and the alt names nothing. Kept. Dermot's call if he reads it as a
  real place.
- `noogenic-seeding-system.jpg` — the JWST Carina "cosmic cliffs" (NASA/ESA/CSA,
  public domain) with a small composited circuit motif. A nebula is not of a
  century; kept as tier 4, alt accurate.
- `the-fusion-ceiling.jpg` — generated; two workers, faces small and turned,
  no lettering. Kept.
- `the-imperium.jpg` — real skyscraper, already the recorded precedent for
  *art is illustrative*. Left as the conventions say.
- `canonical-glossary-and-migration-guide.jpg` — a stock open book at 1920px.
  Claims nothing, dates nothing; a card would suit a reference page better.
  Left for an opportunistic swap, not a project. *Swapped 8 October 2026 for a
  generated archive desk (5c).*
- Everything else: designed cards, abstract or astronomical stock (tier 4),
  generated scenes with no legible face, and Dermot's own frames. Nothing
  else fails a question.

**Still open from the same look, unchanged:** the twelve `prismere-*` /
`prismeri-*` files at 768px (the regenerate-or-upscale decision) and the size
breaches under *Convention breaches* above.

### Intake 2026-08-24 — first candidate for the Codex-art pool: a headmate of Tissadelle

Dermot supplied one generated image in session (Botify AI; no prompt kept),
first captioned **"Asteria the Sage, codex art"** and reassigned by him in the
same session, after the Asteria canon mismatch was raised, as **"a headmate of
Tissadelle"**. Parked at
`story-bible/reference-art/tissadelle-headmate-2026-08-24.jpg` — nothing ships.
**Unparked 3 September 2026:** Dermot ruled *in-world artist's impression, no
watermarks or overlaid text*; re-made clean at size from the reference and
drafted as `src/codex/asteria-the-sage-impression.md` (see *7. Codex art* below
and `image-prompts.md`). The name question below stays open and the entry
marks it as an absence rather than answering it.

**What it shows:** a woman appearing in her thirties, pale, loose blue hair,
pale blue eyes, in a black hooded cloak with silver botanical embroidery over
dark layered clothing with a belt, standing among bare branches at night;
three-quarter turn, level gaze past the camera. Register is still and watchful
rather than horror — inside the tone rule as it stands.

**Technical state:** 768×1152 (below the 1200px portrait floor and the 1600px
codex-card square), 232 KB, **"Botify AI" watermark bottom-left** — a
generation artefact, which the 18 August quality bar names as a disqualifying
flaw until cropped out.

**Why it is parked rather than filed, in order:**

1. **It depicts a canon entity that does not exist yet.** Tobble is the only
   named member of Tissadelle's system; canon says only that there are more
   members than the forms have boxes for. A named, depicted headmate is new
   canon — Dermot's to declare, not bookkeeping's.
2. **The interiority guardrail** (this file, Tissadelle prompt notes): her
   inner life is *hint, don't show*, and it is load-bearing for the S6–7
   endgame. Whether a published depiction of any headmate breaches that is his
   call and is not obviously no.
3. ~~**The Codex-art route itself is unsettled**~~ — **settled 3 September
   2026** (card in the header, artwork in the body, prospective only; see
   *Two things decided* above). What remains is the codex entry with a named
   in-universe author for the artwork to live on; none exists, and it is
   drafted once item 2 is ruled.
4. **The watermark and size**, above — mechanical, fixable last.

If it goes forward as Codex art, the natural shape is an in-universe artwork —
some named artist's *idea* of the member behind the registration — which
asserts nothing binding and would be the pool's first test case. Open items
indexed in `open-questions.md` under Images.

**Addendum, same day — the headmate is also called "Asteria the Sage"**
(Dermot's ruling, 2026-08-24, verbatim: *"headmate is also called Asteria the
Sage"*). So the image's original caption was not a mislabel: the appellation
was right, the bearer was not the one on record. Two consequences, one open
question:

- The name decision (open item 1 below) is **part-answered**: the headmate
  carries the appellation *Asteria the Sage*. ~~Whether that is her name, an
  honorific, or a taken title is not yet stated.~~ **Ruled 3 September 2026:
  an honorific title within the Fellowship of Light** — readings in
  `intake-2026-09-03.md`, seventh direction.
- It **collides deliberately with Asteria Wessex**, whose chapter calls her
  Asteria the Sage — an honorific her page says is *"the chapter's word and
  not hers"*. Two bearers of one appellation, one a retired Star Captain and
  one an unregistered member of Tissadelle's system, is a resonance the
  record has not explained. **Do not invent the connection** — homage,
  coincidence, in-world naming custom, or something the S6–7 material makes
  load-bearing are all open, and per the standing rule the epistemology may
  be explained but the fact may not be invented.

### Intake 2026-09-05 — the shadow's two costumes, parked

Dermot supplied two generated stills and a 25-second clip (Grok; no prompt
kept) with the direction in `intake-2026-09-05.md` — a shadow wearing
Tissadelle's appearance at the edge of Tobble's universe. Parked, nothing
ships: `story-bible/reference-art/tissadelle-shadow-1-2026-09-05.jpg`,
`tissadelle-shadow-2-2026-09-05.jpg` (1152×1728), and the clip as a
five-frame strip, `tissadelle-shadow-video-frames-2026-09-05.jpg` — the
14 MB source file was **not** committed, on the ground that reference
material does not need to ride into every production clone; Dermot holds
the original.

**What they show:** the stills — a red-haired woman, hair worn long and
loose and dressed with metal, in knotwork and jewellery and a dress cut to
be looked at, against a glowing Celtic knot and circuitry. The clip — the
same woman in a navy high-collared coat with gold stars and leaf-work on the
cloth, cut short over bare legs and boots, walking a candlelit chamber for
the camera.

**How the draft reads them:** as the *shadow's* costumes and not as hers.
The character page has her always formally dressed and never dressed to be
looked at; the hair on her portrait is tied back; and *Reading Rank at a
Glance* (4 September) puts rank on a plain tab and never on the garment. So
each image is a tell — surface got right by something that cannot tell what
the surface is for — and `scene-draft-youre-up-early.md` uses them that way
without describing either garment beyond the finding.

**Why parked rather than filed:** they depict a thing whose nature is
undecided (three shapes in the intake); the tone rule and the no-sexualised-
content rule make a published image of the shadow not obviously yes; and
the scene they belong to sits behind an unpublished terminus. If one ever
ships, the honest shape is the same as the headmate's — an in-world
artist's impression, prospective only — and it would need a clean re-make
at size, since neither still is the portrait floor and the clip is 768 px.

### Intake 2026-09-18 — strength and courage: five illustrations, none filed

Dermot supplied one generated still and four generated clips (Grok era by
their filenames; no prompt kept) with the direction in
`intake-2026-09-18.md` — *Tissadelle Shepherd physical strength and courage*.
Nothing is filed and nothing ships; the direction was realized in words on
the character page. What each shows and where it lives:

- **The still**, 1008×1792. A woman with long loose red hair, blue eyes and
  freckles, in a competition-conditioned physique — heavy musculature,
  visible vascularity — in a white halter top and white shorts, barefoot, on
  a plain grey studio backdrop, smiling to camera. **Byte-identical to a
  frame already in the private repository's reference material**, found by
  checksum, so it is not copied here under that repository's hard limit.
- **Clip dated 13 September 2026**, 15 s, 720×1280. The same figure, clothes
  and backdrop, holding a plank and doing push-ups with a leg raised, to
  camera. Not in either repository; Dermot holds it.
- **Clip dated 11 May 2026**, 30 s, 448×672. **Byte-identical to
  `src/video/grok-video-2026-05-10.mp4`**, the orphan `video-prompts.md` has
  tracked since 20 August — now identified there. Red hair long and loose, a
  fitted navy-and-silver costume uniform with a spiral badge and
  lettering-like marks, heels, at a starship viewport over a nebula, speaking
  or singing to camera: the earliest Grok-era Tissadelle, in the costume
  uniform the 5 September regeneration replaced.
- **Clip dated 7 July 2026**, 30 s, 448×672, with audio. The same face, hair
  loose, in a glossy red two-piece, posing and flexing on a present-day night
  street under illuminated signs, some readable and one naming a real city.
  Not in either repository.
- **Clip dated 2 July 2026**, 30 s, 448×672. A black leather halter minidress
  with knotwork trim, barefoot, walking through a field of drifting rocks
  under a red nebula, a crowd of seated harpists behind. Not in either
  repository.

**How the intake reads them:** the still and the 13 September clip picture
the direction — strength as a body at exercise — and are to-camera, in a
studio, which is a presentation and not a Ranger at work, so neither could
stand as a portrait under the guardrails above (*outwardly plain*, *nothing
in the image invites the viewer*). The 2 July and 7 July clips are the
register the 5 September intake assigned to the shadow at the edge — hair
loose and dressed with metal, knotwork, *a dress cut to be looked at* — and
are read the same way: not her. The 7 July clip also carries readable
signage naming a real city, the *formation-of-star-rangers.jpg* failure in
motion.

**Why nothing is parked:** the still is the private repository's already;
the orphan is in `src/video/` already; and the three clips that are in
neither repository were put to Dermot as a choice (nowhere here, a frame
strip each in `reference-art/`, or the private repository in its own
session) rather than parked by default — `intake-2026-09-18.md`, *Left
open*, B. The degree of strength the page states is choice A there; the
recommended and drafted degree needs no image.

**Decent and modest enough for a public repo?** — Dermot's question the same
session, answered in the intake's addendum: decent as a file in a public
repository, yes; modest enough for *this* site as a picture of *her*, no, on
the 4 September any-age principle (the deep neckline), her page's *never
dressed to be looked at*, and the portrait guardrails' *nothing invites the
viewer*; and moot for filing, since it is the private repository's file. A
re-make through the pipeline — high-necked, at work, attention off-frame — is
the shape that would clear every bar.

**Ruled by Dermot the same day, verbatim *Recommendations accepted*:** the
drafted degree stands and no image is re-made; the three unfiled clips stay
with him; the orphan stays until the video note's question is ruled — **and
then removed later the same day at his instruction** (*Remove the orphan
video from src/video*), deleted rather than parked.

---

### 7. Codex art — in-world artists' impressions

The pool the 18 August rule created, first filled 3 September 2026. Entries
here are **body images** for codex entries: the entry's `image:` stays a
designed card (`make-codex-cover.ps1`, usually with the artwork as
`-Underlay`), and the artwork itself is shown inline in the body with a caption
naming its in-world maker or provenance. `scripts/image-prompts.js` files these
under `src/images/codex/`. Dermot's ruling of 3 September on the first case:
*in-world artist's impression, no watermarks or overlaid text.*

- **`asteria-the-sage-impression-artwork.jpg`** — the parked headmate image
  (Intake 2026-08-24 above), re-made clean at size. Dermot's own supplied
  picture is the reference; the prompt asks for a *painting* rather than a
  photograph, because the entry presents it as an artist's impression made from
  a description and not from a sitting, and a painterly surface says that
  without a caption. It also puts distance between this image and the
  character-portrait house style, which is the point: this is not a portrait
  of a character, it is a picture somebody in the world made of a person they
  were told about. Register still and watchful, hope in it, no grimness. The
  standing negative is inside the blockquote, with signatures, monograms and
  watermarks added to it, since the reference carries one.
  References: `story-bible/reference-art/tissadelle-headmate-2026-08-24.jpg`
  > A painted portrait in the manner of an artist's impression made from a description rather than a sitting: a woman who appears in her thirties, pale, with loose blue hair and pale blue eyes, in a black hooded cloak worked with fine silver botanical embroidery over dark layered clothing with a belt, standing among bare winter branches at night, three-quarter turn, level gaze past the viewer, still and watchful. Visible brushwork and a limited palette of night blue, black and silver; the branches thin and dissolve into the dark at the edges of the picture as if the painter stopped where the description ran out. Quiet, composed, a little hopeful rather than grim. No readable text, lettering, numerals, signature, monogram, watermark, logo, signage, labels, branding or written characters of any script anywhere in frame; no holograms, projected light, glowing displays, screens, monitors or consoles; no visible lamp, light fitting or bulb; no flat studio backdrop, gradient background, glamour lighting, corporate headshot or posed smiling to camera; no weapons; no drawn frame or border around the picture. 16:9 landscape.

### 8. Missing portraits — the 7 October 2026 audit (10)

Written 7 October 2026 under the same rule: a character with a body gets a
portrait. Ariel Pinya is not here, because her own page says the record holds
no portrait of her, and The Kept Line is not here because the record knows it
only from instrument logs. All **16:9 landscape** at 1200×675 for the slot;
the face in the upper third, attention off-frame, at work; ages only where the
record gives one, heritage not stated where it does not; the 28 July
guardrails, the modesty bar and the standing negative pasted inside every
blockquote. The two Pandoids take Teddy's filed portrait as the kind's
reference, and Toval takes Syra's.

- **`bram-tollick.jpg`** — fourteen, keeper's son, the bar of the Castle's one door in his hands since he could reach it.
  The portrait is the door: a boy in the watch's plain woollen dress with his hands on a heavy wooden bar across a stone doorway, looking not at the camera but along the dark of the hall beyond, the hall unlit and empty. Hint, don't show: nothing walks in it.
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A boy of fourteen, lean, weather-browned, in a plain undyed wool tunic and a leather belt with no buckle ornament, standing in a thick stone doorway in an old keep, both hands resting on a heavy timber bar that closes it, his head turned to look away from the camera down a long dark stone hall beyond the door, face lit from the side by grey storm-season daylight from a slit window. The hall behind is empty and unlit. No sword, no shield, no banner, no torch, no crest, no lettering. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. fantasy armour, chainmail, cloak with clasp, crown, medieval festival costume, glowing figure, ghost, flames.
  - **The hall is empty.** The Castle's people are seen as light and never answered; the picture leaves the light to the reader.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: faces the hall with the bar in both hands; 1 had the bar on his shoulders like a yoke.

- **`wren-pellam.jpg`** — fifteen, youngest of Knight Pellam's house, sent to Krilzat to learn the chronicle by heart.
  At the watch-post on her first evening, the names already learned, looking down the long hall at the hour; her lips closed. The light on her face comes from down the hall and from nothing the frame shows.
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A girl of fifteen in a plain dark travelling dress of good wool with a high neck and no ornament, hair tied back for the road, standing at the end of a long stone hall in an old keep at dusk, looking down its length away from the camera with a still, attentive face, lips closed, hands folded at her waist, her face lit faintly from down the hall by a pale light whose source is out of frame. The hall is empty, its floor worn stone, its walls bare. No jewellery, no crown, no sword, no banner, no torch, no visible figure anywhere, no lettering. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. princess gown, tiara, fantasy costume, glowing figure, ghost, spirit, candles, flames, dramatic beam of light.
  - **Lit from down the hall.** The page says the figures are seen as light; the portrait shows only that there is light.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the hall is dark and the light is from down it; 1 lit the whole hall.

- **`oriel-fenwick.jpg`** — sixteen, a reeve's daughter, on her first morning at the practice desk learning the hand.
  The scriptorium of the Tideward Sisterhood on the Abbeylands: a novice copying a charter-era line, the marks on her page a hand and not a script the camera can read. Daylight from a tall window, the next desk empty.
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A girl of sixteen in a plain grey novice's habit with a close white undercap, seated at a sloped wooden copying desk in a stone scriptorium, bent a little over a sheet of pale paper, a reed pen in her hand, her eyes on the line she is copying and not on the camera, daylight from a tall plain window on her left. On the sheet, and on the exemplar propped beside it, only indistinct rows of marks that are not any readable script and could not be read at this distance. The next desk is empty. No crucifix, no candles, no gold, no illuminated capitals, no readable letters. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. quill with feather, illuminated manuscript, rosary, candles, stained glass, readable alphabet, calligraphy that can be read, gold leaf.
  - **Marks, not letters.** The page is about a hand; the generator cannot spell and must not be asked to.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the marks cannot be read; 1 showed a legible manuscript.

- **`ilsabet-corren.jpg`** — Fellow in Comparative Records at the Institute; reads institutions' registers as instrument logs.
  At the shelf, not at a desk: a long row of plain bound registers of different ages and sizes, one open on a reading stand, her finger on a line, her attention on the one beside it. The Institute's rooms are plain and well lit and have no instrument in them that this page needs.
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A woman in her forties in plain civilian working clothes, a dark high-necked jumper and a long plain coat, standing at a tall shelf of bound registers of many different ages and bindings in a plain well-lit reading room, one register open on a reading stand before her, one finger resting on its page, her eyes on the spine of the next volume along and not on the camera, an expression of patient scepticism. The pages show only indistinct columns of marks, not readable. No glasses on a chain, no lamp visible, no screen, no lettering on the spines. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. library ladder, leather armchair, globe, candles, readable text, computer, glasses pushed up, bun with pencil, cardigan cliche.
  - **The record's line, not the people's.** Her rule is on everything she drafts; the portrait gives her the shelf and nothing to say.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the finger on the line and the eyes on the next volume.

- **`ingrid-halvorsen.jpg`** — Chief, Star Rangers Survey Corps; correlation calibration; carries the three-source bench through the fold to Counterpane and home.
  In the cold shelter on a revisit, taking the bench apart in the order it went together: three identical sealed plain cylinders on a plain bench, her hands on the second, her face unmoving. Survey track insert pale grey-green. The membrane beyond the shelter's opening is not shown.
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A woman in her late fifties with a still, unmoving face and cropped grey hair, in Star Rangers service dress, plain and well kept, carrying small geometric rank marks only: a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. worn under a plain insulated field coat with the collar tab visible and its single insert pale grey-green, standing at a plain metal bench inside a small cold prefabricated shelter, three identical smooth sealed metal cylinders the size of flasks standing in a row on the bench, her gloved hands on the second one as she lifts it clear, her eyes on it and not on the camera, breath faintly visible in the cold. The shelter's walls are plain insulated panels; the shelter's opening behind her shows only pale featureless cold light. No screens, no dials, no cables, no lettering. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. laboratory glassware, oscilloscope, control panel, headset, visor, fur hood, dramatic lighting, smile.
  - **She calls nothing a finding until it is home.** The portrait is the taking-apart, not the reading.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the three sources on the bench and the still face; 2 carried a stitched badge.

- **`odile-ferrant.jpg`** — Section Lead, Survey Corps; certified boundary analyst; came to Fliade on the supply run and read the party's file standing in the wind.
  The arrival: at the station's instrument rack outside in the wind, one pack still on her back, breaking a seal on the third shelf. The rank tab two tiers below the survey lead's, the analyst's patch a small plain geometric mark beside it; both read separately, which is the page.
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A woman in her thirties with a wind-reddened face and short dark hair, in Star Rangers service dress, plain and well kept, carrying small geometric rank marks only: a plain-finished tab at the collar, shapes and a single colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. adapted as cold-weather field dress with the collar tab visible, its single insert pale grey-green, and beside it one small plain geometric patch in a second muted colour, a field pack still on her back, standing at an outdoor instrument rack of three shelves of plain sealed matte housings on a cold stony hillside under a hard wind and grey sky, her hands on a sealed housing on the third shelf, her eyes on it, not on the camera. The housings have no dials, no displays, one small recessed indicator at most, unlit. No lettering, no antennae, no cables. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. goggles, oxygen mask, helmet, visor, laptop, screen, dials, cable spaghetti, dramatic wind-blown hair, smile.
  - **Patch and tab both in frame.** A rank tab says trusted to command; a patch says trusted to be right about one narrow thing.
  - **Delivered 7 October 2026**, variation 2 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: tab and patch both in frame, hands on the housing.

- **`tomas-brennock.jpg`** — chair of Eden's Terrace Committee, grower on terrace five; pulled a plant that afternoon and found its roots white.
  On the terrace, late in the habitat's day, a strawberry plant in his hand roots-up, white and clean, the valve wheel of the terrace loop under his other hand. His face on the roots.
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A man in his fifties with soil on his hands, in plain working clothes, a canvas apron over a faded shirt, standing on a long curved planting terrace inside a ring habitat with rows of low green plants running away behind him under an even diffuse white sky-light, holding up a small uprooted strawberry plant roots-first so that its clean white roots are toward the camera, his eyes on the roots and not on the camera, his other hand resting on a plain painted valve wheel on a pipe at the terrace edge. No labels, no screens, no lettering, no drones. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. greenhouse glass panes, grow lights, hydroponic tubes glowing, tablet, straw hat cliche, smile to camera.
  - **White roots, before the culture.** The page's two minutes are five days apart; the portrait is the afternoon between.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the roots to camera and the hand on the valve.

- **`toval.jpg`** — Krenyi, one of the Quiet-Built, Cadet on Threshold Station's boundary desk under Syra; being trained out of rounding up.
  The desk: a young Krenyi writing a figure by hand, the pen stopped. Built on the human frame and strange only in stillness; pale, elegant, no grey-alien cues. Syra's filed portrait is the kind's reference. Cadet marks minimal.
  References: `src/images/characters/syra.jpg`
  > Candid documentary photograph, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A young Krenyi of the Quiet-Built, built on the human frame and able to pass as almost human: a young man, slender, handsome by ordinary standards, with fine regular features, calm dark eyes, short dark hair and an ordinary healthy complexion, as the first reference image shows his kind, nothing strange about him on inspection and something strange only in how completely still he is, in the Survey Corps field uniform: a modular shell in deep olive over a close-fitting dark liner, cut like practical civilian workwear with a high soft collar, plain and well kept, and not a military tunic; one small plain-finished tab seated magnetically at one side of the collar carrying two short bars and a pale grey-green insert, and nothing else. No paired collar tabs, no epaulettes, no shoulder boards, no row of buttons, no belt, no name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing, seated at a plain matte desk on a boundary station, a sheet of paper before him and a plain pen stopped above a half-written figure, his eyes on the paper with the unreadable attention of someone deciding not to round up, the room's light even and cool from one side. The desk carries only paper and one sealed plain housing with a single small unlit indicator. No screens, no dials, no readable marks on the paper, no lettering anywhere. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. grey alien, huge black eyes, elf ears, prosthetic forehead ridges, glowing skin, Vulcan, android, smile, bald head, shaved head, gaunt, sickly pallor, albino. Photographed, not rendered: real skin with fine texture and the slight unevenness of a living face, even on a pale hairless head; cloth with a real weave, creases and a little lint; high-ISO grain, a real lens with shallow depth of field and slight softness toward the corners, the window light cool and a touch under-exposed, muted natural colour. Render negatives: 3D render, CGI, waxy skin, porcelain skin, airbrushed, over-smooth surfaces, perfect symmetry, glossy stock photograph.
  - *(Revised 11 October 2026: Dermot asked which human-looking characters look odder than they should, with Toval as his example. The prompt had invented "very pale… no hair", which no page says; the Krenyi page says a Krenyi passes as almost human to a low-context observer and is attractive by most humanoid standards, and Syra, the kind's reference, has dark hair. Now an ordinary-looking young man, strange only in stillness.)*
  - **Strange in stillness only.** The page says the passing fails on time, not on inspection; the camera is allowed one still moment.
  - **Delivered 7 October 2026**, variation 1 of 2 (`gemini-3.1-flash-image`, 2K), through `import-image.ps1` at finish strength 1: the stillness and the stopped pen; a lens on the housing was healed out with the housing's own face.

- **Pandoid body, ruled 7 October 2026** (Dermot, verbatim, on the first rolls of Stone-First and Went-Round: *"Pandoids look more like cute giant teddy bears than like sloths."*): the generator had read Teddy's build as a sloth, long-faced with hanging arms. The positive shape is a very large soft toy bear, round head on a round body, short flat face, plush fur, no ears, no claws; *teddy bear toy* comes off the negative and *sloth* goes on. Both portraits re-rolled on it.

- **`stone-first.jpg`** — Pandoid, keeper of the margin below Fliade's roof; moves a stone before entering any place.
  An adult of the Told at the margin where the upper levels shelve down into the deep, seen from a little way off in the fungal light, a fist-sized stone just set down on the silt ahead of it. Teddy's filed portrait is the kind's build at the adult scale; the adult is larger and greyer. Attention on the dark ahead, not on the camera.
  References: `../dermot-cochran-photography/src/images/photos/lion-portrait-at-dusk.jpg`
  > Candid documentary photograph, 16:9 landscape, attention off-frame, at work, never posed to camera, modest, nothing that invites the viewer. Seen from well back in the passage, the way a wildlife photographer at a distance would take it: the being small in the frame, a fifth of the frame's height or less, a round heavy outline like a big soft bear's and nothing like an ape's, lit from behind and to one side by the fungi so that it reads first as a rounded back-lit outline with the fur glowing at its edges, its face half in shadow. A large adult alien being, round and gentle-looking like a very large teddy bear, to a human eye a bit like a giant panda, and photographed the way a wildlife photographer photographs a real giant panda in the wild, with the same weight, the same fur and the same light, though it is grey and plainly not one, and unmistakably not an Earth animal: a big round head on a round body with almost no neck, a short flat face with a very short muzzle, no external ears, a small closed mouth, large dark round eyes set wide, dense soft grey fur in overlapping ridges that looks soft but is real fur, like a wild animal's thick winter coat: uneven, a little matted and damp, pale silt caught in it low down, individual guard hairs catching the fungal light, stocky and heavy-bottomed, upright on two short hind legs, thick limbs of equal length, here older and broader than a youngster, with the fur paler at the crown. Not a sloth: no long face, no hanging arms, no claws. One being only, alone in the frame, standing upright on its two hind legs, never on all fours. It stands at the lip where a wide cavern floor of pale silt shelves down into darkness, lit only by bioluminescent fungi on the rock in soft amber and blue-green, one fist-sized stone newly set down on the silt a stride ahead of it, its face turned toward the dark below and not toward the camera. Nothing else in frame. No tools, no clothing, no light source but the fungi, no lettering. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. sloth, black-and-white colouring, gorilla, ape, cartoon, fur suit, claws, menace, torch beam. Photographed, not rendered: a real camera in a real cave, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. The reference image is Dermot's photograph of a real animal, for light, grain and the texture of real fur only, never its animal. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, fur suit, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art.
  - **The stone is the name.** One act on the page, as the chapter had it.
  - **Delivered 7 October 2026**, variation 1 of 2 of the second roll (`gemini-3.1-flash-image`, 2K, Teddy's portrait sent as the reference), through `import-image.ps1` at finish strength 1, after Dermot's *cute giant teddy bears* ruling: back to the camera, the stone set down ahead; 2 wore a tunic the people do not have.

- **`went-round.jpg`** — Pandoid, an adult of the Told; goes round a thing rather than through it.
  The same people, the same light, a different act: at a passage blocked by fallen rock, the adult already turned toward the side opening it has found, one forelimb on the rock edge. Same reference, same scale as Stone-First so the two read as one people; leaner than Stone-First, the fur darker.
  References: `../dermot-cochran-photography/src/images/photos/lion-portrait-at-dusk.jpg`
  > Candid documentary photograph, 16:9 landscape, attention off-frame, at work, never posed to camera, modest, nothing that invites the viewer. Seen from well back in the passage, the way a wildlife photographer at a distance would take it: the being small in the frame, a fifth of the frame's height or less, a round heavy outline like a big soft bear's and nothing like an ape's, lit from behind and to one side by the fungi so that it reads first as a rounded back-lit outline with the fur glowing at its edges, its face half in shadow. A large adult alien being, round and gentle-looking like a very large teddy bear, to a human eye a bit like a giant panda, and photographed the way a wildlife photographer photographs a real giant panda in the wild, with the same weight, the same fur and the same light, though it is grey and plainly not one, and unmistakably not an Earth animal: a big round head on a round body with almost no neck, a short flat face with a very short muzzle, no external ears, a small closed mouth, large dark round eyes set wide, dense soft fur in overlapping ridges that looks soft but is real fur, like a wild animal's thick winter coat: uneven, a little matted and damp, pale silt caught in it low down, individual guard hairs catching the fungal light, stocky, upright on two short hind legs, thick limbs of equal length, here leaner than most adults and the fur a darker grey. Not a sloth: no long face, no hanging arms, no claws. It stands in a rock passage deep underground where the way ahead is blocked by a fall of boulders, lit only by bioluminescent fungi on the rock in soft amber and blue-green, its body already turned three-quarters away from the blockage toward a narrower side opening at the left of frame, one forelimb resting on the rock edge of that opening, its face toward the side way and not toward the camera. Nothing else in frame. No tools, no clothing, no light but the fungi, no lettering. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. black-and-white colouring, gorilla, ape, teddy bear toy, cartoon, fur suit, claws bared, menace, torch beam, digging. Photographed, not rendered: a real camera in a real cave, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, the exposure a touch under so the darks hold detail without going to black, muted natural colour, the small untidy imperfections a real photograph keeps. The reference image is Dermot's photograph of a real animal, for light, grain and the texture of real fur only, never its animal. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, Pixar, Disney, clay or plasticine sculpture, plush toy, stuffed toy, felt, fur suit, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art.
  - **Already turned.** The name is a way of being; the portrait catches it mid-act.
  - **Delivered 7 October 2026**, variation 2 of 2 of the second roll (`gemini-3.1-flash-image`, 2K, Teddy's portrait sent as the reference), through `import-image.ps1` at finish strength 1, after Dermot's *cute giant teddy bears* ruling: no clothing and already turned; 1 wore a harness.

### 9. Missing portraits — Tissadelle's second frames (queued 7 October 2026)

Dermot's direction, verbatim: *"Add a second Season 1 frame and a second
Season 5 frame"*, taking up the line left open on 5 September (each season may
have *two or more* portraits; *no brief needed — same prompts, different
moment — but not run until asked*). Queued here for the desktop, since
generation needs the Gemini key; issue #1013 (`needs-desktop`) names this
section. Both **16:9 landscape** at 1200×675, filed under
`src/images/characters/tissadelle/` beside `season-1-cadet.jpg`, through
`import-image.ps1 -MaxEdge 1200` with the finish at strength 1. The published
header and the cadet frame go as the two references, for her face only. The
28 July guardrails, the modesty bar and the standing negative are inside each
blockquote. The uniform and rank marks are the 5 September prompts of record
(`image-prompts.md`, *2026-09-05*): Season 1 a single bar with the slate-blue
insert and no ribbons, Season 5 three concentric rings with the ribbon row,
the plain diamond patch on both.

**The moments.** Different from the two filed frames, which are both a
sealed compartment with a hand on a housing. Season 1 is the posting itself:
the season page's own line (*Cadet Tissadelle Shepherd's first posting*) and
Dock Seven, where Season 1 opens — no chapter puts her on the page in Season
1, so the frame asserts no scene, only the posting. Season 5 is the Halyx
corridor (*Refusal to Certify*, S05E01C01): she asked what the corridor
sounded like and then asked to be taught, so the frame is a Line Captain's
hand flat on the frame at the seam, listening. Qiren Tal stays out of frame,
since the Veyr body has no filed picture and is not asserted here.

**At filing**, the gallery items on `src/characters/tissadelle-shepherd.md`
take `season: 1` / `season: 5` and these captions, with alts written from the
files: *Season 1 — Cadet, first posting* and *Season 5 — Line Captain, Halyx
Relay*. The season pages pick them up with nothing else to do.

- **`tissadelle/season-1-first-posting.jpg`** — her first posting: a cadet newly arrived on Dock Seven of Threshold Station, kit at her feet, looking along the dock.
  References: `src/images/characters/tissadelle-shepherd.jpg`, `src/images/characters/tissadelle/season-1-cadet.jpg`
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A woman in her early twenties with long red hair tied back for work and blue-green eyes, the same face as the reference images, standing on the deck of a wide, quiet docking hall inside a boundary-survey station eight centuries from now, newly arrived: a single plain soft field kit bag on the deck at her feet, one hand holding its strap, her face turned to look along the length of the dock away from the camera, taking the place in, upright, self-possessed, alert rather than eager. She wears the standard field uniform of an interstellar rescue and survey service: a modular matte shell in dark slate-grey over a close-fitting thermal liner, sealed seams, a plain stand collar, utilitarian and unornamented, sized to her rather than tailored. Absolutely no chevrons, no stripes, no wings, no stars, no eagles, no arrowheads, no crests, no emblems, no badges of any other kind, no name tape, no name badge, no printed words, no letters and no numerals anywhere on her clothing. No braid, no epaulettes, no belts, no buckles, no piping, no cape, no armour plates, no flags. Nothing on the uniform glows. The chest carries exactly two things and nothing else: one small rectangular hard-edged metal tab, plain matte finish, seated proud of the chest, marked only with a single plain horizontal bar carrying a narrow slate-blue insert; and beside it one small plain fabric patch that is a single flat diamond shape with nothing drawn on it. Nothing below them: no ribbons and no decorations of any kind, because she is newly qualified. The dock is clean, plain and very large: flat matte wall and deck panels, sealed plain housings with flat fronts and honest seams, one wide sealed dock door closed at the far end, soft diffuse light from concealed recessed sources, a faint cool haze in the far distance of the hall and nothing shown through any opening. Unglamorous available light; visible skin texture; no beauty retouching, no styled hair, no makeup emphasis. Nothing in the image invites the viewer; she is at work. Muted realistic palette. No other people in frame. Use the reference images only for her face, hair colour and eye colour; do not copy their clothing, insignia, setting or lighting. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. coveralls, boiler suit, backpack with straps and buckles, wheeled suitcase, airport, hangar with aircraft, spaceship visible, crowd, planet through a window, stars through a window, neon, smile to camera.
  - **Two marks, nothing below.** The 5 September run put a ribbon row on a cadet twice; it is negated by name here.

- **`tissadelle/season-5-halyx-corridor.jpg`** — Halyx Relay Station's outer-ring transit corridor, 2831: a Line Captain's hand flat on the frame at the seam, listening for what the monitors could not sample.
  References: `src/images/characters/tissadelle-shepherd.jpg`, `src/images/characters/tissadelle/season-1-cadet.jpg`
  > Cinematic candid portrait, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A woman in her early thirties with long red hair tied back for work and blue-green eyes, the same face as the reference images, crouched on one knee at the structural frame of a long curved transit corridor inside a relay station eight centuries from now, the flat of one bare hand pressed to a plain seam in the frame where two matte structural sections meet, her head inclined a little toward the hand as if listening to the metal, her eyes down the length of the corridor and not on the camera, patient and entirely attentive. She wears the standard field uniform of an interstellar rescue and survey service: a modular matte shell in dark slate-grey over a close-fitting thermal liner, sealed seams, a plain stand collar, utilitarian and unornamented, sized to her rather than tailored. Absolutely no chevrons, no stripes, no wings, no stars, no eagles, no arrowheads, no crests, no emblems, no badges of any other kind, no name tape, no name badge, no printed words, no letters and no numerals anywhere on her clothing. No braid, no epaulettes, no belts, no buckles, no piping, no cape, no armour plates, no flags. Nothing on the uniform glows. The chest carries exactly three things and nothing else: one small square hard-edged metal tab, plain matte finish, seated proud of the chest, engraved only with three thin concentric circles like a target with no centre dot; beside it one small plain fabric patch that is a single flat diamond shape with nothing drawn on it; and below them a single short row of small dull-coloured service ribbons. The corridor is wide, long and empty, curving gently away, its walls and floor flat matte structural panels in muted grey with honest seams and sealed plain housings at intervals, at most one small unlit indicator on any of them, soft even light from concealed recessed sources, nothing shown through any opening. A small plain sealed instrument case stands closed on the floor beside her and nothing is attached to it. Unglamorous available light; visible skin texture; no beauty retouching, no styled hair, no makeup emphasis. Nothing in the image invites the viewer; she is at work. Muted realistic palette. No other people in frame. Use the reference images only for her face, hair colour and eye colour; do not copy their clothing, insignia, setting or lighting. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. stethoscope, headphones, handheld scanner with a screen, tablet, torch, glowing seam, cracked wall, sparks, steam, pipes and valves, industrial grime, second person, Veyr or alien figure, smile to camera.
  - **The hand, not an instrument.** The chapter's point is that the detecting instrument was a refusal and an ear; the pickups she mounts later are not in the frame.

## History (2026-07-24)

A full visual review of ~250 files in July 2026 found five character portraits
with flatly wrong content, a Vedic astrological chart standing in for a star
atlas, a broken codex cover, and a set of quality issues. All of the
wrong-content items are now fixed.

**Replaced from Firefly generations** (alt text rewritten on each):
`ilse-korvain` (US Army stock photo → Imperium cyber-revenant; v2 after v1
tipped into body horror), `aldera` (`.png` fantasy forest → a tabby matching her
own gallery field-photos), `maren-solveig-krast` (contemporary policewoman →
archival general's portrait), `karla-wender` (corporate headshot labelled
"engineer" → a pilot at the helm), `orla-shepherd` (office businesswoman →
upland flockholder), `qiren-tal` (dark-fantasy monster → basalt-sheen insectoid
engineer, from Dermot's own reworked prompt), `rook-7` (too sleek → aging
retrofit chassis; v2 after v1 arrived furnished with the NYPD), `nessa`
(purebred studio photo → wind-matted cat on barnacled rock), `lore/cerebraun`
(grey-alien bust → architectural indirection), `hero/atlas-chart`,
`hero/s01e01-corridor`, plus a `lore/five-layers` upgrade to a layered-planes
galaxy. `codex/cosmic-limitation-on-evil.jpg` was rebuilt with the cover
generator (dissolution ring, `CONTESTED` stamp from the paper's own status).

**Two corrections to the audit itself**, both worth remembering:

1. The reported "three-way lore image shuffle" was a **false positive**. All
   three files (`five-layers`, `formation-of-star-rangers`,
   `frontier-transformation-protocols`) already matched their own alt text on
   inspection, and git confirmed none had been touched since 2026-07-13 — so
   nothing was ever shuffled, and no fourth image was missing.
2. The `cerebraun` target was mis-named: the grey-alien bust was on
   `lore/cerebraun.jpg` (the **species** entry), not
   `lore/cerebraun-hegemony.jpg`, which is an on-template designed cover for the
   **polity** entry and was correctly left alone.

---

## Meta-page heroes (2026-07-25)

The out-of-character section — `/story-engine/` and the Journal index under it —
now has heroes of its own, both chosen from a set of eight generated candidates.
Three pages (About, Journal, Story Engine) had been opening with the same
`hero/about-writer.jpg`; About keeps it, the other two no longer share it.

- **`hero/story-engine.jpg`** — a brass machine whose riveted nameplate reads
  *Story Engine*, gears below, steam rising. On `/story-engine/`. Whimsical
  brass on a hard-SF site is deliberate and confined to the out-of-character
  section; nothing in-universe uses it.
- **`hero/journal-notebook.jpg`** — an open journal headed *Author's Journal*
  above a handwritten dated entry. On the Journal index.

**Selecting a text-bearing generation.** Six of the eight candidates were
rejected on lettering, which is the same failure the codex-cover generator
exists to avoid — an image model cannot spell, so the only safe pick is one
where every legible word is short and correct. Rejected: a gear array labelled
`PLOT / CHARACTER / SETTING / CONFLICT` that labelled two different gears
`PLOT`; a printing press whose scroll read `bd what...` and dissolved into
gibberish at the bottom; a journal quoting a named real author (attribution the
site would then be making in a decorative image) and hard-dating itself to 2024;
a journal spread carrying a pencil-sketched face, which reads as a specific
character on a page that is explicitly *not* in-universe. The two winners each
carry one short correctly-spelled phrase and nothing else legible.

**Cropping portrait generations for `.page-hero-image`.** Heroes render at
`width: 100%; height: 320px; object-fit: cover` in an 1100px column — roughly
3.4:1 — so CSS keeps only the middle band of whatever it is given. Both sources
were 768×1152 portraits; each was cropped to 16:9 around a chosen centre and
upscaled to 1600×900, with the centre picked so that the CSS band lands on the
lettering (verified by simulating the 1100×320 crop before committing, not
after). A naive centre crop put the nameplate and the journal's title outside
the visible band on both. Worth repeating for any portrait-orientation source.

### Intake 2026-10-07 — the finish, and which pages carry an image

Dermot's question the same day: *"check for new images needed or missing
images on the star-rangers repo"*, then the rule above on which pages carry
one. Counted from `main` at 709eea7a: 52 lore entries pending in this file's
manifest (prompts written, generation the bottleneck); 23 lore pages and 12
character pages with neither an image nor an entry here; two stamped
placeholder cards still live (the About the Author and Characters heroes); no
page references a file that is absent. Read by his rule:

**Lore pages that get an image** (prompts to write; photo-first where a camera
could have taken it, from `own-photography.json`): *Greenward* and *The Guest
Ring* (habitats, generated); *New Cotswolds* and *Winterbourne* (settled
country, his own landscape frames as plates); *Quern* (a planet, generated);
*The Ilveth* (a people, generated); *The Tally* (a people and their ark,
generated, or an emblem card); *The Eden Bureau Uniform* (a garment on a
figure at work, generated); *The Honest Dark* (a night sky, his own frame);
*The Thin Inheritance* (soil, his own close frame); *Weather on Other Worlds*
(a sky, his own storm frame); *Where the Weather Stops* (a cave, his own frame
if one exists, else none); *The Star Rangers Music Corps*, *The Star Rangers
Survey Corps* and *The Archive* (institutions, emblem cards by
`make-emblem-card.ps1`).

**Lore pages that stay bare** (abstract concepts, doctrine, law): *Climate
Repair and the Origin of Terraforming*, *Commissioned Standing*, *Habitable,
for Whom*, *Habitats and the Worlds Beneath Them*, *Performers and Generated
Work*, *The Enrolled Text*, *The Ladder in Other Tongues*, *The Shape of a
Life*. *Habitable, for Whom* is a Physics page and may take an inline diagram.

**Characters that get a portrait** (a body the record describes): Ariel Pinya,
Bram Tollick, Ilsabet Corren, Ingrid Halvorsen, Odile Ferrant, Oriel Fenwick,
Tomas Brennock, Wren of Knight Pellam (human); Toval (Krenyi, Syra's portrait
as the kind's reference); Stone-First and Went-Round (Pandoid, Teddy's
portrait as the kind's reference, *more like a panda*).

**Character that stays bare:** The Kept Line, a Dragon known only from
instrument logs.

The entries for the 20 generated images are written: lore under *5c* and
portraits under *8* in *Open work*. Dermot's word on the spend the same day
(*"Cost of image generation should be ok"*), and the run started the same hour.
Ariel Pinya came off the portrait list on reading her page, which says the
record holds no portrait of her; she stays bare by her own page.

**Filed the same day without a generator:**

- **`weather-on-other-worlds.jpg`** and **`the-thin-inheritance.jpg`** are
  Dermot's own frames as they are: *Acacias Under a Storm Sky* and *Yellow
  Clusters on a Fallen Branch* from the portfolio, re-saved at 1600 wide
  without metadata, uncropped and untouched. Photo first, generation last, at
  its first step: a doctrine page about weather on any world is honestly
  illustrated by weather on this one, and a page about soil by the floor that
  is making it. Neither page claims where the picture was taken.
- **`star-rangers-survey-corps.jpg`**, **`star-rangers-music-corps.jpg`** and
  **`the-archive.jpg`** are emblem cards by `make-emblem-card.ps1`, in the
  Safety Corps card's family: Survey Corps device `triad` (three nested arcs,
  the branches under one standard), tint `#121A1C`, accent `#A9C4B3` (the
  Survey track's pale grey-green), epithet *The Corps That Collects*,
  qualifier *Archive, Planetology, Meteorology, Ecology, Xenolinguists*; Music
  Corps device `lagrange` (five points in an arc, read as notes on a stave),
  tint `#1C1624`, accent `#D6B36A`, epithet *Music, and Whatever Stands in Its
  Place*, qualifier *A College of the Academy*; The Archive device `rings`
  (concentric, a shelf that appends), tint `#1A1712`, accent `#D9C7A0`,
  epithet *Older Than the Corps, Owned by None*, qualifier *The Record, and the
  Institution That Keeps It*. The epithets are authored here, from each page's
  own first lines, and are not fields of any page.

### 10. Missing portraits — the seven founding viewpoints (queued 10 October 2026)

Dermot's direction, verbatim: *"Run the seven missing portraits"*, the day
after the seven character pages for the POV ids that had none (PR #1050).
Each is a person with a body, so each gets a portrait under the 7 October
rule. All **16:9 landscape**, filed through `import-image.ps1 -MaxEdge 1200`
with the finish at strength 1. The 28 July guardrails and the modesty bar
inside every blockquote: at work, attention off-frame, nothing that invites
the viewer, no lettering, no period technology. Heritage is not in the record
and not in the prompt; gender is the record's; age only where the record
implies it. Six are the founding era, 2712 to 2723 UCSD, under the
old-fashioned hint: an earlier century than the record's present, with the
Military Space Command's severe service dress where the page wears it
(`sildron-drey.jpg` is the precedent). The seventh is a Science Corps
Principal in 2814, under the Ranger block.

- **`ysolde-pitch.jpg`** — *She stayed at her desk instead, and began drafting the report she expected to write afterward, in whichever tense turned out to be true.*
  Eden's chief scientist at twenty to four in the morning, station time, the moment she signs the model over and does not go to the docking ring. The habitat is a working interior, not a laboratory set.
  > Cinematic candid portrait of a woman of middle years, a habitat's chief scientist, upper body, seated at a plain worktable in a small quiet office aboard a space habitat in the small hours, one hand flat on a closed plain folder, her attention on the dark window to one side and not on the viewer. Plain practical working clothes of an earlier century of spaceflight, no insignia, no name tape, no printed words, no letters and no numerals anywhere. Composed, tired, entirely unhurried; the face of someone who has decided a thing and will not watch it happen. Dim warm desk light, a dark viewport with no planet in it, bare walls. No screens, no tablets, no glowing panels, no meters, no toggles, no antenna. No glassware, no equipment wall. Muted ochre, grey and one warm lamp. Documentary realism, nothing dramatic. Landscape orientation, 16:9.
  - **The desk is the picture.** She is the one who did not go.

- **`beatrix-kilbride.jpg`** — *Last chance to be the fourth name that isn't on this list.*
  The cargo captain at the airlock in 2712, the moment before the Constant Margin goes. Working dress, not a uniform; the hauler is a modified cargo vessel and the ring is a habitat's docking ring.
  > Cinematic candid portrait of a woman of middle years, a cargo captain, upper body, standing at the open inner hatch of a docking-ring airlock aboard a space habitat in an earlier century of spaceflight, one hand on the hatch frame, looking along the ring toward the hull she is about to board and not at the viewer. Plain hard-worn working coverall of a cargo crew, no insignia, no name tape, no printed words, no letters and no numerals anywhere. Flat, steady, decided; the face of someone who has never wanted a decision that still had a door. Hard practical light from above, the ring curving away behind her, dark hatch metal, scuffed surfaces. No screens, no tablets, no glowing panels, no meters, no toggles, no weapons. Muted grey, rust and dull steel. Documentary realism, nothing dramatic. Landscape orientation, 16:9.
  - **No ship in frame.** The record describes the hauler only as modified; the hatch and the ring carry it.

- **`wren-okafor.jpg`** — *There was no data past that point yet. There was only the going.*
  The boundary analyst in the instrument bay of Patience First before departure, 2714. A small ship, six aboard; the bay is cramped and worked.
  > Cinematic candid portrait of a woman of indeterminate age, a boundary analyst, upper body, standing in the cramped instrument bay of a small spacecraft in an earlier century of spaceflight, one hand resting on a plain closed instrument case, her attention on something beyond the bay's hatch and not on the viewer. Plain practical working clothes of a ship's crew, no insignia, no name tape, no printed words, no letters and no numerals anywhere. Clear, certain, without bravado; the face of someone who has read every caveat and is still going. Cool working light, close metal walls, cabling run tidily along a bulkhead, a dark hatch beyond. No screens, no tablets, no glowing panels, no meters, no toggles, no antenna, no weapons. Muted grey-blue, dull steel, one pale light. Documentary realism, nothing dramatic. Landscape orientation, 16:9.
  - **Nothing of the terminus.** The frame is before departure and shows nowhere she is going.

- **`adaeze-okafor.jpg`** — *Then keep the record. Since apparently that's the only thing either of us actually has the authority to do.*
  A civilian in a bare correspondence office at Solar Command on Mars, 2715, across a desk from a lieutenant who is not in the frame. She has travelled on savings that will not survive a second trip.
  > Cinematic candid portrait of a woman of indeterminate age, a civilian visitor, upper body, seated on the visitor's side of a bare institutional desk in a plain office on Mars in an earlier century of spaceflight, her coat still on, hands folded, her gaze level and fixed on the person across the desk who is not in the frame. Plain travelling clothes of a private citizen, no insignia, no printed words, no letters and no numerals anywhere. Composed, grieving, entirely in control of it; the face of someone who has written ten letters and come in person for the eleventh. Flat institutional light, a bare wall, a narrow window with rust-coloured Martian ground beyond it. No screens, no tablets, no glowing panels, no documents on the desk, no flag, no crest. Muted rust, grey and dull olive. Documentary realism, nothing dramatic. Landscape orientation, 16:9.
  - **The desk is bare.** The form letter is the whole of what the institution gave her, and it is not shown.

- **`rutger-voss.jpg`** — *He filed her visit, verbatim where he could manage it, into a running correspondence log the office kept for exactly this purpose and forwarded to no one who had ever asked to see it.*
  The junior lieutenant at the Casualty Correspondence Office desk, 2715: younger than she expected, in the Military Space Command's severe service dress, the same institution as Drey's frame.
  > Cinematic candid portrait of a young man, a junior lieutenant, upper body, seated behind a bare institutional desk in a plain office on Mars in an earlier century of spaceflight, in the severe service dress of a militarised space command of that era, plain and well kept, with no name tape, no nameplate, no medals, no printed words, no letters and no numerals anywhere, writing by hand in a plain bound log and looking down at it, not at the viewer. Serious, young, careful; the face of someone keeping a record nobody has asked to see. Flat institutional light, a bare wall, a narrow window with rust-coloured Martian ground beyond it. No screens, no tablets, no glowing panels, no meters, no toggles, no weapons, no flag, no crest. Muted rust, grey and dull olive. Documentary realism, nothing dramatic. Landscape orientation, 16:9.
  - **Same room family as Drey and Adaeze.** Solar Command on Mars has one look across the three frames.

- **`petra-solano.jpg`** — *This is the sentence the hearing needed eleven weeks to produce. Everything else was true. This is the part that's memorable.*
  The delegate in the hearing chamber on Mars in 2719, the eleventh week of testimony, in the gallery seat of an outer-station delegation. She is listening, and the frame does not show what she is holding.
  > Cinematic candid portrait of a woman of middle years, a station delegate, upper body, seated in the raked gallery of a formal hearing chamber on Mars in an earlier century of spaceflight, leaning slightly forward with her hands below the frame's edge, her attention on the floor of the chamber off to one side and not on the viewer. Plain civil dress of a public delegate, dark and unornamented, no insignia, no printed words, no letters and no numerals anywhere. Attentive, quiet, decided; the face of someone who has recognised a sentence the moment it was said. Formal institutional light, rows of plain seating behind her, a tall chamber wall, no crest, no flag, no banner. No screens, no tablets, no glowing panels, no microphones, no recording device of any kind visible. Muted stone, dark cloth and one cold light. Documentary realism, nothing dramatic. Landscape orientation, 16:9.
  - **Her hands are out of frame on purpose.** A visible recording unit would be a period device and a distortion; the record says only that her thumb was already on it.

- **`yusuf-adair.jpg`** — *He had wanted it to be the instruments. He would have said so to anyone who asked, because it was true and because wanting a thing has never been a correction.*
  A Science Corps Principal on the Survey Corps Standards Office calibration floor on Earth, 2814, with the filing he has read more than anything that year. Ranger block; the tab's insert is left to a single muted colour, since the record gives the science track no colour.
  > Star Rangers service dress, plain and well kept, carrying small geometric rank marks only — a plain-finished tab at the collar, shapes and a single muted colour insert and nothing else. No name tape, no nameplate, no stitched badge, no printed words, no letters and no numerals anywhere on the clothing. Cinematic candid portrait of a man of indeterminate age, a Science Corps Principal, upper body, standing at a long plain calibration bench on a quiet institutional floor on Earth, daylight from high windows, a closed plain folder under one hand, looking along the bench at an instrument under a cloth and not at the viewer. Patient, exact, unhurried; the face of someone who wanted the answer to be the instruments and went to the record instead. Spare interior, pale stone and brushed alloy, long shadows, nothing on the walls. No screens, no tablets, no glowing panels, no meters, no toggles, no antenna, no glassware, no equipment wall. Muted grey, pale daylight, one warm neutral. Documentary realism, nothing dramatic. Landscape orientation, 16:9.
  - **The instrument stays under its cloth.** The record never describes the bench kit, and a Counterpane instrument drawn by the generator would be an invention.

**Delivered 10 October 2026**, all seven, one run of two variations each; the picks and what set the others aside are in `image-prompts.md` under the same date.


### 11. Missing portraits — photorealism re-rolls with no prompt of record (10 October 2026)

The 10 October triage below found one rendered portrait whose prompt was never
recorded here: `sorcha.jpg`, filed with her page in PR #188 before prompts lived
in this file. Its prompt is written fresh from `src/characters/sorcha.md` and
the filed `image_alt`, under the house portrait rules: a person who does not
exist, modest, at work, attention off-frame.

- **`rook-7.jpg`** — *a bipedal robot on an older civilian chassis*, its sensor arrays non-standard and of unconfirmed origin; Field Analyst, Threshold Station Constabulary. Added 11 October 2026 at Dermot's "Made with care": the filed image (a scuffed grey robot with mismatched modules bolted on, at a cluttered desk) had no prompt of record.
  > Documentary photograph taken inside the world by a 29th-century camera, available light: a bipedal analytical robot seated at a clear desk in the quiet, well-kept constabulary office of a shore station, upper body, attention on a single sheet of plain paper before it and not on the camera. An older civilian design, its body a smooth pale grey composite shell in considered proportions, plainly a machine with no human face. Its head carries sensor arrays that are visibly of a different and newer make from the chassis, neatly fitted and deliberate, recessed lenses behind machined rings, so the difference is a fact and not damage. Made with care: a well-designed object someone was proud to make, every joint neatly shrouded, kept immaculate. The office is plain and clean, a smooth painted wall in a soft warm tone, daylight from one side. Photographed, not rendered: high-ISO grain, a real lens with shallow depth of field, a touch under-exposed, natural colour. Negative: readable text, lettering, numerals, labels or written characters of any script anywhere in frame; screens, monitors, consoles, dials, gauges, indicator lights, holograms, cables; visible lamp or light fitting; clutter, grime, rust, scuffs, bolted-on mismatched parts, exposed wiring; crash-test dummy, shop mannequin, toy robot, industrial arm, human face; 3D render, CGI, video-game render. 16:9 landscape.
- **`sorcha.jpg`** — Sorcha Lichata, itinerant healer of boundary-proximate settlements; *she arrives after the physicians have gone*. The page's own furniture: the two-compartment satchel, the patient, the work that costs her. The `image_alt` gives the long silver-fair hair, the homespun wrapped clothes and the kneeling posture; the page gives no age and no origin, so neither is in the prompt.
  > Candid documentary photograph, 16:9 landscape, the face in the upper third of the frame, attention off-frame, at work, never posed to camera, dressed for the work and the place, modest, nothing that invites the viewer. A woman, an itinerant healer, upper body, kneeling at the bedside of a patient in a small plain stone room in a settlement at the edge of the settled worlds, at night, one hand resting flat on the heavy wool blanket over the patient, who is only a shape under the blankets at the lower edge of frame with no face shown, her eyes on the patient and not on the viewer. Long silver-fair hair tied back plainly, a tired, weathered face with real lines and no make-up; the face of someone who has worked past her own reserve and is still listening. Plain homespun wrapped working clothes of undyed wool, worn at the cuffs, a worn leather satchel at her hip with its flap closed. Light from a single small candle out of frame to one side, warm and low, the stone walls in shadow. Quiet, attentive, unsentimental. Muted umber, undyed wool, warm low light. Negative: readable text, lettering, numerals, signage, labels, branding or written characters of any script anywhere in frame; holograms, projected light, glowing displays, screens, monitors, consoles, dials, gauges, meters, knobs, toggles, tube screens, exposed cables, tablets, laptops; visible lamp, light fitting or bulb; flat studio backdrop, gradient background, glamour lighting, corporate headshot, posed smiling to camera; weapons. Beauty lighting, flawless skin, youthful model, low neckline, fashion styling, fantasy costume, sorceress, glowing hands, magic effects, halo, mystic pose. Photographed, not rendered: real skin with pores, fine lines and the slight unevenness of a living face, stray hairs, cloth with a real weave, pilling and creases, the satchel leather scuffed and darkened by handling; high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, clay or plasticine sculpture, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin, glamour retouching.
  - *(Revised 10 October 2026, photorealism triage: the filed frame read as a glamour portrait, airbrushed, and is portrait-shaped in a 16:9 slot. No earlier prompt is on record, so this one is new, written to the page and the filed alt; the candle stays, out of frame, as the room's only light.)*

*Added 11 October 2026, century audit batch 1:* three hero-cast portraits whose prompts were never entered in this file (Karla Wender's was worked up in Firefly from a generation, Kai Larsen's is unrecorded, and Dorian Calloway's 29 July prompt sits only in `image-prompts.md`). Each is written fresh from its page under the house portrait rules and the 11 October conventions.

- **`karla-wender.jpg`** — Chief Pilot, pilot section, at Season 1's start: a Chief on the piloting and navigation track, so a bar-and-ring rank tab with the track's deep indigo insert (`src/lore/star-rangers-command-hierarchy.md`). The filed frame (a navy flight suit at a helm, hands on a control yoke, lit by glowing displays) read as a rendered set (class C), and the yoke and the displays are both refused. Her page names no corps, so the shell is a plain field shell in a neutral dark rather than a guessed corps colour. *She does not perform authority. She carries it.* The page gives no appearance; her age is from its dates (a Novice about 2800, Chief by the early 2820s), so the mid-forties in 2826.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a woman in her mid-forties, the chief pilot of a Star Rangers pilot section, upper body, standing at the end of a plain table in the section's quiet ready room aboard a station in the year 2826, one hand resting flat on a closed hard-shelled flight case, her attention on a pilot out of frame who is speaking, listening rather than commanding, never posed to camera. A composed, weathered face with real lines and no make-up, hair cut short and practical; she does not perform authority, she carries it. She wears the Star Rangers field uniform on duty: a modular field shell of matte neutral charcoal over a high-necked liner, simple considered cut, closed with no visible fastening, and at the collar a single small rank tab, a plain bar and a ring in deep indigo, shapes only; no other marks. The room is clean and kept: seamless walls of pale grey composite meeting floor and ceiling in rounded coving, fittings set flush, soft light spread evenly from long slots in the surfaces, a long low window behind her onto plain black space, a mug and a folded jacket on the table giving the room its colour. Cool muted palette with warm skin and one note of indigo. Photographed, not rendered: real skin with pores, fine lines and the slight unevenness of a living face, stray hairs, cloth with a real weave and creases; high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, signage, labels, stencilled markings, branding or written characters of any script anywhere in frame; control yoke, joystick, helm, pilot's seat, cockpit, canopy, instrument panel, screens, monitors, displays, consoles, keyboards, dials, gauges, toggles, indicator lights, holograms, glowing navigation displays; spacecraft, starfield, planet, Earth in the window; visible lamp, light fitting or bulb; grime, rust, scuffs, debris, neglect; flight suit with patches, mission patches, flag, name tape, logo, badge with lettering, wings badge, epaulettes, braid, medals, armour, skin-tight bodysuit, glowing trim; weapons; flat studio backdrop, corporate headshot, posed smiling to camera, glamour lighting, low neckline. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, glossy starship bridge, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Written 11 October 2026, century audit batch 1. Not at a helm: the pilot section's ready room is where a Chief Pilot is read by her section, and it keeps the yoke and the displays out of frame by construction rather than by negative.)*
- **`kai-larsen.jpg`** — Commander, Orbital Five-O, the Governor's investigative task force across the Compact's five habitats; a former Survey Corps officer who resigned his commission. The filed frame (a NASA-style flight suit with patches, an ISS-era station, screens, a smile to camera) read 20th or 21st century (class B). Five-O is a uniformed unit, *design unstated* (`src/lore/orbital-habitats-compact.md`), so the prompt gives a plain dark uniform jacket and invents no colour, badge or mark; he is no longer a Ranger, so no Ranger shell or tab. *He does not raise his voice. He has never needed to.* The page gives no age or appearance; the forties suit a man with a Survey career behind him.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a man in his forties, the commander of a small investigative task force serving five orbital habitats, upper body, standing on a quiet gallery walkway inside a large rotating space habitat in the year 2826, half-turned to look down at something across the habitat's interior out of frame, attentive and unhurried, quietly certain, never posed to camera and not smiling. A lean, weathered face with real lines, short hair, the stillness of someone used to being listened to. He wears a plain dark uniform jacket of matte charcoal cloth, simple considered cut, band collar, closed with no visible fastening, no lapels, over a plain dark high-necked shirt; no patches, no badges, no insignia, no marks. Behind him and below, softly out of focus, the habitat's cultivated green terraces and small well-made composite buildings curve upward into haze; the gallery itself is clean and kept, a low solid balustrade of smooth pale composite, seamless surfaces, rounded coving, fittings set flush, soft daylight-coloured light spread evenly through the volume. Muted natural palette, warm skin, charcoal and green. Photographed, not rendered: real skin with pores, stubble, fine lines and the slight unevenness of a living face, cloth with a real weave and creases; high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, signage, labels or written characters of any script anywhere in frame; flight suit, jumpsuit, mission patches, flag patch, name tape, logo, badge, wings, epaulettes, braid, medals, armour, glowing trim, military uniform, police uniform, business suit, necktie, lapels; screens, monitors, displays, consoles, operations floor, keyboards, dials, gauges, indicator lights, holograms; Earth in a window, starfield, International Space Station, modular station, cables, pipework; visible lamp, light fitting or bulb; railway, rail line; grime, rust, debris, neglect; weapons; flat studio backdrop, corporate headshot, posed smiling to camera, glamour lighting. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Written 11 October 2026, century audit batch 1. The gallery over a habitat interior carries the remit, five habitats, without a screen; the uniform is plain because its design is unstated, and a design for it is his to rule if a page ever needs one.)*
- **`dorian-calloway.jpg`** — Chief Commissioner of the Orbital Habitats Compact: administrative coordination across the five habitats, answering to Governor Voss, reading every Commissioner's report himself. No uniform, settled 29 July and still standing (`image-prompts.md`, *Why no uniform*). The filed frame (a drop-ceiling office, a wall of monitors, a lapelled suit) read 20th or 21st century (class B). His page gives no pronoun, age or appearance; the man in his late fifties is the filed frame's, kept for continuity. Dress per `civilian-dress.md`: a senior professional in a plain jacket over ordinary clothes, no tie and no lapels (ruled the same day), so the 29 July lapel pin goes too.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, the face in the upper third of the frame: a man in his late fifties, a senior civil administrator who coordinates five orbital habitats, upper body, standing at a long plain table in his office aboard a large rotating space habitat in the year 2826, one hand resting on a single closed document folio, half-turned toward a colleague out of frame who has just spoken, as though interrupted mid-shift, composed, unhurried and faintly tired, never posed to camera. A lined, attentive face, greying hair, reading glasses folded in his shirt pocket. His own clothes, no uniform: a plain jacket of dark slate woven cloth, band collar, no lapels, worn open, one sleeve turned back, over a plain high-collared shirt in a soft pale colour; no tie, no pin, no badge. The office is clean, kept and quietly lived in: seamless walls of warm pale composite meeting floor and ceiling in rounded coving, fittings set flush, soft light spread evenly from long slots in the surfaces, a cup on the table and a green plant on the sill giving the room its colour, and a wide window behind him onto the habitat's cultivated green terraces curving upward into haze. Muted natural palette, slate, warm skin and green. Photographed, not rendered: real skin with pores, fine lines and the slight unevenness of a living face, cloth with a real weave and creases at the turned sleeve; high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field and slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, signage, labels or written characters of any script anywhere in frame; screens, monitors, wall displays, status boards, diagrams, consoles, keyboards, computers, desk phones, filing cabinets, ring binders, printouts, paper stacks, cables, desk lamps, drop ceiling, fluorescent panels, dials, gauges, indicator lights, holograms; visible lamp, light fitting or bulb; grime, clutter, neglect; business suit, necktie, lapels, lapel pin, tweed, herringbone, uniform, epaulettes, insignia, name tape, logo or lettering on any garment; flat studio backdrop, corporate headshot, posed smiling to camera, glamour lighting. Render negatives: 3D render, CGI, octane render, video-game render, animated film still, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - *(Written 11 October 2026, century audit batch 1. The wall of displays that carried the remit in July goes; the window onto a habitat carries it, and the one closed folio stands for the reports he reads himself.)*

*Added 11 October 2026, century audit batch 2:* the two Bubochka frames, which have never had an entry in this file (the first was filed with no prompt kept, the second from the 29 July Firefly prompt in `image-prompts.md` § 3). Under Dermot's ruling the same day that the century rule reaches the Undercover Pets rooms (*"Yes, the rooms do"*), the audit read both as a present-day farmhouse kitchen (class B: knobbed cupboards, open shelves of jars, glazing bars, a glass of milk). The rabbit, the mug, the marshmallows, the linen cloth and the window light are hers and are kept; the kitchen becomes an Eden apartment's. **The two travel as a pair**: the joke is one animal photographed twice, so both prompts carry the same literal attributes (the generator has no memory between frames), and if only one of a round holds, both wait.

- **`bubochka.jpg`** — trainee, Undercover Pets Detective Agency; *the best cover is being too adorable to interrogate*. The filed `image_alt`'s scene is kept exactly, since the comedy is in its specificity.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a fluffy pure white lop-eared dwarf rabbit, a real rabbit, sitting snugly inside a large brown speckled reactive-glaze ceramic mug filled with pink and white mini marshmallows, only her head and shoulders showing above the rim. Dense pure white fur, soft and fluffy; both long lop ears hanging down soft against the sides of her head, pale pink inner ear showing, never upright; one large round near-black eye in three-quarter view; small pink nose; long fine white whiskers; entirely still and perfectly composed. The mug stands on its matching saucer on a warm honey-toned wooden table, more marshmallows spilled across the saucer and scattered over the wood; a crumpled pale linen cloth to the left. Absurdly, disarmingly cute, played completely straight. The kitchen behind her, softly out of focus, is in an apartment on Eden, a large rotating space habitat, in the year 2826, clean, kept and lived in: walls of smooth seamless pale composite meeting the ceiling in a rounded cove, cupboard fronts flush and without handles, a few herbs growing in plain pots on a deep sill, and a wide window to the right through which the habitat's cultivated green terraces curve upward into haze, its soft directional daylight falling across the table from the right. Warm, calm, gently bright. Photographed, not rendered: real fur with individual hairs and a soft sheen, real glaze with its speckle and small unevenness, a fast lens near wide open with shallow depth of field and slight softness toward the corners, fine high-ISO grain, natural warm colour. Negative: upright ears, erect ears, pointed ears, standing ears; glass of milk, jars, canisters, open shelving, cupboard knobs or handles, farmhouse kitchen, cottage kitchen, rustic dresser, window frame with glazing bars, tiled splashback, kettle, toaster, appliances, taps; visible lamp, light fitting or bulb; wall switches or sockets; screens, displays, holograms, devices of any kind; harness, collar or device on the rabbit; grime, clutter, neglect; readable text, lettering, numerals, labels, watermark or written characters of any script anywhere in frame. Render negatives: illustration, cartoon, plush toy, 3D render, CGI, animated film still, plastic sheen, airbrushed, over-smooth fur, glossy concept art. Landscape orientation.
  - *(Written 11 October 2026, century audit batch 2, from the 6 August reference prompt in `image-prompts.md` § 1 and the filed alt; the glass of milk is dropped from both frames, since the audit named it among the kitchen's dating props.)*
- **`bubochka-alert.jpg`** — the inline image on Bubochka's page: the same rabbit, suddenly working. The lop's ears stay down; the 29 July lesson (a lop cannot raise them) travels in the negative.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a fluffy pure white lop-eared dwarf rabbit, a real rabbit, standing bolt upright on her hind legs on a warm honey-toned wooden table, body stretched tall and narrow, front paws tucked to her chest, absolutely still and tense, staring intently at something outside the frame to the left. Dense pure white fur, soft and fluffy; both long lop ears hanging down flat against the sides of her head, pale pink inner ear showing, never upright; one large round near-black eye in three-quarter view; small pink nose; long fine white whiskers. Beside her on the table, a brown speckled reactive-glaze ceramic mug and matching saucer, empty, with pink and white mini marshmallows spilling across the saucer and scattered over the wood; a crumpled pale linen cloth to the left. The pair is one animal photographed twice: suddenly working, played completely straight. The kitchen behind her, softly out of focus, is in an apartment on Eden, a large rotating space habitat, in the year 2826, clean, kept and lived in: walls of smooth seamless pale composite meeting the ceiling in a rounded cove, cupboard fronts flush and without handles, a few herbs growing in plain pots on a deep sill, and a wide window to the right through which the habitat's cultivated green terraces curve upward into haze, its soft directional daylight falling across the table from the right. Warm, calm, gently bright. Photographed, not rendered: real fur with individual hairs and a soft sheen, real glaze with its speckle and small unevenness, a fast lens near wide open with shallow depth of field and slight softness toward the corners, fine high-ISO grain, natural warm colour. Negative: upright ears, erect ears, pointed ears, standing ears; rabbit inside the mug; glass of milk, jars, canisters, open shelving, cupboard knobs or handles, farmhouse kitchen, cottage kitchen, rustic dresser, window frame with glazing bars, tiled splashback, kettle, toaster, appliances, taps; visible lamp, light fitting or bulb; wall switches or sockets; screens, displays, holograms, devices of any kind; harness, collar or device on the rabbit; grime, clutter, neglect; readable text, lettering, numerals, labels, watermark or written characters of any script anywhere in frame. Render negatives: illustration, cartoon, plush toy, 3D render, CGI, animated film still, plastic sheen, airbrushed, over-smooth fur, glossy concept art. Landscape orientation.
  - *(Written 11 October 2026, century audit batch 2, from the 29 July prompt in `image-prompts.md` § 3: the rabbit, the mug and saucer, the marshmallows, the cloth and the window to the right unchanged; the kitchen and the photographic finish are new.)*

### Intake 2026-10-10 — photorealism triage of the character portraits, and the cards that could become pictures

Dermot, 10 October 2026, verbatim: *"please triage any generate images under star-rangers characters that don't look photorealistic enough"*, with six portraits pasted as examples (Teddy twice, Stone-First, Toval, Lucene-9000, Muffin, Jeeves); then *"review all placeholder cards that could be replaced with photorealistic images or concept art"*; then the standing preference, *"photorealistic images preferred unless the subject is too abstract or immaterial to visualize"*; and, on the Pandoids, *"Pandoids do actually look a bit like pandas to the human eye"*.

**The preference, as a convention.** A page that carries an image carries a photograph of its world where one could be taken, generated where no camera could reach it; concept art or Codex art only where the subject is too abstract or immaterial to picture, and a card where the page is an institution, a doctrine or a law. This narrows the "concept art" register, which most of the 2026-08 prompts still open with (*Cinematic*, *Painterly science-fiction concept art*): new prompts open as a documentary photograph taken inside the world, as the 29 September ruling already asked.

**Why the measure did not catch these.** `photo-finish.py --measure` reads tone and grain, and several of the worst frames pass it (Stone-First's grain and flat area sat inside the site's quartiles). What reads as unphotographic here is form: plush or clay surfaces, waxy skin, a mannequin's shading, a pasted-in blur. That is an eye check, and the triage below was done by eye from contact sheets of all 117 files.

**What was wrong in the prompts.** Three habits, all fixed in the seven entries revised today: the prompts opened *Cinematic*, which the generator reads as a film still; the Pandoid prompts asked for fur that *reads plush rather than animal* and negated *bear photograph, panda photograph*, which told the generator to avoid exactly the photographic register; and the Pandoid entries sent `teddy.jpg`, itself a render, as the reference, so its look propagated to every adult. The revisions open as a documentary photograph, describe real materials (fur with silt in it, skin with texture, a worn shell, creased cloth), name a lens and grain, and carry render negatives (CGI, 3D render, animated film still, clay, plush toy, waxy skin, plastic sheen).

**Delivered the same day** (`gemini-3.1-flash-image`, 2K, two variations, finished at strength 1 by `photo-finish.py`):

- `toval.jpg` — variation 2: dark service dress and the collar tab, writing in a dim room; variation 1 wore a civilian-looking shirt.
- `jeeves.jpg` — variation 2: the filed design, now a worn manufactured object in a navy waistcoat; variation 1's lenses read as cartoon eyes.
- `lucene-9000.jpg` — variation 1: a photographed manufactured face with its seams; variation 2 grew a second, headless torso beside her.
- `muffin.jpg` — third roll. Two rolls with the entity as a defocused shape in frame resolved into a recognisable cat all four times, so the frame took the fallback its own tone note names: the vent, the saucer and a folded cloth with a fresh round dent in it, the presence implied and nothing in frame to name. Whether Muffin's page carries a picture at all was left as his call in August; this one asserts nothing about what Muffin is.

**Not filed: the three Pandoids** (`teddy.jpg`, `stone-first.jpg`, `went-round.jpg`). Two rolls, and the generator offers a trade the prompts cannot break. With the filed `teddy.jpg` as reference the body holds (round, upright, no ears, no snout) and the rendering stays animated; without it the frames turn photographic and the body falls back to Earth anatomy, Teddy as a grey bear on all fours with ears and nose leather, the adults as great apes, the attractor recorded on 7 September. His *a bit like pandas to the human eye* is now in the prompts. Three shapes:

1. **Photograph from further off** (recommended): the being small in frame, back-lit by the fungi, face half in shadow, so canon's no-ears, flat-faced body need not survive a close look; the photographic register holds at a distance, and *hint, don't show* already suits Fliade.
2. **Relax the face toward a panda's** — small rounded ears and a dark nose allowed, since that is what a human eye sees — and photograph it close. This changes what the record says a Pandoid has, so it is his ruling to make.
3. **Keep the filed portraits** until a better generator, and record the gap.

**Triage of the rest**, by eye. *Clearly rendered, regenerate next with the same revisions:* `eden-warden` (an architectural visualisation), `sethka-ru`, `suvra-kel`, `isren-farrowkin`, `qiren-tal`, `thrum` (CGI or clay creatures), `kattik`, `tekka`, `tsikk`, `tikket` (one set, a game-render hall; regenerate as a batch), and `sorcha` (a glamour portrait, airbrushed). *A photographic person on a rendered set, lower priority:* `bertram-ashcombe`, `kai-larsen`, `petra-voss`, `dagny-voss`, `karla-wender`, `sofia-santos`, `imogen-petrakis`, `dr-iona-vale`, `zhulik`, `xenon`, `lumbarian`. *Out of scope:* `bumble` (his own frame), the Aldera gallery (01/02 supplied photographs, 03/04 already queued for a re-crop from his originals), `maren-solveig-krast` (a deliberate period print), the Undercover Pets rabbits and cats that already read as photographs, and the designed cards, taken next.

**The cards** (read-only review the same day; no card has a prompt yet, so each needs one written first):

- *Replace with a photograph or a generated photograph:* `hero/characters-concourse.jpg` (the one file stamped PLACEHOLDER; a camera subject, so his own frame first, e.g. `poolbeg-watchers-at-sunrise`); `characters/mira-of-brine.jpg` (its alt says *humanoid* where the Pelagene page gives a radially symmetrical body, so the card contradicts canon) and `characters/sohrel.jpg` (a Cerebraun body), both "deferred by choice" in §3 and superseded by the 7 October rule that a body gets a portrait; the planet and place covers `mars`, `aspenar`, `meridian`, `ynys-wydrin`, `undersong-belt`, `saltvik` (stations, not the cold coast §2 suggests) and `eden-space-habitat` (needs a sheet in `starship-design.md` first); the peoples `chthonari`, `krenyi`, `verdani`, `mnemari`, `ovruhn`, `veyr-basaltborn`, `serephine-dunekin` and `pelagene-littoral`, each from its filed portraits as the kind reference where one exists; `rank-insignia-and-uniform` (a garment at work, on the `eden-bureau-uniform` precedent); `subsea-cable-drones` (an artefact).
- *Keep as card:* the institution emblems, the September Batch 2 cards that replaced stock photographs, the doctrine and classification pages, `characters/sen-marginalia.jpg` (handwriting is the subject and a generator cannot spell) and all sixteen Codex title cards.
- *His call, recommendation first:* `lagrange-fold-points` and `ftl-mechanics` (keep the card, add an inline diagram); `civilisation-comparison` (keep); `cnoc-na-mbeach` (an institution that is also a place: one of his own frames beside the card, e.g. `martello-through-st-begnets`); `levrils` (keep; immaterial, and the trope default bites).

**Approved and drawn** (Dermot, 10 October 2026, verbatim *"All recommendations agreed"*). `lagrange-fold-points` and `ftl-mechanics` keep their emblem cards, and each now carries the first inline diagrams under the 29 September convention: on the Lagrange page, in *Operational Implications*, the five balance points of a two-body system with L4 and L5 at 60° ahead and behind, each marked by fold-staging tier and stability, not to scale; on the FTL page, in *Cascade Scope*, the formcluster and its Common Manifold where folding is defined, the local archecluster where harmonic corridors are defined, and a neighbouring archecluster that folds alike and need not have corridors, with the page's one pace figure (on the order of a light-year a day). Nothing numeric was drawn that the pages do not state: no distances for L1 and L2, no fold durations, and no membranes, since neither page says how membranes sit inside an archecluster. The colours are the palette's custom properties through the new `.lore-diagram` block in `main.css`, mapped onto system colours under Windows high contrast. `civilisation-comparison`, `cnoc-na-mbeach` and `levrils` were not part of this change.

**Pandoids, 10–11 October 2026** (Dermot: *"All recommendations agreed"*, so shape 1, photographed from further off; then *"Heal ears out, then file"*). With the filed `teddy.jpg` sent as a reference the generator re-rendered it, cavern and all, so the render look came back whatever the distance; without it, and with the being small, back-lit and described as a round heavy outline like a big soft bear's, the frames turned photographic and panda-like, as he says a human eye sees them, but grew small rounded ears and nose leather. Those were removed by an image edit of the chosen frame that changed nothing else, the way a lens was healed out of Toval's desk. **Filed:** `teddy.jpg` (variation 1 of the no-reference round, ears and nose healed) and `went-round.jpg` (the same). **Stone-First keeps its filed portrait:** one further roll, alone and upright, drew a bear on all fours and an ape-shouldered outline. The prompts of record now carry the distance, the back light and Dermot's lion portrait as the fur reference, and no render reference.

**Second batch, judged and filed 11 October 2026** (revised prompts above, one round, two variations each, finished at strength 1). **Filed:** the Chthonari set as one (`kattik` 2, `tekka` 1, `tsikk` 2, `tikket` 1: one domed beetle body across all four, real plating and dust; kattik 1 and tekka 2 grew a woodlouse body that broke the set, tikket 2 a lit tube), `sorcha` 2 (a photographed face with its age, at work; 1 showed the patient's face) and `thrum` 2 (1 carried readable pipe labels). **Held, filed images stay:** `sethka-ru` (both drew an Earth crab with a front and eye stalks, against the radial body), `suvra-kel` and `isren-farrowkin` (each grew a face the page does not give), `qiren-tal` (still a render, with a wall lamp and pipe lettering), and `eden-warden` (both drew the habitat as tin huts along a railway, which says something untrue about Eden; it waits on the Eden sheet in `starship-design.md`, on the Waiting for Fable list).

**Machines made with care, rolled 11 October 2026** (one round, two variations each, finished at strength 1). **Filed:** `jeeves` 2 (cream shell, warm kitchen; the face still near a dummy's, which the canon lenses partly fix), `xenon` 2 (the hands at work, a kept bay), `rook-7` 1 (clean shell, the non-standard array plainly a different make; its first prompt of record). **Held:** `lucene-9000`, whose variation 2 became a human woman and variation 1 grew bare jointed arms; the portrait filed on 10 October stays.


### Century audit, 11 October 2026

Dermot, 11 October 2026, verbatim: *"If you look at any non-historical image and tried to guess the century does it look closer to 21st or 29th?"*, and he approved an audit first, then fixes in batches. This is the audit; nothing was generated or changed.

**Method.** Labelled contact sheets of all 311 files under `src/images/characters/` (with `aldera/` and `tissadelle/`) and `src/images/lore/` (with `planets/` and `universes/`), twelve to a sheet at 480 px a frame, judged by eye; each file was matched to the page that carries it (`image:` in front matter, or an inline gallery) and that page's `status`, `category` and tags were read, so an old look on a Historical, isolate or deliberately plain page was not counted against it. The line between a plain picture and a dated one is the 7 October rule's own: a frame in the record's present *may look plain, worn and ordinary, … but not period*. A scene with nothing in it that belongs to any century counts as (A); a scene with something that belongs to ours counts as (B). *What the Record Refuses* supplied the period objects by name: banks of screens, and the sprung, jointed desk lamp. Designed cards, emblem cards and title cards (49) were skipped, as were non-human bodies in natural landscapes and the plain landscapes, macros and star fields, which are listed under (E). The five classes:

- **(A)** reads 29th century: a plausible future, or plain with nothing period in it;
- **(B)** reads 20th or 21st century and should not;
- **(C)** a rendered science-fiction set: a film, game or CGI look rather than a photograph of a future;
- **(D)** rightly old, either (D1) Historical or an isolate, or (D2) plain by canon with no hint of the century in frame (a decision of his, below);
- **(E)** not a built or human scene; the century does not apply.

**Counts.** 262 judged: A 70, B 47, C 20, D 33 (D1 20, D2 13), E 92. Skipped as cards: 49.

#### (B) Reads 20th or 21st century: 47

*Characters (29)*

- `agent-barsik` — paper stacks on a steel desk, pipework and a bank-vault door.
- `alala` — a shopping-mall dome, the crowd in jeans and T-shirts.
- `aldera/field-photo-02` — a present-day painted boat hull with lettering.
- `anne-de-courtney` — Survey chief at the Five Islands in no Survey kit (ruling 5).
- `anne-wender` — Portakabins, timber pallets: a building site of today.
- `bubochka` — a present-day farmhouse kitchen, mug and milk glass.
- `bubochka-alert` — the same present-day kitchen (an inline image on Bubochka's page).
- `cormac-dubhghlas` — waxed jacket, knitted cap, today's farm; Aethelrock keeps technology visible.
- `demelza-trevithick` — a steam-age machine hall, an old electric motor.
- `dorian-calloway` — a drop-ceiling office, a wall of monitors, a suit with lapels.
- `elvira` — a present-day leather jacket; the stone room itself is fine.
- `emma-la-chapelle` — Survey officer at the Five Islands in no Survey kit (ruling 5).
- `ernesto-strozzi` — khaki safari shirt and a steel filing cabinet.
- `galen-kane` — a 19th-century timber town hall, the townsfolk in tweed.
- `fergus-aonghas` — quilted jacket, beanie, a timber pit-head; Aethelrock tech should show.
- `idris-bryneth` — a present-day oilskin on an empty moor; Aethelrock tech should show.
- `ingrid-halvorsen` — a present-day parka, steel flasks, a prefab hut.
- `kai-larsen` — a NASA-style flight suit with patches, an ISS-era station, screens.
- `knopka` — a present-day flat: timber floor, panelled door, tote bag.
- `marisol-achebe` — sacks, tins and steel shelving of a present-day storeroom.
- `niamh-o-ceallaigh` — today's fishing harbour, plastic crates; Aethelrock tech should show.
- `odile-ferrant` — present-day hiking kit, aluminium rack, hard cases.
- `rasa-oyelaran` — a present-day open-plan police office of monitors.
- `rhiannon-ceridwen` — a present-day steel lattice radio mast.
- `sen` — a domed brass desk lamp and film cans: a 20th-century archive.
- `sofia-santos` — brass valves, gauges and pipework of a steam-era plant.
- `sorcha-shepherd` — a present-day total station on a yellow tripod.
- `wendell-albercombe` — the herringbone jacket; ruled 11 October for his own jacket.
- `xenon` — one object: a sprung, jointed desk lamp, refused as period.

*Lore (18)*

- `ai-safety-kernel` — a 2020s circuit board, capacitors and chips (a concept: card it).
- `ai-usage-credits` — a stock circuit-trace graphic (a concept: card it).
- `ask-and-it-will-be-reviewed` — a 1970s municipal waiting room, cork board, fuse box.
- `communion-of-the-called` — steel folding chairs, trestle table, flasks; also grimy.
- `cross-biosphere-taxonomy` — peeling plaster and an old school bench.
- `environmental-technology-design` — a stock circuit-board graphic.
- `generalised-quantum-mechanics` — a 20th-century lab: sash windows, stone bench, cable.
- `halvern-combine` — a steel office cabinet, ledgers, framed certificates.
- `made-minds-and-the-ai-safety-archetype` — the newest of the three doors is today's flush door.
- `monasteries-of-mars` — an unroofed stone ruin; the page has pressure-hermitages.
- `planetary-liaisons-and-recruiters` — a 1950s street office: wooden desk, coat peg, boxy machine.
- `resurrection-and-the-life` — concrete walls and a grey utility box: a present-day cemetery.
- `saltmere-mooring-gantry-1` — a present-day harbour jetty, a RIB's bow in frame (his own frame).
- `saltmere-mooring-gantry-2` — the same jetty, on the Thalassa page (his own frame).
- `seed-mind-lifecycle` — a stock data-tunnel graphic (a concept: card it).
- `star-rangers-science-corps` — a steel-framed 1950s desk, specimen jar, radiator pipes.
- `the-institute` — a present-day swivel chair and a Peli case.
- `the-scope-of-physical-law` — a present-day university lab behind the boxes.

#### (C) A rendered science-fiction set: 20

*Characters (9)*: `bertram-ashcombe` (a film set with monitor banks, the grin to camera; the suit is his page's), `dagny-voss`, `dr-iona-vale`, `eden-warden` (an architectural visualisation), `imogen-petrakis`, `isren-farrowkin` (a CGI body in a Jacobean hall), `karla-wender` (a control yoke and glowing displays, both refused), `lumbarian`, `qiren-tal`. All but Karla Wender were already on the 10 October photorealism triage.

*Lore (11)*: `archecluster`, `ascent-javelins` (also the stock ship), `cerebraun`, `cill-aoife-devotion` (a grimy film-set corridor; the place should be kept), `embodied-cognition`, `habitat-threshold` (a lit-flank stock station), `kieme-visible-hand` (a game render), `knarrheim` (a stock fantasy planet; the page is a habitat), `membrane-shadows`, `new-london-space-habitat`, `things-that-are-made`.

#### (D) Rightly old: 33

*D1, Historical or an isolate (20).* Historical pages: `adaeze-okafor`, `beatrix-kilbride`, `brother-daire`, `maren-solveig-krast`, `osric-fenholt`, `petra-solano`, `rutger-voss`, `saint-aoife`, `sildron-drey`, `thalassa-vexar`, `wren-okafor`, `ysolde-pitch`, and the History lore `formation-of-star-rangers`, `the-generation-ark-era`, `the-imperium`. The Kingdom of the Five Islands' own people (ruling 5, isolates exempt): `bram-tollick`, `ilsabet-marrowtide`, `oriel-fenwick`, `wren-pellam`. And `ilse-korvain`, whose page calls the coat archaic and whose silver seam carries the century.

*D2, plain by canon, no hint in frame (13).* *What the Record Refuses* says such places *had no reason to look like anything else* (a hive-yard and stone cells, a chapter house on a green hill, Tír na nÓg's farmland): `asteria-the-sage`, `brother-fintan`, `peran-slade` (Fellowship chapter houses and the hermitage), `cnoc-na-mbeach` (his own frame), `sorcha` (homespun, by her page), `sorcha-nic-dhiarmada` and `drithane` (Drithane's valleys), `ilsabet-corren` (a reading room of bound registers), `new-cotswolds` (a preservation settlement), `winterbourne` (whose page argues the point), `verdance` (the Verdani's four settlements), `quern` (low houses shaped for the wind, by its page), `star-rangers-frontier-corps` (a timber settlement down a muddy track). `orla-shepherd`, by contrast, carries the hint already (small drone lights over the pasture, as the Tír na nÓg page describes) and is counted (A).

#### (A) Reads 29th century, or plain with nothing period: 70

*Characters (39)*: `andrew-falkorian`, `aravena`, `galahad-thorne`, `galen`, `iklix-varn`, `jeeves`, `kate-ukrainka` (the cardigan and mug are carried by the habitat in the window), `kattik`, `lev`, `lorien-the-wanderer`, `lucene-9000`, `luke-valerius`, `muffin`, `nakagawa`, `naomi-kestrel`, `noah-adeyemi`, `orla-shepherd`, `petra-voss`, `priya-nakamura`, `rhian-gwynne`, `rook-7`, `rosalind-vey`, `sylvie-harrow`, `syra`, `tamsin-reyes`, `tekka`, `thrum`, `tikket`, `tissadelle-shepherd`, `tissadelle/season-1-cadet`, `tissadelle/season-1-first-posting`, `tissadelle/season-5-halyx-corridor`, `tomas-brennock`, `toval`, `tsikk`, `yusuf-adair`, `zara-wayland`, `zhulik`, `zoe-smith`.

*Lore (31)*: `canonical-glossary-and-migration-guide`, `dreams-across-the-interval`, `eden-bureau-uniform`, `eden-ring-rail`, `greenward-habitat`, `heritable-modification-protocols`, `hyperfold-yield-combine`, `kalypsis-dawn`, `narrative-works-and-their-adaptation`, `orbital-compute-complexes`, `plainmark`, `predatory-entities`, `quantum-computing-and-the-cavern-constraint`, `shore-leave-and-neutrality` (a period bar, carried by the habitat corridor behind it), `solar-system-concord`, `star-rangers-navigation-corps`, `star-rangers-proverbs-and-maxims`, `the-commonwealth`, `the-fusion-ceiling` (the grey box on a concrete pad, as canon says), `the-guest-ring`, `the-honest-dark`, `the-oversight-council` (his own frame), `the-tally`, `threshold-station` (his own frame), `timekeeping-and-the-common-record`, `universal-cosmic-stardate`, `what-a-life-is-built-from`, `what-a-mind-is-carried-by`, `what-nobody-certifies`, `what-the-record-refuses`, `where-the-weather-stops`.

#### (E) Not a built or human scene: 92

*Characters (12)*: `aldera`, `aldera/field-photo-01`, `aldera/field-photo-03`, `aldera/field-photo-04`, `bumble`, `nessa`, `turquoise-dove`; non-human bodies in natural ground, not judged for century: `stone-first`, `suvra-kel`, `sethka-ru`, `teddy`, `went-round` (their render look, where it shows, is the 10 October triage's business, not this audit's).

*Lore (80)*: landscapes, macros, wildlife and star fields, his frames and generated (`archewright`, `archipelago-palm-avenue`, `autumn-canopy`, `boirinn-uplands-horses`, `boirinn-uplands-mist`, `boirinn-uplands-waterfall`, `cairn-trust`, `cloud-sea`, `coastal-sunset`, `crimson-blossom-macro`, `drowned-forest`, `dryadic-trees`, `earth-leopard-grassland`, `elder-fig-grove`, `frontier-transformation-protocols`, `grassland-storm-tree`, `gull-on-rock`, `highland-cloud-sea`, `highland-rock-spires`, `highland-scrub-road`, `highland-sentinel-lizard`, `highland-summit-snowfields`, `island-watchtower`, `moorhen-wetland`, `pink-blossom-macro`, `scarlet-thread-bloom`, `shoreless-sea`, `the-thin-inheritance`, `trigrian`, `trigrian-triple-sunset`, `violet-spike-inflorescence`, `volcanic-strata`, `wading-heron`, `weather-on-other-worlds`, `wetland-treeline-reflection`, `white-flower-macro`, `young-lake-margin`); space, abstracts and diagrams (`aethelrock`, a stock render worth replacing on other grounds, `arilon`, `boundary-zones`, `competing-designs`, `concordant-membranes`, `cosmic-cascade`, `creative-entropy-framework`, `ensemble-multiverse`, `five-layers`, `noogenic-seeding-system`, `physics-comparison`, `planets/cirrane`, `planets/corryn`, `post-eleven-dimensional-manifold`, `quantum-space-harmonics`, `sentinel`, `teleportation-limitations`, `threnos-omega`, `umbral-moon`, `universe-overlap-and-folding`, `universes/deadwater`, `universes/si-gaoithe`, `universes/tir-tairngire`, `who-governs-a-universe`); objects with no setting (`counterpane-archecluster`, `fold-transit-catastrophic-failure`, `selvage-archecluster`, `wholecloth-formcluster`); and alien bodies and worlds in natural ground (`ilveth`, `ollune`, `planets/fliade`, the Prismere set `prismere-driftjellies`, `prismere-flowering-glasswood`, `prismere-glass-spires`, `prismere-glasswood-grove`, `prismere-luminous-towers`, `prismere-orbital-vista`, `prismere-root-mat-network`, `prismere-twilight-lattice`, `prismere-umbral-ray`, and `prismeri-first-wings`, `prismeri-full-wings`, `prismeri-lattice-gathering`).

*Skipped as cards (49)*: characters `mira-of-brine`, `reeves`, `reeves-eden`, `sen-marginalia`, `sohrel`; and the 44 lore title, emblem and designed cards.

#### Proposed batch order for fixing B and C

Most visible first: the hero cast (`heroCharacterIds` in `lib/editions.js`, across the editions), then characters by the number of pages that link to them, then lore by the same count. Sets that share one fix travel together. Batches of eight; one round of two variations each, finished at strength 1, as the 10–11 October batches were.

1. **Hero cast.** `dr-iona-vale`, `karla-wender`, `kai-larsen`, `wendell-albercombe`, `dorian-calloway`, `rasa-oyelaran`, `eden-warden`, `agent-barsik`.
2. **Hero cast and most-linked characters.** `bubochka`, `bubochka-alert`, `sen`, `elvira`, `imogen-petrakis`, `marisol-achebe`, `knopka`, `xenon`.
3. **Two sets.** Aethelrock's five, technology visible as its page says: `cormac-dubhghlas`, `fergus-aonghas`, `idris-bryneth`, `niamh-o-ceallaigh`, `rhiannon-ceridwen`; and the Five Islands Survey three, each in Survey kit within the isolate's room: `anne-de-courtney`, `emma-la-chapelle`, `ernesto-strozzi`.
4. **Remaining characters.** `lumbarian`, `sorcha-shepherd`, `qiren-tal`, `odile-ferrant`, `galen-kane`, `bertram-ashcombe`, `sofia-santos`, `demelza-trevithick`.
5. **Last characters, first lore.** `dagny-voss`, `isren-farrowkin`, `ingrid-halvorsen`, `anne-wender`, `alala`, `aldera/field-photo-02`, `ai-safety-kernel`, `the-scope-of-physical-law`.
6. **Lore.** `cill-aoife-devotion`, `cross-biosphere-taxonomy`, `cerebraun`, `membrane-shadows`, `environmental-technology-design`, `made-minds-and-the-ai-safety-archetype`, `new-london-space-habitat`, `generalised-quantum-mechanics`.
7. **Lore.** `seed-mind-lifecycle`, `saltmere-mooring-gantry-1`, `saltmere-mooring-gantry-2`, `planetary-liaisons-and-recruiters`, `the-institute`, `star-rangers-science-corps`, `monasteries-of-mars`, `kieme-visible-hand`.
8. **Lore.** `habitat-threshold`, `embodied-cognition`, `communion-of-the-called`, `things-that-are-made`, `ascent-javelins`, `archecluster`, `ai-usage-credits`, `resurrection-and-the-life`.
9. **Lore, the last three.** `knarrheim`, `halvern-combine`, `ask-and-it-will-be-reviewed`.

The three concept images (`ai-usage-credits`, `seed-mind-lifecycle`, `environmental-technology-design`) and `ai-safety-kernel` go to cards under the existing convention that a concept is carded, not pictured. `knarrheim` and `monasteries-of-mars` are corrections to canon as much as to century: the first shows a planet for a habitat, the second a roofless ruin for a pressure-hermitage. Ships and stations in C (`ascent-javelins`, `habitat-threshold`, `new-london-space-habitat`) go through the `starship-design` loop.

#### Needing a decision of Dermot's

1. **The plain-by-canon places (D2, 13 images).** *What the Record Refuses* says a hermitage, a chapter house or Tír na nÓg's farmland look as they always did; the 7 October rule says an old-fashioned look carries a hint unless Historical, and only isolates were exempted (ruling 5). A) The hint reaches them: one quiet thing per frame, as `orla-shepherd`'s drone lights already show. B) They are exempt like isolates, the canon paragraph being the reason. C) Per page. **Recommended: A**, at the lowest priority, after batch 9, because Orla Shepherd shows it costs the place nothing.
2. **Undercover Pets rooms** (`agent-barsik`, `bubochka`, `bubochka-alert`, `knopka`). The cute register is the animals', and these rooms are Eden's. A) The century rule reaches the rooms. B) The cute register exempts the whole frame. **Recommended: A**, and they are batched on that footing.
3. **His own frames of built things** (`saltmere-mooring-gantry-1`, `-2`; also `the-oversight-council`, `threshold-station` and `cnoc-na-mbeach`, which pass). A photograph of today is of today. A) Keep them; the photo-first order outranks the hint, and the gantry pair needs only the RIB's bow cropped out. B) Replace them with generated frames. **Recommended: A**; batch 7 then shrinks to a crop.
4. **Pages that never say where or when.** `asteria-the-sage` is on *a quiet planet*; `sorcha`'s settlements are unnamed; `ask-and-it-will-be-reviewed` and `made-minds-and-the-ai-safety-archetype` are metaphors whose rooms and doors have no in-world place. The first two are in D2 and wait on decision 1. For the two metaphors, a prompt can only date the furniture to the century if the picture is an in-world room: **recommended**, treat both as rooms somewhere in the record and give them the century.

### Photorealism audit of lore and hero images, 11 October 2026

Dermot, 11 October 2026, verbatim: *"Also check for images such as Prismeri that are not photorealistic enough"*, under his standing preference, *"photorealistic images preferred unless the subject is too abstract or immaterial to visualize"*. The character portraits were triaged on 10 October (the intake above); this pass covers `src/images/lore/` with `planets/` and `universes/`, and `src/images/hero/`. It is the 10 October question asked of the rest: not the century, which the century audit above judged, but whether a frame reads as a photograph. Nothing was generated, changed or re-prompted.

**Method.** Labelled contact sheets of all 215 files, four across at 400 px a frame, judged by eye, with 60% centre crops at 800 px for the 36 borderline frames. Each file was matched to the page that carries it, and that page's category and description read, so a cosmology or universe page was judged as a subject no camera can reach. Skipped: the 45 designed cards (emblem, title and placeholder cards, `hero/characters-concourse.jpg` among them) and the 18 files the record names as Dermot's own frames or composites on his plates (`hero/characters-hyrax`, `cloud-sea`, `drowned-forest`, `grassland-storm-tree`, `island-watchtower`, `trigrian`, `trigrian-triple-sunset`, `archipelago-palm-avenue`, `highland-rock-spires`, `highland-summit-snowfields`, `boirinn-uplands-waterfall`, `moorhen-wetland`, `highland-sentinel-lizard`, `cnoc-na-mbeach`, `threshold-station`, `the-oversight-council`, `saltmere-mooring-gantry-1` and `-2`); his frames are photographs by definition. The other landscapes, macros and wildlife read as his and are counted (P) either way. No Codex art falls in scope: the section 7 pool lives under `src/images/codex/` as inline body images, so the convention exempting it is untouched here. The three classes, as the 10 October triage drew the line (a CGI or 3D-render look, plush, clay or plastic surfaces, glossy concept art, over-smooth airbrushed surfaces, game-render sets, painterly):

- **(P)** reads as a photograph;
- **(R)** not photorealistic enough;
- **(I)** an immaterial or abstract subject, where non-photographic art is right.

**Counts.** 152 judged: P 94 (hero 11, lore 83), R 39 (hero 7, lore 32), I 19 (hero 1, lore 18). Skipped: 45 cards, 18 of his own frames.

**What the prompts did.** Three causes, and one absence:

1. *Painterly science-fiction concept art*, asked for by name: the twelve Prismere and Prismeri prompts in section 5a, every one.
2. *A genre label in place of a register*: the short 5a and 5b prompts open on the subject and describe it as *far-future science-fiction interior*, *science-fiction spaceport infrastructure* or *rendered as banks of quiet data surfaces*, and name no camera, lens or grain and carry no render negatives. The generator reads the genre label as its stock render.
3. *A photograph asked for, the render left open*: five newer prompts already open *Documentary photograph taken inside the world by a 29th-century camera*, and still came back rendered, because none describes real materials (fur, hide, weathered stone, worn fabric), names a lens and grain, or carries the render negatives the 10 October revisions added (CGI, 3D render, clay, plastic sheen, over-smooth surfaces, glossy concept art). It is the lesson of the portraits again: the opener alone does not hold.
4. *No prompt of record*: ten R files, most of them hero banners filed before prompts lived here, and four lore files. Each needs a prompt written fresh from its page and alt.

#### (R) Not photorealistic enough: 39

*Hero (7)*

- `hero/home-launch.jpg` — `.eleventy.js` `DEFAULT_OG_IMAGE`, so the share card of every page without its own image. A stock CGI composite, shuttle over a painted Earth. No prompt of record; also a Space Shuttle, which the 10 October ascent-javelin rule retires.
- `hero/seasons-orbit.jpg` — Seasons index. A glossy CGI capsule over a stock Earth. No prompt of record.
- `hero/season-01.jpg` — Season 1 and the Tissadelle Arc thread. A CGI stock station, lit flank. No prompt of record.
- `hero/season-00-foundation.jpg` — Season 0, its three episodes and the Founding Era thread. A 3D-render set: neon rings, an empty plinth. No prompt of record.
- `hero/season-05-explorers.jpg` — Season 5. A CGI helmet, glossy visor, render lighting. No prompt of record.
- `hero/atlas-chart.jpg` — the Atlas index. Glossy generated still life, oil-lamp glow, fake lettering. No prompt of record.
- `hero/story-engine.jpg` — `/story-engine/`. Glossy steampunk concept still life. Chosen on 25 July as deliberately whimsical and out of character (*Meta-page heroes* above); see decision 1.

*Lore, the Prismere and Prismeri set (12), one batch by the all-or-none rule of 11 August*

- `prismere-orbital-vista`, `prismere-glasswood-grove`, `prismere-flowering-glasswood`, `prismere-luminous-towers`, `prismere-glass-spires`, `prismere-driftjellies`, `prismere-umbral-ray`, `prismere-twilight-lattice`, `prismere-root-mat-network` (the Prismere page and its galleries); `prismeri-first-wings`, `prismeri-full-wings`, `prismeri-lattice-gathering` (the Prismeri page). All painterly fantasy illustration, the creatures drawn like dragons. Cause 1: every prompt asks for *Painterly science-fiction concept art*. The Prismeri prompts carry a body derived and confirmed on 3 September, which a re-roll keeps; only the register changes. See decision 2.

*Lore, the rest (20)*

- `archecluster.jpg` — *Inside an Archecluster*. CGI architectural visualisation, an endless rendered hall. Cause 2.
- `planets/fliade.jpg` — Fliade. The cavern growth reads as sculpted clay. Cause 2.
- `aethelrock.jpg` — Aethelrock (also on the codex entry *Aethelrock and Tír na nÓg*). A stock terrain render. No prompt of record.
- `cross-biosphere-taxonomy.jpg` — the specimens read as plush and clay, the tardigrade above all. Cause 3.
- `predatory-entities.jpg` — an over-smooth grey render room, plastic surfaces. Cause 3.
- `cerebraun.jpg` — the Cerebraun species page. A CGI concept hall, rendered haze. No prompt of record.
- `membrane-shadows.jpg` — a game-render bridge set with monitor banks. Cause 2, and the prompt asks for the figure *rendered as an absence of light*.
- `new-london-space-habitat.jpg` — glossy CGI concept art, toy-like rings. Firefly, from a prompt Dermot supplied on 26 July (`image-prompts.md`), with no register named.
- `ollune.jpg` — painterly translucent creatures over a painted gas giant. Cause 2.
- `ilveth.jpg` — the body reads as clay, smooth and sculpted. Cause 3.
- `eden-ring-rail.jpg` — the people are photographic; the habitat's far wall reads as a painted model. Cause 3; lower priority.
- `sentinel.jpg` (*The Sentinel*, a Locations page under `planets/`) — a stock particle-burst graphic for an airless physical world. No prompt of record; the page is a place, so a photograph of the world is the frame.
- `embodied-cognition.jpg` — a game-render robot in a CGI hall. Cause 2.
- `kieme-visible-hand.jpg` — a game-render vault door and an armoured figure. Cause 2.
- `habitat-threshold.jpg` — a CGI stock station, lit flank. Cause 2; goes through the `starship-design` loop.
- `things-that-are-made.jpg` — a CGI brutalist megastructure. Cause 2.
- `ascent-javelins.jpg` — a CGI stock spaceplane over a rendered spaceport. Cause 2; `starship-design` loop.
- `planets/corryn.jpg` — an illustration, stylised plant silhouettes under a ringed giant. Cause 2.
- `knarrheim.jpg` — a stock fantasy-planet render. No prompt of record; the century audit already found it shows a planet for a habitat.
- `quern.jpg` (Quern, under `planets/`) — CGI huts under a rendered storm. Cause 3.

Twelve of these are also on the century audit's list, as (C) a rendered set or (B): `archecluster`, `cerebraun`, `membrane-shadows`, `new-london-space-habitat`, `embodied-cognition`, `kieme-visible-hand`, `habitat-threshold`, `things-that-are-made`, `ascent-javelins`, `knarrheim`, `cross-biosphere-taxonomy`, plus `aethelrock` (named in its (E) as worth replacing). Each is fixed once, in whichever batch reaches it first, and the century audit's batches 6 to 9 shrink accordingly.

*Read as photographs, noted and not flagged:* `drithane` (an oversized moon, a stock-composite feel), `cill-aoife-devotion` (a film-set corridor, already the century audit's (C)), `the-commonwealth` (the habitat through the window is softer than the room), `star-rangers-frontier-corps` (heavy HDR), and the model-shot ships `hyperfold-yield-combine`, `kalypsis-dawn`, `the-generation-ark-era`, `the-tally` and `star-rangers-navigation-corps`, which read as photographed studio models, the register of a well-made effects shot, and pass. `hero/journal-notebook.jpg` reads as a photograph and carries its one chosen phrase.

#### (I) Immaterial or abstract, non-photographic art right: 19

- *Cosmology and physics, a structure no camera can stand outside of (12):* `boundary-zones`, `concordant-membranes`, `creative-entropy-framework`, `worldwrights/competing-designs` (`competing-designs.jpg`), `five-layers`, `physics-comparison`, `quantum-space-harmonics`, `teleportation-limitations`, `universe-overlap-and-folding`, `who-governs-a-universe`, `post-eleven-dimensional-manifold`, and `hero/lore-cosmic.jpg` (the Lore index).
- *Universes, seen as membranes (3):* `universes/si-gaoithe`, `universes/tir-tairngire`, `universes/threnos-omega` (`threnos-omega.jpg`).
- *A pattern, not a person (1):* `arilon`, which its page calls a name for a recurring figure across cultures; the soft, painted crowd of hooded shapes suits a type that is nobody in particular.
- *Concepts already going to cards (3):* `ai-usage-credits`, `environmental-technology-design`, `seed-mind-lifecycle`, stock graphics the century audit already sends to cards; abstract, so not regenerated as photographs.

The astrophotographs (`cosmic-cascade`, `ensemble-multiverse`, `noogenic-seeding-system`, `universes/deadwater`, `planets/cirrane`) are photographs of real skies and count (P).

#### Proposed batch order

Most visible first: the hero banners, by how many pages carry them; then lore pages by the number of pages linking to them; series kept together. Batches of about eight, one round of two variations each, finished at strength 1, as the 10–11 October batches were. Each prompt is revised first, on the 10 October pattern: open as a documentary photograph taken inside the world by a 29th-century camera, describe real materials, name a lens and grain, and carry the render negatives; non-human bodies (Ilveth, Ollune, the Prismeri) photographed from further off and back-lit, as the Pandoids were.

1. **Hero banners and the two most-linked lore pages.** `home-launch`, `seasons-orbit`, `season-01`, `season-00-foundation`, `season-05-explorers`, `atlas-chart`, `archecluster` (27 linking pages), `planets/fliade` (26). The ships among the heroes (`home-launch`, `seasons-orbit`, `season-01`) go through the `starship-design` loop, `home-launch` as an ascent javelin.
2. **Most-linked lore.** `cross-biosphere-taxonomy` (22), `aethelrock` (22), `predatory-entities` (21), `cerebraun` (18), `membrane-shadows` (17), `new-london-space-habitat` (12), `ollune` (8), `ilveth` (7).
3. **The Prismere and Prismeri set, all twelve together** (Prismere 8 linking pages, Prismeri 9). Larger than eight because the all-or-none rule of 11 August binds it; the Prismeri prompts keep the body confirmed on 3 September and change only the register.
4. **Lore.** `eden-ring-rail` (7), `sentinel` (7), `embodied-cognition` (6), `kieme-visible-hand` (6), `habitat-threshold` (5), `things-that-are-made` (4), `ascent-javelins` (3), `planets/corryn` (3).
5. **The last two, and the decision.** `knarrheim` (2), `quern` (2), and `story-engine` if decision 1 goes B.

#### Needing a decision of Dermot's

1. **Out-of-character heroes** (`hero/story-engine.jpg`, and `hero/journal-notebook.jpg`, which passes). They head `/story-engine/` and the Journal, which speak to real readers, not from inside the record, and the brass machine was chosen on 25 July as deliberately whimsical. A) The photograph preference governs in-world pages only; the out-of-character section keeps its own register. B) Every hero is held to it, and `story-engine` regenerates. **Recommended: A**; `atlas-chart` is still regenerated, because the Atlas maps the world and its banner should look like it.
2. **The Prismere and Prismeri set.** A) Regenerate all twelve as documentary photographs of the world, the creatures at a distance and back-lit, under the all-or-none rule. B) Refile the set as Codex art, a named in-world naturalist's plates, which would keep the painterly surface legitimately and needs an author and a codex entry to hang them on. C) Keep the set until a better generator, and record the gap. **Recommended: A**, since Prismere is a material world a camera could stand in and his preference is a photograph wherever one could be taken; B is the fallback if the bodies will not hold photographically, as Stone-First's would not.

**Photorealism audit ruled 11 October 2026.** Dermot took both recommendations, choosing by name: on the Prismere and Prismeri set, *"Regenerate as photographs"* (decision 2, A: all twelve regenerated as documentary photographs of the world, the creatures at a distance and back-lit, as the Pandoids were, under the all-or-none rule; the Prismeri body confirmed on 3 September stays and only the register changes); and on the out-of-character heroes, *"In-world pages only"* (decision 1, A: the photograph preference governs in-world pages; `hero/story-engine.jpg` and `hero/journal-notebook.jpg` keep their own register and stay, and `hero/atlas-chart.jpg` is still redone, since the Atlas maps the world). Batch 5 is therefore `knarrheim` and `quern` alone.

**Ruled 11 October 2026.** Dermot took all four recommendations, in his own words: on the plain-by-canon places, *"A quiet hint, last in line"* (decision 1, A: one quiet thing per frame, after batch 9); on the Undercover Pets rooms, *"Yes, the rooms do"* (decision 2, A: the century rule reaches the rooms, the cute register stays the animals'); on his own frames of built things, *"Keep, crop out the boat's bow"* (decision 3, A: the frames stay, the gantry pair loses the RIB's bow, and batch 7 shrinks to that crop); and on the pages that never say where or when, *"Rooms somewhere in the record"* (decision 4: `ask-and-it-will-be-reviewed` and `made-minds-and-the-ai-safety-archetype` are in-world rooms and take the century). Batch 1 was prompted on that footing the same day.

**Batch 1, filed 11 October 2026** (one round, two variations each; Barsik a second round). Picks: `dr-iona-vale` 2, `karla-wender` 1, `kai-larsen` 1, `wendell-albercombe` 1, `dorian-calloway` 2, `rasa-oyelaran` 1, `eden-warden` 1, `agent-barsik` 2 (second round, desk cleared after both first variants rendered the folio as a laptop). Left open by the pages and so left plain in the pictures: Iona Vale's and Karla Wender's corps (neutral dark shells, Wender's indigo piloting tab only), Five-O's uniform design (a plain dark jacket), and Eden's design sheet.

**Batch 2, prompted 11 October 2026.** Revised in place: `sen`, `elvira`, `imogen-petrakis`, `marisol-achebe`, `knopka` and `xenon`; written new, since neither had an entry here: `bubochka` and `bubochka-alert`, as a pair, in section 11. `xenon` was not skipped although it was re-made earlier the same day: the audit was taken after that filing, and the one object it names, the jointed desk lamp, is in the filed frame because the *Made with care* prompt asked for it. Elvira's ambiguity is kept by adding nothing to her; Sen's dress was ruled the same day: *"Sen is uniformed"*, the Survey Corps shell.

**Batch 2, filed 11 October 2026** (one round, two variations each, finished at strength 1; Sen three rounds, none filed). Picks: `bubochka` 1 and `bubochka-alert` 1 as the pair (one kitchen, one window, one mug), `elvira` 1 (a square grid; 2 drew a radial star that edged toward the ritual reading), `imogen-petrakis` 2 (listening to a resident, terraces through the window band), `marisol-achebe` 1 (Knopka facing the warm patch), `knopka` 2 (kept the ignored carrot-top that 1 lost), `xenon` 1 (no lamp, light from a flush strip; 2's twin-lens head read as a toy). **`sen` held; the filed portrait stays.** Three rounds: the first drew the record cases as lockable drawers that read as filing cabinets, and a mesh office chair; the second, after the prompt was amended, gave one clean frame in Sen's own clothes, overtaken the same day by the ruling below; the third, in the Survey Corps shell, got the uniform right in both variations, but both drew the cases as label-holder cabinets, one with binders on open shelving, so neither passes. The next re-roll should take the cases further from a filing room, for instance a single run of plain seamless wall with no case fronts at all. Ruled the same day, Dermot verbatim *"Sen is uniformed"*: Sen wears the Survey Corps field shell in deep olive, per the corps colours in `rank-insignia-and-uniform.md`, with one collar tab carrying the survey track's pale grey-green insert and no bar count, the page giving no rank; Sen was re-rolled on that prompt. Left open for Dermot: Imogen Petrakis's stated Greek heritage, written on the Oyelaran precedent from the surname.

#### Photorealism batch 1: the hero banners, prompted 11 October 2026

The six heroes below had no prompt of record (cause 4). Each is written fresh from the page that carries it, on the 10 October pattern, and sized to the hero convention: lore and hero ~1600 px on the long edge, and each keeping its filed frame's aspect ratio, so the request asks for the nearest ratio the generator offers and the pick is cropped to the filed shape on the way in. A hero renders as a band about 3.4:1 across the middle of the frame (*Meta-page heroes*, above), so every prompt keeps its subject in the middle band. **No section heading `scripts/image-prompts.js` reads maps to `src/images/hero/`** (its `SECTION_TARGETS` cover characters, lore and codex only), so these entries sit where the parser does not look and were generated by a scratch script mirroring its request; adding a `hero` target is a small engine change left for a separate PR. The two lore entries of the batch are revised in place in 5b: `planets/fliade.jpg` re-prompted, `archecluster.jpg` not re-rolled and recommended for a card (see its entry).

- **`hero/home-launch.jpg`** — `.eleventy.js` `DEFAULT_OG_IMAGE`, the share card of every page without its own image, so the one picture most readers see first. Filed 1920×1024 (15:8); asked at 16:9 and cropped. The Space Shuttle goes (the 10 October rule: up by ascent javelin, down by landing craft) and so does the planet seen from space: a launch is seen from the ground. Derived from `starship-design.md` sheet F (added the same day): one winged body, thrown from a cradle, no stack; the spaceport is civil and the missile is the page's simile only. Guessed: the world (unnamed, a settled coast) and the length (about fifty metres). The flight deck is his (sheet F, *pilot, co-pilot and passengers although highly automated*, 11 October 2026).
  *(Revised 11 October 2026, round 4: framed high in the climb with the cradle out of shot, so the frame neither looks like a rocket on a tower nor contradicts the page's near-vertical cradle, after rounds 2 and 3 failed sheet F.)*
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape, a long lens from the perimeter of a civil spaceport several kilometres away, looking up: an ascent javelin high in its climb, well clear of the ground and of whatever launched it, nose high and climbing steeply but not vertically into a pale grey-blue morning sky, seen three-quarters from below so its wings and flat underside are plainly visible. The craft is a winged lifting body about fifty metres long, broad and flattened like a manta or a thick arrowhead, its blended wings running most of its length, a blunt rounded heat-shielded nose, air intakes along its flat underside, rocket nozzles at the tail; a small forward flight deck for a pilot and a co-pilot, shown only as a short row of narrow flight-deck ports at the nose, no bubble canopy and no window band along the passenger cabin behind it; its skin a dull pale thermal surface with the honest seams of its panels, unmarked, no painted name, no stripes, no stencils. Behind it a single long bright exhaust trail curving back down out of the bottom of the frame, its start out of shot: no launch cradle, rail, tower or structure of any kind is visible. Below, at the very bottom edge of the frame, only the hazy line of a distant coast and low hills; the rest is sky. Nothing on the hull is lit; the low morning sun lights it from one side. The craft sits in the middle band of the frame with open sky to either side. Quiet, enormous, hopeful. Muted natural palette, pale sky, grey ground, the trail white. Photographed, not rendered: atmospheric haze and heat shimmer softening the far ground, high-ISO grain, a long telephoto lens with its flattened perspective and slight softness toward the corners, a touch under-exposed, muted natural colour, the small imperfections a real photograph keeps. Negative: readable text, lettering, numerals, signage, flags, logos, insignia or written characters of any script anywhere in frame; vertical rocket, rocket standing on its tail, cylindrical rocket body, pointed nose cone, tail fins on a cylinder, 1950s rocket, 20th-century rocket silhouette, V-2, X-15; ladder, launch tower, gantry, service tower, umbilical mast, launch pad, scaffold, vertical frame of any kind near the craft; Space Shuttle, orbiter, external fuel tank, strap-on boosters, multi-stage stack, orbital tower, space elevator, tether; missile, warhead, military, rocket artillery, launcher truck, fighter jet, weapons; glazed bubble canopy, fighter canopy, window band, stencilled markings, lit flank, sleek styling, decorative fins, antenna forest, painted name, glowing trim, neon, lens flare, god rays; crowds, spectators; Earth seen from space, starfield, planet crescent; grime, rust, neglect. Render negatives: 3D render, CGI, octane render, video-game render, science-fiction film set, matte painting, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - Round 1, 11 October 2026: variation 1 was picked here and then held at review: it reads as a 1950s rocket standing beside a launch ladder. 2 climbed with a shuttle-like nose. The prompt above is the round 2 tightening the same day: a flattened lifting body seen side-on, leaving a long shallow-inclined rail with nothing standing beside it, and the vertical rocket, ladder, tower and gantry negated by name. The shallow rail is a picture choice against the page's *rides a launch cradle to near-vertical*; the frame is taken after the climb has begun so the cradle's angle is not the subject.
  - **Round 2, 11 October 2026 (not filed):** both variations were winged lifting bodies leaving a low rail with nothing standing near it, which the tightening asked for, but neither clearly passed: 1 read as a stealth military aircraft, and 2 carried stencil-like glyphs on its hull and an exhaust trail hooking back on itself. Then Dermot gave the crew (sheet F: *pilot, co-pilot and passengers although highly automated*), and the prompt above gained the forward flight deck.
  - **Round 3, 11 October 2026 (not filed):** on the corrected prompt. 1 was an orbiter shape with a row of cabin windows down its flank, which the sheet refuses; 2 flew level like a business jet, the trail rising from the near end of the rail, with no sense of an ascent. **The filed Shuttle stays** until a round clearly passes against sheet F; the alt text on `.eleventy.js` is unchanged because the file is.
- **`hero/seasons-orbit.jpg`** — the Seasons index, the whole record's door. Filed 1920×1285 (3:2); asked at 3:2. A single-ring habitat, `starship-design.md` sheet D, the house kind of place (Greenward, the Compact's rings): about 350 m across at about 2.2 rpm, a little under 1 g at the rim; a non-rotating hub with docking; radiators edge-on to the sun; *the ring small and exact against the world below*. Taken from a transfer craft on approach, so a witness had the camera. Guessed: the four spokes and the world.
  > Documentary photograph taken inside the world by a 29th-century camera, taken from a transfer craft on approach with a long lens, 3:2 landscape: a single-ring orbital habitat in high orbit over a settled world, small and exact against the world below. The habitat is one plain ring about three hundred and fifty metres across, turning slowly so that the people inside it stand on its inner rim, joined by four thin straight spokes to a small non-rotating hub at its centre where a plain docking collar sits; beside the hub, a pair of large flat plain radiator panels held edge-on to the sun, the largest surfaces on the structure. The ring's skin is dull grey composite with honest panel seams, unmarked, no window band, no glazing, no lit flank; at most a few tiny steady points of light at the docking collar. The sun lights it hard from one side and its far side falls into black. Below it, filling the lower half of the frame, the world's day side under cloud, an ocean and the edge of a continent, the terminator running across one corner into night; above, plain black sky, no stars showing in the exposure. The ring is centred and about a third of the frame's width. Quiet, still, a home seen from outside. Photographed, not rendered: hard real sunlight and deep shadow, high-ISO grain in the black, a long lens with slight softness toward the corners, muted natural colour, the small imperfections a real photograph keeps. Negative: readable text, lettering, numerals, insignia, flags, logos or written characters of any script anywhere in frame; International Space Station, modular station of cylinders, solar panel wings, Space Shuttle, capsule, megastructure, several rings, a ring larger than the world, orbital tower, space elevator, tether to the ground; glazed cockpit, window band, lit flank, city lights on the hull, sleek hull, fins, antenna forest, painted name, glowing trim, engine glow, lens flare, god rays, nebula, galaxy, starfield; weapons. Render negatives: 3D render, CGI, octane render, video-game render, science-fiction film set, matte painting, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - **Filed 11 October 2026**, round 1 **variation 2** (3:2), 1600×1071 at finish strength 1: the radiator pair rides the non-rotating hub along the spin axis, as sheet D has it; 1 hung a radiator off a spoke, on the turning part. Both are in the photographed-model register the audit passes for ships; 2's ring is larger in frame than asked.
- **`hero/season-01.jpg`** — Season 1 and the Tissadelle Arc thread. Filed 1920×1080 (16:9). The season opens at Threshold Station, whose shape the record withholds (sheet E is open, and the 9 October composite keeps it a silhouette), so the hero does not show the station from outside: it shows what the season is about, Dock Seven's two chronometers, *the one above the pressure seal and the one above the inner hatch, the station's and the other one*, seen from the watch desk opposite (S01E01C04's own staging; the left-hand one is the station's, by the Threshold page). A chronometer carries numerals, and the lettering ban cannot beat the scene, so they are sealed housings with blank faces and one indicator each. The log, which carries writing, is shut.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: a wide level view across the inner wall of a dock at a coastal survey station in the year 2826, seen from behind a plain watch desk whose edge runs along the bottom of the frame, a single shut log book lying on it. The wall opposite runs the width of the frame: on the left a large shut pressure seal, a heavy rounded-cornered door of plain matte grey composite set flush in its frame; on the right a smaller inner hatch, shut. Mounted high on the wall above each, at the same height, one of two identical small chronometers: a plain round sealed housing of dull grey metal with a flat blank matte face, no hands, no dial, no numerals and no markings, and a single tiny steady pale indicator at its rim. Between the doors, the long plain wall of the dock, honest seams between its panels, a narrow bench, a small plain sealed instrument case shut on the floor. The dock is clean and kept, a working room nobody has decorated. Nobody in frame; the watch has just stepped out. Soft even light from concealed recessed sources. The two chronometers are the subject, far apart and identical. Quiet, exact, faintly unsettling, calm. Muted palette, grey, slate and a little cold blue. Photographed, not rendered: high-ISO grain heavier in the shadows, a moderately wide lens with slight softness toward the corners, a touch under-exposed so the darks hold detail, muted natural colour, the small imperfections a real photograph keeps. Negative: readable text, lettering, numerals, signage, labels, plainmarks, stencils, hazard stripes, branding or written characters of any script anywhere in frame, including on the book; clock faces, clock hands, dials, numbered dials, digital time displays, screens, monitors, consoles, gauges, meters, knobs, toggles, holograms, tablets; visible lamp, light fitting or bulb; windows, spacecraft, Earth, starfield; pipes and valves, exposed cables, grime, rust, peeling paint, debris, neglect; people, weapons. Render negatives: 3D render, CGI, octane render, video-game render, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - **Filed 11 October 2026**, round 1 **variation 1** (16:9), at finish strength 1: blank-faced housings, one indicator each, a clean wall. 2 ran grime streaks down the seams and put a tick at the top of one face. Flaw in 1: the inner hatch is an ordinary panelled door with a lever handle. Filed at 1600×669 (about 2.4:1), not the old 16:9: the chronometers sit high in the frame and no 16:9 crop puts them inside the 3.4:1 band the page shows, so the crop was taken from the top of the frame and the aspect gave way to the subject.
- **`hero/season-00-foundation.jpg`** — Season 0, its three episodes and the Founding Era thread: *the fracture before the oath*, 2712 to 2723 UCSD under the last of Military Space Command, told in hearing rooms at Solar Command on Mars (the Consolidation Hearing, the Charter Ratification Chamber). Filed 1920×1200 (16:10); asked at 3:2 and cropped. The page's own detail carries the fracture without anything military in frame: *a different crest on the wall … and otherwise the exact chamber* (S00E03C01), so the crest is down and only its paler patch remains. The one bound volume is shut.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 3:2 landscape: a wide level view of an empty hearing chamber at the planetary command on Mars, the morning after a long session. Tiers of plain upholstered seats in a shallow curve face a long plain table at the front; the table is bare but for a single shut bound volume, a carafe of water and one glass. The chamber is built for long argument rather than ceremony: pale ochre-grey composite walls meeting the floor in rounded coving, a low ceiling with soft light spread evenly from long slots, fittings set flush, and along one side a long low pressure window of very thick glass onto the Martian surface, rust-red ground, scattered stones and a pale butterscotch sky with fine dust in the air. On the wall behind the table, a clean paler rectangle where a crest has lately been taken down, its bolt holes still showing and nothing hung in its place. Nobody in frame. Clean and kept, quiet and unsettled, the room of an institution about to be replaced. Muted palette, ochre, grey and dusty rose. Photographed, not rendered: high-ISO grain heavier in the shadows, a moderately wide lens with slight softness toward the corners, a touch under-exposed, muted natural colour, the small imperfections a real photograph keeps. Negative: readable text, lettering, numerals, signage, labels, nameplates, flags, banners, crests, emblems, insignia, seals, logos or written characters of any script anywhere in frame, including on the volume; military uniforms, soldiers, guards, weapons, rifles, armour, military vehicles; screens, monitors, consoles, wall displays, holograms, microphones on stalks, desk lamps, dials, gauges; visible lamp, light fitting or bulb; neon, glowing rings, plinth, throne, spotlit dais, futuristic corridor; Earth in the sky, domed city skyline; grime, rust, neglect, debris. Render negatives: 3D render, CGI, octane render, video-game render, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art. Landscape orientation.
  - **Filed 11 October 2026**, round 1 **variation 2** (3:2, cropped to 16:10), 1600×1000 at finish strength 1: tiered seats, a long window onto Mars, the crest's paler patch with its bolt holes. Flaw in both: the walls are stained, short of *kept*, and the ceiling slots read as fluorescent panels; passed at review; a second round with *stains* negated is the remedy if it is ever revisited.
- **`hero/season-05-explorers.jpg`** — Season 5: Line Captain Shepherd's command, *the distance between signing an order and standing where it lands*; it opens at *a fold-approach post on the outward frontier … Shepherd's first command*. Filed 1920×1097 (about 7:4); asked at 16:9 and cropped. The space-suited explorers go: on duty a Ranger is in uniform, seen from behind so no face and no insignia need inventing (the field uniform as in her Halyx portrait). The ship she has sent waits at the staging site, `starship-design.md` sheet B (a Lee-class), from far off: a spine, two short drums amidships, radiators aft, dark. Guessed: that it is a Lee-class at all (the chapter does not say which hull), and the round port, since whether any hull has more than ports is open.
  > Documentary photograph taken inside the world by a 29th-century camera, available light, 16:9 landscape: the small plain watch room of a fold-approach post on the outward frontier, a Line Captain of an interstellar rescue and survey service standing alone at a single round port, turned three-quarters away from the camera, one hand resting on a single shut folio on the sill, looking out. A woman in her thirties, long red hair tied back for work, her face not shown. She wears the standard field uniform: a modular matte shell in dark slate-grey over a close-fitting thermal liner, sealed seams, a plain stand collar, utilitarian and unornamented, sized to her rather than tailored. Through the port, far off in black space and lit hard from one side by a distant sun, a ship waiting at the staging site: a long plain dull spine with two short drums amidships and flat radiator panels aft, unmarked, no lights, no window band. The room is clean and kept: seamless matte grey composite walls, honest seams, sealed plain housings at intervals with at most one small unlit indicator, soft even light from concealed recessed sources, nothing else in it. She stands left of centre and the port is right of centre, both in the middle band of the frame. The weight of an order already given. Quiet, serious, hopeful, still. Muted palette, slate, grey and black. Photographed, not rendered: real cloth with a weave and creases, hair with stray strands, high-ISO grain heavier in the shadows, a fast lens near wide open with shallow depth of field so the ship is a little soft, slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, signage, labels, name tape, badges, chevrons, rank stripes, wings, stars, crests, emblems, insignia, flags, logos or written characters of any script anywhere in frame; spacesuit, helmet, visor, astronaut, armour, weapons, military uniform; screens, monitors, consoles, displays, keyboards, holograms, dials, gauges, tablets; visible lamp, light fitting or bulb; glazed cockpit, window band, lit flank, sleek hull, fins, wings, antenna forest, engine glow, painted name on the ship; Earth in the window, nebula, galaxy, lens flare; grime, rust, pipes, neglect; second person; posed to camera, glamour lighting. Render negatives: 3D render, CGI, octane render, video-game render, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, waxy skin. Landscape orientation.
  - **Filed 11 October 2026**, round 1 **variation 1** (16:9, cropped to the filed 7:4), 1600×914 at finish strength 1: the ship through the port is a spine with two drums amidships and radiators aft, sheet B; 2's ship was a station truss with solar wings. Uniform plain, no insignia, face away.
- **`hero/atlas-chart.jpg`** — the Atlas index: *not every place mentioned in the record has been surveyed closely enough to map*. Filed 1376×768 (about 16:9); asked at 16:9 and filed at 1600 px. Redone under decision 1, A (the Atlas maps the world). The vintage atlas, the sextant and the lamplight go, and so does every map, since a map is an object made to carry writing: what is laid out instead is what a survey actually brings home, glass plates of star fields, and the registers it is filed in, shut. One sealed housing carries the century.
  > Documentary photograph taken inside the world by a 29th-century camera, available daylight, 16:9 landscape: a long plain table in a survey chart room, seen level and close from one end so that it runs across the frame. Laid along it in a single row, a set of glass survey plates, each a photographic negative of a dense star field, black specks of stars on clear glass, a few overlapping, catching cold daylight from a tall window out of frame on the left; beside them two shut bound survey registers in plain dark cloth with nothing on their covers or spines, and a pair of plain steel dividers lying open across one plate. At the far end of the table, one sealed plain matte housing the size of a book, with a single small unlit recessed indicator, honest seams, a material that is not quite the old one. The room is clean and kept, pale walls with nothing on them. Quiet, exact, patient: what has been surveyed closely enough to map. Muted palette, cold grey daylight, black glass, pale wood. Photographed, not rendered: real glass with dust and fingerprints at its edges, high-ISO grain, a lens near wide open with shallow depth of field falling off along the table, slight softness toward the corners, a touch under-exposed, muted natural colour. Negative: readable text, lettering, numerals, labels, place names, grid numbers, compass rose, constellation lines, maps, charts, globes, drawn star charts, book titles, notes, handwriting, signage or written characters of any script anywhere in frame; sextant, ship's compass, oil lamp, candle, brass instruments, quill, parchment, antique map, gold ink; screens, monitors, holograms, projected light, glowing displays, light box, tablets; visible lamp, light fitting or bulb; grime, clutter, neglect. Render negatives: 3D render, CGI, octane render, video-game render, science-fiction film set, plastic sheen, airbrushed, over-smooth surfaces, glossy concept art, stock still-life photograph. Landscape orientation.
  - **Filed 11 October 2026**, round 1 **variation 2** (16:9), 1600×893 at finish strength 1: the plates in a row, the registers shut and blank, the housing at the far end; 1 carried a dark rounded vignette like a scanned print.

**Photorealism batch 1, filed 11 October 2026** (one round of two variations each; home-launch two further rounds). Filed at finish strength 1, each `image_alt` and inline `alt` rewritten from the file: `hero/seasons-orbit` 2, `hero/season-01` 1 (cropped to about 2.4:1 so the chronometers fall in the band), `hero/season-00-foundation` 2, `hero/season-05-explorers` 1, `hero/atlas-chart` 2, `planets/fliade` 1. **Not filed:** `hero/home-launch` (rounds 2 and 3 above; the Shuttle stays until a frame clearly passes sheet F) and `archecluster` (not rolled; the card recommended, the decision Dermot's and pending).

**Filed 11 October 2026, later:** `sen` (variation 1 of round 4, the record cases replaced by a plain wall; Survey Corps shell per *"Sen is uniformed"*) and `hero/home-launch` (variation 1 of round 4, the javelin high in its climb with the cradle out of shot, cropped to 15:8; `DEFAULT_OG_IMAGE_ALT` rewritten). The Space Shuttle is gone from the share card.

