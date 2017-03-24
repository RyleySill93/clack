import React from 'react';
import { withRouter } from 'react-router';
import ChatItemContainer from './chat_item_container';
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
    this.scrollToBottom();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.props.requestGetMessages(nextProps.params.channelId);
      this.scrollToBottom();
    }
  }

  scrollToBottom () {
    // $("#chat-list").animate({ scrollTop: $('#chat-list')[0].scrollHeight}, 5000);
    setTimeout(() => (
      $('#chat-list').scrollTop($('#chat-list')[0]
        .scrollHeight - $('#chat-list')[0].clientHeight)
    ), 10);
  }

  render () {
    const list = this.props.messages.map((message, idx) => (
      <ChatItemContainer key={idx} message={message}/>));
    const firstMembers = this.props.currentChannel.members.slice(0, 7)
      .map((member, idx) => <img key={idx} id="default-image" src={member.image} /> );
    const defaultMessage = (
      <li id="default-message">
        <ul id="first-images">{firstMembers}</ul>
        This is the very beginning of your message history.
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
