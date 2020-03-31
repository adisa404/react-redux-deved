import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  BOOK_STATUS_UPDATED
} from '../constants/ActionTypes';

import classicBooks from '../constants/books';

const initialState = {
  books: classicBooks,
  completedBooks: 0
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case BOOK_STATUS_UPDATED:
      return {
        ...state,
        books: state.books.map(book => {
          return book.id === action.id
            ? { ...book, completed: !book.completed }
            : book;
        })
      };
    default:
      return state;
  }
}
