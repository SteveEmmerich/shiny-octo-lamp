import { createAction } from './utils';

// Mineral Intrest actions
const [ADD_MI_TYPE, add_mi] = createAction('ADD_MI');
const [UPDATE_MI_TYPE, update_mi] = createAction('UPDATE_MI');
const [DELETE_MI_TYPE, delete_mi] = createAction('DELETE_MI');

// NPRI actions
const [ADD_NPRI_TYPE, add_npri] = createAction('ADD_NRPI');
const [UPDATE_NPRI_TYPE, update_npri] = createAction('UPDATE_NPRI');
const [DELETE_NPRI_TYPE, delete_npri] = createAction('DELETE_NPRI');

// Repalces state if needed
const [SET_STATE_TYPE, set_state] = createAction('SET_STATE');

export {
  SET_STATE_TYPE,
  ADD_MI_TYPE,
  UPDATE_MI_TYPE,
  DELETE_MI_TYPE,
  ADD_NPRI_TYPE,
  UPDATE_NPRI_TYPE,
  DELETE_NPRI_TYPE,
  set_state,
  add_mi,
  update_mi,
  delete_mi,
  add_npri,
  update_npri,
  delete_npri,
};
