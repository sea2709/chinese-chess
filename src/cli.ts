import { Command } from "commander";
import { greet } from "./greet.js";

const CLI_VERSION = "0.1.0";
const DEFAULT_HELLO_NAME = "world";

export function createProgram(): Command {
  const program = new Command()
    .name("chinese-chess")
    .description("Basic CLI scaffold")
    .version(CLI_VERSION);

  program
    .command("hello")
    .description("Print a greeting")
    .argument("[name]", "who to greet", DEFAULT_HELLO_NAME)
    .action((name: string) => {
      console.log(greet(name));
    });

  return program;
}
