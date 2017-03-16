import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => ({
  currentChannel: state.currentChannel,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect (mapStateToProps, null)(Header);
