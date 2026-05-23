import express from 'express';
import { getLatestReport } from '../controllers/report.controller.js';

const router = express.Router();

router.get('/', getLatestReport);

export default router;
