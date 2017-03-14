import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    this.props.requestGetChannels();
  }

  render () {
    // debugger
    const channelItems = this.props.channels.map((channel, idx) => (
      <ChannelListItem channel={channel} key={idx}/>));

    return (
      <div id="channels">
        <div id="channel-title">
          CHANNELS
          <div id="channel-count">
            (51)
          </div>
        </div>
        <ul id="channel-list">
          {channelItems}
        </ul>
      </div>
    );
  }
}

export default ChannelList;
