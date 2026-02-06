import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  ReportsList,
  ReportFilters,
  fetchReports,
  Report,
} from "@/features/analytics/reports";

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("7d");
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    fetchReports().then(setReports);
  }, []);

  return (
    <PageLayout
      title="Reports"
      description="Create and manage analytics reports"
      actions={
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Report
        </Button>
      }
    >
      <ReportFilters dateRange={dateRange} onDateRangeChange={setDateRange} />
      <ReportsList reports={reports} />
    </PageLayout>
  );
}
