import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markAsCompleted,
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

export const addTodo = text => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text });

    const response = await fetch('http://localhost:8080/todos', {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlertWithText(error));
  }
};

export const removeTodoRequest = id => async (dispatch, getState) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete',
    });
    const todo = await response.json();
    dispatch(removeTodo(todo));
  } catch (error) {
    dispatch(displayAlertWithText(e));
  }
};

export const updateTodoRequest = id => async (dispatch, getState) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
    });

    const todo = await response.json();
    dispatch(markAsCompleted(todo));
  } catch (error) {
    dispatch(displayAlertWithText(error));
  }
};
