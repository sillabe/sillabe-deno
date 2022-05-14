import { assertEquals } from "https://deno.land/std@0.139.0/testing/asserts.ts";
import { VERSION } from "../sillabe.ts";

Deno.test("versiono", () => {
  assertEquals(VERSION, "0.0.4");
});
