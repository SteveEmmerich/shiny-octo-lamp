import { useRef, useReducer, useMemo, useEffect } from 'react';

// Helper for creating reducers
const createReducer = (initialState, handlers) => {
  return (state, action) => {
    // Inline if :(
    if (state === undefined) state = initialState;

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

// Helper for creating actions.
const createAction = actionType => {
  return [
    actionType,
    payload => {
      return {
        type: actionType,
        payload,
      };
    },
  ];
};

// Wraps our errors in a message and exception
const errorLogger = (msg, handleThrow = true) => {
  console.error(msg);
  if (handleThrow) {
    throw new Error(msg);
  }
};

// HOC/Meta reducer for action logger
const withLogger = dispatch => {
  return action => {
    console.groupCollapsed(`Action Dispatched:`, action.type);
    console.log('Action Payload: ', action.payload);
    return dispatch(action);
  };
};

// Wrapped reducer with a logger and new dispatch function
const useReducerWithLogger = (...args) => {
  const { initialState } = args;
  let preState = useRef(initialState);
  const [state, dispatch] = useReducer(...args);
  const dispatchWithLogger = useMemo(() => {
    return withLogger(dispatch);
  }, [dispatch]);

  // Log every time the state changes
  useEffect(() => {
    if (state !== initialState) {
      console.log(`Previous State:`, preState.current);
      console.log(`Next State:`, state);
      console.groupEnd();
    }
    preState.current = state;
  }, [initialState, state]);

  return [state, dispatchWithLogger];
};

export { createAction, createReducer, errorLogger, useReducerWithLogger };
