import React from 'react';
import ChannelListContainer from './channel_list_container';
import MessageList from './message_list';

const ChatsList = () => (
  <div id="chats-list">
    <ChannelListContainer />
    <MessageList />
  </div>
);

export default ChatsList;
