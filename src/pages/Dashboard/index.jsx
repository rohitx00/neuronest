import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight mb-2">Good morning, Alex.</h2>
        <p className="font-body text-on-surface-variant">Ready for deep work? You have 3 critical tasks today.</p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Hero & Tasks (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 1. Hero Section: Neuronest Universe */}
          <section className="glass-panel rounded-3xl p-8 relative overflow-hidden min-h-[280px] flex flex-col justify-end group">
            <div 
              className="absolute inset-0 z-0 opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLupG6g__sT0NRu0RbjUz48Ky5pOl6GYf62qX9S2HCmimK195PT0JJXOJ6Pgq3Rhsg5WajzaVENQuNroDXwLnq2w9EufxDD23IeUD99LjaD24JmJ5Mzf0a9tZqEKSH1SSbVjxrzkun248k361I6G-JOUPMUTgeX3iuYeWQPtwczcB6rsSNkZ0nDE2GkxC8BuOKQZek_52KhKdXoEJGOYq6zHrZa1DV3qHdOL8Yvm1Wu6cHgVsQkUDtQiaMZeDN32MIzjYEsrJrPSg')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
            
            <div className="relative z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-label mb-4 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Universe Active
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2 tracking-tight">GSoC Preparation Focus</h3>
              <p className="text-on-surface-variant text-sm max-w-md font-body">Your neural map indicates high momentum in algorithmic problem solving. Keep the streak alive.</p>
              
              <div className="flex gap-4 mt-6">
                <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-body font-medium text-sm hover:shadow-[0_0_20px_rgba(176,198,255,0.3)] transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                  Enter Flow State
                </button>
              </div>
            </div>
          </section>

          {/* 2. Top 3 Tasks */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-lg font-headline font-bold text-on-surface">Critical Path</h3>
              <button className="text-primary text-sm font-medium hover:text-primary-fixed transition-colors">View All</button>
            </div>
            
            <div className="space-y-3">
              {/* Task 1 */}
              <div className="glass-panel glass-panel-glow rounded-2xl p-4 flex items-center justify-between group transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-colors">
                    <span className="material-symbols-outlined text-primary">code</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-on-surface font-body group-hover:text-primary transition-colors">Implement Graph Traversal</h4>
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-1 font-label">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 45m</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-error font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">flag</span> High</span>
                    </div>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/5 hover:bg-primary/20 text-on-surface hover:text-primary px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-primary/30">
                  Start
                </button>
              </div>

              {/* Task 2 */}
              <div className="glass-panel glass-panel-glow rounded-2xl p-4 flex items-center justify-between group transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center border border-white/5 group-hover:border-secondary/30 transition-colors">
                    <span className="material-symbols-outlined text-secondary">edit_document</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-on-surface font-body group-hover:text-secondary transition-colors">Review GSoC Proposal Draft</h4>
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-1 font-label">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 30m</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-tertiary font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">flag</span> Medium</span>
                    </div>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/5 hover:bg-secondary/20 text-on-surface hover:text-secondary px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-secondary/30">
                  Start
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Stats, AI & Goals (4 cols) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* 4. AI Recommendation */}
          <section className="ai-gradient-border p-6 shadow-[0_0_30px_rgba(221,183,255,0.05)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(221,183,255,0.2)]">
                <span className="material-symbols-outlined text-secondary text-[20px]">auto_awesome</span>
              </div>
              <div>
                <h4 className="text-sm font-headline font-bold text-on-surface mb-1 flex items-center gap-2">
                  Neuronest Insight
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-secondary/20 text-secondary border border-secondary/30 uppercase tracking-wider">Live</span>
                </h4>
                <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-4">
                  You focus best before noon. Suggested immediate action: <span className="text-on-surface font-medium">DSA Revision</span>.
                </p>
                <button className="w-full bg-surface-container-high hover:bg-surface-bright text-on-surface px-4 py-2.5 rounded-xl font-body text-sm font-medium border border-white/10 hover:border-secondary/30 transition-all flex justify-center items-center gap-2 group">
                  Start 20 Min Focus
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform text-secondary">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>

          {/* 3. Stats Grid */}
          <section className="grid grid-cols-2 gap-4">
            <div className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-2 text-on-surface-variant/70 mb-3">
                <span className="material-symbols-outlined text-[16px]">timer</span>
                <span className="text-xs font-label">Focus Hours</span>
              </div>
              <div className="text-2xl font-headline font-bold text-on-surface">5h 21m</div>
            </div>
            <div className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-2 text-on-surface-variant/70 mb-3">
                <span className="material-symbols-outlined text-[16px]">show_chart</span>
                <span className="text-xs font-label">Consistency</span>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-2xl font-headline font-bold text-on-surface">82%</div>
                <div className="text-xs text-primary font-medium pb-1">+4%</div>
              </div>
            </div>
          </section>

          {/* 5. Goal Progress */}
          <section className="glass-panel rounded-3xl p-6">
            <h3 className="text-sm font-headline font-bold text-on-surface uppercase tracking-wider text-on-surface-variant/70 mb-6">Active Vectors</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-on-surface font-body">GSoC Preparation</span>
                  <span className="text-xs font-label text-primary font-medium">72%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/50 to-primary h-1.5 rounded-full" style={{ width: "72%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-on-surface font-body">Vacation-EXP App</span>
                  <span className="text-xs font-label text-secondary font-medium">58%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-secondary/50 to-secondary h-1.5 rounded-full" style={{ width: "58%" }} />
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
