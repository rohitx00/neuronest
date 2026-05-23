import React from "react";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Plus, Filter } from "lucide-react";

export default function Tasks() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gradient">Task Execution</h1>
          <p className="text-gray-400 mt-1">Manage and conquer your focus items.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
          <Button className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columns Placeholder */}
        {["To Do", "In Progress", "Done"].map((column) => (
          <div key={column} className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-semibold text-gray-300">{column}</h3>
              <span className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-400">3</span>
            </div>
            
            {[1, 2, 3].map((task) => (
              <Card key={task} className="hover:border-white/20 transition-all cursor-grab active:cursor-grabbing">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-[var(--color-primary-blue)]/20 text-[var(--color-primary-blue)]">
                      Feature
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                  </div>
                  <p className="text-sm font-medium text-gray-200">
                    Implement {column} state management logic
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Due tomorrow</span>
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-warning)]/50" />
                      Med
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
