const mongoose = require('mongoose')

const User = mongoose.model('User', {
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  userName: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = User