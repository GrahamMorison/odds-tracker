const mongoose = require('mongoose')

const Game = mongoose.model('Game', {
  awayTeam: {
    type: String,
    required: true,
    trim: true
  },
  homeTeam: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = Game