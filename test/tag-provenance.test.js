// Pins scripts/tag-provenance.js, the XMP writer behind "Provenance in the
// file" (story-bible/images.md, Conventions; Dermot, 21 November 2026). Its
// contract: the DigitalSourceType written is the one read back, and the
// picture or the media is byte-for-byte what it was - a tag never re-encodes.
// Fixtures are tiny: a 2x2 JPEG inline, hand-built PNG and MP4 buffers, and,
// where the repository has one, a copy of its smallest clip in a temp dir.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const os = require("os");
const path = require("path");

const tp = require("../scripts/tag-provenance");

const CODE = (c) => `http://cv.iptc.org/newscodes/digitalsourcetype/${c}`;

// A 2x2 baseline JPEG written by GDI+: SOI, APP0 JFIF, DQT x2, SOF0, DHT x4, SOS, scan.
const TINY_JPEG = Buffer.from(
  "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAACAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8rZ55LmaSaaRpZZGLvI7EszE5JJPUmiiis6fwL0OvF/7xU/xP8z//2Q==",
  "base64",
);

// Everything from the first non-APPn segment (DQT here) to EOI: the picture.
function jpegBody(buf) {
  return buf.subarray(tp.jpegSegments(buf).body);
}

test("JPEG: tags, reads back, and leaves every byte after the XMP segment unchanged", () => {
  const out = tp.tagBuffer(TINY_JPEG, { source: "generated", note: "test note" });
  const s = tp.summarise(tp.readXmp(out));
  assert.equal(s.DigitalSourceType, CODE("trainedAlgorithmicMedia"));
  assert.equal(s.description, "test note");
  assert.ok(jpegBody(out).equals(jpegBody(TINY_JPEG)), "picture bytes changed");
  // The XMP APP1 sits after APP0, and the APP0 is untouched.
  const { segs } = tp.jpegSegments(out);
  assert.deepEqual(segs.map((x) => x.marker), [0xe0, 0xe1]);
  assert.ok(out.subarray(0, segs[0].end).equals(TINY_JPEG.subarray(0, segs[0].end)));
});

test("JPEG: a second tag replaces the first rather than adding one", () => {
  const once = tp.tagBuffer(TINY_JPEG, { source: "generated" });
  const twice = tp.tagBuffer(once, { source: "edited-ai", note: "his frame & a <new> part" });
  const { segs } = tp.jpegSegments(twice);
  assert.equal(segs.filter((x) => x.marker === 0xe1).length, 1);
  const s = tp.summarise(tp.readXmp(twice));
  assert.equal(s.DigitalSourceType, CODE("compositeWithTrainedAlgorithmicMedia"));
  assert.equal(s.description, "his frame & a <new> part");
  assert.ok(jpegBody(twice).equals(jpegBody(TINY_JPEG)));
});

test("every --source maps to its IPTC code", () => {
  assert.deepEqual(tp.CODES, {
    generated: "trainedAlgorithmicMedia",
    "composite-ai": "compositeWithTrainedAlgorithmicMedia",
    "edited-ai": "compositeWithTrainedAlgorithmicMedia",
    composite: "compositeSynthetic",
    card: "digitalCreation",
  });
  assert.throws(() => tp.buildXmp({ source: "none" }));
});

test("rights only where CONTENT-LICENSE.md licenses the folder", () => {
  const root = path.resolve(__dirname, "..");
  assert.equal(tp.rightsApply(path.join(root, "src/images/lore/x.jpg")), true);
  assert.equal(tp.rightsApply(path.join(root, "src/video/x.mp4")), true);
  assert.equal(tp.rightsApply(path.join(root, "src/images/icons/x.png")), false);
  assert.equal(tp.rightsApply(path.join(root, "src/images/lore/noogenic-seeding-system.jpg")), false);
  assert.equal(tp.rightsApply(path.join(root, "image-out/x/v1.jpg")), false);
  const withRights = tp.summarise(tp.readXmp(tp.tagBuffer(TINY_JPEG, { source: "card", rights: true })));
  assert.equal(withRights.Credit, "Dermot R. Cochran");
  assert.match(withRights.rights, /CC BY-NC-ND 4\.0/);
  const without = tp.summarise(tp.readXmp(tp.tagBuffer(TINY_JPEG, { source: "card" })));
  assert.equal(without.Credit, null);
});

function pngChunk(type, data) {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, "latin1");
  return Buffer.concat([head, data, Buffer.alloc(4)]); // CRC not checked by the tagger
}

test("PNG: iTXt after IHDR, other chunks unchanged", () => {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = pngChunk("IHDR", Buffer.alloc(13));
  const idat = pngChunk("IDAT", Buffer.from("pixels"));
  const iend = pngChunk("IEND", Buffer.alloc(0));
  const png = Buffer.concat([sig, ihdr, idat, iend]);
  const out = tp.tagBuffer(tp.tagBuffer(png, { source: "generated" }), { source: "composite" });
  assert.equal(tp.summarise(tp.readXmp(out)).DigitalSourceType, CODE("compositeSynthetic"));
  assert.ok(out.subarray(0, 8 + ihdr.length).equals(png.subarray(0, 8 + ihdr.length)));
  assert.ok(out.subarray(out.length - idat.length - iend.length).equals(Buffer.concat([idat, iend])));
  assert.equal((out.toString("latin1").match(/iTXt/g) || []).length, 1);
});

function box(type, ...payload) {
  const body = Buffer.concat(payload.map((p) => (typeof p === "string" ? Buffer.from(p, "latin1") : p)));
  const head = Buffer.alloc(8);
  head.writeUInt32BE(8 + body.length, 0);
  head.write(type, 4, "latin1");
  return Buffer.concat([head, body]);
}

test("MP4: XMP uuid box appended after mdat, so no offset moves", () => {
  const ftyp = box("ftyp", "isom", Buffer.alloc(4), "isomiso2mp41");
  const stco = box("stco", Buffer.from([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0])); // one offset, filled below
  const moov = box("moov", box("trak", box("mdia", box("minf", box("stbl", stco)))));
  const mdat = box("mdat", "frame-bytes-here");
  const mp4 = Buffer.concat([ftyp, moov, mdat]);
  const out1 = tp.tagBuffer(mp4, { source: "generated", note: "clip" });
  const out = tp.tagBuffer(out1, { source: "generated", note: "clip, again" });
  assert.ok(out.subarray(0, mp4.length).equals(mp4), "media bytes moved");
  const types = tp.mp4Boxes(out).map((b) => b.type);
  assert.deepEqual(types, ["ftyp", "moov", "mdat", "uuid"]);
  const s = tp.summarise(tp.readXmp(out));
  assert.equal(s.DigitalSourceType, CODE("trainedAlgorithmicMedia"));
  assert.equal(s.description, "clip, again");
});

test("MP4: an earlier XMP box that is not last becomes 'free' in place", () => {
  const ftyp = box("ftyp", "isom", Buffer.alloc(4));
  const tagged = tp.tagBuffer(Buffer.concat([ftyp]), { source: "generated" });
  const mdat = box("mdat", "x");
  const mp4 = Buffer.concat([tagged, mdat]); // uuid sits before mdat
  const out = tp.tagBuffer(mp4, { source: "composite-ai" });
  assert.deepEqual(tp.mp4Boxes(out).map((b) => b.type), ["ftyp", "free", "mdat", "uuid"]);
  assert.equal(out.length - mp4.length > 0, true);
  assert.equal(tp.summarise(tp.readXmp(out)).DigitalSourceType, CODE("compositeWithTrainedAlgorithmicMedia"));
});

test("MP4: the smallest real clip, copied to a temp dir, keeps its media byte range", (t) => {
  const dir = path.resolve(__dirname, "../src/video");
  const clips = fs.existsSync(dir)
    ? fs.readdirSync(dir).filter((f) => f.endsWith(".mp4")).map((f) => path.join(dir, f))
    : [];
  if (!clips.length) return t.skip("no clip in src/video");
  clips.sort((a, b) => fs.statSync(a).size - fs.statSync(b).size);
  const src = fs.readFileSync(clips[0]);
  if (tp.kindOf(src) !== "mp4") return t.skip("smallest clip is not ISO BMFF");
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "tag-provenance-"));
  const copy = path.join(tmp, "clip.mp4");
  fs.writeFileSync(copy, src);
  const before = fs.readFileSync(copy);
  const boxesBefore = tp.mp4Boxes(before).filter((b) => !(b.type === "uuid"));
  fs.writeFileSync(copy, tp.tagBuffer(before, { source: "generated" }));
  const after = fs.readFileSync(copy);
  const boxesAfter = tp.mp4Boxes(after);
  for (const b of boxesBefore) {
    if (b.type === "mdat" || b.type === "moov") {
      const same = boxesAfter.find((x) => x.type === b.type && x.start === b.start && x.end === b.end);
      assert.ok(same, `${b.type} moved`);
      assert.ok(after.subarray(b.start, b.end).equals(before.subarray(b.start, b.end)), `${b.type} changed`);
    }
  }
  assert.equal(tp.summarise(tp.readXmp(after)).DigitalSourceType, CODE("trainedAlgorithmicMedia"));
  fs.rmSync(tmp, { recursive: true, force: true });
});

test("other formats are skipped, not written", () => {
  assert.equal(tp.tagBuffer(Buffer.from("GIF89a...."), { source: "generated" }), null);
});
