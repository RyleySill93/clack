import React from 'react';
import TeamHeaderContainer from './team_header_container';
import ChatsList from './chats_list';

const Sidebar = () => (
  <div id="sidebar">
    <TeamHeaderContainer />
    <ChatsList />
  </div>
);

export default Sidebar;
