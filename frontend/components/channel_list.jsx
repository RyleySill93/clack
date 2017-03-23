import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';


import ChannelListItem from './channel_list_item';
import MessageListItem from './message_list_item';
import UserListItem from './user_list_item';
import MemberToken from './member_token';
import { postMembership } from '../util/membership_api_util';

class ChannelList extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.selectMember = this.selectMember.bind(this);
    this.deselectMember = this.deselectMember.bind(this);
    this.createChannel = this.createChannel.bind(this);

    this.selectedUser = this.selectedUser.bind(this);

    this.alertChannelError = this.alertChannelError.bind(this);
    this.alertDirectError = this.alertDirectError.bind(this);

    this.state = { modalIsOpen: false,
                   searchName: "",
                   selectedMembers: [],
                   channelType: "",
                   channelName: ""
                  };
  }

  componentWillMount () {
    this.props.requestGetChannels(this.props.currentUser.id);
    this.props.requestGetUsers();
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.channels.length !== this.props.channels.length) {
      this.props.requestGetChannels(this.props.currentUser.id);
    }
  }

  handleClick (e) {
    e.preventDefault();
    if (e.target.parentElement.id === 'add-channel') {
      this.state.channelType = "channel";
    } else {
      this.state.channelType = "direct";
    }
    if (this.state.modalIsOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.props.requestGetChannels(this.props.currentUser.id);
    this.setState({
                    modalIsOpen: false,
                    channelName: "",
                    searchName: "",
                    selectedMembers: [],
                    title: []
                  });
  }

  render () {
    const channelItems = this.props.channels.map((channel, idx) => (
      <ChannelListItem channel={ channel } key={ idx }/>
    ));

    const directMessages = this.props.directMessages.map((message, idx) => (
      <MessageListItem message={message} key={idx}/>
    ));

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
            {channelItems}
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
            {directMessages}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChannelList;
