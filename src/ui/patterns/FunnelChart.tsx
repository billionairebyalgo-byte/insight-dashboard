import { cn } from "@/lib/utils";

interface FunnelStep {
  name: string;
  value: number;
  percentage?: number;
}

interface FunnelChartProps {
  steps: FunnelStep[];
  className?: string;
}

export function FunnelChart({ steps, className }: FunnelChartProps) {
  const maxValue = steps[0]?.value || 1;

  return (
    <div className={cn("space-y-3", className)}>
      {steps.map((step, index) => {
        const widthPercent = (step.value / maxValue) * 100;
        const dropoff =
          index > 0
            ? (((steps[index - 1].value - step.value) / steps[index - 1].value) * 100).toFixed(1)
            : null;

        return (
          <div key={step.name} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {index + 1}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">
                  {step.value.toLocaleString()}
                </span>
                {step.percentage !== undefined && (
                  <span className="text-xs text-muted-foreground">
                    ({step.percentage}%)
                  </span>
                )}
              </div>
            </div>
            <div className="relative h-10 w-full overflow-hidden rounded-md bg-secondary">
              <div
                className="absolute inset-y-0 left-0 flex items-center bg-primary transition-all duration-500 ease-out"
                style={{ width: `${widthPercent}%` }}
              />
            </div>
            {dropoff && (
              <div className="mt-1 flex items-center justify-end gap-1">
                <span className="text-xs text-metric-negative">
                  ↓ {dropoff}% drop-off
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
