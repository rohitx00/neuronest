import React from "react";
import { useAppStore } from "../../store/useAppStore";

export default function Dashboard() {
  const tasks = useAppStore((state) => state.tasks);
  const goals = useAppStore((state) => state.goals);
  const userStats = useAppStore((state) => state.userStats);
  const insights = useAppStore((state) => state.insights);

  const priorityTasks = tasks
    .filter(t => t.status !== 'completed')
    .sort((a, b) => {
      const priorityWeights = { high: 3, medium: 2, low: 1 };
      return priorityWeights[b.priority] - priorityWeights[a.priority];
    })
    .slice(0, 3);

  const getPriorityColor = (priority) => {
    if (priority === 'high') return 'error';
    if (priority === 'medium') return 'tertiary';
    return 'primary';
  };

  const recommendation = insights.find(i => i.type === 'recommendation');

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight mb-2">Good morning, Alex.</h2>
        <p className="font-body text-on-surface-variant">Ready for deep work? You have {priorityTasks.length} critical tasks today.</p>
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
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-2 tracking-tight">{goals[0]?.title || 'System Active'} Focus</h3>
              <p className="text-on-surface-variant text-sm max-w-md font-body">Your neural map indicates high momentum. Keep the streak alive.</p>
              
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
              {priorityTasks.map((task) => {
                const color = getPriorityColor(task.priority);
                return (
                  <div key={task.id} className="glass-panel glass-panel-glow rounded-2xl p-4 flex items-center justify-between group transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center border border-white/5 group-hover:border-${color}/30 transition-colors`}>
                        <span className={`material-symbols-outlined text-${color}`}>{task.icon}</span>
                      </div>
                      <div>
                        <h4 className={`font-medium text-on-surface font-body group-hover:text-${color} transition-colors`}>{task.title}</h4>
                        <div className="flex items-center gap-3 text-xs text-on-surface-variant mt-1 font-label">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {task.estimatedTime}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className={`text-${color} font-medium flex items-center gap-1`}><span className="material-symbols-outlined text-[14px]">flag</span> {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
                        </div>
                      </div>
                    </div>
                    <button className={`opacity-0 group-hover:opacity-100 transition-opacity bg-white/5 hover:bg-${color}/20 text-on-surface hover:text-${color} px-4 py-2 rounded-lg text-sm font-medium border border-white/10 hover:border-${color}/30`}>
                      Start
                    </button>
                  </div>
                );
              })}
              
              {priorityTasks.length === 0 && (
                <div className="p-8 text-center text-on-surface-variant bg-surface-container rounded-2xl border border-white/5">
                  All critical tasks completed!
                </div>
              )}
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
                  {recommendation?.description || "You're doing great. Keep up the momentum."}
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
              <div className="text-2xl font-headline font-bold text-on-surface">{userStats.focusHours}h {userStats.focusMinutes}m</div>
            </div>
            <div className="glass-panel rounded-2xl p-4 flex flex-col justify-between hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-2 text-on-surface-variant/70 mb-3">
                <span className="material-symbols-outlined text-[16px]">show_chart</span>
                <span className="text-xs font-label">Consistency</span>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-2xl font-headline font-bold text-on-surface">{userStats.consistency}%</div>
                <div className="text-xs text-primary font-medium pb-1">+4%</div>
              </div>
            </div>
          </section>

          {/* 5. Goal Progress */}
          <section className="glass-panel rounded-3xl p-6">
            <h3 className="text-sm font-headline font-bold text-on-surface uppercase tracking-wider text-on-surface-variant/70 mb-6">Active Vectors</h3>
            <div className="space-y-5">
              {goals.map(goal => (
                <div key={goal.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-on-surface font-body">{goal.title}</span>
                    <span className={`text-xs font-label text-${goal.color} font-medium`}>{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                    <div className={`bg-gradient-to-r from-${goal.color}/50 to-${goal.color} h-1.5 rounded-full transition-all duration-500`} style={{ width: `${goal.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
