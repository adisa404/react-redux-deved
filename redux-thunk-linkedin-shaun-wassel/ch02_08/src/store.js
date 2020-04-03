import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';

// define all reducers here
const reducers = { todos };

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
