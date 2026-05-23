import Goal from '../models/Goal.js';
import { sendSuccess } from '../utils/apiResponse.js';

export const createGoal = async (req, res, next) => {
  try {
    const goal = await Goal.create(req.body);
    return sendSuccess(res, 201, 'Goal created successfully', goal);
  } catch (error) {
    next(error);
  }
};

export const getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find().sort({ createdAt: -1 });
    return sendSuccess(res, 200, 'Goals fetched successfully', goals);
  } catch (error) {
    next(error);
  }
};

export const getGoalById = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
      const error = new Error('Goal not found');
      error.statusCode = 404;
      throw error;
    }
    return sendSuccess(res, 200, 'Goal fetched successfully', goal);
  } catch (error) {
    next(error);
  }
};

export const updateGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!goal) {
      const error = new Error('Goal not found');
      error.statusCode = 404;
      throw error;
    }
    return sendSuccess(res, 200, 'Goal updated successfully', goal);
  } catch (error) {
    next(error);
  }
};

export const deleteGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    if (!goal) {
      const error = new Error('Goal not found');
      error.statusCode = 404;
      throw error;
    }
    return sendSuccess(res, 200, 'Goal deleted successfully');
  } catch (error) {
    next(error);
  }
};
