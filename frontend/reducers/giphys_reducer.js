import { RECEIVE_ALL_GIPHYS } from '../actions/giphy_actions';

const GiphysReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_GIPHYS:
      return action.giphys;
    default:
      return state;
  }
};

export default GiphysReducer;
