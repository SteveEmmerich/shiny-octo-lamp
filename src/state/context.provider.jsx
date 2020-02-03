import React, { createContext, useContext } from 'react';

import { reducers, initialState } from './reducers';
import { useReducerWithLogger } from './utils';

// Create a context to track state, and one for dispatch
const TractStateContext = createContext();
const TractDispatchContext = createContext();

// Tract provider will give our components state
const TractProvider = ({ children }) => {
  // Fuax redux
  const [state, dispatch] = useReducerWithLogger(reducers, initialState);

  // Wrap anything in our providers
  return (
    <TractStateContext.Provider value={state}>
      <TractDispatchContext.Provider value={dispatch}>
        {children}
      </TractDispatchContext.Provider>
    </TractStateContext.Provider>
  );
};

// Custom hook for state
const useTractState = () => {
  // Make sure we have the context
  const context = useContext(TractStateContext);

  if (context === undefined) {
    throw new Error(`useTractState must be wrapped in a TractProvider`);
  }

  return context;
};
// Custom hook for dispatch
const useTractDispatch = () => {
  // Make sure we have the context
  const context = useContext(TractDispatchContext);

  if (context === undefined) {
    throw new Error(`useTractDispatch must be wrapped in a TractProvider`);
  }

  return context;
};

// Wrap both our custom hooks in a third
// Some components might need both
const useTract = () => {
  return [useTractState(), useTractDispatch()];
};

// HOC to wrap a component in the provider
const withProvider = WrappedComponent => {
  return () => (
    <TractProvider>
      <WrappedComponent />
    </TractProvider>
  );
};
export {
  withProvider,
  TractProvider,
  useTractState,
  useTractDispatch,
  useTract,
};
