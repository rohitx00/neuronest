import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/Card";
import { TrendingUp, Award, Calendar } from "lucide-react";

export default function Progress() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gradient">Progress & Momentum</h1>
        <p className="text-gray-400 mt-1">Track your growth and execution consistency.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Current Streak", value: "14 Days", icon: TrendingUp, color: "text-[var(--color-primary-blue)]" },
          { title: "Tasks Completed", value: "128", icon: CheckSquareIcon, color: "text-[var(--color-success)]" },
          { title: "Focus Hours", value: "42h", icon: ClockIcon, color: "text-[var(--color-primary-purple)]" },
          { title: "Achievements", value: "8", icon: Award, color: "text-[var(--color-warning)]" }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="hover-glow">
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-100">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="h-[400px]">
        <CardHeader>
          <CardTitle>Consistency Heatmap</CardTitle>
          <CardDescription>Your daily execution mapped over the last 6 months.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-[300px] border-t border-white/5">
          <div className="flex flex-col items-center opacity-50">
            <Calendar className="w-12 h-12 mb-4 text-gray-400" />
            <p className="text-sm text-gray-400">Heatmap visualization placeholder</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Temporary inline icons to avoid extra imports if not at top
function CheckSquareIcon(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>;
}
function ClockIcon(props) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
}
