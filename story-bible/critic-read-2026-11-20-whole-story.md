# Whole-story read for technical flaws and minor gaps — 20 November 2026

**His words, 20 November 2026:** *"look for technical flaws and minor gaps in the story"*.

Four Fable readers, one per block of seasons (S00–S01, S02–S04, S05–S10, S11–S14), read all 125 chapters on `origin/main` at `a0668c67`, with the lore and character pages each chapter leans on. They only read. Each finding quotes both sides of the clash; Opus spot-checked about half against the text and every one checked held. Kept mysteries were left alone on purpose. Nothing under `src/` is changed by this note.

**Overlap with #2021 (noted 20 November 2026, evening critic read).** This read was taken at `a0668c67`, before #2021 fixed the seams audit's slips, so check each row against the page before applying it. Already done by #2021: S0–1 #9; S5–10 #5 and #9; S11–14 #4 and #5; half of S0–1 #13 and of S11–14 #3. Superseded, since applying them would undo #2021: S0–1 #1's *"Three nights"* (the page now says *"Last night"*, right by C03's *"The morning after the grove"*) and S0–1 #14's *"two more"* (#2021 made the other side *"three colleagues"*). Left by #2021 with a reason: Kessler, Halvorsen's six and five, and S11E01C03's *"twice"*. S11–14 #2 still stands: the chapter logs shift 117 and the knocking began at 64.

**Kinds:** *flaw* (wrong), *unsupported* (asserted without ground), *gap* (missing). **Repair** is the cheapest edit; "prose" means chapter text only, "fm" means front matter (timestamp, description, canon_fact, image_alt). Paths are under `src/seasons/` unless shown.

## Needs his choice

1. **The stones on the line (S11–S14).** Survey side: a stone is set on the line every shift from shift 64 (`s11e02c03.md:146`, `s12e02c01.md:43-47`, `s12e02c03.md:182`), about 170 by S14. Deep side: the line holds three, then four (`s12e01c02.md:78`, `s12e01c06.md:99`, `s14e01c04.md:180`; S14E01 canon_facts *"The line keeps its four stones"*). (a) One clause each side on where each shift's stone goes, so only the first and the convergence stones stay on the line; or (b) the daily knock is made on the party's side of the squeeze, as `s12e01c02.md:40` already says, and Aravena comes through only on the convergence days. Item 2 below follows from the choice. **RULED 27 November 2026** (his *"(a) The one moves along"*, `critic-read-2026-11-26-loose-ends.md`). By then the text already kept the older stones in a row on the deep side, so the one clash left was where each day's stone lands: beside the last one (`s11e06c01.md:115`) or a hand from the feet (S12–S14). Ruled: the one on the line moves one stone along at every working time and stands at the row's end. One clause was added each side, at `s11e06c01.md:115` and `s12e01c02.md:42`.
2. **Through the squeeze or not (S12).** `s12e01c02.md:40` *"comes to the squeeze, not through it"* against the canon_fact at `s12e02c01.md:16` (*"carries a stone … through the squeeze"*). Settled by 1: (b) keeps `:40`; (a) strikes *"not through it"* and *"on their side"*, and *"lately"* at `s12e01c06.md:41`. **Settled before 26 November 2026:** `s12e01c02.md:40` now has the knocker come *"through the squeeze"*, which agrees with the canon_fact.
3. **The false zero's age (S10E01).** `s10e01c04.md:54` (*"zeroed on the certification date"*, three weeks ago) against `:70`, `:74` (*"for three years"*). (a) drop the duration at `:70`, `:74`; or (b) *"re-zeroed at each certification since"* at `:54`, with the C03 canon_fact to agree. **RULED 20 November 2026: option (a), applied** (his *"Yes, as recommended"*): *"three years of"* and *", for three years,"* struck at `:70`, `:74`; the C03 canon_fact already agrees.
4. **The sixth morning (S02E08).** Six objects collected on night passes can number only five by the sixth morning (`s02e08c01.md:63`, `:81-85`; she looks for *"her fifth object"*). (a) *"seventh morning"* and *"sixth object"*; or (b) five bags and five forms. **RULED 20 November 2026: option (a), applied** (his *"Yes, as recommended"*): both mornings now the seventh, and she looks for her sixth object; `characters/priya-nakamura.md:25` to match. Timestamp and canon_facts (a six-day observation) already agree.
5. **How long a Board season is (S01).** `s01e00c10.md:44` (*"seven and eight, and now … nine"*) against `characters/nuala-beirne.md:21` (*"seven, and seven, and eight"*), both from the same winter. Cheapest: the character page to *"seven and eight"*; one line saying how long a Board season is would settle the rest. **RULED 20 November 2026: the cheapest repair, applied** (his *"Yes, as recommended"*): the character page now reads *"seven and eight"*. No line defining a Board season's length was added; that would be a new fact, and it was not ruled.

## Seasons 0 and 1

| # | Kind | Where | What | Repair |
|---|---|---|---|---|
| 1 | flaw | `s01e03c03.md:77,81,87,167,173` vs `s01e02c01.md:44`, `s01e03c01.md:34` | Elvira has known Galahad about a week by the day anchors, *"three weeks"* and *"a fortnight"* by the prose; Aldera's *"Two nights ago"* (`:133`) is one short; same at `s01e03c06.md:89` | prose: spans in days; *"Three nights"* |
| 2 | flaw | `s01e03c05.md:180`, `s01e03c06.md:103` vs `s01e00c02.md` | Elvira remembers the sage with *"the stones and the glass"*, the superseded ritual version of *Out of Range* | prose: *"trusted with the search"*; drop *"the kind he wore for the glass"* |
| 3 | gap | `s01e03c01.md:50,64,78,94` vs `s01e02c02.md:62,78`, `s01e02c03.md:81-83` | The disclosure hands Elvira what she already knows. **Already in** `intake-2026-11-20-continuity-seams.md` | as there |
| 4 | flaw | `s01e01c03.md:106` vs `:42`, `:118` | Rook-7 counts 406 groups at 15 s (101 min) inside a 60-minute visit | prose: *"one hundred and six groups"* |
| 5 | flaw | `s01e00c12.md:106` vs `:42`, `:70` | The new *Zone* line *"read ten thousand times"* | prose: *"the first of those lines"*; canon_fact `:17` to match |
| 6 | flaw | `s01e00c05.md:10` vs `:82`, `:96` | Timestamp ends in winter 2814; prose runs to the summer of 2815 | fm: *"to the Summer of 2815"* |
| 7 | flaw | `s01e01c01.md:39`, `s01e01c04.md:78` vs `s01e01c02.md:94-96`, `s01e02c02.md:104` | Three incident reports are about the chronometers in two chapters and about vibration, condensation and shimmer in a third; Years 3–8 are not *"over eleven years"* | prose: *"a boundary symptom beside the discrepancy"*, *"the first eleven years old"*; drop *"Year 3"* |
| 8 | gap | `s01e00c10.md:58-60,104` vs `:114`; `characters/nuala-beirne.md:22` | The Sceir lamp is timed by day and *"lit at the hour"* at dusk | prose: *"She went up at the hour to see it turn"*; page to match |
| 9 | flaw | `s00e03c02.md:55` vs `s00e01c02.md:24` | Okafor, an analyst, becomes one of *"two pilots"* | prose: *"a pilot and an analyst"* |
| 10 | flaw | `s01e03c02.md:174,184,186` vs `:118-126` | Thorne reports the model withdrawn at eight; Rook withdraws it at 09:02 | prose: *"about ten"* |
| 11 | flaw | `s01e03c04.md:127`; `:81` vs canon_fact `:20` | *"four days ago"* should be five; *policy-triage* vs *policy-tragedy* | prose: *"five days ago"*; make the two words agree |
| 12 | unsupported | `s01e02c02.md:56,66` vs `:52`; `s01e03c02.md:198` | *"those three centuries"*: the record's 240 years is the entity's, three centuries the grove's | prose: *"those centuries"*, *"Two hundred and forty years"* |
| 13 | unsupported | `s00e03c01.md:68` vs `:36`; `s00e02c01.md:61` | Voss *"stood in rooms"* at Kessler Anchorage three years before he was commissioned; the *"fourth family member to sit across this desk"* was the only one to come | prose: *"I have read what"*; *"this desk had answered"* |
| 14 | flaw | `s01e01c03.md:70`; `s01e02c03.md:58`; `s00e01c02.md:30` vs `:64` | *"fourteen … mechanisms"* through four replacements; *"a third paper"* after three; *"three more"* officers against two | prose: *"five different movements"*, *"a fourth paper"*, *"two more"* |

## Seasons 2 to 4

| # | Kind | Where | What | Repair |
|---|---|---|---|---|
| 1 | flaw | `s04e02c01.md:10` vs `:78`, `:102`, `:110` | Timestamp *"eight days after"* the quarter's close; prose ends at the close | fm: *"the eight days before the quarter's close"* |
| 2 | flaw | `s02e01c01.md:67` vs `:33`, `:61-65` | Four stamps and a missing fifth become *"five stamps"* and *"the sixth one"* | prose: *"a fifth stamp … the fifth one"* |
| 3 | flaw | `s02e09c01.md:33` vs `:95`, `:103` | *"first night of the new month"* against slips *"dated the third"* | prose: *"third night"* |
| 4 | flaw | `s02e10c01.md:108`, `:128` vs `s02e03c02.md:57-59`, `s02e03c03.md:39,75,83` | Drithane misremembered: the refusal was in the yard and worked; Muffin was away weeks, not *"nine months"* | prose: *"refused once … in her own yard, and named once at a ramp"*; *"since the spring"* |
| 5 | flaw | `s03e02c03.md:65,75` vs `s03e02c04.md:73,75`, canon_fact `:18` | Six revisits against five (extends the seams list, which caught `:65` only) | prose and one canon_fact: *"five"* |
| 6 | flaw | `s04e02c01.md:66,68,90,106` vs `s02e01c01.md:103`, `s04e00c02.md:58` | Five-O still *"two years"* old fourteen months on | prose: *"three years"*, *"thirteen quarters"* |
| 7 | flaw | `s04e01c01.md:91` vs `:33-35` | *"Four registries"* where five were reconciled | prose: *"Four incidents"* |
| 8 | flaw | `s04e00c02.md:98` vs `:38`, `:86` | The second letter written *"before the day staff signed on"*, half an hour after they had | prose: *"before the first shift's filings"* |
| 9 | flaw | `s02e09c01.md:45` vs `s02e08c01.md:10` | *"in the spring"* for a summer test | prose: *"in the summer"* |
| 10 | flaw | `s04e02c02.md:96` vs `s04e02c01.md:80` | The reference-mass exchange credited to the metrology offices, not the task force | prose: *"the audit's and the two metrology offices' own checks"* |
| 11 | unsupported | `s03e02c01.md:18` vs `s03e01c05.md:53,71` | Wender's three rooms *"at Threshold"* when Shepherd was not there | canon_fact: drop *"at Threshold"* |
| 12 | flaw | `s02e03c01.md:113` vs `src/lore/planets/drithane.md:22` | *"annually"* for a crossing that comes twice an orbit | prose: *"every crossing"* |
| 13 | gap | `s02e02c01.md:103` | Tobble speaks in a children's-tier season with no gloss | prose: *"remarked, inward"* |
| 14 | unsupported | `s02e03c03.md:87` | *"a fifth person"* with no four on record | prose: *"a person"* |

Smaller, unranked: `s03e01c04.md:117` *"the officer's own classifier"* (the Hegemony's); `s02e01c02.md:34` a screen whose *"glow"* lights Larsen's face, and S02's handset, blotter and stapler, which may be Eden's register on purpose.

## Seasons 5 to 10

| # | Kind | Where | What | Repair |
|---|---|---|---|---|
| 1 | flaw | `s10e01c04.md:17,74,76` vs `s10e01c06.md:74`, `s10e01c07.md:70,74`, canon_fact `:18` | The wrong zero *"is a finding"* on day 16; the episode closes on *"We found nothing"*. C04 limits it (*"Not a finding about the ring"*), so an in-story reading may already hold; C06's *"until the day there was one"* is the sharper clash | prose and one canon_fact: *"a ground for refusal"* |
| 2 | flaw | `s05e02c03.md:115,119` vs `:189`, `src/lore/threshold-station.md:34` | Dock Seven *"eleven hours from anything"* and watched from Dock Seven's own gallery; 0410 against 0447 *"eleven hours stale"* | prose: detach the eleven hours from the station |
| 3 | flaw | `s07e01c03.md:68,70,92,98`; `s05e00c02.md:53,89,95` vs `src/lore/what-the-record-refuses.md:82-88` | *"second screen"* in the Archive; a nomination folded and *"the paper"*, against the refused screens and rigid unfoldable leaves | prose: *"leaf"*, *"slid … into"* |
| 4 | flaw | `s06e01c03.md:40`, `s06e01c02.md:66` vs `s03e01c01.md:11` | The Sentinel pulse credited to *"this station"* (Threshold); it was a world's, read at Halyx | prose: *"taught the Survey Corps"* |
| 5 | flaw | `s07e01c01.md:59,65` vs `s06e01c02.md:38`, `s06e02c01.md:67` | The stylus *"set down ten weeks ago"*; it went down on day 19 and again on day 53 | prose: *"set down over the citation"* |
| 6 | flaw | `s05e00c02.md:63` vs `:53`, `:75` | Flagship on the dock schedule four days ahead of a two-day flight she asked for that morning | prose: *"two days"* |
| 7 | flaw | `s05e02c01.md:12` vs `:95,103,117` | Description *"a morning later"*; prose four days | fm: *"four mornings later"* |
| 8 | gap | `s09e01c05.md:37,39,87,105` | Season 9's last chapter leans on the raven, the line and the countersign, shown only in S10E01 | prose: one orienting clause, and a link to S10E01 |
| 9 | flaw | `s10e01c02.md:12,69`, `s10e01c01.md:48` vs `s10e01c05.md:41,69` | *"the last days of the job"* five weeks before the job ends; two *"last days"* | fm and prose: *"the cutting"* |
| 10 | flaw | `s09e01c05.md:113`, canon_fact `:18` vs `s09e01c03.md:83` | *"told it fourteen times since"*: fifteen with Varn | prose and canon_fact: *"fourteen times before you"* |
| 11 | flaw | `s09e01c02.md:61` vs `:27,37`, `s09e01c04.md:51` | *"over three days"* at the plant; two | prose: *"over two days"* |
| 12 | flaw | `s10e01c02.md:37` vs `s10e01c04.md:38,44` | *"the third of six the humans' instruments hung from"* reads as six mounts; all six hang on mount three | prose: *"the third of six, the one the humans' instruments hung from"* |
| 13 | flaw | `s06e02c01.md:14` vs `src/characters/karla-wender.md:15,30` | Wender *"in her fifties"* in an alt; about 45–48 in 2831 | fm: *"in her forties"* if the picture allows |

## Seasons 11 to 14

Items 1 and 2 of this read are under *Needs his choice* above.

| # | Kind | Where | What | Repair |
|---|---|---|---|---|
| 1 | flaw | `s11e02c02.md:73,163` vs `s11e02c03.md:10,34-36,152` | First knock *"the morning after"* shift 58, logged as shift 64 | prose: *"sixty-two"*, *"sixteen shifts"*; C03 timestamp, `:34` and canon_fact to *"the second morning"* |
| 2 | flaw | `s12e02c01.md:47` vs `:51`, `s14e02c01.md:85` | *"A hundred and some shifts"* of knocking at shift 117 (53) | prose: *"Fifty-some shifts"* |
| 3 | flaw | `s12e02c01.md:147`, `s14e02c01.md:193`, `s14e02c02.md:55` vs `s11e02c01.md:10` | The eleven minutes placed in *"the first year"*; they were in the second | prose: *"second year"*, three places |
| 4 | flaw | `s13e02c02.md:37` vs `:69`, `s13e01c02.md:33,161` | Reciter there *"by the first calm"* with three weeks of log | prose: *"by the next calm"* |
| 5 | flaw | `s13e02c02.md:119` vs `:69`, `s13e01c02.md:16,43` | Emma files *"a location the court chose"*; the keeper chose | prose: *"the keeper chose"* |
| 6 | flaw | `s14e01c02.md:186` vs `s14e01c01.md:69,107` | The small ones' game reverses its rule: wrong guess *"came off"* | prose: *"stayed on"* |
| 7 | flaw | `s12e01c02.md:122` vs `s11e01c03.md:80`, `s11e01c04.md:18` | *"since before Carried-It-Sleeping was named"*; the name is the cause | prose: delete *"before"* |
| 8 | flaw | `s12e01c05.md:16-17,78,130` vs `s11e01c02.md:94`, `s12e02c01.md:43` | The squeeze's narrowest part is *"a hand wide and nothing goes"*, yet it is the daily way through | prose and fm: *"above the narrow, where the crack closes to a hand wide"* |
| 9 | flaw | `s11e01c01.md:16,36` vs a dozen lines in S11, S12, S14 | The Told keep no day, but say *"tonight"*, *"every day"*, *"that night"* | prose: *"this telling"*, *"every telling"*; none if the translation convention allows them |
| 10 | flaw | `s11e01c01.md:19` vs `:72,134` | Canon_fact: one telling of the first warm seep; prose: twice | fm: add *"twice"* |
| 11 | flaw | `s13e01c01.md:19` vs `:99,129` | Canon_fact *"gone at the hall's turn"*; the hall is straight and it goes at the fourth door | fm: *"at the fourth door on the left"* |
| 12 | unsupported | `s11e01c03.md:62,100` vs `s11e01c01.md:70`, `s11e01c02.md:82` | Carried-It-Sleeping *"watched the up-people twice"*; the page shows once | prose: *"once"*; *"had heard it go, from the squeeze"* |

## Applied, 20 November 2026

His *"Yes, apply them"*. Four Fable editors applied the single repairs in one pass, each re-reading every item against the text as it stood after #2021 and #2024; Opus reviewed the whole diff and tidied three wordings. 44 rows applied, 7 already fixed by #2021, 2 skipped on an in-story reading the continuity-seams audit had already ruled (*Left*): the six Halvorsen revisits (S02–S04 row 5) and Carried-It-Sleeping's two watches (S11–S14 row 12). Departures from the table, each smaller or truer to the text:

- S00–S01 row 1: the spans went to *four days*, *the first night* and *two days*; the *third week* phrases at `s01e03c03.md:167` and `s01e03c06.md:89` stand as the survey's third week. Row 14's *two more* was dropped: #2021 had already made the officers three.
- S05–S10 row 1: the S10 wrong zero is now *a ground for refusal*, prose and canon_fact; row 9 uses *with the job down to its snagging list* and *dated that shift*, because the cutting was already certified when the line was written; row 13 judged from the picture (grey hair, reads late forties).
- S11–S14 row 9: twelve swaps, Told speech and deep-side narration only; two read *now* where *this telling* would have repeated *telling*. The record-voice canon_facts and other deep-side *day* idioms were left.

The five choices above are still his.

## Found clean

The Founding Era dates and ages; Galahad's 2806/2814/2826 arithmetic; the dock clocks and the grove timings; the S04E02 mass arithmetic; S03E03C02's 160 agreements and relay round trip; S02E11's loop counts; Season 6's 19/34/53-day chain; the S10 day chain; *fourteen centuries* (1216 AD = 1416 UCSD); the S14 shift arithmetic (211 / 164 / 16 + 148; 219 / 156); the S11 count of sixteen; the three Below the Roof convergences detail for detail; the Told's body and senses against the 17 November design; rank bars, names and pronouns throughout.
