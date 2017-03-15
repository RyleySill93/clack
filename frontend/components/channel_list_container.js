import { connect } from 'react-redux';
import values from 'lodash/values';
import ChannelList from './channel_list';
import { requestGetChannels } from '../actions/channel_actions';

const mapStateToProps = (state) => {
  const channels = state.channels || {};
  return { channels: values(channels) };
};

const mapDispatchToProps = (dispatch) => ({
  requestGetChannels: () => dispatch(requestGetChannels())
});

export default connect (mapStateToProps, mapDispatchToProps)(ChannelList);
