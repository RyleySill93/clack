import React from 'react';
import HeaderContainer from './header_container.js';
import ChatboxContainer from './chatbox_container.js';
import FooterContainer from './footer_container.js';

const Main = () => (
  <div id="main">
    <HeaderContainer />
    <ChatboxContainer />
    <FooterContainer />
  </div>
);

export default Main;
