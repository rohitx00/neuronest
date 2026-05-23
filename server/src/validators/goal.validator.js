import { z } from 'zod';

export const goalSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).min(1, 'Title cannot be empty').max(100, 'Title cannot exceed 100 characters'),
    description: z.string().max(500, 'Description cannot exceed 500 characters').optional(),
    status: z.enum(['active', 'completed', 'paused']).optional(),
    progress: z.number().min(0).max(100).optional(),
    priority: z.enum(['low', 'medium', 'high']).optional(),
    color: z.string().optional(),
    hex: z.string().optional(),
  })
});
