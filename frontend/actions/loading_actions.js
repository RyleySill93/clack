export const RECEIVE_LOADING_STATE = 'RECEIVE_LOADING_STATE';

export const receiveLoadingState = (loadingState) => ({
  type: RECEIVE_LOADING_STATE,
  loadingState
});
