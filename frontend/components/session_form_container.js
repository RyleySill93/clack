import {connect} from 'react-redux';
import values from 'lodash/values';
import { requestLogin, requestSignup } from '../actions/session_actions';
import SessionForm from './session_form';

//for fake chat
import { requestPostMessage } from '../actions/message_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: (state.session.currentUser ? true : false),
  errors: values(values(state.session.errors.responseJSON)),
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(requestLogin(user)),
  signup: (user) => dispatch(requestSignup(user)),
  postMessage: (message) => dispatch(requestPostMessage(message))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
