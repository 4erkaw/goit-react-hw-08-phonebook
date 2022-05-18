import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { add, remove, changeFilter } from './contacts-actions';
import { get, save, contactKey } from '../../services/localStorage';

const itemsReducer = createReducer(get(contactKey) ?? [], {
  [add]: (state, { payload }) => {
    save(contactKey, [payload, ...state]);
    return [payload, ...state];
  },
  [remove]: (state, { payload }) => {
    const filtered = state.filter(({ id }) => id !== payload);
    save(contactKey, filtered);
    return filtered;
  },
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
