# Music prompts — generation and provenance

The prompt-of-record for every generated or commissioned piece of audio in the
repo, and the house sonic signature they all share. Kept in `story-bible/` so it
ships with the repo but stays outside `src/` and is never published to the site.
Planning note; not rendered.

**Why this file exists.** `src/audio/` already holds five files — four site theme
tracks and one in-universe recording — and **not one of them has a prompt
recorded anywhere.** That is precisely the failure `image-prompts.md` was written
to stop happening twice, and it had already happened again in a medium nobody was
watching. When a theme track needs regenerating at a different length, or a
codex recording needs a second take, there is currently nothing to regenerate
*from*.

**Rule going forward, borrowed intact from `image-prompts.md`:** no generated
audio enters the repo without an entry here.

**Undecided items from this file are indexed in
[`open-questions.md`](open-questions.md)**, so they can be found without reading
this one.

---

## The five existing files: mark the absence, do not invent one

| File | Used by | Prompt |
|---|---|---|
| `celtic-theme.wav` | default edition, "Celtic ambient" | **unrecorded** |
| `fellowship-theme.wav` | Fellowship of Light, "Orchestral fantasy" | **unrecorded** |
| `starquest-theme.wav` | Orbital Five-O, "Sci-fi ambient" | **unrecorded** |
| `pets-theme.wav` | Undercover Pets, "Playful ukulele" | **unrecorded** |
| `ballad-of-the-stars.m4a` | `src/codex/ballad-of-the-stars.md` | **unrecorded** |

Tool, date, model and seed are unknown for all five. **Do not reconstruct a
prompt for them and file it as though it were the original** — the Prismere
cluster's reconstructions are labelled as reconstructions for exactly this
reason, and an invented provenance line is worse than a blank one because it
stops anyone looking further. The prompts below are **new briefs written from
canon**, not recoveries; a regeneration under one of them produces a *different*
track, and that is a decision for Dermot, not a maintenance job.

---

## What governs

### The target

The same line the images run on (`images.md`, 12 August 2026), which already
says *"for images and audio alike"*:

> **Enigmatic and haunting, with beauty, mystery, hope and serenity woven
> through.**

The audio corollary of *"if a prompt reads like a brief for a passport photograph
it fails this"* is: **if it reads like a brief for corporate background music, it
fails this.** Competent, inoffensive, texture-only ambience clears every
prohibition below and still misses the target entirely.

**Amended 20 August 2026, Dermot's direction: *beautiful, enigmatic, haunting,
dramatic*.** *Dramatic* is the new word, and it scopes the target rather than
contradicting it — **a footer loop and a film are different jobs.** The edition
themes below play under someone reading and must not compete with the prose;
holding drama back there is correct. A piece someone chose to play, gave three
minutes to and is listening *to* — an in-universe recording, a video score — is
the opposite case, and withholding there is not restraint, just quiet. So the
briefs split: the four theme tracks stay at the quiet end deliberately, and
everything else may build, arrive somewhere, and cost something.

The horror line does not move. Dramatic means stakes and shape, never shock —
still no stingers, no risers, no sub-drops used as threat.

Video carries the same direction and its own runbook:
[`video-prompts.md`](video-prompts.md).

### The tone line

Unsettling is fine, horror is not. In audio the line falls in a specific and
easily-crossed place: **no stingers, no risers, no sub-drops used as threat.**
Those are the throat machinery of the cyber-revenant portrait — they depict the
dark fact rather than hinting at it. A held note that will not resolve is the
approved version of the same instinct.

### The rung's register (22 September 2026)

Dermot named each reading tier's register on 22 September — *the child reader
tier should be interesting and playful, the young adult tier should be more
mysterious with a sense of exploration and adventure, the general tier should go
deeper, and the contemplative tier is allowed to question everything* — and a
theme track is the one place a tier's register is heard before it is read. So
each edition brief below is checked against its rung as well as against the
signature. Children (pets, the Told): interesting and playful, delight the
measure — the hum stays but nothing in the track is sad. Young adult (Five-O,
Young Star Rangers): mysterious, exploring — forward motion permitted, the
mystery an invitation and never a weight. General (the default): deeper — the
one theme that may carry the whole signature undiluted. Contemplative
(Fellowship, Church Space): allowed to question — the held note that will not
resolve is what a question left open sounds like, and it belongs at the top of
the ladder more than anywhere else. The ladder's invariant holds in audio too:
a higher rung's theme adds, and never contradicts, what a lower rung's said.

*Re-grounded 19 October 2026* (`intake-2026-10-19.md`): young adult is now *sensual and romantic as decency allows, with exploration and adventure*, and general is *deeper, mysterious and strategic*. A young-adult brief therefore gains warmth and longing in the melody, and the general theme gains a patient, strategic line. Courage with patience and discretion rather than violence holds at every rung, so no theme is martial.

### The canon boundary

**Music is illustrative; the prose is canon** — the same rule the images carry.
A generated track is an impression of a recording the corpus describes, not a
specification of it, and where a track and an entry disagree **the entry wins and
the track stays**.

With one asymmetry that has no image equivalent:

**The codex entry is the lyric of record.** A song's words are already published,
attributed to a named in-universe author, inside a codex entry — which makes them
*valid-for-their-author* canon in a way an image's alt text is not. So:

- A generated vocal track sings **the published lyrics verbatim**. Generators
  cheerfully invent a bridge; that bridge does not enter the repo, and a take
  that mangles a confirmed line is a defect rather than a variation.
- **A new lyric is a codex draft, not a music prompt.** If a track needs words
  the corpus does not have, that is a new codex entry with an `author`, drafted
  and stopped for review, and the audio waits for it.
- Where an entry marks part of a lyric as **reconstructed scaffolding** (the
  *Ballad of the Stars* verses outside the confirmed chorus and second verse),
  the audio inherits the marking: generating those lines and shipping the result
  quietly promotes best-guess text to a recording the entry then has to be true
  about.

### Where a track may not be generated at all

- **External recordings.** `clan-avalons-anthem.md` and `aethelrock-tir-na-nog.md`
  are filed as *linked, not archived* — real work by a real band, referenced and
  not endorsed. Generating audio for either would fabricate a third party's
  recording and file it beside their name. Never.
- **The Krenyi.** `src/lore/krenyi.md` marks their distance from human music as
  *their* absence, not the archive's, and declines to claim they have no forms of
  their own. A "Krenyi theme" would answer, in a footer player, the one question
  that entry deliberately leaves open. Don't.
- **Anything the Corps commissioned** (added 30 September 2026, after the Music
  Corps page landed on 28 September). `src/lore/star-rangers-music-corps.md`
  says twice that the Corps commissions nothing and that the Music Corps has no
  repertoire; the anthem is Slipwave's and the hymn is nobody's, and that is the
  page's whole argument. So no *Star Rangers theme* in the sense of an official
  march, no Music Corps fanfare, no commissioning music. A site theme is site
  furniture and makes no such claim; a track *filed as the Corps' own* would.
- **Speech the record holds only in translation** (same day). The Told's words,
  the Ovruhn keeper's click-speech and the Spiralites' pulse-speech have no
  recorded form — `src/glossary/the-told.md` says so outright, and the other two
  pages render everything through the translation desk. A generated voice
  *speaking* as any of them invents the one thing the record has declined to
  invent. Their textures may be rendered (below, and labelled as renderings);
  their speech may not.

---

## The house sonic signature

Every edition's palette differs; the signature underneath does not. Same
arrangement as the stylesheets — `main.css` is the structure and a theme swaps
only the palette — and for the same reason: the domains are one work wearing
different front-of-house, and a listener moving between them should hear that
before they can say why.

Three anchors, all of them already canon, none invented for the music:

1. **The hum.** A habitat rotates and it is audible; unshielded systems leak it.
   Every track sits on a low sustained tone that was never played by anybody.
2. **The drift.** *Slipwave* is named for the pitch drift habitat musicians
   learned to compensate for when that hum reached the sound system
   (`src/glossary/slipwave.md`). So the house signature is a **slow, small,
   uncorrected detune** — a few cents, wandering, never fixed. It is the setting's
   own name for itself, and it is the single most useful instruction in this file.
3. **The forty seconds.** Threshold's two Dock Seven chronometers have disagreed by
   forty seconds for eleven years: a gap that comes back after every recalibration
   and holds near forty, never growing (`src/glossary/instrument-drift.md`).
   Wherever a track carries a pulse, **the pulse arrives a fraction late and never
   catches up.** Not a stumble — a steady, patient wrongness that a listener
   notices only on the second pass.

### Shared preamble

Paste ahead of any edition prompt below except Undercover Pets and the Told.

> Instrumental. A low sustained rotational hum under everything, like a
> habitat's structure heard through a wall. Slow harmonic movement, long held
> tones, generous space between events. A small uncorrected pitch drift across
> sustained instruments, a few cents wandering and never resolving into tune.
> Where a pulse exists it sits a fraction behind the beat and stays there.
> Recorded-in-a-real-room quality, air and noise floor audible, nothing
> perfectly quantised. Restrained, patient, unhurried. Enigmatic and haunting,
> with beauty, mystery, hope and serenity in it.

### Shared negative

> No trailer risers, no braams, no impact stingers, no horror drones, no
> dissonant stabs. No big cinematic percussion, no EDM build or drop, no glossy
> pop mastering, no sidechain pumping. No spoken word, no vocal samples, no
> lyrics. No whale song. No sitar, no shakuhachi and no theremin used as
> shorthand for "alien" or "space".

### Using these in an app with short fields

`MyTunes`, Suno, Udio and the rest all take **short fields, not paragraphs**, and
they weight the front of a box heavily. MyTunes' description box holds 200
characters and silently cuts the rest, so a one-box line for it stays under that. So every brief below is split into six
lines, each one short enough to paste into a field on a phone:

| Field | What goes in it |
|---|---|
| **Style** | genre and form tags, comma-separated. The one field every app has. |
| **Mood** | three or four adjectives, no sentences. |
| **Instruments** | the palette, most important first. |
| **Production** | the house signature — this is where the hum, the detune and the late pulse live. |
| **Exclude** | negative tags, if the app has a box for them. |
| **Form** | length, instrumental or vocal, loop or not. |

**If the app has only one box**, paste **Style, Mood, Instruments, Production**
in that order, comma-separated, and drop the rest. The order matters more than
the wording: what is in front gets weighted, what runs past a couple of hundred
characters tends to get thinned out. **If it has no exclude box**, do not write
"no drums" into the style field — most generators read the word and give you
drums. Re-roll instead, or say the positive version (*"beatless"*, *"unmetered"*).

Two habits worth keeping whatever the tool:

- **Generate short and loop it**, rather than asking for three minutes. A 60–90 s
  loop that never lands wrong beats a three-minute track with one bad bar in it.
- **Keep the seed and the take number.** Every entry in this file has a slot for
  them, and re-rolling a good take you cannot find again is the most avoidable
  waste there is.

### MyTunes' settings, as Dermot reported them (6 November 2026)

| Setting | Choices | For instrumental themes and textures |
|---|---|---|
| Description | one box, **cut at 200 characters** | the one-box line, under 200 |
| Instrumental or vocal | instrumental, or vocal | instrumental |
| Vocals | male, female, or none chosen; **sometimes ignored** | not used |
| Genre | Classic, Country, Pop, Jazz, Rock, Rap, House, or none | none first; *Classic* if a take comes back with a beat |
| Live / Concert | on, or off | off: it adds an audience and a hall, and a card once claimed a live recording the file did not have |

None of the seven genres fits the house sound. *Classic* is the nearest, since it
leaves out the drum kit, and *Country* comes after it. The rest each add a beat, or
in jazz's case swing, which would bury a late note. Because the vocal setting is
sometimes ignored, a sung brief that needs one voice has to say so in the
description too, and a take is checked by ear for the voice it got.

### Running a prompt from the phone

Dermot's route, 6 November 2026: *"copy and paste for MyTunes from a cloud claude
session on my phone"*. He keeps the annual plan in the phone app, and a Claude Code
cloud session is the go-between, since it can read this file and nothing else of his.

1. He asks the session for a prompt by name. It reads the entry here, from `main`.
2. It prints the one-box line first, then each of the six fields, every one in its own
   code block, so that each takes one tap to copy. It adds nothing to them.
3. He pastes them into MyTunes and runs it there.
4. He brings the audio back to the same session, which takes the audio out of its
   wrapper, measures it, and adds the take to the entry here with the prompt as
   typed. A take he rejects is still logged, so it is not made twice. A take is
   filed under `src/audio/` only when a page or a film uses it: everything there is
   served on every domain, and MyTunes is the sketchpad, not the delivery path
   (*Tools*, below). Until then he keeps the mp4.

A new or changed prompt lands here first, as a pull request, before it is run.

### Delivery

- **Loopable**, 90–150 s, no fade in or out, ending on a tone that can meet its
  own beginning. `base.njk` sets `loop`, so a track with a produced ending will
  audibly restart forever.
- **Quiet.** Around −18 LUFS, no limiting for loudness. It is a footer flourish
  under someone reading; a track that competes with the prose has failed
  regardless of how good it is.
- **`preload="none"`** is already set, which is what makes the current 4–8 MB
  WAVs survivable. Keep new tracks well under that — see *Practical notes*.

---

## Tools

**Current tool: MyTunes (MWM), and it is a reasonable place to start.** It takes
a description, a style and optional lyrics, which maps onto the six fields above
with nothing important lost, and it is fast enough to try five ideas in an
evening. Keep it for sketching.

**What it costs, in the two places that matter here:**

- **The wrapper is not the deliverable.** MyTunes hands back an mp4: one still
  image at 854×480 with a *Made With MyTunes* badge, which is where every
  container defect in `video-prompts.md` came from. **Extract the audio** and
  treat the card as a separate decision. Nothing that ships on a domain should
  carry another product's badge.
- **No stems, no section regeneration, no loop export.** Which is exactly what
  the two live jobs need — the four themes must loop seamlessly, and the two
  unrecorded songs have *published lyrics that are canon*, so one mangled line
  is a defect rather than a variation.

**Alternatives, keyed to the job rather than ranked:**

| Job | Tool | Why |
|---|---|---|
| The four edition themes | **Stable Audio** | Built for instrumental beds and loops rather than songs, exports MIDI as of 2.5, and ships clean commercial terms. The loop requirement is the whole spec here, and song-shaped generators give you an intro and an outro that will not meet. |
| *Half-Light Causeway*, *Protectors of the Fold* | **Udio** | **Inpainting** — regenerate one section without touching the rest, so a mangled canonical line is fixed in place instead of costing the take. Stems too. Also the cleanest licensing of the song generators: Universal, Warner, Merlin and Kobalt have signed with it. |
| Anything where terms matter more than polish | **ElevenLabs Music** | Clean commercial terms, quality a step behind the leaders. |
| Best raw quality | **Suno** | Strongest vocals and coherence, cheapest, and the least settled rights position — Sony and Universal litigation was still live in mid-2026. |

**Settled 20 August 2026, Dermot's direction: this music is for the live
domains.** That turns the last column of the table from a footnote into the
deciding one, and makes two things follow rather than remaining open:

- **Udio moves from conditional to recommended** for anything with published
  lyrics. Its inpainting is what protects a canon lyric line, and its licensing
  position — Universal, Warner, Merlin and Kobalt signed — is the strongest among
  the tools that can sing.
- **MyTunes stays the sketchpad and stops being the delivery path.** A consumer
  app's terms are the wrong ground to stand on for audio served from five
  domains, and its output arrives wrapped in another product's badge. Sketch
  there; finish elsewhere; publish the audio, not the wrapper.

**Why licensing is a real question here and not boilerplate.** The story content
is published under CC BY-NC-ND on several live domains, and this project is
unusually careful about who holds what — `CONTENT-LICENSE.md`, the code/content
split, the rule that a chartered work stays outside `src/` because its rights
holder is someone else. A track in a footer player on five domains is a
different exposure from a track on a phone. Not an argument against any tool;
an argument for choosing deliberately and writing down what was chosen.

**Whatever the tool:** m4a or mp3, around −18 LUFS, seamless loop for themes, and
an entry in this file with the prompt as typed.

**Route.** Themes and textures go to Stable Audio or ElevenLabs Music, songs to Udio.
None is run on MyTunes as delivery. To sketch one there, write its one-box line here
first, under 200, counted.

---

## Ready prompts — site theme audio

One per edition, keyed to the `themeAudio.label` already registered in
`lib/editions.js`, because the label ships to the reader and a track that
contradicts it makes the site wrong in public.

### Default — "Celtic ambient" (`fianilchruinne.com`, GitHub Pages)

The full record's own theme, and the one every unlabelled clone falls back to.
The Celtic here is the **Celtic Union's** — old-world roots carried into vacuum
by people several centuries and many light years from the islands the tunes came
off. Not a tourist reel.

| Field | |
|---|---|
| **Style** | celtic ambient, modal drone, spacer folk, dorian, slow, spacious |
| **Mood** | enigmatic, haunting, patient, unresolved |
| **Instruments** | low whistle, wire-strung harp, bowed drone, sparse fiddle entering late |
| **Production** | low station hum under everything, few-cent detune, one figure stated three times and never developed, no cadence that closes |
| **Exclude** | jig, reel, bodhrán, step-dance tempo, pub session, drum kit, vocals |
| **Form** | instrumental, 90 s, seamless loop, no intro or outro |

Ancient instruments in a room that is plainly not on a planet.

### Fellowship of Light — "Orchestral fantasy"

The contemplative tier. **Vigil, not liturgy** — the church-space material is an
overlay, a lens laid across the record, and music that sounds like a rite makes
a claim the overlay itself declines to make. Reverent register, no doctrine.

| Field | |
|---|---|
| **Style** | slow orchestral, hymn-adjacent, sacred minimalism, unmetered |
| **Mood** | reverent, watchful, warm, patient |
| **Instruments** | divided strings, distant wordless choir, low organ drone |
| **Production** | one phrase passed between sections, each hand-off slightly out of tune with the last, station hum underneath |
| **Exclude** | triumphant brass, hero theme, timpani, epic trailer, plainchant, church bells, percussion |
| **Form** | instrumental, 90 s, seamless loop |

Someone keeping a watch through the night, not a ceremony being performed.

### Orbital Five-O — "Sci-fi ambient"

The young-adult tier and the procedural thread. The only edition allowed real
forward motion — its tagline is *racing to decide what's true* — and the one
place the Hawaii Five-0 echo in the brand name may be heard at all.

| Field | |
|---|---|
| **Style** | sci-fi ambient, procedural, two-chord vamp, minimal, mid-tempo |
| **Mood** | taut, alert, cool, forward-leaning |
| **Instruments** | analogue arpeggio, tremolo reverb guitar, upright bass, dry rim tick |
| **Production** | arpeggio runs the whole length without resolving, guitar states its hook once and leaves, tick sits a fraction behind the beat |
| **Exclude** | brass fanfare, surf rock kit, full drum groove, sixties pastiche, orchestral hit |
| **Form** | instrumental, 90 s, seamless loop |

The Five-0 echo is a nod; a nod held longer than a moment becomes a costume.

### Undercover Pets — "Playful ukulele"

**The exempt thread**, deliberately off house style: cute, cool and clever, and
weaving melancholy through it is a category error rather than a stylistic
variation. It keeps the hum, because it is the same universe and a station hum
under a ukulele is a joke worth making — but **the drift resolves here.** The
wobble bends and lands back in tune. It is the one edition where the thing that
is wrong everywhere else comes right, and that is the gag.

| Field | |
|---|---|
| **Style** | ukulele spy jazz, light swing, caper, small combo, major key |
| **Mood** | playful, clever, bright, unbothered |
| **Instruments** | ukulele, brushed kit, walking upright bass, glockenspiel, finger snaps, muted trumpet |
| **Production** | low station hum underneath played straight-faced, any pitch bend resolves cleanly back into tune |
| **Exclude** | melancholy, minor key, ambient pads, toy piano nursery, cartoon sound effects, animal noises |
| **Form** | instrumental, 90 s, seamless loop |

Clever, not infantile — and the wobble comes right, which is the gag.

### The Told — brief written 30 September 2026; label ruled *Cavern ambient* the same day

The children's tier's second door, `told.fianilchruinne.com`, has shipped with
the Five-O "Sci-fi ambient" file since 7 September, on the reasoning that a
cavern lit by fungus is closer to Threshold than to Eden's bureau and the
ukulele is the agency's. That was a placeholder and this is the brief.

Everything in it comes from the five *Below the Roof* chapters. The people keep
their whole record by saying it out loud, in the warm, and a telling gets
*shorter the second time* when it is getting true. The up-people's survey relay
is *the humming stone*, which the youngest carried through the squeeze against
their chest and felt *in their teeth* — so the house hum here is not a station's
structure heard through a wall but a small device asleep against a body, near
and even and warm. The rung is the children's, and the thread's own comedy
(nobody looked up) is gentle, so the register is playful and curious and never
sad. And the people listen to the ground: the signature's late pulse is water,
dripping a fraction behind where the ear expects it.

| Field | |
|---|---|
| **Style** | cavern ambient, warm, low, wet-stone resonance, slow, gentle, curious |
| **Mood** | warm, curious, safe, patient, a little funny |
| **Instruments** | soft mallets on stone, low wooden flute, water drips, a small even hum close by |
| **Production** | the hum small and near rather than vast, like a device asleep against a chest; drips land a fraction late; a short figure told twice and shorter the second time; damp close reverb, not a cathedral |
| **Exclude** | ukulele, cartoon, nursery toy piano, horror cave drone, bat squeaks, choir, synth pad, sub-drop |
| **Form** | instrumental, 90 s, seamless loop |

Somewhere warm under a great deal of cold rock, and nothing in it is afraid.

**For MyTunes** (6 November 2026), 193 characters, under its 200-character cut:

`Warm, curious, patient, a little funny cavern ambient, slow, gentle. Soft mallets on stone, low wooden flute, late water drips, small near hum. Short figure told twice, shorter the second time.`

It drops *safe* from the mood, the reverb line and the loop. Run it with
Instrumental on, genre none and Live off. Not *Classic*: the late note's take 2
showed that it keeps the pulse and pulls the sound towards a stately orchestral
piece, which is wrong for a cavern. A MyTunes take is a sketch. The theme still
needs a seamless 90 s loop, which MyTunes cannot export, before anything is filed
under `src/audio/` or the label goes into `lib/editions.js`.

**The Told's theme is to be remade outside MyTunes** (Dermot, 6 November 2026,
choosing *B* over filing the MyTunes loop on the live domain, which keeps the
20 August ruling under *Tools*). Take 1, *Stone and Flute*, logged under *Entry
format*, is the reference: its 60 s loop is what the remake is matched against,
in Stable Audio or ElevenLabs Music.

**Filed, 6 November 2026.** The remake is `told-theme.m4a`, made in Stable Audio
3.0 from Dermot's *"Take C"* and *"90-second loop"*, and logged under *Entry
format*. The edition now carries it under the label.

**The label is *Cavern ambient*** — Dermot's ruling, 30 September 2026,
verbatim *Cavern ambient for the Told*, from three shapes put (*Cavern
ambient*, *Warm stone*, keep sharing). `themeAudio.label` ships to the reader
on the player, so the label goes into `lib/editions.js` **with the file and not
before**: a new label over the borrowed Five-O file is the half-overridden
player the registry warns against, in reverse. The two went in together on
6 November 2026.

### Young Star Rangers — keeps sharing Five-O's track (ruled 30 September 2026)

`young.fianilchruinne.com` reuses `starquest-theme.wav` under the same label,
as it reuses the starquest palette. The kinship is real and worth keeping
audible: Five-O picks the same Deputy up nine days later from the other side
of the ring. Two shapes were put — keep sharing, or a sibling track under the
same label — and **Dermot ruled *keep sharing for Young Star Rangers*** the
same day. Nothing to do; the two young-adult doors sound like one family. The
sibling brief stays below as a record of what was offered, and is **not
queued**.

| Field | |
|---|---|
| **Style** | sci-fi ambient, minimal, slow arpeggio, watch-keeping, spacious, mysterious |
| **Mood** | curious, alert, unproven, quietly expectant |
| **Instruments** | analogue arpeggio, soft electric piano, low sustained pad, one distant ping at long intervals |
| **Production** | the same arpeggio family as the Five-O theme but slower and an octave up, a chord that keeps almost resolving, the ping never on the beat, a ring station's hum underneath |
| **Exclude** | brass, drum groove, tension stinger, hero theme, orchestral hit, alarm |
| **Form** | instrumental, 90 s, seamless loop |

A hatch on Eden's ring that nobody looks at, and someone looking at it.

### Church Space — "Ambient drone"

**Settled 20 August 2026.** It fell through to the default's Celtic ambient,
which was never a decision — and the slot was filled by a supplied track rather
than a generated one: *Rotational Hum*, named for this file's own signature
term, registered as `rotational-hum.m4a`.

Two things it establishes for the next theme, both recorded in `lib/editions.js`
beside the entry:

- **m4a, not wav.** A third of the bytes for a decorative footer element.
- **A theme may be a piece rather than a loop.** This one runs 4:02 and builds,
  which the brief above tells a loop not to do. It survives because the player
  is click-to-play — `preload="none"`, a button, no autoplay — so nobody hears it
  who did not ask to. If the loop restart ever grates, the fix is a trimmed 90 s
  cut of the same recording, not a different track.

**Trimmed to a loop, 10 November 2026** (Dermot's pick, *"Loop B (1:54)"*, after a
music-critic read). The file as filed on 20 August was 4:00.00, cut off while
still at full level (the supplied piece ran 4:02), so on repeat it stopped dead and
faded back in. It also played at −11.6 LUFS, about 6 LU over the −18 target. It
is now **1:54, cut from 0:12 to 2:06 of the same recording**: the dark opening and
the first bright section. The join sits on the piece's own dip at 2:06. Its first
6 seconds blend, with an equal-power crossfade, what followed that dip (a dark,
low passage) into the opening, so the seam copies a move the piece already makes.
One gain change of −6.6 dB brings it to −18.1 LUFS, true peak −7.3 dBFS, with no
limiting. The music is otherwise untouched. The working files and the longer
3:36 alternative are kept on the desktop. The tool that made the recording is
still unconfirmed (below).

A brief, should this domain ever want a purpose-made theme instead: vigil rather
than liturgy, as the Fellowship entry above, but slower and with no melodic
content at all.

---

## A theme and title for the trailers: ideas, 5 November 2026

**Chosen, 6 November 2026: the late note and the closing title** (Dermot, *"A,
A"*). Ideas B and C of each stay below as the record of what was offered, and B
of the theme stays as the *Below the Roof* variation. Nothing has been generated.

Dermot's direction, the evening before: *"Theme Music and Title Sequence"*, then *"Could be
varied slightly for each season, edition or thread"*. The shape he agreed to
record is one core theme and one title treatment, varied by thread, on trailers
only. A film told as a quiet scene, such as D6, keeps its own opening.

**Why the thread and not the edition or the season.** A film is one file that
every edition carries, so a variation per edition would need a copy of the film
per domain and engine work to choose between them. A season is too fine: a new
variation each time, most barely different from the last. A trailer usually
speaks for a thread, so its variation costs nothing extra. It is made when that
thread gets its first trailer, and the core theme is the only work up front.

**What this is not.** It is a theme for the site's films, under the title
*Fian Ilchruinne*. It is never filed as the Corps' own or as a *Star Rangers
theme* (*Where a track may not be generated at all*, above). A film score is
the listened-to case under *The target*, so it may build and arrive; the tone
line and the shared negative still hold.

### The core theme: three ideas

All three come from the house signature, so a listener hears the same work
beneath every variation.

- **A. The late note (chosen).** A five-note figure over the hum, stated
  three times, and its last note arrives a fraction behind where the ear
  expects it, every time. It is the forty seconds made into a tune: short
  enough to recognise, and it can sit in any instrument. Its one risk is that
  the lateness sounds like a mistake on a first hearing. Three statements are
  what make it read as meant.
- **B. Told twice, shorter.** A figure stated in full, then again with notes
  gone, and the shorter one is the one that lands. It comes from *Below the
  Roof*, where a telling gets shorter the second time when it is getting true.
  It is the most original of the three, but it is that thread's own custom, so
  stretching it over the whole work would spend it. It is used below as that
  thread's variation.
- **C. Two tones that almost agree.** No tune: one held tone, and a second that
  drifts towards it and never quite arrives. It is the purest statement of the
  drift, and the easiest to make. It is also the likeliest to fail *The target*
  as competent ambience, and it would be hard to recognise across eight threads.

**A first prompt for A**, in the six fields, to be run with the shared preamble
and negative where the app allows them:

| Field | |
|---|---|
| **Style** | celtic ambient, spacer folk, title theme, dorian, slow, spacious |
| **Mood** | beautiful, enigmatic, haunting, dramatic, mysterious |
| **Instruments** | low whistle, wire-strung harp, bowed drone, low strings entering late |
| **Production** | low station hum under everything, few-cent detune, one five-note figure stated three times, its last note a fraction late each time, third statement fuller, no cadence that closes |
| **Exclude** | trailer riser, braam, impact, big drums, jig, reel, vocals, choir |
| **Form** | instrumental, ends on a held tone, the best 12 to 20 seconds cut from a longer take |

**The mood, 6 November 2026.** Dermot's words for the theme: *"beautiful enigmatic
haunting dramatic mysterious"*. They are the Mood line above, in his order, and they
replace the first draft's. Dramatic here is stakes and shape, so the third statement
may arrive in full, and the tone line and the shared negative still hold.

**One box:** `Beautiful, enigmatic, haunting, dramatic, mysterious title theme. Celtic spacer folk, dorian, slow. Low whistle, wire-strung harp, low strings. Station hum, few-cent detune. Five-note figure three times, last note late, third fuller. Ends on a held tone.`

Too long for MyTunes, which cuts at 200: use the 194-character line below.

**MyTunes cuts the box at 200 characters** (found 6 November 2026, when the line
above, 254 characters, was cut off at *"three tim"*). The line to paste there, 194
characters:

`Beautiful, enigmatic, haunting, dramatic, mysterious Celtic title theme, dorian, slow. Low whistle, harp, low strings, station hum, detune. Five-note motif three times, last note late. Held end.`

It drops *spacer folk*, *wire-strung*, *few-cent* and *third fuller*. If takes come
back flat, put *third fuller* back in place of *Held end*.

**The settings for take 1** (6 November 2026): genre left empty, Live off,
Instrumental on, the 194-character line above. If a take comes back with a beat or
a pop sound, take 2 is the same with genre set to *Classic*.

### The variations, by thread

The figure and its late note stay; the instrument and what the last note does
change. Each draws on the edition brief above where one exists.

| Thread | The figure on | The last note |
|---|---|---|
| Tissadelle Shepherd's Arc | low whistle and harp, the core as it stands | late, and stays late |
| Founding Era | one bowed string, nearly bare | only just late, since this is before Threshold's drift had a name |
| Undercover Pets | ukulele, with the hum played straight-faced | lands exactly on the beat: the wobble comes right, which is the gag |
| Orbital Five-O | tremolo guitar, once only, over the running arpeggio | late against the rim tick, leaning forward |
| Young Star Rangers | Five-O's, since the two young-adult doors share a track by ruling | as Five-O |
| Below the Roof | low wooden flute and soft mallets on stone, told twice and shorter the second time | a water drip, a fraction late |
| The Infinite Castle and the Timeless Library | three voices taking the figure in turn, one for each record | late on the third voice. This file has no theme brief for the thread, so this line is the least grounded |
| Church Space | divided strings, slowed until the figure is held tones passed from hand to hand | a held note that will not resolve |

#### Orbital Five-O's variation: the first prompt (9 November 2026)

The first variation written as a prompt, because a Five-O take serves two
threads (Young Star Rangers shares the track by ruling) and Five-O is the one
edition allowed a pulse, which MyTunes added to both core takes unasked. It
also answers *fresh take or edit* for one thread: this is the fresh take.
The figure is stated once, as the table above says, so the risk named under
idea A, that a single late note sounds like a mistake, is the thing to listen for.

| Field | |
|---|---|
| **Style** | sci-fi ambient, procedural, title theme, two-chord vamp, minimal, mid-tempo |
| **Mood** | taut, enigmatic, mysterious, forward-leaning |
| **Instruments** | analogue arpeggio, tremolo reverb guitar, upright bass, dry rim tick |
| **Production** | low station hum under everything, arpeggio runs the whole length without resolving, five-note figure on the guitar stated once, its last note a fraction late against the rim tick, ends on a held tone |
| **Exclude** | brass fanfare, surf rock kit, full drum groove, sixties pastiche, orchestral hit, trailer riser, braam, vocals |
| **Form** | instrumental, ends on a held tone, the best 12 to 20 seconds cut from a longer take |

**For MyTunes**, 198 characters, under its 200-character cut:

`Taut, enigmatic, mysterious sci-fi title theme, mid-tempo. Analogue arpeggio never resolving, upright bass, dry rim tick, station hum. Tremolo guitar: five-note motif once, last note late. Held end.`

It drops *procedural*, *two-chord vamp*, *reverb* and the exclusions. Run it with
Instrumental on, genre none and Live off. If a take comes back as surf rock or a
full kit, take 2 is the same line with genre *Classic*. If the motif is lost
under the arpeggio, put *motif twice* in place of *motif once* and say so in the
take's entry. A take is a sketch, logged under *Entry format*, and not filed
under `src/audio/` until a trailer uses it.

#### Below the Roof's variation: the first prompt (14 November 2026)

The second variation written as a prompt, after Dermot asked for the next audio
piece. It is next because the thread already has a filed clip
(`src/video/fliade.mp4`), the Told's theme proved the instruments come through in
MyTunes, and it is instrumental. This is idea B of the core theme, kept for this
thread: the figure is stated in full, then again with notes gone, and the shorter
statement is the one that lands. It is a title theme, not the Told's loop. It
draws on that brief's instruments and its small, near hum (*the humming stone*),
and it adds the five-note figure and a held end.

| Field | |
|---|---|
| **Style** | cavern ambient, title theme, warm, low, wet-stone resonance, slow |
| **Mood** | quiet, enigmatic, mysterious, curious, patient |
| **Instruments** | low wooden flute, soft mallets on stone, water drips, a small even hum close by |
| **Production** | the hum small and near, like a device asleep against a chest; five-note figure on the flute, stated once in full, then again shorter with notes gone; one water drip a fraction late after the second statement; damp close reverb, not a cathedral; ends on a held tone |
| **Exclude** | ukulele, cartoon, toy piano, horror cave drone, bat squeaks, choir, synth pad, sub-drop, trailer riser, braam, big drums, vocals |
| **Form** | instrumental, ends on a held tone, the best 12 to 20 seconds cut from a longer take |

**For MyTunes**, 195 characters, under its 200-character cut:

`Quiet, enigmatic, mysterious cavern title theme, slow. Low wooden flute, soft mallets on stone, faint hum. Five-note motif told twice, shorter the second time. Water drip a little late. Held end.`

It drops *warm*, *wet-stone*, *close reverb* and the exclusions. Run it with
Instrumental on, genre none and Live off. If a take comes back with a beat, take
2 is the same line with genre *Classic*. If it comes back sounding like the
Told's loop with no figure in it, put *flute motif* in place of *Five-note motif*
and say so in the take's entry. For his ear only: whether the second statement is
audibly shorter, and whether the drip lands late. A take is a sketch, logged
under *Entry format*, and not filed under `src/audio/` until a trailer uses it.

### The title: three ideas

The lettering is always set by script or composited, never generated, and it is
read for spelling before anything is filed. *Fian Ilchruinne*, with the thread's
name small beneath it, and no tagline. Lettering in one typeface across all
threads; the picture behind it is what varies.

- **A. The title closes (chosen).** No opening titles: the trailer starts
  in the world, and the title cuts in on the last late note, over black or the
  final held shot, for about six seconds. It is the rule for episodes applied to
  film: the enigma arrives, it does not open. It is also the cheapest, and it
  makes the late note do the work of the title.
- **B. Hum, then black.** A few seconds of black with the hum alone, and the
  title on the first statement of the figure, before the trailer proper. It is
  plain and needs no picture, and it costs the first seconds of a short film.
- **C. One held image.** About eight seconds on a single still image from the
  thread, with a very slow drift and the title on the third statement. It is the
  richest, and the one that most needs a good picture, under the same rule as
  any clip: a generated image shows only what no camera can.

Rejected: a title dressed as an Archive filing card. A film is an impression and
never the record, so the title should not look like the record's own stamp.

### Two supplied recordings as candidates, 6 November 2026

Dermot supplied two MyTunes still-over-audio files the same night, and on being
asked what they were for answered *"As candidates"*. The late note stays chosen
unless he says otherwise. These are read from card frames and measured levels. The
audio is not heard, and the files carry no lyric captions.

| | `Ballad-of-the-Stars_7.mp4` | `Star-Rangers_5.mp4` |
|---|---|---|
| Length of the audio | 3:25 | 1:42 |
| Card | *Ballad of the Stars*, *Celtic Techno* | *Star Rangers* |
| Beat, estimated | about 103 a minute, strong | strong; 161 a minute by the measure, which may be double the felt beat |
| Level | mostly even, softer from about 2:10 to 2:40, opening and tail softest | dense and even throughout, softer only in the last seconds |
| What it is | a performance not in the repo: envelope correlation 0.17 against `ballad-of-the-stars.m4a` | by length, card and title the 1:44 muster piece of 20 August, not proved, since the earlier file is not to hand |

**Against the brief.** The shared negative and the tone line hold for a film, and a
dance beat or a dense full-band mix may break *no big cinematic percussion, no EDM
build or drop*. A title that closes needs a quiet 12 to 20 seconds, and only the
Ballad has passages that might give one. Only a listener can say what is in them.

**What each would carry.**

- **The Ballad.** Sung words in an excerpt fall under the lyric rule: the published
  lyrics verbatim, confirmed lines only. Only someone who can hear it can check
  that, so an instrumental passage is the safe cut. It stands beside
  `ballad-of-the-stars.m4a`, never replaces it, because the entry's 1:27 claim
  depends on that recording. Used in a trailer, it would be a theme and would not
  be filed as a Slipwave recording.
- **The muster piece.** It offers no quiet passage by level. Its title is the work's
  former title and the Corps' name, so a theme drawn from it risks reading as the
  *Star Rangers theme* that *Where a track may not be generated at all* refuses.
  Its filing under the 20 August notes is still open.
- **Both.** The cards do not travel. The audio alone would be taken, because the
  badge, the doubled title on the Ballad's card, and the portrait and costume are
  each a reason the picture stays out of the repo.

### What is still unknown

- Whether Director will take a supplied track or lay in supplied lettering. It
  has composited a title card and spelled captions correctly, but it has not
  been given a theme to use.
- Whether a theme can be joined to a film outside Director. No tool for that
  has been set up.
- Whether a variation is better made as a fresh take or as an edit of the core.

---

## Ready prompts — in-universe recordings

These are artifacts, not themes. The brief is not "what would sound good" but
**what would this recording actually sound like**, given who recorded it, on
what, and in what room — the audio form of asking whether a codex source could
have known this and would have written it this way.

**All four are draft-and-stop.** A recording attached to a codex entry is
publication-adjacent in a way a footer flourish is not.

### *Half-Light Causeway* — the Star Rangers Anthem

`src/codex/star-rangers-anthem.md` — lyrics published, **no recording exists.**
The entry says no studio master survives and that the text is reconstructed from
three carried copies. So there are legitimately **two takes**, and the difference
between them is the entry's whole point:

**Take A — the dock recording.** Slipwave as they were: three people, one room.

| Field | |
|---|---|
| **Style** | spacer folk, acoustic, live room recording, slow 3/4 |
| **Mood** | reluctant, intimate, unpolished, quietly hopeful |
| **Instruments** | female lead vocal, one acoustic guitar, sparse hand percussion |
| **Production** | single microphone in a small room, room tone and chair noise audible, low structural hum throughout, slight pitch drift on sustained notes, vocal a shade behind the beat |
| **Exclude** | studio polish, reverb wash, string section, drum kit, backing vocals, autotune, double-tracked vocal |
| **Form** | vocal, lyrics as published, full song |

**Take B — the cadet muster.** The same song years later, sung by people who do
not know who wrote it.

| Field | |
|---|---|
| **Style** | a cappella group singing, field recording, communal |
| **Mood** | ragged, certain, unpolished, collective |
| **Instruments** | twenty untrained voices in unison, one octave |
| **Production** | large hard-walled room, long natural reverb, recorded from inside the group rather than in front of it, chorus louder and surer than the verses |
| **Exclude** | choir arrangement, harmony parts, soloist, instruments, studio reverb, applause |
| **Form** | vocal, unaccompanied, lyrics as published; run with Take A as the audio reference if the tool takes one |

Lyrics verbatim from the entry. The chorus must sit inside a range a room full
of non-singers can hold — that is the in-world reason it spread, and a take
that soars is a take that would not have.

### *Ballad of the Stars*

`src/codex/ballad-of-the-stars.md` — **an audio file already exists**
(`ballad-of-the-stars.m4a`), and the entry's transcriber's note claims a
listener's capture at the 1:27 mark matches the chorus and second verse line for
line.

**So this one is constrained by a published claim about it.** Regenerating it
produces a recording whose confirmed lines land somewhere else, and the entry
becomes false about its own audio. **Prefer not to regenerate.** If a second take
is wanted anyway, the entry's note is part of the work and gets reviewed in the
same pass.

Brief, if that day comes — same session and same three musicians as Take A,
changed only where the register changes:

| Field | |
|---|---|
| **Style** | spacer folk ballad, slow, elegy, live room |
| **Mood** | grieving, tender, restrained, private |
| **Instruments** | female lead vocal, acoustic guitar, one bowed string |
| **Production** | single microphone in a small room, room tone and chair noise audible, low structural hum throughout, slight pitch drift on sustained notes, closer to the microphone and quieter, sung to one person |
| **Exclude** | swell, key change, drums, percussion, choir, orchestration |
| **Form** | vocal, lyrics as published — confirmed lines only, scaffolding verses **not** sung |

The glossary's line for the register: *usually while a ship is overdue*.

### *Baby Universe*

`src/codex/baby-universe-ballad.md` — a video exists; the entry is explicit that
the recording circulates **unattributed, hand to hand**, with no credited
performer.

| Field | |
|---|---|
| **Style** | unaccompanied ballad, amateur capture, hand-to-hand recording |
| **Mood** | plain, aching, unresolved |
| **Instruments** | one voice; at most one quiet instrument |
| **Production** | recorded on whatever was to hand, imperfect intonation, audible room, a breath before the chorus, off-centre and unmixed |
| **Exclude** | production, mixing, reverb, harmony, backing track, studio vocal |
| **Form** | vocal, lyrics as published; **verses and chorus sung differently** |

**The arrangement must not smooth the pronoun shift.** The entry says the song
opens in the third person and slips into the first for the chorus, *"so that the
plea is sung in her voice by people who were never in a position to hear it"* —
and that the shift is the whole ballad. So the chorus is a different act of
singing from the verses: closer, thinner, one voice where the verses might have
had more. A take that performs both alike has removed the song.

### *Protectors of the Fold*

`src/codex/protectors-of-the-fold.md` — lyrics published, **no recording
exists.** Ashgrove's own account of why this one is clean: *"we finally had a
mixing booth instead of a dock common room."*

| Field | |
|---|---|
| **Style** | anthem, close harmony, studio folk-rock, mid-tempo, steady four |
| **Mood** | declarative, confident, institutional, warm |
| **Instruments** | two male voices in close harmony, acoustic guitar, kit percussion, low sustained pad |
| **Production** | properly mic'd and separated, controlled plate reverb, steady tempo, unmistakable downbeat, **tuning true, every note on the beat** |
| **Exclude** | room noise, single-mic capture, hum, detune, hesitancy |
| **Form** | vocal, lyrics as published, full song |

**The house signature is deliberately absent here** — no drift, no late pulse,
the tuning true. Its absence is the arrangement's argument: the glossary already
says this track's diction reads *closer to doctrine than dock-circuit folk*, and
losing the wobble is what that sounds like. Two musicians who have spent decades
playing memorials and musters, recorded properly for the first time, and
something has gone out of it that nobody involved would have named.

### *Hymn of the Thin Places* — added 30 September 2026

`src/codex/hymn-of-the-thin-places.md` — lyrics published, **no recording
exists, and the entry says no single archival master can.** Two things in it
decide the brief. The refrain is *"the one element every recorded variant holds
in common, word for word"*; the verses *"vary slightly by chapter and by
world"*, and the entry prints two — one as sung at the Threshold Station
memorial in 2830, one as sung at Cadet commissionings on Eden. And it is
*deliberately singable by a room that does not share one theology*: no organ,
no chapter's acoustics, nothing that makes it one tradition's. So, like the
anthem, there are legitimately **two takes, and each sings one verse.** A take
that sings both verses as a single song has manufactured the complete version
the entry says does not exist.

**Take A — the Threshold memorial, 2830.** A room of Rangers, not a choir.

| Field | |
|---|---|
| **Style** | unaccompanied congregational singing, memorial, slow, field recording |
| **Mood** | grave, steady, shared, unshowy |
| **Instruments** | one plain voice on the verse, a room of mixed untrained voices on the refrain |
| **Production** | the verse carried by one voice and the refrain taken up by everyone, louder and surer than the verse; a large hard-walled station room, station hum audible in the gap before the refrain; slight drift on held notes; recorded from inside the room |
| **Exclude** | instruments, organ, choir arrangement, harmony parts, plainchant, church acoustics, soloist vibrato, applause, reverb wash |
| **Form** | vocal, the Threshold verse and the refrain as published, nothing else |

**Take B — a Cadet commissioning, Eden.** The Eden verse; a brighter room,
younger voices, more of them, the refrain identical to the note: run with Take A as
the audio reference if the tool takes one.

| Field | |
|---|---|
| **Style** | unaccompanied congregational singing, slow, field recording |
| **Mood** | steady, expectant, plain, collective |
| **Instruments** | one plain voice on the verse, a larger room of younger mixed untrained voices on the refrain |
| **Production** | the verse carried by one voice and the refrain taken up by everyone, quickly, louder and surer than the verse; a bright hall, faint hum in the gap before the refrain; slight drift on held notes; recorded from inside the room |
| **Exclude** | organ, choir arrangement, harmony parts, plainchant, church acoustics, soloist vibrato, instruments, applause, reverb wash, fanfare, drums |
| **Form** | vocal, the Eden verse and the refrain as published, nothing else |

Take B also leaves out anything that makes it a ceremony's music rather than a room's.

The refrain has to sit in a range a room of non-singers can hold, for the same
in-world reason as the anthem's chorus, and here it is doubly the case: *"the
thin place doesn't ask what you believe"* is the line that lets a mixed room
sing at all, and a soaring setting would be a chapter's claim on it. Draft and
stop, as the other recordings.

### *Baby Universe* — Take B, the ferry slip

`src/codex/two-in-the-one-currach.md` adds a second way the ballad travels:
*"A boatman had it at the ferry slip, half under his breath, the way that song
is everywhere carried — not performed, exactly; kept lit."* Winter, a river, a
man who is not singing to anyone. Everything the main brief says about the
pronoun shift stands; here the shift is simpler to hold, because only the
chorus is fully voiced at all.

| Field | |
|---|---|
| **Style** | half-hummed, half-sung, unaccompanied, outdoor field recording, fragment |
| **Mood** | private, absent-minded, tender, cold |
| **Instruments** | one voice half under the breath; river, wind on water, rope, a boat against a slip |
| **Production** | recorded at a distance and not for recording; verses mostly hummed with a word surfacing here and there, the chorus the only part fully voiced and still quiet; dry winter air |
| **Exclude** | performance, band, reverb, harmony, studio vocal, a listener |
| **Form** | vocal fragment, under a minute; every audible word verbatim from the published lyric |

Words that surface are the entry's; a generator that supplies its own where the
humming should be has written a verse, and that is the codex's job, not the
track's.

### *The Verb That Was Left* — *An Briathar a Fágadh*, added 10 November 2026

`src/codex/the-verb-that-was-left.md` — Gráinne Ní Chathail's note to a
going-to-sleep song of one hull's households, in Union Irish. Dermot asked for the
MyTunes prompt the same evening. **No recording exists**: the collection prints the
air in a Union notation the desk has not reproduced, so a take is an impression of
the song as the note describes it, never the air itself. The note decides the
whole brief, in its own words: *one voice sings it; there is no instrument, and
nobody remembers there ever being one; it is sung low and unhurried, and each line
falls at its end; the four lines go through twice, and the second time the last
word, mise, is held until the breath is done.*

**The words are the published four lines, verbatim, sung twice and nothing more.**
A take that adds a verse, a refrain or a vocable chorus has written lyrics, which
is the Codex's job.

**Why the lyrics box is respelled.** Dermot, 10 November 2026: *"MyTunes does accept
a Lyrics prompt but its pronunciations are usual too American and less Irish
sounding"*. So the lyrics box takes the same words spelled the way an English reader
would say them in Connacht Irish. The respelling is a tool input and lives here
only: the Codex entry keeps the Irish, and the dialect rule bars phonetic spelling
in prose. **Checked by ear, 11 November 2026:** Dermot heard take 1 and the Irish came
through as Irish (*"it sounded right to me"*), and he chose to record that as the check
(*"Yes, record it"*). That is enough for a take kept as an impression. If a take is
ever placed on the Codex page as the song's sound, a fluent speaker's check comes
first, because that is a stronger claim. The record gives the Union's Irish no accent,
and this song came through by ear rather than by the rebuilding, so a living sean-nós
sound is the right stand-in for it.

| Field | |
|---|---|
| **Style** | sean-nós suantraí, a cappella, Irish-language lullaby, field recording |
| **Mood** | low, patient, tender, unresolved |
| **Instruments** | one low female voice, unaccompanied |
| **Production** | sung close to one microphone in a small quiet room in the evening; a faint low steady hum in the walls under the voice; slight drift on held notes, never corrected; each line falling at its end; breath audible |
| **Exclude** | instruments, piano, harp, strings, pad, music box, choir, harmony, reverb wash, vibrato, vocal runs, new verses, English words, applause |
| **Form** | vocal, unmetered, about one minute: the four lines sung twice, the last word held the second time until the breath runs out, then silence |

**One-box line for MyTunes' description** (181 characters, under its cut at 200):

> Sean-nós suantraí, a cappella, one low female voice in Irish, slow, unmetered, each line falling at its end, small quiet room, faint low hum in the walls, slight drift on held notes

**Lyrics box** (the four lines twice, respelled):

> KHOO-ee un GHREE-un uh LEE,
> KHOO-ee un TAY-un uh LEE,
> KHOO-ee un LAW HART, uh STORE,
> iss nee YAKH-uh MISH-eh.
>
> KHOO-ee un GHREE-un uh LEE,
> KHOO-ee un TAY-un uh LEE,
> KHOO-ee un LAW HART, uh STORE,
> iss nee YAKH-uh MISH-ehhh.

The words they stand for, as published: *Chuaigh an ghrian a luí, / chuaigh an
t-éan a luí, / chuaigh an lá thart, a stór, / is ní dheachaigh mise.* (*Chuaigh*
"went", *ghrian* "sun", *éan* "bird", *a luí* "to its bed", *lá* "day", *thart*
"by", *a stór* "my dear", *ní dheachaigh* "did not go", *mise* "I".)

**Settings:** vocal; female voice (the setting is sometimes ignored, so the
description says *one low female voice* too); genre none, and *Classic* only if a
take comes back with a beat; Live off.

**Critic's read, 10 November 2026** (`music-critic`): passes the prompt ladder. Two
risks named for the takes: MyTunes' song-shaped default may stretch a one-minute
song to three and invent lines to fill it, which fails on the words; and *lullaby*
alone pulls toward a music box and soft piano, which is why the style leads with
*sean-nós* and *a cappella* and the excludes name them. For his ear only: whether
the Irish sounds Irish, whether it is one voice with nothing under it but the hum,
and whether the last *mise* is held.

- **Tool:** MyTunes (phone app) · **Date:** 10 November 2026 · **Seed:** not shown by the app · **Takes:** 1, kept, not filed (under *Entry format*)

---

## Textures, not themes

Material for a scene, a trailer, or a future page — never a footer player, and
never filed as "the music of species X".

### The Undersong

`src/lore/undersong-belt.md` establishes structured, sustained harmonic bands
carried through rock, felt through the body, with excavation and tuning as one
act.

| Field | |
|---|---|
| **Style** | drone, sub-bass, stone resonance, unmetered, no melody |
| **Mood** | immense, patient, unhurried, alien |
| **Instruments** | bowed metal, struck stone resonance, sustained low partials |
| **Production** | several harmonic centres coexisting without conflict, partials layered as if added in different centuries, felt more than heard |
| **Exclude** | melody, beat, rhythm, synth pad, whale song, choir, percussion hits, plucked strings |
| **Form** | instrumental, 150 s, no development |

Two limits. It is **architecture rather than performance** — a burrow-cluster is
judged on how it sounds the way another people judge a façade, which is not the
same as a piece of music. And a human-audible rendering is **a translation and
should be labelled as one** if it is ever published, on the same footing as any
other adaptation in the record: attributed, dated, and never mistaken for the
thing itself.

### An Ovruhn recital — added 30 September 2026

`src/lore/ovruhn.md` and `src/codex/the-two-songs-of-the-loud-people.md`
establish chorus-keeping: the keeper speaks, the chorus confirms, corrects or
withholds, and *the account is whatever survives the room*; beneath it the
under-song, infrasound that *carries for tens of kilometres* through dense air
and bedrock; and, once in the keeping, a passage the chorus confirms *in full
unison*, which the translation desk notes is rare.

| Field | |
|---|---|
| **Style** | call and confirm, click rhythm, low chorus swell, infrasonic drone brought into hearing, unmetered, no melody |
| **Mood** | patient, fair, immense, faintly amused |
| **Instruments** | layered clicks (wood, tongue, stone), many low bowed voices moving as one, a felt sub tone |
| **Production** | one line of clicks answered by a broad low swell, the swell sometimes withheld; one passage where every low voice moves together; dense humid air, long low reverb as if through rock |
| **Exclude** | whale song, dolphin, throat singing, human voices with words, spoken words, plucked strings, melody, horror drone, sub-drop |
| **Form** | instrumental, 150 s, no development |

Three limits. **No words** — the keeper's speech exists only as the desk's
rendering (see *Where a track may not be generated*). The under-song is *felt
rather than heard by most species*, so an audible rendering is a translation
and is labelled as one, exactly as the Undersong above. And the shared negative's
*no whale song* is the prohibition most at risk here, because it is the
generator's first guess for a large body's low voice; re-roll rather than accept
it.

### The Sentinel signal — scene material, never the page's

`src/lore/planets/sentinel.md` and S03E01C01 give the record's whole
description: *a pulse under the pulse, a phrase that returned eleven seconds
later almost the same and not quite, the way a chorus comes back changed by
whatever happened in the verse*; consistent periodicity; drift to catalogue.
And the page's point is what it does **not** say: *musical structure is not
proof of intelligence behind it*, origin, intent and mechanism undetermined.

| Field | |
|---|---|
| **Style** | electromagnetic signal rendered as audio, pulse train, a phrase that returns changed, sparse, dry |
| **Mood** | patient, unfiled, quietly wrong |
| **Instruments** | one filtered pulse, a second slower pulse beneath it, nothing recognisable as an instrument or a voice |
| **Production** | an eleven-second cycle, each return almost the same and not quite; a slow drift across the whole; dry, direct to a headset, telemetry noise floor audible |
| **Exclude** | melody, synth lead, voice, morse code, sci-fi bleeps, alarm, theremin, whale song |
| **Form** | instrumental, 60–90 s; may loop, since the return is the point |

**Limit: this may score a scene or a reading of the Season 3 chapter and may
never be embedded on the Sentinel page or in the chapter as *the signal*.** A
track in the record would settle in a footer what the Survey Corps has not
settled in three centuries, and anything that sounds like an instrument or a
voice answers a question the page keeps open. The eleven seconds are the
entry's; keep them.

### The Carillon — the hum that names itself carefully

`src/lore/planets/corryn.md`: the gas giant's rings *emit a constant
low-frequency hum … that periodically resolves into complex recurring
patterns*; the name is chosen because *a carillon is a set of tuned bells, and
naming one says the sound has a pattern without claiming anyone is ringing it*;
and its apparent sentience *is a live question and stays one*.

| Field | |
|---|---|
| **Style** | planetary drone, low-frequency hum, slow recurring pattern, vast, unmetered |
| **Mood** | immense, indifferent, patterned, unresolved |
| **Instruments** | a low hum whose partials briefly align into a pattern and slide apart |
| **Production** | long stretches of plain hum, then a pattern resolving out of it and dissolving back; the pattern recurs but never in the same place; slow electrical crackle at the edges |
| **Exclude** | bells, chimes, carillon, church bells, voice, melody, sub-drop as threat, anything that addresses the listener |
| **Form** | instrumental, 150 s |

**Bells are the name, not the sound** — a track with a bell in it has taken the
metaphor literally and made the claim the page refuses. And the page's last
section, the *sense of address* some people in the system report, belongs to
those people and *says nothing about the Carillon*: nothing in this track
turns toward the listener. That is the horror line in its Corryn form.

### Slipwave's cross-species arrangements — not yet

The cross-species translation methodology and the "Drift Engine" adaptive rig
appear in `intake-2026-07-26.md`, **not in published canon** — and parts of that
same block were explicitly overruled (the band never reformed). `slipwave.md`
says nothing about either. Treat it as unwritten: a prompt built on it would
render a fact the corpus has not established.

---

## Supplied reference tracks — 20 August 2026

Two finished tracks were supplied the day this file was written, both as
MyTunes-style mp4s (a still image held over the audio, 854×480). **Neither is in
the repo**, neither is attached to a page, and neither has a prompt recorded —
which is the exact condition this file exists to end, now arriving in real time
rather than in hindsight.

**What is needed to close them out:** the tool, the style prompt as typed, and
whether any lyric was supplied. Paste them into the entry stubs below and they
are done. Structures were measured from waveform and spectrogram renders, not
heard, so treat the section boundaries as approximate and the character notes as
inference.

### `InnerSpaceBloom_3.mp4`

3:25, beatless, slow-moving, low-centred, with a bright sustained upper band and
no strong transients anywhere — ambient rather than scored. Fullest and brightest
from about 2:00, with the peak around 2:30–2:50 and a low tail from 3:10. Card
art is a still with **garbled lettering** on it; see `video-prompts.md`.

- **Tool:** _needed_
- **Prompt:** _needed_
- **Lyrics:** none audible in the spectrogram; confirm

### `RotationalHum_1.mp4`

4:02, and structurally the more dramatic of the two — which makes it the first
supplied piece answering the *dramatic* direction rather than predating it.
Sectioned, with clean boundaries around 0:48, 1:36, 2:08 and 2:32; a **pulse
enters at about 0:48** where the first half had none; a thinning around
2:08–2:24; then the fullest, brightest and most sustained passage from 2:32 to
about 3:52, and a short tail. It arrives somewhere, which is precisely what the
theme loops are told not to do and what a piece someone sat down for is allowed
to.

**Its title is this file's own signature term** — the low sustained rotational
hum of anchor 1 — so the brief has already produced a track named after itself.
Worth noting for the record, and worth asking whether the piece is *about* that
or merely named for it; the answer decides whether it has a home in the record or
is a good ambient track that happens to share a word.

- **Tool:** _needed_
- **Prompt:** _needed_
- **Lyrics:** none audible; confirm

### Three more, supplied the same day

Same MyTunes still-over-audio wrapper, 854×480, and the filenames do not line up
with the cards, so identify them by content rather than by name:

| File | Length | Card says | What it is |
|---|---|---|---|
| `BalladoftheStars_3.mp4` | 4:02 | *we are Slipwave — Ballad of the Stars* | **The recording already in the repo**, re-wrapped |
| `StarRangers_3.mp4` (3:49) | 3:49 | *Star Rangers — The Ballad of the Stars* | A different, previously unseen recording |
| `StarRangers_3.mp4` (1:44) | 1:44 | *Star Rangers* | A third, unrelated recording |

**The first one is not new audio.** Its soundtrack is bit-for-bit the same
performance as `src/audio/ballad-of-the-stars.m4a` — 240 s both, envelope
correlation 1.000 at zero lag. That is the good outcome: the codex entry's claim
that a listener's capture at the 1:27 mark matches the chorus and second verse
line for line **stays true**, because nothing about the performance changed. All
this file adds is a card and 8 MB.

The other two share no material with it or with each other (correlations at
noise level), so **there are two genuinely new recordings here**. Both were
identified on 20 August 2026 — see below; neither had a home before that.

**Neither has been added to `src/audio/`.** All of these would need a decision
first — which page carries it, under what attribution, and whether it is site
furniture or an in-universe recording, which is the difference between a theme
and a codex entry with a named author.

### The two new recordings, identified 20 August 2026

**Dermot: the 3:49 is Slipwave; the 1:44 is a muster piece.** That settles their
cards (`prompt-sheet.md` 1.2 and 1.3) and opens two canon questions, neither of
which a card can answer.

**The 3:49 makes a fourth Slipwave recording**, and the catalogue is already
described. `slipwave.md`: *"Slipwave never recorded a studio album. Their
surviving catalogue is a handful of habitat-circuit recordings, most of them
incomplete or badly mic'd. Two are not."* The two are the anthem and the Ballad;
*Protectors of the Fold* is a later third, cut decades on by Ashgrove and
Calloway without Shepherd. So a fourth has a natural slot — **one of the handful,
surfacing later** — and filing it that way costs the corpus nothing and gains it
a nice fact: the catalogue was never claimed to be closed.

What it cannot be, without a rewrite: a polished studio track from the band's own
era. That is the one thing the glossary rules out twice over.

**The 1:44 needs its filing to match its sound.** The audio is a dense full-band
mix with drums, bright to the codec ceiling — **a recording of a muster piece,
not a recording made at a muster.** The distinction is load-bearing here, because
the anthem's spread is explained by the opposite property: it travelled as
something a room of non-singers could hold, unaccompanied. A produced muster
piece is perfectly plausible beside it — musters are not confined to one song —
but it is a different kind of object and the entry should say which.

**And a limit worth stating plainly: I cannot transcribe either.** I have never
heard a second of this audio; every reading in this file comes from waveforms,
spectrograms and card frames. A lyric is canon-for-its-author, so if either
recording is to become a codex entry, **the words have to be supplied**. Deriving
them from a spectrogram would be inventing them, which is the exact failure this
file exists to prevent.

### The cards contradict Slipwave, and that is the part worth catching

The three band cards are handsome and none of them shows the band the corpus
describes. Flagging rather than fixing, since a recording's cover is his call:

- **The lineup is wrong on all three.** Slipwave is **three people — Shepherd on
  vocals, Perrin Ashgrove on percussion, Marlow Calloway on strings**, two of
  whom are men who later enlist and carry the musician specialization. The cards
  show a three-woman group in stage leather, a solo singer in a green metallic
  bodysuit fronting a backing band, and a five-piece with electric guitars and a
  drum kit.
- **The register is wrong.** `slipwave.md` is emphatic that this band played
  *dock-adjacent common rooms*, never recorded a studio album, and that its
  surviving catalogue is *"most of them incomplete or badly mic'd"*. The anthem
  entry says no studio master survives. Arena lighting and a crowd assert the
  opposite of the thing that makes the band's story work — the anthem spread
  because it was small and carried, not because anyone promoted it.
- **The singer is not Shepherd.** Her portrait and `image_alt` establish red hair
  and blue-green eyes; none of the three cards matches. A new depiction of an
  established character is draft-and-stop ground in any case.
- **The lettering broke again** — the Slipwave card reads *"She left us to become
  aa' Star Rrarles"*. The claim underneath it is roughly canon-true; the spelling
  is not.
- **They would break the codex cover set.** All four Slipwave-adjacent entries
  currently carry designed cards — gold serif title on a dark starfield with a
  trailing star — and each `image_alt` describes exactly that. Swapping in
  photographic band art is a convention change across the whole set plus four
  alt-text rewrites, not a per-entry choice.

A canon-correct card brief is in
[`video-prompts.md`](video-prompts.md#card-art-for-a-recording).

### Two more, and one of them touches a character

- **`HoldMeTillDawn_2.mp4`** — 3:28, a singer with a band on a blue-lit stage,
  title spelled correctly, no canon connection I can find. **But the phrase
  echoes something published**: *Baby Universe*'s chorus opens *"Hold me up, hold
  me close"*. If the two are related that is a decision worth making explicitly
  — a second song in the same voice, or a variant of the same one, changes what
  `baby-universe-ballad.md` is the record of. If they are unrelated, the near-echo
  in the title is worth avoiding for exactly that reason.
- **`AoifeofStars_3.mp4`** — 2:59, and **the closest of all the supplied cards to
  the house target**: a red-haired woman under a night sky, natural light, no
  stage, no crowd, nothing glowing. Enigmatic without straining. If any of these
  cards is the model for the rest, it is this one.

  **It is also a character depiction, and that is draft-and-stop ground.**
  `src/characters/saint-aoife.md` currently has **no portrait at all** — no
  `image:` field and no file — so this card would be the first depiction of a
  canon character, which needs Dermot rather than a merge. Two things to weigh
  first: `images.md` already carries a prepared brief for her, framed
  deliberately as *looking down at the water with no halo and no glow, because
  the page is her refusal to claim*, and this card instead has her facing the
  viewer. Both readings are defensible; they are not the same reading. And the
  song title asserts an association between Aoife and the stars that her page
  handles very carefully — she is *"never fully certain what she had seen"* —
  so a devotional title is a claim the entry itself declines to make.

### `AshOnTheDoor_3.mp4` — the lettering failure at its worst

2:44, a singer on a dark stage. The card has **lyric text burned into the
frame**, and it is the worst instance yet: *"Letting go false friends who seemed
nice seemed nice & ecke felt superical"* — a line repeated mid-phrase, a word
that is not a word, and the title caption overlapping it. Nothing about this is
fixable by re-rolling the picture; **lyric captions have to be composited or
left off**, which is the same rule the other cards keep breaking more quietly.

**On where the song might belong**, if anywhere: *letting go of false friends who
seemed kind* is not Fian Ilchruinne material on its face — it is contemporary and
personal in register — but it is precisely what `life-lessons.md` exists to
handle, under its own rule: **generalise, then fictionalise.** *"The structure
enters the work, the circumstances don't."* A song naming the experience plainly
is the un-generalised form, which is fine for a song and is the reason it would
not go straight into the record as it stands.

### `PaperGalaxies_5.mp4` — the one that already has a home

2:35, same wrapper. Its card is a singer before a large swirling painted galaxy
with a band behind her — **and the corpus has already written about this exact
artifact.** `src/codex/paper-galaxies-audit-dialogue.md` describes the recovered
fragment as *"a single held frame, a singer before a painted, swirling field of
light standing in for a galaxy. Audio: one performance, repeating"*, and audits
whether it earns novelty credit.

So this is the one supplied file whose provenance question is already answered
in-world, and the only one with a page waiting for it. Two things follow:

- **The entry embeds no player.** If this recording *is* the audited fragment,
  the entry can carry it the way `ballad-of-the-stars.md` carries its audio — and
  the degraded-transmission framing makes a lossy 854×480 artifact an asset
  rather than a defect for once. That is a content change to a live page, so it
  is a proposal.
- **The audit's own terms then apply to it**, which is the joke and the risk
  together: Sen's finding is about whether a thing that *resembles* novelty earns
  the credit. Attaching the artifact to its own audit is very good; nobody should
  do it without reading what the audit concludes.

---

## Two Slipwave recordings with pictures — 7 October 2026

Dermot supplied two finished pieces as *two codex music videos from Slipwave
band*: *Odonata: Raise Your Banners* (3:32) and *Borrow the Angle* (3:52),
1280×720 at 24 fps with genuinely moving pictures, filed the same day as
`src/video/odonata-raise-your-banners.mp4` and `src/video/borrow-the-angle.mp4`
with codex entries of the same slugs. The video side is read in
[`video-prompts.md`](video-prompts.md); this is the audio side.

- **Tool:** _needed_ · **Prompt:** _needed_ · **Lyrics:** the full sheets are
  _needed_. Each videocast carries one lyric line per section as a composited
  caption — nine and ten lines — and those are the only confirmed text; both
  entries print them in order as captions and transcribe nothing else.
- **Not heard.** The structural reading and every statement about the music
  in the entries comes from the captions and the pictures, not the audio.
- **Catalogue.** `slipwave.md` gains a paragraph: two more surfaced later,
  complete, with pictures laid over them; the session is not stated and the
  Archive has not established it. That keeps every existing sentence true
  (*most incomplete or badly mic'd, two are not*; *never recorded a studio
  album*) and leaves the lineup his. The 20 August 3:49, identified as
  Slipwave then, is still unfiled and is not either of these.

## Regeneration worklist

Every supplied file in one table, with what would need to change. **Audio and
card are separate verdicts** — most of these have a keepable track inside a
container that needs redoing, and re-rolling the music because the picture is
wrong would be the expensive mistake.

| File | Audio | Card | What to change |
|---|---|---|---|
| `RotationalHum_1` | **adopted** | **keep** | Done — `src/audio/rotational-hum.m4a`, registered as the Church Space theme ("Ambient drone"). Card needs nothing: matte object, real light, no lettering. |
| `PaperGalaxies_5` | **adopted** | **keep** | Done — audio extracted to `src/audio/paper-galaxies.m4a` and attached to its own audit entry. The card stays as the entry's designed cover. |
| `AoifeofStars_3` | keep | hold | Not a fix — a decision. First depiction of a character with no portrait, so it waits for you. |
| `InnerSpaceBloom_3` | keep | **regenerate** | Garbled lettering; and *"Live Concert Recording"* claims a provenance the file does not have. |
| `BalladoftheStars_3` | keep (it is the repo recording) | **regenerate** | Garbled caption, and the band is not Slipwave. Use the card brief in `video-prompts.md`. |
| `StarRangers_3` (3:49) | keep | **regenerate** | Girl group in stage leather; wrong lineup, wrong register. Also needs a home — it is captioned as the Ballad and is not the Ballad. |
| `StarRangers_3` (1:44) | keep | **regenerate** | Same, plus it is captioned only *Star Rangers*, so what it is has not been said. |
| `HoldMeTillDawn_2` | keep | **regenerate** | Contemporary stage look, off-house. Title decision first — see above. |
| `AshOnTheDoor_3` | keep | **regenerate** | Burned-in lyric text, garbled and repeated, overlapping the title. Composite lyric captions or leave them off. |
| `grok_video_2026-06-05` | — | **regenerate if it is meant to be canon** | Text in frame, arena register, and full gravity, which loses the only part of shuffle dance worth establishing. |

**Seven of the ten need only a new card.** That is the cheap end of the work, and
the two cards that already pass (`RotationalHum_1`, `PaperGalaxies_5`) show the
house style is reachable with the tool you are already using — a matte object or
a described artifact, real light, and no words inside the picture.

---

## Entry format

Same shape as `image-prompts.md`, one per generated file:

    ### <filename>
    - **Type:** generation | edit
    - **Tool:** name and version
    - **Date:**
    - **Used by:** edition id / codex entry path
    - **Prompt:** style prompt, verbatim
    - **Lyrics:** codex entry the words came from, or "instrumental"
    - **Negative:**
    - **Notes:** seed, length, take count, loop point, loudness, format

The five files in `src/audio/` predate this file and are recorded above as
absences.

### The late note, take 1 — *The Fifth Note Held* (kept, not filed)
- **Type:** generation
- **Tool:** MyTunes (MWM), phone app
- **Date:** 6 November 2026
- **Used by:** nothing yet; candidate for the trailers' core theme (*The late note*)
- **Prompt:** `Beautiful, enigmatic, haunting, dramatic, mysterious Celtic title theme, dorian, slow. Low whistle, harp, low strings, station hum, detune. Five-note motif three times, last note late. Held end.`
- **Settings:** Instrumental on, genre none, Live off. MyTunes gave it the title.
- **Lyrics:** instrumental
- **Negative:** none (MyTunes has no exclude box)
- **Notes:** 3:33, ending in a 4 s fade. AAC 48 kHz stereo inside a 640×360 mp4
  with the MyTunes badge. −13.3 LUFS integrated, true peak −0.3 dBFS, LRA 8.2 LU.
  Measured, not heard: a steady pulse of about 113–117 a minute throughout; a
  quiet opening to about 0:10; a full middle from about 0:35 to 2:58 with sharp
  high-frequency transients, likely percussion; a strong partial near 75 Hz from
  about 0:15; a dip of 10–14 dB at 3:00–3:18, the likeliest title passage; a low
  close fading from about 3:27. Whether a five-note figure is present, and whether
  its last note lands late, could not be measured under the pulse. Dermot's
  verdict: *"Sounds fine"*. The card (a stone arch in mist, a harp-like shape in
  moss, drifting smoke) does not travel. Not in `src/audio/`: no page or film uses
  it yet, and the delivery-path question under *Tools* stands.

### The late note, take 2 — *The Whistle's Last Note* (kept, not filed)
- **Type:** generation
- **Tool:** MyTunes (MWM), phone app
- **Date:** 6 November 2026
- **Used by:** nothing yet; candidate for the trailers' core theme (*The late note*)
- **Prompt:** as take 1, verbatim
- **Settings:** Instrumental on, genre *Classic*, Live off. MyTunes gave it the title.
- **Lyrics:** instrumental
- **Negative:** none
- **Notes:** 3:25. Same wrapper as take 1. −14.3 LUFS integrated, true peak
  −0.8 dBFS, LRA 5.0 LU, so more even than take 1. Measured, not heard: a steady pulse of about
  129 a minute; an opening with no low end for about 10 s, strongest notes G, F, D
  and B♭; lighter high-frequency transients than take 1, peaking around 2:25–2:35;
  and, unlike take 1, **a held ending**: the bass steps down through A♭ and B♭ to a
  low C (65 Hz, with its octaves and fifth) held from about 3:15 and dying away by
  3:25. The pitches read nearer C minor than the dorian asked for, unconfirmed.
  The held C is the likeliest place for the closing title. *Classic* did not
  remove the pulse. Dermot's verdict: *"Keep it"*; asked whether the held C is
  the title ending, *"Yes it is"*. So the closing title cuts in on the held C,
  about 3:15 to 3:25, when a trailer uses this take. Card: a stone arch on blue misty
  moorland; does not travel. Not in `src/audio/`, for the same reason as take 1.

### The Told's theme, take 1 — *Stone and Flute* (kept as the reference, not filed)
- **Type:** generation, then a loop cut in a cloud session
- **Tool:** MyTunes (MWM), phone app; the loop cut with ffmpeg and numpy
- **Date:** 6 November 2026
- **Used by:** nothing; the reference for the Told's *Cavern ambient* remake
- **Prompt:** the 193-character line under *The Told*, verbatim
- **Settings:** Instrumental on, genre none, Live off. MyTunes gave it the title.
- **Lyrics:** instrumental
- **Negative:** none
- **Notes:** 2:54. Same wrapper as the late note's takes. −15.0 LUFS integrated,
  true peak −0.5 dBFS, LRA 7.2 LU. Measured, not heard: no sharp high-frequency
  transients (about a tenth of the late note's take 1), a low spectral centroid
  throughout, a loose pulse near 63 a minute, a partial near 54 Hz from about
  0:15, quieter passages at 0:05, 1:35–1:50 and 2:10–2:20, fading from about
  2:45. **Loop chosen by Dermot: 60 s**, cut from 85.3 s to 146.9 s of the take,
  the pair of points 60–95 s apart whose 2 s spectra matched best, with a 2 s
  equal-power crossfade of the tail into the head; 59.6 s long, −15.7 LUFS before
  any turning down. A second loop, 73.6–150.6 s (75 s), was offered and not
  chosen. Dermot's verdict: *"Keep it, 60 s loop, B"*. Card: a wooden flute across
  a stone bowl, a water drop hanging above; does not travel.

### Orbital Five-O's variation, take 1 — *Unresolved Arpeggio* (kept, not filed)
- **Type:** generation
- **Tool:** MyTunes (MWM), phone app
- **Date:** 9 November 2026
- **Used by:** nothing yet; candidate for the Orbital Five-O and Young Star Rangers trailers (*Orbital Five-O's variation*)
- **Prompt:** the 198-character line under *Orbital Five-O's variation*, verbatim
- **Settings:** Instrumental on, genre none, Live off, as the entry says to run it. MyTunes gave it the title.
- **Lyrics:** instrumental
- **Negative:** none
- **Notes:** 3:13. Same wrapper as the late note's takes, 640×360, AAC 48 kHz
  stereo. −13.6 LUFS integrated, true peak −0.8 dBFS, LRA 5.9 LU. Measured, not
  heard: a steady pulse of about 70 a minute from 0:30 to the end (or 140, double
  time), with the opening 30 s reading near 144. The level climbs from a quiet
  opening (about −22 dB at 0:00) to its fullest at 2:15–2:45. The spectral
  centroid rises to its brightest at 1:30–2:30 and falls after. Pitches read
  nearest C minor (C, E♭, G, F, D, B♭ strongest), unconfirmed. There is a dip of
  about 4 dB at 2:45–2:55 on a sustained G, the likeliest title passage. Then the
  bass steps G, F, C, and a low C (65 Hz) is held at about 2:58–3:02. Over it a
  B, then an E♭ above a C sound as the take fades, and it is gone by about 3:11.
  The B is a leading tone left unanswered over the C. Whether a five-note figure
  is present, played once on guitar, and whether its last note lands late could
  not be measured under the arpeggio. Card: a film reel throwing a beam, in
  cyanotype blue; it does not travel. Dermot's verdict, 9 November 2026: *"A"*,
  keep it with the closing title on the held low C, so the title cuts in at about
  2:58–3:02 when a Five-O or Young Star Rangers trailer uses this take. Not in
  `src/audio/`: no trailer uses it yet.

### *The Verb That Was Left*, take 1 (kept, not filed)
- **Type:** generation
- **Tool:** MyTunes (MWM), phone app
- **Date:** 10 November 2026
- **Used by:** nothing yet; an impression of the song in `src/codex/the-verb-that-was-left.md`, which holds no recording
- **Prompt:** the 181-character one-box line under *The Verb That Was Left*, verbatim
- **Settings:** vocal, female voice, genre none, Live off, as the entry says. MyTunes kept the song's own title.
- **Lyrics:** the entry's respelled lyrics box, standing for the four published lines twice
- **Negative:** none (MyTunes has no exclude box)
- **Notes:** 1:00, the length the Form asks for. AAC 48 kHz stereo inside a 640×360
  mp4 with the MyTunes badge. −14.5 LUFS integrated, true peak −0.6 dBFS, LRA
  12.4 LU. Measured, not heard: a quiet opening (about −20 to −25 dB) with almost
  nothing below 80 Hz; a swell from about 0:15 to 0:40, the loudest passage (about
  −10 to −12 dB), with 7–18% of the energy below 80 Hz, under the range of a
  female voice, so either the asked-for hum sounding stronger than *faint* or
  something under the voice the prompt did not ask for; then a fall back to the
  opening's level and a fade to nothing by the end, which matches the held last
  word. Card: a creased, stained paper note on a wooden floor in window light,
  with the title lettered on it; it does not travel. Dermot's verdict, 10 November
  2026: *"It sounds fine to me"*. Not in `src/audio/`: no page uses it. The
  Irish was checked by his ear on 11 November 2026 (the prompt entry above); a
  fluent speaker's check comes first if a take is ever put on the Codex page.

### told-theme.m4a
- **Type:** generation, then a loop edit
- **Tool:** Stable Audio 3.0 (`stable-audio-3`) through the Stability API; the loop cut with NumPy, levelled and encoded with ffmpeg
- **Date:** 6 November 2026
- **Used by:** the-told edition, *Cavern ambient*
- **Prompt:** `Cavern ambient, warm, low, wet-stone resonance, slow, gentle, curious. Warm, curious, safe, patient, a little funny. Soft mallets on stone, low wooden flute, a small even hum close by. The hum near and small, like a device asleep against a chest. Water drips near 60 a minute, each landing a fraction behind where the ear expects it. A short figure told twice, shorter the second time. A small uncorrected detune on the flute, a few cents, never fixed. Damp close reverb in a low stone room, air and noise floor audible. Instrumental, beatless, seamless loop.`
- **Lyrics:** instrumental
- **Negative:** none (the API has no exclude field)
- **Notes:** take C of three, seed 3343281250, requested at 150 s. Takes A and B
  (seeds 2040352193 and 1810373096) were not chosen. Loop cut from 34.2 s of the
  take, 90.2 s long, the pair of points 85–100 s apart whose 2 s spectra matched
  best (similarity 0.998), with a 3 s equal-power crossfade of the tail into the
  head. A 105 s loop from 35.0 s was offered and not chosen. −18.0 LUFS integrated,
  true peak −8.1 dB, AAC 128 kb/s, 1.5 MB. Loudness range about 13 LU, against
  *Stone and Flute*'s 7.2 for the whole take. Measured, not heard.
  Dermot's verdict: *"Take C"*, then *"90-second loop"*. Stability's terms say a
  generated output is not to be presented as human-made, so this entry is the
  record that it is generated.

---

## Practical notes

- **Location and wiring.** Audio lives in `src/audio/`, passed through by
  `.eleventy.js` to `/audio/`. A theme track is named in `lib/editions.js` as
  `themeAudio: { label, file }` and rendered by `base.njk` with `controls`,
  `loop` and `preload="none"`. `validateEditions()` throws if the named file is
  not in `src/audio/`, so a typo fails the build rather than shipping a dead
  player — the label is **not** checked against anything, which is why the
  briefs above are keyed to it.
- **`themeAudio` is replaced wholesale, never merged.** An edition override
  supplies both label and file or neither; a new track under an old label is
  exactly the half-overridden state that comment exists to prevent.
- **Nothing checks audio the way `validate-content.js` checks images.** There is
  no unreferenced-file check, no duplicate-bytes check and no stale-slug check
  for `src/audio/` or `src/video/`. An orphaned track sits in the repo
  indefinitely, and two byte-identical tracks under different names would pass
  every gate. Until that changes, **check by hand** when adding or replacing
  audio: grep `lib/editions.js` and `src/` for the filename before deleting
  anything, and after adding, confirm the file is actually named somewhere.
- **Format.** The four themes are WAV, 4–8 MB each. That is heavy for a
  decorative footer element even behind `preload="none"`, and the one file added
  later — the ballad — is m4a. **New audio should be m4a or mp3**, and
  re-encoding the four existing WAVs is a real cleanup with no content risk,
  though it is a live-domain-facing change and so Dermot's call. Logged in Open
  questions.
- **In-body players are hand-written HTML** (see `ballad-of-the-stars.md`), with
  a download link inside the element as the fallback. Copy that block rather
  than inventing a new one; `check-internal-links.js` reads those paths and will
  catch a filename that does not exist.

---

## Open questions

Mirrored into [`open-questions.md`](open-questions.md).

1. **Do the four existing themes get regenerated?** Their prompts are gone, so
   any regeneration is a new track rather than a recovery — a change to four
   live domains' front-of-house, not maintenance.
2. ~~**Does Church Space get its own theme?**~~ Ruled 20 August 2026: yes,
   *Rotational Hum*, registered as "Ambient drone" — see the edition's entry
   above.
3. **WAV → m4a/mp3 for the four themes.** Mechanical, saves ~20 MB of repo and
   bandwidth, touches live domains.
4. **Recordings for the two unrecorded anthems.** *Half-Light Causeway* and
   *Protectors of the Fold* both have published lyrics and no audio. Briefs are
   ready above; generating either is a draft-and-stop proposal.
5. **Should audio get the bookkeeping images already have?** A duplicate and
   unreferenced check over `src/audio/` and `src/video/` in
   `validate-content.js` is a small script change and would close a gap that is
   currently covered by nothing at all.
6. ~~**The Told's theme label**~~ Ruled 30 September 2026: *Cavern ambient*,
   registered with the file when the track exists. Filed 6 November 2026
   as `told-theme.m4a`.
7. ~~**Does Young Star Rangers get a sibling track?**~~ Ruled 30 September
   2026: keep sharing.
8. **A recording of *Hymn of the Thin Places*** (30 September 2026). Two takes
   briefed, one verse each; draft-and-stop like the anthems.
