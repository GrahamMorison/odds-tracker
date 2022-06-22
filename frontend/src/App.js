import './App.css';
import React from 'react'
import GetDataButton from './components/GetDataButton';
import GameList from './components/GameList';
import CreateUser from './components/CreateUser';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  handleGetRequest = async (e) => {
    e.preventDefault();

    const res = await fetch('/games');
    const data = await res.json();

    console.log(data)

    await this.setState({
      games0616: data[0].games0616
    })
  }

  render() {
    return (
      <div>
        <CreateUser />
        <GetDataButton handleGetRequest={this.handleGetRequest} />
        { this.state.games0616 && <GameList games0616={this.state.games0616} /> }
      </div>
    );
  }
}

export default App;