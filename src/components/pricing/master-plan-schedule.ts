export const masterPlanPhases = [
  { name: "1차 얼리버드", end: "2027-01-01T00:00:00+09:00", pro: 390000, max: 490000 },
  { name: "2차 시즌 특별가", end: "2027-02-16T00:00:00+09:00", pro: 490000, max: 590000 },
  { name: "3차 시즌 가격", end: "2027-04-01T00:00:00+09:00", pro: 590000, max: 690000 },
] as const;

export function getMasterPlanPhase(now: number) {
  return masterPlanPhases.find((phase) => now < Date.parse(phase.end));
}
