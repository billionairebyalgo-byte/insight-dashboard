import { Report } from "./types";

export async function fetchReports(): Promise<Report[]> {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      id: "1",
      name: "Weekly Traffic Summary",
      type: "traffic",
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date("2024-01-20"),
      schedule: "weekly",
      status: "ready",
    },
    {
      id: "2",
      name: "Conversion Funnel Analysis",
      type: "conversion",
      createdAt: new Date("2024-01-10"),
      updatedAt: new Date("2024-01-18"),
      status: "ready",
    },
    {
      id: "3",
      name: "Monthly Revenue Report",
      type: "revenue",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-19"),
      schedule: "monthly",
      status: "generating",
    },
    {
      id: "4",
      name: "Custom User Behavior",
      type: "custom",
      createdAt: new Date("2024-01-12"),
      updatedAt: new Date("2024-01-12"),
      status: "failed",
    },
  ];
}
