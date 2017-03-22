import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';
import Client from './client';

import { receiveMessage } from '../actions/message_actions';

class Root extends React.Component {

  constructor (props) {
    super(props);
    this.setSocket = this.setSocket.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectIfLoggedOut = this._redirectIfLoggedOut.bind(this);
  }

  _redirectIfLoggedIn (nextState, replace) {
    if (this.props.store.getState().session.currentUser.id) {
      replace(`/messages/1`);
    }
  }

  _redirectIfLoggedOut (nextState, replace) {
    this.setSocket(`channel_${nextState.params.channelId}`);
    if (!this.props.store.getState().session.currentUser.id) {
      replace('/');
    }
  }

  setSocket (channelName) {
    if (window.App.channel) {
      this.removeSocket();
    }
    this.addSocket(channelName);
  }

  removeSocket () {
    window.App.cable.subscriptions.remove(window.App.channel);
  }

  addSocket (channelName) {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'RoomChannel',
      channel_name: channelName
    }, {
      connected: () => {console.log('were connected!!!');},
      disconnected: () => {},
      received: (data) => {
        console.log(data);
        this.props.store.dispatch(receiveMessage(data));
      }
    });
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
