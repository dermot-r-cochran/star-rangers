#!/usr/bin/env node
// LOCAL AUTHORING TOOL - not part of the build, not run by CI (its test is in
// npm test). No dependencies.
//
// Writes a provenance note into an image or clip as an XMP packet, so a
// generated or altered picture says so in the file itself (Dermot, 21 November
// 2026: "If metadata allows then all altered or generated images may be tagged
// as such, from now on", and "Likewise for videos"). Why and when:
// story-bible/images.md, Conventions, "Provenance in the file".
//
// Usage:
//   node scripts/tag-provenance.js <file...> --source <kind> [--note "..."]
//        [--tool "..."] [--no-rights]
//   node scripts/tag-provenance.js <file...> --read
//
// --source        IPTC DigitalSourceType (http://cv.iptc.org/newscodes/digitalsourcetype/<code>)
//   generated     trainedAlgorithmicMedia               made by a generative model
//   composite-ai  compositeWithTrainedAlgorithmicMedia  generated and other elements put together
//   edited-ai     compositeWithTrainedAlgorithmicMedia  his frame altered by a generative tool
//   composite     compositeSynthetic                    elements composited without a generator
//   card          digitalCreation                       a designed card, emblem or diagram
//
// What it writes: Iptc4xmpExt:DigitalSourceType, dc:description (the note),
// xmp:CreatorTool (--tool, else a generic line), and - for files under
// src/images/ (not icons/) or src/video/ - photoshop:Credit and dc:rights from
// CONTENT-LICENSE.md, which already licenses those folders. --no-rights omits
// them, and the one third-party image CONTENT-LICENSE.md names never gets them.
//
// Formats, and how each is written without touching the picture:
//   JPEG  an APP1 segment "http://ns.adobe.com/xap/1.0/" after SOI/APP0/Exif;
//         any existing XMP APP1 is replaced; every byte from the first
//         non-APP segment on (tables, SOS, scan data) is copied unchanged.
//   PNG   an iTXt chunk "XML:com.adobe.xmp" after IHDR; any existing one is
//         replaced; every other chunk is copied unchanged.
//   MP4   the XMP uuid box (BE7ACFCB-97A9-42E8-9C71-999491E3AFAC) appended at
//         the end of the file, after mdat, so no stco/co64 offset moves. An
//         existing XMP uuid box is truncated away if it is last, else turned
//         into a 'free' box of the same size.
//   Anything else is skipped with a notice.
//
// Re-encoding drops all of this: GDI+ and Pillow write fresh files, so tag
// after the last write (import-image.ps1 does).
//
// THE PROVENANCE LIST (src/_data/provenance.json, since 21 November 2026).
// Tagging a file under src/images/ or src/video/ also upserts its entry in the
// list (source, IPTC code, tool, note, tagged: true), so the list and the file
// say the same thing. Files filed before the ruling are in the list and not
// re-tagged (Dermot: "Add the list too"). --source photograph writes no XMP
// (his own frame takes no tag) and only records the entry; import-image.ps1
// uses it for -Provenance photograph and none. --record "..." sets the
// entry's pointer to its record; --no-list skips the list. Checked by
// scripts/check-provenance-list.js in npm test.
// --keep-listed (with --source photograph) leaves a file the list already
// holds under another source as it is. import-image.ps1 passes it when
// -Provenance was not given at -Finish 0, so re-filing a generated or edited
// picture unfinished never turns its entry into a photograph by default.

'use strict';

const fs = require('fs');
const path = require('path');

const CODES = {
  generated: 'trainedAlgorithmicMedia',
  'composite-ai': 'compositeWithTrainedAlgorithmicMedia',
  'edited-ai': 'compositeWithTrainedAlgorithmicMedia',
  composite: 'compositeSynthetic',
  card: 'digitalCreation',
};
const CODE_BASE = 'http://cv.iptc.org/newscodes/digitalsourcetype/';
const DEFAULT_NOTES = {
  generated: 'Generated for Fian Ilchruinne by a generative model; no camera recorded this scene.',
  'composite-ai': 'Composite for Fian Ilchruinne that includes generated elements.',
  'edited-ai': "Dermot R. Cochran's photograph, altered with a generative tool for Fian Ilchruinne.",
  composite: 'Composite for Fian Ilchruinne, made without a generative model.',
  card: 'Designed card for Fian Ilchruinne, made by script, not photographed.',
};
const DEFAULT_TOOL = 'Fian Ilchruinne image pipeline (dermot-r-cochran/star-rangers)';
const CREDIT = 'Dermot R. Cochran';
const RIGHTS = 'Fian Ilchruinne, Dermot R. Cochran. CC BY-NC-ND 4.0 with a fan-works exception, '
  + 'to the extent the author holds rights: '
  + 'https://github.com/dermot-r-cochran/star-rangers/blob/main/CONTENT-LICENSE.md';
// CONTENT-LICENSE.md: third-party media keep their own terms.
const THIRD_PARTY = new Set(['noogenic-seeding-system.jpg']);

const XMP_NS = Buffer.from('http://ns.adobe.com/xap/1.0/\0', 'latin1');
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const PNG_KEY = 'XML:com.adobe.xmp';
const MP4_XMP_UUID = Buffer.from('be7acfcb97a942e89c71999491e3afac', 'hex');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildXmp({ source, note, tool, rights }) {
  const code = CODES[source];
  if (!code) throw new Error(`unknown --source ${source}`);
  const alt = (v) => `<rdf:Alt><rdf:li xml:lang="x-default">${esc(v)}</rdf:li></rdf:Alt>`;
  const lines = [
    '<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>',
    '<x:xmpmeta xmlns:x="adobe:ns:meta/">',
    ' <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">',
    '  <rdf:Description rdf:about=""',
    '    xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/"',
    '    xmlns:dc="http://purl.org/dc/elements/1.1/"',
    '    xmlns:xmp="http://ns.adobe.com/xap/1.0/"',
    '    xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"',
    `    Iptc4xmpExt:DigitalSourceType="${CODE_BASE}${code}"`,
    `    xmp:CreatorTool="${esc(tool || DEFAULT_TOOL)}"`,
  ];
  if (rights) lines.push(`    photoshop:Credit="${esc(CREDIT)}"`);
  lines[lines.length - 1] += '>';
  lines.push(`   <dc:description>${alt(note || DEFAULT_NOTES[source])}</dc:description>`);
  if (rights) lines.push(`   <dc:rights>${alt(RIGHTS)}</dc:rights>`);
  lines.push('  </rdf:Description>', ' </rdf:RDF>', '</x:xmpmeta>', '<?xpacket end="w"?>');
  return Buffer.from(lines.join('\n'), 'utf8');
}

// ---- format detection -------------------------------------------------------

function kindOf(buf) {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpeg';
  if (buf.length >= 8 && buf.subarray(0, 8).equals(PNG_SIG)) return 'png';
  if (buf.length >= 12 && buf.toString('latin1', 4, 8) === 'ftyp') return 'mp4';
  return null;
}

// ---- JPEG -------------------------------------------------------------------

// The header segments: [{marker, start, end}] from SOI up to the first segment
// that is not APPn/COM. `body` is where the copied-unchanged part begins.
function jpegSegments(buf) {
  const segs = [];
  let p = 2;
  while (p + 4 <= buf.length && buf[p] === 0xff) {
    const marker = buf[p + 1];
    const isApp = marker >= 0xe0 && marker <= 0xef;
    if (!isApp && marker !== 0xfe) break;
    const len = buf.readUInt16BE(p + 2);
    if (len < 2 || p + 2 + len > buf.length) throw new Error('JPEG segment runs past the end of the file');
    segs.push({ marker, start: p, end: p + 2 + len });
    p += 2 + len;
  }
  return { segs, body: p };
}

function isXmpApp1(buf, s) {
  return s.marker === 0xe1 && buf.subarray(s.start + 4, s.start + 4 + XMP_NS.length).equals(XMP_NS);
}

function isExifApp1(buf, s) {
  return s.marker === 0xe1 && buf.toString('latin1', s.start + 4, s.start + 10) === 'Exif\0\0';
}

function tagJpeg(buf, xmp) {
  const { segs, body } = jpegSegments(buf);
  const payloadLen = XMP_NS.length + xmp.length;
  if (payloadLen + 2 > 0xffff) throw new Error('XMP packet too large for one JPEG segment');
  const seg = Buffer.alloc(4);
  seg[0] = 0xff; seg[1] = 0xe1; seg.writeUInt16BE(payloadLen + 2, 2);
  const newSeg = Buffer.concat([seg, XMP_NS, xmp]);
  const kept = segs.filter((s) => !isXmpApp1(buf, s));
  // After a leading JFIF APP0 and an Exif APP1, where readers expect XMP.
  let at = 0;
  while (at < kept.length && (kept[at].marker === 0xe0 || isExifApp1(buf, kept[at]))) at++;
  const parts = [buf.subarray(0, 2)];
  kept.forEach((s, i) => {
    if (i === at) parts.push(newSeg);
    parts.push(buf.subarray(s.start, s.end));
  });
  if (at === kept.length) parts.push(newSeg);
  parts.push(buf.subarray(body));
  return Buffer.concat(parts);
}

function readJpeg(buf) {
  const { segs } = jpegSegments(buf);
  const s = segs.find((x) => isXmpApp1(buf, x));
  return s ? buf.subarray(s.start + 4 + XMP_NS.length, s.end) : null;
}

// ---- PNG --------------------------------------------------------------------

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(b) {
  let c = 0xffffffff;
  for (let i = 0; i < b.length; i++) c = CRC_TABLE[(c ^ b[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunks(buf) {
  const chunks = [];
  let p = 8;
  while (p + 12 <= buf.length) {
    const len = buf.readUInt32BE(p);
    const type = buf.toString('latin1', p + 4, p + 8);
    const end = p + 12 + len;
    if (end > buf.length) throw new Error('PNG chunk runs past the end of the file');
    chunks.push({ type, start: p, data: buf.subarray(p + 8, p + 8 + len), end });
    p = end;
    if (type === 'IEND') break;
  }
  return chunks;
}

function isXmpItxt(c) {
  return c.type === 'iTXt' && c.data.toString('latin1', 0, PNG_KEY.length + 1) === `${PNG_KEY}\0`;
}

function tagPng(buf, xmp) {
  // keyword \0, compression flag 0, method 0, language "" \0, translated "" \0, text
  const data = Buffer.concat([Buffer.from(`${PNG_KEY}\0\0\0\0\0`, 'latin1'), xmp]);
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0); head.write('iTXt', 4, 'latin1');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), data])), 0);
  const chunk = Buffer.concat([head, data, crc]);
  const chunks = pngChunks(buf);
  if (!chunks.length || chunks[0].type !== 'IHDR') throw new Error('PNG does not start with IHDR');
  const parts = [PNG_SIG];
  chunks.forEach((c, i) => {
    if (isXmpItxt(c)) return;
    parts.push(buf.subarray(c.start, c.end));
    if (i === 0) parts.push(chunk);
  });
  const last = chunks[chunks.length - 1];
  parts.push(buf.subarray(last.end));
  return Buffer.concat(parts);
}

function readPng(buf) {
  const c = pngChunks(buf).find(isXmpItxt);
  if (!c) return null;
  // skip keyword\0, flag, method, language\0, translated\0
  let p = PNG_KEY.length + 3;
  p = c.data.indexOf(0, p) + 1;
  p = c.data.indexOf(0, p) + 1;
  if (c.data[PNG_KEY.length + 1] !== 0) return null; // compressed: not written by this tool
  return c.data.subarray(p);
}

// ---- MP4 / ISO BMFF -----------------------------------------------------------

function mp4Boxes(buf) {
  const boxes = [];
  let p = 0;
  while (p + 8 <= buf.length) {
    let size = buf.readUInt32BE(p);
    const type = buf.toString('latin1', p + 4, p + 8);
    let header = 8;
    if (size === 1) {
      if (p + 16 > buf.length) throw new Error('MP4 box header runs past the end of the file');
      size = Number(buf.readBigUInt64BE(p + 8));
      header = 16;
    } else if (size === 0) {
      size = buf.length - p;
      boxes.push({ type, start: p, header, end: buf.length, toEof: true });
      break;
    }
    if (size < header || p + size > buf.length) throw new Error(`MP4 box '${type}' runs past the end of the file`);
    boxes.push({ type, start: p, header, end: p + size });
    p += size;
  }
  if (p !== buf.length && !(boxes.length && boxes[boxes.length - 1].toEof)) {
    throw new Error('MP4 has trailing bytes that are not a box');
  }
  return boxes;
}

function isXmpUuid(buf, b) {
  return b.type === 'uuid' && buf.subarray(b.start + b.header, b.start + b.header + 16).equals(MP4_XMP_UUID);
}

function tagMp4(buf, xmp) {
  const boxes = mp4Boxes(buf);
  if (!boxes.length || boxes[0].type !== 'ftyp') throw new Error('MP4 does not start with ftyp');
  const lastBox = boxes[boxes.length - 1];
  if (lastBox.toEof) throw new Error('MP4 last box runs to end of file (size 0); not tagged');
  let out = Buffer.from(buf);
  // An old XMP box that is last is cut off; one elsewhere becomes 'free' in place.
  let cut = out.length;
  for (let i = boxes.length - 1; i >= 0; i--) {
    const b = boxes[i];
    if (!isXmpUuid(buf, b)) continue;
    if (b.end === cut) cut = b.start;
    else out.write('free', b.start + 4, 'latin1');
  }
  out = out.subarray(0, cut);
  const head = Buffer.alloc(8);
  head.writeUInt32BE(8 + 16 + xmp.length, 0);
  head.write('uuid', 4, 'latin1');
  return Buffer.concat([out, head, MP4_XMP_UUID, xmp]);
}

function readMp4(buf) {
  const b = mp4Boxes(buf).find((x) => isXmpUuid(buf, x));
  return b ? buf.subarray(b.start + b.header + 16, b.end) : null;
}

// ---- dispatch ---------------------------------------------------------------

const TAGGERS = { jpeg: tagJpeg, png: tagPng, mp4: tagMp4 };
const READERS = { jpeg: readJpeg, png: readPng, mp4: readMp4 };

function tagBuffer(buf, opts) {
  const kind = kindOf(buf);
  if (!kind) return null;
  return TAGGERS[kind](buf, buildXmp(opts));
}

function readXmp(buf) {
  const kind = kindOf(buf);
  if (!kind) return null;
  const x = READERS[kind](buf);
  return x ? x.toString('utf8') : null;
}

function summarise(xmp) {
  const attr = (n) => { const m = xmp.match(new RegExp(`${n}="([^"]*)"`)); return m ? m[1] : null; };
  const alt = (n) => { const m = xmp.match(new RegExp(`<${n}>\\s*<rdf:Alt>\\s*<rdf:li[^>]*>([\\s\\S]*?)</rdf:li>`)); return m ? m[1] : null; };
  const un = (s) => s && s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  return {
    DigitalSourceType: un(attr('Iptc4xmpExt:DigitalSourceType')),
    description: un(alt('dc:description')),
    CreatorTool: un(attr('xmp:CreatorTool')),
    Credit: un(attr('photoshop:Credit')),
    rights: un(alt('dc:rights')),
  };
}

// Rights only where CONTENT-LICENSE.md already licenses the folder.
function rightsApply(file) {
  const rel = path.resolve(file).split(path.sep).join('/');
  if (THIRD_PARTY.has(path.basename(file).toLowerCase())) return false;
  if (/\/src\/images\/icons\//.test(rel)) return false;
  return /\/src\/(images|video)\//.test(rel);
}

// ---- the provenance list ----------------------------------------------------

const REPO = path.join(__dirname, '..');
const LIST_PATH = path.join(REPO, 'src', '_data', 'provenance.json');
const LISTED_EXT = /\.(jpe?g|png|webp|svg|mp4)$/i;
// Every source the list knows, and its IPTC code where one applies.
const LIST_SOURCES = {
  photograph: 'digitalCapture',
  'edited-ai': CODES['edited-ai'],
  'composite-ai': CODES['composite-ai'],
  generated: CODES.generated,
  composite: CODES.composite,
  card: CODES.card,
  'third-party': null,
  unrecorded: null,
};

// The list's key for a file: its path from the repository root, if it lives
// under src/images/ or src/video/ with a listed extension; else null.
function listPathFor(file, repo = REPO) {
  const rel = path.relative(repo, path.resolve(file)).split(path.sep).join('/');
  return /^src\/(images|video)\//.test(rel) && LISTED_EXT.test(rel) ? rel : null;
}

function readList(listPath = LIST_PATH) {
  return JSON.parse(fs.readFileSync(listPath, 'utf8'));
}

// One entry per line, sorted by path, so a change is a one-line diff.
function serialiseList(list) {
  const entries = [...list.entries].sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
  const head = { ...list };
  delete head.entries;
  const headJson = JSON.stringify(head, null, 2);
  const body = entries.map((e) => `    ${JSON.stringify(e)}`).join(',\n');
  return `${headJson.slice(0, -2)},\n  "entries": [\n${body}\n  ]\n}\n`;
}

function writeList(list, listPath = LIST_PATH) {
  fs.writeFileSync(listPath, serialiseList(list));
}

// Inserts or updates one entry. Fields left undefined keep what the entry had.
function upsertEntry(list, rel, fields, today = new Date().toISOString().slice(0, 10)) {
  if (!(fields.source in LIST_SOURCES)) throw new Error(`unknown source ${fields.source}`);
  let e = list.entries.find((x) => x.path === rel);
  if (!e) { e = { path: rel }; list.entries.push(e); }
  for (const [k, v] of Object.entries(fields)) if (v !== undefined) e[k] = v;
  e.iptc = LIST_SOURCES[e.source];
  e.updated = today;
  return e;
}

// The repository a list belongs to is two folders above it (src/_data/).
function recordInList(file, fields, listPath = LIST_PATH) {
  const rel = listPathFor(file, path.resolve(path.dirname(listPath), '..', '..'));
  if (!rel || !fs.existsSync(listPath)) return null;
  const list = readList(listPath);
  const e = upsertEntry(list, rel, fields);
  writeList(list, listPath);
  return e;
}

// The entry the list holds for a file, or null.
function listedEntry(file, listPath = LIST_PATH) {
  const rel = listPathFor(file, path.resolve(path.dirname(listPath), '..', '..'));
  if (!rel || !fs.existsSync(listPath)) return null;
  return readList(listPath).entries.find((x) => x.path === rel) || null;
}

function parseArgs(argv) {
  const o = { files: [], rights: true, list: true };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--source') o.source = argv[++i];
    else if (a === '--note') o.note = argv[++i];
    else if (a === '--tool') o.tool = argv[++i];
    else if (a === '--record') o.record = argv[++i];
    else if (a === '--list') o.listPath = argv[++i];
    else if (a === '--read') o.read = true;
    else if (a === '--no-rights') o.rights = false;
    else if (a === '--no-list') o.list = false;
    else if (a === '--keep-listed') o.keepListed = true;
    else if (a === '--help' || a === '-h') o.help = true;
    else o.files.push(a);
  }
  return o;
}

function main(argv) {
  const o = parseArgs(argv);
  const usage = 'usage: node scripts/tag-provenance.js <file...> --source generated|composite-ai|edited-ai|composite|card [--note "..."] [--tool "..."] [--record "..."] [--no-rights] [--no-list]\n'
    + '       node scripts/tag-provenance.js <file...> --source photograph [--note "..."] [--record "..."] [--keep-listed]   (list only, no XMP)\n'
    + '       node scripts/tag-provenance.js <file...> --read';
  const listOnly = o.source === 'photograph';
  const listPath = o.listPath || LIST_PATH;
  if (o.help || !o.files.length || (!o.read && !listOnly && !CODES[o.source])) {
    console.log(usage);
    return o.help ? 0 : 1;
  }
  let failed = 0;
  for (const file of o.files) {
    try {
      const buf = fs.readFileSync(file);
      if (o.read) {
        const x = readXmp(buf);
        console.log(`${file}:`);
        if (!kindOf(buf)) console.log('  not a JPEG, PNG or MP4');
        else if (!x) console.log('  no XMP packet');
        else for (const [k, v] of Object.entries(summarise(x))) if (v) console.log(`  ${k}: ${v}`);
        continue;
      }
      if (listOnly) {
        const held = o.list && o.keepListed ? listedEntry(file, listPath) : null;
        if (held && held.source !== 'photograph') {
          console.log(`${file}: already listed as ${held.source}; entry kept, not changed to photograph. `
            + 'If this file is now his own frame, run again with --source photograph; if it was altered or generated, tag it with its own --source.');
          continue;
        }
        const e = o.list && recordInList(file, { source: 'photograph', tool: o.tool, note: o.note, record: o.record, tagged: false }, listPath);
        console.log(`${file}: photograph, no tag written${e ? '; listed in the provenance list' : ''}`);
        continue;
      }
      const out = tagBuffer(buf, { ...o, rights: o.rights && rightsApply(file) });
      if (!out) { console.log(`${file}: skipped (not a JPEG, PNG or MP4; no tag written)`); continue; }
      fs.writeFileSync(file, out);
      const e = o.list && recordInList(file, {
        source: o.source, tool: o.tool || DEFAULT_TOOL, note: o.note || DEFAULT_NOTES[o.source], record: o.record, tagged: true,
      }, listPath);
      console.log(`${file}: tagged ${o.source} (${CODES[o.source]})${e ? '; listed in the provenance list' : ''}`);
    } catch (err) {
      console.error(`${file}: ${err.message}`);
      failed++;
    }
  }
  return failed ? 1 : 0;
}

module.exports = {
  CODES, CODE_BASE, buildXmp, tagBuffer, readXmp, summarise, kindOf, jpegSegments, mp4Boxes, rightsApply,
  LIST_PATH, LIST_SOURCES, LISTED_EXT, listPathFor, readList, serialiseList, writeList, upsertEntry, recordInList, listedEntry,
};

if (require.main === module) process.exitCode = main(process.argv.slice(2));
