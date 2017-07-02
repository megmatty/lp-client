import { combineReducers } from 'redux';
import { games, gamesHasErrored, gamesIsLoading, friends, gamesList, search } from './games';

export default combineReducers({
	games,
	gamesHasErrored,
	gamesIsLoading,
	friends,
	gamesList,
	search
});

//ES6 shorthand - {games} is the same as {games: games}