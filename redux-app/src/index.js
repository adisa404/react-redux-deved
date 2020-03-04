import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// STORE - GLOBALIZED STATE
// holds all data for our application

// ACTION - ex. 'Increment' - os only a describtion of a process
// - an action is afunction that returnes an object
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

// REDUCER - describes how our Actions transform state into the next state
const counter = (state = 0, action) => {
  // use switch to do different stuff based on the action name
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter);
// display store on the console
store.subscribe(() => console.log('STORE', store.getState()));

// DISPATCH - executes the action
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
