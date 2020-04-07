import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from './actions';

// todos - is going to be in store!!
export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return state.concat(todo);
    }

    case REMOVE_TODO: {
      const { id } = payload.todo;
      return state.filter(todo => todo.id !== id);
    }

    case MARK_AS_COMPLETED: {
      // const { text } = payload;
      // return state.map(todo => {
      //   if (todo.text === text) {
      //     return { ...todo, isCompleted: true };
      //   }
      //   return todo;
      // });

      // my solution
      const { todo } = payload;
      const newState = [...state];
      const index = newState.indexOf(todo);
      newState[index].isCompleted = true;
      console.log('state todos', newState);
      debugger;
      return newState;
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }

    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  const { type } = action;
  console.log('action', action);
  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_SUCCESS:
    case LOAD_TODOS_FAILURE:
      return false;

    default:
      return state;
  }
};
