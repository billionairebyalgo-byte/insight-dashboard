export interface LiveEvent {
  id: string;
  type: "pageview" | "click" | "signup" | "purchase" | "error";
  user?: string;
  page?: string;
  timestamp: Date;
  metadata?: Record<string, string | number>;
}

export interface RealtimeStats {
  activeUsers: number;
  pageViewsPerMinute: number;
  eventsPerMinute: number;
}
