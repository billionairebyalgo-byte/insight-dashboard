import { TrendIndicator } from "@/ui/primitives";
import { ConversionHighlight } from "../types";

interface ConversionHighlightsProps {
  highlights: ConversionHighlight[];
}

export function ConversionHighlights({ highlights }: ConversionHighlightsProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Conversion Highlights</h3>
        <p className="text-sm text-muted-foreground">
          Key conversion metrics
        </p>
      </div>
      <div className="space-y-4">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-md bg-secondary/50 px-4 py-3"
          >
            <span className="font-medium">{item.name}</span>
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold">{item.rate}%</span>
              <TrendIndicator
                value={Math.abs(item.change)}
                direction={item.change >= 0 ? "up" : "down"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
