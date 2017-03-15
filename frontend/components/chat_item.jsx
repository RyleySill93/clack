import React from 'react';

const ChatItem = (props) => (
  <li id="chat-item">
    <div id="pic-holder">
      <img src="./icon.png" width="36px" height="36px" />
    </div>
    <div id="chat-content">
      <div id="chat-info">
        <div id="chat-sender">
          ryley
        </div>
        <a id="chat-time">
          {props.message.created_at}
        </a>
      </div>
      <div id="chat-body">
        {props.message.body}
      </div>
    </div>
  </li>
);

export default ChatItem;
