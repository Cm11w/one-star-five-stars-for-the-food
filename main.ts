// One Star, Five Stars for the Food
//
// Writes one sentence to /output/entry.txt: a one-star review of Earth
// in the voice of an alien tourist, which still slips in a genuine
// compliment about the food. The sentence is fixed and deterministic,
// so every run writes exactly the same bytes.
//
// The joke turns on three alien grievances — gravity flattening the
// visitor's antennae, weather that changes its mind mid-sentence, and
// humans queuing for hours to eat — and then the turn: the noodles were
// worth the whole doomed voyage. Complaint and compliment both land in
// a single sentence, in a deadpan tourist-review voice.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "One star: your gravity flattened my antennae, your weather changed its mind mid-sentence, and your people queue for hours to eat noodles — which, honestly, were worth the whole doomed voyage.";

if (SENTENCE.trim() === "") {
  throw new Error("Sentence must not be only whitespace.");
}
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(
    `Sentence is ${SENTENCE.length} characters; the gate allows 1 to 200.`,
  );
}

mkdirSync("/output", { recursive: true });
// Write exactly the sentence, with no trailing newline: the file the
// judge reads is the sentence itself, nothing more.
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(SENTENCE);
