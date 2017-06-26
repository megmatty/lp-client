import React, { Component } from 'react';
import GameList from './GameList';
import ListSwitcher from './ListSwitcher';

//My Lists View
class MyLists extends Component {

  render() {
    return (
      <div className="content-container">
       	<h3>My Lists</h3>
	      <ListSwitcher lists={["What I'm Playing", "Want To Play", "All-Time Faves"]}/>
	      <GameList />
      </div>
    );
  }
}



export default MyLists;