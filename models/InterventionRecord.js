const mongoose = require('mongoose')

const InterventionRecordSchema = new mongoose.Schema({
  intervention: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Intervention",
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
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
  },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

module.exports = mongoose.model('InterventionRecord', InterventionRecordSchema)