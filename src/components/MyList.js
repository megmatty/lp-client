import React, { Component } from 'react';
// import GameList from './GameList';
import GameListStatic from './GameListStatic';
import Search from './Search';


//My Lists View
class MyList extends Component {

  render() {
    return (
      <div className="content-container">
      	<Search />
       	<h3>My List</h3>
	      <GameListStatic />
      </div>
    );
  }
}



export default MyList;