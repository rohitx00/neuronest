import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a task title'],
    trim: true,
    maxlength: [150, 'Title cannot be more than 150 characters']
  },
  description: {
    type: String,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  goalId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Goal',
    default: null
  },
  parentTaskId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Task',
    default: null
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'completed', 'blocked'],
    default: 'pending'
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  category: {
    type: String,
    default: 'General'
  },
  tags: [{
    type: String
  }],
  icon: {
    type: String,
    default: 'task'
  },
  estimatedTime: {
    type: Number, // in minutes
    default: 0
  },
  actualTime: {
    type: Number, // in minutes
    default: 0
  },
  dueDate: {
    type: Date
  },
  dependencies: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Task'
  }],
  aiGenerated: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Task', taskSchema);
