import React from 'react';
import ChannelListContainer from './channel_list_container';
import MessageListContainer from './message_list_container';

const ChatsList = () => (
  <div id="chats-list">
    <ChannelListContainer />
    <MessageListContainer />
  </div>
);

export default ChatsList;
