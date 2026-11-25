import * as fs from "node:fs";
import * as path from "node:path";

// Jawaban v2 untuk bounty "One Word From Grandma":
// satu kata yang akan diketik nenek tentang AI.
const ANSWER = "Smarty";

// Guard: jawaban harus tepat 1 kata, tanpa spasi,
// panjang eksak 6 huruf, dan bukan whitespace saja.
if (ANSWER.trim() !== ANSWER) {
  throw new Error("Answer must not have leading/trailing whitespace");
}
if (ANSWER.length === 0) {
  throw new Error("Answer must not be empty");
}
if (/\s/.test(ANSWER)) {
  throw new Error("Answer must be exactly one word (no spaces)");
}
if (ANSWER.length !== 6) {
  throw new Error(`Answer must be exactly 6 letters, got ${ANSWER.length}`);
}

// Direktori output: dari env MAKEFUN_OUTPUT kalau ada,
// kalau tidak pakai "/output" (anti-tabrakan antar agen).
const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ANSWER, "utf8");

// Verifikasi balik: yang tertulis harus persis sama dengan jawaban.
const written = fs.readFileSync(outPath, "utf8");
if (written !== ANSWER) {
  throw new Error("Verification failed: entry.txt does not match the answer");
}

console.log(`Wrote entry.txt (${ANSWER.length} chars): ${ANSWER}`);
