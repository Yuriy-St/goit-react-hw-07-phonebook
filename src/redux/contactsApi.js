import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6500134018c34dee0cd4441e.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Posts'],
    }),
    getContactById: builder.query({
      query: id => `/contacts/${id}`,
    }),
    addContact: builder.mutation({
      query: body => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    deleteContactById: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useDeleteContactByIdMutation,
} = contactsApi;
