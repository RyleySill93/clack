import React from 'react';
import MemberListItem from './member_list_item';
import { hashHistory } from 'react-router';

class RightSidebar extends React.Component {

  constructor (props) {
    super(props);
    this.exitSidebar = this.exitSidebar.bind(this);
    this.memberList = this.memberList.bind(this);
  }

  exitSidebar (e) {
    e.preventDefault();
    hashHistory.push(`/messages/${this.props.currentChannel.id}`);
  }

  loader () {
    return (
      <div id="loader-holder">
        <div id="loader">
          <div className="loader">Loading...</div>
        </div>
      </div>
    );
  }

  memberList () {
    const memberList = this.props.currentChannel.members.map((member, idx) => (
      <MemberListItem member={member} key={idx} />));

    return (
      <ul id="member-list">
        {memberList}
      </ul>
    );
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
          { this.props.loading === 'chatbox' ? this.loader() : this.memberList() }
        </div>
      </div>
    );
  }
}

export default RightSidebar;
