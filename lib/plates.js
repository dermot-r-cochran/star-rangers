// THE PLATES - a gallery of selected images, one selection per edition.
//
// Dermot, 2026-11-07, after the image-search work: "whether the star rangers
// sites need a gallery of selected images similar to the plates in Tissadelle
// Shepherd photography", and then "selected images could be different for
// each edition depending on the theme"; built at his "Yes, build it".
//
// WHY A SEPARATE REGISTRY AND NOT A FIELD ON THE EDITION. An edition record
// is merged over DEFAULT_EDITION (lib/editions.js, editionFor), so a `plates`
// list on the default would be inherited by every edition that set none, and
// the canonical site's general selection would turn up on the children's
// domain. Keyed by edition id here, with no fallback, an edition with no list
// simply has no Plates page and no nav link.
//
// WHAT A PLATE IS. The URL of a page this site already publishes (a lore,
// character or codex page, written as Eleventy's page.url, without the
// /star-rangers prefix). The image and its alt text come from that page's own
// front matter (`image`, `image_alt`), never a second copy here, so a
// re-filed portrait or a corrected alt reaches the Plates page by itself. A
// plate may name an `image` (a path under src/images/) and `alt` of its own
// only for a picture that sits in a page's body rather than its header.
//
// THE RULES (scripts/check-plates.js, in npm test, per edition):
//   - every plate's page exists and has an image, and the edition carries it
//     (the same inclusion test a deploy of that edition applies), so no plate
//     links a reader to a "Not included in this edition" placeholder;
//   - no page twice, and at most MAX_PLATES, because a selection is a choice;
//   - a list is keyed by a real edition id.
// At build time the template also drops any plate whose page this build does
// not carry, so a narrowed local build degrades quietly rather than breaking.
//
// Choosing is taste and is Dermot's: Fable proposes a selection per edition
// against its theme, he approves it from a contact sheet, and only then does a
// list land here. Best in group and distinctive over conventional (his gallery
// rule); a ship's picture follows its starship-design sheet.

const MAX_PLATES = 24;

// Keyed by edition id (lib/editions.js). Each list approved by Dermot from
// its contact sheet, 2026-11-07 ("Yes, land them"), as Fable proposed it;
// the comment on each plate is the reason it was chosen. fellowship-archive
// carries only four pictures and has no selection, so no Plates page.
const PLATES = {
  default: [
    { page: "/lore/planets/drithane/" }, // The crossing night over the valley: the record's own image, and nothing else on the site looks like it.
    { page: "/lore/eden-ring-rail/" }, // Eden from inside, the land rising along the ring: the habitat most of the story lives in.
    { page: "/lore/greenward-habitat/" }, // A plain ring turning over a world, derived not styled (sheet D).
    { page: "/lore/kalypsis-dawn/" }, // The Lee-class ship against ordinary stars, from its blueprint (sheet B).
    { page: "/lore/the-generation-ark-era/" }, // A Currach-era ark alone and small: the odds of the crossing in one frame (sheet A).
    { page: "/characters/petra-voss/" }, // Earth through a habitat window, with the Governor: the task force's view of home.
    { page: "/characters/zara-wayland/" }, // Inside Eden's structure from an upper walkway: the scale of the place.
    { page: "/characters/tissadelle-shepherd/" }, // The central viewpoint, at work rather than posed.
    { page: "/characters/sorcha-nic-dhiarmada/" }, // A small figure and a dog on a hill track under the stars: the quiet register.
    { page: "/characters/orla-shepherd/" }, // Tir na nOg's upland pasture, the drone lights the one hint of the century.
    { page: "/lore/cairn-trust/" }, // His own frame: a cairn at dawn above receding ranges.
    { page: "/lore/planets/kingdom-of-the-five-islands/" }, // His own frame: the palm avenue on Vellamar.
    { page: "/lore/planets/trigrian/" }, // His own lioness under three descending suns: photo-first at its best.
    { page: "/lore/planets/corryn/" }, // A ringed giant low over coiled fronds: a sky nobody has stood under.
    { page: "/lore/planets/fliade/" }, // The fungus-lit cavern under the frozen roof.
    { page: "/characters/stone-first/" }, // One of the Told at the lip of the deep: a people seen from behind, not posed.
    { page: "/characters/akkit/" }, // A Chthonari in its own sandy chamber: a body that is its own, not an Earth animal.
    { page: "/characters/suvra-kel/" }, // An Ilveth on night watch on a frozen plain.
    { page: "/characters/isserith/" }, // A Prismeri hanging head-down at the ledge: the record's fliers.
    { page: "/characters/ilyare/" }, // An Ollune adrift in cloud: a body carried by the air.
    { page: "/characters/isren-farrowkin/" }, // A Verdani delegate as living leaf against the glazing.
    { page: "/characters/rook-7/" }, // A made mind with a body, plainly made with care.
    { page: "/characters/agent-barsik/" }, // A Smart Pet where the paperwork is: the children's thread on the main wall.
    { page: "/lore/where-the-weather-stops/" }, // Snow past a cave mouth from inside: a place, not a person, to close on.
  ],
  sciencefiction: [
    { page: "/lore/planets/drithane/" }, // The crossing night: the record's own image first.
    { page: "/lore/eden-ring-rail/" }, // Eden from inside, where the story lives.
    { page: "/characters/petra-voss/" }, // Earth through a habitat window: home seen from the task force.
    { page: "/characters/zara-wayland/" }, // Eden's structure from a walkway: the scale of the habitat.
    { page: "/characters/tissadelle-shepherd/" }, // The central viewpoint at work.
    { page: "/characters/galahad-thorne/" }, // A Ranger at a survey instrument on a shore: the work, not a portrait.
    { page: "/characters/syra/" }, // A face in a bare dark room: the arc's other register.
    { page: "/characters/sorcha-nic-dhiarmada/" }, // A hill track under the stars: Drithane's quiet.
    { page: "/characters/orla-shepherd/" }, // Tir na nOg's pasture with its one quiet hint of the century.
    { page: "/lore/cairn-trust/" }, // His own frame: a cairn at dawn.
    { page: "/lore/planets/kingdom-of-the-five-islands/" }, // His own frame: the palm avenue on Vellamar.
    { page: "/lore/planets/aethelrock/" }, // A glacier-cut glen under low cloud: the Celtic worlds' ground.
    { page: "/lore/planets/fliade/" }, // The fungus-lit cavern under the frozen roof.
    { page: "/characters/stone-first/" }, // One of the Told at the lip of the deep.
    { page: "/characters/kattik/" }, // A Chthonari standing on the deck: the small peoples of the service.
    { page: "/characters/sohrel/" }, // A Cerebraun at a bare desk: a mind in a body the generator did not invent.
    { page: "/characters/rook-7/" }, // A made mind with a body, made with care.
    { page: "/characters/jeeves/" }, // A domestic frame with round lenses that make no attempt to be eyes.
    { page: "/characters/alala/" }, // A raven on a handrail: the animals of the record, not cute.
    { page: "/characters/agent-barsik/" }, // A Smart Pet in an Eden room.
    { page: "/characters/eden-warden/" }, // The terraces as the Warden keeps them: a mind shown by its place.
    { page: "/lore/hyperfold-yield-combine/" }, // An open truss platform in space, from its sheet (C): industry without a lit flank.
    { page: "/lore/star-rangers-navigation-corps/" }, // A plain buoy tumbling unlit against stars: the Navigation Corps' real work.
    { page: "/lore/planets/sentinel/" }, // An airless plain with a receiver listening to the ground.
  ],
  fellowship: [
    { page: "/characters/peran-slade/" }, // A lantern at the chapter-house door at dusk: the vigil, first.
    { page: "/characters/asteria-the-sage/" }, // Asteria in her hundreds at the hermitage: the order's elder.
    { page: "/characters/brother-fintan/" }, // Among the hives: the kept custom.
    { page: "/characters/ione-marrec/" }, // A sister at the back of an empty hall.
    { page: "/lore/arilon/" }, // Robed silhouettes at different scales: the filing no tradition owns.
    { page: "/lore/cnoc-na-mbeach/" }, // His own frame: a granite window onto green ground.
    { page: "/lore/communion-of-the-called/" }, // Mismatched chairs in a circle after a gathering.
    { page: "/lore/resurrection-and-the-life/" }, // A burial ground at first light with an open gateway.
    { page: "/lore/saint-aoife/" }, // A niche in a ship's corridor with blossom in it: devotion in the century's idiom.
    { page: "/lore/what-nobody-certifies/" }, // Five niches, four discs and one empty: the uncertified thing.
    { page: "/lore/things-that-are-made/" }, // Terraces repeating into haze with one person for scale.
    { page: "/lore/cairn-trust/" }, // His own frame: a cairn on a summit at dawn.
    { page: "/lore/planets/drithane/" }, // The crossing night: the boundary made visible.
    { page: "/characters/ilsabet-marrowtide/" }, // Composed in a stone passage in habit and wimple.
    { page: "/characters/oriel-fenwick/" }, // A girl at a copying desk in a scriptorium.
    { page: "/lore/dryadic-trees/" }, // Cup lichen along a split edge: the small living thing at the anchor point.
    { page: "/lore/who-governs-a-universe/" }, // Nested spheres drawn in gold: the Fellowship's cosmology as a diagram.
    { page: "/lore/ask-and-it-will-be-reviewed/" }, // An empty waiting room with a coat left on the bench.
    { page: "/characters/sorcha-nic-dhiarmada/" }, // A hill track under the stars.
    { page: "/lore/the-oversight-council/" }, // His own frame: galleries stepping up round a curve of light.
  ],
  "church-space": [
    { page: "/lore/communion-of-the-called/" }, // The circle of mismatched chairs: the Communion's whole qualification is showing up.
    { page: "/characters/brother-fintan/" }, // Among the hives at Cnoc na mBeach.
    { page: "/lore/cnoc-na-mbeach/" }, // His own frame: the granite window.
    { page: "/lore/saint-aoife/" }, // Blossom in a corridor niche: devotion aboard.
    { page: "/lore/resurrection-and-the-life/" }, // A burial ground at first light.
    { page: "/lore/ask-and-it-will-be-reviewed/" }, // The waiting room with the coat left behind.
    { page: "/lore/what-nobody-certifies/" }, // Four discs and one empty niche.
    { page: "/lore/what-the-record-refuses/" }, // A sealed store with nothing labelled.
    { page: "/lore/formation-of-star-rangers/" }, // The long table set with cups: the founding as a meal.
    { page: "/lore/star-rangers-proverbs-and-maxims/" }, // A scarred lecture bench with a shut cloth book.
    { page: "/characters/galen/" }, // Catherine Galen at a tall window: a Ranger on her own time.
    { page: "/characters/ilsabet-marrowtide/" }, // Composed in a stone passage.
    { page: "/characters/oriel-fenwick/" }, // At a copying desk in the scriptorium.
    { page: "/characters/elvira/" }, // Crouched on a chalk floor setting a weight: attention as a practice.
    { page: "/characters/sohrel/" }, // A Cerebraun at a bare desk: the Communion is not only human.
    { page: "/lore/planets/tir-na-nog/" }, // His own frame: a waterbird preening on a log.
    { page: "/lore/planets/aethelrock/" }, // A glen under low cloud.
    { page: "/lore/planets/drithane/" }, // The crossing night.
    { page: "/lore/cairn-trust/" }, // His own frame: the cairn at dawn.
    { page: "/lore/the-oversight-council/" }, // His own frame: the galleries round the light.
  ],
  starquest: [
    { page: "/characters/petra-voss/" }, // Earth through the window with the Governor: the stakes, first.
    { page: "/characters/kai-larsen/" }, // The Commander above the terraces.
    { page: "/characters/wendell-albercombe/" }, // The Inspector in Eden's corridor.
    { page: "/characters/dorian-calloway/" }, // The Chief Commissioner at the long table.
    { page: "/characters/jeeves/" }, // The domestic frame with round lenses: the fifth of the hero cast.
    { page: "/characters/zara-wayland/" }, // Eden's structure from the walkway.
    { page: "/characters/rasa-oyelaran/" }, // The Superintendent in a doorway.
    { page: "/characters/marisol-achebe/" }, // A detective in the bureau jacket.
    { page: "/characters/priya-nakamura/" }, // A detective at the specimen trays: the work.
    { page: "/characters/rosalind-vey/" }, // A dim corridor in tactical kit: the task force's other mood.
    { page: "/characters/lucene-9000/" }, // A woman whose only tell is perfection.
    { page: "/characters/iklix-varn/" }, // A Deputy reading a notice: the bottom rung.
    { page: "/characters/alala/" }, // A raven on a handrail.
    { page: "/characters/kattik/" }, // A Chthonari on the deck.
    { page: "/characters/tekka/" }, // A second Chthonari, in a different place.
    { page: "/characters/eden-warden/" }, // The terraces as the Warden keeps them.
    { page: "/characters/agent-barsik/" }, // The Smart Pet on the desk.
    { page: "/characters/aldera/" }, // The tabby with the implant.
    { page: "/characters/muffin/" }, // A vent and a doorway: a character shown by absence.
    { page: "/lore/predatory-entities/" }, // A kept compartment with its door open onto an empty corridor.
  ],
  "young-star-rangers": [
    { page: "/characters/iklix-varn/" }, // Deputy Iklix Varn on the first posting: the edition's hero, first.
    { page: "/characters/zoe-smith/" }, // The Field Officer who has seen it all before.
    { page: "/characters/noah-adeyemi/" }, // A young man outside a closed door: the first watch.
    { page: "/characters/sile-ni-bhriain/" }, // A granite-walled schoolroom.
    { page: "/lore/formation-of-star-rangers/" }, // The founding as a table set for a meal.
    { page: "/lore/star-rangers-proverbs-and-maxims/" }, // The scarred lecture bench.
    { page: "/characters/kattik/" }, // A Chthonari on the deck.
    { page: "/characters/tekka/" }, // A second Chthonari.
    { page: "/characters/tikket/" }, // The third, pressed close: the set the service names.
    { page: "/characters/alala/" }, // A raven on a handrail.
    { page: "/characters/petra-voss/" }, // Earth through the window.
    { page: "/characters/kai-larsen/" }, // The Commander above the terraces.
    { page: "/characters/dorian-calloway/" }, // The Chief Commissioner at the long table.
    { page: "/characters/jeeves/" }, // The domestic frame.
    { page: "/characters/eden-warden/" }, // Eden's terraces.
    { page: "/characters/zara-wayland/" }, // Eden's structure from the walkway.
    { page: "/characters/wendell-albercombe/" }, // The Inspector in the corridor.
    { page: "/characters/marisol-achebe/" }, // A detective in the bureau jacket.
    { page: "/characters/priya-nakamura/" }, // A detective at the specimen trays.
    { page: "/characters/muffin/" }, // A vent and a lit doorway.
    { page: "/characters/thrum/" }, // A small animal pressed flat on a plate.
    { page: "/characters/agent-barsik/" }, // The Smart Pet on the desk.
  ],
  pets: [
    { page: "/characters/eden-warden/" }, // Eden's gardens and orchards climbing the curve: where the Agency lives, first.
    { page: "/characters/agent-barsik/" }, // Agent Barsik on the desk, reading it first.
    { page: "/characters/bubochka/" }, // Bubochka in a mug of marshmallows.
    { page: "/characters/knopka/" }, // Knopka upright on the apartment floor.
    { page: "/characters/zhulik/" }, // Zhulik on top of the cabinet.
    { page: "/characters/aldera/" }, // Aldera, the tabby with the silver implant.
    { page: "/characters/nessa/" }, // Nessa on the tideline rock: the wild one.
    { page: "/characters/bumble/" }, // A bumblebee on a scabious head, from below.
    { page: "/characters/thrum/" }, // Thrum pressed flat on a plate.
    { page: "/characters/muffin/" }, // A vent and a lit doorway: Muffin is in there somewhere.
    { page: "/characters/lev/" }, // Lev with the pet carrier in the corridor.
    { page: "/characters/tomas-brennock/" }, // A seedling held up on the planting terrace.
    { page: "/characters/kate-ukrainka/" }, // Tea at a small table with the habitat in the window.
    { page: "/characters/jeeves/" }, // Jeeves in the kitchen.
    { page: "/characters/zara-wayland/" }, // The whole of Eden from a walkway.
    { page: "/characters/sorcha-nic-dhiarmada/" }, // A hill track at night with a dog.
    { page: "/characters/wendell-albercombe/" }, // The Inspector in the corridor.
    { page: "/characters/marisol-achebe/" }, // Detective Achebe.
    { page: "/characters/priya-nakamura/" }, // Detective Nakamura at the trays.
    { page: "/characters/rasa-oyelaran/" }, // The Superintendent in the doorway.
  ],
  "the-told": [
    { page: "/lore/planets/fliade/" }, // Under the frozen roof, the fungus-lit cavern: the whole world of the story, first.
    { page: "/characters/stone-first/" }, // Stone-First at the lip where the cavern drops away.
    { page: "/characters/went-round/" }, // Went-Round lit from behind by the fungus.
    { page: "/characters/teddy/" }, // Teddy half-crouched in the passage.
    { page: "/characters/keeps-a-hand-on-it/" }, // The youngest, a hand on one sleeping stone.
    { page: "/characters/aravena/" }, // A surveyor in the cavern: one of the strangers who never look up.
    { page: "/characters/nakagawa/" }, // Nakagawa standing still in the passage.
    { page: "/characters/odile-ferrant/" }, // Odile at the sealed post on the surface.
    { page: "/characters/agent-barsik/" }, // Agent Barsik: the other thread this edition carries.
    { page: "/characters/bubochka/" }, // Bubochka in the mug.
    { page: "/characters/knopka/" }, // Knopka on the floor.
    { page: "/characters/zhulik/" }, // Zhulik on the cabinet.
    { page: "/characters/eden-warden/" }, // Eden's gardens under the curve.
    { page: "/characters/thrum/" }, // Thrum pressed flat.
    { page: "/characters/lev/" }, // Lev with the carrier.
    { page: "/characters/bumble/" }, // A bee on a flower head.
    { page: "/characters/kate-ukrainka/" }, // Tea at a small table with the habitat in the window.
  ],
};

function platesFor(editionId) {
  return PLATES[String(editionId || "").trim().toLowerCase()] || [];
}

const IMAGE_DIRS = { characters: "characters", lore: "lore", codex: "codex" };

/**
 * Resolve an edition's plates against the pages this build carries.
 *
 * @param {Array<{page: string, image?: string, alt?: string}>} plates
 * @param {Object<string, Array>} collections - { lore, characters, codex }, each
 *   an Eleventy collection (already narrowed to the edition on a narrowed build)
 * @param {(relPath: string) => boolean} [isPlaceholder] - true for a placeholder portrait
 * @returns {Array<{title: string, url: string, src: string, alt: string}>}
 */
function resolvePlates(plates, collections, isPlaceholder = () => false) {
  const byUrl = new Map();
  for (const [kind, items] of Object.entries(collections || {})) {
    for (const item of items || []) byUrl.set(item.url, { kind, item });
  }
  const out = [];
  for (const plate of plates || []) {
    const hit = byUrl.get(plate.page);
    if (!hit) continue;
    const data = hit.item.data || {};
    const rel = plate.image || (data.image ? `${IMAGE_DIRS[hit.kind]}/${data.image}` : null);
    if (!rel || isPlaceholder(rel)) continue;
    out.push({
      title: data.title,
      url: `/star-rangers${plate.page}`,
      src: `/star-rangers/images/${rel}`,
      alt: plate.alt || data.image_alt || data.title
    });
  }
  return out;
}

module.exports = { MAX_PLATES, PLATES, platesFor, resolvePlates };
