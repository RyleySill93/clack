import { connect } from 'react-redux';
import TeamHeader from './team_header';
import { requestLogout } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestLogout: () => dispatch(requestLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamHeader);
