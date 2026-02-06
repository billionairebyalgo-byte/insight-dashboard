import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { TimeRangePicker } from "@/ui/primitives";
import {
  PerformanceCards,
  PagePerformanceTable,
  fetchPerformanceMetrics,
  fetchPagePerformance,
  PerformanceMetric,
  PagePerformance,
} from "@/features/analytics/performance";

export default function PerformancePage() {
  const [timeRange, setTimeRange] = useState("24h");
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [pageData, setPageData] = useState<PagePerformance[]>([]);

  useEffect(() => {
    fetchPerformanceMetrics().then(setMetrics);
    fetchPagePerformance().then(setPageData);
  }, [timeRange]);

  return (
    <PageLayout
      title="Performance"
      description="Monitor application performance"
      actions={<TimeRangePicker value={timeRange} onChange={setTimeRange} />}
    >
      <PerformanceCards metrics={metrics} />
      <PagePerformanceTable data={pageData} />
    </PageLayout>
  );
}
