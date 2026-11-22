import { describe, expect, it } from "vitest";
import { exampleInput } from "../../../../src/utils/puzzleInput";
import Day01 from "../../../../src/years/year2022/day01/day01";

describe("2022 day 01", () => {
  const puzzle = new Day01();

  it("part 1 counts example lines", () => {
    expect(puzzle.part1(exampleInput(2022, 1))).toBe("lines: 14");
  });

  it("part 2 counts example lines", () => {
    expect(puzzle.part2(exampleInput(2022, 1))).toBe("lines: 14");
  });
});
