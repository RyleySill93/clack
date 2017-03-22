import { fetchSearchGiphys } from '../util/giphy_api_util';
export const RECEIVE_ALL_GIPHYS = 'RECEIVE_ALL_GIPHYS';

export const requestSearchGiphys = (searchTerm) => (dispatch) => (
  fetchSearchGiphys(searchTerm)
    .then(giphys => dispatch(receiveGiphys(giphys)))
);

export const receiveGiphys = (giphys) => ({
  type: RECEIVE_ALL_GIPHYS,
  giphys
});
