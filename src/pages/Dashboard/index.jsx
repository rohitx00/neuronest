import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Plus, BrainCircuit, Target, Zap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gradient">Welcome back, User</h1>
          <p className="text-gray-400 mt-1">Here is your execution overview for today.</p>
        </div>
        <Button variant="default" className="w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-glow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Momentum Score</CardTitle>
            <Zap className="h-4 w-4 text-[var(--color-primary-blue)]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">84%</div>
            <p className="text-xs text-[var(--color-success)] mt-1">+2% from yesterday</p>
          </CardContent>
        </Card>

        <Card className="hover-glow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Deep Work</CardTitle>
            <Target className="h-4 w-4 text-[var(--color-primary-purple)]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">4h 20m</div>
            <p className="text-xs text-gray-400 mt-1">Daily goal: 6h</p>
          </CardContent>
        </Card>

        <Card className="hover-glow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Neural Connections</CardTitle>
            <BrainCircuit className="h-4 w-4 text-[var(--color-success)]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">12</div>
            <p className="text-xs text-gray-400 mt-1">Notes linked today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Focus Activity</CardTitle>
            <CardDescription>Your focus sessions over the last 7 days.</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-t border-white/5">
            <p className="text-sm text-gray-500">Chart Placeholder</p>
          </CardContent>
        </Card>

        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Priority Queue</CardTitle>
            <CardDescription>Top tasks for your current context.</CardDescription>
          </CardHeader>
          <CardContent className="border-t border-white/5 pt-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="h-4 w-4 rounded-full border-2 border-gray-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-200">Finalize Q3 Architecture</p>
                  <p className="text-xs text-gray-400">Due today • Project Alpha</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
