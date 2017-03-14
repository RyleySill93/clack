import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//temp
import { requestPostMessage,
  requestGetMessages,
  requestRemoveMessage } from './actions/message_actions';
// end temp

document.addEventListener('DOMContentLoaded', () => {
  //temp
  window.requestPostMessage = requestPostMessage;
  window.requestGetMessages = requestGetMessages;
  window.requestRemoveMessage = requestRemoveMessage;
  //end temp

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
