"use strict";

// Reads an MP4's duration from its movie header (moov > mvhd), so a watch
// page's VideoObject can state it without ffprobe, which neither CI nor the
// cPanel hosts have. Only the box headers are read, never the media data, so
// a six-minute film costs a few small reads. Returns undefined when the file
// is missing or the header cannot be found; the caller then omits the field
// rather than guessing it.

const fs = require("fs");

function readBoxHeader(fd, offset) {
  const head = Buffer.alloc(16);
  const n = fs.readSync(fd, head, 0, 16, offset);
  if (n < 8) return null;
  let size = head.readUInt32BE(0);
  const type = head.toString("latin1", 4, 8);
  let headerSize = 8;
  if (size === 1) {
    if (n < 16) return null;
    size = Number(head.readBigUInt64BE(8));
    headerSize = 16;
  }
  return { size, type, headerSize };
}

function findBox(fd, start, end, type) {
  let offset = start;
  while (offset + 8 <= end) {
    const box = readBoxHeader(fd, offset);
    if (!box) return null;
    const size = box.size === 0 ? end - offset : box.size;
    if (size < box.headerSize) return null;
    if (box.type === type) return { offset, size, headerSize: box.headerSize };
    offset += size;
  }
  return null;
}

function mp4DurationSeconds(file) {
  let fd;
  try {
    fd = fs.openSync(file, "r");
    const end = fs.fstatSync(fd).size;
    const moov = findBox(fd, 0, end, "moov");
    if (!moov) return undefined;
    const mvhd = findBox(fd, moov.offset + moov.headerSize, moov.offset + moov.size, "mvhd");
    if (!mvhd) return undefined;
    const body = Buffer.alloc(32);
    fs.readSync(fd, body, 0, 32, mvhd.offset + mvhd.headerSize);
    const version = body.readUInt8(0);
    const timescale = version === 1 ? body.readUInt32BE(20) : body.readUInt32BE(12);
    const duration = version === 1 ? Number(body.readBigUInt64BE(24)) : body.readUInt32BE(16);
    if (!timescale) return undefined;
    return duration / timescale;
  } catch (err) {
    return undefined;
  } finally {
    if (fd !== undefined) fs.closeSync(fd);
  }
}

// ISO 8601 duration as schema.org's VideoObject wants it: PT4M32S.
function isoDuration(seconds) {
  if (seconds === undefined || !isFinite(seconds)) return undefined;
  const total = Math.round(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `PT${m ? `${m}M` : ""}${s}S`;
}

module.exports = { mp4DurationSeconds, isoDuration };
