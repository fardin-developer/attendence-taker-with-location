const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfJoin: {
    type: Date,
    required: true,
  },
  netSalary:Number,
  netLeave:Number
});

module.exports = mongoose.model('User', UserSchema);