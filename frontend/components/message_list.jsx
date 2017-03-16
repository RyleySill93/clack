import React from 'react';
import MessageListItem from './message_list_item';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import UserListItem from './user_list_item';


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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = { modalIsOpen: false, title: "" };
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  handleClick (e) {
    e.preventDefault();
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
    this.setState({modalIsOpen: false});
  }

  componentWillMount () {
    this.props.requestGetChannels();
    this.props.requestGetUsers();
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;

    this.props.requestPostChannel({title, kind: 'direct'})
      .then(() => this.props.requestGetChannels())
      // .then(() => hashHistory.push(newChannel))
      .then(() => this.closeModal())
      .then(() => this.setState({title: ""}));

  }

  render () {
    const directMessages = this.props.directMessages.map((message, idx) =>
      <MessageListItem message={message} key={idx}/> );

    //need to filter these first
    const userMatches = this.props.users.map((user, idx) =>
      <UserListItem user={user} key={idx} /> );

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
                <form id="member-lookup" onSubmit={this.handleSubmit}>
                  <input id="member-input"
                         type="text"
                         onChange={this.handleChange}
                         placeholder="Find or start a conversation"
                         value={this.state.title}></input>
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
