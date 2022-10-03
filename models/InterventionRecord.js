const mongoose = require('mongoose')

const InterventionRecordSchema = new mongoose.Schema({
  title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Intervention",
  }
  activity: {
    type: String,
  },
  anecdotalNotes: {
    type: String,
  },
  duration: {
    type: Number,
  },
  assessmentGiven: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

module.exports = mongoose.model('InterventionRecord', InterventionRecordSchema)