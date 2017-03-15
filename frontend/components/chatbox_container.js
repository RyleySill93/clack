import { connect } from 'react-redux';
import Chatbox from './chatbox';
import { requestGetMessages } from '../actions/message_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => {
  const messages = state.messages || {};
  return { messages: values(messages) };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetMessages: (channelId) => dispatch(requestGetMessages(channelId))
});

export default connect (mapStateToProps, mapDispatchToProps)(Chatbox);
