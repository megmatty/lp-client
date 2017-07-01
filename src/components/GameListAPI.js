import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gamesGetData } from '../actions/games';
import Game from './Game';

//this is a redux state container

class GameListAPI extends Component {

	componentDidMount() {
		const query = 'zelda';

		const request = new Request(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Crating%2Cfirst_release_date%2Csummary%2Cstoryline%2Ccover&limit=10&offset=0&search=${query}`, {
        headers: new Headers({
          'X-Mashape-Key': 'EUQMsXMjGmmshSjK8dQ9W31H8UOtp1wKG3bjsnwgRTlndgTXjR'
        })
      });
		this.props.getGameData(request);
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
				{this.props.games.map((game) => (
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

//Take state and map to prop object
const mapStateToProps = (state) => {
	return {
		games: state.games,
		hasErrored: state.hasErrored,
		isLoading: state.isLoading
	};
};

//Dispatch the gamesGetData action creator with a prop
const mapDispatchToProps = (dispatch) => {
	return {
		getGameData: (request) => dispatch(gamesGetData(request))
	};
};

//Connect component to Redux while mapping props for us to use
export default connect(mapStateToProps, mapDispatchToProps)(GameListAPI);


