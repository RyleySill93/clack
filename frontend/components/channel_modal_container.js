import { connect } from 'react-redux';
import values from 'lodash/values';
import ChannelModal from './channel_modal';
import { requestPostChannel, requestGetChannels } from '../actions/channel_actions';
import { requestGetUsers } from '../actions/user_actions';


const mapStateToProps = (state, ownProps) => {

  const directMessages = values(state.channels).filter(
    (channel) => channel.kind === "direct") || {};
  const channels = values(state.channels).filter(
    (channel) => channel.kind === "channel") || {};
  const users = values(state.users);
  const currentChannel = state.currentChannel;
  const currentUser = state.session.currentUser;
  const modalIsOpen = ownProps.modalIsOpen;
  const channelType = ownProps.channelType;
  return { channels,
           directMessages,
           currentUser,
           users,
           currentChannel,
           modalIsOpen,
           channelType
         };
};

const mapDispatchToProps = (dispatch) => ({
  requestPostChannel: (channel) => dispatch(requestPostChannel(channel)),
  requestGetUsers: () => dispatch(requestGetUsers())
});

export default connect (mapStateToProps, mapDispatchToProps)(ChannelModal);
