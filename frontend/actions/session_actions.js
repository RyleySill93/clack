import { signup,
         login,
         logout,
         postNotification,
         deleteNotifications } from '../util/session_api_util';
import { hashHistory } from 'react-router';
import { receiveLoadingState } from './loading_actions';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_NOTIFICATION = 'RECEIVE_NOTIFICATION';
export const REMOVE_NOTIFICATIONS = 'REMOVE_NOTIFICATIONS';
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

export const receiveNotification = (notification) => ({
  type: RECEIVE_NOTIFICATION,
  notification
});

export const removeNotifications = (channelId) => ({
  type: REMOVE_NOTIFICATIONS,
  channelId
});

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const receiveChannel = (channelId) => ({
  type: RECEIVE_CHANNEL,
  channelId
});

//thunk action creators
export const requestSignup = (user) => (dispatch) => {
  // dispatch(receiveLoadingState('client'));
  return signup(user).then(currentUser => {
    return dispatch(receiveCurrentUser(currentUser));
  }).fail(errors => dispatch(receiveErrors(errors)));
};

export const requestLogin = (user) => (dispatch) => {
  // dispatch(receiveLoadingState('client'));
  return login(user).then(currentUser => {
    dispatch(receiveCurrentUser(currentUser));
  }).fail(errors => dispatch(receiveErrors(errors)));
};

export const requestLogout = () => (dispatch) => (
  logout().then(success =>  dispatch(receiveLogout()))
    .then(() => hashHistory.push("/")).then(() => hashHistory.push("/"))
);

export const requestPostNotification = (channelId) => (dispatch) => (
  postNotification(channelId).then(notification =>
    dispatch(receiveNotification(notification)))
);

export const requestDeleteNotifications = (channelId) => (dispatch) => (
  deleteNotifications(channelId).fail(notification =>
    dispatch(removeNotifications(channelId)))
);
