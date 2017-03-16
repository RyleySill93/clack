import { RECEIVE_CURRENT_CHANNEL} from '../actions/current_channel_actions';

const nullChannel = {
  members: [],
  title: ""
};

const currentChannelReducer = (state = nullChannel, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_CHANNEL:
      return action.channel;
    default:
      return state;
  }
};

export default currentChannelReducer;
