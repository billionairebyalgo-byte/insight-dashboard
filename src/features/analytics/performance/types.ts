export interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: "good" | "warning" | "critical";
}

export interface PagePerformance {
  page: string;
  loadTime: number;
  ttfb: number;
  fcp: number;
  lcp: number;
}
