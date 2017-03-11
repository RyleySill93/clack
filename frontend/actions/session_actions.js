import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_LOG_OUT_SUCCESS = 'RECEIVE_LOG_OUT_SUCCESS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

//thunk action creators
export const requestSignup = (user) => (dispatch) => (
  signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const requestLogin = (user) => (dispatch) => (
  login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const requestLogout = () => (dispatch) => (
  logout().then(success => dispatch(receiveCurrentUser(null)))
);
