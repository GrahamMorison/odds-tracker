const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()
const publicPath = path.join(__dirname, 'frontend', 'public')

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

app.get('/apiRequest', async (req, res) => {
  const url = 'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=' + process.env.ODDS_API_KEY + '&regions=us&markets=h2h,spreads&oddsFormat=american'
  console.log(url)
  try {
    const oddsData = await axios.get(url)

    if (!oddsData) {
      return res.status(404).send()
    }

    console.log(oddsData.data)
    res.send(oddsData.data)
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

app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

// Learn how to write to the database and have Bram practice writing a 
// get method



// https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=e22b0f0cc12c7064fdfd14c7429b82b4&regions=us&markets=h2h,spreads&oddsFormat=american