import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => ({
  channelTitle: state.currentChannel.title
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect (mapStateToProps, null)(Header);
