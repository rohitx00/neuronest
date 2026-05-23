import mongoose from 'mongoose';

const weeklyReportSchema = new mongoose.Schema({
  weekStart: {
    type: Date,
    required: true
  },
  productivityScore: {
    type: Number,
    default: 0
  },
  tasksCompleted: {
    type: Number,
    default: 0
  },
  focusHours: {
    type: Number,
    default: 0
  },
  consistency: {
    type: Number,
    default: 0
  },
  wins: [{
    type: String
  }],
  weaknesses: [{
    type: String
  }],
  aiInsights: {
    type: mongoose.Schema.Types.Mixed, // Flexible schema for future AI insights
    default: {}
  }
}, {
  timestamps: true
});

export default mongoose.model('WeeklyReport', weeklyReportSchema);
