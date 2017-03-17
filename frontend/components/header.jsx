import React from 'react';
import { hashHistory } from 'react-router';

class Header extends React.Component {

  constructor (props) {
    super(props);
    this.openRightSidebar = this.openRightSidebar.bind(this);
  }

  openRightSidebar (e) {
    e.preventDefault();
    hashHistory.push(`/messages/${this.props.currentChannel.id}/details`);
  }

  render () {
    return (
      <div id="header">
        <div id="header-content">
          <div id="main-title">
            {`#${this.props.currentChannel.title}`}
          </div>
          <div id="channel-attributes">
            <i id="favorite-channel" className="fa fa-star-o" aria-hidden="true"></i>
            |
            <div id="channel-users" onClick={this.openRightSidebar}>
              <i id="user-icon" className="fa fa-user-o" aria-hidden="true"></i>
              {this.props.currentChannel.members.length}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
