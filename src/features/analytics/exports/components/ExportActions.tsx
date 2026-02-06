import { ExportPanel } from "@/ui/patterns";

interface ExportActionsProps {
  onExport?: (format: "csv" | "pdf" | "json") => void;
  loading?: boolean;
}

export function ExportActions({ onExport, loading }: ExportActionsProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Create Export</h3>
        <p className="text-sm text-muted-foreground">Export your analytics data</p>
      </div>
      <ExportPanel onExport={onExport} loading={loading} />
    </div>
  );
}
