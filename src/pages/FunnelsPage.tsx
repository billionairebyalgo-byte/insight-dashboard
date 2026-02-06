import { useState, useEffect } from "react";
import { PageLayout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  FunnelVisualization,
  FunnelList,
  fetchFunnels,
  Funnel,
} from "@/features/analytics/funnels";

export default function FunnelsPage() {
  const [funnels, setFunnels] = useState<Funnel[]>([]);
  const [selectedFunnel, setSelectedFunnel] = useState<Funnel | null>(null);

  useEffect(() => {
    fetchFunnels().then((data) => {
      setFunnels(data);
      if (data.length > 0) setSelectedFunnel(data[0]);
    });
  }, []);

  return (
    <PageLayout
      title="Funnels"
      description="Analyze conversion funnels"
      actions={
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Funnel
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <FunnelList
            funnels={funnels}
            selectedId={selectedFunnel?.id}
            onSelect={setSelectedFunnel}
          />
        </div>
        <div className="lg:col-span-2">
          {selectedFunnel && <FunnelVisualization funnel={selectedFunnel} />}
        </div>
      </div>
    </PageLayout>
  );
}
