import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const TaskService = {
  getTasks: async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const response = await api.get(`/tasks?${params}`);
    return response.data;
  },
  toggleTask: async (id, currentStatus) => {
    // Map incomplete/completed frontend statuses to pending/completed backend statuses
    const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
    const response = await api.patch(`/tasks/${id}`, { status: newStatus });
    return response.data;
  }
};

export const GoalService = {
  getGoals: async () => {
    const response = await api.get('/goals');
    return response.data;
  }
};

export const ProgressService = {
  getProgress: async () => {
    const response = await api.get('/progress');
    return response.data;
  }
};

export const ReportService = {
  getLatestReport: async () => {
    const response = await api.get('/reports');
    return response.data;
  }
};

export default api;
