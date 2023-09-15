import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => ({
        ...state,
        items: [...state.items, payload],
      }),
      prepare: ({ name, number }) => ({
        payload: {
          id: nanoid(),
          name,
          number,
        },
      }),
    },
    deleteContact: {
      reducer: (state, { payload }) => ({
        ...state,
        items: state.items.filter(contact => contact.id !== payload.id),
      }),
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
