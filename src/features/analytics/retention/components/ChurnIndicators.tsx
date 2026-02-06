import { TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChurnMetric } from "../types";

interface ChurnIndicatorsProps {
  metrics: ChurnMetric[];
}

export function ChurnIndicators({ metrics }: ChurnIndicatorsProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Churn Indicators</h3>
        <p className="text-sm text-muted-foreground">Track user churn rates</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => {
          const isImproving = metric.change < 0;
          return (
            <div
              key={metric.period}
              className="rounded-lg bg-secondary/50 p-4 text-center"
            >
              <p className="text-sm text-muted-foreground">{metric.period} Churn</p>
              <p className="text-2xl font-bold">{metric.rate}%</p>
              <div
                className={cn(
                  "mt-1 flex items-center justify-center gap-1 text-sm",
                  isImproving ? "text-success" : "text-destructive"
                )}
              >
                {isImproving ? (
                  <TrendingDown className="h-4 w-4" />
                ) : (
                  <TrendingUp className="h-4 w-4" />
                )}
                <span>{Math.abs(metric.change)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
