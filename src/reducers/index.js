import { combineReducers } from 'redux';
import { games, gamesHasErrored, gamesIsLoading, friends } from './games';

export default combineReducers({
	games,
	gamesHasErrored,
	gamesIsLoading,
	friends
});

//ES6 shorthand - {games} is the same as {games: games}