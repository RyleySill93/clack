import { connect } from 'react-redux';
import values from 'lodash/values';
import MessageList from './message_list';
import { requestPostChannel, requestGetChannels } from '../actions/channel_actions';

const mapStateToProps = (state) => {
  const channels = values(state.channels).filter(
    (channel) => channel.kind === "direct") || {};
  return { directMessages: channels };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetChannels: () => dispatch(requestGetChannels()),
  requestPostChannel: (channel) => dispatch(requestPostChannel(channel))
});

export default connect (mapStateToProps, mapDispatchToProps)(MessageList);
