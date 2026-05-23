import Task from '../models/Task.js';
import { sendSuccess } from '../utils/apiResponse.js';

export const getProgressAnalytics = async (req, res, next) => {
  try {
    // MVP simple aggregation: All-time progress
    const totalTasks = await Task.countDocuments();
    const completedTasks = await Task.countDocuments({ status: 'completed' });
    const pendingTasks = await Task.countDocuments({ status: 'pending' });
    const activeTasks = await Task.countDocuments({ status: 'active' });

    const completionPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    const data = {
      totalTasks,
      completedTasks,
      pendingTasks,
      activeTasks,
      completionPercentage
    };

    return sendSuccess(res, 200, 'Progress analytics fetched successfully', data);
  } catch (error) {
    next(error);
  }
};
