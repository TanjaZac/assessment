import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import './TodoPage.css';

const TodoPage = () => {
  return (
    <div className="todo-page">
      <div className="todo-page-header">
        <h1>TODO List</h1>
        <p>Manage your tasks efficiently</p>
      </div>
      <div className="todo-page-content">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
