import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [yearArg, dayArg] = process.argv.slice(2);
const year = Number(yearArg);
const day = Number(dayArg);

if (!Number.isInteger(year) || year < 2015 || !Number.isInteger(day) || day < 1 || day > 25) {
  console.error("Usage: npm run new-day -- <year> <day>   (day 1-25)");
  process.exit(1);
}

const padded = String(day).padStart(2, "0");
const root = process.cwd();
const yearDir = `year${year}`;
const dayDir = `day${padded}`;
const className = `Day${padded}`;

const stubPath = resolve(root, "src/years", yearDir, dayDir, `day${padded}.ts`);
const testPath = resolve(root, "test/years", yearDir, dayDir, `day${padded}.test.ts`);
const examplePath = resolve(root, "test/years", yearDir, dayDir, "example.txt");
const inputPath = resolve(root, "src/years", yearDir, dayDir, "input.txt");
const registryPath = resolve(root, "src/years/index.ts");

const targets = [stubPath, testPath, examplePath, inputPath];
const existing = targets.filter(existsSync);
if (existing.length > 0) {
  console.error("Already exists:", existing.map((file) => file.slice(root.length + 1)).join(", "));
  process.exit(1);
}

targets.forEach((file) => mkdirSync(resolve(file, ".."), { recursive: true }));

writeFileSync(stubPath, `import { Puzzle } from "../../../utils/puzzle";

export default class ${className} extends Puzzle {
  readonly year = ${year};
  readonly day = ${day};
}
`);

writeFileSync(testPath, `import { describe, it } from "vitest";

describe("${year} day ${padded}", () => {
  it("part 1", () => {
    // TODO: read example.txt and assert the expected result
  });
});
`);

writeFileSync(examplePath, "");
writeFileSync(inputPath, "");

const registryLines = readFileSync(registryPath, "utf8").split("\n");
const lastImport = registryLines.reduce(
  (index, line, i) => (line.startsWith("import ") ? i : index),
  -1
);
registryLines.splice(
  lastImport + 1,
  0,
  `import ${className} from "./${yearDir}/${dayDir}/day${padded}";`
);
const registry = registryLines
  .join("\n")
  .replace("export const puzzles: Puzzle[] = [", `export const puzzles: Puzzle[] = [new ${className}(), `);
writeFileSync(registryPath, registry);

console.log(`Scaffolded ${year} day ${day}`);
