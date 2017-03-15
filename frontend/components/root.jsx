import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';
import Client from './client';

const Root = (props) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (props.store.getState().session.currentUser) {
      replace(`/messages/1`);
    }
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
    if (props.store.getState().session.currentUser === null) {
      replace('/login');
    }
  };

  return (
    <Provider store={ props.store } >
      <Router history={ hashHistory } >
        <Route path='/' component={ App } onEnter={ _redirectIfLoggedIn }>
          <Route path="/login" component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Route path="/signup" component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
        </Route>
        <Route path="/messages" component={ Client }
          onEnter={ _redirectIfLoggedOut }/>
        <Route path="/messages/:channelId" component={ Client }
          onEnter={ _redirectIfLoggedOut }/>
      </Router>
    </Provider>
  );
};

export default Root;
