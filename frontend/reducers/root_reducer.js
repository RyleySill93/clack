import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import messageReducer from './message_reducer';

export default combineReducers({
  session: sessionReducer,
  messages: messageReducer
});
