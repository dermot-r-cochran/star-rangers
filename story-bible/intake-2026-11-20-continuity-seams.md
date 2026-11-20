# Continuity seams — the audit, 20 November 2026

Open questions this file raises are indexed in `open-questions.md`.

## What was asked

**His words, verbatim, 19 November 2026.** *"Add additional scenes to each chapter as needed for continuity or to handle transitions between episodes."* The reading of that direction is in `intake-2026-11-19.md`, *Extra scenes for continuity and episode transitions*: first an audit (Opus), then drafting (Fable), one season per PR.

**20 November 2026, verbatim.** *"Start the audit"*.

This note is the audit. It drafts no prose and changes nothing under `src/`. Step 2, the scenes, is Fable's.

## Method

- **What was read.** All 125 published chapters, `s00e01c01` to `s14e02c03`, each in full, in story order (season, episode, chapter), together with every season and episode index page. Eight Opus read-only passes each took one thread or part of one: Founding Era, Church Space, Young Star Rangers and the Infinite Castle; Season 1 Episode 0; Season 1 Episodes 1 to 3; Season 3; Seasons 5 to 7; Undercover Pets and Orbital Five-O; Below the Roof Seasons 11 and 12; Season 14. Each pass gave a verdict on every adjacent pair. Opus then checked every candidate against the chapters, the character pages and the story bible before it was listed here.
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
  - **Drafted 20 November 2026 (Fable); read and kept** (Dermot, 20 November 2026, *"As recommended"*, to the evening critic read's point 4). A new `scene 1` in `s02e03c01`, Bubochka's block alone; the chapter's two existing scenes are renumbered 2 and 3 and not otherwise touched. What it commits the story to:
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
| Seams judged | 117: the 110 adjacent pairs inside seasons, and the seven season seams inside threads |
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

**Ruled the same day, option 1; see *Ruled, 20 November 2026* below.** The choices are kept as they were put.

This reaches canon about a member of her system, and the arc treatment has said since July that it needs his decision. So it is put as choices.

1. **She reaches for him and cannot tell** (recommended). A new first scene of S06E01C01: she reaches inward for Tobble, and what answers, if anything does, she cannot tell from her own memory of him. The published interior chapters keep their isolation unchanged. This matches the treatment's own read (*she genuinely cannot tell whether Tobble is present or reconstructed*). It leaves the redacted book and his grief for later chapters, where the 27 August rulings put them. The S07E01C03 list that leaves him out then reads as the same uncertainty, not a slip.
2. **He answers, once.** The same scene, with Tobble plainly present. This is warmer and nearer the treatment's option 1. But the five later interior chapters never mention him, so each of them would then need a bridge of its own: S06E01C03, S07E01C02 and S07E01C03 at least.
3. **No scene now.** The absence stays until a chapter on the redacted book takes him up, and the story bible records the absence as deliberate. The cost: a reader who has just watched him wait in the made world loses him for two seasons with nothing said.

### Ruled, 20 November 2026: S06-1, option 1

**His words, verbatim:** *"She can't tell him apart"*. That is option 1 above, the recommended one.

**Measured in the record before drafting.**

- S05E02C03 ends with Tobble in the made world. The light comes up grey, then gold, there is *a woman at the low wall who had not decided to come here*, and he says *Good morning* *to nobody who could hear it yet*.
- S06E01C01 opens on that woman at that wall. It had no scene wrappers, so it was one implicit scene of two blocks, hers and Órla's.
- Inward speech between them has a settled form: his line in italics with an ordinary attribution (S05E02C03, and `prose-style.md` §5). He counts things, twice, and gives the number before she asks (S03E01C05, S03E02C02, S03E03C02).
- His page has him *professionally quiet for a whole day*. Her page has her correcting, once, the people who take him for an animal.

**Drafted.** A new scene 1 of S06E01C01, one block, hers, about 400 words. The two published blocks are wrapped unchanged as scene 2. It is an **extension**: no published line moves, and the chapter's `povs:` already carry her.

- The gold is up and has not reached the wall. She is partway through his name and finishes it, inward.
- *Good morning* comes, with no attribution. It is the first inward line of his in the record that the prose does not attribute, and that is the device: she could not put *Tobble said* after it and stand behind the sentence.
- She waits for the count he would usually give. None comes. His silence is as much in character as his answer was, so it settles nothing.
- She finds she never took a baseline of what his presence is like when he says nothing.
- She declines to ask *are you there*, because yes is the one answer she could supply without him. She declines to answer for him.
- She says *Good morning* back, owed if he is there and two words if he is not, and keeps still.

**What it commits the story to.**

- On the first morning of the interior she reached for Tobble, and what she got she could not tell from her own memory of him. She did not decide which it was.
- She greeted him back, and did not supply his lines.
- Nothing else. The scene does not say whether he heard her, whether the *Good morning* was his, or why no count came. It adds no `canon_facts` line. The redacted book and his grief stay where the 27 August rulings put them.

**Guards kept.** The mystery stays shut in both directions: his *to nobody who could hear it yet* in S05E02C03 is neither confirmed nor contradicted, since she does not know what she heard. Her uncertainty is about a reading she never took, never about whether he is a person; nothing in it reads plurality as a fault. She is not frightened and not emptied: she does the one thing that is right on either reading.

**Readings chosen in the draft, his to overrule.**

1. **Where the scene sits in the light.** In S05E02C03 his *Good morning* comes after the gold is up and she is at the wall. So the scene is set with the gold up in the east and not yet on the wall, which lets her two words and his be the same two words, or not. Set earlier, in full grey, her *Good morning* would come before his and would lean toward memory. Recommended: as drafted.
2. **Scene numbers.** A new scene 1 makes the published blocks scene 2, as the brief asked. The scene-and-viewpoint pages carry the scene number in their address and their comment thread, so her published block and Órla's move from scene 1 to scene 2, and the old scene 1 address for her now shows the new block. No page in `src/` or `lib/` links to those addresses. The alternative is to label the new scene `0`, which moves nothing and shows *Scene 0* on the page. Recommended: as drafted, 1 and 2.
3. **No cat on the wall.** She hears, or remembers, and sees nothing. A cat seen on the wall would have to be accounted for in every later interior chapter. Recommended: as drafted.

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

## The slips, checked and fixed — 20 November 2026

**His words, verbatim.** *"Fix them when ready please"*: the slips under *Slips found in passing*, and the S01E02C05 to S01E03C01 point under *Considered, not seams*.

**How.** Opus checked each slip against the chapters either side of it and against the character, lore, glossary and timeline pages before changing anything. A plain error was fixed as a **clarification** on the page the rest of the record contradicts, using the smallest edit that would do. Where an in-story reading already makes sense of a slip, it was left alone. `lib/locked-pages.json` lists no page. One genuine dilemma is put to him. **Tally:** 46 points; 25 fixed, 19 left, 2 put to him as one question.

### Seasons 0 and 1

- **S00E01C02.** Fixed in `s00e01c02.md`: *now had two colleagues* → *three colleagues*. Kept Okafor's *three more monitoring officers*, which `src/lore/eden-space-habitat.md` also says.
- **S00E02C01.** Fixed in `s00e02c01.md`: *the fourth family member to sit across this desk from him* → *to reach this desk*. The other three wrote through the correspondence channel, so *only one in person* stands.
- **S00E03C01.** Left. Voss cites Kessler and *the report*. He never says he was there, and *rooms where that delay cost lives* can be his casualty desk.
- **S00E03C02, *watched you say that difference*.** Left. Kilbride trained with Okafor for four months before launch, so she had other chances to hear it. The line does not claim the S00E01C02 meeting.
- **S00E03C02, *two pilots*.** Fixed in `s00e03c02.md`: *two pilots comparing notes* → *two crew*. Okafor is the boundary analyst.
- **S01E00C00.** Fixed in `s01e00c00.md`: timestamp *Early Autumn* → *Mid-Autumn*. The frost, the roses and *this late in the year* are kept, and the canon_facts line *before Late Autumn* still holds.
- **S01E00C07.** Fixed in `s01e00c07.md`: *had read about a turn* → *a late turn*. After a month on the post she has seen ordinary turns; the thirty-one-hour one is what she had never watched.
- **S01E03C03.** Fixed in `s01e03c03.md`: Aldera's log *Two nights ago Subject A asked me the question* → *Last night*. The question comes on the evening of S01E03C01 and the anchor breaks before dawn. Rook's *three days ago* is about his model filing, so it stands.
- **S01E03C04.** Left. The quoted *the last four days* is not in the chapter. *On the sixth day … four days ago* reads fine.
- **S01E03C06.** Left. C05 and C06 are not said to be consecutive, so *a week ago at this table* fits the gap.
- **S01E02C05 → S01E03C01, Elvira and the model.** Fixed in `s01e03c01.md`, two phrases:
  - *A model, current as of this morning,* → *The file behind the model she had heard stated that morning,*;
  - *by a ratio that meant* → *by a ratio worked through in the station's own figures, which meant*.

  Galahad's *found out today* stands, because he learned it at the same meeting.

### Season 2

- **S02E01C03.** Left. Barsik's *The next day* makes the chapter day 9 and the side door was day 6, so *three days before* is right.
- **S02E05C01 and S02E10C01, `achebe` and `marisol-achebe`.** Left. This was settled on 10 October 2026: the character page lists both ids under `pov_ids:`. Renaming one would move a scene-viewpoint page and its comment thread.
- **S02E06C01.** Left. The application went in the week the family arrived, so a family *four weeks aboard* is in the fifth week of its application.
- **S02E10C01, Lev's memory.** Left. S02E07C01 shows only Bubochka's and Barsik's sides. Lev's mother is at the bureau that day, and nothing rules out the meeting he remembers.

### Seasons 3 and 5

- **S03E01C03.** Fixed in `s03e01c03.md`: *File four hundred and thirteen was* → *File four hundred and thirteen of the shift was*. S03E01C01 already counts files per shift.
- **S03E02C01.** Fixed in `s03e02c01.md`: *a review chamber in the spring* → *at the end of winter*. S03E01C02 is timestamped Late Winter.
- **S03E02C03 and C04, Halvorsen's six and five.** Left. She was on every revisit from the second onward, so there are six revisits on file and five homecomings of her own.
- **S03E03C01, *from the top of … a pilot department*.** Fixed in `s03e03c01.md`: *She had come to it* → *She had come to command*. The line meant her step from Chief Pilot into command, as S05E00C01 and her page say; *it* had read as the Line Captaincy.
- **S03E03C01, *Archwarden* in 2829.** Left. The word is not in that chapter. Where it does appear, the glossary's rule of 29 September 2026 lets the Archive's narration use *Archwarden* in every period.
- **S05E00C01, *Two years* and *Three years*.** Fixed in `s05e00c01.md`: *Three years.* → *Two years.* This matches the paragraph's opening, the description and S03E03C01.
- **S05E00C01, *six weeks* under *Late Autumn*.** Left. Late Autumn is half a season, long enough to hold six weeks after an assumption early in it.
- **S05E00 index.** Fixed in `s05/e00/index.md`: *the Chief Ranger who left the Hegemony's review chamber* → *the Principal who left the Survey Corps' review chamber*.

### Seasons 5 to 7

- **S05E02C03, *her own station's clock*.** Left. Nothing puts Wender aboard *Fel Trohen* that night; she was eleven hours away, and *her own station* is her duty station.
- **S06E01C02, *the one member of her survey team*.** Left. The full phrase says Rook is the one member with a habit, not the one member of the team.
- **S06E01C03.** Fixed in `s06e01c03.md`: *a lifetime and a rank ago* → *a lifetime ago*. She was a Line Captain then and is one still. *A lifetime* is felt time in the interior.
- **S07E01C01.** Fixed in `s07e01c01.md`: *set down ten weeks ago* → *seven weeks ago*. Kept the chapter's *ten weeks* since Dock Seven and S06E01C02's day 19, which together make about seven weeks.

### Orbital Five-O

- **S04E02C01.** Left. *Two years since* reads as the last two of the eleven, holding the task force's standing, which agrees with S04E00C02's *in two years*.
- **S10E01C01, C02 and C05, the two last days.** Fixed in `s10e01c05.md`: *dated the last day* → *dated the last shift*, in the prose and in the same canon_facts line. C01 and C02 agree on *the last day of the work*; the crew stayed on into snagging, and C05's timestamp is *the crew's last shift*.

### Below the Roof

- **The stones on the line (S12 and S14).** Put to him: `open-questions.md`, *The knock stones on the line*, held in its own pull request. No counting reading closes it, and the reasons are given there.
- **S12E01C02, the knock *to the squeeze, not through it … on their side*.** Put to him, as part of the same question. It is the plain fix if the stones are settled one way and the answer itself if they are settled another.
- **S12E01C06, *Lately … for a year*.** Left. To the Told a year is recent.
- **S12E01C06, *six tellings* and *the five things*.** Fixed in `s12e01c06.md`: *the five things* → *the six things*. The paragraph before it lists six.
- **S12E01C04.** Fixed in `s12e01c04.md`: *for a whole year* → *for two whole years*. The survey arrived in 2831 and the two stones came at the end of 2832 (S11E02C03, *Two years to learn to knock*).
- **S12E02C01, *a hundred and some shifts*.** Left. Knocking began at shift 64, and the third year runs to about shift 211 (see the summaries below), so *a hundred and some* fits a chapter late in that year.
- **The eleven minutes in *the first year*.** Fixed in `s12/e02/index.md` and `s14e02c01.md`: *the first year* → *the second year*. S11E02C01 and the canon_facts of S12E02C01 have it in the second year. S12E02C01's *the first year, before we had the stand* is left, because it places the spot by where the light stopped, which held for two years.
- **S14E02C01 to C03, Nakagawa's summaries.** Fixed in `s14e02c01.md` and `s14e02c02.md` as a chronology clarification. C01's summary is now the third year's, signed at the turn into the fourth:
  - *had signed three … stood on the two* → *two … the one*;
  - *The fourth summary* → *The third summary*;
  - *the fourth year's summary* → *the third year's summary* (twice);
  - *signed it twice* → *signed it once*;
  - *sign it a third time* → *a second time*;
  - *in four years* → *in three years*;
  - in C02, the timestamp and one canon_facts line, *fourth* → *third*.

  Kept: the fourth-year timestamps of C02 and C03, the timeline page, the character pages, and one survey year per season. The shift figures also decide it. From shift 64 to shift 211 is 148 knocks, which is one year of *a hundred and some*, not two. C01's own timestamp, *at the turn of the year's file* in the fourth year, already fits the turn into it.
- **S12E02C03 and S14E02C02, Ferrant's *nine years*.** Left. With the fix above, the two chapters are months apart, late in the third year and the turn into the fourth.
- **S14E01C02, the answer before the wait.** Fixed in `s14e01c02.md`: the standalone *Stone-First answered it. A good one. Once.* is moved to the end of the wait, *Then Stone-First answered it, a good one, once, and the stone spoke*. No word was added beyond the move.
- **S14E01C03, *three up-people*.** Fixed in `s14e01c03.md`: *to keep three up-people* → *to keep an up-person*. Only the one who knocks comes through to the line.
- **S11E01C03, *twice*.** Left. The earlier watches are told by report, and nothing says there was only one.

### Seasons 9 and 13

- **S09E01C05.** Fixed in `s09e01c05.md`: *on nine of them a line* → *on the ninth of them a line*. Season 10 has the line on day 9 and the inspection on day 26, nine days and seventeen more.
- **S13E01C02, *the first door on the right*.** Left. Hallin's walk goes down the right side to where the lamp stops, and nothing says where it starts.
- **S13E02C02, *a location the court chose*.** Fixed: → *the keeper chose*. S13E01C02 says twice that the keeper decides.
- **S13E02C02, the name the Abbess *had said once*.** Fixed: → *the name on the page the Abbess had read once in the long room*, and *said in her hearing and had not been said to her* → *held out in her sight and had not been held out to her*. On the page the Abbess reads the page Oriel holds out and never speaks the name. This is the fix nearest to new material, because it says how Emma came by the name. His to overrule: the alternative is to leave the line as it was published.
- **S13E02C02, *by the first calm*.** Fixed: → *by the next calm*. Wren left on the first calm's boat, and the line still had to reach the court and a reciter cross from Ostrel.
