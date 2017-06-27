import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MyList from './MyList';
import Landing from './Landing';
import Profile from './Profile';
import Contact from './Contact';

class Main extends Component {
	render() {
		return (
			<div>      
				<Switch>
					<Route exact path="/" component={Landing}/>
					<Route path="/profile" component={Profile}/>
					<Route path="/list" component={MyList}/>
					<Route path="/contact" component={Contact}/>
				</Switch>
			</div>
			);
	}
}

export default Main;