import React from 'react';
import EnhanceWithClickOutside from 'react-click-outside';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickOutside (e) {
    e.stopPropagation();
    this.props.openModal();
  }

  render () {
    return (
      <div id="user-detail">
        <span id="user-detail-header">
          <div id="user-info">
            <img src={ this.props.currentUser.image } />
            <div id="username-info">
              <div id="normal-username">
                { this.props.currentUser.username }
              </div>
              <div id="at-username">
                @{ this.props.currentUser.username }
              </div>
            </div>
          </div>
          <div id="exit-user-detail"  onClick={ this.props.openModal }>
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </span>
          <span id="logout" onClick={ this.props.handleClick }>
            Logout
          </span>
      </div>
    );
  }
}

export default EnhanceWithClickOutside(UserDetail);
