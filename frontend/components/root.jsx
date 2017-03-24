import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session_form_container';
import Client from './client';

import AlertContainer from 'react-alert';

import { receiveMessage } from '../actions/message_actions';

class Root extends React.Component {

  constructor (props) {
    super(props);
    this.setSocket = this.setSocket.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._redirectIfLoggedOut = this._redirectIfLoggedOut.bind(this);
    this.showAlert = this.showAlert.bind(this);
  }

  _redirectIfLoggedIn (nextState, replace) {
    if (this.props.store.getState().session.currentUser.id) {
      console.log('redirecting');
      replace(`/messages/1/details`);
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

  showAlert(message){
    msg.show(message, {
      time: 2000,
      type: 'success',
      icon: <img src="http://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png" width="32px" height="32px"/>
    });
  }

  addSocket (channelName) {
    window.App.channel = window.App.cable.subscriptions.create({
      channel: 'RoomChannel',
      channel_name: channelName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        this.showAlert(`New message from ${data.message.author.username} in #${data.message.channel_name}`)
        this.props.store.dispatch(receiveMessage(data.message));
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

// if (this.props.store.getState().session.currentUser.id !== data.message.author_id)
//and user is not in the current channel?
