export interface KPIMetric {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  trend: {
    value: number;
    direction: "up" | "down" | "neutral";
  };
  subtitle?: string;
}

export interface TrafficData {
  date: string;
  visitors: number;
  pageViews: number;
  sessions: number;
}

export interface ConversionHighlight {
  id: string;
  name: string;
  rate: number;
  change: number;
}

export interface OverviewFilters {
  timeRange: string;
}
