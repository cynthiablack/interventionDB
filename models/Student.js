const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}
)

// Virtual populate
StudentSchema.virtual('records', {
  ref: 'InterventionRecord',
  'foreignField': 'student',
  localField: '_id'
})

module.exports = mongoose.model('Student', StudentSchema)