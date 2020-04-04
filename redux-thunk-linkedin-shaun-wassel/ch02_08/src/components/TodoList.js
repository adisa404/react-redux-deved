import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem.js';
import NewTodoForm from './NewTodoForm.js';
import { removeTodo, markAsCompleted } from '../actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => {
  console.log('todos', todos);
  return (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
        />
      ))}
    </div>
  );
};
const mapStateToProps = state => ({
  todos: state.todos
});
const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletePressed: todo => dispatch(markAsCompleted(todo))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
