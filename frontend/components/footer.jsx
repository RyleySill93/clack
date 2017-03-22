import React from 'react';
import { withRouter } from 'react-router';
import MyEmojiInput from './emoji_test';

class Footer extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const channel_id = this.props.params.channelId || "";
    const author_id = this.props.currentUser.id || "";
    this.state = { body: "", author_id, channel_id };
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleClick (e) {
    e.preventDefault();

  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({ body: "", channel_id: this.props.params.channelId });
    this.props.requestPostMessage(this.state);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.setState({ body: "", channel_id: nextProps.params.channelId });
    }
  }

  render () {
    const emojis = <MyEmojiInput />;
    return (
        <div id="footer">
          <form id="message-input-holder" onSubmit={this.handleSubmit} data-behavior="room_speaker">
            <div id="message-input-field">
              <input id="message-input"
                   onChange={this.handleChange}
                   type="text"
                   value={this.state.body}
                   placeholder={`Message #${this.props.channelTitle}`}
                   />
                 <div id="add-emoji" onClick={this.handleClick}>
                  <i className="fa fa-smile-o" aria-hidden="true"></i>
                </div>
              </div>
            <input id="hidden" type="submit" />
          </form>
        </div>
    );
  }
}

export default withRouter(Footer);
