import React, { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { toggleTodo, deleteTodo, editTodo } from '../context/GlobalState';
import './TodoList.css';

const TodoList = () => {
  const { setGlobalState, getTodos } = useGlobalState();
  const currentTodos = getTodos(); // Получаем актуальный список todos
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Handle toggle completion
  const handleToggle = (id) => {
    toggleTodo(id, currentTodos, setGlobalState);
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTodo(id, currentTodos, setGlobalState);
    }
  };

  // Handle start editing
  const handleEditStart = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Handle save edit
  const handleEditSave = (id) => {
    if (editText.trim()) {
      editTodo(id, editText, currentTodos, setGlobalState);
      setEditingId(null);
      setEditText('');
    }
  };

  // Handle cancel edit
  const handleEditCancel = () => {
    setEditingId(null);
    setEditText('');
  };

  // Empty state handling
  if (currentTodos.length === 0) {
    return (
      <div className="todo-list-empty">
        <p>No todos yet! Add your first task to get started.</p>
      </div>
    );
  }

  // List rendering logic
  return (
    <div className="todo-list">
      <h2>Your Tasks</h2>
      <ul className="todo-items">
        {currentTodos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-content">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
                className="todo-checkbox"
              />
              
              {editingId === todo.id ? (
                <div className="todo-edit">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleEditSave(todo.id);
                      if (e.key === 'Escape') handleEditCancel();
                    }}
                    className="todo-edit-input"
                    autoFocus
                  />
                  <button onClick={() => handleEditSave(todo.id)} className="save-btn">
                    Save
                  </button>
                  <button onClick={handleEditCancel} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span className="todo-text">{todo.text}</span>
                  <div className="todo-actions">
                    <button
                      onClick={() => handleEditStart(todo)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="todo-meta">
              <small>Created: {new Date(todo.createdAt).toLocaleDateString()}</small>
              {todo.updatedAt !== todo.createdAt && (
                <small>Updated: {new Date(todo.updatedAt).toLocaleDateString()}</small>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="todo-summary">
        <p>Total: {currentTodos.length} tasks | Completed: {currentTodos.filter(t => t.completed).length}</p>
      </div>
    </div>
  );
};

export default TodoList;
