import { FunnelChart } from "@/ui/patterns";
import { Funnel } from "../types";

interface FunnelVisualizationProps {
  funnel: Funnel;
}

export function FunnelVisualization({ funnel }: FunnelVisualizationProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{funnel.name}</h3>
          <p className="text-sm text-muted-foreground">
            Overall conversion: <span className="font-medium text-success">{funnel.totalConversion}%</span>
          </p>
        </div>
      </div>
      <FunnelChart steps={funnel.steps} />
    </div>
  );
}
