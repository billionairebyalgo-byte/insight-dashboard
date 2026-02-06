import { PerformanceMetric, PagePerformance } from "./types";

export async function fetchPerformanceMetrics(): Promise<PerformanceMetric[]> {
  await new Promise((r) => setTimeout(r, 200));

  return [
    { id: "ttfb", name: "Time to First Byte", value: 180, unit: "ms", status: "good" },
    { id: "fcp", name: "First Contentful Paint", value: 1.2, unit: "s", status: "good" },
    { id: "lcp", name: "Largest Contentful Paint", value: 2.8, unit: "s", status: "warning" },
    { id: "cls", name: "Cumulative Layout Shift", value: 0.05, unit: "", status: "good" },
    { id: "fid", name: "First Input Delay", value: 45, unit: "ms", status: "good" },
    { id: "error", name: "Error Rate", value: 0.8, unit: "%", status: "good" },
  ];
}

export async function fetchPagePerformance(): Promise<PagePerformance[]> {
  await new Promise((r) => setTimeout(r, 150));

  return [
    { page: "/home", loadTime: 1.2, ttfb: 150, fcp: 800, lcp: 1800 },
    { page: "/dashboard", loadTime: 2.1, ttfb: 220, fcp: 1200, lcp: 2800 },
    { page: "/pricing", loadTime: 0.9, ttfb: 120, fcp: 600, lcp: 1400 },
    { page: "/docs", loadTime: 1.8, ttfb: 180, fcp: 900, lcp: 2200 },
    { page: "/checkout", loadTime: 1.5, ttfb: 160, fcp: 750, lcp: 1900 },
  ];
}
