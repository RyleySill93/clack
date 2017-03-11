import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestLogin, requestLogout, requestSignup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestLogin = requestLogin;
  window.requestLogout = requestLogout;
  window.requestSignup = requestSignup;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>React is working!!!</h1>, root);
});
