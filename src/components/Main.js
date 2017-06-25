import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import GameList from './GameList';
import Landing from './Landing';

class Main extends Component {
	render() {
		return (
			<div>      
				<Switch>
					<Route exact path="/" component={Landing}/>
					<Route path="/profile" component={GameList}/>
				</Switch>
			</div>
			);
	}
}

export default Main;