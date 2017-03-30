import { connect } from 'react-redux';
import Chatbox from './chatbox';
import { requestGetMessages } from '../actions/message_actions';
import values from 'lodash/values';
import { receiveLoadingState } from '../actions/loading_actions';


const mapStateToProps = (state, ownProps) => {
  const messages = state.messages || {};
  const currentChannel = state.currentChannel;
  const loading = state.loading;
  return {
           messages: values(messages),
           currentChannel,
           loading
         };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetMessages: (channelId) => dispatch(requestGetMessages(channelId)),
  receiveLoadingState: (loadingState) => dispatch(receiveLoadingState(loadingState))
});

export default connect (mapStateToProps, mapDispatchToProps)(Chatbox);
