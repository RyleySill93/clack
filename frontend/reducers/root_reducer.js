import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import messageReducer from './message_reducer';
import channelReducer from './channel_reducer';
import currentChannelReducer from './current_channel_reducer';
import userReducer from './user_reducer';
import giphysReducer from './giphys_reducer';


export default combineReducers({
  session: sessionReducer,
  messages: messageReducer,
  channels: channelReducer,
  users: userReducer,
  currentChannel: currentChannelReducer,
  giphys: giphysReducer
});
