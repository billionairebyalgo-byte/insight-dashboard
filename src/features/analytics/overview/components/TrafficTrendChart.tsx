import { LineChart } from "@/ui/patterns";
import { TrafficData } from "../types";

interface TrafficTrendChartProps {
  data: TrafficData[];
}

export function TrafficTrendChart({ data }: TrafficTrendChartProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Traffic Trends</h3>
        <p className="text-sm text-muted-foreground">
          Daily visitor activity over time
        </p>
      </div>
      <LineChart
        data={data}
        xKey="date"
        yKey="visitors"
        height={280}
      />
    </div>
  );
}
