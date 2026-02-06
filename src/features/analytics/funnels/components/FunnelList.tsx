import { TrendIndicator } from "@/ui/primitives";
import { Funnel } from "../types";

interface FunnelListProps {
  funnels: Funnel[];
  selectedId?: string;
  onSelect?: (funnel: Funnel) => void;
}

export function FunnelList({ funnels, selectedId, onSelect }: FunnelListProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="border-b p-4">
        <h3 className="text-lg font-semibold">Your Funnels</h3>
      </div>
      <div className="divide-y">
        {funnels.map((funnel) => (
          <button
            key={funnel.id}
            onClick={() => onSelect?.(funnel)}
            className={`w-full px-4 py-3 text-left transition-colors hover:bg-accent ${
              selectedId === funnel.id ? "bg-accent" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{funnel.name}</span>
              <TrendIndicator value={funnel.totalConversion} direction="up" />
            </div>
            <p className="text-sm text-muted-foreground">
              {funnel.steps.length} steps
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
