import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { useAppStore } from "./store/useAppStore";

function App() {
  const fetchAppData = useAppStore(state => state.fetchAppData);
  const isLoading = useAppStore(state => state.isLoading);
  const error = useAppStore(state => state.error);

  useEffect(() => {
    fetchAppData();
  }, [fetchAppData]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background text-primary font-headline text-xl">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined animate-spin text-[32px]">sync</span>
          Initializing Neuronest...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background text-error font-headline">
        <div className="max-w-md text-center">
          <span className="material-symbols-outlined text-[48px] mb-4">error</span>
          <h2 className="text-2xl font-bold mb-2">Connection Error</h2>
          <p className="text-on-surface-variant font-body">{error}</p>
          <button 
            onClick={() => fetchAppData()}
            className="mt-6 px-6 py-2 bg-primary text-on-primary rounded-lg font-medium"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
