import { LineChart } from "@/ui/patterns";
import { RetentionData } from "../types";

interface RetentionTrendChartProps {
  data: RetentionData[];
}

export function RetentionTrendChart({ data }: RetentionTrendChartProps) {
  const chartData = data.map((d) => ({
    period: d.period,
    value: d.monthly,
  }));

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Retention Trends</h3>
        <p className="text-sm text-muted-foreground">Monthly retention rate over time</p>
      </div>
      <LineChart
        data={chartData}
        xKey="period"
        yKey="value"
        height={280}
        color="hsl(var(--success))"
      />
    </div>
  );
}
