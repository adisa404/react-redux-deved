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
const incremenet = () => {
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
  //
};
// DISPATCH - executes the action

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
