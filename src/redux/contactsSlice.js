import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
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
  extraReducers: {
    [fetchContacts.pending](state) {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
