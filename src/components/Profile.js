import React, { Component } from 'react';
import User from './User';
import FriendList from './FriendList';

//Profile Page Parent Container
class Profile extends Component {
  render() {
    return (
      <div className="profile-container">      
        <User user="janedoe"/>
        <FriendList />
      </div>
    );
  }
}

export default Profile;
