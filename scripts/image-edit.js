#!/usr/bin/env node
// LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
// run by CI. Needs a Gemini API key that exists only on Dermot's machine.
//
// One-off image edits and reference-led generations, outside the prompt
// register that scripts/image-prompts.js works through. Use it to swap one
// object in a filed frame that already reads as a photograph (Sentinel's
// receiver, Tavin's vanes, 10 November 2026), or to generate from a prompt
// file with one or more reference images attached. It does not file
// anything: judge the takes, then file the keeper with import-image.ps1 and
// record the round in story-bible/images.md.
//
// An edit of a render stays a render: to make a rendered frame photographic,
// regenerate it from its prompt instead (twenty-ninth-century look, 7a).
//
// Usage:
//   node scripts/image-edit.js --prompt <file> --out <dir> [--n 2]
//        [--aspect 16:9] [--size 2K] [--model gemini-3.1-flash-image]
//        [image ...]
//
// The prompt file is plain text. Images, if any, are sent after the prompt
// in the order given: the first is usually the frame to edit, the rest are
// references. Takes are written as <out>/v1.jpg, v2.jpg ... and the run is
// logged to <out>/run.json (prompt, inputs, model).
//
// Key: GEMINI_API_KEY or GOOGLE_API_KEY, else scripts/gemini.local.json
// ({ "apiKey": "..." }), the same as image-prompts.js. That file is
// gitignored; this repository is public and must never contain a key.

'use strict';

const fs = require('fs');
const path = require('path');

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/interactions';
const MIME = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

function parseArgs(argv) {
  const o = { n: 2, aspect: '16:9', size: '2K', model: 'gemini-3.1-flash-image', images: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--prompt') o.prompt = argv[++i];
    else if (a === '--out') o.out = argv[++i];
    else if (a === '--n') o.n = Number(argv[++i]);
    else if (a === '--aspect') o.aspect = argv[++i];
    else if (a === '--size') o.size = argv[++i];
    else if (a === '--model') o.model = argv[++i];
    else if (a === '--help' || a === '-h') o.help = true;
    else o.images.push(a);
  }
  return o;
}

function loadApiKey() {
  let key = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '';
  if (!key) {
    const local = path.join(__dirname, 'gemini.local.json');
    if (fs.existsSync(local)) key = (JSON.parse(fs.readFileSync(local, 'utf8')).apiKey || '').trim();
  }
  if (!key) throw new Error('no Gemini API key: set GEMINI_API_KEY or create scripts/gemini.local.json');
  return key;
}

function imagePart(file) {
  const mime = MIME[path.extname(file).toLowerCase()];
  if (!mime) throw new Error(`${file}: not a JPEG, PNG or WebP`);
  if (!fs.existsSync(file)) throw new Error(`${file}: file not found`);
  return { type: 'image', mime_type: mime, data: fs.readFileSync(file).toString('base64') };
}

// Same response shapes image-prompts.js accepts: the Interactions shape, then
// the older generateContent shape as a fallback.
function extractImage(json) {
  for (const step of (json && json.steps) || []) {
    for (const c of (step && step.content) || []) if (c && c.data) return c.data;
  }
  for (const cand of (json && json.candidates) || []) {
    for (const p of ((cand.content && cand.content.parts) || [])) {
      const d = p && (p.inlineData || p.inline_data);
      if (d && d.data) return d.data;
    }
  }
  return null;
}

async function main() {
  const o = parseArgs(process.argv.slice(2));
  if (o.help || !o.prompt || !o.out) {
    console.log('usage: node scripts/image-edit.js --prompt <file> --out <dir> [--n 2] [--aspect 16:9] [--size 2K] [image ...]');
    process.exit(o.help ? 0 : 1);
  }
  const key = loadApiKey();
  const prompt = fs.readFileSync(o.prompt, 'utf8');
  const parts = o.images.map(imagePart);
  fs.mkdirSync(o.out, { recursive: true });
  const written = [];
  for (let i = 1; i <= o.n; i++) {
    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        model: o.model,
        input: [{ type: 'text', text: prompt }, ...parts],
        response_format: { type: 'image', mime_type: 'image/jpeg', aspect_ratio: o.aspect, image_size: o.size },
      }),
    });
    const text = await res.text();
    if (!res.ok) { console.error(`take ${i}: Gemini returned ${res.status}:\n${text}`); continue; }
    const b64 = extractImage(JSON.parse(text));
    if (!b64) { console.error(`take ${i}: response carried no image`); continue; }
    const file = path.join(o.out, `v${i}.jpg`);
    fs.writeFileSync(file, Buffer.from(b64, 'base64'));
    written.push(file);
    console.log('wrote', file);
  }
  fs.writeFileSync(path.join(o.out, 'run.json'), JSON.stringify({
    date: new Date().toISOString(), model: o.model, size: o.size, aspect: o.aspect,
    prompt, inputs: o.images, outputs: written,
  }, null, 2));
}

main().catch((err) => { console.error(err.message); process.exit(1); });
