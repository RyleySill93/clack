import { connect } from 'react-redux';
import values from 'lodash/values';
import ChannelList from './channel_list';
import { requestPostChannel, requestGetChannels } from '../actions/channel_actions';
import { requestGetUsers } from '../actions/user_actions';
import { requestPostNotification,
         requestDeleteNotifications } from '../actions/session_actions';
import { requestPostMessageToStore } from '../actions/message_actions';


const mapStateToProps = (state) => {

  const directMessages = values(state.channels).filter(
    (channel) => channel.kind === "direct") || [];
  const channels = values(state.channels).filter(
    (channel) => channel.kind === "channel") || [];
  const users = values(state.users);
  const currentChannel = state.currentChannel;
  const currentUser = state.session.currentUser;
  const notifications = state.session.currentUser.notifications || [];
  return { channels,
           directMessages,
           currentUser,
           users,
           currentChannel,
           notifications };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetChannels: (id) => dispatch(requestGetChannels(id)),
  requestPostChannel: (channel) => dispatch(requestPostChannel(channel)),
  requestGetUsers: () => dispatch(requestGetUsers()),
  receiveMessage: (message) => dispatch(requestPostMessageToStore(message)),
  requestPostNotification: (channelId) =>
    dispatch(requestPostNotification(channelId)),
  requestDeleteNotifications: (channelId) =>
    dispatch(requestDeleteNotifications(channelId))
});

export default connect (mapStateToProps, mapDispatchToProps)(ChannelList);
