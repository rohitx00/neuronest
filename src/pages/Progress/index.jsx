import React from "react";

export default function Progress() {
  return (
    <div className="space-y-10">
      {/* Progress Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight">Progress Overview</h2>
          <p className="text-on-surface-variant mt-1 text-sm">Tracking your cognitive performance and momentum.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="glass-panel rounded-full p-1 flex">
            <button className="px-4 py-1.5 rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Today</button>
            <button className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-on-surface shadow-sm">Week</button>
            <button className="px-4 py-1.5 rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Month</button>
            <button className="px-4 py-1.5 rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">Year</button>
          </div>
          <button className="glass-panel px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/5 transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined text-[18px]">file_download</span>
            Export
          </button>
          <button className="glass-panel px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-white/5 transition-colors text-primary">
            <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
            Compare Mode
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Hero & Goals) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Productivity Score Hero */}
          <div className="glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            {/* Circular Chart */}
            <div className="relative w-48 h-48 shrink-0">
              <svg className="circular-chart text-primary w-full h-full drop-shadow-[0_0_15px_rgba(176,198,255,0.3)]" viewBox="0 0 36 36">
                <path className="circle-bg fill-none stroke-white/10 stroke-[3.8]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                <path className="circle fill-none stroke-[2.8] stroke-current stroke-linecap-round animate-[progress_1s_ease-out_forwards]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="84, 100"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline text-5xl font-black text-on-surface">84</span>
                <span className="text-xs text-on-surface-variant tracking-widest uppercase">Score</span>
              </div>
            </div>
            
            <div className="flex-1 relative z-10 text-center md:text-left">
              <h3 className="font-headline text-2xl font-bold mb-2">Excellent Focus Velocity</h3>
              <p className="text-on-surface-variant mb-6 leading-relaxed">Your cognitive output is highly efficient this week. You've maintained deep work states effectively.</p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <div className="bg-tertiary-container/20 border border-tertiary-container/30 px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="text-tertiary-container">🔥</span>
                  <span className="text-sm font-semibold text-tertiary">Strong Momentum</span>
                </div>
                <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                  <span className="text-sm font-medium">+8% better than last week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.05] transition-colors cursor-default group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">timer</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant tracking-wider uppercase font-label mb-1">Focus Hours</p>
              <p className="font-headline text-2xl font-bold text-on-surface">24h <span className="text-lg text-on-surface-variant font-medium">12m</span></p>
            </div>
            <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.05] transition-colors cursor-default group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">task_alt</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant tracking-wider uppercase font-label mb-1">Tasks Done</p>
              <p className="font-headline text-2xl font-bold text-on-surface">41</p>
            </div>
            <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.05] transition-colors cursor-default group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">donut_large</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant tracking-wider uppercase font-label mb-1">Consistency</p>
              <p className="font-headline text-2xl font-bold text-on-surface">82%</p>
            </div>
            <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.05] transition-colors cursor-default group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant tracking-wider uppercase font-label mb-1">Current Streak</p>
              <p className="font-headline text-2xl font-bold text-on-surface">14 <span className="text-lg text-on-surface-variant font-medium">Days</span></p>
            </div>
          </div>

          {/* Goal Progress */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-lg font-bold">Active Objectives</h3>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">GSoC Preparation</span>
                  </div>
                  <span className="text-sm font-bold text-primary">72%</span>
                </div>
                <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full relative w-[72%]">
                    <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="font-medium">Vacation-EXP</span>
                  </div>
                  <span className="text-sm font-bold text-secondary">58%</span>
                </div>
                <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full relative w-[58%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                    <span className="font-medium">AI Startup</span>
                  </div>
                  <span className="text-sm font-bold text-tertiary">19%</span>
                </div>
                <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full relative w-[19%]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Insights & Heatmap) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* AI Insights Panel */}
          <div className="glass-panel rounded-2xl p-6 relative h-full flex flex-col">
             <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-[0.03] blur-xl z-[-1] rounded-2xl transition-opacity hover:opacity-[0.06]"></div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>smart_toy</span>
              <h3 className="font-headline text-lg font-bold text-secondary-fixed">Nexus Insights</h3>
            </div>
            <div className="space-y-4 flex-1">
              <div className="bg-surface/50 border border-white/5 rounded-xl p-4 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                <p className="text-sm text-on-surface-variant leading-relaxed"><strong className="text-on-surface">Strength:</strong> Your deep focus peaks consistently between <span className="text-primary">9:00 AM</span> and <span className="text-primary">11:30 AM</span>.</p>
              </div>
              <div className="bg-surface/50 border border-white/5 rounded-xl p-4 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                <p className="text-sm text-on-surface-variant leading-relaxed"><strong className="text-on-surface">Suggestion:</strong> Schedule intensive programming tasks before 12 PM. Shift administrative work to post-lunch periods to align with your natural energy dip.</p>
              </div>
            </div>
          </div>

          {/* Focus Analytics Mini Graph */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline text-sm font-bold tracking-wide uppercase text-on-surface-variant">Daily Focus Trend</h3>
            </div>
            <div className="h-32 flex items-end justify-between gap-1 mt-4">
              <div className="w-full bg-primary/20 rounded-t-sm h-[20%] hover:bg-primary/40 transition-colors"></div>
              <div className="w-full bg-primary/30 rounded-t-sm h-[40%] hover:bg-primary/50 transition-colors"></div>
              <div className="w-full bg-primary rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(176,198,255,0.3)]"></div>
              <div className="w-full bg-primary/80 rounded-t-sm h-[75%] hover:bg-primary transition-colors"></div>
              <div className="w-full bg-primary/50 rounded-t-sm h-[45%] hover:bg-primary/70 transition-colors"></div>
              <div className="w-full bg-primary/20 rounded-t-sm h-[15%] hover:bg-primary/40 transition-colors"></div>
              <div className="w-full bg-primary/40 rounded-t-sm h-[35%] hover:bg-primary/60 transition-colors"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-on-surface-variant font-label">
              <span>Mon</span><span>Tue</span><span className="text-primary font-bold">Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Consistency Heatmap */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline text-sm font-bold tracking-wide uppercase text-on-surface-variant">Consistency Heatmap</h3>
            </div>
            <div className="flex flex-col gap-1 overflow-x-auto pb-2 no-scrollbar">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-primary/20"></div><div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-white/5"></div><div className="w-3 h-3 rounded-sm bg-primary"></div><div className="w-3 h-3 rounded-sm bg-primary/60"></div><div className="w-3 h-3 rounded-sm bg-primary/20"></div><div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-primary"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-white/5"></div><div className="w-3 h-3 rounded-sm bg-primary/20"></div><div className="w-3 h-3 rounded-sm bg-primary/60"></div><div className="w-3 h-3 rounded-sm bg-primary"></div><div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-primary/20"></div><div className="w-3 h-3 rounded-sm bg-primary/60"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-primary"></div><div className="w-3 h-3 rounded-sm bg-primary"></div><div className="w-3 h-3 rounded-sm bg-primary/60"></div><div className="w-3 h-3 rounded-sm bg-primary/20"></div><div className="w-3 h-3 rounded-sm bg-white/5"></div><div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-primary"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-primary/20"></div><div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-primary/60"></div><div className="w-3 h-3 rounded-sm bg-primary"></div><div className="w-3 h-3 rounded-sm bg-primary"></div><div className="w-3 h-3 rounded-sm bg-primary/60"></div><div className="w-3 h-3 rounded-sm bg-primary/40"></div><div className="w-3 h-3 rounded-sm bg-primary"></div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-2 items-center text-[10px] text-on-surface-variant font-label">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-[1px] bg-white/5"></div>
                <div className="w-2 h-2 rounded-[1px] bg-primary/20"></div>
                <div className="w-2 h-2 rounded-[1px] bg-primary/60"></div>
                <div className="w-2 h-2 rounded-[1px] bg-primary"></div>
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-headline text-sm font-bold tracking-wide uppercase text-on-surface-variant mb-4">Recent Unlocks</h3>
            <div className="flex gap-3">
              <div className="bg-surface border border-white/10 rounded-lg p-3 flex-1 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-primary mb-1 group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>local_fire_department</span>
                <span className="text-[10px] font-medium leading-tight">7-Day<br/>Streak</span>
              </div>
              <div className="bg-surface border border-white/10 rounded-lg p-3 flex-1 flex flex-col items-center justify-center text-center group hover:border-secondary/50 transition-colors">
                <span className="material-symbols-outlined text-secondary mb-1 group-hover:scale-110 transition-transform" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                <span className="text-[10px] font-medium leading-tight">20 Deep<br/>Sessions</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes progress {
          0% { stroke-dasharray: 0 100; }
        }
      `}} />
    </div>
  );
}
