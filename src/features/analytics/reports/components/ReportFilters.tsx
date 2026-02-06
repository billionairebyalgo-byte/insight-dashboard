import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TimeRangePicker } from "@/ui/primitives";

interface ReportFiltersProps {
  dateRange: string;
  onDateRangeChange?: (value: string) => void;
}

export function ReportFilters({ dateRange, onDateRangeChange }: ReportFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border bg-card p-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span>Filters:</span>
      </div>
      <TimeRangePicker value={dateRange} onChange={onDateRangeChange} />
      <Button variant="outline" size="sm" className="gap-2">
        Segment
        <ChevronDown className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="sm" className="gap-2">
        Metric
        <ChevronDown className="h-4 w-4" />
      </Button>
      <Button variant="secondary" size="sm" className="ml-auto">
        Apply Filters
      </Button>
    </div>
  );
}
