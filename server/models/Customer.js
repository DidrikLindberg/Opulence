// Customer model
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
