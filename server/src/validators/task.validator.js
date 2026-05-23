import { z } from 'zod';

export const taskSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }).min(1, 'Title cannot be empty').max(150, 'Title cannot exceed 150 characters'),
    description: z.string().max(1000, 'Description cannot exceed 1000 characters').optional(),
    goalId: z.string().optional().nullable(),
    parentTaskId: z.string().optional().nullable(),
    priority: z.enum(['low', 'medium', 'high']).optional(),
    status: z.enum(['pending', 'active', 'completed', 'blocked']).optional(),
    progress: z.number().min(0).max(100).optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
    estimatedTime: z.number().optional(),
    actualTime: z.number().optional(),
    dueDate: z.string().optional().nullable(), // Allow ISO strings
    dependencies: z.array(z.string()).optional(),
    aiGenerated: z.boolean().optional(),
  })
});
