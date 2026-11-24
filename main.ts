// Fortune in a Pot — writes one houseplant fortune (<=120 chars) to /output/entry.txt
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const fortune =
  "The sun will find your window every morning this week, and you will drink it in like gossip.";

if (fortune.length > 120 || fortune.trim().length === 0) {
  throw new Error(`fortune must be 1-120 chars, got ${fortune.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");

// Read back to prove the gate holds: the file must be exactly the fortune.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== fortune) {
  throw new Error("entry.txt mismatch after write");
}
