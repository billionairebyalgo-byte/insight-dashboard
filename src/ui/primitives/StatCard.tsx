import { cn } from "@/lib/utils";
import { TrendIndicator } from "./TrendIndicator";

interface StatCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: number;
    direction: "up" | "down" | "neutral";
  };
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  trend,
  subtitle,
  icon,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-6 hover-lift animate-fade-up",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight animate-counter">
              {value}
            </span>
            {trend && (
              <TrendIndicator
                value={trend.value}
                direction={trend.direction}
              />
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="rounded-lg bg-secondary p-2 text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
