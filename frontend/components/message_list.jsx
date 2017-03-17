import React from 'react';
import MessageListItem from './message_list_item';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
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

class MessageList extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectMember = this.selectMember.bind(this);
    this.deselectMember = this.deselectMember.bind(this);
    this.createMemberships = this.createMemberships.bind(this);
    this.createChannel = this.createChannel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = { modalIsOpen: false,
                   searchName: "",
                   selectedMembers: [],
                   title: [] };
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({searchName: e.target.value});
  }

  handleClick (e) {
    e.preventDefault();
    if (this.state.modalIsOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  }

  selectMember (member) {
    const that = this;
    return (e) => {
      e.preventDefault();
      const memberIds = this.state.selectedMembers.map(m => m.id);
      if (!memberIds.includes(member.id)) {
        const selectedMembers = this.state.selectedMembers.concat([member]);
        const title = that.state.title.concat([member.username]);
        this.setState({ selectedMembers, title });
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.setState({searchName: "", selectedMembers: [], title: []});
  }

  componentWillMount () {
    this.props.requestGetChannels();
    this.props.requestGetUsers();
  }

  createChannel(e) {
    e.preventDefault();
    const title = this.state.title.join(", ");
    let channelId;

    this.props.requestPostChannel({title, kind: 'direct'})
      .then((obj) => (this.createMemberships(obj.channel.id)));
  }

  createMemberships (channelId) {
    const members = this.state.selectedMembers.concat([this.props.currentUser]);
    members.forEach((member) => (
      postMembership({user_id: member.id, channel_id: channelId})
    ));
    hashHistory.push(`/messages/${channelId}`);
    this.props.requestGetChannels();
    this.closeModal();
    this.setState({searchName: "", selectedMembers: [], title: []});
  }

  render () {
    const directMessages = this.props.directMessages.map((message, idx) =>
      <MessageListItem message={message} key={idx}/> );

    const userMatches = this.props.users.filter(user => (
      user.username.startsWith(this.state.searchName))).map((user, idx) => (
        <UserListItem key={idx}
                      user={user}
                      selectMember={this.selectMember(user)} /> ));

    const selectedMembers = this.state.selectedMembers.map((member, idx) =>
      <MemberToken key={idx}
                   member={member}
                   deselectMember={this.deselectMember(member)}/>
    );

    return (
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
              <h1>Direct Messages</h1>
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


export default MessageList;
