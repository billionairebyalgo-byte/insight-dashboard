import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface HeatmapCell {
  row: string;
  col: string;
  value: number;
}

interface HeatmapProps {
  data: HeatmapCell[];
  rows: string[];
  cols: string[];
  className?: string;
  maxValue?: number;
  formatValue?: (value: number) => string;
}

function getHeatColor(value: number, max: number): string {
  const intensity = value / max;
  if (intensity === 0) return "bg-muted";
  if (intensity < 0.2) return "bg-success/20";
  if (intensity < 0.4) return "bg-success/40";
  if (intensity < 0.6) return "bg-success/60";
  if (intensity < 0.8) return "bg-success/80";
  return "bg-success";
}

export function Heatmap({
  data,
  rows,
  cols,
  className,
  maxValue,
  formatValue = (v) => `${v}%`,
}: HeatmapProps) {
  const max = maxValue || Math.max(...data.map((d) => d.value));

  const getValue = (row: string, col: string) => {
    const cell = data.find((d) => d.row === row && d.col === col);
    return cell?.value ?? 0;
  };

  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="inline-block min-w-full">
        {/* Header row */}
        <div className="flex">
          <div className="w-20 shrink-0" />
          {cols.map((col) => (
            <div
              key={col}
              className="flex h-8 w-12 shrink-0 items-center justify-center text-xs text-muted-foreground"
            >
              {col}
            </div>
          ))}
        </div>

        {/* Data rows */}
        {rows.map((row) => (
          <div key={row} className="flex">
            <div className="flex h-8 w-20 shrink-0 items-center text-xs font-medium text-muted-foreground">
              {row}
            </div>
            {cols.map((col) => {
              const value = getValue(row, col);
              return (
                <Tooltip key={`${row}-${col}`}>
                  <TooltipTrigger asChild>
                    <div
                      className={cn(
                        "m-0.5 flex h-7 w-11 shrink-0 cursor-default items-center justify-center rounded text-xs font-medium transition-colors",
                        getHeatColor(value, max),
                        value > max * 0.5 ? "text-success-foreground" : "text-foreground"
                      )}
                    >
                      {formatValue(value)}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {row} - {col}: {formatValue(value)}
                    </p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
