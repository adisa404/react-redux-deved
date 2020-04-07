import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure
} from './actions';

export const displayAlert = () => () => {
  alert('hello');
};

export const displayAlertWithText = text => () => {
  alert(`You clicked on: ${text}`);
};

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());

    // fetch from server async
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();

    //..
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlertWithText(e));
  }
};
