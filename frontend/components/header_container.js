import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect (mapStateToProps, null)(Header);
