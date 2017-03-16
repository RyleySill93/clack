import React from 'react';

const Header = (props) => (
  <div id="header">
    <div id="header-content">
      <div id="main-title">
        {`#${props.channelTitle}`}
      </div>
      <div id="channel-attributes">
      </div>
    </div>
  </div>
);

export default Header;
