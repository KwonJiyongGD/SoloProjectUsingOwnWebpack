const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: Number,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Profile', profileSchema);
