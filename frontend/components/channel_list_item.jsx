import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class ChannelListItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    hashHistory.push(`/messages/${this.props.channel.id}`);
  }

  render () {
    return (
      <li onClick={this.handleClick}
          id={this.props.params.channelId == this.props.channel.id ? "selected-channel" : "channel"}>
        <div id="hash-symbol">
          { this.props.direct ? '@' : '#' }&nbsp;
        </div>
        <div id="message-name">
          <div>{this.props.channel.title}</div>
          <div id="notification">3</div>
        </div>

      </li>
    );
  }
}

export default withRouter(ChannelListItem);
