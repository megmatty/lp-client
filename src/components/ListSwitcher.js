import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeList} from '../actions/games'

//Lists Button Bar
class ListSwitcher extends Component {

  render() {
    return (
      <div className="list-switcher">
      	{this.props.lists.map((list, i) => (
      		<div  className="list-title" 
      					key={i}
      					onClick={() => this.props.changeList(list)}
      		>
      					{list}
      		</div>
      	))}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        list: state.list
    };
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeList: (list) => dispatch(changeList(list))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSwitcher);