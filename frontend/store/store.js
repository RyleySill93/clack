import rootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//add preloaded state later
const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
