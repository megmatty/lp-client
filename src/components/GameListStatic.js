import React, { Component } from 'react';
import Game from './Game';
//This is a non-redux stateful component

class GameListStatic extends Component {

	constructor() {
		super();

		this.state= {
			games: [	  	
				{
			    "id": 10502,
			    "name": "Sid Meier’s Civilization: Beyond Earth – Rising Tide",
			    "summary": "After the first wave of great colony ships departed Earth, the jubilation of humanity was short-lived. Those left behind fell into a violent struggle over the quickly-diminishing resources on their barren home world. From this tumultuous time, four new factions arose. These newcomers were grounded not in the idealism of their predecessors, but on opportunism, resilience, ruthlessness, and above all a commitment to their own survival.\n\nNow, many decades after their first landfall on a new planet, the proud survivors of the first expeditions beyond Earth look up to see the skies darkened by a new breed of pioneers.\nBeyond Earth extended the Civilization franchise from its historical setting into the possible futures of science fiction. Rising Tide extends Beyond Earth to new frontiers on the planet’s surface and beneath its seas, adding even more choices and diplomatic options as you continue to build “just one more turn” toward a new vision for the future of humanity.",
			    "first_release_date": 1444348800000,
			    "cover": {
			      "url": "//images.igdb.com/igdb/image/upload/t_thumb/v53ubiqih4jujmibsxd7.jpg",
			      "cloudinary_id": "v53ubiqih4jujmibsxd7",
			      "width": 1523,
			      "height": 2023
			    }
			  },
				{
			    "id": 19130,
			    "name": "Sid Meier's Civilization VI",
			    "summary": "Civilization is a turn-based strategy game in which you attempt to build an empire to stand the test of time. Become Ruler of the World by establishing and leading a civilization from the Stone Age to the Information Age. Wage war, conduct diplomacy, advance your culture, and go head-to-head with history’s greatest leaders as you attempt to build the greatest civilization the world has ever known.\n\nCivilization VI offers new ways to engage with your world: cities now physically expand across the map, active research in technology and culture unlocks new potential, and competing leaders will pursue their own agendas based on their historical traits as you race for one of five ways to achieve victory in the game.",
			    "rating": 82.6507516684579,
			    "first_release_date": 1477008000000,
			    "cover": {
			      "url": "//images.igdb.com/igdb/image/upload/t_thumb/zhqjcjfltpubefktcghk.jpg",
			      "cloudinary_id": "zhqjcjfltpubefktcghk",
			      "width": 845,
			      "height": 1200
			    }
			  }
			]
		}
	}

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry! There was an error loading the list items.</p>;
		}

		if (this.props.isLoading) {
			return <p>Loading...</p>;
		}

		return (
			<div>
				{this.state.games.map((game) => (
					<Game 
						key={game.id} 
						name={game.name}
						cover={game.cover}
						year={game.first_release_date}
						rating={game.rating ? Math.floor(game.rating) + '/100' : 'NR'}
						summary={game.summary ? game.summary.substring(0, 150) : game.storyline.substring(0, 100) || 'This game has no summary'}
					/>
				))}
			</div>
		);
	}
}

export default GameListStatic;


