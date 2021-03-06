import React from 'react';
import { hashHistory } from 'react-router';

import ChannelListItem from './channel_list_item';
import ChannelModalContainer from './channel_modal_container';

import values from 'lodash/values';
import { receiveMessage } from '../actions/message_actions';
import AlertContainer from 'react-alert';



class ChannelList extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = { modalIsOpen: false,
                   searchName: "",
                   selectedMembers: [],
                   channelType: "",
                   channelName: "",
                  };

    this.setSocket = this.setSocket.bind(this);
    this.removeSocket = this.removeSocket.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.sendAlert = this.sendAlert.bind(this);
  }

  componentWillMount () {
    this.props.requestGetChannels(this.props.currentUser.id);
    this.props.requestGetUsers();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.channels.length !== this.props.channels.length ||
        nextProps.directMessages.length !== this.props.directMessages.length) {
      this.props.requestGetChannels(this.props.currentUser.id)
        .then(() => this.setSocket());
    }
  }

  setSocket (channelName) {
    const channels = values(this.props.channels)
      .concat(this.props.directMessages) || [];
    if (channels.length > 0) {
      window.App.cable.subscriptions.subscriptions
        .forEach(sub => this.removeSocket(sub));
      channels.forEach(channel => this.addSocket(`channel_${channel.id}`));
    }
  }

  removeSocket(channel) {
    window.App.cable.subscriptions.remove(channel);
  }

  showAlert(message){
    msg.show(message, {
      time: 4000,
      type: 'success',
      icon: <img src="https://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png" width="32px" height="32px"/>
    });
  }

  addSocket (channelName) {
    window.App.cable.subscriptions.create({
      channel: 'RoomChannel',
      channel_name: channelName
    }, {
      connected: () => {},
      disconnected: () => {},
      received: (data) => {
        if (data.message.channel_id === this.props.currentChannel.id) {
          this.props.receiveMessage(data.message);
        } else {
          this.sendAlert(data);
        }
      }
    });
  }

  sendAlert (data) {
    this.props.requestPostNotification({ channel_id: data.message.channel_id });
    const directMessageIds = values(this.props.directMessages)
      .filter(dm => dm.kind === "direct")
      .map(dm => dm.id);
    if (directMessageIds.includes(data.message.channel_id)) {
      this.showAlert(`New direct message from @${data.message.author.username}`);
    } else {
      this.showAlert(`New message from @${data.message.author.username} in #${data.message.channel_name}`);
    }
  }

  handleClick (e) {
    e.preventDefault();
    if (e.target.parentElement.id === 'add-channel') {
      this.state.channelType = "channel";
    } else {
      this.state.channelType = "direct";
    }
    this.toggleModal();
  }


  toggleModal () {
    if (this.state.modalIsOpen) {
      this.setState({
        modalIsOpen: false,
        channelName: "",
        searchName: "",
        selectedMembers: [],
        title: []
      });
    } else {
      this.setState({ modalIsOpen: true });
    }
  }

  render () {
    const channelItems = this.props.channels.map((channel, idx) => (
      <ChannelListItem channel={ channel }
                       key={ idx }
                       direct={ false }
                       notifications={ this.props.notifications }
                       requestDeleteNotifications={ this.props.requestDeleteNotifications}/>
    ));

    const directMessages = this.props.directMessages.map((message, idx) => (
      <ChannelListItem channel={ message }
                       key={ idx }
                       direct={ true }
                       notifications={ this.props.notifications }
                       requestDeleteNotifications={ this.props.requestDeleteNotifications}/>
    ));

    const modal = (
      <ChannelModalContainer modalIsOpen={ this.state.modalIsOpen }
                             channelType={ this.state.channelType }
                             toggleModal={ this.toggleModal } />
    );

    return (
      <div id="chats-list">
        <div id="channels">
          <div id="channel-title">
            <div id="channel-title-name">
              CHANNELS
              <div id="channel-count">
                &nbsp;({ channelItems.length })
              </div>
            </div>
            <div id="add-channel" onClick={this.handleClick}>
              <i className="fa fa-plus-square" aria-hidden="true"></i>
            </div>
          </div>
          <ul id="channel-list">
            { channelItems }
          </ul>
        </div>
        <div id="messages">
          <div id="messages-title">
            <div id="messages-title-name">
              DIRECT MESSAGES
            </div>
            <div id="add-message" onClick={this.handleClick}>
              <i className="fa fa-plus-square" aria-hidden="true"></i>
            </div>
          </div>
          <ul id="messages-list">
            { directMessages }
          </ul>
        </div>
        { (this.state.modalIsOpen) ? modal : "" }
      </div>
    );
  }
}

export default ChannelList;
