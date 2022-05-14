import { Command } from "cliffy/command/mod.ts";
import { VERSION } from "../sillabe.ts";

await new Command()
  .name("sillabe")
  .version(VERSION)
  .description("Sillabe CLI")
  .parse(Deno.args);
