import React from 'react';

const ChatItem = (props) => (
  <li id="chat-item">
    <div id="pic-holder">
      <img src={props.message.author.image} width="36px" height="36px" />
    </div>
    <div id="chat-content">
      <div id="chat-info">
        <div id="chat-sender">
          {props.message.author.username}
        </div>
        <a id="chat-time">
          {props.message.post_time}
        </a>
      </div>
      <div id="chat-body">
        {props.message.body}
      </div>
    </div>
  </li>
);

export default ChatItem;
