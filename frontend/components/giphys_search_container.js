import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { requestSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = (state, ownProps) => ({
  giphys: state.giphys.data || [],
  giphysOpen: ownProps.giphysOpen
});

const mapDispatchToProps = dispatch => {
  return { fetchSearchGiphys: (searchTerm) => dispatch(requestSearchGiphys(searchTerm)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);
