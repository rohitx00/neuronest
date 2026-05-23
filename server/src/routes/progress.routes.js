import express from 'express';
import { getProgressAnalytics } from '../controllers/progress.controller.js';

const router = express.Router();

router.get('/', getProgressAnalytics);

export default router;
