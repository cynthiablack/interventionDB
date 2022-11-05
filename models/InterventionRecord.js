const mongoose = require('mongoose')

const InterventionRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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
}, 
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
)

InterventionRecordSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'intervention',
    select: 'title'
  }).populate({
    path: 'student',
    select: 'firstName lastName'
  })

  next();
})

module.exports = mongoose.model('InterventionRecord', InterventionRecordSchema)