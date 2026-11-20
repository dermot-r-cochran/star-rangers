# Continuity seams — the audit, 20 November 2026

Open questions this file raises are indexed in `open-questions.md`.

## What was asked

**His words, verbatim, 19 November 2026.** *"Add additional scenes to each chapter as needed for continuity or to handle transitions between episodes."* The reading of that direction is in `intake-2026-11-19.md`, *Extra scenes for continuity and episode transitions*: first an audit (Opus), then drafting (Fable), one season per PR.

**20 November 2026, verbatim.** *"Start the audit"*.

This note is the audit. It drafts no prose and changes nothing under `src/`. Step 2, the scenes, is Fable's.

## Method

- **What was read.** All 124 published chapters, `s00e01c01` to `s14e02c03`, each in full, in story order (season, episode, chapter), together with every season and episode index page. Eight Opus read-only passes each took one thread or part of one: Founding Era, Church Space, Young Star Rangers and the Infinite Castle; Season 1 Episode 0; Season 1 Episodes 1 to 3; Season 3; Seasons 5 to 7; Undercover Pets and Orbital Five-O; Below the Roof Seasons 11 and 12; Season 14. Each pass gave a verdict on every adjacent pair. Opus then checked every candidate against the chapters, the character pages and the story bible before it was listed here.
- **Which seams were judged.** Every chapter-to-chapter seam inside an episode. Every episode end against the next episode's start. The season-to-season seam inside each thread: S01 to S03, S03 to S05, S05 to S06, S06 to S07, S04 to S10, S11 to S12 and S12 to S14.
- **The bar.** A seam is listed only where a reader loses the thread:
  - a jump in place, time or who is present that nothing on the page bridges, and that the later chapter leans on;
  - a thread picked up without a handover;
  - an episode that opens cold where the last one in its thread left something hanging.
- **What was not counted as a seam.**
  - A time-skip stated plainly.
  - Something told by report that reads fine.
  - An episode opening somewhere new: episodes open in varied ways and each reads as a self-contained short story.
  - A switch of strand or thread.
  - A deliberate gap. No bridge below explains a mystery the record keeps shut (`narrative-gaps-checklist.md`, `open-questions.md`).
- **Not reopened.** The candidates weighed and rejected on 19 November (`intake-2026-11-19.md`, *Candidates considered and rejected*) were not reopened, and none of the passes found a new reason to. S01E03C03 to C04 is already bridged.
- **Locks.** `lib/locked-pages.json` lists no page, so no chapter is locked and every bridge below may sit on either side of its seam.

## The worklist

One line per seam: the id; the chapters either side; what is missing; the smallest scene that would carry it (whose POV, where, what happens); and where it sits.

### Season 0 (Founding Era)

- **S00-1** `s00e02c03` → `s00e03c01`, the Episode 2 to 3 boundary.
  - **Missing:** Voss is the casualty office's *junior lieutenant fresh off training* in 2715 (S00E02C01) and returns in 2723 as *Commodore Voss (Solar System Defence Command)*. Nothing in the chapter ties the commodore to the lieutenant, and nothing carries the eight years between. A reader of the chapters alone meets a new man; only `src/characters/rutger-voss.md` joins the two.
  - **Scene:** Voss's POV (already in S00E03C01's `povs:`), on the morning of signing day, on his way to the drafting session. He passes the old Casualty Correspondence Office, or touches the record he kept there, and the posts between the desk and the table are stated as plain fact.
  - **Sits:** a new first scene of `s00e03c01`.
  - **Guard:** it must not touch whether Governor Petra Voss is related to him, which the record leaves alone.

### Season 1, Season 3 and Season 5 (Tissadelle Shepherd's Arc, first part)

No seam needs a scene. Two related points are listed under *Considered, not seams* below: S01E02C05 → S01E03C01 and the Episode 0 to Episode 1 boundary.

### Season 2 (Undercover Pets)

- **S02-1** `s02e02c01` → `s02e03c01`, the Episode 2 to 3 boundary.
  - **Missing:** Episode 3 leans on Muffin's history at Eden's galley door and on Thrum, and the season has set up neither:
    - *Her training log already had a Muffin section* (S02E03C02);
    - *Like Thrum, she wrote, then crossed it out* (S02E03C02);
    - *Class III does not rest* (S02E03C03).
    
    Muffin's history mostly works by report. The comparison with Thrum is the line a reader cannot follow, because Thrum is first met an episode later, in S02E04C01.
  - **Scene:** Bubochka's POV (already in the chapter's `povs:`), on Eden's Deck 7 before she ships out to Drithane. She passes the galley door, where a small warm thing is being given things. She notes that it no longer works on her, and notes the one resident it has never worked on, Thrum, flat to a wall plate.
  - **Sits:** a new first scene of `s02e03c01`.
  - **Guard:** Muffin is shadow-shaped. The scene shows the thing at the door and what it does, and never classifies Muffin, says what it is or says how it came to Eden.
  - **Drafted 20 November 2026 (Fable), awaiting his read.** A new `scene 1` in `s02e03c01`, Bubochka's block alone; the chapter's two existing scenes are renumbered 2 and 3 and not otherwise touched. What it commits the story to:
    - On her last evening before the shuttle, Bubochka passes the Deck 7 galley door. Muffin is there and is given things. Its pull has stopped working on her, and Muffin still tries. Thrum lies flat to a wall plate nearby, and Muffin has never tried Thrum. All of this was already on the character pages for Muffin and Thrum; the scene dates it to before the Drithane trip.
    - Two passers-by call Muffin *kitten* and *bunny* and neither hears the other. The scene itself calls it only *Muffin*, *small* and *it looked warm*.
    - No `canon_facts` line was added. The chapter's `location:` gains *Eden Space Habitat, Deck 7* and its `povs:` now lists Bubochka first, in order of appearance.
    - **How the Thrum line lands.** Bubochka has seen that Thrum hears no voice and reads no face, and that Muffin never tries it, and she cannot yet say what the finding is about. S02E03C02's *Like Thrum, she wrote, then crossed it out* is then her own next step, not a new name.
    - **Left out on purpose:** her training exercise of logging what Thrum drums about (`src/characters/thrum.md`), which no chapter has dated.

### Season 4 and Season 10 (Orbital Five-O)

None.

### Seasons 6 and 7 (Tissadelle Shepherd's Arc, after Dock Seven)

- **S06-1** `s05e02c03` → `s06e01c01`, the Season 5 to 6 boundary. **An open choice, his** (below).
  - **Missing:** Season 5 ends inside the made world with Tobble in it, sitting down to wait and saying *Good morning* (S05E02C03). Season 6 opens on that same morning, and Tobble is not there. No interior chapter of Seasons 6 or 7 names him, and the list in S07E01C03 of who is with her leaves him out. Only a `canon_facts` line on S06E01C01 says the interior *was preserved by Tobble*.
  - **Why it happened:** the interior chapters were drafted before Tobble entered the record on 28 July 2026. `tissadelle-arc-s6-7.md`, *Continuity: Tobble changes this arc*, already says *the S6 chapters cannot simply not mention Tobble*, and its three options were never ruled. The rulings of 27 August (`intake-2026-08-27.md`) have him alive inside the interior afterwards, the archivist who made the redacted book, so he is not lost.
  - **Scene (if the recommended option is taken):** Tissadelle's POV (already in the chapter's `povs:`), on the hillside at first light. She reaches inward for Tobble and gets nothing she can be sure is him rather than her own memory of him.
  - **Sits:** a new first scene of `s06e01c01`. The earlier chapter ends cleanly on his *Good morning*.

### Seasons 8, 9 and 13 (Church Space, Young Star Rangers, the Infinite Castle and the Timeless Library)

None.

### Seasons 11, 12 and 14 (Below the Roof)

None. Each season's above-the-line episode retells the same season, and its index page says so. The year skips are stated in the timestamps. Season 14 picks up the four stones, the season of shapes and the standing order from Season 12.

## Considered, not seams

- **`s01e02c05` → `s01e03c01`.** Episode 3 opens with Galahad saying he *found out today* that her circle and his clock are one problem, and with Elvira reading the model as new. But she heard Syra lay out the model in S01E02C03 and answered it herself (*So my failed closures fed the same structure*). This is a contradiction between lines, not a missing scene; a scene cannot mend it without leaving both lines standing. It goes to the weekly unit review as a clarification of two phrases in S01E03C01: what Elvira had not been given was the file behind the model, not the model.
- **`s01e00c13` → `s01e01c01`, and Shepherd from Novice to Cadet.** Episode 0 promises side-lights out of order, each dated. S01E00C06 sets up *Cadet standing to be confirmed at the project's end*, and the timestamp of S01E01C04 shows that year has passed. This reads fine.
- **The Threnody report off Eden** (S02E01C03). The report goes to Halcyon with the Commander, and Season 2 never says how it ends. The episode's point is what a filed report does once it leaves the floor, seen from the pets' side, and S02E02C01 carries *the task force away at Halcyon*. This is an open end, not a dropped thread.
- **Wender at Threshold nineteen days after Dock Seven** (S06E01C02), when S05E02C03 had her eleven hours away. Nineteen days is stated, and she was at Threshold before Dock Seven.
- **Sen's alters Cael and Wyn** appear first in S06E02C01. The POV label and *Sen fronted* carry them.

## Tally

| | |
|---|---|
| Seams judged | 116: the 109 adjacent pairs inside seasons, and the seven season seams inside threads |
| Episode boundaries among them | 27, besides the seven season seams |
| Seams that need a scene | **3**: S00-1, S02-1, S06-1 |
| Settled by recommendation, his to overrule | 2: S00-1, S02-1 |
| Open choice for him | 1: S06-1 |
| Considered and not listed | 5 (above) |

By season: S00 one, S02 one, S06 one, every other season none.

## Judgement calls

### Settled by recommendation (Opus), his to overrule

- **S00-1, scene or clause.** One clause in Voss's existing block would join the man to the desk as well as a scene. The scene is recommended because his direction asks for scenes and a scene moves no published line. The alternative is a one-clause clarification in S00E03C01.
- **S02-1, scene or gloss.** A one-clause gloss on Thrum in S02E03C02 would mend the line a reader trips on. The scene is recommended because it also gives Muffin's door a first sight before the episode leans on it. The alternative is the gloss alone.

### Open, his: S06-1, Tobble across the Season 5 to 6 seam

This reaches canon about a member of her system, and the arc treatment has said since July that it needs his decision. So it is put as choices.

1. **She reaches for him and cannot tell** (recommended). A new first scene of S06E01C01: she reaches inward for Tobble, and what answers, if anything does, she cannot tell from her own memory of him. The published interior chapters keep their isolation unchanged. This matches the treatment's own read (*she genuinely cannot tell whether Tobble is present or reconstructed*). It leaves the redacted book and his grief for later chapters, where the 27 August rulings put them. The S07E01C03 list that leaves him out then reads as the same uncertainty, not a slip.
2. **He answers, once.** The same scene, with Tobble plainly present. This is warmer and nearer the treatment's option 1. But the five later interior chapters never mention him, so each of them would then need a bridge of its own: S06E01C03, S07E01C02 and S07E01C03 at least.
3. **No scene now.** The absence stays until a chapter on the redacted book takes him up, and the story bible records the absence as deliberate. The cost: a reader who has just watched him wait in the made world loses him for two seasons with nothing said.

## Slips found in passing — for the weekly unit review, not scenes

These are new; the slips listed on 19 November are not repeated. Each is an arithmetic, chronology or naming point to be checked against the chapters either side before anything changes.

### Seasons 0 and 1

- **S00E01C02.** Pitch's monitoring officer *now had two colleagues*, against Okafor's *three more monitoring officers*.
- **S00E02C01.** Adaeze is *the fourth family member to sit across this desk* and also *the only one who had made the trip to Mars in person*.
- **S00E03C01.** Voss *stood in rooms* at Kessler Anchorage *eleven years ago* (2712), three years before he was a lieutenant fresh off training.
- **S00E03C02.** Kilbride *watched you say that difference* when she was not at that meeting. The same chapter calls Kilbride and Okafor *two pilots*, though Okafor is the boundary analyst.
- **S01E00C00.** The timestamp is *Early Autumn*, against frost-blackened grass and roses blooming *this late in the year*.
- **S01E00C07.** Holm *had never watched* a turn, after a month on a post with turns every six to fourteen hours.
- **S01E03C03.** Aldera's *two nights ago* for the question, against Rook's *three days ago*.
- **S01E03C04.** *By the third day … the last four days*.
- **S01E03C06.** *A week ago at this table*, against consecutive timestamps.

### Season 2

- **S02E01C03.** *Three days before*, where the timestamps give four.
- **S02E05C01 and S02E10C01.** The POV ids are `achebe` and `marisol-achebe` for one character.
- **S02E06C01.** A family *four weeks aboard* is at *week five* of its application.
- **S02E10C01.** Lev remembers his mother and a quartermaster *on the day of the crate*, and S02E07C01 shows neither.

### Seasons 3 and 5

- **S03E01C03.** *File four hundred and thirteen*, three weeks after she cleared 411 in one shift.
- **S03E02C01.** The review chamber is *in the spring* twice; it was late winter.
- **S03E02C03.** Halvorsen's *six revisits, six commanding officers*, against *five* in S03E02C04.
- **S03E03C01.** Wender came *from the top of … a pilot department*, skipping her Starwarden and Archwarden years. Also check *Archwarden* in 2829 against the lore's 2833 restyling of the title.
- **S05E00C01.**
  - *Two years* and *Three years* in one paragraph.
  - The crew had their Starwarden *for six weeks*, under a *Late Autumn* timestamp after a late-autumn assumption.
  - The episode index has *the Chief Ranger who left the Hegemony's review chamber*: she was a Principal, and the chamber was the Survey Corps'.

### Seasons 5 to 7

- **S05E02C03.** Wender reads the log *by her own station's clock* while aboard *Fel Trohen*.
- **S06E01C02.** Rook-7 is *the one member of her survey team*.
- **S06E01C03.** *A lifetime and a rank ago*, for a bulletin weeks old at the same rank.
- **S07E01C01.** The stylus was set down *ten weeks ago*; day 19 was about seven weeks earlier.

### Orbital Five-O

- **S04E02C01.** *Resigned a commission … eleven years ago, and had spent two years since*.
- **S10E01C01, C02 and C05.** Two different *last days* of the crew's work.

### Below the Roof

- **The stones on the line** (S12 and S14). The Told count four stones, and *a stone moved for you is not yours to move*. But the logs set one down and leave it on every knock shift, more than a hundred of them. The largest consistency point in the thread.
- **S12E01C02.** The knock is set *to the squeeze, not through it … on their side*, against *on the line* everywhere else.
- **S12E01C06.** *Lately … for a year*.
- **S12E01C06.** *Six tellings*, then *the five things*.
- **S12E01C04.** The up-people had been there *a whole year* before the two stones, against two years in Season 11.
- **S12E02C01.** *A hundred and some shifts* of knocking by shift 117, when knocking began at 64.
- **The eleven minutes put in *the first year*** (S12E02C01, its index, S14E02C01, S14E02C02). Season 11 has them in the second.
- **S14E02C01 to C03.** *Nakagawa had signed three* summaries, against *the fourth year* for shifts 220 to 234.
- **S12E02C03 and S14E02C02.** Ferrant's *nine years* in both, a year apart.
- **S14E01C02.** The answer is given before the wait it ends.
- **S14E01C03.** *Three up-people* on the line, where one stands.
- **S11E01C03.** Carried-It-Sleeping watched the up-people *twice*; one watch is on the page.

### Seasons 9 and 13

- **S09E01C05.** *Nine of them* beside *seventeen days*; check against Season 10.
- **S13E01C02.** *The first door on the right* is Hallin's, where S13E01C01 sent Hallin right to the lamp's end.
- **S13E02C02.** The court chose the instrument's place, against the keeper deciding.
- **S13E02C02.** Emma writes *the name the Abbess had said once*, though the Abbess withholds it on the page.
- **S13E02C02.** The reciter arrives *by the first calm*, the calm Wren left on.

## Could not read

Nothing. Every chapter and index page was read.
