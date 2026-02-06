import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { TimeRangePicker } from "@/ui/primitives";
import {
  CohortGrid,
  RetentionCurve,
  fetchCohorts,
  fetchCohortRetention,
  Cohort,
  CohortRetention,
} from "@/features/analytics/cohorts";

export default function CohortsPage() {
  const [timeRange, setTimeRange] = useState("30d");
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [retention, setRetention] = useState<CohortRetention[]>([]);

  useEffect(() => {
    fetchCohorts().then(setCohorts);
    fetchCohortRetention().then(setRetention);
  }, [timeRange]);

  return (
    <PageLayout
      title="Cohorts"
      description="Analyze user cohorts and retention"
      actions={<TimeRangePicker value={timeRange} onChange={setTimeRange} />}
    >
      <CohortGrid cohorts={cohorts} retention={retention} />
      <RetentionCurve cohorts={cohorts} retention={retention} />
    </PageLayout>
  );
}
