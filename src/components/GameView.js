import React, { Component } from 'react';
import Game from './Game';
// import FriendList from './FriendList';
import Search from '../containers/Search';

class GameView extends Component {
//This needs to be reduxed

	constructor() {
		super();

		this.state = {
			gameResult: [
				{
			    "id": 1332,
			    "name": "World of Warcraft: Mists of Pandaria",
			    "summary": "World of Warcraft: Mists of Pandaria, colloquially referred to as Mists or MoP, is the fourth expansion set for the massively multiplayer online role-playing game (MMORPG) World of Warcraft, following Cataclysm. It was announced on October 21, 2011, by Chris Metzen at BlizzCon 2011, and was released on September 25, 2012. As of October 14, 2014, Mists of Pandaria is included for free with the base game, similar to previous expansions.",
			    "rating": 77.4834878257498,
			    "first_release_date": 1348531200000,
			    "cover": {
			      "url": "//images.igdb.com/igdb/image/upload/t_thumb/ospnlz5wxtmly1ykfkfm.jpg",
			      "cloudinary_id": "ospnlz5wxtmly1ykfkfm",
			      "width": 424,
			      "height": 600
			    }
  		}]	
		}
	}

	render() {
		return (
			<div className="game-view">
			<Search />
				{this.state.gameResult.map((game) => (
					<Game 
						key={game.id}
						id={game.id}
						name={game.name}
						cover={game.cover}
						year={game.first_release_date}
						rating={game.rating ? Math.floor(game.rating) + '/100' : 'NR'}
						summary={game.summary ? game.summary : game.storyline || 'This game has no summary'}
					/>
				))}
			</div>
		);
	}
}





export default GameView;


