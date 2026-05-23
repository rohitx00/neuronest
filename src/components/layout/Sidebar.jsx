import React from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BrainCircuit, 
  CheckSquare, 
  TrendingUp, 
  FileText, 
  Settings,
  X
} from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "BrainMap", href: "/brainmap", icon: BrainCircuit },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Progress", href: "/progress", icon: TrendingUp },
  { name: "Weekly Reports", href: "/reports", icon: FileText },
];

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" 
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 glass-panel transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary-blue)] to-[var(--color-primary-purple)] flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gradient">Neuronest</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) onClose();
                }}
                className={({ isActive }) => cn(
                  "group flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-all duration-300",
                  isActive 
                    ? "active-glow text-white" 
                    : "text-gray-400 hover:bg-white/5 hover:text-gray-100"
                )}
              >
                <Icon className={cn(
                  "mr-3 flex-shrink-0 h-5 w-5 transition-colors duration-300",
                  "group-hover:text-[var(--color-primary-blue)]"
                )} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="group flex w-full items-center px-3 py-2.5 text-sm font-medium rounded-xl text-gray-400 hover:bg-white/5 hover:text-gray-100 transition-all duration-300">
            <Settings className="mr-3 flex-shrink-0 h-5 w-5 group-hover:text-gray-100 transition-colors" />
            Settings
          </button>
        </div>
      </div>
    </>
  );
}
