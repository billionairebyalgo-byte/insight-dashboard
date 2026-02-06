import { KPIMetric, TrafficData, ConversionHighlight } from "./types";

export async function fetchKPIMetrics(): Promise<KPIMetric[]> {
  // Mock API delay
  await new Promise((r) => setTimeout(r, 300));

  return [
    {
      id: "visitors",
      title: "Total Visitors",
      value: 124589,
      formattedValue: "124.6K",
      trend: { value: 12.5, direction: "up" },
      subtitle: "vs. previous period",
    },
    {
      id: "sessions",
      title: "Sessions",
      value: 89234,
      formattedValue: "89.2K",
      trend: { value: 8.3, direction: "up" },
      subtitle: "vs. previous period",
    },
    {
      id: "conversion",
      title: "Conversion Rate",
      value: 3.24,
      formattedValue: "3.24%",
      trend: { value: 0.5, direction: "up" },
      subtitle: "vs. previous period",
    },
    {
      id: "revenue",
      title: "Revenue",
      value: 52840,
      formattedValue: "$52.8K",
      trend: { value: 2.1, direction: "down" },
      subtitle: "vs. previous period",
    },
  ];
}

export async function fetchTrafficData(): Promise<TrafficData[]> {
  await new Promise((r) => setTimeout(r, 200));

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.map((date) => ({
    date,
    visitors: Math.floor(Math.random() * 5000) + 10000,
    pageViews: Math.floor(Math.random() * 15000) + 30000,
    sessions: Math.floor(Math.random() * 4000) + 8000,
  }));
}

export async function fetchConversionHighlights(): Promise<ConversionHighlight[]> {
  await new Promise((r) => setTimeout(r, 250));

  return [
    { id: "signup", name: "Sign Up", rate: 4.2, change: 0.8 },
    { id: "purchase", name: "Purchase", rate: 2.1, change: -0.3 },
    { id: "trial", name: "Free Trial", rate: 8.5, change: 1.2 },
    { id: "upgrade", name: "Plan Upgrade", rate: 12.3, change: 2.1 },
  ];
}
