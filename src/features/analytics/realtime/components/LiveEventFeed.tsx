import { Eye, MousePointer, UserPlus, ShoppingCart, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { LiveEvent } from "../types";

const eventIcons: Record<LiveEvent["type"], React.ReactNode> = {
  pageview: <Eye className="h-4 w-4" />,
  click: <MousePointer className="h-4 w-4" />,
  signup: <UserPlus className="h-4 w-4" />,
  purchase: <ShoppingCart className="h-4 w-4" />,
  error: <AlertCircle className="h-4 w-4" />,
};

const eventColors: Record<LiveEvent["type"], string> = {
  pageview: "text-muted-foreground",
  click: "text-primary",
  signup: "text-success",
  purchase: "text-success",
  error: "text-destructive",
};

interface LiveEventFeedProps {
  events: LiveEvent[];
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function LiveEventFeed({ events }: LiveEventFeedProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="border-b p-4">
        <h3 className="text-lg font-semibold">Live Event Feed</h3>
        <p className="text-sm text-muted-foreground">Real-time activity stream</p>
      </div>
      <div className="divide-y">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="flex items-center gap-4 px-4 py-3 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={cn("rounded-full bg-secondary p-2", eventColors[event.type])}>
              {eventIcons[event.type]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium capitalize">{event.type}</span>
                {event.page && (
                  <span className="text-sm text-muted-foreground truncate">
                    {event.page}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{event.user}</p>
            </div>
            <span className="text-xs text-muted-foreground tabular-nums">
              {formatTime(event.timestamp)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
