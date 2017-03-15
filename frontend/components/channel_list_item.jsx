import React from 'react';
import { hashHistory } from 'react-router';

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
      <li id="channel">
        <div id="message-name" onClick={this.handleClick}>
          {this.props.channel.title}
        </div>
      </li>
    );
  }
}

export default ChannelListItem;
