import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectContactsStatus = state => state.contacts.status;
export const selectContactsError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;

    const filterNormalized = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalized)
    );
  }
);
