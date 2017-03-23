import React from 'react';
import { hashHistory } from 'react-router';

import ChannelListItem from './channel_list_item';
import MessageListItem from './message_list_item';
import ChannelModalContainer from './channel_modal_container';

class ChannelList extends React.Component {
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.toggleModal = this.toggleModal.bind(this);

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
      <ChannelListItem channel={ channel } key={ idx }/>
    ));

    const directMessages = this.props.directMessages.map((message, idx) => (
      <MessageListItem message={ message } key={ idx }/>
    ));

    const modal = (
      <ChannelModalContainer modalIsOpen={ this.state.modalIsOpen }
                             channelType={ this.state.channelType }
                             toggleModal={ this.toggleModal }/>
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
