import { RECEIVE_MESSAGE,
         RECEIVE_ALL_MESSAGES,
         REMOVE_MESSAGE } from '../actions/message_actions';

import merge from 'lodash/merge';

const noMessages = {
    messages: null
};

const messageReducer = (state = noMessages, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const message = action.message;
      const stateOne = merge({}, state, message);
      return stateOne;
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case REMOVE_MESSAGE:
      const stateThree = merge({}, state);
      delete stateThree[action.message.id];
      return stateThree;
    default:
      return state;
  }
};

export default messageReducer;
