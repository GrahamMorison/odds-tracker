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
  },
  balance: {
    type: Number,
    required: true,
    default: 1000
  },
  emailAddress: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  betsMade: {
    type: Array,
    required: true,
    default: []
  }
})

module.exports = User