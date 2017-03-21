import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';

import ChannelListItem from './channel_list_item';
import MessageListItem from './message_list_item';
import UserListItem from './user_list_item';
import MemberToken from './member_token';
import { postMembership } from '../util/membership_api_util';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '100%',
    height                : '100%'
  }
};

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

  handleChange (e) {
    e.preventDefault();
    if (e.target.id === 'member-input') {
      this.setState({ searchName: e.target.value });
    } else {
      this.setState({ channelName: e.target.value });
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

  selectMember (member) {
    const that = this;
    return (e) => {
      e.preventDefault();
      const memberIds = that.state.selectedMembers.map(m => m.id);
      if (!memberIds.includes(member.id)) {
        let selectedMembers = that.state.selectedMembers.concat([member]);
        that.setState({ selectedMembers });
      } else {
        let index = memberIds.indexOf(member.id);
        that.state.selectedMembers.splice(index, 1);
        let selectedMembers = that.state.selectedMembers;
        that.setState({ selectedMembers });
      }
    };
  }

  deselectMember (member) {
    return (e) => {
      e.preventDefault();
      const selectedMembers = this.state.selectedMembers;
      let i = selectedMembers.indexOf(member);
      selectedMembers.splice(i, 1);
      this.setState({ selectedMembers });
    };
  }

  createChannel(e) {
    e.preventDefault();

    let title = "";
    if (this.state.channelType === "direct") {
      let members = this.state.selectedMembers
        .filter(member => member.id !== this.props.currentUser.id)
        .map(member => member.username);
      if (members.length < 5) {
        title = members.slice(0, members.length).join(", ");
      } else {
        let first = members.slice(0, 3).join(", ");
        title = `${first} and ${members.length - 3} others`;
      }
    } else {
      title = this.state.channelName;
    }

    const kind =  this.state.channelType;
    const members = this.state.selectedMembers.concat([this.props.currentUser])
      .map(member => parseInt(member.id));
    this.props.requestPostChannel({ title, kind, members })
      .then(() => this.closeModal());
  }

  selectedUser(user) {
    let selectedMemberIds = this.state.selectedMembers.map((member) => member.id);
    if (selectedMemberIds.includes(user.id)) {
      return "selected-user-item";
    } else {
      return "user-list-item";
    }
  }

  render () {
    const channelItems = this.props.channels.map((channel, idx) => (
      <ChannelListItem channel={ channel } key={ idx }/>
    ));

    const directMessages = this.props.directMessages.map((message, idx) => (
      <MessageListItem message={message} key={idx}/>
    ));

    const userMatches = this.props.users.filter(user => (
      user.username.startsWith(this.state.searchName) &&
      user.username !== this.props.currentUser.username)).map((user, idx) => (
        <UserListItem key={idx}
                      user={user}
                      selectMember={this.selectMember(user)}
                      id={this.selectedUser(user)}/> ));

    const selectedMembers = this.state.selectedMembers.map((member, idx) =>
      <MemberToken key={idx}
                   member={member}
                   deselectMember={this.deselectMember(member)}/>);

    const addChannel = (
        <input id="channel-input"
               type="text"
               onChange={this.handleChange}
               placeholder={"Create new Channel"}
               value={this.state.channelName}>
        </input>
    );

    const modalTitle = this.state.channelType === "channel" ? addChannel : <h1>Direct Messages</h1>;

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
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal">
            <div id="exit-user-lookup" onClick={this.closeModal}>
              <i className="fa fa-times fa-3x" aria-hidden="true"></i>
            </div>
            <div id="DM-lookup-container">

              <div id="lookup-info">
                {modalTitle}
                <form id="member-lookup-form" onSubmit={this.createChannel}>
                  <div id="member-lookup-field">
                    {selectedMembers}
                    <input id="member-input"
                           type="text"
                           onChange={this.handleChange}
                           placeholder={selectedMembers.length === 0 ? "Find or start a conversation" : ""}
                           value={this.state.searchName}></input>
                  </div>
                  <input id="DM-submit" type="submit" value="Go"></input>
                </form>
                <ul id="user-lookup-matches">
                  {userMatches}
                </ul>
              </div>
            </div>
          </Modal>

      </div>
    );
  }
}

export default ChannelList;
