//Thunk allows you to write action creators that return a function instead of an action

export function gamesHasErrored(bool) {
	return {
		type: 'GAMES_HAS_ERRORED',
		hasErrored: bool
	};
}

export function gamesIsLoading(bool) {
	return {
		type: 'GAMES_IS_LOADING',
		isLoading: bool
	}
}

export function gamesGetDataSuccess(games) {
	return {
		type: 'GAMES_GET_DATA_SUCCESS',
		games: games
	}
}

//Handles dispatching the other 3 above
export function gamesGetData(request) {
	return (dispatch) => {
		dispatch(gamesIsLoading(true));

		fetch(request)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(gamesIsLoading(false));

				return response;
			})
			.then( (response) => response.json() )
			.then( (games) => dispatch(gamesGetDataSuccess(games)) )
			.catch( () => dispatch(gamesHasErrored(true)) )
	};
}