import React from 'react';
import { withRouter } from 'react-router';
import MyEmojiInput from './emoji_test';
import GiphySearchContainer from './giphys_search_container';

class Footer extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.toggleGiphysSearch = this.toggleGiphysSearch.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.addGiphy = this.addGiphy.bind(this);
    const channel_id = this.props.params.channelId || "";
    const author_id = this.props.currentUser.id || "";
    this.state = { body: "",
                   author_id,
                   channel_id,
                   emojisOpen: false,
                   giphysOpen: false };
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  toggleEmojiPicker (e) {
    e.preventDefault();
    this.setState({ emojisOpen: !this.state.emojisOpen });
  }

  toggleGiphysSearch (e) {
    e.preventDefault();
    this.setState({ giphysOpen: !this.state.giphysOpen });
  }

  addEmoji (emoji) {
    this.setState({ body: this.state.body + emoji });
    $("#message-input").focus();
  }

  addGiphy (giphy) {
    this.setState({ body: this.state.body + `giphy:${giphy}` });
    $("#message-input").focus();
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
    return (
        <div id="footer">
          <form id="message-input-holder" onSubmit={this.handleSubmit}>
            <div id="message-input-field">
              <div id="add-giphy" onClick={this.toggleGiphysSearch}>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </div>
              <input id="message-input"
                   onChange={this.handleChange}
                   type="text"
                   value={this.state.body}
                   placeholder={`Message #${this.props.channelTitle}`}
                   />
                 <div id="add-emoji" onClick={this.toggleEmojiPicker}>
                  <i className="fa fa-smile-o" aria-hidden="true"></i>
                </div>
              </div>
            <input id="hidden" type="submit" />
              <MyEmojiInput emojisOpen={this.state.emojisOpen}
                            addEmoji={this.addEmoji}
              />
          </form>
          <GiphySearchContainer giphysOpen={this.state.giphysOpen}
                                addGiphy={this.addGiphy}/>
        </div>
    );
  }
}

export default withRouter(Footer);
