const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late', 'excused'], 
    default: 'absent',
    required: true,
  },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
