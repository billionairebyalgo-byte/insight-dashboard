import { Download, FileSpreadsheet, FileText, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ExportOption {
  format: "csv" | "pdf" | "json";
  label: string;
  icon: React.ReactNode;
}

const exportOptions: ExportOption[] = [
  { format: "csv", label: "Export CSV", icon: <FileSpreadsheet className="h-4 w-4" /> },
  { format: "pdf", label: "Export PDF", icon: <FileText className="h-4 w-4" /> },
  { format: "json", label: "Export JSON", icon: <Code className="h-4 w-4" /> },
];

interface ExportPanelProps {
  onExport?: (format: "csv" | "pdf" | "json") => void;
  loading?: boolean;
  className?: string;
}

export function ExportPanel({
  onExport,
  loading = false,
  className,
}: ExportPanelProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-lg border bg-card p-4",
        className
      )}
    >
      <div className="mr-auto flex items-center gap-2 text-sm text-muted-foreground">
        <Download className="h-4 w-4" />
        <span>Export data</span>
      </div>
      {exportOptions.map((option) => (
        <Button
          key={option.format}
          variant="outline"
          size="sm"
          onClick={() => onExport?.(option.format)}
          disabled={loading}
          className="gap-2"
        >
          {option.icon}
          {option.label}
        </Button>
      ))}
    </div>
  );
}
