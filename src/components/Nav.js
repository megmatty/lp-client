import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Profile Nav Bar
class Nav extends Component {
  render() {
    return (
      <div className="nav">      
        <ul className="navlinks">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/lists">Lists</Link></li>
        </ul>
        <button><Link to="/">Logout</Link></button>
      </div>
    );
  }
}

export default Nav;