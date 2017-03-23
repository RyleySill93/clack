import { postMessage,
         getMessages,
         deleteMessage,
         updateMessage } from '../util/message_api_util';
import { postReaction } from '../util/reaction_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const RECEIVE_REACTION = 'RECEIVE_REACTION';


//thunk actions - database facing
export const requestPostMessage = (message) => (dispatch) => (
  postMessage(message)
);

export const requestGetMessages = (channelId) => (dispatch) => (
  getMessages(channelId)
    .then(messages => dispatch(receiveAllMessages(messages)))
);

export const requestRemoveMessage = (messageId) => (dispatch) => (
  deleteMessage(messageId)
    .then(() => dispatch(removeMessage(messageId)))
);

export const requestUpdateMessage = (message) => (dispatch) => (
  updateMessage(message)
    .then(() => dispatch(receiveMessage(message)))
);

export const requestPostReaction = (reaction) => (dispatch) => (
  postReaction(reaction).then(() => dispatch(receiveReaction(reaction)))
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

export const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId
});

export const receiveReaction = (reaction) => ({
  type: RECEIVE_REACTION,
  reaction
});
