import { Command } from "commander";
import { greet } from "./greet.js";

export function createProgram(): Command {
  const program = new Command();
  program
    .name("chinese-chess")
    .description("Basic CLI scaffold")
    .version("0.1.0");

  program
    .command("hello")
    .description("Print a greeting")
    .argument("[name]", "who to greet", "world")
    .action((name: string) => {
      console.log(greet(name));
    });

  return program;
}
