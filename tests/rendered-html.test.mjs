import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

test("homepage contains the finalized Yunnan itinerary", async () => {
  const page = await readFile(new URL("../app/components/TripPlanner.tsx", import.meta.url), "utf8");
  const data = await readFile(new URL("../app/data.ts", import.meta.url), "utf8");

  assert.match(page, /九日慢游/);
  assert.match(page, /逐日行程/);
  assert.match(data, /大理实力希尔顿酒店/);
  assert.match(data, /丽江金茂隐逸酒店/);
  assert.match(data, /忠义市场/);
});
