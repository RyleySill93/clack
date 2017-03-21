import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class Header extends React.Component {

  constructor (props) {
    super(props);
    this.openRightSidebar = this.openRightSidebar.bind(this);
  }

  openRightSidebar (e) {
    e.preventDefault();
    if (this.props.router.location.pathname.endsWith('details')) {
      hashHistory.push(`/messages/${this.props.currentChannel.id}`);
    } else {
      hashHistory.push(`/messages/${this.props.currentChannel.id}/details`);
    }
  }

  render () {
    const currentChannel = this.props.currentChannel;
    let title;
    if (currentChannel.kind === "channel") {
      title = currentChannel.title;
    } else {
      let members = currentChannel.members
        .filter(member => member.id !== this.props.currentUser.id)
        .map(member => member.username);
      if (members.length < 5) {
        title = members.slice(0, members.length).join(", ");
      } else {
        let first = members.slice(0, 4).join(", ");
        title = `${first} and ${members.length - 3} others`;
      }
    }
    
    return (
      <div id="header">
        <div id="header-content">
          <div id="main-title">
            {`#${title}`}
          </div>
          <div id="channel-attributes">
            <i id="favorite-channel" className="fa fa-star-o" aria-hidden="true"></i>
            |
            <div id="channel-users" onClick={this.openRightSidebar}>
              <i id="user-icon" className="fa fa-user-o" aria-hidden="true"></i>
              {currentChannel.members.length}
              <div id="user-tip-holder">
                <div id="user-tip">View member list</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
