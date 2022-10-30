const mongoose = require('mongoose')

const InterventionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  source: {
    type: String,
  },
  targetArea: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Intervention', InterventionSchema)