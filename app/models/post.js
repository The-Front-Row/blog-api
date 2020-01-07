const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comment: {
    type: String
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Comment',
    // required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
