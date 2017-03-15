// <li id="message">
//   <div id="active-icon">
//     <div id="online"></div>
//   </div>
//   <div id="message-recipient">
//     thebigl
//   </div>
// </li>

import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class MessageListItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    hashHistory.push(`/messages/${this.props.message.id}`);
  }

  render () {
    return (
      <li id={this.props.params.channelId == this.props.message.id ? "selected-channel" : "channel"}>
        <div id="message-name"
             onClick={this.handleClick}>
          {this.props.message.title}
        </div>
      </li>
    );
  }
}

export default withRouter(MessageListItem);
