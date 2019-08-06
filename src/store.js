import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cardReducer from './reducers/cardReducer';

const reducer = cardReducer;

const store = createStore(reducer, applyMiddleware(thunk));

export default store;