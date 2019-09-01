import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cardReducer from './reducers/cardReducer';

const reducer = combineReducers({
    cardReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;