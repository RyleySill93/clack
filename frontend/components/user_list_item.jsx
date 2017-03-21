import React from 'react';

class UserListItem extends React.Component {



  render () {
    return (
      <li id={this.props.id} onClick={ this.props.selectMember }>
        <div id="user-image">
          <img src={this.props.user.image} width="36px" height="36px" />
        </div>
        <div id="user-item-username">
          {this.props.user.username}
        </div>
      </li>
    );
  }
}

export default UserListItem;
