import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createProgram } from "../src/cli.js";

describe("CLI", () => {
  let log: ReturnType<typeof vi.spyOn<typeof console, "log">>;

  beforeEach(() => {
    log = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    log.mockRestore();
  });

  it("prints a greeting for hello with a name", async () => {
    const program = createProgram();
    await program.parseAsync(["node", "chinese-chess", "hello", "Ada"], {
      from: "node",
    });
    expect(log).toHaveBeenCalledWith("Hello, Ada!");
  });

  it("uses the default name when hello is called without arguments", async () => {
    const program = createProgram();
    await program.parseAsync(["node", "chinese-chess", "hello"], {
      from: "node",
    });
    expect(log).toHaveBeenCalledWith("Hello, world!");
  });
});
