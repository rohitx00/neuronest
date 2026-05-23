import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { FileText, Download } from "lucide-react";

export default function WeeklyReports() {
  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gradient">Weekly Reflection</h1>
          <p className="text-gray-400 mt-1">Review your past weeks and plan ahead.</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export All
        </Button>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((week) => (
          <Card key={week} className="hover-glow cursor-pointer transition-all hover:bg-white/[0.04]">
            <CardContent className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[var(--color-primary-purple)]/10 text-[var(--color-primary-purple)]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Week {24 - week} Review</h3>
                  <p className="text-sm text-gray-400">Oct {10 - week} - Oct {16 - week}, 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full sm:w-auto">
                <div className="text-center">
                  <p className="text-xs text-gray-500">Score</p>
                  <p className="font-semibold text-[var(--color-success)]">A-</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Tasks</p>
                  <p className="font-semibold text-gray-300">42/45</p>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
