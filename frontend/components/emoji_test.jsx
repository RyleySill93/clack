import React from 'react';
import EmojiPicker from 'react-emoji-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';

// styles for the emoji picker wrapper
let emojiPickerStyles = {
  position: 'absolute',
  right: '30px',
  bottom: '70px',
  backgroundColor: 'white',
  width: '344px',
  height: '270px',
  padding: '.3em .6em',
  border: '1px solid silver',
  zIndex: '2',
  borderRadius: '5px'
};

class MyEmojiInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = { emoji: null, emojisOpen: false };
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.setEmoji = this.setEmoji.bind(this);
    this.emojiPicker = this.emojiPicker.bind(this);
  }


  componentWillReceiveProps (nextProps) {
    if (nextProps.emojisOpen !== this.props.emojisOpen) {
      this.setState({ emojisOpen: nextProps.emojisOpen });
    }
  }

  toggleEmojiPicker (e) {
    if(this.state.emoji.contains(e.target)) {
      this.setState({emojisOpen: true});
    } else {
      setTimeout(this.validateEmoji, 10);
      this.setState({emojisOpen: false});
    }
  }

  setEmoji (emoji) {

    if (this.props.addEmojiToReactions) {
      this.props.addEmojiToReactions(emoji);
    } else if (this.props.addEmoji) {
      this.props.addEmoji(emoji);
    }
    this.setState({ emojisOpen: false });
  }

  emojiPicker () {
    if(this.state.emojisOpen) {
      return (
        <EmojiPicker
          style={emojiPickerStyles} onSelect={this.setEmoji}
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
