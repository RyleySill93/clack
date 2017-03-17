import { connect } from 'react-redux';
import values from 'lodash/values';
import ChannelList from './channel_list';
import { requestPostChannel, requestGetChannels } from '../actions/channel_actions';
import { requestGetUsers } from '../actions/user_actions';


const mapStateToProps = (state) => {

  const directMessages = values(state.channels).filter(
    (channel) => channel.kind === "direct") || {};
  const channels = values(state.channels).filter(
    (channel) => channel.kind === "channel") || {};
  const users = values(state.users);
  const currentChannel = state.currentChannel;
  const currentUser = state.session.currentUser;
  return { channels,
           directMessages,
           currentUser,
           users,
           currentChannel };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetChannels: () => dispatch(requestGetChannels()),
  requestPostChannel: (channel) => dispatch(requestPostChannel(channel)),
  requestGetUsers: () => dispatch(requestGetUsers())
});

export default connect (mapStateToProps, mapDispatchToProps)(ChannelList);
