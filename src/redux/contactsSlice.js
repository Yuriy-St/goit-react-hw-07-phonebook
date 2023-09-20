import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact, deleteContact } from './operations';
import { STATUS } from './constants';

const handlePending = state => {
  state.status = STATUS.pending;
};

const handleRejected = (state, action) => {
  state.status = STATUS.failed;
  state.error = action.payload;
};

const initialState = {
  items: [],
  status: STATUS.idle,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, handlePending)
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.status = STATUS.complete;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = STATUS.complete;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = STATUS.complete;
        state.error = null;
        const idx = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(idx, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
