import { describe, expect, it } from "vitest";
import { lines } from "../../src/utils/puzzleInput";

describe("puzzleInput", () => {
  it("reads a file into lines, keeping blank lines", () => {
    expect(lines(new URL("./example.txt", import.meta.url).pathname))
      .toEqual(["line 1", "line 2", "", "line 4"]);
  });
});
