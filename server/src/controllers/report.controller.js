import WeeklyReport from '../models/WeeklyReport.js';
import { sendSuccess } from '../utils/apiResponse.js';

export const getLatestReport = async (req, res, next) => {
  try {
    // MVP simple logic: get the most recently created weekly report
    const report = await WeeklyReport.findOne().sort({ createdAt: -1 });
    
    // If no report exists, return empty structure instead of 404 for MVP frontend simplicity
    if (!report) {
      return sendSuccess(res, 200, 'No reports generated yet', {
        productivityScore: 0,
        tasksCompleted: 0,
        focusHours: 0,
        consistency: 0,
        wins: [],
        weaknesses: [],
        aiInsights: {}
      });
    }

    return sendSuccess(res, 200, 'Latest report fetched successfully', report);
  } catch (error) {
    next(error);
  }
};
