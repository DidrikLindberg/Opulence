// CleaningService model
const mongoose = require('mongoose');

const CleaningServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  estimatedDuration: {
    type: Number,
    required: true
  }
});

const CleaningService = mongoose.model('CleaningService', CleaningServiceSchema);

module.exports = CleaningService;
