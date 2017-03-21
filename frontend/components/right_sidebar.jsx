import React from 'react';
import MemberListItem from './member_list_item';
import { hashHistory } from 'react-router';

class RightSidebar extends React.Component {

  constructor (props) {
    super(props);
    this.exitSidebar = this.exitSidebar.bind(this);
  }

  exitSidebar (e) {
    e.preventDefault();
    hashHistory.push(`/messages/${this.props.currentChannel.id}`);
  }

  render () {
    let currentChannel = this.props.currentChannel;
    let title;
    if (currentChannel) {
      if (currentChannel.kind === "channel") {
        title = `About ${currentChannel.title}`;
      } else {
        title = 'About this conversation';
      }
    }
    const memberList = this.props.currentChannel.members.map((member, idx) => (
      <MemberListItem member={member} key={idx} />));
    return (
      <div id="right-sidebar">
        <div id="right-sidebar-header">
          {title}
          <i className="fa fa-times" onClick={this.exitSidebar} aria-hidden="true"></i>
        </div>
        <div id="channel-members">
          <div id="channel-members-title">
            <div>
              <i id="member-icon" className="fa fa-user-o" aria-hidden="true"></i>
              {this.props.currentChannel.members.length}&nbsp;
              Members
            </div>
          </div>
          <ul id="member-list">
            {memberList}
          </ul>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
