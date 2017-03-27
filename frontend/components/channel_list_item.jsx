import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class ChannelListItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.notifications = this.notifications.bind(this);
    this.removeNotifications = this.removeNotifications.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    // if (this.notifications.length > 0) {
      this.removeNotifications();
    // }
    hashHistory.push(`/messages/${this.props.channel.id}/details`);
  }

  removeNotifications () {
    console.log('removing notifications');
    this.props.requestDeleteNotifications(this.props.channel.id);
  }

  notifications () {
    const notificationCount = this.props.notifications.filter(notification =>
      notification.channel_id === this.props.channel.id).length;
    let notifications;
    if (notificationCount > 0) {
      return <div id="notification">{ notificationCount }</div>;
    } else {
      return "";
    }
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
          { }
        </div>
        { this.notifications() }
      </li>
    );
  }
}

export default withRouter(ChannelListItem);
