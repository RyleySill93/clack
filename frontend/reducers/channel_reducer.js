import { RECEIVE_CHANNEL,
         RECEIVE_ALL_CHANNELS,
         REMOVE_CHANNEL } from '../actions/channel_actions';

import merge from 'lodash/merge';

const channelReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL:
      console.log(action);
      const channel = action.channel;
      const stateOne = merge({}, state, {[channel.id]: channel});
      return stateOne;
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case REMOVE_CHANNEL:
      const stateThree = merge({}, state);
      delete stateThree[action.channel.id];
      return stateThree;
    default:
      return state;
  }
};

export default channelReducer;
