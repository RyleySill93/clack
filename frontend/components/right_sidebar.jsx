import React from 'react';
import MemberListItem from './member_list_item';

class RightSidebar extends React.Component {

  render () {
    const memberList = this.props.currentChannel.members.map((member, idx) => (
      <MemberListItem member={member} key={idx} />));
    return (
      <div id="right-sidebar">
        <div id="right-sidebar-header">
          About #{this.props.currentChannel ? this.props.currentChannel.title : ""}
        </div>
        <div id="channel-members">
          <div id="channel-members-title">
            <i id="member-icon" className="fa fa-user-o" aria-hidden="true"></i>
            {this.props.currentChannel.members.length}&nbsp;
            Members
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
