import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import {
  LiveBadge,
  ActiveUsersCard,
  LiveEventFeed,
  fetchRealtimeStats,
  fetchLiveEvents,
  RealtimeStats,
  LiveEvent,
} from "@/features/analytics/realtime";

export default function RealtimeAnalyticsPage() {
  const [stats, setStats] = useState<RealtimeStats | null>(null);
  const [events, setEvents] = useState<LiveEvent[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetchRealtimeStats().then(setStats);
      fetchLiveEvents(10).then(setEvents);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout
      title="Realtime Analytics"
      description="Live activity stream"
      actions={<LiveBadge />}
    >
      {stats && <ActiveUsersCard stats={stats} />}
      <LiveEventFeed events={events} />
    </PageLayout>
  );
}
