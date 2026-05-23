import Task from '../models/Task.js';
import { sendSuccess } from '../utils/apiResponse.js';

export const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    return sendSuccess(res, 201, 'Task created successfully', task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (req, res, next) => {
  try {
    const { status, priority, goalId, parentTaskId } = req.query;
    
    // Build filter object based on query params
    const filter = {};
    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (goalId) filter.goalId = goalId;
    if (parentTaskId) filter.parentTaskId = parentTaskId;

    const tasks = await Task.find(filter)
      .populate('goalId', 'title progress color')
      .populate('parentTaskId', 'title status')
      .sort({ createdAt: -1 });

    return sendSuccess(res, 200, 'Tasks fetched successfully', tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('goalId')
      .populate('parentTaskId')
      .populate('dependencies');

    if (!task) {
      const error = new Error('Task not found');
      error.statusCode = 404;
      throw error;
    }
    return sendSuccess(res, 200, 'Task fetched successfully', task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!task) {
      const error = new Error('Task not found');
      error.statusCode = 404;
      throw error;
    }
    return sendSuccess(res, 200, 'Task updated successfully', task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      const error = new Error('Task not found');
      error.statusCode = 404;
      throw error;
    }
    return sendSuccess(res, 200, 'Task deleted successfully');
  } catch (error) {
    next(error);
  }
};
