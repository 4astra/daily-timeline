import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise'
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        promiseMiddleware, //Put Promise Middleware to fix `Actions must be plain objects. Use custom middleware for async actions`
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;