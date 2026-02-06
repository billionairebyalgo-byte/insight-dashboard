import { Heatmap } from "@/ui/patterns";
import { Cohort, CohortRetention } from "../types";

interface CohortGridProps {
  cohorts: Cohort[];
  retention: CohortRetention[];
}

export function CohortGrid({ cohorts, retention }: CohortGridProps) {
  const weeks = Array.from({ length: 7 }, (_, i) => `W${i}`);
  const rows = cohorts.map((c) => c.name);

  const heatmapData = retention.map((r) => ({
    row: cohorts.find((c) => c.id === r.cohortId)?.name || r.cohortId,
    col: `W${r.week}`,
    value: Math.round(r.retention),
  }));

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Cohort Retention Grid</h3>
        <p className="text-sm text-muted-foreground">User retention by week</p>
      </div>
      <Heatmap
        data={heatmapData}
        rows={rows}
        cols={weeks}
        maxValue={100}
      />
    </div>
  );
}
