import { createReducer } from './utils.js';
import uuidv4 from 'uuid';
import * as Actions from './actions';

const initialState = [];

// Build our reducers
const reducers = createReducer(initialState, {
  [Actions.ADD_MI_TYPE]: (state, action) => {
    // Very simple add one to new array
    return [...state, { id: uuidv4(), ...action.payload }];
  },

  [Actions.UPDATE_MI_TYPE]: (state, action) => {
    // First find the MI to update,
    // We are assuming that the array will never change order
    const { id, changes } = action.payload;

    // Option: get index in the array and replace it

    // Loop through and update the wanted minernal interest
    return state.map(mi => {
      if (mi.id === id) {
        return { ...mi, ...changes };
      }
      return mi;
    });
  },
  [Actions.SET_STATE_TYPE]: (_, action) => {
    return action.payload;
  },
  [Actions.DELETE_MI_TYPE]: (state, action) => {
    const id = action.payload;
    // Filter returns a new array
    const newState = state.filter(mi => mi.id !== id);
    return newState;
  },

  [Actions.ADD_NPRI_TYPE]: (state, action) => {
    const { id, data } = action.payload;
    return state.map(mi => {
      if (mi.id === id) {
        mi.npris.push({
          id: uuidv4(),
          ...data,
        });
      }
      return mi;
    });
  },

  [Actions.UPDATE_NPRI_TYPE]: (state, action) => {
    const { miId, id, changes } = action.payload;

    return state.map(mi => {
      if (mi.id === miId) {
        const idx = mi.npris.findIndex(npri => npri.id === id);
        if (idx !== -1) {
          const newNPRI = { ...mi.npris[idx], ...changes };

          mi.npris[idx] = newNPRI;
        }
      }
      return mi;
    });
  },
  [Actions.DELETE_NPRI_TYPE]: (state, action) => {
    const { miId, id } = action.payload;

    const newState = state.map(mi => {
      if (mi.id === miId) {
        mi.npris = mi.npris.filter(npri => npri.id !== id);
      }
      return mi;
    });
    return newState;
  },
});

export { reducers, initialState };
