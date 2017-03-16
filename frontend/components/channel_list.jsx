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



// <div id="channel-add">
//   <img src={'http://res.cloudinary.com/dwqeotsx5/image/upload/v1489609782/add-tool_1_it2jrq.png'} width="14px" height="14px"/>
// </div>
