import React from 'react';
import { withRouter } from 'react-router';
import ChatItem from './chat_item';
import FooterContainer from './footer_container.js';

class Chatbox extends React.Component {

  componentWillMount () {
    this.props.requestGetMessages(this.props.params.channelId);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.props.requestGetMessages(nextProps.params.channelId);
    }
  }

  render () {
    const list = this.props.messages.map((message, idx) => (
      <ChatItem key={idx} message={message}/>));
    const defaultMessage = (
      <li id="default-message">
        This is the very beginning of your message history
      </li>
    );

    return (
      <div id="chatbox">
        <div id="chats">
          <ul id="chat-list">
            { list.length > 0 ? list : defaultMessage }
          </ul>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default withRouter(Chatbox);
