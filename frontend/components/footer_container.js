import { connect } from 'react-redux';
import Footer from './footer';
import { requestPostMessage } from '../actions/message_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestPostMessage: (message) => dispatch(requestPostMessage(message))
});

export default connect (mapStateToProps, mapDispatchToProps)(Footer);
