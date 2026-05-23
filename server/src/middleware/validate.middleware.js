import { ZodError } from 'zod';
import { sendError } from '../utils/apiResponse.js';

export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessage = error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
      return sendError(res, 400, errorMessage);
    }
    return sendError(res, 500, 'Internal Server Error during validation');
  }
};
