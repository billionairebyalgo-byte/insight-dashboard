import { Users, Activity, TrendingUp, DollarSign } from "lucide-react";
import { StatCard } from "@/ui/primitives";
import { KPIMetric } from "../types";

const iconMap: Record<string, React.ReactNode> = {
  visitors: <Users className="h-5 w-5" />,
  sessions: <Activity className="h-5 w-5" />,
  conversion: <TrendingUp className="h-5 w-5" />,
  revenue: <DollarSign className="h-5 w-5" />,
};

interface KPISummaryProps {
  metrics: KPIMetric[];
}

export function KPISummary({ metrics }: KPISummaryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <StatCard
          key={metric.id}
          title={metric.title}
          value={metric.formattedValue}
          trend={metric.trend}
          subtitle={metric.subtitle}
          icon={iconMap[metric.id]}
        />
      ))}
    </div>
  );
}
