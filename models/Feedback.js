const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comment: {
    type: String,
  }
})


module.exports = mongoose.model('Feedback', FeedbackSchema)