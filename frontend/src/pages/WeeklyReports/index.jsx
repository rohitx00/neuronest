import React from "react";
import { useAppStore } from "../../store/useAppStore";

export default function WeeklyReports() {
  const userStats = useAppStore((state) => state.userStats);
  const insights = useAppStore((state) => state.insights);

  const winInsight = insights.find(i => i.type === 'win');
  const challengeInsight = insights.find(i => i.type === 'challenge');
  const recommendationInsight = insights.find(i => i.type === 'recommendation');

  return (
    <div className="space-y-12">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4 bg-surface-container/50 p-1.5 rounded-full border border-white/5">
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_left</span>
          </button>
          <span className="text-sm font-headline font-semibold px-2">May 18 – May 24</span>
          <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer group">
            <span className="text-xs font-label text-on-surface-variant uppercase tracking-wider group-hover:text-on-surface transition-colors">Compare</span>
            <div className="relative w-10 h-5 bg-surface-container-high rounded-full border border-white/10 transition-colors">
              <div className="absolute left-1 top-1 w-3 h-3 bg-on-surface-variant rounded-full transition-transform"></div>
            </div>
          </label>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container border border-white/10 text-sm font-medium hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span> Export
          </button>
        </div>
      </header>

      {/* Hero Summary & Metrics Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Hero Card */}
        <div className="lg:col-span-4 glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center items-center text-center group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors"></div>
          <h2 className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-6 z-10">Productivity Score</h2>
          
          <div className="relative w-40 h-40 flex items-center justify-center mb-6 z-10">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle className="text-surface-container-high" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-primary transition-all duration-1000 ease-out" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray={`${userStats.score * 2.83} 283`} strokeDashoffset="0" strokeWidth="6"></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-headline font-black text-on-surface tracking-tighter">{userStats.score}</span>
              <span className="text-xs text-on-surface-variant">/100</span>
            </div>
          </div>
          
          <div className="z-10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary border border-tertiary/20 text-xs font-semibold">
              <span className="material-symbols-outlined text-[14px]">local_fire_department</span> Strong Momentum
            </div>
            <p className="text-xs text-primary-fixed-dim flex items-center gap-1 mt-2">
              <span className="material-symbols-outlined text-[14px]">trending_up</span> +12% from last week
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.03] transition-colors flex flex-col justify-between h-full min-h-[140px]">
            <div className="flex items-center gap-2 text-on-surface-variant mb-2">
              <span className="material-symbols-outlined text-[18px]">task_alt</span>
              <h3 className="text-xs font-label uppercase tracking-wider">Tasks Completed</h3>
            </div>
            <div className="text-3xl font-headline font-bold text-on-surface">{userStats.tasksDone}</div>
          </div>
          
          <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.03] transition-colors flex flex-col justify-between h-full min-h-[140px]">
            <div className="flex items-center gap-2 text-primary mb-2">
              <span className="material-symbols-outlined text-[18px]">timer</span>
              <h3 className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Focus Hours</h3>
            </div>
            <div className="text-3xl font-headline font-bold text-on-surface">{userStats.focusHours}<span className="text-lg text-on-surface-variant ml-1 font-medium">h</span></div>
          </div>
          
          <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.03] transition-colors flex flex-col justify-between h-full min-h-[140px]">
            <div className="flex items-center gap-2 text-secondary mb-2">
              <span className="material-symbols-outlined text-[18px]">psychology</span>
              <h3 className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Deep Work</h3>
            </div>
            <div className="text-3xl font-headline font-bold text-on-surface">{userStats.deepWork}</div>
          </div>
          
          <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.03] transition-colors flex flex-col justify-between h-full min-h-[140px]">
            <div className="flex items-center gap-2 text-tertiary mb-2">
              <span className="material-symbols-outlined text-[18px]">model_training</span>
              <h3 className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Consistency</h3>
            </div>
            <div className="text-3xl font-headline font-bold text-on-surface">{userStats.consistency}<span className="text-lg text-on-surface-variant ml-1 font-medium">%</span></div>
          </div>
          
          <div className="glass-panel rounded-xl p-5 hover:bg-white/[0.03] transition-colors flex flex-col justify-between h-full min-h-[140px] md:col-span-2 lg:col-span-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center gap-2 text-tertiary-container mb-2 relative z-10">
              <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
              <h3 className="text-xs font-label uppercase tracking-wider text-on-surface-variant">Streak</h3>
            </div>
            <div className="text-3xl font-headline font-bold text-on-surface relative z-10">{userStats.streak}<span className="text-lg text-on-surface-variant ml-1 font-medium">{userStats.streakType}</span></div>
          </div>
        </div>
      </section>

      {/* AI Reflections */}
      <section className="space-y-4">
        <h2 className="text-sm font-headline font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">auto_awesome</span> AI Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-panel rounded-xl p-5 border-l-2 border-l-primary/50 hover:shadow-[0_0_20px_rgba(176,198,255,0.1)] transition-shadow">
            <h3 className="text-xs font-label text-primary uppercase tracking-wider mb-2">{winInsight?.title || 'Biggest Win'}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{winInsight?.description}</p>
          </div>
          
          <div className="glass-panel rounded-xl p-5 border-l-2 border-l-error/50">
            <h3 className="text-xs font-label text-error uppercase tracking-wider mb-2">{challengeInsight?.title || 'Biggest Challenge'}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{challengeInsight?.description}</p>
          </div>
          
          <div className="glass-panel rounded-xl p-5 border-l-2 border-l-secondary/50 hover:shadow-[0_0_20px_rgba(221,183,255,0.1)] transition-shadow">
            <h3 className="text-xs font-label text-secondary uppercase tracking-wider mb-2">{recommendationInsight?.title || 'Recommendation'}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">{recommendationInsight?.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
