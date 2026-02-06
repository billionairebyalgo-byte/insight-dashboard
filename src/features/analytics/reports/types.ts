export interface Report {
  id: string;
  name: string;
  type: "traffic" | "conversion" | "revenue" | "custom";
  createdAt: Date;
  updatedAt: Date;
  schedule?: "daily" | "weekly" | "monthly";
  status: "ready" | "generating" | "failed";
}

export interface ReportFilter {
  dateRange: string;
  segment?: string;
  metric?: string;
}
