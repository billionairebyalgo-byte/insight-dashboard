import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Radio,
  FileText,
  GitBranch,
  Users,
  RotateCcw,
  Gauge,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Overview", icon: LayoutDashboard },
  { path: "/realtime", label: "Live", icon: Radio },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/funnels", label: "Funnels", icon: GitBranch },
  { path: "/cohorts", label: "Cohorts", icon: Users },
  { path: "/retention", label: "Retain", icon: RotateCcw },
  { path: "/performance", label: "Perf", icon: Gauge },
  { path: "/exports", label: "Export", icon: Download },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 lg:hidden">
      <div className="flex items-center justify-around overflow-x-auto px-2 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive && "text-primary")} />
              <span className="truncate">{item.label}</span>
              {isActive && (
                <span className="absolute bottom-1 h-0.5 w-6 rounded-full bg-primary" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
