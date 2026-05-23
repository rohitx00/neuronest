import { create } from 'zustand';
import { TaskService, GoalService, ProgressService, ReportService } from '../services/api';

export const useAppStore = create((set, get) => ({
  tasks: [],
  goals: [],
  userStats: {
    score: 0,
    focusHours: 0,
    focusMinutes: 0,
    tasksDone: 0,
    consistency: 0,
    streak: 0,
    streakType: 'Days',
    deepWork: 0,
  },
  insights: [],
  isLoading: false,
  error: null,

  fetchAppData: async () => {
    set({ isLoading: true, error: null });
    try {
      // Execute API calls in parallel
      const [tasksRes, goalsRes, progressRes, reportRes] = await Promise.all([
        TaskService.getTasks(),
        GoalService.getGoals(),
        ProgressService.getProgress(),
        ReportService.getLatestReport()
      ]);

      // Map backend _id to frontend id for compatibility
      const mapId = (item) => ({ ...item, id: item._id });

      const mappedTasks = tasksRes.data.map(t => {
        // Map backend 'pending' to frontend 'incomplete' to maintain UI logic
        let uiStatus = t.status;
        if (t.status === 'pending') uiStatus = 'incomplete';
        return {
          ...mapId(t),
          status: uiStatus,
          // Extract goalId string if populated
          goalId: typeof t.goalId === 'object' && t.goalId !== null ? t.goalId._id : t.goalId,
          // Format estimatedTime for UI
          estimatedTime: t.estimatedTime ? `${t.estimatedTime}m` : '0m',
          tag: t.category || 'Task',
        };
      });

      const mappedGoals = goalsRes.data.map(mapId);

      const aggregatedStats = {
         score: progressRes.data.completionPercentage || 0,
         focusHours: reportRes.data?.focusHours || 0,
         focusMinutes: 0,
         tasksDone: progressRes.data.completedTasks || 0,
         consistency: reportRes.data?.consistency || 0,
         streak: 0,
         streakType: 'Days',
         deepWork: 0,
      };

      // Mocking some insights formatting from backend data if any, or empty array
      const mappedInsights = reportRes.data?.wins?.length ? reportRes.data.wins.map(w => ({
        type: 'win',
        title: 'Recent Win',
        description: w,
        color: 'primary'
      })) : [];

      set({
        tasks: mappedTasks,
        goals: mappedGoals,
        userStats: aggregatedStats,
        insights: mappedInsights,
        isLoading: false
      });
    } catch (error) {
      console.error('Error fetching app data:', error);
      set({ error: error.message, isLoading: false });
    }
  },

  toggleTaskStatus: async (taskId) => {
    const currentTask = get().tasks.find(t => t.id === taskId);
    if (!currentTask) return;

    // Optimistically update UI
    set((state) => {
      const updatedTasks = state.tasks.map(task => 
        task.id === taskId 
          ? { ...task, status: task.status === 'completed' ? 'incomplete' : 'completed' } 
          : task
      );

      // Recalculate goal progress optimistically
      const updatedGoals = state.goals.map(goal => {
        const goalTasks = updatedTasks.filter(t => t.goalId === goal.id);
        if (goalTasks.length === 0) return goal;
        
        const newlyCompleted = goalTasks.filter(t => t.status === 'completed').length;
        const progressMod = (newlyCompleted * 5); // MVP mock calculation
        
        let newProgress = goal.progress;
        if (goalTasks.some(t => t.id === taskId)) {
           const toggledTask = updatedTasks.find(t => t.id === taskId);
           if (toggledTask.status === 'completed') {
              newProgress = Math.min(100, goal.progress + 5);
           } else {
              newProgress = Math.max(0, goal.progress - 5);
           }
        }
        return { ...goal, progress: newProgress };
      });

      return {
        tasks: updatedTasks,
        goals: updatedGoals
      };
    });

    // Make actual API call
    try {
      await TaskService.toggleTask(taskId, currentTask.status);
      // Optional: re-fetch from backend to ensure data integrity
      // await get().fetchAppData(); 
    } catch (error) {
      console.error('Failed to toggle task:', error);
      // Revert state if failed
      await get().fetchAppData();
    }
  },
}));
