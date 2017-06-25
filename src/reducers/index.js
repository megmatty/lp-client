import { combineReducers } from 'redux';
import { games, gamesHasErrored, gamesIsLoading } from './games';

export default combineReducers({
	games,
	gamesHasErrored,
	gamesIsLoading
});

//ES6 shorthand - {games} is the same as {games: games}