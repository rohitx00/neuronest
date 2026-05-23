import { sendError } from '../utils/apiResponse.js';

export const errorHandler = (err, req, res, next) => {
  console.error(err);

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    return sendError(res, 400, messages.join(', '));
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    return sendError(res, 400, 'Duplicate field value entered');
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    return sendError(res, 404, `Resource not found with id of ${err.value}`);
  }

  // Default error
  return sendError(res, err.statusCode || 500, err.message || 'Server Error');
};
