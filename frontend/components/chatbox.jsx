import React from 'react';
import ChatItem from './chat_item';

class Chatbox extends React.Component {

  componentWillMount () {
    /////////NEED TO FIND OUT HOW TO GET CURRENT CHANNEL
    this.props.requestGetMessages()
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

export default Chatbox;
