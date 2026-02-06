import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import {
  ExportHistory,
  ExportActions,
  fetchExportJobs,
  createExportJob,
  ExportJob,
} from "@/features/analytics/exports";

export default function ExportsPage() {
  const [jobs, setJobs] = useState<ExportJob[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchExportJobs().then(setJobs);
  }, []);

  const handleExport = async (format: "csv" | "pdf" | "json") => {
    setLoading(true);
    const newJob = await createExportJob(format);
    setJobs((prev) => [newJob, ...prev]);
    setLoading(false);
  };

  return (
    <PageLayout
      title="Exports"
      description="Export your analytics data"
    >
      <ExportActions onExport={handleExport} loading={loading} />
      <ExportHistory jobs={jobs} />
    </PageLayout>
  );
}
