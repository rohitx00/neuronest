import React, { useMemo } from "react";
import { useAppStore } from "../../store/useAppStore";

export default function BrainMap() {
  const goals = useAppStore((state) => state.goals);
  const tasks = useAppStore((state) => state.tasks);

  // Generate stable coordinates for nodes
  const nodes = useMemo(() => {
    const result = [];
    
    // Add goals
    goals.forEach((goal, i) => {
      const angle = (i / goals.length) * Math.PI * 2;
      const radius = 100;
      const x = 200 + Math.cos(angle) * radius;
      const y = 200 + Math.sin(angle) * radius;
      const z = Math.sin(angle * 2) * 50;
      
      result.push({
        id: goal.id,
        title: goal.title,
        type: 'goal',
        color: goal.color,
        hex: goal.hex || '#b0c6ff',
        x, y, z,
        size: 6
      });
    });

    // Add some incomplete tasks around their goals
    tasks.filter(t => t.status !== 'completed').forEach((task, i) => {
      const parentGoal = result.find(n => n.id === task.goalId);
      if (parentGoal) {
        const offsetAngle = i * 45;
        const x = parentGoal.x + Math.cos(offsetAngle) * 40;
        const y = parentGoal.y + Math.sin(offsetAngle) * 40;
        const z = parentGoal.z + 20;

        result.push({
          id: task.id,
          title: task.title,
          type: 'task',
          color: parentGoal.color,
          hex: parentGoal.hex,
          x, y, z,
          size: 4
        });
      }
    });

    return result;
  }, [goals, tasks]);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden pointer-events-none -mt-8 -mx-8 -mb-24">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(60,45,90,0.4)_0%,#0b0c10_70%)] z-[-3]"></div>
      
      {/* 3D Grid Floor */}
      <div className="absolute bottom-0 w-full h-[50vh] z-[-2] overflow-hidden" style={{ perspective: "1000px" }}>
        <div className="absolute top-0 left-[-50%] w-[200%] h-[200%] bg-center" 
             style={{ 
               backgroundImage: "linear-gradient(to right, rgba(176, 198, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(176, 198, 255, 0.15) 1px, transparent 1px)",
               backgroundSize: "80px 80px",
               transform: "rotateX(75deg)",
               transformOrigin: "top center"
             }}>
          {/* Floor Nodes / Lights */}
          <div className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-x-90 shadow-[0_0_15px_#b0c6ff] bg-[#b0c6ff]" style={{left: "30%", top: "40%"}}></div>
          <div className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-x-90 shadow-[0_0_15px_#ddb7ff] bg-[#ddb7ff]" style={{left: "60%", top: "30%"}}></div>
          <div className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-x-90 shadow-[0_0_10px_#ffdab9] bg-[#ffdab9]" style={{left: "45%", top: "70%"}}></div>
          <div className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-x-90 shadow-[0_0_15px_#b0c6ff] bg-[#b0c6ff]" style={{left: "75%", top: "60%"}}></div>
          <div className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-x-90 shadow-[0_0_15px_#ddb7ff] bg-[#ddb7ff]" style={{left: "20%", top: "80%"}}></div>
          <div className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-x-90 shadow-[0_0_10px_#ffdab9] bg-[#ffdab9]" style={{left: "85%", top: "45%"}}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_20%,transparent_0%,#0b0c10_80%)]"></div>
      </div>

      {/* Pedestal Base */}
      <div className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[60px] bg-gradient-to-br from-[#424654] to-[#201f20] shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_4px_10px_rgba(255,255,255,0.2),inset_0_-10px_20px_rgba(0,0,0,0.5)] z-[-1]" style={{ borderRadius: "50% / 30px" }}>
        <div className="absolute bottom-[-20px] left-[5%] w-[90%] h-[20px] bg-[#1c1b1c] rounded-full blur-[10px] z-[-1]"></div>
      </div>

      {/* 3D Brain Visualization */}
      <div className="absolute inset-0 top-[-10%] flex items-center justify-center z-10 pointer-events-none" style={{ perspective: "1200px" }}>
        <div className="relative w-[400px] h-[400px] pointer-events-auto" style={{ transformStyle: "preserve-3d", animation: "rotateBrain 40s linear infinite" }}>
          
          <div className="absolute bottom-[-80px] left-1/2 w-[2px] h-[150px] bg-gradient-to-t from-transparent to-[#b0c6ff]/50 transform -translate-x-1/2"></div>
          
          <svg className="absolute inset-0" style={{ transformStyle: "preserve-3d" }} overflow="visible" viewBox="0 0 400 400">
            <g stroke="rgba(176,198,255,0.3)" strokeWidth="1.5">
              <line x1="200" x2="120" y1="200" y2="150"></line>
              <line x1="200" x2="280" y1="200" y2="160"></line>
              <line x1="200" x2="220" y1="200" y2="80"></line>
              <line x1="200" x2="160" y1="200" y2="280"></line>
              <line x1="120" x2="100" y1="150" y2="220"></line>
              <line x1="280" x2="310" y1="160" y2="210"></line>
              <line x1="220" x2="280" y1="80" y2="160"></line>
              <line x1="120" x2="220" y1="150" y2="80"></line>
              <line x1="160" x2="260" y1="280" y2="260"></line>
              <line x1="260" x2="310" y1="260" y2="210"></line>
              <line x1="100" x2="160" y1="220" y2="280"></line>
              <line x1="120" x2="160" y1="150" y2="280"></line>
              <line x1="280" x2="260" y1="160" y2="260"></line>
            </g>
            <g stroke="rgba(221,183,255,0.2)" strokeWidth="1">
              <line x1="220" x2="150" y1="80" y2="60"></line>
              <line x1="150" x2="80" y1="60" y2="120"></line>
              <line x1="80" x2="100" y1="120" y2="220"></line>
              <line x1="220" x2="300" y1="80" y2="100"></line>
              <line x1="300" x2="330" y1="100" y2="180"></line>
              <line x1="330" x2="310" y1="180" y2="210"></line>
              <line x1="150" x2="120" y1="60" y2="150"></line>
              <line x1="300" x2="280" y1="100" y2="160"></line>
            </g>
          </svg>

          {/* Dynamic 3D Nodes */}
          {nodes.map((node, i) => (
            <div key={i} className={`absolute rounded-full cursor-pointer transition-transform duration-300 hover:scale-150 w-${node.size} h-${node.size} -ml-${node.size/2} -mt-${node.size/2} bg-[radial-gradient(circle_at_30%_30%,#ffffff,${node.hex})] shadow-[0_0_15px_rgba(255,255,255,0.4)] group`} style={{ transform: `translate3d(${node.x}px, ${node.y}px, ${node.z}px)`, transformStyle: "preserve-3d" }}>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-white/80 text-[10px] whitespace-nowrap mt-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none drop-shadow-md font-headline font-bold">
                {node.title} {node.type === 'goal' && '(Goal)'}
              </div>
            </div>
          ))}
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotateBrain {
          0% { transform: rotateY(0deg) rotateX(10deg); }
          100% { transform: rotateY(360deg) rotateX(10deg); }
        }
      `}} />
    </div>
  );
}
