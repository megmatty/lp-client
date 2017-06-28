import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteFriend } from '../actions/games';

class Friend extends Component {
  
  delete = () => {
    this.props.thing(this.props.id);
  }

  render() {
    return (
      <div className="friend">
        <img className="avatar" src={this.props.avatar} alt="avatar"/>
        <p>{this.props.name}</p>
        <button onClick={() => console.log(this)}>Log</button>
        <button onClick={this.delete}>Delete</button>
        <Link to="/contact"><img src="envelope.png" alt="contact icon"/></Link>
      </div>
    );
  }
}

export default Friend;