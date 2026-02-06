import { LineChart } from "@/ui/patterns";
import { Cohort, CohortRetention } from "../types";

interface RetentionCurveProps {
  cohorts: Cohort[];
  retention: CohortRetention[];
  selectedCohortId?: string;
}

export function RetentionCurve({ retention, selectedCohortId }: RetentionCurveProps) {
  const cohortId = selectedCohortId || "w1";
  const cohortData = retention
    .filter((r) => r.cohortId === cohortId)
    .map((r) => ({
      week: `Week ${r.week}`,
      retention: Math.round(r.retention),
    }));

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Retention Curve</h3>
        <p className="text-sm text-muted-foreground">Retention over time</p>
      </div>
      <LineChart
        data={cohortData}
        xKey="week"
        yKey="retention"
        height={250}
        color="hsl(var(--success))"
      />
    </div>
  );
}
