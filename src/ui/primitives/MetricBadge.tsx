import { cn } from "@/lib/utils";

interface MetricBadgeProps {
  value: string | number;
  variant?: "default" | "success" | "warning" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MetricBadge({
  value,
  variant = "default",
  size = "md",
  className,
}: MetricBadgeProps) {
  const variantStyles = {
    default: "bg-secondary text-secondary-foreground",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
  };

  const sizeStyles = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-sm px-2 py-1",
    lg: "text-base px-3 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {value}
    </span>
  );
}
