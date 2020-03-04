import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLoggedIn = useSelector(state => state.isLoggedInReducer);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter from state {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLoggedIn && <span>Hidden Information</span>}
    </div>
  );
}

export default App;
