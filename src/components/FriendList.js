import React, { Component } from 'react';

//Friend List
class FriendList extends Component {
  
  constructor() {
    super();

    this.state = {
      friends: [
        { "name": "maxpower",
          "avatar": "http://www.radfaces.com/images/avatars/little-pete-wrigley.jpg"
        },
        { "name": "lisasimpson",
          "avatar": "http://www.radfaces.com/images/avatars/aeon-flux.jpg"
        },
        { "name": "HansMoleman",
          "avatar": "http://www.radfaces.com/images/avatars/artie-strongman.jpg"
        },
        { "name": "hughJass",
          "avatar": "http://www.radfaces.com/images/avatars/bradley-taylor.jpg"
        },
        { "name": "carlCcarlson",
          "avatar": "http://www.radfaces.com/images/avatars/lawrence-cohen.jpg"
        }
      ]
  }
}

  render() {
    return (
      <div className="friendLists-container">
        <h3>My Game Friends</h3>
        <div className="friend-list">
          {this.state.friends.map((friend,i) =>
            <div className="friend" key={i}>
              <img className="avatar" src={friend.avatar} alt="avatar"/>
              <p>{friend.name}</p>
              <img src="envelope.png" alt="contact icon"/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FriendList;