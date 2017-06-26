import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Profile Nav Bar
class RootNav extends Component {
  render() {
    return (
			<div className="btn-group">     
        <button className="signup">Sign Up</button>
        <button><Link to="/profile">Login</Link></button>
      </div>
    );
  }
}

export default RootNav;