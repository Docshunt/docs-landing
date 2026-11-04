export const monthlyPlanPrices = { Pro: 149000, Max: 190000 } as const;

const secondPhaseStartsAt = "2027-01-01T00:00:00+09:00";
const thirdPhaseStartsAt = "2027-02-16T00:00:00+09:00";

export const masterPlanPhases = [
  { name: "1차 얼리버드", start: null, end: secondPhaseStartsAt, pro: 390000, max: 490000 },
  { name: "2차 시즌 특별가", start: secondPhaseStartsAt, end: thirdPhaseStartsAt, pro: 490000, max: 590000 },
  { name: "3차 시즌 가격", start: thirdPhaseStartsAt, end: null, pro: 590000, max: 690000 },
] as const;

export function getMasterPlanPhase(now: number) {
  return masterPlanPhases.find((phase) => phase.end === null || now < Date.parse(phase.end)) ?? masterPlanPhases[2];
}

export function getMasterPlanPeriod(phase: (typeof masterPlanPhases)[number]) {
  const formatDate = (instant: number) => new Date(instant).toLocaleDateString("sv-SE", { timeZone: "Asia/Seoul" }).replaceAll("-", ".");
  if (phase.end === null) return `${formatDate(Date.parse(phase.start))} 이후`;
  const end = formatDate(Date.parse(phase.end) - 1);
  return phase.start === null ? `~ ${end}` : `${formatDate(Date.parse(phase.start))} ~ ${end.slice(5)}`;
}
