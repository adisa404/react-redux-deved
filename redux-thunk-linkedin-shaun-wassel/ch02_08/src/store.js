import { createStore, combineReducers } from 'redux';

// define all reducers here
const reducers = {};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
