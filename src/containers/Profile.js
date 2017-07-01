import React, { Component } from 'react';
import User from '../components/User';
import FriendList from '../components/FriendList';

import { connect } from 'react-redux';
import { deleteFriend } from '../actions/games';
//Profile holds data for Friends components

//Profile Page Parent Container - Redux
class Profile extends Component {
  render() {
    return (
      <div className="profile-container">      
        <User user="janedoe"/>
        <FriendList 
        	friends={this.props.friends} 
        	deleteFriend={this.props.deleteFriend}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFriend: (id) => {
      console.log('delete THIS', id);
      dispatch(deleteFriend(id));
    }
  }
}

//Connect component to Redux while mapping props for us to use
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
