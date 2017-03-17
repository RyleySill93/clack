import { signup, login, logout } from '../util/session_api_util';
import { hashHistory } from 'react-router';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_LOGOUT= 'RECEIVE_LOGOUT';
export const RECEIVE_CHANNEL= 'RECEIVE_CHANNEL';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const receiveChannel = (channelId) => ({
  type: RECEIVE_CHANNEL,
  channelId
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
  logout().then(success =>  dispatch(receiveLogout()))
    .then(() => hashHistory.push("/"))
);
