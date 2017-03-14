import { connect } from 'react-redux';
import TeamHeader from './team_header';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser.username
});

export default connect(mapStateToProps, null)(TeamHeader);
