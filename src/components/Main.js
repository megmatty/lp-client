import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MyLists from './MyLists';
import Landing from './Landing';
import Profile from './Profile';

class Main extends Component {
	render() {
		return (
			<div>      
				<Switch>
					<Route exact path="/" component={Landing}/>
					<Route path="/profile" component={Profile}/>
					<Route path="/lists" component={MyLists}/>
				</Switch>
			</div>
			);
	}
}

export default Main;