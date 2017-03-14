import { connect } from 'react-redux';
import Chatbox from './chatbox';
import { requestGetMessages } from '../actions/channel_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => ({
  messages: values(state.messages)
});

const mapDispatchToProps = (dispatch) => ({
  requestGetMessages: (channelId) => dispatch(requestGetMessages(channelId))
});

export default connect (null, null)(Chatbox);
