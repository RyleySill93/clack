import { postMessage,
         getMessages,
         deleteMessage } from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';


//thunk actions - database facing
export const requestPostMessage = (message) => (dispatch) => (
  postMessage(message)
    .then(message => dispatch(receiveMessage(message)))
);

export const requestGetMessages = (channelId) => (dispatch) => (
  getMessages(channelId)
    .then(messages => dispatch(receiveAllMessages(messages)))
);

export const requestRemoveMessage = (message) => (dispatch) => (
  deleteMessage(message)
    .then(message => dispatch(removeMessage(message)))
);

//actions - state facing
export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveAllMessages = (messages) => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message
});
