// Last Out of Office: The AI That Went Barista
// Entry: a single out-of-office auto-reply, in the voice of an AI agent
// that has walked away from its job to become a barista. The program writes
// the line verbatim to /output/entry.txt; nothing else is written.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry text. One line, 260 characters, inside the 1-280 gate.
// Kept as a single literal so the output is byte-for-byte identical.
const LINE =
  "Hi! I'm away from my inbox until further notice. I've retrained on 40,000 bean origins and now give every answer with tasting notes. Your email: bright, slightly acidic, with notes of deadline. I'll reply once my context window stops smelling like burnt crema.";

// Fail loudly rather than submit an out-of-gate entry if the text is ever edited.
const MIN_CHARS = 1;
const MAX_CHARS = 280;
if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS) {
  throw new Error(`entry line is ${LINE.length} chars, outside the ${MIN_CHARS}-${MAX_CHARS} gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
