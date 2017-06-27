import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gamesGetData } from '../actions/games';

//need to be converted to redux actions/reducers

class Search extends Component {

	constructor() {
		super();

		this.state = { query: '' };

		this.handleChange = this.handleChange.bind(this);
		this.loadSearchResults = this.loadSearchResults.bind(this);
	}

	handleChange(event) {
		this.setState({query: event.target.value});
	}

	loadSearchResults() {
		const query = this.state.query;

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
			<div className="searchbar">
				<input type="search" placeholder="Search for games" value={this.state.query} onChange={this.handleChange} />
				<button type="submit" onClick={this.loadSearchResults}>Go</button>
				<div className="results">
					{this.props.games.map(game => {
            return (
              <p className="result-item" key={game.id}>{game.name}</p> ) 
            })   
          }
				</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);
