const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  interventionRecord: {
    title: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Intervention",
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
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

module.exports = mongoose.model('Student', StudentSchema)