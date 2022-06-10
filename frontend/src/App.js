import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  handleGetRequest = async (e) => {
    e.preventDefault();
    console.log(e)
    const res = await fetch('/apiRequest');
    console.log(res)
    const data = await res.json();

    console.log(data)
  }

  
  render() {
    return (
      <div>
        <button
          onClick={this.handleGetRequest}
        >
          Get Data
        </button>
      </div>
    );
  }
}

export default App;



// figure out why the promise isn't returning and why we can't get the data