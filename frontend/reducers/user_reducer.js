import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      const users = action.users;
      return merge({}, state, users);
    default:
      return state;
  }
};

export default userReducer;
