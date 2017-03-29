import { RECEIVE_LOADING_STATE } from '../actions/loading_actions';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_LOADING_STATE:
      return action.loadingState;
    default:
      return state;
  }
};

export default loadingReducer;
