# Portraits Needed — Firefly Prompt List

Planning note (not built into the site — lives in `story-bible/` like the
other authorial notes). Working list of character pages that currently have
**no portrait**, with suggested generation prompts for Adobe Firefly.

## House style (match these when generating)

Two established conventions on the existing pages, worth preserving:

- **Humans** get a role-appropriate, slightly cinematic portrait — the current
  cast leans noir/detective (e.g. Oyelaran's alt text is *"A detective with a
  cigar writing in a notebook"*, Larsen's is *"An old-fashioned detective"*).
  Head-and-shoulders or upper-body framing, in-world setting, professional
  wardrobe. **Not** contemporary glamour/fashion shoots and **not**
  sensualized — that clashes with every existing portrait and with the
  characters' roles (detectives, commanders, scientists, bureaucrats).
- **AIs and non-corporeal beings** get an *abstract emblem/interface* image
  rather than a literal face (Reeves = *"A laptop displaying a face-recognition
  hologram"*; the Eden Warden = *"A facial recognition system interface"*).
  Keep that for AIs and the Levril.

Target output: portrait orientation, ~1200×1600 (the site's portrait spec),
neutral/desaturated-but-punchy palette that reads against the site theme.

Set each file's `image:` (filename below) and `image_alt:` front matter after
generating, and drop the JPG at `src/images/characters/<id>.jpg`.

---

## Humans

### Naomi Kestrel — `naomi-kestrel.jpg`
Female, junior field investigator, Eden Space Habitat Civil Investigations
Unit. Reads habitat telemetry, dock manifests and comm chatter "as one
continuous sentence." Analytical, quietly intense.
> Cinematic portrait of a young woman analyst in a dim habitat operations
> room, upper body, focused expression lit by the glow of data readouts,
> practical dark uniform, science-fiction space-station interior, muted
> teal-and-amber palette, professional, no glamour styling. Portrait
> orientation.

### Rosalind Vey — `rosalind-vey.jpg`
Female, tactical specialist, Eden Civil Investigations. Ex-habitat tactical
response; moves through zero-g without thinking; treats a scene as a room that
might still be dangerous. Calm, physically capable.
> Cinematic portrait of a composed woman in a practical tactical-response
> jumpsuit aboard a space habitat, upper body, alert and unbothered
> expression, subdued corridor lighting, science-fiction setting,
> desaturated palette, professional, no glamour styling. Portrait
> orientation.

### Tamsin Reyes — `tamsin-reyes.jpg`
Female, undercover specialist, Eden Civil Investigations. A chameleon —
"whoever a room needs her to be," craft not instinct. Deliberately forgettable.
> Cinematic portrait of a woman with a neutral, unreadable expression in
> understated civilian clothing, upper body, softly lit habitat interior,
> science-fiction setting, muted palette, deliberately ordinary and
> approachable rather than striking, professional, no glamour styling.
> Portrait orientation.

### Lorien the Wanderer — `lorien.jpg`
Female (she/her), freelance survey-and-salvage captain of the *Restless Verge*.
Independent, thorough-in-a-hurry, weathered but disciplined. Frontier explorer.
> Cinematic portrait of a weathered independent starship captain, woman,
> upper body, wearing a worn flight jacket in the cockpit of a stripped-down
> long-range courier ship, self-reliant expression, warm instrument lighting,
> science-fiction frontier setting, gritty realistic palette, professional.
> Portrait orientation.

### Osric Fenholt — `osric-fenholt.jpg`
Male, **Historical** (b.2558–d.2621), Imperium-era Belt settlement-compliance
bureaucrat. "The Honest Man of the Directorate" — a tedious, precise, unshowy
clerk who filed accurate figures for nineteen years. Period feel, not modern.
> Cinematic portrait of a plain, serious middle-aged male bureaucrat in a
> severe archaic administrative uniform of a fallen space empire, upper body,
> seated at a paperwork desk, unremarkable and precise demeanor, muted
> sepia-and-grey period palette, dim archival lighting, historical
> science-fiction, no heroism or grandeur. Portrait orientation.

### Wendell Albercombe — `wendell-albercombe.jpg`
Male, Detective Inspector, Eden Space Habitat. Carries the "boring" caseload,
complains constantly, solves cases over dinner. Rumpled, put-upon, competent.
Fits the noir-detective house style well.
> Cinematic noir portrait of a rumpled, world-weary male detective inspector
> in a slightly worn coat aboard a space habitat, upper body, tired but sharp
> expression, low-key dramatic lighting, science-fiction detective setting,
> desaturated palette, professional. Portrait orientation.

## Alien

### Sethka Ru — `sethka-ru.jpg`
Male (he/him), **Serephine Dunekin** — an alien, not a human. From a cold,
thin-air, high-UV desert world. Non-human physiology: **light-scattering eye
membranes**, water-conservative build; wears filtration gear in station air.
Long-range scout. **Must read as clearly non-human**, not a human in a headwrap
(that was the previous mistake).
> Cinematic portrait of a non-human humanoid alien long-range scout, upper
> body, with pale nictitating light-scattering eye membranes and lean
> desert-adapted features, wearing lightweight respiratory filtration gear,
> alien science-fiction reconnaissance outfit, cold high-UV desert-world
> lighting, otherworldly palette, clearly extraterrestrial anatomy,
> professional concept-art style. Portrait orientation.

## AIs & non-corporeal (abstract emblem, not a face)

### Jeeves — `jeeves.jpg`
Domestic-companion AI, Eden. Runs a detective's household; kitchen-and-gossip
competence. Emblem style — a domestic/service motif rather than a person.
> Abstract emblematic image representing a domestic household artificial
> intelligence: a warm stylized interface glyph over a tidy kitchen/hearth
> motif, soft ambient glow, minimalist science-fiction UI aesthetic, no human
> face, muted warm palette. Portrait orientation.

### Reeves (Eden Space Habitat) — `reeves-eden.jpg`
Investigative-support AI, Eden bureau. Same model as Threshold's Reeves (whose
alt is *"A laptop displaying a face-recognition hologram"*) — echo that, but
distinct enough to read as a separate deployment.
> Abstract emblematic image of an investigative-support artificial
> intelligence: a holographic evidence-analysis interface and case-file glyphs
> projected above a terminal, cool blue science-fiction UI aesthetic, no human
> face, clean and analytical. Portrait orientation.

### The Turquoise Dove — `turquoise-dove.jpg`
**Higher Levril** — a meta-dimensional "dragon." No two witnesses describe the
same shape; known only by the turquoise iridescence of her dimensional
signature. Abstract/emblem — a field signature, not a literal dragon.
> Abstract ethereal image of a meta-dimensional presence known only by its
> harmonic signature: a gentle turquoise-and-verdigris iridescent field of
> light, coral-shallow blue-green tones, no defined creature shape, soft
> non-threatening luminosity, science-fiction otherworldly abstraction.
> Portrait orientation.

---

### Notes
- 10 pages currently portrait-less: the 6 that never had one (Jeeves, Lorien,
  Osric Fenholt, Turquoise Dove, Wendell Albercombe, and the new Reeves-Eden
  page) plus the 4 whose mismatched stock images were removed in PR #160
  (Naomi Kestrel, Rosalind Vey, Tamsin Reyes, Sethka Ru).
- `character.njk` renders cleanly with no portrait, so none of these block a
  build — they're a polish backlog, not bugs.
- After generating, downscale to ~1200×1600 and set `image` + `image_alt`
  front matter per page.
