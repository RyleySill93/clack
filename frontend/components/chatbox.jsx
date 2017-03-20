import React from 'react';
import { withRouter } from 'react-router';
import ChatItem from './chat_item';
import FooterContainer from './footer_container.js';

class Chatbox extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentWillMount () {
    this.props.requestGetMessages(this.props.params.channelId);
  }

  componentDidMount () {
    this.scrollToBottom();
  }

  componentWillUpdate () {
    console.log('scrolling to bottom');
    this.scrollToBottom();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.props.requestGetMessages(nextProps.params.channelId);
      this.scrollToBottom();
    }
  }

  scrollToBottom () {
    setTimeout(() => (
      $('#chat-list').scrollTop($('#chat-list')[0]
        .scrollHeight - $('#chat-list')[0].clientHeight)
    ), 0);
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
