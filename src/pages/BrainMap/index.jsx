import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { BrainCircuit } from "lucide-react";

export default function BrainMap() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gradient">Neural Universe</h1>
        <p className="text-gray-400 mt-1">Visualize your knowledge and connections.</p>
      </div>

      <Card className="flex-1 border-white/10 bg-black/20 backdrop-blur-3xl overflow-hidden relative">
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[var(--color-primary-blue)]/10 animate-pulse flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.3)]">
            <BrainCircuit className="w-12 h-12 text-[var(--color-primary-blue)]" />
          </div>
          <h2 className="mt-6 text-xl font-semibold text-gray-200">React Three Fiber Canvas</h2>
          <p className="text-sm text-gray-500 mt-2 max-w-md text-center">
            The 3D interactive knowledge graph will be rendered here. Ready for @react-three/fiber implementation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
