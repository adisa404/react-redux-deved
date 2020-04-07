import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem.js';
import NewTodoForm from './NewTodoForm.js';
import { removeTodo, markAsCompleted } from '../actions';
import { displayAlertWithText, loadTodos } from '../thunks';
import './TodoList.css';

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  onDisplayAlertClicked,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  console.log('todos', todos);
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
          onDisplayAlertClicked={onDisplayAlertClicked}
        />
      ))}
    </div>
  );
  return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading,
});
const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletePressed: todo => dispatch(markAsCompleted(todo)),
  onDisplayAlertClicked: text => dispatch(displayAlertWithText(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
