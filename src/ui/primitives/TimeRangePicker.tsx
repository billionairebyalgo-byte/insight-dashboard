import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface TimeRange {
  label: string;
  value: string;
}

const defaultRanges: TimeRange[] = [
  { label: "Last 24 hours", value: "24h" },
  { label: "Last 7 days", value: "7d" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 90 days", value: "90d" },
  { label: "Last 12 months", value: "12m" },
];

interface TimeRangePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  ranges?: TimeRange[];
  className?: string;
}

export function TimeRangePicker({
  value = "7d",
  onChange,
  ranges = defaultRanges,
  className,
}: TimeRangePickerProps) {
  const [open, setOpen] = useState(false);
  const selectedRange = ranges.find((r) => r.value === value) || ranges[1];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "justify-between gap-2 text-sm font-normal",
            className
          )}
        >
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{selectedRange.label}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-1" align="end">
        <div className="space-y-0.5">
          {ranges.map((range) => (
            <button
              key={range.value}
              onClick={() => {
                onChange?.(range.value);
                setOpen(false);
              }}
              className={cn(
                "w-full rounded-md px-3 py-2 text-left text-sm transition-colors",
                range.value === value
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
