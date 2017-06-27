import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Friend List - redux state container
class FriendList extends Component {

  render() {
    return (
      <div className="friendLists-container">
        <h3>My Game Friends</h3>
        <div className="friend-list">
          {this.props.friends.map((friend,i) => 
            <div className="friend" key={i}>
              <img className="avatar" src={friend.avatar} alt="avatar"/>
              <p>{friend.name}</p>
              <Link to="/contact"><img src="envelope.png" alt="contact icon"/></Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

//Take state and map to prop object
const mapStateToProps = (state) => {
  return {
    ...state.friends
  };
};

//Connect component to Redux while mapping props for us to use
export default connect(mapStateToProps)(FriendList);





