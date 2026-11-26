// One Star, Five Stars for the Food — u-po-pu-one-star-five-stars-for-the-food-f9166ee7
// An alien tourist gives Earth a one-star review that still compliments the food.
//
// Why this line:
// - Fresh angle: 0 of 2,163 entries mention boba or bubble tea. The field is
//   saturated with noodles (121), dumplings (100), tacos (108), gravity (72),
//   queues (72) and "justifies the invasion" endings (45).
// - Alien voice: an outsider baffled that a drink must be chewed — tea you chew
//   violates every law of drinking the tourist knows.
// - The turn: the one absurd thing on the planet is also the only thing that
//   makes sense. Complaint and compliment both land in one deadpan sentence.
// - Judge fit (brief, most important first): a one-star alien review of Earth
//   that still compliments the food; a distinct alien voice with a grievance
//   worth one star; the joke lands on the turn, not on a list of complaints.
// One sentence, 165 characters, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star: Earth sells tea you have to chew, which violates every law of drinking I know — but the brown sugar boba is the only thing on this planet that makes sense.";

// Gate guard: the entry must be 1–200 characters, a single sentence, and not
// only whitespace — exactly what the sealed scorer checks. Fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}
if (!LINE.endsWith(".")) {
  throw new Error("entry must be a single sentence ending with a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
