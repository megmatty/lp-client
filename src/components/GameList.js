import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gamesGetData } from '../actions/games';
import Game from './Game';


class GameList extends Component {

	componentDidMount() {
		const request = new Request("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Crating%2Cfirst_release_date%2Csummary%2Cstoryline%2Ccover&limit=3&offset=0&order=release_dates.date%3Adesc&search=zelda", {
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
				<p>My Lists</p>
					{this.props.games.map((game) => (
						<Game 
							key={game.id} 
							name={game.name}
							cover={game.cover}
							year={game.first_release_date}
							rating={game.rating}
							summary={game.summary ? game.summary : game.storyline || 'This game has no summary'}
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
export default connect(mapStateToProps, mapDispatchToProps)(GameList);