import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RECEIVE_LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
    currentUser: {},
    channels: [],
    errors: []
};

const sessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {currentUser});
    case RECEIVE_CHANNEL:
      return {
        errors: [state.errors],
      }
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case RECEIVE_LOGOUT:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
