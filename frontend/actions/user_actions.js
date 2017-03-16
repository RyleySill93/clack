import { getUsers } from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

//thunk actions - database facing
export const requestGetUsers = () => (dispatch) => (
  getUsers()
    .then(users => dispatch(receiveAllUsers(users)))
);

//actions - state facing
export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});
