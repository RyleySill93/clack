import {connect} from 'react-redux';
import values from 'lodash/values';
import { requestLogin, requestSignup } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: (state.session.currentUser ? true : false),
    errors: values(state.errors)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login" ? requestLogin : requestSignup);
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
