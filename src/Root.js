import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';

const listMiddlewares = [promiseMiddleware];
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
