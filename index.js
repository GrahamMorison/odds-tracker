const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const app = express()

const User = require('./models/user')
const Game = require('./models/game')

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/odds-tracker-api')
  .then(console.log('Connected to Mongo'))
  .catch(err => console.log(err))

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.get('/games', async (req, res) => {
  try {
    const games = await Game.find({})
    res.send(games)
  } catch (e) {
    res.status(500).send(e)
  }
})

app.post('/users', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

// Learn how to write to the database and have Bram practice writing a 
// get method
