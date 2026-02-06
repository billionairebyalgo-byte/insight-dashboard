import { cn } from "@/lib/utils";
import { PerformanceMetric } from "../types";

const statusStyles = {
  good: "border-success/50 bg-success/5",
  warning: "border-warning/50 bg-warning/5",
  critical: "border-destructive/50 bg-destructive/5",
};

const statusDotStyles = {
  good: "bg-success",
  warning: "bg-warning",
  critical: "bg-destructive",
};

interface PerformanceCardsProps {
  metrics: PerformanceMetric[];
}

export function PerformanceCards({ metrics }: PerformanceCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <div
          key={metric.id}
          className={cn(
            "rounded-lg border p-4 animate-fade-up",
            statusStyles[metric.status]
          )}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-start justify-between">
            <p className="text-sm font-medium text-muted-foreground">{metric.name}</p>
            <span className={cn("h-2 w-2 rounded-full", statusDotStyles[metric.status])} />
          </div>
          <p className="mt-2 text-2xl font-bold">
            {metric.value}
            <span className="ml-1 text-sm font-normal text-muted-foreground">
              {metric.unit}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
