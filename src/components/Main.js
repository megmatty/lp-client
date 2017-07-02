import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import MyList from '../containers/MyList';
import Landing from './Landing';
import Profile from '../containers/Profile';
import Contact from './Contact';
import GameView from './GameView';

class Main extends Component {
	render() {
		return (
			<div>      
				<Switch>
					<Route exact path="/" component={Landing}/>
					<Route path="/profile" component={Profile}/>
					<Route path="/list" component={MyList}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/game" component={GameView}/>
				</Switch>
			</div>
			);
	}
}

//I cannot figure out how to get the Redux state higher up to main or app because of Router interfering with passing props
// you can connect with withRouter but passing props down through Route components is very messy
//What I read is it is OK to have more than one connected component as long as the children get the props they need and you aren't repeating your code a lot




export default Main;