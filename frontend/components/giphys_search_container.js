import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { requestSearchGiphys } from '../actions/giphy_actions';
import { receiveLoadingState } from '../actions/loading_actions';

const mapStateToProps = (state, ownProps) => ({
  giphys: state.giphys.data || [],
  giphysOpen: ownProps.giphysOpen,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchSearchGiphys: (searchTerm) => dispatch(requestSearchGiphys(searchTerm)),
  receiveLoadingState: (loadingState) => dispatch(receiveLoadingState('giphys'))
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);
