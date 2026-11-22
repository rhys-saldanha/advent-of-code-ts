# Advent of Code (TypeScript)

Advent of Code solutions in TypeScript, structured like the [Java sibling repo](https://github.com/rhys-saldanha/advent-of-code-java).

## Layout

```
src/
  main.ts                              CLI entry point
  utils/
    puzzle.ts                          Puzzle base class (defaults count lines)
    puzzleInput.ts                     reads example.txt / input.txt into string[]
    puzzleRunner.ts                    lists or runs puzzles from CLI args
  years/
    index.ts                           puzzle registry
    year2022/day01/day01.ts            empty implementation stub
    year2022/day01/input.txt           gitignored personal input
test/
  utils/                               tests + fixture for shared utilities
  years/year2022/day01/
    day01.test.ts                      test for the day
    example.txt                        example input from the puzzle page
scripts/
  new-day.mjs                          scaffolding script
```

`src/years` holds one folder per year and per day; `test/` mirrors it. Every day has
two text files: **example.txt** is the sample from the puzzle (committed, used by
tests) and **input.txt** is your personal input (gitignored, paste it in).

## Commands

```bash
npm install
npm test                 # run all tests
npm run build            # type-check
npm run run              # list registered puzzles
npm run run -- 2022 1    # run both parts of a day
npm run run -- 2022 1 2  # run one part
```

## Add a new day

```bash
npm run new-day -- 2022 2
```

This creates the stub, test, example.txt, empty input.txt and registers the puzzle.
It refuses to overwrite an existing day.
