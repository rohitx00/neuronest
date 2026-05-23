import mongoose from 'mongoose';

const focusSessionSchema = new mongoose.Schema({
  taskId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Task',
    required: true
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  interruptions: {
    type: Number,
    default: 0
  },
  completed: {
    type: Boolean,
    default: false
  },
  startedAt: {
    type: Date,
    required: true
  },
  endedAt: {
    type: Date
  }
}, {
  timestamps: true
});

export default mongoose.model('FocusSession', focusSessionSchema);
