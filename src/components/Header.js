import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import RootNav from './RootNav';
import Nav from './Nav';

//Header & Nav Bar
class Header extends Component {
  render() {
    return (
      <div className="header">      
        <Link to="/"><h3>Let's Play</h3></Link>
        <Switch>
          <Route exact path="/" component={RootNav}/>
          <Route path="/" component={Nav}/>
        </Switch>
      </div>
    );
  }
}

export default Header;