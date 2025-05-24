import React, { useCallback, useState } from "react";

const initialGlobalState = {
  todos: []
};

// Create a Context for the (global) State
export const GlobalStateContext = React.createContext();

export const GlobalStateProvider = function ({ children }) {
  const [state, setState] = useState(initialGlobalState ?? {});

  const setGlobalState = useCallback(
    (data = {}) => {
      const newState = { ...state };

      Object.keys(data).forEach((key) => {
        newState[key] = data[key];
      });

      setState(newState);
    },
    [state, setState]
  );

  // Expose setGlobalState via context for direct updates
  const getTodos = useCallback(() => {
    return state.todos || [];
  }, [state.todos]);

  const getTodo = useCallback((id) => {
    return state.todos.find(todo => todo.id === id);
  }, [state.todos]);

  const contextValue = {
    ...state,
    setGlobalState,
    getTodos,
    getTodo,
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);

// Helper function for validation
const validateTodoText = (text) => {
  if (typeof text !== "string") return false;
  if (text.length < 1 || text.length > 100) return false;
  if (!/.+/.test(text)) return false;
  return true;
};

// TODO Helper Functions - CRUD Operations
// These functions now receive setGlobalState from the component that calls them
// This allows them to update the global state without being hooks themselves
export const addTodo = (text, currentTodos = [], setGlobalState) => {
  const trimmed = text.trim();
  if (!validateTodoText(trimmed)) {
    console.warn("Invalid todo text");
    return null;
  }

  const newTodo = {
    id: Date.now(),
    text: trimmed,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const newTodos = [...currentTodos, newTodo];
  
  setGlobalState({
    todos: newTodos
  });
  
  return newTodo;
};

export const toggleTodo = (id, currentTodos = [], setGlobalState) => {
  const updatedTodos = currentTodos.map(todo =>
    todo.id === id 
      ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
      : todo
  );
  
  setGlobalState({
    todos: updatedTodos
  });
  
  return updatedTodos.find(todo => todo.id === id);
};

export const deleteTodo = (id, currentTodos = [], setGlobalState) => {
  const updatedTodos = currentTodos.filter(todo => todo.id !== id);
  
  setGlobalState({
    todos: updatedTodos
  });
  
  return updatedTodos;
};

export const editTodo = (id, newText, currentTodos = [], setGlobalState) => {
  const trimmed = newText.trim();
  if (!validateTodoText(trimmed)) {
    console.warn("Invalid todo text");
    return null;
  }

  const updatedTodos = currentTodos.map(todo =>
    todo.id === id 
      ? { ...todo, text: trimmed, updatedAt: new Date().toISOString() }
      : todo
  );
  
  setGlobalState({
    todos: updatedTodos
  });
  
  return updatedTodos.find(todo => todo.id === id);
};
