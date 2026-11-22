import assert from "node:assert/strict";
import test from "node:test";

import { isSupportProgramClosed, supportProgramSitemapUrls } from "../../src/seo/support-programs-xml.ts";

const now = new Date("2026-11-22T12:00:00+09:00");
const program = (id, deadline, extra = {}) => ({
  productFileId: id,
  title: id,
  deadline,
  supportTypes: [],
  businessFields: [],
  supportContent: [],
  ...extra,
});

test("마감 시각이 지난 공고만 닫힌 것으로 본다", () => {
  assert.equal(isSupportProgramClosed(program("a", "2026-11-22T11:59", { deadlineDateOnly: false }), now), true);
  assert.equal(isSupportProgramClosed(program("b", "2026-11-22T12:30", { deadlineDateOnly: false }), now), false);
  assert.equal(isSupportProgramClosed(program("c", "2026-11-22", { deadlineDateOnly: true }), now), false);
  assert.equal(isSupportProgramClosed(program("d", "2026-11-21", { deadlineDateOnly: true }), now), true);
  assert.equal(isSupportProgramClosed(program("e", null), now), false);
  assert.equal(isSupportProgramClosed(program("f", "마감 시"), now), false);
});

test("사이트맵에는 마감 전 공고만 lastmod와 함께 들어간다", () => {
  const urls = supportProgramSitemapUrls(
    [
      program("open", "2026-12-01T22:00", { deadlineDateOnly: false, createdAt: "2026-11-20T19:28:24.023228" }),
      program("closed", "2026-11-01T18:00", { deadlineDateOnly: false }),
      program("none", null),
    ],
    now,
  );
  assert.deepEqual(
    urls.map((url) => [url.loc, url.lastmod]),
    [
      ["/support-programs/open", "2026-11-20"],
      ["/support-programs/none", undefined],
    ],
  );
});
