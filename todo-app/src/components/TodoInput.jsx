import React, { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { addTodo } from '../context/GlobalState';
import './TodoInput.css';

const TodoInput = () => {
  const { todos = [], setGlobalState } = useGlobalState();
  const [inputText, setInputText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!inputText.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Add the new todo
      addTodo(inputText, todos, setGlobalState);
      
      // Clear the input
      setInputText('');
    } catch (error) {
      console.error('Error adding todo:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="todo-input">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit} className="todo-input-form">
        <div className="input-group">
          <input
            type="text"
            id="todo-input-field"
            name="todo-input-field"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
            className="todo-input-field"
            disabled={isSubmitting}
            autoFocus
          />
          <button 
            type="submit" 
            disabled={!inputText.trim() || isSubmitting}
            className="add-btn"
          >
            {isSubmitting ? 'Adding...' : 'Add Task'}
          </button>
        </div>
        <small className="input-hint">
          Press Enter to add a task quickly
        </small>
      </form>
    </div>
  );
};

export default TodoInput;
