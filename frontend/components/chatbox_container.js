import { connect } from 'react-redux';
import Chatbox from './chatbox';
import { requestGetMessages } from '../actions/message_actions';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  const messages = state.messages || {};
  const currentChannel = state.currentChannel;
  return {
           messages: values(messages),
           currentChannel
         };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetMessages: (channelId) => dispatch(requestGetMessages(channelId))
});

export default connect (mapStateToProps, mapDispatchToProps)(Chatbox);
