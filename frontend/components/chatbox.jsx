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
    let chatList = $('#chat-list');
    if (chatList) {
      setTimeout(() => (
        chatList.scrollTop(chatList[0]
          .scrollHeight - chatList[0].clientHeight)
        ), 10);
    }
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
        <ul id="chat-list">
          { list.length > 0 ? list : defaultMessage }
        </ul>
        <FooterContainer />
      </div>
    );
  }
}

export default withRouter(Chatbox);
