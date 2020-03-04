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
