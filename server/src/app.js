import express from 'express';
import cors from 'cors';

// Route imports
import goalRoutes from './routes/goal.routes.js';
import taskRoutes from './routes/task.routes.js';
import progressRoutes from './routes/progress.routes.js';
import reportRoutes from './routes/report.routes.js';

// Middleware imports
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/goals', goalRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/reports', reportRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' });
});

// Global Error Handler
app.use(errorHandler);

export default app;
