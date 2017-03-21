import { connect } from 'react-redux';
import ChatItem from './chat_item';
import { requestRemoveMessage, requestUpdateMessage } from '../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  message: ownProps.message
});

const mapDispatchToProps = dispatch => ({
  removeMessage: (message) => dispatch(requestRemoveMessage(message)),
  updateMessage: (message) => dispatch(requestUpdateMessage(message))
});

export default connect (mapStateToProps, mapDispatchToProps)(ChatItem);
