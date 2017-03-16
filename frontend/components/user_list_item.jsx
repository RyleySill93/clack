import React from 'react';

class UserListItem extends React.Component {
  render () {
    return (
      <li id="user-list-item" onClick={this.props.selectMember}>
        <div id="user-image">
          <img src={'http://res.cloudinary.com/dwqeotsx5/image/upload/v1489538729/icon_jlo9le.png'} width="36px" height="36px" />
        </div>
        <div id="user-item-username">
          {this.props.user.username}
        </div>
      </li>
    );
  }
}

export default UserListItem;
