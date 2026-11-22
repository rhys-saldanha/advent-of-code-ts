import { puzzles } from "../years";
import { puzzleInput } from "./puzzleInput";

export function run(args: string[]): void {
  const [yearArg, dayArg, partArg] = args;

  if (!yearArg || !dayArg) {
    puzzles.forEach((puzzle) =>
      console.log(`Available: ${puzzle.year} day ${String(puzzle.day).padStart(2, "0")}`));
    return;
  }

  const year = Number(yearArg);
  const day = Number(dayArg);
  const part = partArg ? Number(partArg) : 0;
  const puzzle = puzzles.find((candidate) => candidate.year === year && candidate.day === day);

  if (!puzzle) {
    throw new Error(`No puzzle registered for ${year} day ${day}`);
  }

  const input = puzzleInput(year, day);
  if (part === 0 || part === 1) console.log(`Part 1: ${puzzle.part1(input)}`);
  if (part === 0 || part === 2) console.log(`Part 2: ${puzzle.part2(input)}`);
}
