import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const add = createAction('contacts/Add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const remove = createAction('contacts/Remove');
export const changeFilter = createAction('contacts/changeFilter');
