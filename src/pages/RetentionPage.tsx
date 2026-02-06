import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { TimeRangePicker } from "@/ui/primitives";
import {
  RetentionTrendChart,
  ChurnIndicators,
  fetchRetentionData,
  fetchChurnMetrics,
  RetentionData,
  ChurnMetric,
} from "@/features/analytics/retention";

export default function RetentionPage() {
  const [timeRange, setTimeRange] = useState("30d");
  const [retentionData, setRetentionData] = useState<RetentionData[]>([]);
  const [churnMetrics, setChurnMetrics] = useState<ChurnMetric[]>([]);

  useEffect(() => {
    fetchRetentionData().then(setRetentionData);
    fetchChurnMetrics().then(setChurnMetrics);
  }, [timeRange]);

  return (
    <PageLayout
      title="Retention"
      description="Track user retention and churn"
      actions={<TimeRangePicker value={timeRange} onChange={setTimeRange} />}
    >
      <ChurnIndicators metrics={churnMetrics} />
      <RetentionTrendChart data={retentionData} />
    </PageLayout>
  );
}
