import { ExportJob } from "./types";

export async function fetchExportJobs(): Promise<ExportJob[]> {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      id: "1",
      name: "Weekly Traffic Report",
      format: "csv",
      status: "completed",
      createdAt: new Date("2024-01-20T10:30:00"),
      fileSize: "2.4 MB",
    },
    {
      id: "2",
      name: "User Analytics Export",
      format: "json",
      status: "processing",
      createdAt: new Date("2024-01-20T11:00:00"),
    },
    {
      id: "3",
      name: "Monthly Summary",
      format: "pdf",
      status: "completed",
      createdAt: new Date("2024-01-19T15:45:00"),
      fileSize: "1.8 MB",
    },
    {
      id: "4",
      name: "Conversion Data",
      format: "csv",
      status: "failed",
      createdAt: new Date("2024-01-18T09:15:00"),
    },
  ];
}

export async function createExportJob(format: "csv" | "pdf" | "json"): Promise<ExportJob> {
  await new Promise((r) => setTimeout(r, 500));
  
  return {
    id: Date.now().toString(),
    name: "New Export",
    format,
    status: "processing",
    createdAt: new Date(),
  };
}
