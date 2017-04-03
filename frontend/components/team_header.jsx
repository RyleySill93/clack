import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import { logout } from '../util/session_api_util';
import AlertContainer from 'react-alert';
import UserDetail from './user_detail';

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
    if (e) { e.preventDefault(); }
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  handleClick (e) {
    console.log('handling click');
    if (e) { e.preventDefault(); }
    this.props.requestLogout();
  }

  showAlert(){
    msg.show('Some text or component', {
      time: 2000,
      type: 'success',
      icon: <img src="https://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png" width="32px" height="32px"/>
    });
  }

  render () {
    const modal = <UserDetail currentUser={this.props.currentUser}
                              openModal={this.openModal}
                              handleClick={this.handleClick}/>;

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
