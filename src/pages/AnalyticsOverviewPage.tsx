import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { TimeRangePicker } from "@/ui/primitives";
import {
  KPISummary,
  TrafficTrendChart,
  ConversionHighlights,
  fetchKPIMetrics,
  fetchTrafficData,
  fetchConversionHighlights,
  KPIMetric,
  TrafficData,
  ConversionHighlight,
} from "@/features/analytics/overview";

export default function AnalyticsOverviewPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [metrics, setMetrics] = useState<KPIMetric[]>([]);
  const [trafficData, setTrafficData] = useState<TrafficData[]>([]);
  const [highlights, setHighlights] = useState<ConversionHighlight[]>([]);

  useEffect(() => {
    fetchKPIMetrics().then(setMetrics);
    fetchTrafficData().then(setTrafficData);
    fetchConversionHighlights().then(setHighlights);
  }, [timeRange]);

  return (
    <PageLayout
      title="Analytics Overview"
      description="Monitor your key metrics and trends"
      actions={<TimeRangePicker value={timeRange} onChange={setTimeRange} />}
    >
      <KPISummary metrics={metrics} />
      
      <div className="grid gap-6 lg:grid-cols-2">
        <TrafficTrendChart data={trafficData} />
        <ConversionHighlights highlights={highlights} />
      </div>
    </PageLayout>
  );
}
