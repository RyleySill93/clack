import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';
import Client from './client';

class Root extends React.Component {

  constructor (props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectIfLoggedOut = this._redirectIfLoggedOut.bind(this);

  }

  _redirectIfLoggedIn (nextState, replace) {
    if (this.props.store.getState().session.currentUser.id) {
      replace(`/messages/1/details`);
    }
  }

  _redirectIfLoggedOut (nextState, replace) {
    //remove this
    if (!this.props.store.getState().session.currentUser.id) {
      replace('/');
    }
  }

  render () {
    return (
      <Provider store={ this.props.store } >
        <Router history={ hashHistory } >
          <Route path='/' component={ App } onEnter={ this._redirectIfLoggedIn } />
          <Route path="/messages" component={ Client }
            onEnter={ this._redirectIfLoggedOut }/>
          <Route path="/messages/:channelId" component={ Client }
            onEnter={ this._redirectIfLoggedOut }>
            <Route path="details" component={ Client }/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;

// if (this.props.store.getState().session.currentUser.id !== data.message.author_id)
//and user is not in the current channel?
