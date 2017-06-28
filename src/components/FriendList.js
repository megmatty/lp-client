import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import { deleteFriend } from '../actions/games';

//Friend List - redux state container
class FriendList extends Component {

  render() {
    return (
      <div className="friendLists-container">
        <h3>My Game Friends</h3>
        <div className="friend-list">
          {this.props.friends.map((friend,i) => 
            <Friend 
              key={i}
              id={friend.id}
              name={friend.name}
              avatar={friend.avatar}
              handleDelete={this.props.delete}
        />
          )}
        </div>
      </div>
    );
  }
}

//Take state and map to prop object
const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state.friends
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => {
      console.log('delete', id);
      dispatch(deleteFriend(id));
    }
  }
}

//Connect component to Redux while mapping props for us to use
export default connect(mapStateToProps, mapDispatchToProps)(FriendList);





