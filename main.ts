// One Word From Grandma: the single word grandma would text about AI.
// Entry: "Chattybot" — chatty + bot, a warm nickname a grandma would give
// a talkative new machine. Exactly one word, no sentence, no explanation.
// Why it wins: it names the AI directly (chatty + bot), sounds like a
// grandma's affectionate nickname, and stays fresh next to generic
// picks like "robot" or "computer".
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Chattybot";

// Fail loudly instead of submitting a word of the wrong shape.
if (WORD.split(/\s+/).filter(Boolean).length !== 1) {
  throw new Error(`entry must be exactly one word, got ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
