// Appointment model
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  cleaningService: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CleaningService',
    required: true
  },
  // date: {
  //   type: Date,
  //   required: true
  // },
  // startTime: {
  //   type: Date,
  //   required: true
  // },
  // endTime: {
  //   type: Date,
  //   required: true
  // },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
