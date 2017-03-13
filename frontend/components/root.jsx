import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';

const Root = (props) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (props.store.getState().session.currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={props.store} >
      <Router history={hashHistory} >
        <Route path='/' component={ App } >
          <Route path="/login" component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
          <Route path="/signup" component={ SessionFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
