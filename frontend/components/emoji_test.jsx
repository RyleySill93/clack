import React from 'react';
import EmojiPicker from 'react-emoji-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';
import EnhanceWithClickOutside from 'react-click-outside';

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
    this.state = { emoji: null, emojisOpen: this.props.emojisOpen };
    this.setEmoji = this.setEmoji.bind(this);
    this.emojiPicker = this.emojiPicker.bind(this);
  }


  componentWillReceiveProps (nextProps) {
    if (nextProps.emojisOpen !== this.props.emojisOpen) {
      this.setState({ emojisOpen: nextProps.emojisOpen });
    }
  }

  setEmoji (emoji) {
    if (this.props.addEmojiToReactions) {
      this.props.addEmojiToReactions(emoji);
    } else if (this.props.addEmoji) {
      this.props.addEmoji(emoji);
    }
    this.props.toggleEmojiPicker();
  }

  emojiPicker () {
    console.log('hi');
    if(this.state.emojisOpen) {
      return (
        <EmojiPicker
          style={emojiPickerStyles} onSelect={this.setEmoji}
        />
      );
    }
  }

  handleClickOutside () {
    console.log('handling click outside');
    this.props.toggleEmojiPicker();
  }

  render () {
    return (
      <p ref="emoji">
        { this.emojiPicker() }
      </p>
    );
  }
}

// export default (MyEmojiInput);
export default EnhanceWithClickOutside(MyEmojiInput);
