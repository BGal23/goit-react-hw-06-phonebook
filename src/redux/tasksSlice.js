import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  //   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  //   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  //   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const tasksSlice = createSlice({
  name: 'contact',
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addContact, removeContact } = tasksSlice.actions;
