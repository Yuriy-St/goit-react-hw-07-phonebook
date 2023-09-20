import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'service/mockAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await mockAPI.fetchAllContacts();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await mockAPI.addContact(contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const data = await mockAPI.deleteContact(id);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e?.message || e);
    }
  }
);
