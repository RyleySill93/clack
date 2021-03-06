import React from 'react';
import Sidebar from './sidebar';
import Main from './main';
import { connect } from 'react-redux';
import { requestCurrentChannel } from '../actions/current_channel_actions';
import LoadingScreen from './loading_screen';


class Client extends React.Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.params.channelId !== this.props.params.channelId) {
      this.props.requestCurrentChannel(nextProps.params.channelId);
    }
  }

  componentWillMount () {
    this.props.requestCurrentChannel(this.props.channelId);
  }

  render () {
    return (
      <div id="client">
        <Sidebar />
        <Main />
        { this.props.loading === 'client' ? <LoadingScreen /> : "" }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  channelId: ownProps.params.channelId,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  requestCurrentChannel: (channelId) => dispatch(requestCurrentChannel(channelId))
});

export default connect (mapStateToProps, mapDispatchToProps)(Client);
