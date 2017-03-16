import { connect } from 'react-redux';
import values from 'lodash/values';
import MessageList from './message_list';
import { requestPostChannel, requestGetChannels } from '../actions/channel_actions';
import { requestGetUsers } from '../actions/user_actions';

const mapStateToProps = (state) => {
  const channels = values(state.channels).filter(
    (channel) => channel.kind === "direct") || {};
  const users = values(state.users);
  return { directMessages: channels,
           users
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetChannels: () => dispatch(requestGetChannels()),
  requestPostChannel: (channel) => dispatch(requestPostChannel(channel)),
  requestGetUsers: () => dispatch(requestGetUsers())
});

export default connect (mapStateToProps, mapDispatchToProps)(MessageList);
