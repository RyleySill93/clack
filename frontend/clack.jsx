import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

//temp
import { requestPostMessage,
  requestGetMessages,
  requestRemoveMessage } from './actions/message_actions';
import { requestPostChannel,
  requestGetChannels,
  requestRemoveChannel } from './actions/channel_actions';
// end temp

document.addEventListener('DOMContentLoaded', () => {
  //temp
  window.requestPostMessage = requestPostMessage;
  window.requestGetMessages = requestGetMessages;
  window.requestRemoveMessage = requestRemoveMessage;
  window.requestPostChannel = requestPostChannel;
  window.requestGetChannels = requestGetChannels;
  window.requestRemoveChannel = requestRemoveChannel;
  //end temp

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
