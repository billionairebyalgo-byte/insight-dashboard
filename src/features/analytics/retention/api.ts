import { RetentionData, ChurnMetric } from "./types";

export async function fetchRetentionData(): Promise<RetentionData[]> {
  await new Promise((r) => setTimeout(r, 200));

  return [
    { period: "Jan", daily: 85, weekly: 72, monthly: 58 },
    { period: "Feb", daily: 82, weekly: 70, monthly: 55 },
    { period: "Mar", daily: 88, weekly: 75, monthly: 62 },
    { period: "Apr", daily: 84, weekly: 71, monthly: 59 },
    { period: "May", daily: 86, weekly: 74, monthly: 61 },
    { period: "Jun", daily: 89, weekly: 78, monthly: 65 },
  ];
}

export async function fetchChurnMetrics(): Promise<ChurnMetric[]> {
  await new Promise((r) => setTimeout(r, 150));

  return [
    { period: "Daily", rate: 2.1, change: -0.3 },
    { period: "Weekly", rate: 8.5, change: 0.8 },
    { period: "Monthly", rate: 18.2, change: -1.2 },
  ];
}
