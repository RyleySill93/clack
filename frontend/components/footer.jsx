import React from 'react';
import { withRouter } from 'react-router';

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

  handleSubmit (e) {
    e.preventDefault();
    this.setState({ body: "", author_id: 1, channel_id: this.props.params.channelId });
    this.props.requestPostMessage(this.state);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.setState({ body: "", author_id: 1, channel_id: nextProps.params.channelId });
    }
  }

  render () {
    return (
      <div id="footer">
        <form id="message-input-holder" onSubmit={this.handleSubmit}>
          <input id="message-input"
                 onChange={this.handleChange}
                 type="text"
                 value={this.state.body}
                 placeholder="Message #2017-01-23-sf" />
          <input id="hidden" type="submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(Footer);
