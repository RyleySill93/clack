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
      <li onClick={this.handleClick}
          id={this.props.params.channelId == this.props.message.id ? "selected-channel" : "channel"}>
        <div id="hash-symbol">
          @&nbsp;
        </div>
        <span id="message-name">
          {this.props.message.title}
        </span>
      </li>
    );
  }
}

export default withRouter(MessageListItem);
