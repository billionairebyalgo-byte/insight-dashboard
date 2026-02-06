import { DataTable } from "@/ui/patterns";
import { PagePerformance } from "../types";

interface PagePerformanceTableProps {
  data: PagePerformance[];
}

export function PagePerformanceTable({ data }: PagePerformanceTableProps) {
  const columns = [
    { key: "page" as const, header: "Page" },
    {
      key: "loadTime" as const,
      header: "Load Time",
      render: (value: unknown) => `${value}s`,
    },
    {
      key: "ttfb" as const,
      header: "TTFB",
      render: (value: unknown) => `${value}ms`,
    },
    {
      key: "fcp" as const,
      header: "FCP",
      render: (value: unknown) => `${value}ms`,
    },
    {
      key: "lcp" as const,
      header: "LCP",
      render: (value: unknown) => `${value}ms`,
    },
  ];

  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Page Performance</h3>
        <p className="text-sm text-muted-foreground">Load metrics by page</p>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
