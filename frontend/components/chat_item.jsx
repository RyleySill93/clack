import React from 'react';

const ChatItem = (props) => (
  <li id="chat-item">
    <div id="pic-holder">
      <img src={'http://res.cloudinary.com/dwqeotsx5/image/upload/v1489538729/icon_jlo9le.png'} width="36px" height="36px" />
    </div>
    <div id="chat-content">
      <div id="chat-info">
        <div id="chat-sender">
          {props.message.author.username}
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
