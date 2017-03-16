import { RECEIVE_CURRENT_CHANNEL} from '../actions/current_channel_actions';

const currentChannelReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};

export default currentChannelReducer;
