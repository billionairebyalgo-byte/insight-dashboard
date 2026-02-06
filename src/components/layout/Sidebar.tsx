import { useState } from "react";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Overview", icon: LayoutDashboard },
  { path: "/realtime", label: "Realtime", icon: Radio },
  { path: "/reports", label: "Reports", icon: FileText },
  { path: "/funnels", label: "Funnels", icon: GitBranch },
  { path: "/cohorts", label: "Cohorts", icon: Users },
  { path: "/retention", label: "Retention", icon: RotateCcw },
  { path: "/performance", label: "Performance", icon: Gauge },
  { path: "/exports", label: "Exports", icon: Download },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-4 top-4 z-50 flex h-[calc(100vh-2rem)] flex-col rounded-xl border bg-card shadow-lg transition-all duration-300",
        collapsed ? "w-16" : "w-56"
      )}
    >
      {/* Header */}
      <div className="flex h-14 items-center justify-between border-b px-4">
        {!collapsed && (
          <span className="text-lg font-semibold tracking-tight animate-fade-in">
            Analytics
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {/* Active indicator */}
              {isActive && (
                <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary-foreground" />
              )}
              
              <item.icon className="h-5 w-5 shrink-0" />
              
              {!collapsed && (
                <span className="animate-fade-in truncate">{item.label}</span>
              )}

              {/* Tooltip on collapse */}
              {collapsed && (
                <div className="absolute left-full ml-2 hidden rounded-md bg-foreground px-2 py-1 text-xs text-background group-hover:block">
                  {item.label}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-2">
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-muted-foreground",
            collapsed && "justify-center"
          )}
        >
          {!collapsed && <span>DreamPilot</span>}
        </div>
      </div>
    </aside>
  );
}
