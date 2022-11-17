const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: String,
  link: String,
  type: String,
  duration: String,
  equipment: String,
})

const Exercise = mongoose.model('Exercise',exerciseSchema);

module.exports = Exercise; 
