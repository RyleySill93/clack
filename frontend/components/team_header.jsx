import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import { logout } from '../util/session_api_util';
import AlertContainer from 'react-alert';

class TeamHeader extends React.Component {

  constructor (props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = { modalIsOpen: false };
    this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  openModal (e) {
    e.preventDefault();
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: false });
    } else {
      this.setState({ modalIsOpen: true });
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.props.requestLogout();
  }

  showAlert(){
    msg.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src="http://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png" width="32px" height="32px"/>
    });
  }

  render () {
    const modal = (
      <div id="user-detail">
        <span id="user-detail-header">
          <div id="user-info">
            <img src={this.props.currentUser.image} />
            <div id="username-info">
              <div id="normal-username">
                { this.props.currentUser.username }
              </div>
              <div id="at-username">
                @{ this.props.currentUser.username }
              </div>
            </div>
          </div>
          <div id="exit-user-detail"  onClick={this.openModal}>
            <i className="fa fa-times" aria-hidden="true"></i>
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
            <div>Clack</div>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div id="current-user">
            <div id="active-icon">
              <div id="online">
              </div>
            </div>
            <div id="current-user-name">
              { this.props.currentUser.username }
            </div>
          </div>

        </div>
        {this.state.modalIsOpen ? modal : ""}
        <AlertContainer ref={(a) => global.msg = a} {...this.alertOptions} />
      </div>
    );
  }
}

export default TeamHeader;
