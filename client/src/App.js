import React from 'react';
import axios from 'axios'
import './App.css';

import PlayerList from './Components/PlayersList.js'
import Darkbutton from './Components/DarkButton.js'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log('axios GET', res)
        console.log('axios GET data', res.data)
        this.setState({ players: res.data})
      })
      .catch(err => (console.error('error in GET', err)))
  }
  render(){
    return (
      <div className="App">
        <h1>Soccer Stats!</h1>
        <Darkbutton /> 
        <PlayerList 
          players = {this.state.players}
        /> 
      </div>
    )
  }
}


export default App;
