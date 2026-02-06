import { Users, Eye, Activity } from "lucide-react";
import { StatCard } from "@/ui/primitives";
import { RealtimeStats } from "../types";

interface ActiveUsersCardProps {
  stats: RealtimeStats;
}

export function ActiveUsersCard({ stats }: ActiveUsersCardProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <StatCard
        title="Active Users"
        value={stats.activeUsers}
        icon={<Users className="h-5 w-5" />}
        subtitle="Right now"
      />
      <StatCard
        title="Page Views / min"
        value={stats.pageViewsPerMinute}
        icon={<Eye className="h-5 w-5" />}
        subtitle="Last minute"
      />
      <StatCard
        title="Events / min"
        value={stats.eventsPerMinute}
        icon={<Activity className="h-5 w-5" />}
        subtitle="Last minute"
      />
    </div>
  );
}
