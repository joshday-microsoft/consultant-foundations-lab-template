import assert from "node:assert/strict";
import test from "node:test";
import { calculateQuote } from "../src/quote.ts";

test("calculates an undiscounted quote below the volume range", () => {
  assert.equal(calculateQuote(1_000, 2), 2_000);
});

test("applies the volume discount to a quantity above the boundary", () => {
  assert.equal(calculateQuote(1_000, 12), 10_200);
});
