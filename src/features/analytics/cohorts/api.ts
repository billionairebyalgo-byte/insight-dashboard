import { Cohort, CohortRetention } from "./types";

export async function fetchCohorts(): Promise<Cohort[]> {
  await new Promise((r) => setTimeout(r, 200));

  return [
    { id: "w1", name: "Week 1", startDate: new Date("2024-01-01"), userCount: 1250 },
    { id: "w2", name: "Week 2", startDate: new Date("2024-01-08"), userCount: 1180 },
    { id: "w3", name: "Week 3", startDate: new Date("2024-01-15"), userCount: 1320 },
    { id: "w4", name: "Week 4", startDate: new Date("2024-01-22"), userCount: 1450 },
  ];
}

export async function fetchCohortRetention(): Promise<CohortRetention[]> {
  await new Promise((r) => setTimeout(r, 150));

  const cohorts = ["w1", "w2", "w3", "w4"];
  const weeks = [0, 1, 2, 3, 4, 5, 6];
  
  const data: CohortRetention[] = [];
  cohorts.forEach((cohortId) => {
    weeks.forEach((week) => {
      // Simulate decreasing retention
      const baseRetention = 100 - week * 12;
      const variance = Math.random() * 10 - 5;
      data.push({
        cohortId,
        week,
        retention: Math.max(0, Math.min(100, baseRetention + variance)),
      });
    });
  });
  
  return data;
}
