import { FileText, TrendingUp, DollarSign, Settings, Download, MoreVertical, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Report } from "../types";

const typeIcons: Record<Report["type"], React.ReactNode> = {
  traffic: <FileText className="h-4 w-4" />,
  conversion: <TrendingUp className="h-4 w-4" />,
  revenue: <DollarSign className="h-4 w-4" />,
  custom: <Settings className="h-4 w-4" />,
};

const statusStyles: Record<Report["status"], string> = {
  ready: "bg-success/10 text-success",
  generating: "bg-warning/10 text-warning",
  failed: "bg-destructive/10 text-destructive",
};

interface ReportsListProps {
  reports: Report[];
  onSelect?: (report: Report) => void;
}

export function ReportsList({ reports, onSelect }: ReportsListProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="border-b p-4">
        <h3 className="text-lg font-semibold">Saved Reports</h3>
        <p className="text-sm text-muted-foreground">Manage your analytics reports</p>
      </div>
      <div className="divide-y">
        {reports.map((report, index) => (
          <div
            key={report.id}
            onClick={() => onSelect?.(report)}
            className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-accent cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="rounded-lg bg-secondary p-2 text-muted-foreground">
              {typeIcons[report.type]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{report.name}</p>
              <p className="text-xs text-muted-foreground">
                Updated {report.updatedAt.toLocaleDateString()}
                {report.schedule && ` • ${report.schedule}`}
              </p>
            </div>
            <div className={cn("rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1", statusStyles[report.status])}>
              {report.status === "generating" && <Loader2 className="h-3 w-3 animate-spin" />}
              {report.status === "failed" && <AlertCircle className="h-3 w-3" />}
              {report.status}
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
