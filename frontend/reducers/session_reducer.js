import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         RECEIVE_LOGOUT,
         RECEIVE_NOTIFICATION,
         REMOVE_NOTIFICATIONS } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
    currentUser: {
      notifications: []
    },
    channels: [],
    errors: [],
    notifications: []
};

const sessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {currentUser});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case RECEIVE_NOTIFICATION:
      let newState = merge({}, state);
      const notifications = state.currentUser.notifications;
        notifications.push(action.notification);
      newState.currentUser.notifications = notifications;
      return newState;
    case REMOVE_NOTIFICATIONS:
      let newState2 = merge({}, state);
      const remainingNotifications = state.currentUser.notifications
        .filter(notice => notice.channel_id !== action.channelId);
      newState2.currentUser.notifications = remainingNotifications;
      return newState2;
    case RECEIVE_LOGOUT:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
