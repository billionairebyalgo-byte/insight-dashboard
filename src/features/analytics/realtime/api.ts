import { LiveEvent, RealtimeStats } from "./types";

const eventTypes: LiveEvent["type"][] = ["pageview", "click", "signup", "purchase", "error"];
const pages = ["/home", "/pricing", "/docs", "/dashboard", "/settings", "/checkout"];

export async function fetchRealtimeStats(): Promise<RealtimeStats> {
  await new Promise((r) => setTimeout(r, 100));
  return {
    activeUsers: Math.floor(Math.random() * 200) + 150,
    pageViewsPerMinute: Math.floor(Math.random() * 50) + 80,
    eventsPerMinute: Math.floor(Math.random() * 100) + 200,
  };
}

export async function fetchLiveEvents(limit = 10): Promise<LiveEvent[]> {
  await new Promise((r) => setTimeout(r, 150));
  
  return Array.from({ length: limit }, (_, i) => ({
    id: `event-${Date.now()}-${i}`,
    type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
    user: `user_${Math.floor(Math.random() * 9999).toString().padStart(4, "0")}`,
    page: pages[Math.floor(Math.random() * pages.length)],
    timestamp: new Date(Date.now() - i * 3000),
    metadata: { duration: Math.floor(Math.random() * 60) },
  }));
}
