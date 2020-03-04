This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

inde reducers/index.js we combine reducers into one bcs the store can only except one reducer

```js
import counterReducer from './counter';
import isLoggedInReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLoggedInReducer
});
```

### use from store

```jsx
const counter = useSelector(state => state.counterReducer);
const isLoggedIn = useSelector(state => state.isLoggedInReducer);
return (
  <div className='App'>
    <h1>Counter from state {counter}</h1>
    <button>+</button>
    <button>-</button>
    {isLoggedIn && <span>Hidden Information</span>}
  </div>
);
```

### update state with actions

```js
// example with input
export const increment = num => {
  return {
    type: 'INCREMENT',
    payload: num
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};
```

### dispatch with actions

```js
import { increment, decrement } from './actions';

<button onClick={() => dispatch(increment(5))}>+</button>
<button onClick={() => dispatch(decrement())}>-</button>
```
