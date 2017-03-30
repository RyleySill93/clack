import { connect } from 'react-redux';
import RightSidebar from './right_sidebar';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  loading: state.loading
});

export default connect (mapStateToProps, null)(RightSidebar);
