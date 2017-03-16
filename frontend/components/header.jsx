import React from 'react';

const Header = (props) => {
  return (
    <div id="header">
      <div id="header-content">
        <div id="main-title">
          {`#${props.currentChannel.title}`}
        </div>
        <div id="channel-attributes">
          <i id="favorite-channel" className="fa fa-star-o" aria-hidden="true"></i>
          |
          <div id="channel-users">
            <i id="user-icon" className="fa fa-user-o" aria-hidden="true"></i>
            {props.currentChannel.members ? props.currentChannel.members.length : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
