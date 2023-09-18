import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice';
import { filterReducer } from 'redux/filterSlice';
import { contactsApi } from './contactsApi';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
