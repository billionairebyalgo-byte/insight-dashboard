import { FileSpreadsheet, FileText, Code, Download, Loader2, AlertCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExportJob } from "../types";

const formatIcons: Record<ExportJob["format"], React.ReactNode> = {
  csv: <FileSpreadsheet className="h-4 w-4" />,
  pdf: <FileText className="h-4 w-4" />,
  json: <Code className="h-4 w-4" />,
};

const statusIcons: Record<ExportJob["status"], React.ReactNode> = {
  completed: <Check className="h-4 w-4 text-success" />,
  processing: <Loader2 className="h-4 w-4 animate-spin text-warning" />,
  failed: <AlertCircle className="h-4 w-4 text-destructive" />,
};

interface ExportHistoryProps {
  jobs: ExportJob[];
  onDownload?: (job: ExportJob) => void;
}

export function ExportHistory({ jobs, onDownload }: ExportHistoryProps) {
  return (
    <div className="rounded-lg border bg-card">
      <div className="border-b p-4">
        <h3 className="text-lg font-semibold">Download History</h3>
        <p className="text-sm text-muted-foreground">Recent export jobs</p>
      </div>
      <div className="divide-y">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className="flex items-center gap-4 px-4 py-3 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="rounded-lg bg-secondary p-2 text-muted-foreground">
              {formatIcons[job.format]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{job.name}</p>
              <p className="text-xs text-muted-foreground">
                {job.createdAt.toLocaleString()}
                {job.fileSize && ` • ${job.fileSize}`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {statusIcons[job.status]}
              <span
                className={cn(
                  "text-xs font-medium capitalize",
                  job.status === "completed" && "text-success",
                  job.status === "processing" && "text-warning",
                  job.status === "failed" && "text-destructive"
                )}
              >
                {job.status}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              disabled={job.status !== "completed"}
              onClick={() => onDownload?.(job)}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
