import { describe, expect, it, vi } from "vitest";
import { createProgram } from "../src/cli.js";

describe("CLI", () => {
  it("prints a greeting for hello with a name", async () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    const program = createProgram();
    await program.parseAsync(["node", "chinese-chess", "hello", "Ada"], {
      from: "node",
    });
    expect(log).toHaveBeenCalledWith("Hello, Ada!");
    log.mockRestore();
  });

  it("uses the default name when hello is called without arguments", async () => {
    const log = vi.spyOn(console, "log").mockImplementation(() => {});
    const program = createProgram();
    await program.parseAsync(["node", "chinese-chess", "hello"], {
      from: "node",
    });
    expect(log).toHaveBeenCalledWith("Hello, world!");
    log.mockRestore();
  });
});
