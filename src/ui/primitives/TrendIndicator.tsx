import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendIndicatorProps {
  value: number;
  direction: "up" | "down" | "neutral";
  showValue?: boolean;
  className?: string;
}

export function TrendIndicator({
  value,
  direction,
  showValue = true,
  className,
}: TrendIndicatorProps) {
  const Icon =
    direction === "up"
      ? TrendingUp
      : direction === "down"
      ? TrendingDown
      : Minus;

  const colorClass =
    direction === "up"
      ? "text-metric-positive"
      : direction === "down"
      ? "text-metric-negative"
      : "text-metric-neutral";

  return (
    <div className={cn("flex items-center gap-1", colorClass, className)}>
      <Icon className="h-4 w-4" />
      {showValue && (
        <span className="text-sm font-medium">
          {direction === "up" && "+"}
          {value}%
        </span>
      )}
    </div>
  );
}
