import React from 'react';
import { withRouter } from 'react-router';
import ChatItemContainer from './chat_item_container';
import FooterContainer from './footer_container.js';

class Chatbox extends React.Component {

  constructor(props) {
    super(props);
    this.chatList = this.chatList.bind(this);
    this.checkUpdate = this.checkUpdate.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentWillMount () {
    this.props.requestGetMessages(this.props.params.channelId).then(() => this.scrollToBottom());
    this.props.receiveLoadingState('client');
  }

  componentDidUpdate (prevProps) {
    if (prevProps.messages.length !== this.props.messages.length) {
      this.scrollToBottom();
    }
  }

  scrollToBottom () {
    if (this.chats) {
      this.chats.scrollTop = 99999;
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.props.receiveLoadingState('chatbox');
      this.props.requestGetMessages(nextProps.params.channelId).then(() => this.scrollToBottom());
    }
  }

  checkUpdate (prevProps) {
    //Highly inefficient hack
    let start = 0;
    let end = 0;
    this.props.messages.forEach(message => {
      message.reactions.forEach(reaction => {
        start += reaction.likes;
      });
    });
    prevProps.messages.forEach(message => {
      message.reactions.forEach(reaction => {
        end += reaction.likes;
      });
    });
    return start === end;
  }

  chatList () {
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
    return (list.length > 0 ? list : defaultMessage);
  }

  chatboxContent () {
    return (
      <ul id="chat-list" ref={ r => {this.chats = r;} }>
        { this.chatList() }
      </ul>
    );
  }

  loader () {
    return (
      <div id="loader-holder">
        <div id="loader">
          <img src="https://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png"
            width="50px" height="50px"/>
          <div id="loading-text">Loading ...</div>
          <div className="loader">Loading...</div>
        </div>
      </div>
    );
  }

  render () {
    return (
      <div id="chatbox">
        { this.props.loading === 'chatbox' ? this.loader() : this.chatboxContent() }
        <FooterContainer />
      </div>
    );
  }
}

export default withRouter(Chatbox);
