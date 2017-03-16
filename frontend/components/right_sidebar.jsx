import React from 'react';
import MemberListItem from './member_list_item';

class RightSidebar extends React.Component {

  render () {
    const memberList = this.props.currentChannelMembers.map((member) => (
      <MemberListItem member={member} />));
    return (
      <div id="right-sidebar">
        <div id="right-sidebar-header">
          About #{this.props.currentChannel ? this.props.currentChannel.title : ""}
        </div>
        <div id="channel-members">
          <div id="channel-members-title">
            <i id="member-icon" className="fa fa-user-o" aria-hidden="true"></i> 89 Members
          </div>
          <ul>
            {memberList}
          </ul>
        </div>
      </div>
    );
  }
}

export default RightSidebar;
