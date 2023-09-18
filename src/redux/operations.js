import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'service/mockAPI';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const data = await mockAPI.fetchContacts();
  return data;
});
