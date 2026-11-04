import assert from "node:assert/strict";
import test from "node:test";
import { getMasterPlanPhase, getMasterPlanPeriod } from "../../src/components/pricing/master-plan-schedule.ts";

const boundaries = [
  ["2026-12-31T14:59:59.999Z", 390000, 490000, "~ 2026.12.31"],
  ["2026-12-31T15:00:00.000Z", 490000, 590000, "2027.01.01 ~ 02.15"],
  ["2027-02-15T14:59:59.999Z", 490000, 590000, "2027.01.01 ~ 02.15"],
  ["2027-02-15T15:00:00.000Z", 590000, 690000, "2027.02.16 이후"],
  ["2027-03-31T15:00:00.000Z", 590000, 690000, "2027.02.16 이후"],
  ["2028-01-01T00:00:00.000Z", 590000, 690000, "2027.02.16 이후"],
];
for (const [instant, pro, max, period] of boundaries) {
  test(`KST price at ${instant}`, () => {
    const phase = getMasterPlanPhase(Date.parse(instant));
    assert.equal(phase.pro, pro);
    assert.equal(phase.max, max);
    assert.equal(getMasterPlanPeriod(phase), period);
    if (pro === 590000) assert.equal(phase.end, null);
  });
}
