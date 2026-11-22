/** Base class for a single Advent of Code puzzle. */
export abstract class Puzzle {
  abstract readonly year: number;
  abstract readonly day: number;

  part1(input: string[]): string {
    return `lines: ${input.length}`;
  }

  part2(input: string[]): string {
    return `lines: ${input.length}`;
  }
}
