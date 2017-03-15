import React from 'react';
import { withRouter } from 'react-router';
import ChatItem from './chat_item';

class Chatbox extends React.Component {

  componentWillMount () {
    this.props.requestGetMessages(this.props.params.channelId);
  }

  render () {
    //////////NEED TO GET MESSAGES THO
    const list = this.props.messages.map((message, idx) => <ChatItem key={idx} message={message}/>);
    return (
      <ul id="chats">
        {list}
      </ul>
    );
  }
}

export default withRouter(Chatbox);
