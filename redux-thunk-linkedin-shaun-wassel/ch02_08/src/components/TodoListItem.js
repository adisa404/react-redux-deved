import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletePressed, onDisplayAlertClicked }) => {
  console.log('render');
  return (
    <div className='todo-item-container'>
      <h3>{todo.text}</h3>
      <div className='buttons-container'>
        {todo.isCompleted ? null : (
          <button
            className='completed-button'
            onClick={() => {
              onCompletePressed(todo.id);
            }}
          >
            Mark as completed {todo.isCompleted}
          </button>
        )}
        <button
          className='remove-button'
          onClick={() => {
            onRemovePressed(todo.id);
          }}
        >
          Remove
        </button>

        <button
          className='remove-button'
          onClick={() => {
            onDisplayAlertClicked('button');
          }}
        >
          Test Basic Thunk
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
