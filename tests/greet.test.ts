import { describe, expect, it } from "vitest";
import { greet } from "../src/greet.js";

describe("greet", () => {
  it("returns a friendly message for a name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });
});
