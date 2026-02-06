import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsOverviewPage from "./pages/AnalyticsOverviewPage";
import RealtimeAnalyticsPage from "./pages/RealtimeAnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import FunnelsPage from "./pages/FunnelsPage";
import CohortsPage from "./pages/CohortsPage";
import RetentionPage from "./pages/RetentionPage";
import PerformancePage from "./pages/PerformancePage";
import ExportsPage from "./pages/ExportsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnalyticsOverviewPage />} />
          <Route path="/realtime" element={<RealtimeAnalyticsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/funnels" element={<FunnelsPage />} />
          <Route path="/cohorts" element={<CohortsPage />} />
          <Route path="/retention" element={<RetentionPage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/exports" element={<ExportsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
