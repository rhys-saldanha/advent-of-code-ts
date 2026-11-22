import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const pad = (day: number) => String(day).padStart(2, "0");

/** Reads a file into lines, ignoring a single trailing newline. */
export function lines(path: string): string[] {
  const text = readFileSync(path, "utf8");
  return text === "" ? [] : text.replace(/\r?\n$/, "").split(/\r?\n/);
}

/** Committed example.txt from a day's test folder. */
export function exampleInput(year: number, day: number): string[] {
  return lines(resolve(process.cwd(), "test", "years", `year${year}`, `day${pad(day)}`, "example.txt"));
}

/** Gitignored personal input.txt from a day's source folder. */
export function puzzleInput(year: number, day: number): string[] {
  return lines(resolve(process.cwd(), "src", "years", `year${year}`, `day${pad(day)}`, "input.txt"));
}
