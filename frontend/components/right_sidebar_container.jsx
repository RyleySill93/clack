import { connect } from 'react-redux';
import RightSidebar from './right_sidebar';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  currentChannelMembers: state.currentChannel.members || []
});

export default connect (mapStateToProps, null)(RightSidebar);
