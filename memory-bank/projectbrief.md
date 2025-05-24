React provides an easy way to implement state management within a component using the useState hook. However as applications grow larger a global state solution that easily shares state across multiple components becomes increasingly useful. There are popular packages that implement a GlobalState for your React applications. We have written our own simple implementation of a GlobalState in the attached fi le. It makes using state across React components easy, and allows for using the state even outside of React components.
We would like to ask you to make a TODO list app which: ● Technical; ○ is based on the Proof-of-Concept attached (incl. Context & Hooks); ○ which allows a user to add, edit, check and delete items from the list; ○ where all items are stored in GlobalState (they don't need to persist after a refresh); ● UI; ○ optionally making use of a component library (for example Material-UI); ○ with a design after your own heart; ○ the app contains multiple pages; ○ one of these pages is the TODO list; ○ contents of the other pages are not important (lorem ipsum); ○ Please make sure it is mobile friendly.
This assignment may take anywhere from 3 to 12 hours, depending on your prior experience with React, without investing signifi cant time in the 'design after your own heart'.
Please don't hesitate to make use of all means which are available to you, including us, to bring this assignment to a proper end! Track how much time you took for the assignment. Also mention if and how you used AI.

import React, { useEffect, useCallback, useState } from "react";

const initialGlobalState = {
  count: 0
};

// Create a Context for the (global) State
export const GlobalState = React.createContext();

export const GlobalStateProvider = function ({ children }) {
  const [state, setState] = useState(initialGlobalState ?? {});

  const setGlobalState = useCallback(
    (data = {}) => {
      const newState = { ...state };

      // Loop over the data items by key, only updating those which have changed
      Object.keys(data).forEach((key) => {
        newState[key] = data[key];
      });

      // Update the state with the new State
      setState(newState);
    },
    [state, setState]
  );

  useEffect(() => {
    GlobalState.set = setGlobalState;
  }, [setGlobalState]);

  return (
    // Pass the current value of GlobalState, based on this components' State, down
    <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
  );
};

// Create a shorthand Hook for using the GlobalState
export const useGlobalState = () => React.useContext(GlobalState);

// Expose the GlobalState object to the window (allowing GlobalState.set({ count: 'new' }) from anywhere in the code (even your console))
window.GlobalState = GlobalState;


// Example usage below

// Create an example component which both renders and modifies the GlobalState
function SomeComponent() {
  const { count } = useGlobalState();

  // Create a function which mutates GlobalState
  function incrementCount() {
    GlobalState.set({
      count: count + 1
    });
  }

  return <div onClick={incrementCount}>{count}</div>;
}

export default function App() {
  return (
    <GlobalStateProvider>
      <SomeComponent />
    </GlobalStateProvider>
  );
}
