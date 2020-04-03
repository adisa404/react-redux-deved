// action type
export const CREATE_TODO = 'CREATE_TODO';

// action creator
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: text
});
