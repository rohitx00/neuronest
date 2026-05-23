import express from 'express';
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from '../controllers/task.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { taskSchema } from '../validators/task.validator.js';

const router = express.Router();

router.route('/')
  .get(getTasks)
  .post(validate(taskSchema), createTask);

router.route('/:id')
  .get(getTaskById)
  .patch(validate(taskSchema), updateTask)
  .delete(deleteTask);

export default router;
