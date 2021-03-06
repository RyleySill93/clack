import { connect } from 'react-redux';
import ChatItem from './chat_item';
import { requestRemoveMessage,
         requestUpdateMessage,
         requestPostReaction,
         requestDeleteReaction } from '../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  message: ownProps.message,
  currentUser: state.session.currentUser,
  reactions: ownProps.message.reactions || []
});

const mapDispatchToProps = dispatch => ({
  removeMessage: (message) => dispatch(requestRemoveMessage(message)),
  updateMessage: (message) => dispatch(requestUpdateMessage(message)),
  postReaction: (reaction) => dispatch(requestPostReaction(reaction)),
  deleteReaction: (reactionId, messageId) => dispatch(requestDeleteReaction(reactionId, messageId))
});

export default connect (mapStateToProps, mapDispatchToProps)(ChatItem);
