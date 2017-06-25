import React, { Component } from 'react';
import './App.css';


//Components
import GameList from './components/GameList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <GameList />
      </div>
    );
  }
}

export default App;
