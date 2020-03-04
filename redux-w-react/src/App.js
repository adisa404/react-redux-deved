import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector(state => state.counterReducer);
  return (
    <div className='App'>
      <h1>Counter from state {counter}</h1>
    </div>
  );
}

export default App;
