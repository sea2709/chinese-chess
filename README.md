# chinese-chess

TypeScript scaffold with Vitest, strict type checking, and a small [Commander](https://github.com/tj/commander.js) CLI.

## Requirements

- Node.js 20+

## Scripts

| Script               | Description                          |
| -------------------- | ------------------------------------ |
| `npm run ci`         | Typecheck and run tests (used in CI) |
| `npm run build`      | Compile `src/` to `dist/`            |
| `npm run typecheck`  | `tsc --noEmit`                       |
| `npm test`           | Run Vitest once                      |
| `npm run test:watch` | Vitest watch mode                    |
| `npm start`          | Run built CLI (`dist/main.js`)       |

## CLI

After `npm run build`:

```bash
npm start -- hello          # Hello, world!
npm start -- hello Ada      # Hello, Ada!
```

Or install the binary globally / use `npx` after linking:

```bash
npm run build && npx chinese-chess hello Ada
```

## Layout

- `src/greet.ts` — small library used by the CLI
- `src/cli.ts` — Commander program (`createProgram`)
- `src/main.ts` — executable entry (shebang → `dist/main.js`)
- `tests/` — Vitest specs
