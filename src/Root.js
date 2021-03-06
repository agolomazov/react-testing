import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import asyncMiddleware from './middlewares/async';
import stateValidator from './middlewares/stateValidator';

const listMiddlewares = [asyncMiddleware, stateValidator];
const middlewares = applyMiddleware(...listMiddlewares);
let storeMiddleware = null;

if (process.env.NODE_ENV === 'development') {
	storeMiddleware = composeWithDevTools(middlewares);
} else {
	storeMiddleware = middlewares;
}

export default ({ children, initialState = {} }) => {
	return <Provider store={createStore(rootReducer, initialState, storeMiddleware)}>{children}</Provider>;
};
