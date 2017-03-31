import React from 'react';
import { withRouter } from 'react-router';
import MyEmojiInput from './emoji_test';
import GiphySearchContainer from './giphys_search_container';
import { fetchSingleGiphy } from '../util/giphy_api_util';

class Footer extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.toggleGiphysSearch = this.toggleGiphysSearch.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    this.addGiphy = this.addGiphy.bind(this);
    this.removeGiphy = this.removeGiphy.bind(this);
    const channel_id = this.props.params.channelId || "";
    const author_id = this.props.currentUser.id || "";
    this.state = { body: "",
                   author_id,
                   channel_id,
                   gif_url: "",
                   emojisOpen: false,
                   giphysOpen: false };
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  toggleEmojiPicker (e) {
    if (e) { e.preventDefault(); }
    this.setState({ emojisOpen: !this.state.emojisOpen });
  }

  toggleGiphysSearch (e) {
    if (e) { e.preventDefault(); }
    this.setState({ giphysOpen: !this.state.giphysOpen });
  }

  addEmoji (emoji) {
    this.setState({ body: this.state.body + emoji });
    $("#message-input").focus();
  }

  addGiphy (giphy) {
    this.removeGiphy();
    this.setState({ body: this.state.body + `giphy:${giphy}` });
    $("#message-input").focus();
  }

  removeGiphy () {
    this.state.body.split(" ").forEach((word, idx) => {
      if (word.startsWith('giphy:')) {
        const newBody = this.state.body.split(" ");
        newBody.splice(idx, 1);
        this.state.body = newBody.join(" ");
      }
    });
  }

  parseGifUrl (body) {
    let posted = false;
    body.split(" ").forEach((word, idx) => {
      if (word === "/giphy" && idx === 0) {
        posted = true;
        const searchTerm = body.split(" ").slice(1, body.length).join(" ");
        let giphy;
        fetchSingleGiphy(searchTerm)
          .then(res => {
            giphy = res.data[0].images.fixed_height.url;
            this.state.gif_url = giphy;
            this.state.body = "";
            this.props.requestPostMessage(this.state);
            this.state.gif_url = "";
          });
      }
      if (word.startsWith('giphy:')) {
        this.state.gif_url = word.slice(6, word.length);
        const newBody = this.state.body.split(" ");
        newBody.splice(idx, 1);
        this.state.body = newBody.join(" ");
      }
    });
    if (!posted) {
      this.props.requestPostMessage(this.state);
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    this.parseGifUrl(this.state.body);

    this.setState({ body: "", channel_id: this.props.params.channelId, gif_url: "" });
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.setState({ body: "", channel_id: nextProps.params.channelId });
    }
  }

  footerId () {
    const sidebarOpen = this.props.router.location.pathname.endsWith('details');
    if (sidebarOpen) {
      return "footer-small";
    } else {
      return "footer";
    }
  }

  render () {
    const giphySearch = (
      <GiphySearchContainer giphysOpen={this.state.giphysOpen}
                          addGiphy={this.addGiphy}
                          toggleGiphysSearch={this.toggleGiphysSearch}/>
                      );

    const emojiPicker = (
      <MyEmojiInput emojisOpen={this.state.emojisOpen}
                    addEmoji={this.addEmoji}
                    toggleEmojiPicker={this.toggleEmojiPicker}/>
                );

    return (
        <div id={ this.footerId() }>
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
            { this.state.emojisOpen ? emojiPicker : ""}
          </form>
          { this.state.giphysOpen ? giphySearch : ""}
        </div>
    );
  }
}

export default withRouter(Footer);
