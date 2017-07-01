import { combineReducers } from 'redux';
import { games, gamesHasErrored, gamesIsLoading, friends, gamesList } from './games';

export default combineReducers({
	games,
	gamesHasErrored,
	gamesIsLoading,
	friends,
	gamesList
});

//ES6 shorthand - {games} is the same as {games: games}