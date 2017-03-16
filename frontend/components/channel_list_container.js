import { connect } from 'react-redux';
import values from 'lodash/values';
import ChannelList from './channel_list';
import { requestGetChannels } from '../actions/channel_actions';
import { requestGetCurrentChannel } from '../actions/current_channel_actions';


const mapStateToProps = (state) => {
  const channels = values(state.channels).filter(
    (channel) => channel.kind === "channel") || {};
  return { channels: channels };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetChannels: () => dispatch(requestGetChannels()),
  requestGetCurrentChannel: (channelId) => dispatch(requestGetCurrentChannel(channelId))
});

export default connect (mapStateToProps, mapDispatchToProps)(ChannelList);
