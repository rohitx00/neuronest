import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="hidden md:flex bg-surface/30 backdrop-blur-xl h-screen w-64 rounded-r-xl border-r border-on-surface/10 flex-col py-6 shadow-[0_0_40px_rgba(176,198,255,0.05)] z-50 shrink-0">
      <div className="px-6 mb-10 flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-on-primary" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
        </div>
        <div>
          <h1 className="text-xl font-headline font-bold text-on-surface tracking-tight">Neuronest</h1>
          <p className="font-body text-xs text-on-surface-variant/70">Personal OS</p>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 font-body text-sm font-medium">
        <NavLink to="/dashboard" className={({isActive}) => isActive ? "flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg border-l-2 border-primary shadow-[0_0_15px_rgba(176,198,255,0.2)] active:scale-95 transition-transform" : "flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all duration-300 rounded-lg active:scale-95"}>
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/brainmap" className={({isActive}) => isActive ? "flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg border-l-2 border-primary shadow-[0_0_15px_rgba(176,198,255,0.2)] active:scale-95 transition-transform" : "flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all duration-300 rounded-lg active:scale-95"}>
          <span className="material-symbols-outlined">psychology</span>
          <span>BrainMap</span>
        </NavLink>
        <NavLink to="/tasks" className={({isActive}) => isActive ? "flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg border-l-2 border-primary shadow-[0_0_15px_rgba(176,198,255,0.2)] active:scale-95 transition-transform" : "flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all duration-300 rounded-lg active:scale-95"}>
          <span className="material-symbols-outlined">check_circle</span>
          <span>Tasks</span>
        </NavLink>
        
        <div className="my-4 border-t border-white/5 mx-2"></div>
        
        <NavLink to="/progress" className={({isActive}) => isActive ? "flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg border-l-2 border-primary shadow-[0_0_15px_rgba(176,198,255,0.2)] active:scale-95 transition-transform" : "flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all duration-300 rounded-lg active:scale-95"}>
          <span className="material-symbols-outlined">trending_up</span>
          <span>Progress</span>
        </NavLink>
        <NavLink to="/reports" className={({isActive}) => isActive ? "flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg border-l-2 border-primary shadow-[0_0_15px_rgba(176,198,255,0.2)] active:scale-95 transition-transform" : "flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all duration-300 rounded-lg active:scale-95"}>
          <span className="material-symbols-outlined">assessment</span>
          <span>Weekly Reports</span>
        </NavLink>
      </nav>
      <div className="px-4 mt-auto">
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all duration-300 rounded-lg font-body text-sm font-medium" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span>Settings</span>
        </a>
        <div className="mt-4 flex items-center gap-3 px-4 py-2">
          <img alt="User profile" className="w-8 h-8 rounded-full border border-surface-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaZ18Zne8u6P_kdplLn1TPVO5gE7cJGVL-mE091KgfE6y7FUj0_Wz4JJ7oQT7mchOEMhGxMzyc-W8IiJgeI8WYc6Ta4GIV6aSRrSZiJupKj08iXZ87qaj7Aii3fprfykKfVAdCWXEC-Z6L9XAsn-zGCHZDZUZ4IMT8fO_gTRt8xt1b_RPDe2D5-H_DHeYbKmtNPgiRdGz8E_UcB8YcIZOZO6I1GBC_5eylPKJZXggPxz3DVEUH0co_ydUYsurtpQrcIeItUL-qM9Q"/>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-on-surface">Alex Mercer</span>
            <span className="text-[10px] text-on-surface-variant">Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 w-full sticky top-0 z-40 h-16 bg-background/50 backdrop-blur-md border-b border-white/5">
      <div className="flex-1 max-w-md relative focus-within:ring-1 focus-within:ring-primary/50 rounded-full transition-all">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-sm">search</span>
        <input className="w-full bg-surface-container/50 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm font-body text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:bg-surface-container focus:border-primary/30 transition-all" placeholder="Search knowledge base..." type="text"/>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <span className="text-[10px] text-on-surface-variant/50 border border-white/10 rounded px-1.5 py-0.5">⌘</span>
          <span className="text-[10px] text-on-surface-variant/50 border border-white/10 rounded px-1.5 py-0.5">K</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs font-label text-on-surface-variant/70 hidden sm:block">Jan 24, 10:30 AM</span>
        <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
        <button className="text-on-surface-variant hover:bg-white/5 rounded-full p-2 transition-all">
          <span className="material-symbols-outlined text-xl">mic</span>
        </button>
        <button className="text-on-surface-variant hover:bg-white/5 rounded-full p-2 transition-all relative">
          <span className="material-symbols-outlined text-xl">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary ring-2 ring-background"></span>
        </button>
        <img alt="User avatar" className="w-8 h-8 rounded-full border border-white/10 ml-2 cursor-pointer object-cover hidden md:block" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4KW_OOESd9wfax_uxtieQ-LNj1TSntGWDyFN0FZb9Y5m2zzagxVT176Rc72c9FQtlCzSQA5JfdPrJ3m2JYnJwWX9G5t2LIEAd4AlwgTLmPxdiLh9-hUxu5hXXXbSWNJS1LJuAVgKZ5cbP3fdTzC3zTQg1W5yttlmBdxsnQZwsO1w5X4V8UOfiO3Zv1L8CQns-7xExAqardkBPSskNw7oQlycrOFlxgXrRNhFxvpCvAwOyGf2ggYiozJB9-JzMwE504rP5ONx0J18"/>
      </div>
    </header>
  );
}

export function AppLayout() {
  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-primary/30">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Ambient Background Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[100px] pointer-events-none"></div>
        
        <Navbar />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12 pb-24">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
