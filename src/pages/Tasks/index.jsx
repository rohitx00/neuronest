import React from "react";

export default function Tasks() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">Morning Routine</h2>
          <p className="text-on-surface-variant text-lg">You have 4 high-priority tasks remaining today.</p>
        </div>

        {/* AI Suggestion Card */}
        <div className="glass-panel rounded-xl p-4 flex items-center gap-4 w-full md:w-auto hover:shadow-[0_0_60px_rgba(85,141,255,0.2)] transition-shadow relative overflow-hidden group cursor-pointer border-primary/30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center z-10">
            <span className="material-symbols-outlined text-secondary">smart_toy</span>
          </div>
          <div className="z-10 pr-4">
            <p className="text-xs text-secondary font-medium mb-0.5 tracking-wider uppercase">AI Next Action</p>
            <p className="text-sm font-medium">DSA Revision <span className="text-on-surface-variant font-normal">— Missed yesterday</span></p>
          </div>
          <button className="z-10 ml-auto bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Top 3 Priority Tasks */}
      <section>
        <h3 className="font-headline text-xl font-semibold mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">local_fire_department</span>
          Priority Deck
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Priority Card 1 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between h-56 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-error/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-error/20 text-error text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-error"></span> High Priority
                </span>
                <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_horiz</span></button>
              </div>
              <h4 className="font-headline text-2xl font-bold leading-tight mb-2">Build Navbar Component</h4>
              <p className="text-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 30 mins remaining
              </p>
            </div>
            <button className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 rounded-xl text-sm font-semibold transition-colors mt-4 border border-outline-variant/20 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">play_arrow</span> Start Focus
            </button>
          </div>

          {/* Priority Card 2 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between h-56 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-primary-container/20 text-primary text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Medium Priority
                </span>
                <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_horiz</span></button>
              </div>
              <h4 className="font-headline text-2xl font-bold leading-tight mb-2">Draft Design System Specs</h4>
              <p className="text-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 45 mins block
              </p>
            </div>
            <button className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 rounded-xl text-sm font-semibold transition-colors mt-4 border border-outline-variant/20 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">play_arrow</span> Start Focus
            </button>
          </div>

          {/* Priority Card 3 */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col justify-between h-56 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-tertiary/20 text-tertiary text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Review
                </span>
                <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_horiz</span></button>
              </div>
              <h4 className="font-headline text-2xl font-bold leading-tight mb-2">Weekly PR Merge</h4>
              <p className="text-sm text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">group</span> Team Core
              </p>
            </div>
            <button className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 rounded-xl text-sm font-semibold transition-colors mt-4 border border-outline-variant/20 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">play_arrow</span> Start Focus
            </button>
          </div>
        </div>
      </section>

      {/* Task Management Master Section */}
      <section className="glass-panel rounded-2xl p-2">
        {/* Tooling Header */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-outline-variant/10 gap-4">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            <button className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 whitespace-nowrap">Today</button>
            <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Upcoming</button>
            <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Completed</button>
            <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">Overdue</button>
            <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">All Tasks</button>
          </div>
          
          <div className="bg-surface-container-low p-1 rounded-lg border border-outline-variant/20 flex gap-1 self-start md:self-auto">
            <button className="bg-surface-variant text-on-surface p-1.5 rounded-md shadow-sm">
              <span className="material-symbols-outlined text-[18px] block">view_list</span>
            </button>
            <button className="text-on-surface-variant hover:text-on-surface p-1.5 rounded-md hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined text-[18px] block">view_column</span>
            </button>
            <button className="text-on-surface-variant hover:text-on-surface p-1.5 rounded-md hover:bg-surface-variant/50 transition-colors">
              <span className="material-symbols-outlined text-[18px] block">timeline</span>
            </button>
          </div>
        </div>

        {/* List View Canvas */}
        <div className="p-2 space-y-2">
          
          {/* Task Row 1 */}
          <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl hover:bg-surface-variant/10 transition-colors gap-4 border border-transparent hover:border-outline-variant/10">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <input className="w-5 h-5 rounded border-outline-variant/40 bg-surface text-primary focus:ring-primary focus:ring-offset-0 bg-transparent cursor-pointer" type="checkbox"/>
              <div>
                <h5 className="text-base font-semibold group-hover:text-primary transition-colors">Review GSoC Proposal</h5>
                <div className="flex items-center gap-3 mt-1 text-xs text-on-surface-variant">
                  <span className="bg-primary-container/20 text-primary px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase">Planning</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 45 mins</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto pl-9 md:pl-0">
              <div className="hidden lg:flex items-center gap-3 w-32">
                <div className="w-full bg-surface-container-high rounded-full h-1.5">
                  <div className="bg-primary h-1.5 rounded-full" style={{width: "72%"}}></div>
                </div>
                <span className="text-xs text-on-surface-variant w-8">72%</span>
              </div>
              <div className="flex items-center gap-2 ml-auto md:ml-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs border border-outline-variant/30 hover:border-primary/50 hover:text-primary px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">hub</span> BrainMap
                </button>
                <button className="text-xs bg-surface-container-high hover:bg-surface-variant text-on-surface px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">play_arrow</span> Start
                </button>
              </div>
            </div>
          </div>

          {/* Task Row 2 */}
          <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl hover:bg-surface-variant/10 transition-colors gap-4 border border-transparent hover:border-outline-variant/10">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <input className="w-5 h-5 rounded border-outline-variant/40 bg-surface text-primary focus:ring-primary focus:ring-offset-0 bg-transparent cursor-pointer" type="checkbox"/>
              <div>
                <h5 className="text-base font-semibold group-hover:text-primary transition-colors">Update User Auth Flow</h5>
                <div className="flex items-center gap-3 mt-1 text-xs text-on-surface-variant">
                  <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase">Development</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 2 hrs</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto pl-9 md:pl-0">
              <div className="hidden lg:flex items-center gap-3 w-32">
                <div className="w-full bg-surface-container-high rounded-full h-1.5">
                  <div className="bg-secondary h-1.5 rounded-full" style={{width: "15%"}}></div>
                </div>
                <span className="text-xs text-on-surface-variant w-8">15%</span>
              </div>
              <div className="flex items-center gap-2 ml-auto md:ml-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs border border-outline-variant/30 hover:border-primary/50 hover:text-primary px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">hub</span> BrainMap
                </button>
                <button className="text-xs bg-surface-container-high hover:bg-surface-variant text-on-surface px-3 py-1.5 rounded-lg font-medium transition-colors flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">play_arrow</span> Start
                </button>
              </div>
            </div>
          </div>

          {/* Task Row 3 (Completed) */}
          <div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl hover:bg-surface-variant/10 transition-colors gap-4 opacity-50">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <input defaultChecked className="w-5 h-5 rounded border-primary bg-primary text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer" type="checkbox"/>
              <div>
                <h5 className="text-base font-semibold line-through">Standup Preparation</h5>
                <div className="flex items-center gap-3 mt-1 text-xs text-on-surface-variant">
                  <span className="bg-outline/20 text-outline px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase">Routine</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div className="p-4 border-t border-outline-variant/10 text-center">
          <button className="text-sm font-medium text-primary hover:text-primary-fixed transition-colors">View 12 more tasks</button>
        </div>
      </section>
    </div>
  );
}
