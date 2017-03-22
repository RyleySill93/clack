import React from 'react';
import EmojiPicker from 'react-emoji-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';

// styles for the emoji picker wrapper
let emojiPickerStyles = {
  position: 'absolute',
  left: 0, top: '3.9rem',
  backgroundColor: 'white',
  width: '200px',
  padding: '.3em .6em',
  border: '1px solid #0074d9',
  borderTop: 'none',
  zIndex: '2'
};

class MyEmojiInput extends React.Component {
  constructor () {
    super();
    this.state = { emoji: null, showEmojiPicker: true };
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.validateEmoji = this.validateEmoji.bind(this);
    this.updateState = this.updateState.bind(this);
    this.setEmoji = this.setEmoji.bind(this);
    this.emojiPicker = this.emojiPicker.bind(this);
  }

  componentDidMount () {
    document.addEventListener('click', this.toggleEmojiPicker, false);
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.toggleEmojiPicker, false);
  }

  toggleEmojiPicker (e) {
    if(this.state.emoji.contains(e.target)) {
      this.setState({showEmojiPicker: true});
    } else {
      setTimeout(this.validateEmoji, 10);
      this.setState({showEmojiPicker: false});
    }
  }

  validateEmoji () {
    let matched = emojiMap.filter(function(emoji) {
      return `:${emoji.name}:` === this.state.emoji;
    });

    if(matched.length === 0) {
      this.setState({emoji: null});
    }
  }

  updateState (e) {
    this.setState({emoji: e.target.value});
  }

  setEmoji (emoji) {
    this.setState({emoji: emoji});
  }

  // allows selecting first emoji by pressing "Enter" without submitting form
  grabKeyPress (e) {
    if(e.keyCode === 13) {
      e.preventDefault();
    }
  }

  emojiPicker () {
    if(this.state.showEmojiPicker) {
      return (
        <EmojiPicker
          style={emojiPickerStyles} onSelect={this.setEmoji}
          query={this.state.emoji}
        />
      );
    }
  }

  render () {
    return (
      <p ref="emoji">
        { this.emojiPicker() }
      </p>
    );
  }
}

export default MyEmojiInput;
