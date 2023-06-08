const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Profile', profileSchema);
