import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import { logout } from '../util/session_api_util';

class TeamHeader extends React.Component {

  constructor (props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = { modalIsOpen: false };
  }

  openModal (e) {
    e.preventDefault();
    if (this.state.modalIsOpen) {
      this.setState({modalIsOpen: false});
    } else {
      this.setState({modalIsOpen: true});
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.props.requestLogout();
  }

  render () {
    const modal = (
      <div id="user-detail">
        <span id="user-detail-header">
          <img src="http://res.cloudinary.com/dwqeotsx5/image/upload/v1489538729/icon_jlo9le.png" />
          <div id="username-info">
            <div id="normal-username">
              {this.props.currentUser.username}
            </div>
            <div id="at-username">
              @{this.props.currentUser.username}
            </div>
          </div>
        </span>
          <span id="logout" onClick={ this.handleClick }>
            Logout
          </span>
      </div>
    );

    return (
      <div>
        <div id="team-header" onClick={ this.openModal }>
          <div id="team-name">
            <div>App Academy</div>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div id="current-user">
            <div id="active-icon">
              <div id="online">
              </div>
            </div>
            <div id="current-user-name">
              {this.props.currentUser.username}
            </div>
          </div>

        </div>
        {this.state.modalIsOpen ? modal : ""}
      </div>
    );
  }
}

export default TeamHeader;
