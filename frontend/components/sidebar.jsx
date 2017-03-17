import React from 'react';
import TeamHeaderContainer from './team_header_container';
import ChannelListContainer from './channel_list_container';

const Sidebar = () => (
  <div id="sidebar">
    <TeamHeaderContainer />
    <ChannelListContainer />
  </div>
);

export default Sidebar;
