import React from 'react';
import TodoListItem from './TodoListItem.js';
import NewTodoForm from './NewTodoForm.js';
import './TodoList.css';

const TodoList = ({ todos = [{ id: 1, text: 'hello' }] }) => {
  console.log('todos', todos);
  return (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
