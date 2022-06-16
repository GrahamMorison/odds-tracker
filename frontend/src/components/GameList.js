import React from 'react'

const GameList = (props) => (
  <div>
    {props.games0616.map((game) => (<div>{game.away_team} at {game.home_team}</div>))}
  </div>
)

export default GameList;