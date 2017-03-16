import React from 'react';
import ChatboxContainer from './chatbox_container.js';
import RightSidebarContainer from './right_sidebar_container.jsx';

const MainContent = () => (
  <div id="main-content">
    <ChatboxContainer />
    <RightSidebarContainer />
  </div>
);

export default MainContent;
