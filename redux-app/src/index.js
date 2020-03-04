import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// STORE - GLOBALIZED STATE
// holds all data for our application

// ACTION - ex. 'Increment'

// REDUCER - describes how our Actions transform state into the next state

// DISPATCH - executes the action
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
