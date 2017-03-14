import React from 'react';

const ChatItem = (props) => (
  <li id="chat-item">
    <div id="pic-holder">
      <img src="./icon.png" width="36px" height="36px">
    </div>
    <div id="chat-content">
      <div id="chat-info">
        <div id="chat-sender">
          ryley sill
        </div>
        <a id="chat-time">
          4:07 PM
        </a>
      </div>
      <div id="chat-body">
        8-bit occupy mixtape, leg
      </div>
    </div>
  </li>
)
