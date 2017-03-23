import React from 'react';
import AlertContainer from 'react-alert';
import ReactEmoji from 'react-emoji';

class ChatItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { editMode: false, body: this.props.message.body, modalIsOpen: false };
    this.showAlert = this.showAlert.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    if (e.currentTarget.id === "emoji-button") {
      this.showAlert("emojis coming soon...");
    } else if (e.currentTarget.id === "trash-button") {
      if (this.props.message.author_id === this.props.currentUser.id) {
        this.props.removeMessage(this.props.message.id);
      } else {
        this.showAlert('You are not the author of this message');
      }
    } else if (e.currentTarget.id === "edit-button") {
      if (this.props.message.author_id === this.props.currentUser.id) {
        this.setState( { editMode: true } );
      } else {
        this.showAlert('You are not the author of this message');
      }
    }
  }

  showAlert(message){
    msg.show(message, {
      time: 2000,
      type: 'success',
      icon: <img src="http://res.cloudinary.com/dwqeotsx5/image/upload/v1490042404/Slack-icon_rkfwqj.png" width="32px" height="32px"/>
    });
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    let message = this.props.message;
    message.body = this.state.body;
    this.props.updateMessage(message);
    this.setState({ editMode: false });
  }

  openModal (e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  render () {
    const edit = (
      <form id="edit-input-holder" onSubmit={this.handleSubmit}>
        <input id="edit-input"
               onChange={this.handleChange}
               type="text"
               value={this.state.body}
               placeholder={`Message #${this.props.channelTitle}`}/>
        <input id="hidden" type="submit" />
      </form>);

    const gif = (
      <div id="chat-gif-holder">
        <img id="chat-gif" src={this.props.message.gif_url} />
      </div>);

    return (
      <li id="chat-item">
        <div id="inner-chat-content">
          <div id="pic-holder">
            <img src={this.props.message.author.image} width="36px" height="36px" />
          </div>
          <div id="chat-content">
            <div id="chat-info">
              <div id="chat-sender" onClick={this.openModal}>
                {this.props.message.author.username}
              </div>
              <a id="chat-time">
                {this.props.message.post_time}
              </a>
            </div>
            <div id="chat-body">
              {this.state.editMode ? edit : ReactEmoji.emojify(this.props.message.body) }
              {this.props.message.gif_url ? gif : ""}
              <div id="reactions">
                <div id="reaction">
                  {ReactEmoji.emojify(":+1:2")}
                </div>
                <div id="reaction">
                  {ReactEmoji.emojify(":open_mouth:2")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="chat-buttons-holder">
          <span id="chat-buttons">
            <div className="chat-button" id="emoji-button" onClick={this.handleClick}>
              <i className="fa fa-smile-o" aria-hidden="true"></i>
            </div>
            <div className="chat-button" id="trash-button" onClick={this.handleClick}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
            <div className="chat-button" id="edit-button" onClick={this.handleClick}>
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </div>
          </span>
        </div>
      </li>
    );
  }
}

export default ChatItem;
