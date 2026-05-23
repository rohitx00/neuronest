import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import Dashboard from "../pages/Dashboard";
import BrainMap from "../pages/BrainMap";
import Tasks from "../pages/Tasks";
import Progress from "../pages/Progress";
import WeeklyReports from "../pages/WeeklyReports";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="brainmap" element={<BrainMap />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="progress" element={<Progress />} />
        <Route path="reports" element={<WeeklyReports />} />
      </Route>
      {/* Catch-all redirect to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
