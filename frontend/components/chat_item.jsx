import React from 'react';

class ChatItem extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    e.preventDefault();
    if (e.target.id === "emoji-button") {
      //do nothing right now
    } else if (e.target.id === "trash-button") {
      //if not yours, do nothing, else delete it
    } else if (e.target.id === "edit-button") {
      //if not yours, do nothing, else delete it
    }
  }

  render () {
    return (
      <li id="chat-item">
        <div id="inner-chat-content">
          <div id="pic-holder">
            <img src={this.props.message.author.image} width="36px" height="36px" />
          </div>
          <div id="chat-content">
            <div id="chat-info">
              <div id="chat-sender">
                {this.props.message.author.username}
              </div>
              <a id="chat-time">
                {this.props.message.post_time}
              </a>
            </div>
            <div id="chat-body">
              {this.props.message.body}
            </div>
          </div>
        </div>
        <div id="chat-buttons-holder">
          <div id="chat-buttons">
            <div className="chat-button" id="emoji-button" onClick={this.handleClick}>
              <i className="fa fa-smile-o" aria-hidden="true"></i>
            </div>
            <div className="chat-button" id="trash-button" onClick={this.handleClick}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
            <div className="chat-button" id="edit-button" onClick={this.handleClick}>
              <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ChatItem;
