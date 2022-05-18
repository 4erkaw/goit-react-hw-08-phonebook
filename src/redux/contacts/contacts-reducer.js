import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { add, remove, changeFilter } from './contacts-actions';

const itemsReducer = createReducer([], {
  [add]: (state, { payload }) => [payload, ...state],
  [remove]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
