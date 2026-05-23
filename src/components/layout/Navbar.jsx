import React, { useState, useEffect } from "react";
import { Search, Mic, Bell, Menu } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar({ onMenuClick }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 glass-panel border-b">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden md:flex flex-col">
          <span className="text-sm font-medium text-gray-200">{formattedDate}</span>
          <span className="text-xs text-gray-500">{formattedTime}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-1 justify-end max-w-md">
        <div className="relative flex-1 max-w-sm hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-[var(--color-primary-blue)]/50 focus:ring-1 focus:ring-[var(--color-primary-blue)]/50 sm:text-sm transition-all duration-300"
            placeholder="Search tasks, maps..."
          />
        </div>
        
        <Button variant="premium" size="icon" className="rounded-full">
          <Mic className="h-4 w-4 text-[var(--color-primary-blue)]" />
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-[var(--color-primary-blue)] shadow-[0_0_8px_rgba(14,165,233,0.8)]"></span>
        </Button>
      </div>
    </header>
  );
}
