import {connect} from 'react-redux';
import values from 'lodash/values';
import { requestLogin, requestSignup } from '../actions/session_actions';
import SessionForm from './session_form';
import { requestPostMessage } from '../actions/message_actions';

const mapStateToProps = (state) => ({
  currentUser: (state.session.currentUser ? true : false),
  errors: values(values(state.session.errors.responseJSON))
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
