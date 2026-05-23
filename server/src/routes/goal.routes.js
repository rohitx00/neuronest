import express from 'express';
import { createGoal, getGoals, getGoalById, updateGoal, deleteGoal } from '../controllers/goal.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { goalSchema } from '../validators/goal.validator.js';

const router = express.Router();

router.route('/')
  .get(getGoals)
  .post(validate(goalSchema), createGoal);

router.route('/:id')
  .get(getGoalById)
  .patch(validate(goalSchema), updateGoal)
  .delete(deleteGoal);

export default router;
