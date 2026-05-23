import React, { useState } from "react";
import { useAppStore } from "../../store/useAppStore";

export default function Tasks() {
  const tasks = useAppStore((state) => state.tasks);
  const goals = useAppStore((state) => state.goals);
  const toggleTaskStatus = useAppStore((state) => state.toggleTaskStatus);

  const [activeTab, setActiveTab] = useState('Today');

  // Filter tasks based on active tab
  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'All Tasks') return true;
    if (activeTab === 'Completed') return task.status === 'completed';
    if (activeTab === 'Today') return task.dueDate === 'Today' && task.status !== 'completed';
    if (activeTab === 'Upcoming') return task.dueDate === 'Upcoming' && task.status !== 'completed';
    return task.status !== 'completed';
  });

  // Get Top 3 Priority Tasks
  const priorityTasks = tasks
    .filter(t => t.status !== 'completed' && t.dueDate === 'Today')
    .sort((a, b) => {
      const priorityWeights = { high: 3, medium: 2, low: 1 };
      return priorityWeights[b.priority] - priorityWeights[a.priority];
    })
    .slice(0, 3);

  const tabs = ['Today', 'Upcoming', 'Completed', 'Overdue', 'All Tasks'];

  const getPriorityColor = (priority) => {
    if (priority === 'high') return 'error';
    if (priority === 'medium') return 'primary';
    return 'tertiary';
  };

  const getGoalColor = (goalId) => {
    const goal = goals.find(g => g.id === goalId);
    return goal ? goal.color : 'outline';
  };

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-2">Morning Routine</h2>
          <p className="text-on-surface-variant text-lg">You have {tasks.filter(t => t.status !== 'completed' && t.priority === 'high').length} high-priority tasks remaining today.</p>
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
          {priorityTasks.map((task) => {
            const color = getPriorityColor(task.priority);
            return (
              <div key={task.id} className="glass-panel rounded-2xl p-6 flex flex-col justify-between h-56 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/10 rounded-full blur-3xl -mr-10 -mt-10`}></div>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`bg-${color}/20 text-${color} text-xs px-2.5 py-1 rounded-md font-medium flex items-center gap-1`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-${color}`}></span> {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                    </span>
                    <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined">more_horiz</span></button>
                  </div>
                  <h4 className="font-headline text-2xl font-bold leading-tight mb-2">{task.title}</h4>
                  <p className="text-sm text-on-surface-variant flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> {task.estimatedTime} remaining
                  </p>
                </div>
                <button className="w-full bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 rounded-xl text-sm font-semibold transition-colors mt-4 border border-outline-variant/20 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">play_arrow</span> Start Focus
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Task Management Master Section */}
      <section className="glass-panel rounded-2xl p-2">
        {/* Tooling Header */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-outline-variant/10 gap-4">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-primary/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/30 border border-transparent'}`}
              >
                {tab}
              </button>
            ))}
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
          {filteredTasks.map((task) => {
            const isCompleted = task.status === 'completed';
            const goalColor = getGoalColor(task.goalId);
            const goal = goals.find(g => g.id === task.goalId);
            const progressWidth = goal ? goal.progress : 0;
            
            return (
              <div key={task.id} className={`group flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl hover:bg-surface-variant/10 transition-colors gap-4 border border-transparent hover:border-outline-variant/10 ${isCompleted ? 'opacity-50' : ''}`}>
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <input 
                    className={`w-5 h-5 rounded cursor-pointer focus:ring-primary focus:ring-offset-0 ${isCompleted ? 'border-primary bg-primary text-primary' : 'border-outline-variant/40 bg-surface text-primary bg-transparent'}`}
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => toggleTaskStatus(task.id)}
                  />
                  <div>
                    <h5 className={`text-base font-semibold group-hover:text-primary transition-colors ${isCompleted ? 'line-through' : ''}`}>{task.title}</h5>
                    <div className="flex items-center gap-3 mt-1 text-xs text-on-surface-variant">
                      <span className={`bg-${goalColor}-container/20 text-${goalColor} px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase`}>{task.tag}</span>
                      {!isCompleted && <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> {task.estimatedTime}</span>}
                    </div>
                  </div>
                </div>
                
                {!isCompleted && (
                  <div className="flex items-center gap-6 w-full md:w-auto pl-9 md:pl-0">
                    <div className="hidden lg:flex items-center gap-3 w-32">
                      <div className="w-full bg-surface-container-high rounded-full h-1.5">
                        <div className={`bg-${goalColor} h-1.5 rounded-full transition-all duration-500`} style={{width: `${progressWidth}%`}}></div>
                      </div>
                      <span className="text-xs text-on-surface-variant w-8">{progressWidth}%</span>
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
                )}
              </div>
            );
          })}
          
          {filteredTasks.length === 0 && (
            <div className="p-8 text-center text-on-surface-variant">
              No tasks found in this view.
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-outline-variant/10 text-center">
          <button className="text-sm font-medium text-primary hover:text-primary-fixed transition-colors">View all tasks</button>
        </div>
      </section>
    </div>
  );
}
