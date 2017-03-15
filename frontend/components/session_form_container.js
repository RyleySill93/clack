import {connect} from 'react-redux';
import values from 'lodash/values';
import { requestLogin, requestSignup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: (state.session.currentUser ? true : false),
  errors: values(state.errors)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(requestLogin(user)),
  signup: (user) => dispatch(requestSignup(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
