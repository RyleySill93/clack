import React from 'react';

const ChannelListItem = (props) => (
  <li id="channel">
    <div id="message-name">
      {props.channel.title}
    </div>
  </li>
);

export default ChannelListItem;
