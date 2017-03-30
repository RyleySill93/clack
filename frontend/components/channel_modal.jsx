import React from 'react';
import AlertContainer from 'react-alert';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';


import UserListItem from './user_list_item';
import MemberToken from './member_token';

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
  },
  overlay: {
    zIndex                : '1000'
  }
};

class ChannelModal extends React.Component {

  constructor(props) {
    super(props);

    this.selectMember = this.selectMember.bind(this);
    this.deselectMember = this.deselectMember.bind(this);
    this.createChannel = this.createChannel.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.selectedUser = this.selectedUser.bind(this);

    this.alertChannelError = this.alertChannelError.bind(this);
    this.alertDirectError = this.alertDirectError.bind(this);

    this.state = { modalIsOpen: this.props.modalIsOpen,
                   searchName: "",
                   selectedMembers: [],
                   channelType: this.props.channelType || "",
                   channelName: ""
                  };
  }

  componentWillMount () {
    this.props.requestGetUsers();
    if (this.props.initialMember) {
      this.selectMember(this.props.initialMember)();
    }
  }

  componentDidUpdate () {
    const memberInput = document.getElementById("member-input");
    const channelName = document.getElementById("channel-input");
    console.log("member input", memberInput);
    if (channelName) {
      channelName.focus();
    } else if (memberInput) {
      memberInput.focus();
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.modalIsOpen !== this.props.modalIsOpen) {
      this.setState({ modalIsOpen: nextProps.modalIsOpen,
                      channelType: nextProps.channelType });
    }

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
      .then(() => {
        this.props.toggleModal();
        let newChannel;
        if (kind === "direct") {
          newChannel = this.props.directMessages[this.props.directMessages.length - 1];
        } else {
          newChannel = this.props.channels[this.props.channels.length - 1];
        }
        hashHistory.push(`/messages/${newChannel.id}/details`);
      })
      .fail((error) => {
        if (this.state.channelType === "direct" ) {
          this.alertDirectError(error.responseJSON);
        } else {
          this.alertChannelError(error.responseJSON);
        }
      });
  }

  handleChange (e) {
    e.preventDefault();
    if (e.target.id === 'member-input') {
      this.setState({ searchName: e.target.value });
    } else {
      this.setState({ channelName: e.target.value });
    }
  }

  alertDirectError (errors) {
    let i = errors.indexOf("Title can't be blank");
    let j = errors.indexOf("Title has already been taken");

    if (i !== -1) {
      errors.splice(i, 1, "Must include members");
    }

    if (j !== -1) {
      errors.splice(j, 1, "Message already exists");
    }

    errors.forEach(err => (
      msg.show(err, {
        time: 2000,
        type: 'success',
        icon: <img src="http://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png" width="32px" height="32px"/>
      })
    ));
  }

  alertChannelError (errors) {
    errors.forEach(err => (
      msg.show(err, {
        time: 2000,
        type: 'success',
        icon: <img src="http://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png" width="32px" height="32px"/>
      })
    ));
  }

  selectedUser(user) {
    let selectedMemberIds = this.state.selectedMembers.map((member) => member.id);
    if (selectedMemberIds.includes(user.id)) {
      return "selected-user-item";
    } else {
      return "user-list-item";
    }
  }

  selectMember (member) {
    const that = this;
    return (e) => {
      if (e) {e.preventDefault();}
      const memberIds = that.state.selectedMembers.map(m => m.id);
      if (!memberIds.includes(member.id)) {
        let selectedMembers = that.state.selectedMembers.concat([member]);
        that.setState({ selectedMembers, searchName: "" });
      } else {
        let index = memberIds.indexOf(member.id);
        that.state.selectedMembers.splice(index, 1);
        let selectedMembers = that.state.selectedMembers;
        that.setState({ selectedMembers, searchName: "" });
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

  render () {
    const userMatches = this.props.users
      .filter(user => (user.username.startsWith(this.state.searchName)
      && user.username !== this.props.currentUser.username))
      .map((user, idx) => (
        <UserListItem key={idx}
                      user={user}
                      selectMember={this.selectMember(user)}
                      id={this.selectedUser(user)}/> ));

    const selectedMembers = this.state.selectedMembers.map((member, idx) =>
      <MemberToken key={idx}
                   member={member}
                   deselectMember={this.deselectMember(member)}/>);

    const addChannel = (
      <div id="member-lookup-field">
        <input id="channel-input"
               type="text"
               onChange={this.handleChange}
               placeholder={"Channel Title"}
               value={this.state.channelName}></input>
      </div>);

    if (this.state.modalIsOpen) {
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.props.toggleModal}
          style={customStyles}
          contentLabel="Channel">
          <div id="exit-user-lookup" onClick={this.props.toggleModal}>
            <i className="fa fa-times fa-3x" aria-hidden="true"></i>
          </div>
          <div id="DM-lookup-container">

            <div id="lookup-info">
              <h1>{ this.state.channelType === "channel" ? "New Channel" : "New Direct Message" }</h1>
              { this.state.channelType === "channel" ? addChannel : ""}
              <form id="member-lookup-form" onSubmit={this.createChannel}>
                <div id="member-lookup-field">
                  {selectedMembers}
                  <input id="member-input"
                         type="text"
                         onChange={this.handleChange}
                         placeholder={selectedMembers.length === 0 ? "Add members" : ""}
                         value={this.state.searchName}></input>
                </div>
                <input id="DM-submit" type="submit" value="Go"></input>
              </form>
              <ul id="user-lookup-matches">
                { userMatches }
              </ul>
            </div>
          </div>
        </Modal>
      );
    } else {
      return <div></div>;
    }

  }
}

export default ChannelModal;
