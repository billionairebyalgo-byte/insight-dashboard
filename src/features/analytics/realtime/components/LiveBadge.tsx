import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
}

export function LiveBadge({ className }: LiveBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live-pulse opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live-pulse" />
      </span>
      <span className="text-sm font-medium text-live-pulse">LIVE</span>
    </div>
  );
}
